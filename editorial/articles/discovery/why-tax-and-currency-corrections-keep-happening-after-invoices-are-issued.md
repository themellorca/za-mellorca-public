---
hub: discovery
record_id: DISC-089
slug: why-tax-and-currency-corrections-keep-happening-after-invoices-are-issued
title: Why tax and currency are still corrected by hand after the invoice goes out
description: When VAT treatment and exchange rates are fixed manually downstream, every correction is a potential billing dispute. How to move the rules upstream and give each correction an owner.
lead: When VAT treatment and exchange rates are fixed manually downstream, every correction is a potential billing dispute. How to move the rules upstream and give each correction an owner.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Finance manager or financial controller, with sales operations owning customer tax and currency attributes
budget_owner: Financial director
sources:
  - Value-Added Tax - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/
  - IFRS - IAS 21 The Effects of Changes in Foreign Exchange Rates | https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/
  - Foreign exchange risk - Wikipedia | https://en.wikipedia.org/wiki/Foreign_exchange_risk
related:
  - Why recurring billing is still set up by hand after a deal closes | /discovery/why-recurring-billing-is-set-up-by-hand-after-a-deal-closes/
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
  - Why usage-based billing data never quite matches the customer contract | /discovery/why-metered-usage-data-is-disconnected-from-the-contract-it-should-be-billed-against/
summary: When VAT treatment and exchange rates are fixed manually downstream, every correction is a potential billing dispute. How to move the rules upstream and give each correction an owner.
layout: plain
---
A customer in Windhoek disputes an invoice because the Rand amount does not match the dollar price on the quote. A local customer notices that VAT was charged on a line that should have been zero-rated. In both cases someone in finance opens a spreadsheet, recalculates, issues a credit note and a new invoice, and sends an apologetic email. The customer's confidence drops a little each time, and the finance team quietly absorbs the extra work.

This article looks at that operating condition: tax and currency handling that is corrected manually after the sales system has already produced a number. It is common in South African businesses that quote in more than one currency, sell to both VAT vendors and non-vendors, or export part of their range.

## The problem in plain language

A quote or order is created in the CRM or a spreadsheet. The salesperson picks a price, perhaps converts it at a rate they looked up that morning, and types a VAT assumption into a cell. The accounting system then applies its own tax codes and its own exchange rate when it raises the invoice. The two numbers differ, and the difference is found later, by a person, usually after the customer has seen it. The correction is manual because no system owns the rule. Each one applies a version of it.

## What the buyer is actually trying to solve

The person searching for this is rarely asking for a new tax engine. They want invoices that are right the first time, so that disputes stop arriving and finance stops spending the first week of every month on repairs. They also want to know where the error enters: the quote, the order, the invoice or the payment. Without that answer, every fix is local and the same error returns next month.

## Evidence and system mechanism

### Tax treatment depends on facts the quote often does not capture

SARS explains on its [value-added tax page](https://www.sars.gov.za/types-of-tax/value-added-tax/) that VAT is charged on the supply of goods and services by registered vendors, with some supplies zero-rated or exempt. Whether a line is standard-rated, zero-rated or exempt depends on what is sold, to whom and where it is delivered. If the quote records only a price and a total, the tax treatment is an assumption made later by whoever raises the invoice. A single missing field, such as the customer's VAT status or delivery country, is enough to force a manual decision.

### An exchange rate is a date, not a number

The accounting standard on foreign currency, [IAS 21](https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/), deals with how a foreign currency transaction is recorded and how balances are translated, which means the rate used depends on the date of the transaction. A business that quotes in dollars, invoices in Rand and receives payment two months later has at least three dates and therefore three possible rates. If nobody decides which rate applies at which stage, finance reconstructs it by hand each time. The general background on why this matters to a trading business is summarised in the [overview of foreign exchange risk](https://en.wikipedia.org/wiki/Foreign_exchange_risk): the amount owed in one currency moves when the other moves.

### Warning signs

- Credit notes issued for tax or rate differences, rather than for returns or price agreements.
- A currency conversion column that exists only in a salesperson's spreadsheet.
- Finance asking sales which VAT treatment was intended after the invoice has gone out.
- The same customer receiving invoices with different VAT treatment in consecutive months.

## Problem owner and why-now trigger

The finance manager or financial controller owns the correction work. The sales operations lead, where one exists, owns the quote template and the customer master data in which VAT status should live. The budget owner is the financial director, because the cost shows up as overtime, credit notes and delayed collection.

Typical triggers are a customer disputing several invoices in a row, the first export contract, a change from Rand pricing to foreign-currency pricing, or a rate swing large enough that the difference between quote and invoice becomes visible to the customer. Rising billing disputes are the clearest sign that manual correction has stopped scaling.

## Economic consequence

The visible cost is staff time. Suppose a finance clerk spends twenty minutes on each corrected invoice and the business issues forty corrections a month. That is more than thirteen hours, or nearly two working days, spent undoing work. The less visible costs are larger. Disputed invoices are paid late, because customers withhold payment until the amount is agreed. Credit notes distort reporting for the month. Customers who receive repeated corrections begin to check every invoice line, which slows the whole relationship. These figures are illustrative; the point is that the cost recurs every cycle.

## Root cause

- **Rules live in people.** The knowledge of when a supply is zero-rated sits with one senior accountant rather than in a table the quote can read.
- **Customer attributes are incomplete.** VAT status, billing currency and delivery country are not mandatory fields at quote stage.
- **No agreed rate policy.** The business has not decided whether the quote rate is locked, refreshed at order, or applied at invoice date.
- **Systems disagree.** The CRM and the accounting package hold separate tax and currency settings, a pattern that echoes the way [sales and finance use different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).
- **Late discovery.** Errors surface at month end, much like [revenue leakage that only shows up at month-end reconciliation](/discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/).

## Practical intervention

1. **Sample the corrections.** Pull the last three months of credit notes and reissued invoices. Tag each as tax treatment, exchange rate or something else. Most businesses find two or three repeating causes.
2. **Make the tax facts mandatory at quote.** Customer VAT status, billing currency and delivery country become required fields. A quote cannot be sent without them.
3. **Write the rate policy on one page.** State which rate source is used, on which date, and who may override it. Keep it short enough to be followed.
4. **Move the rule to one place.** Whether it lives in the accounting package or in the quoting tool, the other system reads it instead of keeping its own copy.
5. **Carry the quote's tax and rate forward.** The order and the invoice inherit the quoted treatment. Any change requires a reason code, which makes the exceptions countable. This is the same discipline described in [why orders must carry the price and terms of the accepted quote](/discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/).
6. **Review the exceptions weekly.** A short list of overrides, with reasons, shows whether the rules or the data need fixing.

### Trade-offs

Locking an exchange rate at quote protects the customer from movement but exposes the business to it, so the policy needs a validity period and a finance decision about who carries the risk. Strict mandatory fields slow down a salesperson who is trying to get a quote out quickly. Where tax law is unclear for an unusual supply, a human judgement is still needed, and the aim is only to make that judgement visible and recorded, not to automate it away.

### An illustrative example

Illustrative: a Cape Town equipment supplier with 60 staff quoted some customers in US dollars and invoiced in Rand. Its finance team reissued about one invoice in eight. A review of the credit notes showed that most traced to two causes: the quote used the previous day's rate, and customers in neighbouring countries were invoiced with standard VAT when zero-rating applied. The business made delivery country a required field, fixed the rate at order confirmation for seven days and recorded the VAT code on the quote. The corrections that remained were genuine exceptions, each with a reason.

## Diagnostic questions

- How many invoices in the last quarter were corrected for tax or currency reasons, and how many hours did that take?
- Can a salesperson find out the customer's VAT status without asking finance?
- Which rate and which date apply to a dollar quote that becomes a Rand invoice?
- Who may override a tax code, and where is that recorded?

## What good looks like

Quotes carry the tax treatment and currency terms the invoice will use. The rate policy is written down and applied the same way every time. Overrides are rare, have named reasons and are reviewed. Finance spends its time on exceptions that need judgement, and customers stop seeing the first version of an invoice as a draft.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) traces where tax and currency rules are held today and where the quote, order and invoice diverge. [Systems implementation and integration](/services/systems-implementation-integration/) can then move those rules to one source and connect the systems that need them.

## Method note

The sources describe the structure of VAT, the accounting treatment of foreign currency transactions and the general nature of exchange-rate exposure. They do not measure how often invoices are corrected in any given business. The time estimates and the example are illustrative rather than a client case, and tax treatment for a specific supply should be confirmed with a registered tax practitioner.
