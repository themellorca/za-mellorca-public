---
hub: discovery
record_id: DISC-252
slug: sales-finance-and-operations-define-revenue-differently
title: Why sales, finance and operations each define revenue differently
description: Sales counts signed deals, operations counts shipments and finance counts recognised revenue. Each figure is right for its purpose, but without a bridge the business argues about which one is true.
lead: Sales counts signed deals, operations counts shipments and finance counts recognised revenue. Each figure is right for its purpose, but without a bridge the business argues about which one is true.
category: Data, Reporting & Decision Systems
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Financial Director / CFO
budget_owner: CFO / CEO
sources:
  - IFRS - IFRS 15 Revenue from Contracts with Customers | https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/
  - What Is a Semantic Layer? - IBM | https://www.ibm.com/think/topics/semantic-layer
  - Endorsement overview - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview
related:
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
  - Why dashboards refresh at different times without anyone knowing | /discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/
summary: Sales counts signed deals, operations counts shipments and finance counts recognised revenue. Each figure is right for its purpose, but without a bridge the business argues about which one is true.
layout: plain
---
The sales director reports a record month. The operations manager says output was flat. The financial director's management accounts show revenue below budget. All three are looking at "revenue" for the same month, and all three are working from accurate data. The board meeting spends its time on the gap between the numbers instead of the business behind them.

Revenue is the most common version of a wider problem, where the same business question gets different answers. We discuss the general case in [executives getting different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/). Revenue deserves separate treatment, because the different definitions are not mistakes. They measure different, real events, and the business needs all of them.

## The problem in plain language

A sale passes through several events. A deal is signed. An order is placed and confirmed. Goods are delivered or a service is performed. An invoice is raised. Revenue is recognised in the accounts. Cash is received. Sales tends to count the first of these, operations the middle ones, and finance the recognised figure, with treasury watching the cash. When everyone calls their number "revenue" and nobody shows how one turns into the next, every meeting becomes a reconciliation exercise.

The symptoms include commission disputes, forecasts that never match the accounts, budgets built on one definition and tracked on another, and dashboards that disagree depending on which system feeds them.

## What the buyer is actually trying to solve

Searches like "revenue defined differently by sales and finance", "bookings vs billings vs revenue" or "why CRM revenue doesn't match accounting" come from financial directors, revenue operations leads and business owners who are tired of the argument. They want a common language, a way to move from one figure to the next, and reports that label clearly which figure is which. The need often comes to a head during a data platform change, a new BI tool or a new ERP, when somebody has to decide which "revenue" the new dashboards will show.

## Evidence and system mechanism

Finance's figure follows an accounting standard. IFRS 15, as summarised on the [IFRS Foundation's standard page](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/), requires revenue to be recognised to depict the transfer of promised goods or services to customers, at the amount the entity expects to be entitled to. It sets out a five-step model: identify the contract, identify the performance obligations, set the transaction price, allocate it across the obligations, and recognise revenue as each obligation is satisfied, at a point in time or over time. A signed three-year service contract can therefore be a large booking for sales and a modest monthly revenue line for finance. Both are right.

The systems make it worse. The CRM records deal value at signature. The ERP records order and delivery values, often net of discounts that changed after signature. The accounting system records invoices and recognised revenue, including credit notes and adjustments. Each report pulls from whichever system its author knows best.

Analytics tools now offer ways to fix definitions centrally. IBM's explainer on the [semantic layer](https://www.ibm.com/think/topics/semantic-layer) describes a layer that holds business logic, definitions and calculations in one place, so every report and tool uses the same meaning for a metric. Microsoft's [endorsement feature](https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview) for Fabric and Power BI lets authorised reviewers mark a dataset as certified, meaning it meets the organisation's quality standards and is authoritative, or as master data. Tools like these can enforce agreed definitions, but they cannot agree the definitions for you.

### A bridge, not a single number

The answer is not to force one definition of revenue on everyone. It is to name each measure precisely and publish the bridge between them. A simple monthly view might read:

| Measure | What it counts | Owner | Source |
| --- | --- | --- | --- |
| Bookings | Value of contracts signed in the period | Sales | CRM |
| Fulfilled orders | Value of goods delivered or work completed | Operations | ERP or job system |
| Billings | Value invoiced, net of credit notes | Finance | Accounting |
| Recognised revenue | Revenue under the accounting policy | Finance | General ledger |
| Cash collected | Customer receipts | Finance | Bank and accounting |

*Illustrative example, not a client case.* A South African managed IT services firm sells annual support contracts and once-off projects. Sales celebrates a month with several large contracts signed. Finance recognises those contracts monthly over twelve months and shows flat revenue. Once the firm publishes the bridge, with bookings converting to future recognised revenue, the board can see that the month was strong for the pipeline and normal for the accounts. The argument stops, and the commission plan is rewritten to say which measure it uses.

## Problem owner and why now

The financial director or CFO usually owns the definitions, because recognised revenue is the statutory figure. Sales and operations leaders own their own measures. The budget owner is typically the CFO, sometimes together with the CEO. Common triggers are a new data platform or BI project, a new ERP, investor or lender reporting, a change to the commission plan, or a growing subscription or multi-year contract business, where bookings and recognised revenue drift further apart.

## Economic consequence

The cost is management time, poorer decisions and money that leaks out in disputes. Senior people spend meetings reconciling numbers. Forecasts lose credibility, so decisions on hiring and stock are made on instinct. Commission paid on bookings that are later cancelled or discounted may have to be clawed back, if the plan allows it. Lenders and investors who see inconsistent figures ask harder questions. Measure the effect from your own experience: time spent reconciling revenue figures each month, commission adjustments, and forecast-to-actual gaps.

## Root cause

- **One word for several measures.** "Revenue" is used loosely for bookings, billings and recognised revenue.
- **No owner for each definition.** Nobody has written down what each measure includes, such as discounts, credit notes, VAT, cancellations and timing.
- **Reports built per system.** Each dashboard reflects one system's view and logic.
- **No shared deal and order reference.** Bookings cannot be traced to invoices, so the bridge cannot be built.

The ownership gap is the same one described in [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).

## Practical intervention

1. **Name the measures.** Replace "revenue" in reports with precise terms: bookings, fulfilled orders, billings, recognised revenue and cash collected.
2. **Write a definition sheet** covering the inclusions, exclusions, timing, source system and owner of each measure. Finance signs off anything that touches recognised revenue.
3. **Link the records.** Carry a deal or contract reference from CRM into orders and invoices, so values can be traced from one stage to the next.
4. **Publish the bridge monthly,** showing how bookings flow into billings and recognised revenue, including timing differences and cancellations.
5. **Build the definitions into the reporting layer** and certify the shared dataset, so new dashboards inherit them.
6. **Align incentives.** State in the commission plan which measure is paid on, and when.

Where the source data itself disagrees, for example on product and price, that should be fixed first. See [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).

## Trade-offs

A bridge adds a report, and someone has to own it every month. Precise terms can feel pedantic at first. Moving commission to a later measure, such as billings, is fairer to the business but can be unpopular with sales. That is a commercial decision and should be made openly.

## Diagnostic questions

- When someone says "revenue" in your management meeting, which measure do they mean?
- Is there a written definition, owner and source for each revenue measure?
- Can you trace a signed deal to its invoices and recognised revenue?
- Which measure does your commission plan use?
- Will your next BI or data platform project inherit agreed definitions or create new ones?

## What good looks like

Every report names its measure precisely. Definitions are written, owned and built into a certified reporting dataset. A monthly bridge explains how this month's bookings become future billings and recognised revenue. Sales, operations and finance still track different numbers, but they agree on what each one means and how they connect.

## Where Mellorca fits

Mellorca's [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work defines which system owns each revenue measure and how the records link. Our [systems implementation and integration](/services/systems-implementation-integration/) service carries the shared references across CRM, ERP and accounting so the bridge can be produced automatically.

*Method note:* this article explains reporting practice and is not accounting advice; your revenue recognition policy should be confirmed with your auditors.
