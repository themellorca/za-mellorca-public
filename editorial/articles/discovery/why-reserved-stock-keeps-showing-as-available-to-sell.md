---
hub: discovery
record_id: DISC-104
slug: why-reserved-stock-keeps-showing-as-available-to-sell
title: Reserved stock is treated as available stock
description: When a quote, an online basket or a held order reserves stock in one place but not another, the same unit gets promised twice. How to separate on-hand, reserved and available quantities.
lead: When a quote, an online basket or a held order reserves stock in one place but not another, the same unit gets promised twice. How to separate on-hand, reserved and available quantities.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Inventory or warehouse manager, with the e-commerce and sales leads owning the channels that reserve stock
budget_owner: Operations director or financial director
sources:
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
  - Inventory Visibility Add-in overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility
  - Inventory Visibility inventory summary - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-inventory-summary
related:
  - Online channels sell stock that the warehouse no longer has | /discovery/online-channels-selling-stock-the-warehouse-no-longer-has/
  - How bundles and kits distort component stock counts | /discovery/how-bundles-and-kits-distort-component-stock-counts/
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
summary: When a quote, an online basket or a held order reserves stock in one place but not another, the same unit gets promised twice. How to separate on-hand, reserved and available quantities.
layout: plain
---
A shop sells a gas braai that the warehouse shows as eight on hand. A sales rep has quoted three of them to a lodge and the quote is awaiting approval. A trade customer has a confirmed order for four, picked and waiting for the courier. The online store, which reads the on-hand number, tells every visitor that eight are available. On Saturday, five consumers order one each. By Monday, the business has promised seventeen braais against eight on the shelf, and somebody has to phone customers.

The stock count was right. The warehouse counted correctly. The failure was that stock which had been set aside for somebody was still being shown to everybody else. This article looks at that condition: reserved stock being treated as available stock.

## The problem in plain language

A business holds several kinds of quantity for the same product. There is what is physically on the shelf. There is what has been promised to customers but not yet shipped. There is what is on its way in from suppliers. And there is what a new customer can actually be promised today, which is on-hand plus incoming minus reserved. Many small and mid-sized businesses track only the first number, and use it for every decision. When the product range is small and one person knows which items are spoken for, this works. When the range grows, it stops working, and nobody notices until a customer is let down.

## What the buyer is actually trying to solve

The person searching this problem is typically an operations or e-commerce manager who has just handled an oversell and wants it to stop. They are not asking for better counting. They want one defensible answer to the question "can we promise this to a new customer?" and they want every channel, from quote to web shop to counter sale, to use that same answer.

## Evidence and system mechanism

### Soft reservations exist precisely to prevent double-booking

Microsoft's documentation on [Inventory Visibility reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations) describes a use case that matches the braai example. It says soft reservations help an organisation achieve a single source of truth for available inventory, particularly for businesses with at least two systems taking outbound orders, and for those that want to prevent double-booking of the last piece of stock. Each order channel posts a reservation, the service validates availability, and if the reservation succeeds it adds to the soft-reserved quantity and deducts from the available-for-reservation quantity. The principle matters more than the product: a reservation is a separate, immediate event that reduces what others can sell, and it happens before the physical stock moves.

### Physical stock and available stock are different measures

The same documentation points out that when an order is soft reserved, the physical on-hand quantity in the main system stays the same, because the order has not yet been synced there. The reservation changes the available quantity, not the on-hand quantity. That is the distinction many businesses lack. Their systems hold one number, and a reservation has nowhere to go except into a note or someone's memory.

### Availability needs a definition that everyone shares

The [overview of Inventory Visibility](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility) describes a service that brings on-hand data together from multiple systems and channels so that quantities can be queried in near real time. The [inventory summary](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-inventory-summary) page shows that availability is built from configurable measures rather than from a single field. The lesson for a smaller business is that "available" is a calculation, and that calculation has to be agreed once, written down and used by every channel.

### Warning signs

- Customer service regularly apologises for orders that cannot be fulfilled from stock that "showed available".
- Sales staff keep a private list of items they have "put aside" for customers.
- The web shop and the warehouse report different quantities for the same product at the same hour.
- Pickers find that an item an order needs has already been allocated to another order.

## Problem owner and why-now trigger

The inventory or warehouse manager owns the stock record. The e-commerce manager and the sales lead own the channels that promise stock. The budget owner is usually the operations director or financial director, because the costs appear as refunds, expedited freight and lost customers rather than as an inventory line.

The trigger is commonly rapid growth in the number of SKUs. With forty products, someone can remember which are spoken for. With four hundred, they cannot. A second sales channel, a marketplace listing, a new warehouse or a seasonal peak will expose the same weakness. Load-shedding adds its own pressure, since a picking day cut short by a power outage leaves allocations unfulfilled and out of step with what the shelf shows.

## Economic consequence

An oversold item costs more than a missed sale. The customer has to be contacted, offered a delay or a substitute, or refunded, and each of those steps takes staff time. If a replacement has to be sourced at short notice, freight is paid at an urgent rate. A business that oversells fifteen orders a month and spends forty-five minutes resolving each one loses over eleven hours of skilled time a month before counting the refunds, and some customers do not come back. Marketplaces may also penalise sellers who cancel orders, which can reduce visibility for every product in the shop.

The same mechanism sits behind [checking stock capacity by hand before promising delivery](/impact/checking-stock-capacity-by-hand-before-promising-cost/). When the system cannot be trusted to say what is free, people check by walking to the shelf, and that check is itself slow and unreliable.

## Root cause

- **One quantity field serves several purposes.** On-hand, reserved and available are blended into one number, or the reserved quantity lives outside the stock system entirely.
- **Reservations are created late.** A quote or basket does not hold stock; the order does, and only once someone processes it.
- **Each channel reads stock differently.** The web shop reads on-hand, the sales system reads allocated, and the warehouse system reads something else, which is the situation described in [inventory numbers that disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).
- **Synchronisation is slow.** Corrections made in the warehouse reach the shop hours later, as in [stock corrections that take hours to reach the online shop](/discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/).
- **No rule for releasing reservations.** Quotes that lapse or baskets that are abandoned keep stock tied up, or are never counted at all.

## Practical intervention

1. **Write down the availability formula.** For example: available to promise equals on-hand, plus confirmed incoming within the promise window, minus reserved for confirmed orders, minus a safety buffer for fast-moving lines. One definition, one owner.
2. **Make reservation a distinct step.** Decide what reserves stock: a confirmed order, an approved quote, a paid basket. Each reservation reduces availability immediately and records who made it and when it expires.
3. **Give every reservation an expiry.** A quote hold might last forty-eight hours, a basket fifteen minutes. Expired reservations release automatically so stock is not frozen by neglect.
4. **Point every channel at the same number.** The web shop, the sales quoting tool and the counter should all read available-to-promise, not on-hand.
5. **Add a buffer for the top sellers.** For the fifty fastest lines, publish slightly less than the calculated figure so synchronisation delays do not cause oversells.
6. **Review exceptions weekly.** List every order that could not be filled from stock shown as available, and trace which rule failed.

### Trade-offs

Reserving stock at quote stage reduces overselling but can hide stock from real buyers while a quote sits unanswered, so expiry rules matter. A safety buffer reduces disappointment but also reduces sales if set too high. Real-time reservation across channels needs integration work and an owner; smaller businesses may begin with a daily recalculation and only move to near-real-time for the lines that oversell most.

### An illustrative example

Illustrative: a Cape Town homeware distributor with 600 SKUs sold through its own web shop, two marketplaces and a field sales team. The shop and the marketplaces read on-hand stock, while reps wrote their commitments on a shared sheet. After a month in which twenty-two orders could not be filled, the operations manager defined available-to-promise, added reservations for approved quotes with a two-day expiry, and set a buffer of two units on the thirty fastest lines. Oversold orders fell to a handful a month and the shared sheet was retired.

## Diagnostic questions

- If a rep approves a quote for ten units, does any system reduce what the web shop can sell?
- What number does each channel read: on-hand, allocated or available?
- How many orders last month were cancelled or delayed because stock was not there?
- Do reservations expire, and who is told when they do?

## What good looks like

The business has one written definition of available stock, and every channel reads the same figure. Reservations are created at a defined moment, reduce availability at once and release on a rule. Salespeople and shoppers see what can genuinely be delivered, and a warehouse count that matches the shelf is no longer the only thing protecting customers from disappointment.

## Where Mellorca fits

Mellorca's work starts by mapping how a unit of stock moves from receipt to quote, reservation, pick and dispatch, and where each system's quantity diverges from the others. It then helps define the availability rule and the reservation points so that the system, not memory, protects the promise. Where fulfilment status is also invisible to sales, see [salespeople who cannot see whether an order has been fulfilled](/discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/).

## Method note

The sources describe how a major inventory service models soft reservations and available quantities across several order-taking systems. They do not measure how often small businesses oversell. The quantities, the oversell volumes and the example are illustrative rather than a client case.
