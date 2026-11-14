---
hub: discovery
record_id: DISC-126
slug: month-end-close-depends-on-manual-spreadsheet-reconciliations
title: Month-end close depends on dozens of manual spreadsheet reconciliations
description: Each close, the finance team rebuilds the same reconciliations in spreadsheets from exported data, and the books wait for the slowest one. Move matching into the system and run the close as a tracked schedule.
lead: Each close, the finance team rebuilds the same reconciliations in spreadsheets from exported data, and the books wait for the slowest one. Move matching into the system and run the close as a tracked schedule.
category: Finance Close & Reconciliation
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Finance Close & Reconciliation
problem_domain: Finance Close & Reconciliation
problem_owner: Financial controller or finance operations manager
budget_owner: CFO or financial director
sources:
  - Reconcile bank accounts - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately
  - Financial period close workspace - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/financial-period-close-workspace
related:
  - New SKUs go on sale before every system has the product data | /discovery/launching-a-new-sku-before-every-system-knows-it-exists/
  - Why manual file transfers survive inside otherwise automated processes | /discovery/manual-file-transfers-inside-automated-processes/
  - Why security findings end up in spreadsheets after the scan finishes | /discovery/security-findings-tracked-in-spreadsheets-after-scans/
summary: Each close, the finance team rebuilds the same reconciliations in spreadsheets from exported data, and the books wait for the slowest one. Move matching into the system and run the close as a tracked schedule.
layout: plain
---
On the first working day of each month, the finance team at a Johannesburg distribution business starts the close. Someone exports the bank statements and the cashbook into Excel and matches them line by line. Someone else exports the debtors and creditors age analyses and ties them to the control accounts. Inventory, VAT, payroll, intercompany, accruals and suspense accounts each have their own workbook, built from last month's copy. There are more than thirty of them.

By the eighth working day most are done, but two are not. One has a difference nobody can explain, and the person who built the other is on leave. The management accounts wait. When they finally go out, the directors are already halfway through the next month and asking questions about numbers that are three weeks old.

## The problem in plain language

Reconciliation is the work of proving that two records agree: the bank statement and the cashbook, the debtors ledger and its control account, the stock system and the general ledger. It is a basic control, and it has to be done.

The problem is how it is done. In many businesses each reconciliation is a spreadsheet, rebuilt every month from exported data, with matching done by formulas or by eye. The spreadsheets are personal, their logic is undocumented and they cannot start until the period is over and the data is exported. The close is only as fast as the slowest spreadsheet and only as reliable as the person who maintains it.

## What the buyer is actually trying to solve

Financial controllers ask how to shorten month-end, how to reduce manual reconciliations and how to stop the close depending on specific people. CFOs ask why management accounts take so long and how confident they can be in them. The outcome they want is a close in which routine matching happens in the system during the month, only genuine exceptions are investigated at month-end and everyone can see which tasks are done, which are late and which are blocked.

## Evidence and system mechanism

### Accounting systems can match routine transactions

Microsoft's documentation for Business Central on [reconciling bank accounts](https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately) shows how much of a typical reconciliation a system can do. Bank statements can be imported as files or bank feeds. Statement lines can be matched to ledger entries automatically, using text and a transaction date tolerance, or manually where needed. Lines that cannot be matched stay on the reconciliation with a difference that must be resolved, and the documentation lists the usual causes: a posting with no bank transaction, a bank transaction with no posting and details that differ too much to match. Bank charges and interest on the statement can be transferred to a journal and posted so that they match. A test report shows outstanding items before posting.

The same documentation warns against posting directly to the general ledger account used for the bank, because direct postings break the link between bank and ledger entries and make reconciliation difficult. That is a common reason reconciliations drift into spreadsheets: the system cannot reconcile because the data was posted around it.

### The close itself can be a tracked schedule

Microsoft's guidance on the [financial period close workspace](https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/financial-period-close-workspace) in Dynamics 365 Finance describes the close as a template of recurring tasks, each with an owner, a due date relative to the period end and links to the page where the work is done. Tasks can depend on other tasks and cannot be marked complete until their dependencies are complete. The workspace shows tasks that are past due, due today and blocked, and status by company, area and person. A history of every close records the planned due date, actual completion date and who completed each task.

Other accounting systems and close tools offer similar features under different names. The mechanism matters more than the product: routine matching in the system, and a visible schedule with owners and dependencies.

## Why this becomes urgent

Close-cycle pressure is the usual trigger. A lender, a parent company, a new investor or the board asks for management accounts sooner. A growing business adds bank accounts, entities and payment channels, and the number of reconciliations rises faster than the team. A key team member resigns and takes the logic of several spreadsheets with them.

The problem is often noticed first through its symptoms, such as differences found only at month-end, as in [why revenue leakage only shows up at month-end reconciliation](/discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/).

## Economic consequence

- **Slow reporting.** Management decisions are made on figures that are weeks old.
- **Overtime and burnout.** The finance team works long hours in the first week of every month.
- **Control risk.** Spreadsheet errors, broken formulas and unexplained differences carried forward undermine the reliability of the accounts.
- **Audit effort.** Auditors spend longer testing reconciliations that are not reproducible from the system.
- **Key-person dependency.** The close stalls when the person who understands a workbook is away.

## Root cause

The root cause is that the accounting system does not receive data in a form it can reconcile. Bank feeds are not connected, payment references are not captured, subledgers post in summary or directly to control accounts, and operational systems send totals rather than transactions. Finance compensates by exporting and matching in spreadsheets.

A second cause is that the close is not designed as a process. Nobody has listed all the reconciliations, their owners, their dependencies and their deadlines, so the close is a set of individual habits. Over time, spreadsheets become part of the reporting chain, a pattern described in [how spreadsheet extracts quietly become the reporting system](/discovery/how-spreadsheet-extracts-quietly-become-the-reporting-system/) and [why management reports break when manual data steps are never written down](/discovery/why-management-reports-break-when-manual-data-steps-are-never-written-down/).

## Practical next actions

1. **List every reconciliation.** Record each one with its owner, data sources, the day it is done, how long it takes and whether it uses a spreadsheet.
2. **Rank them by effort and risk.** Identify the reconciliations that take the most time or have the most unexplained differences, and start there.
3. **Fix the data at source.** Connect bank feeds, capture payment references, stop direct postings to control accounts and make subledgers post at transaction level where you can.
4. **Use system matching rules.** Set up automatic matching for bank, receipts and payments, and limit spreadsheets to the exceptions the system cannot match.
5. **Reconcile during the month.** Move high-volume reconciliations to a daily or weekly routine, so month-end only deals with the last few days.
6. **Run the close as a schedule.** Build a close task list with owners, due dates relative to period end and dependencies, and track it in your accounting system or a shared tool rather than a personal checklist.
7. **Document what remains.** For any spreadsheet that stays, record its purpose, sources, logic and reviewer, and store it in a controlled location.
8. **Measure the close.** Track days to close, overdue tasks and unexplained differences each month, and review the trend quarterly.

## Diagnostic questions

- How many reconciliations does your close involve, and how many are spreadsheets rebuilt each month?
- Which reconciliation is most often the last to finish, and why?
- Could someone else complete each reconciliation if its usual owner were away?
- Are bank statements imported and matched in the system, or exported and matched in Excel?
- Can you see, on day three of the close, which tasks are late or blocked?

## What good looks like

Bank and high-volume subledger reconciliations run in the system during the month, and month-end deals only with exceptions. Every close task has an owner, a due date and its dependencies, and status is visible to the controller and CFO at any moment. The remaining spreadsheets are few, documented and reviewed. Days to close fall, unexplained differences are resolved in the month they arise and auditors can reproduce reconciliations from the system. Problems are found during the month, in the spirit of [finding stock exceptions during the month instead of at month-end](/discovery/finding-stock-exceptions-during-the-month-instead-of-at-month-end/).

## Where Mellorca fits

To connect bank feeds, configure matching rules and automate the routine reconciliations, [business automation and AI workflows](/services/business-automation-ai-workflows/) can build and test the automation with your finance team. If the root cause is operational systems that send totals instead of transactions, [systems implementation and integration](/services/systems-implementation-integration/) can fix the feeds into the ledger.

## Method note

This article uses Microsoft documentation for Business Central and Dynamics 365 Finance to illustrate bank reconciliation matching and close task schedules. Other accounting systems offer comparable features with different names and limits, so check your own vendor's documentation. The scenario is illustrative. Changes to reconciliation controls should be agreed with your auditors.
