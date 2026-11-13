---
hub: discovery
record_id: DISC-473
slug: ai-usage-costs-not-allocated-to-business-outcomes
title: AI usage costs are not allocated to business outcomes
description: AI charges grow across teams, but nobody can say which ones pay for themselves. How to tie each cost to an owner and a measurable outcome.
lead: AI charges grow across teams, but nobody can say which ones pay for themselves. How to tie each cost to an owner and a measurable outcome.
category: AI, Automation & Agent Operations
published_date: 2026-09-08
updated_date: 2026-09-08
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: AI Program Lead
budget_owner: CFO or Finance Lead
sources:
  - FinOps for AI Overview | https://www.finops.org/wg/finops-for-ai-overview/
  - Allocation FinOps Framework Capability | https://www.finops.org/framework/capabilities/allocation/
  - Plan and Manage Costs - Microsoft Foundry | https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs
related:
  - Agent conversations are not connected to durable business records | /discovery/agent-conversations-not-connected-to-durable-business-records/
  - Automations break when application interfaces change | /discovery/automations-break-when-application-interfaces-change/
  - Automation incident response is improvised | /discovery/automation-incident-response-improvised/
summary: AI charges grow across teams, but nobody can say which ones pay for themselves. How to tie each cost to an owner and a measurable outcome.
layout: plain
---
Organisations now run AI at very different scales, from a few chat assistants to agents embedded in customer and finance workflows. Many of them can see what AI costs in total but cannot say which business outcome that money bought. Without that link it is hard to justify the spend, to compare one AI programme with another, or to explain value delivery to executives in terms they recognise.

## The problem in plain language

The monthly cloud or vendor invoice shows a line for model usage, another for search or vector storage, another for compute, and perhaps a separate subscription for an AI assistant. Finance can see the total rising. Product and operations teams can describe what they built. What nobody can produce is a credible statement such as “this workflow cost this much to run last quarter and reduced handling time in this team by this much”.

The cost is real and measured to the token. The value is real but described in anecdotes. The two are never joined.

## What you are actually trying to solve

Buyers want measurable return from AI, with costs clearly allocated to outcomes such as revenue lift, cost reduction, risk mitigation or improved customer experience. In practice the questions sound like “how do we allocate AI costs?”, “how do we measure AI ROI?”, “can we charge AI usage back to teams?”, “what are we spending on LLM tokens by team?” or “what are our AI unit economics?”. Behind each of those is the same request: a defensible way to say which part of the business consumed the AI spend and what it got in return.

The question usually arrives from finance first, then lands on the AI programme lead or platform team, who discover that the data needed to answer it was never captured.

## Evidence and system mechanism

The FinOps Foundation's [FinOps for AI overview](https://www.finops.org/wg/finops-for-ai-overview/) identifies the main cost drivers as tokens for API-based models, GPU infrastructure for training and inference, and managed AI services. It also notes the specific allocation difficulty with AI: when several applications share one model, it is hard to identify who actually consumed the output. Tagging is possible, but newer services without native tagging support take engineering effort to label.

The general discipline is set out in the FinOps Framework's [Allocation capability](https://www.finops.org/framework/capabilities/allocation/), built on the principle that everyone takes ownership for their technology usage. It describes three parts: an allocation strategy that maps costs to organisational units, a tagging strategy that segregates resources, and a shared-cost strategy for platforms and services used by several teams. At the least mature stage, the framework describes organisations struggling every month to identify the owners of untagged or unidentified accounts.

Platform tooling reflects the same mechanism. Microsoft's guidance on [planning and managing Foundry costs](https://learn.microsoft.com/en-us/azure/foundry/concepts/manage-costs) explains that model usage is billed through token-based meters, that fine-tuned models carry hourly hosting charges even when unused, and that AI platform charges are only a subset of the full application cost. It also describes project-level cost attribution, currently in preview and limited to certain models, so shared AI resources can be shown back to the team or workload that used them.

Taken together, the evidence shows cost streams spread across data engineering, model training, inference and governance. These streams are not mapped to outcomes because of siloed budgeting, missing outcome definitions and no unit economics for AI components.

## Why this becomes urgent

Experiments are cheap enough to tolerate vague accounting. Urgency rises as AI programmes scale and the misalignment becomes both costly and opaque. Typical triggers include:

- a budget review in which AI spend has grown faster than any reported benefit;
- a decision to expand a pilot into a production workflow used by many teams;
- several business units sharing one model deployment or AI platform;
- a vendor price or model change that alters cost per task;
- board or executive questions about AI value that the roadmap cannot answer.

The owner audience includes finance, product and AI programme leads. When none of them can explain the numbers, confidence in the AI roadmap and in AI governance weakens.

## Economic consequence

The economic consequence is reduced confidence and slower decisions about AI investment. That shows up in several ways:

- **Misdirected spend:** expensive models are used for simple tasks because nobody sees cost per outcome.
- **Stalled scaling:** promising use cases wait for approval because their value cannot be shown.
- **Unfunded shared costs:** platform, search and monitoring costs sit centrally and are never recovered from consumers.
- **Idle charges:** hosted or provisioned resources continue to accrue cost after the work they supported has ended.
- **Weak prioritisation:** programmes cannot be ranked against one another on a common basis.

Do not apply a generic percentage to these effects. Measure your own allocated versus unallocated AI spend, cost per completed task and the outcome metric each initiative claims to move.

## Root cause

Root causes include missing business outcome definitions, inadequate cost accounting and budgets split across the stages of the AI lifecycle. More specifically:

- initiatives are approved on capability (“build an assistant”) rather than on an outcome with a baseline;
- resources, deployments and API keys are not tagged or scoped by initiative;
- shared models and platforms have no agreed rule for splitting cost;
- data preparation, evaluation and governance costs sit in other budgets and are left out;
- no unit of work, such as a resolved case or processed document, has been defined to divide cost by.

Rising cost is a symptom. The root cause is that outcome, ownership and cost were never designed to meet.

## Practical intervention

1. **Define clear business outcomes for each AI initiative,** with a baseline and an owner who will report on it.
2. **Agree a unit of work** for each use case so cost can be expressed per task, case or transaction.
3. **Implement cost accounting by lifecycle stage:** data preparation, training or fine-tuning, inference, evaluation and governance.
4. **Apply an allocation and tagging strategy** so each deployment, project, key or workspace maps to an initiative and a cost centre.
5. **Set a shared-cost rule** for common platforms, whether fixed, proportional to usage or held centrally by agreement.
6. **Establish dashboards that map spend to value metrics,** and review them with finance and product owners on a regular cycle.
7. **Align procurement, data costs and governance to outcome-based targets,** including budgets and alerts for each initiative.

## Diagnostic questions

- Are AI programmes linked to defined business outcomes with a baseline?
- Is AI cost accounted for by initiative, with transparent dashboards?
- Can specific expense lines be attributed to specific value delivered?
- When several teams share a model, can you say how much each one used?
- Do data, evaluation and governance costs appear in the initiative's total?
- Would you notice if a hosted model kept charging after its project ended?

## What good looks like

Every AI initiative has a named owner, a defined outcome and a unit cost. Spend is tagged at source and allocated, including a fair share of shared platforms. Finance and product owners look at the same view of cost and value, and decisions to scale, change model or stop are made on that evidence rather than on enthusiasm or alarm. For the broader version of this problem across the software estate, see [why application costs cannot be allocated to business units](/discovery/why-application-costs-cannot-be-allocated-to-business-units/).

## Where Mellorca fits

Mellorca can help design outcome-based business cases, cost-tracking frameworks and governance that turn AI investment into measurable value. That includes mapping AI workloads and shared platforms, designing tagging and allocation rules, and connecting usage data to operational outcome metrics. Relevant services include [business automation and AI workflows](/services/business-automation-ai-workflows/) and a [digital systems audit](/services/digital-systems-audit/).

## Method note

This article describes a class of operating problem. The cited framework and platform documentation explain how AI costs arise and how they can be allocated; they do not show that any particular organisation has this gap. Quantify impact from your own billing, usage and outcome data.
