---
hub: insights
record_id: INS-352
slug: how-to-implement-a-new-business-system-without-disrupting-operations
title: How to Implement a New Business System Without Disrupting Operations
description: Replacing an accounting, CRM, stock or job-management system does not have to stop the business. How to choose a rollout approach, time the switch, rehearse the cutover, prepare people and keep a way back.
lead: Replacing an accounting, CRM, stock or job-management system does not have to stop the business. How to choose a rollout approach, time the switch, rehearse the cutover, prepare people and keep a way back.
category: Digital Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Digital Operations
sources:
  - Transition to new solutions successfully with the cutover process - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/prepare-go-live-cutover-strategy
  - Strangler Fig | https://martinfowler.com/bliki/StranglerFigApplication.html
  - The Prosci ADKAR® Model - Prosci | https://www.prosci.com/methodology/adkar
related:
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
  - What management cannot see usually becomes expensive | /insights/what-management-cannot-see-usually-becomes-expensive/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
summary: Replacing an accounting, CRM, stock or job-management system does not have to stop the business. How to choose a rollout approach, time the switch, rehearse the cutover, prepare people and keep a way back.
layout: plain
---
Many growing businesses know they have outgrown a system and still put off replacing it. The accounting package is straining, the CRM is half-used, stock is tracked in a spreadsheet, but the business cannot afford a month of confusion, missed invoices or late deliveries while a new system beds in. So the old system stays, and the workarounds around it keep growing.

Disruption during implementation is real, but most of it is avoidable. It comes from a handful of predictable decisions: switching everything at once, switching at the wrong time, migrating data that has never been tested, and expecting staff to learn a new way of working on the same day they must use it with customers.

> A new system should arrive in the business the way a new bridge opens: tested, rehearsed and with the old route still available until the new one has carried real traffic.
>

## Start with the work, not the software

Before planning the switch, be clear about what the business actually does that the new system must support, including the exceptions. Implementations disrupt operations most when the new system is configured for the process described in a workshop rather than the one staff really follow. Mapping the real flow of work first, as described in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/), reduces surprises on the first live day.

The same applies to the systems around it. List every integration, export, report and spreadsheet that reads from or writes to the old system. Each one is something that can break at cutover. [What to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/) sets out what to capture for each.

## Choose the rollout approach deliberately

There are four common ways to introduce a new system. Each has a place.

| Approach | How it works | Best suited to |
| --- | --- | --- |
| Big bang | Everyone moves to the new system on one date | Simple systems, small teams, or where running two systems is impossible |
| Phased | Functions, branches or teams move one at a time | Multi-site businesses, or systems with separable modules |
| Pilot | One team or branch uses it live first, then the rest follow | When the way of working is changing as much as the software |
| Parallel run | Old and new run side by side for a period and results are compared | Financial or payroll systems where errors are costly |

Martin Fowler's description of the "strangler fig" approach to replacing software explains why gradual replacement is usually safer. Replacing a whole system at once takes a long time, and it is hard to identify every behaviour the old system has. Breaking the change into smaller pieces makes each step considerably less risky, delivers value sooner and teaches the organisation something at each stage. The cost is what he calls transitional architecture: temporary arrangements that let the old and new systems coexist. For a small business that might be a manual reconciliation or a temporary export, accepted knowingly for a few weeks.

Parallel running sounds safest but doubles the workload for the people involved. It works best when it is short, limited to the outputs that really matter, such as payroll totals or debtor balances, and has a defined end date.

## Time the switch around the business calendar

Microsoft's implementation guidance on cutover makes points that apply to any business system. The cutover window is usually short, often a weekend, and during it neither the old system nor the new one can be used normally. It recommends picking a time when the business is less busy, avoiding the period when books are closed or results are reported, and allowing for holidays and leave because the right people need to be available.

For South African businesses, the calendar has some obvious hazards: financial year-end, VAT submission dates, payroll and month-end, the December shutdown and the peak trading period before it, and any seasonal rush specific to the industry. A switch planned for the first week of a quiet month, with key staff confirmed as available, removes a surprising amount of risk before any technical work begins.

## Rehearse the cutover

The same guidance describes a cutover plan listing every task in order, with an owner and a backup owner, instructions, a verification and sign-off step for each task, and a rollback plan in case something goes wrong. It also recommends a mock cutover, a dress rehearsal using the same data, tools, people, steps and timing as the real one, repeated until the team is confident.

For a smaller business, the rehearsal can be modest, but it should not be skipped. At minimum:

1. Migrate a full copy of live data into the new system and check it: customer balances, open orders, stock quantities, open jobs.
2. Process a normal day's transactions in the test copy and compare the outputs with the old system.
3. Time how long the migration and checks take, so the real cutover window is realistic.
4. Write down what the business will do if checks fail on the night.

## Decide go or no-go in advance

Agree before cutover who makes the final decision to go live and on what criteria, such as balances that reconcile, no unresolved critical defects and key users trained. Deciding these in the moment, under pressure and late at night, is how businesses go live with problems they would never have accepted in daylight.

The rollback plan should be real. Know how long the old system can remain usable, what would have to be re-entered if the business moved back, and who decides. Most businesses never use their rollback plan. Having one is what allows people to make the go or no-go call honestly.

## Prepare people, not just users

Disruption is often blamed on the software when it actually comes from people being asked to change how they work without enough preparation. Prosci's ADKAR model describes five elements of individual change: awareness of why the change is needed, desire to take part, knowledge of how to change, ability to apply it in practice, and reinforcement so that people do not slip back. It also makes the point that organisational change happens one person at a time.

In practice that means explaining why the business is changing systems before training anyone on screens, training people on their own real transactions rather than generic demonstrations, giving them practice time in the test system before go-live, and having someone available on the floor in the first weeks to answer questions. Expect productivity to dip briefly, and plan lighter workloads or extra help for the first fortnight rather than hoping it will not happen.

## An illustrative example

An illustrative Bloemfontein agricultural supplies business with three branches and about 70 staff replaced its ageing stock and invoicing system. The first plan was to switch all three branches on 1 March. Moving the date to avoid year-end was the first change. The second was to pilot at the smallest branch for three weeks while the other two stayed on the old system, with stock transfers between branches reconciled manually during that period.

The pilot exposed a pricing rule for co-operative members that nobody had mentioned during design, and a till printer that did not work with the new system. Both were fixed before the larger branches moved. The two remaining branches cut over on consecutive weekends after a rehearsal migration, with the old system kept read-only for a month. Trading continued throughout.

## After the switch

Go-live is not the end of the implementation. The first ninety days decide whether the new system becomes how the business works or a source of new workarounds; that phase is covered in [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/). Choosing a system that fits the real work in the first place, rather than the demonstration, also makes everything above easier; see [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/).
