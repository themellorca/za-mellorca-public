---
hub: discovery
record_id: DISC-274
slug: teams-cannot-tell-which-reports-are-actually-used
title: How to find out which of your reports anyone actually uses
description: Report libraries grow until nobody knows which reports matter. Where usage evidence comes from, why it misleads, and how to build a smaller trusted set.
lead: Report libraries grow until nobody knows which reports matter. Where usage evidence comes from, why it is easy to misread, and how to turn it into a smaller, trusted set of reports.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead, with department heads
budget_owner: CFO or COO
sources:
  - Monitor Usage Metrics in Power BI Workspaces (preview) - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-modern-usage-metrics
  - Power BI implementation planning: Retire and archive content - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-retire-archive
  - Configure scheduled refresh - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
related:
  - Why data-quality problems are found only after the report has gone out | /discovery/why-data-quality-problems-are-found-after-reports-are-published/
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
summary: Report libraries grow until nobody knows which reports matter. Where usage evidence comes from, why it is easy to misread, and how to turn it into a smaller, trusted set of reports.
layout: plain
---
A finance team is asked to reduce the time it spends on reporting. The first question is obvious: which reports can we stop producing? Nobody knows. The reporting workspace holds more than two hundred reports. Some are emailed every Monday. Some were built for a single board meeting. Some have three versions with slightly different names. Every report owner believes theirs is important, and when the team suggests removing anything, someone objects that it might be needed. The library keeps growing, and so does the work of maintaining it.

This article looks at that operating condition: teams that cannot tell which reports are actually used. It is a common source of wasted effort, and it becomes urgent during metric disputes, when nobody can say which of several similar reports leadership relies on.

## The problem in plain language

Reports are easy to create and hard to remove. Each one was built for a reason, but reasons expire: the project ends, the manager moves on, the question is answered. Without evidence of use, nobody feels safe retiring anything. The result is a library where important reports are hard to find among abandoned ones, where several versions of the same figure compete, and where data teams spend time refreshing, fixing and securing reports nobody opens.

## What you are actually trying to solve

BI and finance leads ask how to find unused reports, how to measure report usage, and how to clean up a reporting environment. Department heads want to know which report is the official one. The practical need is evidence: for each report, who opens it, how often, and whether it supports a decision, so that the library can be reduced to the reports that matter and those reports can be properly maintained.

## Evidence and system mechanism

### Usage data exists, with limits

Most reporting platforms record usage. Microsoft's documentation on [usage metrics in Power BI workspaces](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-modern-usage-metrics) describes a report showing report views, page views and unique viewers, and a report list showing active and unused reports across the workspace. It also sets out limits that matter for clean-up decisions. The usage data covers only the last 30 days and is removed after that, so keeping history means exporting it.

Only users with Admin, Member or Contributor roles can view the usage report. Page views rely on client telemetry and may be undercounted. Report views are also influenced by subscriptions: when the subscription service captures a snapshot for an email, a view event is logged. A report emailed weekly can therefore look used even if nobody reads the email.

### Retirement needs more than a view count

Microsoft's guidance on [retiring and archiving content](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-retire-archive) recommends regular clean-up activities and gives practical rules. Choose a time window that fits the content: a daily operational report unused for a month is a candidate, while a semantic model used once a year for auditors should be kept. Make exceptions for content such as an executive KPI scorecard that is used intermittently by a few people. Analyse views, viewers, refresh dates and update dates; filter out report creators and support staff so you see real consumers; check documentation and speak to the owner; and verify dependencies before deleting anything. It also notes that an administrative API for finding unused items searches only the past 30 days, which is usually too short.

### The platform itself notices inactivity

Some platforms act on inactivity automatically. Microsoft's guidance on [scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh) states that after two months in which nobody has visited any dashboard or report built on a semantic model, scheduled refresh is paused and the owner is emailed. A paused refresh is a useful signal: if nobody noticed, nobody was using it.

### Reading usage evidence carefully

| Signal | What it might mean | Check before acting |
| --- | --- | --- |
| Zero views in 90 days | Likely unused | Is it annual or audit content? |
| Steady views from one account | Personal or team report | Is that person a creator testing it? |
| Views only from subscriptions | Emailed, perhaps unread | Ask recipients if they use it |
| Many potential viewers, few actual | Broad access, narrow use | Is there a better-used duplicate? |
| Refresh paused for inactivity | Nobody depends on it | Confirm with the owner, then archive |

## Problem owner and why-now trigger

The BI or reporting lead owns the clean-up. Department heads own the decision about whether their reports are still needed. The CFO or COO typically funds the work, because the cost lands in reporting effort and in confusion over which figures to trust.

The trigger is usually a metric dispute: two reports showing different figures in the same meeting, and nobody able to say which one leadership normally uses. Other triggers include a licence or capacity review, a platform migration where every report must be moved or abandoned, and a cost-reduction drive targeting reporting effort. The executive-level effect of competing figures is described in [why executives get different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/).

## Economic consequence

Every unused report still costs something: refreshes that consume capacity, fixes when sources change, security reviews, and migration effort when the platform changes. Duplicates cost more, because they create disputes that take management time to resolve. And a cluttered library makes the important reports harder to find, which pushes people towards building yet another version. The broader point is made in [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/).

## Root cause

- **Usage history is not kept.** Built-in usage data covers a short window and is lost unless exported.
- **No owner per report.** Nobody can confirm whether a report is still needed.
- **No clean-up routine.** Reports are created continuously and reviewed never.
- **Subscriptions mask disuse.** Emailed reports register views whether or not anyone reads them.
- **Fear of removal.** Without an archive and recovery plan, deleting anything feels risky.

## Practical intervention

1. **Start keeping usage history.** Export usage data regularly so you can see trends over months, not just 30 days.
2. **Assign an owner to every report.** Use the platform's contact fields and record a business owner, not only the builder.
3. **Classify by expected use.** Mark reports as daily, weekly, monthly, annual or exception, so the time window fits the report.
4. **Run a quarterly clean-up.** List candidates using views, real viewers, refresh and update dates; check subscriptions; confirm with owners.
5. **Archive before deleting.** Keep a recoverable copy and a change log of what was removed, when and why.
6. **Merge duplicates.** Where several reports answer the same question, keep the best-used one, certify it and redirect users.

### Trade-offs

Some valuable reports are used rarely, and some heavily used reports are habits rather than tools. Usage evidence starts the conversation; it does not end it. Keeping per-user usage data raises privacy considerations; aggregate it where individual detail is not needed.

### An illustrative example

*Illustrative:* a Free State agricultural cooperative with about 150 staff had built up over 200 reports across five workspaces. The reporting lead exported usage data monthly for a quarter, classified reports by expected use and contacted owners of the least used. Around half were archived and several sets of near-duplicates were merged into certified versions. The finance team's Monday report preparation shrank because fewer reports needed checking.

## Diagnostic questions

- How many reports do you have, and how many were opened by a real consumer in the last 90 days?
- Do you keep usage history beyond the platform's default window?
- Does every report have a named business owner?
- How many reports are delivered by subscription, and do recipients use them?
- Could you recover a report you retired by mistake?

## What good looks like

The report library is small enough to understand. Every report has an owner and an expected use, usage history is kept and reviewed quarterly, duplicates are merged into certified versions, and retired reports are archived with a record of why.

## Where Mellorca fits

Mellorca inventories reports and their real usage through a [digital systems audit](/services/digital-systems-audit/), consolidates duplicates into a smaller certified set through [digital operations improvement](/services/digital-operations-improvement/), and keeps usage history and quarterly clean-ups running as part of [managed digital operations](/services/managed-digital-operations/).

## Method note

Product references illustrate common mechanisms and are not recommendations; usage windows, roles and inactivity rules were current when checked and may change. The example is illustrative and does not describe a specific client.
