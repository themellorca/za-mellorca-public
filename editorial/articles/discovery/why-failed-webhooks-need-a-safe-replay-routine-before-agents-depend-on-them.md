---
hub: discovery
record_id: DISC-285
slug: why-failed-webhooks-need-a-safe-replay-routine-before-agents-depend-on-them
title: Webhook failures are not replayed safely
description: When a webhook is missed, a person re-sends it from a dashboard and hopes nothing is applied twice. How to store events, recognise repeats, reconcile daily and replay with confidence.
lead: When a webhook is missed, a person re-sends it from a dashboard and hopes nothing is applied twice. How to store events, recognise repeats, reconcile daily and replay with confidence.
category: Integration & API Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Operations head or integration owner, with finance reviewing money-moving events
budget_owner: Financial director or managing director
sources:
  - Handling failed webhook deliveries - GitHub Docs | https://docs.github.com/en/webhooks/using-webhooks/handling-failed-webhook-deliveries
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
  - Idempotent requests - Stripe API Reference | https://docs.stripe.com/api/idempotent_requests
related:
  - Why Integration Failures Should Not Route to Personal Inboxes | /discovery/why-integration-failures-should-not-route-to-personal-inboxes/
  - When teams consume events without knowing their delivery guarantees | /discovery/event-consumers-do-not-know-the-delivery-guarantees/
  - Why API Rate Limits Create Intermittent Business Failures | /discovery/why-api-rate-limits-create-intermittent-business-failures/
summary: When a webhook is missed, a person re-sends it from a dashboard and hopes nothing is applied twice. How to store events, recognise repeats, reconcile daily and replay with confidence.
layout: plain
---
A customer pays an invoice online. The payment provider sends a message to the company's system to say so, and that message is the only thing that tells the accounting package to mark the invoice as paid and tells the warehouse it can release the goods. On the Tuesday the company's server was being updated, the message arrived, found nothing listening and was dropped. Nobody noticed until the customer phoned on Friday to ask where the order was. When the team went looking, they could resend the message by hand, but they could not tell which of the previous four days' messages had also been lost.

This article is about that operating condition: webhook failures that are not replayed safely. It matters more as businesses add automated agents and workflows that react to these messages without a person looking at each one.

## The problem in plain language

A webhook is a message that one system sends to another when something happens: a payment clears, an order ships, a ticket is closed, a contract is signed. The sender does not wait around. It makes an attempt to deliver, and depending on the product it either retries a limited number of times or gives up. If your receiving system was down, slow or returned an error, the event can simply be gone.

Replaying means asking for the missed events again. That hides two questions. Which events were missed? And if you process an event a second time, does anything happen twice? A business that can answer neither is guessing, usually with someone's admin access and a spreadsheet.

## What the buyer is actually trying to solve

The person searching for this problem wants to stop discovering missed events from angry customers, and to know that recovery will not create a second problem: a duplicate shipment, a double credit note, a repeated message.

## Evidence and system mechanism

### Delivery is not guaranteed to be repeated for you

Platforms differ, and that difference is the root of the problem. GitHub's documentation on [handling failed webhook deliveries](https://docs.github.com/en/webhooks/using-webhooks/handling-failed-webhook-deliveries) states plainly that it does not automatically redeliver failed deliveries, and that a delivery can fail simply because the receiving server is down or takes longer than ten seconds to respond. It describes two options, redelivering manually or writing a script that fetches recent deliveries, finds the failed ones and asks for them again. Other providers retry for you for a time and then stop. The lesson for a business is that there is no universal safety net. You have to read the rules of each sender you depend on and write down what happens after the last attempt.

### Receivers have to be quick and tolerant of repeats

Stripe's guidance on [receiving webhook events](https://docs.stripe.com/webhooks) tells developers that an endpoint must return a success status quickly, before doing any complex work, and that duplicate deliveries are possible, so the receiver should track event identifiers to recognise events it has already handled. Read together, these rules describe the safe pattern: acknowledge fast, record the event, process it separately, and make processing safe to repeat.

### Safe repeats depend on a unique key

The same idea applies when your own systems call out. Stripe's explanation of [idempotent requests](https://docs.stripe.com/api/idempotent_requests) describes sending a unique key with a request so that a repeat of the same request returns the original result instead of performing the operation again. That is the technical form of the business rule: every action triggered by an event should be traceable to one event, so that doing it twice has the same outcome as doing it once.

### Warning signs

- Missing events are discovered by customers or by month-end reconciliation, not by an alert.
- The recovery routine is a person re-sending things from a vendor's dashboard.
- Nobody can say whether re-sending last week's events would create duplicates.

## Problem owner and why-now trigger

The owner is usually the operations head or the person responsible for the integration layer, whether that is an internal developer, an IT manager or an external integration partner. The budget owner is the financial director or managing director, because the loss shows up as write-offs, credits and reconciliation hours rather than as an IT cost.

The trigger today is often an AI agent or workflow rollout. Agents and automations react to events: a new order, a status change, a customer reply. When people did the follow-up by hand, a missed message was often caught informally. When an agent reacts, a missed or repeated event goes straight into customer-visible actions, as described in [why AI agents cannot complete work across business systems](/discovery/why-ai-agents-cannot-complete-work-across-business-systems/).

## Economic consequence

The direct cost is staff time. If a missed batch takes a finance clerk and a developer half a day to identify and fix, and it happens once a month, that is about twelve working days of two people a year, quite apart from the cost of the original error. At a developer rate of R650 an hour and a clerk rate of R280, that is over R44,000 a year before any customer credit. The figures are illustrative. The indirect cost is larger: goods shipped late, refunds issued twice and customers who have to chase.

## Root cause

- **No record of what should have arrived.** The receiving system logs what it got, not what the sender intended to send, so gaps are invisible. This is the pattern behind [failed integration messages that sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).
- **Processing is not safe to repeat.** The receiver acts on every message it sees, so replaying is risky. The wider pattern is covered in [retry logic that creates duplicate transactions at the receiving end](/discovery/retry-logic-creates-duplicate-transactions-at-the-receiving-end/).
- **Replay is a manual favour.** It depends on the one person who knows the dashboard.
- **No owner for the connection.** When it breaks, it is nobody's job to say whether it has been fixed.

## Practical intervention

1. **List your inbound webhooks.** For each, note the sender, the event types, what business action each triggers and who is affected if it is lost.
2. **Write down each sender's failure rules.** Does it retry, for how long, and can you ask for events again? Put the answer next to the entry.
3. **Acknowledge first, process second.** Ask your developer or vendor to store the event and return a success response immediately, then process from the stored record.
4. **Record event identifiers.** Keep a table of events already handled. Before acting, check it. If the event is already there, do nothing and log the repeat.
5. **Reconcile on a schedule.** Once a day, compare the sender's list of events or objects for the period with what you recorded, and alert on any gap.
6. **Write a replay routine and test it.** A one-page procedure that says who may replay, how, and how to confirm nothing was applied twice. Run it once on test data before you need it.
7. **Name an owner.** Someone whose job includes the daily reconciliation result, in line with [designing retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

### Trade-offs

Storing and de-duplicating events adds a small build and a table to look after. Daily reconciliation can raise false alarms when the sender is slow, so allow a grace window. For low-value events it is reasonable to accept a loss, as a documented decision rather than an accident.

### An illustrative example

Illustrative: a Cape Town online homeware retailer received payment confirmations from its payment provider and used them to release orders to a third-party warehouse. A weekend maintenance window on its web server meant a day of confirmations was never processed. The team added event storage, a rule to skip any event identifier already handled, and a morning check that compared the provider's list of paid orders with released orders. The next outage showed as a gap on the morning check, and the missed events were replayed without shipping anything twice.

## Diagnostic questions

- Which three inbound events would hurt most if they were lost for a day?
- For each sender, do you know what happens after its final attempt?
- If you replayed last Tuesday's events tonight, what would happen twice?

## What good looks like

Every important inbound event is stored on arrival and acknowledged immediately. Processing recognises events it has already handled. A daily check compares what the sender says happened with what the business recorded, and a gap produces an alert to a named person. Replay is a documented, tested routine that creates no duplicates.

## Where Mellorca fits

Mellorca helps South African businesses map the integrations that carry money and customer commitments, work out where events can be lost or repeated, and set up the ownership, monitoring and replay routines that keep them dependable. The wider view is in [APIs, webhooks and integrations: what business leaders need to know](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/).

## Method note

The sources describe how two widely used platforms treat failed and repeated deliveries and how idempotency keys work. They do not measure how often events are lost in South African businesses. The rand figures and the retailer are illustrative, not a client case.
