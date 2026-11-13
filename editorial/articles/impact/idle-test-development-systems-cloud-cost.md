---
hub: impact
record_id: CPS-229
slug: idle-test-development-systems-cloud-cost
title: Test servers running all night: The cost of idle non-production systems
description: Test, staging and development systems often run around the clock though people use them for a fraction of the week. Scheduling them cuts cost.
lead: Test, staging and development systems often run around the clock while people use them for a fraction of the week. Scheduling them deliberately removes cost without removing capability.
category: Cloud Economics
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud Economics
commercial_domain: Digital Infrastructure
primary_pain: Test and development systems kept running when nobody is using them
primary_cost_mechanism: Technology waste from cloud compute, database and licence charges for idle hours
sources:
  - Auto-shutdown a VM - Azure Virtual Machines | https://learn.microsoft.com/en-us/azure/virtual-machines/auto-shutdown-vm
  - States and billing status - Azure Virtual Machines | https://learn.microsoft.com/en-us/azure/virtual-machines/states-billing
  - Automate starting and stopping AWS instances - Instance Scheduler on AWS | https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html
related:
  - Backing up data but not the systems that use it | /impact/pain-backing-up-data-without-systems/
  - The cost of automations that stop silently | /impact/silent-automation-failures-financial-impact/
  - Wi-Fi dead zones: The cost of staff moving around to find a signal | /impact/wi-fi-dead-zones-staff-searching-for-signal-cost/
summary: Test, staging and development systems often run around the clock while people use them for a fraction of the week. Scheduling them deliberately removes cost without removing capability.
layout: plain
---
## The tolerated pain

Somewhere in most cloud accounts there is a test server, a staging copy of the website or a development database that was set up for a project. During working hours someone uses it. At six in the evening everyone goes home, and the server keeps running. It runs through the night, through the weekend and through the December shutdown, and it is billed for every hour.

Nobody decided this. It is simply the default. Cloud resources run until someone stops them, and test and development systems rarely have anyone whose job it is to stop them. The developer assumes infrastructure will handle it; the infrastructure provider assumes the developer needs it available; finance sees one line on a monthly bill and cannot tell which hours were useful.

This is different from two related problems already covered on this site. [The financial waste of unused cloud resources](/impact/unused-cloud-resources-financial-waste/) deals with resources nobody uses at all and that should be deleted. [Paying for server capacity the business does not use](/impact/overprovisioned-server-capacity-cost/) deals with servers that are too large. Here the system is needed and correctly sized. It is simply switched on for far more hours than anyone works on it.

## Why it persists

- **Always-on is the default.** Stopping and starting systems needs a schedule, and setting one up is nobody's task.
- **Fear of breaking something.** Teams worry that a stopped system will not start cleanly on Monday, or that a scheduled job runs at night.
- **The cost is invisible to users.** Developers and testers never see the bill, and finance never sees the usage pattern.
- **Projects end, environments linger.** A staging environment built for a launch stays on long after the launch.
- **Non-production is not tagged.** If resources are not labelled by purpose, nobody can easily list what could safely be scheduled.

## Operational symptoms

- test and staging servers showing near-zero activity overnight and at weekends;
- the cloud bill barely changing during holiday periods when the office is closed;
- several copies of the same environment for different projects or suppliers;
- no naming or tagging convention that separates production from non-production;
- nobody able to say who asked for each test environment or when it can be retired.

## What the providers document

The major cloud platforms all provide ways to switch systems off when they are not needed, which is a fair sign of how common always-on non-production systems are.

Microsoft's guidance on [auto-shutdown for Azure virtual machines](https://learn.microsoft.com/en-us/azure/virtual-machines/auto-shutdown-vm) describes a setting that shuts machines down at a chosen time to reduce costs during off hours, with an optional notification by email or webhook before shutdown. It also warns that the default time zone is UTC, which matters in South Africa: a shutdown set for 18:00 UTC happens at 20:00 local time.

Stopping is not the same as stopping the bill entirely. Microsoft's page on [virtual machine states and billing](https://learn.microsoft.com/en-us/azure/virtual-machines/states-billing) explains that a machine that is merely stopped but still allocated continues to be billed, while a deallocated machine is not billed for compute. Disks and some networking continue to incur charges. Shutting down a server from inside the operating system can leave it allocated and still charged, so the method matters.

AWS documents its [Instance Scheduler on AWS](https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html) solution, which uses resource tags to start and stop compute and database instances on a defined schedule. AWS gives an example: instances needed only during regular business hours, if they would otherwise run at full utilisation all week, can save up to 70% when weekly running time falls from 168 hours to 50 hours. That is a ceiling for a specific pattern, not a promise for every workload.

## How the pain becomes money

- **Technology waste:** compute charges for hours when nobody is working on the system.
- **Database and licence costs:** managed databases and per-hour software licences billed around the clock.
- **Budget crowding:** money spent on idle environments is not available for monitoring, security or integration work.
- **Scaling cost:** each new project adds another always-on environment, so the waste grows with activity.

## An illustrative cost model

This model is **illustrative**; every figure is an assumption. Picture a Cape Town software-enabled logistics business with six non-production virtual machines for development, testing and staging.

| Item | Always on (assumed) | Scheduled 12 hours, weekdays only |
| --- | --- | --- |
| Running hours per week | 168 | 60 |
| Monthly compute cost, six machines | R30,000 | about R10,700 |
| Monthly disk and storage cost | R6,000 | R6,000 (still charged) |
| **Monthly total** | **R36,000** | **about R16,700** |

In this example the saving is about R19,300 a month, or roughly R230,000 a year, with no change in size or capability. The compute figure scales with hours (R30,000 × 60 ÷ 168); storage does not. Reserved-capacity commitments or flat-rate hosting would change the result, so check your own pricing before relying on any estimate.

## Trade-offs to respect

Not every non-production system can be stopped. Overnight test runs, shared integration environments used by suppliers in other time zones, and systems that take a long time to warm up may need longer windows. The answer is to make the schedule deliberate: agree hours with the people who use each environment, provide a simple way to start a system out of hours when needed, and exclude anything with a documented reason to stay on.

## When it becomes commercially urgent

1. Non-production costs are a material share of the monthly cloud bill.
2. New projects keep adding environments without retiring old ones.
3. A reserved-capacity purchase is being considered, which could lock in payment for hours you do not need.
4. The cloud bill barely drops over holiday shutdowns.

## What better looks like

Every resource is tagged as production or non-production, with an owner and a purpose. Non-production systems run on an agreed schedule by default and are fully deallocated outside it. Exceptions are recorded with a reason and a review date. Environments created for a project have an end date. Costs are reported by owner, as discussed in [cloud costs without business-owner allocation](/impact/cloud-costs-without-business-owner-allocation/), so the people who ask for environments see what they cost. Resources without a clear owner, a problem examined in [infrastructure resources without a clear business owner](/discovery/infrastructure-resources-without-a-clear-business-owner/), are investigated rather than left running.

## Practical next actions

1. **List all non-production resources** and tag them with owner, purpose and environment type.
2. **Pull a month of usage** to see when each system is actually used.
3. **Agree working windows** with the people who use each environment.
4. **Apply automatic schedules** that deallocate machines, not just shut down the operating system, and set the correct time zone.
5. **Retire environments** for finished projects.
6. **Compare the next invoice** with the previous one to confirm the saving.

This kind of review is part of Mellorca's [digital infrastructure](/services/digital-infrastructure/) work.

## Bottom line

A test environment that runs all week to support a 50-hour working week spends most of its bill on empty hours. Scheduling non-production systems is one of the simplest cloud savings available, because it removes cost without removing capability. The work is mostly organisational: label what exists, agree when it is needed and let the platform switch it off the rest of the time. Once that habit exists, every new environment inherits it, and the saving keeps compounding as the business grows.
