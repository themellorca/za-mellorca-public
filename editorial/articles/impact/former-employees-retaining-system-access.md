---
hub: impact
record_id: CPS-128
slug: former-employees-retaining-system-access
title: When former employees still have system access
description: How incomplete offboarding creates avoidable security, audit and continuity exposure when former employees retain access to business systems.
lead: Offboarding is incomplete when payroll ends but accounts, tokens, shared credentials, devices or third-party access remain active.
category: Access Control
published_date: 2026-09-04
updated_date: 2026-09-04
byline_category: Security & Operations
tags:
  - Risk exposure
  - Audit
  - Licence waste
cta_label: Managed Digital Operations
cta_href: /services/managed-digital-operations/
side_title: Cost mechanisms
sources:
  - Identity and access management | https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management
  - https://www.verizon.com/business/resources/reports/2025-dbir-executive-summary.pdf | https://www.verizon.com/business/resources/reports/2025-dbir-executive-summary.pdf
  - Threat Actor Leverages Compromised Account of Former Employee to Access State Government Organization - CISA | https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-046a
related:
  - The cost of retyping customer details into every system | /impact/pain-duplication-of-customer-data-entry/
  - Backups nobody has tested: The cost when recovery fails | /impact/backups-never-tested-restore-financial-cost/
  - The cost of business systems that do not talk to each other | /impact/business-systems-do-not-talk-integration-cost/
---
## The tolerated pain

Access is often created across SaaS tools, cloud platforms, shared mailboxes, VPNs, devices and vendor portals over months or years. A single HR departure event does not automatically revoke all of it.

Onboarding is usually urgent and visible: the new employee cannot work until access is granted, so someone makes sure it happens. Offboarding has no such pressure. The person has gone, their manager is covering the work, and nobody is blocked if a forgotten account stays open. Payroll stops on time. The central directory account may be disabled. But the project-management tool, the supplier portal, the marketing platform, the shared admin password and the personal access token created for an integration can all survive the departure.

## Why businesses tolerate it

- **No single list of systems.** Tools bought by individual departments never appear in the IT inventory, so nobody knows to revoke them.
- **Not everything uses single sign-on.** Disabling the main account does not end access to applications with their own local logins.
- **Shared credentials.** Passwords known to several people are rarely changed when one of them leaves, because doing so disrupts everyone else.
- **Ownership fears.** Teams avoid deleting accounts in case files, workflows or automations owned by the leaver stop working.
- **No verification step.** The checklist is issued but nobody confirms it was completed across every system.

## Operational consequence

The organisation loses confidence in who can reach sensitive systems and data. Investigations, audits and incident response become slower because account ownership is uncertain.

When an auditor or customer asks for evidence that leavers lost access, someone has to reconstruct it system by system. When a suspicious login appears, the first hours of response are spent working out whose account it is and whether that person still works for the business. Integrations quietly break months later when a leaver's account is finally removed and an automation running under their identity stops. Licences continue to be paid for people who are no longer there, a pattern covered in [the financial waste of unused software licences](/impact/unused-software-licences-financial-waste/).

The UK National Cyber Security Centre's guidance on [identity and access management](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management) recommends a joiners, movers and leavers policy, revoking access when it is no longer needed, and reviewing user accounts and systems for unnecessary privileges on a regular basis. Those are not advanced controls. They are the baseline that incomplete offboarding fails to meet. In a February 2024 [advisory from the US Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-046a), a threat actor used a former employee's administrator account, which the victim said was not disabled immediately after the employee left, to reach a state government network.

## How it becomes money

The immediate cost may be licence waste, but the larger exposure is conditional: an orphaned account can create investigation, containment, recovery, legal or customer-service costs if it is misused or compromised. Do not invent a generic breach value; measure the systems, privileges and data actually exposed.

The conditional exposure is real. Verizon's 2025 Data Breach Investigations Report, which analysed 22,052 incidents including 12,195 confirmed breaches, found credential abuse was still the most common known initial access vector in the breaches it examined. An account that nobody monitors because its owner has left is exactly the kind of credential that can be abused without anyone noticing.

For businesses processing personal information in South Africa, section 19 of the Protection of Personal Information Act requires a responsible party to take appropriate, reasonable technical and organisational measures to prevent unlawful access to personal information, and to identify reasonably foreseeable internal and external risks. Former employees with live access to customer or staff data is a foreseeable internal risk.

### An illustrative cost model

Every figure below is an illustrative assumption. It shows how to structure the calculation, not what any business will experience.

- An organisation of 120 people with an assumed 15% annual staff turnover, giving 18 leavers a year.
- Each leaver holds an assumed average of 9 accounts across identity-bearing systems.
- The current checklist misses an assumed 2 accounts per leaver, giving 36 orphaned accounts a year.

| Cost element (illustrative) | Calculation | Annual result |
| --- | --- | --- |
| Licence waste: 12 of the 36 are paid seats at an assumed R380 a month, left open for an assumed 7 months | 12 × R380 × 7 | R31,920 |
| Audit evidence reconstruction: an assumed 3 hours per leaver at an assumed R500/hour | 18 × 3 × R500 | R27,000 |
| Broken-automation clean-up: an assumed 4 incidents a year, 6 hours each at R500/hour | 4 × 6 × R500 | R12,000 |
| **Recurring, measurable cost** |  | **R70,920** |

That recurring figure is modest, and that is why the problem survives. The decision-relevant number is the conditional one:

> conditional exposure = number of orphaned accounts with access to sensitive data × the business's own estimated cost of investigating and containing one misuse event

The second term should come from your incident-response provider, insurer, legal adviser and the customer contracts that set notification and remedy obligations, not from a published average. In this example, if 10 of the 36 orphaned accounts can reach customer data, the business is carrying 10 unmonitored routes to its most sensitive information, each of which would need investigation if it were used.

Compare that with the cost of control. If offboarding is triggered automatically and verified in an assumed 30 minutes per leaver, the annual effort is 9 hours. The measurable saving alone covers that many times over, before any reduction in risk is counted.

## Commercial trigger

If the business cannot produce a reliable list of departed users and prove access revocation across critical systems, offboarding is not a completed control.

The trigger becomes urgent before an external audit or customer security questionnaire, after a restructure or a dismissal involving conflict, when a cyber-insurance renewal asks about access controls, or when a review finds a leaver's account still active. Any of these is a reason to test the process now rather than reconstruct the evidence later. The wider economics of access sprawl are covered in [the financial risk of uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).

## What good looks like

A departure recorded in the HR or payroll system starts offboarding automatically. Every identity-bearing system appears in an inventory with a named owner. Sessions, tokens and shared secrets are revoked or rotated, not only passwords. Files, workflows and service accounts are transferred before the account is removed. Someone verifies completion and keeps the evidence, so that the next audit is a report rather than an investigation.

## Resolution

1. Maintain a current inventory of identity-bearing systems.
2. Trigger offboarding from an authoritative employment event.
3. Revoke identity, sessions, tokens and shared-secret access.
4. Recover or secure business devices.
5. Transfer ownership of files, workflows and service accounts.
6. Verify completion and preserve evidence.

A practical first test is to take the last ten leavers and check each one against every critical system. The result shows whether the control works. Where it does not, [managed digital operations](/services/managed-digital-operations/) can run joiner, mover and leaver processes as a routine, verified service.

## Bottom line

Offboarding should end access as deliberately as onboarding creates it. Anything less leaves a control gap that becomes more expensive to reconstruct later, and the cost that matters most is the one that only appears after an account has been misused.
