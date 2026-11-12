---
hub: insights
record_id: INS-067
slug: how-to-handle-failed-integrations-without-losing-the-work-in-flight
title: How to Handle Failed Integrations Without Losing Work
description: Every integration fails eventually. What matters is whether the order, invoice or customer update that was in flight is held safely, visible to a named person and recoverable without retyping.
lead: Every integration fails eventually. What matters is whether the order, invoice or customer update that was in flight is held safely, visible to a named person and recoverable without retyping.
category: Systems Integration
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Systems Integration
sources:
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - Service Bus Dead-Letter Queues - Azure Service Bus | https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues
  - Compensating Transaction Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction
  - Handle Workflow Errors and Exceptions - Azure Logic Apps | https://learn.microsoft.com/en-us/azure/logic-apps/error-exception-handling
related:
  - How to Integrate a New Platform Into an Existing Business | /insights/how-to-integrate-a-new-platform-into-an-existing-business/
  - How to Design Integrations for Change, Not Just for Launch | /insights/how-to-design-integrations-that-survive-supplier-and-business-change/
  - How Integration Errors Turn Into Customer Problems | /insights/from-rejected-message-to-unhappy-customer-how-integration-errors-reach-customers/
summary: Every integration fails eventually. What matters is whether the order, invoice or customer update that was in flight is held safely, visible to a named person and recoverable without retyping.
layout: plain
---
On the Tuesday after a long weekend, a Durban distributor discovers that sixty-three web orders never reached its stock system. The connection between the two had been rejecting messages since Friday afternoon, after a routine update to the stock system changed a field name. Nobody was alerted. The orders were not lost in the sense of being deleted; they were simply sitting in a place no one was looking, while customers waited and assumed the business had ignored them.

No integration is immune to this. Networks drop, suppliers change their interfaces, a service is throttled or taken offline, a record arrives with a missing value. The useful question is not whether a connection will fail but what happens to the work that was in flight when it did. This article describes how to design for that moment so that a failure costs minutes of delay rather than days of reconstruction.

## Separate the failures that fix themselves from those that do not

The first design decision is to treat two kinds of failure differently. Microsoft's guidance on the retry pattern describes transient faults: a momentary loss of connectivity, a service that is briefly unavailable, a timeout because the receiver is busy. These are typically self-correcting, and repeating the action after a suitable delay is likely to succeed. The same guidance is equally clear about the other case. If the fault indicates the failure is not transient, or is unlikely to succeed if repeated, the right strategy is to cancel the operation and report it as an exception.

In practice this means a failed integration should do three different things depending on what went wrong.

- **Brief outage on the other side:** wait and try again automatically, with a growing delay between attempts so a struggling system is not hammered.
- **Bad data in the message:** do not retry. Retrying a record with a missing customer number will fail the same way every time. Park it for a person to correct.
- **Prolonged outage or changed interface:** stop sending, hold everything that arrives in the meantime, and raise an alert.

A common weakness is a single blanket rule such as "retry five times then give up". Retrying a rejected record five times wastes effort, and giving up silently after a four-hour outage discards perfectly good work.

## Give failed work somewhere safe to wait

The most important principle is that a message which cannot be processed must be kept, not dropped. Microsoft's documentation on dead-letter queues describes the idea well: a secondary holding area for messages that cannot be delivered to any receiver or could not be processed. Messages can then be inspected, and an application might let a user correct the problem and resubmit the message. The documentation also notes that there is no automatic cleanup. Messages stay in that holding area until someone deliberately retrieves and completes them.

That last point cuts both ways. It protects the work, but it also means a holding area can quietly fill up. A business that has built one without a routine for emptying it has only moved the problem. The related discovery on [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/) describes exactly this pattern.

You do not need enterprise messaging software to apply the idea. A failed-items table in the receiving system, a dedicated folder of rejected files, or a shared queue sheet with one row per failed item all serve the same purpose, provided three things are true:

1. Every failed item is stored with its full original content, so nothing has to be re-requested from the sender.
2. Every item records what failed, when, and the error message in plain words.
3. Someone is responsible for looking at the list at a stated time each working day.

## Make the failure visible to a person, not an inbox

A failure that is logged but not announced is almost as bad as one that is not logged. Alerts should reach a role, not an individual's mailbox, because that individual will be on leave or will have left. The reasoning is set out in [why integration failures should not route to personal inboxes](/discovery/why-integration-failures-should-not-route-to-personal-inboxes/), and the practical alert design is covered in [how to design alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/).

Alert on the business consequence as well as the technical error. "Connection refused" means little to a branch manager. "14 orders have not reached the warehouse in the last two hours" tells the right person what to do. It is also worth alerting on silence. If a connection normally carries fifty messages a morning and carries none, something is wrong even though no error was raised, a theme developed in [why a quiet workflow is not proof it worked](/insights/why-a-quiet-workflow-is-not-proof-it-worked/).

## Plan the recovery before you need it

Recovery has two parts: getting held work moving again, and cleaning up where an operation was only partly completed.

For the first part, the replay step must be safe. If an order was processed by the receiver just before the connection dropped, replaying it may create a duplicate. Identify each message with a unique reference, such as the order number, and make the receiving side check whether that reference has already been handled. Without this, a recovery effort can double-bill customers or double-book stock.

For the second part, consider a process that runs in several steps: create the customer, reserve the stock, raise the invoice. If the third step fails, the first two have already happened. Microsoft's description of the compensating transaction pattern addresses this: where steps span separate systems you cannot simply roll everything back, so you define in advance how to undo each completed step, and apply those reversals in reverse order if something later fails. For a small business, the compensating action may be as simple as a written instruction: "if the invoice step fails, release the stock reservation and flag the order for a person". What matters is that it is decided in advance, not improvised at 17:30 on a Friday.

## Keep a manual route alive

Load-shedding, a failed fibre line or a supplier's system outage can interrupt connections for hours. A business that depends entirely on automated flows needs a documented fallback: what staff do with orders while the connection is down, where they record them, and how they are entered later without duplication. This does not need to be elaborate. A single page, kept where staff can find it without the systems that are down, is enough. The wider case for a failure route is made in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

## Respect personal information in the holding area

Failed messages often contain names, contact details, addresses and payment references. Under the Protection of Personal Information Act, that information needs the same safeguards in a failed-items list as it does in the live system. Restrict who can see the list, avoid copying failed records into email threads or personal spreadsheets, and decide how long unresolved items may be kept. A holding area that nobody owns tends to become an unsecured archive of customer data.

## A short readiness check

For each integration that matters, ask the following and write the answers down.

- If it stopped now, where would incoming work wait?
- Who would be told, how quickly, and in what words?
- Which failures retry automatically, and which go to a person?
- How do we replay held items without creating duplicates?
- What happens to a process that failed halfway?
- What do staff do in the meantime?
- When did we last test any of this?

Testing deserves a special mention. The simplest test is to switch a connection off in a safe environment, send a handful of realistic items, and watch what happens.

## An illustrative example

The following is a hypothetical case. A Cape Town company that sells office furniture sends confirmed web orders into its accounting package. After a software update, a field is renamed and every order is rejected. In the original design, the rejected orders vanish into a log file. In the redesigned version, rejected orders are saved whole to a failed-items sheet, and a message goes to the shared operations channel within fifteen minutes: "9 orders rejected, reason: unknown field". The operations coordinator sees it at the next check, the developer corrects the mapping, and the coordinator replays the nine orders. Because each carries its order number and the accounting package refuses duplicates, nothing is entered twice. The delay is under two hours. The customers never know.

## The point

Failure handling is not an extra feature to add later. It is part of what an integration is. Decide which failures retry and which go to a person, give held work a safe and visible home, make recovery replayable without duplicates, and keep a manual route for the day everything is down. The effort is modest, and it is the difference between a brief delay and a week of rebuilding orders from email.
