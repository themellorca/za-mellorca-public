---
hub: discovery
record_id: DISC-337
slug: why-new-saas-integrations-have-no-maintenance-budget
title: New SaaS purchases create integrations nobody budgets to maintain
description: The build is funded, the upkeep is not. How to count, own and budget the connections each new SaaS purchase adds, before a merger or vendor change exposes them.
lead: The build is funded, the upkeep is not. How to count, own and budget the connections each new SaaS purchase adds, before a merger or vendor change exposes them.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Head of IT or application owners, with the buying department accountable for upkeep cost
budget_owner: CFO or COO
sources:
  - What is Azure Logic Apps? - Azure Logic Apps | https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Cost Optimization design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles
related:
  - Why departments buy overlapping software for the same capability | /discovery/departments-buy-overlapping-software-for-the-same-capability/
  - Vendors change packaging and pricing faster than budgets adapt | /discovery/why-vendor-pricing-changes-outrun-software-budgets/
  - Business capabilities that depend on tools nobody supports | /discovery/business-capabilities-depend-on-tools-with-no-support-owner/
summary: The build is funded, the upkeep is not. How to count, own and budget the connections each new SaaS purchase adds, before a merger or vendor change exposes them.
layout: plain
---
The business approves a new SaaS tool. The quote covers licences, onboarding and a few days of configuration. Part of the project is connecting the new tool to accounting, the CRM and the customer portal, and that work is finished before go-live and charged to the project. A year later the vendor changes a field, the accounting package updates its interface, and the sync quietly stops. Nobody has a budget line, a named person or a contract for fixing it, so the repair waits until someone in finance notices that the numbers do not agree.

This article looks at the second life of integrations: the cost of keeping them working after the purchase. It becomes visible when a merger or restructuring forces the business to count how many connections its software actually depends on.

## The problem in plain language

Every new SaaS purchase adds connections: data going in, data going out, logins, notifications, scheduled exports. The initial build is treated as a one-off project cost. The ongoing cost, which includes monitoring, repairing, retesting after updates, renewing credentials and adjusting to process changes, is not part of the business case, so it belongs to nobody's budget.

The effect is a growing set of connections maintained by goodwill. Someone in IT fixes them when they break, or a consultant is called in at short notice, or a finance clerk works around the gap by re-keying data. The portfolio looks cheaper than it is, because part of its real cost is hidden in people's time and in errors.

## What the buyer is actually trying to solve

The CFO, COO or head of IT wants to know what the technology estate really costs to run, and to avoid being surprised by an invoice for emergency repair work. In an acquisition, the question sharpens: which connections must be kept, which will be rebuilt, and who pays. They are also trying to prevent every future purchase from adding another unfunded obligation.

## Evidence and system mechanism

### Integration platforms make connection easy and ownership optional

Microsoft describes [Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview) as a service for automating business process workflows and integrating services, systems, apps and data with little or no code, with more than 1,400 prebuilt connectors. Tools like this, and their equivalents from other vendors, are valuable because they make a connection quick to build. They do not decide who monitors it, who is told when it fails, or who pays for changes when either end is upgraded. Low effort at the start can hide a long tail of obligations.

### Translation between systems has to live somewhere

Microsoft's [anti-corruption layer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) explains that when two systems with different data models must work together, a translation layer can isolate them so that each can change without breaking the other. The same page notes that this layer adds latency and an extra component that must be managed. Whether a business builds this formally or not, the translation exists, and somebody has to maintain it when either side changes.

### Total cost of ownership includes support and implementation

Microsoft's [cost optimisation principles](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles) recommend a cost model that forecasts total cost of ownership, including infrastructure, support and implementation, together with clear accountability for cost. Applying that to a SaaS purchase means the business case should include the cost of the connections over the contract term, not just the cost of building them. The related pattern of costs hidden inside projects is described in [integration costs hidden inside application projects](/discovery/integration-costs-hidden-inside-application-projects/).

### Warning signs

- The business case for a new tool lists licence and implementation costs but nothing for integration support.
- Integrations are described by who built them, not who looks after them.
- The same few people are called whenever a sync fails, as discussed in [why critical integrations need a named operational owner](/discovery/why-critical-integrations-need-a-named-operational-owner/).
- Failures are found by users, often days later; see [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).
- No one can say how many connections exist between the main systems.

## Problem owner and why-now trigger

The head of IT or the application owner for each system is closest to the problem, but the budget belongs to the CFO or COO, and the purchase usually starts in a business department. This split is exactly why the cost is orphaned: the department that buys sees the benefit, IT inherits the work, and finance sees only a rising support bill.

M&A is a strong trigger. Due diligence asks for an inventory of systems and interfaces, and the acquirer's integration plan assumes the connections are stable and documented. Another trigger is a vendor announcing a change to its interface, or a key person leaving who understood how it all fits together, a risk described in [what happens when the only person who understands the system leaves](/insights/what-happens-when-the-only-person-who-understands-the-system-leaves/).

## Economic consequence

The cost appears as emergency fixes at premium day rates, hours of staff time spent reconciling data by hand, delayed invoices and orders when a sync fails, and in the worst case wrong data sent to customers or the revenue authority. Because the maintenance is informal, it is also fragile: when the person who looks after a connection is on leave, the repair waits. Integration work that is not budgeted is paid for later at a higher price. The wider effect of unconnected systems is covered in [the cost of business systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/).

## Root cause

- **Capital thinking applied to something recurring.** The build is a project; the upkeep is an operating cost nobody planned.
- **Purchase decided by the department, upkeep carried by IT.** Cost and benefit sit in different budgets.
- **No integration register.** Without a list of connections, there is nothing to attach a budget to.
- **Vendor change is not tracked.** Release notes and deprecation notices go to whoever signed up, not to a monitored mailbox.

## Practical intervention

1. **List the connections.** Create a register of every integration between your main systems: what moves, in which direction, how often, who built it and which business process depends on it.
2. **Name an owner for each.** One accountable person, with a deputy, and a shared mailbox for failure alerts.
3. **Add an upkeep line to every new purchase.** Estimate annual support effort as a percentage of build cost or a number of days per year, and have the buying department carry it in its budget.
4. **Ask the vendor about change.** Before signing, ask how interface changes are announced, how long old versions are supported and what test environment is available.
5. **Prioritise by business impact.** Give the connections that move money or customer commitments monitoring and tested recovery first; for the rest, accept slower repair.
6. **Review annually.** At renewal, check which connections still serve a live process, and retire those that do not.

### Trade-offs

An upkeep reserve makes small purchases look more expensive and may slow approvals. Keep it proportionate, with a simple rule of thumb for low-risk tools. Managed support contracts transfer effort but not accountability; the business still has to know what it depends on.

### An illustrative example

Illustrative: a Pretoria wholesaler added an e-commerce platform that connected to its accounting package, courier booking and stock system. The project budget covered the build. Eight months later a courier interface change stopped bookings for two days. The finance director introduced a register of 14 connections, assigned owners, and added a five-day annual support allowance to each new purchase request. The next interface change was caught by a monitored mailbox before it affected orders.

## Diagnostic questions

- How many integrations connect your main business systems?
- For each, who is accountable and who is their deputy?
- What did your last three SaaS business cases assume about ongoing integration upkeep?
- Where do vendor change notices go?
- Which integration failure would cost you most per day?

## What good looks like

Every integration appears in a register with an owner and a business process. New purchases carry an upkeep estimate in the department that benefits. Failures reach a monitored place quickly, and vendor changes are noticed before they bite. In a transaction, the interface list is ready and the cost of keeping it running is already understood.

## Where Mellorca fits

A [digital systems audit](/services/digital-systems-audit/) can map the integrations and their dependencies. Systems implementation and integration work can rebuild fragile connections with monitoring and documentation, and managed digital operations can provide the ongoing upkeep as a defined service.

## Method note

The Microsoft documents are vendor guidance on specific products and patterns, used here as reference models for integration translation and cost accountability. The example is illustrative rather than a client case.
