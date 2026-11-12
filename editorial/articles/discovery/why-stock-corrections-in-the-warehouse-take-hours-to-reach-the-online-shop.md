---
hub: discovery
record_id: DISC-103
slug: why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop
title: Warehouse adjustments do not reach ecommerce systems quickly
description: A cycle count corrects the warehouse system, but the online shop keeps selling the old number. Why stock adjustments lag and how to make corrections flow to every sales channel.
lead: A cycle count corrects the warehouse system, but the online shop keeps selling the old number. Why stock adjustments lag and how to make corrections flow to every sales channel.
category: Inventory & Order Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Warehouse or operations manager, with the ecommerce manager and IT lead owning the connection
budget_owner: Operations director or managing director
sources:
  - inventoryAdjustQuantities - GraphQL Admin | https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
  - About webhooks | https://shopify.dev/docs/apps/build/webhooks
related:
  - Why teams cannot trace one business transaction across several systems | /discovery/teams-cannot-trace-a-business-transaction-across-systems/
  - Why system timestamps put transactions in the wrong reporting period | /discovery/source-system-timestamps-create-inconsistent-period-reporting/
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
summary: A cycle count corrects the warehouse system, but the online shop keeps selling the old number. Why stock adjustments lag and how to make corrections flow to every sales channel.
layout: plain
---
On Tuesday morning a warehouse supervisor finishes a cycle count and finds that 38 units of a popular item are missing: damaged stock written off, a mis-pick from last week, a pallet put in the wrong bay. She adjusts the warehouse system down from 60 to 22. The online shop still shows 60 until the nightly synchronisation runs at midnight. In the meantime it takes 31 orders. Customer service spends Wednesday sending apology emails and offering refunds.

This article looks at that operating condition: warehouse stock adjustments that do not reach ecommerce systems quickly. It is common in businesses that run a warehouse or ERP system alongside one or more online shops or marketplaces, particularly when the connection between them was built a few years ago and has not changed since.

## The problem in plain language

Stock changes for many reasons besides sales: counts, damage, returns, transfers between sites, goods received late, theft. The warehouse system is usually where these are recorded first. The online shop only learns about them if something carries the change across. In many businesses that something is a scheduled batch job, a spreadsheet upload or a person, so the shop's number lags the real one. Normal sales are often handled correctly because orders flow through the connection. It is the adjustments, which are less frequent and less visible, that fall through the gaps.

## What the buyer is actually trying to solve

An operations manager or ecommerce lead searching for this wants to stop selling stock that does not exist, and to stop the reverse, listing items as out of stock when the warehouse has them. They also want to know how fast is fast enough. A fashion retailer with thousands of orders a day has different needs from a hardware wholesaler with a few dozen. The goal is not instant synchronisation everywhere, but a defined and reliable delay that matches the speed at which stock actually sells.

## Evidence and system mechanism

### Adjustments are a distinct kind of change

Shopify's documentation for its [inventory adjustment mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) shows how a modern platform models them. An adjustment applies a change in quantity at a specific location, with a reason code and an optional reference to the source document, and records it as an audit entry. The same page notes that recent versions of the interface require an idempotency key, so that sending the same adjustment twice does not apply it twice. Two lessons follow for any integration: send the change, not just the new total, and make repeated delivery safe.

### Stock has states, not one number

Shopify's overview of [inventory management apps](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps) describes separate inventory states, such as available, committed, incoming, safety stock and quality control. A business that sends a single quantity from the warehouse system may be merging states that the shop treats separately. Items held for inspection, for instance, should not appear as sellable. Agreeing which warehouse quantity maps to which shop quantity is as important as the speed of the update.

### Event delivery is fast but not guaranteed

Shopify's guide to [webhooks](https://shopify.dev/docs/apps/build/webhooks) explains that they provide near-real-time notification of events and are an efficient alternative to constant polling. The same guide warns that delivery is not guaranteed and recommends reconciliation jobs that periodically fetch data to correct anything missed. This is a general design pattern: use events for speed and a scheduled comparison for certainty. A connection that relies on only one of the two will either lag or drift.

### Warning signs

- Overselling spikes after cycle counts, returns processing or large receipts.
- Staff change the shop's stock by hand to keep up with the warehouse system.
- Customer service receives "out of stock after ordering" complaints in clusters.
- The warehouse and shop numbers agree in the morning and diverge by afternoon, as in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).
- Marketplace sellers receive late-dispatch penalties because orders could not be filled.

## Problem owner and why-now trigger

The warehouse or operations manager owns the stock record. The ecommerce manager owns the shop and feels the consequences first. The IT lead or an integration provider owns the connection. The budget owner is typically the operations director or managing director.

The trigger is high stock variance: counts that keep showing differences, or a growing share of orders cancelled for lack of stock. Seasonal peaks, such as Black Friday and the December trading period, expose the problem because order volume rises faster than the synchronisation interval can cope with. Load-shedding adds a further twist: an outage at the warehouse or the hosting site can interrupt a scheduled job and leave the channels apart for longer than anyone expects.

## Economic consequence

Each oversold order costs the margin on the sale that is lost, the staff time to contact the customer, the refund or replacement cost, and sometimes a marketplace penalty or poor rating. Using an illustration, if 30 oversold orders a month each cost R180 in handling and goodwill, that is R5,400 a month before any lost repeat custom. The opposite error, understated stock, is quieter and often larger: items sit unsold while the warehouse is full of them. Poor adjustment flow also weakens trust in the stock figure, so staff start to hold back buffer stock, which ties up cash.

## Root cause

- **Batch synchronisation designed for sales, not corrections.** The nightly job picks up orders and receipts but not every manual adjustment.
- **One quantity for several states.** The shop receives a total that includes damaged, quarantined or reserved stock.
- **No acknowledgement.** The warehouse system sends a change and never confirms that the shop applied it.
- **Several channels updated separately.** Each marketplace has its own connector with its own timing, a situation described in [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/).
- **Manual overrides.** Staff correct the shop directly, and the next synchronisation overwrites their fix.

## Practical intervention

1. **Measure the lag.** Make a test adjustment of one unit and time how long each channel takes to show it. Repeat on a busy day.
2. **Decide the acceptable delay.** Match it to how fast the fastest-selling item sells out. For fast movers, minutes. For slow movers, hours may be fine.
3. **Send adjustments as events.** Trigger an update when a count, write-off, return or transfer is posted, with a reason code and the source document reference.
4. **Map stock states.** Write down which warehouse quantities are sellable and which are not, and send only the sellable figure.
5. **Add a safety buffer for fast movers.** Show a quantity slightly below the true one on items that sell in bursts.
6. **Reconcile on a schedule.** Compare the warehouse and every channel every hour or every night, flag differences and correct them from the warehouse record.
7. **Make retries safe.** Apply a unique key to each adjustment so duplicates do nothing, a point explored in [automation retries that create duplicate actions](/discovery/automation-retries-create-duplicate-customer-or-financial-actions/).

### Trade-offs

Real-time updates cost more to build and monitor than a nightly batch, and the warehouse system may not be able to emit events at all. A buffer reduces overselling but also reduces sales on items that really were in stock. Starting with fast movers keeps the effort proportionate.

### An illustrative example

Illustrative: a Gauteng homeware retailer selling on its own shop and two marketplaces found that cycle-count corrections reached the channels at midnight. It moved adjustments to an event-based update for its forty fastest-moving products and kept a nightly comparison for the rest. Overselling complaints after counts fell from clusters of twenty or more to a handful a month.

## Diagnostic questions

- How long does a warehouse adjustment take to appear on each sales channel?
- What happens to quarantined, reserved or damaged stock in the number the shop receives?
- Who notices when the two systems disagree, and how quickly?
- Do oversold orders cluster after counts and returns?

## What good looks like

An adjustment posted in the warehouse reaches every channel within a delay the business has chosen deliberately. The shop receives only sellable stock, each change carries a reason and a reference, and a regular comparison catches anything the events missed. Overselling becomes a rare exception that someone investigates.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can design the event flow, stock-state mapping and reconciliation between the warehouse system and the sales channels. A [digital systems audit](/services/digital-systems-audit/) can first measure how stale each channel really is.

## Method note

The sources are platform documentation describing how adjustments, inventory states and event delivery work. They do not show the delay in any particular business. The Rand figures and the example are illustrative rather than a client case.
