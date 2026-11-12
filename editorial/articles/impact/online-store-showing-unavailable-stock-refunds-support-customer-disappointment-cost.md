---
hub: impact
record_id: CPS-429
slug: online-store-showing-unavailable-stock-refunds-support-customer-disappointment-cost
title: An Online Store Showing Stock You Do Not Have: Refunds, Support and Lost Trust
description: When a shop keeps showing stock that is gone, each sale becomes a refund, a support case and a disappointed customer.
lead: When a shop keeps showing stock that is gone, each sale becomes a refund, a support case and a disappointed customer.
category: Digital Commerce Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Digital Commerce Operations
commercial_domain: Digital Commerce Operations
primary_pain: An online store shows stock as available after it has been sold, damaged or removed
primary_cost_mechanism: Refunds and unrecovered payment fees, support and finance handling time, wasted picking and courier effort, lost repeat sales and negative reviews
sources:
  - Inventory Visibility Add-in overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
related:
  - When the Line Drops and Nothing Works: The Cost of One Internet Connection | /impact/one-internet-line-cloud-dependent-trading-stops-failover-cost/
  - Sales, Finance and Operations Each With Their Own Customer: The Cost | /impact/departments-separate-customer-records-financial-impact/
  - Slow Website, Lost Visitors: The Revenue Cost of Poor Page Speed | /impact/slow-website-visitors-leave-before-enquiring-page-speed-revenue-cost/
summary: When a shop keeps showing stock that is gone, each sale becomes a refund, a support case and a disappointed customer.
layout: plain
---
## The order confirmation for a product you do not have

A Pretoria homeware business sells through its own online shop. On Saturday evening a customer orders the last two cast-iron casserole dishes, pays by card, and receives a cheerful confirmation. On Monday morning the warehouse supervisor walks to the shelf and finds nothing. One dish was damaged in a delivery on Friday and written off on paper; the other was sold over the counter on Saturday afternoon. The shop kept showing "2 in stock" throughout.

The customer is now owed an apology, a refund, and ideally a reason to come back. Someone in the support team will write the email, someone in finance will process the refund and, a few days later, someone will reconcile the card settlement. The customer will probably leave a review. The sale, which looked like R1,800 of revenue on Saturday, has become a cost on Monday.

This article looks at that specific problem: an online store that shows stock that is no longer available, and the cost of the refunds, support work and customer disappointment that follow. It is a close relative of [inventory that does not update across sales channels](/impact/inventory-not-updating-across-sales-channels-overselling-stock-errors-cost/), which covers the multi-channel version. Here the focus is on the single shop front and the customer's experience of the gap.

## How the shop ends up lying

An online store does not know what is on the shelf. It knows what it was last told. Whenever the number in the shop differs from the physical count, there is a gap in how information travels. The usual gaps are mundane.

- **Delayed synchronisation.** The shop updates from the stock system once an hour, once a night, or when someone remembers to upload a file. Anything sold or moved in between is invisible to the shop. A closer look at this is in [why stock corrections take hours to reach the online shop](/discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/).
- **Counter and phone sales.** Sales taken outside the shop reduce physical stock but may be captured later, or in a different system.
- **Damaged, lost or quarantined stock.** Items are written off on paper, or set aside for a supplier return, yet remain counted as sellable. See [why damaged stock keeps showing as available](/discovery/why-damaged-stock-keeps-showing-as-available-to-customers/).
- **Reservations that never release.** Items held for a quote, an abandoned basket or a cancelled order stay locked, or alternatively are never locked at all, so two buyers can claim the same unit.
- **Manual stock counts.** A spreadsheet updated by hand is accurate only until the next unrecorded movement.
- **Returns and receipts delayed.** New supplier stock arrives but is not booked in, so the shop shows nothing; or returns are booked back as sellable before inspection.

## What it costs, line by line

Each unavailable-but-sold order produces a chain of costs. Treat them separately and the total becomes visible.

1. **The refund itself.** The revenue is reversed. Depending on your payment provider, the original transaction fee may not be returned, so a refund can cost money as well as revenue.
2. **Support time.** The customer asks where the order is, an agent investigates, confirms the shortage and writes the apology. A single case can involve several messages and two or three staff members.
3. **Finance time.** Processing the refund, reconciling the settlement and updating the books.
4. **Operational waste.** Pick lists generated for items that do not exist, packing time wasted, and sometimes a courier booked and cancelled.
5. **Lost future sales.** A customer who was told "in stock" and then disappointed is less likely to try again, and may tell others.
6. **Review and reputation damage.** A public complaint about cancelled orders influences the next visitor's decision to buy.
7. **Missed real sales.** If an item is sold twice, a real buyer later may be turned away.

You can build a first estimate from your own figures. Count the orders cancelled for stock reasons last quarter. Multiply by the average order value for lost revenue exposure, by the average handling time and hourly cost for staff time, and by the typical payment fee for non-recoverable charges. The sum, even at rough accuracy, is the amount that better stock visibility could return to the business each quarter.

## The legal and customer-rights context

South African online sellers also work within a legal frame. The [Electronic Communications and Transactions Act](https://www.gov.za/documents/electronic-communications-and-transactions-act) covers electronic transactions with consumers, including expectations around how orders are fulfilled and what happens when a supplier cannot deliver. The [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) sets out consumer rights relating to goods and to marketing and sales practices. Neither document replaces legal advice, and you should confirm with an adviser how they apply to your terms. The practical lesson is simple: advertising availability you cannot honour carries risk beyond a bad review, so prompt notification and a clear refund path are part of acting properly.

## How to narrow the gap

You will not reach perfection. A physical count and an online number will never be identical at every instant. The goal is to reduce the window and the damage when the numbers differ. Inventory systems address this directly. Microsoft's documentation on [Inventory Visibility](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility) describes maintaining a near-real-time view of on-hand quantities across sources, and its page on [reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations) shows how soft reservations can hold stock for a pending order. You may not use that product, but the design ideas are transferable.

### Four design choices that reduce the damage

- **Shrink the delay.** Move from nightly or manual updates to updates triggered by each sale, receipt or adjustment.
- **Hold a buffer.** Show the shop slightly less than the physical count for fast-moving or fragile items. The buffer absorbs unrecorded movements. Conflicting buffer rules between channels are examined in [why safety stock rules differ between sales channels](/discovery/why-safety-stock-rules-differ-between-sales-channels/).
- **Reserve at checkout.** Reserve stock the moment payment starts, and release it on timeout or cancellation.
- **Treat adjustments as urgent.** A write-off, damage or return should update the shop at once, not at the end of the week.

### When it happens anyway

Some orders will still fail. What you do next decides whether the customer returns. Tell the customer the same day, not the third day. Offer a clear choice between a refund and a wait for the next delivery, with a real date. Refund fast, and say how long the money will take to appear. If the customer can use an alternative product, offer it without pressure. Then log the cause, so you can see whether it is damage, counter sales or a sync delay. Without the cause, the same failure repeats.

## Practical next actions

1. Pull every order cancelled or refunded for stock reasons in the last quarter, record the cause of each, and total the refunds, fees and staff hours involved.
2. Find out how often your shop's stock numbers refresh and what triggers a refresh, and write down the longest possible gap between a physical movement and the shop showing it.
3. Make damage write-offs, supplier-return holds and counter sales update the online stock on the same day, using a simple checklist if no automation exists.
4. Set a small safety buffer on your ten fastest-moving or most fragile products and review it monthly against actual cancellations.
5. Write a standard same-day message for out-of-stock orders that offers a refund or a dated alternative, and agree who sends it.

The aim is not a shop that is never wrong, but one where being wrong is rare, short and handled openly. For the wider pattern of channels selling what the warehouse no longer holds, read [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/).
