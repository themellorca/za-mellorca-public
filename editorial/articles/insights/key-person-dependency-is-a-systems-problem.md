---
hub: insights
record_id: INS-326
slug: key-person-dependency-is-a-systems-problem
title: Key-person dependency is a systems problem.
description: When critical operating knowledge lives in one person's head, the business is fragile. How documentation, ownership and system design reduce that risk.
lead: When one person is the only reliable source of process knowledge, system logic, exceptions or recovery steps, the business does not merely have an important employee. It has an undocumented operational dependency.
category: Digital Operations
published_date: 2026-08-31
updated_date: 2026-08-31
eyebrow: Article
page_title: Key-Person Dependency Is a Systems Problem | Mellorca
tags:
  - Digital Operations
  - Documentation
  - Resilience
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
side_text: Related service: [Digital Operations Improvement](/services/digital-operations-improvement/).
sources:
  - ISO 22301 - Wikipedia | https://en.wikipedia.org/wiki/ISO_22301
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Business Continuity Planning | https://www.ready.gov/business-continuity-plan
  - What Is Knowledge Management? - IBM | https://www.ibm.com/think/topics/knowledge-management
related:
  - Why business systems need ongoing stewardship | /insights/why-business-systems-need-ongoing-stewardship/
  - Why recurring systems maintenance is cheaper than emergency repair | /insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/
  - How to know whether your business depends too much on one person | /insights/how-to-know-whether-your-business-depends-too-much-on-one-person/
---
Every growing business has people who know more than everyone else.

They remember why a CRM field matters. They know which customer exceptions need approval. They can repair the spreadsheet when the formulas break. They know which integration fails after a particular kind of record is created. They understand the unwritten sequence that gets a difficult case through operations.

That knowledge is valuable. The risk begins when the business cannot operate reliably without access to that individual.

> The goal is not to make good people less important. It is to stop essential operating knowledge from existing only in individual memory.
>

## What key-person dependency looks like in digital operations

The dependency is often visible through ordinary behaviour rather than a formal risk register.

- Work stops when a particular person is on leave.
- People route unusual cases directly to one employee instead of through a defined process.
- Only one person knows how an important report is assembled.
- System changes cannot be made because nobody else understands the dependencies.
- An automation exists but its logic is not documented.
- Teams rely on private spreadsheets, bookmarks or notes maintained by one person.
- When something fails, recovery begins by asking, “Who knows how this works?”

These patterns are usually treated as staffing or training problems. Often they are also systems-design problems.

A familiar example: a 45-person logistics broker in Kempton Park where the operations manager, Lerato, built the rate spreadsheet, configured the CRM pipeline stages and set up the automation that sends delivery confirmations to clients. When she took three weeks’ leave in December, quotes slowed because nobody trusted the spreadsheet’s surcharge logic, and the confirmation automation failed after a carrier changed its file format. Two colleagues spent days reconstructing what Lerato would have fixed in an hour. The business did not lack skill; it lacked access to knowledge that only she held. The commercial side of this is set out in [the cost of key-person operational dependency](/impact/key-person-operational-dependency/).

## The business has encoded logic in a person

Every operating system contains rules: who acts, which information is needed, what happens next, what qualifies as an exception and how the exception is handled.

If those rules are not represented in workflows, documentation, system configuration or visible ownership, they still have to live somewhere. They often live in the memory of experienced employees.

That can work surprisingly well while the team is small. People communicate informally. The knowledgeable employee notices problems before they escalate. Work is recovered through experience.

Growth changes the economics. More people, customers, tools and handoffs make it harder for one person’s memory to act as the control layer for the operation.

[IBM’s overview of knowledge management](https://www.ibm.com/think/topics/knowledge-management) draws a helpful distinction between tacit knowledge, gained through experience and hard to articulate, and explicit knowledge, which is written down and easily shared. Key-person risk sits mostly in the tacit category, which is why simply asking someone to “write it all down” rarely works on its own.

## How to diagnose your dependencies

A short, honest exercise will show where the exposure is:

1. List the ten processes, reports and systems the business could least afford to stop for a week.
2. For each, name who can perform it, who can fix it when it breaks, and who could change it safely.
3. Highlight every row where the same single name appears in all three columns.
4. Ask those people what they would worry about if they were away for a month. Their answers are your first documentation list.
5. Check access: does anyone else hold the credentials, licences and administrator rights for those systems?

The last step often reveals the sharpest risk. A process can be well understood and still be unrecoverable if only one person can log in to fix it. When owners leave without handing over, the gap can become permanent; see [when application owners leave without transfer](/discovery/application-owners-leave-without-transfer/).

## Documentation is necessary, but a document alone is not enough

The obvious response to key-person dependency is “write an SOP.” That can help, but static documentation often fails because it describes an ideal process rather than the real operating environment.

Useful operational documentation should answer practical questions:

- What triggers the process?
- Which systems are involved?
- Who owns each stage?
- Which information is required?
- What are the common exceptions?
- What happens when a dependency fails?
- Which decisions require judgement?
- Who is the backup owner?

Where possible, important rules should also be built into the system itself. Required data can be validated. Ownership can be assigned automatically. Workflow states can make progress visible. Exception routes can be explicit. System runbooks can explain technical recovery.

The strongest design does not rely on someone remembering to consult a PDF before every action. For guidance on where to begin writing, see [what business processes need documentation first](/insights/what-business-processes-need-documentation-first/).

## Separate knowledge from judgement

Reducing key-person dependency does not mean trying to remove expertise from the business.

Some decisions genuinely require experience, negotiation or professional judgement. The objective is to separate that valuable judgement from avoidable memory work.

A senior operator should not be the only person who knows where a file belongs, how a routine case is routed or which field starts an automation. Their expertise is better used on the exceptions where judgement matters.

## Business continuity makes the underlying principle explicit

International business-continuity guidance provides a useful wider frame. [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) specifies requirements for a documented business continuity management system that helps an organisation prepare for, respond to and recover from disruptions, and that is monitored, reviewed and continually improved rather than assuming operations will continue because particular individuals happen to be available.

[NIST’s contingency-planning guide for information systems](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) places system recovery within wider organisational resilience and examines how it relates to other security and emergency plans. The US government’s Ready.gov business continuity guidance similarly sets out a process that includes organising team roles and responsibilities and testing the plan through exercises.

These frameworks are broader than ordinary operational documentation, but the principle translates directly: critical capability should be recoverable and understandable.

## Five layers for reducing key-person dependency

### 1. Visibility

Identify processes and systems where only one person can explain how work is actually done.

### 2. Ownership

Assign primary and backup ownership for important workflows, systems, integrations and recurring reports.

### 3. Documentation

Capture operating rules, exceptions, dependencies, recovery steps and reasons behind important design decisions. For automations in particular, see [why automation documentation matters](/insights/why-automation-documentation-matters/).

### 4. System design

Move repeatable rules into configuration, workflow logic, structured data and controlled automation where appropriate.

### 5. Practice

Test whether someone else can actually perform or recover the process. Documentation that only its author can use has not solved the dependency. A practical test is to have the backup owner run the process while the expert watches without helping, then fix whatever the backup could not find.

## Watch for dependency created by contractors too

The same problem can exist outside the organisation. A business may depend on one freelancer, agency or former employee who alone understands a critical integration or automation.

The commercial relationship is not the problem by itself. The problem is lack of organisational control: no documentation, no access inventory, unclear ownership, no handover and no realistic recovery path.

A well-managed external specialist can be valuable. A black box that the business cannot understand or transfer is operational risk.

## Trade-offs worth acknowledging

- **Time now versus risk later.** The people who hold the knowledge are usually the busiest. Protect a few hours a month for transfer, or it will not happen.
- **Depth versus currency.** Exhaustive manuals go out of date. Short, task-focused notes kept beside the system are easier to maintain.
- **Automation versus understanding.** Moving rules into automation reduces memory work, but an undocumented automation simply moves the dependency from a person to a black box.

## What better looks like

A resilient operation can lose access to an individual without losing access to the process.

Important systems have named owners. Key workflows are visible. Credentials and dependencies are controlled. Documentation is current enough to support real action. Exception handling is understood. Backup owners can step in. The business knows which areas still depend on specialist judgement and has made that dependency explicit.

People remain valuable because of what they contribute, not because the organisation has accidentally made itself unable to function without their memory.

## When to act

If holidays cause operational anxiety, new employees need months to discover undocumented rules, system changes are avoided because only one person understands the consequences, or recurring work stops when a specific employee is unavailable, treat the problem as more than training.

Map the dependency into the digital operating system and decide what knowledge should become visible, documented, controlled or automated.

### What to do first

Pick the single process where one absence would hurt most. Name a backup owner, make sure they hold working access, and have them run it once with the expert present. Record what they needed to ask, and turn those answers into the first page of documentation. Then design the handoff so it no longer relies on recall; [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) shows how.
