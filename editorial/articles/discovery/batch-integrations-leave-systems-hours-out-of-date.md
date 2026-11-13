---
hub: discovery
record_id: DISC-287
slug: batch-integrations-leave-systems-hours-out-of-date
title: Why batch integrations leave your systems hours out of date
description: Nightly and hourly jobs leave stock, orders and customer records disagreeing for hours. The answer is the right timing per flow, not real time everywhere.
lead: Nightly and hourly integration jobs mean stock, orders and customer records disagree for hours. The answer is not real time everywhere, but the right timing for each flow.
category: Integration & API Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Integration Lead / IT Manager
budget_owner: COO / CIO
sources:
  - What Is Data Latency? - IBM | https://www.ibm.com/think/topics/data-latency
  - Event-Driven Architecture Style - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven
  - What is change data capture (CDC)? - SQL Server | https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/about-change-data-capture-sql-server
related:
  - Why integration costs stay hidden inside application projects | /discovery/integration-costs-hidden-inside-application-projects/
  - Why teams cannot trace one business transaction across several systems | /discovery/teams-cannot-trace-a-business-transaction-across-systems/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
summary: Nightly and hourly integration jobs mean stock, orders and customer records disagree for hours. The answer is not real time everywhere, but the right timing for each flow.
layout: plain
---
A customer orders online at ten in the morning. The web shop shows the item in stock because its stock figure was last updated from the ERP at two that morning. By lunchtime the warehouse has sold the last unit over the counter, and the online order cannot be filled. Nothing failed. The integration between the two systems ran exactly as designed, once a night.

Batch integration, where data is collected and moved on a schedule, is how many businesses first connected their systems. It is simple and reliable, and often still the right choice. The trouble starts when the business begins making decisions and promises that depend on data being current, while the integration still moves it hours later.

## The problem in plain language

Each batch job opens a window in which two systems disagree. A nightly job can leave a gap of up to a day. An hourly job leaves a gap of up to an hour, plus however long the job takes to run. In that window, stock can be oversold, a new customer can be missing from the billing system, a cancelled order can still be picked, or a credit hold can be ignored.

The symptoms are familiar: "it will show up tomorrow", staff told to wait for the sync before acting, manual workarounds to push urgent records through, and reports that are out of date when they are opened. This is related to, but distinct from, slow management reporting, which we cover in [when the weekly report is already out of date](/patterns/when-the-weekly-report-is-already-out-of-date/). Here the delay is between operational systems, during the working day.

## What you are actually trying to solve

The concern usually comes from an operations or IT lead after a visible failure, and sounds like "the batch integration data is too slow", "the nightly sync is too slow" or "we need real-time integration between ERP and e-commerce". The failure is something like an oversold item, a delayed order or a missed credit hold. They want to know which integrations need to be faster, what it will cost, and how to get there without rebuilding everything.

## Evidence and system mechanism

IBM's explainer on [data latency](https://www.ibm.com/think/topics/data-latency) defines it as the time between data being generated and it being available for use. It names scheduled batch processing as a main cause, because data can sit idle until the next cycle begins. The delay is built into the design, not a fault.

The alternatives move data when something changes rather than when a timer fires. Microsoft's Azure Architecture Center describes the [event-driven architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven), where producers publish events, a broker passes them on, and consumers react in near real time. It recommends this approach when several systems must react to the same events with minimal delay. The guidance is also candid about the costs. Data across services is eventually consistent, not instant. Messages may need idempotent handling. Error handling and tracing across asynchronous components are harder, and teams new to this way of working face a learning curve. Event-driven design is not suitable for every workflow.

Change data capture is a middle route when the source system cannot publish events itself. Microsoft's documentation on [change data capture in SQL Server](https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/about-change-data-capture-sql-server) explains that inserts, updates and deletes are read from the database transaction log into change tables, so a consumer can pick up only what has changed instead of reloading whole tables. In its default setup the capture job runs continuously in short cycles. The documentation notes that there is still a small built-in delay between a change being committed and it appearing in the change table. Changes are kept for three days by default, so a consumer that falls behind can miss them.

### Matching timing to the decision

Not every flow needs the same speed. A practical way to decide is to ask what decision or promise depends on the data, and how stale it can be before that decision goes wrong.

| Data flow | Decision at risk | Typical tolerance |
| --- | --- | --- |
| Stock to online shop | Selling items you do not have | Minutes |
| Credit status to order entry | Shipping to a customer on hold | Minutes |
| New customer to billing | Invoicing on time | Same day |
| Sales to management reporting | Trend decisions | Daily is often fine |

*Illustrative example, not a client case.* A South African homeware retailer with stores and an online shop syncs stock every night. During sales promotions, online orders for items already sold in store lead to cancellations and refunds. The retailer keeps the nightly job for product descriptions and prices, and moves stock levels for fast-moving lines to change-based updates. Cancellations for stock-outs fall, and the rest of the integration is left alone.

## Problem owner and why now

Integration timing is usually owned by the IT manager or integration lead, while the pain is felt by operations, sales and customer service. The budget owner is often the COO or CIO. The usual trigger is growth in API-driven channels: a new online store, a marketplace, a customer portal or a partner integration that expects current data. Higher order volumes also shorten the time before stale data causes a visible error.

## Economic consequence

Costs include oversold stock and cancelled orders, refunds and customer complaints, shipments to customers on credit hold, delayed invoices and staff time spent on manual workarounds for urgent records. Less visibly, staff learn not to trust what systems show and check by phone instead. Measure it from your own data: cancellations caused by stock errors, urgent manual record transfers per week, and the gap between when a change happens and when the other system reflects it.

## Root cause

- **One schedule for everything.** All data moves on the same timetable regardless of how time-sensitive it is.
- **Full reloads instead of changes.** Jobs copy whole tables, which is slow, so they run rarely.
- **Source systems cannot publish events,** and no change-capture method has been put in place.
- **Timing requirements were never written down,** so the integration was built to the simplest pattern.
- **Growth outpaced the original design,** as new channels raised expectations of current data.

## Practical intervention

1. **List each integration flow** and record the decision it supports and how stale the data can safely be.
2. **Keep batch where it fits.** Reference data and reporting loads often work perfectly well overnight.
3. **Move time-sensitive flows to change-based updates,** using events where the source can publish them and change data capture or API polling of changes where it cannot.
4. **Design for repeats and order.** Faster integration means more messages, so receivers must handle duplicates and late arrivals safely.
5. **Measure latency as an operational metric,** such as time from change to availability, and alert when it exceeds the agreed tolerance.
6. **Agree an owner and service level** for each critical flow.

For the basics of what a sound integration should do, see [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/). Faster flows also make failed messages more costly, so pair this work with the monitoring discussed in [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).

## Trade-offs

Event-driven and change-based integrations cost more to design, run and monitor than a nightly job. They introduce eventual consistency, so systems still briefly disagree, just for seconds instead of hours. Some source systems limit API calls, which caps how fast you can go. Moving only the flows that need it keeps cost and complexity proportionate.

## Diagnostic questions

- For each integration, how old can the data be before a wrong decision or promise is made?
- Which flows still copy whole tables on a timer?
- How often do staff push urgent records through by hand?
- Can your source systems publish events or expose changes?
- Do you measure how long changes take to reach other systems?

## What good looks like

Each integration flow has a written tolerance for staleness, set by the decision it supports. Time-sensitive data moves within minutes of a change, reference and reporting data moves in efficient batches, and latency is measured and alerted on. Staff trust what systems show, and new channels can be added without a promise the data cannot keep.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) service reviews integration timing flow by flow and builds change-based or event-driven links where they pay off. Our [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work sets the integration standards that keep this consistent as systems are added.

*Method note:* tolerances in the table are typical starting points for discussion, not benchmarks; set your own based on the decisions each flow supports.
