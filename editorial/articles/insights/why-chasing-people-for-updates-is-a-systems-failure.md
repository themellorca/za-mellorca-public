---
hub: insights
record_id: INS-133
slug: why-chasing-people-for-updates-is-a-systems-failure
title: Why chasing people for updates is a systems failure
description: Why repeated status chasing points to missing workflow states, ownership and operational visibility rather than merely poor communication.
lead: When progress is visible only by asking somebody, the organisation has turned status into a manual task.
category: Digital Operations
published_date: 2026-09-07
updated_date: 2026-09-07
eyebrow: Article
page_title: Why Chasing People for Updates Is a Systems Failure | Mellorca
tags:
  - Workflow
  - Visibility
  - Operational Control
side_title: Topics
sources:
  - https://ics.uci.edu/~gmark/chi08-mark.pdf | https://ics.uci.edu/~gmark/chi08-mark.pdf
  - The Kanban Guide - May 2025 (latest) - Kanban Guides | https://kanbanguides.org/english/
closing_title: Make status a system capability
closing_text: [Explore our solutions](/solutions/) or [start a conversation](/contact/).
related:
  - How to design workflows that can survive staff changes | /insights/how-to-design-workflows-that-can-survive-staff-changes/
  - Why recurring systems maintenance is cheaper than emergency repair | /insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/
  - How to find automation opportunities from operational evidence | /insights/how-to-find-automation-opportunities-from-operational-evidence/
---
“Any update?” looks harmless until it becomes part of the operating model. Sales asks operations. Operations asks finance. Managers ask teams. Customers ask service. Every request consumes attention because the system cannot answer a basic question: what state is this work in now?

Most organisations treat this as a communication issue. They ask people to be more proactive, introduce a weekly status meeting, or set up a shared channel for updates. Those measures can help for a while, but they treat the symptom. If the only way to learn where work stands is to ask a person, the business has made status a manual task, and manual tasks degrade when people are busy.

## Status chasing is a visibility gap

The problem is not that people should communicate less. It is that routine operational facts should not require private conversations to discover. If ownership, state, blockers and expected next actions are not represented in the workflow, people recreate visibility through messages and meetings.

The gap usually has one of a few specific causes:

- **No defined states.** Work is either "open" or "done", so everything in between is invisible.
- **States that exist but are not maintained.** The system has a status field, but updating it is extra effort that nobody checks.
- **Work split across systems.** The order is in the CRM, the delivery in a spreadsheet and the invoice in finance software. No single place shows the whole journey.
- **Ownership that changes silently.** Work moves between teams without a recorded handoff, so nobody knows who has it now.
- **Waiting that is not recorded.** Work is blocked on a customer, a supplier or an approval, but the system shows it as "in progress".

Each of these forces someone to go and find out. The person asking is not being impatient; they are doing the only thing the system allows.

## Why the pattern becomes expensive

Status chasing creates interruption, duplicate conversations and delayed escalation. It also makes management reporting unreliable because the same work can be described differently depending on who was asked and when.

The interruption cost is easy to underestimate because each request is small. Research on interrupted work suggests the cost is not only lost minutes. In a study published at CHI 2008, [Mark, Gudith and Klocke](https://ics.uci.edu/~gmark/chi08-mark.pdf) found that people completed interrupted tasks in less time with no difference in quality, but reported higher stress, frustration, time pressure and effort. People compensate for interruptions by working faster, and pay for it in strain.

The other costs are structural:

- **Duplicate effort.** Several people ask the same question about the same item, and the person who knows answers each separately.
- **Late escalation.** Problems surface when someone happens to ask, not when they occur.
- **Inconsistent reporting.** Management figures are assembled from conversations, so they reflect whoever was asked rather than the actual state.
- **Key-person exposure.** The people who know the status become bottlenecks, and their absence makes the work opaque.

## An illustrative example

Consider a hypothetical installation business. A customer calls to ask when their engineer will arrive. The service desk can see the job was booked but not whether parts have arrived. They message the warehouse, who check a spreadsheet and message procurement, who email the supplier. Two hours later the answer comes back through the same chain. Meanwhile, the account manager has received the same question by email and started a parallel thread. Nobody did anything wrong. The job simply had no recorded "waiting for parts" state, no expected date and no owner for that wait.

## Warning signs

- Weekly meetings are mostly spent going round the room for updates.
- Team chat contains many variations of "where are we with…".
- Customers often know about delays before your own managers do.
- Dashboards exist, but people still message someone to confirm the number.
- Status is described in words ("nearly there", "with finance") rather than defined states.

## Design the workflow to answer the obvious questions

- Who owns the item now?
- What state is it in?
- What is it waiting for?
- When did the state last change?
- What condition should escalate it?

Flow-based methods are built on this principle. The [Kanban Guide](https://kanbanguides.org/english/) asks teams to make their workflow explicit: a defined start and finish, the states work moves through, explicit policies for moving between states, and visualisation so that the state is visible without asking. It also uses work item age, the time elapsed since an item started, as a core measure. Age is a useful prompt because it shows which items are quietly stalling before anyone has to chase them.

## A practical approach

1. **Collect the questions.** For two weeks, note every status request in a shared list: who asked, about what, and how long the answer took.
2. **Group them by work type.** Most requests usually cluster around a few workflows, such as orders, approvals, onboarding or support cases.
3. **Map the real states** for the busiest workflow, including waiting states such as "with customer" or "awaiting approval".
4. **Put the states where the work already lives.** Avoid creating a separate tracker that becomes another thing to update.
5. **Make state changes part of doing the work**, so updating status is a by-product of the action rather than an extra task. Where systems allow, automate it.
6. **Define escalation rules** based on age or missed dates, so exceptions reach the right person without anyone asking.
7. **Repeat the question log** and see whether the requests for that workflow fall.

## The trade-offs

Defining states and keeping them current is not free. Too many states create admin and invite inaccurate updates; too few hide the waits that matter. Expect a period where people double-check the system against what they know, and resist the temptation to add a reporting layer on top. If the system shows the wrong state, fix how state is captured rather than adding another place to look. Visibility can also feel like surveillance if it is introduced as a way to monitor individuals. It works better framed as making work visible, not people.

Some conversations should never be replaced. Complex judgments, sensitive customer situations and decisions that need context still need people to talk. The aim is to stop spending that attention on facts the system should already know.

## What better looks like

People still communicate when judgment or context matters, but they do not spend their day reconstructing basic operational truth. The system makes routine status visible and directs attention toward exceptions that actually need human action.

In practice, each piece of work has a current owner, a defined state, a recorded reason for any wait and a date the state last changed. Stalled items surface automatically. Meetings discuss problems rather than collect updates. Reports agree with what people see on screen, which is the subject of [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/). Handoffs between teams are recorded rather than remembered, as covered in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/).

If status chasing has become part of how your business runs, it is usually a sign that workflow design and operational visibility need attention together. That is the focus of our [digital operations improvement](/services/digital-operations-improvement/) work.
