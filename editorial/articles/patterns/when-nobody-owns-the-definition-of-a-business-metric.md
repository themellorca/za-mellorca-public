---
hub: patterns
record_id: PAT-240
slug: when-nobody-owns-the-definition-of-a-business-metric
title: When nobody owns the definition of a business metric
description: When teams use the same KPI name but calculate it differently, the business may have a metric-definition and data-governance ownership problem.
lead: If the same KPI produces different answers depending on the report, the disagreement may start with ownership of the definition rather than the dashboard.
category: Data Quality, Ownership & Governance
published_date: 2026-09-06
updated_date: 2026-09-06
eyebrow: Pattern
tags:
  - Decision quality
  - Trust
  - Automation readiness
cta_label: Digital Operations
cta_href: /services/digital-operations/
side_title: Commercial value
pattern_family: Data Quality, Ownership & Governance
observable_condition: Teams use the same business metric name but calculate, filter or interpret it differently.
primary_identification: metric-definition and data-governance ownership problem
commercial_value_dimensions: Decision quality, Management capacity, Automation readiness, Trust
sources:
  - dbt Semantic Layer - dbt Developer Hub | https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl
  - Promote and Certify Power BI Content with Endorsement - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorsement-overview
  - Power BI usage scenarios: Managed self-service BI - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-usage-scenario-managed-self-service-bi
related:
  - When poor data quality becomes an automation failure | /patterns/when-poor-data-quality-becomes-an-automation-failure/
  - When nobody knows which system holds the correct data | /patterns/when-nobody-knows-which-system-holds-the-correct-data/
  - Why can nobody find the document they know exists? | /patterns/why-can-nobody-find-the-document-they-know-exists/
summary: Conflicting KPI values often begin with conflicting definitions, not broken dashboards. Assigning ownership to metric meaning and calculation rules can improve decision trust and make reporting, automation and AI more dependable.
---
## Observable condition

Sales reports one conversion rate, finance uses another revenue figure, operations counts a completed order differently and management meetings begin with people reconciling numbers. Everyone may be using technically valid data while still measuring different things under the same label.

The pattern usually shows itself in small, repeated ways. A board pack carries a footnote explaining why this month's figure differs from the one in the sales dashboard. An analyst keeps a private spreadsheet of "adjustments" that only they understand. A manager asks for "the real number" before a decision. Someone says "it depends which report you look at" and nobody in the room disagrees.

## Realisation

This can look like a reporting-tool problem. But when multiple systems or teams calculate a metric differently, changing the dashboard only relocates the disagreement. The deeper question is whether the organisation has defined what the metric means, which events count, which exclusions apply, which time period governs it and who has authority to maintain that definition.

> If two competent people can calculate the same metric honestly and get different answers, the problem is not the people or the tool. The metric has not been defined.

## Identification

This is a **metric-definition and data-governance ownership problem**. The visible symptom is conflicting numbers. The structural issue is that the meaning of a measure has never been made explicit, agreed and assigned to someone with authority to maintain it.

## Diagnosis

Common causes include calculations created independently by departments, undocumented filters, different source systems, changing business rules and no named owner for metric semantics. ISO 8000 treats information and data quality as something that must be understood, measured and managed through documented methods. A metric cannot be reliably automated or compared when its underlying meaning changes between users.

In practice, definitions drift apart through a handful of ordinary mechanisms:

- **Different counting events.** One team counts a sale when the quote is accepted, another when the order is created and finance when the invoice is raised. All three are defensible; they are not the same metric.
- **Different denominators.** A conversion rate divided by all enquiries is a different number from one divided by qualified enquiries. The label rarely says which.
- **Silent exclusions.** Internal test orders, cancelled transactions, credit notes or one large unusual customer are filtered out in one report and left in another.
- **Different time rules.** Calendar month versus financial period, order date versus ship date, or a report that refreshes overnight compared with one that reads live data.
- **Undocumented business-rule changes.** The definition was updated after a pricing or process change, but older reports and spreadsheets still carry the earlier logic.

None of these require anyone to make a mistake. They arise naturally when each team builds the measure it needs, inside the tool it uses, without a shared reference to check against.

## An illustrative example

*Illustrative only, not a client case.* A business tracks "active customers". The sales team counts any account with an open opportunity or a purchase in the last twelve months. Finance counts accounts invoiced in the current financial year. Customer support counts accounts that logged a ticket in the last ninety days. Each figure is accurate for its own purpose. The problem appears when leadership sets a target for active-customer growth and each team reports progress against a different definition, then spends the review meeting explaining the gap rather than discussing what to do.

## Commercial impact

The value wrapper is **decision quality, management capacity, automation readiness and trust**. Meetings are consumed by reconciliation. Teams can optimise against different versions of the same objective. Automated alerts and AI analysis can amplify confusion if the metric definition is ambiguous before technology is applied.

There is also a quieter cost. When people stop trusting reported numbers, they rebuild their own. Each private version adds another definition to the estate and makes the next reconciliation harder. Over time the organisation spends analytical capacity defending figures instead of interpreting them. The related Insight on [why reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) explores the reporting side of this mechanism.

## Warning signs

- Recurring meetings open with "which number are we using?"
- Board or management packs carry reconciliation footnotes as a matter of routine.
- One analyst is the only person who can explain why two figures differ.
- Targets and incentives refer to a metric name without a written calculation.
- Dashboards in different tools each contain their own copy of the formula.

## Common misidentification

The instinct is often to create a "single dashboard". A common interface helps only after the business agrees what each measure means. A shared visual layer sitting on top of competing definitions can make inconsistency look authoritative rather than resolving it.

A second misidentification is to treat the problem as data cleansing. Clean data still produces conflicting answers if the calculation rules differ. Quality work matters, but it addresses accuracy, not meaning.

## Possibility

A stronger operating model gives important metrics explicit semantic ownership. Each metric has a documented definition, source events, calculation logic, exclusions, refresh expectation and accountable owner. Systems can then implement the definition consistently instead of inventing it independently.

Current analytics tooling already supports this way of working. The [dbt Semantic Layer](https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl), for example, is documented as centralising metric definitions in the modelling layer so that downstream tools draw on the same definition, and a change made once is reflected wherever the metric is used. Microsoft documents [Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorsement-overview) endorsement, where certified content is treated as meeting the organisation's quality standards and regarded as authoritative. Neither feature resolves disagreement by itself. Both assume the business has already decided what the metric means and who may certify it. Microsoft's guidance on [managed self-service BI](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-usage-scenario-managed-self-service-bi) similarly aims at a single version of the truth, with shared semantic models maintained by a central team and certified content marked as trustworthy.

## Trade-offs

Not every number needs formal ownership. Governing every exploratory calculation would slow analysis and push people back to private spreadsheets. The discipline is best applied to a short list of metrics that drive targets, incentives, external reporting or automated actions. Teams may still need local variants; the requirement is that variants carry distinct names rather than borrowing the label of the governed measure.

## Intervention

Select five metrics that regularly create debate. For each one, ask two teams to write the calculation and business meaning without consulting each other. Compare the answers. Where they diverge, resolve the business definition first, then encode it in reporting or semantic-layer tooling.

1. Name an accountable owner for each metric's meaning, separate from whoever maintains the report.
2. Write a one-page definition: purpose, counting event, denominator, exclusions, time rule, source system and refresh expectation.
3. Rename local variants so they no longer share the governed label.
4. Implement the definition once and point dashboards, alerts and analysis at it.
5. Record changes to the definition with a date and reason so historical comparisons remain explainable.

## Practical diagnostic questions

- Can two teams independently explain the metric and produce the same result?
- Who is authorised to change the definition?
- Which source event determines when something is counted?
- Are exclusions, time windows and denominators documented?
- Do dashboards reuse one definition or recreate calculations separately?
- When the definition last changed, were older reports updated or labelled?

## What better looks like

Meetings start with the number rather than the argument about it. A new analyst can find the definition of a key metric without asking a colleague. Automated alerts and AI-assisted analysis draw on the same governed calculation as the board pack. When a definition changes, the change is visible, dated and owned.

## Bottom line

When nobody owns the definition of a business metric, the company can have more data and less agreement at the same time.

Undefined metrics also show up as effort and audit exposure. [Why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/) describes the labour of assembling a contested figure, and [the audit cost of an untraceable reporting number](/impact/untraceable-reporting-number-audit-cost/) shows what happens when nobody can explain how it was produced. Once definitions are agreed, [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/) is a useful check before adding more reporting.
