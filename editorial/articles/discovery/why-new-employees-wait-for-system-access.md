---
hub: discovery
record_id: DISC-001
slug: why-new-employees-wait-for-system-access
title: Why New Employees Wait Days for Access to the Systems They Need
description: When a new employee is ready to work but access arrives application by application, the real problem is usually identity lifecycle design rather than onboarding effort.
lead: When a new employee is ready to work but still waiting for email, shared drives, finance tools, CRM access or specialist applications, the visible problem is onboarding delay. The deeper problem is usually that identity lifecycle events are not connected to the systems that grant access.
category: Identity & Access Lifecycle
published_date: 2026-09-02
updated_date: 2026-09-02
tags:
  - Identity lifecycle
  - Provisioning
  - Digital operations
cta_label: Implementation & Integration
cta_href: /services/systems-implementation-integration/
side_notes:
  - Problem owner: Head of IT / Identity & Access Lead
  - Budget owner: CIO / COO
problem_domain: Identity & Access Lifecycle
problem_owner: Head of IT / Identity & Access Lead
budget_owner: CIO / COO
sources:
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
  - What is HR-driven provisioning with Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning
  - Identity and access management | https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management
  - Microsoft Entra ID Governance deployment guide for employee lifecycle automation - Microsoft Entra | https://learn.microsoft.com/en-us/entra/architecture/governance-deployment-employee-lifecycle
closing_title: Method note
closing_text: This article diagnoses a class of operating problem. The cited platform documentation demonstrates current workflow and integration mechanisms; it does not prove that every organisation has the same failure mode. Quantify impact from your own process, transaction, labour and exception data.
related:
  - Why integration costs stay hidden inside application projects | /discovery/integration-costs-hidden-inside-application-projects/
  - Why Free Trials Become Production Dependencies | /discovery/why-free-trials-become-production-dependencies/
  - Why AI Agents Can Answer Questions but Cannot Complete Work Across Business Systems | /discovery/why-ai-agents-cannot-complete-work-across-business-systems/
---
## The problem in plain language

A person joins the business on Monday. HR has the employee record. The manager knows the role. IT knows which applications exist. Yet the employee still spends the first days requesting access one system at a time, waiting for managers to approve it, asking the service desk for updates and discovering new missing permissions only when real work begins.

This is often treated as an onboarding inconvenience. That framing is too shallow. It is an operating-system problem: the organisation has not converted a known business event (someone joining, changing role or leaving) into a reliable set of digital access actions.

Consider a 200-person financial advisory firm. A new paraplanner starts on the first of the month. Her laptop is ready and she can log in to email. On day two she finds she cannot open the client document library. On day three she discovers the financial planning software needs a separate licence that only one person in IT can assign. On day five she still has no access to the compliance system because the approver is on leave. None of this was unknown on the day her contract was signed. It simply was not turned into actions until she ran into each gap.

## What the buyer is actually trying to solve

The search language around this problem tends to be practical rather than architectural: "new employee access takes too long", "automate employee provisioning", "joiner mover leaver workflow", "HR to IT onboarding automation", or "how to give new starters the right system access". Those searches are different descriptions of the same control gap.

The commercial signal is strong when onboarding repeatedly requires tickets, spreadsheets, email approvals or a person who knows which applications each role normally needs. Equipment often suffers from the same gap; see [the cost of new employees starting without equipment](/impact/new-employees-without-equipment-onboarding-cost/).

## Evidence: modern identity platforms already model the lifecycle explicitly

Microsoft's current Entra documentation describes identity governance around a joiner, mover and leaver lifecycle. Its [lifecycle workflows](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows) can add users to groups and teams, assign and remove access packages, enable and disable accounts, send emails to managers, run custom tasks and remove access when a person leaves. The stated aim is that people are ready to go on day one with the access they need, and that access is revoked in a timely way when they leave.

Microsoft also documents [HR-driven provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning), where the HR system becomes the source of authority for digital identities. A new hire added in the HR system triggers account creation; changes to name, title or manager flow through to the account; and a termination disables it. The same page describes earlier manual methods, such as uploading CSV files or running custom scripts, as error-prone, insecure and hard to manage.

The point is not that every organisation should buy a particular Microsoft feature. The useful evidence is architectural: mature identity operations treat employment state as a trigger, access as a governed entitlement, and downstream provisioning as a workflow that can be monitored and audited. If a business still relies on manual remembering, the process is operating below that standard.

## Who owns the problem?

The immediate owner is usually IT, identity or service management. The budget owner may be the CIO or COO because the consequence is broader than security. HR is an essential data owner, managers are access decision-makers, application owners are technical evaluators, and the employee is the end user.

This split ownership is exactly why the problem survives. No single team can fix it by working only inside its own system.

## Why it becomes urgent

Priority rises when headcount grows, the business opens new locations, a merger introduces more applications, onboarding delays become visible to executives, or an audit exposes inconsistent access removal. It also becomes urgent when role changes happen frequently: a company may automate new-hire accounts but still leave "movers" with a mixture of old and new permissions.

The UK National Cyber Security Centre's guidance on [identity and access management](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management) makes the same point from a security angle: access should be changed for movers and revoked when no longer needed, and accounts should be reviewed regularly for unnecessary privileges. Slow joiner handling and slow leaver handling are two ends of the same broken lifecycle, which is why [offboarding that leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) so often appears alongside onboarding delays.

### Warning signs

- New starters' first week includes a list of tickets rather than a list of tasks.
- Managers forward the same access request emails for every hire in the same role.
- Only one or two people know which applications a given role needs.
- People who changed departments still have access to their old team's systems.
- Licence counts never seem to fall, even after people leave.

## The economic consequence is wider than day-one productivity

- **Lost productive time:** paid employees wait for systems required to do the work they were hired to perform.
- **Service-desk labour:** IT spends time processing repetitive requests that follow predictable rules.
- **Management overhead:** managers repeatedly approve or chase access instead of making one role-based decision.
- **Licence leakage:** licences remain assigned after role changes or departures.
- **Control risk:** inconsistent joiner, mover and leaver handling makes it harder to prove that access is appropriate and removed on time.

Do not apply a generic percentage to these costs. Measure your own time-to-ready, number of onboarding access tickets, manual touches, licence removals and exceptions.

## The likely root causes

The symptom "access takes too long" can have several causes. The most common architecture failures are an HR system that is not treated as the authoritative lifecycle source; no agreed mapping from role to baseline access; applications that are provisioned independently; approval rules that differ by department; incomplete integration capability; and no exception process for unusual roles.

Automation without those decisions merely moves confusion faster.

## A practical intervention

1. Define the authoritative event source for join, move and leave events.
2. Map baseline access by role, department, location and employment type.
3. Separate automatic baseline access from access that genuinely requires approval.
4. Connect the identity layer to applications using supported provisioning mechanisms or controlled workflow integrations.
5. Design exceptions explicitly: contractors, temporary elevation, cross-functional roles and failed provisioning.
6. Record every automated and manual decision so the lifecycle can be audited.
7. Measure time from authoritative lifecycle event to "ready to work", not merely account creation.

### Trade-offs

- **Broad baseline versus least privilege.** A generous baseline package speeds onboarding but grants more access than some people need. Keep the baseline to what every person in the role uses, and make the rest requestable.
- **HR data quality becomes critical.** Once HR records drive access, a wrong department or start date has immediate consequences. HR needs to treat those fields as operational data.
- **Not every application can be connected.** Some older or niche systems have no provisioning interface. These need a tracked manual task, not a forgotten one.

## Diagnostic questions

- Can HR create or change an employee record without anyone emailing IT?
- Can the business describe the minimum access package for each common role?
- Can IT see which downstream applications failed to provision?
- Does a role change remove obsolete access as reliably as it adds new access?
- Can a leaver workflow prove when critical access was disabled?
- Can licence recovery be triggered by the same lifecycle event?

## What to do first

1. Pick the three roles you hire most often and write down their baseline applications and groups.
2. Ask HR to notify IT of each new starter through one structured route, at least a week before the start date.
3. Track time from start date to "ready to work" for the next five hires.
4. Apply the same discipline to leavers, and check whether access for recent leavers, including suppliers, has actually been removed. Supplier access is covered in [why supplier access survives after engagements end](/discovery/why-supplier-access-survives-after-engagements-end/).

## What good looks like

A good identity lifecycle does not mean every access decision is automatic. It means predictable decisions are automated, sensitive decisions remain governed, exceptions are visible, and employment changes propagate through the digital estate without depending on memory. A new starter receives the baseline tools needed for the role; unusual access is requested deliberately; and departures remove access through a controlled, traceable process.

## Where Mellorca fits

This problem usually requires more than configuring one identity product. Mellorca can map the joiner, mover and leaver operating model, identify authoritative systems and application dependencies, design role and approval logic, implement integrations, and establish monitoring for failures and exceptions. The goal is a working lifecycle across systems, not a prettier onboarding checklist.

## Commercial path

A sensible path is: discovery article, then identity-lifecycle diagnostic, application and access dependency map, implementation roadmap, provisioning and workflow integration, and managed monitoring.
