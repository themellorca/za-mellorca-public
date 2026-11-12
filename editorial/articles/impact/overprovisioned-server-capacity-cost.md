---
hub: impact
record_id: CPS-228
slug: overprovisioned-server-capacity-cost
title: Paying for Server Capacity the Business Does Not Use
description: Servers sized for an imagined peak keep billing at full size every month. Utilisation data, sensible headroom and a rightsizing routine turn insurance capacity into a deliberate decision.
lead: Servers sized for an imagined peak keep billing at full size every month. Utilisation data, sensible headroom and a rightsizing routine turn insurance capacity into a deliberate decision.
category: Digital Infrastructure
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Paying for more server capacity than the workload actually needs
primary_cost_mechanism: Technology waste, per-core licence inflation and capital tied up in oversized hardware
sources:
  - Optimize virtual machine (VM) or virtual machine scale set (VMSS) spend by resizing or shutting down underutilized instances - Azure Advisor | https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations
  - What is AWS Compute Optimizer? - AWS Compute Optimizer | https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html
  - Select the correct resource type, size, and number - Cost Optimization Pillar | https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/select-the-correct-resource-type-size-and-number.html
related:
  - Manual Device Setup Adds Labour and Repeat Work to Every Rollout | /impact/manual-device-setup-labour-rework-cost/
  - Slow Computers Turn Small Delays into Paid Waiting | /impact/slow-computers-paid-waiting-cost/
  - New Employees Without Equipment Create Paid Onboarding Delay | /impact/new-employees-without-equipment-onboarding-cost/
summary: Servers sized for an imagined peak keep billing at full size every month. Utilisation data, sensible headroom and a rightsizing routine turn insurance capacity into a deliberate decision.
layout: plain
---
## The tolerated pain

When a business buys or rents a server, the safest-sounding answer to "how big?" is "bigger than we need". Nobody gets blamed for a server that is too powerful. Plenty of people get blamed for one that falls over at month-end. So capacity is chosen for the worst day anyone can imagine, plus a margin, plus growth that may or may not arrive.

That instinct is understandable. The trouble is that the worst day happens a few times a year, while the bill for the capacity arrives every month. A cloud virtual machine sized for peak load is charged at peak size around the clock. An on-premises server bought with twice the processors and memory the workload uses ties up capital, licences and power for its entire life.

This is different from paying for resources nobody uses at all, which is covered in [the financial waste of unused cloud resources](/impact/unused-cloud-resources-financial-waste/). Here the server is in use and doing real work. It is simply much larger than the work requires.

## Why overprovisioning survives

- **Sizing happens once.** Capacity is chosen at implementation, often by the supplier, and rarely revisited when usage settles.
- **Fear is asymmetric.** The cost of an outage is vivid; the cost of spare capacity is a quiet monthly line.
- **Nobody looks at utilisation.** The data usually exists, in the cloud console or the server's monitoring, but nobody is asked to review it.
- **Licences follow hardware.** Some database and server software is licensed per core, so an oversized server can also mean oversized licence fees.
- **The supplier has no incentive to shrink it.** A reseller or hosting partner billing on capacity will rarely volunteer a smaller invoice.

## Operational symptoms

Overprovisioning rarely causes visible operational problems, which is exactly why it persists. The signs are in the numbers rather than in complaints:

- average processor use on production servers sits in single digits for weeks at a time;
- memory is allocated generously but most of it is never touched;
- test and development environments are the same size as production;
- a server bought "for growth" three years ago is still running the same workload;
- nobody can say what the busiest hour of the month actually demanded.

## What the cloud providers' own tools say

The major cloud providers publish tools specifically to find oversized resources, which is a useful sign of how common the problem is.

Microsoft's [Azure Advisor cost recommendations](https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations) analyse processor, memory and outbound network use and recommend resizing a virtual machine when the current load would fit a cheaper size without hurting performance. For workloads it classifies as user-facing, it targets the 95th percentile of processor and network use at 40% or lower on the recommended size, and the 99th percentile of memory at 60% or lower. For non-user-facing workloads, both targets are 80%. By default it looks back seven days, configurable up to 90.

Those thresholds are a useful reminder that rightsizing does not mean running servers flat out. Headroom is legitimate. The question is whether the headroom is deliberate and proportionate.

Microsoft is also candid about limits. Advisor's savings estimates use retail rates and ignore discounts and reserved capacity already purchased, so listed savings may be higher than achievable. And it lists situations where a recommendation may not apply: capacity provisioned for expected traffic, disaster recovery, testing, or a need to keep sizes consistent.

AWS offers similar analysis. Its [Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html) reviews configuration and utilisation metrics for the previous 14 days by default, or 93 days with a paid enhancement, and reports whether resources are optimal. The AWS Well-Architected guidance on [selecting the correct resource type, size and number](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/select-the-correct-resource-type-size-and-number.html) describes right-sizing as an iterative process triggered by changes in usage, and notes that it can be a one-off exercise when the effort of repeating it would outweigh the savings.

The same logic applies to physical servers in a comms room. The tools are different, but the question is the same: what does the workload actually use, at its busiest, and how much margin is reasonable on top of that?

## How the pain becomes money

- **Technology waste:** monthly cloud charges for compute and memory that the workload never uses.
- **Licence inflation:** per-core software licences paid on cores that sit idle.
- **Tied-up capital:** on-premises hardware bought years ahead of need, depreciating while it waits.
- **Running costs:** power, cooling and backup capacity scaled to the oversized estate.
- **Opportunity cost:** budget that could have funded integration, security or support work.

## An illustrative cost model

The following is **illustrative**; every figure is an assumption to show the method. Imagine a Pretoria professional-services firm running its practice-management system and file services on four cloud virtual machines.

| Server | Current monthly cost (assumed) | Observed peak use | Size after review | New monthly cost (assumed) |
| --- | --- | --- | --- | --- |
| Application server | R14,000 | Low; peaks well under half capacity | One size smaller | R7,000 |
| Database server | R18,000 | Moderate at month-end | Unchanged | R18,000 |
| File server | R9,000 | Very low | One size smaller | R4,500 |
| Test server | R9,000 | Used a few days a month | Smaller, switched off out of hours | R2,500 |
| **Total** | **R50,000** |  |  | **R32,000** |

In this example the monthly saving is R18,000, or R216,000 a year, with the database deliberately left alone because its month-end peak justifies the size. Subtract the cost of the review and any change work, and confirm the result against your actual invoice, not the tool's estimate. If you have already committed to reserved capacity, the saving may be smaller or may only arrive at renewal.

## Trade-offs to respect

Rightsizing done carelessly creates the outage everyone feared. Reasonable safeguards include reviewing a period that includes month-end or seasonal peaks, changing one server at a time, keeping a quick route back to the previous size, and agreeing performance acceptance criteria with the people who use the system. Capacity kept for disaster recovery or a confirmed upcoming project is a legitimate decision, as long as it is recorded as one.

## When it becomes commercially urgent

1. Infrastructure costs are rising faster than users, transactions or revenue.
2. A reserved-capacity or hardware renewal is approaching, which is the moment to resize before committing again.
3. Per-core licence renewals are due.
4. Nobody has reviewed utilisation since the system went live.

## What better looks like

Each server has an owner who can explain why it is the size it is. Utilisation is reviewed on a schedule, at least quarterly, and before every renewal. Headroom targets are written down, so the decision to keep spare capacity is deliberate. Costs are allocated to the business function they serve, as discussed in [cloud costs without business-owner allocation](/impact/cloud-costs-without-business-owner-allocation/), so that someone notices when capacity outgrows value.

## Practical next actions

1. List every server, cloud or physical, with its monthly or annualised cost and its owner.
2. Export at least 30 days of processor, memory and network use, including a month-end.
3. Turn on the provider's rightsizing recommendations and read them critically, not automatically.
4. Agree headroom targets per workload: tighter for back-office jobs, looser for customer-facing systems.
5. Resize the clearest cases first and measure the invoice afterwards.
6. Put a review date before every renewal or reservation.

Mellorca's [digital infrastructure work](/services/digital-infrastructure/) includes this kind of capacity review. The broader principle, that spending more on technology does not guarantee more value, is explored in [why technology spend does not automatically create business value](/insights/why-technology-spend-does-not-automatically-create-business-value/).

## Bottom line

Spare capacity is insurance, and insurance should be priced and chosen deliberately. When servers are sized for an imagined worst case and never revisited, the business pays a premium every month for protection it may not need. Measure what the workload really uses, keep the headroom you can justify, and stop paying for the rest.
