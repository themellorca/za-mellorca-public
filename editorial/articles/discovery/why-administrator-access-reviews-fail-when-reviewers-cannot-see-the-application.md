---
hub: discovery
record_id: DISC-359
slug: why-administrator-access-reviews-fail-when-reviewers-cannot-see-the-application
title: Privileged accounts are reviewed without application context
description: Quarterly lists of admin accounts get approved without anyone knowing what the access allows. How to add application context so reviews remove access.
lead: Quarterly lists of admin accounts get approved without anyone knowing what the access allows. How to add application context so reviews remove access.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager or information security lead, with application owners
budget_owner: IT director or chief operating officer
sources:
  - privileged account - Glossary - CSRC | https://csrc.nist.gov/glossary/term/privileged_account
  - CIS Control 6: Access Control Management | https://www.cisecurity.org/controls/access-control-management
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - What is Privileged Identity Management? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure
related:
  - Why supplier access survives after the supplier engagement ends | /discovery/why-supplier-access-survives-after-engagements-end/
  - Security monitoring creates alerts with no business-priority context | /discovery/why-security-alerts-need-business-context-to-be-useful/
  - Incident lessons do not update preventive controls | /discovery/why-incident-reviews-must-change-the-controls-that-failed/
summary: Quarterly lists of admin accounts get approved without anyone knowing what the access allows. How to add application context so reviews remove access.
layout: plain
---
Every quarter, someone in IT exports a list of accounts with administrator rights and emails it to the managers who are meant to confirm each one. The list shows names, usernames and group memberships. It does not say which application the account administers, what that application holds, or whether the person still does the job that needed the access. The managers see a column of technical identifiers, recognise a few names, and click "approve". The review is complete, and the evidence is filed. Whether it reduced any risk is another matter.

This is the condition this article examines: privileged accounts reviewed without application context. It matters most when a customer or auditor asks for proof that administrative access is controlled.

## The problem in plain language

A privileged account can change settings, create other users, read everything in a system or switch controls off. Reviewing such accounts means asking whether each one still needs that power. That question can only be answered by someone who knows the application: what it does, what data it holds, what an administrator could do with it, and who legitimately needs to. A review that shows only account names asks the reviewer to confirm something they cannot assess. The result is routine approval, and excess access survives.

## What you are actually trying to solve

The IT manager, security lead or compliance officer facing this wants a review that reduces risk instead of producing a signed list. They want to be able to tell a customer, auditor or insurer which privileged accounts exist, why each is justified and who confirmed it. They also want reviewers to spend minutes, not hours, and to make real decisions.

## Evidence and system mechanism

### Privileged accounts are a defined, high-consequence category

NIST's glossary defines a [privileged account](https://csrc.nist.gov/glossary/term/privileged_account) as a system account with the authorisations of a privileged user. The definition is short, but it makes the point that privilege is a property of what the account can do on a particular system. The same username can be harmless in one application and decisive in another, which is why a review needs the system named beside the account.

### Access control is a continuing process, not a one-off list

The Center for Internet Security's [access control management control](https://www.cisecurity.org/controls/access-control-management) describes using processes and tools to create, assign, manage and revoke access credentials and privileges for user, administrator and service accounts. Administrator and service accounts are named alongside ordinary users, which is a reminder that the review must cover non-human and shared administrative accounts too, not just staff.

### Reviews should be put in front of resource owners

Microsoft's documentation on [access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) states that organisations need to engage resource owners so they regularly review who has access to their resources, and warns that excessive access rights can lead to compromise and audit findings. It lists too many users in privileged roles, and business-critical data access, among the situations where reviews are most useful. The emphasis on resource owners is the key: the person who knows the application is the one qualified to decide.

### Reducing standing privilege makes reviews smaller

Microsoft's [Privileged Identity Management](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure) documentation describes time-bound, approval-based activation of privileged roles, with justification, notification and audit history. Organisations can reduce the number of people with permanent privilege, so there is less to review and each activation leaves a reason on record. This is one vendor's implementation, but the principle applies to any tool.

### Warning signs

- The review spreadsheet lists usernames and groups but not the application, its owner or the business purpose.
- Reviewers approve more than ninety-five percent of accounts without comment, or approve in bulk.
- The same person who holds the access also approves it.
- Service and vendor accounts are missing from the review altogether.

## Problem owner and why-now trigger

The IT manager or information security lead owns the review process. The application owners, usually department heads, hold the knowledge needed to make each decision. The budget owner is typically the IT director or chief operating officer.

The trigger is commonly a customer assurance request: a large corporate client, bank or insurer asks for evidence that privileged access is reviewed, and the business finds that its existing evidence would not survive a follow-up question. A cyber insurance renewal, an ISO 27001 or SOC 2 preparation, or a staff exit that leaves an administrator account active can have the same effect. Related issues appear in [employees with more system access than the job requires](/impact/employees-more-system-access-than-job-requires-excess-permissions-cost/).

## Economic consequence

The direct cost is the time spent on a review that changes nothing. The exposure cost is the access that should have been removed: an administrator who changed roles but still controls the finance system, or a former contractor account that still works. A compromised privileged account typically gives an attacker broad reach, so the potential loss is far greater than for an ordinary account. Failing a customer's assurance questionnaire has a commercial cost too, because it can delay or lose a contract. The wider financial risk is covered in [uncontrolled system access and financial risk](/impact/uncontrolled-system-access-financial-risk/).

## Root cause

- **The review is built from the identity system, not the application.** The export is easy to produce, so it becomes the review, even though it lacks context.
- **Reviewers are the wrong people.** Line managers confirm their staff, but only the application owner knows what each privilege allows.
- **No inventory of applications with owners.** You cannot send a review to the right person if you do not know who owns the application.
- **Privilege is permanent by default.** Without time-bound access, the list grows and reviewers become fatigued.
- **The goal is the evidence, not the outcome.** The process is measured by completion rather than by access removed.

## Practical intervention

1. **Build a short list of applications that matter.** Finance, payroll, customer data, email, cloud platforms and the identity system itself. Name an application owner for each.
2. **Add context to every line of the review.** For each privileged account show the application, what the privilege allows in plain words, when it was last used, who granted it and the stated reason.
3. **Send each application's list to its owner,** with line managers consulted for staff changes. Nobody reviews their own access.
4. **Require a decision, not a click.** Keep, reduce or remove, with a one-line reason for every keep.
5. **Include non-human accounts.** Service accounts, shared administrator logins and vendor support accounts need an owner and an expiry date.
6. **Act on the result.** Record which accounts were removed or reduced and confirm the removal in the system, so the evidence shows an outcome.
7. **Shrink the next review.** Move from permanent to time-bound privilege where the tools allow, and remove accounts unused for ninety days.

### Trade-offs

Putting application owners in the process takes more of their time than a manager signing a list. Keep the pack short, review the highest-risk applications quarterly and the rest twice a year. Some small businesses have only two or three people who could review an application; in that case a second person from outside the team, such as the financial director, should confirm the owner's own access.

### An illustrative example

Illustrative: a Pretoria logistics company with 140 staff and eleven business applications was asked by a retail customer how it reviewed administrator access. Its quarterly review showed 63 privileged accounts and had been approved in full each time. Rebuilt with application context and sent to the system owners, the next review removed nineteen accounts: former contractors, staff who had changed roles and duplicates. Two shared administrator logins were replaced with named accounts. The customer's follow-up question was answered with an outcome rather than a signature.

## Diagnostic questions

- Does your review show the application and what each privilege can do, or only a username?
- Who approves each account, and could it be the person who holds it?
- How many accounts did the last review remove or reduce?
- Are service, shared and vendor accounts part of the review?

## What good looks like

Every privileged account is linked to a named application, a reason, a person and a last-used date. Application owners decide, and the review results in removals that can be seen in the system. Privilege is time-bound where practical, and the evidence pack shows the number of accounts reviewed, kept, reduced and removed, not merely that a review took place.

## Where Mellorca fits

Mellorca can help rebuild the review so it carries application context and reaches the right owner, starting with the applications that matter most. The approach follows the same discipline as [compliance evidence that does not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/): evidence produced as a by-product of a working control, not assembled afterwards.

## Method note

The sources are standards and vendor documentation describing privileged accounts, access control and review practice. They do not measure how often reviews lack application context. The example is illustrative rather than a client case.
