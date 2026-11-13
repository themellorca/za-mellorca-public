---
hub: discovery
record_id: DISC-296
slug: integration-costs-hidden-inside-application-projects
title: Why integration costs stay hidden inside application projects
description: Integration work is budgeted inside each application project, so its real cost is never seen. How that distorts decisions and how to make it visible.
lead: Integration work is usually budgeted as a line inside each new application project, so its real build and running cost is never seen. How that distorts decisions, and how to make it visible.
category: Integration & API Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Head of IT or integration lead, with project sponsors
budget_owner: CFO or finance director, together with the CIO or IT budget holder
sources:
  - Architecture strategies for creating a cost model - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/cost-model
  - Architecture strategies for collecting and reviewing cost data - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/collect-review-cost-data
  - Allocation FinOps Framework Capability | https://www.finops.org/framework/capabilities/allocation/
related:
  - Why undocumented interface mappings make integration change risky | /discovery/why-undocumented-interface-mappings-make-change-risky/
  - Why batch integrations leave your systems hours out of date | /discovery/batch-integrations-leave-systems-hours-out-of-date/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
summary: Integration work is usually budgeted as a line inside each new application project, so its real build and running cost is never seen. How that distorts decisions, and how to make it visible.
layout: plain
---
A business approves a new field-service application. The business case covers licences, implementation and training. Somewhere in the project plan there is a line for "integrations": connect to the ERP, sync customers from the CRM, push timesheets to payroll. It is estimated quickly, delivered late, and once live it disappears into general IT running costs. A year later the business approves another application, and the same thing happens again.

This is how integration costs become invisible. They are never wrong exactly; they are scattered. Each application project carries a slice, and nobody sees the total cost of connecting the business's systems or the ongoing cost of keeping those connections working.

## The problem in plain language

Integration is the work of making systems exchange data reliably: building connectors, mapping fields, handling errors, monitoring and fixing failures, and updating everything when one side changes. In many organisations this work has no budget of its own. It is funded as a sub-task of whichever application project needs it, and after go-live its running cost is absorbed into the IT team's general workload.

The visible symptom is projects that overrun on "integration" again and again, and an IT team that seems permanently busy without anyone being able to say why. The hidden symptom is that leaders make application decisions without knowing what each new system will cost to connect and keep connected.

## What you are actually trying to solve

Finance and IT leaders tend to ask questions like: why do our software projects always cost more than planned, what does it really cost to run our integrations, and should we invest in an integration platform. Underneath is a need to see integration as a cost and a capability in its own right, so that it can be planned, funded and improved rather than rediscovered on every project.

## Evidence and system mechanism

Cost guidance from cloud and FinOps practice explains why this happens and what good accounting looks like.

### Cost models leave out supporting work

[Microsoft's Well-Architected guidance on cost models](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/cost-model) says a cost model should cover infrastructure, licences, personnel, maintenance and support, and specifically calls out supporting services such as monitoring, security and governance as often-forgotten costs. It also says operational costs should include monitoring, testing, patching and configuration management. Integration work sits squarely in these forgotten categories: the build is visible for a few weeks, but the run cost is spread across people and tools that are budgeted elsewhere.

### Costs without owners cannot be managed

[The companion guidance on collecting and reviewing cost data](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/collect-review-cost-data) recommends that each cost item has a directly responsible individual as its owner, and that shared resources which cannot be tagged to one owner are redistributed using allocation rules. Integrations are shared by definition: a customer sync serves sales, finance and service. Without an explicit rule, the cost lands nowhere.

### Shared costs need a deliberate strategy

The [FinOps Foundation's Allocation capability](https://www.finops.org/framework/capabilities/allocation/) describes a shared-cost strategy for items such as platforms and networking, using fixed, proportional or usage-based splits. It also recognises that early-stage organisations sometimes budget shared costs centrally on purpose. The point is that the choice should be deliberate. Hiding integration inside project budgets is not a strategy; it is the absence of one.

### Warning signs

- "Integration" is a single line in project budgets, estimated without detail.
- Projects regularly overrun because data exchange with existing systems was harder than expected.
- Nobody can list how many integrations the business runs or what each costs to maintain.
- Integration fixes are done by whoever is available, as unplanned work.
- Each project chooses its own way to connect systems, so similar problems are solved differently every time.

## Problem owner and why-now trigger

The problem usually sits between the CIO or head of IT, who carries the run cost, and the finance director, who approves project budgets. Project sponsors own individual business cases but have little reason to expose costs that would make their case look weaker.

The trigger is usually application modernisation. Replacing a legacy system or moving to cloud applications multiplies the number of connections that must be rebuilt. When several projects run at once, the scattered integration lines add up to a significant and largely unplanned commitment.

## Economic consequence

The first consequence is distorted decisions. If the cost of connecting a new application is understated, cheaper-looking options win business cases they should lose, and the business accumulates systems that are expensive to keep connected. The second is duplicated spend: each project builds its own connectors, error handling and monitoring, so the business pays repeatedly for the same capability. The third is operational: integrations without a run budget tend to be under-monitored, and failures surface as manual workarounds and data errors. The broader cost of systems that do not exchange data is set out in [the cost of business systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/).

## Root cause

- **Project-based funding.** Budgets follow applications, not capabilities, so anything shared between applications has no natural home.
- **No integration inventory.** Without a list of integrations, there is nothing to attach costs to.
- **No run-cost ownership.** Integrations go live without a named owner for operation and change, a gap explored in [why critical integrations need a named operational owner](/discovery/why-critical-integrations-need-a-named-operational-owner/).
- **Optimism in estimates.** Integration effort depends on the quality of the other system's interfaces and data, which is rarely known at approval time.

## Practical intervention

1. **Build an integration inventory.** List each integration with its source, target, purpose, technology and owner. This is the foundation for everything else.
2. **Estimate integration separately in business cases.** Require each application proposal to list the connections it needs, with build effort and an annual run estimate covering monitoring, fixes and change.
3. **Create a visible integration cost line.** Whether funded centrally or allocated back to business units, record integration build and run costs under their own heading so they can be tracked over time.
4. **Agree a shared-cost rule.** Decide how shared integrations are paid for: central budget, proportional split or usage-based. Write the rule down.
5. **Standardise the approach.** Reuse common patterns, connectors and monitoring rather than letting each project choose its own. Guidance on what good integration involves is in [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).

### Trade-offs

Separating integration costs can make individual business cases look more expensive, which may slow approvals. That is usually the point: the cost was always there. For a business with only a handful of integrations, a simple register and a run-cost estimate per integration may be enough; a dedicated platform and team only make sense as volume grows.

### An illustrative example

*Illustrative:* a Pretoria engineering services firm with around 200 staff replaced its CRM, its job-costing tool and its HR system over two years. Each project included a modest integration line. When finance later reviewed IT spend, it found that a contractor had been retained almost continuously to fix and adjust the connections between these systems, paid from the general IT budget. No business case had included that cost. Once integration build and run costs were recorded separately, the firm could compare the cost of maintaining several point-to-point connections against a more standard approach.

## Diagnostic questions

- How many integrations does the business run, and who owns each one?
- What did integration work cost across the last three application projects, and did it match the estimate?
- What does it cost each year to keep existing integrations working?
- Does the business case for a new application include connection and run costs?
- Is there an agreed rule for who pays for integrations that serve several departments?

## What good looks like

The business holds a current integration inventory with owners. Every application proposal lists its integrations with build and run estimates. Integration costs are reported as their own line, so leaders can see the trend and judge whether standardisation or a platform would pay off. Shared integrations are funded under a clear rule, and run work is planned rather than squeezed in.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can produce the integration inventory and an estimate of current run effort. [Systems implementation and integration](/services/systems-implementation-integration/) work can then help standardise how new connections are built, so that future projects reuse patterns rather than starting again.

## Method note

This article draws on published cost-management and FinOps guidance and applies it to integration work. It does not quote industry averages for integration cost, because no reliable figure applicable to South African mid-sized businesses was found. The example is illustrative and not based on a specific client.
