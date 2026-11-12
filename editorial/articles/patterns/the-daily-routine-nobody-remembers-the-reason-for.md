---
hub: patterns
record_id: PAT-011
slug: the-daily-routine-nobody-remembers-the-reason-for
title: The Daily Routine Nobody Remembers the Reason For
description: Many businesses run daily tasks that were set up for a reason that no longer exists. Asking what each routine is for, and who still uses its output, is often the cheapest improvement available.
lead: Many businesses run daily tasks that were set up for a reason that no longer exists. Asking what each routine is for, and who still uses its output, is often the cheapest improvement available.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Staff carry out daily or weekly routines such as exports, printed files and summary reports that nobody can explain the reason for, and whose output is rarely used.
primary_identification: Orphaned routine work that has outlived its purpose because the business has a way to start recurring tasks but none to retire them.
commercial_value_dimensions: Labour capacity, productivity, speed of change and reporting risk
sources:
  - Google SRE - Operational Efficiency: Eliminating Toil | https://sre.google/workbook/eliminating-toil/
  - 5 Whys - What is it? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/five-whys/
  - Standardized Work - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/standardized-work/
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
related:
  - Why Small Tasks Become Expensive at Scale | /patterns/why-small-tasks-become-expensive-at-scale/
  - The Business Process That Only Works Because Someone Remembers | /patterns/the-business-process-that-only-works-because-someone-remembers/
  - When Your Team Is Busy but Output Is Not Increasing | /patterns/when-your-team-is-busy-but-output-is-not-increasing/
summary: Many businesses run daily tasks that were set up for a reason that no longer exists. Asking what each routine is for, and who still uses its output, is often the cheapest improvement available.
layout: plain
---
## Observable condition

Every morning, someone exports yesterday's sales from the point-of-sale system into a spreadsheet and emails it to three managers. Every afternoon, someone prints the day's delivery notes and files them in a lever-arch file. Every Friday, someone copies the week's timesheets into a summary that goes to finance. Ask why, and the answer is usually some version of "that is how it is done" or "my predecessor showed me".

These routines are not hidden. They are on induction checklists, handed over during leave and treated as part of the job. What is missing is any memory of why they started. The manager who asked for the daily sales email may have left. The printed delivery notes may have been needed for an auditor who now accepts electronic records. The timesheet summary may duplicate a report finance already pulls from the payroll system.

An illustrative example: a KwaZulu-Natal property management company with about thirty staff found, during a system change, that its administrator spent most of every Monday morning compiling an occupancy schedule from three sources. When asked who used it, the two recipients each said they had stopped reading it more than a year earlier, because the property management software showed the same information on screen.

## Realisation

A routine is a decision that was made once and then stopped being examined. When it was set up, it probably solved a real problem: a missing report, an unreliable system, a control the auditors asked for, a manager who wanted visibility. Since then the business has changed. Systems have been replaced, people have moved on, reporting has improved. The routine has not, because nothing in the business is designed to ask whether it is still needed.

Google's site reliability engineering workbook makes the point directly: it advises that it is important to periodically question toil-intensive business processes. The emphasis is on periodically. A routine that was justified five years ago is not justified today simply because it once was.

The cost is not only the time spent. Inherited routines also shape how people think about their work. A team that spends its first hour every day on tasks it does not understand learns that the job is to follow the routine, not to improve the outcome. That makes the next unnecessary routine easier to add.

**Realisation prompt:** pick one task your team does every day. Who would notice, and how quickly, if it stopped tomorrow?

## Identification

This is a pattern of orphaned routine work: recurring tasks that have outlived their purpose but persist because nobody owns the question of whether they should continue. The visible symptom is time spent on tasks whose output is rarely used. The common assumption is that if a task is being done, someone must need it. The structural cause is that the business has a way of starting routines but no way of retiring them.

It differs from [why does this task still need a person every time](/patterns/why-does-this-task-still-need-a-person-every-time/), which asks whether necessary work could be automated. Here the first question is whether the work is necessary at all. Automating an orphaned routine only makes an unnecessary task run faster. The distinction between work that matters and work that merely persists is explored further in [the difference between necessary human work and avoidable manual work](/insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/).

## Diagnosis

- **Routines are created informally.** A manager asks for a report, a clerk starts producing it, and it becomes part of the job without any record of why it exists or who it is for.
- **Nobody owns retirement.** Adding a task is easy and visible. Stopping one feels risky, because nobody wants to be the person who removed something that turns out to matter.
- **Knowledge is passed on as steps, not purpose.** Handover notes describe how to do the task, not what problem it solves, so the next person cannot judge whether it still applies.
- **Systems change underneath the routine.** New software often makes an old workaround redundant, but implementation projects focus on the new system, not on the manual habits built around the old one.
- **Silence is read as satisfaction.** When a report is emailed and nobody replies, the sender assumes it is being used. Often it is simply being ignored.

The Lean Enterprise Institute describes the five whys as asking why repeatedly to get beyond the obvious symptoms to the root cause. Applied to a routine, the questions run in reverse: why do we do this, why was that needed, and is that reason still true?

## Commercial impact

The commercial value at stake is labour capacity, productivity and speed of change.

Capacity is spent on output nobody uses. Productivity suffers because inherited routines often fall at the start of the day or week, when people are freshest. Change slows because each system improvement leaves the old routines in place alongside the new way of working, so the expected benefit of the investment is never fully realised. The pattern also creates quiet risk: when a routine has lost its purpose, people stop checking its accuracy, and a report that someone does still rely on can be wrong for months without anyone noticing.

## Common misidentification

Orphaned routines are often mistaken for automation candidates. A business sees a repetitive daily export and buys a tool to automate it, when the better answer was to stop producing it.

They can also be mistaken for a performance issue. A manager sees that the team is always busy and concludes that people need to work faster, when part of what keeps them busy is work with no remaining value.

## Possibility

In a better state, every recurring task has a short record of what it is for, who uses its output and who can decide to stop it. Routines are reviewed whenever a related system changes and at least once a year in any case. Retiring a routine is treated as normal housekeeping, not a risk. Where a routine is still needed, it is documented as standard work, which the Lean Enterprise Institute describes as a baseline from which improvement can start.

For the property management company, that meant stopping the Monday schedule, showing both recipients where to find the same information in the software and using the freed morning for tenant arrears follow-up.

## Intervention

1. **List the recurring tasks.** Ask each team to write down everything they do daily, weekly and monthly that is not triggered by a customer or a specific event. The approach in [how to find the manual work nobody is measuring](/insights/how-to-find-the-manual-work-nobody-is-measuring/) can help.
2. **Record the purpose and the user.** For each task, note why it exists and who uses the output. Where nobody knows, mark it.
3. **Ask the recipients.** For reports and summaries, ask each recipient what decision they make with it. Expect some to say they have stopped reading it.
4. **Pause, do not delete.** For tasks with no clear user, stop them for a defined period and tell recipients. If nobody asks for the output, retire the task.
5. **Check against current systems.** For tasks that are still needed, check whether a current system already produces the same result, and whether the task could be removed at source rather than automated.
6. **Make retirement routine.** Add a review of related manual routines to every system change and to an annual operations review.

Mapping the end-to-end flow of work, as value-stream mapping does, often exposes these routines because they appear as steps that feed nothing downstream. A lighter version is described in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/).

## Diagnostic questions

- Which daily or weekly tasks in your business could nobody explain the reason for?
- When was the last time a recurring report or routine was formally stopped?
- Do handover notes explain why a task is done, or only how?
- After your last system change, which manual routines from the old system are still running?
- If a recurring report stopped arriving, who would notice first?

## Bottom line

The daily task nobody has questioned in years is rarely the most visible problem in a business, but it is often the easiest to fix. Routines persist because starting them is easy and stopping them feels risky. Giving every recurring task a purpose, a user and an owner, and reviewing them whenever systems change, returns capacity that was being spent on habit rather than value.
