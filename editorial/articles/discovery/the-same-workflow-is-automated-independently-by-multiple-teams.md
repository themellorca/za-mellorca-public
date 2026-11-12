---
hub: discovery
record_id: DISC-457
slug: the-same-workflow-is-automated-independently-by-multiple-teams
title: The same workflow is automated independently by multiple teams
description: A governance gap emerges when several teams independently automate the same workflow, duplicating effort, fragmenting visibility, and increasing risk. This article explains the problem, why it matters now, and practical steps to unify automation strategy without stifling teams.
lead: A governance gap emerges when several teams independently automate the same workflow, duplicating effort, fragmenting visibility, and increasing risk. This article explains the problem, why it matters now, and practical steps to unify automation strategy without stifling teams.
category: AI, Automation & Agent Operations
published_date: 2026-10-02
updated_date: 2026-10-02
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Automation Governance Team
budget_owner: CIO / Finance
sources:
  - Power Platform Center of Excellence (CoE) Starter Kit overview - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/coe/overview
  - Establish a Microsoft Power Platform Center of Excellence - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/coe
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - Automation incident response is improvised | /discovery/automation-incident-response-improvised/
  - Agent permissions are broader than the task requires | /discovery/agent-permissions-broader-than-task-requires/
  - Manual work persists because automation covers only the happy path | /discovery/manual-work-persists-because-automation-covers-the-happy-path/
summary: A governance gap emerges when several teams independently automate the same workflow, duplicating effort, fragmenting visibility, and increasing risk. This article explains the problem, why it matters now, and practical steps to unify automation strategy without stifling teams.
layout: plain
---
The same workflow being automated by multiple teams is a telltale sign of a fractured automation strategy. When autonomy extends across silos, each team tends to build in isolation, selecting tools, templates, and runtimes that fit local needs but do not align with an enterprise-standard approach. The result is duplicate automation artefacts, competing runtimes, and divergent data models that complicate maintenance, observability, and security posture.

In a mid-sized business this rarely looks dramatic. It looks like three slightly different "new customer" flows, two invoice-reminder scripts that occasionally both fire, and a spreadsheet macro that nobody admits to owning. Each one solved a real problem for the team that built it. Together they create a layer of automation that nobody can see as a whole.

## The problem in plain language

From a buyer's perspective, the symptom is straightforward: two or more teams implement the same business process automation without a single source of truth or shared governance. Rather than a single, well-understood workflow, there is a portfolio of similar automations that do not interoperate, making change management unpredictable and costlier over time. This fragmentation undermines effort to measure outcomes and to improve efficiency at scale.

### A worked example

Take a Johannesburg financial services firm with around 150 staff. Sales operations built a low-code flow that creates a client record and sends a welcome pack when a deal closes. Compliance, needing FICA documents collected promptly, built its own flow triggered by the same event that requests identity documents and creates a second client record in its tracking list. Finance added a third automation that sets up the billing account from a spreadsheet export. When the firm changes its client numbering format, all three break in different ways. One sends duplicate welcome emails; another silently stops creating compliance tasks. Diagnosing the failure takes a week because nobody holds a list of which automations touch client onboarding.

The underlying pattern, where each function improves its own step while the overall process gets harder to run, is described in [when every department optimises its part but the whole process gets worse](/patterns/when-every-department-optimizes-its-part-but-the-whole-process-gets-worse/).

## What the buyer is actually trying to solve

Leaders want predictable delivery of automation at scale, with a clear ownership boundary, a reusable set of templates, a versioned catalogue of automations, and a governance model that prevents redundant work. The buyer searches for assurance that each automation aligns with enterprise standards and contributes to measurable business outcomes rather than local victories.

## Evidence and system mechanism

- Automation backlogs and multiple autonomous development tracks point to a lack of central catalogue and governance.
- Disparate tool choices across teams create compatibility and security risks and hinder cross-team reuse.
- Without version control or a shared framework, tracing decisions and validating outcomes becomes error-prone.

Operationally, systems that enable this pattern often rely on independent runbooks, separate event schemas, and divergent logging. Low-code platforms make this especially likely because they put automation in the hands of many makers at once. Microsoft's guidance for its Power Platform reflects this: it recommends a Center of Excellence that provides standards, consistency and governance, maintains visibility of apps and flows across environments, and helps identify orphaned resources so they can be assigned new owners. The principle applies whichever platform you use.

### Warning signs

- Customers or suppliers receive two near-identical automated messages.
- The same field is written by more than one automation, and values flip back and forth.
- A change to a shared system needs a round of emails asking "does anyone have anything that depends on this?"
- Automations run under personal accounts, so nobody else can see or edit them.
- Teams pay separately for automation tools that overlap.

Duplicate automations reacting to the same event can create the same kind of double-action risk discussed in [automation retries that create duplicate customer or financial actions](/discovery/automation-retries-create-duplicate-customer-or-financial-actions/).

## Why this becomes urgent

As organisations pursue rapid automation, the temptation to empower teams to "just do something" grows. Without alignment, the backlog compounds, costs rise, and executive confidence in automation programs wanes. The urgency is not in any single workflow, but in preventing a brittle, uncoordinated automation layer from breaking or slowing broader digital initiatives.

## Economic consequence

Fragmented automation consumes more licences, increases maintenance overhead, and delays harmonisation across the portfolio. These factors collectively reduce the return on automation investments and increase risk exposure in security, compliance, and data integrity.

The maintenance cost is the one most often missed. Every duplicate needs to be updated when an upstream system changes, monitored when it fails and understood when its author leaves. Two automations doing one job means roughly twice the upkeep for no extra value.

## Root cause

The root cause is a missing enterprise-wide automation governance model: no central catalog, no version-controlled templates, and no shared standards for runtimes, data models, or observability. This creates duplication and inhibits cross-functional reuse.

A second, quieter cause is that teams cannot easily tell which processes are already automated or safe to automate. Without that visibility, building locally is the rational choice; see [teams cannot tell which processes are safe to automate](/discovery/teams-cannot-tell-processes-safe-to-automate/).

## How to diagnose it

1. **Inventory by event, not by tool.** List the business events that trigger automation (deal closed, invoice raised, employee hired) and record every automation that reacts to each one.
2. **Check platform admin views.** Most automation platforms can list flows, owners and connections. Look for similar names and identical triggers.
3. **Use event data where you have it.** Process mining extracts event data from systems of record to show how processes actually run, which can reveal parallel paths and repeated steps that workshops miss.
4. **Interview the makers.** Ask what each automation does, what it writes to and who relies on it.

## Practical intervention

Implement a centralized automation catalog with versioned templates, enforce architectural standards, and establish a single owning team responsible for governance. Promote reuse through standardized components, shared runtimes, and unified logging/metrics. Adopt a federated model where teams propose automations but register them in a common platform with a review gate before deployment.

For a smaller business, "central team" may mean one operations lead with a few hours a week, and "catalogue" may be a well-kept register. That is enough if it is used. Each critical automation also needs a named support owner, as argued in [why critical low-code automations need support ownership](/discovery/why-critical-low-code-automations-need-support-ownership/).

### Trade-offs

Centralising too hard has a cost. A review gate that takes weeks will push teams back to building quietly. The goal is to make registering and reusing an automation easier than building a new one, not to make building impossible. Consolidation also carries short-term risk: merging three flows into one shared flow means a single failure now affects three teams, so the shared version needs better monitoring than any of the originals had.

## Diagnostic questions

- Is there a single catalog of automations with version history?
- Do all teams adhere to a standard set of templates and runtimes?
- Can changes be traced to a change record with impact assessment?
- Is there a defined owner for automation governance and a clear path to reuse?
- Are security, compliance, and data-model standards consistently applied?

## What good looks like

A mature state features a single automation catalog, institutionally enforced version control, and a governance body that approves new automations and enforces reuse of templates and runtimes. Observability and auditability are uniform across teams, enabling cost controls and faster improvement cycles. Someone is also explicitly responsible for watching the automations once they run, the theme of [who watches the automations](/insights/who-watches-the-automations/).

## What to do first

1. Pick the one business event that triggers the most automation, usually new customer or new order.
2. List every automation that reacts to it, with owner and target systems.
3. Choose one to be the authoritative flow; retire or redirect the rest.
4. Start the catalogue with that event and extend it one event at a time.

## Where Mellorca fits

Mellorca works on the governance layer described here: catalogue design, template standards, cross-team change management and measuring business outcomes, so that automation serves the whole operating model rather than local optimisations.
