---
hub: impact
record_id: CPS-308
slug: no-reliable-view-of-future-sales-poor-pipeline-visibility-cash-flow-planning-cost
title: No Reliable View of Future Sales: The Cash-Flow Cost of Guessing
description: When a business cannot trust its view of future sales, spending, stock and payments are planned against numbers that do not hold, and the gap lands in cash flow.
lead: When a business cannot trust its view of future sales, spending, stock and payments are planned against numbers that do not hold, and the gap lands in cash flow.
category: Sales and Revenue
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Sales and Revenue
commercial_domain: Sales and Revenue
primary_pain: No reliable view of future sales, so plans rest on an unreliable open opportunity list
primary_cost_mechanism: Overdraft and late supplier payments when receipts fall short, mistimed stock and hiring commitments, missed discounts, management time spent disputing numbers, and weaker credibility with lenders
sources:
  - https://www.sars.gov.za/types-of-tax/value-added-tax/ | https://www.sars.gov.za/types-of-tax/value-added-tax/
  - https://www.sars.gov.za/types-of-tax/pay-as-you-earn/ | https://www.sars.gov.za/types-of-tax/pay-as-you-earn/
  - https://help.salesforce.com/s/articleView?id=sales.forecasts3_overview.htm | https://help.salesforce.com/s/articleView?id=sales.forecasts3_overview.htm
  - https://help.salesforce.com/s/articleView?id=sales.pipeline_inspection_overview.htm | https://help.salesforce.com/s/articleView?id=sales.pipeline_inspection_overview.htm
summary: When a business cannot trust its view of future sales, spending, stock and payments are planned against numbers that do not hold, and the gap lands in cash flow.
layout: plain
---
## The month the sales number was wrong by a quarter

The sales director of a Durban industrial-equipment supplier tells the board in January that the next quarter should bring in about R9 million. In March the figure turns out to be nearer R6.5 million. The deals did not disappear overnight. Two large quotes were still marked "negotiating" when the customers had gone quiet in November. One had been signed, but nobody had updated the record. Three smaller orders were counted twice, once in the quote list and once in the order list.

The finance manager, who had planned supplier payments, stock purchases and a VAT payment against the higher figure, now has a cash gap. The overdraft is used for three weeks, a supplier is paid late, and the purchase of a stock line that would have won a volume discount is postponed.

This is the pain of having no reliable view of future sales. It is not the absence of ambition or effort. It is that the business cannot say with confidence how much it will sell and when, and the cost shows up in cash flow and in every plan that depends on the number. We have looked at related symptoms in [complete sales data that still produces an unreliable pipeline](/patterns/when-sales-data-is-complete-but-the-pipeline-is-still-unreliable/) and in why [dead deals stay open and distort the forecast](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/). This article follows the consequences through the budget and the bank balance.

## Why the view is unreliable

Most small and mid-sized businesses do have a list of opportunities. The problem is that the list does not behave like a forecast.

- **Stages mean different things to different people.** "Proposal sent" might mean a verbal discussion to one salesperson and a formal quote to another.
- **Dates are hopeful.** Expected close dates are set when the opportunity is created and rarely moved until someone questions them.
- **Dead deals linger.** Opportunities that have stopped moving stay open because closing them lowers a number someone is measured on.
- **Updates arrive just before the meeting.** Our note on [why CRM updates happen only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/) shows how the record turns into a monthly performance rather than a live view.
- **Value is a guess.** Early-stage deal sizes are estimates, and nobody revisits them against what customers actually bought.
- **Repeat and renewal revenue sits elsewhere.** The recurring base lives in the finance system, the new business lives in the sales system, and nobody combines them.

## What poor visibility costs

### 1. Cash-flow stress

Revenue timing drives most of a business's short-term decisions. Payroll, supplier terms, rent and statutory payments are largely fixed. When the receipts are less than planned, the gap is filled by overdraft, delayed payments to suppliers, or reduced stock. Statutory dates do not move, either: VAT and employee tax obligations have set payment deadlines, set out on the [SARS value-added tax page](https://www.sars.gov.za/types-of-tax/value-added-tax/), and the [pay-as-you-earn page](https://www.sars.gov.za/types-of-tax/pay-as-you-earn/) sets out the employer's duties. If forecast sales are overstated, the money for these dates is less certain than the plan assumed.

### 2. Poorly timed spending

When the forecast is too high, the business orders stock, hires or commits to marketing before the revenue arrives. When it is too low, it passes up discounts, delays a hire the pipeline could support, or turns away capacity. Both errors are expensive, and the second is invisible because the lost opportunity never appears on a report.

### 3. Wasted management time

Weekly forecast meetings turn into negotiation about numbers. Instead of working out how to win the next deal, managers argue about whether last week's figure was too optimistic. Finance builds its own parallel forecast in a spreadsheet because it does not trust the sales one, and now two versions exist.

### 4. Weak decisions on capacity and credit

Whether to lease a vehicle, add a shift or agree extended payment terms to win a large customer all depend on the confidence one has in future revenue. Without reliable visibility, these decisions are made on instinct or on the loudest voice in the room.

### 5. Lost trust with lenders and investors

A business that repeatedly misses its own projections finds it harder to negotiate working-capital facilities, supplier credit or investment, because a lender reads a track record of missed forecasts as a signal about management control.

## An illustrative cash example

Suppose that the business plans on R9 million of quarterly sales at a 28 percent gross margin, and receives R6.5 million. The shortfall in revenue is R2.5 million, and the shortfall in gross margin is R700,000, but the cash effect is larger when stock and wages were committed against the higher figure. If the business covers a three-week gap with an overdraft at, say, 13 percent a year, the interest is small, perhaps in the low tens of thousands of rand. The real losses are the missed volume discount, the late supplier payment and the management attention consumed. These numbers are illustrative; the point is that the interest is the cheapest part.

The speed at which cash is converted matters too. Our article on [late invoicing and manual billing](/impact/late-invoicing-manual-billing-cash-flow-cost/) shows how delays after the sale stretch the gap further, and [slow lead response](/impact/slow-sales-lead-response-revenue-cost/) shows how revenue is lost before it ever enters the forecast.

## What a more reliable view needs

A forecast does not become reliable because a better tool is purchased. It becomes reliable through agreement on what the data means and discipline about keeping it current.

- **Stage definitions with exit criteria.** A deal reaches "proposal" only when a written quote has been sent, and "commit" only when the customer has confirmed budget and timing.
- **Automatic ageing flags.** Opportunities with no activity for a set number of days are highlighted and must be moved or closed.
- **Weighting by history.** Probabilities by stage are based on what the business actually closed over the last year, not on optimism.
- **Forecast categories and adjustments.** Salesforce's documentation on [forecasts](https://help.salesforce.com/s/articleView?id=sales.forecasts3_overview.htm) shows a common model, where each opportunity belongs to a category and managers can adjust a team's figure while keeping a record of what changed.
- **Change tracking.** Salesforce's [pipeline inspection](https://help.salesforce.com/s/articleView?id=sales.pipeline_inspection_overview.htm) tool is an example of surfacing deals that have moved, slipped or been added in a period, which turns the pipeline into a record of movement rather than a snapshot. The same idea can be applied in a spreadsheet by saving a copy each week.
- **One shared forecast.** Finance and sales work from the same record, with recurring revenue and new business combined into one view.

## Practical next actions

1. **Test last quarter's forecast.** Compare the forecast made at the start of each of the last four quarters with what was actually invoiced and collected. The size of the gap is your baseline.
2. **Clean the open list.** Review every open opportunity older than 90 days. Close what is dead, reset dates on what is alive, and write the next step for each.
3. **Write stage definitions.** One page, with an observable exit criterion for each stage, agreed by sales and finance and used by everyone.
4. **Add historical conversion rates.** Calculate the share of deals that closed from each stage over the past 12 months and use those figures instead of intuition.
5. **Build a 13-week cash view.** Link expected receipts to forecast sales and known payment dates, including tax obligations, and update it weekly.
6. **Review accuracy monthly.** Track forecast against actual, discuss the largest misses, and change the rules that caused them.

A forecast will never be perfect. The aim is a range the business can plan around, and a record that shows why it moved.
