---
hub: impact
record_id: CPS-045
slug: fees-commissions-charges-calculated-in-spreadsheets-error-cost
title: Commissions and Fees Worked Out in Spreadsheets: The Payroll and Error Cost
description: Routine fees, commissions and charges calculated by hand in spreadsheets cost paid hours every cycle and cause over- and under-payments that are hard to detect and harder to explain.
lead: Routine fees, commissions and charges calculated by hand in spreadsheets cost paid hours every cycle and cause over- and under-payments that are hard to detect and harder to explain.
category: Finance Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Finance Operations
commercial_domain: Business Automation
primary_pain: Staff manually calculate routine fees, commissions or charges in spreadsheets
primary_cost_mechanism: Payroll cost of repeated calculation and review, with over-payment, under-billing and dispute cost from errors
sources:
  - Record special sales prices and discounts - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-record-sales-price-discount-payment-agreements
  - Apply data validation to cells - Microsoft Support | https://support.microsoft.com/en-us/office/apply-data-validation-to-cells-29fecbcc-d1b9-42c1-9d76-eff3ce5f7249
  - Display the relationships between formulas and cells - Microsoft Support | https://support.microsoft.com/en-us/office/display-the-relationships-between-formulas-and-cells-a59bef2b-3701-46bf-8ff1-d3518771d507
related:
  - Typing Invoices From Data You Already Hold: The Labour and Billing Delay Cost | /impact/invoices-retyped-from-existing-records-billing-labour-cost/
  - Paying the Same Supplier Invoice Twice: The Direct Cost of Weak Controls | /impact/duplicate-supplier-invoice-payments-weak-controls-cost/
  - The Payroll Cost of a Slow, Spreadsheet-Heavy Month-End | /impact/manual-month-end-close-payroll-cost/
summary: Routine fees, commissions and charges calculated by hand in spreadsheets cost paid hours every cycle and cause over- and under-payments that are hard to detect and harder to explain.
layout: plain
---
## The tolerated pain: the rules live in a workbook

Most businesses have a handful of calculations they run every week or month. Sales commission by product and target band. Management fees as a percentage of rent collected. Admin charges, late fees or interest on overdue accounts. Rebates for customers who reach a volume. Agent or broker fees on each deal. Delivery charges by distance and weight.

In many South African small and mid-sized businesses these calculations live in a spreadsheet that someone built years ago. Each cycle, an administrator exports data from the accounting or sales system, pastes it into the workbook, adjusts a few formulas for this month's exceptions, and copies the results into payroll or onto invoices. Only one or two people fully understand how the workbook works.

The calculation itself is rarely complicated. The cost comes from repeating it by hand, from the errors that creep in when data is pasted and formulas are adjusted, and from the time spent explaining the result to the people it affects. This is a concrete example of [an important process running in Excel](/patterns/why-your-most-important-process-is-running-in-excel/).

## Why businesses tolerate it

- **Spreadsheets are flexible.** When commission plans or fee structures change, the workbook can be changed the same afternoon.
- **The rules are unusual.** Plans include exceptions, splits and manual adjustments that nobody wants to formalise.
- **Nobody has seen an error.** Errors that are never detected look the same as no errors.
- **The workbook's author is trusted.** The process depends on a person, not a system, and that person is usually careful.

## Operational consequence

- Commission and fee runs take days, so results arrive late or close to the payroll or billing deadline.
- Salespeople, agents or customers query their figures, and each query requires someone to reconstruct the calculation.
- Manual overrides accumulate in cells with no record of who changed them or why.
- Different versions of the workbook circulate by email, and nobody is sure which one was used.
- Rate changes are applied late or inconsistently because the workbook was not updated in time.

Spreadsheets are not the problem in themselves. As discussed in [when a spreadsheet is a useful tool and when it becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/), the risk arises when a workbook quietly becomes the system that determines what people are paid or what customers are charged.

## How the pain becomes money

1. **Calculation labour:** the hours spent each cycle exporting, pasting, adjusting and copying results.
2. **Review labour:** the time a manager or finance lead spends checking the output, which grows as trust falls.
3. **Query and dispute labour:** time spent explaining or correcting figures for the people affected.
4. **Overpayment:** commission or rebates paid in error and rarely recovered, especially from staff who have left.
5. **Underbilling:** fees and charges not raised, or raised at old rates.
6. **Relationship cost:** salespeople who doubt their commission and customers who doubt their charges. Record these as incidents.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African business with 18 commissioned salespeople and recurring service fees on customer accounts. They are not benchmarks. Replace them with your own timings and a sample audit.

| Activity (illustrative) | Assumption | Hours per month |
| --- | --- | --- |
| Commission calculation run | Export, paste, adjust and copy | 14 |
| Management review of commission | Line-by-line check | 4 |
| Commission queries | 12 queries × 40 minutes | 8 |
| Calculating fees and charges for invoices | 320 accounts × 3 minutes | 16 |
| **Total** |  | **42** |

At an illustrative loaded cost of R280 an hour, 42 hours is R11,760 a month, or R141,120 a year, in calculation and checking labour alone.

The error cost must be measured, not assumed. Re-perform the calculation independently for a sample of past periods and record every difference. If, for example, a re-check of three months found R9,000 of commission overpaid and R6,000 of fees never charged, the annualised exposure would be about R60,000, on top of the labour. Your own sample may show much less, or much more.

## Secondary consequences

When commission depends on a workbook nobody else understands, the business has a key-person risk in a process that directly affects pay. When fees are calculated by hand, rate changes agreed in a contract can take months to appear on invoices. And when there is no audit trail, it becomes difficult to show a salesperson, a customer or an auditor how a figure was produced. Errors that reach customers also create rework elsewhere, as described in [the cost of fixing preventable mistakes](/impact/fixing-preventable-mistakes-rework-customer-time-cost/).

## When this becomes commercially urgent

- The commission or fee run regularly delays payroll or billing.
- Queries about commission or charges are increasing.
- A recalculation has already found a material error.
- The workbook's author is leaving, on leave, or the only person who can run it.
- The business is changing its commission plan or fee structure and dreads updating the workbook.

## What better looks like

The better state separates rules from data. Rates, bands, thresholds and validity dates are stored once, as configuration, with an owner and a change record. Transactions flow in from the system that records them, without pasting. The calculation runs the same way each time, and people review exceptions and approve overrides with a recorded reason.

Many business systems already handle rule-based pricing in this way. Microsoft's Business Central documentation, for example, describes price lists and discount agreements defined by customer, item, unit of measure, minimum quantity and validity dates, which the system then applies automatically on sales lines, calculating the best applicable price. Commission and fee rules can be handled similarly within an ERP, a dedicated commission tool or a controlled calculation built on the system's data.

Where a spreadsheet remains the right tool, it can still be made safer. Microsoft's Excel documentation describes data validation, which restricts the type of data or values that users can enter in a cell, and tools that trace precedents and dependents, which show which cells feed a formula and which cells depend on it. Locking rate tables, separating inputs from workings and outputs, and adding control totals that reconcile to the source system all reduce the chance of silent errors.

### Trade-offs to weigh

- **Complex plans resist automation.** Simplifying the commission plan may be worth more than automating a complicated one.
- **Flexibility has value.** A controlled spreadsheet may be better than a rigid system for a small team with changing rules.
- **Source data must be reliable.** Automated calculation on wrong sales or account data produces wrong results faster.
- **Change control is essential.** Rate changes need approval and an effective date, whatever tool is used.

## Practical diagnostic

1. List every routine fee, commission or charge the business calculates, how often, and in which tool.
2. Time a full cycle of the largest calculation, from data export to results delivered.
3. Count queries and corrections over the last six months and record their causes.
4. Re-perform the calculation independently for three past periods and record every difference.
5. Check whether the current rates in the workbook match the latest signed plan or contract.
6. Identify who else could run the calculation tomorrow if its owner were unavailable.

The risk of a single file controlling an important outcome is explored further in [the hidden risk of one file controlling an operation](/patterns/the-hidden-risk-of-one-file-controlling-an-operation/).

## The bottom line

Routine fees, commissions and charges calculated by hand in spreadsheets cost paid hours every cycle and expose the business to over- and under-payments it may never see. Storing the rules once, feeding the calculation from source data and reviewing exceptions rather than every cell turns a fragile monthly ritual into a controlled, explainable process.
