---
hub: impact
record_id: CPS-087
slug: integrations-breaking-silently-customers-report-failure-first-cost
title: When Customers Find the Broken Integration Before You Do
description: A connection between two business systems can stop passing data without any error anyone sees. The cost grows every hour until a customer complains, and it is mostly a detection problem.
lead: A connection between two business systems can stop passing data without any error anyone sees. The cost grows every hour until a customer complains, and it is mostly a detection problem.
category: Automation and Integration
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Automation and Integration
commercial_domain: Automation and Integration
primary_pain: Integrations between core systems stop passing data without any visible error, and the failure is first noticed when customers complain
primary_cost_mechanism: Reconciliation and replay labour, customer service time, cancelled or delayed orders, decisions made on incomplete data, and manual checking that returns after trust in the integration is lost
sources:
  - https://shopify.dev/docs/apps/build/webhooks/troubleshooting-webhooks | https://shopify.dev/docs/apps/build/webhooks/troubleshooting-webhooks
  - https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview | https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview
summary: A connection between two business systems can stop passing data without any error anyone sees. The cost grows every hour until a customer complains, and it is mostly a detection problem.
layout: plain
---
## The complaint that starts the investigation

A distributor in Gqeberha sells through its own web shop and pushes every paid order into its stock and invoicing system overnight. One Tuesday a customer phones to ask why an order placed on Friday has not shipped. The sales administrator looks it up and cannot find it. Neither can she find the forty-odd orders placed after it. The connection between the shop and the back office had stopped on Friday afternoon. Nobody saw an error, because nothing was set up to show one. The shop kept taking money, the warehouse kept packing whatever reached the system, and the gap stayed invisible for four days.

This is a familiar pattern in businesses that have connected their systems: integrations that break silently, so that the first alarm is a customer. The break itself is often small, such as an expired password, a changed field name or a full mailbox. The expensive part is the time between the failure and the moment someone notices.

## Why integrations fail without making a noise

Most connections between business systems are built to move data when everything works. Far fewer are built to tell a person when they stop. Several common features make silence the default:

- **Scheduled jobs report success by doing nothing.** A nightly sync that finds no new records looks identical to one that could not connect at all, unless someone records the difference.
- **Errors land in a log nobody reads.** Many tools write failures to a history screen inside the integration platform, which only the person who built it ever opens.
- **Retries hide the first failure.** A system that retries quietly gives the impression of resilience until the retries run out.
- **Subscriptions can be dropped.** Shopify's developer guidance on [troubleshooting webhooks](https://shopify.dev/docs/apps/build/webhooks/troubleshooting-webhooks) explains that failed deliveries are retried up to eight times over four hours, and that if failures persist the subscription is removed. It points developers to delivery logs to monitor failures. A business that never checks those logs may not know the feed has stopped.
- **Partial failure looks like normal data.** When one order type or one branch stops flowing while the rest continue, the totals look roughly right and nobody suspects anything.

## How the cost builds up

A silent failure has an unusual cost profile. Nothing happens on the day it breaks. The cost accumulates with every hour of undetected failure, and then arrives all at once when it is discovered.

### Work that has to be done twice

Once the break is found, someone has to establish exactly which records were missed, push them through again, and check that nothing was duplicated in the process. In the distributor's case, that meant comparing the shop's order list with the invoicing system line by line for four days of trading. That is a full day of an administrator's time and an evening of a developer's time, spent restoring data that should have arrived on its own.

### Service failures customers can see

Late dispatches, invoices that never arrive, bookings that do not appear in a calendar and loyalty points that are never credited all reach customers before they reach management. Each one generates a call or an email, and some generate a refund request or a cancelled order. The guide on [how integration errors reach customers](/insights/from-rejected-message-to-unhappy-customer-how-integration-errors-reach-customers/) traces that path in more detail.

### Decisions made on incomplete data

Reports drawn from the receiving system understate sales, stock movements or cash received for the period of the failure. A buyer who reorders against those numbers, or a manager who reads a weak week as a trend, acts on information that is wrong without knowing it.

### Lost trust in the connection

After one silent failure, staff often start checking the integration by hand every morning. That is a sensible reaction, but it quietly reintroduces the manual work the integration was meant to remove, and it depends on one person remembering.

## A simple way to size the exposure

The figures below are illustrative. Replace them with your own volumes.

Suppose an integration carries 60 orders a day with an average value of R1,500. If it fails silently and takes three working days to detect, 180 orders worth R270,000 are affected. If one order in ten generates a complaint that takes 20 minutes to handle, that is six hours of service time. If reconciliation and replay take another 12 hours, and a loaded labour cost is R250 an hour, the direct labour cost is about R4,500. That looks modest until you add the orders that were cancelled, the expedited courier fees for late ones, and the possibility that some missing orders are never found. More importantly, the same calculation with a detection time of one hour instead of three days shows almost no cost at all.

That is the central point: for silent failures, the detection time is the cost driver. Reducing it is usually cheaper than making the integration itself more robust.

## Why this is tolerated

Businesses put up with silent failures for understandable reasons. The integration was built as a project, and the project ended. Nobody was named as the owner of the connection once it went live. Monitoring feels like an extra for large companies. And because failures are infrequent, each one is treated as bad luck rather than as a gap in design. The article on [silent automation failures](/impact/silent-automation-failures-financial-impact/) covers the wider automation picture. Integrations between core systems deserve particular attention because they carry customer orders, invoices and payments.

## What good detection looks like

Detection does not need to be elaborate. It needs to answer one question quickly: did the data that should have moved actually move?

- **Alert on absence, not only on errors.** If a feed normally carries orders every hour during trading time, an hour with none is a signal worth an alert.
- **Send alerts to a named person and a shared channel.** An alert sent only to the developer who left last year is not an alert.
- **Compare counts at both ends.** A daily check that the number of orders in the shop matches the number received in the back office catches partial failures that error messages miss.
- **Use the alerting your platforms already include.** Cloud platforms provide this as standard. Microsoft's [Azure Monitor alerts overview](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview) describes alert rules that check monitored data against conditions and action groups that send email or SMS notifications or start automated workflows when an alert fires. Most integration platforms offer something similar for failed runs.

The guides on [designing alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/) and [knowing whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) go further into practical design.

## The commercial trigger

The right time to act is usually straight after the first customer-reported failure, while the cost is fresh and the reconciliation hours are known. Another strong trigger is any change to the systems on either side of a connection: a software upgrade, a new payment provider, a password policy change or a supplier changing its interface. Each one is a moment when a quiet break becomes more likely.

## Practical next actions

1. **List every connection that carries orders, invoices, payments or customer records.** Note the two systems, what moves, how often, and who built it.
2. **Name an owner for each connection.** The owner receives alerts, checks the weekly summary and decides what to do when something fails.
3. **Add one absence alert per critical feed.** Define the normal minimum volume for a period and alert when it is not reached.
4. **Introduce a daily count comparison.** A simple report showing records sent and records received for each feed catches most partial failures within a day.
5. **Write a short replay procedure.** Record how to find missed records, resend them and check for duplicates, so recovery does not depend on the original builder.
6. **Review the last failure honestly.** Work out how long it took to detect, what it cost and which of the steps above would have caught it sooner.

An integration that fails loudly is an inconvenience. One that fails silently is a running cost that grows until a customer complains. The cheapest improvement is almost always to shorten the time it takes to notice.
