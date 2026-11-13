---
hub: discovery
record_id: DISC-272
slug: data-lineage-reconstructed-manually-during-audits
title: Why data lineage gets rebuilt by hand every time the auditors arrive
description: When auditors ask how a figure was produced, teams spend weeks piecing together its path. How to capture lineage as data moves.
lead: When auditors ask how a reported figure was produced, many teams spend weeks piecing together the path from source to report. How to capture lineage as data moves, so audit evidence already exists.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Financial controller, with the data or BI lead
budget_owner: CFO
sources:
  - Data lineage in classic Microsoft Purview Data Catalog | https://learn.microsoft.com/en-us/purview/data-gov-classic-lineage
  - Object Model - OpenLineage | https://openlineage.io/docs/spec/object-model
  - Semantic model impact analysis - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-dataset-impact-analysis
related:
  - Why business users cannot trace a dashboard number back to its source | /discovery/why-business-users-cannot-trace-a-dashboard-number-to-its-source/
  - How to find out which of your reports anyone actually uses | /discovery/teams-cannot-tell-which-reports-are-actually-used/
  - Why last year's figures keep changing when reporting logic is overwritten | /discovery/historical-metrics-change-when-business-logic-is-overwritten/
summary: When auditors ask how a reported figure was produced, many teams spend weeks piecing together the path from source to report. How to capture lineage as data moves, so audit evidence already exists.
layout: plain
---
The external auditors select twelve figures from the annual report and the management accounts and ask the same question about each: show us how this number was produced. The finance team knows the answer in outline. The data comes from the ERP, passes through a nightly extract, is adjusted in a staging database and lands in the reporting model. But nobody has written that path down since the last audit, two of the scripts have changed, and the person who built the staging step has left. For three weeks, a senior accountant and a contractor open queries, trace columns and draw diagrams, producing an evidence pack that will be out of date by the time it is filed.

This article looks at that operating condition: data lineage reconstructed manually during audits. It is costly, it lands on the busiest people at the busiest time, and it usually gets worse after a data-platform change, when the old diagrams stop matching reality.

## The problem in plain language

Lineage is the record of where data came from, what happened to it along the way and where it ended up. Every business with a reporting process has lineage, whether it records it or not. The question is whether it can be produced on request. In many businesses it cannot. It exists only in code, scheduled jobs and people's memories, and is reassembled by hand whenever someone with authority asks for it: an auditor, a regulator, a lender or a due-diligence team.

Manual reconstruction has three weaknesses. It is slow. It is only as accurate as the people doing it. And it is a snapshot: the moment it is finished, the next change to a pipeline makes it wrong.

## What you are actually trying to solve

Financial controllers and data leads ask how to document data lineage for audit, how to evidence report controls, or how to trace figures back to source systems. Audit committees want assurance that reported numbers can be reproduced. The practical need is for lineage to be captured continuously, as data moves, so that the audit question is answered by looking up a record rather than starting an investigation.

## Evidence and system mechanism

### Lineage is a recognised audit and compliance tool

Microsoft's documentation on [data lineage in the Purview Data Catalog](https://learn.microsoft.com/en-us/purview/data-gov-classic-lineage) describes lineage as the lifecycle spanning data's origin and where it moves over time, used for troubleshooting, tracing root cause in pipelines, data quality analysis, compliance and impact analysis. It describes the aim of extracting movement, transformation and operational metadata from each data system, from raw staging through transformation to visualisation, and capturing job execution status to support root cause analysis. It concludes that lineage is a critical feature for quality, trust and audit scenarios.

### Lineage can be emitted automatically as jobs run

The alternative to reconstruction is collection at the moment of processing. The [OpenLineage object model](https://openlineage.io/docs/spec/object-model) defines a job as a process that consumes or produces datasets, a run as one occurrence of that job in time, and datasets as the data read and written, with events emitted as runs execute. Additional metadata, such as schema or data quality results, can be attached. Because each run reports what it read and wrote, the lineage graph is built from evidence rather than recollection, and it records what happened on a specific date, which is exactly what an auditor asks about.

### Reporting tools hold part of the chain

The reporting layer already knows which reports depend on which models. Microsoft's [semantic model impact analysis](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-dataset-impact-analysis) shows how many workspaces, reports and dashboards depend on a model, with views and viewers for the last 30 days, and is launched from the lineage view. That covers the last mile from model to report; the harder part is usually upstream, between source systems and the model.

### What an audit-ready lineage record holds

| Element | Why the auditor needs it |
| --- | --- |
| Source system and table | Where the figure originates |
| Each transformation step | What logic changed the data, and where that logic is kept |
| Run history | That the process ran as described on the relevant dates |
| Manual adjustments | Who changed what, when and with what approval |
| Reports using the output | Which reported figures the chain supports |

## Problem owner and why-now trigger

The financial controller or head of finance usually owns the audit relationship; the data or BI lead owns the pipelines. The CFO funds the work, often after an audit that consumed more internal time than expected.

The common trigger is a data-platform change. Migrating to a new warehouse, reporting tool or ERP breaks whatever documentation existed, and the next audit must be answered from scratch. Other triggers are new audit findings on reporting controls, lender or investor due diligence, and the departure of the person who built the pipelines. The cost side of untraceable figures is covered in [the audit cost of untraceable reporting numbers](/impact/untraceable-reporting-number-audit-cost/).

## Economic consequence

Manual reconstruction consumes senior finance and data time during audit season, and frequently external contractor time as well. Audit fees can rise when auditors must perform extra procedures because the client cannot evidence its controls. Findings on reporting controls take management attention. There is also a less visible cost: without lineage, every change to a pipeline is risky, because nobody can see which reports it will affect.

## Root cause

- **Lineage is documented, not captured.** Diagrams are drawn by people rather than generated by the systems that move data.
- **Transformation logic is scattered.** Steps live in scheduled scripts, spreadsheet macros and report queries with no central record.
- **Manual adjustments leave no trail.** Spreadsheet corrections between source and report break any automated chain.
- **Pipelines have no named owner.** Nobody is responsible for keeping the record current.
- **Platform migrations skip metadata.** Data is moved; the description of how it flows is not.

## Practical intervention

1. **Start from the audited figures.** List the figures auditors and lenders routinely test, and trace those chains first.
2. **Put transformation logic under version control.** Move scripts, queries and model definitions into a repository so every change is dated and attributed.
3. **Capture lineage automatically.** Use the lineage features of your data platform or an open standard so that each job reports its inputs and outputs as it runs.
4. **Record manual adjustments as data.** Replace spreadsheet corrections with a logged adjustment table that holds reason, approver and date.
5. **Connect the last mile.** Link reporting-layer lineage to the upstream record so a figure can be followed end to end.
6. **Produce the evidence pack from the record.** Generate audit documentation from captured lineage and run history rather than writing it by hand.

### Trade-offs

Automated lineage tools vary in how well they cover older systems, spreadsheets and custom scripts, so some manual documentation will remain. Focus capture on the chains that support audited figures rather than trying to map everything. Version control requires discipline from people used to editing scripts directly.

### An illustrative example

*Illustrative:* an Eastern Cape manufacturer with about 220 staff spent most of a month each year rebuilding lineage for its auditors. After migrating to a new reporting platform, the data lead moved all extract and transformation scripts into a repository, enabled the platform's lineage capture, and replaced two spreadsheet adjustments with a logged adjustment table. The following year's evidence pack was produced largely from the captured record, and the auditors' questions were answered by reference to it.

## Diagnostic questions

- How long did it take to answer the auditors' lineage questions last year, and who did the work?
- Is your transformation logic in version control?
- Do your data jobs record what they read and wrote each time they run?
- Are manual adjustments between source and report logged with an approver?
- Did your last platform change include migrating lineage documentation?

## What good looks like

Lineage for audited figures is captured automatically as data moves, transformation logic is versioned, manual adjustments are logged, and the audit evidence pack is a report generated from that record. When a pipeline changes, the record updates itself.

## Where Mellorca fits

Mellorca traces the chains behind audited figures through a [digital systems audit](/services/digital-systems-audit/), designs lineage capture into data platforms as part of [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and replaces manual adjustment steps through [business automation](/services/business-automation/).

## Method note

Product and standard references illustrate common mechanisms and are not recommendations. Audit requirements vary by auditor, sector and engagement. The example is illustrative and does not describe a specific client.
