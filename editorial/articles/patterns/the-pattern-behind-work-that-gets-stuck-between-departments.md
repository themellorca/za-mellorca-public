---
hub: patterns
record_id: PAT-310
slug: the-pattern-behind-work-that-gets-stuck-between-departments
title: The Pattern Behind Work That Gets Stuck Between Departments
description: Each team says its part is done, yet the customer is still waiting. Why work stalls in the space between departments, and how to make that space visible.
lead: Each team says its part is done, yet the customer is still waiting. Why work stalls in the space between departments, and how to make that space visible.
category: Approvals, Handoffs & Bottlenecks
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Approvals, Handoffs & Bottlenecks
pattern_family: Approvals, Handoffs & Bottlenecks
observable_condition: Each department reports that its part of a job is complete or on track, yet the overall job is late, and nobody can say where it has been waiting.
primary_identification: Unowned boundaries: the business manages departments, not flows, so the handoff points between teams have no owner, no queue and no measure.
commercial_value_dimensions: Cycle time, customer experience, cash flow, capacity and management attention
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - When work sits waiting more than it moves | /patterns/when-work-sits-waiting-more-than-it-moves/
  - When waiting for approval costs more than the approval protects | /patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/
  - Why Handoffs Create More Delay Than the Work Itself | /patterns/why-waiting-between-people-takes-longer-than-the-work/
summary: Each team says its part is done, yet the customer is still waiting. Why work stalls in the space between departments, and how to make that space visible.
layout: plain
---
## Observable condition

A customer asks why their job is late. Sales says the order was passed to operations on Tuesday. Operations says it was waiting for a credit check. Finance says the credit check was done on Wednesday and sent back. Nobody is wrong. Each team did its part within a reasonable time. The job is still a week late.

The delay did not happen inside any department. It happened between them: in an inbox nobody watched, in a form that arrived incomplete and was quietly set aside, in the assumption that someone else would pick it up. Because each team measures only its own work, the waiting time belongs to nobody, and it does not appear in any report.

An illustrative example: a Midrand engineering services firm. Its quoting team turns quotes around in two days and its workshop finishes jobs on schedule. Yet the time from a customer's acceptance to the start of work averages three weeks, because accepted quotes wait for a job number from finance, then for a materials list from engineering, and each step starts only when someone notices the previous one has finished.

## Realisation

The realisation is that most of the elapsed time in a cross-department process is often waiting, not working, and the waiting happens at the boundaries. Departments optimise what they can see and are measured on. The handoff between them is invisible to both sides: the sender considers the work done once it is sent, and the receiver does not count it until it is picked up.

Lean practitioners have long made this visible with value-stream mapping. The [Lean Enterprise Institute describes value-stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) as charting every step, including the information flows that drive the work, from order to delivery, so that waste can be found and removed. The value of the map is that it shows the gaps as well as the steps.

**Realisation prompt:** for your most important cross-department process, do you know how long a typical job spends waiting between teams compared with being worked on?

## Identification

This is a pattern of unowned boundaries. The visible symptom is late work that every department can explain without being at fault. The common assumption is that one department is slow and needs pushing. The structural cause is that the business is organised and measured by function, while the customer experiences a flow that crosses functions. The handoff points have no owner, no visible queue and no time standard.

It is closely related to [when nobody knows who owns the next step](/patterns/when-nobody-knows-who-owns-the-next-step/), which looks at ownership of individual tasks. Here the focus is the boundary itself: the point where responsibility is supposed to transfer and often does not.

## Diagnosis

- **Handoffs travel by email or chat.** Work is passed by message rather than through a shared queue, so there is no list of what has been sent and not yet picked up.
- **Acceptance is not defined.** The receiving team has no agreed checklist for what it needs. Incomplete handoffs are set aside instead of being returned straight away with a clear request.
- **Each team measures its own time only.** Turnaround targets start when a team picks up the work, which hides the time it sat waiting to be noticed.
- **Nobody owns the end-to-end flow.** Department heads own their teams. No one owns the time from customer request to customer outcome.
- **Status lives in separate systems.** Sales, finance and operations each see their own record, so nobody can see where the job is without asking.

Event data can make the boundaries measurable. [Microsoft's overview of process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes how event data from systems of record can be used to visualise how processes really run and to find bottlenecks and their root causes. Even without such a tool, timestamps on emails and records are usually enough to reconstruct where a sample of jobs waited.

## Commercial impact

The commercial value at stake is cycle time, customer experience and cash flow.

When work waits between departments, the customer waits too, and the delay is often longer than the work itself. That waiting pushes back delivery, which pushes back invoicing and payment. In a business where jobs are only billed on completion, every week lost at a boundary is a week of cash tied up in work that is already paid for in wages and materials.

Customers notice. The Pattern [why a single customer question gets passed between three departments](/patterns/why-a-single-customer-question-gets-passed-between-three-departments/) describes how the same boundaries that slow the work also make it hard to answer the customer who asks about it. Managers lose time too, because the only way to find a stuck job is to chase it in person.

There is also a quieter cost. When delays cannot be traced, departments defend themselves rather than fix the flow, and the relationship between teams wears thin.

## Common misidentification

The usual response is to push the department that seems slowest, add a status meeting, or ask everyone to copy everyone on email. Pressure on one team moves the queue to the next boundary. Status meetings find stuck work once a week instead of preventing it. Wider copy lists make each handoff less clear, because everyone assumes someone else has picked it up.

## Possibility

In a better state, each important cross-department flow has a named owner, each handoff has a visible queue and a simple acceptance standard, and the business measures time from request to outcome, including the waiting. Work that arrives incomplete is returned at once with a clear request. Stuck work becomes visible on the day it stops moving, not at the end of the month. The Insight [how to design better handoffs](/insights/how-to-design-better-crm-handoffs-ownership-records-and-acceptance/) sets out the ownership, record and acceptance elements in more detail.

## Intervention

Start with one flow that customers care about, map it across every department it touches, and measure the gaps before trying to speed up any step.

## Practical next actions

1. **Pick one cross-department flow.** Choose one that customers complain about, such as order to delivery or acceptance to start of work.
2. **Trace twenty recent jobs.** Using email and system timestamps, record when each job entered and left each team, and calculate how long it spent waiting between them.
3. **Name a flow owner.** Give one person responsibility for the end-to-end time, with authority to change handoffs between teams.
4. **Replace message handoffs with a shared queue.** A shared list, board or system status that shows what has been sent and not yet accepted is enough to start.
5. **Agree an acceptance checklist for each handoff.** Define what the receiving team needs, and return incomplete work the same day with a specific request.
6. **Report end-to-end time weekly.** Put total elapsed time, including waiting, next to each department's own turnaround figure.

## Diagnostic questions

- For your most important process, how much of the elapsed time is waiting between teams?
- Who is accountable for the total time a customer waits, rather than for one department's part?
- How does work move between departments: through a shared queue or through individual messages?
- What happens to a handoff that arrives incomplete?
- Can anyone see where a specific job is right now without asking another team?

## Article summary

Work that gets stuck between departments is rarely caused by one slow team. It is caused by boundaries that no one owns, watches or measures. Mapping those boundaries, giving the flow an owner and making the handoff queue visible usually shortens delivery and speeds up cash without anyone working harder. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where your work waits and how Mellorca may be able to help.
