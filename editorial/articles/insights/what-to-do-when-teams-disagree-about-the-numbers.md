---
hub: insights
record_id: INS-259
slug: what-to-do-when-teams-disagree-about-the-numbers
title: What to Do When Teams Disagree About the Numbers
description: When two teams bring different figures to the same meeting, a repeatable process settles the dispute and prevents the next one.
lead: When two teams bring different figures to the same meeting, a repeatable process settles the dispute and prevents the next one.
category: Reporting and Decision-Making
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Reporting and Decision-Making
sources:
  - Endorse your content - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
  - Microsoft Fabric adoption roadmap: Data culture - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture
  - Semantic Models in the Power BI Service - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-understand
related:
  - When two tools are doing the job of one | /insights/when-two-tools-are-doing-the-job-of-one/
  - Why teams stop trusting the CRM | /insights/why-teams-stop-trusting-the-crm/
  - Why sales, operations and service need different views of the same customer | /insights/one-customer-record-three-teams-three-useful-views/
summary: When two teams bring different figures to the same meeting, a repeatable process settles the dispute and prevents the next one.
layout: plain
---
The Monday meeting begins with two slides showing different revenue figures for the same month. Sales says it closed R4.2 million. Finance reports R3.7 million. Operations has a third number again, based on delivered orders. For twenty minutes the room argues about whose figure is wrong, and then the meeting ends without a decision about the thing the numbers were supposed to inform.

Disagreement over numbers is normal in growing businesses. It is also expensive, because it consumes time, damages trust and delays decisions. This article offers a way to settle such disagreements quickly and, more importantly, to reduce how often they occur.

## Assume everyone is right first

The most useful starting position is that both numbers are probably correct and answer different questions. Sales counts a deal when the contract is signed. Finance counts revenue when it is invoiced or recognised. Operations counts it when goods are delivered. Each team is measuring a different event, using the same word.

Treating the disagreement as a hunt for the person who made a mistake sets people against each other and rarely finds a mistake. Treating it as a question about definitions usually resolves it in one conversation. Our article on [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) sets out the common reasons, from different definitions to different cut-off dates.

## A five-step way to reconcile two figures

When two numbers collide, work through the same sequence each time so the conversation stays about evidence.

1. **Write each figure with its definition.** Not "revenue" but "value of contracts signed in the calendar month" or "value of invoices dated in the calendar month".
2. **Check the period.** Confirm the date range, the time zone and the cut-off rule. A month that ends at midnight on the last day in one system and at the last working day in another will never agree.
3. **Check the scope.** Are the same products, regions, currencies and business units included? Are credit notes, cancellations and internal transfers treated the same way?
4. **Check the source and the refresh time.** Where did each number come from, and when was it last updated? A dashboard that refreshes overnight will differ from a report run live at lunch.
5. **Bridge the gap.** List the items that explain the difference, such as signed but not yet invoiced, invoiced but not delivered, and returns, until the two figures reconcile to zero.

The bridge is the valuable output. A table that starts with the sales figure, subtracts signed-not-invoiced deals, adds back credit notes and arrives at the finance figure tells everyone how the numbers relate, and it can be reused next month.

## Decide which number answers which question

Once the difference is explained, agree which figure to use for which decision. Signed contracts are a good guide to future workload and pipeline health. Invoiced amounts suit cash planning and statutory reporting. Delivered orders show operational output. None of these is the true number. They are different views, and the mistake is using one to answer a question that belongs to another.

Write the agreement in one sentence per metric: what it counts, from which system, at what cut-off, and who owns the definition. Our discovery note on [metric definitions that live in slide decks instead of governed models](/discovery/metric-definitions-live-in-slide-decks-not-governed-models/) explains why leaving definitions in presentations is a recipe for repeat arguments.

## Give each number one official home

Disagreements multiply when anyone can calculate a headline figure in their own spreadsheet. A better arrangement is to calculate each important metric once, in a governed place, and have everyone else read it from there. Microsoft's documentation on [endorsing content in Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content) describes one way of doing this: datasets and reports can be marked as promoted or certified so that users can tell which ones the organisation trusts. Whatever tool you use, the principle is the same. Make the official version easy to find and clearly labelled, and make the unofficial ones visibly unofficial.

Microsoft's adoption guidance on [building a data culture](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture) makes a related point: trust in shared data depends on how it is governed and communicated, not only on the technology that serves it. A certified dataset nobody has heard of will not stop the arguments.

## Make numbers traceable

Many disputes last because nobody can show where a figure came from. If a person at the meeting can click through from a dashboard value to the underlying transactions, the argument ends quickly. If the number is a pasted image in a slide, it cannot be tested. Our discovery article on [why business users cannot trace a dashboard number to its source](/discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/) describes the problem and why it matters for trust.

At a minimum, add three lines under any figure presented in a meeting: the definition, the source and the date it was last refreshed. That small habit turns many disputes into a quick check.

## Handle the meeting itself

When a clash happens live, resist the pull to resolve it on the spot. A useful rule is to park the disagreement, record the two figures and their stated definitions, and assign one person to produce a reconciliation by a set date. Continue the meeting with the decision that can be taken using the range between the numbers. Often the decision is the same whichever figure is correct, and the argument turns out to have been unnecessary.

Name an owner for each key metric. This is usually someone in finance or operations who can explain how it is built, answer queries and approve changes. Without an owner, a definition drifts as each team adjusts its own copy. With one, there is a single person to ask and a single place where a change is recorded.

## Reduce what you present

The more numbers in circulation, the more chances for conflict. A short list of agreed headline measures, each with a clear definition, does more for alignment than a large dashboard. Our article on [deciding what should be on an operations dashboard](/insights/how-to-decide-what-should-be-on-an-operations-dashboard/) offers a way to choose which measures earn a place.

## Practical next actions

1. Pick the one figure your teams argue about most and write each team's definition of it side by side.
2. Build a simple bridge table that reconciles the highest and lowest versions of that figure for last month.
3. Agree in writing which version is used for which decision, and name one owner for each key metric.
4. Add a definition, a source and a last-refreshed date beneath every figure shown in management meetings.
5. Move the official calculation of each headline metric into one governed place and label other versions as unofficial.

Disagreement about numbers is a signal that a definition or a data flow needs attention. Treat it as information and fix the cause once, and the same argument will not return next month.
