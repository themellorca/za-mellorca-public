---
hub: patterns
record_id: PAT-007
slug: the-business-process-that-only-works-because-someone-remembers
title: The business process that only works because someone remembers
description: Renewals, inspections and client rules often run because one person remembers them. Why such processes look reliable until they fail, and the fix.
lead: Renewals, inspections and client-specific rules often run because one person remembers them. Here is why memory-triggered processes look reliable until they fail, and how to move the trigger into a system.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Recurring obligations such as renewals, inspections, filings and client-specific requirements are carried out on time only because a particular person remembers them, and they are missed when that person is absent or busy.
primary_identification: Memory-triggered processes: recurring and conditional work has no system-held trigger, owner or completion record.
commercial_value_dimensions: Risk, revenue protection, resilience and management capacity
sources:
  - Poka Yoke - A Resource Guide - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/poka-yoke/
  - Standardized Work - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/standardized-work/
  - Run a cloud flow on a schedule in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks
related:
  - When repetitive work is mistaken for necessary work | /patterns/when-repetitive-work-is-mistaken-for-necessary-work/
  - The daily routine nobody remembers the reason for | /patterns/the-daily-routine-nobody-remembers-the-reason-for/
  - When manual exceptions become the normal process | /patterns/when-manual-exceptions-become-the-normal-process/
summary: Renewals, inspections and client-specific rules often run because one person remembers them. Here is why memory-triggered processes look reliable until they fail, and how to move the trigger into a system.
layout: plain
---
## Observable condition

Every business has a few processes that work because someone remembers. The office manager remembers that the fire equipment service is due in March. The bookkeeper remembers that one customer's invoices need a purchase order number or they will be rejected. The operations lead remembers to check the backup report on Mondays, to renew the domain name before it expires, and to send the monthly usage readings to a client on the twenty-fifth. Nobody asked them to remember these things in writing. They just do, and so the processes run.

Until they do not. The person goes on leave, falls ill, changes role or simply has a busy week. The service lapses, the invoice is rejected, the domain expires, the client complains. Afterwards everyone agrees it should not have happened, and the person who usually remembers is thanked for normally remembering.

An illustrative example: a Gqeberha property management company with about twenty-five staff manages leases, maintenance and compliance certificates for several hundred units. Lease renewal reminders, electrical compliance certificates and municipal account checks are triggered by one long-serving administrator's diary and memory. When she took extended leave, three renewals were missed and a certificate expired before anyone noticed.

## Realisation

A process that depends on memory has no trigger of its own. The steps may be well understood, but the moment to start them lives in someone's head. That makes the process invisible: nobody else can see that it is due, nobody can see whether it was done, and nobody can tell that it has been missed until the consequence arrives.

Memory-based processes also do not scale. One person can reliably remember a dozen recurring obligations. As the business grows, the list grows, and the person adds sticky notes, a private spreadsheet and calendar reminders on their own phone. The process becomes more fragile at exactly the moment it becomes more important.

Lean practice addresses this kind of risk with poka-yoke, which the Lean Enterprise Institute defines as error-proofing through simple, inexpensive devices that prevent mistakes at their source rather than relying on inspection. Relying on a person to remember is the opposite: it puts the whole burden of prevention on attention, which is the least reliable control a business has.

**Realisation prompt:** what would go wrong in your business next month if your most reliable administrator could not come to work?

## Identification

This is a pattern of memory-triggered processes. The visible symptom is occasional, embarrassing misses on routine obligations. The common assumption is that the miss was a one-off human error. The structural cause is that recurring and conditional work has no system-held trigger, owner or completion record, so it depends on an individual's attention to start at all.

It is related to, but different from, general key-person dependency. The Insight [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/) deals with knowledge concentrated in individuals. This Pattern is narrower and more common: processes whose steps may be known to several people, but whose start depends on one person remembering. A specific example is covered in [when cash collection depends on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/).

## Diagnosis

- **Time-based work has no calendar of its own.** Renewals, inspections, filings and recurring client deliverables are tracked in a personal diary, not in a shared system that owns the date.
- **Conditional work has no rule.** "If this customer orders, add their reference number" or "when a tenant gives notice, start the inspection" exists only as know-how.
- **There is no completion record.** Because the task is not in a system, there is nothing to tick off, so nobody can see whether it has been done.
- **Success hides the risk.** Because the person usually remembers, the process looks reliable. The dependency only shows when it fails.
- **Handovers are verbal.** When people change roles, they explain what they remember to remember, and some of it is lost.

The Lean concept of standardised work is useful here. It sets out precise procedures, in a defined sequence, so that work is documented, consistent and easier to teach. Applied to administration, the same idea means writing down not only how a recurring task is done but also when it starts and how completion is recorded.

## Commercial impact

The commercial value at stake is risk, revenue protection, resilience and management capacity.

Missed renewals, lapsed certificates and expired registrations can create penalties, lost revenue, uninsured exposure or reputational damage with clients. Missed client-specific requirements lead to rejected invoices and delayed payment. Each failure costs more to recover than the original task would have taken, and some, such as a lapsed compliance certificate, cannot be undone.

There is also a capacity cost. The people who remember carry a constant background load and become hard to release for more valuable work. Managers cannot delegate or redesign what they cannot see. The Impact page on [key-person operational dependency](/impact/key-person-operational-dependency/) explores the wider cost of concentrating operations in individuals.

## Common misidentification

The usual response to a miss is to ask the person to be more careful, or to ask a second person to double-check. Both increase reliance on attention. A second person remembering is still memory.

The other response is to write a procedure document. Documentation helps, but a document does not start anything. It tells people how to do a task once they have remembered that it is due.

## Possibility

In a better state, every recurring and conditional obligation lives in a shared system that owns the trigger. Dates are recorded once, with an owner and a lead time. Reminders and tasks are generated automatically, completion is recorded, and overdue items are visible to a manager. Conditional rules are applied by the system that holds the data: the invoice template for a particular customer always includes the reference field, and a tenant's notice automatically creates the inspection task.

This does not require complex software. Many businesses already have workflow tools in their existing subscriptions. Microsoft's [Power Automate](https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks) documentation, for example, describes scheduled cloud flows that run on a defined recurrence, such as daily, weekly or on a set date, and perform tasks such as sending a reminder or a report. The important change is moving the trigger out of a person's head and into a system everyone can see.

## Intervention

1. **Ask people what they remember.** Interview the people who keep things running and list every recurring date, conditional rule and client-specific requirement they hold in their heads or private diaries.
2. **Classify each item.** Note whether it is time-based or event-based, what happens if it is missed, and who should own it.
3. **Move triggers into a shared system.** Record dates and rules in a shared register or workflow tool with an owner, lead time and escalation if overdue.
4. **Error-proof at source.** Where possible, build the rule into the system that does the work, such as a required field or an automatic task, rather than a reminder. The Insight [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) has practical patterns.
5. **Record completion.** Make sure each obligation is closed with a record, so missed items are visible before the consequence arrives.
6. **Test with absence.** Have someone else run the register for a fortnight while the usual person is away or on other work, and fix what fails.

## Diagnostic questions

- Which recurring obligations in your business are tracked only in someone's personal diary or memory?
- Can anyone other than that person see what is due in the next ninety days?
- When was the last renewal, inspection or client requirement missed, and what was the explanation?
- Which client-specific rules are applied because someone knows them rather than because a system enforces them?
- If your most reliable administrator left, how long would it take to rebuild what they remember?

## Bottom line

A process that only works because someone remembers is not really a process; it is a person's attention dressed up as one. Moving the trigger, the owner and the completion record into a shared system makes routine obligations visible, reliable and transferable. It protects revenue and compliance, frees capable people from a constant background load, and lets the business keep its promises when that person is not there.
