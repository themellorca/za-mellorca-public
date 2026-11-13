---
hub: discovery
record_id: DISC-113
slug: why-cycle-count-adjustments-need-a-recorded-root-cause
title: Why cycle-count adjustments need a recorded root cause
description: Counting finds the difference, but booking it away teaches nothing and the same variance returns. How reason codes and a monthly review turn counts into fixes.
lead: Counting finds the difference, but booking it away teaches nothing and the same variance returns. How reason codes and a monthly review turn counts into fixes.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Warehouse manager, with the financial controller approving adjustments
budget_owner: Operations director or financial director
sources:
  - Cycle counting - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/cycle-counting
  - Apps in inventory management | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps
  - Transfer items between locations - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations
related:
  - Warehouse adjustments do not reach ecommerce systems quickly | /discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/
  - Why sales and warehouse systems need one product identifier | /discovery/why-sales-and-warehouse-systems-need-one-product-identifier/
  - Why warehouses with different location codes cannot share stock data | /discovery/why-warehouses-with-different-location-codes-cannot-share-stock-data/
  - Stock exceptions are only found when month-end arrives | /discovery/finding-stock-exceptions-during-the-month-instead-of-at-month-end/
summary: Counting finds the difference, but booking it away teaches nothing and the same variance returns. How reason codes and a monthly review turn counts into fixes.
layout: plain
---
A Bloemfontein auto-parts distributor (an illustrative example) counts a section of its warehouse every Friday. This week, the system says there should be 120 brake pads of a particular type, and the counter finds 108. The supervisor shrugs, because it happens every few weeks, approves the adjustment and the figure becomes 108. The book is balanced, the report is clean, and nothing has been learned. Next month, 14 will be missing again.

The adjustment fixed the number. It did nothing about whatever made the number wrong.

## The problem in plain language

A cycle count is a regular check of a small part of the stock, designed to find errors early without shutting down the warehouse. It only pays off if the differences it finds are understood. When each variance is simply booked to an adjustment account, the business has a mechanism for correcting numbers but none for removing causes. The same errors recur, the same items go astray, and the adjustments become a standing line in the monthly accounts.

Symptoms: a steady stream of adjustments with generic reasons such as "count difference", the same locations and items appearing repeatedly, and a stock accuracy figure that stays flat despite constant counting.

## What you are actually trying to solve

People phrase it as "cycle count variances keep happening", "how do we find the cause of inventory discrepancies?", "stock adjustments come without explanation" or "how do we improve inventory accuracy?" They want counting to reduce the number of errors over time, not just report them.

## Evidence and system mechanism

Warehouse software supports the counting process, but the root-cause step is largely left to the business. Microsoft's Dynamics 365 documentation describes cycle counting as a process of creating counting work, performing the count on a mobile device, and resolving differences. Work can be created from thresholds, for example when the quantity in a location drops below a set level, or from plans that set how often locations are recounted.

Counted quantities that fall outside a worker's deviation limits, or that differ from on-hand when no limits are set, go to a "pending review" status for a supervisor to adjust, accept or reject. The documentation also notes that the system never shows the expected quantity to the counter, which discourages miscounts made to match the book, and that a worker can be allowed more than one attempt ([cycle counting in Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/cycle-counting)).

The same page describes a feature that matters for investigation: workers can add stock that the system does not expect in a location, so surplus is found and recorded rather than ignored. It also states that on-hand stock in a location is not blocked while counting work is open, which means picks and movements can continue during the count. That is convenient, and it is also a classic source of timing differences: a pick processed between the count and the review will make the counted number look wrong when it was right at the time.

The way inventory is classified matters too. Shopify's developer documentation describes on-hand as the sum of several mutually exclusive states, such as available, committed, reserved, damaged, safety stock and quality control ([Shopify inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)). A count variance may sit in a movement between states rather than in a physical loss, for example damaged units re-shelved as good. Business Central's transfer documentation shows another: stock in transit sits in a separate location and will not be on the shelf where a count expects it ([Business Central transfer documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations)).

None of these documents promises that software finds the cause for you. They provide the mechanisms; the discipline is organisational.

## Who owns it and why it becomes urgent

The warehouse manager runs the count, the financial controller approves the adjustments, and internal audit or the financial director cares about the stock balance. The budget owner is usually the operations or finance director. Urgency rises when stock variance becomes visible: a poor year-end count, a write-off the auditors question, an insurer asking for evidence, or a growing channel that cannot tolerate wrong availability. The wider consequence for customer promises is discussed in [online channels selling stock the warehouse no longer has](/discovery/online-channels-selling-stock-the-warehouse-no-longer-has/).

## Economic consequence

- **Recurring write-offs** that nobody can attribute to a cause, so none is fixed.
- **Repeated counting effort** that checks the same errors again and again.
- **Hidden theft or process failure,** because a pattern is invisible in a pool of generic adjustments.
- **Safety buffers and excess stock,** held because nobody trusts the count.
- **Audit friction,** with auditors asking for explanations that were never recorded.

No percentage is offered here, because the scale depends on your stock value and error rate. The sensible first step is to total the last year's adjustments by item and location.

## Root cause

Count differences are symptoms. Typical causes include:

1. **Receiving errors:** wrong quantity, wrong item or wrong location at putaway.
2. **Picking errors:** the wrong pack size or item taken, the right one left.
3. **Timing:** movements posted after the count snapshot, or transfers in transit.
4. **Unit of measure confusion:** boxes against pieces.
5. **Misclassification:** damaged or reserved stock shelved as available.
6. **Theft or leakage,** which looks like all the others until the data shows a pattern.
7. **Review practice:** adjustments approved in bulk, with no reason required.

## Practical intervention

### Require a reason code with every adjustment

Create a short, agreed list: receiving error, picking error, timing, unit of measure, damage, suspected loss, other. Keep it under ten. "Other" should require a note, and should be reviewed.

### Capture the investigation step, briefly

For variances above a value or percentage threshold, ask the counter or supervisor to check the last movements on the item and location. Record what they find in a field, not in a conversation.

### Recount before adjusting

Permit a second count by a different person. Many differences disappear, and the ones that do not are real.

### Review the pattern monthly

Produce a one-page summary: adjustments by reason, by item, by location and by shift or supplier. The patterns usually point to two or three causes that account for most of the value.

### Close the loop with a corrective action

If receiving errors dominate, change the receiving check. If one bay is the problem, relabel it. If a supplier ships short, raise it. Log the action with a date, and watch for the variance to fall.

### Link counts to the wider data

A variance on one item may relate to the identifiers used across systems; see [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/) for how differing item data causes mismatches.

## Diagnostic questions

- What proportion of last quarter's adjustments carry a specific reason?
- Which three items or locations account for most of the variance value?
- Can a supervisor approve an adjustment without a reason?
- What happens when picks continue during a count?
- Name a variance you stopped from recurring this year.

## What good looks like

Each adjustment carries a reason and, above a threshold, a short finding. A monthly review shows where variance comes from, and every top cause has an owner and a corrective action. Stock accuracy improves over successive quarters, counts become less frequent in areas that have earned trust, and auditors are given an explanation, not a spreadsheet.

## Where Mellorca fits

Where the count tools exist but reasons and review are not captured, the fix is a change to the workflow and its reporting, supported by [digital operations improvement](/services/digital-operations-improvement/). Where the causes lie in the way systems exchange stock events, [systems implementation and integration](/services/systems-implementation-integration/) addresses the interfaces. A short [digital systems audit](/services/digital-systems-audit/) can show which systems hold the movement history you will need.

## Method note

The distributor is an illustrative example. The documentation cited describes how particular products support counting; it does not prescribe reason codes or a root-cause method, which are recommendations in this article. Accounting treatment of adjustments should be confirmed with your accountant.
