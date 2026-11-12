---
hub: discovery
record_id: DISC-303
slug: server-capacity-added-because-utilisation-data-is-not-trusted
title: Why servers get upsized when nobody trusts the utilisation data
description: After a slowdown, the safe-looking fix is a bigger server, because nobody trusts the utilisation graphs. Why the data is often incomplete, and how to make it good enough to decide on.
lead: After a slowdown, the safe-looking fix is a bigger server, because nobody trusts the utilisation graphs. Why the data is often incomplete, and how to make it good enough to decide on.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or infrastructure lead, with the owners of the affected applications
budget_owner: Finance director or chief information officer
sources:
  - CloudWatch metrics that are available for your instances - Amazon Elastic Compute Cloud | https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html
  - Metrics collected by the CloudWatch agent - Amazon CloudWatch | https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html
  - Optimize virtual machine (VM) or virtual machine scale set (VMSS) spend by resizing or shutting down underutilized instances - Azure Advisor | https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
related:
  - When capacity planning only happens after something has gone down | /discovery/capacity-planning-only-after-incidents/
  - When monitoring alerts fire and nobody knows who should respond | /discovery/monitoring-alerts-without-a-clear-response-owner/
  - Infrastructure resources that exist without a clear business owner | /discovery/infrastructure-resources-without-a-clear-business-owner/
summary: After a slowdown, the safe-looking fix is a bigger server, because nobody trusts the utilisation graphs. Why the data is often incomplete, and how to make it good enough to decide on.
layout: plain
---
The finance system slowed to a crawl during month-end. Users complained, the managing director asked what was being done, and the IT team doubled the size of the server that evening. The slowdown stopped. Nobody could say whether the server had actually run out of capacity, because the graphs showed CPU at 35 percent on average and nobody believed them. The larger server is still running, at the larger price, a year later.

This is a familiar pattern. Capacity is added not because data shows it is needed, but because the data available is not trusted enough to argue against it.

## The problem in plain language

Most servers, cloud or hosted, have some utilisation monitoring. The trouble is that it is often incomplete or misleading:

- only CPU is measured, while memory and disk, which often cause the slowdown, are not;
- readings are averaged over five minutes or longer, smoothing away the short spikes users actually feel;
- the monitoring dashboard and the operating system on the server show different numbers;
- data is kept for a short time, so last month-end cannot be compared with this one;
- nobody has linked server metrics to what users experienced.

When an incident happens and the numbers look fine, people conclude the numbers are wrong. Adding capacity feels like the only safe move. The cost of that decision is described in [paying for server capacity the business does not use](/impact/overprovisioned-server-capacity-cost/); this article is about the measurement problem underneath it.

## What the buyer is actually trying to solve

People search for why a server is slow when CPU is low, how to monitor memory on a cloud server, whether they need a bigger virtual machine, or why cloud recommendations say a server is underused when it feels overloaded. The real need is evidence good enough to make a sizing decision and defend it, both when adding capacity and when reducing it.

## Evidence and system mechanism

### Default metrics are coarse and incomplete

Amazon's documentation on [CloudWatch metrics for EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html) states that, by default, each data point covers five minutes of activity, with one-minute data available through detailed monitoring. The default instance metrics cover CPU, network and disk operations; memory is not among them. The same page notes that operating system tools can show a different CPU percentage from CloudWatch, for reasons including interrupt-heavy workloads and live migration. Two honest tools can therefore disagree.

### Memory and disk space need an agent

The documentation for [metrics collected by the CloudWatch agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html) lists memory, swap and disk-space metrics that become available when the agent is installed on the server, in addition to the default instance metrics. If the agent was never installed, the most common cause of a sluggish business application, memory pressure, is simply not being measured. Other clouds and monitoring tools have equivalent agents and the same gap when they are absent.

### Sizing tools use percentiles and state their limits

Microsoft's [Azure Advisor guidance on resizing virtual machines](https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations) shows how a careful sizing rule works. Metrics are sampled every 30 seconds and aggregated, and resize recommendations target, for example, the 95th percentile of CPU and the 99th percentile of memory on the proposed size, over a configurable lookback period of 7 to 90 days. Microsoft also lists cases where the recommendation may not apply, such as capacity provisioned for upcoming traffic or disaster recovery. The lesson for any business is that capacity decisions should rest on percentiles over a representative period, not on a single average or a single bad day.

### Averages hide what users feel

Google's chapter on [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) warns that averages conceal slow outliers and recommends looking at distributions. It also names saturation, how full a resource is, as one of the four signals that matter for user-facing systems, alongside latency, traffic and errors. A server can show a modest average CPU while users wait on its slowest moments.

## Problem owner and why-now trigger

The IT manager or infrastructure lead owns the monitoring. Application owners, such as the financial controller for the finance system, carry the user complaints. The finance director usually owns the budget that the larger server consumes.

The trigger is almost always an availability incident: a slowdown during month-end, payroll or a sales peak. The pressure to act that night is high and the cost of being wrong feels asymmetric. Later triggers are a cloud bill review, a migration project that has to size servers in a new environment, or a vendor recommendation to downsize that nobody feels able to accept.

## Economic consequence

- **Permanent overspend.** Capacity added in a crisis is rarely removed, and cloud servers bill every hour they run.
- **Unsolved incidents.** If the real cause was a slow query, a disk filling up or a misconfigured job, a bigger server postpones the problem rather than solving it.
- **Ignored savings advice.** Valid rightsizing recommendations are dismissed because the data behind them is not trusted.
- **Poor migration sizing.** Without reliable baselines, new environments are sized by guesswork, usually on the high side.

Knowing what an hour of slowdown actually costs helps balance these choices, as discussed in [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).

## Root cause

- **Default monitoring left as is.** No agent, no memory or disk metrics, five-minute averages.
- **Short retention.** Data from the last peak is gone before the next one.
- **No link to user experience.** Server metrics are not compared with application response times or errors.
- **No agreed sizing rule.** Nobody has decided which percentile, over which period, justifies a change.
- **No post-incident review.** The upsizing is never checked to see whether it fixed the cause.

## Practical intervention

1. **Complete the measurements.** Install monitoring agents so memory, disk space and disk queue are collected alongside CPU and network.
2. **Increase resolution where it matters.** Use one-minute data for business-critical servers, at least during known peaks.
3. **Keep enough history.** Retain data across at least two business cycles, such as two month-ends.
4. **Measure what users feel.** Track application response time and errors, so server metrics can be read against experience.
5. **Agree a sizing rule.** For example, act on sustained 95th-percentile CPU or memory above a stated threshold over a representative period.
6. **Review every emergency upsizing.** Within a month, check whether the data supports the new size and whether the root cause was something else.

### Trade-offs

Extra metrics and longer retention cost money, though usually far less than an oversized server. Some headroom is sensible; the aim is to choose it deliberately.

### An illustrative example

Illustrative: a Pretoria professional services firm with about 80 staff doubled its cloud finance server after a month-end slowdown. A later review found that no memory metrics had ever been collected. After installing the monitoring agent and watching the next two month-ends, the team saw memory pressure from a reporting job scheduled during peak hours, with CPU well within limits. Moving the job and returning to a smaller size, with headroom, kept month-end stable.

## Diagnostic questions

- Do you collect memory and disk metrics on your business-critical servers, or only CPU?
- At what interval are readings taken, and how long are they kept?
- After the last slowdown, could you show which resource was saturated?
- Do you have a written rule for when to add or remove capacity?
- Which servers were upsized in an emergency and never reviewed?

## What good looks like

Business-critical servers report CPU, memory, disk and network at a useful resolution, with history covering several business cycles. Application response times sit alongside server metrics. Capacity changes follow an agreed percentile-based rule and are reviewed after the event. When a slowdown happens, the team can say what ran out and fix the cause, and a recommendation to downsize can be tested against data everyone accepts. Single points of failure that monitoring misses are covered in [when one unmonitored component can stop a critical service](/patterns/when-one-unmonitored-component-can-stop-a-critical-service/).

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can set up complete server monitoring, define sizing rules and review past emergency upsizing. Through [managed digital operations](/services/managed-digital-operations/), Mellorca can keep that monitoring and review running as part of normal operations.

## Method note

Product behaviours come from current AWS and Microsoft documentation and differ between providers and monitoring tools. The example is illustrative, not a client case. Adding capacity is sometimes the right call; the problem is making that call without data that can be trusted.
