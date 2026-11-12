---
hub: discovery
record_id: DISC-116
slug: why-sales-teams-cannot-check-live-stock-while-the-customer-waits
title: Why sales teams cannot check live stock while the customer waits
description: Reps phone the warehouse before every large quote because the stock figure in front of them is hours old. What a dependable availability lookup needs, and how to build it in stages.
lead: Reps phone the warehouse before every large quote because the stock figure in front of them is hours old. What a dependable availability lookup needs, and how to build it in stages.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Sales Operations Lead / Supply Chain Manager
budget_owner: COO / Commercial Director
sources:
  - Configure Inventory Visibility data sources - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
related:
  - Warehouse adjustments do not reach ecommerce systems quickly | /discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
summary: Reps phone the warehouse before every large quote because the stock figure in front of them is hours old. What a dependable availability lookup needs, and how to build it in stages.
layout: plain
---
A sales rep at a building-materials distributor has a contractor on the phone who wants 400 bags of cement delivered on Friday. The rep opens the quote screen, which shows a stock figure last refreshed at six that morning. She knows from experience that figure is unreliable, so she does what everyone does: she puts the contractor on hold and phones the yard. Two minutes later the answer comes back, the contractor has moved on to another supplier, and nobody records the sale that was lost. (This is an illustrative example, not a named business.)

## The problem in plain language

Sales teams need an answer to a simple question, quickly and from the screen they already use: how many of these can we promise, from which location, by which date? In many small and mid-sized businesses there is no place to ask that question. The warehouse system knows what is on the shelves, the ERP knows what has been ordered, the online shop holds its own copy, and the sales team works from a spreadsheet export or a nightly file. The data exists somewhere, but it cannot be queried at the moment of the conversation.

The symptom is not always visible as an error. It shows up as hesitation: reps who add "subject to availability" to every quote, phone calls to the warehouse before every large order, safety buffers that quietly hide a share of the stock from customers, and a habit of promising late delivery dates so that mistakes are less likely to be noticed.

## What the buyer is actually trying to solve

People who search for this problem usually phrase it as "real-time inventory for sales reps", "check stock from the CRM", "live stock availability in the quoting tool" or "ERP stock lookup API". Behind those phrases are three separate needs. The first is access: the answer must be reachable from the place where the sales conversation happens. The second is freshness: the answer must reflect what happened a few minutes ago, not yesterday. The third is meaning: the number must be one the rep can safely promise, which is not necessarily the number printed on a warehouse report. The published article on [why inventory numbers disagree across sales, warehouse and finance](/discovery/why-inventory-numbers-disagree-across-systems/) deals with that third need. This article concentrates on the first two: how an availability question gets from a salesperson to a trustworthy answer.

## Evidence and system mechanism

Modern inventory platforms treat availability as a service that other systems call, rather than as a column in a report. Microsoft's documentation for its [Inventory Visibility data source configuration](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration) describes inventory quantities arriving from several data sources, for example an ERP, a point-of-sale system and an e-commerce platform. Each source posts changes as physical measures, and a calculated measure combines them into a single available-to-reserve figure that can be queried. In the worked example on that page, three channels each hold different quantities for the same product, and a single formula adds receipts and subtracts issues and reservations to produce one cross-channel figure.

The same vendor's page on [soft reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations) explains why a query alone is not enough. When two order-taking systems run in parallel, one of them can show 100 units available while the shared service knows only 90 remain, because an order from the other channel has not yet been synchronised. The documented answer is that every channel calls the same service to reserve stock at the moment of sale, so that the last unit cannot be sold twice. That page also notes that a reservation request can fail for lack of stock, and that the user can still choose to block or continue the order where overselling is permitted, which is a business decision rather than a technical one.

Shopify's developer documentation on [inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps) shows the same principle in an online-shop setting. Stock is divided into states such as available, committed, on hand and incoming. When an order is created, available quantity falls and committed quantity rises. Only the available state is sellable. A sales team that queries "on hand" when it should query "available" will promise stock that is already spoken for.

## Who owns the problem and why now

The problem owner is usually the sales operations lead or the supply chain manager, because they feel the consequences daily. The budget owner is typically the commercial director or the COO, since the cost lands in lost sales and in customer trust. IT sits in the middle and is often asked to "just give sales access to the stock table", which is rarely as simple as it sounds.

The trigger is commonly a new sales channel. A business that sold only through its own reps and a trade counter adds a web shop, a marketplace listing or a distributor portal. Each new channel multiplies the number of places that must know what is available, and the old arrangement of phoning the warehouse cannot keep up.

## Economic consequence

- **Lost or delayed sales**: the customer moves on while the rep waits for a call back.
- **Cautious promises**: long delivery dates and hidden buffers reduce competitiveness without anyone deciding that they should.
- **Oversold stock**: when a rep promises from an out-of-date figure, the cost is a cancelled order, an expedited purchase or an unhappy account.
- **Staff time**: warehouse and customer-service staff spend part of the day answering questions that a system should answer. [The cost of checking stock capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/) shows how to put a figure on that time using your own call and order counts.

## Root cause

The symptom is the missing lookup. The causes sit underneath it, and several are usually present together.

1. **No availability service**: stock is held in the warehouse or ERP system, and nothing exposes a calculated, sellable quantity to other applications.
2. **Batch synchronisation**: a nightly or hourly file feeds the CRM or web shop, so the figure is stale by design.
3. **The wrong measure**: sales can see physical stock but not reservations, goods in transit or stock on hold.
4. **Inconsistent identifiers**: products, locations or units of measure are coded differently in each system, so a lookup cannot be matched reliably.
5. **No reservation at the point of promise**: even a live figure is only a snapshot unless the sale also reserves the stock.

## Practical intervention

The aim is to put one trustworthy question and answer in front of everyone who makes a promise. A sensible sequence looks like this.

1. Define the availability measure sales will use, in writing: what is included, what is subtracted, and for which locations.
2. List every event that changes it: receipt, pick, ship, return, transfer, cancellation, adjustment and reservation. Identify which system records each event and how quickly it reaches the others.
3. Decide the latency each channel genuinely needs. A rep quoting large orders by phone and a web shop selling scarce items need minutes or seconds. A weekly planning report does not.
4. Expose a single read service, or an equivalent view, that returns available quantity by product and location, using the agreed identifiers.
5. Connect the quoting tool, CRM and web shop to that service, and add reservation at order entry for the channels where double-selling is costly.
6. Monitor the feed. A silent failure in synchronisation turns a live service back into a stale one, as described in [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).

A small distributor with one warehouse may get most of the benefit from a read-only availability view refreshed every few minutes, with reservation added later. The decisions about which system is authoritative for each stock event are covered in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## Diagnostic questions

- Can a salesperson see available-to-promise stock, by location, without leaving the quoting screen?
- How old is the oldest figure a rep might rely on today, and does the screen say so?
- When two channels sell the last unit at nearly the same moment, what happens?
- How many calls to the warehouse or customer service are made each week purely to confirm stock?
- If the synchronisation job failed overnight, who would know by nine o'clock?

## What good looks like

A rep opens an order, selects a product and sees available quantity for each relevant location, with a timestamp and a clear indication of incoming stock and its expected date. Confirming the line reserves the stock, and the same reservation is visible to the web shop and the warehouse. If a reservation fails, the rep sees why and can offer an alternative location or date. Phone calls to the warehouse are for exceptions, not routine confirmation.

## Where Mellorca fits

Mellorca helps businesses map the stock events and systems behind an availability figure, define the measures and ownership, and design the integration between ERP, warehouse and sales channels. Where the gap is mainly one of visibility, a [digital systems audit](/services/digital-systems-audit/) identifies where the figure goes stale. Where the gap is in the connections themselves, [systems implementation and integration](/services/systems-implementation-integration/) work builds the availability feed and the monitoring around it.

## Method note

The vendor documentation cited here describes how particular products model availability and reservations. It illustrates a common design, not a prescription, and the worked example is illustrative rather than drawn from a named business. Quantify the impact in your own business from call logs, quote conversion and order cancellations before deciding how much real-time capability you need.
