---
hub: insights
record_id: INS-119
slug: how-to-design-workflows-that-can-survive-staff-changes
title: How to design workflows that can survive staff changes
description: How explicit states, ownership, rules and evidence make business workflows resilient when people change roles or leave.
lead: A workflow is fragile when continuity depends on one person remembering what happens next, who to contact, or how exceptions are handled.
category: Digital Operations
published_date: 2026-09-06
updated_date: 2026-09-06
eyebrow: Article
page_title: How to Design Workflows That Can Survive Staff Changes | Mellorca
tags:
  - Workflow Design
  - Continuity
  - Ownership
side_title: Topics
sources:
  - Google SRE - IT Service Management: Automate Operations | https://sre.google/sre-book/introduction/
  - CIPD - Succession Planning - Factsheets | https://www.cipd.org/uk/knowledge/factsheets/succession-planning-factsheet/
  - Share a cloud flow - Power Automate | https://learn.microsoft.com/en-us/power-automate/create-team-flows
closing_title: Explore Mellorca
closing_text: [Explore our solutions](/solutions/) or [start a conversation](/contact/).
related:
  - Why chasing people for updates is a systems failure | /insights/why-chasing-people-for-updates-is-a-systems-failure/
  - Why business systems need ongoing stewardship | /insights/why-business-systems-need-ongoing-stewardship/
  - Why uncontrolled configuration changes create operational risk | /insights/why-uncontrolled-configuration-changes-create-operational-risk/
---
Good people often compensate for weak process design. They remember customers, chase approvals, interpret exceptions and know which workaround keeps work moving. That can look efficient until the person is unavailable. Then work stalls, mistakes appear, and colleagues discover how much of the process existed only in one person’s head.

Staff changes are normal. People go on holiday, fall ill, change roles, get promoted and leave. A workflow that cannot absorb those changes is fragile, however smoothly it runs on an ordinary day.

## Where workflow knowledge actually lives

When a process depends on a particular person, the knowledge is usually held in a few predictable places:

- **Memory.** Which customers need special handling, which supplier invoices always need a second check, which approver responds to a phone call but not an email.
- **Personal inboxes.** The history of a case, the commitments made and the outstanding questions sit in one person’s email rather than in a shared record.
- **Private trackers.** A personal spreadsheet or notebook tracks what is waiting, because the official system does not show it.
- **Unwritten rules.** Thresholds, exceptions and judgement calls that were never formalised because the same person always handled them.

An illustrative example: an accounts payable clerk knows that one supplier sometimes sends the same invoice twice, once by email and once by post, and quietly checks for duplicates. Nothing in the system records that rule. When the clerk moves to another role, the check stops, and the first sign of the gap is a duplicate payment. Nobody did anything wrong; the control simply lived in a person rather than in the workflow.

## Move operating knowledge out of memory

Critical workflows should make their trigger, owner, required information, decision points and completion condition explicit. Documentation matters, but the strongest control is when the workflow itself carries state and accountability: the system shows what is waiting, for whom, since when, and what should happen next.

There is good evidence from operational disciplines that prepared procedures outperform improvisation. Google’s [Site Reliability Engineering book](https://sre.google/sre-book/introduction/) reports that thinking through and recording best practice in advance in a playbook produced roughly a threefold improvement in mean time to repair compared with “winging it”, and observes that a practised engineer with a playbook works much better than a lone expert relying on memory. That finding comes from incident response in software operations, but the principle transfers: recorded procedure lets a capable person who did not build the process still run it well.

## Design the exception path

Standard work is rarely the only work. A resilient process defines what happens when information is missing, a decision is overdue, a system fails or a case needs specialist judgement. Exceptions are where key-person dependency concentrates, because they are exactly the cases the experienced person used to handle informally. For each critical workflow, it is worth recording the common exceptions, who decides, and the reasoning behind the rule, so that a successor can apply judgement rather than guess. See [what business processes need documentation first](/insights/what-business-processes-need-documentation-first/).

## Separate role from person

Ownership should attach to a function or queue where practical, with named accountability layered on top. This reduces the risk that work disappears when a specific employee changes role. Practical forms include shared team queues instead of personal inboxes, cases assigned to a role that can be reassigned in one step, and a named backup owner for each critical workflow. Automation tools support this: in Power Automate, [adding an owner to a cloud flow](https://learn.microsoft.com/en-us/power-automate/create-team-flows) lets others edit it, and when an owner is removed the connection credentials they used must be updated so the flow keeps running.

This complements, rather than replaces, people planning. The CIPD’s [succession planning factsheet](https://www.cipd.org/uk/knowledge/factsheets/succession-planning-factsheet/) describes succession planning as preparing to fill key roles effectively if an employee leaves or changes role, and notes that business-critical roles exist at all levels, not only in senior leadership. Workflow design is the systems side of the same concern: even with a good successor in place, they need a process they can pick up. For the wider pattern, see [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## Warning signs

- Colleagues say “ask Sam” more often than “check the system”.
- Holidays for certain people are planned around the work rather than the other way round.
- Work in progress is tracked in personal spreadsheets or inboxes.
- Handover notes are written only when someone resigns.
- The same person is copied into every unusual case.
- Nobody else has run the month-end, payroll or a key customer process in the past year.

## A step-by-step approach

1. **Identify critical workflows.** Rank processes by the consequence if they stopped for two weeks: customer impact, cash, compliance.
2. **Run an absence test.** For each, ask what would happen if the usual person were unavailable tomorrow. Who would know what is waiting? Who would know the exceptions?
3. **Capture the skeleton.** Record the trigger, the stages, the owner of each stage, the information required and what “done” means.
4. **Move work into shared structures.** Replace personal trackers and inboxes with a shared queue or system record that shows status and history.
5. **Record exceptions and reasons.** Document the common exceptions and why each rule exists, not just what it is.
6. **Rehearse.** Have the backup owner run the process for a real cycle while the usual owner is still available to answer questions.
7. **Review on change.** Update the workflow when systems, rules or people change, not on a fixed annual cycle that is easy to skip.

## Trade-offs

Over-formalising a process can slow it down and frustrate the people who run it well. Documentation that is separate from the work tends to go out of date; see [why automation documentation matters](/insights/why-automation-documentation-matters/) for the same problem in automated processes. Some knowledge, such as relationships and seasoned judgement, cannot be fully transferred and should be developed through shadowing rather than written down. The aim is not to make people interchangeable. It is to make sure the workflow does not collapse when one of them is away.

## What better looks like

A capable replacement can understand what is happening, what is waiting, and what to do next without reconstructing the process from inboxes and tribal knowledge. Work sits in shared queues with clear states. Exceptions and the reasons behind them are recorded. Every critical workflow has a backup owner who has actually run it. Handoffs do not depend on memory; see [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/).

If key workflows depend on a few individuals, [Digital Operations Improvement](/services/digital-operations-improvement/) can redesign them so that state, ownership and exceptions live in the system, and [Managed Digital Operations](/services/managed-digital-operations/) can keep them current as people and tools change.
