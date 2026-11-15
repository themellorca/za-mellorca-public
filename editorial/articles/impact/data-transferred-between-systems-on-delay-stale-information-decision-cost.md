---
hub: impact
record_id: CPS-095
slug: data-transferred-between-systems-on-delay-stale-information-decision-cost
title: Yesterday's Data, Today's Decisions: The Cost of Delayed System Syncs
description: Stock, payments and orders that move between systems once a night leave staff deciding on figures that are hours old. The delay produces oversold stock, unnecessary credit holds and wasted calls.
lead: Stock, payments and orders that move between systems once a night leave staff deciding on figures that are hours old. The delay produces oversold stock, unnecessary credit holds and wasted calls.
category: Data and Information
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Data moves between systems on a delay, so staff and managers decide on stale information
primary_cost_mechanism: Oversold stock and refunds, unnecessary credit holds and calls, duplicated checking because staff distrust system figures, and costly purchasing, pricing and staffing decisions based on old data
sources:
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
related:
  - One Metric, Three Definitions: The Cost of Systems That Count Differently | /impact/systems-different-definitions-same-business-metric-conflicting-reports-cost/
  - When Important Data Is Trapped in One Department's App | /impact/data-trapped-in-one-department-application-information-silo-cost/
  - When Reports Do Not Answer the Question: The Cost of Private Analysis Spreadsheets | /impact/employees-private-spreadsheets-official-reports-unanswered-questions-duplicated-reporting-cost/
summary: Stock, payments and orders that move between systems once a night leave staff deciding on figures that are hours old. The delay produces oversold stock, unnecessary credit holds and wasted calls.
layout: plain
---
## The customer who had already paid

A building supplies wholesaler in Polokwane places accounts on hold when they go over their credit limit. One morning a large contractor's order was blocked. The credit controller phoned the customer to ask for payment, and was told, with some irritation, that the payment had been made the previous afternoon. It had. The bank feed into the accounting system ran overnight, and the sales system received account balances from the accounting system only once a day, early in the morning, before the bank transactions had been allocated. The figure on the screen was a day and a half old.

The order was released after an hour of calls. The contractor's site team waited. The relationship took a small knock that nobody recorded.

## Why data moves on a delay

Most businesses connect systems in batches: a nightly export, an hourly sync, a weekly import. Batches are simple and were often the only option when the connection was built. Delay also appears for other reasons:

- **Reports built on imported data** that only refreshes on a schedule.
- **Manual steps** in the middle of an otherwise automated flow, such as someone running an import when they have time.
- **Chained batches**, where system B waits for system A's nightly run, and system C waits for B.
- **Rate limits and quotas** that encourage developers to sync less often.

Each delay may be reasonable. The cost comes when a decision depends on data that is older than the decision can tolerate.

## Not every flow needs to be instant

The right speed depends on the decision. Payroll data can move once a pay period. Monthly management accounts can be assembled after month-end. Stock availability on a website, credit status for an order and payment confirmation before dispatch are different: a few hours can be the difference between a correct decision and a costly one. The guide [batch or real-time sync](/insights/batch-or-real-time-sync-how-fast-does-each-data-flow-need-to-be/) sets out a way to decide for each flow.

## What modern systems already support

Many business platforms can push changes as they happen rather than waiting to be asked. Stripe's documentation on [webhooks](https://docs.stripe.com/webhooks) describes how the platform pushes real-time event data to a registered endpoint when something happens, such as a payment succeeding or a customer disputing a charge. It also advises that the receiving system handle duplicate deliveries and must not depend on events arriving in order, which shows that real-time connections need careful design rather than simply being switched on.

Reporting tools have similar trade-offs. Microsoft's documentation on [data refresh in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) explains that imported data is only as current as the last refresh, limited to eight scheduled refreshes a day on shared capacity and 48 on Premium or Fabric capacity, while DirectQuery reads from the source each time but has its own limits. Choosing the right mode for each report is part of deciding how fresh data needs to be.

## Where the money goes

The figures below are illustrative.

### Selling what you no longer have

If website stock levels update overnight, items that sold out in the store during the day remain available online until the next sync. Each oversold order costs a refund, an apology, support time and sometimes a lost customer. The problem is examined in [inventory not updating across sales channels](/impact/inventory-not-updating-across-sales-channels-overselling-stock-errors-cost/).

### Holding orders that should flow

Credit holds based on stale balances block good customers and waste the credit controller's time. If ten orders a week are held unnecessarily and each takes 40 minutes of calls and checks across staff, that is more than 340 hours a year.

### Duplicated effort to confirm the truth

When staff learn that the system lags, they check the source system directly, phone colleagues or keep their own notes. The lag becomes a permanent extra step in many processes.

### Wrong decisions at management level

Purchasing, pricing and staffing decisions taken on yesterday's figures are sometimes wrong in ways that cost more than any of the above. The pattern is closely related to [decision-making with outdated information](/impact/pain-decision-making-with-outdated-information/).

## Why faster is not always better

Real-time connections bring their own costs. They need more careful error handling, because events can arrive twice, out of order or not at all. They can hit platform rate limits if they are designed to poll constantly instead of listening for events. They also make problems spread faster: a bad update in one system reaches the others within seconds rather than overnight, when someone might have caught it. For many flows, moving from a nightly batch to an hourly one, or adding a single event for the moments that matter most, such as a payment received or stock reaching zero, removes most of the cost without rebuilding the whole integration. The goal is to match the freshness of each flow to the decisions that depend on it, not to make everything instant.

## Deciding which flows to speed up

- List the decisions that depend on data from another system.
- For each, note how old the data can be before the decision is likely to go wrong.
- Compare that tolerance with how old the data actually is when the decision is made.
- Where the gap is large and the decision is frequent or costly, look at faster options: more frequent syncs, event-based updates, or reading directly from the source.
- Design for failure: what happens when an update is missed, duplicated or delayed. The guide on [handling failed integrations](/insights/how-to-handle-failed-integrations-without-losing-the-work-in-flight/) covers this.

## Practical next actions

1. **Map your data flows and their timing.** Record what moves between which systems, how often and through what mechanism.
2. **List the decisions that rely on each flow.** Include stock availability, credit status, payment confirmation, pricing and scheduling.
3. **Measure actual data age at decision time.** Check timestamps on a few real decisions rather than relying on the intended schedule.
4. **Count the cost of recent stale-data incidents.** Oversold orders, unnecessary holds, duplicated checks and wrong purchases.
5. **Prioritise two or three flows to speed up.** Choose those where delay is most frequent or most costly.
6. **Add freshness indicators.** Show "last updated" on screens and reports so staff know how current the figure is.

Delayed data is rarely visible as a line item. It shows up as refunds, holds, extra phone calls and decisions that seemed reasonable at the time. The useful question is not whether every system can be real time, but which decisions are being made on information that is too old.
