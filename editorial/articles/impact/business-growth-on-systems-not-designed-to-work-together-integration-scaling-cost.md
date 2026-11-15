---
hub: impact
record_id: CPS-100
slug: business-growth-on-systems-not-designed-to-work-together-integration-scaling-cost
title: Growth on Unconnected Systems: Why Integration Problems Get Pricier With Scale
description: Systems that were never designed to work together cope at low volume through manual effort. As the business grows, every gap scales with it, and growth starts to cost more per order, customer or employee.
lead: Systems that were never designed to work together cope at low volume through manual effort. As the business grows, every gap scales with it, and growth starts to cost more per order, customer or employee.
category: Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Operations
commercial_domain: Operations
primary_pain: Business growth is built on systems that were never designed to work together, so integration gaps scale with volume
primary_cost_mechanism: Administrative headcount that rises with transaction volume, error correction that grows with volume, slower customer response, integration failures at peaks, and growth opportunities declined because operations cannot cope
sources:
  - https://shopify.dev/docs/api/usage/limits | https://shopify.dev/docs/api/usage/limits
  - https://learn.microsoft.com/en-us/graph/throttling | https://learn.microsoft.com/en-us/graph/throttling
  - https://docs.stripe.com/webhooks | https://docs.stripe.com/webhooks
summary: Systems that were never designed to work together cope at low volume through manual effort. As the business grows, every gap scales with it, and growth starts to cost more per order, customer or employee.
layout: plain
---
## Growth that made the business harder to run

An online homeware retailer in Cape Town doubled its order volume in eighteen months. Revenue grew, but margin did not. The business ran on an online store, a separate warehouse system, an accounting package, a courier portal and a customer service inbox. None of them were designed to work together. At 40 orders a day, two people bridged the gaps by exporting, importing and copying. At 90 orders a day, the business needed five people doing the same work, mistakes had tripled and customers were waiting longer for answers about their orders.

The systems had not failed. They were working exactly as before. The way they were connected simply did not scale.

## Why disconnected systems cost more as volume rises

When systems do not share data automatically, people fill the gaps. That effort grows in line with volume, and sometimes faster. The guide [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/) explores the pattern. Several effects combine:

- **Manual work grows with every transaction.** Each order, invoice or customer that has to be copied adds the same effort again.
- **Errors grow with volume.** A steady error rate on a larger number of transactions produces more mistakes to find and fix.
- **Exceptions multiply.** More customers, products and channels mean more special cases that the informal bridges were not built for.
- **Coordination costs rise.** More people involved in the bridging means more handoffs, more checking and more meetings.
- **Technical limits appear.** Connections that worked at low volume hit platform limits at higher volume.

## Technical limits that arrive with growth

Even where systems are connected, the connection may have been designed for small volumes. Platforms protect themselves by limiting traffic. Shopify's documentation on [API rate limits](https://shopify.dev/docs/api/usage/limits) describes how requests over the limit fail with a throttle error, and the app must back off before retrying. Microsoft's [Microsoft Graph throttling guidance](https://learn.microsoft.com/en-us/graph/throttling) notes that programming patterns such as continuously polling for updates are more likely to be throttled, and recommends change tracking and change notifications instead.

Event-based connections help, but they need to be designed for growth too. Stripe's [webhook documentation](https://docs.stripe.com/webhooks) recommends processing incoming events through an asynchronous queue, warning that large spikes, such as the start of the month when subscriptions renew, can overwhelm a receiving system that handles events synchronously. An integration that works on a quiet Tuesday can fail at month-end or during a sale.

## The scaling cost in practice

The figures below are illustrative.

### Headcount that grows with volume

If each additional 25 orders a day needs another administrator at R22,000 a month, moving from 40 to 90 orders a day adds two posts, or more than R500,000 a year, to do work that connected systems would do automatically. The issue is examined in [scaling by adding headcount](/impact/scaling-by-adding-headcount/).

### Error cost that grows faster than revenue

If 2% of orders need correction and each correction costs 30 minutes across warehouse, finance and service, doubling volume doubles the correction workload, before allowing for the extra errors that come from staff working under more pressure.

### Slower response to customers

When service staff have to check several systems to answer a question, response times stretch as volume grows. Customers notice before management does.

### Growth that cannot be taken on

The least visible cost is the opportunity the business declines: a new sales channel, a large wholesale customer or a promotion it cannot support because the operation would not cope.

## Why the problem is hard to see from the inside

Disconnected systems rarely produce a single visible failure. The cost appears as a series of reasonable decisions: hire another administrator, ask the warehouse to work later, add a column to the tracking spreadsheet, pay overtime at month-end. Each decision is defensible on its own. Only when cost per order or cost per customer is tracked over time does the pattern become clear. Many owners find that their revenue per employee has stayed flat, or fallen, through a period of strong sales growth. That is often the clearest signal that growth is being absorbed by manual work between systems rather than turning into margin.

## Signs that growth has outgrown the connections

- Every increase in sales requires a proportional increase in administrative staff.
- Month-end, sale periods or seasonal peaks produce backlogs and errors.
- Integrations fail more often, especially at busy times.
- Staff keep side spreadsheets to see across systems.
- New channels or products are postponed because "the systems cannot handle it".

The guide [warning signs your integration architecture has outgrown its design](/insights/warning-signs-your-integration-architecture-has-outgrown-its-design/) provides a fuller checklist, and [five-person processes in a growing business](/impact/five-person-processes-growing-business-scaling-cost/) covers the people side of the same problem.

## What scalable connection looks like

A business does not need to replace all of its systems to scale. It needs the systems it keeps to share data reliably at higher volumes. That usually means:

- A clear system of record for each kind of data, such as orders, stock, customers and invoices.
- Automated flows for high-volume transactions, designed with rate limits, retries and queues in mind.
- Event-based updates for time-sensitive changes, rather than constant polling or manual exports.
- Monitoring and alerts so failures are caught before they become backlogs.
- Moving away from a web of point-to-point links where it has become unmanageable, as described in [point-to-point integrations versus a more maintainable architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/).

## Practical next actions

1. **Measure cost per transaction.** Calculate administrative hours per order, invoice or customer now and a year ago.
2. **List every manual bridge between systems.** Note how its effort changes as volume rises.
3. **Review integration failures at peak times.** Check whether failures cluster at month-end, sales or seasonal peaks.
4. **Project the next 18 months.** Estimate the staff and error cost if volume grows as planned and the connections stay the same.
5. **Prioritise the highest-volume flows for automation.** Start with orders, stock and invoicing, where effort scales fastest.
6. **Design new connections for peak, not average, volume.** Ask about rate limits, queues and retries before building.

Growing on systems that were never designed to work together turns each new order into extra administrative work. Connecting them properly is often what lets additional revenue turn into additional margin.
