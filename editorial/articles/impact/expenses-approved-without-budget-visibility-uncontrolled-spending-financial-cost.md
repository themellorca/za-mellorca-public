---
hub: impact
record_id: CPS-360
slug: expenses-approved-without-budget-visibility-uncontrolled-spending-financial-cost
title: Approving Expenses Without Seeing the Budget: How Spending Drifts Out of Control
description: When managers approve spend without seeing what is budgeted, spent and already committed, small sensible decisions add up to overspend, cash flow surprises and costly month-end reconstruction.
lead: When managers approve spend without seeing what is budgeted, spent and already committed, small sensible decisions add up to overspend, cash flow surprises and costly month-end reconstruction.
category: Finance Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Finance Operations
commercial_domain: Finance Operations
primary_pain: Expenses approved without visibility of budget, spend and commitments
primary_cost_mechanism: Overspend against plan, unplanned borrowing, duplicate or unconsolidated purchases and finance time spent reconstructing approvals after month-end
sources:
  - Workflows in Dynamics 365 Business Central - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-workflow
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Create and test an approval workflow with Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/modern-approvals
related:
  - Cash-Flow Forecasts Built on Incomplete or Outdated Information | /impact/cash-flow-forecasts-built-on-incomplete-outdated-information-liquidity-planning-cost/
  - The Payroll Cost of a Slow, Spreadsheet-Heavy Month-End | /impact/manual-month-end-close-payroll-cost/
  - When the Books Do Not Match the Business: The Cost of Constant Reconciliation | /impact/accounting-records-not-matching-operations-reconciliation-decision-uncertainty-cost/
summary: When managers approve spend without seeing what is budgeted, spent and already committed, small sensible decisions add up to overspend, cash flow surprises and costly month-end reconstruction.
layout: plain
---
## The approval that nobody could judge

A branch manager at a Durban distribution company receives a request from the workshop for a R38,000 replacement compressor. It arrives as a forwarded email with a quote attached. He knows the compressor is old. He does not know how much of the maintenance budget has already been spent this quarter, whether another branch has a spare, or whether R38,000 will push the line over what head office allowed. He has a few minutes between meetings, so he replies "approved".

That approval was reasonable on the information he had. It was also made blind. Three weeks later the finance team finds that maintenance is 40% over for the year, and the money is gone. Nobody did anything dishonest. The approval simply happened without the figures that would have made it a decision rather than a signature.

This article looks at expenses that are approved without sight of the budget, and at how uncontrolled spending builds up from many small, individually sensible approvals. It differs from the delay problem in [approval queues that block capacity](/impact/approval-queues-blocked-capacity-cost/): here the approvals are fast, but they are uninformed.

## What "without visibility" looks like

- Approvers who see the request and the amount but not the budget line, the amount already spent or the amount already committed.
- Budgets held in a finance spreadsheet that managers have never opened.
- Purchase orders and expense claims approved by email, with the month-end report arriving weeks later.
- Commitments that have been agreed but not yet invoiced, which therefore do not appear in the accounting system at all.
- Different people approving against the same budget with no sight of each other's decisions.
- Budgets that were set at the start of the year and never revised after prices or volumes changed.

## Spent versus committed

A budget view that only shows invoices already posted is always behind. The money that matters for a new approval is the spend to date plus everything already promised through approved purchase orders and requests. Business software describes this idea in its own terms; for example, Microsoft's documentation on [workflows in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/across-workflow) explains how approval workflows can be built so that documents are routed to the right approver before they proceed. The approver's decision is only as good as what they see when they make it.

Without that view, the approver is forced to use judgement alone: is this amount "about right"? Judgement works for a single request. It fails when twenty reasonable requests add up to an unreasonable total.

## How the pain becomes money

- **Overspend against plan.** Small approvals accumulate and breach the budget before anyone notices.
- **Emergency cuts.** Late discovery forces blunt freezes on spending that was actually valuable, so productive work is delayed to rescue the numbers.
- **Cash flow surprise.** Commitments land on supplier statements at month-end, in a month when cash was expected to be tight, increasing reliance on overdraft facilities.
- **Duplicate and non-essential spend.** Two departments buy similar items because neither could see the other's request.
- **Lost negotiating position.** Spend that is approved piecemeal cannot be consolidated for better pricing.
- **Management time.** Finance spends days after month-end querying approvals and reconstructing what happened. Chasing employees for supporting documents, as in [chasing employees for receipts and expense information](/impact/chasing-employees-for-receipts-expense-information-payroll-cost/), adds to this.

## An illustrative cost model

The following numbers are **illustrative assumptions** for a hypothetical Gauteng company with an annual operating budget of R24 million across six cost centres.

| Assumption | Value |
| --- | --- |
| Discretionary spend approved by managers each year | R6,000,000 |
| Share approved without sight of the budget position | 70% |
| Share of that spend that would have been reduced, deferred or consolidated with visibility | 6% |
| Interest cost of extra short-term borrowing | R45,000 a year |
| Finance hours per month spent reconstructing approvals | 20 at R320 an hour |

- Avoidable spend: R6,000,000 × 70% × 6% = R252,000
- Extra borrowing cost: R45,000
- Reconstruction time: 20 × 12 × R320 = R76,800
- **Illustrative total: about R374,000 a year**

Each assumption can be tested against the business's own figures. If your own number for the avoidable share is 2% rather than 6%, the cost is still large enough to justify better visibility.

## Why it is tolerated

Approving quickly feels responsible, because the business keeps moving. Budgets are treated as a finance concern, and managers are never given the numbers in a form they can use. Finance, for its part, assumes managers know their limits. The month-end report becomes a postmortem instead of a steering tool. And because each overspend is small, nobody sees the pattern until the year-end result arrives.

It is also a design issue. If the budget lives in one tool and the request in another, the approver has to go and look. Under time pressure, they do not. This echoes the theme in [invoice approvals trapped in inboxes](/impact/pain-invoice-approvals-in-inboxes/), where context and decision are separated.

## What better looks like

Better does not mean slower. It means the approver sees the right numbers in the same place as the request.

1. **Put the budget position on the request.** Show the budget line, the amount spent, the amount already committed and the balance after this request.
2. **Use approval thresholds.** Low-value, low-risk items can be approved quickly or automatically within limits, while larger or off-budget items require more review. The ideas in [approving low-risk transactions one by one](/impact/approving-low-risk-transactions-one-by-one-management-cost/) help prevent a sensible control from becoming a bottleneck.
3. **Route automatically to the right approver.** Tools such as the approvals feature described in [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) show how requests can be sent to approvers and the decision recorded without a trail of forwarded emails.
4. **Count commitments, not just invoices.** Record purchase orders at approval so the committed figure is always up to date.
5. **Handle off-budget requests explicitly.** Allow them, but require a named person to confirm where the money will come from.
6. **Review monthly with managers, not only with finance.** A short budget-versus-actual conversation with each cost-centre owner catches drift while it can still be corrected.

## When it becomes urgent

- the year-end result differs sharply from the plan and nobody can point to why;
- the bank overdraft is being used more often to cover supplier payments;
- managers say they approve things "because the request looked reasonable";
- finance regularly discovers purchases it did not know were committed;
- a lender or investor asks for budget control evidence.

## Practical next actions

1. Pick one cost centre and list the last ten approvals. For each, ask whether the approver could see the budget position at that moment.
2. Give each budget holder a one-page monthly view of budget, spend, commitments and balance.
3. Add a "budget balance after this request" field to your purchase request form.
4. Set a value threshold above which the finance team sees the request before it is approved.
5. Review one quarter of approvals to find duplicates that could have been consolidated.

## Bottom line

Spending is rarely out of control because of one bad decision. It drifts when many decisions are made without sight of the budget, and the result arrives weeks after the chance to change it. Showing approvers the budget, the committed amount and the balance on the request itself turns an approval from a guess into a decision, and it does so without making the business slower.
