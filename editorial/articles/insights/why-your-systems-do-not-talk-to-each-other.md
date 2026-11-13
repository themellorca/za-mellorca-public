---
hub: insights
record_id: INS-051
slug: why-your-systems-do-not-talk-to-each-other
title: Why your systems do not talk to each other
description: Why disconnected business systems create duplicate work, inconsistent information and fragile handoffs—and what a better integration model looks like.
lead: Disconnected systems are rarely just a technical inconvenience. They create repeated entry, reconciliation, slow handoffs and conflicting versions of the same business event.
category: Digital Infrastructure
published_date: 2026-09-07
updated_date: 2026-09-07
eyebrow: Article
page_title: Why Your Systems Do Not Talk to Each Other | Mellorca
tags:
  - Integration
  - Systems Architecture
  - Data Ownership
side_title: Topics
sources:
  - Event-Driven Architecture Style - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
  - Messaging - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html
closing_title: Improve the operating system, not just the connection
closing_text: [Explore our solutions](/solutions/) or [start a conversation](/contact/).
related:
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
  - What to document before connecting two business platforms | /insights/what-to-document-before-connecting-two-business-platforms/
  - Why AI makes data quality more important, not less | /insights/why-ai-makes-data-quality-more-important-not-less/
  - What should a COO understand about systems architecture? | /insights/what-a-coo-needs-to-know-about-systems-architecture/
---
A business can own capable applications and still operate badly between them. The CRM may know that a deal closed, finance may wait for somebody to re-enter the customer, operations may receive a spreadsheet, and service may not know the customer exists until the first request arrives.

Disconnected systems are rarely just a technical inconvenience. They create repeated entry, reconciliation, slow handoffs and conflicting versions of the same business event. This article looks at why systems end up disconnected, what that costs, how to diagnose it and what a better integration model looks like.

## Why systems end up disconnected

Few businesses design a disconnected estate on purpose. It accumulates through ordinary decisions:

- **Tools are bought one problem at a time.** Each team selects software that solves its own need, without a shared view of how information should move between them.
- **Integration is treated as optional.** It is often scoped out of an implementation to save time or budget, with the intention of adding it later.
- **Each system has its own model.** A "customer" in the CRM, a "client" in billing and an "account" in the support tool may not mean exactly the same thing, so connecting them requires decisions, not just wiring.
- **Nobody owns the space between systems.** Application owners look after their own platforms. The flows between them belong to nobody.

## The cost sits between the applications

When systems do not exchange the right information at the right point in the workflow, people become the integration layer. They copy records, chase confirmation, reconcile mismatches and remember which screen must be updated next. That work scales with transaction volume and creates more places for information to diverge.

The cost appears in several forms: staff time spent on re-entry, delays while information waits to be moved, errors introduced during copying, and management reports that disagree because each was built from a different system. Our piece on [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/) explores those costs in more detail.

*Illustrative example (hypothetical, not a client case):* a customer updates their billing address with the account manager, who records it in the CRM. Finance never sees the change, so the next invoice goes to the old address and payment is delayed. Each system is correct by its own standards. The failure is in the gap between them.

## Warning signs

- The same customer, order or product is typed into more than one system.
- Teams maintain spreadsheets to bridge two applications.
- People ask "which number is right?" in management meetings.
- Customers are asked for information the business already holds.
- Changes made in one system are discovered in another days later.
- Existing integrations were built by someone who has since left, and nobody is sure what they do.

## Integration starts with ownership

Connecting two APIs is not enough. A useful integration design defines which system owns each important fact, which event should trigger movement, what the receiving system may change, and what happens when the transfer fails.

Microsoft's architecture guidance on [event-driven architecture](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven) illustrates why ownership matters. It notes that when an event carries all of a record's attributes, consumers avoid extra lookups, but this can lead to data consistency problems because of multiple systems of record, especially after updates. Sending only keys and letting consumers fetch current data from a single system of record gives better consistency, at the cost of more queries. Neither option is right in every case. The point is that the choice is a business design decision about ownership, not a purely technical one.

## Integration approaches and their trade-offs

[IBM describes a range of data integration approaches](https://www.ibm.com/think/topics/data-integration), including API-based integration between applications, batch extract-transform-load methods, real-time streaming and change data capture, and data virtualisation that provides a unified view without moving data. In practical terms, businesses tend to choose between:

- **Direct point-to-point connections.** Quick to build for two systems, but they multiply as systems are added, and each one becomes a separate dependency to maintain.
- **Scheduled batch synchronisation.** Simple and robust for reporting and non-urgent updates, but information is only as current as the last run.
- **Event-driven integration.** Systems publish business events, such as "order confirmed", that other systems can act on. Microsoft's guidance lists benefits such as decoupling producers from consumers and avoiding point-to-point integrations, but also challenges: eventual consistency, error handling, data loss if events are not persisted, and harder observability across decoupled components.
- **An integration platform.** Central tooling that hosts and monitors connections. It can bring consistency, but adds another system to own and pay for.

Microsoft's guidance also cautions that event-driven architecture may not suit simple request-response workflows or teams without experience operating distributed asynchronous systems. More sophistication is not automatically better. The Enterprise Integration Patterns catalogue describes [messaging](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html) as a way to exchange data frequently, immediately, reliably and asynchronously, with the sender and receiver not needing to be running at the same time.

## A practical diagnostic

- Which system is authoritative for the customer, order, invoice or service record?
- What business event should initiate the handoff?
- Which fields genuinely need to move?
- How will duplicates, retries and failed transfers be handled?
- Who owns the integration after launch?

To apply these questions, take one core flow, such as lead to cash, and draw it as a simple diagram showing each system and each handoff. Mark which handoffs are automated, which are manual and which are unclear. Then answer the five questions for each manual or unclear handoff. The result is a short, ranked list of integration decisions rather than a vague ambition to "connect everything". Related reading: [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) and [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).

## Trade-offs to keep in view

- **Every connection is a dependency.** Integrations break when vendors change APIs or fields are renamed. Each one needs an owner and monitoring. See [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).
- **Not everything should be synchronised.** Moving every field everywhere increases complexity and the chance of conflicting updates. Move what the workflow needs.
- **Integration will not fix an unclear process.** If teams disagree about when a customer becomes "active", automating the handoff will simply move the disagreement faster.
- **Sometimes consolidation beats integration.** Two tools doing overlapping jobs may be better replaced by one than connected.

## What better looks like

Well-connected operations reduce re-entry without creating invisible dependencies. Information moves because the workflow requires it, failure states are observable, and each important record has clear ownership. Teams work from consistent data, management reports agree with each other, and adding a new system means connecting it to a known architecture rather than adding another one-off link. Designing that architecture is the purpose of a [Digital Systems Architecture & Roadmap](/services/digital-systems-architecture-roadmap/), and building it is the focus of [Systems Implementation & Integration](/services/systems-implementation-integration/).
