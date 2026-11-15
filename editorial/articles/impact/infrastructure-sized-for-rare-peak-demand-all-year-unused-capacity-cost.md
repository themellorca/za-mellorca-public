---
hub: impact
record_id: CPS-238
slug: infrastructure-sized-for-rare-peak-demand-all-year-unused-capacity-cost
title: Paying All Year for the Busiest Week: The Cost of Infrastructure Sized for Peaks
description: Servers, cloud instances and licences sized for the Black Friday rush, the payroll run or the enrolment window are paid for every day of the year. Most of that capacity sits idle for eleven months.
lead: Servers, cloud instances and licences sized for the Black Friday rush, the payroll run or the enrolment window are paid for every day of the year. Most of that capacity sits idle for eleven months.
category: Cloud and Infrastructure
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Cloud and Infrastructure
commercial_domain: Cloud and Infrastructure
primary_pain: Infrastructure is sized for rare peak demand and paid for at that size all year round
primary_cost_mechanism: Monthly hosting and cloud charges for idle capacity, licences priced on peak-sized servers, money tied up that could fund improvements, and peak capacity based on guesses that may still fail
sources:
  - Manage demand and supply resources - Cost Optimization Pillar | https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html
  - Autoscale in Azure Monitor - Azure Monitor | https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview
related:
  - Paying Twice for Hosting: The Cost of Duplicated Environments | /impact/duplicated-hosting-environments-consolidation-infrastructure-cost/
  - No Budget, No Alert: How Cloud Bills Surprise Businesses | /impact/cloud-spending-no-budgets-alerts-unexpected-consumption-financial-risk/
  - Test servers running all night: The cost of idle non-production systems | /impact/idle-test-development-systems-cloud-cost/
summary: Servers, cloud instances and licences sized for the Black Friday rush, the payroll run or the enrolment window are paid for every day of the year. Most of that capacity sits idle for eleven months.
layout: plain
---
## Built for the busiest week of the year

An online retailer in Johannesburg sized its hosting for Black Friday. Three years ago the site slowed badly during the sale weekend, orders were lost and the owner decided it must never happen again. The hosting was upgraded to handle three times the previous peak. It has not slowed since. It has also run at around 15% of its capacity for most of every year, and the monthly bill reflects the size of the busiest weekend, not the average week.

The same pattern appears in many forms: an accounting firm that keeps a large server for the tax filing season, a school group that sizes its systems for enrolment week, a payroll bureau whose month-end processing sets the size of its infrastructure for the rest of the month.

## Why peak sizing made sense, and why it often no longer does

When infrastructure meant owning hardware, sizing for the peak was rational. A server could not be made bigger for a week and smaller afterwards. Buying for the worst case was the only way to avoid failure at the most important moment.

Cloud services changed that. Amazon Web Services states the principle in its Well-Architected guidance on [managing demand and supply resources](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html): in the cloud you can supply resources to match workload demand when they are needed, avoiding costly and wasteful overprovisioning, while balancing that against the need for resilience and the time it takes to provision. Microsoft describes the mechanism in its overview of [autoscale in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview): resources are added when load rises and removed when it falls, which lowers costs, and rules can be based on metrics or on a schedule for predictable time patterns.

The difficulty is that many businesses moved to the cloud without changing the sizing habit. They rented a large server in the same way they used to buy one. The problem described in [cloud migration without redesign](/impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/) often shows up first as peak-sized capacity running all year.

## What year-round peak capacity costs

The figures below are illustrative and rely on stated assumptions.

### Idle capacity

Suppose a business pays R40,000 a month for hosting sized for a peak that lasts four weeks a year, and that a setup able to scale would cost R15,000 a month in normal periods and R40,000 during the peak. The fixed approach costs R480,000 a year. The scaling approach costs about R15,000 × 11 + R40,000 = R205,000. The difference, roughly R275,000, is paid for capacity that is not used.

### Licences and software tied to size

Some database and server licences are priced by processor cores or memory. Peak-sized machines can carry peak-sized licence bills.

### Hidden opportunity cost

Money committed to idle infrastructure is not available for improvements that would increase revenue or reduce labour.

### False security

Peak sizing is often based on a guess. If the next peak is larger than expected, the fixed capacity can still fail, and the business has paid for a year of insurance that did not cover the event.

## Why not every system should scale

Scaling is not free or automatic. Applications have to be designed to run on several smaller servers rather than one large one. Older software, many on-premises business applications and some databases scale only by moving to a bigger machine, which may need a restart. Scaling also adds monitoring and configuration work. For a small, stable workload, the saving may not justify the effort. The point is to make a deliberate choice, rather than paying for a peak all year by default.

Where full autoscaling is not practical, simpler options often exist:

- **Scheduled resizing**: increasing a server's size for a known period, such as the tax season or a sale, and reducing it afterwards.
- **Separating the peak workload**: moving only the component that experiences the spike, such as the online checkout or a reporting job, onto capacity that can scale.
- **Queueing work**: allowing non-urgent tasks, such as report generation or batch imports, to wait in a queue rather than requiring immediate capacity.
- **Using a content delivery network** for websites, so that traffic peaks are absorbed before they reach the server.
- **Reviewing commitments**: reserved or committed pricing suits the steady baseline, while on-demand pricing suits the peak.

## A worked example of scheduled resizing

Consider the accounting firm that runs a large virtual server all year because of tax season. Its workload is predictable: heavy use from July to November, light use for the rest of the year. Instead of autoscaling, which its practice management software does not support, it can resize the server on a schedule, choosing a larger size on the first of July and a smaller one in December. The change takes a planned restart outside working hours. The firm keeps the same software, the same backups and the same support arrangement. The only difference is that it pays for the larger size for five months instead of twelve. Changes of this kind are often the quickest saving available, because they need a calendar entry and a tested procedure rather than a redesign.

## Who should own the decision

Capacity sizing often sits with a hosting provider or developer who has little reason to suggest a smaller bill and every reason to avoid an outage. The business owner sees one monthly amount without a breakdown of baseline and peak. Asking the supplier to show utilisation across the year, month by month, usually makes the gap obvious. The related problems of [overprovisioned server capacity](/impact/overprovisioned-server-capacity-cost/) and [premium cloud services for workloads that do not need them](/impact/premium-cloud-services-workloads-that-do-not-need-them-overengineering-cost/) follow the same logic of paying for capacity that is not used.

## Practical next actions

1. **Get twelve months of utilisation data.** Ask your hosting or cloud provider for CPU, memory and traffic by month, alongside the monthly bill.
2. **Identify your genuine peaks.** List the dates and durations of real demand spikes, and how much capacity they actually used.
3. **Calculate the idle cost.** Compare the annual cost of fixed peak capacity with a baseline-plus-peak model.
4. **Check which systems can scale.** Ask your developer or supplier which components can scale out, which can be resized on a schedule and which cannot change.
5. **Pilot scheduled resizing.** Start with the most predictable peak and measure both performance and cost.
6. **Review commitments at renewal.** Align reserved capacity with the steady baseline rather than the peak.

Being ready for the busiest week matters. Paying for that readiness during the other eleven months of the year is often a habit carried over from owning hardware, and in many cases it is no longer necessary.
