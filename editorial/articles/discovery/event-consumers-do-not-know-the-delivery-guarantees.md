---
hub: discovery
record_id: DISC-299
slug: event-consumers-do-not-know-the-delivery-guarantees
title: When teams consume events without knowing their delivery guarantees
description: Events can arrive twice, late, out of order or not at all. Why consumers must know the delivery guarantee and how to publish it.
lead: Events can arrive twice, late, out of order or not at all, depending on the platform and settings. Why consumers need to know the delivery guarantee, and how to publish it.
category: Integration & API Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Integration lead or IT manager, with the owners of the systems that publish and consume events
budget_owner: Chief information officer or chief operating officer
sources:
  - Amazon SQS at-least-once delivery - Amazon Simple Queue Service | https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html
  - Azure Event Grid Delivery and Retry Explained - Azure Event Grid | https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry
  - Kafka Message Delivery Guarantees - Confluent Documentation | https://docs.confluent.io/kafka/design/delivery-semantics.html
  - Introduction | https://www.asyncapi.com/docs/concepts/asyncapi-document
related:
  - APIs change without downstream teams being warned | /discovery/apis-change-without-downstream-teams-being-warned/
  - Why teams cannot trace one business transaction across several systems | /discovery/teams-cannot-trace-a-business-transaction-across-systems/
  - Why internal teams cannot find the APIs your business already has | /discovery/apis-exist-but-internal-teams-cannot-find-them/
summary: Events can arrive twice, late, out of order or not at all, depending on the platform and settings. Why consumers need to know the delivery guarantee, and how to publish it.
layout: plain
---
The online shop publishes an "order paid" event. The warehouse system listens for it and starts picking. One afternoon a customer receives two parcels for one order. A week later another customer receives nothing, because a payment event was dropped during a short outage at the warehouse end. The publishing team says the platform "guarantees delivery". The warehouse team assumed that meant once, in order, every time. Neither had written down what the guarantee actually was.

Event-driven integration is now common in mid-sized businesses, through webhooks from SaaS platforms, cloud message queues and event services. It brings real benefits: systems react quickly and are loosely coupled. It also introduces a question that request-and-response integrations hide: what exactly happens to an event between the publisher and each consumer?

## The problem in plain language

When one system publishes an event, the platform carrying it makes certain promises and not others. It may deliver each event at least once, which means sometimes more than once. It may not preserve order. It may retry for a limited time and then discard the event, or move it to a dead-letter location if one is configured. These behaviours depend on the product and its settings.

Consumers are often built without knowing any of this. They assume each event arrives once, in sequence, and never goes missing. The result is duplicated actions, actions applied in the wrong order, and gaps nobody notices until a customer or auditor does.

## What you are actually trying to solve

People ask why a webhook fired twice, why events arrive out of order, what "at least once delivery" means, or how to stop duplicate orders from an integration. Managers see the business symptoms: duplicate shipments, double-posted payments, a status that flips back to an earlier value, or a customer record that never updated. The underlying need is for every consumer to know the delivery behaviour it is depending on, and to be built to handle it.

## Evidence and system mechanism

### At-least-once delivery means duplicates are normal

Amazon's documentation on [at-least-once delivery for SQS standard queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html) explains that, on rare occasions, a copy of a message may be delivered again, and advises designing applications to be idempotent, meaning unaffected by processing the same message more than once. Duplicates are not a fault in this model. They are part of the contract.

### Order, retries and dropped events vary by setting

Microsoft's documentation on [Event Grid delivery and retry](https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry) states that Event Grid tries to deliver each event at least once, does not guarantee order, and retries on a schedule that stretches from seconds to hours. Events are dropped when the retry limit or time-to-live is reached, or immediately for certain errors, unless dead-lettering has been configured. Dead-lettering is not on by default. Even when the endpoint responds, duplicates may still be received. A consumer that does not know these defaults cannot reason about what it might miss.

### Stronger guarantees exist, with conditions

Confluent's description of [Kafka message delivery semantics](https://docs.confluent.io/kafka/design/delivery-semantics.html) sets out three options: at most once, where messages may be lost; at least once, where they may be delivered more than once; and exactly once, which relies on idempotent and transactional producers and consumers and comes with higher latency. It also cautions that exactly-once claims may not account for failures outside the messaging system. In other words, the guarantee depends on configuration on both sides, which is exactly what consumers need to be told.

### There is a standard way to write it down

The [AsyncAPI document](https://www.asyncapi.com/docs/concepts/asyncapi-document) is described as a communication contract between senders and receivers in an event-driven system, covering channels, operations and message payloads, with room for protocol-specific details. It gives publishers a structured place to describe events and the behaviour around them, rather than leaving it to conversation.

## Problem owner and why-now trigger

The integration lead or IT manager usually owns the event platform. The owners of the publishing and consuming systems, for example e-commerce, warehouse and finance, carry the consequences. Budget usually sits with the chief information officer or chief operating officer.

Mergers are a common trigger: two businesses connect their order, stock and finance systems using whatever event mechanisms each already had, and consumers on one side make assumptions about publishers on the other. Other triggers include adopting a SaaS platform that pushes webhooks, moving from batch files to real-time updates, and the first incident where a duplicate or missing event costs real money.

## Economic consequence

- **Duplicate actions.** Double shipments, double payments or duplicate customer communications when consumers are not idempotent. The design side of this is covered in [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).
- **Silent gaps.** Events dropped after retries expire, with no dead-letter location, leave records out of date without any error.
- **Out-of-order updates.** An older status overwrites a newer one, producing wrong stock levels or order states.
- **Investigation time.** Each incident requires several teams to reconstruct what the platform did.
- **Customer impact.** Errors surface at the customer before anyone internally notices.

## Root cause

- **No published event contract.** Publishers document the payload, if anything, but not delivery, ordering, retention or failure behaviour.
- **Default settings left unexamined.** Retry limits, time-to-live and dead-lettering are left at defaults nobody reviewed.
- **Consumers built for the happy path.** No duplicate detection, no ordering check, no reconciliation.
- **Different platforms, different promises.** After mergers or platform additions, several event mechanisms coexist with different guarantees.
- **No owner for the event flow.** Each system has an owner; the event between them does not.

## Practical intervention

1. **List the business-critical events.** For each, record publisher, consumers, platform and the business action it triggers.
2. **Write the delivery contract.** State the guarantee (at most once, at least once or exactly once under stated conditions), ordering, retry schedule, time-to-live, dead-letter location and replay options. Use AsyncAPI or a simple template.
3. **Make consumers idempotent.** Use a unique event or business identifier and record what has been processed, so a repeat delivery does nothing.
4. **Handle ordering explicitly.** Include version numbers or timestamps and ignore updates older than the current state where order matters.
5. **Configure dead-lettering and watch it.** Undelivered events go somewhere visible, with a named owner. See [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).
6. **Reconcile periodically.** Compare source and target records for key flows to catch events that never arrived.
7. **Version the contract.** Treat changes to delivery settings like changes to the payload, as discussed in [message schemas that evolve without version control](/discovery/message-schemas-evolve-without-version-control/).

### Trade-offs

Exactly-once processing across systems is costly and has conditions. For most business events, at-least-once delivery with idempotent consumers and reconciliation is simpler and robust.

### An illustrative example

Illustrative: a Johannesburg retailer with about 90 staff connected its online store's webhooks to its warehouse system through a cloud event service after acquiring a smaller online brand. Occasional duplicate shipments and a few missing orders appeared. The business documented each event's delivery behaviour, added an order-identifier check in the warehouse consumer, enabled dead-lettering with alerts to the operations queue, and added a daily comparison of paid orders against picked orders.

## Diagnostic questions

- For your most important event, can anyone state whether it may be delivered twice or out of order?
- What happens to an event your consumer cannot accept for six hours?
- Is dead-lettering configured, and does anyone look at it?
- Would a duplicate "payment received" event create a duplicate action?
- Do you ever compare source and target records to find missing events?

## What good looks like

Every business-critical event has a written contract covering payload and delivery behaviour. Consumers are idempotent and handle ordering where it matters. Undelivered events land in a monitored location with an owner. Periodic reconciliation confirms that source and target agree. Changes to delivery settings are reviewed and communicated like any other interface change.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can document event contracts, make consumers safe against duplicates and ordering problems, configure dead-lettering and alerting, and set up reconciliation checks. Where event flows have multiplied after a merger, a [Digital Systems Audit](/services/digital-systems-audit/) maps them first.

## Method note

Platform behaviours are taken from current vendor documentation and change over time; check the settings of your own services. The example is illustrative rather than a client case. Event-driven integration is not inherently unreliable; the risk comes from consumers that assume guarantees nobody has stated.
