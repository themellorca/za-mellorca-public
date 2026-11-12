---
hub: impact
record_id: CPS-231
slug: cloud-migration-without-redesign-old-infrastructure-patterns-cost
title: Cloud Prices for Old Infrastructure: The Cost of Moving Without Redesign
description: Copying a server to the cloud changes where it runs but not how it works. The business keeps its old inefficiencies and pays an hourly rate for them, plus overlap costs and manual work that was meant to disappear.
lead: Copying a server to the cloud changes where it runs but not how it works. The business keeps its old inefficiencies and pays an hourly rate for them, plus overlap costs and manual work that was meant to disappear.
category: Digital Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Systems moved to the cloud unchanged, so old infrastructure patterns are now billed at cloud rates
primary_cost_mechanism: Over-provisioned and always-on cloud capacity, duplicate running costs and manual operations that were meant to disappear
sources:
  - Cost Optimization Pillar - AWS Well-Architected Framework - Cost Optimization Pillar | https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html
  - Cost Optimization design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles
  - Plan your migration - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration
related:
  - The Automation Only One Person Understands: The Hidden Cost of Dependency | /impact/automation-understood-by-one-employee-continuity-maintenance-cost/
  - The Cost of Work Waiting for Approval | /impact/approval-queues-blocked-capacity-cost/
  - Which Version Is Final? The Cost of Teams Working From Different Copies | /impact/conflicting-document-versions-rework-decision-cost/
summary: Copying a server to the cloud changes where it runs but not how it works. The business keeps its old inefficiencies and pays an hourly rate for them, plus overlap costs and manual work that was meant to disappear.
layout: plain
---
## The tolerated pain

Two years ago the business moved its systems to the cloud. The server in the cupboard was ageing, load-shedding kept interrupting it, and a provider offered a tidy migration. The accounting server, the file shares, the line-of-business application and its database were copied onto virtual machines in a data centre. Everything worked on the Monday morning, and the project was declared a success.

Then the invoices started. The virtual machines run all day and all night, sized to match the old server's worst-case day. Staff still connect through a remote desktop because the application was never designed for browsers. Reports still depend on a nightly export that someone started by hand in 2016. The bill is bigger than the old electricity, maintenance and support costs combined, and the business is unsure what it gained.

This is the cost of moving without redesigning: paying cloud prices for infrastructure patterns that were built for a server room. It is not an argument against the cloud. It is an argument against assuming that a changed location is the same as a changed way of working.

## Why old patterns cost more in the cloud

An on-premises server is a sunk cost. Once bought, running it at ten per cent utilisation costs almost the same as running it at ninety. The cloud works differently. Most services bill for what is provisioned or consumed, by the hour, so waste is charged continuously. Several old habits become expensive.

- **Sizing for the peak.** A server was bought for the busiest day of the year and sits mostly idle. In the cloud you still pay for that capacity every hour unless it is resized or scheduled.
- **Always on.** Test, reporting and development systems ran around the clock because switching them off was never worth the effort. Billing by the hour changes that arithmetic. See [idle test and development systems](/impact/idle-test-development-systems-cloud-cost/).
- **One big machine doing everything.** The server that hosts the database, application, print queue and file shares must be paid for as one large unit, even if only one part is busy.
- **Manual operations.** Backups, patching and restarts that a person handled on site still need a person, now with less visibility.
- **Heavy data movement.** Applications that chat constantly with other systems, or users who download large files, can create network and storage charges that never existed in the building.
- **Paying twice.** The old licences, support contracts and hardware are often still running while the cloud copy is paid for as well.

Amazon's [cost optimization whitepaper](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html) describes a cost-optimised workload as one that fully uses its resources, achieves its outcome at the lowest price point and meets its functional requirements. It also notes that traditional on-premises environments make cost optimisation difficult because you must predict future capacity and business needs and manage complex procurement. A workload that is simply moved, without adjusting how it is sized and run, rarely meets the first of those descriptions.

## Why businesses tolerate it

- **The migration was urgent.** A failing server or an expiring support contract left no time to redesign anything, so the goal was just to get off the old hardware.
- **The project was measured on cut-over, not on outcomes.** Once the systems were running, the project closed and nobody was asked to look at the bill.
- **Redesign needs skills the business lacks.** Re-platforming an application costs more upfront than moving a virtual machine, and it needs people who understand both the business and the technology.
- **Costs arrive in small monthly amounts.** Each month's bill looks reasonable, so the cumulative overspend is hard to see. The Impact article on [cloud costs rising without explanation](/impact/cloud-costs-rising-without-explanation/) describes how that feels from the finance side.

## Operational symptoms

- virtual machines sized the same as the old physical servers, with low average utilisation;
- cloud bills higher than the figure used in the original business case;
- the old hardware, licences or support contracts still being paid for;
- manual restarts, exports or file transfers that still hold the process together, as described in [the unwritten workflow holding your cloud apps together](/patterns/the-unwritten-workflow-holding-your-cloud-apps-together/);
- no one able to say which part of the bill belongs to which application or department.

## How the pain becomes money

- **Over-provisioned capacity:** paying hourly for compute and storage that is rarely used.
- **Always-on charges:** systems that run at night and on weekends when nobody uses them.
- **Duplicate running costs:** old and new environments paid for at the same time for longer than planned.
- **Labour that was meant to disappear:** manual operations still done by staff or an external supplier.
- **Foregone benefits:** no gain in resilience, speed of change or access, which were part of the original case.
- **Lock-in without return:** a growing commitment to a platform that has not changed how the business works.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Cape Town wholesaler that moved one physical server's workload to three cloud virtual machines, copying the old sizing.

| Assumption | Value |
| --- | --- |
| Monthly bill for three always-on virtual machines, storage and backups | R38,000 |
| Share of that bill attributable to capacity that is rarely used | 35% |
| Old hardware support and licence overlap still being paid | R4,200 a month for 6 extra months |
| Manual restarts and exports done by a staff member | 6 hours a week at R280 |

- Unused capacity: R38,000 × 35% × 12 = R159,600 a year
- Overlap cost: R4,200 × 6 = R25,200 once
- Manual operations: 6 × R280 × 48 = R80,640 a year
- **Illustrative total: about R265,000 in the first year**, of which perhaps two thirds is realistically recoverable

Microsoft's [cost optimization principles](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles) recommend starting with a cost model that segments expenses and forecasts total cost of ownership, including infrastructure, support and implementation, so that cost drivers are visible early. The same document warns that tactical approaches are reactive and reduce cost only in the short term. The rows above are the cost drivers such a model should expose.

## When it becomes commercially urgent

- the first full year of cloud bills is higher than the case that justified the move;
- the old environment is still running, with no date to shut it down;
- a renewal, licence change or support end-date is approaching;
- the business wants to add automation, reporting or AI that the current arrangement cannot support.

## What better looks like

Redesign does not need to be a rebuild. Start with the workloads that cost the most and change the least.

1. **Allocate cost to applications and owners.** You cannot improve a bill that nobody owns. Start with the approach in [cloud costs without business owner allocation](/impact/cloud-costs-without-business-owner-allocation/).
2. **Right-size.** Use actual utilisation data to reduce machines that were sized for a peak that rarely arrives.
3. **Schedule or remove.** Switch off test, training and reporting systems outside working hours, and delete resources that nobody uses, as covered in [unused cloud resources](/impact/unused-cloud-resources-financial-waste/).
4. **Retire the old environment.** Set a firm date to cancel old hardware, licences and support contracts.
5. **Automate the manual steps.** Replace restarts, exports and file copies with scheduled or event-driven processes.
6. **Decide per application.** For each system choose whether to keep, change, replace or retire it. [How to decide whether to replace or reconfigure a system](/insights/how-to-decide-whether-to-replace-or-reconfigure-a-system/) offers a practical way to do it.

Microsoft's guidance on how to [plan your migration](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration) recommends assessing the team's skills before migrating and bringing in external expertise when the team lacks migration experience, partly because it reduces risk and helps set realistic timelines. Budgeting for that assessment and for a later optimisation pass is far cheaper than paying for an unmodified workload indefinitely.

## Practical next actions

1. Export the last six months of cloud bills and split them by application, not by service name.
2. Compare average utilisation with provisioned size for every virtual machine.
3. List every old contract, licence and server that is still running after the move.
4. Identify the three manual steps that still hold the process together.
5. Choose the one application where redesign would reduce the bill the most and cost the least.
6. Agree a quarterly review of the cloud bill with a named business owner.

## Bottom line

Moving a server to the cloud changes where it sits and how it is billed. It does not change how the work is done. Unless the sizing, scheduling, operations and ownership are rethought, the business keeps its old inefficiencies and pays a utility rate for them. The money is recoverable, and the first step is to see which applications cost what and to redesign the few that carry most of the bill.
