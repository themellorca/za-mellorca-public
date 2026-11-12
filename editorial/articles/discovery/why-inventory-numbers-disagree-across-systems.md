---
hub: discovery
record_id: DISC-101
slug: why-inventory-numbers-disagree-across-systems
title: Why Inventory Numbers Disagree Across Sales, Warehouse and Finance
description: Inventory disagreement is rarely fixed by another spreadsheet reconciliation. It usually means stock events, dimensions or ownership rules are inconsistent across systems.
lead: When sales sees stock available, the warehouse sees less, and finance reports a third number, the organisation does not have one inventory problem. It has several systems applying different rules to the same physical reality.
category: Inventory & Order Operations
published_date: 2026-09-02
updated_date: 2026-09-02
tags:
  - Inventory
  - Data synchronisation
  - Operations
cta_label: Architecture & Roadmap
cta_href: /services/digital-systems-architecture-roadmap/
side_notes:
  - Problem owner: Supply Chain / Operations Manager
  - Budget owner: COO / CFO
problem_domain: Inventory & Order Operations
problem_owner: Supply Chain / Operations Manager
budget_owner: COO / CFO
sources:
  - Sync external inventory adjustments through Inventory Visibility - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-sync-changes
  - Configure Inventory Visibility data sources - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration
  - Inventory Visibility inventory summary - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-inventory-summary
closing_title: Method note
closing_text: This article diagnoses a class of operating problem. The cited platform documentation demonstrates current workflow and integration mechanisms; it does not prove that every organisation has the same failure mode. Quantify impact from your own process, transaction, labour and exception data.
related:
  - Why executives get different answers to the same KPI question | /discovery/executives-get-different-answers-to-the-same-kpi-question/
  - Why sales, finance and operations each define revenue differently | /discovery/sales-finance-and-operations-define-revenue-differently/
  - When sales and finance work from different product and price data | /discovery/sales-and-finance-use-different-product-and-price-data/
---
## The problem in plain language

A customer is told an item is available. The warehouse cannot find enough stock. Finance still carries inventory at a value that reflects a different quantity. Operations exports three reports and starts reconciling.

The instinct is to ask which number is correct. That is necessary, but it is not the whole problem. Different systems may be answering different questions: physical on-hand quantity, sellable quantity, available-to-promise quantity, reserved stock, stock in transit, damaged stock or accounting inventory. If those definitions and events are not aligned, "one number" is impossible.

Take a mid-sized hardware wholesaler selling through a trade counter, an online store and field reps. The online store shows 40 units of a particular drill. The warehouse system shows 40 on hand, but 25 are already picked for a large contractor order that has not yet been invoiced, and 3 are in the returns bay awaiting inspection. Finance's stock valuation reflects the last posted transactions, which do not yet include yesterday's receipt. Every system is "right" by its own rules. The online customer who orders 20 drills will still be disappointed.

## What buyers search for

Problem-aware searches include "inventory numbers don't match", "sync inventory between systems", "ecommerce stock different from warehouse", "real-time inventory visibility", "ERP WMS inventory integration" and "inventory reconciliation automation". The searcher is trying to make availability dependable enough for customers and operations to act on it.

## Evidence: current inventory platforms expose synchronisation as an explicit architecture problem

Microsoft's current Dynamics 365 Supply Chain documentation describes [synchronising external inventory adjustments through Inventory Visibility](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-sync-changes), including a configurable synchronisation frequency and status tracking for each adjustment as it is aggregated and posted. Its [data source configuration guidance](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-configuration) describes separate data sources (for example the ERP and point of sale), dimension mappings, physical measures and calculated measures. Those capabilities exist because inventory visibility is not simply a field in one table; it is the result of transactions from systems, locations and measures that must be mapped and synchronised.

The configuration guidance is instructive even if you never use that product. It shows "available for reservation" as a *calculated* figure: physical stock and expected receipts from several channels are added, and reservations and outbound quantities are subtracted. It also warns that where external quantities are posted back into the ERP, adjustments must be offset so that quantities are not updated twice. In other words, the vendor documents exactly the failure modes most businesses discover by accident.

The important lesson is architectural. A warehouse movement, ecommerce reservation, return, purchase receipt or manual adjustment has to be represented consistently across the systems that depend on it. Otherwise reconciliation becomes the integration layer.

## Who owns the problem?

Operations or supply chain owns physical flow. Warehouse teams create many of the stock events. Sales and ecommerce depend on availability. Finance owns valuation and accounting. IT owns the interfaces. The COO and CFO often become budget owners because stock disagreement affects both customer promises and working capital.

## Why it becomes urgent

Urgency rises when a business adds a warehouse or sales channel, expands SKU count, introduces bundles, increases transaction volume, changes ERP or WMS platforms, or suffers visible overselling and stockout incidents. Manual reconciliation can hide the problem for a while; scale exposes it.

### Warning signs

- Sales staff phone the warehouse to "check if it's really there" before confirming orders.
- Online channels are deliberately set to show less stock than exists, as a safety buffer nobody can explain.
- Stock counts regularly produce large adjustments with no identified cause.
- Month-end close is delayed by inventory reconciliation.
- Cancellations or returns leave stock "stuck" as reserved.

## Economic consequence

- **Lost sales or customer trust**: stock is promised but unavailable.
- **Excess inventory**: planners buy more because availability data is not trusted.
- **Working-capital distortion**: finance and operations make decisions from inconsistent quantities.
- **Warehouse labour**: teams investigate discrepancies rather than moving goods.
- **Write-offs**: damaged, returned or aged inventory is not represented correctly.
- **Fulfilment delay**: orders wait while staff determine whether stock really exists.

The labour component is often underestimated because it is spread across many people in small amounts. [The labour cost of manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/) sets out how to estimate it.

## The root cause is usually definition plus event flow

Typical causes include inconsistent product identifiers, locations mapped differently across systems, reservations not separated from physical stock, returns or damaged stock handled differently, delayed batch synchronisation, failed transactions, duplicate adjustments, bundles that do not decrement components correctly, and no agreement on which system owns which inventory event.

"Make all systems show the same number" can therefore be the wrong requirement. The stronger requirement is that every system uses the same definitions and receives the events needed to calculate the quantity relevant to its purpose.

| Measure | Question it answers | Typical main user |
| --- | --- | --- |
| On-hand | What is physically in the building? | Warehouse |
| Reserved | What is already promised to an order? | Sales and warehouse |
| Available or sellable | What can we promise to a new customer now? | Sales and ecommerce |
| In transit | What is on its way between locations or from suppliers? | Planning |
| Quarantined or damaged | What exists but cannot be sold? | Warehouse and quality |
| Accounting quantity | What has been posted for valuation? | Finance |

Once these measures are written down, many apparent "errors" turn out to be different measures being compared. The remaining differences are genuine event-flow problems worth fixing. Deciding which platform is authoritative for each is covered in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## A practical intervention

1. Define the inventory measures that matter: on-hand, reserved, available, in-transit, damaged, sellable and accounting quantity.
2. Identify the authoritative owner for each stock event.
3. Standardise product, location, lot or serial, and unit-of-measure identifiers.
4. Map every event that changes inventory: receipt, pick, ship, return, transfer, adjustment, reservation, cancellation and write-off.
5. Choose the required synchronisation method and latency for each channel.
6. Create monitoring for rejected, delayed and duplicated inventory transactions.
7. Separate operational exception handling from month-end accounting reconciliation.
8. Measure variance by cause, not only total value.

On latency, the trade-off is cost against accuracy. A fast-moving ecommerce channel may need near-real-time updates; a monthly finance valuation may be fine with batched postings. Paying for real-time everywhere is wasteful, but a channel that sells scarce items on yesterday's data will oversell. On monitoring, the most common silent failure is a rejected transaction that nobody sees—[why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/) explains how this happens.

## Diagnostic questions

- Can the business explain the difference between on-hand and sellable stock?
- Which system creates a reservation, and which systems receive it?
- How quickly do warehouse adjustments reach customer-facing channels?
- Are product and location identifiers consistent?
- Can operations identify the transaction that created a variance?
- Does a cancellation release reserved stock automatically?

## What to do first

Choose ten fast-moving SKUs with frequent complaints. For each, take a snapshot of the quantity in every system at the same moment, and then trace the differences to specific events: an unposted receipt, an open reservation, a return not yet inspected, a failed sync. Classify each difference as either a definition difference or an event-flow failure. That short exercise usually reveals the two or three causes responsible for most of the disagreement, and gives a concrete starting point for the wider intervention.

## What good looks like

Good inventory architecture makes definitions explicit and event flow observable. Sales sees a quantity suitable for promising. Warehouse sees physical work and stock state. Finance receives controlled inventory movements for valuation. When a transaction fails, it appears in an exception queue rather than silently becoming tomorrow's spreadsheet reconciliation.

## Where Mellorca fits

Mellorca can map the inventory data and transaction architecture, define ownership and measures, design integration across ERP, WMS and sales channels, and implement monitoring and exception workflows. A typical path runs from an inventory-visibility diagnostic and transaction map to an integration roadmap, implementation, and ongoing variance and synchronisation monitoring. The commercial goal is dependable operational truth at the point where a customer or employee must act.
