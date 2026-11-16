---
hub: discovery
record_id: DISC-127
slug: finance-waits-for-operations-to-email-the-final-numbers
title: Finance waits for operational teams to email the final numbers
description: Stock counts, rebates and production figures reach finance as email attachments, so the month-end close runs at the pace of the slowest sender. How to turn operational inputs into owned, scheduled and evidenced close tasks.
lead: Stock counts, rebates and production figures reach finance as email attachments, so the month-end close runs at the pace of the slowest sender. How to turn operational inputs into owned, scheduled and evidenced close tasks.
category: Finance Close & Reconciliation
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Finance Close & Reconciliation
problem_domain: Finance Close & Reconciliation
problem_owner: Financial controller or finance operations manager
budget_owner: CFO or financial director
sources:
  - https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/financial-period-close-workspace | https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/financial-period-close-workspace
  - https://learn.microsoft.com/en-us/dynamics365/business-central/year-close-years-periods | https://learn.microsoft.com/en-us/dynamics365/business-central/year-close-years-periods
summary: Stock counts, rebates and production figures reach finance as email attachments, so the month-end close runs at the pace of the slowest sender. How to turn operational inputs into owned, scheduled and evidenced close tasks.
layout: plain
---
Illustrative example: on the third working day of the month, the financial controller of a Cape Town food manufacturer has posted everything the ledger can produce on its own. The close is now waiting on email. Production has not sent the final yield and scrap figures. The depot manager in Polokwane is still counting fuel. The sales operations lead has promised the rebate accrual "after lunch". Each number will arrive as an attachment, in a different layout, sometimes with a correction a day later. The controller keeps a list on a sticky note of who has sent what. When the external auditors ask how the month-end rebate accrual was calculated, the answer is a forwarded email with a spreadsheet nobody can reproduce.

## The problem in plain language

Most month-end closes depend on information that originates outside finance: stock counts, production output, work in progress, project completion, fuel and fleet usage, volume rebates, commissions, accrued services received but not yet invoiced. In many businesses those figures reach finance by email. Finance cannot start the dependent journals until each one arrives, has no reliable way to see who is late, and receives numbers without the workings behind them. The close then runs at the pace of the slowest sender.

This overlaps with, but is not the same as, [month-end close depending on manual spreadsheet reconciliations](/discovery/month-end-close-depends-on-manual-spreadsheet-reconciliations/). That problem is about how finance reconciles what it has. This one is about the hand-off from operational teams: what is requested, by when, in what form, and with what evidence.

## What the buyer is actually trying to solve

The financial controller wants a predictable close. In practice that means knowing exactly which operational inputs are needed, who owns each one, when it is due relative to period end, and whether it has arrived. It also means receiving each input in a consistent, controlled format with its supporting calculation attached, so the journal can be posted and later defended to an auditor without chasing the person who sent it.

## Evidence and system mechanism

### A close is a schedule of dependent tasks

Finance systems model the close as a set of tasks with owners and dependencies. Microsoft's documentation on the [financial period close workspace in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/financial-period-close-workspace) describes templates in which each closing task is a recurring work effort assigned to an individual, with a due date set relative to the period end. Tasks can depend on other tasks and cannot be marked complete until their dependencies are done. The workspace shows tasks that are past due and tasks blocked by dependencies, lets users attach files, notes and journal references to a task, and keeps a history of due dates, completion dates and who completed each task that can be exported for audit purposes.

Nothing in that design requires the task owner to be in finance. A production manager can own "submit final scrap and yield figures" with a due date of period end plus one working day, and the dependent journal task can be blocked until it is done.

### Closing is a sequence, not a single step

Microsoft's overview of [closing years and periods in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/year-close-years-periods) lists the typical sequence: ensure documents and journals are posted, restrict posting date ranges, update currency rates, allocate costs and income, run pre-closing reports to verify balances, and only then close. It notes that posting date restrictions, not the act of closing, control when entries can still be posted. Operational inputs that arrive late either hold up this sequence or force adjustments after reports have already been produced.

## Why this becomes urgent

Audit findings are the usual trigger. Auditors ask for evidence behind accruals and stock adjustments, and an email with a pasted figure is weak evidence, especially if the calculation was overwritten the following month. Findings about unsupported journals, late adjustments or inconsistent cut-off push the CFO to formalise the hand-off. Growth adds pressure: a new branch, product line or entity adds more senders to the same email-driven process.

## Economic consequence

A longer close delays management reporting, so decisions about pricing, stock and costs are made on older numbers. Finance staff spend the first days of each month chasing rather than analysing, and work late when inputs arrive at once, a cost described in [the payroll cost of a manual month-end close](/impact/manual-month-end-close-payroll-cost/). Re-keying figures from attachments introduces errors that surface as prior-period adjustments. Audit fees and effort rise when evidence must be reconstructed. The underlying cost of stitching inputs together by hand is covered in [combining figures from many workbooks by hand](/patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/).

## Root cause

- **Inputs are not defined.** Finance knows what it needs, but the list is not written down with owners and due dates.
- **Operational teams do not see the dependency.** To a depot manager, the email is a favour to finance, not a step that blocks the close.
- **No standard format.** Each sender uses their own spreadsheet, so finance re-keys and checks every time.
- **Evidence is separated from the number.** The figure arrives; the calculation stays on someone's laptop.
- **Source data sits in operational systems that finance cannot query.** Figures that could be extracted automatically are compiled by hand.

## What good looks like

Finance maintains a close calendar that includes every operational input, each with a named owner, a due time relative to period end and a dependent finance task. Owners submit through a standard template or form, or better, finance pulls the figure directly from the source system where one exists. Each submission carries its supporting calculation and is stored with the journal it supports. A status view shows which inputs are outstanding, and late items escalate automatically. After each close, the team reviews which inputs were late or corrected and fixes the cause rather than the symptom.

## Diagnostic questions

- Can you list every figure finance receives from outside the department during the close, with its owner?
- How many working days after period end does the last operational input usually arrive?
- For last month's accruals, can you show an auditor the calculation behind each figure without asking the sender?
- Which of these inputs could be extracted directly from an operational system instead of being emailed?
- Do operational managers know that a late submission delays the close?

## Practical next actions

1. List every operational input to the close, with its owner, the journal it feeds and when it currently arrives.
2. Agree due dates relative to period end with each owner and their line manager, and add them to the close calendar.
3. Replace free-form emails with a standard submission template that includes the supporting calculation.
4. Store each submission with the related journal so audit evidence is in one place.
5. Identify the two or three inputs that could be extracted automatically from source systems and build those feeds first.
6. Review late and corrected inputs after each close and track the trend for six months.

## Where Mellorca fits

Mellorca helps finance teams redesign the close hand-off: defining inputs and owners, setting up task tracking and submission workflows, and building feeds from operational systems so fewer numbers need to be emailed. This work sits within [digital operations improvement](/services/digital-operations-improvement/).

## Method note

The opening example is illustrative. Microsoft Dynamics 365 Finance and Business Central documentation is used to show how finance systems model close tasks and sequences; other platforms and dedicated close tools provide similar task, dependency and evidence features. This article does not offer accounting or audit advice.
