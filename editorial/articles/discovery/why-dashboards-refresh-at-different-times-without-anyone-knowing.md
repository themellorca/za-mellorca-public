---
hub: discovery
record_id: DISC-253
slug: why-dashboards-refresh-at-different-times-without-anyone-knowing
title: Why dashboards refresh at different times without anyone knowing
description: When one dashboard updated at 6am and another last night, a meeting sees two versions of the business. How to make data freshness visible.
lead: When one dashboard updated at 6am and another last night, the same meeting sees two versions of the business. Why refresh timing is invisible and how to make data freshness visible.
category: Data, Reporting & Decision Systems
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead
budget_owner: Finance director
sources:
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
  - Data lineage - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-data-lineage
  - Source freshness - dbt Developer Hub | https://docs.getdbt.com/docs/deploy/source-freshness
  - What is Data Observability? - IBM | https://www.ibm.com/think/topics/data-observability
related:
  - Why executives get different answers to the same KPI question | /discovery/executives-get-different-answers-to-the-same-kpi-question/
  - Why sales, finance and operations each define revenue differently | /discovery/sales-finance-and-operations-define-revenue-differently/
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
summary: When one dashboard updated at 6am and another last night, the same meeting sees two versions of the business. Why refresh timing is invisible and how to make data freshness visible.
layout: plain
---
The sales dashboard says the month is 4% ahead of target. The finance dashboard, opened in the same meeting, says 2% behind. After twenty minutes of debate someone notices that the finance view was refreshed at six this morning and the sales view last night, before a large batch of credit notes was posted. Nobody had any reason to check. Neither dashboard made its refresh time obvious, and nobody in the room knew the schedules were different.

This article looks at that operating condition: dashboards that refresh on different schedules without their users knowing. It is a quiet cause of disagreement in management meetings, and it matters more as businesses start feeding the same data into AI tools.

## The problem in plain language

Most dashboards do not show live data. They show a copy taken at the last refresh. Each report or data model has its own schedule, set by whoever built it, often years ago. Some refresh hourly, some nightly, some only when someone remembers. Some stop refreshing without anyone noticing. Users see a number and assume it is current. When two dashboards disagree, the cause is often not a definition or a calculation, but simply time.

## What you are actually trying to solve

Finance and reporting leads ask why their dashboards show different numbers, how to schedule refreshes consistently, or how to show users when data was last updated. Executives want to know that the figures in front of them are current enough for the decision they are making. The underlying need is that every dashboard states how fresh its data is, schedules are aligned to how the data is used, and failures are noticed by the people responsible before users are misled.

## Evidence and system mechanism

### Refresh is scheduled per model, with limits

Microsoft's documentation on [data refresh in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) explains that only Import mode semantic models need a source data refresh, because they hold a copy of the data; DirectQuery models query the source each time. It notes that semantic models on shared capacity are limited to eight scheduled refreshes a day, and models on Premium, Premium Per User or Fabric capacity can be scheduled up to 48 times. Each model has its own schedule. Two reports built on two models can therefore reflect different moments, by design.

The same page describes two less obvious behaviours. A report already open in a browser does not update its visuals when a scheduled refresh completes, until the visuals are refreshed. And if no one has visited any report or dashboard built on a semantic model for two months, Power BI considers it inactive and pauses the refresh schedule, notifying the owner by email. If the owner has left, nobody may see that message.

### Refresh times are visible, but not to everyone

Power BI's [lineage view](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-data-lineage) shows the last refresh time on each semantic model and dataflow, and how data flows from sources to reports. But it requires a Contributor role or higher; viewers cannot open it. The people reading the dashboard are usually the people who cannot see when it was last updated, unless the report author puts that information on the page.

### Freshness can be defined and tested

Data engineering tools treat freshness as something to measure against a target. dbt's documentation on [source freshness](https://docs.getdbt.com/docs/deploy/source-freshness) describes checks that tell you whether source data meets the service level agreement you have defined, and recommends running them at least twice as often as your tightest target. IBM's overview of [data observability](https://www.ibm.com/think/topics/data-observability) lists freshness, meaning how current data is and how often it is updated, as one of five pillars of monitoring data health, alongside distribution, volume, schema and lineage.

### How users get misled

| Situation | What the user sees |
| --- | --- |
| Two models on different schedules | Dashboards that disagree for no visible reason |
| Refresh failed overnight | Yesterday's figures presented as today's |
| Schedule paused for inactivity | A rarely used report that silently stopped updating |
| Source extract runs after the refresh | Data one cycle older than expected |
| Report left open in a browser | Visuals from before the latest refresh |

## Problem owner and why-now trigger

The BI or reporting lead owns the schedules and the fix. Where there is no such role, the finance team that publishes management reporting usually carries the problem. The finance director typically funds the work, because the cost shows up as mistrust of management information.

A common trigger now is an AI initiative. When a business connects an assistant or analytics tool to its data, the question of which copy is current and when it was last updated becomes unavoidable, because the AI will answer confidently from whatever it is given; see [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/). Other triggers include a board meeting where figures disagreed, or the departure of the person who set up the schedules.

## Economic consequence

The visible cost is meeting time spent reconciling numbers that differ only by timing. The larger cost is decisions made on stale data that looked current: stock reordered on yesterday's figures, a collections call made about an invoice already paid. Over time, users stop trusting dashboards and return to their own spreadsheets, undoing the investment in reporting. The slower cousin of this problem, reports that are late by design, is explored in [when the weekly report is already out of date](/patterns/when-the-weekly-report-is-already-out-of-date/).

## Root cause

- **Schedules set per report by individuals.** Each author chose a schedule when the report was built, with no shared standard.
- **No freshness target.** Nobody has decided how current each report needs to be for its use.
- **Refresh time not shown to users.** The data-as-at time is hidden in settings that viewers cannot see.
- **Failures go to one person.** Refresh failure notifications reach the owner only, who may have moved on.
- **Duplicate models.** The same data is loaded into several models on different schedules, a cause of the disagreements explored in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Practical intervention

1. **Inventory the schedules.** List every semantic model or dataset behind management dashboards, with its refresh schedule, source timing and owner.
2. **Set freshness targets by use.** Decide how current each dashboard must be, based on the decisions it supports.
3. **Align upstream and downstream.** Schedule refreshes after source extracts complete, and refresh related models together.
4. **Show the data-as-at time.** Put the last successful refresh time on every report page.
5. **Route failures to a team.** Add a shared support address to refresh failure notifications and monitor freshness against the targets.
6. **Consolidate models.** Where several models load the same data, reduce them to one shared model so dashboards share one refresh.

### Trade-offs

More frequent refreshes consume capacity and can hit licensing limits. Not every report needs to be current to the hour; aim for consistency and visibility rather than maximum frequency. Showing refresh times will expose how stale some reports are, which can be uncomfortable at first.

### An illustrative example

Illustrative: a Gauteng wholesale distributor with about 150 staff found that its sales and finance dashboards were built on separate models, one refreshed hourly and one nightly. After a disputed board figure, the reporting lead listed every model, moved both dashboards onto one shared model refreshed after the nightly ERP extract, and added a data-as-at banner to each page.

## Diagnostic questions

- For your three most-used dashboards, can a viewer see when the data was last refreshed?
- Is there a list of every refresh schedule and its owner?
- Who receives refresh failure notifications, and are they still with the business?
- Has anyone defined how current each dashboard needs to be?
- Do any two dashboards draw the same data through different models?

## What good looks like

Every dashboard shows when its data was last updated. Refresh schedules follow a documented standard tied to source timing and use. Failures and paused schedules alert a team, not an individual, and related dashboards share models so they agree on time as well as definition.

## Where Mellorca fits

Mellorca helps businesses inventory reporting assets and schedules through a [digital systems audit](/services/digital-systems-audit/), design a consolidated reporting architecture through [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and monitor refreshes as part of [managed digital operations](/services/managed-digital-operations/).

## Method note

Power BI is used as a worked example because it is widely used; other BI tools have comparable scheduling and freshness features. Product limits cited were current when checked and may change. The example is illustrative and does not describe a specific client.
