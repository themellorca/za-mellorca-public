---
hub: impact
record_id: CPS-113
slug: employees-private-spreadsheets-official-reports-unanswered-questions-duplicated-reporting-cost
title: When Reports Do Not Answer the Question: The Cost of Private Analysis Spreadsheets
description: When official reports show what was easy to build rather than what people need to know, staff export the data and build their own spreadsheets. The business pays twice for reporting and gets conflicting answers.
lead: When official reports show what was easy to build rather than what people need to know, staff export the data and build their own spreadsheets. The business pays twice for reporting and gets conflicting answers.
category: Data and Information
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Employees create private spreadsheets because official reports do not answer their questions
primary_cost_mechanism: Duplicated analysis time across managers and analysts, unreviewed spreadsheet errors in decisions, meeting time spent on conflicting answers, stale and exposed exported data, and underused reporting tools
sources:
  - Spreadsheet Errors: What We Know. What We Think We Can Do | https://arxiv.org/abs/0802.3457
  - Endorse your content - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
related:
  - When Important Data Is Trapped in One Department's App | /impact/data-trapped-in-one-department-application-information-silo-cost/
  - One Metric, Three Definitions: The Cost of Systems That Count Differently | /impact/systems-different-definitions-same-business-metric-conflicting-reports-cost/
  - Duplicates, Gaps and Typos: What Poor Data Quality Costs a Growing Business | /impact/business-data-duplicates-missing-values-errors-data-quality-cost/
summary: When official reports show what was easy to build rather than what people need to know, staff export the data and build their own spreadsheets. The business pays twice for reporting and gets conflicting answers.
layout: plain
---
## The report that everyone exports

A regional chain of pharmacies in KwaZulu-Natal has a sales dashboard that head office built two years ago. It shows total sales by store and by month. Store managers look at it, then export the underlying data and build their own spreadsheets, because what they actually need to know is which product lines are slowing, which hours are busiest and how this month compares with the same month last year after adjusting for a store that was closed for renovation. The buying team does the same with different questions. So does finance.

The business now has one official report and at least a dozen private ones, each built differently, each with its own formulas and each producing slightly different answers to similar questions.

## Why people build private analysis

This is a different problem from spreadsheets that bridge disconnected systems. Here the data is available in an official report or tool. The report simply does not answer the questions people have. Common reasons include:

- **The report was designed around available data**, not around the decisions people make.
- **It cannot be filtered or broken down** the way the user needs, by product, time, customer or region.
- **Comparisons are missing**, such as against last year, against budget or against similar stores.
- **It refreshes too slowly** for operational use.
- **Requests for changes take weeks**, so building a spreadsheet is faster.

Each private spreadsheet is a rational shortcut for the person who builds it. Together they create a reporting system that nobody designed and nobody controls.

## The cost of duplicated reporting

The figures below are illustrative.

### Duplicated effort

If fifteen managers and analysts each spend three hours a week exporting data and maintaining their own analysis, that is 45 hours a week, or more than 2,000 hours a year. At an average loaded cost of R400 an hour, more than R900,000 a year is spent rebuilding analysis that could be shared. The effect is similar to that described in [rebuilding recurring reports by hand](/impact/rebuilding-recurring-reports-by-hand-labour-cost/).

### Errors that go unchecked

Private spreadsheets are rarely reviewed. Raymond Panko's summary of research on [spreadsheet errors](https://arxiv.org/abs/0802.3457) concluded that errors are common and significant, and that careful cell-by-cell inspection was the one technique shown to reduce them. Decisions on stock, staffing and pricing taken from unreviewed analysis carry that error risk.

### Conflicting answers

Two managers asking similar questions with different spreadsheets reach different conclusions. Meetings then spend time on whose numbers are right. The guide on [stopping teams creating their own versions of the truth](/insights/how-to-stop-teams-creating-their-own-versions-of-the-truth/) addresses this directly.

### Stale and exposed data

Exported data is a snapshot. Spreadsheets built on last month's export are used long after the data has changed. Exports also leave copies of business and sometimes personal data on laptops and in email, outside the access controls of the official system.

### A reporting tool that does not earn its cost

The business continues to pay for reporting software and the people who maintain it, while the real analysis happens elsewhere.

## Why more dashboards are not the answer

The instinctive response is to build more reports. That often makes the problem worse: more official views, each slightly different, with no clearer answers. The guide [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/) explains why. The better response is to start from the questions people are answering in their private spreadsheets.

## Turning private analysis into shared capability

Modern reporting tools are designed to support this. Microsoft Power BI, for example, allows organisations to [promote and certify content](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content), so that a shared, reviewed semantic model can be marked as reliable and authoritative while people still build their own views on top of it. Its documentation on [data refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) explains how often shared data can be updated, which matters if people are exporting because the official report is out of date.

The principle applies whatever the tool:

- **Collect the questions.** Ask people what their private spreadsheets answer, and which decisions depend on them.
- **Build a shared, trusted data model** with agreed definitions and calculations, refreshed often enough for its users.
- **Let people explore within it**, by filtering, breaking down and comparing, rather than exporting.
- **Turn the most common private analyses into shared reports**, designed with the people who built the spreadsheets.
- **Shorten the change request cycle**, so that adding a breakdown or comparison takes days, not weeks.

## Involving the people who built the spreadsheets

The people who maintain the most-used private spreadsheets usually understand the business questions better than anyone. They have already worked out which breakdowns matter, which comparisons are meaningful and which data is unreliable. Bringing them into the design of the shared report is faster than trying to rediscover those requirements, and it makes adoption far more likely. If the shared report is designed without them, they will keep their spreadsheets, and the duplication will continue alongside a new official tool.

## What to leave alone

Not all private analysis is a problem. One-off investigations, early exploration of a new idea and personal working notes are legitimate uses of a spreadsheet. The target is recurring analysis that drives decisions, is rebuilt regularly and overlaps with what others are doing. A useful test is whether the same spreadsheet is refreshed every week or month and shared with others. If it is, it has become part of the reporting system, and should be treated as a requirement for the official one. The related problem of [salespeople keeping personal spreadsheets of customer records](/impact/salespeople-personal-spreadsheets-customer-records-cost/) follows the same logic in the sales team.

## Practical next actions

1. **Find the private analysis.** Ask teams which exports and spreadsheets they rebuild weekly or monthly, and why.
2. **List the questions those spreadsheets answer.** Group similar questions across teams.
3. **Estimate the time spent.** Multiply hours per person per week by the number of people doing it.
4. **Agree definitions and calculations.** Start with the measures that appear in most of the spreadsheets.
5. **Build or adjust one shared model and report.** Design it with the people who built the most-used private spreadsheets.
6. **Retire duplicated spreadsheets as the shared view proves itself.** Track whether exports fall over the following three months.

Private analysis spreadsheets show where official reporting falls short of what people need. Using them as the starting point for improvement costs far less than continuing to pay for the same analysis many times over.
