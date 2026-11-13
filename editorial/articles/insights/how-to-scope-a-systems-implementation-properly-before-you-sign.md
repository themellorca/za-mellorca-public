---
hub: insights
record_id: INS-355
slug: how-to-scope-a-systems-implementation-properly-before-you-sign
title: How to scope a systems implementation properly
description: Most implementation overruns are scoping failures that surface later as change requests. How to define what a project includes, excludes and depends on.
lead: Most implementation overruns are scoping failures that surface later as change requests. A practical way to define what a systems project includes, excludes and depends on before a contract is signed.
category: Systems Implementation
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Systems Implementation
sources:
  - - Atlassian | https://www.atlassian.com/agile/project-management/project-scope
  - Plan a a Dynamics 365 implementation strategy - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
related:
  - When a spreadsheet is a useful tool—and when it becomes infrastructure | /insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/
  - How to measure whether software is paying for itself | /insights/how-to-measure-whether-software-is-paying-for-itself/
  - Why giving AI access to more systems is not automatically better | /insights/why-giving-ai-access-to-more-systems-is-not-automatically-better/
  - What belongs in an implementation plan | /insights/the-parts-of-a-sound-systems-implementation-plan/
summary: Most implementation overruns are scoping failures that surface later as change requests. A practical way to define what a systems project includes, excludes and depends on before a contract is signed.
layout: plain
---
When a systems implementation runs over budget, the explanation usually offered is that the project was more complicated than expected. More often the project was never properly bounded. The quote covered the software and some configuration, the business assumed it also covered data clean-up, integration with the accounting package and staff training, and the gap was discovered halfway through. Scope is where those assumptions are either surfaced or buried.

Scoping is not an administrative step before the real work. It is the real work of deciding what problem is being solved, what will change, and what will not. This article sets out a practical method for small and mid-sized South African businesses that are buying or commissioning a new ERP, CRM, stock, payroll or workflow system.

> A scope is not a list of features. It is an agreement about which business outcomes the project is accountable for, and which it is not.
>

## Start with the outcome, not the product

A scope that begins with “implement system X” has already assumed the answer. Begin instead with the business result and how it will be recognised. For example: quotes go out within four hours rather than two days, month-end closes in five working days, or stock counts reconcile to the ledger without a manual spreadsheet. Each outcome should have a measure and an owner on the business side.

Microsoft's implementation guidance for its business applications argues for a process-focused approach, where the solution is built around the business processes that matter rather than around a list of functions. That idea applies to any platform. If the processes in scope are not named, the project has no stable edge. The reasoning behind building configuration on workflow is set out in [why software configuration should follow workflow design](/insights/why-software-configuration-should-follow-workflow-design/).

## Define the boundary: in, out and not yet

A useful scope document has three lists, not two. The third is what prevents most arguments later.

- **In scope:** the processes, departments, sites, entities and user groups the project will deliver for.
- **Out of scope:** things that might reasonably have been expected but are explicitly excluded, such as the warehouse module, a second legal entity or historical reporting.
- **Not yet:** items deliberately deferred to a later phase, with a note of what must be true before they start.

The Atlassian description of project scope makes the same point about the importance of stating what a project will and will not deliver, and treating changes to that boundary as decisions rather than drift. “Integration with other systems” is too vague to be useful. “A one-way nightly export of invoices to the accounting package, with no bank feed” can be priced and tested.

## Map the current process before you design the future one

Scope cannot be accurate without knowing how work currently flows. Walk through the actual process, including the exceptions: the customer who pays on a different cycle, the supplier invoiced in dollars, the approval that happens by phone. Hidden steps are the most reliable source of scope growth, because they only appear once someone tries to configure the system to match reality. A short method is given in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/).

It also helps to decide, for each process, whether the system is meant to reproduce the current method or replace it. A fit-to-standard approach, in which the business compares what the software does as delivered with what it needs and customises only where the gap is real, tends to keep scope and cost under control.

## List the data and the integrations explicitly

Two items are routinely under-scoped: data and integration.

**Data.** Decide what is migrated, from where, and to what standard. Moving ten years of customer records that contain duplicates, missing VAT numbers and abandoned accounts will import the problems with the data. Settle who cleans it, who approves it, how much history is brought across, and what is archived instead. Because customer and supplier records are personal information, the migration also needs to respect POPIA, including a decision on what should not be carried over at all.

**Integration.** For every connection to another system, state the direction, the frequency, the fields, and which system is the authority for them. Questions of ownership are covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/), and a checklist of what to record appears in [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/). A vendor quote that says “integration included” without these details is not a scope.

## Include the work around the software

The software is typically the smaller part of the effort. The scope should account for activities that do not appear in a licence quote:

1. Business analysis and process design, including time from your own staff.
2. Configuration, testing and user acceptance, with named testers who have time set aside.
3. Training, in a form and at times that suit shift workers and part-time staff.
4. Cutover planning, including what happens to transactions in flight on the switch-over date.
5. Support during the first weeks after go-live and the handover to whoever runs the system afterward.

Also scope your own internal capacity. A system project that depends on the finance manager contributing two days a week fails if that person is also closing the year-end. Many problems that appear after launch are traced to skipped handover and unowned support, as discussed in [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).

## Name the assumptions and dependencies

Every scope rests on assumptions, and unstated assumptions are the commonest cause of disputes. Record them. Examples include that the existing network can support a cloud system, that the supplier will make an API available, that users already hold the licences required, or that a particular decision-maker will approve designs within five working days. In South Africa, add connectivity at branch sites and backup power for critical workstations.

For each assumption, ask what happens if it is wrong, and who is responsible for finding out.

## Set acceptance criteria and a change process

A scope needs a definition of finished. Write acceptance criteria for each deliverable in terms someone can test: “a sales order can be created, approved and invoiced by the sales team without manual re-entry” is testable, while “sales module configured” is not. Agree who signs off and what evidence they will look at.

Then agree how changes will be handled before anyone requests one. A simple rule works: any change is written down, assessed for effect on cost, timeline and other deliverables, and approved by a named person on both sides before work starts. This does not prevent change. It makes change visible, which is the difference between a managed project and a drifting one. The risk of unmanaged adjustments after launch is discussed in why uncontrolled configuration changes create operational risk.

## Phase the work and keep the first phase small

Large, single-release scopes are more fragile than staged ones. A phased scope that delivers one process end to end, proves it in live use and then moves to the next gives the business learning at each step and a natural stopping point if priorities change. Microsoft's implementation guidance on [implementation strategy](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy) describes the benefit of choosing an approach and rollout pattern deliberately, based on risk and complexity, rather than defaulting to a single go-live. For a practical view of staging, see [how to implement a new business system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/).

## An illustrative example

The following is a hypothetical case. A Cape Town building-supplies firm buys a new stock and invoicing system and receives a quote that lists “implementation, data migration and training”. Before signing, the operations manager runs a scoping session. It turns up three items the quote did not cover: roughly 4,000 duplicate stock codes, a nightly export that the branch accountant depends on, and a credit-limit check done by phone.

The firm adds a data clean-up task owned by the stores supervisor, lists the export as in scope, and defers the credit-check automation to phase two with a note of what it requires. The price rises modestly at the outset, but the project avoids the three change requests that would otherwise have arrived in the middle of the rollout.

## Questions to ask before signing

- Which business outcomes is this project accountable for, and how will we measure them?
- Are the in-scope, out-of-scope and deferred items written down?
- Are data migration and each integration specified in detail, with an owner?
- Does the plan include testing, training, cutover and post-go-live support?
- Have we scoped our own staff time, and has it been cleared with their managers?
- Do we have acceptance criteria and a change process that both sides have agreed?

Proper scoping takes days and is often resisted because it feels like delay. It is the cheapest part of the project to get right, and the part that becomes most expensive when it is skipped.
