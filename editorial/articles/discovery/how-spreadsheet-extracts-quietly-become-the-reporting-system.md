---
hub: discovery
record_id: DISC-260
slug: how-spreadsheet-extracts-quietly-become-the-reporting-system
title: Spreadsheet extracts become unofficial reporting systems
description: A one-off export for a meeting becomes the monthly pack, then the number the board quotes. How to spot the shadow reporting layer, decide what to keep, and move the numbers that matter onto a governed source.
lead: A one-off export for a meeting becomes the monthly pack, then the number the board quotes. How to spot the shadow reporting layer, decide what to keep, and move the numbers that matter onto a governed source.
category: Data, Reporting & Decision Systems
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Finance or reporting lead, with the heads of the departments that supply the underlying data
budget_owner: Financial director or managing director
sources:
  - Understand star schema and the importance for Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/star-schema
  - On-premises data gateways in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why reports keep recalculating figures your systems already produce | /discovery/reports-recalculate-figures-already-available-upstream/
  - Reports depend on undocumented manual transformations | /discovery/why-management-reports-break-when-manual-data-steps-are-never-written-down/
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
summary: A one-off export for a meeting becomes the monthly pack, then the number the board quotes. How to spot the shadow reporting layer, decide what to keep, and move the numbers that matter onto a governed source.
layout: plain
---
It begins with a favour. Ahead of the Thursday leadership meeting, an analyst exports sales orders from the ERP into Excel, adds a lookup for region, and builds a pivot table. The meeting finds it useful. The next month, someone asks for the same report with a margin column. Six months later there are eleven tabs, three macros, a manual step in which a colleague pastes in the targets, and a file called Sales_Master_v7_FINAL_Jan.xlsx on a shared drive. The board pack now quotes figures from it. Nobody ever decided that this spreadsheet would become the company's reporting system. It simply happened.

This article is about that moment, and what to do once you realise it has passed: spreadsheet extracts that have become unofficial reporting systems.

## The problem in plain language

An extract is a copy of data taken out of a system at a point in time. Used for a one-off question, it is harmless. The trouble starts when it is reused, extended and relied on. It then has all the characteristics of a system, such as inputs, transformations, outputs and users, but none of the controls. There is no owner on record, no documentation, no testing, no access rules, no change history and no schedule for refresh. If the person who built it is on leave, the report does not happen. If the underlying system changes a field name, the numbers shift and nobody is told.

Meanwhile the real system holds the real records, so the reported figure and the system figure drift apart. Each department has its own extract, and in the leadership meeting the same measure appears with different values.

## What the buyer is actually trying to solve

A financial director or managing director searching for this problem wants numbers they can trust and a reporting cycle that does not depend on one person. They do not necessarily want to abandon Excel. They want to know which extracts are safe to keep, which have become dangerous, and how to move the critical ones onto something controlled without a long project that stops the monthly pack.

## Evidence and system mechanism

### Reporting models have a structure that spreadsheets rarely reproduce

Microsoft's guidance on [star schema design](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) explains a standard approach to reporting data: tables are classified as dimensions that describe business entities such as products, people and places, or as facts that store observations and events such as sales orders and stock balances. The guidance matters here for the concept, not the product. A well-built reporting layer separates what things are from what happened, and defines the granularity of each. A typical extract flattens everything into one wide sheet, repeats descriptive fields on every row and quietly mixes granularities. That is why two analysts can pull the "same" data and get different totals.

### Shared connections and personal ones carry different risks

Microsoft's explanation of [data gateways](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem) distinguishes between standard mode, which supports centrally managed connections that multiple users can access, and personal mode, which supports one user and cannot be shared. The same distinction applies to extracts. A central, managed connection means one definition of the data and one place to fix it. A personal one means each person's copy depends on their own login, their own refresh and their own judgement. When reporting runs on personal extracts, there is no single place where the logic lives.

### Extracts often contain personal information

Extracts commonly include customer names, contact details, employee numbers or salary fields. Under [section 19 of POPIA](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/), a responsible party must take appropriate, reasonable technical and organisational measures to prevent loss, damage or unlawful access, identify foreseeable risks, maintain safeguards, and regularly verify they work. A spreadsheet copied to a laptop, a USB drive or a personal email account sits outside most of those safeguards. A shadow reporting system is therefore not only a quality risk. It can also be a compliance risk, because copies of personal data multiply without anyone keeping track of them.

### Warning signs

- A report cannot be produced when a specific person is away.
- Different departments quote different values for the same measure, and each can show a spreadsheet to prove it.
- Files with names such as "final", "final2" and "latest" circulate by email.
- The finance team spends the first week of each month assembling data rather than analysing it.
- Nobody can say which tabs or formulas feed which numbers in the board pack.

## Problem owner and why-now trigger

The finance or reporting lead owns the reporting outputs. The heads of sales, operations and HR own the underlying data and are often the source of the extracts. The budget owner is the financial director or managing director, since the cost sits in salaried analyst time and in decisions made on figures nobody can fully explain.

The trigger is usually rapid growth. Data volumes rise, more people want more reports, the monthly cycle starts to run into the next month and the one analyst who understands the workbook becomes a bottleneck. Another common trigger is an audit, a funding round or a new system implementation, each of which asks, uncomfortably, where the numbers come from.

## Economic consequence

The visible cost is time. If two analysts spend five days each month assembling and reconciling extracts, that is ten days, or about a hundred and twenty a year, spent on work a governed source could do automatically. The less visible cost is decision quality. A pricing or stock decision made on a figure that is a week stale, or that excludes a region because a filter was left on, can cost far more than the analyst time.

There is also continuity risk: when the person who built the workbook leaves, the business discovers how much of its reporting was in their head. That pattern is described in [when nobody knows which spreadsheet is the latest](/patterns/when-nobody-knows-which-spreadsheet-is-the-latest/) and in [the labour cost of rebuilding recurring reports by hand](/impact/rebuilding-recurring-reports-by-hand-labour-cost/). And there is the compliance cost: a leaked file containing customer data is a POPIA problem as well as an embarrassment.

## Root cause

- **The source system cannot give people what they need.** Standard reports are too rigid or too slow, so people export and rebuild, a pattern also seen in [analysts who keep rebuilding the same data joins in spreadsheets](/discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/).
- **The first version is a favour, not a project.** It is built quickly by one person with no intention that it will last, so no one asks who will maintain it.
- **Business logic is hidden in formulas.** Definitions of margin, active customer or overdue live in cell references that nobody has reviewed.
- **Nobody has the mandate to retire anything.** Extracts that work well enough are never switched off.
- **The spreadsheet is the best tool for the job at the time.** It is not a failure of discipline. It becomes a problem when it passes from useful tool to infrastructure, a transition described in [when a spreadsheet is a useful tool and when it becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/).

## Practical intervention

1. **Build a register.** List every spreadsheet that feeds a management report, board pack, customer deliverable or financial submission. For each: owner, source, refresh frequency, number of users, whether it holds personal data.
2. **Rank by risk.** Score each on the importance of its output, how manual the refresh is, how many people depend on it and what happens if the owner is absent. The top five get attention first.
3. **Document the logic of the top five.** Write the definition of each measure in plain language and note where each number comes from. This alone often reveals disagreements.
4. **Agree one definition per measure.** Finance, sales and operations settle what counts as revenue, an active customer or an overdue invoice, and the definition is written down next to the measure.
5. **Move the core to a governed source.** Create a shared, scheduled data model with a managed connection to the system of record. Keep spreadsheets for exploration and ad hoc analysis, but have the board pack read from the governed source.
6. **Control the copies.** Decide where extracts containing personal information may be stored, who may hold them and when they are deleted.

### Trade-offs

Governance can slow down the quick question that spreadsheets answer so well. Leave room for sandbox analysis and apply controls to the outputs that leave the team. A governed model needs an owner and a small amount of continuing effort, otherwise it too becomes stale. And migrating a complex workbook exposes errors in past reports, which can be uncomfortable. Plan to explain the change in figures rather than to hide it.

### An illustrative example

Illustrative: a Midrand electrical wholesaler with 90 staff produced its monthly management pack from a workbook assembled by a single analyst, with data pasted in from the ERP and the payroll system. A review found 14 workbooks feeding the pack, of which three held employee salary data on personal drives. The financial director agreed definitions for six key measures, moved sales and stock data to a scheduled model with a shared connection, and restricted salary extracts to a secured folder. The pack was ready on working day three instead of working day nine, and two long-standing disagreements between sales and finance disappeared once both read the same numbers.

## Diagnostic questions

- Which five spreadsheets would hurt most if they disappeared or if their owner resigned tomorrow?
- Can you trace one number in the latest board pack back to the system record it came from?
- Where are the copies of extracts that contain customer or employee data?
- How many working days does the monthly pack take, and how many of them are spent on assembly?

## What good looks like

The numbers that leadership uses come from a governed source with a named owner, written definitions and a scheduled refresh. Spreadsheets remain in use, but as tools for exploration, not as the quiet foundation of the company's reporting. Sensitive extracts are held in known places. When an analyst is away, the report still runs, and when two people quote the same measure, they quote the same figure.

## Where Mellorca fits

Mellorca's work starts with the register: finding the spreadsheets that actually carry reporting weight, tracing where their numbers originate and ranking the risk. It then helps agree definitions, design a governed source and plan the move so that the monthly cycle is not interrupted. The pattern in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/) describes the wider situation this work addresses.

## Method note

The sources describe reporting-model design, the difference between shared and personal data connections and the POPIA duty to secure personal information. They do not measure how widespread shadow reporting is. The time estimates and the example are illustrative rather than a client case.
