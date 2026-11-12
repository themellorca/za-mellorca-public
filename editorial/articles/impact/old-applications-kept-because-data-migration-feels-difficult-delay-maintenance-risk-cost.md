---
hub: impact
record_id: CPS-067
slug: old-applications-kept-because-data-migration-feels-difficult-delay-maintenance-risk-cost
title: Old Applications Kept Alive Because Moving the Data Feels Hard
description: Keeping an old application just to hold its data adds hosting, support and double-lookup costs every year, and a tiered migration usually costs less than the delay.
lead: Keeping an old application just to hold its data adds hosting, support and double-lookup costs every year, and a tiered migration usually costs less than the delay.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Old applications are kept running because migrating their data feels difficult
primary_cost_mechanism: Recurring hosting, support and licence cost, double-lookup labour, security and compliance exposure, and delayed benefits of the replacement system
sources:
  - Manage your data in Dynamics 365 implementation projects - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management
  - Plan your migration - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - "That's Just Admin": The Payroll Cost of Processes Nobody Ever Redesigned | /impact/accepting-repetitive-admin-never-redesigned-payroll-cost/
  - Cloud Prices for Old Infrastructure: The Cost of Moving Without Redesign | /impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/
  - Five Laptop Models, Three Chargers: What Inconsistent Hardware Costs a Business | /impact/mixed-laptop-models-and-accessories-support-and-procurement-cost/
summary: Keeping an old application just to hold its data adds hosting, support and double-lookup costs every year, and a tiered migration usually costs less than the delay.
layout: plain
---
## The old application that stays because of what is inside it

Sometimes a business keeps an application alive not because anyone likes it, but because of the data inside. Ten years of customer history, job records, quotes, warranty claims, supplier notes. The new system is chosen, the demonstration is impressive, and then someone asks the question that stops the project: "What happens to all the old data?" Nobody has a confident answer, the migration looks messy and expensive, and the old application stays on its ageing server for another year.

This article is about that specific hold-up: keeping old applications because moving the data feels too difficult. It is not about the general fear of changing systems, which is covered elsewhere, but about the data itself, how to think about it more precisely, and why the cost of delay, maintenance and operational risk usually exceeds the cost of a properly planned migration.

## Why data migration feels harder than it is

Data migration is intimidating for good reasons. The old data is often inconsistent: duplicate customers, missing fields, free text in places where the new system expects a code. Nobody is sure which records still matter. The old structure does not map neatly onto the new one. And the cost of getting it wrong is visible: a customer's history gone, an invoice that cannot be traced, an audit request that cannot be answered.

Behind these valid concerns, though, sit a few unhelpful assumptions:

- **"All of it must move."** In practice, a large share of old data is rarely accessed and does not need to live in the new live system.
- **"It has to be perfect."** Records need to be fit for their intended use, not flawless.
- **"It is one big event."** Migrations can be staged, with different data moving at different times.
- **"Only IT can do it."** The people who know what the data means are the business users, and they have to be involved.

## What good practice says

Microsoft's [guidance on data management in implementation projects](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management) is a useful, vendor-written view. It treats data quality as fitness for intended use, says that the users most familiar with the data should be the gatekeepers for cleansing, and urges teams to start paying close attention to the availability of data during requirements gathering. It also stresses data governance and stewardship: someone has to be responsible for what the data means and which version is authoritative. That implies a different question from "how do we move everything?". It asks: which data do we need, for what purpose, and who decides?

The Cloud Adoption Framework's [guidance on planning a migration](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration) adds the technical structure: choose a data transfer path suited to the volume and sensitivity of the data, discover dependencies before sequencing the move, start with simpler and lower-risk workloads, migrate non-production environments first as a rehearsal, and define a rollback plan with criteria for what counts as a failed deployment. It also recommends testing the rollback procedure and securing stakeholder approval and success criteria in advance. Written for cloud migrations, the sequence applies to any data move: understand, rehearse, move, verify, and keep a way back.

## The cost of leaving data where it is

An application kept solely as a data store still has to be run. That means:

- **Maintenance and hosting:** a server or licence kept alive for occasional lookups.
- **Support skills:** fewer people understand it, and each fix costs more.
- **Security and compliance exposure:** old systems tend to be patched less often, while they hold personal information. South Africa's Protection of Personal Information Act requires reasonable technical and organisational measures to protect that information. The Information Regulator's [POPIA guidance](https://inforegulator.org.za/popia/) also refers to the right to request deletion of records a responsible party is no longer authorised to retain, which is a practical reason not to keep everything forever in an unmanaged application.
- **Double entry and lookups:** staff check two systems for one customer, a pattern described in [departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/).
- **Blocked benefits:** automation, reporting and integration that depend on the new system cannot be fully realised while history sits elsewhere.

## How it becomes money

The mechanisms are technology waste, labour cost, risk exposure and opportunity cost. Put together:

> Cost of delay per year = running cost of the old application + extra lookup and double-entry labour + risk allowance + benefits of the new system not yet realised

### An illustrative example

A South African building-services contractor with 45 staff has moved its quoting and job costing to a modern cloud platform, but keeps its 11-year-old job management application running for history. A full migration quote of R320,000 frightened the directors into deferring. All figures are **illustrative assumptions**.

| Annual cost of keeping the old application | Assumption | Cost |
| --- | --- | --- |
| Server hosting and backup | R4,500 a month | R54,000 |
| Support and fixes | R6,000 a month | R72,000 |
| Staff lookups in two systems | 10 people × 2 hours a week × 48 weeks × R280 | R268,800 |
| Licence for old application | Annual maintenance fee | R36,000 |
| **Total** |  | **R430,800** |

Check: 10 × 2 × 48 × R280 = R268,800; R54,000 + R72,000 + R268,800 + R36,000 = R430,800.

The directors had assumed that the choice was between R320,000 now and nothing. On these figures, the choice was between R320,000 once and about R430,800 every year. A staged approach changes the picture again. Suppose the business migrates the last three years of active job history (which accounts for most lookups) for R140,000, and archives older records into a read-only, searchable store for R35,000 a year in hosting and access. Lookups fall by, say, 80%, saving about R215,000, and the old server, support and licence costs (R162,000) end, leaving a net annual saving of roughly R342,000 against R35,000 of archive cost, a payback of under six months on the migration outlay. The assumptions should be tested, but the structure is the lesson: migrate what is used, archive what is not, and retire the application.

## Secondary consequences

The longer an old application runs, the more likely its data is to be lost or stranded. Staff leave, passwords are forgotten, vendors close, and file formats become unreadable. Where a vendor makes export difficult, the exit price rises; see [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/). And a business that cannot trust its history struggles to produce the numbers it needs, a concern raised in [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/).

## When it becomes urgent

Act when the old application approaches end of vendor support, when its server or database needs replacement, when a key person who understands it is leaving, when an audit or customer query requires data you can only retrieve with difficulty, or when you want to automate across systems and the data barrier is blocking it.

## What better looks like

A well-run migration begins with a data inventory: what exists, what it is used for, who owns it and how long it must be kept. Data is sorted into three groups: needed live in the new system, needed only for reference and moved to an archive, and no longer required and disposed of under a retention policy. Business users define what clean means for each group. A rehearsal migration is run on a copy, results are reconciled, and the cut-over has a rollback plan. The old application is retired formally, with the archive documented. This is the kind of work a [systems implementation and integration](/services/systems-implementation-integration/) engagement covers.

## Practical steps

1. **Measure usage.** Check how often records of each age are actually retrieved.
2. **Classify the data** into migrate, archive and dispose, with an owner for each.
3. **Agree a retention rule** for personal and financial records, based on your legal obligations and advice.
4. **Do a rehearsal** on a subset, reconcile totals and sample records, and record what the rehearsal exposes.
5. **Price the status quo** using the formula above and compare it with the staged plan.
6. **Set a retirement date** for the old application, and make the archive access route part of the plan.

## Bottom line

Data migration feels like a risk because the cost is concentrated and the old arrangement feels free. It is not free. A system retained as a data store carries hosting, support, security and labour costs every year, and it blocks the benefits of the system that was supposed to replace it. Treating the data in tiers, rather than as one frightening lump, turns an open-ended problem into a plan with a price and an end date.
