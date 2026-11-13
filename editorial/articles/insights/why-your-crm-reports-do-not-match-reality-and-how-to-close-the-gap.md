---
hub: insights
record_id: INS-092
slug: why-your-crm-reports-do-not-match-reality-and-how-to-close-the-gap
title: Why Your CRM Reports Do Not Match Reality
description: The dashboard says the quarter is on track; the sales team knows it is not. The gap usually comes from how records are kept, not from the reporting tool. Here is where it opens and how to close it.
lead: The dashboard says the quarter is on track; the sales team knows it is not. The gap usually comes from how records are kept, not from the reporting tool. Here is where it opens and how to close it.
category: CRM and Customer Systems
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: CRM and Customer Systems
sources:
  - Sales forecasting overview | https://learn.microsoft.com/en-us/dynamics365/sales/project-accurate-revenue-sales-forecasting
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Understand the sales process | https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales
related:
  - Why Your CRM Needs Operating Rules, Not Just Configuration | /insights/why-your-crm-needs-operating-rules-not-just-configuration/
  - When to Reconfigure a CRM and When to Replace It | /insights/when-to-reconfigure-a-crm-and-when-to-replace-it-a-decision-guide/
  - How CRM Ownership Should Work | /insights/how-crm-ownership-should-work-roles-decisions-and-permissions/
summary: The dashboard says the quarter is on track; the sales team knows it is not. The gap usually comes from how records are kept, not from the reporting tool. Here is where it opens and how to close it.
layout: plain
---
A managing director in Centurion opens the CRM dashboard on the first Monday of the quarter. The pipeline shows R18 million in open opportunities and a forecast comfortably above target. By the end of the quarter, actual sales come in 30% below that forecast. When she asks why, the sales manager says what everyone on the team already knew: half of those opportunities had been dead for months, a few large deals had close dates that kept moving, and several real deals were never entered at all.

The report was accurate. It summarised exactly what was in the system. The system just did not describe the business. This gap between CRM reports and reality is one of the most common reasons owners lose faith in their CRM, as we discuss in [why teams stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/). The good news is that its causes are specific and fixable.

## Where the gap comes from

CRM reports depend on a handful of fields being right: the stage of each opportunity, its value, its expected close date, its owner and whether it is still open. Each of these drifts away from reality in a predictable way.

### Stale opportunities that nobody closes

Salespeople are rarely rewarded for closing deals as lost. A lost deal lowers their pipeline and invites questions. So dead opportunities stay open, sometimes for years, inflating every pipeline report. The longer an opportunity has had no activity, the less likely it is to be real.

### Close dates that slide

When an expected close date passes, the easiest action is to push it forward a month. Repeat that a few times and the forecast keeps including deals that will never close this quarter. A single deal with a date moved five times tells you more about its health than its stage does.

### Stages that do not mean anything specific

If "Proposal" means "we sent something" for one salesperson and "the customer asked for a formal quote" for another, the stage report mixes very different situations. Stages need entry criteria based on what the customer has done, not on how the salesperson feels. Our guide to [designing CRM stages that match what your team actually does](/insights/how-to-design-crm-stages-that-match-what-your-team-actually-does/) covers this.

### Values that were never updated

The first estimate of a deal's value is often a guess made before scoping. If nobody updates it as the deal develops, the report sums guesses.

### Work that never enters the CRM

Repeat orders from existing customers, deals handled personally by the owner and quotes sent from a spreadsheet often bypass the CRM. The report is missing real business, which makes it wrong in the other direction. For more on how this happens, see [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/).

## Forecasts are only as good as the habits behind them

Vendors are clear that forecasting depends on current pipeline data. Microsoft's [sales forecasting overview](https://learn.microsoft.com/en-us/dynamics365/sales/project-accurate-revenue-sales-forecasting) describes forecasting as combining pipeline activity, forecast categories, quotas and hierarchy rollups to give a near real-time view of expected revenue, and says forecasts work best when reviewed regularly as a planning tool rather than treated as a reporting artefact. It also allows managers to adjust forecast values for factors not yet captured in the system. Those adjustments are a useful signal: if managers routinely override the numbers, the data underneath them needs attention.

## Measure the quality of the data behind the report

Before trying to fix the report, measure the data feeding it. The UK government's [Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) lists dimensions including completeness, timeliness, validity and accuracy, and recommends tackling quality problems at their source rather than with temporary fixes. Applied to a CRM pipeline, simple checks include:

- The share of open opportunities with no activity in the last 30, 60 and 90 days.
- The share with an expected close date already in the past.
- The number of times close dates have been moved on the largest deals.
- The share of opportunities missing a value, a next step or a decision-maker contact.
- Actual sales last quarter that never appeared in the CRM as opportunities.

Put these on a one-page data health view and review it alongside the pipeline report. A pipeline report without data health indicators invites false confidence.

## Fix the habits, then the report

**Introduce a stale-deal rule.** Any opportunity with no activity for an agreed period, say 45 days, is flagged automatically. The owner must either log a next step with a date or close it as lost with a reason. Make closing a lost deal a normal, unpunished action, and review loss reasons rather than loss counts.

**Track close-date changes.** Most CRMs can record field history. Report on deals whose close date has moved more than twice and discuss them in pipeline reviews.

**Define stage entry criteria.** Tie each stage to a customer action that can be verified: a meeting held, a requirement confirmed, a quote requested, a verbal commitment given. Microsoft's description of the standard [sales process](https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales), from qualifying a lead through developing, proposing and closing, is a reasonable starting template to adapt.

**Bring all sales into the system.** Decide which business must be recorded as opportunities, including repeat orders above a certain size, and make it easier to create an opportunity than to work around the CRM.

**Change the pipeline review.** Instead of walking through every deal, focus the weekly review on exceptions: stale deals, slipped dates, deals without next steps and large deals that changed stage. This makes data quality part of the sales conversation rather than an administrative chore.

## Reconcile the CRM with the accounting system

Once a quarter, compare closed-won opportunities in the CRM with invoiced revenue in the accounting system. The figures will not match exactly, because timing and definitions differ, but the size and pattern of the difference are informative. Large unexplained gaps usually mean sales are bypassing the CRM or deals are marked won before they are real. Our article on [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) explains how to separate definitional differences from real errors.

## Practical next actions

1. Build a one-page data health view showing stale opportunities, past-due close dates, missing values and repeatedly moved close dates.
2. Introduce a stale-deal rule that requires a dated next step or a lost reason after an agreed period of inactivity.
3. Rewrite stage definitions as verifiable customer actions and share them with the whole sales team.
4. Decide which sales must be recorded as opportunities, including repeat business above a set value, and remove barriers to doing so.
5. Refocus weekly pipeline reviews on exceptions rather than walking through every deal.
6. Each quarter, reconcile closed-won CRM opportunities with invoiced revenue and investigate the largest unexplained differences.
