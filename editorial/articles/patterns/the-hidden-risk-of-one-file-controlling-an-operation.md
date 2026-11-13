---
hub: patterns
record_id: PAT-253
slug: the-hidden-risk-of-one-file-controlling-an-operation
title: The hidden risk of one file controlling an operation
description: When one schedule or job list holds the live state of an operation, a lock or lost copy stops the work. Move live state into records instead.
lead: When a single schedule, dispatch board or job list holds the live state of an operation, every lock, stale copy or lost file stops the work. Treating that file as infrastructure, then moving the live state into records, removes the single point of failure.
category: Spreadsheet Dependency & Shadow Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Spreadsheet Dependency & Shadow Operations
pattern_family: Spreadsheet Dependency & Shadow Operations
observable_condition: One file such as a master schedule, dispatch board or job list holds the live state of an operation; locks, stale copies or an unavailable device disrupt the whole team.
primary_identification: Single point of operational control and failure: live workflow state held in a file rather than in a system designed for concurrent, controlled and resilient use.
commercial_value_dimensions: resilience, speed, customer experience, capacity, scalability
sources:
  - Collaborate on Excel workbooks at the same time with co-authoring - Microsoft Support | https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104
  - Restore a previous version of a file stored in OneDrive - Microsoft Support | https://support.microsoft.com/en-us/office/restore-a-previous-version-of-a-file-stored-in-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893
  - Horror Stories: Spreadsheet mistakes - news stories - European Spreadsheet Risks Interest Group | https://eusprig.org/research-info/horror-stories/
related:
  - Why is your most important process running in Excel? | /patterns/why-your-most-important-process-is-running-in-excel/
  - When one missing item stops a larger process | /patterns/when-one-missing-item-stops-a-larger-process/
  - When one unmonitored component can stop a critical service | /patterns/when-one-unmonitored-component-can-stop-a-critical-service/
summary: When a single schedule, dispatch board or job list holds the live state of an operation, every lock, stale copy or lost file stops the work. Treating that file as infrastructure, then moving the live state into records, removes the single point of failure.
layout: plain
---
## Observable condition

Every morning, the operations coordinator opens one file. It might be called "Master schedule", "Dispatch board" or "Jobs 2026 FINAL". It holds which vehicles go where, which technicians are booked, which orders are promised for which day, or which projects are at which stage. Everyone else in the business either reads it, asks the coordinator about it, or waits for it to be updated.

The file works, most of the time. But small events disrupt the whole operation. Someone has it open and nobody else can save changes. A colleague works from a copy they downloaded yesterday. The file lives on one laptop or a single office server, and when that machine is unavailable, nobody knows what today's plan is. Once in a while, a sort goes wrong or rows are overwritten, and the team spends a morning reconstructing what the plan was.

## Realisation

The significance is not that the business uses a spreadsheet or a document. It is that a single file has become the point through which an operation is coordinated. When one artefact holds the live state of the work, it carries the same risk as any single point of failure: if it is locked, lost, corrupted or wrong, the operation stops or proceeds blind.

Other Mellorca Patterns examine spreadsheets that contain critical business logic, such as pricing or forecasting formulas. This pattern is different. The concern here is less about whether the calculations are correct and more about the fact that one file is the operation's control point: its availability, its integrity and who can change it at any moment.

Realisation prompt: if this file were unavailable for a full working day, what would your team do? If the honest answer is "phone around and rebuild it from memory", the file is not a tool. It is infrastructure, without the protections infrastructure normally has.

## Identification

This is a **single point of operational control and failure**. The live state of a workflow, such as bookings, dispatch, production or job status, is held in one file rather than in a system designed for concurrent use, controlled change and resilience.

## Diagnosis

The visible symptom is disruption whenever something happens to the file. The common assumption is that people need to be more careful with it. The structural causes are usually these:

- **Concurrency limits.** Files are designed for one editor at a time unless specific conditions are met. Microsoft's guidance on [co-authoring in Excel](https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104) sets out requirements: the workbook must be stored in OneDrive or a SharePoint Online library, in a supported format, opened in a supported version with AutoSave on. If those conditions are not met, other users can encounter a "file is locked" error. In many businesses the master file sits on a local drive or an older server, so one person's open session blocks everyone else.
- **Copies become competing versions.** When the master is locked or slow, people save local copies, email them, or print them. Within a day the business has several versions of "the plan".
- **Weak change history.** Version history helps but has limits. Microsoft's guidance on [restoring previous versions in OneDrive](https://support.microsoft.com/en-us/office/restore-a-previous-version-of-a-file-stored-in-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893) notes that file version history is retained for 30 days and that an administrator may have turned versioning off for work accounts. Restoring a whole file also does not show who changed which row and why, which matters when a booking disappears.
- **No field-level control.** Anyone who can open the file can change anything in it. There is no distinction between the coordinator who sets the plan and the colleague who should only update a job status.
- **Location dependency.** The file sits on one device, one server or one person's account. Load-shedding, a failed laptop or a staff member's leave can make it unreachable.
- **Operational knowledge in formatting.** Colours, comments and row order carry meaning that only the coordinator fully understands.

## Commercial impact

The commercial value at stake is **resilience, speed, customer experience, capacity and scalability**.

- **Resilience.** A locked, lost or damaged file can stop an operation that otherwise has the people, stock and vehicles ready to work.
- **Speed.** Teams wait for the file to be free or for the coordinator to update it, so the operation runs at the pace of one editor.
- **Customer experience.** Double bookings, missed deliveries and wrong promises follow from people working from different copies.
- **Capacity.** The coordinator's time is consumed by keeping the file current and answering questions about it, rather than by planning.
- **Scalability.** As jobs, vehicles or staff increase, the file grows slower, more fragile and harder to share.

The scale should be judged from the business's own history: how often the file has been locked, overwritten or unavailable, and what each incident cost in rework, delays and customer calls. The European Spreadsheet Risks Interest Group keeps a public [collection of news reports of spreadsheet errors](https://eusprig.org/research-info/horror-stories/) showing that such mistakes have real financial consequences, including a UK retailer that blamed a profit warning on a spreadsheet arithmetic error.

## Common misidentification

The most common response is to tighten discipline: tell people not to save copies, add a backup routine, or password-protect parts of the file. These help, but they leave the operation dependent on one artefact. Backups restore a file; they do not tell the team what changed since the backup was taken, a point developed in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/).

The opposite mistake is to assume the answer is to replace the file with the biggest available system. Often the right move is narrower: put the live state of one workflow into a tool built for shared, controlled use, while leaving analysis and reporting in spreadsheets where they work well.

## Possibility

In a stronger state, the live state of the operation is held as records rather than rows in a file. Each booking, job or delivery is its own record with a status, an owner and a change history. Several people can update their part at once. Roles determine who can change what. The plan is reachable from any authorised device, and a single machine or account is not a dependency.

The spreadsheet does not have to disappear. It can still be used for analysis, exported from the system of record, without being the place where the operation is controlled.

## Intervention

1. **Identify the control files.** List files that the operation cannot run a day without. The warning signs described in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/) help with this.
2. **Reduce immediate risk.** Move each control file to managed cloud storage that supports co-authoring and version history, confirm versioning is on, and remove it from single devices.
3. **Separate roles.** Decide who sets the plan, who updates status and who only needs to read it.
4. **Model the workflow as records.** Define what a booking, job or delivery is, what statuses it passes through, and what information each status needs. This is the design work that makes the move to a proper workflow tool, scheduling module or job system possible.
5. **Move the live state first.** Migrate the day-to-day control of the workflow before historical data or reporting.
6. **Remove the key-person link.** Document the meaning hidden in colours and comments so that the coordinator is no longer the only person who can interpret the plan, which addresses the risk described in [the cost of key-person operational dependency](/impact/key-person-operational-dependency/).

## An illustrative example

The following is illustrative, not a client case. A Cape Town installation company with six teams runs its week from one workbook on the office server. The coordinator updates it each afternoon; team leaders open it each morning. During a power outage the server does not come back up cleanly, and the workbook is unavailable until a technician visits. For a day and a half, team leaders phone the coordinator for every job address. Two customers are not visited and one site is visited twice. The workbook itself was fine; the operation simply had no other way of knowing its own plan.

## Practical diagnostic questions

- Is there a file your operation cannot run a day without?
- How often does someone find it locked, or work from an old copy?
- Where is it stored, and what happens if that device or account is unavailable?
- Could you tell who changed a specific entry last week, and why?
- Does anyone other than its main editor fully understand its colours, comments and structure?

## Bottom line

One file controlling an operation is convenient until the day it is locked, lost or wrong. Recognising it as infrastructure, then moving the live state of the work into records that many people can use safely, removes a single point of failure the business may not know it has.
