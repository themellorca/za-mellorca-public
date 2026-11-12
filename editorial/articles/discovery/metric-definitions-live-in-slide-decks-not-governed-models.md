---
hub: discovery
record_id: DISC-261
slug: metric-definitions-live-in-slide-decks-not-governed-models
title: When KPI definitions live in slide decks instead of the reporting model
description: The definitions slide at the back of the board pack describes how KPIs should be calculated. The reports may calculate them differently. Why definitions drift from logic, and how to make them one and the same.
lead: The definitions slide at the back of the board pack describes how KPIs should be calculated. The reports may calculate them differently. Why definitions drift from logic, and how to make them one and the same.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Financial Director / CFO
budget_owner: CFO / CEO
sources:
  - Measures in Power BI Desktop - Power BI | https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measures
  - Creating metrics - dbt Developer Hub | https://docs.getdbt.com/docs/build/metrics-overview
  - Glossary Terms in Unified Catalog | https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms
related:
  - Why last year's figures keep changing when reporting logic is overwritten | /discovery/historical-metrics-change-when-business-logic-is-overwritten/
  - When a new business unit invents its own metrics before group definitions exist | /discovery/new-business-units-create-metrics-before-group-definitions/
  - Why dashboards refresh at different times without anyone knowing | /discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/
summary: The definitions slide at the back of the board pack describes how KPIs should be calculated. The reports may calculate them differently. Why definitions drift from logic, and how to make them one and the same.
layout: plain
---
Near the back of most board packs there is a slide titled "Definitions". It explains that "active customer" means a customer who has bought in the last twelve months, that "gross margin" excludes delivery costs, and that "headcount" includes fixed-term contractors. The slide was written carefully, probably two or three years ago. The question nobody asks is whether the numbers on the earlier slides are still calculated that way.

This article is about metric definitions that live in presentations, PDFs and email threads rather than in the reporting model that actually produces the numbers. It is a quieter cousin of the better-known problem of departments giving different answers. Here the business may well give one answer, but nobody can prove that the answer matches what it says it measures.

## The problem in plain language

A definition on a slide is a description. A definition in a governed model is an instruction that the reporting system executes every time. When the two are separate, they drift apart. An analyst adjusts a filter to exclude a test account, a new product type is added, a report is rebuilt in a new tool. Each change is reasonable, and none of them is reflected on the slide.

Typical signs include:

- the definitions slide is copied from pack to pack without review;
- the formula for a KPI exists in several report files, each slightly different;
- new analysts learn definitions by asking colleagues or reading old decks;
- board members or investors ask "how is this calculated?" and the answer takes days;
- nobody can say who last approved a definition, or when.

## What the buyer is actually trying to solve

The person searching is often a financial director, company secretary or managing director preparing for tougher board or investor reporting. Their searches sound like "KPI definitions document", "metrics dictionary for board reporting" or "how to govern KPI definitions in Power BI". The underlying need is assurance: when the board reads a number, the business should be able to show, quickly and convincingly, exactly how it was calculated, from which data, under which approved definition.

## Evidence and system mechanism

Modern reporting tools make it easy to define a calculation in many places. Microsoft's documentation on [measures in Power BI Desktop](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measures) distinguishes model measures, created in the shared data model, from report-level measures, created directly within an individual report on top of an existing dataset. Report-level measures are useful for flexibility, but every one is a place where a KPI can be redefined without the shared model, or the definitions slide, knowing about it.

The alternative is to define metrics once, in the model, as governed code. dbt's [metrics documentation](https://docs.getdbt.com/docs/build/metrics-overview) shows metrics declared in YAML files inside the project, each with a name, type, description, label and optional filter, alongside the models they use. Because they sit in the project, changes to them can be reviewed like any other change to code, and the description lives next to the calculation rather than in a separate document.

Business glossaries close the remaining gap between words and data. Microsoft Purview's [glossary terms](https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms) are described as business concepts that can be linked to data products, data assets and individual columns, and organised by governance domain, because sales and marketing might use the same term to mean different things. The point for a mid-sized business is not the specific product. It is that a definition becomes useful when it is attached to the data it describes and owned by someone, rather than pasted into a slide.

## Problem owner and why now

The financial director or CFO usually owns board reporting and therefore the definitions in it. Operational KPI owners, such as the sales or operations director, own the meaning of their own measures. The budget owner is typically the CFO or CEO. The usual trigger is board reporting pressure: a new independent director, an investor or lender requiring covenant or KPI reporting, an audit committee asking how management information is produced, or a move to a new BI platform where every report has to be rebuilt and someone notices that the old calculations were never written down properly.

## Economic consequence

The cost appears as time and exposure. Senior finance staff spend hours answering "how is this calculated?" by reading report files. Board debate drifts into definitions rather than decisions. If a lender covenant or investor KPI is reported under a definition that has silently changed, the business may misstate its position without intending to. Rebuilding reports during a platform change takes longer because the true logic must be reverse-engineered. Size the effect from your own experience: time spent answering definition queries, reports rebuilt, and any occasion where a reported figure had to be corrected.

### An illustrative example

*Illustrative example, not a client case.* A South African private healthcare group reports "average revenue per patient visit" to its board. The definitions slide says the figure excludes medical aid shortfalls written off. When the group moves to a new BI tool, the developer finds three versions of the calculation across older reports: one that excludes write-offs, one that includes them and one that excludes a clinic acquired two years earlier. The board had been seeing the third version for two years. Nobody had acted in bad faith; the slide simply was not connected to the calculation.

## Root cause

- **Definitions written as documentation, not as logic.** The slide describes intent; the calculation lives elsewhere.
- **Calculations duplicated in individual reports.** Each report author rebuilds the KPI.
- **No named owner or approval.** Nobody signs off a definition or its changes.
- **No link between term and data.** The business word is not attached to the columns and measures that implement it.

These causes sit inside the broader problem described in [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/). Where departments disagree on the same number, see [executives getting different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/); and for why figures fail to reconcile across systems, see [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Practical intervention

1. **List the board-level metrics.** Start with the twenty or thirty numbers the board and lenders actually see.
2. **Find every implementation.** For each metric, locate every report and spreadsheet that calculates it, and compare the logic with the slide.
3. **Agree one definition and an owner.** Record inclusions, exclusions, timing and source, and have the owner and the financial director approve it.
4. **Move the definition into the model.** Implement it once as a shared measure or metric, with its description stored alongside the calculation, and retire report-level copies.
5. **Generate the definitions page from the model.** Instead of a hand-maintained slide, publish the glossary from the governed definitions so the words and the logic cannot drift.
6. **Put changes through review.** Any change to a board metric is recorded with a date, reason and approver, and noted in the next pack.

## Diagnostic questions

- When did someone last check the definitions slide against the actual calculations?
- How many reports calculate your headline KPIs independently?
- Who approves a change to a board metric, and is that recorded?
- Could you answer "how is this calculated?" for any board figure within an hour?
- Will your next BI migration start from written, executable definitions?

## What good looks like

Each board metric has one definition, one owner and one implementation in the shared model. The description sits next to the calculation and is published from it. Report authors reuse the governed measure rather than rewriting it. Changes are reviewed, dated and visible. When a director asks how a number is calculated, the answer is a link, not a research project.

## Where Mellorca fits

A [digital systems audit](/services/digital-systems-audit/) traces each board metric to every place it is calculated and shows where the logic has drifted. Our [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work then sets out where governed definitions should live and how report authors reuse them.

*Method note:* tool features are described from vendor documentation at the time of writing; equivalent capabilities exist in other BI and data platforms.
