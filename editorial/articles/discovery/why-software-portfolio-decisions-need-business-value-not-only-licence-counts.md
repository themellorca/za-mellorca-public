---
hub: discovery
record_id: DISC-348
slug: why-software-portfolio-decisions-need-business-value-not-only-licence-counts
title: Why software portfolio decisions need business value, not only licence counts
description: Licence counts show consumption, not whether an application supports an important business capability, creates dependency or deserves continued investment.
lead: A licence report can identify who has access to an application. It cannot, by itself, tell the business whether that application supports a critical capability, duplicates another tool or should remain in the target architecture.
category: SaaS & Application Portfolio Management
published_date: 2026-09-07
updated_date: 2026-09-07
tags:
  - SaaS
  - Portfolio
  - Value
cta_label: Architecture & Roadmap
cta_href: /services/digital-systems-architecture-roadmap/
problem_domain: SaaS & Application Portfolio Management
problem_owner: application portfolio owner and business capability owner
budget_owner: CIO / CFO / business-unit owner
sources:
  - https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf | https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
  - IR 8500A, Blockchain-Based Secure Software Assets Management (BloSS@M) - CSRC | https://csrc.nist.gov/pubs/ir/8500/a/ipd
  - Inventory and Control of Software Assets - Center for Internet Security | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
related:
  - Data-export limits are discovered only when leaving a vendor | /discovery/data-export-limits-discovered-only-when-leaving-a-vendor/
  - Why legacy applications remain live without an owner | /discovery/why-legacy-applications-remain-live-without-an-owner/
  - Business capabilities that depend on tools nobody supports | /discovery/business-capabilities-depend-on-tools-with-no-support-owner/
---
## The problem in plain language

Renewal and rationalisation reviews start with seats purchased, seats assigned and recent login activity. Those metrics are useful, but they can make the portfolio look simpler than it is. An application with few users may support a critical process, while a heavily used tool may duplicate capabilities already paid for elsewhere.

Licence counts answer one question well: are we paying for access that nobody uses? They answer a different question badly: does this application matter to the business, and what would it cost to change it? When cost pressure arrives, the first question is easy to report on and the second is hard, so the easy one tends to drive the decision.

## What you are actually trying to solve

The business needs to know which applications deserve investment, consolidation, replacement or retirement based on business contribution, criticality, cost, risk and architectural fit—not only whether people logged in recently.

The problem is usually put in practical terms: “application rationalisation framework”, “how to decide which software to cut”, “SaaS consolidation criteria”, “application portfolio assessment”, or “we have too many overlapping tools”. Each asks for a defensible way to make portfolio decisions that will survive scrutiny from finance, operations and the people who use the systems.

## Evidence and system mechanism

NIST Cybersecurity Framework 2.0 describes asset management as more than inventory. It calls for inventories of software, services and systems to be maintained (ID.AM-02), for assets to be prioritised based on classification, criticality, resources and impact on the mission (ID.AM-05), and for systems, software, services and data to be managed throughout their life cycles (ID.AM-08). Its governance function also asks organisations to understand the outcomes, capabilities and services they depend on. Read together, these describe a portfolio linked to what the organisation does, not a list of products and seat counts. The Center for Internet Security's [software asset control](https://www.cisecurity.org/controls/inventory-and-control-of-software-assets) takes a similar view, asking organisations to inventory, track and correct all software on the network.

NIST’s 2026 initial public draft IR 8500A, which proposes a blockchain-based approach to software asset management in federal procurement, frames its aims in similar portfolio terms: lifecycle tracking from acquisition to retirement, reuse of software assets, and eliminating duplicative procurement. The specific technology is not the point here. The useful signal is that a standards body treats duplication and lifecycle visibility as core asset-management concerns. Together these reinforce a practical distinction between counting software assets and managing them as an enterprise portfolio.

### Why usage data misleads on its own

- **Low use, high criticality:** a tax, payroll or regulatory reporting tool may be opened by three people a few times a quarter, yet failure at the wrong moment carries legal or financial consequence.
- **High use, low distinctiveness:** a popular note-taking or diagramming tool may be widely used while duplicating functions already included in the main productivity suite.
- **Hidden consumers:** some applications are mainly used by integrations or automations, not people, so login data understates their role.
- **Seasonal work:** year-end, audit or budgeting tools look idle for most of the year.

### An illustrative example

*Illustrative only, not a client case.* A cost review flags a specialist contract-management application with twelve licences and low activity. Cancelling it appears to save its subscription fee. On closer inspection, it holds the renewal dates and termination clauses for every supplier contract, feeds a monthly finance report and is the only place certain signed documents are stored. Exit would require data migration, a replacement process and a decision about records retention. The “saving” was real; the full cost of achieving it had not been counted.

## Problem owner and why now

The application portfolio owner and business capability owner share responsibility. Urgency rises at renewal cycles, cost-reduction programmes, mergers, platform consolidations and AI-tool proliferation, when usage data alone can encourage decisions that ignore dependencies and business importance.

Finance often initiates the review, but cannot complete it alone, because the information that determines value—what process an application supports and what depends on it—sits with operational and technical owners. Where those owners are unclear, the related problems in [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/) and [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/) usually surface first.

## Economic consequence

Weak portfolio decisions can preserve duplicate spend, remove a low-volume but critical capability, retain applications with poor strategic fit or create migration work that was never included in the saving estimate. Useful measures include total cost by capability, overlap, integration dependency, business criticality, data ownership, support burden and exit effort.

The error runs in both directions. Cutting on usage alone risks disrupting important work. Protecting everything that someone defends as important preserves overlap indefinitely. Both outcomes come from the same missing information.

## Root cause

The root cause is often an application inventory disconnected from business architecture. The organisation can count licences but cannot map applications to capabilities, processes, owners, dependencies and target-state decisions.

### Warning signs

- Rationalisation targets are set as a number of applications or a percentage of spend, before anyone has mapped what the applications do.
- Renewals are decided by the person who happens to receive the invoice.
- Several teams have bought different tools for the same job.
- A previous cancellation had to be reversed because something stopped working.
- Nobody can say what data would be lost if a given application were switched off.

## Practical intervention

1. Map each material application to the business capabilities and processes it supports.
2. Record owner, criticality, total cost, usage, integrations, data dependencies and contractual constraints.
3. Identify capability overlap rather than comparing products only by category.
4. Classify applications as invest, tolerate, migrate, consolidate or retire using explicit criteria.
5. Validate proposed savings against migration and dependency costs.
6. Review decisions at renewal and architecture-planning cycles.

### Trade-offs

Capability mapping takes effort, and a full portfolio exercise can stall under its own weight. A proportionate approach starts with the applications that carry the most spend, the most integrations or the nearest renewal dates. Scoring criteria also involve judgement; the aim is not a precise number but a consistent, visible basis for decisions that can be challenged and revised. Licence and usage data still have a role, particularly for straightforward reclamation of unused seats, which rarely needs a capability review. The financial side of that is covered in [the cost of unused software licences](/impact/unused-software-licences-financial-waste/).

## Diagnostic questions

- Can every material application be linked to a business capability?
- Do low-usage applications support high-criticality work?
- Which tools provide overlapping capability?
- What integrations or data dependencies make exit expensive?
- Does the renewal decision align with the target architecture?
- Is there a named owner who can explain why each material application exists?
- Do saving estimates include migration, retraining and data-retention effort?

## What good looks like

Licence and usage data remain inputs, but portfolio decisions are made in the context of business value, criticality, architecture, risk and lifecycle cost.

In practice, each material application has an owner, a recorded purpose and a known set of dependencies. Overlap is visible by capability, so consolidation candidates are obvious. Renewals arrive with enough notice to be decisions rather than defaults. And savings are reported net of the cost of achieving them.

## Where Mellorca fits

Mellorca can build application inventories, map capabilities and dependencies, identify duplication, support rationalisation decisions and create migration or consolidation roadmaps.

## Method note

NIST material supports the asset-management and business-value principles. Portfolio scoring and commercial thresholds should be adapted to the organisation’s actual strategy, contracts and operating dependencies. The examples in this article are illustrative and do not describe a specific organisation.
