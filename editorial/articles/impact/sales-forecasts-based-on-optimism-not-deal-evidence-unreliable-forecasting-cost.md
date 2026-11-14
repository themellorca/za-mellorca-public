---
hub: impact
record_id: CPS-309
slug: sales-forecasts-based-on-optimism-not-deal-evidence-unreliable-forecasting-cost
title: Forecasts Built on Hope: What Unreliable Sales Numbers Cost the Business
description: When pipeline stages reflect optimism rather than evidence, cash plans, stock and hiring are committed against revenue that never arrives.
lead: When pipeline stages reflect optimism rather than evidence, cash plans, stock and hiring are committed against revenue that never arrives.
category: Sales Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Sales Operations
commercial_domain: Sales Operations
primary_pain: Sales forecasts based on optimism instead of actual deal evidence
primary_cost_mechanism: Cash and hiring commitments made against revenue that does not arrive, stock and capacity in the wrong place, wasted forecast-review time, and lost credibility with lenders and owners
sources:
  - https://help.salesforce.com/s/articleView?id=sales.forecasts3_overview.htm | https://help.salesforce.com/s/articleView?id=sales.forecasts3_overview.htm
  - Configure forecasts in your organization | https://learn.microsoft.com/en-us/dynamics365/sales/configure-forecast
  - https://help.salesforce.com/s/articleView?id=sales.sales_core_opportunity_stages.htm | https://help.salesforce.com/s/articleView?id=sales.sales_core_opportunity_stages.htm
related:
  - Leads nobody has touched: The revenue cost of invisible follow-up failure | /impact/untouched-leads-invisible-follow-up-failure-revenue-cost/
  - Customer records in salespeople's spreadsheets: The revenue and continuity cost | /impact/salespeople-personal-spreadsheets-customer-records-cost/
  - An inbox is not a sales process: The revenue cost of emailed website enquiries | /impact/website-enquiries-email-inbox-sales-process-revenue-cost/
summary: When pipeline stages reflect optimism rather than evidence, cash plans, stock and hiring are committed against revenue that never arrives.
layout: plain
---
## The number everyone expects and nobody trusts

At a Cape Town software reseller, the monthly forecast meeting follows a familiar script. Each sales manager presents a pipeline total. The sales director adds a note about "momentum" in one region. The managing director asks whether the number is firm, and is told it is "pretty solid". Two weeks before quarter end, a large deal slips because the customer's finance approval is delayed. Another has been "about to sign" for four months. The quarter closes at 71% of forecast, the cash plan is already committed, and the finance manager has to ask the bank for a short extension on the overdraft.

Nobody lied. The forecast was built on what people hoped would happen rather than on what the deals showed. This article is about that pattern: sales forecasts based on optimism instead of actual deal evidence, and the financial cost of forecasts that cannot be relied upon.

## How optimism gets into a forecast

A forecast is supposed to be an estimate of what will happen. In many businesses, it is a statement of what the team would like to happen, adjusted for how the person presenting it feels. Several habits create that outcome.

- **Stage means feeling.** A deal is "proposal sent" because a proposal went out, not because the customer has confirmed they have a budget, a decision-maker and a date.
- **Probabilities are set by default.** Each stage carries a fixed percentage that has never been compared with what actually closed.
- **The salesperson is the only judge.** The same person who benefits from a bigger pipeline decides how likely each deal is.
- **Old deals never leave.** Opportunities that have not moved for months remain open because closing them looks like a loss. This is covered in [why dead deals stay open in the CRM](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/).
- **Updates happen before the meeting.** The record is tidied up for the review rather than as the work happens, as described in [why CRM updates happen only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/).

## What the tools assume

CRM platforms can roll opportunities up into forecasts, but they only reflect what has been entered. Salesforce's [forecasting documentation](https://help.salesforce.com/s/articleView?id=sales.forecasts3_overview.htm) describes forecasts as being built from opportunity data and the categories assigned to it. Microsoft's guide to [configuring forecasts in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/configure-forecast) likewise describes forecasts derived from the sales pipeline, with the forecast type and hierarchy defined by the organisation. Both make the same implicit point: the forecast is only as good as the opportunity data beneath it. If the stage and category on each deal are opinions, the roll-up is a polished opinion.

## The financial cost of an unreliable forecast

### Cash decisions made on revenue that does not arrive

Hiring, stock orders, marketing spend and supplier commitments are often made against the forecast. When revenue lands 29% short, the business is committed to costs it cannot cover. It may then lean on overdraft facilities, delay supplier payments or cut spending abruptly, all of which cost money and credibility.

### Stock and capacity in the wrong place

A reseller that orders hardware for deals which do not close holds stock it must discount or carry. A services firm that hires to deliver forecast work finds consultants idle. In both cases, the cost of the error is paid by operations, not sales.

### Wasted management time

Weekly forecast meetings that cannot be trusted lead to side reviews, spreadsheets compiled by hand and managers who keep their own private numbers. The same figure is being produced three ways, and none matches. This is similar to the pattern in [weekly manual progress reporting](/impact/weekly-manual-progress-reporting-status-administration-payroll-cost/).

### Loss of credibility with lenders and owners

Repeated misses make banks, investors and boards discount everything the management team says. Once that happens, even accurate forecasts are treated with suspicion, and the business pays for it in tighter terms.

### Misdirected effort

Managers coach on the deals that look biggest rather than the ones that are real. Time goes into a deal that was never going to close, while a smaller, well-qualified one waits for attention.

## What deal evidence looks like

Replacing hope with evidence does not require sophisticated analytics. It requires agreeing what counts as proof at each stage, and recording it.

| Stage | Evidence that should exist |
| --- | --- |
| Qualified | Named decision-maker, stated problem, confirmed budget range |
| Proposal | Customer has reviewed the proposal and given written feedback |
| Negotiation | Procurement or finance contact engaged, approval route known |
| Committed | Purchase order, signed quote or written confirmation with a date |

Each stage should have criteria that someone else can check. A deal that sits at a stage without the evidence moves back. The criteria can be a short checklist stored on the opportunity itself, and a manager who reviews the forecast looks at the checklist rather than the salesperson's confidence.

The second discipline is measuring accuracy. Compare each month's forecast with the outcome, by stage and by salesperson. If deals at "proposal" close at 15% rather than the 50% your system assumes, the data tells you to change the number. Over a few quarters, you will see who forecasts well and which stage assumptions are unrealistic. Small businesses with few deals can do this on a spreadsheet. It need not wait for a new platform, and it fits well with the thinking in [CRM tasks worth automating first](/insights/crm-tasks-worth-automating-first/), where basic data discipline comes before any clever tooling.

## Separating the forecast from the target

Many forecasts are really targets in disguise. A target says what the business wants. A forecast says what it expects. When the two are mixed, managers feel pressure to forecast what leadership wants to hear. Keep them separate, show the gap between them, and treat the gap as the thing to manage. Present a range, such as a committed figure, a likely figure and an upside, so decisions about spending can be tied to the figure that deserves it.

## Practical next actions

1. **Compare the last four quarters of forecast with actual closed revenue.** Note the percentage miss for each, and list the five largest deals that did not close and why.
2. **Write evidence criteria for every pipeline stage.** Keep them to three or four checkable items and agree them with the sales team.
3. **Close or downgrade every opportunity with no activity in 60 days.** Require a next step and a date on everything that remains open.
4. **Replace default stage percentages with your own historic close rates.** Recalculate them each quarter as more data arrives.
5. **Report the forecast as a range.** Show committed, likely and upside separately, and tie cash and hiring decisions to the committed figure first.
6. **Review forecast accuracy by person and stage every month.** Use the results for coaching, not blame.

A forecast that can be checked is one the whole business can plan around. The goal is not a pessimistic number. It is a number that holds up when the quarter ends.
