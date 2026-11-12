---
hub: discovery
record_id: DISC-376
slug: why-recovery-plans-should-be-organised-around-business-services-not-servers
title: Recovery plans list systems but not the business services they support
description: A recovery plan that lists servers cannot tell you which service comes back first. How to map services to systems, agree recovery times with managers and reorder the plan before a major incident.
lead: A recovery plan that lists servers cannot tell you which service comes back first. How to map services to systems, agree recovery times with managers and reorder the plan before a major incident.
category: Business Continuity & Resilience
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Operations head responsible for continuity, working with the IT manager
budget_owner: Managing director or financial director
sources:
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Architecture strategies for defining reliability targets - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics
  - Plan for Disaster Recovery (DR) - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/plan-for-disaster-recovery-dr.html
related:
  - Why Vulnerability Severity Needs Business Criticality | /discovery/why-vulnerability-severity-needs-business-criticality/
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
  - Why infrastructure incidents cannot be linked to the change that caused them | /discovery/infrastructure-incidents-cannot-be-linked-to-recent-changes/
summary: A recovery plan that lists servers cannot tell you which service comes back first. How to map services to systems, agree recovery times with managers and reorder the plan before a major incident.
layout: plain
---
On the morning a major incident takes down the company's main platform, the recovery plan is opened for the first time in two years. It is a tidy list: the file server, the database server, the email system, the accounting package, the firewall. Each has a restore order and a technician's name. What the plan does not say is that the collections team cannot call a single debtor until the telephony integration is back, that the warehouse cannot print dispatch notes without the order system, or that month-end payroll depends on a spreadsheet that lives on a laptop. The technicians restore the systems in the order written. The business wants things restored in a different order, and nobody can say what that order should be.

This article is about that operating condition: recovery plans that list systems but not the business services those systems support. It is a common gap in plans written by IT for IT.

## The problem in plain language

A business service is something the company does for a customer or for itself: take an order, dispatch goods, issue an invoice, pay staff, answer a support call. Each one is delivered by a chain of systems, people, suppliers and sometimes paper. A recovery plan organised by system answers the question "how do we rebuild this server". A plan organised by service answers "how do we get back to taking orders, and what has to come back first for that to happen". The first is necessary. Only the second helps the managing director decide what to tell customers at 10 o'clock on the morning of an outage.

## What the buyer is actually trying to solve

The person searching for this problem wants a plan that matches the way the business thinks. They want to know, in advance, which services matter most, how long each can be down, what the workaround is while it is down, and which systems and suppliers sit underneath. They want to be able to hand the plan to a manager outside IT and have them recognise their own operation in it.

## Evidence and system mechanism

### Contingency planning starts with business impact

The US National Institute of Standards and Technology's [Contingency Planning Guide for Federal Information Systems](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) is built around the idea that planning for recovery follows from understanding what the organisation needs its systems to do. The logic carries to a business of any size: start from the mission-critical functions, find out what supports them, and plan recovery in that order. A plan that begins with the list of servers has skipped the first step.

### Recovery targets belong to the business, not to IT

Microsoft's Azure Well-Architected guidance on [reliability metrics](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics) defines the recovery time objective as the maximum acceptable time an application can be unavailable after an incident, and the recovery point objective as the maximum acceptable duration of data loss. It states that business stakeholders set broad requirements and technical experts then assess the current state against them, and that both parties must agree on realistic targets. It also advises identifying and scoring user and system flows by importance to business requirements, then using that to guide design, testing and incident management. In plain terms, the service owner says how long is too long; IT says what is achievable; the gap is a business decision about spend.

### Recovery objectives are defined per workload

Amazon Web Services' reliability guidance on [planning for disaster recovery](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/plan-for-disaster-recovery-dr.html) lists, as its first practice, defining recovery objectives for downtime and data loss, and follows it with choosing a recovery strategy to meet them and testing the implementation. The sequence is the useful part: objectives first, strategy second, testing third. A plan that jumps straight to strategy, such as backups and replicas, cannot say whether it is good enough because nobody has said what it is aiming at.

### Warning signs

- The plan has a section for each server but no section for each service.
- Nobody outside IT has read it, and no business manager has signed off a recovery time.
- A single fix, such as one integration or one supplier, appears in no plan but would stop several services.

## Problem owner and why-now trigger

The problem owner is the operations head or whoever holds business continuity, working with the IT manager. The budget owner is the managing director or financial director, who decides how much downtime the business will tolerate and what to spend to reduce it. The trigger is usually a major incident, whether a ransomware event, a prolonged power or network failure, a supplier outage or a failed restore. After the first one, the gap between the plan and what the business actually needed is plain to see. The cost side is described in [not knowing your recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/).

## Economic consequence

If a service that earns R120,000 a day is restored on day three because it sat fourth in a technical queue, the order of restoration has cost about R240,000 more than it needed to. These figures are illustrative; use your own daily revenue and margin. Related exposure arises when data loss is greater than expected, as covered in [undefined recovery points](/impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/).

## Root cause

- **The plan is owned by IT alone.** Business managers were never asked what they could live without, or for how long.
- **No service-to-system map.** Nobody has recorded which systems, integrations and suppliers each service depends on, a gap related to [critical services that depend on one cloud region by accident](/discovery/critical-services-depend-on-one-cloud-region-by-accident/).
- **The inventory is system-shaped.** The application register lists tools, not what each is used for.
- **Plans are tested, if at all, for restoration rather than for resumption.** A restored server is not a resumed service, a distinction also seen in [unmonitored backups and false recovery confidence](/impact/unmonitored-backups-false-recovery-confidence/).

## Practical intervention

1. **List the services.** Ten to fifteen, in language a customer would recognise: take orders, ship goods, invoice, pay staff, support customers.
2. **Rank by impact.** With the managers who run them, estimate the cost per day of each being unavailable, in rand and in customer harm.
3. **Set a recovery time and recovery point for each.** Agree them with the service owner, not with IT alone.
4. **Map the dependencies.** For each service list the systems, integrations, data stores, suppliers, people with special access and any manual workarounds. A one-page grid is enough.
5. **Compare the map to the plan.** Wherever a service needs a system with a slower recovery than the service can tolerate, you have found a real gap.
6. **Write the workaround.** For the top five services, document what staff do while the system is down.
7. **Rework the restore order.** Sequence recovery by service importance, and add the service name to every system entry.
8. **Test one service.** Run a tabletop exercise on one critical service and fix what it exposes.

### Trade-offs

Mapping takes manager time that is hard to find, and managers tend to rate their own service as the most critical. Tighter recovery times cost money, so the honest outcome of the exercise is sometimes a decision to accept a longer outage for a lower-value service.

### An illustrative example

Illustrative: a Port Elizabeth building-supplies distributor had a recovery plan that restored the accounting server first. When its operations head sat with sales, the depot and finance to list the services, the group agreed that taking trade counter orders and printing pick lists mattered more than month-end reporting. The map showed that both depended on a small integration server that appeared nowhere in the plan. They moved it to the top of the restore order, wrote a paper-based counter procedure, and set a four-hour target for order-taking.

## Diagnostic questions

- Can you name your ten most important business services, and who owns each?
- Which systems, suppliers and people does each depend on?
- If the plan were followed exactly tomorrow, would the most important service be back first?

## What good looks like

The plan opens with a short list of business services, each with an owner, a recovery time, a recovery point, a workaround and a dependency list. System recovery runs are labelled by the service they restore, and the order follows business importance. At least one service has been exercised in the past year, and the findings were fixed.

## Where Mellorca fits

Mellorca helps South African businesses translate technical recovery plans into service-based ones: identifying the services that matter, mapping what each depends on, and setting recovery targets with the managers who will live with them.

## Method note

The sources describe contingency planning, recovery objectives and the practice of defining them before choosing a recovery strategy. They are written for government and cloud contexts and do not measure outcomes in South African mid-sized businesses. The rand figures and the distributor are illustrative rather than a client case.
