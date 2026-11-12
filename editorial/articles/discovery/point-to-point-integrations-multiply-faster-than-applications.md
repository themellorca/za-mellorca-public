---
hub: discovery
record_id: DISC-279
slug: point-to-point-integrations-multiply-faster-than-applications
title: Why your integrations multiply faster than your applications
description: Each new system gets its own direct connections to the others, until the links outnumber the applications many times over. Why point-to-point integration grows this way and how to bring it back under control.
lead: Each new system gets its own direct connections to the others, until the links outnumber the applications many times over. Why point-to-point integration grows this way and how to bring it back under control.
category: Integration & API Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: IT manager or head of systems
budget_owner: CFO or CEO
sources:
  - Publisher-Subscriber Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber
  - Message Broker - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBroker.html
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
related:
  - Why batch integrations leave your systems hours out of date | /discovery/batch-integrations-leave-systems-hours-out-of-date/
  - Why retry logic creates duplicate transactions at the receiving end | /discovery/retry-logic-creates-duplicate-transactions-at-the-receiving-end/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
summary: Each new system gets its own direct connections to the others, until the links outnumber the applications many times over. Why point-to-point integration grows this way and how to bring it back under control.
layout: plain
---
A distribution business runs eight applications: an ERP, a CRM, a warehouse system, an e-commerce store, a payroll package, a courier platform, a quoting tool and a customer portal. Each was connected when it arrived, directly to whichever systems it needed. Nobody planned an integration architecture; each project simply built what it needed. When the IT manager finally draws the picture, there are more than twenty separate connections, built by four different vendors and contractors, using a mix of APIs, scheduled file transfers and a spreadsheet macro. Customer data flows into the ERP from three different directions. Then the business agrees to acquire a competitor with six applications of its own.

This article looks at that operating condition: point-to-point integrations multiplying faster than the applications they connect. It is the natural result of connecting systems one project at a time, and it becomes urgent when a merger, acquisition or major system replacement forces the business to change many connections at once.

## The problem in plain language

A point-to-point integration connects one system directly to another. For two or three systems this is sensible and cheap. The trouble is arithmetic. If every system might need to talk to every other, the possible connections grow much faster than the systems: three systems can have three pairs, six can have fifteen, ten can have forty-five. Not every pair is connected in practice, but each new application tends to add several links, not one.

Each link has its own mapping, credentials, error handling, schedule and owner, or lack of one. Changing any system means finding and changing every link that touches it.

## What the buyer is actually trying to solve

IT managers and operations leads search for how to manage too many integrations, whether to use middleware or an integration platform, or how to integrate an acquired company's systems. Finance asks why every system change costs so much. The practical need is a way of connecting systems where adding or replacing an application means changing one connection, not a dozen, and where the business can see all its data flows in one place.

## Evidence and system mechanism

### Direct connections couple systems together

Microsoft's architecture guidance on the [publisher-subscriber pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber) describes the problem directly: when a sender communicates with its consumers, it must know the identity and endpoint of every consumer, deliver messages to each and manage failures individually, and adding or removing a consumer requires changes to the sender. Its solution is an intermediary, a message broker or event bus, that copies each message to every interested subscriber. Benefits it lists include decoupling subsystems, isolating faults so that one subscriber's failure does not affect others, and supporting integration between different platforms. It also lists the costs: ordering is not guaranteed, at-least-once delivery can create duplicates, schemas evolve independently and need versioning, and correlation IDs are needed to trace a message end to end.

### A central broker reduces the number of links

The [Message Broker pattern](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBroker.html) in the Enterprise Integration Patterns catalogue describes a central component that receives messages from many sources, determines the correct destination and routes each message accordingly. Each application connects to the broker rather than to every other application. The same catalogue discusses distributing broker work to avoid creating a single bottleneck.

### Translation belongs at the boundary

Point-to-point links often embed translation logic, such as one system's customer codes mapped to another's, inside each connection. Microsoft's [anti-corruption layer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) describes placing a translation layer between subsystems that do not share the same semantics, so one system's data model and quirks do not leak into another. It names gradual migrations, where new and legacy systems must coexist, as a key use case, which is exactly the position after an acquisition. It also notes that the layer adds latency and is another service to manage and monitor.

### How the options compare

| Approach | Works well when | Becomes a problem when |
| --- | --- | --- |
| Point-to-point | Few systems, stable, simple flows | Systems are added, replaced or merged often |
| Central broker or integration platform | Many systems share the same events or data | It has no owner or becomes a single point of failure |
| Translation layer at boundaries | Systems with different data models must coexist | Business rules are allowed to accumulate in it |

## Problem owner and why-now trigger

The IT manager or head of systems owns the integration estate. The COO usually owns the business processes that depend on it. The CFO or CEO typically funds a redesign, often as part of a larger programme.

The sharpest trigger is a merger or acquisition. Two sets of applications must exchange customers, products, orders and invoices, and connecting each pair directly would multiply links again. Replacing a core system such as the ERP is a similar trigger, because every link to the old system must be rebuilt. The hidden spend involved is described in [integration costs hidden inside application projects](/discovery/integration-costs-hidden-inside-application-projects/).

## Economic consequence

Each additional link adds build cost, ongoing maintenance and another place where failures can occur unnoticed. System changes become slow and expensive because every connection must be found, understood and retested. Incidents take longer to diagnose because data may have passed through several unmonitored hops. The general cost of systems that do not share data cleanly is covered in [the cost of business systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/).

## Root cause

- **Integration is funded per project.** Each application project builds the links it needs and nobody owns the whole.
- **No inventory of data flows.** The business cannot list its integrations, let alone see duplicates.
- **No agreed system of record.** Several links push the same data into a system because ownership was never decided; see [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).
- **Translation embedded in links.** Mappings are copied into each connection rather than held once.
- **Vendor-built connectors.** Each vendor connects its product its own way, with its own monitoring.

## Practical intervention

1. **Inventory every integration.** List each link, what data it carries, how, how often, who built it and who supports it.
2. **Decide systems of record.** For customers, products, orders and employees, name the system that owns each, and remove links that contradict it.
3. **Group flows by business event.** Identify events many systems care about, such as a new customer, an order placed or an invoice issued.
4. **Introduce a central integration layer for shared events.** Publish those events once to a broker or integration platform, and let systems subscribe, rather than wiring them to each other.
5. **Hold translation in one place.** Keep mappings between data models at the boundary, especially when connecting an acquired company's systems.
6. **Migrate gradually.** Move the busiest or most fragile links first, and retire each direct link once its replacement is proven.
7. **Give the layer an owner and monitoring.** Name who runs it, how failures are alerted and how changes are approved.

### Trade-offs

A central layer is another system to license, run and monitor, and badly run it becomes a single point of failure. For a small number of stable systems, well-documented point-to-point links may be the cheaper choice. Asynchronous messaging introduces delays and possible duplicates, so receiving systems must handle repeats safely.

### An illustrative example

*Illustrative:* a Gauteng wholesale distributor with about 250 staff, preparing to acquire a smaller competitor, inventoried its integrations and found more than twenty direct links among eight applications, three of them pushing customer data into the ERP. It named the ERP as the customer system of record, introduced an integration platform for customer, order and invoice events, and connected the acquired company's systems through a translation layer on that platform rather than directly to its own. Direct links were retired in stages over two quarters.

## Diagnostic questions

- Can you list every integration between your applications, with an owner for each?
- How many systems would need changes if you replaced your ERP or CRM?
- Is any data, such as customers or products, written into one system from several directions?
- Where are mappings between systems' codes and data models held?
- How would you connect an acquired company's systems to yours today?

## What good looks like

The business has a current inventory of its integrations and a named owner for each. Systems of record are agreed. Shared business events are published once and consumed by the systems that need them, translation is held at the boundaries, and adding, replacing or acquiring a system changes a small number of connections rather than many.

## Where Mellorca fits

Mellorca inventories integrations and data flows through a [digital systems audit](/services/digital-systems-audit/), designs the target integration approach as part of [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and builds and migrates connections through [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

Pattern and product references illustrate common mechanisms and are not recommendations. Connection counts in the arithmetic example are theoretical maximums, not observed figures. The example is illustrative and does not describe a specific client.
