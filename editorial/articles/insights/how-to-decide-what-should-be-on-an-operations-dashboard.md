---
hub: insights
record_id: INS-254
slug: how-to-decide-what-should-be-on-an-operations-dashboard
title: How to Decide What Should Be on an Operations Dashboard
description: Most operations dashboards grow by accumulation and end up unused. Start with the decisions the dashboard supports, then test every metric for definition, ownership, timeliness and traceability.
lead: Most operations dashboards grow by accumulation and end up unused. Start with the decisions the dashboard supports, then test every metric for definition, ownership, timeliness and traceability.
category: Data and Reporting
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Data and Reporting
sources:
  - Tips for Designing a Great Power BI Dashboard - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips
  - How to choose incident management KPIs and metrics - Atlassian | https://www.atlassian.com/incident-management/kpis
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
related:
  - What Makes Data Good Enough to Operate With? | /insights/what-makes-data-good-enough-to-operate-with/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
summary: Most operations dashboards grow by accumulation and end up unused. Start with the decisions the dashboard supports, then test every metric for definition, ownership, timeliness and traceability.
layout: plain
---
Almost every operations dashboard starts life the same way. Someone asks for "visibility", a tool is connected to the data, and a screen is built with every number that could be pulled. Six months later it has twenty-eight tiles, three colours of traffic light and no clear owner, and managers glance at it before returning to the spreadsheet they trust. The failure is rarely the software. It is that nobody decided, in advance, what the dashboard was for.

Deciding what belongs on an operations dashboard is a design exercise that starts with decisions rather than data. This article offers a short method for doing it, and a set of tests for removing what does not earn its place.

> A dashboard is a tool for deciding what to do next. If a number on it would never change what anyone does, it does not belong there.
>

## Start with the decisions, not the data

Microsoft's guidance on designing Power BI dashboards advises that a dashboard should answer the specific questions of its audience and recommends keeping it focused, with the most important information prominent and clutter removed. That advice holds for any tool. The first design step is therefore to ask who will use the dashboard and what they need to decide.

An operations manager running a service business might need to decide, every morning, where to move people. A finance manager might need to decide which overdue accounts to chase this week. A managing director might need to decide whether to approve overtime or to hire. Each of those is a different dashboard, and trying to satisfy all three on one screen produces a dashboard that serves none.

Write down, for each intended audience, the five or six recurring decisions the dashboard should support. Phrase each as a question: "Which jobs are at risk of missing their date?", "Where is work waiting longest?", "What is our cash position against next week's payments?" Anything you cannot connect to a question is a candidate for exclusion.

## Five tests for every metric

Once you have the questions, test each candidate metric against the following. A metric must pass all five to earn a place.

### 1. Does it support a decision?

Ask: "If this number doubled tomorrow, what would we do differently?" If nobody can answer, it is context at best and decoration at worst. Total website visits is a classic example for an operations team. Number of orders waiting more than two days for dispatch is a decision-ready number.

### 2. Does it have a single, written definition?

If two people would calculate "on-time delivery" differently, the dashboard will start arguments instead of ending them. The definition, source system and calculation must be written down and agreed. The problem is widespread, as we outline in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

### 3. Can someone act on it?

A metric needs an owner who can change it. Late deliveries caused by a supplier you cannot influence are worth knowing about, but a number that no one can move produces frustration rather than action. Give each metric a named owner and, where relevant, a target or a tolerance range.

### 4. Is it timely enough for the decision?

A daily dispatch decision needs data refreshed daily, or more often. A quarterly capacity decision does not. Showing data that is older than the decision cycle gives false confidence, and mixing different refresh times without saying so causes confusion, as described in [why dashboards refresh at different times without anyone knowing](/discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/). Always display when the data was last updated.

### 5. Can the user trace it to its source?

If a manager questions a figure and nobody can show where it came from, trust erodes quickly. A good dashboard lets a user drill from the headline number to the underlying records. Our discovery piece on [why business users cannot trace a dashboard number to its source](/discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/) explains what goes wrong when that path is missing.

## Separate measures of flow, quality and health

A practical operations dashboard usually draws from three families of measure. Keeping them distinct makes it easier to see which are missing.

- **Flow:** how much work is arriving, in progress, waiting and finished. Examples are orders received today, jobs open by stage and the age of the oldest item in each queue.
- **Quality:** whether the work is right. Examples are rework or returns, errors found at checking, complaints and failed automated runs.
- **Health:** whether the capacity to do the work is intact. Examples are staff availability, system uptime, backlog trend and cash headroom.

Flow measures alone can look healthy while quality collapses. Quality measures alone can look fine while the backlog grows. A balanced dashboard shows at least one measure from each family for each critical process.

## Lead with exceptions, not totals

Totals describe the past. Operations managers mostly need to know what is going wrong now. Rather than showing average turnaround time, show the list of items that have breached the agreed service time today. Rather than a chart of total invoices, show the count of invoices stuck in approval for more than three days. Using thresholds to highlight what needs attention, and leaving the rest quiet, helps a busy reader find the problem in seconds.

Be restrained with colour. If everything is highlighted, nothing is. Reserve red for items that demand action and make sure that every red item has an owner who knows it is red.

## Limit the size, and plan for retirement

A useful discipline is a ceiling. Eight to ten measures per audience is plenty for a daily operations view. Anything further belongs on a supporting page for analysis. A ceiling forces trade-offs, and trade-offs are where the real design thinking happens.

Dashboards also need a life cycle. Processes change, teams are reorganised, and tiles keep reporting on a workflow that was retired a year ago. We describe this in [dashboards outlive the process they measure](/discovery/dashboards-outlive-the-process-they-measure/). Review each dashboard quarterly: remove measures no one has used, check that definitions still match how the work runs, and confirm the owner is still in the business. If nobody objects when a tile is removed, it was not needed.

## An illustrative example

The following is a hypothetical case. A Port Elizabeth fabrication workshop with 60 staff has a production dashboard with 31 tiles, built from the job costing system. The production manager never opens it. Instead he walks the floor at 07:00 and uses a whiteboard.

A short workshop with the production manager, the planner and the finance clerk identifies the morning decisions: which jobs need to be expedited, where is the bottleneck today, and which jobs are blocked waiting for material. The team builds a new view with eight measures. These are jobs due this week by stage, jobs past their promised date, jobs blocked and why, machine hours booked against capacity at the bottleneck, rework hours this week, material shortages by supplier, average days from approved drawing to start, and last data refresh time. Each has a written definition and an owner. The old dashboard is archived. Within a month, the whiteboard has been retired.

## A checklist before you build

- Have we listed the decisions this dashboard supports, and who makes them?
- Does every measure pass the five tests of decision, definition, action, timeliness and traceability?
- Is there at least one measure of flow, quality and health for each critical process?
- Does the view highlight exceptions rather than only totals?
- Is there a ceiling on the number of measures and a date to review them?

More screens do not mean better decisions. We explore that idea in [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/). A smaller dashboard, designed around real decisions, with owned and traceable numbers, will be used, and a dashboard that is used is the only kind that improves operations.
