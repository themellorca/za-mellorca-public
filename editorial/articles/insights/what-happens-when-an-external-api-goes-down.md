---
hub: insights
record_id: INS-213
slug: what-happens-when-an-external-api-goes-down
title: What Happens When an External API Goes Down?
description: Couriers, payment gateways and accounting platforms all have outages. What matters is whether your systems retry sensibly, keep the work visible and avoid doing things twice.
lead: Couriers, payment gateways and accounting platforms all have outages. What matters is whether your systems retry sensibly, keep the work visible and avoid doing things twice.
category: Systems Integration
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Systems Integration
sources:
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/retry | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker | https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker
summary: Couriers, payment gateways and accounting platforms all have outages. What matters is whether your systems retry sensibly, keep the work visible and avoid doing things twice.
layout: plain
---
On a Friday afternoon, the courier company used by a Johannesburg online homeware store has an outage. Its booking service stops responding. The store's order system tries to book a collection for each new order, waits, times out, and tries again. Within an hour the order screen is slow for everyone, three orders have been booked twice once the service briefly recovers, and forty others show "awaiting dispatch" with no booking at all. Nobody in the business knew the courier was down until customers started asking where their parcels were.

Every business that connects to outside services will face this. Payment gateways, courier platforms, accounting software, SMS providers, bank feeds and tax portals all go down sometimes, or slow to a crawl, or start rejecting requests. You cannot prevent another company's outage. You can decide in advance what your business does when it happens.

## What actually happens when an API fails

An API, the interface one system uses to talk to another, can fail in several different ways, and each needs a different response:

- **Brief blips.** A request fails once and succeeds a few seconds later. These are normal and should be invisible to staff.
- **Throttling.** The provider is limiting how many requests you can send. Our article on [why rate limits become business operations problems](/insights/why-rate-limits-become-business-operations-problems-and-how-to-plan-for-them/) covers this case.
- **Extended outages.** The service is down for minutes or hours. Retrying immediately does not help.
- **Slow responses.** Arguably the worst case: requests do not fail, they just take a very long time, tying up your own system while they wait.
- **Uncertain outcomes.** The request reached the provider and may have succeeded, but the reply never came back. Did the payment go through or not?

## Retry briefly, then stop

For short blips, retrying is the right answer. Microsoft's [Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) guidance describes waiting between attempts, increasing the delay each time, and capping the number of attempts. It also warns that an aggressive retry policy can further degrade a service that is already struggling, and that only the final failed attempt should be logged as a real error, to avoid flooding people with alerts for problems that resolved themselves.

For extended outages, endless retries make things worse. The same guidance points to the [Circuit Breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker): after a threshold of failures, stop calling the service for a period, fail fast, and then allow a few trial requests through to test whether it has recovered. The documentation also notes that a circuit breaker should raise an event when it opens, so someone can be alerted, and that long time-outs on external services can tie up resources even when a breaker is in place.

You may never write this logic yourself. But you should ask whoever built or supplies your integration three questions: how many times does it retry, how long does it wait each time, and what happens after it gives up?

## Never let a failure lose the work

The forty orders stuck at "awaiting dispatch" with no booking are the real damage in our example. When an outside call fails, the work it was part of must go somewhere visible. Good options include:

- A queue of pending requests that is retried automatically when the service recovers.
- A status on the record, such as "courier booking failed", that staff can filter and see.
- A daily exception list emailed to the person who owns the process.

The worst option is the common default: the integration logs an error to a file nobody reads, and the order sits in a state that looks normal. Our guide on [handling failed integrations without losing the work in flight](/insights/how-to-handle-failed-integrations-without-losing-the-work-in-flight/) goes deeper on this.

## Guard against doing it twice

The double courier bookings came from uncertain outcomes. The first request succeeded at the courier's end, the reply was lost, and a retry booked again. The Retry pattern guidance addresses this directly: retries are only safe if the operation is idempotent, meaning repeating it has no extra effect. Many payment and booking APIs support an idempotency key, a unique reference sent with each request so the provider recognises and ignores a repeat. Where that is not available, check whether a booking already exists before creating another. Our article on [designing retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/) explains the options.

## Decide the business fallback for each dependency

Technical patterns only go so far. For each outside service your operation depends on, decide what the business does while it is down. Some examples:

- **Courier booking down:** keep accepting orders, queue bookings, and switch to manual booking through the courier's web portal if the outage exceeds two hours.
- **Payment gateway down:** show customers a clear message, offer EFT as an alternative, and do not mark orders as paid until confirmation arrives.
- **Accounting sync down:** continue invoicing, let the sync catch up later, and reconcile counts the next morning.
- **SMS provider down:** fall back to email for appointment reminders.

Write these down as a short page per dependency, with who decides to invoke the fallback. A plan that only exists in the head of the developer is not a plan the business can use on a Friday afternoon.

## Know before your customers do

Subscribe to the status pages of your critical providers, add their alerts to a shared channel, and have your integration raise an alert when failures pass a threshold. The goal is that someone in your business knows within minutes, not when the first customer phones. Our piece on [which business systems should be actively monitored](/insights/which-business-systems-should-be-actively-monitored-and-which-can-wait/) helps you decide where to start.

## Practical next actions

1. List every external service your operations depend on and note what stops working, and for whom, when each one is unavailable.
2. Ask your developer or supplier how each integration retries, when it gives up, and where failed work goes after it gives up.
3. Make failed outside calls visible on the affected record or in a queue with a named owner, instead of only in a log file.
4. Confirm that payment, booking and other money-moving calls are protected against duplicates through idempotency keys or existence checks.
5. Write a one-page business fallback for each critical dependency and subscribe a shared channel to each provider's status alerts.
