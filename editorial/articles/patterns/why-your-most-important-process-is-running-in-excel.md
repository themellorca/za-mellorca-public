---
hub: patterns
record_id: PAT-251
slug: why-your-most-important-process-is-running-in-excel
title: Why is your most important process running in Excel?
description: When a spreadsheet is where critical work is routed, approved and controlled, the issue is less Excel than the missing workflow around it.
lead: When a spreadsheet becomes the place where critical work is routed, approved, reconciled or controlled, the issue may be less about Excel and more about the missing workflow around it.
category: Spreadsheet Dependency & Shadow Operations
published_date: 2026-09-02
updated_date: 2026-09-02
eyebrow: Pattern
tags:
  - Operational risk
  - Scalability
  - Accuracy
  - Continuity
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_title: Commercial value
side_text: The test is not whether the business uses Excel. It is whether a critical process depends on an informal system nobody intentionally designed.
pattern_family: Spreadsheet Dependency & Shadow Operations
observable_condition: A spreadsheet is not merely analysing data; it has become the operational place where critical records, approvals, status, calculations or handoffs are controlled.
primary_identification: shadow-system and workflow-control problem
commercial_value_dimensions: Operational risk, Scalability, Accuracy, Continuity
sources:
  - Collaborate on Excel workbooks at the same time with co-authoring - Microsoft Support | https://support.microsoft.com/en-US/Excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring
  - The AQuA Book | https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government
  - Review of quality assurance of government models | https://www.gov.uk/government/publications/review-of-quality-assurance-of-government-models
related:
  - How to Decide Which Software to Remove | /insights/how-to-decide-which-software-to-remove/
  - How to Decide What Should Be the System of Record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - What Process Mining Can Reveal That Workshops Cannot | /insights/what-process-mining-can-reveal-that-workshops-cannot/
  - Why spreadsheet flexibility eventually becomes operational fragility | /patterns/why-the-flexibility-that-made-a-spreadsheet-useful-makes-it-risky-later/
related_position: before_sources
summary: When a spreadsheet becomes the operational control layer for a critical process, the real issue may be missing workflow architecture rather than the spreadsheet itself. That can create continuity, accuracy and scale constraints. If this condition is familiar in your business, explore Mellorca's solutions or start a conversation with us. We can examine what the workbook is really doing and whether the surrounding process needs a more deliberate digital foundation.
---
## Observable condition

The workbook started as a useful tracker. Then it gained formulas, tabs, colour codes and lookup tables. Later it became the place where the team decides what happens next. New staff are told not to touch certain columns. One person understands the logic. If the file is unavailable or altered incorrectly, the operation slows down.

At that point the spreadsheet is no longer just a productivity tool. It is carrying operational responsibility.

### An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A recruitment agency tracks every placement in a workbook: candidate, client, start date, rate, margin and invoice status. A pivot table drives the weekly commission run, and conditional formatting highlights placements whose compliance checks are due. Over five years it grows to dozens of tabs. When the operations manager who built it goes on extended leave, a colleague sorts one tab without extending the selection. Rates and candidates fall out of alignment. The error is noticed three weeks later, when a client queries an invoice and two contractors are underpaid. The spreadsheet did exactly what it was told. Nothing around it was designed to catch the mistake.

### Warning signs

- The workbook has an owner whose absence people worry about.
- Some cells or tabs carry warnings such as "do not edit" or "ask before changing".
- Copies circulate by email, and people are unsure which version is current.
- Data is pasted in from one system and pasted out to another on a schedule.
- Status columns and colour codes, not a system, decide what happens next.
- Errors are found by customers, suppliers or payroll rather than by the process.

## Realisation

Excel is not automatically the problem. Modern Excel supports co-authoring and version history when files are stored and managed appropriately; Microsoft's guidance on [co-authoring Excel workbooks](https://support.microsoft.com/en-US/Excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring) explains how files held in OneDrive or SharePoint Online can be edited by several people at once, with previous versions recoverable through version history. The deeper question is whether a file designed for flexible analysis has quietly become the control layer for a business-critical process.

Collaboration features solve the problem of people editing at the same time. They do not, by themselves, provide workflow states, enforced approvals, validation at entry, role-based permissions on individual records or an audit trail designed for the process. Those are the things an operational system is expected to do.

> **Realisation prompt.** If this workbook disappeared tomorrow, would you lose a document, or would part of the business stop knowing what to do?
>

### A useful test from government practice

HM Treasury's [AQuA Book](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government), the UK government's guidance on producing quality analysis, offers a helpful frame. It describes "business critical analysis" as analysis with significant influence over finance or operations, or where an error could have significant reputational, economic or legal implications.

It recommends that quality assurance be proportionate to the risk of the intended use, and distinguishes verification, checking that analysis is error-free and meets its specification, from validation, checking that it is fit for the purpose it is being used for. The book grew out of an earlier HM Treasury [review of quality assurance of government models](https://www.gov.uk/government/publications/review-of-quality-assurance-of-government-models). A business does not need government-scale process to borrow the idea: once a workbook is business critical, it deserves deliberate assurance, documentation and ownership.

## Identification

This is often a **shadow-system and workflow-control problem**. The spreadsheet has become an informal application because the approved systems do not represent the process well enough, are difficult to adapt, or do not connect the information people need.

## Diagnosis

Business-critical spreadsheets commonly emerge when:

- teams need a flexible view that core systems do not provide;
- several systems must be manually reconciled;
- workflow states and approvals have no proper home;
- exceptions are easier to manage in rows than in the formal system;
- people need to change the process faster than technology governance can respond.

The spreadsheet is therefore often a symptom of an unmet operational need. Replacing it without understanding that need simply drives the workaround somewhere else.

The mechanism is gradual. Each addition, such as a new column, a lookup or a status colour, solves a real problem quickly. No single change feels like building a system, so none receives the design, testing or documentation a system would. The result is application logic with none of an application's safeguards, and knowledge of it concentrated in whoever made the changes. For the people side of this, see [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## Commercial impact

The commercial value at stake is **operational risk, scalability, accuracy and continuity**. A critical workbook can concentrate knowledge, logic and control in one file. As volume and collaboration increase, errors become harder to detect, ownership becomes less clear and the cost of manual reconciliation grows.

There is also continuity risk when one employee understands the formulas, data imports or unwritten rules that make the workbook function. And there is a growth constraint: a process held in a workbook tends to scale by adding rows, tabs and people, rather than by becoming more efficient.

## Common misidentification

The simplistic answer is "get rid of Excel". That is weak diagnosis. Spreadsheets remain excellent tools for analysis, modelling and flexible exploration. The problem is using them as invisible infrastructure without intentionally managing the workflow, ownership and controls that infrastructure requires.

## Possibility

A better state keeps spreadsheets where they are useful while moving business-critical records, approvals and workflow states into systems designed to manage them. Teams can still analyse and export data, but the operation no longer depends on one workbook being the authoritative process engine.

## Intervention

Do not start by deleting the spreadsheet. Map what it actually does: which records it owns, which calculations matter, which decisions it supports, which systems feed it and what downstream actions depend on it. Then separate analytical use from operational control.

A short inventory helps:

| Question | If the answer is yes |
| --- | --- |
| Is it the only record of something, such as job status or approvals? | That record probably needs a governed home. |
| Do actions such as payments, invoices or orders depend on it? | The workflow needs controls, validation and an audit trail. |
| Does it mainly summarise or model data from other systems? | It may be fine as analysis, with documented sources and checks. |
| Would one person's absence stop it being maintained? | Document the logic and share ownership now, whatever happens next. |

The intervention may be a better workflow, integration, shared database, low-code application, controlled reporting layer or simply stronger ownership and version governance. The right answer depends on why the spreadsheet became critical.

## Practical diagnostic questions

- Would work stop if this workbook were unavailable for a day?
- Does it contain the authoritative status of customers, jobs, orders or approvals?
- Do people avoid changing parts of it because only one person understands them?
- Is information manually imported from or exported to core systems?
- Does the file manage work, or merely analyse it?
- How would you know if a formula or paste had silently gone wrong?

## Bottom line

A business-critical spreadsheet is not proof that spreadsheets are bad. It is a signal that an important process may be operating outside intentional systems architecture. The strongest response is to understand the process first, then decide what belongs in Excel and what no longer should.
