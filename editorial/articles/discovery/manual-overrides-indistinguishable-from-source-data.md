---
hub: discovery
record_id: DISC-264
slug: manual-overrides-indistinguishable-from-source-data
title: When manual overrides in reports look exactly like source data
description: Adjustments typed into a reporting spreadsheet carry no author, reason or expiry, and soon nobody can tell measured figures from judgements. How to keep overrides possible but visible and traceable.
lead: Adjustments typed into a reporting spreadsheet carry no author, reason or expiry, and soon nobody can tell measured figures from judgements. How to keep overrides possible but visible and traceable.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Financial Controller / Head of Reporting
budget_owner: CFO
sources:
  - audit trail - Glossary - CSRC | https://csrc.nist.gov/glossary/term/audit_trail
  - Modeling Dimension Tables in Warehouse - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables
  - Add Seeds to your DAG - dbt Developer Hub | https://docs.getdbt.com/docs/build/seeds
related:
  - Why last year's figures keep changing when reporting logic is overwritten | /discovery/historical-metrics-change-when-business-logic-is-overwritten/
  - Why reports keep recalculating figures your systems already produce | /discovery/reports-recalculate-figures-already-available-upstream/
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
summary: Adjustments typed into a reporting spreadsheet carry no author, reason or expiry, and soon nobody can tell measured figures from judgements. How to keep overrides possible but visible and traceable.
layout: plain
---
The regional manager's sales figure in the monthly pack is R200,000 higher than the CRM shows. Asked why, the analyst remembers: a large order was booked against the wrong branch, and rather than wait for the CRM correction she adjusted the figure in the reporting spreadsheet. Three months later, the CRM has been corrected as well. The adjustment is still in the spreadsheet. The branch's sales are now counted twice, and nothing in the report shows that one of the numbers was typed in by hand.

This article is about manual overrides, adjustments and corrections that enter reporting without being distinguishable from data that came from source systems. Overrides are often necessary. The problem is not that people adjust figures; it is that nobody reading the report can tell which figures were adjusted, by whom, why, and whether the adjustment still applies.

## The problem in plain language

Reporting rarely runs perfectly from source data. Somebody needs to reclassify a mis-coded sale, add a forecast for a branch whose system was down, exclude a test transaction, or apply a management estimate that is not in any system. The quickest place to do that is wherever the report is built: a spreadsheet cell, a hard-coded line in a query, a value pasted over a formula, a manual row added to a mapping table.

Once made, these overrides look exactly like everything else. They carry no label, no reason, no author and no expiry. Over time they accumulate, and the business loses the ability to say which parts of its management information are measured and which are judgements. The symptoms are:

- figures that cannot be traced back to any source system;
- adjustments that outlive the problem they fixed, causing double counting;
- metric disputes in which nobody can prove whether a number is "real";
- month-end packs that only one person can rebuild;
- auditors or lenders asking for support behind management figures that has to be reconstructed from email.

## What the buyer is actually trying to solve

The people searching for this, typically financial directors, financial controllers and heads of reporting, use phrases like "track manual adjustments in reports", "audit trail for spreadsheet overrides" or "separate adjustments from source data in Power BI". They want overrides to remain possible, because the business needs them, but to be visible, explained, approved where material, and removed when no longer needed.

## Evidence and system mechanism

The core requirement is an audit trail. NIST's glossary defines an [audit trail](https://csrc.nist.gov/glossary/term/audit_trail) as a chronological record that allows the sequence of activities surrounding an operation or event to be reconstructed and examined from inception to result. A figure overwritten in a spreadsheet cell has no such record: the previous value, the reason and the person are all gone.

Data modelling practice provides patterns for recording who changed what. Microsoft's guidance on [dimension tables](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables) recommends audit attributes that track when and how records were created or modified, and by whom or by which process, and describes optional fields that record the reason a new version of a record was created. The same idea applies to adjustments: each one should carry its author, date and reason as data, not as memory.

Where small sets of manually maintained values are unavoidable, they can be kept under version control rather than in loose spreadsheets. dbt's documentation on [seeds](https://docs.getdbt.com/docs/build/seeds) describes small CSV files held in the project, loaded into the warehouse and referenced like any other model. Because they are version-controlled, changes to them are reviewable. The documentation recommends them for mapping tables, exclusion lists and similar reference data, and advises against using them for raw exports or sensitive data. An adjustments file maintained this way has a history by default.

## Problem owner and why now

The financial controller or head of reporting usually owns the adjustments, because finance makes most of them. The financial director carries the risk, since management packs, lender reporting and budgets rely on the figures. The budget owner is typically the CFO. The common trigger is a metric dispute: a sales director challenging commission figures, a branch manager questioning performance numbers, or a lender asking how a covenant figure was derived. Other triggers include audit findings on management information, staff turnover in the reporting team, and AI or analytics projects that train on historical data and cannot tell adjusted values from measured ones.

## Economic consequence

Untracked overrides cost money in several ways. Stale adjustments distort figures, sometimes by double counting. Incentive payments may be made on adjusted numbers that nobody can later justify. Time is lost every month re-deriving why a figure differs from source. If the person who made the adjustments leaves, the pack may become impossible to reproduce. The wider audit and assurance cost of untraceable figures is explored in [the cost of a reporting number nobody can trace](/impact/untraceable-reporting-number-audit-cost/). Size the effect from your own records: the number of adjustments in last month's pack, how many are still needed, and how long it would take someone new to explain them.

### An illustrative example

*Illustrative example, not a client case.* A South African agricultural input supplier produces a monthly branch performance pack. Over two years, the pack accumulates more than forty hand-entered adjustments across several spreadsheets: reclassified sales, estimated rebates, excluded inter-branch transfers. When the reporting analyst resigns, her successor cannot tell which are still valid. The business moves all adjustments into a single register, with columns for amount, branch, period, reason, author, approver and expiry date. The report shows source figures, adjustments and adjusted totals separately. In the first review, a third of the adjustments are found to be obsolete.

## Root cause

- **Adjustments made where reports are built.** Overrides are typed into cells or queries rather than recorded as separate data.
- **No metadata.** Adjustments have no author, reason, date or expiry.
- **No separation in the output.** Reports show only the final figure, not source plus adjustment.
- **No approval threshold.** Material adjustments receive the same scrutiny as trivial ones: none.
- **Source corrections not linked.** When a source system is fixed, nobody removes the matching override.

These causes are typical of a reporting process that has outgrown its spreadsheet, a condition described in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/), and of finance teams that have become the clean-up crew, covered in [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/).

## Practical intervention

1. **Create a single adjustments register.** Every override is a row with amount, entity, period, reason, author, approver and expiry or review date.
2. **Keep adjustments out of source data and formulas.** The reporting model reads source data and the adjustments register separately and combines them.
3. **Show the layers.** Reports display source value, adjustment and adjusted value, or at least flag figures that include adjustments.
4. **Set approval thresholds.** Adjustments above an agreed value need a second person's approval.
5. **Review monthly.** Expired or resolved adjustments are removed, and source fixes are matched to the overrides they replace.
6. **Fix the source where possible.** Treat recurring adjustments as evidence of a process or system problem to be solved upstream.

## Diagnostic questions

- How many manual adjustments are in this month's management pack?
- For each, can you say who made it, why and whether it is still needed?
- Can a reader of the report tell which figures were adjusted?
- Who approves a material adjustment?
- When a source error is corrected, how do you make sure the override is removed?

## What good looks like

Every override lives in one register with a reason, author, approver and expiry. Reports show source and adjusted figures separately. Adjustments are reviewed monthly and retired when the source is fixed. Anyone can trace a reported figure back to the system that produced it and to any judgement applied on top. Recurring overrides are treated as signals for upstream fixes, not as permanent features.

## Where Mellorca fits

A [digital systems audit](/services/digital-systems-audit/) finds where overrides currently live in your reporting and which recurring adjustments point to upstream fixes. Our [digital operations improvement](/services/digital-operations-improvement/) work sets up the adjustments register, approval steps and review routine, and fixes the processes that keep generating the same corrections.

*Method note:* this article concerns management reporting; adjustments to statutory financial records should follow your accounting policies and auditors' requirements.
