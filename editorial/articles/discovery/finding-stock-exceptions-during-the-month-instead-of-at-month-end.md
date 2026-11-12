---
hub: discovery
record_id: DISC-123
slug: finding-stock-exceptions-during-the-month-instead-of-at-month-end
title: Stock exceptions are only found when month-end arrives
description: Negative balances, odd adjustments and phantom stock sit unnoticed for weeks and then hold up the close. How exception checks and targeted counts catch them while they are small.
lead: Negative balances, odd adjustments and phantom stock sit unnoticed for weeks and then hold up the close. How exception checks and targeted counts catch them while they are small.
category: Inventory & Order Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Warehouse Manager / Financial Controller
budget_owner: CFO / COO
sources:
  - Cycle counting example scenarios - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/cycle-counting-scenarios
  - Partial location cycle counting - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/partial-location-cycle-counting
  - IFRS - IAS 2 Inventories | https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/
related:
  - Why a cancelled order keeps its stock locked away | /discovery/why-a-cancelled-order-keeps-its-stock-locked-away/
  - Why goods received do not reach customer availability promptly | /discovery/why-goods-received-do-not-reach-customer-availability-promptly/
  - How bundles and kits distort component stock counts | /discovery/how-bundles-and-kits-distort-component-stock-counts/
summary: Negative balances, odd adjustments and phantom stock sit unnoticed for weeks and then hold up the close. How exception checks and targeted counts catch them while they are small.
layout: plain
---
On the third working day of the month, a hardware distributor's financial controller opens the stock adjustment report and finds a negative balance of 140 units on a popular tile adhesive, a surprisingly large write-off on a range of cables and two locations that hold stock for products that were discontinued last year. The warehouse manager says the cables were probably miscounted at receiving three weeks ago. Nobody can be sure, because the receiving staff have since moved on to other jobs and the paperwork has been filed. The month-end close waits while two people try to trace the causes. (This is an illustrative example, not a named business.)

## The problem in plain language

Every stock system accumulates small errors: a miscounted delivery, a wrong unit of measure, a pick from the wrong location, a return that was never booked back in. Individually they are minor, and when found quickly they are cheap to fix. When they are found only at month-end, they have been compounding for weeks. The evidence has gone cold, the people involved cannot remember, later transactions have been built on the wrong balance, and the cost of investigation is far higher than the value of the error.

The symptom is a month-end routine that includes a long list of unexplained differences, with adjustments posted to clear them, and a sense among the warehouse and finance teams that stock figures are only reliable immediately after a physical count.

## What the buyer is actually trying to solve

Search phrases include "find stock discrepancies before month end", "inventory variance only found at stock take", "cycle counting software", "negative stock report", "daily inventory exception report" and "reduce month-end close inventory adjustments". The aim is to surface exceptions soon after they occur, route them to someone who can resolve them, and make the month-end close an assurance step, not a discovery step. A related published article on timing of corrections, [why stock corrections in the warehouse take hours to reach the online shop](/discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/), addresses the next step once an error is found.

## Evidence and system mechanism

Warehouse systems provide tools that move counting from an annual or monthly event to a continuous routine. Microsoft's [cycle counting scenarios](https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/cycle-counting-scenarios) describe several ways of triggering a count. Cycle count plans create counting work in batch, for locations matching item and location criteria, limited to a maximum number of counts and a minimum number of days between counts. Thresholds create work automatically when a quantity or percentage limit is reached: the page gives the example of a location with 60 items and a threshold of 40, where a pick of 25 leaves 35 and creates counting work for that location. Spot counts let a worker count any location at any time, even when no work exists. The page also describes blind counts, where the worker is not shown the expected quantity, and guided counts, where a difference prompts a recount.

The same page explains how differences are controlled. When the counted quantity differs from the expected one, work can be put in "pending review" unless the worker is a supervisor or the difference is within configured limits by percentage, quantity or value. A reviewer then accepts the count, which posts the difference through a counting journal, or rejects it. The page also notes that, with a count plan, the inventory in a location is not blocked, so it remains available for reservation and outbound work while counting is pending.

The companion article on [partial location cycle counting](https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/partial-location-cycle-counting) shows how counting can be narrowed to specific products or variants within a location, which the page says reduces review overhead and saves time. It also warns that the same location may be counted more than once unless the plan's filters prevent it, which is a reminder that count routines need design.

On the accounting side, the IFRS Foundation's summary of [IAS 2 Inventories](https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/) says write-downs and losses are recognised as an expense in the period in which they occur. That is one reason finance wants exceptions understood in the month they arise.

These sources show that targeted counts, thresholds and approval limits are standard features of warehouse systems. They do not show that any given business lacks them, or that the features alone solve the problem; they need rules and people behind them.

## Who owns the problem and why now

The warehouse manager owns the stock and the counting. The financial controller owns the adjustments and the close. The supply chain manager owns the underlying process. The budget owner is typically the CFO or COO, because the cost is spread across labour, write-offs and delayed reporting.

A rise in stock variance is the usual trigger. A large write-off at year-end, a failed audit observation, a lender's request for inventory assurance or a new warehouse system that makes negative stock visible all push the business to look for a more continuous approach. Growth in transaction volume is another trigger, since more movements mean more opportunities for small mistakes.

## Economic consequence

- **Write-offs of preventable losses**: errors that would have been correctable become permanent.
- **Delayed close**: finance waits for operations to explain differences, and managers get late numbers. The broader cost of manual month-end work is covered in [the payroll cost of a manual month-end close](/impact/manual-month-end-close-payroll-cost/).
- **Customer impact**: orders are accepted against stock that is not there, or declined for stock that is.
- **Investigation effort**: tracing a three-week-old error takes far longer than correcting it on the day.
- **Lower trust in data**: staff work around the system, and planners add safety stock to compensate.

## Root cause

1. **Counting is calendar-driven**: stock is checked at month-end or year-end, not when risk signals appear.
2. **No exception rules**: nobody has defined what counts as suspicious, such as negative balances, large adjustments, stock in unexpected locations or long-unmoved bins.
3. **No owner for exceptions**: reports exist, but no one is assigned to act on them daily.
4. **Approval limits missing**: any adjustment can be posted by anyone, or every adjustment needs the same senior approval, so small differences pile up.
5. **Weak transaction capture**: receipts, returns and transfers are recorded late, in batches, or on paper.
6. **Counting is disconnected from causes**: a count finds a difference but does not record why, so the same causes recur.

## Practical intervention

1. Define the exceptions that matter: negative on-hand, large or repeated adjustments, stock where it should not be, fast movers with frequent differences, and balances unchanged for a long time.
2. Build a short daily exception list from your transactions and assign it to a named person. For a small business this can be a saved query and a ten-minute morning routine.
3. Replace the big count with targeted counts. Count locations after threshold events, high-value or fast-moving items more often, and any location flagged by the exception list.
4. Set approval limits by value and percentage. Small differences are accepted by the counter or supervisor, larger ones go to review.
5. Record a cause code with every adjustment, such as receiving error, wrong location, damage, theft suspected or unit of measure, and review the pattern monthly.
6. Fix the upstream causes. If receiving errors dominate, change the receiving process or scanning. If wrong-location picks dominate, improve slotting and labels.
7. Use month-end to confirm, not to discover: the close should include a review of the open exceptions and an explanation of any that remain.

The exception list is the most effective single step, because it creates the habit of looking. The reasons why exception queues need design as volumes rise are discussed in [why human exception queues grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/).

## Diagnostic questions

- When was the last time a stock error was found within a week of occurring?
- Is there a daily report of negative balances and unusual adjustments, and who reads it?
- Which items or locations have the most frequent differences?
- Who can post an adjustment, and what limits apply?
- Does every adjustment record a reason?
- How many days does the month-end close spend on stock queries?

## What good looks like

Exceptions appear in a short list each morning and are cleared within a day or two. Counting is targeted and triggered by risk, with the largest differences reviewed before they compound. Adjustments carry cause codes, and the top causes shrink month by month because they are fixed at source. At month-end the stock figure is already well understood, so finance reviews rather than reconstructs. A balance of a few explained items replaces a long list of unexplained ones, and the data is good enough to plan and sell from, a standard described in [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/).

## Where Mellorca fits

Mellorca can design the exception rules, count triggers and approval limits with your warehouse and finance teams, build the daily exception reporting from your existing systems, and connect the cause codes into management reporting. A [digital systems audit](/services/digital-systems-audit/) is a practical first step to find where transactions are captured late or not at all.

## Method note

The documentation cited describes cycle counting features in one warehouse platform and a general accounting principle; neither prescribes how often a given business should count. The right frequency depends on stock value, movement and error history. The opening example is illustrative and not from a named business.
