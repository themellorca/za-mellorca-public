---
hub: patterns
record_id: PAT-132
slug: what-gets-lost-between-the-sale-and-the-start-of-service
title: The Operational Gap Between Sales and Service Delivery
description: Sales sells what the customer needs to hear. Delivery inherits what is on the order form. The gap between the two becomes the customer's first problem.
lead: Sales sells what the customer needs to hear. Delivery inherits what is on the order form. The gap between the two becomes the customer's first problem.
category: Sales, CRM & Revenue Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Sales, CRM & Revenue Operations
pattern_family: Sales, CRM & Revenue Operations
observable_condition: The delivery team learns what was promised during the sale only after the customer raises it, and the first weeks of service begin with corrections and apologies.
primary_identification: A hand-over that transfers the order but not the commitments, context and expectations built up during selling.
commercial_value_dimensions: Customer satisfaction, early-stage churn, rework cost, margin on delivered work and referral value
sources:
  - https://learn.microsoft.com/en-us/dynamics365/sales/overview | https://learn.microsoft.com/en-us/dynamics365/sales/overview
  - https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales | https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/overview | https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/overview
summary: Sales sells what the customer needs to hear. Delivery inherits what is on the order form. The gap between the two becomes the customer's first problem.
layout: plain
---
## Observable condition

A Pretoria facilities company wins a twelve-month contract to service air-conditioning units at a medical practice group. The salesperson is pleased and sends the signed order to operations. In the meeting, the practice manager had mentioned that two of the five sites cannot be serviced during consulting hours, and that one needs an infection-control check-in at reception. The salesperson agreed to both. Neither is on the order.

The first technician arrives on a Monday morning at a site that is fully booked with patients. The practice manager is annoyed, the technician is confused, and the operations manager is told, for the first time, that a promise was made. By the end of the week, there are three apologies, one rescheduled visit and a customer who now doubts the company's competence.

This is an illustrative example. The details vary by industry, but the sequence is familiar to anyone who has sold something that someone else delivers.

## Realisation

The realisation is that the order is a summary, not the agreement. A customer's real expectations include things that were said, assumed or agreed informally during the sale. The order records the price and the scope. It rarely records the exceptions, the sensitivities and the specific promises that will decide whether the customer is happy in month one.

So the sale is not complete when the contract is signed. It is complete when the people who will deliver understand what the customer thinks they bought.

**Realisation prompt:** take the last signed order and ask the delivery lead what they know about the customer beyond what is written on it. Then ask the salesperson the same question and compare the lists.

## Identification

This is a pattern of lossy hand-over. The visible symptom is a customer who tells the delivery team what they were promised. The common assumption is that sales over-promises, or that delivery does not read the paperwork. The structural cause is that nothing in the process requires the sold context to be captured and carried across.

The Pattern [the cost of delayed hand-offs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/) addresses the timing of the hand-over. This pattern addresses its content. A hand-over can be quick and still empty.

## Diagnosis

- **The order has no place for context.** Forms capture product, price and quantity. They have no field for "do not service during consulting hours" or "the decision-maker prefers a call, not an email".
- **Salespeople hold the knowledge.** What was learned in meetings sits in notes, memory and messages. [Microsoft's overview of its sales application](https://learn.microsoft.com/en-us/dynamics365/sales/overview) describes tracking accounts and contacts and following activity, which only helps if the sold context is actually recorded there.
- **Delivery meets the customer cold.** The first interaction is a visit or a call by someone who has not met the customer and has only the order. They are exposed to every gap.
- **Sales is measured at the signature.** Compensation and attention end when the deal is won. There is little reason to spend time writing a careful hand-over.
- **Informal promises are not visible.** A concession given by message or by phone is not part of the record. The discount approval example in [why discount approvals live in chat threads instead of the quote](/discovery/why-discount-approvals-live-in-chat-threads-instead-of-the-quote/) shows how commitments disappear into conversations.
- **Delivery cannot see sales history.** Even when information exists, delivery staff may not have access to it, or may not know where to look. [Microsoft's customer service documentation](https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/overview) describes representatives working without losing context across sessions, which assumes the context was captured in the first place.

## Commercial impact

The first cost is early churn. Customers form their view of a supplier in the first weeks. A shaky start affects renewal, expansion and the willingness to recommend, and it is hard to repair once the customer has noticed.

The second cost is rework. Visits are repeated, deliverables are redone, and staff spend time on corrections instead of the next customer. The effort is invisible because it is absorbed into normal working hours.

The third cost is margin. If a promise made in the sale was not priced, the delivery team pays for it. A concession that took a minute to give can cost hours to honour across a year-long contract.

The fourth cost is internal friction. Delivery staff begin to distrust what sales tells them, and sales staff begin to think delivery is difficult. The Insight [broken hand-offs are systems problems](/insights/broken-handoffs-are-systems-problems/) explains why blaming people here misses the cause.

## Common misidentification

The usual response is to remind sales to be more careful in what they promise. This addresses honesty but not the loss of information, since most of what is dropped is not an over-promise but a detail. Another is to ask delivery to read the full email history before starting, which turns a hand-over into archaeology. A third is to hold a long weekly meeting between teams, which creates a forum but not a record.

## Possibility

In a better state, the hand-over is a short, standard note created before delivery begins. It records the customer's goals, the exceptions, any promises outside the standard scope, the key contacts and how they prefer to be reached. The salesperson writes it, the delivery lead reads it, and they spend ten minutes talking it through before the first visit.

The note sits against the customer record, so it is found when someone needs it. [Microsoft's description of moving from lead to order](https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales) shows a sequence in which information is captured at each step and carried forward. The principle applies whether the tool is a CRM or a shared document.

The Insight [how to stop sales-to-delivery hand-offs from breaking](/insights/how-to-stop-sales-to-delivery-handoffs-from-breaking/) goes into the mechanics of this in more detail.

## Intervention

The change is small and can start with the next signed order.

## Practical next actions

1. **Define the hand-over note.** Agree five to eight questions that must be answered for every sale, such as special conditions, promised exceptions, key contacts and what success looks like to the customer.
2. **Make it part of closing.** Treat a deal as complete only when the hand-over note is written. Do not release the order to delivery without it.
3. **Hold a short pre-start conversation.** Ten minutes between the salesperson and the delivery lead before the first contact, with the note in front of them.
4. **Record promises where delivery can see them.** Move concessions out of chat threads and into the order or customer record at the time they are given.
5. **Ask the customer in week two.** A short call to ask whether the service matches what they expected will surface gaps while they are still easy to fix.
6. **Review the gaps monthly.** Collect the items delivery learned late and add them to the questions in the hand-over note.

## Diagnostic questions

- What did the customer expect that is not written on the order?
- Where would the delivery team find a promise made by message?
- Does the salesperson ever speak to the delivery lead before the first visit?
- What proportion of new customers raise something in the first month that delivery did not know?
- Is any part of sales performance tied to how the customer experiences the start?

## Bottom line

Customers judge a supplier by whether delivery matches what they thought they bought. The order carries the price and the scope, but the promises and sensitivities usually stay with the salesperson. A short, standard hand-over note and a ten-minute conversation close most of the gap.
