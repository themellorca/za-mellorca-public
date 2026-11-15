---
hub: discovery
record_id: DISC-398
slug: recovery-tests-in-quiet-weeks-hide-peak-capacity-gaps
title: Recovery tests run in quiet weeks hide the capacity gaps of peak season
description: Recovery tests are scheduled when trade is slow, so they never show whether the standby can carry month-end, payroll or a seasonal peak. How to test against peak demand without endangering it.
lead: Recovery tests are scheduled when trade is slow, so they never show whether the standby can carry month-end, payroll or a seasonal peak. How to test against peak demand without endangering it.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Infrastructure lead or IT manager responsible for the recovery environment
budget_owner: CIO, COO or CFO
sources:
  - https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_dr_tested.html | https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_dr_tested.html
  - https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning | https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning
  - https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview | https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview
  - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html | https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html
summary: Recovery tests are scheduled when trade is slow, so they never show whether the standby can carry month-end, payroll or a seasonal peak. How to test against peak demand without endangering it.
layout: plain
---
An online retailer tests failover to its secondary environment every January, when trade is quietest. Each year the test passes: the site comes up within the target time and staff can place test orders. In late November, during the biggest sales week of the year, the primary environment fails. The secondary starts as planned, then slows to a crawl. It was sized to pass the January test, not to carry ten times the January traffic. The database on the secondary was configured with less compute than the primary to save cost. Checkout times out for most customers until the primary returns.

## The problem in plain language

Businesses avoid testing recovery during busy periods for good reasons: a failed test during month-end, payroll or a sales peak could cause the very outage it is meant to prevent. The result, though, is that every test happens under light load. The tests prove the recovery environment starts, not that it can do the job when it is most needed. Capacity limits in the standby, whether compute, database size, network bandwidth, licences or cloud quotas, stay hidden until a real incident happens at a busy time.

## What the buyer is actually trying to solve

The infrastructure lead or IT manager searching for this wants evidence that recovery will hold up under peak demand, without putting the peak itself at risk. They want to know how to size the standby, what to measure, and how to test capacity safely, especially after moving to the cloud where the standby can be scaled on demand but often is not.

## Evidence and system mechanism

### Capacity that passed last time may not pass now

The AWS Well-Architected best practice on [testing disaster recovery implementation](https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_dr_tested.html) warns that if a failover path is not tested frequently, assumptions about the secondary's capabilities may be wrong, and that capacity which was sufficient at the last test may no longer tolerate the load. It recommends regularly testing failover to verify that recovery time and recovery point objectives are met.

### Peaks should be planned for, not discovered

Microsoft's guidance on [capacity planning](https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning) says capacity planning should happen before predicted changes in usage such as seasonal variation, marketing campaigns and special events, and lists regular spikes and seasonal change among the scenarios to plan for. It also stresses understanding resource limits at service and tier level, and identifying reachable limits before they cause performance problems.

### Standby resources are often smaller by design

Microsoft's documentation on [Azure SQL active geo-replication](https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview) recommends that the geo-secondary use the same compute size as the primary, and warns that an under-sized secondary can cause application performance to suffer after failover, with scaling up taking significant time. Cloud capacity is also not unlimited at the moment you need it. AWS's documentation on [EC2 On-Demand Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) describes reserving compute in a specific zone so that business-critical workloads have assured capacity, and notes that reservations count against account quotas.

## Why this becomes urgent

Cloud migration is a common trigger. On premises, the standby was usually a fixed set of servers whose size everyone knew. In the cloud, the recovery environment is often designed to start small and scale up on failover, which saves money but only works if scaling rules, quotas and capacity are tested at peak levels. Our article on [cloud quotas discovered when deployments fail](/discovery/cloud-resource-quotas-discovered-when-deployments-fail/) covers one way this goes wrong. Business growth is another trigger: a standby sized two years ago may not match today's peak.

## Economic consequence

A recovery that fails under load during a peak hits the business at its most valuable time. Lost sales during a seasonal peak are rarely recovered later. A payroll or month-end process that cannot complete on the standby delays salaries, supplier payments or reporting deadlines. The business also carries a false sense of safety: continuity reports to the board say recovery is tested and working, when it has only been tested under conditions that never cause trouble.

## Root cause

- **Tests are scheduled for convenience.** Quiet periods are chosen to protect the business, so tests never meet real load.
- **Pass criteria ignore performance.** A test passes if systems start, not if they handle peak transaction volumes.
- **Standby is sized for cost.** Smaller secondary resources save money and are never revisited.
- **Peak demand is not measured.** Without data on peak transactions and users, nobody knows what the standby should carry, a gap noted in [capacity planning only after incidents](/discovery/capacity-planning-only-after-incidents/).
- **Scaling assumptions are untested.** Auto-scaling, quotas and reserved capacity are assumed to work at failover time.

## What good looks like

The business knows its peak demand for each critical service, in measurable terms such as orders per hour, concurrent users or payroll records processed, and when that peak occurs. The recovery environment is sized, or proven able to scale, to that peak with headroom, including databases, network links, licences and cloud quotas. Recovery tests have performance pass criteria as well as start-up criteria. Because a full test during the actual peak is risky, the business uses load testing against the recovery environment, replaying peak-level traffic in a controlled window, and runs at least one test per year close to a busy period with clear rollback rules. Where capacity cannot be guaranteed on demand, it is reserved. Our related article on [failover tested quietly that fails under real load](/discovery/failover-is-tested-quietly-and-fails-when-real-load-arrives/) looks at the same risk from the side of test design.

## Diagnostic questions

- When were your last three recovery tests, and how did business volume at those times compare with your peak?
- Do your recovery tests include a performance target, or only a start-up target?
- Is your standby database and compute the same size as production?
- Are your cloud quotas and any reserved capacity enough to run the whole recovery environment at peak load?
- Have you ever applied peak-level load to the recovery environment?

## Practical next actions

1. Measure peak demand for each critical service over the past year, recording the dates and the volumes.
2. Compare the recovery environment's configured capacity, including database size, compute, bandwidth, licences and quotas, with that peak.
3. Add performance criteria to recovery test pass conditions, such as response times at a stated transaction rate.
4. Run a load test against the recovery environment at peak-level volume in a controlled window, and record where it slows or fails.
5. Resize the standby, raise quotas or reserve capacity where the test shows a gap, and retest.
6. Schedule at least one recovery exercise per year closer to a busy period, with agreed rollback rules, so the test reflects real conditions.

## Where Mellorca fits

Mellorca helps businesses measure peak demand, size recovery environments to it and design load tests that prove capacity without risking live trading. This sits within our [digital infrastructure](/services/digital-infrastructure/) work, often alongside a cloud migration.

## Method note

This article draws on AWS and Microsoft architecture guidance and product documentation. Specific limits and features vary by platform. The opening example is illustrative and not based on a specific business.
