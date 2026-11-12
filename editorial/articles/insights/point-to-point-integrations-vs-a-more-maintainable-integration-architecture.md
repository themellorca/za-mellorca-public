---
hub: insights
record_id: INS-058
slug: point-to-point-integrations-vs-a-more-maintainable-integration-architecture
title: Point-to-Point Integrations vs a More Maintainable Integration Architecture
description: Direct connections between systems are quick to build but multiply fast. How point-to-point compares with a central, loosely coupled approach, and when to switch.
lead: Direct connections between systems are quick to build but multiply fast. How point-to-point compares with a central, loosely coupled approach, and when to switch.
category: Integration
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration
sources:
  - What Is iPaaS (Integration Platform as a Service)? - IBM | https://www.ibm.com/think/topics/ipaas
  - Publisher-Subscriber Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber
  - REL04-BP02 Implement loosely coupled dependencies - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_prevent_interaction_failure_loosely_coupled_system.html
related:
  - How to Connect Systems Without Creating a Fragile Web of Dependencies | /insights/how-to-connect-systems-without-creating-a-fragile-web-of-dependencies/
  - Why Integration Projects Fail at the Handoffs | /insights/why-integration-projects-fail-at-the-handoffs/
  - Why Integrations Break After They Seem to Be Working | /insights/why-integrations-break-after-they-seem-to-be-working/
summary: Direct connections between systems are quick to build but multiply fast. How point-to-point compares with a central, loosely coupled approach, and when to switch.
layout: plain
---
Most businesses do not design their integration architecture. They accumulate it. The online store is connected to the accounting package because invoices needed to be raised. The CRM is connected to the email marketing tool because a campaign was due. The payroll system gets a spreadsheet export because that was quickest. Each connection made sense on the day it was built, and each was built directly between the two systems involved.

That direct approach is called point-to-point integration. It is not wrong. For two or three systems it is often the right choice. The problem is that it scales badly, and most growing businesses pass the point where it stops being sensible without noticing. This article compares point-to-point connections with a more maintainable structure, and sets out how to tell which one your business needs.

## What point-to-point integration is

In a point-to-point design, each system that needs information from another is connected to it directly. The store calls the accounting package. The CRM calls the marketing tool. If the warehouse system also needs orders, another connection is built from the store to the warehouse. Each connection contains its own mapping of fields, its own error handling and its own credentials.

IBM's explanation of integration platforms summarises the main drawback: with point-to-point integration, organisations must build new custom connectors each time a service is added, and applications can become tightly coupled. Tight coupling means that a change to one system forces changes to every system connected to it.

## Why it becomes hard to maintain

The arithmetic is unforgiving. If every system needs to talk to every other system, the number of possible direct connections grows much faster than the number of systems. Three systems can need up to three connections. Six systems can need up to fifteen. Ten can need up to forty-five. Few businesses connect everything to everything, but even partial growth produces a web that nobody fully understands.

Microsoft's Azure Architecture Center describes the same problem from a design perspective. When a sender communicates directly with its consumers, it must know every consumer's identity and endpoint, deliver messages to each one and manage failures individually, and adding or removing a consumer requires changes to the sender.

In everyday business terms, the symptoms look like this:

- Replacing one system means rebuilding several connections, so replacement keeps being postponed.
- The same customer or product mapping is written several times, slightly differently each time.
- No one can say with confidence which systems will be affected by a change.
- Errors are logged in several different places, if they are logged at all.
- Knowledge of how the connections work sits with whoever built each one.

The last point is where undocumented mappings become a real business risk, as described in [why undocumented interface mappings make change risky](/discovery/why-undocumented-interface-mappings-make-change-risky/).

## What a more maintainable architecture looks like

A maintainable integration architecture does not mean an expensive enterprise platform. It means a small number of structural decisions that stop every new connection from adding to the tangle.

### A central point of exchange

Instead of every system connecting to every other, systems connect to one intermediary. That might be an integration platform, a message broker or, in a smaller business, a well-governed automation tool. Each system has one connection to maintain. The intermediary handles routing, translation and error reporting.

### Events rather than direct calls, where timing allows

Microsoft's publisher-subscriber pattern describes systems announcing that something has happened, such as "order placed", without knowing who needs to know. Interested systems subscribe. Microsoft lists the benefits as decoupling, fault isolation and the ability to add consumers without changing the sender, with the broker holding messages until a recovering subscriber is ready.

AWS's reliability guidance makes a similar recommendation, describing loose coupling as a way to isolate a component's behaviour from the components that depend on it, and listing direct API calls between tiers with no failover or asynchronous handling as a common anti-pattern.

### One agreed definition per business object

The intermediary is most valuable when each core record, such as customer, product, order or invoice, has one agreed shape and one owning system. Other systems translate to and from that shape at their edge. This avoids five different versions of "customer" across five connections. Deciding ownership is covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

### Standards for how connections are built

Naming, credential handling, error alerts and documentation should follow the same rules for every connection. Without them, a central tool simply becomes a central mess, a pattern described in [automation platforms that proliferate without architectural standards](/discovery/automation-platforms-proliferate-without-architectural-standards/).

## A side-by-side comparison

| Consideration | Point-to-point | Central, loosely coupled |
| --- | --- | --- |
| Speed of first connection | Fast | Slower; the structure must be set up first |
| Cost at two or three systems | Low | Often higher than needed |
| Adding a new system | New connections to each system it needs | One new connection to the hub |
| Replacing a system | Rebuild every connection it had | Rebuild one connection and its translation |
| Visibility of failures | Scattered across tools and inboxes | One place to monitor |
| Real-time responses | Natural fit | Possible, but events add some delay |
| Single point of failure | Failures are local | The hub itself must be reliable and owned |

## The trade-offs are real

A central approach is not free. Microsoft's own guidance notes that publisher-subscriber messaging may not suit cases with only a few consumers needing very different information, where a broker adds complexity without benefit, or where an immediate response is required. Messages may also arrive out of order or more than once, so receiving systems must be designed to cope.

The hub also becomes important infrastructure. If it is down, many flows stop at once. It needs an owner, monitoring and a support arrangement, just as the accounting package does.

For these reasons, the sensible question is not "point-to-point or platform?" but "at what point does the cost of the web exceed the cost of the structure?"

## An illustrative example

Consider an illustrative Gauteng manufacturer of packaging with around ninety staff. Over five years it connected its ERP, a CRM, an e-commerce portal for trade customers, a courier booking tool, a payroll system and a business intelligence dashboard. Most connections were direct, built by three different contractors.

When the business decided to replace the CRM, the scoping exercise found that the old CRM had direct connections to four other systems, each mapping customers differently. The replacement estimate was dominated not by the new CRM but by rebuilding and retesting those connections.

Rather than rebuild them point-to-point again, the business used the replacement as the moment to introduce a modest integration platform. The ERP became the owner of customer accounts and published changes. The new CRM, the portal and the dashboard subscribed. The courier tool remained a direct connection to the ERP, because it was simple, needed an immediate response and had no other consumers. The result was not a perfect architecture, but the next system change touched one connection instead of four.

## How to decide for your business

1. Draw every current connection between systems, including scheduled exports and spreadsheet transfers. If it is hard to draw, that is useful evidence in itself.
2. Count how many connections each system has. A system with three or more is a candidate for a hub.
3. Identify which records are passed through several connections. Customer, product and order records are the usual culprits.
4. Note which connections need an immediate answer, such as a stock check during checkout. These may stay direct.
5. Plan to move towards a central approach at natural change points, such as a system replacement, rather than as a separate big-bang project.

Point-to-point integration is a reasonable starting point. It becomes a liability only when it is the default for every new need. A short look at [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/) and at [why your systems do not talk to each other](/insights/why-your-systems-do-not-talk-to-each-other/) can help frame the decision before the next connection is added.
