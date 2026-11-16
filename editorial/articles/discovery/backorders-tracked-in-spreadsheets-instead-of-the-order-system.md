---
hub: discovery
record_id: DISC-110
slug: backorders-tracked-in-spreadsheets-instead-of-the-order-system
title: Backorders tracked in spreadsheets instead of the order system
description: When short-shipped orders move to a shared list, incoming stock is allocated by memory and promise dates drift. How to put backorder allocation and customer promises back into the order system.
lead: When short-shipped orders move to a shared list, incoming stock is allocated by memory and promise dates drift. How to put backorder allocation and customer promises back into the order system.
category: Inventory & Order Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Operations or supply chain manager
budget_owner: COO or financial director
sources:
  - Calculate order promising dates - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-calculate-order-promising-dates
  - How to reserve items - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-to-reserve-items
related:
  - Why pickers are sent to fetch orders that have already changed | /discovery/why-pickers-are-sent-to-fetch-orders-that-have-already-changed/
  - Drop-ship stock is counted as if it sits in your own warehouse | /discovery/how-to-keep-drop-ship-stock-out-of-your-own-inventory-counts/
  - How bundles and kits distort component stock counts | /discovery/how-bundles-and-kits-distort-component-stock-counts/
summary: When short-shipped orders move to a shared list, incoming stock is allocated by memory and promise dates drift. How to put backorder allocation and customer promises back into the order system.
layout: plain
---
Illustrative example: a Durban distributor of plumbing and irrigation parts runs its orders through an ERP, but anything the warehouse cannot ship in full goes onto a shared spreadsheet called "BO list". Each row is a customer, a product code, a quantity short and a note such as "Promised Friday, check with Thabo". When a container from the supplier lands, the buyer prints the spreadsheet, a sales administrator works down it by hand and the warehouse picks whatever she tells them. Three customers waiting for the same pump receive it in the order their rows happen to sit, not in the order they placed their orders. One large account, which had been waiting longest, finds out from a competitor that stock arrived last week.

## The problem in plain language

A backorder is the part of a customer's order that could not be supplied when the order was taken or picked. The business has accepted the sale, the customer is waiting, and the outstanding quantity has to be matched to stock that has not yet arrived. When backorders live in a spreadsheet rather than in the order system, the business has two versions of the truth: the ERP shows open order lines, and the spreadsheet shows who was promised what and when. Neither is complete. The spreadsheet does not update when a purchase order is delayed, and the ERP does not know about the promises made by phone.

The pattern starts for sensible reasons. A supplier is late, the system's availability view is hard to read, and someone builds a list to keep track. Months later the list has become the real control point for every shortage, and only one or two people understand it.

## What the buyer is actually trying to solve

The operations or supply chain manager wants three things. First, to know at any moment which customers are waiting for which items, how long they have waited and what has been promised. Second, to allocate incoming stock fairly and deliberately, by order date, customer priority or contractual commitment, instead of by whoever shouts loudest. Third, to give sales and customer service a date they can trust without phoning the warehouse. They are usually not looking for a new system first; they want to know whether the system they already pay for can do this.

## Evidence and system mechanism

### Order systems can calculate realistic promise dates

Mid-market ERPs include functions for exactly this job. Microsoft's guidance on [calculating order promising dates in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-calculate-order-promising-dates) describes two methods. Available to promise checks unreserved quantities in inventory and on planned receipts such as purchases, transfers and production, and calculates when the customer's order can be delivered. Capable to promise handles the quantity that is not in stock or on scheduled orders: it works out the earliest date the item could be available if it is purchased, produced or transferred, and when the order processor accepts that date, a planning line and a reservation are created so the order is covered. If an item is not available on the shipment date, the system displays a stock-out warning rather than leaving the promise to memory.

### Incoming supply can be reserved against specific orders

The same platform's documentation on [reserving items](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-to-reserve-items) explains that reservations can be made against inventory or inbound supply on open document lines, including purchase orders. A reservation worksheet can pull in demand and allocate incoming goods in bulk using a chosen policy: only where there are no conflicts, equally across demands, or by a priority set on the customer card so higher-priority customers are supplied first when stock is short. Documents then show a status indicating whether an order can be shipped, which reduces accidental partial shipments.

The point is not that every business should use this product. It is that allocating scarce incoming stock, and recording what was promised, is a standard order-management function. When it happens in a spreadsheet, the business is rebuilding by hand something its order system is designed to hold.

## Why this becomes urgent

The usual trigger is an ERP or warehouse system replacement. Migration teams move open sales orders and purchase orders, but the spreadsheet of promises, priorities and notes is not part of the data model and is easily left behind. If backorder handling is not designed into the new system, the spreadsheet simply reappears beside it. Supply disruption is the other trigger: when lead times stretch, the list grows from a dozen rows to several hundred and manual allocation stops working.

## Economic consequence

The costs fall in several places. Staff spend hours each week reconciling the list against open orders and goods received. Stock that arrives sits in receiving or is sold to a walk-in customer while an older order waits, which is the problem described in [checking stock and capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/). Customers chase, credit notes and cancellations rise, and important accounts are treated no better than occasional buyers. Finance cannot see the value of unfulfilled demand, so purchasing decisions are made on incomplete information. Often the customer knows the order is late before the business does, as covered in [when customers know their order is late before your team does](/patterns/when-customers-know-their-order-is-late-before-your-team-does/).

## Root cause

- **Backorders were never designed as a process.** The system records open lines, but nobody defined who allocates incoming stock and by what rule.
- **Promise dates are made outside the system.** Sales give dates by phone or email based on what the buyer said, not on supply data.
- **Reservations are switched off or ignored.** Teams find reservation features confusing, so stock is treated as a single pool, a problem related to [reserved stock showing as available to sell](/discovery/why-reserved-stock-keeps-showing-as-available-to-sell/).
- **Purchase order dates are not maintained.** When supplier dates slip, nobody updates them, so the system's availability calculations become untrustworthy and people fall back on the list.
- **One person owns the knowledge.** The spreadsheet's logic lives with its creator.

## What good looks like

Every backordered quantity is an open line in the order system, linked where possible to the incoming purchase or transfer that will fill it. The allocation rule is written down and configured: order date, customer priority, or a defined exception for contractual commitments. When a delivery is received, the system proposes allocations and the warehouse picks from that proposal. Purchase order dates are updated when suppliers confirm changes, and affected customers are flagged automatically. Sales and customer service see each customer's expected date in the same screen they use for orders. A short weekly review covers ageing backorders, cancellations and any manual overrides.

## Diagnostic questions

- Where would you look right now to see every customer waiting for a specific product?
- When stock arrives, who decides which orders get it, and is that rule written down?
- How many promise dates given last month came from the system, and how many from someone's judgement?
- Are supplier delays reflected in purchase order dates within a day of being known?
- If the person who maintains the backorder list were away for two weeks, who would allocate stock?

## Practical next actions

1. Compare the backorder spreadsheet with open order lines in your system and list every column the spreadsheet holds that the system does not.
2. Agree an allocation rule for scarce stock with sales and operations leadership, including how exceptions are approved.
3. Test your order system's reservation and order-promising functions on a small product group before changing the whole process.
4. Make maintaining supplier dates on purchase orders a named responsibility with a daily check.
5. Retire the spreadsheet for that product group once allocations run from the system, then extend group by group.
6. Track backorder age, promise-date accuracy and cancellations monthly to confirm the change is working.

## Where Mellorca fits

Mellorca helps distributors and manufacturers bring backorder handling into their order and warehouse systems: configuring allocation and reservation rules, connecting purchase order updates to customer commitments and planning the cut-over from spreadsheets. This work sits within [systems implementation and integration](/services/systems-implementation-integration/), and is especially useful when an ERP or warehouse system is being replaced.

## Method note

The opening example is illustrative and not a client case. Microsoft Business Central documentation is used to show how a typical mid-market order system handles order promising and reservations; other ERPs offer comparable functions under different names, and your configuration options will vary.
