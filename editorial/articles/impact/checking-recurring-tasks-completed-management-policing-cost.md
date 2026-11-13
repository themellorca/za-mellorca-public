---
hub: impact
record_id: CPS-032
slug: checking-recurring-tasks-completed-management-policing-cost
title: Policing routine work: The management cost of checking recurring tasks by hand
description: Managers who walk around, phone or message staff to confirm routine tasks spend senior time on checks that a simple recurring-task record could provide.
lead: When managers must walk around, phone or message staff to confirm that daily, weekly and monthly tasks were done, senior time is spent on verification that a simple recurring-task record could provide.
category: Digital Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Managers manually checking whether recurring tasks have been completed
primary_cost_mechanism: Management labour cost of verification, with risk exposure from skipped checks and scaling cost as sites grow
sources:
  - Recurring tasks in Planner - Microsoft Support | https://support.microsoft.com/en-us/planner/recurring-tasks-in-planner
  - What is a list in Microsoft 365? - Microsoft Support | https://support.microsoft.com/en-us/sharepoint/lists/data-and-lists/what-is-a-list-in-microsoft-365
  - Run a cloud flow on a schedule in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks
related:
  - Recurring tasks that live in someone's memory: The cost of missed work | /impact/recurring-tasks-relying-on-memory-missed-work-cost/
  - "I thought you were doing it": The labour cost of unclear responsibilities | /impact/unclear-responsibilities-duplicated-dropped-work-cost/
  - When your experts become the help desk: The cost of routine requests | /impact/specialists-pulled-into-routine-requests-expertise-cost/
summary: When managers must walk around, phone or message staff to confirm that daily, weekly and monthly tasks were done, senior time is spent on verification that a simple recurring-task record could provide.
layout: plain
---
## The tolerated pain: the task is routine, the checking is not

Most businesses have a set of tasks that must happen on a fixed rhythm. The vehicle inspection every morning. The fridge temperature log twice a day. The weekly stock count of high-value items. The Friday backup check. The monthly bank reconciliation, the quarterly fire equipment inspection, the annual policy review. Each task is simple, and most staff do them most of the time.

The problem is the word *most*. Because nobody can see whether a task was done without asking, managers end up policing routine work. They walk the floor with a clipboard, phone branch managers, scroll back through WhatsApp groups for a photo of a signed sheet, or open a shared spreadsheet to see who ticked what. When something goes wrong, the first question is always whether the check was done, and the honest answer is often that nobody is sure.

This is a narrower problem than managers chasing general status updates, which Mellorca explored in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/). Here the work is fully defined in advance. The business knows what must happen and when. It simply has no reliable record that it did.

## Why businesses tolerate it

- **Checking feels like management.** Supervisors see verification as part of their role, so the time it takes is never questioned.
- **Paper checklists exist.** A signed sheet on a clipboard looks like control, even if nobody reviews it until there is a problem.
- **Trust is personal.** Managers know which staff are reliable and check the others, which works until people change.
- **Each task is low value on its own.** Building a system for a fridge log or a weekly check seems excessive.
- **Failures are rare and delayed.** A skipped inspection usually causes no harm, so the habit of skipping it can grow unseen.

## Operational symptoms

- Supervisors spend the first hour of the day confirming that opening tasks were done rather than planning the day.
- Checklists are completed in batches at the end of the week, with identical handwriting and suspiciously consistent readings.
- Staff at branches or on sites send photos of completed sheets into chat groups, where they are hard to find later.
- [Recurring tasks](https://support.microsoft.com/en-us/planner/recurring-tasks-in-planner) drift when the person who owned them leaves, and nobody notices for months.
- Audits and client inspections trigger a scramble to find evidence that checks were carried out.
- Managers cannot answer simple questions such as which sites missed a check last month without hours of collation.

## How the pain becomes money

- **Management labour cost.** Senior, higher-paid time is spent on verification rather than improvement, coaching or customers.
- **Risk exposure.** Missed safety, hygiene, security or backup checks can lead to incidents, failed inspections, insurance disputes or data loss.
- **Error and rework cost.** Problems that a routine check would have caught early, such as a failing compressor or a growing stock variance, are found late and cost more to fix.
- **Scaling cost.** Every new branch, vehicle or site adds checking work for managers, so management headcount grows with the operation.
- **Evidence cost.** Reconstructing proof of compliance after the fact consumes days of staff time.

## A transparent cost model

These are illustrative assumptions for a business with six sites or branches. Use your own figures.

| Activity | Who | Time | Hours a year |
| --- | --- | --- | --- |
| Daily confirmation of opening and safety checks | 6 site supervisors | 20 minutes a day each, 250 days | 500 |
| Weekly review of checklists across sites | Operations manager | 2 hours a week, 48 weeks | 96 |
| Preparing evidence for audits and client inspections | Operations and admin | 4 audits at 16 hours each | 64 |

**Total:** about 660 hours a year. At an illustrative blended loaded cost of R320 an hour for supervisory and management staff, that is roughly R211,000 a year spent confirming that routine work happened.

A structured recurring-task record will not remove all of this. Someone still needs to review exceptions and spot-check quality. But if verification time falls by half, the business recovers more than 300 management hours a year. The larger value usually lies in incidents avoided, which the model deliberately does not count because it depends entirely on your operation.

*Illustrative example.* A Western Cape food production business ran cleaning, temperature and allergen checks on paper sheets at three plants. The quality manager spent most Monday mornings phoning shift leaders to confirm weekend checks. After a customer audit found gaps in the records, the business moved the checks into a shared recurring-task list with a completion time and a photo field. The quality manager's Monday call round was replaced by a short review of the items that were overdue.

## When it becomes commercially urgent

- an audit, inspection or insurance claim has exposed gaps in evidence of routine checks;
- a preventable incident has occurred because a recurring check was skipped;
- supervisors say they have no time to supervise because they are busy confirming;
- the business is adding sites, vehicles or shifts and checking work is growing with them;
- a key person who knew the routine is leaving.

## What better looks like

The principle is simple. Recurring work should generate its own record when it is done, and managers should see only what is overdue.

### Define recurring tasks once

Each routine task needs a name, an owner, a frequency and a clear definition of done. Microsoft's Planner documentation describes recurring tasks that can repeat daily, on weekdays, weekly, monthly or yearly, or on a custom schedule. Planner shows only the current occurrence; when it is marked complete, the next one appears automatically, and each occurrence can be tracked and filtered on its own. That gives a history of completion without anyone creating the next task by hand.

### Capture evidence at the point of work

Where the check needs a reading, a photo or a signature, a structured list is often better than a task board. Microsoft describes Lists in Microsoft 365 as supporting columns for dates, people, choices and pictures, views that filter and group data, version history for each item and permissions that control who can change what. A completion entry with a time, a person and a reading is far stronger evidence than a tick on a clipboard.

### Let the system flag exceptions

A scheduled flow can check each morning for tasks that are overdue and notify the owner and their supervisor. Microsoft's [Power Automate](https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks) documentation describes scheduled cloud flows that run daily, hourly or at other set intervals. The manager's job then becomes reviewing exceptions, not confirming every task. Mellorca's article on [status updates that require investigation](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/) describes the same shift in a wider setting.

### Keep quality checks separate

A recorded completion proves a task was marked done, not that it was done well. Retain periodic spot-checks and walk-rounds, but target them using the data: sites with frequent late completions or unusual readings deserve more attention than those that are consistently on time.

## Practical steps

1. List every recurring task that a manager currently verifies, with its frequency and owner.
2. Estimate how long managers spend confirming each one every week.
3. Choose the three tasks with the highest risk or checking time and define what counts as done.
4. Set them up as recurring tasks or list items, with evidence captured at the time of completion.
5. Add an automated overdue notice to the owner and supervisor.
6. Replace routine confirmation calls with a short daily or weekly exception review.
7. Extend the approach to the next group of tasks once the first set is working.

Mellorca's [digital operations improvement](/services/digital-operations-improvement/) service helps businesses design recurring-work records and exception reporting that fit how their teams actually operate.

## Bottom line

When nobody can see whether routine work was done, managers become inspectors. The cost is senior time spent on verification, plus the risk of the check that was quietly skipped. Defining recurring tasks once, recording completion at the point of work and showing managers only the exceptions turns policing into oversight, and lets the business add sites and staff without adding the same amount of checking.
