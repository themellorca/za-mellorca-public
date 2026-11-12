---
hub: patterns
record_id: PAT-015
slug: why-recurring-tasks-should-trigger-a-process-review
title: Why Recurring Tasks Should Trigger a Process Review
description: When the same correction, query or manual fix comes back week after week, the business is treating a process problem as a series of individual tasks. A simple recurrence rule turns repetition into a signal for improvement.
lead: When the same correction, query or manual fix comes back week after week, the business is treating a process problem as a series of individual tasks. A simple recurrence rule turns repetition into a signal for improvement.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: The same corrections, queries, adjustments and manual fixes recur week after week for the same reason, and each is handled individually without anyone examining the cause.
primary_identification: Unexamined recurrence in which repeated reactive work is treated as workload rather than as a signal of a process defect.
commercial_value_dimensions: Labour capacity, cash flow, customer experience and quality
sources:
  - What Is Problem Management? - IBM | https://www.ibm.com/think/topics/problem-management
  - 5 Whys - What is it? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/five-whys/
  - Google SRE - Operational Efficiency: Eliminating Toil | https://sre.google/workbook/eliminating-toil/
  - Standardized Work - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/standardized-work/
related:
  - The Daily Routine Nobody Remembers the Reason For | /patterns/the-daily-routine-nobody-remembers-the-reason-for/
  - When Your Team Is Busy but Output Is Not Increasing | /patterns/when-your-team-is-busy-but-output-is-not-increasing/
  - Why Small Tasks Become Expensive at Scale | /patterns/why-small-tasks-become-expensive-at-scale/
summary: When the same correction, query or manual fix comes back week after week, the business is treating a process problem as a series of individual tasks. A simple recurrence rule turns repetition into a signal for improvement.
layout: plain
---
## Observable condition

Every month, the same customer's invoice has to be corrected because the order was captured against the wrong branch. Every week, someone fixes the same stock discrepancy for the same product line. Several times a day, the front desk answers the same question about delivery times. Every quarter, the same report has to be adjusted by hand before it goes to the bank. Each occurrence is handled well. The correction is made, the question answered, the report adjusted. Then it happens again.

In most businesses, these tasks are logged, if at all, as individual pieces of work. They appear in the helpdesk, in the inbox, in the journal of adjusting entries. What does not appear anywhere is the fact that the same piece of work has now been done dozens of times, for the same reason, by people who all know it will come back.

An illustrative example: a Pretoria-based IT reseller with about twenty staff noticed that its accounts team was issuing a credit note almost every week for the same type of error: annual licence renewals invoiced at the previous year's price. Each credit note took little time. Over a year, the team had issued dozens, and several customers had paid late while waiting for corrected invoices. The cause, a price list that was not updated when supplier prices changed, took an afternoon to fix once someone looked.

## Realisation

Recurrence is information. A task that comes back at a regular rate, for the same reason, is evidence that the process producing it has a stable defect. Fixing each occurrence keeps the business running, but it also guarantees the next occurrence, because nothing upstream has changed.

IT service management has a well-established distinction for exactly this. IBM describes an incident as a single event that causes a disruption, and a problem as the underlying cause that may sit behind several incidents. Incident management restores service; problem management investigates the root cause so that the incidents stop. Most businesses do the first well, informally, and the second hardly at all, because nobody is responsible for noticing that the same incident keeps happening.

The Lean Enterprise Institute's five whys technique captures the same idea: ask why repeatedly to get beyond the obvious symptom to the cause that, if removed, prevents the problem from recurring.

**Realisation prompt:** which correction, query or fix has your team handled more than ten times this year for the same reason?

## Identification

This is a pattern of unexamined recurrence: repeated corrective or reactive tasks that are handled one at a time instead of being treated as a signal of a process defect. The visible symptom is the same work recurring at a steady rate. The common assumption is that it is part of the normal workload. The structural cause is that the business has no rule for when repetition should stop being handled and start being investigated.

It is related to [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/), which looks at workarounds that harden into a second process. This Pattern is about the trigger: the point at which repetition should prompt someone to look at the process itself, before it hardens.

## Diagnosis

- **Work is recorded by occurrence, not by cause.** Tickets, emails and journal entries describe what was done, not why it was needed, so similar tasks are never grouped together.
- **The people who fix are not the people who own the process.** The accounts clerk corrects the invoice, but the price list belongs to purchasing. The fixer cannot change the cause; the owner never sees the fixes.
- **No threshold exists.** There is no agreed point, such as the third occurrence in a month, at which a recurring task must be escalated for review.
- **Fixing feels productive.** Resolving a recurring task brings immediate closure. Investigating its cause takes longer and has no immediate reward, so it is postponed indefinitely.
- **Recurring work is not measured.** Google's SRE workbook recommends choosing an objective unit of measure for repetitive work and tracking it over time. Without a count, recurrence remains a feeling rather than a fact.

## Commercial impact

The commercial value at stake is labour capacity, cash flow, customer experience and quality.

Capacity is consumed by work whose cause could be removed once. Cash flow suffers where recurring errors affect invoices, statements or payment runs, because corrections delay payment. Customers experience the same mistake more than once, which damages confidence more than a single error. Quality is affected more broadly: a business that does not investigate recurrence learns to live with defects, and the number it tolerates tends to grow.

There is also an opportunity cost in how improvement effort is chosen. Without evidence of what recurs, improvement work tends to follow whatever is newest or loudest rather than what consumes the most effort. The Insight [how to find automation opportunities from operational evidence](/insights/how-to-find-automation-opportunities-from-operational-evidence/) shows how recurrence data can guide that choice.

## Common misidentification

Recurring tasks are often treated as a training issue: the person who made the original error is reminded to be more careful. Where the cause is a person, that may help. Where the cause is a missing price update, a confusing screen or an unclear rule, the error will recur with the next person.

Recurring tasks are also often seen as a good case for automation. Automating a recurring correction makes it cheaper, but leaves the defect in place. As [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/) explains, the better first question is why the correction is needed at all.

## Possibility

In a better state, recurrence is visible and has a trigger. Staff tag corrective and reactive work with a simple reason code. A short weekly or monthly review looks at which reasons recur most. Any task that recurs past an agreed threshold goes to the owner of the process that produced it, with a requirement to find and remove the cause or explain why it cannot be removed. Once a fix is made, the process is updated as the new standard way of working, which the Lean Enterprise Institute describes as the baseline from which further improvement starts.

For the IT reseller, that meant a rule that supplier price changes update the price list before any renewal invoice is generated, and a monthly check of credit-note reasons to catch the next recurring cause early.

## Intervention

1. **Define what counts.** Agree which kinds of work are corrective or reactive: credit notes, manual adjustments, repeat queries, re-done work, manual overrides.
2. **Add a reason.** Ask staff to record a short reason with each occurrence. A drop-down list of common causes is better than free text.
3. **Set a recurrence rule.** Agree a simple threshold, for example three occurrences of the same reason in a month, that triggers a review.
4. **Route to the process owner.** Make sure the review goes to the person who can change the cause, not only the person who fixes the symptom.
5. **Ask why until you reach a cause you can change.** Use the five whys to move from symptom to cause.
6. **Fix the cause and update the standard.** Change the system, data, rule or step that produces the defect, and record the new way of working.
7. **Watch the count.** Confirm that the recurring task falls away. If it does not, the cause was not the right one.

## Diagnostic questions

- Which corrections or queries does your team handle every week for the same reason?
- Do you record why corrective work was needed, or only that it was done?
- Is there an agreed point at which repeated work is escalated for review?
- Do the people who fix recurring problems have a route to the people who own their causes?
- When did a recurring task last disappear because its cause was removed?

## Bottom line

Recurring tasks are a business's most reliable signal of where its processes are broken, but only if someone treats repetition as evidence rather than workload. Recording why corrective work happens, setting a simple threshold for review and routing recurring causes to the people who can change them turns a steady stream of fixes into a short list of improvements.
