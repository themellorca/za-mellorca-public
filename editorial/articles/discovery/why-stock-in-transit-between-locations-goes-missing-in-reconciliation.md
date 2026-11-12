---
hub: discovery
record_id: DISC-112
slug: why-stock-in-transit-between-locations-goes-missing-in-reconciliation
title: Why stock in transit between locations goes missing in reconciliation
description: Stock leaves one branch and never quite arrives in the books. How to model transit, tie shipment to receipt and clear open transfers daily.
lead: Stock leaves one branch and never quite arrives in the books. How to model transit, tie shipment to receipt and clear open transfers daily.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Supply chain manager, with branch or warehouse managers owning receipt
budget_owner: Operations director or financial director
sources:
  - Transfer items between locations - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
related:
  - How bundles and kits distort component stock counts | /discovery/how-bundles-and-kits-distort-component-stock-counts/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
  - Reserved stock is treated as available stock | /discovery/why-reserved-stock-keeps-showing-as-available-to-sell/
summary: Stock leaves one branch and never quite arrives in the books. How to model transit, tie shipment to receipt and clear open transfers daily.
layout: plain
---
A Western Cape building-supplies company (an illustrative example) moves 400 bags of tile adhesive from its Epping depot to a new branch in Paarl. The driver leaves on Monday morning with the delivery note. The Epping system shows the stock gone. The Paarl system shows nothing yet. On Tuesday, the branch counter staff cannot see the adhesive, so a regular contractor is told to come back. On Thursday, a finance clerk notices 400 bags in neither location and raises a reconciliation query. Two people spend an afternoon establishing that the stock was on a truck, arrived on Monday afternoon, and was shelved without anyone booking it in.

Stock in motion is stock nobody owns, and that is when it goes missing from the books.

## The problem in plain language

A transfer between locations has at least three moments: the goods leave, they travel, and they arrive. If a business only records the first and the last, or records them days apart, the quantity in between belongs to no location. If one of the two postings is forgotten, or posted against the wrong code, or short-received because of breakage, the difference lands in a reconciliation queue and stays there until someone has time to chase it.

The symptoms: stock that "should have arrived", growing lists of unreconciled transfers, discrepancies at the end of each month, and branches that stop trusting the transfer process and phone each other instead.

## What the buyer is actually trying to solve

People search for "inventory transfer between warehouses not showing", "stock in transit tracking", "transfer discrepancies between locations" and "how to reconcile inter-branch stock transfers". They want to know where every unit is at every moment, and to have discrepancies surface on the day, not at month-end.

## Evidence and system mechanism

Inventory software is designed around the idea that transit is a place in its own right. Microsoft's Business Central documentation describes transfer orders that can ship from one location and receive at another, tracking a quantity in transit. When the shipment is posted, the items are in transit between the two locations, and they are unavailable while there. The receiving worker then posts the receipt. The documentation also describes four item ledger entries for a transfer with an in-transit location: out of the origin, into transit, out of transit, and into the destination. It adds that a mistaken shipment quantity can be corrected through an undo-shipment action as long as the shipment has not yet been received ([Business Central transfer documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations)). The same page contrasts this with a direct transfer that posts shipment and receipt together, which is simpler but gives no visibility of the journey.

Shopify's help documentation on transfers describes a comparable idea at a smaller scale: transfers move and track stock between locations, can be marked in transit, ready to ship or transferred, support full or partial receipt at the destination, and can be split into multiple shipments ([Shopify transfers](https://help.shopify.com/en/manual/products/inventory/transfers)). Its developer documentation likewise treats incoming stock as a separate state that is not sellable until received ([Shopify inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)).

The common message is that a transfer is a document with a life cycle, not an adjustment at each end. When a business models it as two unrelated adjustments, the reconciliation burden follows.

## Who owns it and why it becomes urgent

The supply chain manager owns the movement, branch or warehouse managers own the endpoints, and finance owns the balance sheet impact. The budget usually sits with the operations or finance director. The urgent moments come with warehouse expansion: a second site, a third-party warehouse, or a new store means more transfers, longer distances and more people who have never met each other.

It is also linked to location codes. If the two ends do not share a location scheme, the receiving clerk has to translate, and the same sites need one shared scheme before transfers can be trusted.

## Economic consequence

- **Lost sales,** when stock is on a truck and the destination cannot sell it.
- **Reconciliation labour,** as clerks trace transfers by phone and email.
- **Write-offs,** when old, unexplained differences are finally cleared out without a cause.
- **Distorted stock valuation** at period end, because stock in transit is counted twice or not at all.
- **Loss of trust,** pushing branches to hoard stock instead of sharing it, which defeats the point of a network.

## Root cause

1. **Transit is not modelled.** Stock leaves one location and reaches the other in a single step, or the shipment is posted without a matching receipt.
2. **Shipment and receipt are separate manual tasks,** often done by different people at different times.
3. **Received quantities differ from shipped quantities** (breakage, shortages, miscounts), and there is no routine for recording the difference with a reason.
4. **No ageing or ownership of open transfers,** so a transfer that is two weeks old looks the same as one from today.
5. **Documents and system disagree,** because the driver's note is the real record and the system lags.

## Practical intervention

### Model transit explicitly

Use an in-transit location or state so that stock leaving one place is visible, and unsellable, until it arrives. Reserve direct transfers for moves where goods change place in minutes, for example between two bays in the same building.

### Tie shipment and receipt to one document

Both postings should reference the same transfer number, with quantities, so the system can compare what left with what arrived.

### Handle differences at the dock

Short or damaged receipts should be recorded when the goods are checked, with a reason, rather than discovered later. A discrepancy raised on the day can usually be resolved with the driver or carrier.

### Age and own the open items

Produce a daily list of transfers shipped but not received, sorted by age, with a named owner at the receiving end. After a set period, escalate.

### Publish a clear availability rule

Decide whether in-transit stock is shown as "arriving" at the destination. If so, show it separately from sellable stock, as in [the wider problem of channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/).

### Automate the reminders, not the judgement

Alerts for overdue receipts are a good use of workflow automation. Deciding whether a difference is theft, breakage or a miscount remains a human task.

## Diagnostic questions

- At this moment, how many units are in transit, and where is that figure held?
- Who is responsible for confirming that a shipment has arrived?
- How old is your oldest unreceived transfer?
- When received quantity differs from shipped, where is the reason recorded?
- Does month-end close wait on transfer reconciliation?

## What good looks like

Every transfer has one document, a shipment event and a receipt event. Stock in transit is visible, owned and unsellable until it arrives. Differences are logged at the dock with a reason, and a daily list shows open transfers by age. Reconciliation at month-end is a check, not a hunt, and branches share stock because they trust the numbers.

## Where Mellorca fits

Where the process exists but the systems do not carry it, aligning transfer documents across the ERP, warehouse and branch systems is integration work under [systems implementation and integration](/services/systems-implementation-integration/). Where overdue-transfer alerts and exception routing are the gap, [business automation](/services/business-automation/) covers it. The broader question of why numbers disagree is set out in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## Method note

The depot example is illustrative and not a named business. Transfer behaviour differs between products; Business Central and Shopify are cited because their documentation is public, and your system may handle transit differently. Valuation and tax treatment of stock in transit should be agreed with your accountant.
