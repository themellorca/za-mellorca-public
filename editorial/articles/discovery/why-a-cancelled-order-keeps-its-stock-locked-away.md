---
hub: discovery
record_id: DISC-118
slug: why-a-cancelled-order-keeps-its-stock-locked-away
title: Why a cancelled order keeps its stock locked away
description: A customer cancels, but the units stay committed to an order that no longer exists. Where the release step gets lost between channels and how to close the loop.
lead: A customer cancels, but the units stay committed to an order that no longer exists. Where the release step gets lost between channels and how to close the loop.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Operations Manager / Ecommerce Manager
budget_owner: COO
sources:
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
  - https://help.shopify.com/en/manual/fulfillment/managing-orders/canceling-orders | https://help.shopify.com/en/manual/fulfillment/managing-orders/canceling-orders
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
related:
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
  - Why safety stock rules differ between sales channels | /discovery/why-safety-stock-rules-differ-between-sales-channels/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
summary: A customer cancels, but the units stay committed to an order that no longer exists. Where the release step gets lost between channels and how to close the loop.
layout: plain
---
A pet-food distributor runs a trade desk, a web shop and a couple of marketplace listings from one warehouse. On a Monday morning the customer-service lead notices that a popular 20 kg product shows zero available, yet the warehouse has twelve bags on the shelf. Searching the order list, she finds three orders for that product that were cancelled last week. The customers were refunded, the orders were marked cancelled, and the stock is still sitting in a reserved state against them. Meanwhile the website has been telling shoppers the item is sold out for six days. (This is an illustrative example, not a named business.)

## The problem in plain language

When a customer places an order, the business sets stock aside so that it cannot be sold twice. That is a reservation or commitment. When the order is cancelled, the reservation has to be undone. In many businesses, the cancellation and the release are two separate events handled by different systems or different people, and the second one is easy to lose. The result is stock that physically exists but is treated as unavailable.

The symptom is the mirror image of overselling. Instead of selling stock you do not have, you decline to sell stock you do. It is harder to notice, because nobody complains about an order that was never taken. It tends to appear as an unexplained gap between the physical count and the sellable quantity, a pile of items nobody can account for, and a habit of staff "fixing" availability by hand.

## What the buyer is actually trying to solve

People looking for help phrase this as "cancelled orders still reserving stock", "inventory committed after cancellation", "stock stuck as allocated", "release reserved inventory automatically" or "sync cancelled orders across channels". What they want is simple: when an order stops being real, the stock should become sellable again immediately, in every system that counts it, and nobody should have to remember to do it.

## Evidence and system mechanism

Inventory platforms handle the reservation lifecycle explicitly, and the documentation shows how much of that lifecycle depends on integration rather than on a single click.

Microsoft's guidance on [Inventory Visibility reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations) describes soft reservations created through API calls from each order channel. A soft reservation reduces the quantity available for reservation, and later it is offset when the order is processed into a hard reservation or physical consumption. For the case that concerns us here, the page states that if an original order line is cancelled or deleted, the matching soft reservation must be reverted, either by posting a reservation event with a negative quantity and exactly the same details, or by posting an unreserve request with the same quantity and reservation ID. The page also lists a way to check for failed reservation offsets, and notes that a failure can come from an incorrect reservation ID or a broken connection. In other words, the release is a transaction that can fail, and somebody has to watch for it.

Shopify's help documentation on [cancelling orders](https://help.shopify.com/en/manual/fulfillment/managing-orders/canceling-orders) shows a different design. When an unfulfilled order is cancelled, the "restock inventory" option is selected by default and returns the items to inventory, but the person cancelling can clear it, individually or in bulk, and the order timeline records what was restocked and refunded. The developer documentation on [inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps) explains that committed units are set aside for unfulfilled orders and cannot be sold, and that apps cannot adjust the committed quantity through the API, because the platform manages that state. That has an important consequence: if your cancellation happens in another system, such as your ERP or an order-management tool, the commitment in the shop is released only if the cancellation is passed through the platform's own order flow.

These pages do not claim that every business has stuck reservations. They show where the mechanism can break: a release that is optional, a release that is a separate message, and a release that lives in a different system from the cancellation.

## Who owns the problem and why now

The operations manager or ecommerce manager usually owns the problem, with customer service and the warehouse as the people who notice it. The budget owner is typically the COO, because the cost is lost sales and wasted effort rather than a visible line item.

The trigger is commonly a rise in stock variance. A stock count shows more units than the system will sell, someone investigates, and cancelled orders turn out to be part of the explanation. Other triggers are a promotion that produces many cancellations, the addition of a second channel with its own cancellation route, or a move to a new order-management tool that handles cancellation differently from the old one.

## Economic consequence

- **Lost sales**: sellable stock is shown as unavailable, particularly for fast-moving or seasonal lines.
- **Unnecessary purchasing**: planners see low availability and reorder stock that is already in the building.
- **Manual correction effort**: staff reconcile reserved quantities against open orders, which is the type of work described in [the labour cost of manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/).
- **Misleading variance**: the gap between counted and system stock appears to be loss or theft, when part of it is administration.
- **Customer frustration**: shoppers see "out of stock" and buy elsewhere without ever contacting you.

## Root cause

Stuck reservations are a symptom. The common causes are:

1. **Cancellation and release are separate steps**: the order status changes in one place, while the reservation is held in another.
2. **Channel-specific cancellation routes**: a cancellation made through a marketplace, a call-centre agent or an ERP screen does not take the same path as one made in the web shop.
3. **Optional restock**: whoever cancels the order must tick or untick a restock choice, and the default is not always right for the situation.
4. **Partial fulfilment**: part of the order has been picked or shipped, so the release applies to some lines only.
5. **Failed or delayed messages**: the release is sent, rejected and never retried, as explained in [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).
6. **Expiry rules that do not exist**: a reservation placed for a basket or a quote never lapses.

## Practical intervention

1. Draw the cancellation routes. List every way an order can be cancelled, in every channel, and note what happens to the reservation in each.
2. Decide which system owns the reservation, and make every cancellation route update that system, not a copy of it.
3. Make the release automatic and explicit. A cancellation should either release the stock or require a stated reason why it should not be released, such as damaged goods or goods already shipped.
4. Handle partial cases deliberately: lines picked but not shipped, goods returned, and orders edited down rather than cancelled.
5. Add time limits to reservations that are not tied to an invoiced order, such as abandoned baskets and unconfirmed quotes.
6. Build a daily check that lists reservations attached to cancelled, closed or non-existent orders, with the age of each, and assign a named person to clear it.
7. Measure the result: the number of orphaned reservations found per week should fall to nearly zero and stay there.

The daily check is the cheapest and most useful first step. Even before any integration work, a query that compares reserved quantities with open order lines will show how large the problem is.

## Diagnostic questions

- How many ways can an order be cancelled in our business, and does each one release the stock?
- Can we list, right now, reserved stock attached to orders that are cancelled?
- Who decides whether cancelled stock goes back on sale, and how is that recorded?
- If a release message failed last night, who would find out and when?
- Do partially picked orders release the unpicked quantity correctly?
- How often do staff adjust availability by hand to compensate?

## What good looks like

A cancellation, from any channel, triggers a release in the system that owns the reservation within seconds or minutes, and that release reaches every channel that displays availability. Exceptions, such as damaged or already-shipped goods, are recorded with a reason. A short exception list is reviewed each morning and is usually empty. Stock variances reflect real physical differences, so a count that disagrees with the system prompts investigation of the warehouse, not of the order list. The wider question of how channels learn about stock changes is discussed in [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/), which covers the opposite failure.

## Where Mellorca fits

Mellorca can map the cancellation and reservation flow across your channels, identify where a release can be lost, and design the integration and monitoring that closes the loop. Typical work includes defining ownership of reservations, building the release and retry logic between systems, and setting up the daily exception report. A [digital systems audit](/services/digital-systems-audit/) is a practical starting point when it is unclear where the leaks are.

## Method note

The documentation cited describes the way two platforms treat reservations and cancellations; your own systems may behave differently, and screens and options change between versions. The worked example is illustrative. Estimate the effect in your business from your own count of cancelled orders, their average value and how long reservations stay in place.
