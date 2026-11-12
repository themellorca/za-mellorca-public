---
hub: discovery
record_id: DISC-254
slug: why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets
title: Why analysts keep rebuilding the same data joins in separate spreadsheets
description: When every analyst matches customers, products and transactions in their own workbook, the same numbers come out differently. How to build the joins once and share them.
lead: When every analyst matches customers, products and transactions in their own workbook, the same numbers come out differently. How to build the joins once and share them.
category: Data, Reporting & Decision Systems
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead
budget_owner: Finance director
sources:
  - Introduction to Semantic Models Across Workspaces - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-across-workspaces
  - Endorse your content - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
  - About dbt models - dbt Developer Hub | https://docs.getdbt.com/docs/build/models
  - Add data tests to your DAG - dbt Developer Hub | https://docs.getdbt.com/docs/build/data-tests
related:
  - Why sales, finance and operations each define revenue differently | /discovery/sales-finance-and-operations-define-revenue-differently/
  - Why dashboards refresh at different times without anyone knowing | /discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
summary: When every analyst matches customers, products and transactions in their own workbook, the same numbers come out differently. How to build the joins once and share them.
layout: plain
---
Three analysts are asked, in the same week, for margin by customer segment. Each exports sales lines from the ERP, customer records from the CRM and cost prices from a stock file. Each builds lookups in their own workbook to match them. One matches customers on account number, one on name, and one uses a mapping table she built last year. One drops lines with missing costs, another uses last month's cost. Three reports go out. They disagree, and a meeting is called to work out why.

This article looks at that operating condition: analysts rebuilding the same data joins in separate spreadsheets. It is one of the most common hidden costs in reporting, and it is usually discovered through a dispute about a metric.

## The problem in plain language

Most useful business questions need data from more than one system: sales with customers, orders with products, costs with stock. Joining those sources means deciding how records match, what to do with records that do not match, and which version of a value to use. In many businesses those decisions are made again by every analyst for every report, inside private workbooks. The joins are invisible, inconsistent and lost when the analyst moves on.

## What the buyer is actually trying to solve

Finance and reporting leads search for ways to stop duplicate spreadsheet work, create a single source of truth for reporting, or standardise how data from different systems is combined. Analysts want to spend their time on analysis rather than VLOOKUPs. The underlying need is to build each important join once, in a shared place, with agreed rules, so that every report starts from the same combined data.

## Evidence and system mechanism

### Shared models are a standard BI feature

BI tools are designed to separate the data model from the report. Microsoft's introduction to [semantic models across workspaces](https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-across-workspaces) says it is important to establish standardised semantic models that can be the one source of truth, and to make them discoverable and reusable, so report creators can start from models built by expert modellers. It also notes that users with Build permission can use a shared model from Excel, so analysts can keep working in spreadsheets while drawing on the shared joins.

The same platform supports signalling which models to trust. Its guidance on [endorsing content](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content) distinguishes promotion, which highlights content as worth using, from certification, which means content meets the organisation's quality standards and is authoritative. Only reviewers authorised by the administrator can certify. That gives analysts a clear way to tell the official model from someone's experiment.

### Join logic can be written once and reused

Data engineering tools take the same idea further. dbt's documentation on [models](https://docs.getdbt.com/docs/build/models) describes each model as a select statement saved as a file in a project, where models can reference each other. A join between sales and customers can be one model that every downstream report uses, kept under version control so changes are visible.

The rules behind a join can also be tested. dbt's [data tests](https://docs.getdbt.com/docs/build/data-tests) include unique and not-null tests for keys and a relationships test that checks every value, such as a customer ID on a sales line, exists in the table it should join to. Unmatched records then become a visible exception list instead of rows that silently drop out of one analyst's report but not another's.

### Where separate joins diverge

| Decision made in each workbook | How results diverge |
| --- | --- |
| Match key (account number, name, email) | Different records matched |
| Treatment of unmatched rows | Totals differ by the excluded amount |
| Which date or version of a value | Costs, prices or segments from different periods |
| Duplicates in the source | Amounts counted twice in one report only |
| Manual corrections | Fixes in one workbook never reach the others |

## Problem owner and why-now trigger

The BI or reporting lead owns the fix, where that role exists. More often the finance manager owns the problem, because finance analysts do most of the joining and finance produces the numbers that are disputed. The finance director usually funds the work.

The typical trigger is a metric dispute: two reports with different answers to the same question, as described in [why executives get different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/). Other triggers include an analyst resigning and taking the only working version of a key workbook with them, or a new system that changes keys and breaks every spreadsheet at once.

## Economic consequence

The direct cost is duplicated labour: skilled analysts spending a large share of their time on preparation rather than analysis. The indirect cost is disagreement and delay: meetings spent reconciling figures, decisions deferred until someone explains the difference. There is also a continuity risk. When the logic lives in one person's workbook, the business depends on that person; the wider pattern is described in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/). The labour of moving and matching data by hand is explored in [how manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/).

## Root cause

- **No shared model.** There is nowhere to put a join that others can reuse, so each analyst builds their own.
- **No agreed match keys.** Systems do not share identifiers, so each analyst invents a matching rule.
- **No owner for definitions.** Nobody decides which version of a value is authoritative; see [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).
- **Source data quality.** Duplicates and gaps in source systems force every analyst to clean the same problems.

## Practical intervention

1. **Collect the joins.** Ask analysts for the workbooks behind recurring reports and list the joins they all repeat.
2. **Agree the rules.** For each common join, agree the match key, treatment of unmatched records and the authoritative version of each value, and write them down.
3. **Build it once.** Implement the agreed joins in a shared semantic model or transformation layer, under version control where possible.
4. **Test the keys.** Add checks for duplicate and unmatched keys, and send exceptions to the owner of the source data.
5. **Certify and publish.** Mark the shared model as authoritative and show analysts how to connect from their spreadsheets.
6. **Retire the copies.** Move recurring reports onto the shared model one by one and archive the old workbooks.

### Trade-offs

Analysts may resist losing control of their workbooks, and a shared model can feel slower to change. Keep a fast route for requesting changes, and let analysts continue ad hoc work in spreadsheets on top of the shared data. Fixing match keys may expose data quality problems in source systems that take longer to resolve.

### An illustrative example

Illustrative: a Western Cape food manufacturer with about 200 staff had four analysts each maintaining their own sales-to-customer mapping. After a dispute over regional margin, the finance manager collected the mappings, agreed one customer key and segment table with sales, built a shared model on top of the ERP and CRM, and certified it. Recurring reports moved to the shared model over a quarter.

## Diagnostic questions

- How many analysts maintain their own version of the same customer, product or cost mapping?
- Is there a shared, documented model that recurring reports draw from?
- What happens to records that do not match, and does every report treat them the same way?
- If your most experienced analyst left tomorrow, which reports would break?
- How much analyst time each month goes into preparing data rather than analysing it?

## What good looks like

Common joins are built once, in a shared and certified model with written rules and automated key checks. Analysts start from that model, in a BI tool or a spreadsheet, and spend their time on questions. When two reports disagree, it is because they ask different questions, not because they matched data differently.

## Where Mellorca fits

Mellorca helps businesses find duplicated reporting logic through a [digital systems audit](/services/digital-systems-audit/), design a shared data model and decide which system owns which data through [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and connect source systems through [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

Product references illustrate common mechanisms and are not recommendations; comparable features exist in other BI and data tools. The example is illustrative and does not describe a specific client.
