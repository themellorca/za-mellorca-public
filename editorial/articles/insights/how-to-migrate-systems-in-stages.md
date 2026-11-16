---
hub: insights
record_id: INS-360
slug: how-to-migrate-systems-in-stages
title: How to Migrate Systems in Stages
description: Moving from an old system to a new one in planned slices keeps the business trading, surfaces problems early and lets you stop if something goes wrong. Here is how to plan the stages.
lead: Moving from an old system to a new one in planned slices keeps the business trading, surfaces problems early and lets you stop if something goes wrong. Here is how to plan the stages.
category: Systems Implementation
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Systems Implementation
sources:
  - Strangler Fig | https://martinfowler.com/bliki/StranglerFigApplication.html
  - Strangler Fig Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig
  - Feature Toggles (aka Feature Flags) | https://martinfowler.com/articles/feature-toggles.html
related:
  - What Belongs in an Implementation Plan | /insights/the-parts-of-a-sound-systems-implementation-plan/
  - How to Prevent Requirements From Growing Without Control | /insights/how-to-prevent-requirements-from-growing-without-control/
  - How to scope a systems implementation properly | /insights/how-to-scope-a-systems-implementation-properly-before-you-sign/
summary: Moving from an old system to a new one in planned slices keeps the business trading, surfaces problems early and lets you stop if something goes wrong. Here is how to plan the stages.
layout: plain
---
A Cape Town property management company with 2,000 units under management decided to replace its ageing lease administration system. The supplier's proposal was a single cutover over a long weekend: export everything on Friday, import on Saturday, go live on Monday. A cautious finance director asked a simple question. What happens on Monday if the rent roll does not balance? Nobody had an answer except "we fix it fast". The company chose a different route, moving one portfolio at a time over four months. It took longer on paper and caused far less disruption in practice.

Staged migration means moving work from an old system to a new one in deliberate slices, with the business running on both for a period. It is more work to plan. It is usually much less risky to execute, because each slice is small enough to check, and any problem affects part of the business rather than all of it. Our article on [why big-bang system replacements are risky](/insights/why-big-bang-system-replacements-are-risky/) explains the risk side. This piece is about how to plan the stages.

## The principle behind staging

Software engineers call this approach the strangler fig, after a plant that grows around a host tree until it replaces it. Martin Fowler's description of the [Strangler Fig approach](https://martinfowler.com/bliki/StranglerFigApplication.html) stresses that it makes both investment and returns occur gradually and visibly, and that you learn about the replacement and its consequences for the business as you go. He acknowledges that it needs some temporary scaffolding to let old and new systems coexist, and argues that the reduced risk and earlier value outweigh that cost.

The same thinking works for business systems even when nobody is writing code. The question is always: what is the smallest slice of work we can move, check and live with, before moving the next one?

## Choose how to slice

There are four common ways to divide a migration. Most projects combine two of them.

- **By segment:** one branch, region, portfolio, customer group or product line at a time. The property company used portfolios.
- **By function:** move one capability at a time, such as quoting before invoicing, or leave applications before lease management.
- **By new work only:** start all new jobs, accounts or contracts in the new system while existing ones finish in the old one.
- **By data age:** migrate active records first and archive closed ones separately, often to a read-only store.

Pick the first slice for learning, not size. It should be representative enough to expose real problems, low-risk enough that problems are survivable, and run by people willing to report issues honestly.

## Decide how work reaches the right system

When two systems run at once, everyone must know which one handles which work. Microsoft's description of the [Strangler Fig pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig) uses a facade that routes each request either to the legacy system or to the new one, with the share sent to the new system growing over time until the old one can be retired. Customers keep using the same front door and do not notice the change.

In a business setting the facade can be simple: a field on each customer record saying which system holds it, a rule in the CRM that sends new orders to the new platform, or a single intake form that routes requests behind the scenes. What matters is that routing is decided by a rule, not by whoever happens to pick up the work.

## Plan the integration seams

Staging creates temporary integration needs. Reports may need to combine data from both systems. Finance may need balances from both to close the month. Customers may move between segments. List every point where information must flow between old and new during the transition, and decide for each whether to build a temporary link, run a manual reconciliation or avoid the need by changing the slice. Our guide on [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/) is a useful checklist for these seams.

Keep temporary links temporary. Give each one an end date tied to a migration stage, so that scaffolding does not quietly become permanent.

## Define entry and exit criteria for each stage

A stage should not start because the calendar says so, and it should not end because people are tired of it. Write criteria for both:

- **Ready to start:** data for the slice cleaned and test-loaded, users trained, routing rule in place, rollback steps written.
- **Ready to close:** a full business cycle completed in the new system, such as one month-end or one billing run; reconciliation between old and new within an agreed tolerance; no open critical issues.

The property company's rule was that a portfolio was complete only when its rent roll, arrears and trust account balances reconciled to the cent after the first month-end.

## Keep a way back

Each stage should be reversible until it closes. That means not deleting or locking the slice's data in the old system, and knowing exactly how to route work back. In software teams, Fowler's article on [feature toggles](https://martinfowler.com/articles/feature-toggles.html) describes switches that let a team turn new behaviour on or off without redeploying. Business migrations can use the same idea: a setting, routing rule or record flag that sends a segment back to the old system if something goes badly wrong. Rehearse it once. A rollback plan nobody has tried is a hope, not a plan.

## Expect the stages to speed up

The first slice is slow because it carries the learning: data problems, missed requirements, training gaps. Later slices are faster because the method is proven. Plan for that. Do not commit to a fixed pace based on the first stage, and do not rush the first stage to hit a deadline. The lessons it produces are the main reason for staging at all.

## Finish the job

Staged migrations have a known failure mode: they stall at 80 percent, leaving the business paying for and maintaining two systems indefinitely. Guard against it from the start. Set a decommissioning date for the old system, plan the last awkward slices explicitly rather than leaving them until the end, and decide what happens to historical data that will not be migrated. Our article on [what a migration should include beyond moving records](/insights/what-a-crm-migration-should-include-beyond-moving-records/) covers archive and reporting decisions that are easy to forget.

When the last slice closes, switch off the routing, cancel the old licences and remove the temporary integrations. Then confirm that no report, spreadsheet or automation still points at the old system. Our guide to [implementing a new system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/) covers the people and timing side of each switch.

## Practical next actions

1. Choose how to slice the migration, by segment, function, new work or data age, and pick a first slice suited to learning.
2. Define the routing rule that decides which system handles each piece of work during the transition.
3. List every temporary integration or reconciliation needed between old and new, each with an end date.
4. Write entry and exit criteria for every stage, including at least one full business cycle and a reconciliation.
5. Rehearse the rollback for the first stage, and set a decommissioning date for the old system before you begin.
