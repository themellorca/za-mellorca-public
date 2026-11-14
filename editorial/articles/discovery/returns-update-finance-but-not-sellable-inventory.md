---
hub: discovery
record_id: DISC-105
slug: returns-update-finance-but-not-sellable-inventory
title: Returns update finance but not the stock you can actually sell
description: A customer return produces a credit note within hours, but the item sits in a returns cage for days before anyone decides whether it can be sold again. Make the disposition decision part of the return.
lead: A customer return produces a credit note within hours, but the item sits in a returns cage for days before anyone decides whether it can be sold again. Make the disposition decision part of the return.
category: Inventory & Order Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Operations or supply chain manager, with the warehouse returns lead
budget_owner: COO or financial director
sources:
  - https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/sales-returns | https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/sales-returns
  - https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-process-sales-returns-orders | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-process-sales-returns-orders
summary: A customer return produces a credit note within hours, but the item sits in a returns cage for days before anyone decides whether it can be sold again. Make the disposition decision part of the return.
layout: plain
---
An online homeware retailer in Cape Town receives a return of a boxed kettle. The customer service team approves it, and finance issues a credit note the same afternoon so that the refund goes out on time. The parcel arrives at the warehouse two days later and goes into the returns cage. Nobody has been told whether to inspect it, restock it or send it back to the supplier, so it waits. Meanwhile the website shows the kettle as out of stock, and a customer who wanted one buys elsewhere.

At month-end, the stock count finds twenty-three units in the returns cage that the system does not show as available. Some are perfect and could have been sold weeks ago. Some are damaged and should have been written off. Finance and the warehouse have different numbers, and nobody is sure which returns have been dealt with.

## The problem in plain language

A customer return has two sides. The financial side is the credit or refund owed to the customer. The physical side is the item itself, which must be received, inspected and then put back into sellable stock, sent for repair, returned to the supplier or scrapped.

In many businesses the financial side is well controlled because customers and auditors care about it. The physical side is handled informally. The credit is posted, but the decision about what happens to the item is not recorded in the system, or is recorded much later. Until that decision is made, the item is in limbo: on the premises, but not available to sell.

## What the buyer is actually trying to solve

Operations and e-commerce managers ask why returned stock takes so long to become available, why the returns area keeps filling up and why stock counts never match after returns. Financial directors ask why inventory values and write-offs jump at month-end. The outcome they want is a returns process in which every returned item gets a recorded decision quickly, and that decision updates both finance and the stock the sales channels can see.

## Evidence and system mechanism

### Return orders separate the credit from the disposition

Microsoft's documentation on [sales returns in Dynamics 365 Supply Chain Management](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/sales-returns) lays out the steps of a physical return: create a return order, receive the item at the warehouse for inspection, determine the disposition, post a packing slip to commit that decision to inventory, and then invoice the credit. It also describes a credit-only process in which the customer is credited without the item coming back.

The central control is the disposition code, assigned at arrival or after quarantine inspection. According to the documentation, it determines the financial result, whether the customer is credited and charges applied, the fate of the item, whether it returns to inventory, is scrapped or goes back to the customer, and whether a replacement is sent. The built-in actions include credit, where the item is added back into inventory, scrap, where a loss is posted, replace and credit, replace and scrap, return to customer and credit only. Items can be sent to quarantine for inspection before a disposition is set, and the packing slip is the step that physically updates the inventory record.

### Reversing the original sale keeps the cost right

Microsoft's guidance on [processing sales return orders in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-process-sales-returns-orders) describes creating the return from the posted invoice or shipment lines, which reverses the exact cost of the original sale, and recording a return reason code on each line. A return order can also create a replacement sales order, a purchase return to the vendor and a restock charge.

The mechanism shows where the gap opens. If the business uses a plain credit note instead of a return order, or skips arrival and disposition, the credit is posted but the inventory side waits for someone to make a manual adjustment. Other ERP and e-commerce platforms use different terms, but the same split between credit and restock exists in all of them.

## Why this becomes urgent

An ERP or warehouse system replacement is a common trigger. During the project, the team discovers that returns were handled with credit notes and manual stock journals, and must decide how the new system should work. Rapid growth of online sales is the other trigger, because more orders mean more returns, and an unmanaged returns area quietly becomes a second, hidden warehouse.

The effect on availability is closely linked to [why damaged stock keeps showing as available to customers](/discovery/why-damaged-stock-keeps-showing-as-available-to-customers/): one problem shows stock that cannot be sold, and this one hides stock that can.

## Economic consequence

- **Lost sales.** Saleable items sit unavailable while channels show the product as out of stock.
- **Unnecessary purchasing.** Replenishment orders are placed for stock already in the building.
- **Inventory value errors.** Items are credited but not received, or received at the wrong cost, so inventory value and cost of sales are misstated until a count.
- **Late write-offs and supplier claims.** Damaged items are found weeks later, after the window for claiming from a supplier may have passed.
- **Reconciliation effort.** Finance and operations spend time at month-end matching credits to physical returns, much as described in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## Root cause

The root cause is that the return is designed around the refund, not the item. Customer service and finance own the credit and have clear rules for it. Nobody owns the disposition decision, there are no agreed condition codes, and the warehouse has no system step that forces a decision when an item arrives.

A second cause is disconnected systems. The e-commerce platform, the ERP and the warehouse system may each hold part of the return, so a disposition recorded in one does not update availability in the others, a pattern related to [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/).

## Practical next actions

1. **Use a return order, not a bare credit note.** Create every physical return from the original invoice or shipment so that cost reverses exactly and the item is expected at the warehouse.
2. **Define condition and disposition codes.** Agree a short list, such as resaleable as new, resaleable as open box, repair, return to supplier and scrap, with the financial and physical result of each.
3. **Record the disposition at arrival.** Make assigning a disposition part of receiving, with a target time, and send uncertain items to a quarantine location with its own owner.
4. **Link the restock to availability.** Make sure a resaleable disposition updates available stock in the warehouse system and every sales channel promptly, rather than waiting for a manual journal.
5. **Time the credit sensibly.** Decide, by return reason and customer type, whether the credit is issued before or after inspection, and record the rule.
6. **Report returns ageing.** Track items in the returns and quarantine areas by age and value each week, and investigate anything older than your target.
7. **Analyse reasons.** Review return reason codes monthly to find products, suppliers or listings that cause avoidable returns.

## Diagnostic questions

- How many units are in your returns area right now, and how many does the system show as available?
- Who decides whether a returned item can be resold, and where is that decision recorded?
- Are returns created from the original sale, or as stand-alone credit notes?
- How long, on average, between a return arriving and the item being sellable again?
- Do your online channels see restocked returns automatically?

## What good looks like

Every return is created from the original sale, expected at the warehouse and given a disposition within a set time after arrival. The disposition updates finance and inventory together, and resaleable items appear in every channel the same day. The returns area holds only items awaiting inspection, and its age and value are reported weekly. Month-end counts match, and supplier claims are made on time.

## Where Mellorca fits

If your e-commerce platform, ERP and warehouse system each handle part of the return, [systems implementation and integration](/services/systems-implementation-integration/) can connect the return order, disposition and availability updates. If you are replacing your ERP or warehouse system, [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) can make sure the returns design is settled before build, not discovered after go-live.

## Method note

This article uses Microsoft documentation for Dynamics 365 Supply Chain Management and Business Central to illustrate return orders, disposition codes, quarantine and cost reversal. Other ERP and commerce platforms use different terms for the same steps. The scenario is illustrative. Consumer returns and refunds are also subject to the Consumer Protection Act and your own terms, so confirm your obligations before changing when credits are issued.
