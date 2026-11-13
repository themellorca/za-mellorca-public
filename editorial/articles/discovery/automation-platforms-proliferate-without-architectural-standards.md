---
hub: discovery
record_id: DISC-467
slug: automation-platforms-proliferate-without-architectural-standards
title: When automation platforms multiply without architectural standards
description: Low-code flows, bots, scripts and AI agents pile up with no rules on what to use where. Why that is fragile and costly, and how standards help.
lead: Low-code flows, RPA bots, integration tools, scripts and AI agents accumulate with no rules on which to use for what. Why that makes automation fragile and costly, and how a short set of standards fixes it.
category: AI, Automation & Agent Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Head of IT or automation lead, with the enterprise or solutions architect where one exists
budget_owner: CIO or COO, with finance oversight of overlapping licences
sources:
  - Power Platform governance overview and strategy - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/admin-best-practices
  - Develop a tenant environment strategy to adopt Power Platform at scale - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy
  - Maintain an architecture decision record (ADR) - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record
related:
  - Automations break when application interfaces change | /discovery/automations-break-when-application-interfaces-change/
  - Why critical low-code automations need support ownership | /discovery/why-critical-low-code-automations-need-support-ownership/
  - AI-generated decisions cannot be traced to source data | /discovery/ai-generated-decisions-cannot-be-traced-to-source-data/
summary: Low-code flows, RPA bots, integration tools, scripts and AI agents accumulate with no rules on which to use for what. Why that makes automation fragile and costly, and how a short set of standards fixes it.
layout: plain
---
Count the ways work is automated in a typical growing business. There is a low-code workflow tool that came with the office suite. Marketing uses a separate no-code connector service. Finance has an RPA bot that keys invoices into the accounting system. IT runs scheduled scripts on a server. The ERP has its own workflow engine. The newest arrivals are AI agents built in yet another tool. Each was chosen for good reasons by the team that needed it. Nobody chose the whole set.

This article is about that condition: automation platforms that multiply without architectural standards. It is related to, but different from, individual workflows being duplicated. Here the problem is the platform layer itself: how many tools exist, what each should be used for, and whether any common rules apply across them.

## The problem in plain language

Each automation platform brings its own way of connecting to systems, storing credentials, handling errors, logging activity and being administered. With one or two platforms, a small team can understand all of them. With six or seven, nobody can. Automations break in ways that are hard to diagnose, security reviews cannot see the whole picture, licences overlap, and every new automation starts with a debate about which tool to use, or no debate at all.

## What you are actually trying to solve

Leaders ask how to govern automation tools, whether to standardise on one platform, or how to stop tool sprawl. The realistic need is not a single platform for everything. It is a small set of agreed standards: which kinds of work belong on which platform, and what every automation must do regardless of the tool, such as which identities it runs under, where it is logged and who owns it.

## Evidence and system mechanism

### Governance starts with administration and environments

[Microsoft's Power Platform governance guidance](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/admin-best-practices) lists the starting points of governance as designating an administrator, supporting management at scale and establishing an environment strategy. Its [environment strategy guidance](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy) describes what happens without that structure: when makers build and share in a single shared environment, there is a lack of isolation and makers encroach on each other. It recommends routing makers to their own development environments and grouping environments so that governance and security rules apply consistently. These recommendations are written for one platform, but they describe a general truth. Every automation platform needs an administrator, an environment structure and consistent rules. Multiply the platforms and you multiply that work, or more often, it is simply not done.

### Undocumented decisions get repeated or contradicted

Platform choices are architectural decisions: they are hard to reverse and they shape everything built afterwards. [Microsoft's guidance on architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record) recommends recording key decisions with their context, the options considered, the outcome, trade-offs and status, and warns that a decision made but never recorded is likely to be forgotten, leading to repeated debates or later changes that contradict the original intent. That is precisely how automation platforms proliferate: each new tool is adopted without reference to why the previous ones were chosen.

### Warning signs

- Nobody can list every automation platform in use, with its administrator.
- Similar tasks are automated in different tools depending on which team built them.
- Automations run under personal accounts, a risk covered in [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).
- Failures have to be investigated in several consoles with different logging.
- Several licences are paid for tools that do broadly the same thing.
- Platform choices are made by vendors' sales teams rather than by the business; see [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/).

## Problem owner and why-now trigger

The head of IT or automation lead usually owns the problem, sometimes with a solutions or enterprise architect. The COO or CIO typically holds the budget, and finance takes an interest when overlapping licences become visible.

The common trigger is an automation backlog. When demand for automation outstrips the central team, business units adopt their own tools to move faster. The arrival of AI agent builders has added a new wave of platforms in a short time. Other triggers include a security review that cannot account for all automation credentials, an audit question about who can change automated financial processes, and a renewal season that reveals overlapping contracts.

## Economic consequence

The costs build up in several places. Licences overlap. Skills are spread thin, because staff must know several tools superficially rather than one or two well. Maintenance costs rise because each platform needs patching, administration and monitoring. Incidents take longer to diagnose when an end-to-end process crosses three platforms with three logging approaches. And security exposure grows with every platform that stores credentials and connects to core systems. The general point that more tools can make a business harder to run is made in [why more software can make the business harder to run](/insights/why-more-software-can-make-the-business-harder-to-run/).

## Root cause

- **No platform decision rules.** There is no agreed answer to "what should this kind of automation be built in?"
- **Decisions not recorded.** Earlier platform choices and their reasoning are lost, so each new choice starts from scratch.
- **No cross-platform minimum standards.** Identity, logging, environments, ownership and error handling vary by tool.
- **Delivery pressure without a sanctioned fast path.** Teams adopt their own tools because the approved route is too slow.

At workflow level, the same causes produce duplicated automations, as described in [the same workflow automated independently by multiple teams](/discovery/the-same-workflow-is-automated-independently-by-multiple-teams/).

## Practical intervention

1. **Inventory platforms, not just automations.** List every automation tool, its administrator, its licence cost, how many automations it runs and which systems it connects to.
2. **Write platform decision rules.** A one-page guide: for example, user-level productivity flows in the office-suite tool; system-to-system integration in the integration platform; screen-level automation of systems without interfaces in the RPA tool; AI agents only in the approved agent platform. Record each choice as a decision record with its reasoning.
3. **Set minimum standards that apply on every platform.** Service identities rather than personal accounts, separate development and production environments, a named owner per automation, central logging or at least alerting to a monitored queue, and a defined failure path.
4. **Designate an administrator per platform.** Each platform in use has a named administrator responsible for access, environments and updates.
5. **Retire or contain the rest.** Platforms that fall outside the rules are either migrated over time or contained, with no new automations allowed.
6. **Provide a fast, sanctioned route.** Make it quicker to build on an approved platform than to adopt a new one.

### Trade-offs

Standardising too hard can force poor fits: some work genuinely suits a specialist tool. The aim is a small, deliberate set of platforms with clear purposes, not one tool for everything. Migration off retired platforms costs effort and should be prioritised by risk, starting with automations that touch money, customers or regulated data.

### An illustrative example

*Illustrative:* a Bloemfontein insurance brokerage with around 140 staff found it was running five automation tools, plus scripts on an old server, and had recently started piloting an AI agent builder. Three of the tools could connect to its policy administration system, each using different stored credentials. The brokerage agreed a four-platform rule set, recorded the reasoning in decision records, moved all automations to service accounts and set a deadline to migrate the remaining scripts. New requests were triaged against the rules within two working days.

## Diagnostic questions

- How many automation platforms does the business use, and who administers each?
- Is there a written rule for which kind of automation goes on which platform?
- Do all automations, regardless of platform, run under service identities and log failures somewhere monitored?
- Can you trace an end-to-end automated process across platforms when it fails?
- Were the last two platform adoptions decided with reference to the existing ones?

## What good looks like

The business runs a small, known set of automation platforms, each with a clear purpose and a named administrator. Platform choices are recorded with their reasoning. Every automation meets the same minimum standards for identity, environments, ownership, logging and failure handling, whichever tool it is built in. New requests are routed quickly to the right platform, and new tools are adopted only through a deliberate, recorded decision.

## Where Mellorca fits

[Digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work can produce the platform inventory, decision rules and migration priorities. [Business automation](/services/business-automation/) delivery then builds new automations to those standards and moves high-risk ones off retired platforms.

## Method note

This article uses vendor governance and architecture guidance and applies it across platforms. It does not quote figures on typical numbers of automation tools per business, as no reliable source was found. The example is illustrative and not based on a specific client.
