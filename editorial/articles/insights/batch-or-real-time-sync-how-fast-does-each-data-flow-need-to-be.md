---
hub: insights
record_id: INS-070
slug: batch-or-real-time-sync-how-fast-does-each-data-flow-need-to-be
title: Batch Sync vs Real-Time Sync: Which Does the Business Actually Need?
description: Faster is not automatically better. A flow-by-flow way to set the maximum acceptable age of each piece of data, with the costs and middle options on both sides.
lead: Faster is not automatically better. A flow-by-flow way to set the maximum acceptable age of each piece of data, with the costs and middle options on both sides.
category: Systems Integration
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Systems Integration
sources:
  - Extract, transform, load (ETL) - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl
  - Event-Driven Architecture Style - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven
  - Queue-Based Load Leveling Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling
related:
  - How to Design Integrations for Change, Not Just for Launch | /insights/how-to-design-integrations-that-survive-supplier-and-business-change/
  - What to Check Before Rebuilding a Broken Integration | /insights/six-checks-before-you-rebuild-a-broken-integration/
  - How to Integrate a New Platform Into an Existing Business | /insights/how-to-integrate-a-new-platform-into-an-existing-business/
summary: Faster is not automatically better. A flow-by-flow way to set the maximum acceptable age of each piece of data, with the costs and middle options on both sides.
layout: plain
---
Ask a supplier how their product connects to your accounting system and the answer is often "in real time", said with the confidence of a feature everyone wants. Ask an IT contractor and you may hear the opposite: "it syncs every night". Both are describing real design choices, and neither is automatically better. What matters is how quickly each piece of information needs to travel for the business to behave sensibly, and what you are prepared to pay, in money and in complexity, to make it so.

Many businesses end up with the wrong speed in one direction or the other. Some run overnight batches on information that customers expect to see updated within minutes. Others pay for continuous connections between systems that are only ever consulted at month-end. This article sets out the difference in plain terms and offers a way to decide, item by item, how fast each flow really needs to be.

## What the two terms mean

**Batch synchronisation** collects changes and moves them together at set times: every night, every hour, or at the end of a shift. Between runs, the receiving system holds the last version it was given. Microsoft's documentation on data pipelines describes extract, transform and load processes as operating on datasets in scheduled batches, and that is the pattern most businesses meet first.

**Real-time synchronisation**, more precisely called event-driven or streaming, moves each change as it happens. The same documentation contrasts scheduled batches with streaming, where data is processed as it arrives and which suits cases where low latency and continuous updates are critical, such as monitoring equipment or detecting fraud in transactions.

In between sits a family of approaches that are neither: frequent small batches every few minutes, or changes announced by one system and picked up by another within seconds. The labels matter less than the answer to a practical question: how old is the information when someone relies on it?

## The real question is the cost of being out of date

Instead of asking which technique is better, ask what happens if the receiving system is wrong for an hour, or for a day. The answer differs sharply by type of information.

- **Stock levels on an online shop.** If the warehouse sells the last unit at ten in the morning and the shop is not told until midnight, customers can order goods that do not exist. The consequences are cancellations, apologies and lost trust. The patterns behind this are described in [why stock corrections in the warehouse take hours to reach the online shop](/discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/).
- **Customer contact details.** If a change of cell number reaches the marketing tool tomorrow instead of now, almost nothing is lost.
- **Payments and credit status.** If a customer has paid but the system still shows them as overdue, someone may be chased unfairly within the hour. If a credit hold has been placed but is not yet visible to the order desk, an order may be accepted that should not have been.
- **Management reports.** Most monthly and weekly figures are perfectly well served by a nightly refresh. What matters here is that the report says when it was last updated, so that no one mistakes a delay for a decline.

This is why the question has to be asked flow by flow. One business can reasonably have a five-second connection for stock, a fifteen-minute one for payments and a nightly one for reporting, and be right on all three.

## What real time costs

Real-time connections can look like a free upgrade. They are not. Microsoft's guidance on event-driven architectures is frank about the trade-offs. Data across systems is not immediately consistent after an event is published; consumers process events at their own pace, so there is a window in which different systems disagree. Errors are harder to follow, because a single business transaction can span several components that run independently. Events can arrive more than once or out of order. And the style may not suit workloads that need strong consistency or teams that have not run asynchronous systems before.

For a business, those technical points translate into operational ones:

1. You need monitoring that tells you when a flow has stopped, because there is no overnight run whose success or failure is easy to check.
2. You need a plan for duplicates, so that a message received twice does not create two orders.
3. You need someone who understands the connection well enough to fix it when it fails at two in the afternoon.
4. Your costs may rise with usage, since many platforms charge by volume of calls or messages.

None of this is a reason to avoid real time where it is warranted. It is a reason to ask for it deliberately, not as a default.

## What batch costs

Batch has its own price, and it is paid in a different place. The delay means that people see old information and make decisions on it. They learn to distrust screens, phone each other to confirm, or keep their own lists, which brings back the manual work the integration was supposed to remove. Batches also tend to fail in lumps: when a nightly run stops, a day's worth of changes is stranded at once, and the first sign may be a sales team asking why yesterday's orders are missing. The wider pattern is described in [batch integrations leave systems hours out of date](/discovery/batch-integrations-leave-systems-hours-out-of-date/).

Batch does have real strengths. It is simple to understand and to restart: if a run fails, you can often run it again. It places a predictable load on systems, and it can be scheduled outside working hours. Microsoft's guidance on queue-based load levelling also shows how a queue can buffer intermittent heavy loads so that a receiving service handles messages at its own pace rather than being overwhelmed. That pattern is a useful middle path: changes are captured immediately but processed at a controlled rate.

## A way to decide, flow by flow

List each flow of information between your systems, and for each one, answer four questions.

| Question | If the answer is yes | If the answer is no |
| --- | --- | --- |
| Does a customer or supplier see this information directly? | Lean towards faster updates | Batch is usually acceptable |
| Could a decision made on stale data cost real money or break a promise? | Lean towards faster updates | Batch is usually acceptable |
| Does the receiving process need the change before the next step can start? | Faster updates, or a direct request-and-response check | Batch is usually acceptable |
| Do we have the monitoring and skills to run a continuous connection? | Real time is feasible | Use frequent batches until you do |

Treat the table as a prompt for discussion, not a rule. The point is to record, for each flow, an agreed maximum age for the data and a reason for it. That agreement is more valuable than the technology choice, because it lets everyone judge whether the connection is working as intended.

## Do not forget the middle options

Between a nightly file and a continuous stream, there are cheaper options that solve most problems. Running the same batch every fifteen minutes turns "yesterday" into "a few minutes ago" with little extra complexity. Sending only what has changed, instead of the full set, shortens runs and reduces load. A supplier's webhooks, which notify you when something happens, can trigger a short update only when needed. The terms are explained in [APIs, webhooks and integrations: what business leaders actually need to know](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/), and the broader question of when a platform to manage all of this makes sense is covered in [when an integration platform is worth buying and when it is not](/insights/when-an-integration-platform-is-worth-buying-and-when-it-is-not/).

## An illustrative example

Take a hypothetical Bloemfontein wholesaler of building supplies with a web shop, a warehouse system and an accounting package. Its first design sent everything overnight. Customers regularly ordered items already sold out, and the accounts team chased invoices for goods that had been returned. Switching everything to real time was proposed, at significant cost. Instead, the business listed its flows. Stock levels moved to a connection updating within a minute, since overselling was the visible problem. Payment status moved to a fifteen-minute batch. Product descriptions, supplier lists and management reporting stayed nightly, with a "last updated" time shown on each report. The change cost a fraction of the full proposal, and it fixed the two problems that customers and staff were actually complaining about.

## What to take away

Speed is a cost, and it should be spent where it buys something. Decide how old each piece of information may be, write that down, build the cheapest connection that meets it, and make sure someone is told when it falls behind. A business that does this will usually find it needs a handful of fast connections and many ordinary ones, not a single choice applied to everything.
