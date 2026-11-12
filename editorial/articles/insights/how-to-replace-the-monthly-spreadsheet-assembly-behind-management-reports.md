---
hub: insights
record_id: INS-256
slug: how-to-replace-the-monthly-spreadsheet-assembly-behind-management-reports
title: How to Stop Building Management Reports by Hand
description: A five-step route from monthly spreadsheet assembly to a management pack that refreshes itself: document the report, agree definitions, connect to sources, model the data once and automate the checks.
lead: A five-step route from monthly spreadsheet assembly to a management pack that refreshes itself: document the report, agree definitions, connect to sources, model the data once and automate the checks.
category: Reporting
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Reporting
sources:
  - Configure scheduled refresh - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
  - Understand star schema and the importance for Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/star-schema
  - What is Data Governance? - IBM | https://www.ibm.com/think/topics/data-governance
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
related:
  - Why Reporting Problems Usually Start Upstream | /insights/why-reporting-problems-usually-start-upstream/
  - How Manual Data Entry Creates Downstream Problems | /insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/
  - How to Reduce Re-Entry of the Same Information Across Systems | /insights/how-to-stop-the-same-information-being-typed-into-several-systems/
summary: A five-step route from monthly spreadsheet assembly to a management pack that refreshes itself: document the report, agree definitions, connect to sources, model the data once and automate the checks.
layout: plain
---
In many businesses the monthly management pack is built the same way it was built five years ago. Someone exports a trial balance from the accounting system, pulls sales from another system, copies headcount from a spreadsheet, pastes everything into a workbook and spends two days reconciling why the totals disagree. The pack is then emailed, questions follow, and a corrected version goes out on Thursday. The effort is not wasted in the sense that the report is useful. It is wasted in the sense that most of the work is assembly, not thinking.

This article sets out how to stop building management reports by hand: what to fix first, what to automate and what to leave with people.

## Where the time actually goes

The cost of a hand-built report is rarely in the final analysis. It is in the steps before it. A typical sequence looks like this.

1. Export data from two to six sources, often as spreadsheets or CSV files.
2. Clean the exports: remove header rows, fix date formats, correct codes that differ between systems.
3. Combine them with lookups and formulas that only the author fully understands.
4. Adjust for known problems, such as a department that was coded to the wrong cost centre.
5. Check the totals against the ledger and chase differences.
6. Format and distribute.

Only the last part, and some of the checking, is analysis. Everything else is mechanical and repeatable, which is what makes it suitable for automation. The labour involved is described in [rebuilding recurring reports by hand: the labour cost](/impact/rebuilding-recurring-reports-by-hand-labour-cost/), and the human version of it in [the report someone rebuilds by hand every Friday](/moments/the-report-someone-rebuilds-by-hand-every-friday/).

## Step one: write down what the report really contains

You cannot automate what has not been described. Take the latest pack and, for each figure, record where it comes from, who produces it, what manual adjustments are applied and what rule decides them. This often reveals steps that are held only in one person's head, which is the problem explored in [why management reports break when manual data steps are never written down](/discovery/why-management-reports-break-when-manual-data-steps-are-never-written-down/).

While doing this, question whether each figure is used. A pack that has grown over years usually includes tables nobody reads. Cutting them is the cheapest automation there is. The question of what belongs in front of managers is covered in [how to decide what should be on an operations dashboard](/insights/how-to-decide-what-should-be-on-an-operations-dashboard/).

## Step two: agree the definitions

Before any tool is configured, settle what each measure means. Does revenue include credit notes? Is a customer counted at order or at first payment? Which date governs the period: invoice date, delivery date or payment date? Hand-built reports hide these disagreements, because the author makes a private decision each month. Automated reports expose them, because the rule has to be written down. IBM describes data governance as the set of policies, roles and standards that keep data accurate, consistent and usable. For a management pack, that means a short, owned list of definitions. Without it, you automate the confusion, and the result is more of what is described in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Step three: connect to the source, not to a copy

The step that removes the most manual work is replacing exports with direct, scheduled connections to the source systems. Instead of someone downloading a file on the third working day, the report reads the data itself. Microsoft's Power BI documentation describes scheduled refresh, which updates the data behind a report at set times so that the people reading it do not depend on someone remembering to do it. Equivalent features exist in most reporting tools, in spreadsheet add-ins and in the reporting modules of accounting packages.

Three cautions apply.

- **Source data must be trustworthy.** Automating the extraction of messy data produces messy reports faster. Fix known data problems at source first, or at least flag them.
- **Refresh timing matters.** If one source updates overnight and another in real time, a report can mix periods without saying so. State the refresh time on the report itself.
- **Credentials need an owner.** A scheduled connection should run under a dedicated account, not a person's login, or it fails the day that person leaves.

## Step four: model the data once

When every report joins the same tables in its own way, differences are inevitable. A better approach is to shape the data once into a tidy structure and let all reports draw from it. Microsoft's guidance on star schema design in Power BI describes the standard version: descriptive tables such as customers, products and dates, around central tables of measurable events such as sales or payments. This makes reports faster to build, easier to check and consistent with one another. You do not need to adopt the vocabulary to adopt the principle: one agreed place where the combined data lives, maintained by someone responsible for it.

## Step five: automate the checks too

Hand-built reports are often checked by the author's instinct. Automated reports need explicit controls, which are an improvement. Reasonable checks include:

- Control totals that must agree with the ledger, with a visible flag when they do not.
- Row counts compared with the previous period, to catch a source that returned half its data.
- A list of unmapped codes, such as a new cost centre that has no home in the report.
- A refresh status showing when each source was last updated.

A report that says "this section is incomplete because the payroll feed has not arrived" is more trustworthy than a polished one that quietly omits it.

## What to leave with people

Not everything should disappear. Commentary on why a number moved, judgement about whether a variance matters, and decisions about what to do next are the point of the report. Reallocated time is the real benefit: the finance manager who spent two days on assembly can spend them on explanation. Rushing to a dashboard does not solve this on its own. [More dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/), because the value comes from the questions asked of the figures, not the number of charts.

## An illustrative example

The following is a hypothetical case. A Johannesburg logistics company with three branches produces a monthly pack for its directors. The financial controller takes four days after month-end: two exporting and cleaning data from the accounting system, the fleet system and the payroll package, one reconciling, and one formatting. Variances between branches are often caused by a branch coding fuel purchases differently.

The company first documents each figure and agrees a one-page definition sheet, including a single fuel code list. It then sets up scheduled connections to the three systems, builds one combined data model, and adds control totals against the ledger. The first automated pack takes a day, most of it checking. Within three months the controller adds a new section, a branch-level trend of cost per kilometre, that previously never fitted into the time available. The directors do not receive a flashier report. They receive an earlier, more consistent one, and a controller who has time to explain it.

## The point

Stopping hand-built reports is a sequence: describe what the report contains, agree what the measures mean, connect to the sources, model the data once and automate the checks. Tools matter least. The business gains when the assembly disappears and the people who understand the numbers are left to interpret them.
