---
hub: insights
record_id: INS-102
slug: how-to-map-a-business-workflow-without-making-it-complicated
title: How to Map a Business Workflow Without Making It Complicated
description: A workflow map is useful only if people can read it and act on it. A plain method for mapping one business workflow in a table, from real cases rather than workshops, at the level of detail that exposes waits, handoffs and rework.
lead: A workflow map is useful only if people can read it and act on it. A plain method for mapping one business workflow in a table, from real cases rather than workshops, at the level of detail that exposes waits, handoffs and rework.
category: Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Operations
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - Gemba - What Does It Mean? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/gemba/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - How Manual Data Transfer Becomes an Operational Bottleneck | /insights/how-manual-data-transfer-becomes-an-operational-bottleneck/
  - Why Your Business Feels Harder to Run Than It Should | /insights/why-your-business-feels-harder-to-run-than-it-should/
  - Why Repeated Workarounds Are a Warning Sign | /insights/why-repeated-workarounds-are-a-warning-sign/
summary: A workflow map is useful only if people can read it and act on it. A plain method for mapping one business workflow in a table, from real cases rather than workshops, at the level of detail that exposes waits, handoffs and rework.
layout: plain
---
Most businesses that try to map a workflow end up with one of two results. Either the map is a whiteboard photo that made sense on the day and means nothing a week later, or it is an elaborate diagram with dozens of shapes that only the person who drew it can read. Neither helps anyone improve the work.

A workflow map has one job: to give a group of people a shared, accurate picture of how a piece of work moves from start to finish, so they can see where it waits, where it is handed over, where it is repeated and where it goes wrong. Everything that does not serve that job can be left out.

Why mapping matters before automation is covered in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/). This article is about how to do it simply.

## Step 1: Pick one workflow with a clear start and end

The most common mistake is scope. "Sales" is not a workflow. "From an accepted quote to a delivered order" is. A workflow worth mapping has a single trigger that starts it and a single outcome that ends it. If you cannot name both, narrow the scope until you can.

The Lean Enterprise Institute's description of [value-stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) makes a similar point: teams start by selecting one product family rather than trying to map everything at once. In an office setting, the equivalent is one type of request, order, case or transaction.

## Step 2: Follow real cases, not the official version

Workshops are useful for agreeing what to look at, but people in a meeting room describe how work should run. To see how it does run, follow real examples.

Pick five to ten recent cases, ideally a mix of straightforward and awkward ones. For each, trace what actually happened: the emails, the system records, the dates, the people involved. Where possible, sit with the people who do the work and watch. Lean practice calls this going to the [gemba](https://www.lean.org/lexicon-terms/gemba/), the place where the work happens, on the principle that standard work cannot be written at a desk.

If your systems record when each step happened, that history is also evidence. Microsoft's [process mining overview](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes how event data from systems of record can be used to visualise how processes are actually executed. You do not need a process mining tool to use the idea. Status changes and timestamps in a CRM, helpdesk or accounting system will often show where cases wait.

## Step 3: Use a table, not a diagram

Diagrams are good for presenting a finished map. For building one, a table is faster, easier to edit and easier to read. Each row is a step. The columns capture what matters:

| Column | What to record |
| --- | --- |
| Step | A short verb phrase: "check stock", "approve discount", "send invoice" |
| Who | The role, not the person's name |
| System | Where the step is done: CRM, email, spreadsheet, phone, paper |
| Information needed | What the person must have to do the step, and where it comes from |
| Wait before | How long the work typically sits before this step starts |
| What goes wrong | Common exceptions, rework or errors at this step |

Use roles rather than names so the map survives staff changes. Record systems honestly, including WhatsApp groups and personal spreadsheets, because those are often where the problems are.

## Step 4: Stay at the right level of detail

A useful map of one workflow usually has somewhere between ten and twenty-five steps. Fewer than that and it hides the handoffs. Many more and it becomes a procedure manual.

A simple rule helps: record a new step whenever the work changes hands, changes system or waits. Do not record individual clicks or keystrokes. "Capture order in accounting system" is one step, not twelve.

Where one step hides a lot of complexity, note it and map it separately later if it matters.

## Step 5: Mark the four things worth fixing

Once the table exists, go through it and mark four kinds of friction:

- **Waits.** Steps where work sits for hours or days before anyone acts.
- **Handoffs.** Rows where the role changes. Each is a place where information can be lost. See [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/).
- **Re-entry.** Steps where the same information is typed again into another system.
- **Loops.** Points where work goes back to an earlier step because something was missing or wrong.

Adding up the waits often surprises people. In many office workflows, the time spent waiting is far larger than the time spent working. That is where improvement usually pays off first.

## Step 6: Map the current state before the future state

Value-stream mapping distinguishes between a current-state map, showing how work flows today, and a future-state map, showing how it should flow. The order matters. Teams that jump straight to designing the ideal process tend to design around problems they have not understood.

Agree the current-state table with the people who do the work. Only then ask what should change.

## An illustrative example

Consider a hypothetical Gqeberha accounting practice mapping its monthly bookkeeping workflow for small clients, from "client documents received" to "management accounts sent".

The partners expected a map of about eight steps. Following six real clients through a month produced nineteen, including two steps nobody had mentioned: a junior chasing missing bank statements by phone, and a manager reformatting reports because the template in the accounting software did not match what clients expected. The waits column showed that most of the elapsed time was spent waiting for client documents, not doing the bookkeeping.

The practice's first improvement was therefore not automation of the bookkeeping. It was a document request sent on a fixed date with a clear list and a reminder. This is an illustrative scenario, not a client case study.

## Common traps

- **Mapping the ideal.** If the map has no exceptions, it is not the real process.
- **Mapping alone.** A map drawn by a manager without the people doing the work will miss the workarounds.
- **Too much notation.** Formal notations have their place, but if the team cannot read the map, it has failed.
- **Mapping everything.** Map the workflow that matters most first. A good map of one process is worth more than rough maps of ten.
- **Never updating it.** A map is a snapshot. Date it, and revisit it when the process changes.

## What to do with the map

A finished map is a starting point for decisions: which waits to remove, which handoffs to tighten, which re-entry to eliminate, which steps to delete and, only then, what to automate. It is also a natural basis for documentation, discussed in [what business processes need documentation first](/insights/what-business-processes-need-documentation-first/).

Where a workflow crosses several teams and systems and the map reveals more problems than the team can prioritise, Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work uses the same approach at a larger scale, starting from real cases and the evidence systems already hold.
