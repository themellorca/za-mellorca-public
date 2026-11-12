---
hub: insights
record_id: INS-329
slug: how-to-move-operational-knowledge-out-of-peoples-heads
title: How to Move Operational Knowledge Out of People's Heads
description: Every business has knowledge that exists only in one person's head. How to find the knowledge that would hurt most to lose, capture it in a usable form, and keep it current.
lead: Every business has knowledge that exists only in one person's head. How to find the knowledge that would hurt most to lose, capture it in a usable form, and keep it current.
category: Operating Model
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Operating Model
sources:
  - Knowledge Management in ITSM: Process & Benefits - Atlassian | https://www.atlassian.com/itsm/knowledge-management
  - Operational excellence quick links - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
related:
  - How to Make Ownership Clear at Every Stage | /insights/how-to-make-ownership-clear-at-every-stage/
  - Why Every Systems Improvement Project Needs a Current-State Map | /insights/why-every-systems-improvement-project-needs-a-current-state-map/
  - How to Stop Sales-to-Delivery Handoffs From Breaking | /insights/how-to-stop-sales-to-delivery-handoffs-from-breaking/
summary: Every business has knowledge that exists only in one person's head. How to find the knowledge that would hurt most to lose, capture it in a usable form, and keep it current.
layout: plain
---
Every business has a layer of knowledge that exists nowhere except in someone's head. How to reissue an invoice when the accounting package rejects a customer record. Which supplier needs a phone call rather than an email. Why the Tuesday report is always rerun on Wednesday. The person who knows these things is usually helpful, quick and indispensable, and that is exactly the problem.

Moving that knowledge out of people's heads is not about distrust, and it is not a documentation project for its own sake. It is about making the business able to run when a particular person is on leave, ill, promoted or resigned. This article explains how to find the knowledge that matters, capture it in a form people will use, and keep it from going stale.

## Start with what would hurt, not with everything

The most common mistake is to announce a company-wide documentation drive. Staff produce long documents about things everyone already knows, and the genuinely risky knowledge stays untouched. A better starting point is a simple question asked about each role: "If this person were unreachable for two weeks, what would stop or go wrong?"

The answers fall into a few recognisable groups:

- **Recurring tasks only one person performs**, such as month-end journals, payroll runs or the weekly stock reconciliation.
- **Workarounds** that compensate for a limitation in a system, such as exporting a report, editing it in Excel and uploading it again.
- **Relationship knowledge**, such as which customer contact approves orders, or which municipal official actually processes a permit.
- **Access and credentials**, meaning who holds the administrator login for the website, the domain name or the bank profile.
- **Judgment calls**, such as when a late order is acceptable and when it triggers an escalation.

List these by role and rank them by the damage a two-week absence would do. Start with the top five. That is a project a small team can finish in a month.

## Match the capture method to the type of knowledge

Not all knowledge can be captured the same way. Treating a judgment call like a checklist produces a useless checklist, and treating a routine task like a mystery wastes everyone's time.

| Type of knowledge | Best way to capture it |
| --- | --- |
| Repeatable task with fixed steps | Short written procedure with screenshots, or a recorded screen walkthrough |
| Workaround for a system limitation | A written note stating the problem, the steps and the proper fix, which is to remove the need for the workaround |
| Relationship and context | Entries on the customer or supplier record, and a joint handover meeting |
| Access and credentials | A managed password vault with named owners, never a spreadsheet or a message thread |
| Judgment and decision rules | A short statement of the rule, the exceptions and two or three worked examples |

The workaround row deserves a second look. A documented workaround is better than an undocumented one, but it is still a symptom. The wider pattern is covered in [why repeated workarounds are a warning sign](/insights/why-repeated-workarounds-are-a-warning-sign/).

## Capture knowledge while the work is happening

Asking an expert to sit down and write everything they know is slow, unpopular and unreliable. People forget the steps they perform automatically. The more dependable approach is to capture the knowledge as the work is done.

1. **Shadow and record.** A colleague performs the task while the expert does it, and writes down each step as it happens. Questions asked during the task surface the hidden steps.
2. **Reverse the roles.** The colleague performs the task using the draft instructions while the expert watches silently. Every time the expert wants to intervene, the instruction is missing something.
3. **Use short screen recordings.** A five-minute narrated recording of a process often captures more than a page of text, and costs the expert far less effort.
4. **Capture at the point of failure.** When something goes wrong and the expert fixes it, the fix is written up that day, while the details are fresh.

Step two is the real test. Documentation that has never been used by someone other than its author is a draft, not an asset.

## Store it where people will actually look

Knowledge that is captured but not findable has not been transferred. Choose one home for operational knowledge and make it the only home. A shared drive with thirty folders, a wiki nobody has opened since the last reorganisation and a notebook on someone's desk is the same problem repeated three times.

Atlassian's guidance on knowledge management in IT service teams describes the aim as capturing, organising, sharing and maintaining what a team knows so that people can find a verified answer instead of rediscovering it. The important word is maintaining. A knowledge base is a process, not a place.

Practical rules that help:

- Name each article by the question someone would ask, such as "How to reissue a rejected invoice", not by an internal label.
- Link the procedure from the system or workflow where the task happens, so it is one click away at the moment of need.
- Put the owner's name and a last-reviewed date at the top of every page.
- Keep each page to one task. Long manuals are rarely read to the end.

## Give every document an owner and a review date

Documentation decays. The software is updated, the supplier changes, the form gets a new field, and the written procedure now describes a process that no longer exists. Stale instructions are worse than none, because people follow them with confidence.

Assign each page to a named owner, normally the person who performs the task most often. Set a review interval based on how often the task changes: quarterly for tasks tied to software that updates often, annually for stable ones. When a procedure is used and found wrong, the user corrects it at once or flags it to the owner. This is the same discipline as [automation documentation](/insights/why-automation-documentation-matters/), applied to human processes.

## Do not forget the knowledge inside your systems

Some of the most dangerous undocumented knowledge sits in software configuration rather than in people: why a workflow rule exists, which fields feed which report, what an automation does when a record fails. The person who built it remembers. Nobody else does.

Microsoft's guidance on formalising operational tasks in its operational excellence material makes the same point in a technical setting: repeatable operations should be standardised and written down rather than left to individual habit. For a business, a brief description of each automation, its trigger, what it changes and who to call when it breaks, is enough. The risk when this is missing is described in [what happens when the only person who understands the system leaves](/insights/what-happens-when-the-only-person-who-understands-the-system-leaves/).

## Make sharing safe and rewarded

Staff sometimes hold on to knowledge because it protects their position. That is a rational response to a workplace in which being irreplaceable feels like job security. If documentation is presented as the first step towards replacing someone, it will be resisted or done badly.

Present it differently, and mean it. The person who documents their work is the person who can take leave without being phoned, move into a new role without being pulled back, and train others without repeating themselves. Recognise the people who contribute, make documentation part of normal working hours, and never use a written procedure as the basis for a redundancy conversation. The wider point is that this is a design problem, not a character problem, as discussed in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## Handle personal information carefully

Operational knowledge often includes customer and employee details. When you write down who approves what, or how a particular client likes to be handled, keep personal information out of general documents and in the systems designed to protect it. South Africa's Protection of Personal Information Act applies to how that information is stored and shared, and a shared page open to every employee is rarely the right place for it.

## An illustrative example

The following is a hypothetical case. A Cape Town wholesale distributor relies on one administrator, Pieter, for its weekly supplier payment run. He exports a list from the accounting system, removes accounts on hold by comparing it against a separate spreadsheet, and uploads the result to the bank. Nobody else has seen him do it.

The company asks which task would cause the most damage in a two-week absence, and the payment run tops the list. A colleague shadows Pieter for two cycles, writing every step, including the hold-list check he had never mentioned. She then runs a cycle using only the notes while he watches, and finds three missing steps. The final procedure is two pages, stored in the shared knowledge base, linked from the payment workflow and reviewed every quarter. A month later Pieter is ill, and the payments go out on time.
