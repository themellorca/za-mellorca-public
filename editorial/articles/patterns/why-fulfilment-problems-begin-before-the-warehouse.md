---
hub: patterns
record_id: PAT-404
slug: why-fulfilment-problems-begin-before-the-warehouse
title: Why Fulfilment Problems Begin Before the Warehouse
description: Late, wrong and short-shipped orders are blamed on the warehouse, but the cause usually sits upstream in quotes, stock records and order entry. Here is how to trace it and fix it at the source.
lead: Late, wrong and short-shipped orders are blamed on the warehouse, but the cause usually sits upstream in quotes, stock records and order entry. Here is how to trace it and fix it at the source.
category: Order-to-Delivery & Fulfilment
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Order-to-Delivery & Fulfilment
pattern_family: Order-to-Delivery & Fulfilment
observable_condition: Orders ship late, wrong or short and the warehouse is blamed, yet tracing the orders back shows the error was created by an impossible promise, rekeyed entry or inaccurate stock record.
primary_identification: Upstream-origin fulfilment failure: promise, order data and stock accuracy are set outside the warehouse, where nobody is measured on whether the order can actually be fulfilled.
commercial_value_dimensions: On-time in-full delivery, margin lost to returns and re-deliveries, working capital in stock, and trade customer retention
sources:
  - What is Inventory Management? - IBM | https://www.ibm.com/think/topics/inventory-management
  - What is Demand Forecasting? - IBM | https://www.ibm.com/think/topics/demand-forecasting
  - What is Order Management? - IBM | https://www.ibm.com/think/topics/order-management
related:
  - Why Reporting Problems Often Begin With Data Capture | /patterns/why-reporting-problems-often-begin-with-data-capture/
  - When Staff Get Blamed for Errors Their Systems Created | /patterns/when-staff-get-blamed-for-errors-their-systems-created/
  - When Headcount Becomes the Default Fix for Process Problems | /patterns/when-hiring-more-people-is-the-automatic-answer-to-process-strain/
summary: Late, wrong and short-shipped orders are blamed on the warehouse, but the cause usually sits upstream in quotes, stock records and order entry. Here is how to trace it and fix it at the source.
layout: plain
---
## Observable condition

The managing director of a Port Elizabeth building-supplies distributor is told, again, that the warehouse is the problem. Orders go out late, the wrong size of fitting is shipped, and a customer receives forty bags of adhesive when he ordered fourteen. The warehouse manager is replaced, and for a month things look better. Then the same complaints return under the new manager.

Walking an order backwards tells a different story. The customer asked a salesperson for delivery by Friday, without knowing the truck leaves on Thursdays. The quote used a product code that was retired in June, so the pick team received an instruction for something that was not on the shelf. The order was typed in from an emailed purchase order, and "14" became "41" in the keying. The stock system showed 120 units available when 70 had been reserved for another customer in a spreadsheet. By the time the warehouse touched the order, the outcome had been decided.

The warehouse is where the failure becomes visible, because the goods are physically either on the truck or not. It is not where the failure starts.

## Realisation

A warehouse can only pick, pack and dispatch what it is told to, from the stock it has, on the timeline it is given. If the instruction is wrong, the stock record is wrong or the promise was impossible, even a flawless warehouse produces a bad outcome. Fulfilment is the last link in a chain, and it inherits the quality of every earlier link.

IBM's overview of inventory management describes the aim as having the right products in the right place at the right time, and stresses that this depends on accurate visibility of stock across the places it is held. That visibility is built, or lost, long before a picker walks an aisle: in receiving, in system updates and in the way orders reserve stock.

**Realisation prompt:** take the last five orders that went wrong. At which point was the error first possible, and who touched the order at that point?

## Identification

This is a pattern of upstream-origin fulfilment failure. The visible symptom is late, incorrect or incomplete deliveries and a warehouse team under blame. The common assumption is that the warehouse is poorly managed. The structural cause is that order information, stock accuracy and delivery promises are created in sales, finance and purchasing, where nobody is measured on whether they can actually be fulfilled.

The Pattern [the hidden cost of re-keying order information](/patterns/the-hidden-cost-of-re-keying-order-information/) covers one of the sources, and the Pattern [when customers know their order is late before your team does](/patterns/when-customers-know-their-order-is-late-before-your-team-does/) covers the signal side. This Pattern widens the view to the whole chain ahead of the dock.

## Diagnosis

- **Promises are made without checking capacity.** Salespeople agree dates and quantities without seeing stock, truck schedules or the pick backlog. The Impact page [checking stock and capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/) shows what that checking costs when it is manual.
- **Orders are rekeyed.** Every manual transfer from an email, a quote or a portal into the order system is a chance for a wrong code, quantity or address.
- **Stock records drift.** Receiving is booked late, damaged goods are not written off, and reservations live in side spreadsheets. IBM's demand forecasting overview notes that forecasts and inventory levels depend on the quality of the historical data behind them, and a drifting record misleads both.
- **Master data is not maintained.** Retired codes, duplicate products and inconsistent units of measure survive in the catalogue and reach pick lists.
- **Channels do not share one view of stock.** The Discovery note [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/) describes how a website, a sales team and a branch can all sell the same units.
- **Order management is fragmented.** IBM's overview of order management describes the discipline as coordinating orders from capture to delivery across channels and locations. Where capture, allocation and dispatch live in separate tools with manual bridges, the order loses context along the way.

## Commercial impact

The commercial value at stake is on-time delivery, margin, working capital and customer retention.

The direct costs are familiar: returns, re-deliveries, credit notes and emergency courier trips. A wrong item shipped has to be collected, restocked and replaced, which can cost several times the margin on the original sale. Staff time spent on corrections and customer calls is rarely linked back to the cause.

Inventory distortions tie up cash. If records are unreliable, the business holds extra safety stock to protect itself, or it stocks out of fast movers while overstocking slow ones. In a country where interest rates and transport costs both bite, idle stock in the wrong place is an expensive form of insurance.

Customer retention is the largest exposure. Trade customers who rely on deliveries for their own schedules do not distinguish between a warehouse error and a data error; they see a supplier that cannot be relied upon, and they find a second one. Replacing the warehouse manager does not alter any of this, and each replacement costs recruitment, training and morale. The Impact page [orders rekeyed after the sale and the fulfilment risk](/impact/orders-rekeyed-after-sale-fulfilment-risk-cost/) quantifies part of it.

## Common misidentification

The usual response is to tighten warehouse performance: more supervision, picker targets, a barcode scanner, a new layout. Some of this helps with speed, but it cannot correct an instruction that arrives wrong. The second response is to add a quality check at dispatch. Catching errors at the last point is better than not catching them, but it is the most expensive place to do so, and it adds delay to every order, including the correct ones.

A third response is to treat each customer complaint as an isolated event and apologise. Without recording where each error originated, the business repeats the same fault with different customers.

## Possibility

In a better state, delivery promises are based on live stock and a known dispatch schedule. Orders enter the system once, from a structured source, with product codes validated against the current catalogue. Stock records are updated at receiving and reserved at the point of sale, so every channel sees the same figure.

When an error does occur, it is classified by origin and reported to the owner of that step. The warehouse is judged on what it controls, and the earlier stages are judged on the quality of what they pass on.

## Intervention

1. **Trace the last twenty failed orders.** For each, record the first point at which the error was possible: promise, quote, entry, stock record, allocation or physical handling.
2. **Count by origin.** Most businesses find that a majority of failures begin upstream. That tally is the argument for where to invest.
3. **Check availability before promising.** Give sales a live view of stock and dispatch days, even a simple one, as covered in the Discovery note [salespeople cannot see whether an order has been fulfilled](/discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/).
4. **Stop rekeying.** Carry the quote through to the order electronically, and validate product codes and units at the point of entry.
5. **Tighten the stock record.** Book receipts the same day, write off damages promptly, reserve stock in the system and run regular cycle counts on the items that matter most.
6. **Report errors to their source.** Add an origin field to every correction, and review the totals monthly with sales, purchasing and warehouse together.

## Diagnostic questions

- Of the last twenty fulfilment errors, how many started before the warehouse touched the order?
- Can a salesperson see real stock before agreeing a date?
- How many times is an order typed or copied between receipt and pick?
- When did a count last confirm the stock record for your top fifty items?
- Does anyone outside the warehouse own an error that began outside it?

## Bottom line

Fulfilment problems begin before the warehouse because the warehouse receives the consequences of earlier decisions: what was promised, what was entered and what the stock record claimed. Tracing failures to their origin and fixing the upstream steps costs less than replacing managers, and it is the most direct way to raise on-time, in-full delivery.
