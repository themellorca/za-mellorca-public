---
hub: discovery
record_id: DISC-088
slug: when-every-sales-team-builds-its-own-product-bundle
title: When every sales team builds its own version of the same product bundle
description: When branches and channels each define their own version of a bundle, stock, invoicing and margin reporting drift apart. How to govern bundles without slowing sales.
lead: When branches and channels each define their own version of a bundle, stock, invoicing and margin reporting drift apart. How to govern bundles without slowing sales.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Sales operations or product and category manager, with regional sales managers
budget_owner: Commercial director
sources:
  - Set up product bundles to sell multiple items | https://learn.microsoft.com/en-us/dynamics365/sales/create-product-bundles-sell-multiple-items-together
  - How are prices calculated for product bundles? | https://learn.microsoft.com/en-us/dynamics365/sales/pricing-product-bundles
  - Product bundles overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/product-bundles-overview
related:
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
  - Why Sales Quotes Have to Be Re-Keyed Before an Order Can Start | /discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/
  - Why finance cannot trace an invoice back to the deal that approved it | /discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/
summary: When branches and channels each define their own version of a bundle, stock, invoicing and margin reporting drift apart. How to govern bundles without slowing sales.
layout: plain
---
The Gauteng sales team sells a "starter kit" of a unit, two accessories and a year's service. The Western Cape team sells something with the same name but includes three accessories and six months' service. The online channel lists a third version. Each team built its bundle in a spreadsheet or quote template, priced it to win locally, and reports it under the same product code. Then finance asks which starter kits are profitable, operations asks how many accessories to stock, and nobody can give a straight answer.

This article looks at that operating condition: product bundles configured differently across sales teams. It is common in businesses that sell kits, packages or solution bundles through several branches, regions, channels or resellers.

## The problem in plain language

A bundle is a commercial promise: these items, in these quantities, at this combined price, with these optional extras. When each sales team defines that promise for itself, the business ends up selling several different products under one name. The differences may be small, such as a different accessory, a different discount or a different service term, but they flow through to stock, delivery, invoicing, revenue and margin reporting.

## What the buyer is actually trying to solve

Sales operations and product managers search for ways to standardise product bundles, control discounting on packages, or manage kits across branches. Finance wants to know what was actually sold so that revenue and margin are reported correctly. Operations wants to pick and ship the right components. The shared need is one governed definition of each bundle, used by every team and channel, with deliberate and visible room for variation where the business wants it.

## Evidence and system mechanism

### Bundles are structured objects in sales systems

CRM and quoting systems treat bundles as defined records rather than free text. Microsoft's guidance on [setting up product bundles in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/create-product-bundles-sell-multiple-items-together) describes a bundle as a collection of products sold as a single unit, with each component given a quantity, a unit and a flag for required or optional. Bundle components can only be added or removed while the bundle is in draft; changing an active bundle means cloning it into a new one. That kind of lifecycle control exists precisely so that a bundle means the same thing every time it is quoted.

### Pricing depends on how the bundle is defined

The companion page on [how prices are calculated for product bundles](https://learn.microsoft.com/en-us/dynamics365/sales/pricing-product-bundles) shows that the bundle price comes from the price list, required components are not priced separately, and optional products are added at their own price-list prices. Two teams that disagree on which items are required and which are optional will therefore produce different totals for the "same" bundle, even when using the same price list.

### Fulfilment and revenue depend on it too

On the ERP side, Microsoft's [product bundles overview for Supply Chain Management](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/product-bundles-overview) explains that a bundle consists of a parent item and component items. When the order is confirmed the bundle is exploded into its components, and the selling price is allocated proportionally across them. Picking lists show the components, while confirmations and invoices show the parent. If a sales team's version of the bundle does not match the ERP's component list, the warehouse ships one thing, the customer expects another, and revenue is allocated to items that were never sold.

### Warning signs

- Quote templates for the same bundle differ between branches or channels.
- Bundles are assembled in spreadsheets before being entered as separate lines.
- Warehouse staff ask sales "which version of the kit is this?".
- Margin reports for a bundle vary widely by region with no clear reason.
- Customers in different regions compare quotes and query the differences.

## Problem owner and why-now trigger

Sales operations or the product or category manager usually owns bundle definitions. Regional sales managers own local variations. The commercial director typically funds the fix, with the financial controller as a key stakeholder because revenue and margin reporting depend on it.

The common trigger is an ERP or CRM change. Migrating to a new system forces the business to define bundles as records, and the project discovers several conflicting versions that must be reconciled before go-live. Adding an online channel or a reseller network has the same effect, because those channels need a single machine-readable definition.

## Economic consequence

Unmanaged bundle variation leaks margin through inconsistent discounts and extra components given away. It creates fulfilment errors and returns when the shipped kit does not match what was quoted. It distorts stock planning, because component demand depends on which version is being sold. It weakens reporting: when one product code hides several configurations, product and customer profitability cannot be measured, as discussed in [no visibility into customer and product profitability](/impact/no-visibility-into-customer-product-profitability/). Customers who notice different offers in different regions may also negotiate down to the cheapest version.

## Root cause

- **No owner for bundle definitions.** Each team creates bundles because nobody is accountable for the catalogue.
- **Bundles built outside the system.** Spreadsheets and templates let anyone redefine a bundle without approval.
- **No distinction between variants and deviations.** Legitimate regional variants are not defined as separate, named bundles, so local changes are made to the shared one.
- **CRM and ERP definitions differ.** The quoted bundle and the fulfilled bundle are maintained separately; the wider version of this is covered in [sales and finance use different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).

## Practical intervention

1. **Collect every live version.** Gather the bundle definitions, templates and price lists each team actually uses, and compare components, quantities, required and optional items, and pricing.
2. **Agree a master definition.** For each bundle, decide the standard components and price. Where regional or channel differences are justified, create named variants rather than silent edits.
3. **Assign an owner.** Give one role responsibility for creating, changing and retiring bundles, with a simple request route for sales teams.
4. **Hold bundles in one system of record.** Define bundles in the CRM or ERP, not in spreadsheets, and synchronise the definition between quoting and fulfilment; see [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).
5. **Control discounting.** Allow teams to discount within agreed bands on the standard bundle, with approval above those bands, rather than redesigning the bundle.
6. **Report by bundle and variant.** Measure volume and margin for each defined bundle so that the value of each variant is visible.

### Trade-offs

Central control can make sales feel slower and less able to respond to local competition. A fast change process and a sensible allowance for named variants keep the benefits of consistency without removing local judgement. Too many variants recreate the original problem, so each should earn its place in the reporting.

### An illustrative example

Illustrative: a security equipment supplier with about 80 staff across three regional branches found five versions of its most popular camera kit while preparing for a new ERP. The versions differed in cable lengths, storage and installation hours. The commercial manager agreed two named variants, retired the rest, loaded them as bundles in the CRM synchronised with the ERP, and set a discount band for branch managers. Kit-related delivery queries fell, and margin by kit could be reported for the first time.

## Diagnostic questions

- For your top five bundles, how many versions are being quoted today?
- Who can create or change a bundle, and is there an approval step?
- Does the bundle the customer is quoted match the component list the warehouse picks?
- Can you report margin by bundle and by variant?
- Are regional differences defined as named variants or made as ad hoc edits?

## What good looks like

Each bundle has one owned definition held in the system of record and used by every team and channel. Legitimate differences exist as named variants. Quoting and fulfilment use the same component list, discounts sit within agreed bands, and reporting shows volume and margin for each bundle and variant. Sales teams still respond to local conditions, but they do it within a shared catalogue rather than around it, which also reduces the admin load described in [why salespeople spend time updating systems instead of selling](/patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/).

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can consolidate bundle definitions into a single system of record and synchronise them between CRM and ERP. [Digital operations improvement](/services/digital-operations-improvement/) can design the ownership, request and discount-approval process that keeps the catalogue consistent.

## Method note

Product behaviours are taken from current vendor documentation and illustrate a general mechanism; other CRM and ERP systems handle bundles differently. The example is illustrative rather than a client case.
