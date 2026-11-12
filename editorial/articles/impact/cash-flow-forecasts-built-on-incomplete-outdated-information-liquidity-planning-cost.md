---
hub: impact
record_id: CPS-362
slug: cash-flow-forecasts-built-on-incomplete-outdated-information-liquidity-planning-cost
title: Cash-Flow Forecasts Built on Incomplete or Outdated Information
description: A forecast that ignores approved orders, real customer payment habits and tax dates looks reassuring until the overdraft is touched.
lead: A forecast that ignores approved orders, real customer payment habits and tax dates looks reassuring until the overdraft is touched.
category: Finance Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Finance Operations
commercial_domain: Finance Operations
primary_pain: Cash-flow forecasts are built from missing commitments, stale balances and assumed payment dates
primary_cost_mechanism: Emergency borrowing, late supplier and tax payments with penalties, delayed investment decisions, idle surplus cash and management time spent on surprises
sources:
  - Cash flow forecasting - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/cash-bank-management/cash-flow-forecasting
  - Value-Added Tax - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/
  - Pay As You Earn - South African Revenue Service | https://www.sars.gov.za/types-of-tax/pay-as-you-earn/
related:
  - Paying the Same Supplier Invoice Twice: The Direct Cost of Weak Controls | /impact/duplicate-supplier-invoice-payments-weak-controls-cost/
  - Approving Expenses Without Seeing the Budget: How Spending Drifts Out of Control | /impact/expenses-approved-without-budget-visibility-uncontrolled-spending-financial-cost/
  - Which Customers Are Becoming Payment Risks? The Cost of Acting Late on Overdue Accounts | /impact/customers-becoming-payment-risks-late-action-overdue-accounts-cost/
summary: A forecast that ignores approved orders, real customer payment habits and tax dates looks reassuring until the overdraft is touched.
layout: plain
---
## The forecast that was right on the day it was made

A Johannesburg wholesaler builds a cash-flow forecast every month. The finance manager exports the bank balance, adds the invoices due from customers, subtracts the supplier payments she knows about, and arrives at a comfortable closing figure for the next ninety days. The spreadsheet is tidy. Then three things happen that were not in it: a large customer pays three weeks late, a supplier demands settlement on delivery after a quarrel about terms, and a VAT payment turns out to be bigger than expected because of a batch of invoices captured late. By the second week the overdraft is touched, and the owner learns about it from the bank rather than from the forecast.

The spreadsheet was not wrong in its arithmetic. It was built from information that was already stale, or incomplete, when the formulas were typed. That is the problem this article addresses: forecasts built on partial inputs, and the cost of making liquidity decisions with them. It is different from [late invoicing](/impact/late-invoicing-manual-billing-cash-flow-cost/), which is about how quickly money is requested, and from [inconsistent payment follow-up](/impact/inconsistent-payment-follow-up-cash-flow-cost/), which is about how reliably it is chased. Here the question is how well you can see what is coming.

## How a forecast becomes incomplete or outdated

Most forecasts fail through ordinary gaps, not dramatic errors. The same few patterns appear again and again.

- **Invoices not yet raised.** Work has been delivered but billing is a week behind, so the money does not appear in the receivables the forecast uses.
- **Supplier commitments outside the ledger.** Purchase orders approved by a manager, deposits promised verbally and stock ordered on a phone call are known to the person who made them, and to nobody building the forecast.
- **Customer payment dates taken from terms, not behaviour.** An invoice on thirty-day terms is treated as cash on day thirty, even though this customer has paid on day fifty for a year.
- **Tax and payroll dates forgotten or approximated.** VAT, PAYE and provisional tax have fixed dates and amounts that depend on activity in earlier months.
- **Bank data that is several days old.** Balances copied from a statement last Thursday do not include the debit orders and card payments since.
- **Annual and irregular costs left out.** Insurance premiums, licence renewals, bonuses and maintenance contracts do not occur monthly, so they fall outside a rolling monthly view.
- **A single version, owned by one person.** The forecast lives on a personal laptop, is updated when time allows, and is not seen by the people whose decisions change it.

## The financial cost of a poor liquidity picture

The cost rarely appears as one dramatic loss. It builds through smaller, repeated expenses that a better view would have avoided.

1. **Emergency borrowing.** Short-notice overdraft use or a quick loan usually costs more than facilities arranged in advance, because the business is negotiating from urgency.
2. **Late payment of suppliers.** A cash squeeze that nobody saw coming leads to missed payment dates, which can bring penalties, loss of settlement discounts, and weaker terms next time.
3. **Tax penalties and interest.** The South African Revenue Service sets deadlines for each tax type, and missing them can attract penalties and interest. The [SARS VAT guidance](https://www.sars.gov.za/types-of-tax/value-added-tax/) sets out the filing and payment obligations that a forecast should treat as fixed events, not estimates. The [PAYE guidance](https://www.sars.gov.za/types-of-tax/pay-as-you-earn/) does the same for payroll tax withheld from employees.
4. **Delayed investment.** A business that does not trust its numbers delays good decisions: the hire that would have eased a bottleneck, the equipment that would have cut costs, or the bulk purchase that would have earned a discount.
5. **Surplus left idle.** The opposite error also costs money. A forecast that is too pessimistic keeps cash sitting in a current account when it could settle a facility or earn a return.
6. **Management time.** Each surprise triggers a round of calls, a hurried meeting and a reworked spreadsheet. That is payroll spent on firefighting.

## What a better forecast is built from

Finance software describes the same ingredients in plain terms. Microsoft's documentation on [cash flow forecasting in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/cash-bank-management/cash-flow-forecasting) explains that a forecast draws on several kinds of source, such as customer and supplier transactions, orders not yet invoiced, and general ledger budgets, and that liquidity is forecast over defined time periods. You do not need that product to apply the lesson. A forecast is only as good as the number of known commitments that feed it and the freshness of each.

### The five inputs to check first

| Input | Common gap | Fix |
| --- | --- | --- |
| Opening bank balance | Copied from an old statement | Refresh on the day the forecast is read |
| Money owed to you | Based on terms, not actual payment behaviour | Use each customer's average days-to-pay |
| Money you owe | Missing approved orders and verbal commitments | Record purchase orders when approved |
| Tax and payroll | Approximated or forgotten | Enter as dated fixed events |
| Irregular costs | Left out of the monthly view | Keep a twelve-month calendar of renewals and annual bills |

## Make the forecast a shared routine, not a personal file

Better inputs matter, but so does rhythm. A forecast that is rebuilt once a month from scratch is always a month old by the time it is used. Many small businesses do better with a lighter weekly cycle: refresh the bank balance, update which invoices were actually paid, add new commitments, and roll the view forward by one week. The task takes less time than the monthly version because most of it is already there.

Visibility to others is just as important. The sales manager who promises a large discount for early payment, the operations lead who orders a container of stock, and the owner considering a new vehicle should all be able to see the current picture, or at least ask for it. When the forecast is a private file, those decisions are made blind. This links to a wider theme covered in [waiting weeks for management reports](/impact/waiting-weeks-for-management-reports-late-visibility-cost/): information that arrives late has already lost much of its value.

A final habit is to compare forecast and actual at each week's end. Note where the gap was largest and why. After three or four cycles the pattern is clear: perhaps one customer is consistently late, or a certain supplier always invoices early. That feedback, more than any formula, improves the next forecast.

## A short example

Imagine a services firm with R400,000 in the bank. The forecast shows R650,000 of customer receipts over six weeks against R500,000 of payments. That looks safe. But two customers account for R300,000 of the receipts, and both have a history of paying about three weeks after the due date. A salary run and a VAT payment fall in week three. Adjusted for real payment behaviour, the balance dips below zero in week four. The figures are illustrative, but the lesson is real: the same data, read with actual behaviour in mind, tells a different story, and tells it early enough to arrange a facility or phone those customers first.

## Practical next actions

1. List every source that should feed your forecast, such as bank, receivables, payables, purchase orders, payroll, VAT and annual bills, and mark which ones you currently leave out.
2. Refresh the opening bank balance on the day the forecast is used, and note the date and time on the sheet so readers know how old it is.
3. Replace invoice due dates with each major customer's actual average days-to-pay for the biggest ten debtors, and use the later date in the forecast.
4. Create a twelve-month calendar of fixed events, including VAT, PAYE, provisional tax, insurance, licences and bonuses, and load it into the forecast as dated entries.
5. Move from a monthly rebuild to a short weekly update, share it with the people who commit money, and compare forecast with actual each week.

A cash-flow forecast does not need to be sophisticated to be useful. It needs to be current, complete enough to include what is already committed, and visible to those who can change the outcome. See also [the cash-flow week that keeps the owner awake](/moments/the-cash-flow-week-that-keeps-the-owner-awake/) for how this feels from the owner's chair.
