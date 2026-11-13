---
hub: discovery
record_id: DISC-078
slug: sales-and-finance-use-different-product-and-price-data
title: When sales and finance work from different product and price data
description: Quotes go out at one price and invoices at another because the CRM and ERP hold separate price lists. How to give pricing one owner.
lead: Quotes go out at one price and invoices at another because the CRM and the ERP hold separate product and price lists. Why it happens, what it costs, and how to give pricing one owner.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Finance director or financial controller, with the sales operations manager
budget_owner: CFO, sometimes shared with the commercial director
sources:
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - Define product pricing | https://learn.microsoft.com/en-us/dynamics365/sales/create-price-lists-price-list-items-define-pricing-products
  - Record special sales prices and discounts - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-record-sales-price-discount-payment-agreements
related:
  - When every sales team builds its own version of the same product bundle | /discovery/when-every-sales-team-builds-its-own-product-bundle/
  - Why credit checks happen after sales has already promised delivery | /discovery/why-credit-checks-happen-after-sales-has-promised-delivery/
  - Why finance cannot trace an invoice back to the deal that approved it | /discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/
  - Why pricing rules end up copied across the CRM, spreadsheets and the ERP | /discovery/why-the-same-pricing-rules-are-maintained-in-three-places-and-drift-apart/
summary: Quotes go out at one price and invoices at another because the CRM and the ERP hold separate product and price lists. Why it happens, what it costs, and how to give pricing one owner.
layout: plain
---
A customer accepts a quote. The order is processed, the goods ship, and the invoice arrives at a different price. Sometimes the difference is a few rand from rounding; sometimes it is a whole price increase that reached the accounting system but not the CRM. The customer queries it, accounts receivable holds the payment, and sales and finance each insist their number is correct. Both are, in their own system.

This article is about that operating condition: sales and finance using different product and price data. It is one of the most common causes of billing disputes in businesses that run a separate CRM or quoting tool alongside their accounting or ERP system.

## The problem in plain language

Sales quotes from one product list and price list. Finance invoices from another. The two lists started out the same but have drifted: new products added in one place only, prices updated on different dates, discounts structured differently, units of measure that do not match, product codes that were renamed. Each change made sense locally. Together they mean the business has no single answer to "what do we sell, and at what price?"

## What you are actually trying to solve

Finance leaders tend to want ways to stop invoice disputes, reconcile CRM and ERP pricing, or keep product lists in sync. Sales leaders want quotes that will not be contradicted by the invoice. The shared need is a single, trusted definition of products and prices, used by every system that quotes, orders or bills.

## Evidence and system mechanism

### Product and price data is master data

[IBM's overview of master data management](https://www.ibm.com/think/topics/master-data-management) describes master data as the core data about key business entities such as customers, products and locations. It notes that product consistency matters for pricing strategies and supply chain efficiency, that master data management aims to keep product descriptions, pricing and specifications uniform across platforms and internal systems, and that separate departmental records of the same entity lead to inconsistency and inefficiency. It also stresses that this needs stewardship: someone must decide how master data is structured and maintained.

### CRM price lists have their own logic

Modern CRMs do not simply copy prices from finance. [Microsoft's Dynamics 365 Sales documentation](https://learn.microsoft.com/en-us/dynamics365/sales/create-price-lists-price-list-items-define-pricing-products), for example, shows price lists with start and end dates, a currency per list, discount lists, and pricing methods that can be a fixed amount, a percentage of list price, or a markup or margin on current or standard cost, with optional rounding rules. Each of these is a legitimate feature. Each is also a place where the CRM's price can diverge from the ERP's if the two are maintained separately. A percentage markup on a cost that is updated in one system but not the other is enough to produce a different invoice.

### Common divergence points

| Where it diverges | Typical cause |
| --- | --- |
| Product codes and descriptions | New items created in one system first; codes renamed during a migration |
| Price effective dates | Price increases loaded into finance before or after the CRM |
| Discounts | Sales discount rules not mirrored in finance pricing or credit terms |
| Units of measure | Quoted per box, invoiced per unit, or the reverse |
| Rounding and VAT treatment | Different rounding rules or inclusive versus exclusive pricing |

### Warning signs

- Invoice queries frequently cite "the quote said something different".
- Credit notes are issued regularly to correct pricing.
- Sales keeps a spreadsheet of "real" prices alongside the CRM.
- Price increases require a coordinated weekend of manual updates in several systems.
- Orders are re-keyed from quotes into finance, a step examined in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

## Problem owner and why-now trigger

The problem is usually owned by the finance director or financial controller, because pricing errors show up in revenue, credit notes and debtors. Sales operations shares ownership because the CRM is theirs. The CFO normally funds the fix.

The trigger is commonly an ERP or CRM change. Implementing a new CRM, upgrading the accounting system or adding an e-commerce channel creates a new copy of the product catalogue. If the project does not settle which system owns product and price data, divergence starts on day one. Annual price increases are a second trigger, because they test whether every system can be updated consistently.

## Economic consequence

The consequences reach cash, margin and customer trust. Disputed invoices are paid late, which affects working capital. Errors in the customer's favour leak margin quietly, and errors against the customer damage the relationship. Staff time goes on queries, credit notes and manual reconciliation. Reporting suffers too: revenue by product or customer is unreliable when the underlying product data differs between systems, which feeds into the problem described in [no visibility into customer and product profitability](/impact/no-visibility-into-customer-product-profitability/).

## Root cause

- **No declared owner of product and price data.** Each system is treated as authoritative by the team that uses it.
- **One-off migration instead of ongoing sync.** Data was copied into the CRM once at go-live and then maintained separately.
- **Different pricing models.** Sales prices with discount rules and markups; finance prices with fixed lists. Neither is mapped to the other.
- **No change process.** Price changes are made by whoever needs them, in whichever system they use.

The deeper question of which system should hold which data is discussed in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Practical intervention

1. **Decide the system of record.** Choose one system as the authority for product codes, descriptions, units and base prices. In many businesses this is the ERP or accounting system; in some, a product information tool. Write the decision down.
2. **Name a data steward.** One person or role approves new products and price changes and is accountable for consistency.
3. **Sync, do not copy.** Replace manual re-entry with an integration that pushes product and price changes from the system of record to the CRM and other channels, with logging of what changed.
4. **Align the pricing model.** Agree how discounts, markups, rounding and VAT treatment are represented in both systems, so the CRM's calculated price matches what finance will invoice.
5. **Control price changes.** Load price changes once, with an effective date, and let them flow out.
6. **Monitor differences.** Run a regular comparison of product and price records between systems and investigate mismatches before customers do.

### Trade-offs

Making finance the owner can slow sales if new products take time to be approved. A clear, fast approval route is part of the fix. Sales may also need pricing flexibility the ERP cannot represent; in that case the agreed rule is that the CRM may discount from a base price it receives, but not create its own base prices.

### An illustrative example

*Illustrative:* an East Rand industrial supplies wholesaler with around 90 staff moved quoting into a new CRM and loaded its price list from the accounting system once at go-live. Six months later an annual price increase went into the accounting system but only partly into the CRM. For several weeks, quotes went out at old prices and invoices at new ones, generating a wave of queries and credit notes. The business made the accounting system the price authority, added a nightly sync to the CRM and gave the financial controller sign-off on new products.

## Diagnostic questions

- Which system is the official source of product codes and prices, and does everyone agree?
- Who approves a new product or a price change, and in which system is it entered?
- How many credit notes last quarter were caused by pricing differences?
- When prices change, how many systems have to be updated by hand?
- Can the CRM produce a price that finance cannot reproduce?

## What good looks like

One system holds the authoritative product and price list. A named steward controls changes. Every other system receives updates automatically, and the CRM's pricing rules are aligned with how finance invoices. Quotes and invoices agree by design, price increases are loaded once, and mismatches are found by a routine check rather than by a customer. Microsoft's Business Central documentation on [sales prices](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-record-sales-price-discount-payment-agreements) shows the idea in its simplest form: a unit price specified once on the item is always the price used on sales documents.

## Where Mellorca fits

[Systems implementation and integration](/services/systems-implementation-integration/) work can establish the system of record and build the sync between CRM, ERP and sales channels. A [digital systems audit](/services/digital-systems-audit/) is a sensible first step where the business needs to see how far product and price data has already drifted.

## Method note

This article uses vendor documentation and master data guidance to explain the mechanism. It does not quote dispute rates or revenue-leakage percentages, as no reliable source applicable to South African mid-sized businesses was found. The example is illustrative and not based on a specific client.
