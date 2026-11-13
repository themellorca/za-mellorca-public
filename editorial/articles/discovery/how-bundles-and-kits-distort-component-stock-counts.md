---
hub: discovery
record_id: DISC-109
slug: how-bundles-and-kits-distort-component-stock-counts
title: How bundles and kits distort component stock counts
description: A bundle sells as one line but uses several parts, so counts drift and the scarcest part oversells. How to choose a bundle model with one recipe.
lead: A bundle sells as one line but consumes several parts, so component counts drift and the scarcest part oversells. Choosing a bundle model and keeping one recipe.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Inventory manager, with merchandising owning bundle definitions
budget_owner: Operations director or commercial director
sources:
  - Kits — Odoo 16.0 documentation | https://www.odoo.com/documentation/user/16.0/manufacturing/management/kit_shipping.html
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
  - Eligibility and considerations for using product bundles - Shopify Help Center | https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations
related:
  - Why stock in transit between locations goes missing in reconciliation | /discovery/why-stock-in-transit-between-locations-goes-missing-in-reconciliation/
  - Reserved stock is treated as available stock | /discovery/why-reserved-stock-keeps-showing-as-available-to-sell/
  - Why sales and warehouse systems need one product identifier | /discovery/why-sales-and-warehouse-systems-need-one-product-identifier/
  - Why safety stock rules differ between sales channels | /discovery/why-safety-stock-rules-differ-between-sales-channels/
summary: A bundle sells as one line but consumes several parts, so component counts drift and the scarcest part oversells. Choosing a bundle model and keeping one recipe.
layout: plain
---
A Durban gift-hamper business (an illustrative example) sells a "Braai Lover's Box" that contains a branded apron, a set of tongs, a spice rub and a bottle opener. On the website the box shows 40 available. The warehouse has 40 finished boxes on a pallet. Then a trade customer orders 30 tongs on their own. Nobody updates the box count, and the next hamper order draws on components that were quietly committed elsewhere. By Friday, 12 boxes are sold that cannot be assembled.

The trouble is that a bundle is two things at once: a product the customer buys, and a set of components the warehouse owns. If the systems do not agree which of the two they are tracking, the numbers drift apart.

## The problem in plain language

Bundles and kits multiply as a business adds stock keeping units. A promotion creates a three-for-two pack. A supplier ships a starter set. A sales team builds its own bundle for a tender. Each one is sold as a single line, but physically it consumes several component items. If components are not deducted properly when a bundle sells, or if a pre-assembled bundle is counted as well as its parts, the component inventory becomes unreliable. The symptoms are overselling of the scarcer component, stock that appears to vanish, and counts that never reconcile.

## What you are actually trying to solve

The complaints sound like "bundle inventory is not updating components", "how to track kit stock", "sell bundles and individual items from the same stock" and "kitting inventory discrepancy". The objective is to sell the bundle and the parts without double-counting either.

## Evidence and system mechanism

The mechanism is documented by inventory platforms, and the options they offer show where the confusion arises. Odoo's documentation on kits explains that a kit is a bill of materials, and that there are two ways to run it. In the first, the kit is not stocked at all: inventory is managed at the component level, so a kit cannot be sold if a required component is out of stock.

In the second, the kit is stored as a product, but reordering and replenishment rules still belong to the components. The same page notes that a kit appears as a single line on the sales order, while the delivery order lists each component separately, that stock adjustments cannot be made at the kit level, and that serial tracking follows the shipped components, not the kit ([Odoo kit documentation](https://www.odoo.com/documentation/user/16.0/manufacturing/management/kit_shipping.html)).

Those design choices matter because each tool picks a different answer to "what is the bundle's stock". If the shop treats the bundle as a stocked item, while the warehouse treats it as a recipe, the two will diverge by design.

Shopify's SKU guidance hints at the identifier side of the same problem. It says each product and variant should have its own SKU, that duplicates are flagged with a warning, and that the warning may be ignored for bundles or particular workflows ([Shopify SKU guidance](https://help.shopify.com/en/manual/products/details/sku)). Bundles are explicitly a case where identifier discipline loosens, which is when downstream systems struggle to interpret what was sold.

Shopify's inventory-state model reminds us of another layer. Its developer documentation describes units as being in exactly one state at a time: available, committed to unfulfilled orders, reserved, damaged and so on ([Shopify inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)). A component earmarked for an assembled hamper is therefore no longer available for a loose sale, and a design that does not reflect this will oversell the component. Shopify's help documentation on [product bundles](https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations) states the limiting-part effect plainly: the product with the lowest inventory level determines how many bundles can be sold.

## Who owns it and why it becomes urgent

Merchandising or product management creates bundles; the warehouse assembles them; finance values the components and the finished set. The inventory manager is typically the one who sees the variance, while the operations or commercial director owns the budget. The trigger is rapid growth in the number of stock keeping units. When a business has fifty items, a few bundles can be managed from memory. At five hundred items, with seasonal promotions, nobody remembers which bundle uses which component.

The related question of who is allowed to create bundles at all is discussed in [when every sales team builds its own product bundle](/discovery/when-every-sales-team-builds-its-own-product-bundle/).

## Economic consequence

- **Overselling of the scarcest component.** The bundle looks available because the shop counts finished sets, not the limiting part.
- **Unexplained count variances.** Components consumed by bundle sales are not deducted, so counts disagree with the books.
- **Excess or missing purchases.** Planners reorder components on a wrong demand figure.
- **Assembly rework.** Staff break down finished kits to free a component for a different order.
- **Weak margin visibility.** If the bundle's cost is not built from its components, the real profit of a promotion is unknown.

## Root cause

1. **No agreed definition of a bundle's stock.** Is it a recipe calculated on demand, or a physical assembled item with its own count? Systems answer differently.
2. **Bundle structure lives in one system only.** The shop knows the contents; the warehouse and finance do not.
3. **Pre-assembly is not recorded.** Turning four components into one boxed set is a stock transformation. If it is not posted, the components remain on the books while they are physically gone.
4. **Changes in contents are not versioned.** A substituted component changes the recipe, but old and new orders still point to the same code.
5. **Bundle codes are created freely,** often by duplicating an item.

## Practical intervention

### Choose the model deliberately

For each class of bundle, decide whether it is virtual (sold from component stock, assembled at dispatch) or physical (assembled in advance and counted as its own item). Mixed models are possible, but each bundle must belong to one.

### Hold the recipe once

Maintain bundle contents in a single bill of materials that the shop, warehouse and finance systems read. Duplicated recipes drift.

### Derive bundle availability from the limiting component

For virtual bundles, available quantity is the number of complete sets the scarcest component allows. Compute it from component stock and the recipe, and publish that to the shop.

### Record assembly as a transaction

If you pre-assemble, post it: components out, finished sets in. If you break sets down, post that too.

### Control bundle creation and versions

A new bundle needs an owner, a recipe and an expiry or review date. A change of contents creates a new version.

### Check the integration, not just the setup

Many failures sit in the connection between systems, when a bundle line arrives as a single quantity and no one translates it into component movements. [Fulfilment problems often begin before the warehouse](/patterns/why-fulfilment-problems-begin-before-the-warehouse/) for just this reason.

## Diagnostic questions

- When a bundle sells, which stock record falls, and by how much?
- Can you list every bundle and its components from one source?
- Which component limits your most popular bundle today, and does the shop know?
- Is pre-assembly posted as a stock transaction?
- Who may create a new bundle and what check follows?

## What good looks like

A bundle sale reduces the right components the moment it is placed or dispatched, according to a recipe kept in one place. The shop's bundle availability follows the scarcest component, loose sales and bundle sales draw on the same pool, and assembly and breakdown are recorded. Finance can cost each bundle from its parts and see the real margin.

## Where Mellorca fits

Because the repair usually involves translating a bundle line into component movements across several systems, the work falls within [systems implementation and integration](/services/systems-implementation-integration/). When rules such as "recalculate bundle availability after every component change" should run without manual steps, [business automation](/services/business-automation/) is the relevant service. For how mismatched counts surface at group level, see [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## Method note

The hamper example is illustrative. Different platforms implement bundles and kits in different ways, and the behaviour described comes from the documentation of the products cited. Confirm how your own software treats bundles before changing a process.
