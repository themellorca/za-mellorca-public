---
hub: discovery
record_id: DISC-096
slug: why-you-cannot-measure-time-from-accepted-quote-to-first-invoice
title: Why you cannot measure the time from accepted quote to first invoice
description: Most businesses track the pipeline and debtors' days, not how long a won deal waits to be billed. See why the gap is invisible and how to measure it.
lead: Most businesses know their sales pipeline and their debtors' days, but not how long a won deal waits before it is billed. Why the gap is invisible and how to measure it.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Financial controller
budget_owner: Finance director
sources:
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Prepare processes and data - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data
  - Create or edit quotes in Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales
  - Invoicing policies — Odoo 17.0 documentation | https://www.odoo.com/documentation/17.0/applications/sales/sales/invoicing/invoicing_policy.html
related:
  - Why sales quotes have to be re-keyed before an order can start | /discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/
  - Why finance cannot trace an invoice back to the deal that approved it | /discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/
  - Why salespeople cannot see whether an order has actually been fulfilled | /discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/
summary: Most businesses know their sales pipeline and their debtors' days, but not how long a won deal waits before it is billed. Why the gap is invisible and how to measure it.
layout: plain
---
The finance director asks a straightforward question: once a customer accepts a quote, how long does it take us to send the first invoice? Sales can report deals won by month. Finance can report debtors' days. Operations can say roughly how long delivery takes. Nobody can answer the question asked. Someone offers to pull a sample of twenty deals and work it out by hand, which will take a week and will be out of date by the time it is presented.

This article looks at that operating condition: a business that cannot measure the elapsed time from accepted quote to first invoice. It matters because that interval is cash the business has earned the right to bill but has not yet asked for, and it tends to grow quietly as sales grow.

## The problem in plain language

Between a customer saying yes and receiving an invoice, a deal passes through several hands: the salesperson marks it won, someone creates an order, operations delivers or starts the service, and finance raises the invoice. Each step happens in a system, or in an inbox, but the steps are rarely recorded against a common reference with a reliable date. So the business can see the start and the end in aggregate, but it cannot join them up for each deal and measure the gap.

## What you are actually trying to solve

Finance leaders look for ways to measure quote-to-cash cycle time, find out why invoicing is slow, or reduce the delay between sale and invoice. Operations managers want to know whether delivery or administration is the bottleneck. The underlying need is a reliable number, per deal and on average, for how long won work waits before it is billed, broken down by stage so the slow step can be fixed.

## Evidence and system mechanism

### Measuring a process needs event data

Measuring how long a process takes is a well-defined data problem. Microsoft's [overview of process mining in Power Automate](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes extracting event data from systems of record to see how processes actually run, find bottlenecks and monitor KPIs. Its page on [preparing processes and data](https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data) sets out the minimum: a case ID that identifies each instance of the process, such as an order ID; an activity name for each step; and a timestamp for when each step happened. It also notes that many application tables hold only the current state of a record, not a history of events, so the history may have to be found in an activity or log table, or reconstructed.

You do not need a process mining tool to apply the principle. To measure quote-to-invoice time you need, for each deal, one reference that appears at every step and a trustworthy date at each step.

### The events exist, but often in different places

CRM systems record quote status changes. Microsoft's guidance on [creating quotes in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales) describes a quote moving from draft to active, and then to an order when the customer accepts it, or to closed as revised, cancelled or lost. The acceptance moment is therefore a recorded event, if the quote is used properly and the order is created from it.

The expected interval also depends on invoicing policy. Odoo's documentation on [invoicing policies](https://www.odoo.com/documentation/17.0/applications/sales/sales/invoicing/invoicing_policy.html) contrasts invoicing what is ordered, where an invoice can be created as soon as the sales order is confirmed, with invoicing what is delivered, where the delivery must be validated first. A business that mixes both needs to measure them separately, because a delivery-based invoice will legitimately take longer.

### Why the measurement usually fails

| Gap | Effect on measurement |
| --- | --- |
| Deal marked won days after the customer accepted | Start date is wrong |
| Order typed into a separate ERP without the quote number | No shared reference to join the steps |
| Delivery confirmed on paper or by email | Middle step has no date |
| Invoice dated to the supply date rather than the date raised | End date hides the delay |
| Status fields overwritten without history | Only the latest state survives |

## Problem owner and why-now trigger

The financial controller usually owns the measurement, because the interval feeds directly into cash flow and working capital. Operations owns the delivery step, and sales operations owns the CRM data. The finance director usually funds the work.

The common trigger is sales growth. When volumes rise, cash can lag revenue noticeably, and the board or a lender starts asking why. Other triggers include a cash squeeze, a new ERP or CRM project where someone asks what to measure, or a customer complaint that an invoice arrived months after the work.

## Economic consequence

Every day between acceptance and invoice is a day added to the cash conversion cycle before the customer's payment terms even start. Late invoices are also more likely to be queried, because the customer has forgotten the detail, and some are never raised at all. Without measurement, these costs cannot be sized or prioritised. The cash effect of slow billing is explored in [the cash flow cost of late invoicing and manual billing](/impact/late-invoicing-manual-billing-cash-flow-cost/), and the effort behind each invoice in [why sending an invoice requires so much work](/patterns/why-sending-an-invoice-requires-so-much-work/).

## Root cause

- **No common reference.** Quote, order, delivery and invoice are not linked by one identifier across systems.
- **Dates recorded late or not at all.** Status changes are captured when someone remembers, not when they happen.
- **Current state without history.** Systems show where a deal is now, not when it got there.
- **Nobody owns the end-to-end process.** Each department measures its own step, so the handovers are invisible. The wider gap between having data and seeing what it means is described in [the difference between having data and having visibility](/patterns/the-difference-between-having-data-and-having-visibility/).

## Practical intervention

1. **Define the clock.** Agree in writing what starts the clock (customer acceptance) and what stops it (invoice issued), and which invoicing policy applies to each product type.
2. **Carry one reference end to end.** Make the quote or order number mandatory on delivery records and invoices.
3. **Capture the event dates automatically.** Use system timestamps for acceptance, order creation, delivery confirmation and invoice creation rather than manually entered dates.
4. **Keep history.** Turn on audit or activity logging for status fields, or write status changes to a log table.
5. **Build the measure.** Join the events by reference and report median and slowest deals by stage, product line and branch.
6. **Act on the slowest stage.** Use the breakdown to decide whether the fix is in sales admin, delivery confirmation or invoicing.

### Trade-offs

Historical data will be incomplete, so the first measurements will be rough. Start measuring from now rather than reconstructing the past. A single average hides a lot; look at the distribution and the oldest open items.

### An illustrative example

Illustrative: a Pretoria engineering services firm with about 70 staff suspected billing delays but could not quantify them. Quotes were accepted by email, jobs were opened in a project system and invoices raised in the accounting system. The firm made the quote number mandatory on job cards and invoices, recorded acceptance in the CRM on the day it arrived, and built a weekly report joining the three. The first report showed that most of the delay sat between job completion and invoice, not in delivery.

## Diagnostic questions

- Can you state your median time from accepted quote to first invoice, and how you calculated it?
- Is there one reference that appears on the quote, the order, the delivery record and the invoice?
- Are acceptance and delivery dates recorded by the system or typed in later?
- Can you list won deals that have no invoice yet, and how old they are?
- Do you know which stage contributes most to the delay?

## What good looks like

For every won deal the business can see when it was accepted, ordered, delivered and invoiced, from system records. A weekly report shows the median time to first invoice, the slowest stage and the list of accepted but unbilled work, and someone is accountable for each.

## Where Mellorca fits

Mellorca helps businesses trace the quote-to-invoice path and identify missing references and dates through a [digital systems audit](/services/digital-systems-audit/). It then links CRM, operational and accounting systems through [systems implementation and integration](/services/systems-implementation-integration/), and builds ongoing cycle-time reporting as part of [digital operations improvement](/services/digital-operations-improvement/).

## Method note

Product references illustrate common mechanisms and are not recommendations. No benchmark cycle time is suggested, because the right interval depends on invoicing policy and industry. The example is illustrative and does not describe a specific client.
