---
hub: discovery
record_id: DISC-082
slug: why-orders-must-carry-the-price-and-terms-of-the-accepted-quote
title: Orders are created with values that differ from the accepted quote
description: When order entry starts afresh instead of carrying the accepted quote forward, prices, discounts and fees drift. How to measure the gap and fix the source.
lead: When order entry starts afresh instead of carrying the accepted quote forward, prices, discounts and fees drift. How to measure the gap and make the quote the source of the order.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Sales operations or order administration lead, with the sales director accountable for what was promised
budget_owner: Financial director or managing director
sources:
  - Online payment order confirmation — Odoo 17.0 documentation | https://www.odoo.com/documentation/17.0/applications/sales/sales/send_quotations/get_paid_to_validate.html
  - Create a customer sales order and sell products - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-sell-products
  - Value-Added Tax - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/
related:
  - Why you cannot measure the time from accepted quote to first invoice | /discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - When every sales team builds its own version of the same product bundle | /discovery/when-every-sales-team-builds-its-own-product-bundle/
summary: When order entry starts afresh instead of carrying the accepted quote forward, prices, discounts and fees drift. How to measure the gap and make the quote the source of the order.
layout: plain
---
A customer accepts a quotation for 40 units at R1,180 each, including an agreed volume discount and a fixed delivery fee. The sales administrator opens the order screen and starts a new order. The system suggests the current list price of R1,260. The discount is on a separate line, entered from memory. The delivery fee is missing because the order template does not have one. The order is saved, the warehouse picks it, and ten days later the invoice goes out for a different amount from the one the customer accepted. The customer pays the quoted figure and disputes the rest.

This article looks at that operating condition: orders created with values that differ from the accepted quote. It is common where quoting and order entry are separate steps, performed by different people, often in different systems.

## The problem in plain language

A quote is a commercial promise. When the customer accepts it, the price, quantity, discount, delivery terms and validity are fixed. If the order is created by re-typing those values, or by pulling current prices from a catalogue instead of copying the quote, the order may quietly contain something else. Nobody intended the difference. It comes from re-keying, price list changes, rounding, missing lines or a negotiated term that never made it into a field. The difference is found later, usually by finance or the customer, when it is expensive to fix.

## What you are actually trying to solve

The sales director or financial director wants every order to match what was agreed, without checking each one by hand. They want disputes to fall, margins to be protected, and the invoice to match the quote unless someone has deliberately approved a change. Order administrators want a process in which the accepted quote is the starting point, so they are not blamed for errors the process allowed.

## Evidence and system mechanism

### The accepted quote is the confirmation event

Odoo's documentation on [online payment order confirmation](https://www.odoo.com/documentation/17.0/applications/sales/sales/send_quotations/get_paid_to_validate.html) describes a flow in which the customer opens a quotation in a portal and accepts it, and the quotation becomes a confirmed order with the salesperson notified. It also shows a default quotation validity period, set as a number of days. The design principle is that the confirmed order is the quote, carried forward, with a defined validity. The quote is not the starting point for a fresh entry.

### Orders should carry the same fields into later documents

Microsoft's documentation on [selling products with a customer sales order](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-sell-products) explains that when you post a sales order as shipped or invoiced, the related ledger entries are created in the system, and that sales orders work in other respects like sales invoices. The consequence is that whatever is on the order is what flows into stock, receivables and the ledger. An error on the order becomes an error in every record downstream.

### Invoices carry tax and legal weight

For VAT vendors, the invoice is also a tax document. SARS's [VAT pages](https://www.sars.gov.za/types-of-tax/value-added-tax/) are the starting point for the obligations that apply to registered vendors. A VAT vendor that issues invoices which differ from the agreed price, and then corrects them with credit notes, creates extra documents that must each be accurate, and ties up finance staff in rework.

### Warning signs

- Credit notes and re-invoices appear regularly after delivery.
- Order administrators say "the quote said something else" more than occasionally.
- The order screen shows list prices by default, and discounts are typed in by hand.
- Special terms, such as a delivery fee or a validity date, live in an email thread.
- Quote and order are in different systems and linked by a reference typed by a person. See [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

## Problem owner and why-now trigger

The problem owner is usually the sales operations or order administration lead, with the sales director answerable for what customers were promised. The budget owner is the financial director or managing director, since margin leakage and disputes land in the financial results.

The trigger is often a new pricing model. A move to tiered volume pricing, bundles, subscriptions or indexed prices adds fields and rules that a manual order-entry process cannot hold reliably. A supplier price change in Rand terms, driven by the exchange rate, can have the same effect when quotes are valid for thirty days and the price list changes in between. Related reading: [accepted quotes that do not create fulfilment work](/discovery/accepted-quotes-that-do-not-create-fulfilment-work/).

## Economic consequence

The direct cost is margin leakage and rework. Where an order is entered at a higher price than the quote, the business must credit the difference or lose the customer's goodwill. Where it is entered lower, the margin is silently given away, because nobody disputes an invoice that is smaller than expected. Each disputed invoice also consumes time from sales, finance and the warehouse, delays payment and strains the customer relationship. The less visible cost is control: if the business cannot show that orders match accepted quotes, it cannot show that discounts were authorised or that prices were consistently applied.

## Root cause

- **Order entry is a fresh start.** The order screen is not populated from the accepted quote.
- **Prices are looked up, not carried.** The system uses today's price list instead of the quoted price.
- **Commercial terms are free text.** Delivery fees, validity and special conditions sit in notes rather than structured fields.
- **No comparison step.** Nobody checks the order against the quote before release.
- **Overrides are unrecorded.** When a salesperson changes a price or discount, no approval or reason is captured.

## Practical intervention

1. **Measure the gap first.** Take a sample of recent orders, perhaps fifty, and compare quantity, unit price, discount, delivery and tax with the accepted quote. Record the number of differences and their Rand value.
2. **Make the quote the source.** Convert accepted quotes into orders by copying fields, not retyping them. If the systems cannot do this directly, create a template with a locked quote reference and prefilled values.
3. **Freeze price and terms at acceptance.** Store the accepted price, discount, fee and validity date on the order and do not refresh them from the price list.
4. **Use structured fields for terms.** Move delivery fees, payment terms and validity dates out of notes into fields that can be reported on.
5. **Add a variance check.** Before an order is released to fulfilment, compare it with the quote. Differences above an agreed threshold require approval from the sales manager, with a reason.
6. **Report monthly.** Track the number of orders that differ from the quote, their value, and who approved them.

### Trade-offs

A strict match rule can slow down legitimate changes, such as a customer who adds two units after acceptance. Handle these as an amendment with its own approval and a new quote version, so the change is visible. Systems that cannot copy quote data automatically may need a modest integration or a controlled spreadsheet bridge in the interim, and the cost of that should be weighed against the measured leakage.

### An illustrative example

Illustrative: a Port Elizabeth building-supplies company sampled fifty orders and found that eleven differed from the accepted quote, mostly because discounts were typed after the price was loaded and delivery fees were missed. Net, the business had under-charged by a few thousand Rand across the sample. After the quote reference was made mandatory and the system was set to carry the quoted price and fee onto the order, the variance report showed two differences the following month, both approved and explained.

## Diagnostic questions

- If you compared fifty recent orders to their accepted quotes, how many would match exactly?
- Does the order take its price from the quote or from today's price list?
- Where are delivery fees and special terms recorded?
- Who approves a difference, and is the reason recorded?

## What good looks like

An accepted quote creates the order with its price, quantity, discount, fees and validity carried over unchanged. Differences are possible but require approval and leave a reason on record. Finance sees a monthly figure for orders that varied from the quote, and invoices match what the customer accepted unless a documented change was agreed.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can measure how often orders differ from quotes and trace where the values change in the process. [Digital operations improvement](/services/digital-operations-improvement/) can then set up the quote-to-order handover, the variance check and the approval route.

## Method note

The sources are vendor documentation and tax-authority pages used to describe how quote acceptance, orders and invoices are normally connected. They do not establish how often any particular business has mismatched orders, and the example is illustrative rather than a client case. VAT and invoicing requirements should be confirmed with the company's tax adviser or SARS guidance.
