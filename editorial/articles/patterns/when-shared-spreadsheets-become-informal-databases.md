---
hub: patterns
record_id: PAT-261
slug: when-shared-spreadsheets-become-informal-databases
title: When Shared Spreadsheets Become Informal Databases
description: A spreadsheet that started as a simple tracker now has thousands of rows, five people editing it, colour codes nobody explains and lookups that break when someone sorts it. It has become a database without any of a database's protections.
lead: A spreadsheet that started as a simple tracker now has thousands of rows, five people editing it, colour codes nobody explains and lookups that break when someone sorts it. It has become a database without any of a database's protections.
category: Spreadsheet Dependency & Shadow Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Spreadsheet Dependency & Shadow Operations
pattern_family: Spreadsheet Dependency & Shadow Operations
observable_condition: Several staff edit one shared spreadsheet every day as the main record of jobs, orders, assets or clients, relying on colour codes, hidden columns and informal rules to keep it usable.
primary_identification: Informal database: a spreadsheet is carrying multi-user, record-keeping work that needs structure, validation, permissions and change history, none of which it enforces.
commercial_value_dimensions: Data accuracy, operational continuity, staff time and control over business records
sources:
  - Excel specifications and limits - Microsoft Support | https://support.microsoft.com/en-us/excel/excel-specifications-and-limits
  - Track information for your business - Microsoft Support | https://support.microsoft.com/en-us/sharepoint/lists/track-information-for-your-business
  - What is Microsoft Dataverse? - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
related:
  - Why teams build spreadsheets after the business buys enterprise software | /patterns/why-teams-build-spreadsheets-after-the-business-buys-enterprise-software/
  - The hidden risk of one file controlling an operation | /patterns/the-hidden-risk-of-one-file-controlling-an-operation/
  - Why is your most important process running in Excel? | /patterns/why-your-most-important-process-is-running-in-excel/
summary: A spreadsheet that started as a simple tracker now has thousands of rows, five people editing it, colour codes nobody explains and lookups that break when someone sorts it. It has become a database without any of a database's protections.
layout: plain
---
## Observable condition

A facilities maintenance company in East London started tracking jobs in a spreadsheet five years ago. It had one tab and eight columns. Today it has eleven tabs, three thousand rows and more than forty columns. Six people edit it every day: the call centre logs new jobs, supervisors assign technicians, technicians' completion notes are added by the office and finance marks jobs as invoiced.

Green means complete, yellow means waiting for parts and red means urgent, unless the client is on a service contract, in which case it is blue. Two columns are hidden because they broke a formula. Once a month, someone sorts a single column instead of the whole sheet and job details are scrambled across rows. The office manager restores last week's copy and re-enters the changes.

Everyone agrees it is the most important file in the business.

## Realisation

The realisation is that this is no longer a spreadsheet in the way it was meant to be used. It is a database: a shared, multi-user record of the business's work. But it has none of the things that make a database safe. Nothing checks that entries are valid, nothing stops two people overwriting each other, nothing records who changed what and nothing prevents a sort from scrambling the records.

The business is running its operations on a tool that is doing a job it was not designed for, and is paying for that in daily vigilance.

**Realisation prompt:** list every shared spreadsheet that more than three people edit each week. For each, ask what would happen if it were corrupted today.

## Identification

This is a pattern of the informal database. The visible symptom is a large shared file with unwritten rules and occasional disasters. The common assumption is that staff need to be more careful. The structural cause is that the work requires structured records, validation, permissions and history, and the spreadsheet provides none of them by design.

It overlaps with [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/). This pattern focuses on the specific moment when several people start using one sheet as a shared record, which is when the risks multiply.

## Diagnosis: the signs

- **Several people edit daily.** The file is a shared workspace, not one person's analysis.
- **Rows represent records.** Each row is a job, order, asset or client with a life cycle.
- **Rules are informal.** Colours, hidden columns and conventions carry meaning that only regular users know.
- **Entries are not validated.** Dates, names and statuses are typed freely and inconsistently.
- **There is no change history worth using.** Nobody can easily see who changed a record or why.
- **Size keeps growing.** Old records are never archived, and the file slows as it grows, even though Excel's own [specifications and limits](https://support.microsoft.com/en-us/excel/excel-specifications-and-limits) are far larger than the point where a shared file becomes unmanageable.

## Commercial impact

The commercial value at stake is accuracy, continuity, staff time and control.

Accuracy is fragile. Free-typed entries produce inconsistent statuses and names, so reports built from the sheet are unreliable. A single bad sort can corrupt hundreds of records. [The cost of using a spreadsheet as a form, database and workflow](/impact/spreadsheet-as-form-database-workflow-errors-maintenance-cost/) describes how these errors add up.

Continuity depends on the file and the people who understand it. A corrupted version or the departure of the person who knows the rules can stop operations.

Staff time goes into maintenance. Restoring versions, fixing formulas and explaining conventions to new staff are hidden costs.

Control is weak. Everyone who can open the file can change any record, so there is no separation between who logs, who approves and who invoices. Confusion over versions, described in [when nobody knows which spreadsheet is the latest](/patterns/when-nobody-knows-which-spreadsheet-is-the-latest/), often follows.

## Common misidentification

One misreading is to lock down the spreadsheet with protected ranges and stricter rules. That reduces some accidents but makes the file harder to use, and the underlying limits remain.

Another is to commission a large custom system immediately. That can take months, while the spreadsheet keeps running the business.

A third is to blame the people who built the spreadsheet. It worked well for years; the business outgrew it, as described in [why the flexibility that made a spreadsheet useful makes it risky later](/patterns/why-the-flexibility-that-made-a-spreadsheet-useful-makes-it-risky-later/).

## Possibility

The possibility is that the same records move into a tool designed for shared records, keeping the familiar columns and views while adding validation, permissions and history. Each job is a record with defined fields. Statuses are choices from a list, not colours. Views show each team what it needs. Changes are tracked.

The step up is often smaller than expected. [Microsoft Lists](https://support.microsoft.com/en-us/sharepoint/lists/track-information-for-your-business) lets teams track business information such as orders in a shared list, with columns, sorting, grouping and rules that alert colleagues to updates. Where the records need more structure, relationships and security, [Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro) stores data in tables with role-based security and business rules that validate data regardless of which app is used.

## Intervention

Start by documenting the spreadsheet as it is: every tab, column, colour and convention. That document is the specification for the replacement.

Clean the data and decide what each column means, turning colours and notes into proper status fields. Choose the simplest tool that provides validation, permissions and history. Rebuild the main views each team uses, so the change feels familiar.

Run both side by side briefly, then make the spreadsheet read-only and archive it. Keep spreadsheets for analysis, fed from the new record, rather than as the record itself.

## Practical next actions

1. List every shared spreadsheet edited by more than three people each week.
2. For the most critical one, document every column, colour code and convention.
3. Convert colours and notes into defined fields with allowed values.
4. Move the records into a shared list or database with validation, permissions and change history.
5. Rebuild the views each team relies on so the change feels familiar.
6. Make the old spreadsheet read-only and use spreadsheets for analysis only.

## Diagnostic questions

- Which spreadsheet would stop our operations if it were corrupted today?
- How many people edit it, and can we see who changed a given record?
- How much meaning is carried by colours, hidden columns or unwritten conventions?
- When did we last restore an old version because something went wrong?

## Bottom line

When a shared spreadsheet becomes the main record that several people edit every day, it has become a database without a database's protections. Recognise the signs, document the informal rules and move the records into a tool built for shared data. Keep what worked about the spreadsheet and lose the daily risk.
