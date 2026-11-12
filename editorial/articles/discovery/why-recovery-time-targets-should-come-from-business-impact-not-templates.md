---
hub: discovery
record_id: DISC-377
slug: why-recovery-time-targets-should-come-from-business-impact-not-templates
title: RTO targets are copied from templates rather than business impact
description: A four-hour RTO on every system looks tidy until an auditor asks where it came from. How to set recovery time targets that business owners have chosen and can defend.
lead: A four-hour RTO on every system looks tidy until an auditor asks where it came from. How to set recovery time targets that business owners have chosen and can defend.
category: Business Continuity & Resilience
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: IT or operations manager who maintains the continuity plan, with business function heads supplying the impact assessment
budget_owner: Managing director or financial director who approves resilience spending
sources:
  - https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_objective_defined_recovery.html | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_objective_defined_recovery.html
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics | https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics
  - https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
summary: A four-hour RTO on every system looks tidy until an auditor asks where it came from. How to set recovery time targets that business owners have chosen and can defend.
layout: plain
---
The auditor, or the insurer's underwriter, asks a routine question: what recovery time objectives have you set for your critical systems? The IT manager opens the disaster recovery plan. Every system has an RTO of four hours, and the document looks remarkably like the template the company downloaded three years ago. The accounting system, the warehouse scanner software, the email platform and the staff intranet all share the same number.

Nobody lied. A temporary figure became permanent. This article looks at why recovery time targets copied from templates are a problem, and how to replace them with numbers the business has actually chosen.

## The problem in plain language

A recovery time objective, or RTO, is the longest period a business is prepared to be without a system after a disruption before the damage becomes unacceptable. It is a business decision about tolerance, expressed as a number of hours or minutes. A template can supply a format and sensible examples. It cannot supply the answer, because the answer depends on what stops when this particular system stops.

When targets are copied, two things go wrong. Some systems get an objective that is more demanding than the business needs, which means paying for recovery capability that nobody would miss. Others get a target that is too relaxed, so the business discovers during a real outage that a day of downtime costs far more than anyone assumed.

## What the buyer is actually trying to solve

A person searching this problem usually has an external deadline: an audit finding, a customer security review, or an insurance application that asks for documented recovery objectives. They want targets that will survive scrutiny, which means targets that can be traced to a reason. They also want to avoid spending on recovery measures that a few hours of tolerable downtime would not justify. The question is less "what is a good RTO" and more "how do we arrive at ours, and how do we show our working".

## Evidence and system mechanism

### Recovery objectives are meant to follow business impact

The AWS Well-Architected guidance on [defining recovery objectives for downtime and data loss](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_objective_defined_recovery.html) says that each workload should have an RTO and a recovery point objective based on technical considerations and business impact. It lists, as anti-patterns, selecting arbitrary objectives, failing to evaluate the impact of downtime, choosing objectives more stringent than the business needs, which forces costlier and more complicated recovery, and choosing objectives that are incompatible with those of a dependent workload. Copying a template value for every system commits several of these at once.

### Targets should come from business stakeholders, then be tested

Microsoft's Azure Well-Architected guidance on [defining reliability targets](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics) says reliability and recovery targets should be derived from workshop exercises with business stakeholders and then refined through monitoring and testing. The order is the point. The target comes from the people who understand what stops when a system is down, and it is then checked against what the technology can actually do.

### Impact analysis is the established method

NIST's [contingency planning guide](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) is built around the idea that organisations evaluate their systems and operations to determine contingency planning requirements and priorities. Its glossary definition of a business impact analysis is the process of analysing operational functions and the effect that a disruption might have on them. The vocabulary is American and aimed at federal systems, but the method of working from operational consequences to recovery priorities applies to any business.

## Problem owner and why-now trigger

The problem owner is the IT or operations manager who maintains the continuity plan. The decision-makers are the heads of the business functions that depend on each system, because only they can say what an hour or a day of downtime does to them. The budget owner is the managing director or financial director, who approves the cost of meeting the targets.

The trigger is an audit or insurance requirement. Documents that were never challenged internally are now read by an outside party who may ask the simple follow-up: how did you arrive at this number? A blanket four-hour target across unlike systems rarely survives that question. Related reading on the cost of leaving this undefined is in [not knowing your recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/).

## Economic consequence

Overly strict targets cost money in standby infrastructure, replication, premium support tiers and staff on call. Overly loose targets cost money in a different way: the loss is concentrated in the day of the outage, when invoicing stops, orders cannot be taken, or staff are paid to wait. Both errors are invisible until tested. A template number gives the comfortable impression of control without any evidence that the business can meet it.

## Root cause

- **Nobody from the business was in the room.** IT wrote the plan alone, so the targets reflect technical convenience rather than operational consequence.
- **Systems are listed, not business services.** A target attached to a server says nothing about the order-taking process that depends on three of them. See [why recovery plans should be organised around business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/).
- **Targets were never tested.** A number that has not been exercised is a wish. The gap between backup and recovery is described in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/).
- **Dependencies were ignored.** A system with a two-hour target that relies on one with an eight-hour target cannot meet its own.

## Practical intervention

Run one short workshop per business function, not a long programme. For each service, ask four questions. What stops when this is unavailable? After how long does the damage become serious, such as missed deliveries, penalties or lost customers? What workaround exists, and how long can it be sustained? How much data can be re-entered or recovered by hand?

Turn the answers into tiers with a target for each, then map every system to the service it supports. Where a dependency has a longer recovery time than the service that relies on it, record the conflict and decide whether to fix the system or relax the service target.

### An illustrative example

Illustrative: a Durban distributor with 150 staff had a continuity plan with a four-hour RTO on every system. In a half-day session, the sales director and warehouse manager explained that order entry could not stop for more than two hours on a trading day, while the payroll system could be down for two days without harm. The staff intranet, previously given the same four hours, was moved to the lowest tier. The result was two tiers with different targets, one added dependency on the network link, and a clear case to the managing director for improving that link rather than for spending across the board.

## Diagnostic questions

- Can you name, for each critical system, the person who agreed its RTO?
- Is there a written reason for each number?
- Do any two systems with different importance share the same target?
- Has any target been tested by an actual recovery exercise?

## What good looks like

Each business service has a recovery target set by the people who run it, grouped into a small number of tiers. The reasoning is written down in a line or two. Dependencies are mapped, tested at least once a year, and conflicts are recorded. When an auditor or underwriter asks how a number was arrived at, there is a document with a date, a name and a reason.

## Practical next actions

1. List your ten most important business services and the systems each depends on.
2. Meet the owner of each service and ask what stops, how soon the damage becomes serious, and what workaround exists.
3. Define three to five recovery tiers and assign each service to one, recording the reason in a sentence.
4. Check dependencies and record any system whose recovery time is longer than the service relying on it.
5. Schedule a recovery test for the top tier within the next quarter and update the targets with what you learn.

## Where Mellorca fits

Mellorca helps businesses translate operational dependence into recovery targets that can be defended. That means facilitating the impact conversations, mapping services to systems and showing where spending on resilience is warranted and where it is not. Where a target cannot be met, the work extends to redesigning the process or system rather than adjusting the number. The cost of leaving recovery points undefined is explored in [how much data the business can lose](/impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/).

## Method note

The sources describe how recovery objectives are intended to be derived and the common errors in setting them. They do not measure how often businesses copy templates. The scenario, tiers and example are illustrative rather than a client case.
