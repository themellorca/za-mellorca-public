---
hub: discovery
record_id: DISC-393
slug: recovery-order-set-by-system-owners-not-by-how-the-business-runs
title: Recovery order set by system owners, not by how the business runs
description: Each system owner restores their own platform first, and the business still cannot take an order. How to set recovery sequence from business process and dependencies, especially during a cloud migration.
lead: Each system owner restores their own platform first, and the business still cannot take an order. How to set recovery sequence from business process and dependencies, especially during a cloud migration.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity lead or IT service manager responsible for the recovery plan
budget_owner: COO, CIO or managing director
sources:
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - About recovery plans in Azure Site Recovery - Azure Site Recovery | https://learn.microsoft.com/en-us/azure/site-recovery/recovery-plan-overview
related:
  - Recovery environments drift from production | /discovery/why-recovery-environments-quietly-drift-away-from-production/
  - After a cloud migration, nobody updates who to call in a crisis | /discovery/after-a-cloud-migration-nobody-updates-who-to-call-in-a-crisis/
  - Data recovery points are not aligned with transaction criticality | /discovery/why-one-recovery-point-for-every-system-hides-your-most-valuable-data/
summary: Each system owner restores their own platform first, and the business still cannot take an order. How to set recovery sequence from business process and dependencies, especially during a cloud migration.
layout: plain
---
After a ransomware incident, a distribution company starts restoring its systems. The finance system owner gets the accounting platform back first, because finance has the most senior sponsor. The email team restores mailboxes. The warehouse management system waits its turn. By the end of day two, accounting is running, but there is nothing to account for: the warehouse cannot pick, the online shop cannot see stock, and orders are queuing. Each owner restored their system quickly. Nobody restored the business.

## The problem in plain language

In many businesses, the order in which systems come back after a major outage is decided by whoever owns each system, or by whoever shouts loudest during the incident. Each owner has a recovery plan for their own platform. What is missing is a single sequence based on how work actually flows through the business: which services must run first for customers to be served, which data stores those services depend on, and which can wait.

The result is parallel effort that does not add up to a working operation, and arguments about priority at the worst possible moment.

## What the buyer is actually trying to solve

The business continuity lead, IT manager or operations director who looks into this wants an agreed recovery order that the business has signed off before an incident, based on business priorities and technical dependencies. They also want to know how to keep that order current as systems move to the cloud, and how to test it.

## Evidence and system mechanism

### Priority should come from business impact

Microsoft's [disaster recovery guidance](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) recommends categorising workloads by criticality tiers, recognising that each tier warrants its own level of investment, resilience and recovery sequencing, and documenting the recovery approach for flows of different criticality to avoid ambiguity during an event. It also advises defining the proper sequence to minimise impact, giving the example of restoring databases before the applications that depend on them, and scoping recovery by business impact.

NIST's [contingency planning guide, SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), includes a business impact analysis template and helps organisations determine contingency planning requirements and priorities. The business impact analysis is the step that links a system to the processes it supports, which is exactly the information missing when owners set the order themselves.

### Sequence can be built into recovery tooling

Recovery tools let you encode sequence. Azure Site Recovery's [recovery plan overview](https://learn.microsoft.com/en-us/azure/site-recovery/recovery-plan-overview) describes grouping machines so that they start in order after failover, for example database tier first, then middleware, then the web front end, so that each component finds its dependencies running. Groups fail over in order; machines within a group start in parallel. It also allows manual steps and scripts within the plan, and recommends a test failover for each application every quarter because applications and their dependencies change frequently.

The tooling handles the order within one application. Deciding the order across applications, based on business processes, is a business decision the tool cannot make for you.

## Why this becomes urgent

Cloud migration is the usual trigger. During a migration, systems move one at a time, often owned by different project teams. Each migrated system gets its own recovery configuration in the new platform, and the old recovery plan, written for the on-premises estate, becomes obsolete. Dependencies change: a cloud-hosted application may now depend on an identity service, an integration platform and a network path that did not exist before. Unless someone rebuilds the cross-system sequence, the business ends up with well-configured individual recoveries and no agreed overall order.

## Economic consequence

The cost is measured in time to restore trading, not time to restore systems. Every hour spent bringing back a system that cannot be used without its dependencies is an hour the business stays closed. Staff are idle while waiting for the service they actually need. Senior managers spend the incident negotiating priorities instead of making decisions. Customers see an outage that lasts longer than the technical recovery times suggest. Our article on [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) explains why that number should drive sequencing.

## Root cause

- **Plans are written per system.** Each owner documents their own recovery, with no combined view.
- **Criticality is defined differently by business and IT.** A system that is technically complex is not necessarily the one the business needs first, a gap discussed in [different definitions of criticality](/discovery/business-and-it-use-different-definitions-of-criticality/).
- **Dependencies are not mapped.** Shared services such as identity, DNS, integration and file transfer are missed because no single system owner owns them.
- **No business sign-off.** The recovery order has never been agreed by the people who run sales, operations and finance.
- **Recovery targets are not tied to impact.** Targets come from templates, a problem we cover in [recovery time targets from business impact](/discovery/why-recovery-time-targets-should-come-from-business-impact-not-templates/).

## What good looks like

The business has a short list of critical business services, such as taking orders, fulfilling them, invoicing and paying staff, each with a business owner. For each service, the supporting systems and shared dependencies are mapped. From that map comes a single recovery sequence in stages: shared foundations first, then the systems that let the business serve customers, then the ones that can wait. The sequence is agreed by business leaders and IT before any incident, and it is encoded in recovery tooling where possible. Every system owner knows where their system sits in the order and what must be running before they start. The sequence is reviewed after each major migration step and tested at least once a year as a full business service, not as individual systems.

This builds on the principle in [organising recovery around business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/): the services define what to protect; the sequence defines what to restore first when everything is down.

## Diagnostic questions

- If every system were down tomorrow, is there a written order in which they would be restored, and who agreed it?
- Does that order reflect which business activities must resume first, or which teams own the systems?
- Are shared services such as identity, DNS and integration platforms in the sequence?
- Has the order been updated since your last cloud migration step?
- When did you last test the recovery of a whole business service from start to finish?

## Practical next actions

1. List your five to ten most important business services and name a business owner for each.
2. For each service, list every system and shared dependency it needs to operate, including identity, network, integration and third-party services.
3. Draft a single staged recovery sequence across all systems, starting with shared foundations, and review it with business owners and system owners together.
4. Have the executive team sign off the sequence, so priority is not renegotiated during an incident.
5. Encode the order in your recovery tooling where it supports grouping and sequencing, and document manual steps where it does not.
6. Add a sequence review to the checklist for every migration wave, and run one end-to-end recovery test of a full business service each year.

## Where Mellorca fits

Mellorca helps businesses map business services to systems and dependencies, set an agreed recovery sequence and build it into their cloud or hybrid recovery set-up. This sits within our [digital infrastructure](/services/digital-infrastructure/) work, usually starting with a dependency mapping session for the most critical service.

## Method note

This article draws on Microsoft's Well-Architected disaster recovery guidance, Azure Site Recovery documentation and NIST SP 800-34. The opening example is illustrative and not based on a specific business.
