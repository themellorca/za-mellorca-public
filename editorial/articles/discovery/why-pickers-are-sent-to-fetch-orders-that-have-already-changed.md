---
hub: discovery
record_id: DISC-119
slug: why-pickers-are-sent-to-fetch-orders-that-have-already-changed
title: Why pickers are sent to fetch orders that have already changed
description: Short picks, wrong quantities and abandoned work usually trace back to a gap between releasing an order and the customer changing it. How to shrink that gap.
lead: Short picks, wrong quantities and abandoned work usually trace back to a gap between releasing an order and the customer changing it. How to shrink that gap.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Warehouse Manager / Operations Manager
budget_owner: COO
sources:
  - Release to warehouse - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/release-to-warehouse-process
  - Wave templates - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/wave-templates
  - Inventory Visibility reservations - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations
related:
  - Why a cancelled order keeps its stock locked away | /discovery/why-a-cancelled-order-keeps-its-stock-locked-away/
  - Online channels sell stock that the warehouse no longer has | /discovery/online-channels-selling-stock-the-warehouse-no-longer-has/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
summary: Short picks, wrong quantities and abandoned work usually trace back to a gap between releasing an order and the customer changing it. How to shrink that gap.
layout: plain
---
At a spare-parts distributor, a picker walks to the third aisle with a pick ticket for twenty brake pads. When he arrives he finds that only twelve are left, because a customer-service agent reduced the order to twelve yesterday afternoon and a second order reserved the rest. The ticket was printed from the order as it stood at seven that morning. He picks twelve, hands the paperwork to a supervisor and the supervisor phones the order desk. The pick is finished forty minutes later than planned, the packer is idle, and the delivery misses the afternoon collection. (This is an illustrative example, not a named business.)

## The problem in plain language

Warehouse work begins when an order is released. From that moment, a copy of the order exists as pick tasks, and every later change to the order has to find its way into those tasks. If it does not, the warehouse is acting on information that is no longer true. Pickers fetch quantities that have been reduced, items that were substituted, or whole orders that were cancelled. Or they miss a late addition, so the customer receives an incomplete delivery.

The symptom is a steady background of short picks, over-picks, returned-to-shelf stock, re-labelling and urgent phone calls between the order desk and the floor. Each is small. Together they are a measurable drag on throughput and a frequent cause of late or wrong deliveries.

## What the buyer is actually trying to solve

Searches tend to look like "picking from outdated orders", "order changes after release to warehouse", "pick list not updated after order edit", "prevent short picks" or "warehouse management system order synchronisation". The real aim is a clear rule for what happens when an order changes after the warehouse has started work, and a reliable way of carrying out that rule without relying on phone calls.

## Evidence and system mechanism

Warehouse systems show that the release step is where an order becomes a set of tasks, and that its settings decide how much of the order is frozen at that point.

Microsoft's documentation on the [release to warehouse process](https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/release-to-warehouse-process) explains that releasing an order creates load lines and shipments, and that with automatic wave processing, loads and the required work are created as well. It describes automatic release jobs with parameters for the quantity to release (all, only the physically reserved quantity, or reserved and cross-dock quantity), whether partially released orders may be released again, and how orders that are locked because someone is editing them should be handled: wait for them to unlock or skip them. Those options exist precisely because orders change while the warehouse is trying to process them.

The page on [wave templates](https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/wave-templates) adds the timing dimension. A wave can be processed manually, with the line added to a wave and inventory reserved but picking work created only when someone processes it, or automatically, with picking work created when the line is released. It can also be triggered at thresholds such as a maximum weight, or at a cut-off time: the page gives the example of a promise that an order placed by noon ships within 24 hours, with lines assigned to an open wave until noon, when the wave is processed. It also describes what happens when work creation fails because the inventory proposed is no longer available: the wave can either continue using a blank location or fail.

The vendor's page on [reservations](https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-reservations) completes the picture: reservations are made, offset, reduced or reversed as the order moves through its stages, and a change in the order has to be matched by a change in the reservation.

These pages describe one vendor's design. They support the general point that the interval between release and execution is a controlled window in which changes need rules, not an afterthought.

## Who owns the problem and why now

The warehouse manager or operations manager owns the problem on the floor, while the order desk or customer-service lead owns the changes that cause it. The budget owner is typically the COO, since the cost is labour, delay and customer service rather than a purchase. The pattern is related to the wider issue described in [why fulfilment problems begin before the warehouse](/patterns/why-fulfilment-problems-begin-before-the-warehouse/).

The trigger is usually rapid SKU growth. A larger range means more substitutions, more stock-outs in individual locations, more multi-line orders and more edits. A process that coped with two hundred products and one order desk starts to fail with two thousand products, because the volume of changes rises faster than the ability of people to remember them.

## Economic consequence

- **Wasted labour**: pickers walk to locations for quantities that no longer apply, then redo the task.
- **Delay and missed collections**: supervisors resolve conflicts by phone while a packer waits.
- **Wrong or incomplete deliveries**: late changes are missed, and the customer receives the old version of the order.
- **Stock errors**: pick confirmations against changed orders create adjustments that later show up as unexplained variance.
- **Customer service load**: contacts and credits follow every error. The related cost of rework is discussed in [the hidden cost of re-keying order information](/patterns/the-hidden-cost-of-re-keying-order-information/).

## Root cause

1. **Release happens too early**: orders are released as soon as they are entered, before the customer's changes have settled.
2. **No change rule after release**: the order desk edits the order and nobody defines what the warehouse should do with open tasks.
3. **One-way information flow**: edits to the order reach the warehouse system in a batch, or not at all, while pick tasks are never recalled.
4. **Paper or exported pick lists**: the information is frozen at the moment of printing.
5. **Reservation drift**: stock reserved at release is consumed by another order, so the task cannot be completed as written.
6. **Locked or partially released orders**: some lines are released and others held, creating confusion about which version is current.

## Practical intervention

1. Decide when an order should be released. For many businesses, a short hold, a cut-off time or a confirmation status is enough to catch most customer changes.
2. Define the change rules by status. Before release, changes flow freely. After release but before picking starts, the system recalls and recreates the tasks. After picking starts, changes are held as amendments that a supervisor approves.
3. Replace printed lists with live task lists on handheld devices or screens, so that a picker sees the current state when the task is opened.
4. Send changes to the warehouse as events, not as overnight batches. A change to quantity, address, delivery method or cancellation should alert the warehouse system when it happens.
5. Re-validate reservations at the point of picking and show the picker a clear alternative if a location is short.
6. Report on the exceptions: short picks, changed orders after release and recalled tasks, by cause, so the biggest sources can be addressed.

The simplest first step for a small operation is often the cut-off: agree with the order desk that changes after a set time need a specific, visible process. It costs little and prevents most of the avoidable churn.

## Diagnostic questions

- How old can a pick ticket be when a picker starts work on it?
- What happens to open pick tasks when the order desk edits the order?
- How many short picks last week were caused by an order change rather than a stock shortage?
- Does the warehouse see substitutions and cancellations as they happen?
- Who decides whether a late change is accepted once picking has started?
- Is there any printed or exported list that stays in circulation after the order has changed?

## What good looks like

Orders are released on a defined rule, not simply when they are saved. The warehouse sees the order as it is now: a change recalls the open task and recreates it, or presents the picker with a clear amendment. Late changes after picking begins follow a short, agreed procedure. Supervisors spend their time on real exceptions. Short picks are tracked and mostly attributable to genuine stock issues. The order desk can see, at any moment, whether an order is still changeable, in progress or complete, a point also made in [why salespeople cannot see whether an order has been fulfilled](/discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/).

## Where Mellorca fits

Mellorca can map the path from order entry to pick task, identify where information is frozen too early, and design the release rules, event-based updates and exception reports that keep the warehouse working from the current order. Where systems need connecting, [systems implementation and integration](/services/systems-implementation-integration/) covers building the live link between order management and warehouse execution.

## Method note

The documentation cited describes the release and wave behaviour of one warehouse platform; other products differ in detail, and some businesses run simple paper-based processes where the principles still apply. The worked example is illustrative. Measure your own short-pick and rework rates before deciding what to change.
