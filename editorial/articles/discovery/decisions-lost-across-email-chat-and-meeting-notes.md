---
hub: discovery
record_id: DISC-403
slug: decisions-lost-across-email-chat-and-meeting-notes
title: Decisions lost across email, chat and meeting notes
description: Project teams settle questions in meetings, threads and chats, then argue about them again weeks later. How a single decision log with context, outcome and owner stops repeat debates and delays.
lead: Project teams settle questions in meetings, threads and chats, then argue about them again weeks later. How a single decision log with context, outcome and owner stops repeat debates and delays.
category: Project, Delivery & Change Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Project, Delivery & Change Operations
problem_domain: Project, Delivery & Change Operations
problem_owner: PMO or delivery lead
budget_owner: COO or CIO
sources:
  - https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework | https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework
  - https://www.atlassian.com/software/confluence/templates/decision | https://www.atlassian.com/software/confluence/templates/decision
summary: Project teams settle questions in meetings, threads and chats, then argue about them again weeks later. How a single decision log with context, outcome and owner stops repeat debates and delays.
layout: plain
---
Illustrative example: six weeks into a warehouse system rollout at a Gauteng wholesaler, the project team argues again about whether returns will be processed in the new system from go-live or in phase two. The operations director is sure it was settled in a steering meeting. The project manager remembers a chat thread in which the vendor said it was not ready. The finance lead has an email saying returns would be in scope. Someone finds meeting notes that say "returns: discussed". Nobody can produce the decision, who made it, or why. The team spends a week re-deciding it, and the go-live date moves.

## The problem in plain language

Projects and operational changes produce many decisions: scope, priorities, design choices, exceptions, trade-offs and approvals. In most businesses those decisions are made in meetings, email threads and chat channels, and recorded, if at all, as a line in notes that only the note-taker sees. Weeks later, people remember different outcomes, new team members cannot find the reasoning and settled questions are reopened.

The failure is not that decisions are poor. It is that there is no single, trusted place where each significant decision is written down with its context, the options considered, the outcome, who agreed and what follows from it.

## What the buyer is actually trying to solve

The PMO or delivery lead wants to stop re-deciding things. They need a lightweight way to capture decisions as they are made, find them later, link them to the work they affect and show sponsors and auditors how and why key choices were reached. They also want new team members and vendors to be able to understand the history without a series of briefings.

## Evidence and system mechanism

### Government practice: a formal decision record

The UK government's [architectural decision record framework](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework) sets out a cross-government approach to documenting significant decisions so that they are visible, traceable and aligned with strategy across teams and programmes. It defines a decision record as a formal document capturing a significant decision, and lists the elements each record should contain: title, date, status, context, decision, consequences, stakeholders consulted and links to supporting documents. Although written for technology architecture, the structure applies to any project decision that people will later need to revisit.

### Collaboration tools offer decision templates

Workplace tools provide the same structure for everyday use. Atlassian's [decision template for Confluence](https://www.atlassian.com/software/confluence/templates/decision) captures the decision's status, stakeholders, background, options considered with pros, cons and costs, action items with named owners, and the final outcome, with a summary block showing status, impact, involved parties and due date. The existence of these templates in standard tools shows that the obstacle is rarely technology. It is the habit of recording decisions in a consistent place.

## Why this becomes urgent

Repeated delays are the usual trigger. When a project slips because the same question has been argued twice, or because work was built on an assumption that had been reversed, sponsors start asking how decisions are recorded. Other triggers include a change of project manager or vendor, an audit or post-implementation review that asks for the rationale behind key choices, and programmes in which several projects depend on shared decisions.

## Economic consequence

The direct cost is time: meetings spent reconstructing or reopening decisions, a cost described in [meeting decisions that are not recorded](/impact/meeting-decisions-not-recorded-repeated-debate-lost-context-cost/). Rework follows when teams build to different understandings. Delivery dates move. Accountability blurs, because nobody can show who agreed to a trade-off. Status reports look healthy while unresolved or contested decisions accumulate underneath, a pattern related to [project status staying green while work stalls](/discovery/project-status-stays-green-because-teams-report-activity-not-outcomes/). The wider cost of running work through inboxes is covered in [running business processes through email threads](/patterns/the-cost-of-running-business-processes-through-email-threads/).

## Root cause

- **No agreed definition of a significant decision.** Teams do not know which decisions must be recorded.
- **No single decision log.** Each forum keeps its own notes, in its own tool.
- **Notes record discussion, not outcomes.** Minutes say what was talked about rather than what was decided and by whom.
- **Chat feels final but is not findable.** Agreements in chat threads are hard to search and lack context.
- **Nobody owns the log.** Without a named owner, recording depends on goodwill.

## What good looks like

Each project or change programme keeps one decision log, owned by the delivery lead or PMO. The team agrees what counts as a significant decision, such as anything affecting scope, cost, timeline, risk or design. Each entry records the date, context, options, outcome, decision-maker, people consulted, status and consequences, with links to supporting documents. Decisions made in meetings, email or chat are entered in the log within a day, and the log entry, not the conversation, is treated as the reference. Superseded decisions are marked rather than deleted. Steering meetings start by confirming new entries.

## Diagnostic questions

- For the last three scope changes on your main project, can you show who decided and why within five minutes?
- How many meetings in the past month revisited a question the team believed was settled?
- Where would a new vendor or project manager look to understand past decisions?
- Do meeting notes record outcomes and owners, or only discussion?
- Who is responsible for keeping the decision record current?

## Practical next actions

1. Agree a short definition of a significant decision for your projects and share it with project teams and sponsors.
2. Create one decision log per project using a standard template with context, options, outcome, decision-maker, status and links.
3. Assign an owner for each log and set the rule that decisions are recorded within one working day.
4. Back-fill the log with the ten most important decisions already taken, confirming each with the people involved.
5. Start each steering meeting by reviewing new and changed decision entries.
6. After three months, count reopened decisions and decision-related delays to see whether the log is working.

## Where Mellorca fits

Mellorca helps delivery teams set up decision logs and governance routines that fit their existing tools, and links decisions to plans, risks and status reporting so that they stay visible. This work sits within [digital operations improvement](/services/digital-operations-improvement/).

## Method note

The opening example is illustrative. The UK government framework is used as a published public-sector model for decision records, and Atlassian's template as an example of a vendor tool; other collaboration platforms offer similar structures, and the right level of formality depends on the size of the project.
