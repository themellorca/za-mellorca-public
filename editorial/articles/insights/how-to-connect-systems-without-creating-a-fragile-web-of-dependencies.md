---
hub: insights
record_id: INS-063
slug: how-to-connect-systems-without-creating-a-fragile-web-of-dependencies
title: How to connect systems without creating a fragile web of dependencies
description: Connected systems make a business brittle when every failure passes straight through. Six principles for useful integrations that contain outages.
lead: Connected systems can make a business brittle when every failure passes straight through. Six design principles that keep integrations useful while containing outages.
category: Integration
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration
sources:
  - REL04-BP02 Implement loosely coupled dependencies - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_prevent_interaction_failure_loosely_coupled_system.html
  - Queue-Based Load Leveling Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling
  - Circuit Breaker Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
related:
  - Why integrations break after they seem to be working | /insights/why-integrations-break-after-they-seem-to-be-working/
  - Point-to-point integrations vs a more maintainable integration architecture | /insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/
  - Why integration projects fail at the handoffs | /insights/why-integration-projects-fail-at-the-handoffs/
summary: Connected systems can make a business brittle when every failure passes straight through. Six design principles that keep integrations useful while containing outages.
layout: plain
---
Connecting business systems is meant to make the business more reliable. Information moves without retyping, and people stop chasing each other for updates. Yet many businesses find that the more they connect, the more fragile they become. A courier platform has an outage and invoicing stops. A supplier portal is slow and the sales team cannot save quotes. One system's maintenance window becomes everybody's problem.

This is the fragile web: a set of connections in which each system depends on several others being available, fast and unchanged at the same moment. It is not caused by connecting too much. It is caused by connecting in ways that pass every failure straight through to the next system. This article sets out practical design principles that keep connections useful without making the whole operation brittle.

> A healthy connection lets one system carry on when another is having a bad day. A fragile one makes them share every bad day.
>

## How a dependency web forms

Fragility usually comes from three habits. First, systems call each other directly and wait for an answer before they can continue. Second, systems rely on each other's internal structures, such as field names, status codes or even shared databases. Third, nobody keeps a record of what depends on what, so the chain of dependencies is discovered only when it breaks.

AWS's reliability guidance describes the consequence of tight coupling plainly: changes to one component can force changes in the components that rely on it. It lists directly invoking APIs between tiers with no failover or asynchronous handling, and sharing data through shared databases, as common anti-patterns. These are exactly the habits that build a fragile web in a growing business.

## Six principles for resilient connections

### 1. Do not make a process wait if it does not have to

Many business flows do not need an immediate answer. A new order must reach the accounting package, but the customer does not need to wait while it does. Placing a queue between the two systems lets the sending system record the work and move on. Microsoft's queue-based load-levelling pattern explains that the queue decouples tasks from the service they call, so that the application can keep posting messages even when the receiving service is unavailable or not currently processing them.

The practical test is simple: for each connection, ask whether the person or process on the sending side genuinely needs the answer before continuing. If not, the connection should not be synchronous.

### 2. Fail fast when a dependency is clearly down

Where a direct call is unavoidable, the worst behaviour is to keep trying and waiting. Microsoft's [circuit breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker) describes how blocked requests can tie up resources until time-outs expire, exhausting capacity and causing failures in unrelated parts of a system. A circuit breaker detects repeated failures and stops calling the failing service for a period, returning an immediate response instead, then tests carefully whether the service has recovered.

Business owners do not need to implement this themselves, but they should ask vendors and developers a direct question: what does our system do when the other system stops responding? "It waits" is the fragile answer.

### 3. Decide in advance what "degraded but working" looks like

If the courier platform is down, can orders still be accepted and labels printed later? If the credit-check service is slow, can a quote be saved with a pending flag? Each important dependency should have an agreed fallback, even if it is manual. This is the business side of failure design, discussed in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

### 4. Translate at the edge, not throughout

When one system adopts another system's field names, codes and quirks, it becomes tied to them. Microsoft's anti-corruption layer pattern describes placing a translation layer between subsystems that do not share the same meanings, so that one system can stay unchanged without compromising the design of the other. In smaller businesses, this may simply mean keeping all the mapping for a connection in one documented place, rather than scattering it through workflows, reports and spreadsheets.

The benefit appears when a vendor changes a format. With translation at the edge, one mapping changes. Without it, every workflow that used the old format breaks, a pattern described in [why bots fail when upstream data formats change](/discovery/why-bots-fail-when-upstream-data-formats-change/).

### 5. Never let two systems share a database

Connecting two applications by letting one read or write the other's database directly is tempting, because it is quick. It is also one of the tightest forms of coupling there is. Any upgrade, schema change or performance problem in one system immediately affects the other. Systems should exchange information through their published interfaces, even if that takes longer to set up.

### 6. Keep a living map of dependencies

Resilience depends on knowing which systems rely on which. A one-page map listing each connection, its direction, whether it is real-time or queued, its owner and its fallback is enough for most small and mid-sized businesses. Without it, the business learns its dependencies through outages, as described in [when nobody knows which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/).

## Fragile and resilient habits compared

| Fragile habit | Resilient alternative |
| --- | --- |
| Every connection waits for an immediate answer | Queue work that does not need an immediate answer |
| Keep retrying a service that is clearly down | Stop calling it for a period and fall back |
| No plan for when a dependency fails | An agreed degraded mode for each critical dependency |
| Other systems' codes used everywhere | Translation kept in one place per connection |
| Direct database access between applications | Exchange through published interfaces |
| Dependencies known only to the builder | A maintained one-page dependency map |

## Queues need watching too

Buffering work is not the same as forgetting about it. Microsoft's guidance notes that most queue services deliver messages at least once, so receivers must be designed to handle the same message twice without creating duplicate records or repeat charges. It also recommends moving messages that cannot be processed to a separate holding area, and monitoring how many are waiting there. A queue that nobody watches simply delays the discovery of a problem. See [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).

## An illustrative example

Consider an illustrative Western Cape wine and spirits wholesaler with about sixty staff. Its order-entry screen checked stock in the ERP, validated delivery addresses with a mapping service, requested a courier quote and checked the customer's credit limit, all before the order could be saved. When any of the four services was slow, sales staff stared at a spinning icon. When the courier platform had an afternoon outage, no orders could be captured at all.

The business did not remove any of the connections. It changed how they behaved. Stock and credit checks stayed immediate, because staff needed the answers to make a promise to the customer. Address validation and courier quotes were moved to a queue that ran after the order was saved, with exceptions shown to the dispatch team. If the courier service failed, orders were flagged for manual booking rather than blocked. The order screen stopped depending on external services it did not need in the moment, and an outage elsewhere became an inconvenience rather than a stoppage.

## Where to start

1. List the connections behind your most important process, such as order to cash.
2. Mark each as "must answer now" or "can happen shortly after".
3. For every "must answer now" dependency, agree what staff do if it is unavailable.
4. Move "can happen shortly after" connections to a queued or scheduled pattern, with exceptions sent to a team.
5. Write down where each connection's mapping lives and who owns it.

The goal is not fewer connections. It is connections that contain failures rather than spread them. A good first step is working out [which systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/), and then asking of each one how far its bad day can travel. As [why a small technical failure can stop the whole business](/patterns/why-does-a-small-technical-failure-stop-the-whole-business/) shows, that distance is a design choice.
