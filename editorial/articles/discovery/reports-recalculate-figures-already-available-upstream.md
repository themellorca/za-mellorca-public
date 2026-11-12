---
hub: discovery
record_id: DISC-268
slug: reports-recalculate-figures-already-available-upstream
title: Why reports keep recalculating figures your systems already produce
description: When reports rebuild margin, ageing or stock value that the ERP or warehouse already calculates, numbers drift and effort doubles. How to spot duplicated logic and move reports onto shared calculations.
lead: When reports rebuild margin, ageing or stock value that the ERP or warehouse already calculates, numbers drift and effort doubles. How to spot duplicated logic and move reports onto shared calculations.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead, with the finance manager
budget_owner: CFO
sources:
  - Introduction to Semantic Models Across Workspaces - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-across-workspaces
  - Microsoft Fabric adoption roadmap: Content ownership and management - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management
  - Introduction to LookML - Looker - Google Cloud Documentation | https://docs.cloud.google.com/looker/docs/what-is-lookml
related:
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
  - When manual overrides in reports look exactly like source data | /discovery/manual-overrides-indistinguishable-from-source-data/
summary: When reports rebuild margin, ageing or stock value that the ERP or warehouse already calculates, numbers drift and effort doubles. How to spot duplicated logic and move reports onto shared calculations.
layout: plain
---
The accounting system already calculates debtor ageing. It knows each invoice's due date, every part-payment and every credit note, and it produces an aged analysis that the auditors accept. Yet the monthly management pack contains a second ageing table, rebuilt in a spreadsheet from an invoice export using a formula someone wrote four years ago. The two tables rarely match. Every month someone spends half a day explaining why, and the explanation is always the same: the spreadsheet handles credit notes differently.

This article looks at that operating condition: reporting work that duplicates calculations already available upstream, in the ERP, the payroll system, a data warehouse or a shared reporting model. It is a quiet, expensive habit, and it becomes urgent when a business starts an AI or automation initiative and discovers it has several competing versions of the same figure to feed it.

## The problem in plain language

Business systems calculate a great deal: gross margin per invoice line, stock valuation, VAT, leave balances, commission, overdue days. Reports often ignore those results. Instead, they export raw transactions and recalculate the figure themselves, in a spreadsheet formula, a report measure or a query. Sometimes this is because the upstream figure was not visible to the report builder. Sometimes it was not trusted. Often the person simply did not know it existed.

The result is two or more implementations of one calculation. They start out close and drift apart as each is changed independently.

## What the buyer is actually trying to solve

Finance and reporting leads search for why reports do not match the system, how to reuse calculations across reports, or how to stop rebuilding the same measures. Operations managers want the margin on the dashboard to equal the margin on the invoice. The underlying need is that each business calculation is performed once, in the most appropriate place, and that every report reuses that result rather than reproducing it.

## Evidence and system mechanism

### Reporting tools are designed for reuse, if teams use them that way

Modern reporting platforms expect calculations to be shared. Microsoft's overview of [semantic models across workspaces](https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-across-workspaces) describes establishing standardised semantic models as a single source of truth that report creators start from, controlling who can build on them through Build permission, and certifying or promoting them so others can find them. Its adoption guidance on [content ownership and management](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management) goes further: at the lowest maturity level it describes a high ratio of semantic models to reports, noting that many models each supporting one report signal duplication, reduced trust and higher maintenance. It suggests analysing that ratio to see how much reuse is actually happening.

### Define once, generate everywhere

Other tools make the same point in different language. Google's documentation for [LookML](https://docs.cloud.google.com/looker/docs/what-is-lookml) describes a deliberate "don't repeat yourself" approach: SQL expressions are written once, in one place, and the platform reuses them to generate queries. The principle does not depend on the product. A calculation that lives in one governed place can be corrected once; a calculation copied into twenty reports must be corrected twenty times, and usually is not.

### Where duplication typically hides

| Calculation | Usually already produced by | Typical duplicate |
| --- | --- | --- |
| Debtor ageing | Accounting system | Spreadsheet from invoice export |
| Stock valuation | ERP or inventory system | Report measure using list cost |
| Gross margin per line | ERP sales documents | Dashboard formula using standard cost |
| Leave balances | Payroll or HR system | HR tracker spreadsheet |
| Commission | Commission or payroll module | Sales manager's workbook |

## Problem owner and why-now trigger

The BI or reporting lead owns the fix, with the finance manager as the business owner of most financial calculations. The CFO usually funds the work because the cost lands in finance time and in disputed figures.

The sharpest trigger today is an AI initiative. When a business wants an assistant to answer questions about margin or overdue accounts, it must choose which calculation the assistant uses, and discovers there are several. The connection is explored in [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/). Other triggers include an ERP upgrade that changes upstream logic, an audit query about a reported figure, or a new finance manager who asks why the pack disagrees with the ledger.

## Economic consequence

Duplicated calculations cost time three times over: once to build, again every time the duplicate must be maintained, and again every time someone reconciles it with the original. They also create decision risk, because a report built on list cost or standard cost can show a margin that the business never actually earned. And they slow change: when pricing rules or VAT treatment change, the upstream system is updated and the copies are not. The general pattern behind conflicting figures is covered in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Root cause

- **Upstream results are not exposed.** The system calculates the figure but the export or connector only returns raw transactions.
- **Report builders do not know what exists.** There is no catalogue of which calculations each system already performs.
- **Low trust in the source.** A past error led someone to rebuild the figure, and the workaround outlived the fix.
- **Reports own their own models.** Each report is built with its own data model, so each builder writes its own measures.
- **No owner for the calculation.** Nobody is accountable for saying which version is correct, the issue described in [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).

## Practical intervention

1. **Inventory the calculations in your key reports.** For the management pack and main dashboards, list each calculated figure and where it is computed.
2. **Match each to an upstream source.** For each, ask whether a system already calculates it. Check with the system owner rather than assuming.
3. **Decide where each calculation should live.** Transactional figures such as ageing, valuation and VAT usually belong in the system of record. Cross-system figures belong in a shared reporting model.
4. **Expose upstream results.** Change extracts or connectors to bring in the calculated field, not just the inputs.
5. **Move reports onto shared models.** Build new reports on certified shared models rather than private ones, and retire duplicate measures.
6. **Reconcile once, then remove.** Run old and new side by side for one or two periods, explain any differences, then delete the duplicate.

### Trade-offs

Sometimes the upstream calculation is genuinely wrong for management purposes, for example stock valued at a cost basis that does not suit a margin analysis. In that case, give the management version a different name and an owner, rather than silently replacing the original. Exposing calculated fields may require help from the ERP vendor or partner.

### An illustrative example

*Illustrative:* a Western Cape distributor with about 90 staff found that its monthly pack recalculated debtor ageing, stock value and gross margin from raw exports. The finance manager confirmed that the accounting and inventory systems produced all three. The reporting lead changed the extracts to include the system-calculated fields, moved the pack onto one shared model, and retired the spreadsheet formulas after two months of parallel running. The monthly reconciliation of the pack against the ledger became a short check rather than a recurring investigation.

## Diagnostic questions

- For your top ten reported figures, do you know which system calculates each one?
- How many of those are recalculated in a spreadsheet or report formula?
- How many reporting models exist, and how many reports does each one serve?
- When a pricing, VAT or costing rule changes, how many places must be updated?
- Who decides which version of a calculation is correct?

## What good looks like

Each business calculation is performed once, in the system or shared model best placed to own it. Reports reuse those results. A small number of certified models serve most reports, and a change to a calculation is made in one place and appears everywhere it is used.

## Where Mellorca fits

Mellorca traces where key figures are calculated and duplicated through a [digital systems audit](/services/digital-systems-audit/), designs where each calculation should live as part of [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and changes extracts and connectors to bring upstream results into reporting through [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

Product references illustrate common mechanisms and are not recommendations. Which calculations a given ERP or accounting system exposes varies by product and configuration. The example is illustrative and does not describe a specific client.
