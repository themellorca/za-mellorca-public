---
hub: discovery
record_id: DISC-475
slug: retired-processes-leave-orphaned-automations-running
title: Retired processes leave orphaned automations running
description: When a process, branch or system is retired, automations built around it often keep running. How to find them, assign ownership and retire them safely.
lead: When a process, branch or system is retired, the automations built around it often keep running. How to find orphaned automations, assign ownership and retire them safely.
category: AI, Automation & Agent Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Process owner with the automation platform administrator
budget_owner: IT budget holder/COO
sources:
  - Manage orphaned flows when owner leaves organization - Power Automate | https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org
  - Limits of automated, scheduled, and instant flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/limits-and-config
  - Power Platform inventory - Microsoft Power Platform admin center | https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory
related:
  - Teams cannot tell which processes are safe to automate end to end | /discovery/teams-cannot-tell-processes-safe-to-automate/
  - Why critical low-code automations need support ownership | /discovery/why-critical-low-code-automations-need-support-ownership/
  - Automations break when application interfaces change | /discovery/automations-break-when-application-interfaces-change/
  - Critical workflows depend on low-code apps built by departed staff | /discovery/critical-workflows-run-on-low-code-apps-built-by-leavers/
summary: When a process, branch or system is retired, the automations built around it often keep running. How to find orphaned automations, assign ownership and retire them safely.
layout: plain
---
Businesses change how they work all the time. A product line is dropped, a branch closes, a supplier is replaced, a manual approval is abolished, a new system takes over from an old one. The process is retired in the minds of the people involved. The automations that supported it often are not. They keep running, sending emails nobody reads, copying files into folders nobody opens, creating records in systems nobody checks, and sometimes doing things that are now wrong.

## The problem in plain language

An orphaned automation is one that is still active but no longer serves a live process, or no longer has anyone responsible for it. It might be a scheduled flow that still emails a weekly report to a manager who left, a rule that still forwards supplier invoices to an old shared mailbox, a script that still pushes stock levels to a marketplace the business stopped selling on, or an integration that still creates customer accounts in a CRM that has been replaced.

Because nothing visibly breaks, these automations are rarely noticed. They are discovered by accident: an unexpected bill for API usage, a customer receiving a message about a service that no longer exists, an auditor asking why an old system still receives personal information, or a failure alert that nobody recognises.

## What you are actually trying to solve

The person facing this is usually an IT manager, operations lead or the person who administers the business's automation platform. The questions look like "how do we find unused Power Automate flows?", "how do we clean up old Zapier zaps?", "where is our automation inventory?" or "what happens to flows when an employee leaves?"

The underlying need is to know which automations are running, whether each one still has a purpose and an owner, and to retire the ones that do not without breaking something that turns out to matter.

## Evidence and system mechanism

Platform vendors document the ownership side of the problem. Microsoft's support guidance for Power Automate defines an orphaned flow as one that no longer has a valid owner, notes that such flows can fail if they use connections tied to that user account, and describes how administrators can find flows without an owner and assign new co-owners ([Microsoft Learn: Manage orphaned flows when owner leaves organisation](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org)).

Platform clean-up rules do not solve the purpose side. Power Automate's published limits state that a cloud flow not triggered within a 90-day period might be turned off, that owners are notified 30 days before suspension, and that flows owned by users with premium or capacity licences are not subject to this suspension ([Microsoft Learn: Limits of automated, scheduled and instant flows](https://learn.microsoft.com/en-us/power-automate/limits-and-config)). An automation attached to a retired process may still be triggered every day, by a schedule, an incoming email or a record change, so inactivity rules will never catch it.

And a flow that is turned off for inactivity can be turned back on by an owner who does not know the process has gone. Microsoft's [Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory) lets administrators list the flows in a tenant with their owner, created and modified dates, and export the list to CSV, which gives a starting point for an automation inventory. The owner shown is the creator and does not update when ownership changes.

The general mechanism holds across platforms. Automations are triggered by events, not by the existence of a process. When the process stops, the events often continue, and the automation continues with them.

## Problem owner and why now

The problem owner is whoever owns the business process change, such as the operations manager who closed a branch or the finance manager who replaced an approval route, together with the automation platform administrator. In practice neither believes it is their job, which is the problem. Budget usually sits with the IT budget holder or COO.

The trigger is rapid tool adoption. As low-code tools spread, staff across the business build automations themselves, and many are tied to personal accounts. Retirements expose the gap: a system migration, a restructure, a staff departure, a supplier change, or a licence review that finds connectors still in use for systems the business thought it had left.

## Economic consequence

- **Running cost:** licences, connector fees, API calls and storage continue for automations that deliver nothing.
- **Data exposure:** personal or financial data keeps flowing to old systems, mailboxes or third parties, which is difficult to defend under POPIA's purpose and retention principles.
- **Wrong actions:** an automation following an old rule can send incorrect messages, create duplicate records or update prices and stock incorrectly.
- **Noise:** failures from orphaned automations fill alert channels and train people to ignore alerts; see [who watches the automations](/insights/who-watches-the-automations/).
- **Blocked change:** nobody dares switch off an old system because unknown automations might depend on it.

Measure these through your own platform usage reports, connector bills and incident records.

## Root cause

- **No automation inventory:** nobody holds a list of what runs, what triggers it, what it touches and why it exists.
- **Automations not linked to processes:** each automation was built for a task, and the link to the business process was never recorded.
- **Retirement checklists ignore automation:** process and system decommissioning covers people, data and licences, but not the flows built around them.
- **Personal ownership:** automations built and owned by individuals, often on their own credentials, lose their context when those people move on. See [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).

## Practical intervention

1. **Build the inventory.** Export the list of automations from each platform in use. For each, record trigger, systems touched, data handled, owner and the business process it supports.
2. **Classify each automation.** Live and owned; live but unowned; supporting a retired process; unknown. The last three groups need action.
3. **Retire safely.** Turn off rather than delete at first, notify likely stakeholders, watch for a defined period, then remove connections and credentials before deleting the automation itself.
4. **Add automation to every retirement checklist.** When a process, branch, supplier relationship or system is retired, the checklist asks which automations depend on it.
5. **Assign owners to processes, not just flows.** The process owner confirms annually that each linked automation is still needed.
6. **Use team or service accounts** for business-critical automations so ownership survives staff changes.

Orphaned applications follow the same pattern at a larger scale; see [why legacy applications remain live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/).

### An illustrative example

*Illustrative:* a Gqeberha automotive-parts distributor moves its online sales from one marketplace to its own web shop. A year later a licence review finds a flow still sending nightly stock updates, including supplier cost prices, to the old marketplace through an API key that was never revoked. The flow was built by a former e-commerce coordinator and triggered on a schedule, so no inactivity rule ever applied.

## Diagnostic questions

- Can you produce a list of every active automation across all platforms in use?
- Does each automation have a named owner who still works for the business?
- When you last retired a process or system, did anyone check which automations depended on it?
- Do any automations still send data to systems, mailboxes or partners you no longer use?
- Would you recognise every automation failure alert received last month?

## What good looks like

A current inventory links every automation to a business process and an owner. Retiring a process or system automatically triggers a review of dependent automations. Business-critical automations run under team or service accounts. Annual attestation confirms each automation is still needed, and unowned or purposeless automations are switched off, observed and removed in a controlled way.

## Where Mellorca fits

Mellorca helps businesses build automation inventories, link automations to processes and owners, and retire orphaned automations without disrupting live work. Discovery usually starts with a [digital systems audit](/services/digital-systems-audit/), and ongoing ownership checks can be run as part of [managed digital operations](/services/managed-digital-operations/).

## Method note

Power Automate is used as a documented example; other low-code and integration platforms handle ownership and inactivity differently, so check your own platform's rules. Platform limits change over time. The example is illustrative and no statistics are quoted.
