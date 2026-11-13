---
hub: discovery
record_id: DISC-256
slug: why-business-users-cannot-trace-a-dashboard-number-to-its-source
title: Why business users cannot trace a dashboard number back to its source
description: When only the report builder can say where a dashboard figure comes from, trust erodes. How to give readers a path back to the source.
lead: When a manager asks where a dashboard figure comes from and only the report builder can answer, trust erodes. How to give the people reading the dashboard a path to the source.
category: Data, Reporting & Decision Systems
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead
budget_owner: Finance director
sources:
  - Data lineage - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-data-lineage
  - What Is Data Lineage? - IBM | https://www.ibm.com/think/topics/data-lineage
  - Documentation - OpenLineage | https://openlineage.io/docs/
  - Endorse your content - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
related:
  - Why executives get different answers to the same KPI question | /discovery/executives-get-different-answers-to-the-same-kpi-question/
  - Why sales, finance and operations each define revenue differently | /discovery/sales-finance-and-operations-define-revenue-differently/
  - Why dashboards refresh at different times without anyone knowing | /discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/
summary: When a manager asks where a dashboard figure comes from and only the report builder can answer, trust erodes. How to give the people reading the dashboard a path to the source.
layout: plain
---
A regional manager looks at the dashboard and sees that her branch's gross margin dropped three points last month. She does not believe it. She wants to know which sales are included, whether returns are netted off, which cost prices were used and when the data was last updated. The dashboard cannot tell her. She emails the analyst who built it, who is on leave. By the time an answer arrives, the management meeting has moved on, and the manager has quietly built her own spreadsheet that shows a different number.

This article looks at that operating condition: business users who cannot trace a dashboard number back to its source. It is less about audit than about everyday trust, and it becomes urgent when the same figures go to the board.

## The problem in plain language

A dashboard figure is the end of a chain: source systems, extracts, transformations, filters, a calculation and a refresh. The people who build reports can usually follow that chain, at least for their own work. The people who read reports usually cannot. They see a number with no definition, no indication of which systems it came from, no date, and no way to drill down to the records behind it. When they doubt it, their only option is to ask a person.

## What you are actually trying to solve

Finance and reporting leads look for ways to show where dashboard data comes from, add drill-through to source, or document report lineage. Department heads want to check a surprising figure themselves. Directors want confidence that what they approve is grounded in records. The underlying need is that any reader of an important dashboard can answer four questions without asking anyone: what does this number mean, where did it come from, how current is it, and which records make it up?

## Evidence and system mechanism

### Lineage exists, but mostly for builders

BI platforms do track where data comes from. Microsoft's documentation on [data lineage in Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-data-lineage) describes a lineage view that shows the data sources, semantic models, dataflows, reports and dashboards in a workspace, how data flows between them, and the last refresh time of each model. It opens by noting that questions such as why a report is not up to date can be hard to answer and may need a team of experts. But the same page states that lineage view requires a Pro licence and an Admin, Member or Contributor role; users with a Viewer role cannot switch to it. The readers of the dashboard are usually viewers.

### Why lineage matters to trust

IBM's overview of [data lineage](https://www.ibm.com/think/topics/data-lineage) describes it as tracking where data originated, how it has changed and where it ends up. It highlights two uses that matter to business users: an audit trail detailed enough to debug data errors, and impact analysis showing which dashboards, and how many users, are affected when a data element changes. Both are routine questions from managers, not only from data engineers.

### Lineage can be collected in a standard way

Where data passes through several tools before reaching a dashboard, lineage needs to be captured across them. The [OpenLineage](https://openlineage.io/docs/) project defines an open standard for lineage metadata built around datasets, jobs and runs, with integrations for common data tools. A small business will not start there, but the principle applies at any scale: record which sources and steps produced each dataset, automatically, rather than relying on memory.

### Readers also need to know what is official

Traceability is easier when readers can tell authoritative content from personal experiments. Microsoft's guidance on [endorsing content](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content) describes certification as meaning content meets the organisation's quality standards and is authoritative, with only reviewers authorised by the administrator able to certify.

### What readers need on the page

| Reader's question | What answers it |
| --- | --- |
| What does this mean? | A short definition with inclusions and exclusions |
| Where did it come from? | Named source systems and owner |
| How current is it? | Last successful refresh date and time |
| Which records make it up? | Drill-through to the underlying transactions |
| Is this the official version? | A certification mark and named approver |

## Problem owner and why-now trigger

The BI or reporting lead owns the fix. Where that role does not exist, the finance team usually owns the dashboards that matter most. The finance director typically funds the work, because the cost appears as mistrust of management information and time spent explaining it.

The common trigger is board reporting pressure: a new director who asks how a figure was derived, an audit committee that wants figures traced to source, or a lender reviewing covenant calculations. The cost side of that scrutiny is explored in [the audit cost of untraceable reporting numbers](/impact/untraceable-reporting-number-audit-cost/).

## Economic consequence

When readers cannot trace figures, every surprising number becomes a request to an analyst, and analysts become a help desk. Managers who do not trust dashboards build their own versions, which multiply disagreements; the wider effect is described in [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/). Decisions are delayed while numbers are checked, and correct figures are sometimes ignored because they could not be explained in time.

## Root cause

- **Lineage visible only to builders.** The tools that show sources and steps are restricted to report authors.
- **No definitions on the page.** Metric meaning lives in the builder's head or a separate document nobody opens.
- **No drill-through.** Reports show aggregates with no path to the underlying records.
- **Manual steps in the chain.** Spreadsheet adjustments between source and dashboard break any automated lineage.
- **Unclear source of truth.** Several systems hold the same data, as described in [when nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/).

## Practical intervention

1. **Choose the critical dashboards.** Start with those that reach the board and executive meetings.
2. **Write a definition for each headline metric.** Include what is in, what is out, the source systems and the business owner.
3. **Put the information on the page.** Add definitions as tooltips or an information panel, plus the last refresh time.
4. **Add drill-through.** Let readers go from the figure to a table of the underlying transactions, within their access rights.
5. **Remove manual steps.** Replace spreadsheet adjustments between source and report with documented transformations so lineage is captured automatically.
6. **Certify what is official.** Mark the authoritative dashboards and models, and name who approved them.

### Trade-offs

Drill-through to transactions raises access questions, especially for payroll or customer data; apply row-level security and comply with POPIA obligations. Definitions take time to agree across departments. Start with a small number of headline metrics rather than trying to document everything.

### An illustrative example

Illustrative: a KwaZulu-Natal logistics company with about 180 staff found that branch managers routinely disputed margin figures on the monthly dashboard. The reporting lead added a definition panel and refresh date to each page, built drill-through from branch margin to invoice lines and cost entries, and removed a spreadsheet step that adjusted fuel costs by hand. Disputes moved from whether the number was right to why it had changed.

## Diagnostic questions

- Can a viewer of your main management dashboard see the definition of each headline figure?
- Can they drill from a figure to the records behind it?
- Does every critical dashboard show when it was last refreshed?
- Are there manual spreadsheet steps between source systems and the dashboard?
- How many questions about figures reach analysts each month?

## What good looks like

A reader who doubts a figure can check its definition, sources, refresh time and underlying records from the dashboard itself. Official dashboards are certified, lineage is captured automatically, and analysts spend their time on analysis rather than explanations.

## Where Mellorca fits

Mellorca helps businesses map the path from source systems to their key dashboards through a [digital systems audit](/services/digital-systems-audit/), redesign reporting so lineage and definitions are built in through [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and replace manual reporting steps through [business automation](/services/business-automation/).

## Method note

Product references illustrate common mechanisms and are not recommendations. Licensing and role requirements cited were current when checked and may change. The example is illustrative and does not describe a specific client.
