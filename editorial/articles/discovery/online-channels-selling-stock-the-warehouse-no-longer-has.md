---
hub: discovery
record_id: DISC-102
slug: online-channels-selling-stock-the-warehouse-no-longer-has
title: Online channels sell stock that the warehouse no longer has
description: Web shops and marketplaces show stock that is already out of date. How to publish available quantity, reserve at order creation and stop cancelling orders.
lead: Web shops and marketplaces show a copy of stock that is already out of date. How to publish available rather than on-hand quantity, reserve at order creation and stop cancelling paid orders.
category: Inventory & Order Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Operations or warehouse manager, with e-commerce or sales manager owning the channels
budget_owner: Financial director or managing director
sources:
  - InventoryLevel - GraphQL Admin | https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel
  - Inventory Visibility Add-in overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
  - Electronic Communications and Transactions Act 25 of 2002 - South African Government | https://www.gov.za/documents/electronic-communications-and-transactions-act
related:
  - Why batch integrations leave your systems hours out of date | /discovery/batch-integrations-leave-systems-hours-out-of-date/
  - When teams consume events without knowing their delivery guarantees | /discovery/event-consumers-do-not-know-the-delivery-guarantees/
  - Automation candidates are chosen by novelty instead of business value | /discovery/automation-candidates-are-chosen-by-novelty-instead-of-business-value/
  - Why pickers are sent to fetch orders that have already changed | /discovery/why-pickers-are-sent-to-fetch-orders-that-have-already-changed/
summary: Web shops and marketplaces show a copy of stock that is already out of date. How to publish available rather than on-hand quantity, reserve at order creation and stop cancelling paid orders.
layout: plain
---
A customer orders the last two units of a popular item from the online shop at 14:10. At 14:05 a trade customer collected the same units at the counter, and at 13:50 the marketplace listing sold one. The warehouse system shows zero. The online store, which updates from a nightly spreadsheet import, still shows five. By Monday morning the customer service team is writing apology emails, refunding payments and explaining to a retailer why an order cannot be filled.

This article looks at that operating condition: online channels selling stock that the warehouse no longer has. It tends to appear or worsen when a business expands its warehouse, adds locations or opens a second sales channel, because the number of places where stock changes grows faster than the process that keeps them aligned.

## The problem in plain language

Stock is a physical quantity that changes in the warehouse, but it is sold through screens. Each sales channel, whether a web shop, a marketplace listing, a trade portal or a salesperson's quote, displays a number. If that number is a copy that is refreshed hourly, daily or by hand, it will be wrong whenever stock moves faster than the refresh. The result is overselling: orders accepted for goods that cannot be shipped.

## What you are actually trying to solve

E-commerce managers, operations managers and owners want ways to stop overselling, keep channels in sync and reduce cancelled orders. The need is not only a technical connection. It is a clear rule for which system is the source of truth for available stock, and a reliable way to reduce what each channel can sell as soon as the warehouse commits stock elsewhere.

## Evidence and system mechanism

### Stock has several states, not one number

Shopify's developer documentation for an [inventory level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) describes the quantities of an item at a specific location as tracking multiple states, including available, on hand, incoming and committed. The distinction matters. On-hand stock that is already committed to an order is not available to sell. If a feed from the warehouse sends the on-hand figure to a channel that treats it as available, the channel will oversell by exactly the amount that is committed.

### Central visibility and reservations prevent double selling

Microsoft's overview of the [Inventory Visibility add-in](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility) describes a service that tracks inventory status across data sources, warehouses and channels, and that supports real-time soft reservations to avoid overselling when demand comes from different channels. It also describes calculating available-to-promise dates to manage customer expectations. Whatever technology a business uses, the pattern is general: one place that answers "how many can we still sell?", and a way to hold stock the moment an order starts rather than after it completes.

### Consumer expectations are set by law as well as by reputation

Where goods are sold to consumers, the [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) sets out consumer rights relating to the supply of goods and services, and the [Electronic Communications and Transactions Act](https://www.gov.za/documents/electronic-communications-and-transactions-act) covers electronic transactions. Specific obligations on delivery and cancellation depend on the circumstances and should be confirmed with a legal adviser, but an order taken for stock that does not exist creates a refund, a complaint and a reputational cost at the same time.

### Warning signs

- Online orders are cancelled after payment because stock could not be found.
- Stock figures on the web shop differ from the warehouse system, a pattern covered in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).
- Staff reduce stock on the website by hand when a trade customer places a large order.
- The marketplace penalises the business for cancellations.
- Customer service spends more time apologising for stock-outs than answering product queries.

## Problem owner and why-now trigger

The operations manager or warehouse manager owns the stock record. The e-commerce or sales manager owns the channels that display availability. The financial director or managing director usually owns the budget, since the cost appears as refunds, lost sales and extra labour rather than as an IT line item.

The trigger is commonly a warehouse expansion. A second warehouse, a new picking area, a third-party logistics partner or a move to a larger site adds locations, bin changes and receiving delays. Each new location is another place where stock can be moved, reserved or damaged without the web shop being told. Other triggers include opening a marketplace channel, a seasonal peak, or load-shedding disruptions that interrupt scanning and leave transactions to be captured later.

## Economic consequence

Each oversold order has a chain of costs: payment gateway fees that may not be recoverable, staff time to cancel and apologise, goodwill concessions such as discount codes, and the lost future purchases of customers who leave. Marketplaces can restrict sellers whose cancellation rates rise. There is also a quieter cost. When the business cannot trust its displayed stock, it begins to hold safety buffers, listing fewer units than it really has, which turns oversell risk into lost sales. The cost of checking capacity by hand is examined in [checking stock capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/).

## Root cause

- **Batch synchronisation.** Stock is pushed to channels on a timer, so the displayed number is always out of date by some amount.
- **On-hand sent as available.** Committed, damaged and held stock is not subtracted before the number is published.
- **Several sources of truth.** The warehouse system, the accounting system and the web shop each maintain a number.
- **Delayed transaction capture.** Receipts, transfers and returns are recorded after the physical movement, sometimes at the end of the shift.
- **No reservation step.** Stock is only reduced when an order is completed or picked, leaving a gap in which it can be sold twice.

## Practical intervention

1. **Name the source of truth.** Decide which system owns available stock, and make every channel read from it or from a faithful copy.
2. **Publish available, not on hand.** Calculate available as on hand minus committed, held and damaged stock, with an optional small buffer for fast-moving lines.
3. **Reserve at order creation.** Reduce availability the moment a basket is checked out or an order is entered, and release the reservation if payment fails.
4. **Shorten the update interval.** Replace nightly imports with event-driven or at least frequent updates, especially for the top-selling items.
5. **Capture movements at the time they happen.** Use scanners or mobile entry for receiving, transfers and picks, and define a fallback for when power or connectivity is lost.
6. **Monitor the gap.** Track cancelled orders due to stock, and run a weekly comparison between channel quantity and warehouse quantity for the fastest sellers.

### Trade-offs

Real-time synchronisation costs money and can be fragile if not monitored; for slow-moving catalogues, a frequent batch update with a buffer may be good enough. Safety buffers protect against overselling but hold back real stock from sale, so set them by item based on sales speed rather than applying one rule to everything. A single stock view can also expose data quality problems that were previously hidden, which needs to be planned for.

### An illustrative example

Illustrative: a Pretoria distributor of hardware and tools opened a second warehouse and listed 3,000 items on its web shop and a marketplace. Stock was pushed at midnight. Within a month, cancellations on popular lines reached roughly one in twenty orders. The company changed the feed to publish available rather than on-hand quantity, moved updates to every few minutes for its top 200 lines, and added a reservation at checkout. Stock-related cancellations dropped sharply, and customer service stopped manually editing web quantities.

## Diagnostic questions

- Which system does your business treat as the truth for available stock?
- How old is the number a customer sees on your web shop right now?
- Does the published figure subtract committed and held stock?
- How many orders were cancelled last month because stock was not there?
- What happens to scanning and updates during a power outage?

## What good looks like

One system owns available stock. Channels show available quantity, updated frequently enough to match the speed of sales. Orders reserve stock as soon as they are created. Movements in the warehouse are captured as they happen, with a fallback for outages. Cancellations caused by stock are measured and reviewed, and falling. Customers are told the truth about availability, and the warehouse stops being surprised by the website.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can connect the warehouse, accounting and sales channel systems so that available stock flows in one direction from a defined source. [Digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work can map where stock is recorded today and plan the changes needed before a warehouse expansion. See also [when customers know their order is late before your team does](/patterns/when-customers-know-their-order-is-late-before-your-team-does/).

## Method note

The Shopify and Microsoft documentation describe how particular platforms model stock and reservations and are used here as examples of a general pattern, not as product recommendations. Legislation is cited for general context only. The example is illustrative rather than a client case.
