---
hub: insights
record_id: INS-258
slug: how-to-build-reporting-from-the-systems-your-people-already-use-every-day
title: How to Build Reporting From Systems People Actually Use
description: Reports built on data nobody maintains are fiction. Start from the systems where work really happens and build outward.
lead: Reports built on data nobody maintains are fiction. Start from the systems where work really happens and build outward.
category: Reporting
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Reporting
sources:
  - https://learn.microsoft.com/en-us/power-bi/guidance/star-schema | https://learn.microsoft.com/en-us/power-bi/guidance/star-schema
  - https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture
  - https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-governance | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-governance
summary: Reports built on data nobody maintains are fiction. Start from the systems where work really happens and build outward.
layout: plain
---
A finance manager in Cape Town spends the first four working days of each month assembling the management pack. She exports sales from the CRM, stock from the warehouse system, hours from a timesheet tool, and then reconciles all of it in a spreadsheet that only she understands. Meanwhile the sales team keeps its real pipeline in a shared workbook, because the CRM is "too slow to update". The pack is polished, and about half of it is out of date by the time it is read.

This is the usual outcome when reporting is designed from the top down, starting with what executives would like to see. A more reliable approach starts from the opposite end: where does work actually get recorded, by whom, and how fresh is it?

## Find out where the work is really recorded

Before designing any report, survey the systems and tools your people use daily. This is a short exercise, not a project. For each important business event, such as a quote sent, an order confirmed, a job completed, an invoice raised or a payment received, ask three questions:

- Where does the person doing the work record it first?
- Is that record created as part of doing the work, or afterwards, as admin?
- How many hours or days pass between the event and the record?

Data created as a by-product of doing the work tends to be timely and accurate, because the person needs it to continue. Data created afterwards, solely to feed a report, tends to be late, rounded and skipped when people are busy. If a number only exists because someone must type it into a reporting template, treat it as a warning sign. Our article on [how spreadsheet extracts quietly become the reporting system](/discovery/how-spreadsheet-extracts-quietly-become-the-reporting-system/) describes how this arrangement hardens without anyone choosing it.

## Report on what the system can credibly tell you

Every system has things it knows well and things it records poorly. A booking tool knows exactly when jobs were scheduled, but may be unreliable on when they finished if technicians close jobs at the end of the week. An accounting package knows what was invoiced but not why a customer was late. Matching each measure to the system with the strongest claim on it avoids a lot of argument. If two systems both hold a version of a figure, decide which one is authoritative; the guide on [deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) sets out how, and its conclusions are what stop the situation described in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

Where the system does not capture something reliably, you have two honest choices. Either change how the work is recorded so the data is produced naturally, or stop reporting on it. A third option, estimating it in a spreadsheet each month, usually produces a figure that looks authoritative and is not.

## Shape the data before you chart it

Once you know the sources, the structure of the data behind the reports matters more than the visuals. Microsoft's guidance on [star schema design for Power BI models](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) explains the idea in plain terms: separate the facts you measure, such as sales lines or job hours, from the descriptive dimensions you slice them by, such as customer, product, branch and date. Keeping those apart makes a model easier to understand and report on, and lets many reports share the same definitions. You do not need Power BI to use the principle. A spreadsheet with one tab of transactions and separate lookup tabs for customers and products follows the same logic and avoids the tangle of copied columns that defeats most homemade reporting.

The practical benefit is that a single definition of "customer" or "product" serves every report. When definitions live in each report separately, the same question gets different answers depending on who built the chart.

## Automate the extract, not the argument

The biggest time saving in most reporting work comes from replacing manual exports with scheduled data connections. Pulling from the source system on a schedule removes the retyping, the version confusion and the copy-and-paste errors that creep in at month end. The article on [replacing the monthly spreadsheet assembly behind management reports](/insights/how-to-replace-the-monthly-spreadsheet-assembly-behind-management-reports/) walks through that step by step.

What automation cannot fix is a disagreement about meaning. If sales counts a deal as won at verbal agreement and finance counts it at signature, a perfectly automated report will still show two numbers. Settle the definitions first, write them on a single page, and attach that page to the report.

## Build adoption into the design

A report that nobody reads is a cost. Microsoft's [data culture guidance](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture) describes data culture as behaviours and norms, and stresses that it is what an organisation does, not what it says. It also points to reliance on trusted data and a reduction in undocumented tribal knowledge as characteristics of a healthy culture. For a small business the lesson is practical: involve the people whose work feeds the report early, show them what the report reveals, and make sure their effort in recording data is repaid by something useful to them.

A sales team that sees pipeline accuracy translate into fewer chasing calls from management will keep the CRM up to date. A team that only ever sees the data used against them will find ways to avoid entering it. Teams often cannot tell [which reports are actually used](/discovery/teams-cannot-tell-which-reports-are-actually-used/), so check usage: count who opens each report, retire those nobody opens, and ask the remaining readers what decision it helps them make.

## Start small and prove one report

Do not begin with a company-wide dashboard. Choose one decision that recurs, such as weekly cash collection, which jobs are running late, or which customers are slipping to overdue. Build one report for it from one or two systems people already use. Test whether the people who make that decision actually use it for three or four cycles. Only then extend to the next report. This approach exposes data problems when they are cheap to fix, and it earns the credibility that later, larger reports will need.

## Practical next actions

1. List your five most important business events and note, for each, where it is first recorded and how long after the event.
2. Mark every figure in your current management pack that is typed in by hand purely for the report, and decide whether to fix the capture or drop the figure.
3. Write a one-page definition sheet for the main terms in the pack, such as customer, won deal, active job and overdue, and agree it with finance and operations.
4. Replace one manual monthly export with a scheduled connection or saved query from the source system.
5. Check who opened each report in the last three months and retire or redesign the ones that no one reads.
