---
hub: discovery
record_id: DISC-114
slug: why-safety-stock-rules-differ-between-sales-channels
title: Why safety stock rules differ between sales channels
description: The planner protects a buffer, but each channel publishes its own figure and sells it. How to define sellable stock once and allocate buffers on purpose.
lead: The planner protects a buffer, but each channel publishes its own figure and sells it. How to define sellable stock once and allocate buffers on purpose.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Inventory planner, with channel managers applying the policy
budget_owner: Operations director or financial director
sources:
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
  - Configure Inventory Visibility data sources - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration
  - https://help.shopify.com/en/manual/products/details/sku | https://help.shopify.com/en/manual/products/details/sku
related:
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
  - Why a cancelled order keeps its stock locked away | /discovery/why-a-cancelled-order-keeps-its-stock-locked-away/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
summary: The planner protects a buffer, but each channel publishes its own figure and sells it. How to define sellable stock once and allocate buffers on purpose.
layout: plain
---
A Johannesburg electronics reseller (an illustrative example) sells wireless headphones through its own web shop, a national marketplace and a handful of retail partners. The planner has decided that the business should always hold 20 units back as a buffer against late deliveries. The ERP knows this. The web shop does not, and shows all 55 units on hand. The marketplace feed subtracts a different, older buffer of 10. The retail partners get a weekly spreadsheet. When a promotion runs, the web shop sells down to the last unit while the marketplace still shows 45, and the business has promised the same buffer stock to three channels.

A safety stock rule is only as good as the number of places that obey it.

## The problem in plain language

Safety stock is stock deliberately kept out of the normal flow to cover uncertainty in demand or supply. When it is set in one system and a channel simply publishes total available stock, the buffer disappears the moment the channel can sell it. When each channel keeps its own buffer, the numbers differ and the business as a whole holds more stock than it intended, or less.

The symptoms: stockouts of items the planner believed were protected, different availability for the same product on different channels, and planners who cannot explain why a replenishment trigger fired late.

## What the buyer is actually trying to solve

Searches look like "safety stock not respected in online store", "how to reserve buffer stock per sales channel", "stop overselling by holding back stock" and "allocate inventory between channels". The buyer wants a buffer that is consistent, explainable and visible to everyone who sells.

## Evidence and system mechanism

Platforms treat safety stock as a stock state, not a footnote. Shopify's developer documentation lists a safety stock state alongside available, committed, reserved, damaged and quality control, describing it as physical units held back to reduce the risk of overselling. It is shown as unavailable in the admin, is part of on-hand, and does not contribute to sellable availability, while available is the only sellable state ([Shopify inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)). Where a platform supports such a state, a buffer can be held as a real quantity rather than a rule in someone's head.

The multi-channel dimension is documented by Microsoft in its Inventory Visibility service, which is built for businesses with several order-taking systems. It describes a calculated "available for reservation" measure created by adding and subtracting physical measures across data sources, and a soft reservation feature that lets every channel check availability against a shared figure and reserve against it, so that the last unit is not sold twice ([Inventory Visibility reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations)). Its configuration documentation explains that the data sources, measures and dimensions are all defined by the business, which means any buffer must be deliberately built into the calculation ([Inventory Visibility data sources](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration)).

Shopify's SKU guidance supplies a practical warning on the integration side: many apps need SKUs to sync inventory, and sync problems usually come from missing or mismatched SKUs ([Shopify SKU guidance](https://help.shopify.com/en/manual/products/details/sku)). A buffer rule can be perfect in the planning tool and still fail because the product on the channel is not matched to the product that carries the rule.

## Who owns it and why it becomes urgent

The inventory planner or supply chain manager defines the policy. Ecommerce or channel managers apply it, finance cares about the working capital the buffer represents, and the operations director usually holds the budget. The trigger is rapid growth in stock keeping units. With a few products, a planner can adjust channels by hand. With hundreds, per-product buffers differ, change with the season, and no longer fit in anyone's head or spreadsheet.

It overlaps with, but differs from, reserved stock appearing as available, which concerns stock committed to orders; here the stock is held back by policy. For the wider symptom of stock that is shown but cannot be delivered, see [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/).

## Economic consequence

- **Stockouts the buffer was meant to prevent,** with lost sales and service failures.
- **Over-protection,** where several channels each hold their own buffer and total unsold stock exceeds what the policy intended, tying up cash.
- **Unfair channel exposure.** The channel with the fastest feed sells the buffer first.
- **Planner time,** spent adjusting numbers by hand in each channel.
- **Poor replenishment signals,** because the planning system's view of cover does not match what was actually sold.

## Root cause

1. **The rule has no single home.** It lives in the ERP, a spreadsheet, a channel setting and a planner's memory.
2. **Channels publish a different quantity.** One reads total on-hand, another reads available, a third subtracts its own buffer.
3. **The buffer is not a stock state,** so it cannot be subtracted systematically.
4. **No allocation policy between channels.** Nobody decided whether the buffer is shared or split.
5. **Parameters are not reviewed.** Demand and lead times change; the buffer stays frozen at the old number.
6. **Feeds update at different speeds,** so a shared figure is not shared at the same time.

## Practical intervention

### Write the policy down in business terms

For each product class: how much is held back, why, and who may change it. Keep it short enough that a channel manager can read it.

### Define the sellable quantity once

State the formula: on-hand less committed, damaged, held for inspection and safety stock. Compute it in one place and have every channel read that result. Do not let channels subtract their own buffers on top.

### Decide how the buffer is allocated

Options include a shared pool, a fixed share per channel, or priority for particular customers. The choice is commercial; make it explicitly.

### Hold the buffer as a quantity where the platform allows

If your systems have a safety stock or held-back state, use it. If they do not, treat it as a calculated deduction in the shared availability figure, with the parameter stored in one place.

### Use real-time reservation where several channels sell

For fast-moving items sold through many channels, check availability and reserve at the moment of sale. The delay problems caused by batch feeds are described in [batch integrations that leave systems hours out of date](/discovery/batch-integrations-leave-systems-hours-out-of-date/).

### Review parameters on a schedule

Set a quarterly review for the highest-value items, comparing buffer size with actual demand variation and supplier performance.

## Diagnostic questions

- For your top ten products, where is the safety stock quantity recorded, and can every channel see it?
- Does each channel publish the same sellable quantity at the same moment?
- If two channels sell the last unit within a minute, what happens?
- Who may change a buffer, and how is the change communicated?
- When was a buffer last compared with real demand?

## What good looks like

Each product has an explicit buffer, held in one place, and a clear formula for sellable stock. Every channel reads the same figure, which already excludes the buffer. Allocation between channels is a decision, not an accident. Changes to the buffer reach all channels together, and a periodic review keeps the parameters tied to reality.

## Where Mellorca fits

Making one availability figure drive every channel is an architecture and integration task, belonging to [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) when the question is which system should own the rule, and to [systems implementation and integration](/services/systems-implementation-integration/) when the feeds must be rebuilt. For the related question of numbers that differ by system, see [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## Method note

The reseller is an illustrative example. The documentation cited describes how particular platforms represent held-back stock and shared reservations; it does not recommend buffer sizes, which depend on demand variability and supplier lead times. Treat the quantities in the example as invented for illustration.
