---
hub: patterns
record_id: PAT-033
slug: when-work-goes-missing-in-the-gap-between-two-systems
title: When Work Goes Missing in the Gap Between Two Systems
description: An order leaves the website but never reaches the warehouse system; a job is closed in one tool but never invoiced in another. When handoffs between systems have no owner and no failure path, work disappears quietly until a customer notices.
lead: An order leaves the website but never reaches the warehouse system; a job is closed in one tool but never invoiced in another. When handoffs between systems have no owner and no failure path, work disappears quietly until a customer notices.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Orders, jobs, payments or requests leave one system and are expected to appear in another, but some never arrive, and the gap is discovered only when a customer, supplier or month-end reconciliation exposes it.
primary_identification: Unowned system-to-system handoffs with no failure path, so items that fail in transit are held, dropped or retried out of sight of the business.
commercial_value_dimensions: Revenue, cash flow, customer experience, risk and staff capacity
sources:
  - Dead Letter Channel - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/DeadLetterChannel.html
  - Service Bus Dead-Letter Queues - Azure Service Bus | https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues
  - Webhooks | https://woocommerce.com/document/webhooks/
related:
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - Why Staff Keep a Spreadsheet Between Two Business Systems | /patterns/why-staff-keep-a-spreadsheet-between-two-business-systems/
  - When Disconnected Systems Let the Business Act on Old Information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
summary: An order leaves the website but never reaches the warehouse system; a job is closed in one tool but never invoiced in another. When handoffs between systems have no owner and no failure path, work disappears quietly until a customer notices.
layout: plain
---
## Observable condition

A customer phones to ask where their order is. The order is in the online shop, paid and confirmed. It is not in the warehouse system, so nothing has been picked. Nobody can say why. Someone re-captures it by hand, apologises, and the day moves on.

A week later, the accounts team notices that a handful of completed service jobs were never invoiced. The jobs were closed in the job-management app, which is supposed to create a draft invoice in the accounting system. For most jobs it does. For these few, it did not, and there was no message to say so.

Each time, the business treats the incident as a one-off glitch. The connection between the two systems is assumed to work, because most of the time it does. What nobody can answer is how many items have gone missing in the gap without anyone noticing.

An illustrative example: a Durban-based distributor with around forty staff ran its online orders through a web shop connected to its stock and dispatch system. When the stock system was briefly offline for an update, the connection kept failing to deliver new orders. After repeated failures the web shop stopped trying. Orders continued to arrive on the website, and the dispatch team, seeing a quiet queue, assumed it was a slow day. The gap was found two days later when customers began asking for tracking numbers.

## Realisation

Connecting two systems does not remove the handoff between them. It moves the handoff from a person to a piece of software, and it changes what failure looks like. When a person drops a handoff, someone usually remembers asking. When a connection drops one, there is often nothing to remember: no email, no task, no unanswered question.

Integration platforms are built with this in mind. The Enterprise Integration Patterns catalogue describes a *dead letter channel*: a place where a messaging system moves messages it cannot deliver, so they are not lost. Microsoft's documentation for Azure Service Bus explains that its dead-letter queue holds messages that could not be delivered or processed, and that there is no automatic clean-up; messages stay there until someone retrieves and deals with them. WooCommerce documents that a webhook which fails to deliver more than five times in a row is disabled.

These are sensible engineering choices. But each one assumes that someone in the business is watching the place where failed work ends up. In many small and mid-sized businesses, nobody is.

**Realisation prompt:** if a connection between two of your systems stopped working this morning, how would you find out, and how long would it take?

## Identification

This is a pattern of unowned system handoffs: points where work passes from one system to another automatically, without a named owner, a confirmation that the work arrived, or a route for items that did not. The visible symptom is work that appears to vanish. The common assumption is that the connection is either working or broken. The structural cause is that the handoff has a success path but no designed failure path.

It is related to [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/), where people carry data between systems by hand. Here, the integration exists, which is precisely why nobody is looking at it.

## Diagnosis

- **Nobody owns the space between the systems.** The web team owns the shop, operations owns the stock system, and the connection belongs to whoever set it up. When an item fails between them, each side can reasonably say the problem is on the other side.
- **Success is assumed rather than confirmed.** The sending system records that it sent something. The receiving system records what it received. Nothing compares the two, so a difference goes unnoticed.
- **Failures are recorded where nobody looks.** Error logs, retry queues and dead-letter queues exist, but they sit inside an admin screen or a developer tool, not in front of the people who run the process.
- **Partial failure is invisible.** A connection that processes most items correctly looks healthy. One malformed address, an unexpected product code or a missing tax number can cause single items to fail while the rest flow normally.
- **Recovery is improvised.** When a gap is found, someone re-keys the missing items. The underlying failure is rarely traced, so it recurs.

## Commercial impact

The commercial value at stake is revenue, cash flow, customer experience and risk.

Orders that never reach fulfilment are delayed or lost, and the customer usually discovers the problem first. Jobs that never become invoices are unbilled work, and the longer the gap goes unnoticed, the harder it is to bill with confidence. Payments that do not reach the accounting system create reconciliation work and, in some cases, incorrect statements or follow-ups to customers who have already paid.

There is also a capacity cost. Every gap triggers an investigation that crosses teams and systems, and because the cause is rarely recorded, the same investigation is repeated. The Insight on [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/) describes the same mechanism in human handoffs; between systems, it is quieter and harder to spot.

## Common misidentification

These gaps are often blamed on the receiving team ("dispatch missed it") or on the software vendor ("the integration is unreliable"). Sometimes a vendor change is part of the cause. More often, the connection behaved exactly as designed: it tried, failed, set the item aside and waited for someone to act. The missing piece is not a better connector but an agreed answer to who acts, and how they know.

Replacing the integration tool without designing the failure path tends to reproduce the problem with new screens.

## Possibility

In a better state, every important handoff between systems has three things: an owner, a check that what left one system arrived in the other, and a visible route for anything that failed. Failed items appear where the people running the process will see them, with enough detail to fix and resubmit them. A simple daily count, such as orders placed online against orders received for dispatch, confirms that the numbers match.

For the distributor, that meant an alert to the dispatch supervisor when the web shop's connection was disabled, and a daily comparison of order counts between the two systems.

## Intervention

1. **List the handoffs.** Write down every point where work moves automatically from one system to another: orders, jobs, invoices, payments, leads, stock movements.
2. **Name an owner for each.** One person who is responsible for knowing whether the handoff is working, even if a supplier maintains the technical connection.
3. **Add a completion check.** Compare what was sent with what arrived, at least daily for high-value flows. A count is often enough to start.
4. **Find where failures go.** For each connection, find out what happens to an item that fails: retry, error log, dead-letter queue, disabled webhook. Route that signal to the owner.
5. **Design the recovery.** Agree how a failed item is corrected and resubmitted, rather than re-keyed, so the original record and its history are kept.
6. **Record causes.** Note why each failure happened. Repeated causes, such as missing data in a particular field, point to fixes upstream.

The Insight on [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) covers the design of that route in more detail, and [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/) covers ownership.

## Practical diagnostic questions

- Which of your processes depend on work passing automatically from one system to another?
- For each, who would notice first if it stopped: a staff member, a report or a customer?
- Do you know where items that fail to transfer are held, and does anyone check?
- When did you last compare the number of items sent with the number received?
- When a gap is found, is the cause recorded, or is the work simply re-captured?

## Bottom line

Connecting systems moves a handoff from people to software, but it does not remove the need for someone to own it. When handoffs between systems have no owner, no completion check and no visible failure route, work goes missing quietly and customers find out first. Making each important handoff owned, confirmed and recoverable turns silent loss into a short, routine check.
