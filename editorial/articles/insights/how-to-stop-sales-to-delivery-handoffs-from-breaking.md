---
hub: insights
record_id: INS-279
slug: how-to-stop-sales-to-delivery-handoffs-from-breaking
title: How to Stop Sales-to-Delivery Handoffs From Breaking
description: The moment a deal closes is where promises, assumptions and context are most often lost. Six things that go missing, and five design choices that keep the knowledge moving to delivery.
lead: The moment a deal closes is where promises, assumptions and context are most often lost. Six things that go missing, and five design choices that keep the knowledge moving to delivery.
category: Operations Design
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Operations Design
sources:
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
  - RACI Chart: What is it & How to Use - The Workstream | https://www.atlassian.com/work-management/project-management/raci-chart
related:
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
  - Where Customer Information Gets Lost During Onboarding | /insights/where-customer-information-gets-lost-during-onboarding/
  - Why Work Gets Lost Between Teams | /insights/why-work-gets-lost-between-teams/
summary: The moment a deal closes is where promises, assumptions and context are most often lost. Six things that go missing, and five design choices that keep the knowledge moving to delivery.
layout: plain
---
In many service and project businesses, the moment a deal is won is the moment things start to go wrong. The salesperson has spent weeks learning what the client really wants, what was promised, what is politically sensitive and what the budget can bear. Then the deal closes, a handoff happens, and the delivery team begins with a half-page summary, a signed quote and a vague sense that "the client is expecting it by month end".

The result is familiar: scope disputes, missed expectations, delivery teams that discover commitments after the fact, and sales teams that avoid the client because they fear what they will hear. The handoff from sales to delivery is one of the most reliable places for value to be lost, and one of the most fixable.

> A handoff does not break because people are careless. It breaks because the knowledge that matters lives in someone's head, and the process has no place to put it.
>

## Why this particular handoff breaks

Sales and delivery have different incentives, different tools and different vocabularies. Sales is rewarded for closing, so detail that might complicate the deal tends to go unrecorded. Delivery is rewarded for hitting the plan, so anything not in the plan feels like an unfair surprise. The CRM holds the commercial record, while the delivery tools hold the work. The two rarely share a structure.

Microsoft's guidance on implementing business applications cautions that technology should fit and support the way the business actually operates, not dictate it. The sales-to-delivery handoff is a good test of that. If the systems were chosen and configured by each team in isolation, the seam between them is where information is retyped, summarised or forgotten. This is the pattern we describe in [broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/), and a close relative of the re-keying problem covered in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

## The six things that usually go missing

Review the last five deals that went badly in delivery and you will almost always find some of these missing at handoff.

1. **The real objective.** The quote lists deliverables, but not why the client is buying. Delivery cannot make sensible trade-offs without knowing what outcome matters.
2. **Verbal promises.** Commitments on timing, extras, service levels or named people that were made in meetings or on WhatsApp and never written down.
3. **Assumptions behind the price.** The quote assumed the client would supply data by a certain date, or that an existing system would be accessible. Those assumptions are the scope boundary, but they sit in the salesperson's head.
4. **Who is who.** The decision-maker, the day-to-day contact, the person who can block payment and the person who will quietly resist the change.
5. **Commercial terms.** Payment milestones, escalation clauses, change-control rules and any credit or approval conditions. These are covered in [why credit checks happen after sales has promised delivery](/discovery/why-credit-checks-happen-after-sales-has-promised-delivery/).
6. **Risks already spotted.** The salesperson often knows the project is risky, such as a client with a history of changing requirements, and this knowledge disappears at handoff.

## Design the handoff as a process

A handoff that depends on memory will fail on a busy week. We cover the principle in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/). For sales-to-delivery, five design choices make the difference.

### 1. Define "sold" precisely

Agree what has to be true before a deal is passed to delivery. For example: signed acceptance received, scope and assumptions documented, payment terms confirmed, credit approved and the client contacts listed. Until those are true, the deal is not handed off, however sure the salesperson feels. This is not bureaucracy. It protects both teams from starting work on something that was never properly agreed.

### 2. Use one structured handoff record

Replace the email summary with a short, structured form held where both teams can see it, ideally in the CRM or a linked project record. Required fields should mirror the six items above: objective, promises, assumptions, contacts, commercial terms and known risks. Free text is fine within fields, but the fields should not be optional. Pulling the quote lines straight into the delivery record avoids retyping and the errors it introduces.

### 3. Hold a short handoff conversation

A form is not a conversation. Schedule 30 minutes between the salesperson, the delivery lead and, for larger deals, a finance representative, within two working days of signature. The salesperson walks through the record, the delivery lead asks questions, and any gaps are filled before the client hears from delivery. The meeting is the safety net for what the form cannot capture, and the form is the safety net for what the meeting forgets.

### 4. Make roles explicit

Decide who is responsible for what at each step, and who must be consulted or kept informed. A simple RACI chart, described in Atlassian's guidance on RACI charts, sets out who is Responsible, Accountable, Consulted and Informed for each task. For this handoff, it should answer: who writes the record, who accepts it as complete, who contacts the client first and who owns the relationship in the first 60 days. A named person at each point stops responsibility from falling between the teams.

### 5. Close the loop back to sales

Handoffs are usually designed as one-way streets. Salespeople then lose sight of what happens after the sale, which means they cannot manage client expectations or learn from the outcome. Give sales a view of delivery status, as we outline in [salespeople cannot see whether an order has been fulfilled](/discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/), and feed delivery's findings, such as scope creep or unrealistic promises, back into how deals are scoped.

## Measure whether the handoff is working

Without measurement, handoff quality is a matter of opinion. A few simple measures give a clear picture:

- The share of deals with a complete handoff record within two working days of signature.
- The number of scope changes or disputes in the first 30 days that trace back to something known at sale.
- The time between signature and the first meaningful client contact from delivery.
- A short score from the delivery lead on whether they had what they needed.

Review these monthly. Trends point to which of the six missing items is the real culprit, and they let you adjust the form rather than guess.

## An illustrative example

The following is a hypothetical case. A Johannesburg IT services firm sells managed support contracts. Sales sends delivery a PDF of the signed quote and a two-line email. In one month, three new clients complain that their onboarding was late or that their expectations were not met. A review shows that in each case the salesperson had promised an on-site visit in the first week, which does not appear in the quote, and one client's after-hours support requirement was discussed but not recorded.

The firm introduces a one-page handoff record in its CRM with required fields for promised extras, support hours, key contacts, assumptions and risks, and a 30-minute handoff call within two days. Deals cannot move to the "Won - handed over" stage until the record is complete and the delivery lead has accepted it. Within a quarter, early-life complaints drop, and the delivery team stops describing sales as "making promises and vanishing".

## A final test

Pick a recent signed deal and ask the delivery lead to describe, without looking at the quote, what the client wants, what was promised and what could go wrong. If they cannot, the handoff has not transferred the knowledge. The fix is rarely a better salesperson or a harder-working delivery team. It is a handoff designed so that what the business knows at the moment of sale reaches the people who must deliver on it.
