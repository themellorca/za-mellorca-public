---
hub: patterns
record_id: PAT-102
slug: when-a-lead-enters-the-crm-but-nobody-acts
title: When a lead enters the CRM but nobody acts
description: A lead arrives in the CRM and then waits. Why the gap between entry and action opens, and how routing, ownership and data quality close it.
lead: A lead arrives in the CRM and then waits. Why the gap between entry and action opens, and how routing, ownership and data quality close it.
category: Sales & CRM Hygiene
published_date: 2026-09-08
updated_date: 2026-09-08
eyebrow: Sales & CRM
pattern_family: Sales & CRM Hygiene
observable_condition: Leads enter CRM but nobody acts
primary_identification: Ownership gap in lead lifecycle
commercial_value_dimensions: Revenue, speed, customer experience
sources:
  - The Short Life of Online Sales Leads | https://hbr.org/2011/03/the-short-life-of-online-sales-leads
  - Work assignment overview | https://learn.microsoft.com/en-us/dynamics365/sales/work-assignment-intro
  - Lead Qualification & Routing Strategies | https://trailhead.salesforce.com/content/learn/modules/opportunity-management/qualify-and-route-leads-to-your-reps
related:
  - When nobody knows which system holds the correct data | /patterns/when-nobody-knows-which-system-holds-the-correct-data/
  - When nobody owns the definition of a business metric | /patterns/when-nobody-owns-the-definition-of-a-business-metric/
  - Why salespeople spend time updating systems instead of selling | /patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/
summary: A lead arrives in the CRM and then waits. Why the gap between entry and action opens, and how routing, ownership and data quality close it.
layout: plain
---
## Observable condition

A lead is created in the CRM, but nobody takes ownership of it, moves it along or contacts the prospect. The record exists. It may even be complete. Yet days later it is still sitting at its first status with no activity logged, and the prospect has heard nothing.

The lag creates a silent leak. Potential revenue slips away because the pipeline action never happens, and because nothing visibly fails, nobody notices.

## Realisation

The consequence is a double erosion: diminished conversion potential and confused ownership across teams. The CRM becomes a passive repository rather than a working, revenue-generating tool. As a result, the organisation loses visibility of the true health of its funnel and risks misallocating marketing and sales resources.

The quieter realisation is that the business may already be paying to generate demand it then ignores. Marketing reports the lead as delivered. Sales reports a thin pipeline. Both statements can be true at once if the gap between entry and action is nobody’s responsibility.

## Identification

This is a **lead ownership and routing problem**, sometimes described as lead drift, where data alone does not translate into action. It is identifiable through dormant leads, delayed follow-ups and misalignment between marketing, sales and customer success about who owns a lead at each stage.

Speed matters in this pattern. Writing in Harvard Business Review, James Oldroyd, Kristina McElheran and David Elkington examined how quickly companies respond to online sales leads in [The Short Life of Online Sales Leads](https://hbr.org/2011/03/the-short-life-of-online-sales-leads), and concluded that most companies were not responding nearly fast enough. Whatever the exact figures in a given market, a lead that waits is a lead whose interest is cooling.

## Diagnosis

The visible symptom is inactivity. The common assumption is that salespeople are not working the leads. The structural cause is usually a combination of governance gaps, unclear ownership and insufficient automation to route leads to the right owner. The CRM is not built into a clear playbook for action with time-bound ownership.

Typical mechanisms include:

- **Leads land in a shared pool.** When everyone can see a lead, nobody is specifically responsible for it.
- **Assignment depends on a person.** A manager or coordinator distributes leads by hand, so leads wait whenever that person is busy or away.
- **Qualification is unclear.** Sales does not trust the quality of marketing leads, so it deprioritises them without saying so.
- **No clock is running.** There is no expected response time and no alert when it passes.
- **Status is not maintained.** Leads that were worked outside the CRM look untouched, while untouched leads look the same as worked ones.

Modern CRM platforms treat routing as configuration rather than effort. Microsoft’s [work assignment overview for Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/work-assignment-intro) describes segments that group leads by criteria such as location and source, sequences that set the steps sellers follow, and assignment rules that automatically assign matching records to sellers or teams. Its example pairs a segment with a time-bound action: follow up by email within three business days. Salesforce’s [Trailhead unit on qualifying and routing leads](https://trailhead.salesforce.com/content/learn/modules/opportunity-management/qualify-and-route-leads-to-your-reps) stresses agreeing with marketing which factors predict conversion and building qualification fields into the CRM so that managers can see the pipeline. The common thread is that ownership, priority and timing are defined before the lead arrives.

## Commercial impact

The commercial value at stake is **revenue, speed, marketing return and forecast reliability**.

The impact includes lost opportunities, longer sales cycles and weaker return on marketing spend. Left unaddressed, it compounds as new leads accumulate without conversion, which undermines revenue planning: forecasts are built on pipeline that is not being worked. The related pieces [The hidden revenue cost of slow follow-up](/patterns/the-hidden-revenue-cost-of-slow-follow-up/) and [the revenue cost of slow sales lead response](/impact/slow-sales-lead-response-revenue-cost/) explore the consequence in more depth.

## Common misidentification

Some teams assume that more leads mean more revenue, and respond to a thin pipeline by buying more demand. That fails to address the bottleneck of ownership and action. The core issue is not lead volume but the workflow that moves leads towards a decision. A second misidentification blames CRM adoption; as [Why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/) argues, low usage is often a sign that the system does not reflect how work is supposed to move.

## Possibility

A better state defines explicit ownership for each lead stage, automates assignment rules, and uses triggers that alert owners when action is due. A lightweight service level, agreed between marketing and sales, aligns both teams around timely follow-up. Every lead has one named owner within minutes of arrival, a clear next action and a visible clock. Leads that are not worth pursuing are closed with a reason, so the remaining pipeline is real.

## Intervention

1. **Define the lead lifecycle.** Agree the stages, what qualifies a lead to move between them and who owns each stage.
2. **Agree a response expectation.** Set a target time from creation to first contact, appropriate to the business and the channel.
3. **Automate routing.** Use assignment rules based on territory, product, size or capacity, so that no lead depends on manual distribution.
4. **Alert and escalate.** Notify the owner when a lead is assigned and escalate to a manager when the response time is missed.
5. **Require a disposition.** Make it easy to record that a lead was contacted, disqualified or recycled, so inactivity is visible rather than ambiguous.
6. **Review the gap, not just the volume.** Report time to first action and leads without activity alongside lead counts.

Where leads go missing before they ever reach sales, see [Why good leads disappear between marketing and sales](/patterns/why-good-leads-disappear-between-marketing-and-sales/).

## Practical diagnostic

### Warning signs

- A meaningful share of open leads have no logged activity since creation.
- Leads sit in a shared queue or under a generic owner.
- Nobody can say what the expected response time is.
- Marketing and sales disagree about how many leads were delivered and how many were worked.
- Prospects mention they enquired weeks ago and heard nothing.
- Pipeline reviews discuss opportunities but never discuss untouched leads.

### Diagnostic questions

- Who owns each stage of the lead lifecycle?
- What automation exists to assign leads to the right owner?
- What are the average follow-up times and conversion rates by owner and by source?
- What happens, automatically, when a lead has not been contacted in the expected time?
- How are disqualified leads recorded, and is the reason captured?

## Bottom line

Closing the gap between entry and action is foundational to revenue velocity. A lead in the CRM is only an intention. The practical path is ownership clarity, streamlined routing and timely alerts, so that every lead results in action rather than stagnation.
