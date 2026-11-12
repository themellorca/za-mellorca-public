---
hub: impact
record_id: CPS-132
slug: single-administrator-account-shared-between-staff-accountability-security-exposure-cost
title: One Admin Login, Several People: The Accountability and Security Cost
description: When several people share one administrator login, the business cannot tell who changed what, every departure becomes a security event and one leaked password hands over full control.
lead: When several people share one administrator login, the business cannot tell who changed what, every departure becomes a security event and one leaked password hands over full control.
category: Security and Access
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security and Access
commercial_domain: Security and Access
primary_pain: One administrator account used by several people
primary_cost_mechanism: Lost attribution and investigation time, weaker accountability, offboarding password rotation, wider breach exposure and POPIA evidence gaps
sources:
  - Best practices for Microsoft Entra roles - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices
  - Secure access practices for administrators in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-planning
  - Learn about the audit logs in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-audit-logs
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Gone but Still Logged In: The Cost of Incomplete Employee Offboarding | /impact/former-employees-still-active-systems-incomplete-offboarding-cost/
  - Which Business Numbers Can You Trust? The Cost of Deciding on Bad Data | /impact/untrusted-business-numbers-unreliable-decision-cost/
  - Reused Passwords: How One Stolen Login Becomes a Business-Wide Risk | /impact/reused-passwords-single-credential-business-risk/
summary: When several people share one administrator login, the business cannot tell who changed what, every departure becomes a security event and one leaked password hands over full control.
layout: plain
---
## The tolerated pain

The administrator login for the company's cloud platform is "admin@" followed by the business domain. The password is known to the owner, the office manager, the outsourced IT technician and, probably, a former bookkeeper. Whoever needs to add a user, reset a mailbox, change a licence or look at billing logs in and does it. It is quick, nobody has to wait for permission, and in five years it has never caused a visible problem.

Then a customer's invoice run is changed overnight, a mailbox rule starts forwarding messages to an unknown address, or a user is deleted. The administrator log shows that "admin" did it. Four people say it was not them, and the truth is that nobody can prove otherwise.

This article looks at the practice of one administrator account shared among several people. It is a close relative of the wider problem of shared passwords, covered in [shared passwords and lost accountability](/impact/shared-passwords-lost-accountability-breach-exposure/), but the stakes are higher because an administrator account can change the rules for everyone else.

## Why one shared admin account is attractive

The habit rarely comes from carelessness. It comes from the way small businesses grow.

- **The first account was the only account.** When the system was set up, one login was created, and everyone who later needed access was told the password.
- **Separate admin roles feel like extra work.** Creating named accounts with the right permissions takes some thought, and it is easy to postpone.
- **Licences cost money.** A business may think that a second administrator seat or a separate account for each technician is an unnecessary expense.
- **Outsourced support rotates.** The IT supplier changes technicians, and it is simpler to hand over one login than to set up each person.
- **Nothing has gone wrong yet.** The absence of an incident is taken as evidence that the practice is safe.

## What the shared account takes away

Good administration relies on two things: knowing who did what, and limiting what any one person can do. A shared administrator account removes both.

Microsoft's [best practices for Microsoft Entra roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices) recommend applying the principle of least privilege, giving people only the permissions their tasks need, and limiting the number of people who hold the most powerful roles. Its [guidance on securing privileged access](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-planning) treats administrator accounts as the highest-value targets in an environment and recommends protecting them more strongly than ordinary accounts. A generic account used by several people works against both ideas: everyone has full power, and no action is attributable to an individual.

Audit trails make the point concrete. Microsoft's documentation on [audit logs in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-audit-logs) describes logs that record changes made in a tenant, including who made them. That record is only useful when each administrator signs in as themselves. When all activity appears under one shared name, the log exists but answers nothing.

## Operational symptoms

- an administrator login whose name describes a role ("admin", "it", "office") rather than a person;
- a password that has not changed since the person who set it up left;
- the password stored in a shared note, a message thread or on a sticky note;
- nobody certain how many people currently know it;
- changes to users, permissions or settings that nobody will own;
- multi-factor prompts going to one person's phone, so others ask them for codes;
- external suppliers logging in with the same account as staff.

## How the pain becomes money

- **Investigation cost:** when something goes wrong, time is spent trying to reconstruct who did what. Without attribution, the investigation may be inconclusive and drag on for days.
- **Weak accountability:** people take less care when their actions cannot be traced. Small mistakes, such as a deleted mailbox or wrong licence change, become more likely and cost working time to repair.
- **Security exposure:** the more people know a powerful password, the more places it can leak from, whether through a phishing email, a compromised laptop or an unprotected note. One leak gives the attacker full control, as described in the wider discussion of [uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).
- **Offboarding gaps:** when a person leaves, the business must change the shared password and tell everyone else, or accept that the departed person can still get in. See [former employees retaining system access](/impact/former-employees-retaining-system-access/).
- **Regulatory and insurance exposure:** POPIA requires a responsible party to secure personal information with appropriate, reasonable technical and organisational measures. The text of the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) is published by the South African government. A shared administrator account makes it hard to show that access to personal information was controlled. An insurer investigating a cyber claim may ask the same questions.
- **Disruption:** the administrator can delete, disable and reconfigure. A mistaken or malicious change can stop email, payroll access or file sharing for the entire business.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Bloemfontein professional-services firm with 25 staff.

| Assumption | Value |
| --- | --- |
| Incidents a year where an unexplained admin change needs investigating | 2 |
| Hours of staff and supplier time per investigation | 12 hours at R450 |
| Hours of lost productivity per incident across the firm | 40 hours at R200 |
| Cost of password rotation and handover when a person with the password leaves | 3 hours at R450, twice a year |
| Probability-weighted breach exposure (chance of 3% a year of a R300,000 incident) | R9,000 |

- Investigations: 2 × 12 × R450 = R10,800
- Lost productivity: 2 × 40 × R200 = R16,000
- Rotation and handover: 2 × 3 × R450 = R2,700
- Probability-weighted security exposure: R9,000
- **Illustrative total: about R38,500 a year**

This is deliberately modest. The expected-value figure hides the reality that an actual breach of a full-control account is rarely a small event, and that the outcome is a single large loss, not an annual instalment. The calculation is a way of showing that even without a breach, the habit has a running cost, and that the safer alternative is cheap by comparison.

## Why the pain is tolerated

Everyone who uses the account finds it convenient, and the people who worry about it are usually the ones with the least authority to change it. The weakness is invisible until something happens. There is also a social obstacle: moving to named accounts implies that some people will no longer have full power, which can feel like a vote of no confidence. The sensible reply is that limiting access protects the individuals as much as the company, because it proves they did not do what they are suspected of.

## When it becomes commercially urgent

- an unexplained change or deletion that nobody can account for;
- a staff member or IT supplier leaves and the password is still in use;
- a phishing incident where the administrator account may have been exposed;
- a client, insurer or auditor asks who has administrative access;
- a POPIA query or breach notification where access control must be explained.

## What better looks like

The fix is more about structure than technology, and it usually takes a day or two.

1. **Create named administrator accounts.** Each person who administers the system gets their own login, tied to their identity and their own multi-factor method.
2. **Give only the roles needed.** A person who resets passwords does not need to manage billing. See the practical thinking in [employees with more access than the job requires](/impact/employees-more-system-access-than-job-requires-excess-permissions-cost/).
3. **Keep one emergency account, sealed.** Retain a single break-glass account with a long unique password and strong protection, stored securely and used only if everything else fails. Every use is recorded and reviewed.
4. **Separate daily accounts from admin accounts.** The person who reads email all day should not do so while signed in as an administrator.
5. **Treat suppliers the same way.** External technicians get their own named accounts, which are removed when the contract ends.
6. **Review the list quarterly.** Check who holds administrator rights and whether they still need them. The article on [the hidden risk of shared accounts](/patterns/the-hidden-risk-of-shared-accounts/) describes the same pattern from the operational side.

## Practical next actions

1. List every account with administrator rights in your main systems.
2. Mark which ones are used by more than one person.
3. Ask who currently knows each password and who ever did.
4. Create named accounts for the people who genuinely need administrative rights.
5. Rotate the old shared password and move it into a sealed emergency record.
6. Diarise a quarterly access review with the owner.

## Bottom line

A shared administrator account saves a few minutes of setup and costs far more in accountability and exposure. It removes the audit trail, hands full power to everyone who knows the password and makes every departure a security event. Named accounts, limited roles and one sealed emergency login restore the ability to say who did what, and they reduce the damage that any one mistake or compromise can cause.
