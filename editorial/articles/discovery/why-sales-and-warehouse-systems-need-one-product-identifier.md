---
hub: discovery
record_id: DISC-108
slug: why-sales-and-warehouse-systems-need-one-product-identifier
title: Why sales and warehouse systems need one product identifier
description: One product, three codes: the web shop, warehouse and accounts each name it differently, and stock lands on the wrong item. How to give each product one identity.
lead: One product, three codes: the web shop, warehouse and accounts each name it differently, and stock lands on the wrong item. How to give each product one identity.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Inventory or supply chain manager, with merchandising owning product creation
budget_owner: Operations director or financial director
sources:
  - 12 Teaspoons: Building confidence and market access through trusted GS1 barcodes | https://asset.gs1.org/insights-events/case-studies/12-teaspoons-building-confidence-and-market-access-through-trusted-gs1-barcodes
  - Configure Inventory Visibility data sources - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration
related:
  - Warehouse adjustments do not reach ecommerce systems quickly | /discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/
  - Why warehouses with different location codes cannot share stock data | /discovery/why-warehouses-with-different-location-codes-cannot-share-stock-data/
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
summary: One product, three codes: the web shop, warehouse and accounts each name it differently, and stock lands on the wrong item. How to give each product one identity.
layout: plain
---
An online retailer of outdoor gear in KwaZulu-Natal (an illustrative example) sells a camping stove listed in the web shop as "STOVE-2B-BLK". The warehouse system knows the same stove as item 100482. The accounting package calls it "Camp Stove 2 Burner Black". Everyone is talking about one physical box, yet three systems have three names for it, and a spreadsheet in someone's drive holds the translation. When a supplier changes the box size and a new variant is created, the spreadsheet is updated in one place and not another. For a fortnight, sales of the old variant deplete the stock of the new one.

That is what mismatched product identifiers look like in practice. The data is not wrong in any single system; it simply cannot be joined reliably to the data in the next.

## The problem in plain language

Every system that touches a product needs a way to refer to it. When the sales platform, the warehouse system and the finance package each use their own code, every exchange of information between them depends on a mapping. If the mapping is complete and maintained, nobody notices. If it is a spreadsheet, a manual lookup or a rule buried in an integration, then stock movements are posted to the wrong item, sales cannot be reconciled to stock, and variances appear that no count can explain.

## What the buyer is actually trying to solve

The search language is practical: "SKU mismatch between systems", "product codes don't match between ERP and online store", "stock sync fails for some products", "how to map SKUs between systems". The buyer's real aim is to stop spending time on exceptions and to trust that a sale against an item reduces the stock of that same item.

## Evidence and system mechanism

Platform documentation is consistent about the risk. Shopify's guidance on SKUs describes them as internal codes for tracking inventory and reporting sales, separate from barcodes. It recommends a unique SKU for each product and variant, notes that SKUs are case-sensitive so "ABC123" and "abc123" count as different, and states that many apps need SKUs to sync inventory, adding that sync problems usually come from missing or mismatched SKUs ([Shopify SKU guidance](https://help.shopify.com/en/manual/products/details/sku)). It also advises checking that a connected app reads the intended SKU field rather than another identifier. In other words, the platform's own documentation identifies identifier mismatches as the typical cause of failed synchronisation.

The case for an external, shared standard is illustrated by GS1 South Africa's published case study of a local skincare brand. It describes thirty-one products carrying official GS1 Global Trade Item Numbers, which supported listings across seven product configurations on a major South African marketplace and supply to three retailers, and notes that Verified by GS1 lets retailers and marketplaces confirm that the barcodes are licensed to the brand ([GS1 case study](https://asset.gs1.org/insights-events/case-studies/12-teaspoons-building-confidence-and-market-access-through-trusted-gs1-barcodes)). The case study is promotional material from the standards body, so treat it as an example of how a shared identifier is used, not as a performance benchmark. But it makes a useful point: an identifier that trading partners recognise travels further than one that only your own systems understand.

Microsoft's Dynamics 365 documentation shows the structural side. Its Inventory Visibility service maps dimensions from each external data source onto a common set of base dimensions, such as colour, size and style, so that quantities from different systems can be compared ([Inventory Visibility data sources](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration)). The need for that mapping layer exists precisely because systems describe the same product differently.

## Who owns it and why it becomes urgent

Product master data often has no clear owner. Merchandising creates items for sales, the warehouse creates items for receiving, and finance creates items for costing. The inventory or supply chain manager feels the pain, while the operations director or finance director holds the budget for fixing it.

The common trigger is stock variance that cannot be traced. Others include a new marketplace, which demands identifiers the existing scheme lacks, or an ERP change that forces a full re-mapping. Closely related is the problem of sales and finance holding different product and price data, described in [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).

## Economic consequence

- **Stock posted to the wrong item.** One line is overstated and another understated, creating the appearance of loss and surplus together.
- **Manual reconciliation.** Staff spend hours each month matching codes between exports.
- **Failed or partial synchronisation.** Some products update across channels and some do not, which is hard to diagnose.
- **Slower onboarding of channels and suppliers.** Every new partner means another mapping.
- **Weaker reporting.** Margin, turnover and sell-through by product cannot be trusted when the product key is not stable.

## Root cause

Different codes are the symptom. The deeper causes tend to be:

1. **No single product master.** Each system is allowed to create items, so identities diverge from the start.
2. **Codes designed for humans in one function.** A readable web SKU is convenient for merchandising and meaningless to a scanner.
3. **Variants treated inconsistently.** One system holds a product with options, another holds a separate item per option.
4. **Mappings stored informally.** Translation lives in a spreadsheet or in code with no owner or change control.
5. **Changes are not communicated.** A new pack size is created in one place and the others learn of it when something breaks.

## Practical intervention

### Decide the system of record for product identity

Choose where an item is born. New products should be created once, in one place, and pushed outward. This is a governance decision before it is a technology one.

### Use a stable internal key, and carry external identifiers beside it

Keep one internal identifier that never changes, and hold the web SKU, supplier code and barcode or GTIN as attributes of that item. If you sell through retailers or marketplaces, an official GTIN is usually worth the investment, because partners expect it.

### Hold the mapping as data, with an owner

Where a legacy system cannot adopt the new key, keep an explicit cross-reference table that someone maintains, and that integrations read rather than duplicate. Reject unmapped items instead of guessing.

### Handle variants deliberately

Agree whether a size or colour is a variant of one product or a separate item, and apply the rule in every system. This also matters for bundles, which add their own identifiers; see [when every sales team builds its own product bundle](/discovery/when-every-sales-team-builds-its-own-product-bundle/).

### Monitor for exceptions

A daily list of unmatched or newly created items catches drift early, before it becomes a variance. Failed messages that sit unnoticed are a known trap, covered in [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).

## Diagnostic questions

- How many different codes does your best-selling product have across systems?
- Where is the translation between them held, and who last changed it?
- Who is allowed to create an item, and is there a review?
- When a sync fails for some products, how long does it take to find out which, and why?
- Can you report sales and stock for one product without a manual match?

## What good looks like

Each product has one identity that every system recognises, with its web, supplier and barcode identifiers attached to it. New items are created once, reviewed and distributed. Unmatched items are flagged the same day. A sale in any channel reduces the stock of the same item the warehouse sees, and finance can read margin by product without a rebuild.

## Where Mellorca fits

Establishing a product master and re-pointing the connections that rely on it is integration work, covered by [systems implementation and integration](/services/systems-implementation-integration/). Where the first need is to see how many identifiers exist and which interfaces depend on them, a [digital systems audit](/services/digital-systems-audit/) is the usual starting point.

## Method note

The example business is illustrative. Vendor documentation describes the behaviour of specific products and may change; check the version you use. The GS1 material is the standards body's own case study and illustrates use, not measured outcomes.
