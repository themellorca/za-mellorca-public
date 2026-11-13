---
hub: discovery
record_id: DISC-255
slug: why-management-reports-break-when-manual-data-steps-are-never-written-down
title: Reports depend on undocumented manual transformations
description: Monthly packs often rely on hidden clean-up steps known to one person. How to find those steps, move fixes to the source and make the report reproducible.
lead: Monthly packs often rely on hidden clean-up steps known to one person. How to find those steps, move fixes to the source and make the report reproducible.
category: Data, Reporting & Decision Systems
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Finance manager or finance director, with the analyst who builds the report
budget_owner: Finance director or business owner
sources:
  - Reproducible Analytical Pipelines (RAP) – Government Analysis Function | https://analysisfunction.civilservice.gov.uk/support/reproducible-analytical-pipelines/
  - The AQuA Book | https://www.gov.uk/guidance/the-aqua-book
  - Horror Stories - European Spreadsheet Risk Interest Group | https://eusprig.org/research-info/horror-stories/
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
related:
  - How to find out which of your reports anyone actually uses | /discovery/teams-cannot-tell-which-reports-are-actually-used/
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
  - When manual overrides in reports look exactly like source data | /discovery/manual-overrides-indistinguishable-from-source-data/
summary: Monthly packs often rely on hidden clean-up steps known to one person. How to find those steps, move fixes to the source and make the report reproducible.
layout: plain
---
The monthly management pack lands on the finance director's desk on the fifth working day. The numbers look right, and they usually are. But they are right because a senior analyst takes the system extract, deletes three columns, pastes it into last month's workbook, fixes a handful of mis-coded cost centres by hand, applies a currency adjustment she keeps in her head, and then refreshes the pivot tables. None of those steps is written down. If she is on leave in the week the board pack is due, the business discovers how much of its reporting depends on her memory.

This is common in fast-growing businesses, where reporting built by hand for fifteen people was never rebuilt for sixty.

## The problem in plain language

A transformation is anything done to data between the system that holds it and the report that shows it: filtering, re-coding, adding adjustments, joining two extracts, converting currency, or correcting known errors. In a healthy reporting process those steps are visible, repeatable and owned. In an unhealthy one they live in someone's head, in a hidden worksheet tab, or in a sequence of clicks that has never been recorded. The weakness shows only when the person leaves, the source system changes, or someone asks how a figure was derived.

## What you are actually trying to solve

The finance director, financial manager or head of operations facing this problem usually wants four things: confidence that last month's numbers can be reproduced, protection against the loss of one key person, a faster close, and an answer when an auditor, lender or investor asks how a figure was built. They want the existing report to stop being fragile.

## Evidence and system mechanism

### Manual steps are the weak point in analytical work

The UK government's Analysis Function describes [reproducible analytical processes](https://analysisfunction.civilservice.gov.uk/support/reproducible-analytical-pipelines/) as automated analysis that aims to be reproducible, auditable and efficient. Its minimum standard is to minimise manual steps such as copy-paste, point-and-click or drag-and-drop operations, and where a manual step is unavoidable, to document it. It also lists better business continuity and knowledge management among the benefits.

### Quality assurance needs a described process to check

The government's [AQuA Book](https://www.gov.uk/guidance/the-aqua-book), guidance on producing robust, fit-for-purpose analysis, was revised in 2025 and notes that spreadsheets and proprietary software were the dominant analytical tools when the earlier edition was written. Assurance requires that someone other than the author can see what was done. A transformation that exists only in the author's routine cannot be independently reviewed.

### Uncontrolled spreadsheets produce documented, expensive mistakes

The European Spreadsheet Risk Interest Group maintains a public collection of [spreadsheet error stories](https://eusprig.org/research-info/horror-stories/). One entry describes a large sovereign wealth fund losing roughly 92 million US dollars through an error in how its benchmark was calculated, traced to an incorrect date being entered. Another describes a hospital trust accidentally sharing personal data that sat behind a pivot table in a spreadsheet. Hand-built workbooks fail in ways that formal controls would catch.

### Repeatable steps can be recorded rather than remembered

Microsoft's documentation for [Power Query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) explains that it lets users connect to data, reshape it and save the transformation steps as a repeatable query that can be refreshed later. It names one-off shaping that is not repeatable as a common challenge. Any approach works if the steps can be re-run and inspected.

### Warning signs

- Only one or two people can produce the monthly pack, and nobody else has seen them do it.
- Last month's figures cannot be reproduced from last month's extract.
- Corrections are applied "because we know that code is wrong" but the correction is not written anywhere.

## Problem owner and why-now trigger

The finance director usually owns the reports and feels the exposure first. The person who actually performs the transformations is typically a senior analyst, management accountant or an operations administrator who inherited the task. The budget owner is the finance director or business owner.

The trigger is often rapid growth: more entities, more products, a new system, or a lender or investor who asks for numbers the business has never been asked to defend. Others are a key resignation, an audit query, or a system upgrade that changes the extract layout.

## Economic consequence

The direct cost is the analyst's time. If one person spends three days of every month-end on transformations that could take hours, that is a recurring cost in salary and delay. The larger costs are indirect. Errors are found after numbers are shared, and an audit or due-diligence request can consume days reconstructing a figure. A single resignation can turn a five-day close into a three-week scramble. The wider cost of numbers nobody can trace is covered in [untraceable reporting numbers and audit cost](/impact/untraceable-reporting-number-audit-cost/).

## Root cause

- **Reporting grew by accretion.** Each adjustment was added to solve one month's problem, and nobody went back to design the whole.
- **Fixes live in the report instead of the source.** A mis-coded cost centre is corrected every month in the workbook, but never in the system that creates it.
- **No named owner for the reporting process itself.** People own their numbers but nobody owns the method.
- **Knowledge is tacit.** The person who knows the steps has never been asked to write them down, and has no time to.
- **Tools chosen for flexibility.** A spreadsheet allows anything, so it records nothing. See [when a spreadsheet becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/).

## Practical intervention

1. **Pick one report that matters most.** Start with the monthly management pack or the one a lender or board relies on. Do not try to fix everything at once.
2. **Shadow the person who builds it.** Sit with them for one full cycle and record every step: the extract used, each filter, each re-code, each adjustment and each manual check.
3. **Classify each step.** Mark it as a rule that can be automated, a correction that belongs in the source system, or a judgement that must stay manual and be documented with its reason.
4. **Move corrections upstream.** If the same cost centre is re-coded every month, fix the master data or the entry control so that the report no longer needs the correction.
5. **Capture the repeatable steps in a form that can be re-run.** That might be a saved query, a scripted transformation or a controlled template with locked formulas. The aim is that someone else can run it and get the same answer.
6. **Reproduce last month.** Have a second person rebuild last month's figures from the documented steps. Differences show what is still undocumented.
7. **Write a one-page method note** naming the owner, extracts, adjustments and reviewer.

### Trade-offs

Documenting and automating takes time in the same weeks when the analyst is busiest, so the work needs a protected slot outside month-end. A small business may not need a data platform; a controlled template with a method note can be enough.

### An illustrative example

Illustrative: a Durban distribution company with 80 staff and a growing second warehouse found that its management pack depended on a 14-step manual routine owned by one management accountant. Working through the steps showed that six existed only to correct customer group codes that the sales team entered inconsistently. Fixing the entry control removed those steps. Four more were converted into a saved, repeatable query, and the remaining four were documented as judgements with named reviewers. The close moved from seven working days to four, and a second person could run it.

## Diagnostic questions

- If the person who builds the monthly pack were unavailable for a month, who could produce it and from what instructions?
- Could you reproduce last quarter's reported figures from last quarter's source extract today?
- Which corrections are made in the report every month that should be made at the source?

## What good looks like

Every figure in the management pack can be traced back through named steps to a source extract. Manual steps are few, each has a documented reason and a reviewer, and the repeatable steps can be run by someone other than the author. Known data errors are fixed where they arise.

## Where Mellorca fits

Mellorca can help trace how your reports are actually built and show which steps are fragile, using the approach described in [what a digital systems audit should actually tell you](/insights/what-a-digital-systems-audit-should-actually-tell-you/). From there the work is practical: moving corrections to the source, capturing repeatable steps in a form others can run, and writing the method note so the reporting no longer depends on one person's memory.

## Method note

The sources are public guidance and documentation used to describe good practice for reproducible, reviewable analysis and to illustrate how hand-built workbooks fail. They do not measure how common undocumented transformations are in South African businesses. The example is illustrative rather than a client case.
