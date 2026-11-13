---
hub: patterns
record_id: PAT-069
slug: what-happens-between-reporting-periods-that-nobody-sees
title: The operational blind spots created by periodic reporting
description: Period totals and averages can be accurate and still hide the weeks, days and customers where the real problem sat.
lead: Period totals and averages can be accurate and still hide the weeks, days and customers where the real problem sat.
category: Data & Reporting
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data & Reporting
pattern_family: Data & Reporting
observable_condition: Reports are accurate and on time yet problems still appear to come from nowhere because summaries hide timing and the slow tail.
primary_identification: Reporting-granularity and sampling problem
commercial_value_dimensions: risk, customer experience, revenue, resilience
sources:
  - Google SRE - Defining slo: service level objective meaning | https://sre.google/sre-book/service-level-objectives/
  - The Kanban Guide - May 2025 (latest) - Kanban Guides | https://kanbanguides.org/english/
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
  - Get started with goals in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-goals-introduction
related:
  - When leadership cannot see bottlenecks until customers complain | /patterns/why-bottlenecks-surface-as-customer-complaints-first/
  - When KPI tracking becomes a data collection exercise | /patterns/when-measuring-performance-means-collecting-numbers-all-month/
  - Why manual reporting creates invisible risk | /patterns/the-risk-inside-reports-that-are-assembled-by-hand/
summary: Period totals and averages can be accurate and still hide the weeks, days and customers where the real problem sat.
layout: plain
---
A regional service desk reports its average response time every month. In September the average is comfortably inside target and the report is green. What the report cannot show is that during one particularly bad week, a third of the calls waited more than a day, and that two of those customers have since stopped buying. The month was fine. The week was not. The report was accurate and the picture was wrong.

This is a different problem from reports that arrive late. Here the report arrives on time and is correct, and it still hides what matters.

## The condition: the business is seen in snapshots

Most management reporting is periodic. Figures are summed or averaged over a week or a month and presented as a single line. The pattern is so familiar that it is rarely questioned: sales for the month, utilisation for the quarter, backlog at month end. Between one report and the next, the business is, in effect, unobserved.

You can often recognise the condition from comments such as:

- "The numbers look fine, so why are people so stressed?"
- "We only found out about it in the month-end report, and it had been like that for weeks."
- "The average is good, but a few customers are very unhappy."
- "We were fine on the last day of the month, and that's the day we measure."
- Staff describe peaks and troughs that never appear on a chart.

## The realisation: a period summary hides the shape

A single number for a period removes two things. It removes timing: the report does not say whether the problem sat in the first week or the last, or whether it is getting worse. It also removes distribution: an average can look healthy while a minority of cases are very poor.

The Google SRE book makes the distribution point sharply. In its discussion of service level objectives, it gives an example in which a typical request takes about 50 milliseconds, yet five per cent of requests are twenty times slower, and observes that an average would miss that. It argues that percentiles show the shape of the data: the median shows the typical experience, and a high percentile shows plausible worst cases. The example is from online services, but the same logic applies to delivery times, invoice query resolution and quote turnaround. The customers in the slow tail are real, and they do not experience the average.

## Identification: a reporting-granularity and sampling problem

The class of issue is one of reporting granularity. The visible symptom is surprise: problems that "came out of nowhere". The common assumption is that the report was incomplete, or that management should have been paying closer attention. The structural cause is that the reporting cycle is too coarse, and the summary too aggregated, to show events shorter than the reporting period or cases that differ from the typical.

Think of it as sampling. If you look at a business once a month, you will see only what is happening on that day, or the blended result of the whole month. Anything that rose and fell between observations is invisible. A cash shortfall that opens on the 12th and closes on the 25th never appears in a report taken on the 30th.

## Diagnosis: why the blind spots are built in

An illustrative example, not a client case. A small online retailer reports stock availability at month end. Stock is replenished on the last working day of every month, so the month-end figure is always healthy. In the second and third weeks, several popular lines are routinely out of stock. Customers see "unavailable" and buy elsewhere. The retailer's report shows high availability, and the retailer concludes that demand for those products is soft.

The mechanisms are straightforward:

- **Process:** the reporting calendar follows accounting periods rather than the rhythm of the work.
- **Information:** measures are stored as period totals, so the underlying events and timing are lost.
- **Systems:** the data is extracted at the end of the cycle, so there is no continuous record to examine in between.
- **People:** averages are comfortable to present, because they smooth out the awkward cases.

Our related articles on [when the weekly report is already out of date](/patterns/when-the-weekly-report-is-already-out-of-date/) and [the difference between having data and having visibility](/patterns/the-difference-between-having-data-and-having-visibility/) explore delay and visibility; the issue here is what is lost within a period, not how late it arrives.

## The commercial value at stake

The value tied to this pattern is risk, customer experience and revenue. Risk, because short-lived problems, such as a cash dip, a service backlog or a stock-out, can do damage without ever showing up in the monthly numbers. Customer experience, because the customers in the slow tail are often the ones who leave. Revenue, because an availability or delivery problem that is invisible in the report is also one that nobody is fixing.

No percentage is claimed here. The effect depends on how volatile the business is within a period, and the way to find out is to compare a period summary with a finer view of the same data. In many cases, the difference is the finding.

## Possibility: watch the flow, not just the total

The alternative is to complement period summaries with measures that show what is happening within the period. The Kanban Guide describes four flow measures: work in progress, throughput, work item age and cycle time. These are inherently time-based. Work item age, for example, shows how long an unfinished item has been underway, which will reveal a stuck item while it is stuck, not after it has been finished and averaged.

Alerts provide the second half. Microsoft's documentation on [Power BI](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts) data alerts explains that you can set a threshold on a dashboard tile and be notified when the data crosses it. It also makes clear that alerts only work on refreshed data, which is a useful lesson: an alert is only as timely as the feed behind it. Scorecards in the same product take snapshots of goal data at a maximum daily cadence and retain the last updated value for each day. That is a reminder that the sampling rate of your measurement tool sets the limit on what you can see. If the data refreshes weekly, you cannot see a two-day problem.

The right sampling rate depends on how quickly a problem can do damage. A cash position might need daily attention; a quarterly customer satisfaction measure may be fine at its current pace. The mistake is to apply one reporting rhythm to everything.

## Intervention: match the rhythm to the risk

1. **List the few things that could hurt quickly.** Cash, delivery times, service backlog and critical stock are typical candidates.
2. **Ask how fast each could go wrong.** The answer sets how often you need to look.
3. **Report the spread, not just the average.** Show the typical case and the slow tail, such as the median and the slowest tenth.
4. **Keep the history.** Store events or daily values, not just monthly totals, so that you can examine what happened between reports.
5. **Add thresholds where it matters.** For the handful of measures that can hurt quickly, set an alert with a named person who knows what to do.
6. **Keep the periodic report.** It still serves its purpose for trend and accountability. It just should not be the only lens.

For help deciding what to show, see [how to decide what should be on an operations dashboard](/insights/how-to-decide-what-should-be-on-an-operations-dashboard/).

## Practical diagnostic questions

- What was the worst day of last month, and does any report show it?
- Which of your measures is taken only at month end, and what happens in between?
- If your average response time is good, how long did your slowest customers wait?
- When did a problem last "come out of nowhere", and what did the preceding reports show?

## The bottom line

Periodic reporting is useful, but it is a summary, and every summary leaves something out. The blind spots are not a failure of care. They are a feature of measuring at the wrong rhythm or at the wrong level of aggregation. Looking at the shape of the data as well as its total is often the quickest way to see what the monthly pack has been missing.
