---
hub: impact
record_id: CPS-232
slug: ageing-server-no-replacement-date-failure-and-end-of-support-cost
title: The server nobody dares replace: What an ageing machine really risks
description: A server that is nine years old and still running is not proven safe; with no replacement date, the business has scheduled an outage for an unknown day.
lead: A server that is nine years old and still running is not proven safe; with no replacement date, the business has scheduled an outage for an unknown day.
category: Digital Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Hosting critical systems on ageing servers with no replacement plan
primary_cost_mechanism: Unplanned downtime, emergency replacement premiums, data re-entry and security exposure from hardware failure and end of vendor support
sources:
  - Windows Server 2012 - Microsoft Lifecycle | https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2012
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
related:
  - The automation only one person understands: The hidden cost of dependency | /impact/automation-understood-by-one-employee-continuity-maintenance-cost/
  - Cloud prices for old infrastructure: The cost of moving without redesign | /impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/
  - When nobody can trace where a reported number came from | /impact/untraceable-reporting-number-audit-cost/
  - Why postponing a legacy system replacement usually costs more | /impact/postponing-legacy-system-replacement-disruption-fear-delay-cost/
summary: A server that is nine years old and still running is not proven safe; with no replacement date, the business has scheduled an outage for an unknown day.
layout: plain
---
## The tolerated pain

In the corner of the server cupboard sits a machine that was bought nine years ago. It runs the accounting database, the shared drive and an old stock application that nobody dares touch. The fans are loud, one disk has already been replaced, and the person who set it up left in 2019. It still works, so it is not on any budget. Every year, someone says it should be replaced "when things are quieter". Things are never quieter.

This is not about whether servers are better in the cloud or on-site. It is about the absence of a plan. Hardware wears out, software support ends and spare parts become scarce. A business that has no replacement date has, in effect, scheduled its next outage for an unknown day, usually the busiest one. This article describes what that costs and how to replace the gamble with a calendar. It differs from the published article on [overprovisioned server capacity](/impact/overprovisioned-server-capacity-cost/), which covers paying for too much. Here the risk is relying on too little, for too long.

## How a server gets stuck in service

- **It works, so it is invisible.** A system that never complains earns no attention.
- **Replacement feels like a project.** Moving an old application means migration, testing and downtime, so the decision is postponed.
- **Nobody knows exactly what it runs.** Over the years services were added and the details lived in one person's head. See [why legacy applications remain live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/).
- **The budget is annual and the need is lumpy.** A large one-off cost is harder to approve than a small recurring one.
- **Load-shedding has already caused near-misses** that were shrugged off, such as a hard shutdown that corrupted a database once and was fixed by a restore.

## Operational symptoms

- a server older than its warranty and its manufacturer's support period, with no one tracking either date;
- an operating system whose vendor no longer issues security updates;
- warnings from disks, fans or the power supply that are noted but not acted on;
- no documented answer to "what happens if this machine does not start tomorrow?";
- spare parts sourced second-hand, or only from one supplier;
- backups that exist but have never been restored onto different hardware;
- a single person who is "the only one who knows how it works".

## Two kinds of risk

**Hardware failure.** Components have limited lives. When a motherboard, controller or power supply fails in an old model, the replacement may take days to find. The server is not simply repaired; it may have to be rebuilt.

**End of vendor support.** Software has a lifecycle too. Microsoft's [lifecycle page for Windows Server 2012](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2012) shows that support for that release ended on 10 October 2023, after which regular security updates stopped unless extended security updates were purchased. The pattern is general: every product has a published end date, and the date is known years ahead. A server running software past that date carries growing security exposure, and software vendors that integrate with it may also stop supporting that setup. The UK National Cyber Security Centre's guidance on [obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products) explains that unsupported products no longer receive security fixes and should be replaced or protected through other controls.

## How the pain becomes money

- **Downtime:** staff paid but unable to work, orders not processed, invoices delayed. See [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).
- **Emergency replacement:** urgent purchase at whatever price and specification is available, plus rushed labour from a provider with leverage.
- **Data loss and re-entry:** work since the last good backup must be recreated by hand.
- **Security exposure:** an unsupported system holding customer or employee information raises the chance of an incident that POPIA requires you to notify.
- **Recovery uncertainty:** without a tested plan, nobody can say how long the outage will be. This is explored in [not knowing recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/).
- **Higher running cost:** older machines use more power, which matters in a load-shedding country, and need more maintenance attention.

## An illustrative cost model

This example is **illustrative**. All figures are assumptions for a hypothetical Pretoria wholesaler with 40 office staff and a single nine-year-old server.

| Assumption | Value |
| --- | --- |
| Failure outcome modelled | Two working days of downtime |
| Staff affected | 40 |
| Working hours lost per person | 16 |
| Loaded cost per person per hour | R200 |
| Emergency hardware premium and rushed labour | R60,000 |
| Data re-entry: 3 staff, 20 hours each, R250 an hour | R15,000 |
| Planned replacement for comparison | R140,000 over five years |

- Idle labour: 40 × 16 × R200 = R128,000
- Emergency premium and rushed labour: R60,000
- Re-entry of lost work: 3 × 20 × R250 = R15,000
- **Illustrative cost of one failure: R203,000**

The planned replacement works out to about R28,000 a year. One bad outage can cost more than seven years of the planned alternative, before counting missed sales or customer goodwill. The comparison is not meant to scare; it shows why replacement should be a budgeted line, not a surprise.

## Why the pain is tolerated

Each year the old server survives is evidence, in people's minds, that it is safe. Survival is not a measure of risk, though. A machine that has run for nine years is not "proven"; it is closer to the end of its life. Meanwhile the cost of replacing it is concrete and the cost of failure is hypothetical, so deferral looks prudent right up until the day it is not.

## When it becomes commercially urgent

- a security review or insurer flags unsupported software;
- a key supplier or accounting vendor announces it will no longer support the version you run;
- the server shows disk or memory errors;
- a major customer asks for evidence of business continuity;
- the only person who understands the machine resigns.

## What better looks like

The aim is not to replace everything every three years. It is to make age, support dates and recovery options visible, and to choose when to act.

1. **Record each server.** Note its purpose, age, warranty end date, software support end date, owner and what depends on it. The practice is the same as an application inventory; see [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/).
2. **Set a replacement date.** Many businesses plan on a lifespan of around five years for servers, adjusting for warranty and workload. The exact number matters less than having one.
3. **Check what really runs on it.** Separate the services, such as files, accounting, print and legacy applications. Some may move to supported cloud services; others need a replacement host.
4. **Test recovery on different hardware.** A backup that has never been restored is an assumption. Microsoft's guidance on [disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) emphasises defining recovery objectives and testing the plan.
5. **Plan the migration in stages.** Move one service at a time, starting with the least risky, and keep the old machine as a fallback until the new one has run through a month-end.
6. **Protect the interim.** Until replacement, put the server on a UPS, take extra backups, restrict who can reach it from outside and keep a spare for the parts most likely to fail.
7. **Put the cost in the budget.** Spread replacement across the years as a regular line, rather than as a rare emergency.

## Practical next actions

1. List every physical or virtual server and its age today.
2. Look up the vendor support end date for each operating system and major application.
3. Ask: "if this machine failed tonight, who would do what and how long would it take?"
4. Schedule a test restore of the most important data.
5. Agree a replacement year and a budget figure for each server.
6. Put battery backup in place for the interim.

## Bottom line

An ageing server is not a problem while it runs. It is a deferred decision that grows more expensive and less controllable each year. The business can pay a planned, modest amount to replace it on its own timetable, or pay an unplanned, larger amount on the machine's. A simple register of ages and support dates, a tested recovery and a funded replacement date turn a gamble into a managed cost.
