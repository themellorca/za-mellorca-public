---
hub: insights
record_id: INS-011
slug: when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure
title: When a spreadsheet is a useful tool—and when it becomes infrastructure
description: Spreadsheets are very useful until one quietly becomes something payroll, billing or stock depends on. A test for that moment and the controls it needs.
lead: Spreadsheets are among the most useful tools a business has, until one quietly becomes something payroll, billing or stock depends on. A practical test for spotting that moment, and the proportionate controls a critical spreadsheet needs before anything is replaced.
category: Systems & Strategy
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Systems & Strategy
sources:
  - Review of quality assurance of government models | https://www.gov.uk/government/publications/review-of-quality-assurance-of-government-models
  - View previous versions of Office files - Microsoft Support | https://support.microsoft.com/en-us/office/view-previous-versions-of-office-files-5c1e076f-a9c9-41b8-8ace-f77b9642e2c2
  - Protection and security in Excel - Microsoft Support | https://support.microsoft.com/en-us/office/protection-and-security-in-excel-be0b34db-8cb6-44dd-a673-0b3e3475ac2d
related:
  - How to decide which software to remove | /insights/how-to-decide-which-software-to-remove/
  - Why more dashboards do not automatically create better decisions | /insights/why-more-dashboards-do-not-automatically-create-better-decisions/
  - What to ask about APIs before buying business software | /insights/what-to-ask-about-apis-before-buying-business-software/
summary: Spreadsheets are among the most useful tools a business has, until one quietly becomes something payroll, billing or stock depends on. A practical test for spotting that moment, and the proportionate controls a critical spreadsheet needs before anything is replaced.
layout: plain
---
Spreadsheets get a bad name in conversations about business systems, and most of it is undeserved. A spreadsheet is one of the most flexible tools a business can own. It lets a finance manager model a pricing change in an afternoon, lets an operations lead test a new schedule before anyone commits to software, and lets a small team track something new without waiting for a project. Replacing every spreadsheet with a system would make most businesses slower, not better.

The question worth asking is not whether a spreadsheet is good or bad. It is what role the spreadsheet now plays. The same file can start life as a personal tool and, without anyone deciding it, become something the business cannot operate without. At that point it is infrastructure, and infrastructure needs to be treated differently.

## Three roles a spreadsheet can play

A practical way to think about this is to separate three roles.

### A personal or analytical tool

One person uses it to think, calculate or explore. If it breaks or disappears, that person loses some time and rebuilds it. Nobody else depends on its output directly. This is what spreadsheets are best at, and it needs very little control.

### A shared working tool

Several people use it to coordinate a piece of work, such as a project tracker, a leave calendar or a list of open quotes. Mistakes cause friction and confusion, but the business can recover quickly and the information also exists elsewhere.

### Operational infrastructure

The spreadsheet holds information that exists nowhere else, drives decisions or payments, or is an essential step in a core process. Examples include a commission calculator that feeds payroll, a pricing sheet used for every quote, a stock allocation file, or a debtors list that determines who gets chased for payment. If it is wrong, missing or out of date, money moves incorrectly or customers are affected.

Most of the risk sits in the third category. The difficulty is that spreadsheets rarely announce when they cross into it. The pattern is described in more detail in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/).

## A simple test for infrastructure

A spreadsheet has probably become infrastructure if two or more of these are true:

- Its output is used to pay people, bill customers, order stock or report to management, lenders or regulators.
- It is the only place where some of its information is held.
- It is updated on a schedule, such as daily or at month-end, as part of a recurring process.
- More than one team relies on it, or it feeds another system.
- Only one or two people understand how its formulas, links or macros work.
- If it were lost or corrupted today, a core process would stop or produce wrong results.

None of these says the spreadsheet must be replaced. They say it must be managed as something the business depends on.

## What changes when a spreadsheet becomes infrastructure

Public sector finance offers a useful model. In 2013 HM Treasury published a [review of quality assurance of government analytical models](https://www.gov.uk/government/publications/review-of-quality-assurance-of-government-models), noting that the recent experience of the InterCity West Coast rail franchise competition underlined why such assurance matters. The final report recommended that every business-critical model should have quality assurance proportionate to the risk its use represents, and a single senior responsible owner throughout its life who is satisfied that the model is fit for purpose before it is relied on. It also suggested keeping an up-to-date list of business-critical models.

Small businesses do not need the same formality, but the three ideas scale down well: know which spreadsheets are critical, give each one an owner, and check them in proportion to what they control.

In practice, a spreadsheet that has become infrastructure should have:

- **A named owner** who is accountable for its accuracy and for approving changes to its structure, not just whoever last edited it.
- **One authoritative location.** A single file in a managed location, not copies on desktops and in email attachments.
- **Version history.** Microsoft notes that [version history in Microsoft 365](https://support.microsoft.com/en-us/office/view-previous-versions-of-office-files-5c1e076f-a9c9-41b8-8ace-f77b9642e2c2) only works for files stored in OneDrive or SharePoint, which is a strong argument for moving critical files off local drives.
- **Protected structure.** Formulas and reference data locked so that routine data entry cannot overwrite them. Microsoft is clear that [worksheet protection is not intended as a security feature](https://support.microsoft.com/en-us/office/protection-and-security-in-excel-be0b34db-8cb6-44dd-a673-0b3e3475ac2d); it prevents accidental changes to locked cells, which is exactly what most critical spreadsheets need, but sensitive data needs file-level controls as well.
- **A short description** of what the file is for, where its inputs come from, who uses its outputs and what checks are done before it is relied on.
- **A check proportionate to the risk.** For a payroll input, a second person reviews totals against the previous period. For a pricing sheet, someone tests a few known quotes after every change.

## An illustrative example

Consider a hypothetical Cape Town security services company with around 120 guards across several client sites. Overtime and shift allowances are calculated in a workbook maintained by the operations administrator, then keyed into the payroll system. The workbook started as her own tool for checking timesheets. Over three years it became the only place where site-specific allowance rules were recorded.

When she went on extended leave, a colleague ran the workbook for one month and copied an old version of a formula sheet. Several guards were underpaid, and the error was found only after complaints. Nothing about the spreadsheet itself was unusual. What was missing was recognition that it had become infrastructure: no owner other than its creator, no single authoritative copy, no record of the allowance rules and no check before payroll ran.

The fix did not require new software in the first instance. The company moved the workbook to a shared, versioned location, documented the allowance rules, locked the formula sheets, named the payroll manager as owner and added a total-to-total comparison before each run. Later, it began moving the allowance rules into the payroll system itself.

## When to move the work into a proper system

Managing a critical spreadsheet well is often the right answer for a while. It stops being the right answer when:

- Several people need to update it at the same time, and conflicting edits are common.
- Its information has to be re-keyed into another system, creating double entry and reconciliation work.
- It needs an audit trail of who changed what record and when, beyond file versions.
- Volume has grown to the point where it is slow, fragile or split across many tabs and files.
- The rules it contains belong in the system that executes them, such as payroll, billing or inventory.

At that stage the decision is usually about which system should own the information. [How to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) covers that choice. The point is to move deliberately, with the spreadsheet's rules documented first, rather than in a rush after a failure.

## A quick audit you can do this month

1. Ask each team lead to list the spreadsheets their team would struggle without.
2. Apply the infrastructure test above to each one.
3. For those that qualify, record an owner, a location and what the file feeds.
4. Fix the obvious gaps first: duplicate copies, files on personal drives, unprotected formulas.
5. Flag the ones that meet the criteria for moving into a system, and add them to your improvement plan.

## The balance to strike

Heavy controls on every spreadsheet would kill the flexibility that makes them valuable. No controls on any spreadsheet leaves critical processes resting on files nobody manages. The answer is proportion: leave personal and analytical spreadsheets alone, tidy up shared ones, and treat the few that have become infrastructure with the same seriousness as any other system the business depends on. That ongoing care is part of what [business systems stewardship](/insights/why-business-systems-need-ongoing-stewardship/) means in practice.
