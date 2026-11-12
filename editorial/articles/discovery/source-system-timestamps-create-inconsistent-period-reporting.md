---
hub: discovery
record_id: DISC-263
slug: source-system-timestamps-create-inconsistent-period-reporting
title: Why system timestamps put transactions in the wrong reporting period
description: Online orders stored in UTC, invoices in local time, and reports that group by whichever date they receive. How timestamps make period totals disagree, and how to set one clear rule for every measure.
lead: Online orders stored in UTC, invoices in local time, and reports that group by whichever date they receive. How timestamps make period totals disagree, and how to set one clear rule for every measure.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Financial Controller / Financial Director
budget_owner: CFO
sources:
  - 8.5. Date/Time Types | https://www.postgresql.org/docs/current/datatype-datetime.html
  - datetime — Basic date and time types | https://docs.python.org/3/library/datetime.html
  - Design guidance for date tables in Power BI Desktop - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables
  - Modeling Dimension Tables in Warehouse - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables
related:
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
  - Why master data changes break downstream reports without warning | /discovery/master-data-changes-break-reports-without-warning/
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
summary: Online orders stored in UTC, invoices in local time, and reports that group by whichever date they receive. How timestamps make period totals disagree, and how to set one clear rule for every measure.
layout: plain
---
March sales in the e-commerce dashboard do not match March sales in the accounting system. The difference is small, a few dozen orders, but it never goes away, and it changes every month. After two days of checking, the finance team finds the cause: the online store records order times in Coordinated Universal Time, the accounting system records invoice dates in South African time, and the dashboard groups orders by whatever date it is given. Orders placed shortly after midnight on the first of the month land in the previous month.

This article is about inconsistent period reporting caused by timestamps: different time zones, different "dates" for the same transaction and different rules for cut-off across source systems. It is a technical cause with a very practical effect: month-end figures that cannot be reconciled without manual work.

## The problem in plain language

Every transaction carries several dates. An order has a date it was placed, a date it was confirmed, a date it was shipped, a date it was invoiced and a date the payment cleared. Each system records the dates it cares about, in its own way. Some store local time, some store UTC, some store a date without a time, and some store a time without saying which zone it belongs to.

When reports combine these sources, the same transaction can fall into different days, weeks or months depending on which date is used and how it is converted. The common symptoms are:

- daily or monthly totals that differ slightly between systems, every period;
- sales that appear to "move" between months when a report is rebuilt;
- week-on-week comparisons that disagree because systems start the week on different days;
- a growing reconciliation spreadsheet at each month-end;
- debates over whether a transaction belongs to this financial year or the last.

## What the buyer is actually trying to solve

Searches like "sales report date mismatch between systems", "timezone issue in Power BI report" or "orders in the wrong month in reporting" come from financial controllers, BI developers and e-commerce managers. What they need is a clear rule for which date defines the period for each measure, a consistent conversion to local business time, and reports that agree with the books at month-end without manual adjustments.

## Evidence and system mechanism

The technical mechanism is well documented. PostgreSQL's [date and time documentation](https://www.postgresql.org/docs/current/datatype-datetime.html) explains that values of type "timestamp with time zone" are stored internally in UTC and converted to the session's time zone for display, while for "timestamp without time zone" any time zone indication in the input is silently ignored. The same moment can therefore be displayed as different dates depending on settings, and a time stored without a zone gives no way to tell which zone it was in.

Python's [datetime documentation](https://docs.python.org/3/library/datetime.html) describes the same distinction between "aware" values, which carry enough time zone information to locate a specific moment, and "naive" values, where whether a time is UTC or local is left to the program to interpret. Integration scripts and exports often produce naive values, so the meaning of a timestamp depends on whoever wrote the code.

On the reporting side, Microsoft's guidance on [date tables in Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables) recommends a consistently defined date table across the organisation, ideally from a single source, and notes that a year in a date table need not be a calendar year. Its [dimension-modelling guidance](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables) describes "role-playing" dates, where one fact such as a sale has an order date, ship date and delivery date, each related to the same calendar, and recommends fiscal year and fiscal month attributes for businesses whose year does not start in January.

## Problem owner and why now

The financial controller or financial director usually owns the problem, because the books are the reference figure. BI developers and system administrators own the technical fix. The budget owner is typically the CFO. Triggers include launching an online store or marketplace channel that runs on a cloud platform storing UTC, adding a branch or subsidiary in another time zone, moving reporting to a cloud data platform, and AI or forecasting initiatives that use daily data, where a two-hour shift moves late-evening trade into the next day and distorts patterns by weekday.

## Economic consequence

The direct cost is reconciliation time at every period end. Larger effects include incorrect cut-off for revenue or stock, sales targets and commissions measured against figures that do not match the ledger, promotional analysis that attributes late-night sales to the wrong day, and loss of confidence in dashboards that never quite agree with the accounts. Estimate the effect from your own data: hours spent reconciling period totals, and the value of transactions that change period depending on the system you look at.

### An illustrative example

*Illustrative example, not a client case.* A South African homeware retailer sells in-store and online. The online platform records orders in UTC, which is two hours behind South African Standard Time. An order placed at 01:00 on 1 March local time is stored as 23:00 on 28 February. The dashboard groups by the stored date, so the first two hours of every month's online trade are reported in the previous month, while the accounting system, which invoices in local time, puts them in the correct month. Converting all timestamps to local business time in one place, and choosing the invoice date as the period date for revenue reporting, removes the recurring difference.

## Root cause

- **Mixed time zones.** Some sources store UTC, others local time, and some do not record which.
- **No agreed period date per measure.** Reports use order date, invoice date or posting date interchangeably.
- **Conversions done in many places.** Each report or script converts time its own way, or not at all.
- **Inconsistent calendars.** Different week starts and fiscal years are used across reports.
- **Late postings.** Back-dated entries change closed periods without anyone being told.

These are close relatives of the timing and cut-off problems in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/). More broadly, the effect is one reason [reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Practical intervention

1. **Document each source's timestamps.** For each system, record which date fields exist, what event each represents and which time zone it uses.
2. **Store moments unambiguously.** Keep timestamps in UTC with zone information in the data platform, and convert once, centrally, to business local time.
3. **Choose a period date for each measure.** For example, invoice date for revenue, dispatch date for fulfilment and payment date for cash, and write it into the metric definition.
4. **Use one shared calendar.** Provide a single date table with fiscal year, fiscal month and week rules, and require all reports to use it.
5. **Apply a cut-off rule.** Decide how late postings to closed periods are handled, and flag them in reports.
6. **Reconcile automatically.** Compare period totals with the ledger before reports are released.

## Diagnostic questions

- Which of your systems store UTC, which store local time, and which do not say?
- For revenue, which date decides the month: order, dispatch, invoice or posting?
- Do all your reports use the same calendar and week start?
- How much of each month's reconciliation is caused by timing differences?
- Are back-dated entries to closed periods visible to report users?

## What good looks like

Every timestamp has a known meaning and zone. Conversion to business time happens once. Each measure states the date that defines its period. All reports share one calendar with the business's fiscal rules. Month-end totals agree with the ledger, and any late postings to closed periods are flagged rather than discovered.

## Where Mellorca fits

Through [systems implementation and integration](/services/systems-implementation-integration/), we standardise timestamp handling between your online, operational and accounting systems and the reporting layer. A [digital systems audit](/services/digital-systems-audit/) identifies which sources and reports use which dates, so the period rules can be agreed with finance.

*Method note:* period and cut-off rules for statutory reporting should be confirmed with your accountants; this article addresses management reporting consistency.
