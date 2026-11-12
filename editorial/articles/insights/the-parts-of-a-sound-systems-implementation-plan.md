---
hub: insights
record_id: INS-356
slug: the-parts-of-a-sound-systems-implementation-plan
title: What Belongs in an Implementation Plan
description: An implementation plan is more than a timeline. What it should contain so a new system or automation is rolled out with clear scope, owners, testing, cut-over and a plan for what comes after go-live.
lead: An implementation plan is more than a timeline. What it should contain so a new system or automation is rolled out with clear scope, owners, testing, cut-over and a plan for what comes after go-live.
category: Systems Implementation
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Systems Implementation
sources:
  - How to Do Project Planning? - The Workstream | https://www.atlassian.com/work-management/project-management/project-planning
  - https://www.atlassian.com/agile/project-management/raci | https://www.atlassian.com/agile/project-management/raci
  - Architecture strategies for safe deployment practices - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments
related:
  - How to Prevent Requirements From Growing Without Control | /insights/how-to-prevent-requirements-from-growing-without-control/
  - What a Good Workflow Map Should Show | /insights/what-a-useful-workflow-map-contains-and-what-it-leaves-out/
  - How to Build a Maintenance Plan for Business Automations | /insights/a-maintenance-plan-for-the-automations-you-already-run/
summary: An implementation plan is more than a timeline. What it should contain so a new system or automation is rolled out with clear scope, owners, testing, cut-over and a plan for what comes after go-live.
layout: plain
---
When a business buys a new system, the vendor usually supplies a plan. It is a timeline with a few milestones: kick-off, configuration, training, go-live. The dates look reassuring, and the plan is signed. Months later, the project is late, the scope has crept, nobody is sure who was meant to supply the customer data, and the go-live date has been moved twice. The timeline was never the plan. It was one page of it.

An implementation plan is the document that answers, before work begins, what is being done, by whom, in what order, how it will be checked, what happens if it goes wrong, and who looks after the result. This article lists what belongs in it.

## Why a timeline is not enough

Atlassian's guide to project planning describes planning as identifying, prioritising and assigning the cost, scope and schedule needed to complete a project. It stresses that a plan is more than tasks and dates, and suggests it should begin by documenting the goals, stakeholders, budget, deliverables, team roles, milestones and who gives final approval. Notice how little of that is a calendar. A timeline answers "when". Most implementation trouble comes from the unanswered questions of "what exactly", "who decides" and "what if".

## The components of a sound plan

### 1. Purpose and measures of success

Begin with a short statement of the problem the system must solve and how you will know that it has. "Replace the old stock system" is an activity. "Cut stock-count differences at month-end from around forty lines to under ten" is a purpose. Write down two or three measures and the figures you have today, since without a starting point nobody can later show the project worked. The thinking behind this is in [how to build a business case for systems improvement](/insights/how-to-build-a-business-case-for-systems-improvement/).

### 2. Scope: in, out and later

List what is included, what is excluded and what is deliberately postponed. The exclusion list prevents the most arguments. If reports, integrations with the bank or historical data migration are not in the first phase, say so in writing. For the groundwork, see [how to scope a systems implementation properly before you sign](/insights/how-to-scope-a-systems-implementation-properly-before-you-sign/).

### 3. Roles and decisions

Name the people. Atlassian's description of the RACI model is a useful frame: for each activity, identify who is responsible for doing it, who is accountable, who must be consulted and who needs to be informed. Include roles on your side, not just the vendor's. Someone in the business must own the project, someone must supply and approve data, someone must make decisions about how the process will work, and someone must be able to say no to a change in scope. Name a deputy for each. The wider principle appears in [how to make ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/).

### 4. The work, in order, with dependencies

Now the timeline. Break the work into stages and show what depends on what. Data cannot be loaded before it is cleaned, users cannot be trained before the system is configured, and nothing can go live before it is tested. Mark the tasks for which the business, not the vendor, is the bottleneck: supplying product lists, approving designs, attending workshops. In practice, delays on the customer's side are among the commonest reasons projects slip.

### 5. Resources and cost

State the budget in Rand, including licences, configuration, data work, training, travel and contingency. Include the time of your own staff, who will be pulled from their normal jobs. A project that needs a finance clerk for two days a week for six weeks needs cover arranged before it starts. Where a supplier bills in dollars or euros, state the exchange rate assumed and what you will do if it moves.

### 6. Data migration

Moving records from the old system is often the biggest and least visible task. The plan should say which records come across, who cleans them, how the result will be reconciled and what happens to what is left behind. Poor data carried into a new system simply moves the mess. Personal information in those records remains subject to the Protection of Personal Information Act, so note who has access during the migration and where temporary copies are held and deleted.

### 7. Testing and acceptance

Describe how the system will be tested and by whom, using real examples from the business, not demonstration data. Define acceptance criteria in advance: for example, ten typical orders processed end to end with correct totals and tax. Say who signs off, and what happens if the test fails.

### 8. Training and change

Plan how users will learn the new process, not merely the new screens. Training should be scheduled close to go-live, use real tasks and include the people who will answer questions afterwards. Think about the awkward overlap period as well, when staff must work in both systems.

### 9. Cut-over and rollback

This section describes how the switch will happen: the date, the time of day, the freeze on changes to the old system, and the checks that must pass before you proceed. Microsoft's guidance on safe deployment practices emphasises small, incremental, quality-checked releases, and notes that every deployment carries risk and should follow a standard, consistent pattern. It also recommends halting a rollout and starting recovery as soon as issues are detected. Applied to a business system, that means choosing a quiet period, not month-end or a payroll week, and deciding in advance what would make you stop and go back. Account for load-shedding schedules, too: a cut-over on a Stage 4 evening with no power backup is a risk you can see coming.

### 10. Aftercare and ownership

Plan the weeks after go-live. Who fixes problems, how fast, and who pays? When does the vendor's hand-holding end? Who owns the system from then on? A plan that ends at go-live ignores the stage at which many implementations fail, the subject of [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).

### 11. Risks and assumptions

List the main things that could go wrong and what you will do about each, and write down the assumptions the plan relies on. If the plan assumes the old supplier will provide a data export by a certain date, that is a risk to chase on day one.

## How to use the plan

A plan is a working document. Review it weekly with the project owner, mark what is complete, and record every change to scope, date or cost with the reason and who approved it. A short change log stops the quiet drift that turns a six-week project into a six-month one. The practical sequence for rollout without upsetting daily trade is covered in [how to implement a new business system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/).

## An illustrative example

The following is a hypothetical case. A Pretoria building-supplies firm is moving to a new order and stock system. The vendor's plan lists four milestones. The firm's operations manager adds the missing parts. The success measures are fewer stock differences and invoices out on the day of delivery. Out of scope in phase one: the website integration. Four named roles are agreed, with deputies. A data clean-up of 6,000 product lines is scheduled three weeks before configuration is complete. Acceptance means fifteen real orders processed correctly. Cut-over is set for a Saturday after month-end, with the old system held read-only for ninety days, and a rollback decision to be made by 14:00. The weeks after go-live include daily check-ins for two weeks, and an owner is named.

The project still has problems, as projects do. But each problem lands on a named person with a defined next step, and the go-live happens once.

## The point

A timeline tells you when. An implementation plan tells you why, what, who, how it will be checked and what comes next. Write the parts down before signing the contract, share them with the vendor and the staff involved, and keep the plan current. It is the cheapest insurance an implementation can have.
