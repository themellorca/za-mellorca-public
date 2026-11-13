---
hub: patterns
record_id: PAT-426
slug: why-does-buying-something-internally-take-so-long
title: Why does buying something internally take so long?
description: When a routine internal purchase takes weeks, the cause is rarely one slow approver. The buying process is rebuilt for every request. Here is the fix.
lead: When a routine internal purchase takes weeks, the cause is rarely one slow approver. It is a buying process that is rebuilt from scratch for every request. Here is how to recognise it and fix it.
category: Procurement, Suppliers & Inventory
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Procurement, Suppliers & Inventory
pattern_family: Procurement, Suppliers & Inventory
observable_condition: Routine internal purchases such as parts, equipment and consumables take days or weeks from request to delivery, with requests arriving by email or chat and requesters repeatedly chasing for status.
primary_identification: Unstructured internal procurement: no single entry point, no catalogue of approved items and suppliers, no tiered approval routing and no visible request status.
commercial_value_dimensions: Margin, procurement capacity, operational speed and spending control
sources:
  - Purchase requisition overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-requisitions-overview
  - Procurement catalogs overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-catalogs
  - Business events overview - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/home-page
related:
  - When one missing item stops a larger process | /patterns/when-one-missing-item-stops-a-larger-process/
  - Why does winning a customer create an internal scramble? | /patterns/why-does-winning-a-customer-create-an-internal-scramble/
  - The operational tax hidden inside everyday admin | /patterns/the-operational-tax-hidden-inside-everyday-admin/
  - When procurement starts with an email request | /patterns/how-purchase-requests-get-lost-in-an-inbox/
summary: When a routine internal purchase takes weeks, the cause is rarely one slow approver. It is a buying process that is rebuilt from scratch for every request. Here is how to recognise it and fix it.
layout: plain
---
## Observable condition

A technician needs a replacement part. A manager needs a laptop for a new starter. The marketing team needs printed brochures for an exhibition next week. Each request starts the same way: an email, a WhatsApp message or a conversation in the passage. Someone asks who needs to approve it. Someone else asks for three quotes. The quotes arrive in different formats. The approver is travelling. The finance team asks which cost centre it belongs to. Eventually a purchase order is typed up and sent, and the person who asked starts phoning to find out when it will arrive.

By the time the item is in hand, two weeks have passed for something that took ten minutes to decide. Staff learn the lesson. Some stop asking and pay with their own card, claiming it back later. Others order more than they need, so they will not have to go through it again.

An illustrative example: a Gauteng engineering services company with about seventy staff handles all internal purchasing through a single buyer's inbox. Requests for safety boots, software licences, sub-contracted services and replacement pumps follow the same route. The buyer spends much of the day clarifying requests rather than buying.

## Realisation

Internal buying is slow not because any single step is slow, but because every purchase is handled as if it were the first of its kind. The business has no standard way to ask, no list of things that are already approved, no agreed route that depends on value or risk, and no way to see where a request is. So each request is a small project, assembled from scratch by whoever happens to be involved.

The controls that exist are real and necessary. Spending should be authorised, suppliers should be checked, and costs should be allocated correctly. The problem is that the controls are applied by people remembering and negotiating them each time, rather than by a process that already knows them. A box of gloves and a new vehicle travel the same path, and the gloves wait behind the vehicle.

**Realisation prompt:** how long did the last ordinary, low-value internal purchase take from request to delivery, and how much of that time was spent waiting?

## Identification

This is a pattern of unstructured internal procurement. The visible symptom is slow purchasing and frustrated requesters. The common assumption is that the buyer or the approvers are the bottleneck. The structural cause is that the business has no defined requisition process: no single entry point, no catalogue of approved items and suppliers, no rules that route requests by value and category, and no status that requesters can see.

The published Pattern [why does one approval hold up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/) examines approvals as a single choke point in any workflow. This Pattern looks at the whole internal buying journey, from the moment someone needs something to the moment it arrives, and why it is reinvented every time.

## Diagnosis

- **No single front door.** Requests arrive by email, chat, phone and in person, often without the information the buyer needs: quantity, specification, budget or urgency. The first step is always a round of questions.
- **No catalogue of the routine.** Items bought every month, from consumables to standard laptops, are sourced as if they were new. Approved suppliers and agreed prices live in people's memories or old emails.
- **One route for everything.** The same approver and the same quote requirement apply regardless of value or risk, so routine purchases queue behind complex ones.
- **Approval rules are unwritten.** Requesters do not know who approves what, so they guess, and requests bounce. The published Pattern [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/) covers this in more depth.
- **No visible status.** Once a request is sent, it disappears. Requesters chase, the buyer answers, and both lose time.
- **The purchase order is retyped.** Details agreed in email are keyed again into the accounting system, which introduces errors and another delay.

Business systems already model this journey in detail. Microsoft's Dynamics 365 documentation, for instance, describes [a purchase requisition as an internal document that authorises purchasing to buy](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-requisitions-overview), which moves through statuses such as draft, in review, approved and closed, and generates a purchase order once approved. The same software describes [procurement catalogues](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-catalogs) that define what employees may order for internal use, so that policy is enforced by the catalogue rather than by the buyer's memory. A small business does not need an enterprise suite to apply the same ideas.

## Commercial impact

The commercial value at stake is margin, procurement capacity, operational speed and spending control.

Slow internal buying delays work that depends on the item: a job that cannot start without a part, a new employee who cannot work without equipment, a client deliverable held up by a missing licence. The buyer's capacity is consumed by clarification and chasing rather than by negotiating better terms or consolidating orders. Margin suffers when urgency leads to rush purchases at higher prices, and when demand is never grouped to secure volume pricing.

Control weakens rather than strengthens. When the formal process is too slow, people find ways around it: personal cards, informal suppliers, split orders to stay under a limit. The business ends up with less oversight of spending, not more, and finance spends time reconstructing what was bought and why. The Impact page on [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/) sets out how waiting itself becomes a cost.

## Common misidentification

The usual response is to tighten control: more quotes, an extra approver, a stricter policy. That slows everything further and pushes more purchasing outside the process.

The opposite response is to remove controls for speed. That trades a visible cost for an invisible risk. The aim is to make control cheap for routine purchases and thorough for unusual ones.

## Possibility

In a better state, every internal request enters through one simple form that asks for the information the buyer needs. Routine items are chosen from a short catalogue of approved products and suppliers at agreed prices, and go straight to ordering within set limits. Requests above defined value or risk thresholds route automatically to the right approver, with quotes attached. Approved requests become purchase orders without retyping, and requesters can see the status at any time. Dynamics 365 also describes [business events](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/home-page) that let external systems receive notifications from its finance and operations apps, the kind of mechanism that can tell a requester when a request has moved on.

For the engineering services company, that might mean a catalogue for safety equipment and standard IT kit, a fast route for low-value repeat items, and a fuller route with quotes and technical review for sub-contracted services and capital items. The buyer's time shifts from clarification to supplier management.

## Intervention

1. **Map the current journey.** Follow a handful of recent purchases from request to delivery and record each step and wait. The Insight [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) offers a practical method.
2. **Create one front door.** Replace scattered requests with a single request form that captures item, quantity, reason, cost centre and date needed.
3. **Build a starter catalogue.** List the items bought most often, with approved suppliers and prices. Start with twenty lines, not two thousand.
4. **Write approval tiers.** Define who approves what by value and category, and publish it. Let routine catalogue purchases within limits skip manual approval.
5. **Connect request to order.** Make sure approved requests flow into a purchase order in the accounting or purchasing system without being retyped.
6. **Show status.** Give requesters a way to see where their request is, ideally with an automatic notification when it is approved or ordered; Microsoft's documentation uses the approval of a purchase requisition as an example of an event that other systems can be notified about. Measure request-to-delivery time each month.

## Diagnostic questions

- How many different ways can someone in the business ask for something to be bought?
- Which twenty items or services are bought most often, and are their suppliers and prices recorded anywhere?
- Does a low-value repeat purchase follow the same route as a large one-off purchase?
- Can a requester see the status of their request without asking anyone?
- How much internal spending last quarter happened outside the formal process?

## Bottom line

Internal buying takes so long because each purchase is assembled from scratch, with controls applied by memory and negotiation. A single entry point, a catalogue for the routine, written approval tiers and visible status turn purchasing into a process the business can rely on. The result is faster work, more buyer capacity and, perhaps surprisingly, stronger control over what the business spends.
