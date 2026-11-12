---
hub: discovery
record_id: DISC-099
slug: why-the-same-pricing-rules-are-maintained-in-three-places-and-drift-apart
title: Why pricing rules end up copied across the CRM, spreadsheets and the ERP
description: When discounts, tiers and price lists are maintained separately in each tool, quotes and invoices disagree. How to pick one source for pricing rules and keep the others honest.
lead: When discounts, tiers and price lists are maintained separately in each tool, quotes and invoices disagree. How to pick one source for pricing rules and keep the others honest.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Commercial director or sales operations lead, with finance owning the invoice price
budget_owner: Managing director or financial director
sources:
  - Configure, price and quote - Wikipedia | https://en.wikipedia.org/wiki/Configure_price_quote
  - Revenue assurance - Wikipedia | https://en.wikipedia.org/wiki/Revenue_assurance
  - Revenue recognition - Wikipedia | https://en.wikipedia.org/wiki/Revenue_recognition
related:
  - Orders are created with values that differ from the accepted quote | /discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/
  - Why Sales Quotes Have to Be Re-Keyed Before an Order Can Start | /discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/
  - Why tax and currency are still corrected by hand after the invoice goes out | /discovery/why-tax-and-currency-corrections-keep-happening-after-invoices-are-issued/
summary: When discounts, tiers and price lists are maintained separately in each tool, quotes and invoices disagree. How to pick one source for pricing rules and keep the others honest.
layout: plain
---
The sales team quotes from a spreadsheet that the sales manager updates after each price review. The CRM has its own price book, last refreshed in January. The ERP applies a third set of prices, maintained by a finance clerk who gets the changes by email. In October, a customer receives a quote at one price, an order confirmation at a second and an invoice at a third. Everyone followed the rules they had been given. The rules were just not the same rules.

This article looks at that operating condition: pricing rules that are duplicated and separately maintained across the CRM, spreadsheets and the ERP. It is common in growing South African businesses that have added tools over time without deciding which one is the master for price.

## The problem in plain language

Pricing is more than a list of prices. It includes customer-specific rates, volume tiers, discount limits, bundles, approval thresholds and expiry dates. Each of these has to be applied at quote, at order and at invoice. If each tool stores its own version, every change to pricing is a project of updating several places, and the places inevitably drift. The drift is invisible until a customer sees two different numbers.

## What the buyer is actually trying to solve

The buyer wants one answer to the question "what should this customer pay for this?" and wants every system to give the same answer. They also want price changes to take effect on a known date, everywhere, without a chain of emails. The real goal is not a sophisticated pricing engine but consistency: a quote that survives the journey to the invoice.

## Evidence and system mechanism

### Quote tools exist because pricing rules are complex

The category known as [configure, price, quote](https://en.wikipedia.org/wiki/Configure_price_quote) software was developed for the reason that pricing, product options and discounting rules become too complicated to manage by hand. The description of the category is useful even for a business that will never buy such a tool: it identifies the rule types that must be controlled, which are configuration, price and quote approval. If these are scattered across tools, no one tool can enforce them.

### Leakage between quote and cash is a recognised problem

The general discipline of [revenue assurance](https://en.wikipedia.org/wiki/Revenue_assurance) is concerned with making sure that what a business is entitled to charge is actually billed and collected. Inconsistent pricing rules are a straightforward route to leakage: a discount that should have expired remains active in one system, and a customer is billed less than agreed without anyone deciding to give the discount.

### Accounting depends on the agreed price

Under [revenue recognition](https://en.wikipedia.org/wiki/Revenue_recognition) principles, revenue is measured against the price agreed with the customer. When systems disagree about what was agreed, finance has to determine the truth by investigation, which delays reporting and creates avoidable adjustments.

### Warning signs

- Price changes are announced by email and applied in each system by a different person.
- The sales team has a "latest" spreadsheet that is not the same as the CRM price book.
- Finance regularly overrides prices on invoices to match what sales promised.
- New hires are told to "check with Thandi" before quoting a special price.

## Problem owner and why-now trigger

The commercial director or sales operations lead owns the pricing policy. The finance manager owns the invoice price. The IT or systems lead owns the tools. No single person owns the whole, which is the root of the problem. Budget generally sits with the managing director or financial director, because both pricing integrity and margin are board-level matters.

Rising billing disputes are the typical trigger, as customers notice price differences between documents. Other triggers include a supplier cost increase that forces a mid-year price change, a new product line that adds tiers, or a new system implementation that exposes the number of separate price lists in use. The cost of price changes in vendors' own tools is a related pressure, discussed in [why vendor pricing changes outrun software budgets](/discovery/why-vendor-pricing-changes-outrun-software-budgets/).

## Economic consequence

When prices drift, margin leaks and trust erodes. Illustratively, if three per cent of a company's R40 million annual billings are priced below the intended rate because an old price remained in one tool, the loss is R1.2 million a year. Finance time is also consumed: every mismatch requires someone to find which price is right, correct the invoice and explain. Commission calculations can be affected, since commission is often based on price. Customers who see inconsistent pricing negotiate harder, because they have evidence that the first price was not firm.

## Root cause

- **No master.** Nobody has decided which system holds the authoritative price.
- **Tools added over time.** Each new tool arrived with its own price set-up, often loaded once and never reconciled, similar to the pattern in [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).
- **Spreadsheets as shadow systems.** Spreadsheets are flexible, so they become the real price list while the systems fall behind.
- **Discount rules are verbal.** Limits and approvals are known by habit rather than recorded, which also underlies [discount approvals that live in chat threads instead of the quote](/discovery/why-discount-approvals-live-in-chat-threads-instead-of-the-quote/).
- **No effective dates.** Changes overwrite old prices rather than being recorded with a start date.

## Practical intervention

1. **Collect every price source.** List each place a price is stored: CRM price book, quote spreadsheet, ERP price list, customer-specific files. Note who maintains it and when it was last changed.
2. **Compare a sample.** Take twenty products and ten customers and compare the price in each source. The differences quantify the problem and persuade sceptics.
3. **Choose the master.** Usually this is the ERP or accounting system, because it determines what is invoiced, but it may be a quoting tool. Pick one and say so in writing.
4. **Make others read from it.** The CRM and spreadsheets pull from the master, by integration or scheduled export. If that cannot be done at once, publish a dated, read-only price file and retire the others.
5. **Record rules as data.** Discount limits, tiers and approval thresholds go into a table with effective dates and an owner.
6. **Govern changes.** A price change is requested, approved, dated and published once. A short change log tells everyone what applies from when.

### Trade-offs

Choosing a master means some teams lose the flexibility of their own spreadsheet, and negotiating special deals becomes more formal. Integration costs money and time; a manual weekly export from the master is an acceptable first step. If the chosen master is poorly maintained, the discipline will expose that, and the business must accept a period of clean-up.

### An illustrative example

Illustrative: an Umhlanga building-materials distributor with 120 staff compared twenty products across its CRM, quote spreadsheet and ERP, and found eleven differed in at least one place. It nominated the ERP as master, exported a dated price file every Monday into the CRM, retired the quote spreadsheet and set a rule that discounts beyond ten per cent needed sign-off recorded on the quote. Invoice overrides by finance dropped to a handful a month, each with a reason.

## Diagnostic questions

- How many places hold a price for the same product, and do they agree today?
- When a price changes, who updates which system, and how do you know it was done?
- How often does finance change a price on an invoice to match what sales promised?
- Where is the current discount limit written down?

## What good looks like

There is one named source for price. Other tools read from it on a known schedule. Discount rules are recorded as data with owners and effective dates, and changes follow a short, visible process. A quote carries the same price through to the invoice, and finance overrides are exceptions, not routine.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) finds every place pricing rules are stored and shows where they disagree. [Systems implementation and integration](/services/systems-implementation-integration/) can then connect the chosen master to the CRM and quoting tools so prices are maintained once.

## Method note

The sources describe the purpose of configure-price-quote tools, the idea of revenue assurance and the link between price and revenue measurement. They do not measure price drift in any particular business. The figures and the example are illustrative rather than a client case.
