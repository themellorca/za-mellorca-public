---
hub: patterns
record_id: PAT-114
slug: why-sales-and-operations-disagree-about-what-was-promised
title: Why Sales and Operations Disagree About What Was Promised
description: Sales says the customer was promised delivery by Friday with installation included. Operations says nobody told them. When commitments are made in conversations and copied by hand, both sides can be right.
lead: Sales says the customer was promised delivery by Friday with installation included. Operations says nobody told them. When commitments are made in conversations and copied by hand, both sides can be right.
category: Sales, CRM & Revenue Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Sales, CRM & Revenue Operations
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: Operations discovers after an order is placed that the customer was promised a delivery date, specification, discount or free extra that is not on the order, and the two departments argue about who is right.
primary_identification: Unrecorded commitment: promises are made in calls, emails and messages, then re-entered by hand into the order, so the operational record does not match what the customer was told.
commercial_value_dimensions: Margin protection, delivery reliability, rework cost, customer trust and internal cooperation
sources:
  - https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers
  - https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-calculate-order-promising-dates | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-calculate-order-promising-dates
summary: Sales says the customer was promised delivery by Friday with installation included. Operations says nobody told them. When commitments are made in conversations and copied by hand, both sides can be right.
layout: plain
---
## Observable condition

A Germiston manufacturer of steel shelving and racking wins an order from a retail chain. The sales representative agreed in a meeting that the racking would be delivered within ten working days and that installation would be included at no charge. He confirmed this in a WhatsApp message to the buyer.

The order that reaches the factory shows the products, the quantities and a standard lead time of fifteen working days. Installation is not mentioned. On day ten, the buyer phones to ask where the delivery is. The production manager says the order was never marked urgent. The sales representative says he told everyone. The installation team learns about the job on the day it is supposed to happen.

The same argument happens every few weeks with different customers and different promises.

## Realisation

The realisation is that both sides are usually telling the truth. Sales did make the promise. Operations did not receive it. The commitment existed in a conversation and a message, and it was lost when the order was typed up.

The disagreement is a symptom of a missing record. There is no single place where everything promised to the customer is written down before operations starts work.

**Realisation prompt:** list the last five disputes between sales and operations about a customer order. For each, find where the promise was recorded and where operations would have looked for it.

## Identification

This is a pattern of unrecorded commitment. The visible symptom is internal arguments, rushed production and unhappy customers. The common assumption is that sales overpromises or operations does not listen. The structural cause is that commitments are made in one channel and fulfilment is driven from a different record, with a manual retyping step in between.

It overlaps with [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/), which is about timing. This pattern is about content: what the customer was told and whether it survived the handoff.

## Diagnosis

- **Promises are made outside the system.** Dates, extras and special terms are agreed in meetings, calls and messages.
- **The order is retyped.** Someone keys the order from the quote or from memory, and non-standard terms are lost.
- **The quote and the order are separate documents.** Changes agreed after the quote never reach the order.
- **Delivery dates are promised without checking capacity.** Sales commits to a date that production cannot meet, because sales cannot see the schedule.
- **No field for special terms.** The order form has no place to record extras, so they live in notes nobody reads.

## Commercial impact

The commercial value at stake is margin, delivery reliability, rework cost and customer trust.

Margin leaks when promised extras such as free installation, delivery or discounts are honoured without having been priced. Each concession may be small, but they recur. Arrangements like these become harder to track as the business grows, as described in [why special customer arrangements get harder as the business grows](/patterns/why-special-customer-arrangements-get-harder-as-the-business-grows/).

Delivery reliability falls when dates are promised without capacity checks. Production either rushes, with overtime and disruption, or misses the date.

Trust erodes on both sides. Customers see a business that does not keep its word. Staff in operations and sales start to distrust each other, which slows every future handoff. Support teams inherit the fallout, as covered in [the cost when support cannot see sales promises](/impact/support-cannot-see-sales-promises-handover-gaps-service-failure-cost/).

## Common misidentification

One misreading is to discipline sales for overpromising. Some promises are commercially sensible; the problem is that they are not recorded.

Another is to add a handover meeting for every order. Meetings help for large projects but do not scale to routine orders, and verbal handovers lose detail too.

A third is to ask operations to read the email trail. That shifts the search work to the department least able to interpret it.

## Possibility

The possibility is that every commitment made to the customer lives on one document that becomes the order. The quote carries the agreed delivery date, specification, price and extras. When the customer accepts, the quote converts to the order without retyping, so operations works from exactly what was promised.

Business systems support this flow. [Business Central's guidance on sales quotes](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers) describes converting an accepted quote directly into a sales order or invoice. For dates, [order promising](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-calculate-order-promising-dates) calculates when items are available or can be made, so sales can commit to a date based on real capacity.

The same principle supports [what gets lost between the sale and the start of service](/patterns/what-gets-lost-between-the-sale-and-the-start-of-service/), where the handover record matters as much as the sale.

## Intervention

Start by agreeing that a promise not on the quote is not a promise. Add clear fields to the quote for delivery date, included services and special terms, so there is somewhere to record them.

Make the accepted quote convert to the order with all its terms, and remove the retyping step. Where sales wants to commit to a non-standard date, require a capacity check or a quick confirmation from production before the quote is sent.

Review disputes monthly. Each one should be traced to the point where the commitment left the record, and that gap should be closed.

## Practical next actions

1. Review the last ten sales-operations disputes and record where each promise was made.
2. Add fields to the quote for delivery date, included services and special terms.
3. Convert accepted quotes into orders directly so that no terms are retyped.
4. Require a capacity check before any delivery date shorter than standard lead time is promised.
5. Agree a rule that commitments made by message must be added to the quote before it is accepted.
6. Review disputes monthly with both sales and operations present and close each gap found.

## Diagnostic questions

- Where would operations look to find out what a customer was promised?
- How many orders last month included extras or dates that were not on the original quote?
- Can sales see production capacity before committing to a delivery date?
- Is any order retyped between the accepted quote and the production schedule?

## Bottom line

Sales and operations disagree about promises when commitments are made in conversations and lost in retyping. Record every commitment on the quote, carry it into the order without rekeying and check capacity before promising dates. The arguments stop because both teams are reading the same record.
