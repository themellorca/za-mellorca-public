---
hub: discovery
record_id: DISC-111
slug: why-goods-received-do-not-reach-customer-availability-promptly
title: Why goods received do not reach customer availability promptly
description: Stock arrives in the morning but customers still see it as unavailable the next day. How to shorten the path from dock to sellable figure.
lead: Stock arrives in the morning but customers still see it as unavailable the next day. How to shorten the path from dock to sellable figure.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Supply chain or operations manager, with procurement and finance involved in receipt posting
budget_owner: Operations director or financial director
sources:
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
  - Purchase orders now create transfers to move inventory - Shopify Changelog | https://changelog.shopify.com/posts/purchase-orders-now-create-transfers-to-move-inventory
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
related:
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
  - Why stock in transit between locations goes missing in reconciliation | /discovery/why-stock-in-transit-between-locations-goes-missing-in-reconciliation/
  - Reserved stock is treated as available stock | /discovery/why-reserved-stock-keeps-showing-as-available-to-sell/
summary: Stock arrives in the morning but customers still see it as unavailable the next day. How to shorten the path from dock to sellable figure.
layout: plain
---
A Pretoria pet-supplies importer (an illustrative example) receives a container of its best-selling dog food at 08:30 on Tuesday. The dock team counts the pallets, the stock controller books the goods receipt in the ERP by lunchtime, and a nightly job passes quantities to the web shop. For a day and a half, customers see "out of stock" on a product that is physically on the floor, while a competitor with the same brand takes the orders. A week later, a promotion is planned around that container, and the marketing team asks the warehouse whether stock is "really there yet".

The goods have arrived, but the business has not yet found out.

## The problem in plain language

A purchase order is a promise from a supplier. A goods receipt is evidence that the promise has been kept. Between the two sits a chain of events: the truck arrives, the delivery is checked against the order, quantities are counted, quality is inspected, the receipt is posted, and stock is put away. Customer-facing availability should change at the right point in that chain. In many businesses it changes late, because posting is batched, because a person must authorise it, or because the channel only refreshes overnight.

The symptoms are products shown as unavailable while stock sits on the dock, back-orders that could have been filled, and customer-service staff telling people "it arrived but isn't showing yet".

## What the buyer is actually trying to solve

The searches are blunt: "stock received but not showing online", "purchase order receipt not updating inventory", "delay between receiving stock and selling it". The buyer wants new stock to be sellable as soon as it is genuinely sellable, and no sooner.

## Evidence and system mechanism

Documentation from major platforms shows that receipt is not one event but a series of states. Shopify's developer documentation describes an incoming state for stock on its way to a location and not yet physically there, which becomes sellable only after it is received and moved to available. It is clear that incoming units do not count towards sellable availability ([Shopify inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)). A recent Shopify changelog entry adds that a purchase order now creates a transfer when it is ready to receive, that shipments can be received in the admin or at the point of sale, that one transfer can cover several shipments, and that each transfer stays linked to its purchase order so ordered, received and outstanding quantities are visible ([Shopify changelog](https://changelog.shopify.com/posts/purchase-orders-now-create-transfers-to-move-inventory)). The design intent is that receipt happens where the goods arrive, and partial deliveries are handled naturally.

Microsoft's Dynamics 365 documentation shows how the same movement is handled across systems. In its Inventory Visibility service, quantities from different systems are combined through calculated measures, and expected receipts from some sources are added to the available-for-reservation figure while outbound quantities are subtracted ([Inventory Visibility reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations)). The same documentation describes a synchronisation job that, for soft reservations, runs about once a minute. The point is not that every business needs that product, but that vendors treat the interval between a physical event and a visible change as a design parameter, something to be chosen, not left to chance.

## Who owns it and why it becomes urgent

Procurement owns the purchase order, the warehouse owns the physical receipt, finance owns posting and matching, and ecommerce or sales owns what customers see. The supply chain or operations manager typically carries the complaint. A new sales channel makes the problem sharper, because marketplaces and online shoppers move on quickly when an item shows as unavailable, and because the cost of a stockout is visible in conversion.

It also compounds the issue in [batch integrations that leave systems hours out of date](/discovery/batch-integrations-leave-systems-hours-out-of-date/), since a nightly schedule is often what turns a quick dock process into a slow customer experience.

## Economic consequence

- **Lost sales on stock the business already owns,** because the channel shows unavailable.
- **Working capital tied up unseen,** as received goods wait for a posting step.
- **Duplicate ordering,** when planners cannot see that stock has arrived and reorder.
- **Customer-service effort,** answering "has it arrived?" by phone.
- **Supplier invoice delays,** where payment waits on a receipt that has not been booked.

## Root cause

The delay is the symptom. The causes often include:

1. **Receipt is posted somewhere other than the dock,** by an office user, after paperwork is passed along.
2. **Posting waits for quality inspection or invoice matching** that is not needed to sell the goods.
3. **The channel feed is a batch,** on a schedule unrelated to receiving activity.
4. **Put-away is not recorded,** so stock stays in a receiving state that the channel ignores.
5. **Partial deliveries are all-or-nothing.** The system waits for the full order before releasing any quantity.
6. **No one monitors the gap** between arrival time and sellable time.

## Practical intervention

### Map the receiving journey and time it

Take the last ten purchase orders and record arrival, receipt posting, put-away and the moment the channel updated. The longest interval tells you where to work.

### Receive at the dock, on a device

Move the receiving transaction to the person who handles the goods, using a handheld or tablet. Allow partial receipts so that what has arrived becomes available without waiting for the rest.

### Separate selling readiness from accounting readiness

Quality inspection or invoice matching may be essential, but only for some goods. Define which products can be sold on receipt and which need a hold status, and make the hold an explicit state rather than a delay.

### Replace the nightly batch for availability

Availability is a good candidate for event-driven updates: when a receipt posts, the sellable quantity is pushed to channels. Other data can stay batched.

### Show inbound stock honestly

Where product has been ordered and an arrival date is known, some businesses show "expected on" dates rather than a flat out-of-stock. That is a commercial choice; it needs reliable receipt data behind it.

### Monitor the delay

Report the time between physical arrival and sellable status each week. If it grows, someone should know. Related monitoring gaps are described in [why integration monitoring misses business completion](/discovery/why-integration-monitoring-misses-business-completion/).

## Diagnostic questions

- How long, in hours, from truck arrival to the customer seeing stock?
- Who posts the goods receipt, and where are they when the goods arrive?
- Does partial delivery release partial stock?
- Which steps between receipt and availability are genuinely needed for each product class?
- How often does a channel update, and is it event-driven or scheduled?

## What good looks like

Receiving happens at the dock, and each delivery, including a partial one, changes the sellable quantity within minutes. Holds for inspection are explicit. Procurement, warehouse, finance and ecommerce all see the same inbound and received quantities against the order, and a weekly figure shows how quickly goods become sellable. Customers rarely meet an out-of-stock message for something that is on the shelf.

## Where Mellorca fits

Connecting the receiving transaction to channel availability is integration design, handled under [systems implementation and integration](/services/systems-implementation-integration/). Where the aim is to remove manual hand-offs such as rekeying a delivery note into the ERP, [business automation](/services/business-automation/) addresses the workflow. The effect of late corrections on online stock is explored further in [why stock corrections take hours to reach the online shop](/discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/).

## Method note

The importer is an illustrative example. Documentation cited describes the behaviour of particular products at the time of writing, and sync intervals are configurable. Whether goods should be sellable before inspection or invoice matching depends on the product and on your controls, and should be decided with finance.
