---
hub: discovery
record_id: DISC-259
slug: historical-metrics-change-when-business-logic-is-overwritten
title: Why last year's figures keep changing when reporting logic is overwritten
description: A figure reported to the board in March reads differently in September. How overwritten rules rewrite history and how to make changes visible.
lead: A churn figure reported to the board in March reads differently in September for the same year. How overwritten rules and attributes rewrite history, and how to make changes to the past deliberate and visible.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Financial Director / Head of Reporting
budget_owner: CFO
sources:
  - Modeling Dimension Tables in Warehouse - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables
  - Type 2: Add New Row - Kimball Dimensional Modeling Techniques | https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/type-2/
  - Add snapshots to your DAG - dbt Developer Hub | https://docs.getdbt.com/docs/build/snapshots
  - IFRS - IAS 8 Basis of Preparation of Financial Statements | https://www.ifrs.org/issued-standards/list-of-standards/ias-8-accounting-policies-changes-in-accounting-estimates-and-errors/
related:
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
  - Why dashboards refresh at different times without anyone knowing | /discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
summary: A churn figure reported to the board in March reads differently in September for the same year. How overwritten rules and attributes rewrite history, and how to make changes to the past deliberate and visible.
layout: plain
---
Picture a familiar scenario. In March the board was told that customer churn for the previous year was 9%. In September the same dashboard, filtered to the same year, says 12%. Nobody made an error in March, and nobody made one in September. Between the two, the analytics team changed the rule for when a customer counts as "lost", and the new rule was applied to every year in the model. Last year's figure moved, and nobody announced it.

This article is about historical metrics that change after the fact because the business logic behind them was overwritten rather than versioned. It is one of the most corrosive reporting problems, because it undermines the one thing management assumes is fixed: the past.

## The problem in plain language

Reports calculate figures from raw records using rules: what counts as an active customer, which discounts reduce revenue, which costs are allocated to which branch, which salesperson owns which account. When a rule changes, most reporting tools simply recalculate everything with the new rule. Historical figures are not stored; they are recomputed each time someone opens the report.

The same applies to descriptive attributes. If a customer is reassigned from one account manager to another, or a branch is moved under a new regional manager, the tool usually overwrites the old value. Every past sale for that customer now appears under the new manager, as if it had always been theirs.

The symptoms include board packs that cannot be reproduced, year-on-year comparisons that shift between meetings, commission or bonus disputes over prior periods, and auditors or lenders asking why a figure in this year's pack differs from the one they received last year.

## What you are actually trying to solve

Questions such as "why did last year's numbers change in our dashboard?", "why did a historical KPI change after a report update?" or "how do we keep historical reporting consistent?" usually come from financial directors, BI managers or managing directors who have been caught out in a meeting. They are not asking for history to be frozen forever. Businesses do need to correct errors and improve definitions. They want changes to the past to be deliberate, visible and explainable, with the ability to show both the old and the new view when needed.

## Evidence and system mechanism

Data modelling practice has well-established names for this. Microsoft's guidance on [dimension tables](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables) describes a "type 1" change as one that overwrites the existing value and does not preserve history. It gives the example of a salesperson assigned to a new sales region: after an overwrite, the rollup of their historic sales by region produces a different result, as if they had always been in the new region. A "type 2" change instead inserts a new, dated version of the record, so past transactions stay linked to the version that was valid at the time. The [Kimball Group's description of the type 2 technique](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/type-2/) sets out the effective date, expiry date and current-row indicator that make this possible.

Source systems often do not keep this history themselves. dbt's documentation on [snapshots](https://docs.getdbt.com/docs/build/snapshots) shows the problem with a simple order whose status changes from "pending" to "shipped": once the source row is updated, the fact that it was ever pending is lost. Snapshots record each version with "valid from" and "valid to" timestamps, so the history can be reconstructed.

Accounting already has a discipline for changing the past. IAS 8, as summarised on the [IFRS Foundation's standard page](https://www.ifrs.org/issued-standards/list-of-standards/ias-8-accounting-policies-changes-in-accounting-estimates-and-errors/), distinguishes between changes in accounting policy and corrections of prior-period errors, which are applied retrospectively with comparatives restated, and changes in estimates, which are applied prospectively. Management reporting is not bound by IAS 8, but the principle transfers well: decide whether a change restates history or applies from a date, and say so.

## Problem owner and why now

The financial director or head of reporting usually owns the consequences, because their credibility is attached to the numbers. The logic itself is often maintained by an analyst, a BI developer or an external consultant. The budget owner is typically the CFO. The trigger is often a metric dispute: a sales director contesting a prior-year comparison, a bonus calculated on figures that later moved, or a board member noticing that two packs disagree. Other triggers are a migration to a new BI platform, a funding or lending process where historical figures are scrutinised, and AI forecasting projects trained on history that keeps changing.

## Economic consequence

The visible cost is time spent explaining discrepancies and rebuilding old packs. The less visible costs are worse. Trend analysis becomes unreliable, because the baseline moves. Incentive payments based on prior-period figures become contestable. Forecasting models learn from a history that did not happen. In due diligence or lender reviews, unexplained changes to historical figures invite questions about control. Measure the effect from your own records: how often prior-period figures have been questioned, how long reconciliations took, and whether any payments or decisions depended on figures that later changed.

### An illustrative example

*Illustrative example, not a client case.* A South African logistics company pays its key account managers a bonus on year-on-year revenue growth per account portfolio. Mid-year, several large accounts are reassigned. Because the CRM overwrites the account owner, the prior-year baseline for each manager is recalculated with the new portfolios. One manager's growth appears to collapse; another's soars. Rebuilding the original portfolios takes weeks of email archaeology. Keeping dated ownership records would have made both views available in minutes.

## Root cause

- **Logic recomputed, not versioned.** Metric rules are edited in place, and every period is recalculated with the latest version.
- **Attributes overwritten by default.** Ownership, region and hierarchy changes replace old values instead of adding dated versions.
- **No change log for definitions.** Nobody records when a rule changed, why, and which periods it affects.
- **No published snapshots.** Board packs are not stored as reproducible outputs.
- **No policy for restatement.** The business has never decided when the past should move.

The ownership gap behind these causes is described in [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/). When the disagreement is between departments at the same moment, rather than between two moments, see [executives getting different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/).

## Practical intervention

1. **Classify attributes.** For each attribute that drives reporting, such as account owner, region, branch hierarchy or product category, decide whether history should be preserved (dated versions) or corrected (overwrite).
2. **Capture history where the source does not.** Use snapshots or dated version tables for the attributes that need it.
3. **Version metric definitions.** Keep metric logic under version control with a change log stating the date, reason and approver.
4. **Adopt a restatement rule.** Borrow the accounting principle: errors and genuine definition changes may restate history, but only with approval and a note; other changes apply from a stated date.
5. **Freeze published outputs.** Store each month's board pack figures as a snapshot, so the business can always show what it reported and compare it with the restated view.
6. **Show restatements openly.** When history moves, publish a short bridge from the old to the new figure.

## Diagnostic questions

- Could you reproduce last year's board pack figures exactly today?
- When an account changes owner, does your reporting remember the previous owner?
- Is there a dated log of changes to your key metric definitions?
- Who approves a change that moves prior-period figures?
- Do bonus or commission rules say which version of history they use?

## What good looks like

Published figures are stored and reproducible. Attributes that matter for history carry dated versions. Metric definitions are versioned, with a change log. When the business decides to restate the past, it does so deliberately, with approval and a visible bridge, and everyone can still see what was originally reported.

## Where Mellorca fits

Our [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work defines which attributes need history and where versioned logic should live. Through [systems implementation and integration](/services/systems-implementation-integration/), we put snapshots, version control and published-figure storage in place around your existing ERP, CRM and BI tools.

*Method note:* references to IAS 8 illustrate a principle and are not accounting advice; statutory restatements should be agreed with your auditors.
