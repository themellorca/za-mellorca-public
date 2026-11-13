---
hub: insights
record_id: INS-062
slug: why-integration-projects-fail-at-the-handoffs
title: Why integration projects fail at the handoffs
description: Integration projects seldom fail on technology. They fail in the gaps between business and developer, vendor and vendor, project and operations.
lead: Integration projects seldom fail on technology. They fail in the gaps between business and developer, vendor and vendor, project and operations. How to close each handoff.
category: Integration
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration
sources:
  - Aligning responsibilities across teams - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/organize/raci-alignment
  - Operational Readiness Reviews (ORR) - Operational Readiness Reviews (ORR) | https://docs.aws.amazon.com/wellarchitected/latest/operational-readiness-reviews/wa-operational-readiness-reviews.html
  - Google SRE - Deployment Strategies for Product Launches | https://sre.google/sre-book/reliable-product-launches/
  - How the live phase works | https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works
related:
  - Point-to-point integrations vs a more maintainable integration architecture | /insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/
  - Why integrations break after they seem to be working | /insights/why-integrations-break-after-they-seem-to-be-working/
  - How to connect systems without creating a fragile web of dependencies | /insights/how-to-connect-systems-without-creating-a-fragile-web-of-dependencies/
summary: Integration projects seldom fail on technology. They fail in the gaps between business and developer, vendor and vendor, project and operations. How to close each handoff.
layout: plain
---
Integration projects rarely fail because the technology cannot do the job. Modern business applications almost all offer APIs, connectors and import tools. When an integration project runs late, over budget or into a messy go-live, the cause is more often found in the gaps between the people and organisations involved: the point where one party's responsibility ends and another's is assumed to begin.

These gaps are handoffs. Every integration project has several of them, and each is a place where an assumption can pass unchecked from one side to the other. Mellorca has written about [handoffs in day-to-day operations](/insights/broken-handoffs-are-systems-problems/). This article looks specifically at the handoffs inside integration projects, why they fail, and how to close them before they become expensive.

> In an integration project, the most dangerous phrase is "I thought they were doing that."
>

## Why integration projects are full of handoffs

An integration connects at least two systems, and each system usually comes with its own vendor, its own implementation partner and its own internal users. Add the business owner who wants the outcome, the finance team that will rely on the data and the person who will support the connection after launch, and even a modest project involves several parties who do not report to each other.

Each party sees its own piece clearly. The CRM partner configures the CRM. The accounting partner configures the accounting package. The connection between them can easily belong to nobody in particular, a pattern described in [integration costs hidden inside application projects](/discovery/integration-costs-hidden-inside-application-projects/).

## The five handoffs where projects break

### 1. From business need to technical specification

A manager asks for "orders to flow into accounting". The developer hears a field-mapping task. Nobody discusses partial deliveries, credit notes, cancelled orders, foreign currency or what should happen when a customer does not yet exist in the accounting system. The first version works for straightforward orders and fails on everything else.

The fix is to hand over scenarios, not just a goal. A short list of real examples, including the awkward ones, gives the technical team something concrete to build and test against. The broader checklist in [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/) is a useful starting point.

### 2. Between vendors

Where two vendors each own one side of the connection, each tends to assume the other will handle the difficult parts: data transformation, error handling, duplicate checks. During testing, problems are passed back and forth. After go-live, incidents are too. This is why [integration incidents can require several vendors to diagnose](/discovery/why-integration-incidents-require-several-vendors-to-diagnose/).

A simple responsibility matrix helps. Microsoft's Cloud Adoption Framework describes [aligning responsibilities across teams](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/organize/raci-alignment) with a matrix that names the one team accountable for each function, the teams responsible for outcomes, and those to be consulted or informed. The same structure works for an integration project: for each element, such as mapping, error alerts, credentials, monitoring and data clean-up, name the single accountable party.

### 3. From old data to new connection

Integrations are usually tested on clean sample data. Real data includes old customers with missing fields, inconsistent product codes and records that break validation rules. When the connection meets production data, it fails on the exceptions. The question of who prepares and cleans the data is often left unasked because each party assumes the other owns it.

### 4. From project team to operations

This is the most common failure point. The project team builds the integration, it goes live and the team moves on. Nobody has been formally given responsibility for watching it, fixing it, renewing its credentials or approving changes.

Large technology organisations treat this handoff seriously. AWS describes its [Operational Readiness](https://docs.aws.amazon.com/wellarchitected/latest/operational-readiness-reviews/wa-operational-readiness-reviews.html) Review as a set of curated questions, distilled from past operational incidents, that teams use to check their services across the full lifecycle, from inception to post-release operations. Google's site reliability engineering book describes launch checklists covering architecture and dependencies, failure modes and integration, and asks teams to plan for what happens if a dependency is not ready in time. The UK Government's service manual describes the [live phase](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works) as supporting a service sustainably while continuing to improve it.

A small business does not need a formal review programme, but it does need the same discipline: an explicit point where operations accepts the integration, with a named owner. See [why critical integrations need a named operational owner](/discovery/why-critical-integrations-need-a-named-operational-owner/).

### 5. From launch to the next change

The final handoff is across time. Months after launch, someone changes a product structure, adds a mandatory field or upgrades one of the systems. The knowledge of how the integration works has left with the project team. Without documentation and an owner, every change is a gamble. This is a major reason [technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).

## What each handoff needs

| Handoff | What should be handed over | Who should accept it |
| --- | --- | --- |
| Business need to specification | Real scenarios, including exceptions, and a definition of done | The technical lead, in writing |
| Between vendors | A responsibility matrix covering every element of the connection | Each vendor, before work starts |
| Old data to new connection | A data readiness check and a named owner for clean-up | The business data owner |
| Project to operations | Runbook, alert routing, credential register and support contacts | A named operational owner |
| Launch to the next change | Mapping documentation and a change-check procedure | The operational owner and whoever approves system changes |

## Signs that a handoff is about to fail

- Requirements are a single sentence with no examples.
- Vendors describe the connection as "standard" but cannot say who handles errors.
- Testing uses only data created for the test.
- The go-live plan ends on launch day.
- Nobody can say who will be told if the integration fails at 2am on a Sunday.

## An illustrative example

Consider an illustrative Pietermaritzburg logistics company with about 110 staff that connected its transport management system to a new accounting package. The accounting implementation partner configured invoicing. The transport software vendor provided an export. A freelance developer was engaged to connect the two.

Testing passed. Within the first month after go-live, invoices for split consignments were missing, fuel surcharges appeared as separate unlinked lines, and nobody knew why a batch of invoices had failed over a weekend. Each party could show that its own part worked as specified. The accounting partner had not been told about split consignments. The developer had not been told that surcharges must link to the original invoice. Error emails went to the developer, whose engagement had ended.

The recovery started with a workshop that listed every element of the connection and named one accountable party for each. The finance manager supplied twenty real consignments, including the awkward ones, as test cases. Alerts were rerouted to a shared finance operations mailbox, and the finance manager formally accepted ownership after a two-week monitored period. None of this required new technology. It required the handoffs to be made explicit.

## A practical checklist before starting

1. Write down every party involved and what each believes it is responsible for. Compare the lists.
2. Name one accountable party for mapping, transformation, errors, credentials, data clean-up and monitoring.
3. Collect real scenarios, including exceptions, before specification is signed off.
4. Test with a copy of real data, not only sample records.
5. Agree who accepts the integration into operations, and on what evidence.
6. Set a review a month after go-live, with the operational owner leading.

Integration projects are, by nature, collaborations between parties who each see only part of the picture. Success depends less on the connection itself than on whether the gaps between those parties are deliberately closed.
