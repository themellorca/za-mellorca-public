---
hub: discovery
record_id: DISC-344
slug: critical-workflows-run-on-low-code-apps-built-by-leavers
title: Critical workflows depend on low-code apps built by departed staff
description: Low-code apps are often owned and credentialed by their creator, so a departure orphans the workflow. How to find, own and hand over the critical ones.
lead: Low-code apps and automations are often owned and credentialed by their creator. When that person leaves, the workflow becomes an orphan. How to find, own and hand over the ones that matter.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Operations manager and IT manager, with department heads owning each workflow
budget_owner: Financial director or chief operating officer
sources:
  - Share a cloud flow - Power Automate | https://learn.microsoft.com/en-us/power-automate/create-team-flows
  - Application lifecycle management (ALM) with Microsoft Power Platform - Power Platform | https://learn.microsoft.com/en-us/power-platform/alm/overview-alm
  - Implement a data policy strategy - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy
related:
  - Why application inventories leave out shadow IT and AI tools | /discovery/why-application-inventories-leave-out-shadow-it/
  - Business capabilities that depend on tools nobody supports | /discovery/business-capabilities-depend-on-tools-with-no-support-owner/
  - New SaaS purchases create integrations nobody budgets to maintain | /discovery/why-new-saas-integrations-have-no-maintenance-budget/
summary: Low-code apps and automations are often owned and credentialed by their creator. When that person leaves, the workflow becomes an orphan. How to find, own and hand over the ones that matter.
layout: plain
---
The month-end stock reconciliation has run itself for three years. Every night a small workflow reads the warehouse export, matches it to the accounting system and emails exceptions to the finance team. On the first of the month it does not run. Nobody knows where it lives, which account it uses or how to open it. The person who built it left eight months ago, and her account was switched off on her last day, which is exactly what the offboarding checklist said to do.

This article looks at that operating condition: critical workflows that depend on low-code apps and automations built by staff who have since left. It is becoming more common as business users, and increasingly AI-assisted tools, make it easy to build working automations in an afternoon with no change record and no handover.

## The problem in plain language

Low-code and no-code tools let people closest to the work build the workflow they need. That is their strength. The weakness is that the result is often owned, in a technical sense, by one person: the app is stored in their workspace, the automation runs under their identity, and the connections to other systems use their credentials. For as long as that person is employed, nothing looks wrong. When they leave, the app is orphaned, the connection stops, or the automation keeps running under an account nobody is watching.

Two different failures are hiding in this. The first is loss of knowledge: nobody knows what the app does, what it connects to or why it was built that way. The second is loss of technical control: the app cannot be edited, restarted or reassigned because the only owner no longer has access.

## What you are actually trying to solve

Operations managers, finance leads and IT managers want to find undocumented automations, keep workflows running after a resignation, and bring departmental tools under proper control. The need behind this is concrete: know which workflows the business depends on, know who is responsible for each one, and make sure the loss of any one person cannot stop them.

## Evidence and system mechanism

### Ownership is technical, not just organisational

Microsoft's documentation on [sharing a cloud flow in Power Automate](https://learn.microsoft.com/en-us/power-automate/create-team-flows) shows how this works in practice. A flow can have more than one owner, and any owner can view the run history, edit the flow and update the credentials for a connection, but only the creator or an owner can add or remove owners. A flow that has a single owner therefore has a single point of failure.

### Lifecycle discipline applies to low-code too

Microsoft's overview of [application lifecycle management for Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/overview-alm) describes lifecycle management as covering governance, development and maintenance, and lists disciplines such as change management, support and release management. The point generalises beyond one vendor: an app built in a low-code tool still has a lifecycle, and a business that skips maintenance and support will eventually meet the consequences.

### Governance has to be designed in

The Power Platform guidance on [data loss prevention policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy) treats policy as a way to control which connectors can be combined, so that business data does not flow where it should not. For a small business the equivalent is a simple rule on what low-code tools may connect to and who is responsible when they do.

### Warning signs

- The only person who can explain a workflow is the person who built it.
- Automations run under a named individual's account rather than a service account or a team identity.
- Offboarding checklists cover email and laptops but not the workflows a person owns.
- Failures are noticed by users, not by monitoring; see [automations break when application interfaces change](/discovery/automations-break-when-application-interfaces-change/).

## Problem owner and why-now trigger

The operations manager or head of the department that uses the workflow owns the business dependency. IT, or whoever administers the tools, owns the platform and the access controls. The financial director typically owns the risk when the workflow touches invoicing, stock or payroll.

The trigger is increasingly the spread of AI tools. When staff can describe a task to an assistant and receive a working automation, the number of small, unreviewed workflows grows quickly, and each is tied to its creator.

## Economic consequence

The cost appears as a stoppage followed by a rebuild. A finance team that reconciles by hand while someone reverse-engineers a missing workflow spends days of skilled time. A rebuilt automation is rarely identical to the original, so subtle rules are lost: the exception that used to be excluded, the customer that was handled differently. The business may also be left with a running automation that moves data under a deleted or disabled identity, which is an audit and security problem as well as an operational one. This is the low-code expression of the wider pattern in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/), and of the cost described in [key-person operational dependency](/impact/key-person-operational-dependency/).

## Root cause

- **Creator equals owner by default.** Tools assign ownership to whoever built the app, and nobody reassigns it.
- **No inventory.** The business does not know what exists, so it cannot include it in a leaver process.
- **Personal credentials in connections.** Workflows borrow a person's access instead of using a purpose-built identity.
- **No definition of critical.** Without a rule that says which workflows matter, all of them are treated as informal.

## Practical intervention

1. **Find what exists.** Use the administration console of each platform to list apps, flows and scheduled automations, with their owners, last-run dates and connections. Add a column for the business process each one supports.
2. **Classify by dependency.** Mark each workflow as critical, useful or experimental. Critical means a failure would stop invoicing, delivery, payroll, compliance reporting or customer service.
3. **Assign two owners to every critical workflow.** One business owner who understands the purpose and one technical owner who can edit and restart it. Where the platform allows more than one owner, set that up.
4. **Move connections off personal accounts.** Use a service account or shared identity that is controlled by the business and documented, with access reviewed like any other privileged account.
5. **Add the workflow to the leaver checklist.** Before a person's access is closed, list the apps and automations they own and reassign each one.
6. **Write a one-page handover.** For each critical workflow record what triggers it, what it does, what it connects to, who is told when it fails, and how to run the process manually. The ownership model is expanded in [why critical low-code automations need support ownership](/discovery/why-critical-low-code-automations-need-support-ownership/).

### Trade-offs

Heavy controls can push people back to spreadsheets and personal tools that are even harder to see. Aim for a light registration step, not an approval committee.

### An illustrative example

Illustrative: a Cape Town logistics company with about 70 staff discovered that a nightly workflow producing delivery confirmations for its largest customer ran under the account of a former operations analyst. The account was due to be deleted in the next licence clean-up. A review of the tenant found 63 flows, 11 of them tied to departed staff and four classed as critical. The company added a second owner to each critical flow, moved connections to a shared service identity, and added a line to the leaver checklist. The next resignation caused no disruption.

## Diagnostic questions

- How many apps and automations exist in your tools, and how many belong to people who have left?
- Which of them would stop revenue, delivery or reporting if they failed tomorrow?
- Under whose credentials does each critical workflow run?
- Does the leaver checklist ask what the departing person owns, not only what they hold?
- If the last owner vanished, who could restore the workflow and how long would it take?

## What good looks like

There is a live list of low-code apps and automations, with critical ones identified. Each critical workflow has a business owner, a technical owner and a short handover note, and runs under an identity the business controls. Leaver and role-change processes reassign ownership as routinely as they collect laptops. When a builder moves on, the business notices the dependency on the way out, not after the failure. See also [application owners leave without transfer](/discovery/application-owners-leave-without-transfer/).

## Where Mellorca fits

Mellorca helps businesses inventory the low-code estate, identify which workflows carry real operational weight, and move them onto defined ownership, documented connections and a sensible support routine, so that departmental initiative is kept and the single point of failure is removed.

## Method note

Microsoft documentation is used to show how ownership and connections are typically structured in a widely used low-code platform; other tools differ and should be checked directly. The example is illustrative rather than a client case.
