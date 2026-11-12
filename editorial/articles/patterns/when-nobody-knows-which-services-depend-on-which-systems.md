---
hub: patterns
record_id: PAT-332
slug: when-nobody-knows-which-services-depend-on-which-systems
title: When Nobody Knows Which Services Depend on Which Systems
description: When a technical change or outage surprises the business because dependencies were invisible, the condition points to a service-dependency and resilience design problem.
lead: If a small technical change can unexpectedly interrupt a customer, finance or operational service, the hidden issue may be that the business cannot see its digital dependency chain.
category: Cloud, Infrastructure & Reliability
published_date: 2026-09-03
updated_date: 2026-09-03
eyebrow: Pattern
tags:
  - Resilience
  - Uptime
  - Recovery
cta_label: Digital Infrastructure
cta_href: /services/digital-infrastructure/
side_title: Commercial value
pattern_family: Cloud, Infrastructure & Reliability
observable_condition: Technical systems and business services are interconnected but the organization cannot reliably explain which dependencies will be affected by a failure or change.
primary_identification: service-dependency mapping and resilience problem
commercial_value_dimensions: Uptime, Revenue protection, Resilience, Scalability
sources:
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/final
  - IR 8286D, Using Business Impact Analysis to Inform Risk Prioritization and Response - CSRC | https://csrc.nist.gov/pubs/ir/8286/d/upd1/final
related:
  - Why Backups Do Not Equal Business Resilience | /patterns/why-backups-do-not-equal-business-resilience/
  - Why Does a Small Technical Failure Stop the Whole Business? | /patterns/why-does-a-small-technical-failure-stop-the-whole-business/
  - When Your CRM Knows Something Your Finance System Does Not | /patterns/when-your-crm-knows-something-your-finance-system-does-not/
summary: Unexpected blast radius is often a sign that the organization understands components better than end-to-end services. Mapping critical dependencies can improve change control, recovery priorities and resilience. If this condition is familiar, explore Mellorca's solutions or start a conversation so we can examine the dependency chain behind your operations.
---
## Observable condition

An infrastructure component fails or changes and the impact travels farther than expected. A login dependency stops a customer portal. A database maintenance window affects invoicing. A network change interrupts a process nobody realised used that connection. Teams understand their own components, but nobody can describe the end-to-end service.

The condition is easiest to see during and just after an incident. The first hour is spent establishing what is affected rather than fixing it. Different teams report that their own components are healthy while the business service is plainly not working. A supplier's status page shows an outage, and only then does someone discover which internal processes relied on that supplier.

### An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A business replaces an ageing file server and schedules the cut-over for a quiet Sunday. The infrastructure team checks the shares that staff use. On Monday morning, the overnight export that feeds the courier booking system fails, because a scheduled job written years earlier picks up files from a folder on the old server. Orders are packed but cannot be booked for collection. The change itself was well executed; what was missing was knowledge that a customer-facing process depended on an unremarkable folder.

### Warning signs

- Change reviews ask "which systems does this touch?" but not "which business services does this touch?"
- Incident calls routinely include people who are there only to find out whether they are affected.
- Architecture diagrams describe networks and servers, but no document describes a service such as order fulfilment or payroll from end to end.
- Scheduled jobs, file transfers and service accounts exist that nobody can explain or confidently switch off.
- Recovery plans list systems in an order nobody can justify by business consequence.
- The answer to "what depends on this?" is a person's name rather than a record.

## Realisation

This is not only an architecture-documentation problem. It affects how the business prioritises recovery, evaluates change risk and decides where resilience investment matters most.

### Change becomes a gamble

Without a dependency view, every change is assessed against the component being changed rather than the services that rely on it. Teams compensate in one of two ways: they become cautious, slowing improvement and leaving outdated components in place because nobody is sure what will break; or they proceed and learn the dependency from the outage. Neither is a deliberate risk decision.

### Recovery order becomes guesswork

Recovery priorities should follow business consequence. NIST's guidance on [using business impact analysis to inform risk prioritisation](https://csrc.nist.gov/pubs/ir/8286/d/upd1/final) describes the purpose of a business impact analysis as helping leaders determine which assets enable mission objectives and which factors make those assets critical. That determination is only as good as the dependency knowledge behind it. If a critical service quietly relies on an identity provider, a shared database or a supplier interface that is ranked as low priority, the recovery plan will restore things in the wrong order.

### Resilience spending lands in the wrong place

When dependencies are invisible, investment tends to follow the components that are most familiar or most recently troublesome. Redundancy may be added to a server that supports little of commercial importance while a single, unmonitored integration carrying customer orders remains a quiet point of failure.

### The business feels it before IT can explain it

The first people to notice a hidden dependency are rarely technical. A customer cannot log in, a finance clerk finds the invoice run incomplete, a warehouse cannot print labels. They report a business symptom, and the technical teams must then translate it back into components under time pressure. Every minute of that translation is time in which the business knows something is wrong but nobody can say what, how widely, or how long it will last. Executives asking for an estimated recovery time are, in effect, asking for the dependency map that does not exist.

### Why the condition persists

Dependency knowledge decays without anyone deciding to let it. Each project documents its own scope, people move on, and supplier services are added through procurement rather than architecture. Mapping is also easy to postpone: it produces no new feature and its value appears only when something goes wrong. The trade-off is real. A complete, perfectly current map of every dependency is expensive and rarely necessary; the practical aim is a maintained view of the few services the business cannot afford to lose, accurate enough to change the decisions above.

:::callout Realisation prompt
For each business-critical service, can you name the systems, integrations, identities, data stores and infrastructure components that must work for the service to work?
:::

## Identification

This is a **service-dependency mapping and resilience problem**. The visible symptom is surprise impact. The structural issue is incomplete understanding of how business outcomes depend on digital components.

## Diagnosis

Dependencies become opaque when architecture evolves through many small projects, ownership is split by technical layer, integrations are undocumented, supplier services sit outside internal diagrams, and business-service maps are never updated after changes. NIST contingency-planning guidance emphasizes evaluating systems and operations to determine contingency requirements and priorities. That assessment becomes stronger when technical dependencies are connected to the business processes they support.

## Commercial impact

The commercial value at stake is **uptime, revenue protection, resilience and scalability**. Unknown dependencies make outages harder to diagnose, changes harder to assess, recovery priorities less reliable and growth riskier because new systems are added to an architecture whose critical paths are not visible.

## Common misidentification

The response is often to buy more monitoring. Monitoring is valuable, but component health alone does not explain which business service is at risk or what must be recovered first.

## Possibility

A better state connects business services to applications, integrations, infrastructure, identities, data and suppliers. Ownership is visible, critical dependencies are ranked and the map is updated as part of change rather than recreated during an incident.

## Intervention

Start with a small number of critical services. Trace each one from customer or operational outcome backward through the digital chain. Record owners, failure modes, recovery expectations and third-party dependencies. Use the map to improve change reviews, monitoring priorities, incident response and continuity testing.

## Practical diagnostic questions

- Which digital services would materially interrupt the business if unavailable?
- What systems and integrations must work for each service?
- Which dependencies are external suppliers?
- Where is ownership ambiguous?
- Is the dependency map tested against real changes and incidents?

## Bottom line

When nobody knows which services depend on which systems, resilience decisions are being made with an incomplete model of the business. Dependency visibility turns technical architecture into operational control.

Dependency mapping often reveals the single component nobody watches, the condition described in [when one unmonitored component can stop a critical service](/patterns/when-one-unmonitored-component-can-stop-a-critical-service/). Integrations in the chain need someone accountable for them, as [why critical integrations need a named operational owner](/discovery/why-critical-integrations-need-a-named-operational-owner/) explains. And ranking services for recovery is easier once the business has an estimate of [the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).
