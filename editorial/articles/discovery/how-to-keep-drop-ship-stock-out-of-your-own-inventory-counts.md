---
hub: discovery
record_id: DISC-117
slug: how-to-keep-drop-ship-stock-out-of-your-own-inventory-counts
title: Drop-ship stock is counted as if it sits in your own warehouse
description: When supplier-shipped lines share item codes, locations and reports with owned goods, stock counts, availability and valuation all drift. How to separate the two flows cleanly.
lead: When supplier-shipped lines share item codes, locations and reports with owned goods, stock counts, availability and valuation all drift. How to separate the two flows cleanly.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Supply Chain / Operations Manager
budget_owner: COO / CFO
sources:
  - Direct deliveries - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/direct-deliveries
  - Make drop shipments - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-drop-shipment
  - Purchase items for a sale - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-purchase-products-sale
related:
  - Why warehouses with different location codes cannot share stock data | /discovery/why-warehouses-with-different-location-codes-cannot-share-stock-data/
  - Why sales and warehouse systems need one product identifier | /discovery/why-sales-and-warehouse-systems-need-one-product-identifier/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
summary: When supplier-shipped lines share item codes, locations and reports with owned goods, stock counts, availability and valuation all drift. How to separate the two flows cleanly.
layout: plain
---
A homeware wholesaler decides to add forty fast-selling lamp and fan models to its catalogue without stocking them. The supplier will ship straight to the customer. To get the lines on sale quickly, someone in the office creates the items in the ERP exactly as they create owned stock: same item group, same default warehouse, same reorder rules. Within a month the warehouse team is asked why the system says there are 60 fans on the shelf when there are none, the buyer has raised a replenishment order for items that were never meant to be stocked, and finance cannot explain a stock valuation that includes goods the company has never held. (This is an illustrative example, not a named business.)

## The problem in plain language

Drop-shipped goods and owned goods follow different physical paths. Owned stock is bought, received into a warehouse location, stored, picked and shipped. Drop-shipped goods go from the supplier to the customer, and the business sees them only on paper. When both kinds of item are set up and reported the same way, the systems apply warehouse logic to products that never enter the building.

The observable symptoms are practical. Availability figures include supplier stock the business does not control. Replenishment suggestions appear for lines that should never be bought for stock. Stock counts show variances against items that cannot be counted. Reports of inventory value include or exclude drop-ship lines depending on who built them. Customer service cannot tell whether a late order is waiting on the warehouse or on the supplier.

## What the buyer is actually trying to solve

Searches for this problem are usually phrased as "separate drop ship inventory from our stock", "drop ship items showing in warehouse inventory", "how to handle dropship in ERP" or "drop shipping inventory accounting". The underlying aim is to keep a clean boundary: what the company owns and holds, what a supplier holds on its behalf, and what it merely sells. Once that boundary is clear, availability, purchasing, counting and valuation each follow naturally.

## Evidence and system mechanism

Business software generally treats a drop shipment as a linked pair of documents rather than a stock movement. Microsoft's Business Central documentation on [making drop shipments](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-drop-shipment) defines a drop shipment as items shipped from a vendor directly to a customer. A sales order line is flagged for drop shipment, a purchase order is created with the customer's address as the ship-to, and the two are linked. When the sales shipment is posted, the system automatically posts the receipt on the linked purchase order, and a shipment can be reversed only while neither side has been invoiced.

The same vendor's [documentation on direct deliveries](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/direct-deliveries) in its larger supply chain product describes the same idea. The sales order lines and purchase order lines are linked, the sales packing slip updates automatically from the purchase product receipt, delivery dates and addresses are kept in step between the two documents, and a partly delivered line cannot simply be deleted. It states plainly that the items never physically arrive at the warehouse, so picking requirements set on the item are ignored for direct deliveries, even though a warehouse must still be named on the sales line.

A third page, on [purchasing items for a sale](https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-purchase-products-sale), draws the contrast. It describes a different function for replenishing your own inventory against a sales order and points out that buying for direct shipment to the customer must be done as a drop shipment. The point for a business owner is that the software distinguishes two flows, and your item set-up, procedures and reports need to do the same.

These pages describe how one vendor models the process. They show that a clean separation is a normal design, not that every business has the failure described here.

## Who owns the problem and why now

The operations or supply chain manager usually owns the problem, with the warehouse manager feeling it first and the financial controller feeling it at month-end. The budget owner is typically the COO or CFO. IT is involved because item set-up, integration rules and reports all need to change.

The common trigger is warehouse expansion. A larger or second warehouse brings new counting routines, new replenishment rules and a stricter view of what the building holds. At that point the inherited habit of mixing drop-ship items into the same lists becomes visible, because the warehouse is now being measured on accuracy. Similar triggers include adding a marketplace or online channel that lists supplier-fulfilled products, or onboarding a supplier whose range greatly exceeds what you stock.

## Economic consequence

- **Overselling and underselling**: if supplier stock is treated as owned, customers are promised goods the supplier may not have. If it is ignored, you decline sales you could have taken.
- **Wasted purchasing**: replenishment rules may buy stock for lines meant to ship direct, tying up cash and shelf space.
- **Counting effort**: the warehouse spends time investigating variances on items that cannot be counted.
- **Distorted valuation and margin**: reports of stock value, turnover and margin mix two economic models. [The cost of accounting records that do not match operations](/impact/accounting-records-not-matching-operations-reconciliation-decision-uncertainty-cost/) explains how that uncertainty affects decisions.
- **Customer service friction**: staff cannot say where an order is when its status depends on a supplier.

## Root cause

The mixing of stock is a symptom. The causes tend to be one or more of the following.

1. **Single item pattern**: there is no distinction in the item master between stocked, drop-shipped and special-order items.
2. **Shared warehouse and location codes**: drop-ship quantities are posted to a real location, or to a dummy location that appears in stock reports.
3. **Replenishment rules applied by default**: new items inherit reorder points from a template.
4. **Unlinked documents**: the sales order and supplier order are created separately, so nothing ties delivery to receipt.
5. **Channel feeds**: online listings take quantities from the same field regardless of who holds the stock.
6. **No agreed definition**: operations and finance have never written down what counts as inventory.

The question of which system should own each of these facts is covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Practical intervention

1. Classify every active product as stocked, drop-shipped or special order, and record that classification in a field that every system can read.
2. Set the rules for each class: whether it has an on-hand quantity, whether it has reorder rules, which location it posts to, and how it appears on channel listings.
3. Make the order flow match the class. A drop-ship line should create or link a supplier order automatically, carry the customer's delivery address and move through shipment and receipt together.
4. Change reports and counts to respect the class: exclude drop-ship items from cycle counts and replenishment, and show them in a separate line in stock valuation reports where they hold any financial value at all.
5. Show customers and staff a realistic promise: for supplier-held stock, use the supplier's confirmed availability or lead time, not an inferred balance.
6. Review exceptions weekly at first: items that changed class, orders where the supplier changed the date, and any drop-ship item with a warehouse quantity.

For a small business, step one alone can be done in a day with a spreadsheet export and a new field. The harder work is steps three and four, which involve how documents link and how reports are built.

## Diagnostic questions

- Can you list, today, every product that ships directly from a supplier?
- Do any of those products show an on-hand quantity or a reorder point?
- When a drop-ship order ships, does the supplier order update automatically, or does someone re-key it?
- Do cycle counts and stock reports exclude supplier-held lines?
- Does the online shop show supplier availability or a number nobody can explain?
- Could finance state the value of owned stock without manual adjustments for drop-ship lines?

## What good looks like

The item master states how each product is sourced. Owned stock lives in warehouse locations and is counted. Drop-ship lines have no warehouse quantity, no replenishment rule and no place in a stock count, yet they remain fully visible in sales, purchasing and customer service as linked orders. When a customer asks about a drop-ship order, the answer comes from the supplier order status. The stock valuation reconciles to the warehouse without a list of known exceptions. Related guidance on keeping order status visible to account managers appears in [why salespeople cannot see whether an order has been fulfilled](/discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/).

## Where Mellorca fits

Mellorca can review item set-up and order flows, define the classification and ownership rules, and design the changes to documents, integrations and reports so that owned and supplier-held goods are handled separately. The work is typically a short [digital systems audit](/services/digital-systems-audit/) of how products and orders are set up, followed by implementation in the ERP, warehouse and sales channels.

## Method note

The vendor documentation cited describes how particular products link sales and purchase documents for direct shipment; terminology and screens differ between products. Accounting treatment depends on the contract terms with each supplier and on your auditors' advice, so confirm those details before changing how value is reported. The worked example is illustrative.
