---
hub: discovery
record_id: DISC-269
slug: reports-cannot-tell-data-delay-from-business-decline
title: When a drop in the numbers is late data, not a business problem
description: Management reports often cannot show whether a fall in sales or output is real or just data that has not arrived yet. How to build freshness and completeness signals into the figures leaders act on.
lead: Management reports often cannot show whether a fall in sales or output is real or just data that has not arrived yet. How to build freshness and completeness signals into the figures leaders act on.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead
budget_owner: Finance director or COO
sources:
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
  - Configure scheduled refresh - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
  - Add sources to your DAG - dbt Developer Hub | https://docs.getdbt.com/docs/build/sources
related:
  - Why the data pipelines behind your dashboards need an operational owner | /discovery/data-pipelines-have-no-clear-operational-owner/
  - Why reports keep recalculating figures your systems already produce | /discovery/reports-recalculate-figures-already-available-upstream/
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
summary: Management reports often cannot show whether a fall in sales or output is real or just data that has not arrived yet. How to build freshness and completeness signals into the figures leaders act on.
layout: plain
---
Monday's management meeting opens with a worrying chart: sales at the Durban branch fell by a third last week. The regional manager is asked to explain. She cannot, because her team had a normal week. Two days later the cause emerges. The branch's point-of-sale system had not synchronised since Thursday, so Friday and Saturday trading never reached the report. The numbers recover on the next refresh. By then the meeting has discussed a turnaround plan, and the regional manager has spent a day defending a decline that never happened.

This article looks at that operating condition: management reports that cannot distinguish a data delay from genuine business deterioration. It is a common cause of metric disputes, and it erodes trust in reporting faster than almost any other failure, because the report looks perfectly normal while it is wrong.

## The problem in plain language

A report shows a number. It rarely shows whether that number is complete. When a source system is late, an integration fails or a branch uploads its data after the report refreshes, the figure simply comes out lower. Nothing on the page says "two of seven branches have not reported" or "data up to Thursday only". Readers see a drop and react to it as a business event.

The reverse also happens. When a dip is real, managers who have been burned before assume it is a data problem and ignore it. Either way, the report has lost its main purpose: telling leaders what is actually happening.

## What the buyer is actually trying to solve

Finance and operations leads search for how to show data freshness on dashboards, how to detect incomplete data in reports, or why figures change after the meeting. Executives want to know, before acting, whether a movement is real. The practical need is a report that states clearly, for each figure, how current and how complete its data is, so that a missing feed looks different from a bad week.

## Evidence and system mechanism

### Refreshes can fail quietly or stop altogether

Reporting tools refresh data on a schedule, and those schedules can fail. Microsoft's documentation on [data refresh in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) explains that refresh failure notifications go by email to the model owner by default, that additional contacts can be added, and that on-demand refreshes and refreshes triggered programmatically, such as through Power Automate, do not trigger email notifications. Its guidance on [configuring scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh) adds that the service deactivates a refresh schedule after four consecutive failures, or when it detects an error such as expired credentials, and that the threshold cannot be changed. In both cases the report continues to display its last successful data. The owner may know; the reader usually does not.

### A successful refresh can still bring incomplete data

Refresh status describes the reporting tool, not the sources behind it. If a branch system has not sent its transactions, the refresh succeeds and the report is still incomplete. That is why data teams test the sources directly. dbt's documentation on [source data freshness](https://docs.getdbt.com/docs/build/sources) describes configuring warning and error thresholds per source, based on a timestamp column that records when data was loaded, and comparing the latest value against those thresholds to decide whether the source is fresh or stale. The same principle can be applied in any stack: for each feed, know the time of the latest record and compare it with what you expect.

### What a reader needs alongside the number

| Signal | What it tells the reader |
| --- | --- |
| Data as at | The latest transaction date included, not just the refresh time |
| Sources reporting | For example, "6 of 7 branches", with the missing ones named |
| Expected versus received | Record counts compared with a normal day or week |
| Provisional flag | Periods still open to late data are marked as such |

## Problem owner and why-now trigger

The BI or reporting lead owns the fix. The finance director or COO typically owns the problem's consequences, because they chair the meetings where false declines cause damage, and they usually fund the work.

The trigger is almost always a metric dispute: a manager challenged on a fall that turns out to be missing data, or a board question about why last month's figure changed after the pack was issued. Expansion is another trigger, because each new branch, store or system adds another feed that can arrive late. The wider cost of acting on stale numbers is described in [the cost of decision-making with outdated information](/impact/pain-decision-making-with-outdated-information/).

## Economic consequence

The direct cost is management time spent investigating declines that did not happen, and the occasional real decision taken on false data: a stock order cut, a promotion launched or a manager put on a performance plan. The indirect cost is larger. Once a report has cried wolf a few times, leaders discount it, and a genuine deterioration is noticed later than it should be. The pattern of finding out too late is explored in [why management finds out too late](/patterns/why-management-finds-out-too-late/).

## Root cause

- **Freshness is tracked for the tool, not the source.** Refresh success is monitored; the arrival of each source's data is not.
- **Completeness is never stated.** Reports show totals without saying which sources contributed.
- **Failure alerts go to one person.** The model owner is notified, but the readers and the source owners are not.
- **Periods are treated as closed too early.** Last week is reported as final while late transactions are still arriving.
- **Integrations fail silently.** The feed from the branch system stops without anyone noticing; see [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).

## Practical intervention

1. **List the feeds behind each management report.** For each branch, system or file, note its expected arrival time and normal volume.
2. **Measure arrival, not just refresh.** Record the latest transaction timestamp and record count per source after every load.
3. **Put the signals on the page.** Show "data as at", sources reporting, and a provisional marker for open periods next to headline figures.
4. **Alert the right people.** Send missing-feed alerts to the source owner and the report owner, before the report is read.
5. **Hold or annotate incomplete figures.** Where a source is missing, show the figure with a clear warning, or exclude the source and say so, rather than presenting a silent total.
6. **Agree a close rule.** Decide when a period's figures become final, and mark them provisional until then.

### Trade-offs

Adding signals to reports adds clutter; keep them compact and next to the figures they qualify. Holding figures until complete can delay meetings, so decide in advance which reports wait and which publish with a warning.

### An illustrative example

*Illustrative:* a KwaZulu-Natal retail group with eleven stores and about 260 staff had three false sales alarms in one quarter, each caused by a store system that had not synchronised. The reporting lead added a per-store latest-transaction check after each load, a "stores reporting" indicator on the weekly sales dashboard, and an alert to store managers and IT when a store was more than six hours behind. The next missing feed was flagged on the dashboard before the Monday meeting, and the discussion moved straight to the stores that had genuinely slowed.

## Diagnostic questions

- Can a reader of your weekly report see which sources are included and how current each is?
- Who is told when a branch or system feed is late, and when?
- How many disputed declines in the last six months turned out to be missing data?
- Does your report distinguish provisional periods from closed ones?
- Do you monitor the arrival of source data, or only whether the refresh ran?

## What good looks like

Every headline figure carries a short statement of how current and complete it is. Missing feeds are detected before the meeting, named on the page and routed to the people who can fix them. When a number falls, leaders can see at a glance whether the business slowed or the data did.

## Where Mellorca fits

Mellorca maps the feeds behind management reporting through a [digital systems audit](/services/digital-systems-audit/), builds arrival checks and alerts into integrations through [systems implementation and integration](/services/systems-implementation-integration/), and keeps freshness monitoring running as part of [managed digital operations](/services/managed-digital-operations/).

## Method note

Product references illustrate common mechanisms and are not recommendations; refresh behaviour and thresholds were current when checked and may change. The example is illustrative and does not describe a specific client.
