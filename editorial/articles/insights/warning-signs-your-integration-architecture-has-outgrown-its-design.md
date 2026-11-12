---
hub: insights
record_id: INS-075
slug: warning-signs-your-integration-architecture-has-outgrown-its-design
title: How to Know When Your Integration Architecture Needs Redesigning
description: Seven practical warning signs that the way your systems are connected has outgrown its original design, and how to respond without a risky big-bang rebuild.
lead: Seven practical warning signs that the way your systems are connected has outgrown its original design, and how to respond without a risky big-bang rebuild.
category: Integration
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Integration
sources:
  - Strangler Fig Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Publisher-Subscriber Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber
  - REL04-BP02 Implement loosely coupled dependencies - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_prevent_interaction_failure_loosely_coupled_system.html
related:
  - How to Connect Systems Without Creating a Fragile Web of Dependencies | /insights/how-to-connect-systems-without-creating-a-fragile-web-of-dependencies/
  - Point-to-Point Integrations vs a More Maintainable Integration Architecture | /insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/
  - Why Integration Is Becoming More Important in the Age of AI Agents | /insights/why-ai-agents-raise-the-stakes-for-business-integration/
summary: Seven practical warning signs that the way your systems are connected has outgrown its original design, and how to respond without a risky big-bang rebuild.
layout: plain
---
Few businesses sit down and decide to redesign their integrations. The decision usually arrives sideways. A supplier changes its system and three things stop working. A new hire asks why the orders spreadsheet is emailed to the warehouse every morning and nobody can say. A simple request, such as adding a second payment provider, is quoted at six weeks. By then the arrangement is already costing money; it is just not labelled as a cost.

The difficulty is that a working integration looks fine from the outside. Data moves, invoices go out and nobody complains. The signs that the design has been outgrown are subtler, and they tend to show up in how hard change has become rather than in outright failure. This article sets out seven of them, followed by a way to respond that does not require stopping the business.

## Seven signs the design has been outgrown

### 1. Small changes need disproportionate effort

Adding a field to a customer record should be a small job. If it means touching the website, the accounting package, the CRM and a reporting spreadsheet, the systems are tightly coupled. AWS's reliability guidance describes the issue: in tightly coupled systems, a change to one component can force changes in the others that rely on it, whereas loose coupling means dependent components need to know only a versioned, published interface. When every change spreads, the design is telling you it has no stable boundaries.

### 2. One person holds the map

If the honest answer to "how does an order reach the warehouse?" is "ask Thandi", then the architecture exists mainly in someone's head. That is a continuity risk and a design smell at once. A sound integration can be explained on one page. Our article on [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/) explains why ownership matters here, and the discovery note on [point-to-point integrations multiplying faster than applications](/discovery/point-to-point-integrations-multiply-faster-than-applications/) shows how the map becomes unmanageable.

### 3. A failure in one place stops unrelated work

When the stock system goes offline for an hour and invoicing also stops, the two are bound together more closely than anyone intended. Microsoft's description of the publisher-subscriber pattern lists fault isolation as a benefit of putting an intermediary between a sender and its receivers: a failing subscriber does not affect the publisher or other subscribers, and the broker holds messages until the recovered subscriber is ready. If your systems cannot tolerate each other's downtime, they are coupled too directly.

### 4. The same data is fixed in several places

Staff correct a delivery address in the order system, then again in the courier portal and again in the CRM. Each fix is a manual integration. If this happens regularly, the connections are either missing or running in the wrong direction. [Deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) is usually the first design step in putting this right.

### 5. Workarounds have become permanent

Spreadsheets emailed on a schedule, files dropped in shared folders and rekeying "just until the integration is done" are the visible edge of an architecture that cannot carry the load. Count them. A handful is normal. If every department has several, the integration layer is not doing its job.

### 6. New systems are bolted on rather than connected

Each new application arrives with its own custom link to whichever system it most needs. The first few are cheap. Over time, the cost of the next one rises because every new system must be built to understand the quirks of several existing ones. Microsoft's pattern guidance describes this directly: when a sender talks to each consumer directly, it must know the identity and endpoint of every one of them, and adding or removing a consumer requires changes to the sender.

### 7. Nobody can say whether it worked

If the only way to find a missing order is to notice that the customer phoned, there is no monitoring worth the name. A design that cannot report on itself will fail silently. See [why integrations break after they seem to be working](/insights/why-integrations-break-after-they-seem-to-be-working/) for how this plays out.

## A quick check with your team

You do not need a formal assessment to decide how serious the situation is. Put the seven signs to your team and ask each person which they have personally experienced in the past six months. Then look at the pattern rather than the count.

- If the signs cluster around **one system**, that system's connections probably need attention, not the whole design.
- If they cluster around **one kind of change**, such as adding suppliers or products, the way data is mapped is likely too rigid.
- If they appear **everywhere**, the overall structure has probably outgrown itself, and a staged redesign is justified.

An illustrative example: a Cape Town retailer with an online store, a point-of-sale system, an accounting package and a courier portal found that every promotion required changes to price lists in three places. The pattern pointed to one thing, not to every integration. Prices had no single owner. Fixing that one boundary removed most of the pain without touching the rest.

## Respond in stages, not in one rebuild

The most common mistake after recognising these signs is to commission a complete rebuild. Big rebuilds carry their own risks: long periods with nothing delivered, and a cutover on which the whole business depends. Microsoft's Strangler Fig pattern describes the alternative. Rather than replacing a complex system in one move, you introduce a layer in front of it and move functions across one at a time, until the old arrangement can be switched off. Customers, and in a business setting staff, continue to use the same interface and need not be aware that a migration is under way.

Applied to integrations, a staged approach might look like this.

1. **Inventory what exists.** List every connection, what it carries, who owns it and how often it has failed. Include the manual ones.
2. **Choose the connection that hurts most.** Pick one with high change frequency or high failure impact. Do not start with the easiest.
3. **Put a translation layer in front of the awkward system.** Microsoft's Anti-corruption Layer pattern describes a facade or adapter that translates between subsystems that do not share the same meaning of their data, so that one system can stay unchanged without forcing its quirks onto the other. Its guidance also warns that the layer adds latency and an extra component to maintain, and that it should concentrate on translation rather than business rules.
4. **Introduce a shared channel for events that many systems care about.** Order created, payment received and customer updated are typical examples. The publisher-subscriber approach lets new consumers be added without changing the sender. The same guidance cautions that it may be unnecessary when only a few consumers need quite different information, so match the tool to the size of the problem.
5. **Move one flow at a time and retire the old route.** Run old and new side by side for a period, compare results and only then switch off the original. Leaving both running indefinitely is how duplication starts.
6. **Add monitoring as you go.** Each migrated flow should report success and failure to a named person.

## When a rebuild really is the right answer

Sometimes the staged approach is not suitable. Microsoft notes that the Strangler Fig pattern is a poor fit when requests to the old system cannot be intercepted, when you cannot change the old system's source code, or when the system is small enough that replacing it outright is simple. Similarly, if a key platform is reaching the end of its supported life, replacing it may be the only sensible course. The article on [what keep, fix, integrate, automate, replace or remove means in practice](/insights/what-keep-fix-integrate-automate-replace-or-remove-means-in-practice/) helps you decide which of those actions applies to each system.

## Questions to ask before approving the work

- Which of the seven signs are we trying to remove, and how will we know they are gone?
- Who will own each connection after the change?
- What happens to work in flight on the day a flow is moved?
- Can we reverse the change if it goes wrong?
- Are we choosing a tool because it fits the problem, or because it is fashionable? [When an integration platform is worth buying and when it is not](/insights/when-an-integration-platform-is-worth-buying-and-when-it-is-not/) covers that question.

Redesign does not have to be dramatic. The businesses that handle it well treat integration as something that is reviewed at regular intervals, like a vehicle service, rather than something that is ignored until it breaks down on the highway. If three or more of the signs above sound familiar, the review is already due.
