---
hub: discovery
record_id: DISC-347
slug: why-applications-stay-because-migration-effort-is-unknown
title: Applications are retained because migration effort is unknown
description: Duplicate and ageing applications survive renewal after renewal because nobody has costed a move. How to size migration cheaply and decide keep or retire.
lead: Duplicate and ageing applications survive renewal after renewal because no one has estimated the cost of moving. How to size migration effort cheaply and make keep-or-retire decisions on purpose.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT or operations director, with a business owner for each application
budget_owner: Financial director or CFO
sources:
  - Application portfolio assessment guide for AWS Cloud migration - AWS Prescriptive Guidance | https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/introduction.html
  - About the migration strategies - AWS Prescriptive Guidance | https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html
  - Plan your migration - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration
related:
  - Paying for unused software features because contracts are bundled | /discovery/why-bundled-software-contracts-hide-unused-features/
  - Why application risk assessments cannot be one-time reviews | /discovery/why-application-risk-assessments-cannot-be-one-time/
  - Why software renewals need a confirmed business owner | /discovery/why-software-renewals-need-a-confirmed-business-owner/
summary: Duplicate and ageing applications survive renewal after renewal because no one has estimated the cost of moving. How to size migration effort cheaply and make keep-or-retire decisions on purpose.
layout: plain
---
Two businesses merge, and the combined technology team produces a list of 187 applications. Thirty-one of them do the same job as another system on the list: two payroll packages, three CRM tools, four document-signing services. Everyone agrees the list is too long. Yet a year later almost nothing has been switched off. When someone asks why, the answer is always a version of the same sentence: "We don't know how hard it would be to move."

This article looks at that operating condition: applications that stay in service because nobody has estimated the effort of migrating off them. It is especially costly after mergers and acquisitions, when overlap is obvious and the pressure to consolidate is strongest.

## The problem in plain language

An application that cannot be retired without risk gets kept. That is rational when the risk is real, but in most businesses the risk is simply unmeasured. Nobody has written down what data the application holds, what other systems feed it or read from it, which processes depend on it, who uses it and what a switch-over would involve. Without those facts, "migration" is an unlimited and frightening task, so the application is renewed year after year. The decision to keep it is never actually made. It is made by default.

## What you are actually trying to solve

Operations directors, IT managers and finance leads want to consolidate applications, cut software spend and integrate acquired businesses. They want a defensible answer to a plain question: which of these systems can go, in what order, and at what cost? The shared need is an estimate they can trust, built cheaply enough that it can be done for many applications rather than one.

## Evidence and system mechanism

### Assessment comes before migration

AWS describes application portfolio assessment as a foundational activity in long-running migration programmes, made up of discovery, analysis and planning, and as a key input to the other workstreams that depend on its data. Its [application portfolio assessment guide](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/introduction.html) is written for cloud migration, but the sequence applies to any consolidation: find what exists, analyse it, then plan what to do.

### Keeping and retiring are both legitimate outcomes

The AWS list of [migration strategies](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html) includes both retire, for applications to be decommissioned or archived, and retain, for applications to be left as they are. It gives reasons to retire, such as no remaining business value, the cost of maintaining and hosting the application, and the security risk of unsupported components. The useful point is that retaining an application is a strategy that someone chooses for a reason, not a fate that happens when no assessment is done.

### Planning turns strategy into sequence

Microsoft's guidance on [planning a migration](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration) describes a plan that defines the order, timing and approach for moving workloads, translating high-level strategy into actionable sequences, including workload prioritisation and an assessment of whether the team has the skills and support to execute. Both points matter to small businesses: sequence the easy wins first, and be honest about capacity.

### Warning signs

- The application list shows overlaps that have been there for more than a year.
- The reason for keeping a system is "it might be hard to move" rather than a named business need.
- Nobody can list the interfaces and reports that depend on an application; see [why undocumented interface mappings make change risky](/discovery/why-undocumented-interface-mappings-make-change-risky/).
- Applications past their useful life remain live without an owner, as described in [why legacy applications remain live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/).

## Problem owner and why-now trigger

The IT or operations director owns the consolidation question, and the business owner of each application owns the decision to keep or retire it. The financial director owns the saving and the cost of the move. When no individual owns the application, the question has no home, which is why the pattern persists.

The trigger is usually a merger or acquisition. Two sets of systems arrive together, duplicated costs become visible on day one, and integration targets or synergy promises depend on consolidating them. Renewal deadlines, vendor end-of-life notices and a decision to move to a new platform bring similar pressure.

## Economic consequence

Every retained duplicate has a recurring cost: licences or subscriptions, support, hosting, integration upkeep, security patching, and staff time to operate more than one way of doing the same task. The larger cost is strategic. Teams continue to work in two systems, data stays split, reports need manual reconciliation, and the expected benefits of the merger arrive late or not at all. For a view of the cost of duplicated tools, see [paying for multiple applications and fragmented work](/impact/pain-paying-for-multiple-applications-duplicate-software-fragmented-work/), and for the cause of the overlap, [departments buy overlapping software for the same capability](/discovery/departments-buy-overlapping-software-for-the-same-capability/).

## Root cause

- **No standard way to estimate.** Each migration is treated as a unique project, so no one tries.
- **Dependencies are unrecorded.** Data, interfaces, reports and manual workarounds are known only to individual users.
- **No decision date.** Without a forcing event, keep is the default and the application renews automatically.
- **Benefit and effort are not compared.** The saving from retiring an application is not set against the effort in a single view.

## Practical intervention

1. **Use a short assessment sheet.** For each application record the business process it serves, number of active users, data held, inbound and outbound interfaces, reports it feeds, annual cost, contract end date and owner.
2. **Score migration effort in bands.** Do not try for a precise number. Classify each application as low, medium or high effort, using simple rules: how many interfaces, how much history must be kept, how many users must be retrained, and whether a target system already exists.
3. **Pair effort with benefit.** Place annual saving and risk reduction beside the effort band. Applications with high benefit and low effort come first.
4. **Choose an explicit outcome.** For each application decide to retire, replace, merge or retain, and record the reason. Retain is allowed, but it needs a named owner and a review date.
5. **Time decisions to contract dates.** Work backwards from the notice period so that a decision is possible before a renewal commits another year. The method is covered in [how to know when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/).
6. **Run a small pilot.** Migrate one low-effort application, measure what the estimate missed, and adjust the bands for the next.

### Trade-offs

Assessment itself takes time, and a rough band will sometimes be wrong. That is acceptable: an estimate within a factor of two is far more useful than no estimate. Consolidation also carries change risk for the users concerned, so protect critical periods such as year-end and payroll runs. Some applications are better kept, particularly where a specialist function has no good replacement.

### An illustrative example

Illustrative: a Johannesburg professional services group of about 250 staff acquired a smaller firm and inherited two time-recording systems and two document stores. Nobody wanted to move either, because neither had been examined. A two-week assessment found that one time-recording system had four interfaces and the other had one, and that the smaller firm's document store held only seven years of mostly inactive files. The group retired the document store first, moved the time-recording users at their next billing cycle, and recorded a retain decision on one specialist tool with a review date. Three renewals that would have been automatic were stopped.

## Diagnostic questions

- For your five most expensive duplicated applications, can you state the effort to retire each?
- Are interfaces, reports and manual workarounds recorded per application?
- Who decides whether an application is retained, and when was that last decided on purpose?
- How many renewals last year were accepted without a keep-or-retire review?
- What was the outcome of the last migration, and how did it compare with the estimate?

## What good looks like

Every application has a recorded owner, cost, dependencies and effort band. Keep decisions are explicit and dated, and retirement decisions are timed to contracts. Merged businesses consolidate in a planned sequence rather than waiting for an emergency. Migration effort is no longer a reason in itself, because it has been estimated, compared with benefit and either accepted or scheduled.

## Where Mellorca fits

Mellorca helps businesses assess the application portfolio, estimate migration effort in practical bands, and sequence retirements against contracts and capacity, so that consolidation after an acquisition follows a plan rather than a debate.

## Method note

AWS and Microsoft guidance is used as a reference for assessment and planning sequence; neither is a statement that any business should move to a particular platform. Effort bands are a planning aid, not a quotation. The example is illustrative rather than a client case.
