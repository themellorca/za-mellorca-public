---
hub: impact
record_id: CPS-129
slug: shared-passwords-lost-accountability-breach-exposure
title: Shared Passwords at Work: The Cost of Losing Accountability and Control
description: When colleagues share one login, nobody can tell who did what, access cannot be removed cleanly and one leak exposes everyone who uses it.
lead: When colleagues share one login, nobody can tell who did what, access cannot be removed cleanly and one leak exposes everyone who uses it.
category: Digital Infrastructure
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Employees share passwords and logins with colleagues
primary_cost_mechanism: Risk exposure from untraceable actions, weakened payment controls and wider breach surface, plus investigation and recovery labour
sources:
  - NIST Special Publication 800-63B | https://pages.nist.gov/800-63-4/sp800-63b.html
related:
  - Who Decides on Technology? The Cost of Unclear Accountability for IT Choices | /impact/unclear-accountability-technology-decisions-cost/
  - Premium Plans for Basic Work: The Cost of Overbuying Software | /impact/premium-software-plans-basic-needs-overbuying-cost/
  - Software Bought Without Approval: The Financial and Security Cost of Shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
summary: When colleagues share one login, nobody can tell who did what, access cannot be removed cleanly and one leak exposes everyone who uses it.
layout: plain
---
## The tolerated pain: one login, many people

The password for the bank portal is on a sticky note in the finance office. The online store's admin login is shared by the owner, two staff members and the agency that built the site. The courier account, the supplier portal and the social media accounts all use one set of credentials that has been passed around by WhatsApp for years. When someone needs access, a colleague reads the password out across the office.

Password sharing is one of the most common habits in small and mid-sized businesses, and one of the least discussed. It usually starts for good reasons: a system charges per user, a colleague is on leave and something urgent must be done, or the account was set up before anyone thought about access.

Mellorca has written about [reused passwords](/impact/reused-passwords-single-credential-business-risk/), where one person uses the same password on many systems, and about [accounts without multi-factor authentication](/impact/accounts-without-mfa-financial-risk/). Sharing is a different problem. Here many people use one identity, so the business loses the ability to know, control and prove who did what.

## Why businesses tolerate it

- **Per-user licensing.** Sharing a login looks like a saving when each extra user costs money.
- **Convenience under pressure.** When a payment must be released or an order processed today, sharing is the fastest route.
- **Trust.** In a small team, people trust each other, so controls feel unnecessary or even insulting.
- **Some systems make it hard.** Older portals, banking profiles and supplier sites may not support multiple users well.
- **Nobody owns access.** There is no list of who has which logins, so sharing is never reviewed.

## What is actually lost

### Accountability

Every action in a shared account is recorded under one name. If a supplier's bank details are changed, a refund is issued, a price is altered or a customer list is exported, the system cannot say which person did it. That matters for fraud investigations, disciplinary processes, insurance claims and simple mistakes. Honest staff lose the ability to show it was not them.

### Control

A shared password cannot be withdrawn from one person. When someone leaves, the only way to remove their access is to change the password and tell everyone else, which is often postponed. Former staff, contractors and agencies keep working credentials. Mellorca's article on [former employees retaining system access](/impact/former-employees-retaining-system-access/) covers that exposure in more detail.

### Security strength

Shared passwords tend to be simple, so they can be remembered and typed by several people. They are written down, sent by message and stored in personal phones. Multi-factor authentication is often switched off, because the code goes to only one person's phone. Each extra person who holds the password is another way it can leak, through phishing, a lost device or a compromised personal account.

## Operational consequence

- investigations into errors or suspicious activity end without an answer;
- password changes cause lockouts and disruption because everyone must be told;
- access is not removed when people leave, because changing the password is inconvenient;
- external parties, such as agencies and bookkeepers, keep access long after their work ends;
- approval controls in banking and finance systems are weakened because one person can act as two.

## How the pain becomes money

- **Risk exposure.** Fraud and unauthorised payments are harder to prevent and harder to trace. Breaches through shared credentials can lead to obligations under POPIA, customer notifications and recovery costs.
- **Loss of segregation of duties.** Where one shared login can both create and approve a payment, the main control against payment fraud is gone.
- **Investigation and recovery labour.** Time spent reconstructing what happened when the logs cannot say.
- **Disputes and insurance.** An insurer or bank may ask who authorised a transaction. A shared login makes that difficult to answer.
- **Disruption.** Emergency password changes and lockouts stop work across every person who shared the account.

## Model the exposure from your own accounts

This is a structured way to rank shared accounts, not a calculation of expected loss. The example values are illustrative.

| Shared account | People with the password | Can move money or data? | MFA on? | Changed since last leaver? |
| --- | --- | --- | --- | --- |
| Business banking profile | 3 | Yes, payments | One phone only | No |
| Online store admin | 5 including agency | Yes, refunds and customer data | No | No |
| Courier portal | 6 | Limited | No | No |

Any account where several people hold the password, where it can move money or personal information, and where it has not been changed since someone left, belongs at the top of the list. For those accounts, ask what the largest single transaction or data export could be, and whether you could prove who made it.

*Illustrative example.* A Johannesburg wholesaler found that seven people, including a former bookkeeper, knew the login used to load supplier payments. When a supplier queried a changed bank account, the business could not establish who had made the change. It moved each person to an individual profile with separate capture and release roles, and set up a password manager for the remaining shared service accounts.

## When it becomes commercially urgent

- a shared login can create or release payments;
- someone who knew a shared password has left;
- an agency, contractor or former supplier still holds a login;
- a suspicious transaction or change cannot be traced to a person;
- a customer, insurer or auditor asks how access to key systems is controlled.

## What better looks like

- **Individual accounts by default.** The UK National Cyber Security Centre discourages account sharing. Where a business need genuinely requires it, the NCSC recommends restricting access to the smallest possible group of known and trusted users, changing the password when someone's access ends and monitoring use. It prefers delegation features, which let people act on a shared resource with their own identity.
- **A business password manager.** CISA recommends password managers to generate, store and fill unique passwords. NIST's digital identity guidance requires that verifiers allow password managers and autofill, and recommends allowing paste, so long unique passwords are practical. A business password manager can share access to an account without revealing the password, and remove that access per person.
- **Multi-factor authentication on every account that matters,** tied to individuals rather than to one shared phone.
- **Role separation in finance systems,** so capturing and releasing payments require different people.
- **An access register** recording who has access to what, reviewed when people join, change roles or leave.

## Practical steps

1. List every account where more than one person knows the password.
2. Mark those that can move money or personal information, and fix them first.
3. Check whether each system supports individual users or delegation, and use it, even at extra licence cost.
4. Move remaining shared credentials into a business password manager and stop sharing by message or note.
5. Change every shared password that a former employee or contractor knew.
6. Add access removal to your leaver checklist.

For broader help, Mellorca's [digital infrastructure](/services/digital-infrastructure/) work covers identity and access as part of a secure foundation.

## Bottom line

A shared password saves a licence fee and a few minutes. In return, the business gives up the ability to know who did what, to remove one person's access and to protect its most sensitive accounts properly. The commercial value at stake is the fraud, data loss and investigation cost that become both more likely and harder to resolve. Individual accounts and a password manager cost little by comparison.
