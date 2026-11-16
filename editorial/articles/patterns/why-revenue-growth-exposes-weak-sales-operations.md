---
hub: patterns
record_id: PAT-124
slug: why-revenue-growth-exposes-weak-sales-operations
title: Why Revenue Growth Exposes Weak Sales Operations
description: A sales process that worked with five reps and a few hundred customers starts to fail at twice the size. Why growth reveals weak sales operations, and what to fix first.
lead: A sales process that worked with five reps and a few hundred customers starts to fail at twice the size. Why growth reveals weak sales operations, and what to fix first.
category: Sales, Leads & Revenue Handoffs
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Sales, Leads & Revenue Handoffs
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: As revenue and the sales team grow, leads are missed or contested, pricing becomes inconsistent, forecasts diverge from results and handoffs to delivery break, although the same people and tools worked well at a smaller size.
primary_identification: Informal sales operations: routing, pricing, pipeline rules, data standards and handoffs were held together by a few people's knowledge, and that informal system cannot carry more reps, customers and channels.
commercial_value_dimensions: Revenue growth, margin, forecast reliability, customer experience and scalability
sources:
  - https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - https://learn.microsoft.com/en-us/dynamics365/sales/configure-predictive-lead-scoring | https://learn.microsoft.com/en-us/dynamics365/sales/configure-predictive-lead-scoring
summary: A sales process that worked with five reps and a few hundred customers starts to fail at twice the size. Why growth reveals weak sales operations, and what to fix first.
layout: plain
---
## Observable condition

When the business had five reps and a few hundred customers, sales ran smoothly. The sales director knew every deal. Leads were handed out in a Monday meeting. Pricing exceptions were agreed over coffee. Operations knew what had been sold because the rep walked over and told them.

Revenue has since doubled. There are now twelve reps across two regions, an online channel and a key accounts team. Leads go to whoever sees them first, and two reps sometimes call the same prospect. Discounts vary from rep to rep. The forecast and the actual month-end are further apart every quarter. Delivery teams learn about large orders late. Nothing dramatic has failed. Everything is a little worse, and the director can no longer hold it together personally.

An illustrative example: a Gauteng building materials supplier that grew quickly after winning several developer accounts. Within eighteen months it found that its average discount had widened noticeably, that a share of new website leads were never contacted, and that two reps had been quoting the same project at different prices.

## Realisation

The realisation is that the small business did have sales operations: they were simply informal and held in a few people's heads. The Monday meeting was lead routing. The director's memory was the pipeline review. Coffee conversations were the pricing policy. Walking to the warehouse was the handoff. Growth did not create new problems so much as exceed the capacity of that informal system.

The fix is not to recreate the director's memory at a larger scale but to make the rules explicit. Tools exist to embed consistent sales steps; [Microsoft's overview of business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) describes defined stages and steps that guide everyone through the same process, with required steps that must be completed before moving forward. Those tools are useful only once the business has decided what its rules are.

**Realisation prompt:** which parts of your sales process would stop working if your most experienced sales leader were away for a month?

## Identification

This is a pattern of informal sales operations. The visible symptom is a sales function that becomes less consistent and less predictable as it grows. The common assumption is that the new reps are weaker, the market has changed or the CRM is not good enough. The structural cause is that lead routing, pricing authority, pipeline definitions, data standards and post-sale handoffs were never written down or built into systems, so they cannot be followed consistently by a larger team.

It is the sales-specific form of the Pattern [what growth reveals about systems that were good enough](/patterns/what-growth-reveals-about-systems-that-were-good-enough/), and it often shows up first in the forecast, as described in [why the sales forecast depends on which person you ask](/patterns/why-the-sales-forecast-depends-on-which-person-you-ask/).

## Diagnosis

- **Lead routing is informal.** There are no rules for which rep or team receives which lead, so leads are missed, duplicated or contested.
- **Pricing authority is unclear.** Each rep negotiates within limits they have inferred, and discounts drift upward.
- **Pipeline stages mean different things.** New reps interpret stages differently from the original team, so forecasts built on stage probability lose meaning.
- **Territories and account ownership overlap.** Regions, channels and key accounts were added without clear boundaries.
- **Data standards are missing.** Customer names, industries and sources are captured inconsistently, so reporting and any later scoring are unreliable. [Microsoft's documentation on predictive lead scoring](https://learn.microsoft.com/en-us/dynamics365/sales/configure-predictive-lead-scoring) notes that a scoring model is trained on the business's history of qualified and disqualified leads, which only helps if that history was recorded consistently.
- **Handoffs to delivery depend on individuals.** The rep who used to walk over and tell operations now has twice as many orders and less time.

## Commercial impact

The commercial value at stake is revenue growth, margin and the reliability of the plan.

Margin erodes first, through discount drift and inconsistent pricing that nobody approved as policy. Revenue leaks through missed leads and duplicated effort. The forecast loses reliability, which affects cash, stock and hiring decisions. Customers notice inconsistent prices and late handoffs, especially larger customers who deal with several people in the business.

The deeper cost is that growth becomes harder to sustain. Each new rep, region or channel adds to the strain rather than to the capacity, and senior sales leaders spend their time resolving conflicts and exceptions instead of building the business. The Insight [why growth exposes problems that were already there](/insights/why-growth-exposes-problems-that-were-already-there/) explains why these weaknesses existed all along.

## Common misidentification

The common responses are to replace the CRM, to hire a stronger sales manager, or to performance-manage the newer reps. A new CRM without written rules faithfully reproduces the inconsistency. A stronger manager becomes a new single point of memory. Performance management treats a system problem as a people problem and can push good reps out.

## Possibility

In a better state, the business has a short written sales operating model: how leads are routed, who owns which accounts, what each pipeline stage means, who may approve which discounts, which data must be captured and how won deals pass to delivery. Those rules are built into the CRM and the quoting process wherever possible, and someone owns sales operations as a function, even if part-time. New reps learn the system rather than the habits of whoever trains them, and the business can add reps, regions and channels without losing consistency.

## Intervention

Start by writing down how sales actually works today, then decide which rules to make explicit first, beginning with those that cost margin or lose leads.

## Practical next actions

1. **Check three indicators.** Compare average discount, lead response coverage and forecast accuracy now against two years ago.
2. **Write lead routing rules.** Define which leads go to which rep or team, and how quickly they must be contacted.
3. **Set discount authority.** Agree discount limits by role and an approval route above them.
4. **Define each pipeline stage.** Write what must be true for a deal to enter and leave each stage, and build it into the CRM.
5. **Agree minimum data standards.** Choose the few fields every customer and lead record must have, with defined values.
6. **Name a sales operations owner.** Give one person responsibility for maintaining the rules, the data and the handoff to delivery.

## Diagnostic questions

- Has your average discount widened as the team has grown?
- What happens to a website lead that arrives on a Friday afternoon?
- Would two of your reps describe each pipeline stage the same way?
- Who decides which rep owns an account that spans two regions?
- Who in your business is responsible for how sales operates, rather than for hitting a number?

## Article summary

Revenue growth exposes weak sales operations because the informal rules that worked for a small team cannot be followed by a larger one. Writing down how leads, pricing, pipeline stages, data and handoffs work, building those rules into the tools and giving sales operations an owner protects margin and makes further growth easier to carry. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine how your sales operations are coping with growth and how Mellorca may be able to help.
