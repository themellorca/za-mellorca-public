---
hub: discovery
record_id: DISC-121
slug: how-finance-and-operations-end-up-with-two-inventory-ageing-reports
title: Finance and operations report different stock ageing for the same goods
description: Slow-moving stock gets provided for on one number and discussed on another. Why ageing differs by date basis, location and cost, and how to agree one method.
lead: Slow-moving stock gets provided for on one number and discussed on another. Why ageing differs by date basis, location and cost, and how to agree one method.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Financial Controller / Supply Chain Manager
budget_owner: CFO / COO
sources:
  - Inventory aging report examples and logic - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/cost-management/inventory-aging-report
  - Inventory aging report storage - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/cost-management/inventory-aging-report-storage
  - IFRS - IAS 2 Inventories | https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/
related:
  - Reserved stock is treated as available stock | /discovery/why-reserved-stock-keeps-showing-as-available-to-sell/
  - Why Inventory Numbers Disagree Across Sales, Warehouse and Finance | /discovery/why-inventory-numbers-disagree-across-systems/
  - Why warehouses with different location codes cannot share stock data | /discovery/why-warehouses-with-different-location-codes-cannot-share-stock-data/
summary: Slow-moving stock gets provided for on one number and discussed on another. Why ageing differs by date basis, location and cost, and how to agree one method.
layout: plain
---
At a mid-sized electrical wholesaler, the financial controller presents a stock ageing schedule to the directors showing that 9% of inventory value is older than 180 days. The operations manager, working from the warehouse report, says the figure is closer to 15% and that the slow movers are mostly in the second branch. Both reports are produced from the same ERP. Both are, in their way, correct. The meeting ends with an action to "reconcile the ageing", which takes two analysts most of a week and produces a spreadsheet that nobody trusts the following month. (The figures here are invented for illustration; this is not a named business.)

## The problem in plain language

Inventory ageing sounds like a plain measure: how long has this stock been with us? In practice the answer depends on choices that are rarely written down. Age can be counted from the date goods were ordered, received, put away or invoiced. It can be measured per receipt batch or per item. It can be assessed per warehouse or per legal entity. It can treat a transfer between branches as a new arrival or as a continuation. It can be valued at purchase cost, at average cost or at a revised cost after month-end adjustments. If finance and operations make different choices, they get different ageing figures from identical stock.

The symptom is a standing disagreement about slow-moving stock: how much there is, where it is, and what it is worth. It surfaces in meetings, in year-end provisioning discussions and whenever someone is asked to decide which stock to discount, return to the supplier or write down.

## What the buyer is actually trying to solve

Search phrases include "inventory ageing report does not match finance", "stock ageing different in ERP and warehouse report", "how to calculate inventory age consistently", "slow-moving stock report discrepancy" and "ageing buckets inventory valuation". The aim is not a prettier report. It is a single, explainable definition of age that both finance and operations will accept, so that decisions about discounting and provisioning start from a shared number.

## Evidence and system mechanism

Documentation for inventory software shows how many decisions sit inside an ageing report. Microsoft's article on [inventory ageing report examples and logic](https://learn.microsoft.com/en-us/dynamics365/supply-chain/cost-management/inventory-aging-report) explains that the report places on-hand quantity and value into period buckets. Its worked example reveals several design choices that change the answer. The report determines on-hand quantity per bucket by summing the quantity received in each period and then applying first-in, first-out to deduct issues, regardless of the costing model the item uses. Values come from the financial inventory dimension, and the same stock is spread across different buckets depending on whether warehouse is displayed as well as site. In the page's example, running the report at site level ignores a transfer within the site and deducts a sale from an older bucket, while running it by warehouse deducts the same sale from a newer one. The page also shows that after the monthly inventory close the values and average unit cost change, because adjustments are applied.

The article on [ageing report storage](https://learn.microsoft.com/en-us/dynamics365/supply-chain/cost-management/inventory-aging-report-storage) adds that the report can be saved and exported so that a run can be reproduced, with a choice of as-of date and up to four period definitions in days, calendar dates or predefined intervals. A report run on the date it was requested and one fixed to a month-end will not agree, and neither is wrong.

On the accounting side, the IFRS Foundation's summary of [IAS 2 Inventories](https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/) states that inventories are measured at the lower of cost and net realisable value, that cost may be assigned by specific identification or by first-in, first-out or weighted average for interchangeable items, and that write-downs are recognised as an expense in the period in which they occur. Whether your business reports under full IFRS, IFRS for SMEs or another framework, the principle that old stock may need a lower carrying value is the reason finance cares about ageing at all. Operations cares for a different reason: it wants to know what is not moving, and where.

The lesson from these sources is not that a particular product is at fault. It is that ageing is a calculated view with several legitimate settings, and two teams will differ unless the settings are agreed.

## Who owns the problem and why now

The financial controller owns the valuation and provisioning side. The supply chain or operations manager owns the stock itself. The budget owner is typically the CFO or COO, and often both, because the decisions affect margin, cash and working capital.

Several triggers raise the urgency. A new sales channel changes how quickly different products turn over. A change in range or supplier leaves a block of old stock. An auditor or lender asks how provisions were calculated. An ERP upgrade or a move to a new warehouse system changes the underlying dates. Any of these exposes a difference that was previously tolerated.

## Economic consequence

- **Misjudged provisions**: stock is written down too late, or too much, because the basis is disputed.
- **Cash tied up**: aged stock stays on shelves while teams debate the numbers.
- **Delayed commercial action**: discounts, bundles and supplier returns wait for agreement on what counts as slow-moving.
- **Analyst time**: reconciliation recurs every period. The effect on decisions is explored in [the cost of accounting records that do not match operations](/impact/accounting-records-not-matching-operations-reconciliation-decision-uncertainty-cost/).
- **Audit and lender risk**: an ageing basis that cannot be explained invites questions about the carrying value of stock.

## Root cause

The disagreement itself is a symptom. The underlying causes are usually a mixture of the following.

1. **Different date basis**: receipt date, put-away date, invoice date or manufacturing date.
2. **Different unit of measurement**: by batch or lot, by item and location, or by item across the company.
3. **Different treatment of transfers and returns**: some reports restart the clock, others preserve it.
4. **Different valuation basis**: pre-close versus post-close cost, or physical value versus financial value.
5. **Different run dates**: one report is live, the other is a month-end snapshot.
6. **Different bucket definitions**: 0 to 90 and over 90 in one report, 0 to 60, 61 to 180 and over 180 in another.
7. **No owner**: nobody is responsible for the definition, so each team builds its own. This echoes the wider issue in [why sales, finance and operations each define revenue differently](/discovery/sales-finance-and-operations-define-revenue-differently/).

## Practical intervention

1. Collect the two current reports and the settings behind them. Write down, line by line, the date basis, grain, treatment of transfers, valuation basis and buckets.
2. Pick the differences that matter. Often two or three of the seven above explain most of the gap.
3. Agree a single definition of age for provisioning, and write it as a one-page policy. If operations needs a different view for replenishment, name it separately so that no one calls it "the ageing report".
4. Decide the run schedule: a fixed month-end snapshot saved as a record for finance, and a live view for operations that uses the same definition.
5. Build the report once, in the system of record, and have both teams read it. The principle is set out in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).
6. Add a bridging line for legitimate differences, such as pre-close and post-close cost, so that residual gaps are explained, not hidden.
7. Review the definition when a trigger occurs: a new channel, a new warehouse, a system change or an accounting policy change.

## Diagnostic questions

- Which date does each ageing report count from?
- Does a transfer between locations restart the age of the stock?
- Are the reports run at the same time, and on the same cost basis?
- Can we reproduce last month's ageing report exactly?
- Who approves changes to bucket definitions and provision rules?
- If an auditor asked how slow-moving stock was identified, could we answer in one page?

## What good looks like

There is one written definition of inventory age, with a named owner. Finance and operations read from the same saved report at month-end, and operations has a live view built on the identical rules. Any difference is explained by a stated reconciling item, not by a week of analysis. Provisions follow a documented method that the auditors can test. Decisions about discounts, returns to suppliers and replenishment start from a figure that both sides recognise.

## Where Mellorca fits

Mellorca can document the definitions in use, trace the data behind each report, and help finance and operations agree a single method. The delivery work covers building the shared report in the system of record and the reporting model that supports it. For wider alignment of definitions, the starting point is often a [systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) exercise that settles where each measure should be calculated.

## Method note

The documentation cited explains how one inventory platform calculates ageing and how the IFRS standard treats measurement; it does not prescribe a provisioning policy. Accounting treatment depends on your reporting framework and should be confirmed with your auditors. The opening example uses invented figures for illustration.
