---
hub: discovery
record_id: DISC-251
slug: executives-get-different-answers-to-the-same-kpi-question
title: Why executives get different answers to the same KPI question
description: Finance, sales and operations give three numbers for one KPI when the board pack is due. How a certified KPI catalogue gives a single answer.
lead: Ask finance, sales and operations for the same KPI and three numbers come back. Why it happens when a board pack is due, and how a certified KPI catalogue and a single answer route fix it.
category: Data, Reporting & Decision Systems
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: CFO or head of finance, with the reporting or BI lead
budget_owner: CFO, sometimes jointly with the CEO's office
sources:
  - dbt Semantic Layer - dbt Developer Hub | https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl
  - Microsoft Fabric adoption roadmap: Governance - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-governance
  - Endorse your content - Power BI | Microsoft Learn | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
related:
  - Why sales, finance and operations each define revenue differently | /discovery/sales-finance-and-operations-define-revenue-differently/
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
summary: Ask finance, sales and operations for the same KPI and three numbers come back. Why it happens when a board pack is due, and how a certified KPI catalogue and a single answer route fix it.
layout: plain
---
The CEO asks a simple question in the management meeting: how many active customers do we have? Finance says one number, sales another, operations a third. Each answer comes with a reasonable explanation. The meeting spends twenty minutes reconciling definitions instead of deciding anything, and the question is "taken offline". A week later the board pack goes out with a figure that nobody in the room fully trusts.

This article looks at that operating condition: executives receiving different answers to the same KPI question. It is a common and frustrating problem, and it becomes acute when board reporting, funding conversations or audits put the numbers under scrutiny.

## The problem in plain language

A KPI question reaches different people, who answer it from different systems, with different definitions, filters and timing. None of them is necessarily wrong. "Active customer" might mean ordered in the last twelve months to sales, has an open account to finance, and received a delivery this quarter to operations. "Revenue" may be invoiced, recognised or collected. "Headcount" may include contractors or not. Without one agreed definition and one source, every answer is defensible and none is authoritative.

The executive experiences this as a trust problem. Once two numbers have been seen, every future number is doubted, and the business starts spending time checking figures rather than acting on them.

## What you are actually trying to solve

Leaders ask how to get one version of the truth, why their reports do not match, or how to make board reporting consistent. The practical need is narrower and more achievable: for the twenty or thirty numbers that leadership and the board actually use, every question should get the same answer, regardless of who is asked or which tool they open.

## Evidence and system mechanism

### Definitions live inside individual reports

In most businesses, the calculation behind a KPI is written into each report or spreadsheet that shows it. When three teams build three reports, they write three calculations. [dbt's Semantic Layer documentation](https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl) describes the alternative: define metrics once in a central modelling layer instead of in each BI tool, so that different business units work from the same definitions regardless of the tool they use, and a change to a definition is reflected everywhere the metric is used. The specific product matters less than the principle: a metric should be defined once and reused, not re-implemented.

### Governance names the failure modes

[Microsoft's governance guidance for Fabric and Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-governance) lists common challenges that match this problem closely: sprawl of data and reports, inconsistent reports produced without sufficient validation, lack of trust in data, a missing glossary or lineage, and unclear data ownership and stewardship. It recommends a certification (endorsement) policy that includes data accuracy validation, source and lineage review and documentation review, and it suggests requiring standardised master data and common data definitions. It also notes that content delivered to executives is a typical criterion for treating a report as critical and subjecting it to stricter governance. Power BI supports this with [certified content](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content), which only reviewers authorised by the administrator can certify as meeting the organisation's quality standards.

### Warning signs

- Management meetings regularly debate which number is right.
- Board packs are assembled by hand from several departmental reports.
- The same KPI appears in different dashboards with different values.
- Nobody can point to a written definition for the company's headline metrics.
- Producing one number requires several people, the pattern described in [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/).

## Problem owner and why-now trigger

The CFO or head of finance usually owns the problem, because finance is accountable for numbers that reach the board and auditors. The reporting or BI lead, where one exists, owns the technical fix. Department heads own the business meaning of their metrics.

The typical trigger is board reporting pressure: a new board member who asks probing questions, an investor or lender requiring covenant reporting, a change in company secretary, or an audit committee that wants figures reconciled to source. Growth is another trigger, because each new department, branch or system adds another place where a KPI can be calculated differently.

## Economic consequence

The most visible cost is leadership time spent reconciling instead of deciding. Less visible is the cost of delayed or wrong decisions: a pricing change made on an inflated margin figure, a hiring freeze based on a pessimistic pipeline number. There is also a governance cost. When board figures cannot be traced to source, auditors and directors ask harder questions, and preparing answers takes skilled time; see [the audit cost of untraceable reporting numbers](/impact/untraceable-reporting-number-audit-cost/).

## Root cause

- **No owned definition.** Each KPI lacks a single written definition with a named business owner, the problem explored in [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).
- **Calculations duplicated in tools.** Every report re-implements the logic, so definitions drift.
- **Multiple sources for the same entity.** Customers, products or employees exist differently in different systems.
- **No certified source.** Nothing distinguishes the official figure from a useful but unofficial analysis.
- **No answer route.** Executive questions go to whoever is nearest, rather than to the owner of the metric.

The general causes of reports disagreeing are covered in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/). This article focuses on what to do about the executive and board layer.

## Practical intervention

1. **Start with the board and management pack.** List the KPIs that actually appear in leadership reporting. For most mid-sized businesses this is twenty to forty numbers, not hundreds.
2. **Write a KPI catalogue.** For each KPI record the definition in plain language, the calculation, inclusions and exclusions, the source system, the refresh timing and a named business owner.
3. **Resolve conflicts explicitly.** Where departments genuinely need different measures, give them different names, such as "active customers (ordering)" and "active customers (open account)", rather than letting one name carry two meanings.
4. **Define once, reuse everywhere.** Implement each catalogue KPI once, in a shared data model or semantic layer, and point reports at it.
5. **Certify the official source.** Mark the reports or datasets that carry certified figures, and make clear that anything else is analysis.
6. **Route questions to owners.** When an executive asks a KPI question, the answer comes from the certified source or from the KPI's owner.

### Trade-offs

Agreeing definitions is political. Departments may resist a definition that makes their numbers look worse. Executive sponsorship is needed to settle disputes. A full semantic layer is not required on day one; a written catalogue and a single certified report can deliver most of the benefit before any new tooling.

### An illustrative example

*Illustrative:* a Johannesburg private healthcare services group with about 300 staff found that "patient visits" differed noticeably between its practice management system, its finance reports and its operations dashboard. Each counted cancellations and follow-ups differently. The CFO convened the owners, agreed three distinctly named measures, recorded them in a KPI catalogue and rebuilt the board pack from a single certified dataset. Management meetings stopped debating the number and started discussing the trend.

## Diagnostic questions

- For your five headline KPIs, is there a written definition and a named owner?
- If three people were asked for the same KPI today, would they give the same number?
- Can every board figure be traced to a source system and a calculation?
- Is it clear which reports are official and which are working analysis?
- When a definition changes, how many reports have to be updated by hand?

## What good looks like

Leadership KPIs have one definition, one owner and one certified source. Calculations are implemented once and reused. Different measures have different names. Board packs are produced from certified data with minimal manual assembly. When the CEO asks a question, the answer is the same whoever is asked, and meetings spend their time on decisions.

## Where Mellorca fits

Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work includes building KPI catalogues, agreeing definitions with metric owners and restructuring reporting so that leadership figures come from one certified source. Where data sits in several systems, [systems implementation and integration](/services/systems-implementation-integration/) can consolidate it.

## Method note

This article draws on vendor documentation for semantic layers and BI governance. It does not quote figures on how often executives receive conflicting numbers, as no reliable source was found. The example is illustrative and not based on a specific client.
