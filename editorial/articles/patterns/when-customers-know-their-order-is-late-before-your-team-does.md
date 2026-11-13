---
hub: patterns
record_id: PAT-402
slug: when-customers-know-their-order-is-late-before-your-team-does
title: When customers know their order is late before your team does
description: If customers are first to notice a missed delivery date, the business cannot compare promises with progress. Learn how to detect late orders first.
lead: If customers are the first to notice a missed delivery date, the business has no way of comparing its promises with its progress. Here is why late orders stay invisible internally, and how to detect them first.
category: Orders, Fulfilment & Logistics
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Orders, Fulfilment & Logistics
pattern_family: Orders, Fulfilment & Logistics
observable_condition: Customers contact the business to say their order has not arrived on the promised date, and this is the first time anyone inside the business learns the order is late.
primary_identification: Missing exception detection: promised dates and order progress are held separately and nothing compares them or flags missed milestones.
commercial_value_dimensions: Customer experience, service cost, fulfilment cost and cash flow
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Event-Driven Architecture | https://aws.amazon.com/event-driven-architecture/
  - Business events overview - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/home-page
related:
  - Why returns become a cross-department investigation | /patterns/why-returns-become-a-cross-department-investigation/
  - Why the same problems return after you replace the system | /patterns/why-the-same-problems-return-after-you-replace-the-system/
  - When client onboarding becomes a growth constraint | /patterns/when-client-onboarding-becomes-a-growth-constraint/
  - When order status lives in several systems | /patterns/when-the-true-status-of-an-order-is-spread-across-several-systems/
summary: If customers are the first to notice a missed delivery date, the business has no way of comparing its promises with its progress. Here is why late orders stay invisible internally, and how to detect them first.
layout: plain
---
## Observable condition

The first sign that an order is late is a message from the customer. "We were told Thursday. It is Monday. Where is it?" The person who receives the message has to go and find out. They check the order system, which says the order was confirmed. They check the warehouse, which says it was waiting for one item. They phone the supplier or the courier. An hour later they have an answer, and an apology to write.

Nobody inside the business had noticed. The order did not fail loudly. It simply did not do what it was supposed to do on the day it was supposed to do it, and nothing in the business was watching for that.

An illustrative example: a KwaZulu-Natal supplier of catering equipment with about thirty-five staff sells to restaurants and hotels. Sales confirm a delivery date when the order is placed. Stock is picked when everything is available, and dispatch books a courier. When an item is short, the order waits in the warehouse. The sales person who promised the date is not told, and the customer is the first to raise the alarm.

## Realisation

The customer knows first because the customer is the only party comparing the promise with reality. They hold the date in their head or diary and notice when it passes. Inside the business, the promise was made in one place, the work happens in another and the delay is visible only to whoever is standing next to the stuck order. No one is asked to compare the two.

Most business systems record things that happen: an order is created, a pick is completed, a waybill is printed. They are much worse at noticing things that should have happened and did not. A missing event produces no record, no notification and no task. It is silent by design.

Google's [site reliability engineering guidance](https://sre.google/sre-book/monitoring-distributed-systems/) makes a similar distinction for technical systems. It separates monitoring of what users actually experience, the symptom, from monitoring of internal causes, and argues that alerting effort is better spent on catching symptoms. In order operations, the symptom that matters to the customer is a date that has passed. If the business does not measure that, the customer does it instead.

**Realisation prompt:** of the late orders last month, how many did your team spot before the customer asked?

## Identification

This is a pattern of missing exception detection in order fulfilment. The visible symptom is customers chasing late orders. The common assumption is that the team should communicate better or check orders more often. The structural cause is that the promised date and the order's actual progress are held in different places, and no rule compares them and raises an exception when they diverge.

Two published Patterns look at neighbouring problems. [Why customers have to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/) deals with status information that exists but cannot be seen by the customer. [When a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/) covers the internal effort of answering a status question. This Pattern is earlier in the chain: the business itself does not know the order is late until it is told.

## Diagnosis

- **The promise is not stored as data.** The delivery date was said on the phone or typed into an email, not recorded as a field the system can check against.
- **Progress is recorded in separate tools.** Sales, warehouse and courier each record their own steps. No single view shows where an order is against its expected timeline.
- **Nothing watches for absence.** Alerts, where they exist, fire when something happens. No rule says "if this order has not been picked by Tuesday, tell someone".
- **Delays are known locally.** The warehouse knows an item is short. That knowledge stays in the warehouse because there is no defined route for it to reach sales or the customer.
- **Nobody owns the order end to end.** Each department owns its step. The customer's outcome falls between them, a theme explored in the Insight [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/).

## Commercial impact

The commercial value at stake is customer experience, service cost, fulfilment cost and cash flow.

Each late order discovered by a customer costs more to handle than one discovered internally. Someone must investigate under pressure, often across several people, and then manage an unhappy customer. The business also loses the chance to act early: to substitute an item, split the delivery, expedite a supplier or simply warn the customer while there was still time for them to plan around it.

Repeat customers notice when the supplier never seems to know what is happening. Over time that affects reorders and the willingness to accept future promises. Cash flow is touched too: delayed or partial deliveries often delay invoicing or prompt payment disputes, and the business only finds out when the debtor ageing report moves.

There is a quieter internal cost. Staff who repeatedly learn about problems from customers lose confidence in their own systems and start keeping private trackers, which adds more manual work and more places for information to hide.

## Common misidentification

The usual response is to ask sales or customer service to "keep customers updated". Without a signal that an order is at risk, that means manually checking every open order, which does not survive a busy week.

Another response is to buy a customer-facing tracking page. Tracking helps when the information is accurate and timely, but a page that shows "processing" for an order that has been stuck for three days simply moves the discovery from a phone call to a screen.

## Possibility

In a better state, every order carries its promised date and its expected milestones as data. Each step, such as picked, packed, collected or delivered, records an event when it happens. A simple rule compares expected and actual: when an order misses a milestone, an exception is raised to a named person, with the reason if it is known. That person decides what to do and tells the customer before the customer has to ask.

Event-driven designs are built for exactly this kind of flow. [AWS describes an event](https://aws.amazon.com/event-driven-architecture/) as a change in state, published by one system and routed to the systems or people that need to react, without the systems having to know about each other. Business applications increasingly expose these events directly; Microsoft's Dynamics 365 documentation, for example, describes [business events](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/home-page) that let external systems and automation tools receive notifications when a business action occurs.

For the catering supplier, that could mean the warehouse marking a short item on the order, which immediately flags the order to the sales person with the promised date and proposes options: wait, split or substitute.

## Intervention

1. **Record the promise.** Make the promised delivery date a required field when an order is confirmed, wherever the order is captured.
2. **Define the milestones.** Agree the three or four steps every order passes through and the normal time between them. Keep it simple.
3. **Capture events where work happens.** Make sure each milestone is recorded in a system at the moment it occurs, not reconstructed later.
4. **Add exception rules.** Create rules that flag orders which have not reached a milestone by the expected time, and route them to an owner. The Insight [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) covers the principles.
5. **Agree the customer response.** Decide what the owner does when an exception fires, including when and how the customer is told.
6. **Measure detection.** Track the share of late orders that were flagged internally before the customer raised them. That number should rise steadily.

## Diagnostic questions

- Where is the promised delivery date stored, and can a system read it?
- When an item is short, how does the person who made the promise find out?
- Does anything in your systems alert someone when an expected step has not happened?
- Who is accountable for an order from confirmation to delivery?
- How many customer messages last month were the first notice of a delay?

## Bottom line

When customers know an order is late before the team does, the business is relying on its customers to monitor its own operations. The fix is not more vigilance but a simple structure: store the promise, record the progress, compare the two and route exceptions to an owner. A business that detects its own delays can act while there is still time, and turns an apology into a managed conversation.
