---
hub: discovery
record_id: DISC-106
slug: why-damaged-stock-keeps-showing-as-available-to-customers
title: Why damaged stock keeps showing as available to customers
description: Cracked, returned or quarantined units are still on the shelf, so the shop keeps selling them. How to give damaged stock its own status that every sales channel respects.
lead: Cracked, returned or quarantined units are still on the shelf, so the shop keeps selling them. How to give damaged stock its own status that every sales channel respects.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Warehouse or operations manager, with the financial controller owning write-offs and supplier claims
budget_owner: Operations director or financial director
sources:
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
  - Configure Inventory Visibility data sources - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
related:
  - Why sales and warehouse systems need one product identifier | /discovery/why-sales-and-warehouse-systems-need-one-product-identifier/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
  - Reserved stock is treated as available stock | /discovery/why-reserved-stock-keeps-showing-as-available-to-sell/
summary: Cracked, returned or quarantined units are still on the shelf, so the shop keeps selling them. How to give damaged stock its own status that every sales channel respects.
layout: plain
---
Picture a Cape Town homeware wholesaler (an illustrative example) that opens a second online channel in November. On the first Saturday, the new storefront sells eleven glass carafes. The warehouse system also says it has eleven carafes on the shelf. What it does not say is that nine of them were cracked in a pallet drop on Thursday, boxed up, and pushed to a corner by the dispatch door. The sales channel never heard about the cracks. Customers pay, the pickers walk to the shelf, and a day later nine apologetic emails go out.

Nobody was careless. The people who found the damage did the sensible physical thing and set the boxes aside. The failure is that "set aside" is a decision made with hands and floor space, while "available to sell" is a number held in software.

## The problem in plain language

Damaged goods exist in a grey zone. They are physically in the building, they are usually still counted as owned stock, and they may be waiting for a supplier credit, an insurance assessment, a repair or a write-off decision. Yet every system that publishes availability to customers treats stock as sellable unless something explicitly tells it otherwise. If the damaged units are still sitting inside the ordinary on-hand quantity, they will be offered to customers.

The symptom is easy to spot: orders that cannot be completed in full, cancellations that follow a physical check, and staff who learn to distrust the available figure. The cause is harder to see, because it sits in how stock is classified rather than how it is counted.

## What the buyer is actually trying to solve

People who reach this problem rarely search for "stock classification model". They type phrases such as "damaged stock showing as available", "how to stop selling damaged items online" or "quarantine stock in inventory system". What they want is simple: when a unit is found to be unsellable, customers must stop being offered it within minutes, and finance must still see it as an asset that needs a decision.

## How the systems are meant to work

Modern inventory platforms handle this by splitting physical stock into states rather than keeping one number. Shopify's developer documentation on inventory management, for example, describes separate states for available, committed, reserved, damaged, safety stock and quality control. It defines on-hand as the sum of those states, and says only the available state is sellable. Damaged units are described as physical units that cannot be sold or used, and the states are mutually exclusive, so a unit sits in exactly one of them at a time ([Shopify inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)).

That design has a consequence worth stating plainly. Moving a unit from available to damaged is a transfer between states, not an adjustment of the total. The physical count does not change, so a cycle count will still agree with the system, while the number shown to customers falls. Businesses that record damage by reducing the on-hand total end up with the reverse problem: the warehouse count shows a variance, and nobody can tell whether the unit is lost or merely broken.

Microsoft's Dynamics 365 documentation takes a similar view from the multi-system side. Its Inventory Visibility configuration describes availability as a calculated measure built by adding and subtracting physical measures from each data source, and lists measures such as quality inspection alongside reserved and available quantities ([Inventory Visibility data sources](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration)). Its soft reservation feature goes a step further: every order-taking system checks a shared available-for-reservation figure and is refused when the quantity is insufficient, which is how a single source of truth prevents double-booking ([Inventory Visibility reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations)). The practical lesson is that each channel's sellable figure should be derived from classified stock, not copied from a raw total.

## Who owns the problem and why it becomes urgent

The warehouse or operations manager usually owns the physical process, and the financial director owns the write-off and the supplier claim. Neither owns the interface between them, which is where the damage disappears. The problem tends to surface when a business opens a new sales channel. A single shopfront with a patient customer base can absorb a few cancelled orders. A marketplace with performance metrics, or a trade customer who orders by the pallet, cannot.

The wider pattern, where channels keep selling stock the building no longer has, is covered in [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/). This article is narrower: the stock is there, but it is not fit to sell.

## Economic consequence

The costs are modest per incident and add up quietly:

- **Cancelled and refunded orders**, with the payment and customer-service handling that follows.
- **Marketplace penalties or lost ranking** where a channel measures cancellation rates.
- **Re-picking labour** when a picker finds a damaged unit and must hunt for a good one that may not exist.
- **Delayed supplier and insurance claims**, because the damaged units were never recorded as a distinct quantity with a date and cause.
- **Distorted buying**: planners reorder against a figure that includes unsellable units, or hold manual buffers that tie up cash.

The manual alternative, with staff phoning the warehouse to confirm that a quantity is real before accepting an order, has its own cost, described in [the cost of checking stock capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/).

## Root cause, not symptom

Cancelled orders are the symptom. The usual root causes are structural:

1. **No status for damaged stock.** The system only knows quantity per location, so there is nowhere to record "present but unsellable".
2. **A status exists but is not respected downstream.** The warehouse system marks units as damaged, but the integration to the storefront sends the total on hand rather than the available quantity.
3. **Damage is found offline.** The inspection happens on paper or in a message thread, and a capture step depends on someone remembering to key it in.
4. **Segregation is physical only.** Damaged goods are moved to a corner, but their system location is unchanged.
5. **Nobody owns the decision afterwards.** Without a disposition step (return to supplier, repair, discount, scrap), "damaged" becomes a permanent resting place.

## Practical intervention

A workable fix has five parts, and none needs a new platform if the existing one supports stock statuses.

### 1. Define the stock states in business language

Agree a short list: available, reserved for orders, damaged, awaiting inspection, and any others your business actually uses. Write down which of them each channel may sell. Keep it short; every extra state is another thing to keep in step.

### 2. Make the damaged status a system event, not a note

Give the picker or receiver a way to flag damage at the point of discovery, ideally on a handheld or phone, with a reason and a photograph if useful. The flag should move the unit between states, and should not change the physical total.

### 3. Publish availability from the classified figure

Check how each sales channel obtains its quantity. If any channel reads the raw on-hand total, change the feed so that it reads the sellable quantity. This is an integration question as much as an inventory one; if channels are connected one-to-one, the change must be repeated in each connection, a risk discussed in [why stock corrections take hours to reach the online shop](/discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/).

### 4. Add a disposition workflow

Every damaged unit should have an owner and a next step: supplier claim, repair, markdown, or scrap. A weekly review of the damaged quantity, by age, stops the status becoming a graveyard.

### 5. Make the damaged quantity visible to finance

The financial director should be able to see how many units and how much value sit in the damaged state, so write-downs and claims are timed correctly.

## Diagnostic questions

- When a unit is found cracked on the shelf, what is the first system action, and who takes it?
- Does each sales channel read the sellable quantity, or the total on hand?
- How long between discovering damage and the storefront figure falling?
- Can you list today every damaged unit, how long it has been there and what happens to it?
- Does a cycle count tell you the difference between a missing unit and a damaged one?

## What good looks like

In a healthy operation, a picker flags damage once. Within minutes the unit leaves the sellable quantity on every channel, the physical count is unchanged, and the damaged quantity appears on a short weekly list with an owner. Customers see accurate availability; finance sees the exposure; the supplier claim is raised with evidence while it is still fresh.

## Where integration and architecture work fits

Where the stock status exists but is not respected by every channel, the work is usually an integration review followed by targeted changes, which sits within [systems implementation and integration](/services/systems-implementation-integration/). Where it is unclear which systems hold which stock figure, a [digital systems audit](/services/digital-systems-audit/) maps the flow before anything is changed. The related question of why different systems report different numbers is covered in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## Method note

The worked example is illustrative and not drawn from a named business. Platform behaviour differs between products and versions, so check the documentation for the system you actually run. Product states described here come from Shopify and Microsoft documentation; your own software may use different names for the same ideas.
