---
hub: discovery
record_id: DISC-282
slug: retry-logic-creates-duplicate-transactions-at-the-receiving-end
title: Why retry logic creates duplicate transactions at the receiving end
description: Webhooks, queues and partner APIs deliver the same message more than once by design. If the receiver cannot spot a repeat, one payment becomes two.
lead: Webhooks, queues and partner APIs deliver the same message more than once by design. When the receiving system cannot recognise a repeat, one payment or order becomes two.
category: Integration & API Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Integration Lead / Head of IT
budget_owner: CIO / CFO
sources:
  - Amazon SQS at-least-once delivery - Amazon Simple Queue Service | https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
  - Best practices for using webhooks - GitHub Docs | https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks
  - Azure Service Bus duplicate message detection - Azure Service Bus | https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection
related:
  - Why teams cannot trace one business transaction across several systems | /discovery/teams-cannot-trace-a-business-transaction-across-systems/
  - Message schemas evolve without version control | /discovery/message-schemas-evolve-without-version-control/
  - Why API rate limits create intermittent business failures | /discovery/why-api-rate-limits-create-intermittent-business-failures/
  - Webhook failures are not replayed safely | /discovery/why-failed-webhooks-need-a-safe-replay-routine-before-agents-depend-on-them/
summary: Webhooks, queues and partner APIs deliver the same message more than once by design. When the receiving system cannot recognise a repeat, one payment or order becomes two.
layout: plain
---
A customer pays once, but the accounting system shows two receipts. A marketplace sends one order, but the warehouse picks it twice. A payment provider confirms a refund, and the customer is credited twice. Nobody pressed a button twice. Somewhere between two systems, a message was delivered again, and the system receiving it treated the repeat as new business.

Most writing on duplicate transactions looks at the sending side: the automation or integration that retries a request after a timeout. That side matters, and we cover it in [automation retries that create duplicate customer or financial actions](/discovery/automation-retries-create-duplicate-customer-or-financial-actions/). This article looks at the other end of the connection. As a business takes in more webhooks, queue messages and partner API calls, the receiving system has to assume that the same message will sometimes arrive more than once, and it has to be built to cope.

## The problem in plain language

Integrations between systems are usually designed so that messages are not lost. The price of "not lost" is "sometimes repeated". If the sender is not sure the receiver got a message, it sends it again. If the receiver crashed halfway through handling a message, the message is handed out again. Both are sensible reliability choices. The trouble begins when the receiving system turns every arriving message straight into a payment, an invoice, a stock movement or a customer record, with no check for whether it has seen that message before.

The visible symptoms are duplicate receipts, double stock deductions, repeated confirmation emails and reconciliation differences that finance has to explain. The less visible symptom is the time staff spend finding and reversing duplicates, often days after the event.

## What you are actually trying to solve

People who find that retries create duplicate transactions, that a webhook was received twice or that an integration made duplicate payments usually want two things. In the short term they want the duplicates to stop. In the longer term they want confidence that adding more integrations, more channels and more volume will not multiply the problem. The second need is the commercially important one, because the urge to fix it usually comes with growth in API traffic.

## Evidence and system mechanism

Repeated delivery is documented behaviour, not a rare fault. Amazon's documentation on [at-least-once delivery in SQS standard queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html) explains that, because copies of messages are stored on several servers, a message copy may occasionally be received again. It tells developers to design applications to be idempotent: processing the same message more than once must not cause harm.

Webhook providers say the same. Stripe's [webhook documentation](https://docs.stripe.com/webhooks) states that endpoints might occasionally receive the same event more than once. It recommends logging the event IDs already processed and skipping any that have been seen. Stripe also retries failed deliveries in live mode for up to three days. It does not guarantee that events arrive in the order they were created, and it advises against using timestamps to decide whether an event has already been handled. GitHub's [webhook best practices](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks) require a 2XX response within ten seconds. Otherwise GitHub treats the delivery as failed. Its unique delivery header stays the same when a delivery is manually resent, which gives the receiver a stable value to check against.

Some messaging platforms can take on part of the job. Microsoft's documentation on [Service Bus duplicate detection](https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection) describes a sender that fails after sending, or never receives the acknowledgement, and so sends the message again. With duplicate detection switched on, the queue drops any message whose ID it has already seen within a set time window. That window defaults to ten minutes and can be set as long as seven days. The guidance makes a practical point: the message ID should be tied to the business process, such as a purchase order number plus the message subject, so that a resent message carries the same ID. A random identifier created on every attempt defeats the purpose.

### How a slow response becomes a second payment

*Illustrative example, not a client case.* A South African online retailer receives payment confirmations from its payment provider by webhook. The receiving code checks the payment, creates a receipt in accounting, marks the order paid and sends the customer an email, all before replying. During a month-end spike the accounting API slows down, the reply takes longer than the provider allows, and the provider records the delivery as failed. It sends the event again. The receiving code does all four steps a second time. Accounting now holds two receipts, the customer has two emails, and the bank reconciliation will not balance.

## Problem owner and why now

The receiving side is usually owned by whoever built or maintains the integration: an in-house developer, an integration lead or an implementation partner. The budget for fixing it typically sits with the IT or finance leader whose reconciliation is affected. The trigger is growth. More webhook sources, a new marketplace channel, more payment methods or a move from nightly files to real-time APIs each multiply the chances that a message arrives twice. A rule that was never needed at fifty transactions a day becomes essential at five thousand.

## Economic consequence

The direct cost is the work of finding and reversing duplicates: credit notes, refund handling, stock corrections and customer explanations. The indirect costs are harder to see. Finance stops trusting integrated data and starts checking it by hand. Customer service handles complaints about double charges. Management reports overstate sales or stock until someone corrects them. Where a duplicate payment leaves the business, as with a double refund or a double supplier payment, getting the money back can take far longer than the error took to create. Measure the cost from your own records: duplicate corrections per month, hours spent and value reversed.

## Root cause

- **No stable identity for each business event.** The receiver has nothing reliable to compare against, so every arrival looks new.
- **Side effects happen before the reply.** Slow processing inside the request causes timeouts, which cause redeliveries.
- **Each step acts on its own.** Receipt, stock and email are separate actions, so one redelivery can partly repeat a half-finished job.
- **Ordering is assumed.** Code that expects events in sequence misreads late or repeated ones.
- **Nobody owns the contract.** Neither side has written down what happens when a message arrives twice.

## Practical intervention

1. **Record what has been processed.** Store the event ID or delivery ID of every message handled, and check it before acting. Where the provider may create two separate events for one business fact, also check the underlying business key, such as payment reference plus event type.
2. **Acknowledge fast, process separately.** Accept and store the message, reply quickly, then process it from an internal queue. Both Stripe and GitHub recommend this pattern.
3. **Make each action check before it creates.** Before creating a receipt, ask whether a receipt already exists for this payment reference. Use unique constraints in the receiving database where possible.
4. **Use platform duplicate detection where it fits,** with message IDs built from business references, but do not rely on it alone: its time window is limited.
5. **Handle events out of order** by checking current state rather than assuming sequence.
6. **Alert on duplicates caught.** A rising count of rejected repeats is an early warning that a sender or network path is unstable.

Safe receiving is half of the design. The sending half is covered in [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/). Failed messages that never get processed at all are a related risk, discussed in [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).

## Trade-offs

Storing processed IDs takes storage and a retention rule. Keep them at least as long as the sender's retry period, which can be days. Acknowledging before processing means the business must watch the internal queue, or accepted messages could stall unseen. Strict uniqueness rules occasionally reject a legitimate second transaction, such as two genuine payments of the same amount, so the key must be the event's identity, not its amount or date.

## Diagnostic questions

- For each inbound integration, what identifier proves that two arrivals are the same event?
- Do your receiving endpoints reply before or after doing the business work?
- If the same payment confirmation arrived twice an hour apart, what would happen?
- How many duplicate corrections did finance or operations make last month, and where did they start?
- How long do senders retry, and how long do you remember what you have processed?

## What good looks like

Every inbound message has a stable identity tied to a business reference. Receivers record what they have processed, reply quickly and do the work from a monitored internal queue. A repeated message is recognised, logged and ignored, and the duplicate count appears on an operational dashboard. Finance can reconcile integrated transactions without a hunt for doubles.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work includes reviewing inbound integrations for duplicate handling, defining message identity and building receive-then-process patterns. A [digital systems audit](/services/digital-systems-audit/) can trace where existing duplicate corrections begin.

*Method note:* platform behaviour described here comes from the vendors' current public documentation; retry periods and limits change, so confirm them for the services you use.
