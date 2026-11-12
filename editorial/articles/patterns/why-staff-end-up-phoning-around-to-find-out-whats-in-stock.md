---
hub: patterns
record_id: PAT-406
slug: why-staff-end-up-phoning-around-to-find-out-whats-in-stock
title: Why Staff Have to Chase Stock Availability
description: When availability lives in people and not in a shared view, every enquiry becomes a phone call. Here is where the lookup habit comes from and how to remove it.
lead: When availability lives in people and not in a shared view, every enquiry becomes a phone call. Here is where the lookup habit comes from and how to remove it.
category: Operations & Inventory
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Operations & Inventory
pattern_family: Operations & Inventory
observable_condition: Salespeople phone the warehouse or other branches to confirm whether an item is available before answering a customer.
primary_identification: Availability held in people rather than a shared view: on-hand, reserved, in-transit and incoming stock are split across places, so combining them requires conversation.
commercial_value_dimensions: Staff time, order conversion, promise accuracy, warehouse productivity and overselling risk
sources:
  - Inventory Visibility Add-in overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
  - Inventory Visibility on-hand change schedules and ATP - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-available-to-promise
related:
  - Why Your Business Has Data but No Single View of Operations | /patterns/why-a-business-with-plenty-of-data-still-has-no-single-view-of-operations/
  - When Files Are Organized by People Instead of Processes | /patterns/why-folders-named-after-people-hide-the-work-they-hold/
  - Why Service Teams Spend Their Day Chasing Internal Answers | /patterns/why-service-teams-spend-their-day-chasing-internal-answers/
summary: When availability lives in people and not in a shared view, every enquiry becomes a phone call. Here is where the lookup habit comes from and how to remove it.
layout: plain
---
## Observable condition

A customer asks whether you have twelve of an item. The salesperson does not answer. She picks up the phone, calls the warehouse, waits for someone to walk to the shelf, and calls back. If the warehouse is busy, she sends a message to the storeman. If he is off, she asks the branch manager, who asks someone else. The customer has been waiting twenty minutes for a yes or no that the business should already know.

An illustrative example: a Polokwane building-supplies group with a head-office warehouse and three branches. Each branch has its own stock list. The head-office list is updated when goods are received and when invoices are posted, which happens in batches. A branch needing paint for a contractor's order phones the other branches one by one. Staff spend part of each day not selling, packing or delivering, but finding out what the business holds.

## Realisation

The realisation is that stock availability is a shared fact, but the business treats it as private knowledge. Somewhere, a person or a spreadsheet knows the answer, and everyone else must ask. The question is asked many times a day, by many people, about the same items, and each time the answer is looked up from scratch.

The reason is rarely that nobody counted. It is that the figure staff see is not the figure customers need. On-hand stock is not the same as available stock: some of it is reserved for other orders, some is damaged or in transit, and some has been received but not yet booked in. Microsoft's description of the [Inventory Visibility service](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility) lists the statuses it tracks, including on-hand, ordered, purchased, in-transit, returned and quarantined, and describes querying on-hand availability and obtaining immediate responses. The point for a small business is that availability has several components, and unless they are brought together somewhere, someone has to assemble them by phone.

**Realisation prompt:** for your five fastest-moving items, how many people could give a customer a reliable availability answer in under one minute, without calling anyone?

## Identification

This is a pattern of availability that lives in people rather than in a shared view. The visible symptom is staff interrupting each other, and the warehouse, to check stock. The common assumption is that the team should communicate better. The structural cause is that the information they need is split across several places and statuses, so the only way to combine it is conversation.

The Discovery page [why sales teams cannot check live stock while the customer waits](/discovery/why-sales-teams-cannot-check-live-stock-while-the-customer-waits/) examines the moment of the customer enquiry. This Pattern looks at the cumulative effect across the working day: the time, interruptions and errors created when checking stock becomes everyone's side job.

## Diagnosis

- **Stock is recorded in more than one place.** Branches, warehouses, online shops and supplier-held stock each keep their own figures, and none is complete.
- **Receiving lags reality.** Goods arrive at the dock before they are booked in. The system says nothing is available while the item sits on a pallet. The Discovery page [why goods received do not reach customer availability promptly](/discovery/why-goods-received-do-not-reach-customer-availability-promptly/) explains this delay.
- **Reservations are invisible.** A quote, a held order or a cancelled sale locks stock that appears available, or the reverse. Staff do not trust the screen, so they check physically.
- **Corrections are slow.** Damaged goods, count differences and returns reach the figure late, so the number is wrong in small ways that staff have learned to expect.
- **Future supply is unknown.** Customers often ask not only what is on the shelf but when more will arrive. If incoming orders are not visible, the answer is a guess.
- **Trust has eroded.** After enough wrong figures, people stop consulting the system at all, and phoning becomes the habit, which hides the underlying data problems.

## Commercial impact

The first cost is time. Each check takes a few minutes of the asker and a few of the person who answers, and it interrupts both. Multiplied by dozens of enquiries a day, this is a significant share of the working week that appears in no report because it is spread across everyone.

The second cost is lost or delayed sales. A customer who waits twenty minutes may leave, buy from a competitor, or decide that the business is hard to deal with. Slow answers cost most on high-value, urgent orders, where speed is part of what the customer is buying.

The third cost is wrong promises. When staff cannot see reliable availability, they either promise too much and disappoint later, or promise too little and lose the order. Both damage trust, and neither is the fault of the person on the phone. The Impact page on [checking stock capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/) sets out how this adds up.

The fourth cost is warehouse disruption. Storemen who are repeatedly called to check shelves are not picking, receiving or dispatching. The warehouse becomes a help desk for the sales floor.

The fifth cost is the cost of overselling. When stock is available in more than one sales channel, the same units can be promised twice. Microsoft's documentation notes that real-time [soft reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations) in Inventory Visibility can be used to validate available-for-reservation quantities when sales orders are placed, which illustrates the principle: the commitment must be recorded at the moment it is made, so the next person sees it.

## Why the usual response falls short

The usual response is to ask staff to update more quickly, or to hold a stock count. Both help for a few days. Without a change in how availability is calculated and shared, the figure decays again as soon as transactions resume.

Another response is to give everyone read access to the warehouse system. That is useful, but if the system's figure is on-hand rather than available, wider access simply spreads a number that people have already learned not to trust.

A third response is to carry extra safety stock so that checking is less necessary. This ties up cash and does not address why the business cannot see what it already has.

## How to approach it

Start by defining availability. Agree what the business means when it tells a customer an item is available: on the shelf, not reserved, not damaged, in the right location. Write that definition down. Many disagreements between sales and warehouse staff end once a single definition exists.

Next, find the largest delays between a physical event and its appearance in the figure. Goods received, goods sold, returns, breakages and transfers are the usual ones. Shortening the longest delay usually does more than refining the others. The Microsoft documentation on [available-to-promise](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-available-to-promise) notes that for many sellers it is not enough to know what is currently on hand; they need visibility of future availability, taking account of future supply and demand. Showing incoming purchase orders next to current stock is a practical first step.

Then make the answer visible where the question is asked. A simple shared view of available quantity for the top fifty items, refreshed frequently and showing its last update time, removes most phone calls. For the wider pattern of staff repeating the same lookups, see [why staff keep checking the same things over and over](/patterns/why-staff-keep-checking-the-same-things-over-and-over/).

## Practical next actions

1. For one week, have each salesperson tally every stock check they make by phone, message or walk, and note the item and who answered.
2. Write one definition of "available" and agree which statuses, such as reserved, damaged, in transit and awaiting booking-in, are excluded.
3. Time how long it takes from goods arriving at the dock to being sellable in the system, and set a target to cut the longest delay.
4. Record reservations at the moment a quote is held or an order is placed, and release them automatically when the quote lapses or the order is cancelled.
5. Publish a shared availability view for the fifty items most often enquired about, showing quantity, expected next delivery and last update time.
6. Repeat the tally after a month and compare the number of checks, the time per enquiry and the number of wrong promises.

## What changes when availability is shared

When staff can see a reliable availability figure, the phone calls drop away. Customers get answers while they are still on the line, warehouse staff return to warehouse work, and managers can discuss safety stock with real data. The business stops depending on who happens to know and starts depending on what the system shows.
