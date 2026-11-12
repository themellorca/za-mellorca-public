---
hub: patterns
record_id: PAT-038
slug: when-the-next-step-waits-for-someone-to-check-another-system
title: When the Next Step Waits for Someone to Check Another System
description: Dispatch waits until someone checks the bank for payment. Production waits until someone checks whether materials have arrived. When a process only moves after a person looks in another system for a status change, the business runs at the speed of that person's checking.
lead: Dispatch waits until someone checks the bank for payment. Production waits until someone checks whether materials have arrived. When a process only moves after a person looks in another system for a status change, the business runs at the speed of that person's checking.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: A step in a process cannot start until a staff member logs into another system to see whether a payment, delivery, approval or update has happened, and the work waits until they get round to checking.
primary_identification: Manual status polling, where people repeatedly check one system for changes that another step depends on because the systems do not notify each other of events.
commercial_value_dimensions: Speed, cash flow, capacity, customer experience and scalability
sources:
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
  - About webhooks | https://shopify.dev/docs/apps/build/webhooks
  - Webhooks | https://woocommerce.com/document/webhooks/
related:
  - When Automation Stops at the Edge of Each System | /patterns/when-automation-stops-at-the-edge-of-each-system/
  - Why Staff Keep a Spreadsheet Between Two Business Systems | /patterns/why-staff-keep-a-spreadsheet-between-two-business-systems/
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
summary: Dispatch waits until someone checks the bank for payment. Production waits until someone checks whether materials have arrived. When a process only moves after a person looks in another system for a status change, the business runs at the speed of that person's checking.
layout: plain
---
## Observable condition

An order comes in from a new customer on payment terms of cash before delivery. The goods are ready, but they cannot leave until someone confirms the payment has cleared. So, a few times a day, someone in accounts logs into online banking, scans the list of incoming payments, matches references by eye and messages the warehouse with the orders that can go.

Elsewhere in the same business, a production job is waiting for materials. The buyer checks the supplier's portal each morning to see whether the delivery has been dispatched, and the receiving clerk checks the stock system to see whether it has been booked in. The production planner checks with both of them before scheduling the job.

Nothing is broken. Everyone is doing their job. But the work only moves when someone looks, and each step waits for the next round of checking.

An illustrative example: a Pretoria-based supplier of medical consumables with about twenty-five staff found that its same-day dispatch promise was regularly missed for prepaid orders. Payments landed in the bank account within minutes, but were checked only at ten, one and three o'clock. An order paid at 13:05 waited until 15:00 to be released, after the last courier collection.

## Realisation

When people check a system to see whether something has changed, they are doing what software engineers call polling: asking repeatedly, at intervals, "has anything happened yet?" Polling has two costs. It consumes the time of whoever does the asking, and it adds delay equal, on average, to half the interval between checks.

Many business platforms are built to avoid this. Shopify's developer documentation describes webhooks as a way of receiving near-real-time data about events in a shop, rather than repeatedly calling its interface to check for changes. Stripe's documentation explains that webhook events let a business respond to things that happen asynchronously, such as a customer's bank confirming a payment, and sets out how to handle retries and duplicate deliveries. WooCommerce offers webhooks for events such as orders being created or updated.

In other words, the system that holds the status can often announce the change. In many businesses, nobody has asked it to, so a person listens instead.

**Realisation prompt:** how many times a day do people in your business log into one system purely to see whether something has changed?

## Identification

This is a pattern of manual status polling: process steps that depend on a status change in another system and can only start once a person has checked for it. The visible symptom is work waiting, and staff repeatedly checking portals, inboxes and screens. The common assumption is that checking is just part of the job. The structural cause is that the systems involved do not notify each other, or the people involved, when the event that matters actually happens.

It differs from [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/), which looks at answering questions about status. Here the status is not a question someone asks; it is a gate the process cannot pass without.

## Diagnosis

- **The event happens in one system and matters in another.** Payment in the bank or payment gateway, dispatch in a supplier portal, approval in an email. The dependent step lives elsewhere.
- **Notification exists but is not used.** The platform holding the status can often send a notification or trigger an action, but this has not been set up.
- **Matching needs judgement.** Even when a person sees the change, they must work out which order, job or customer it relates to, because references are inconsistent.
- **Checking is scheduled around people, not events.** Checks happen when someone has time, at fixed points in the day, or not at all when that person is away.
- **Nobody measures the wait.** The time between the event and the next step starting is not tracked, so the delay is invisible.

## Commercial impact

The commercial value at stake is speed, cash flow, capacity and customer experience.

Every gate that waits for a check adds delay, and the delays compound across a process with several of them. Customers who have paid wait for goods. Jobs wait for materials that have already arrived. Same-day and next-day promises are missed for reasons the customer cannot see. Cash flow slows where invoicing or release depends on a status someone has not yet checked.

Checking also consumes capacity, often of experienced staff, and it does not scale: more orders mean more checking. When the person who checks is on leave, the gate may simply stay closed. The Insight on [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/) describes the same dynamic between colleagues.

## Common misidentification

The delay is usually blamed on the person who checks ("accounts are slow to release orders") or treated as a staffing problem. Adding more frequent checks reduces the delay a little and increases the labour cost.

Another common belief is that connecting the systems would require custom development. Often the platforms already provide the notification; it simply has not been switched on or routed anywhere useful. The Pattern on [when APIs exist but the business still works manually](/patterns/when-apis-exist-but-the-business-still-works-manually/) explores this gap.

## Possibility

In a better state, the event that matters triggers the next step. A confirmed payment marks the order as released for dispatch and notifies the warehouse. A supplier dispatch notice updates the expected arrival date on the production job. A booked-in delivery moves the job into the schedule. People deal with exceptions, such as payments that cannot be matched, rather than checking for normal events.

For the consumables supplier, that meant using the payment provider's notifications to release paid orders immediately, with unmatched payments sent to a short exception list.

## Intervention

1. **Find the gates.** List the points in your key processes where work waits for a status in another system: payments, deliveries, approvals, documents.
2. **Measure the wait.** For a sample, note when the event happened and when the next step started.
3. **Check what the source system offers.** Find out whether the system holding the status supports notifications, webhooks or automated rules.
4. **Fix the matching.** Make sure the event carries a reliable reference, such as an order number, so it can be linked automatically.
5. **Trigger, then notify.** Where possible, let the event change the status of the dependent work directly; at minimum, notify the person who acts next.
6. **Handle exceptions and failures.** Route unmatched or failed events to a named person, and check that notifications are still being delivered.

The Insight on [APIs, webhooks and integrations](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/) explains the options in non-technical terms.

## Practical diagnostic questions

- Which steps in your processes wait for someone to check another system?
- How long, on average, between an event happening and the next step starting?
- Do the systems holding those statuses offer notifications you are not using?
- What happens to the gate when the person who checks is away?
- Could staff spend that checking time on exceptions instead?

## Bottom line

When a process only moves after someone checks another system, it runs at the speed of that person's routine. Many platforms can already announce the events that matter. Turning those announcements into triggers removes waiting time, frees capacity and leaves people to handle the exceptions that genuinely need judgement.
