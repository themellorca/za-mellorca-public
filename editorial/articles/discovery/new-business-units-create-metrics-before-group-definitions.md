---
hub: discovery
record_id: DISC-271
slug: new-business-units-create-metrics-before-group-definitions
title: When a new business unit invents its own metrics before group definitions exist
description: New divisions, branches and acquisitions start reporting with their own KPIs, and the board pack inherits the mismatch. How to give new units a definition starter kit before their reporting sets in stone.
lead: New divisions, branches and acquisitions start reporting with their own KPIs, and the board pack inherits the mismatch. How to give new units a definition starter kit before their reporting sets in stone.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: CFO or group financial controller, with each unit head
budget_owner: CFO
sources:
  - Microsoft Fabric adoption roadmap: Content ownership and management - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management
  - Glossary Terms in Unified Catalog | https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms
  - Endorse your content - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
related:
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
  - Why data-quality problems are found only after the report has gone out | /discovery/why-data-quality-problems-are-found-after-reports-are-published/
  - Why master data changes break downstream reports without warning | /discovery/master-data-changes-break-reports-without-warning/
summary: New divisions, branches and acquisitions start reporting with their own KPIs, and the board pack inherits the mismatch. How to give new units a definition starter kit before their reporting sets in stone.
layout: plain
---
A professional services group launches a new training division. The division head needs to report progress from the first month, so she sets up a tracker in a spreadsheet: "active clients", "revenue", "utilisation". Each term is defined sensibly for her business. Eighteen months later the division is a material part of the group, its figures go into the board pack, and the board discovers that "active client" in the training division means anyone who attended a course in the past year, while the consulting division counts only clients with an open engagement. Group revenue totals mix invoiced and booked figures. Nobody made a mistake. The division simply started measuring before the group had decided what its measures meant.

This article looks at that operating condition: new business units that create metrics before enterprise definitions exist. It is a growth problem, and it becomes urgent when board reporting pressure arrives and the group must consolidate numbers that were never designed to be added together.

## The problem in plain language

When a business adds a division, opens a new region, launches a product line or acquires a company, the new unit needs to report from day one. It cannot wait for a group-wide metric framework that may not exist. So it defines its own measures, builds its own reports and trains its people to manage by them. By the time anyone tries to standardise, those definitions are embedded in targets, incentive schemes and habits.

The issue is not that units have local measures; many need them. It is that shared terms such as revenue, customer, headcount and margin are defined locally when they should have been inherited.

## What the buyer is actually trying to solve

Group finance leads and company secretaries search for how to standardise KPIs across business units, how to consolidate divisional reporting, or how to integrate an acquisition's reporting. Divisional heads want to keep the measures that help them run their unit. The practical need is to separate the two: a small set of group-defined terms every unit must use as written, plus room for local measures that are clearly labelled as local.

## Evidence and system mechanism

### Self-service reporting is designed to let units move fast

Modern reporting deliberately lets business units build their own content. Microsoft's adoption guidance on [content ownership and management](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management) describes business-led self-service, where all content is owned and managed by creators within a business unit, as a legitimate strategy when speed and flexibility outweigh stricter governance. It also describes the risks at low maturity: uncontrolled content creation and common discrepancies between reports that cause distrust. Its recommended middle ground, managed self-service, keeps data and shared definitions with a central team while units build their own reports, an approach it summarises as discipline at the core and flexibility at the edge. It also lists ownership transfers, for example when a business-led solution comes to support critical decisions, as a normal event that needs a defined process.

### Glossaries can hold different meanings explicitly

Different meanings for the same word are not always wrong, but they must be visible. Microsoft's documentation on [glossary terms in Purview Unified Catalog](https://learn.microsoft.com/en-us/purview/unified-catalog-glossary-terms) describes creating terms under governance domains so that each part of the organisation has its own context, noting that sales and marketing might use the same term to mean different things. Terms can be linked to the data assets and columns they describe. Whatever tool is used, the principle is that a definition is a governed record with an owner and a scope, not a line in a divisional spreadsheet.

### Certification signals what the group stands behind

Once group definitions exist, readers need to know which reports use them. Microsoft's guidance on [endorsing content](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content) distinguishes promotion, which any content owner with write permission can apply, from certification, which only reviewers authorised by the administrator can apply and which means content meets the organisation's quality standards. Divisional content can be promoted; board-level figures should be certified against the group definitions.

## Problem owner and why-now trigger

Group finance, usually the CFO or group financial controller, owns the shared definitions. The head of each new unit owns local measures and adoption of group terms. The CFO funds the work, sometimes with the CEO's office.

The trigger is board reporting pressure: a new board member, an investor, a lender's covenant pack, or an audit committee asking for consistent divisional figures. Acquisitions are a common accelerant, because an acquired company arrives with fully formed definitions of its own. The executive-level symptom is described in [why executives get different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/).

## Economic consequence

Consolidation becomes manual: group finance re-cuts each unit's figures into group terms every month, and the adjustments are themselves undocumented. Comparisons between units become unreliable, so capital and attention may go to the unit with the most generous definition rather than the strongest performance. Incentive schemes built on local definitions are expensive to unwind. The labour cost of reconciling systems is explored in [the labour cost of manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/).

## Root cause

- **No group definitions to inherit.** The group has never written down what its shared terms mean.
- **Launch plans omit reporting.** New units get systems, people and budgets, but no metric starter kit.
- **Local and shared terms share names.** A local "active client" uses the same label as a group measure.
- **No ownership transfer.** When a unit's reports become board-relevant, nobody moves them onto group definitions.
- **Acquisition integration focuses on systems.** Ledgers are migrated; definitions are not.

## Practical intervention

1. **Write the group's core definitions.** Start with the ten to twenty terms that appear in board and investor reporting: revenue, customer, headcount, margin, backlog and similar. Give each a plain-language definition, calculation, source and owner.
2. **Create a starter kit for new units.** Include the core definitions, a template report on the shared model, and guidance on naming local measures.
3. **Make it part of every launch and acquisition.** Add "adopt group definitions" to the launch checklist and the integration plan, with a date.
4. **Label local measures as local.** Allow units their own measures, but with distinct names, such as "course attendees (12 months)" rather than "active clients".
5. **Map existing units.** For units already running, document how their measures differ from group terms and agree a migration date.
6. **Certify the consolidated view.** Build board figures from the shared model using group definitions only, and certify them.

### Trade-offs

Imposing group definitions too early can slow a new unit down or force it to measure things that do not suit its model. Keep the mandatory set small and leave local measures alone. Changing definitions that drive incentives needs a transition period and clear communication.

### An illustrative example

*Illustrative:* a Johannesburg professional services group with about 400 staff had added two divisions and one acquisition in three years, each with its own definition of client, revenue and utilisation. Group finance wrote fifteen core definitions, built a starter report on a shared model, and agreed six-month migration plans with each unit. Divisional heads kept their operational measures under new local names. Within two quarters the board pack was assembled from the certified shared model rather than four divisional spreadsheets.

## Diagnostic questions

- Does the group have written definitions for the terms used in board reporting?
- When you last launched a unit or acquired a company, did its reporting adopt those definitions?
- Do any two units use the same KPI name with different meanings?
- How much of the monthly consolidation is spent re-cutting divisional figures?
- Who decides when a unit's reports must move onto group definitions?

## What good looks like

New units start with the group's core definitions and a template on the shared model. Local measures exist but carry local names. Board figures come from a certified view built on group definitions, and acquisitions include a definition migration alongside the systems migration.

## Where Mellorca fits

Mellorca documents how units define and calculate shared measures through a [digital systems audit](/services/digital-systems-audit/), designs the shared model and starter kit as part of [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and connects new units' systems to it through [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

Product references illustrate common mechanisms and are not recommendations. Accounting standards and lender agreements may impose specific definitions that take precedence over internal choices. The example is illustrative and does not describe a specific client.
