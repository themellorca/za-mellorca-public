---
hub: insights
record_id: INS-357
slug: how-to-prevent-requirements-from-growing-without-control
title: How to Prevent Requirements From Growing Without Control
description: Requirements growth is normal; uncontrolled growth is not. A single visible list, one decision-maker and a stated trade-off for every change keep a project on its outcome.
lead: Requirements growth is normal; uncontrolled growth is not. A single visible list, one decision-maker and a stated trade-off for every change keep a project on its outcome.
category: Systems Implementation
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Systems Implementation
sources:
  - Agile methods: an introduction | https://www.gov.uk/service-manual/agile-delivery/agile-methodologies
  - SP 800-128, Guide for Security-Focused Configuration Management of Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/128/upd1/final
  - The Technology Code of Practice | https://www.gov.uk/guidance/the-technology-code-of-practice
related:
  - What Belongs in an Implementation Plan | /insights/the-parts-of-a-sound-systems-implementation-plan/
  - Why business systems need ongoing stewardship | /insights/why-business-systems-need-ongoing-stewardship/
  - Why uncontrolled configuration changes create operational risk | /insights/why-uncontrolled-configuration-changes-create-operational-risk/
summary: Requirements growth is normal; uncontrolled growth is not. A single visible list, one decision-maker and a stated trade-off for every change keep a project on its outcome.
layout: plain
---
A project to replace a quoting spreadsheet starts with a one-page brief. Six weeks in, the brief has grown to include customer self-service, a dashboard for the directors, an approval route for discounts above a threshold and a link to the accounting package. Each addition was reasonable when it was raised. None was priced, and nobody can now say what the project was supposed to deliver on the day it began.

This is requirements growth, often called scope creep. It is rarely caused by one bad decision. It is caused by the absence of a place where decisions are made. This article sets out a lightweight way to keep requirements under control in a small or mid-sized business, without importing a heavyweight project office.

## Growth is normal, uncontrolled growth is the problem

Requirements should change. People learn what they need only by seeing the work take shape, and a rigid specification that ignores that learning produces software nobody wants. The aim is not to freeze the list. The aim is to make every change a visible decision with a known cost, taken by someone with the authority to take it.

Uncontrolled growth has a recognisable shape. Requests arrive through side channels, such as a message to the developer, a comment in a meeting or a hallway conversation with the implementer. They are accepted because saying yes is easier than saying not now. They are never recorded, so the total effect is invisible until the deadline moves or the invoice grows. The person who asked is satisfied, and the person who pays has not been asked.

## Write the outcome before the feature list

The strongest defence against creep is a short statement of the outcome the project exists to achieve, in terms the business would recognise. "Quotes go out within one working day with correct pricing" is an outcome. "A quote builder with twelve configurable fields" is a feature list. When a new request arrives, you can then ask a plain question: does this help us reach the outcome, or does it serve a different outcome that deserves its own decision?

Agile delivery guidance from the UK government service manual describes Lean as a method that helps teams focus on [reducing waste, delivering quickly, learning and improving, and using evidence and data to make decisions](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies). The last of these is useful for requirements. A request backed by evidence of a real problem, such as a count of rework hours or complaints, earns more attention than one backed by enthusiasm.

## Keep a single, visible list

Every requirement, whether original or newly raised, goes onto one list that the whole project group can see. Each entry needs only five things: who asked, what outcome it supports, a rough size, its status and the decision made. The statuses can be as simple as proposed, accepted for this release, deferred, and declined. Entries are never deleted. A declined request with a recorded reason saves you from having the same argument in three months.

The discipline of having one list matters more than the tool that holds it. A shared spreadsheet is fine. What is not fine is a list in the supplier's system, a different list in the sponsor's notebook and a third in email. If you cannot find out what has been agreed in under a minute, you do not control the scope. This connects directly to the groundwork described in our guide to [scoping a systems implementation properly before you sign](/insights/how-to-scope-a-systems-implementation-properly-before-you-sign/), where the contract should refer to the same list.

## Decide who can say yes

Most creep survives because several people can approve changes informally. Name one person, usually the project sponsor or the owner of the process being changed, who has final say on scope. Name a second person who can decide small items within a stated limit, for instance anything under half a day of effort that does not touch an interface to another system. Everything else goes to the sponsor, with the cost and the trade-off attached.

The trade-off is the heart of it. A change is rarely free, so each approval should state what it displaces. Either the date moves, the budget moves, another item leaves the release, or the sponsor accepts a quality risk knowingly. When the person who wants the change must also name what gives way, requests become sharper and fewer.

## Treat configuration and interfaces as higher risk

Not all requirements are equal. A new report is easy to add and easy to remove. A new field that feeds another system, a new approval step or a change in how a record is created touches workflows and data elsewhere. Configuration changes in particular deserve a light but real review. NIST's guidance on configuration management describes [managing and monitoring system configurations to minimise risk while supporting the desired business functionality](https://csrc.nist.gov/pubs/sp/800/128/upd1/final), which is a useful frame even for a small firm. Ask three things of any change: what else does it affect, how would we undo it, and who has to be told?

For this reason, we suggest tagging each requirement as presentation, process or interface. Presentation changes can be approved quickly. Process and interface changes should pass through the sponsor and be written into your handover documentation, as discussed in [why software configuration should follow workflow design](/insights/why-software-configuration-should-follow-workflow-design/).

## Release in small pieces

Long projects invite growth because the finish line is far away and every stakeholder fears they will not get another chance. Shorter releases remove that fear. If a request will be considered at the next release in three weeks, it is easier to defer without anger. The same service manual page notes that Kanban can help teams [control the amount of work they are doing and predict their output based on actual delivery](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies). The government's Technology Code of Practice page also offers help with [designing an appropriate strategy for breaking up large systems and services](https://www.gov.uk/guidance/the-technology-code-of-practice), which is the same instinct applied to purchasing. Limiting work in progress is a plain way to stop everything starting and nothing finishing.

Smaller releases also provide evidence. When the first piece is in use, people can tell you what they genuinely need, which is often less than what they asked for, or different from it. Requirements that survive contact with real use are the ones worth building.

## Review the list at a fixed moment

Hold a short scope review at a regular point, weekly for a fast project and fortnightly for a slower one. The agenda is simple: what was added, what was dropped, what has the total changed by, and are we still pursuing the original outcome. Track the number of accepted additions against the original baseline. If the list has grown by a third, that is a signal to stop and re-plan with the supplier rather than carry on quietly. Handoffs between people and teams are where unrecorded changes slip through, which we discuss in [why integration projects fail at the handoffs](/insights/why-integration-projects-fail-at-the-handoffs/).

## Practical next actions

1. Write the project outcome in one sentence that a non-technical director would recognise, and print it at the top of the requirements list.
2. Consolidate every request from email, meetings and supplier tools into one shared list with columns for requester, outcome supported, rough size, status and decision.
3. Name one person with final authority over scope and a second person who may approve small changes under a stated effort limit.
4. Require each approved addition to state what moves: date, budget, another item or an accepted risk, and record that statement beside the entry.
5. Tag every requirement as presentation, process or interface, and send the last two through a short review that asks what it affects and how it would be undone.
6. Book a recurring scope review, count additions against the original baseline, and trigger a re-plan if the list has grown by about a third.

Control does not mean refusing change. It means every change is seen, priced and chosen, which is the difference between a project that adapts and one that drifts.
