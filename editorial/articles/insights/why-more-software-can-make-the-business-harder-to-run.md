---
hub: insights
record_id: INS-027
slug: why-more-software-can-make-the-business-harder-to-run
title: Why more software can make the business harder to run
description: Each new application can add work as well as remove it. How software sprawl and integration debt build up, and how disciplined architecture keeps them in check.
lead: Each new application can add work as well as remove it. How software sprawl and integration debt build up, and how disciplined architecture keeps them in check.
category: Technology & Operations
published_date: 2026-10-01
updated_date: 2026-10-01
eyebrow: Technology & Operations
sources:
  - CIOs take aim at SaaS sprawl | https://www.cio.com/article/1313537/cios-take-aim-at-saas-sprawl.html
  - Salesforce Research Reveals Organizations Today Use Over 1,000 Applications - But 70% Remain Disconnected from One Another and the Core Busi | https://www.salesforce.com/news/stories/connectivity-report-2023/
  - Application Integration vs. Data Integration - IBM | https://www.ibm.com/think/topics/application-integration-vs-data-integration
related:
  - Before you buy another tool, ask these questions | /insights/before-you-buy-another-tool-ask-these-questions/
  - How to know when you have too many business apps | /insights/how-to-know-when-you-have-too-many-business-apps/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
summary: Each new application can add work as well as remove it. How software sprawl and integration debt build up, and how disciplined architecture keeps them in check.
layout: plain
---
Software sprawl is not a universal cure; it often becomes a source of complexity that raises coordination costs, fragments data and creates brittle integrations. As organisations add tools, the interfaces between systems multiply, making governance harder and end-user experiences inconsistent. Rather than chasing every new capability, leaders benefit from a disciplined architecture that emphasises standard interfaces, shared data models and lean integrations.

## How sprawl happens

Very few businesses decide to run too many systems. Sprawl accumulates through a series of individually reasonable decisions. A team needs a capability the core platform lacks, so it buys a specialist tool. A subscription is cheap enough to sit on a credit card. An acquisition brings its own stack. A trial becomes permanent because people started using it. Each purchase solves a local problem; nobody is responsible for the combined effect.

The pattern is widely reported. A [CIO.com report on SaaS sprawl](https://www.cio.com/article/1313537/cios-take-aim-at-saas-sprawl.html) describes how best-of-breed purchasing, decentralised buying by business units and mergers have left many organisations with large numbers of applications that do not talk to each other, and with integration and vendor-management costs that can offset the savings the tools promised. At enterprise scale, MuleSoft’s 2023 Connectivity Benchmark Report, [summarised by Salesforce](https://www.salesforce.com/news/stories/connectivity-report-2023/), found that the surveyed organisations used an average of 1,061 applications, with only 29% of them integrated. That survey covered IT leaders in organisations with more than 1,000 employees, so smaller firms will see different numbers, but the shape of the problem is familiar at any size.

## Why more tools raise the cost of running the business

The mechanism is combinatorial. Each new system must exchange data with some of the others, and each exchange is a point where definitions can differ, data can drift and a change in one tool can break another. Five systems with a few connections are manageable. Twenty systems with ad hoc connections become a web nobody fully understands.

The costs rarely appear on the software invoice. They appear as people re-entering the same customer in three places, managers reconciling reports that disagree, new starters learning several tools to do one job, and support time spent working out which system holds the correct version of a record. Related reading: [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/).

## What the problem looks like in practice

Teams report duplicated data entry, failed end-to-end workflows and higher training demands when tool ecosystems grow without cohesion. The operational burden shifts from solving problems with a single system to managing multiple interdependent components, each with its own quirks. The outcome is slower decision cycles and a reduced capacity to adapt to change.

*Illustrative example:* a growing firm uses one tool for enquiries, another for proposals, a third for project delivery, a fourth for time tracking and an accounting package for invoicing. Each was a sensible choice. But a client’s name, contact and billing terms now exist in five places, and a change of billing contact has to be made in each by hand. When an invoice goes to the wrong person, the cause is not any one tool. It is the absence of a decision about which system owns customer data.

## Warning signs

- Nobody can produce a current list of every system the business pays for and who owns each one.
- The same record is maintained in several tools, with no agreed master.
- Different reports give different answers to the same question.
- Integrations were built by someone who has since left, and nobody is sure what they do.
- New tools are adopted without anyone checking whether an existing one already covers the need.
- Training a new starter means teaching them many systems for one role.

## A healthy alternative

Adopt a minimal viable ecosystem approach: define core data models, enforce data quality at source, and invest in governance that curates integrations as purposeful connections rather than accidental ones. This reduces delay, increases reliability and preserves the ability to scale when real needs emerge.

The core idea is that each important type of data should have one system that owns it, and other systems should read from that owner rather than keeping their own copies. See [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) and [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).

## A practical diagnostic

1. For each critical process, which systems does work pass through from start to finish?
2. For each key entity, such as customer, order, project or invoice, which system is the source of truth?
3. Which integrations exist, how do they work, and who is accountable for each?
4. Which tools overlap substantially in function?
5. When was each tool last reviewed against the need it was bought for?
6. Who must approve the purchase of a new system, and what do they check?

## Actionable steps

1. Inventory systems that participate in critical end-to-end processes and map data flows between them.
2. Standardise data definitions and ensure a single source of truth for key metrics.
3. Consolidate or decommission redundant tools and formalise a technology-change approval process.
4. Measure impact with outcome-based metrics rather than tool-centred counts.

Decommissioning deserves particular care. Removing a tool means migrating its data, retraining its users and redirecting any integrations that depend on it. See [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/).

## Trade-offs

Consolidation is not automatically better. A single broad platform can be weaker than a specialist tool for a particular team, and forcing everyone onto it can lower the quality of their work. Central approval can slow teams down and push purchasing out of sight rather than stopping it. The aim is not the fewest possible tools; it is a set of tools where each has a clear purpose, owns specific data and connects deliberately to the rest. Sometimes that means keeping a specialist system and investing properly in its integration.

## What better looks like

The business can name every system it runs, why it exists and who owns it. Each key type of data has one authoritative home. Integrations are documented and monitored. New purchases are checked against what already exists. And reports agree, because they draw from the same definitions. Where this picture is unclear, a [Digital Systems Audit](/services/digital-systems-audit/) maps what is actually in place, and [architecture and roadmap](/services/digital-systems-architecture-roadmap/) work sets out what to keep, connect or retire. For the wider argument, see [piling on more software is not digital maturity](/insights/piling-on-more-software-is-not-digital-maturity/).
