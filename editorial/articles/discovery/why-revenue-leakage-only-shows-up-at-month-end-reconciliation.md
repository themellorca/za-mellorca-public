---
hub: discovery
record_id: DISC-098
slug: why-revenue-leakage-only-shows-up-at-month-end-reconciliation
title: Why revenue leakage only shows up at month-end reconciliation
description: When unbilled work, wrong prices and missed charges surface only at month-end, much of the money is hard to recover. How to check billing completeness daily instead.
lead: When unbilled work, wrong prices and missed charges surface only at month-end, much of the money is hard to recover. How to check billing completeness daily instead.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Financial controller
budget_owner: Finance director
sources:
  - Invoicing policies — Odoo 17.0 documentation | https://www.odoo.com/documentation/17.0/applications/sales/sales/invoicing/invoicing_policy.html
  - IFRS - IFRS 15 Revenue from Contracts with Customers | https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/
  - Add data tests to your DAG - dbt Developer Hub | https://docs.getdbt.com/docs/build/data-tests
related:
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
  - Why recurring billing is still set up by hand after a deal closes | /discovery/why-recurring-billing-is-set-up-by-hand-after-a-deal-closes/
  - Why credit checks happen after sales has already promised delivery | /discovery/why-credit-checks-happen-after-sales-has-promised-delivery/
summary: When unbilled work, wrong prices and missed charges surface only at month-end, much of the money is hard to recover. How to check billing completeness daily instead.
layout: plain
---
On the third working day of the month the finance team starts reconciling. Deliveries against invoices, timesheets against billing, the contract register against recurring charges. By the fifth day they have a list: a delivery that was never invoiced, a call-out billed at the old rate, a customer still on a trial discount that expired in March, a batch of usage charges that did not import. Some of these are easy to fix. Others are weeks old, the customer has already paid and closed their month, and asking for more money now is awkward.

This article looks at that operating condition: revenue leakage that is found only at month-end reconciliation. It affects businesses that bill for deliveries, time, usage or contract terms, and it tends to worsen after a system change.

## The problem in plain language

Revenue leakage is work done, goods delivered or services provided that are not billed, or are billed at less than agreed. Most businesses have some way of catching it, and that way is usually a month-end reconciliation. The difficulty is timing. By the time the reconciliation runs, the leak may be four or five weeks old, the context has gone, and the correction competes with closing the books. Leakage that is found late is harder to recover, and leakage that is not looked for at all is never found.

## What the buyer is actually trying to solve

Finance managers search for ways to find unbilled revenue, stop missed invoices, or automate billing reconciliation. Operations managers want to know that everything they deliver is billed. The underlying need is to move the check from a monthly event to a routine that runs as transactions happen, so that each gap is caught within a day or two, while it is still easy to fix.

## Evidence and system mechanism

### Billing is triggered by events, and events can be checked

In most systems, the right to invoice follows a specific event. Odoo's documentation on [invoicing policies](https://www.odoo.com/documentation/17.0/applications/sales/sales/invoicing/invoicing_policy.html) describes two: invoicing what is ordered, where an invoice can be created once the sales order is confirmed, and invoicing what is delivered, where the delivery has to be validated before an invoice can be created. Either way, there is a clear rule: a confirmed order, or a validated delivery, should be followed by an invoice. That rule can be tested at any time, not only at month-end.

### Revenue follows performance, not the invoice

The [IFRS 15 standard](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/) recognises revenue when performance obligations are satisfied, at a point in time for goods and typically over time for services. Delivered but unbilled work is therefore not only a cash issue; it affects what the accounts should show. A month-end discovery of unbilled work means the finance team has to correct both billing and the revenue position under time pressure.

### There is a deadline

SARS guidance on [tax invoices](https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/) notes that a tax invoice must be issued within 21 days from the time the supply was made. Leakage found at a month-end reconciliation that starts several days into the next month can already be outside that window for supplies made early in the previous month.

### Completeness checks can run automatically

Data teams have long used automated tests to catch broken assumptions. dbt's documentation on [data tests](https://docs.getdbt.com/docs/build/data-tests) describes queries that return failing records, and includes a built-in relationships test that checks every value in one table exists in another. The same idea expresses a billing rule: every validated delivery should have a matching invoice line. Run on a schedule, such a test produces a short daily exception list rather than a long monthly one.

### Common leaks and their daily checks

| Leak | Daily check |
| --- | --- |
| Delivered but not invoiced | Validated deliveries older than one day with no invoice line |
| Billed at old or wrong price | Invoice lines whose price differs from the current price list or contract |
| Expired discount still applied | Discounts on invoices past their end date |
| Usage or time not imported | Approved timesheets or usage records with no billing reference |
| Contract charge missing | Active contracts with no invoice in the current period |

## Problem owner and why-now trigger

The financial controller owns the problem, because leakage shows up in revenue and debtors. Operations owns the delivery and time records that should trigger billing. The finance director usually funds the fix.

The common trigger is an ERP or CRM change. Migrations often break the link between operational events and billing: a delivery integration that no longer fires, a price list that was not migrated, a contract register rebuilt by hand. The month-end reconciliation after go-live suddenly produces a much longer list. Growth in transaction volume is another trigger, because a reconciliation that was manageable at a few hundred deliveries becomes impossible at a few thousand.

## Economic consequence

Some leakage is never recovered: customers dispute late invoices, or the business decides a small amount is not worth the conversation. What is recovered arrives later, lengthening the cash cycle. The month-end reconciliation itself consumes skilled finance time at the busiest point of the month; the labour side is explored in [the labour cost of manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/) and [the payroll cost of a manual month-end close](/impact/manual-month-end-close-payroll-cost/). There is also a reporting cost: monthly revenue and margin figures are unreliable until the corrections are posted.

## Root cause

- **Billing depends on a manual handover.** Deliveries, timesheets or usage reach billing by email or export, not by a system event.
- **Prices held in more than one place.** Billing uses a different price source from sales or contracts; see [why sales and finance use different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).
- **Checks designed for close, not for flow.** The only completeness check is the reconciliation, so it runs when the close runs.
- **Finance absorbs the clean-up.** Fixing data becomes finance's job, the pattern described in [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/).

## Practical intervention

1. **Write down the billing rules.** For each revenue type, state which event creates the right to invoice and within how many days the invoice should follow.
2. **Turn each rule into a check.** Express it as a query or report that lists exceptions: events without invoices, prices that differ from source, contracts without charges.
3. **Run the checks daily.** Schedule them and send the exception list to a named owner, not a shared inbox.
4. **Fix the cause, not only the case.** When the same leak recurs, repair the integration or process behind it.
5. **Keep month-end, but shorten it.** The month-end reconciliation becomes a confirmation that the daily lists were cleared.
6. **Test after every change.** After a system change or price update, run the checks immediately rather than waiting for the cycle.

### Trade-offs

Daily checks produce noise at first, from timing differences and legitimate exceptions. Agree tolerances and a reason code for accepted exceptions. Someone must own the list every day, or it becomes another report nobody reads.

### An illustrative example

Illustrative: an East Rand equipment hire company with about 110 staff moved to a new ERP and found that its first month-end reconciliation surfaced many unbilled hire extensions. The business wrote a daily report listing hire contracts extended in the operations system without a matching charge, assigned it to a billing administrator, and fixed the integration that was dropping extensions.

## Diagnostic questions

- When was the last unbilled delivery or service found, and how old was it?
- Which event creates the right to invoice for each revenue type, and is it written down?
- Could you list today every delivered but uninvoiced item?
- Do billing prices come from the same source as quoted or contracted prices?
- After your last system change, how quickly did you test billing completeness?

## What good looks like

Every revenue type has a written billing rule and an automated check. Exceptions are listed daily, owned by a named person and cleared within days. Month-end confirms rather than discovers, and recurring leaks lead to fixes in the underlying process.

## Where Mellorca fits

Mellorca helps businesses map billing triggers and find where leakage enters through a [digital systems audit](/services/digital-systems-audit/). It then builds the integrations and automated completeness checks through [systems implementation and integration](/services/systems-implementation-integration/) and [business automation](/services/business-automation/).

## Method note

Product references illustrate common mechanisms and are not recommendations. Accounting and tax points summarised here should be confirmed with your auditors and current SARS guidance. The example is illustrative and does not describe a specific client.
