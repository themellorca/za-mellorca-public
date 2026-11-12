---
hub: discovery
record_id: DISC-122
slug: launching-a-new-sku-before-every-system-knows-it-exists
title: New SKUs go on sale before every system has the product data
description: A product that exists in the catalogue but not in the warehouse, pricing or finance systems produces manual fixes on day one. A release routine that avoids it.
lead: A product that exists in the catalogue but not in the warehouse, pricing or finance systems produces manual fixes on day one. A release routine that avoids it.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Product Data Owner / Operations Manager
budget_owner: COO / Commercial Director
sources:
  - Product information overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/pim/product-information
  - Standards - GS1 | https://gs1za.org/about-us/standards/
  - FAQ's - GS1 | https://gs1za.org/faqs
related:
  - Why sales and warehouse systems need one product identifier | /discovery/why-sales-and-warehouse-systems-need-one-product-identifier/
  - Why Inventory Numbers Disagree Across Sales, Warehouse and Finance | /discovery/why-inventory-numbers-disagree-across-systems/
  - Warehouse adjustments do not reach ecommerce systems quickly | /discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/
summary: A product that exists in the catalogue but not in the warehouse, pricing or finance systems produces manual fixes on day one. A release routine that avoids it.
layout: plain
---
A sports-equipment importer in Durban lists a new range of resistance bands for a Friday promotion. On Thursday evening the marketing team creates the products on the web shop. On Friday morning the first order arrives and the order desk finds that the ERP has never heard of the item code, so the order has to be keyed in by hand with a temporary code. The warehouse system has no pack size or barcode for the product, so the receiving team cannot book in the first delivery. The pricing spreadsheet has no cost, so nobody can tell whether the promotion is profitable. By Monday, three versions of the same product exist. (This is an illustrative example, not a named business.)

## The problem in plain language

A new stock-keeping unit has to exist in several places before it can be sold, received, picked, shipped and invoiced. The web shop needs a description, image and price. The ERP needs an item number, unit of measure, tax class and costing method. The warehouse system needs dimensions, weight, pack quantities and a scannable barcode. Finance needs a product group and a cost. When the product is launched before all of those systems hold the data, the missing facts are supplied by people, under time pressure, in different ways.

The symptom is a cluster of early-life problems: orders that cannot be processed automatically, stock that cannot be received, goods that cannot be scanned, invoices with the wrong tax or price, and duplicate or temporary item codes that have to be merged later.

## What the buyer is actually trying to solve

Search phrasing includes "new product setup takes too long across systems", "product master data not syncing to warehouse", "SKU created in ecommerce but not in ERP", "product data management for small business" and "new item launch checklist". The goal is a launch routine in which a product becomes sellable only when each system that touches it is ready, with no hand-keyed workarounds.

## Evidence and system mechanism

Product information platforms are built around the idea that a product has a shared definition and a set of context-specific settings. Microsoft's [product information overview](https://learn.microsoft.com/en-us/dynamics365/supply-chain/pim/product-information) describes a product as defined by a number, name and description plus further data: product type, dimensions, categories, attributes, units of measure and conversions, images, attachments and translations. It explains that one instance often acts as the master of product data for the others, with data entities to export and import definitions, and that data can be distributed onward, for example to a sales application. It also separates the shared product from the *released product*, which is released to a particular legal entity, where further properties and attributes may be needed. A dedicated workspace monitors recently released products and runs validation for each, which may show that required configuration for that legal entity is incomplete. The page adds that product data changes every day, so maintaining it is a critical business process on its own.

The design point is that creating a product and making it usable are separate steps, and that the second step can be monitored. A business without this structure usually discovers incompleteness by failing at the point of sale.

Identification is the other half of the story. GS1 South Africa's [standards overview](https://gs1za.org/about-us/standards/) describes the Global Trade Item Number, GTIN, as the identifier for products and services and the Global Data Synchronisation Network, GDSN, as the route for sharing master product data automatically. GS1 South Africa's [frequently asked questions](https://gs1za.org/faqs) explain that the barcodes it licenses are blank: product information is not encoded in the barcode, and trading partners retrieve it through the GDSN network, with a product data listing portal offered for suppliers dealing with major South African retailers and hospital groups. For a business that imports, distributes or sells through retail chains, that means the barcode number and the data attached to it must be consistent between the supplier, the distributor and the retailer.

These sources describe how one platform and one standards body approach the problem. They do not show that every business suffers from it, but they do show why a product needs a complete, shared definition before it is released.

## Who owns the problem and why now

The problem owner is usually the operations manager, working with whoever owns product data, often someone in merchandising, buying or marketing. The budget owner is typically the COO or commercial director. IT supports the integrations that carry the data.

The common trigger is a warehouse expansion or a move to a new warehouse management system. The new system is stricter about dimensions, pack structures and identifiers than the old paper-based or spreadsheet-based routine was. Other triggers are a step up in launches per month, a new retail customer who requires listed product data, or a channel that insists on barcodes and standard attributes.

## Economic consequence

- **Launch delay or lost promotional revenue**: the product cannot be sold on the day it was meant to be.
- **Manual order handling**: orders for unknown items are keyed by hand, with the error risk described in [the hidden cost of re-keying order information](/patterns/the-hidden-cost-of-re-keying-order-information/).
- **Receiving and put-away delay**: stock sits in the dock because it cannot be booked in.
- **Wrong prices and margins**: costs and tax settings are missing or provisional at the time of the first sales.
- **Cleanup effort**: duplicate and temporary items have to be merged, and reports corrected, as in [master data changes that break reports without warning](/discovery/master-data-changes-break-reports-without-warning/).
- **Retail compliance risk**: listing errors with a retail customer can delay or block supply.

## Root cause

1. **No single point of creation**: products are created independently in the web shop, ERP and spreadsheets.
2. **No launch gate**: nothing prevents a product from going on sale until every required field and system is ready.
3. **Unclear ownership of attributes**: marketing owns the description, buying owns cost, the warehouse owns dimensions, finance owns the tax class, and no one owns the whole.
4. **Batch or manual transfer**: data moves between systems by file or re-keying, so some systems lag.
5. **Inconsistent identifiers**: item numbers, barcodes and variants are coded differently in each system.
6. **Late supplier data**: dimensions and pack sizes arrive after the sales listing is built.

The ownership question is the one set out in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Practical intervention

1. List the systems and teams that must hold data for a product to work end to end, and the minimum fields each needs.
2. Choose one place where a product is created. Everything else receives it, rather than re-creating it.
3. Define a launch checklist with an owner for each field: identifier, description, unit and pack sizes, dimensions, weight, cost, tax class, price, images and barcode.
4. Add a gate: the product cannot be released to sale, to purchasing or to the warehouse until the checklist is complete and validated. Release to each system can be staged, with a visible status.
5. Automate the distribution from the point of creation, and report on any system that has not acknowledged the new item.
6. Set a lead time for product launches that fits the slowest dependency, usually supplier data or barcode allocation, and work back from the planned sales date.
7. Review the first week of every launch: how many hand-keyed fixes were needed, and why.

A small business can start with a shared product-setup sheet and a single person accountable for completeness. The integration can follow once the fields and owners are stable.

## Diagnostic questions

- Where is a new product created first, and who is allowed to create it?
- Which fields have caused a failed order, receipt or invoice in the last three launches?
- Can a product go on sale before the warehouse has its dimensions and barcode?
- How long does it take, in days, for a new item to exist correctly in all systems?
- How many temporary or duplicate item codes exist today?
- Do retail customers or marketplaces require listed product data from you, and who maintains it?

## What good looks like

A product is created once, with a complete set of required attributes, each with a named owner. A readiness status shows which systems have received it. The product goes on sale only when ordering, receiving, picking and invoicing can all handle it automatically. The first customer order is processed without a hand-keyed workaround, the first delivery is received by scanning the barcode, and finance sees the correct cost and tax on day one. Data quality remains stable as the range grows, a challenge discussed in [why business data quality declines with growth](/insights/why-business-data-quality-declines-with-growth/).

## Where Mellorca fits

Mellorca can map the product data journey across your systems, define owners and launch gates, and design the integration that distributes product data from a single point of creation. This is typically delivered through [systems implementation and integration](/services/systems-implementation-integration/), after a short review of how products are currently created and where gaps appear.

## Method note

The sources describe the way one software platform and the GS1 standards approach product identification and data sharing. They do not establish how common this problem is in any given sector. The opening example is illustrative. Requirements for retail listings and barcodes vary by customer, so confirm them directly with each trading partner.
