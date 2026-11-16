---
hub: discovery
record_id: DISC-003
slug: leavers-keep-their-accounts-when-offboarding-is-a-manual-checklist
title: Leavers keep their accounts when offboarding is a manual checklist
description: Each new application adds an account someone must remember to remove when a person leaves. Why manual offboarding checklists fall behind the application estate, and how to make leaving trigger access removal automatically.
lead: Each new application adds an account someone must remember to remove when a person leaves. Why manual offboarding checklists fall behind the application estate, and how to make leaving trigger access removal automatically.
category: Identity & Access Lifecycle
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Identity & Access Lifecycle
problem_domain: Identity & Access Lifecycle
problem_owner: Head of IT or identity and access lead
budget_owner: CIO or COO
sources:
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
  - Identity and access management | https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
related:
  - Why new employees wait days for access to the systems they need | /discovery/why-new-employees-wait-for-system-access/
  - Application owners leave without transferring responsibility | /discovery/application-owners-leave-without-transfer/
  - Privileged accounts are reviewed without application context | /discovery/why-administrator-access-reviews-fail-when-reviewers-cannot-see-the-application/
summary: Each new application adds an account someone must remember to remove when a person leaves. Why manual offboarding checklists fall behind the application estate, and how to make leaving trigger access removal automatically.
layout: plain
---
A logistics company in Germiston rolled out a new fleet tracking platform in March and a new quoting tool in June. Its offboarding checklist, a shared spreadsheet maintained by the IT administrator, was last updated the previous year. When a dispatch supervisor resigned in August, IT disabled his email and network login on his last day, as the checklist required. In October, a routine review of the fleet platform found his account still active, with a login two weeks after he left. Nobody had added the fleet platform to the checklist, and the platform did not use the company's central sign-in.

## The problem in plain language

When someone leaves, every account they hold should be closed or disabled. In many small and mid-sized businesses, that depends on a person working through a list: email, network, finance system, CRM, file shares and whatever else the list includes. The list is only as good as its last update. Each new application adds another account that someone must remember to remove. If the application was bought by a department, set up by a supplier or connected outside the central sign-in, it may never make it onto the list at all.

The result is not usually dramatic. It is a steady build-up of active accounts belonging to people who no longer work for the business, discovered by accident, by licence counts or by an auditor.

## What the buyer is actually trying to solve

The head of IT or identity lead wants leaving the business to switch off access everywhere, on time, without relying on memory. They want to know which applications sit outside the central sign-in, who tells IT that someone is leaving and when, and how to prove after the fact that access was removed. Behind those questions sits a practical concern: the business keeps adding applications faster than the checklist is updated.

## Evidence and system mechanism

### Leaver processes are meant to be driven by lifecycle events

Identity platforms now treat leaving as an event that can trigger work automatically. Microsoft's overview of [lifecycle workflows in Entra ID Governance](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows) describes joiner, mover and leaver phases and says the aim is that people who are no longer tied to the organisation have their access revoked in a timely way. It describes automated disabling and removal of user accounts, triggers based on user attributes, removal of access packages, and workflow history and audit logs for troubleshooting and compliance. The feature requires specific licences, but the principle is general: a reliable leaving date in HR data drives the removal, not a person remembering.

### Guidance expects prompt removal and regular review

The UK National Cyber Security Centre's [identity and access management guidance](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management) says account management should include a joiners, movers and leavers policy, that leavers' access should be removed promptly, and that accounts should be reviewed regularly. It also points out that when online services rely on single sign-on with organisational identities, disabling the work account cuts access to those linked services. The gap appears exactly where applications sit outside that sign-in.

### South African law requires reasonable safeguards

Section 19 of the [Protection of Personal Information Act](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires a responsible party to take appropriate, reasonable technical and organisational measures to prevent unlawful access to personal information, and to identify reasonably foreseeable internal and external risks. An active account held by a former employee, in a system containing customer or staff records, is a foreseeable risk.

## Why this becomes urgent

A new application rollout is the common trigger, because it is the moment the checklist falls behind. Other triggers include a spike in resignations, an audit finding on dormant accounts, a licence true-up that reveals paid seats for former staff, or an incident involving a former employee's login.

## Economic consequence

Former employees' accounts can be used to view or remove customer and commercial information, by the former employee or by anyone who obtains the credentials. Paid licences continue for people who have left. IT staff spend time on periodic clean-ups and on answering audit queries. If an incident occurs, the business may struggle to show it took reasonable measures, which matters under POPIA. The cost of the checklist itself grows with every application, because each one adds manual steps and another chance to miss something.

## Root cause

- **No authoritative leaving event.** IT learns about leavers by email or chat, sometimes after the last day.
- **Applications outside central sign-in.** Disabling the main account does not reach them.
- **Checklist not tied to procurement.** New applications are bought without updating the offboarding list.
- **No owner per application.** Nobody is accountable for removing accounts in each system.
- **No reconciliation.** Application user lists are never compared against the HR list of current staff.

## What good looks like

HR records the leaving date in the HR system, which is the single trigger for offboarding. That event disables the central identity on the right date and time, which in turn cuts access to every application connected through single sign-on or automatic provisioning. For the applications that cannot connect, the same event creates tasks for named application owners, with a deadline and a confirmation step. No new application goes live until its offboarding route is defined. A monthly reconciliation compares user lists in each application with current staff and investigates differences. Records show when each account was removed and by whom.

Related reading covers [staff who keep old access after changing roles](/discovery/staff-keep-old-application-access-after-they-change-roles/), [single sign-on coverage lagging behind the software estate](/discovery/why-sso-coverage-lags-behind-the-saas-portfolio/) and the wider pattern of [offboarding leaving digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/).

## Diagnostic questions

- How does IT learn that someone is leaving, and how far in advance?
- Which applications are not connected to your central sign-in?
- When was the offboarding checklist last updated, and does it include every application bought this year?
- Who owns account removal in each application?
- When did you last compare application user lists with your current staff list?

## Practical next actions

1. Compare user lists from your ten most important applications with the HR list of current staff and disable any former employees' accounts found.
2. Make the HR leaving date the single trigger for offboarding, with a set notice period to IT.
3. Connect as many applications as possible to central sign-in or automatic provisioning, starting with those holding customer or financial data.
4. Assign a named owner and a removal task for every application that cannot be connected.
5. Add an offboarding route to the go-live checklist for every new application.
6. Run the reconciliation monthly and keep the records as evidence.

## Where Mellorca fits

Mellorca helps businesses connect HR data to identity platforms, extend single sign-on and provisioning across their applications and set up owner tasks for the rest. This sits within [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

This article uses Microsoft Entra documentation as an example of lifecycle automation, NCSC guidance on identity and access management and the text of POPIA section 19. It is not legal advice. The opening example is illustrative.
