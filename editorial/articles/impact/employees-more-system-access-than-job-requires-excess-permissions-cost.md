---
hub: impact
record_id: CPS-131
slug: employees-more-system-access-than-job-requires-excess-permissions-cost
title: More access than the job needs: The financial cost of excessive permissions
description: Staff with wider system rights than their role needs create fraud exposure, accidental damage, licence waste and audit friction. Scope access to the job.
lead: Staff who keep or are given broader system rights than their role needs create fraud exposure, accidental damage, licence waste and audit friction. Access scoped to the job is a cheap, practical control.
category: Security & Access
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Security & Access
commercial_domain: Security & Access
primary_pain: Giving employees more system access than their jobs require
primary_cost_mechanism: Fraud and error exposure, bigger breach impact, unneeded licence cost, regulatory exposure and audit friction
sources:
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
  - Best practices for Microsoft Entra roles - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Software bought without approval: The financial and security cost of shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
  - Important accounts without MFA: The cost of preventable takeover | /impact/accounts-without-mfa-financial-risk/
  - Gone but still logged in: The cost of incomplete employee offboarding | /impact/former-employees-still-active-systems-incomplete-offboarding-cost/
  - When access requests depend on messages and memory | /patterns/when-system-access-is-granted-through-chat-messages-and-memory/
summary: Staff who keep or are given broader system rights than their role needs create fraud exposure, accidental damage, licence waste and audit friction. Access scoped to the job is a cheap, practical control.
layout: plain
---
## The tolerated pain

Thandi joined the accounts team six years ago. She now works in procurement. She can still approve payments, edit supplier bank details and see payroll. Nobody removed those rights when she moved, because nobody was asked to. A temporary bookkeeper who covered maternity leave in 2022 still has a login. The sales administrator is a "full admin" on the CRM because it was the quickest way to fix a problem one afternoon. The owner has never looked at a list of who can do what.

Giving people more access than their job requires is rarely a decision. It builds up through convenience: it is quicker to grant everything than to work out exactly what is needed, and quicker to leave rights in place than to take them away. The business works, nothing bad has happened and so the habit continues. The question is what it costs. This article looks at the financial effect of excess permissions as they accumulate over time. It sits alongside [uncontrolled system access and its financial risk](/impact/uncontrolled-system-access-financial-risk/) and [former employees who retain system access](/impact/former-employees-retaining-system-access/), but focuses on the people who still work for you.

## What "excess permissions" means in practice

The security principle is old and simple. The US National Institute of Standards and Technology defines [least privilege](https://csrc.nist.gov/glossary/term/least_privilege) as a principle that a system should restrict the access privileges of users to the minimum necessary to accomplish their assigned tasks. Microsoft's guidance on [role-based access control best practices](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices) says the same in practical terms: grant administrators exactly the permissions they need to do their job. The same guidance recommends keeping the number of Global Administrators below five, because those accounts have close to unrestricted access.

In a small business the excess usually takes five forms:

- **Rights that stayed after a role change.** The person changed jobs but kept the old access.
- **Everyone is an administrator.** Standard users given admin rights to avoid delays.
- **Shared logins.** A single account used by several people, so access cannot be tied to one individual.
- **Broad folders and mailboxes.** Payroll, contracts and customer data sit in shared drives open to the whole company.
- **Temporary access that became permanent.** Contractors, auditors and cover staff whose accounts were never closed.

## Why businesses tolerate it

- **Restricting access feels like distrust.** Owners worry about offending loyal people.
- **Granting is quick, tidying is not.** Nobody is rewarded for removing a permission nobody has missed.
- **No one has the full picture.** HR knows who changed jobs, IT knows who has accounts, and neither knows what each person can reach.
- **Nothing has gone wrong yet.** A risk that has not materialised is easy to postpone.
- **Tighter access can slow work.** If the process for requesting a right takes days, staff push for broad access to avoid waiting. The tension is real, and is described in [the employee who needs permission for every small fix](/moments/the-employee-who-needs-permission-for-every-small-fix/).

## Operational symptoms

- nobody can say who has access to payroll, supplier banking details or the customer database;
- the same person can create a supplier, approve an invoice and release the payment;
- old accounts that appear in system user lists for people who left or moved;
- passwords shared in chat groups or written on notes;
- audit queries about access that take days to answer;
- staff who accidentally delete or change records they should never have been able to touch.

## How the pain becomes money

- **Fraud exposure:** when one person can create a payee, approve and pay, there is no second pair of eyes. Segregation of duties is the cheapest fraud control a business has, and excess permissions remove it.
- **Accidental damage:** an administrator who deletes the wrong folder, edits the wrong price list or runs the wrong import causes rework and restoration cost.
- **Bigger breach impact:** if an account with wide rights is compromised through a phishing email, the attacker inherits all of them. A narrowly scoped account limits the damage.
- **Regulatory exposure:** POPIA requires responsible parties to secure personal information with appropriate, reasonable technical and organisational measures. The text of the Act is available on [gov.za](https://www.gov.za/documents/protection-personal-information-act). Wide internal access to customer and employee data makes it harder to show those measures are in place.
- **Audit and insurance friction:** auditors, lenders and insurers increasingly ask who can access what. A business that cannot answer spends more time and money responding.
- **Licence cost:** premium or administrator licences often cost more than standard ones. Handing them out by default pays for rights nobody needs.

## An illustrative cost model

This example is **illustrative**. All figures are assumptions for a hypothetical 60-person wholesaler in the Western Cape. The probabilities are planning assumptions, not statistics.

| Assumption | Value |
| --- | --- |
| Staff with administrator or premium licences they do not need | 12 |
| Extra monthly cost of those licences compared with standard | R280 each |
| Accidental changes or deletions needing rework per year | 6 at R4,500 |
| Chance per year of a payment-fraud or data-misuse event enabled by excess rights | 3% |
| Cost if that event occurs | R650,000 |
| Staff time to answer an access query from an auditor, insurer or lender | 40 hours at R350 |

- Unneeded licences: 12 × R280 × 12 = R40,320
- Accidental rework: 6 × R4,500 = R27,000
- Expected loss from an enabled event: 3% × R650,000 = R19,500
- Audit and questionnaire time: 40 × R350 = R14,000
- **Illustrative annual total: about R101,000**

The expected-loss line understates the real exposure, because a single serious event costs the full R650,000 rather than the average. Treat the figure as a way to compare the cost of tidying access, usually a few days of work, with the cost of leaving it.

## When it becomes commercially urgent

- an employee leaves on bad terms, or is suspected of misusing data;
- an audit, a funder or a large customer asks for evidence of access controls;
- the business adopts a new finance, HR or CRM platform and is about to copy old rights into it;
- a phishing incident shows how far an ordinary account can reach;
- the business introduces AI tools that inherit whatever access the user has.

## What better looks like

The goal is not to lock people out. It is to make access deliberate.

1. **List the systems that matter.** Banking, payroll, accounting, CRM, file storage, email and any system holding customer personal information.
2. **Export who has access.** Most platforms show user lists with roles. Compare them with the current staff list.
3. **Define roles, not individuals.** Create a few standard roles, such as "accounts clerk", "sales" and "manager", and grant access by role.
4. **Separate the critical combinations.** No single person should create a supplier, approve an invoice and release the payment.
5. **Make joiner, mover and leaver steps routine.** Moving roles should trigger a removal of old rights, not only an addition of new ones. See [new starters waiting for logins](/impact/new-starters-waiting-for-logins-access-setup-cost/) for the other end of the same process.
6. **Review on a schedule.** Microsoft's description of [access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) explains the idea: managers periodically confirm who still needs access to groups, applications and roles. A quarterly review for critical systems works for most small businesses.
7. **Keep an emergency route.** A fast, logged way to grant temporary access reduces the pressure for permanent over-granting.

## Practical next actions

1. Pick the three highest-risk systems, typically banking, payroll and the customer database.
2. Print each user list and ask the relevant manager to mark every name that does not need that access.
3. Remove the clear excess immediately and note any disputed cases for discussion.
4. Check that no one person controls an entire payment chain.
5. Add "review access" to the checklist for role changes and for supplier or contractor exits; see also [why supplier access survives after engagements end](/discovery/why-supplier-access-survives-after-engagements-end/).
6. Put a quarterly access review in the calendar, owned by a named person.

## Bottom line

Excess permissions are easy to create and expensive to discover. They cost money steadily, through unneeded licences and accidental damage, and occasionally in a lump, through fraud, a breach or a failed audit. Reducing access to what each role needs is a modest, mostly administrative task that pays for itself in lower risk, simpler audits and a business that can show it handles customer and employee information responsibly.
