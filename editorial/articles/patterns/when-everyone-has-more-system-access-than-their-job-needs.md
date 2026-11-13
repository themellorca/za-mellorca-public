---
hub: patterns
record_id: PAT-352
slug: when-everyone-has-more-system-access-than-their-job-needs
title: When everyone has more system access than their job needs
description: When staff can see and change far more than their roles need, one mistake or stolen password reaches too far. Role-based access limits the damage.
lead: When current staff can see and change far more than their roles require, every mistake or compromised password reaches further than it should. Defining access by role, limiting administrators, separating sensitive duties and reviewing access regularly contains the damage.
category: Security, Access & Operational Risk
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Security, Access & Operational Risk
pattern_family: Security, Access & Operational Risk
observable_condition: Current staff can see and change far more systems and data than their roles require, and nobody can say with confidence who has access to what.
primary_identification: Excess-privilege problem: access is granted for convenience and accumulates rather than being matched to role.
commercial_value_dimensions: resilience, governance, continuity, fraud risk, financial and reputational risk
sources:
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
  - Best practices for Microsoft Entra roles - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
related:
  - When AI agents can act but governance cannot see them | /patterns/when-ai-agents-can-act-but-governance-cannot-see-them/
  - Why looking for information has quietly become part of everyone's job | /patterns/why-looking-for-information-has-become-part-of-everyones-job/
  - The hidden cost of signing in to every system separately | /patterns/the-hidden-cost-of-signing-in-to-every-system-separately/
summary: When current staff can see and change far more than their roles require, every mistake or compromised password reaches further than it should. Defining access by role, limiting administrators, separating sensitive duties and reviewing access regularly contains the damage.
layout: plain
---
## Observable condition

The receptionist can see the payroll folder. The junior bookkeeper can approve payments as well as capture them. Three people have full administrator rights in the Microsoft 365 tenant, including the owner, the person who set it up years ago and an IT contractor. A sales rep who moved into a procurement role last year still has access to every customer record and now has supplier access too. Everyone in the office can edit the price list, the customer records and the shared finance folder.

None of this was done carelessly. Access was granted to solve immediate problems: someone needed to cover for a colleague, a new starter needed to begin work that day, a task was easier with administrator rights. Each decision made sense at the time. Together they have produced a business where almost everyone can see and change far more than their job requires.

## Realisation

Broad access often feels like a sign of trust and a way to keep the business flexible. The realisation is that it also defines how much damage any single mistake, compromised password or dishonest act can do. When everyone can reach everything, one phishing email that captures one password exposes everything. One accidental deletion can affect data far outside the person's own work. One person who can both create a supplier and pay it is a control weakness, regardless of how trustworthy they are.

The issue is not whether staff are trusted. It is that the business has no way of limiting the consequences when something goes wrong, and no way of knowing who has access to what.

Realisation prompt: choose your most sensitive information, such as payroll, banking details or customer personal data, and ask who can currently see it and who can change it. If the answer is longer than expected, or if nobody can answer with confidence, access has outgrown its purpose.

## Identification

This is an excess-privilege problem: access rights for current staff are granted for convenience and accumulate over time, rather than being matched to what each role needs. Security practice calls the opposite principle least privilege. The [NIST glossary definition of least privilege](https://csrc.nist.gov/glossary/term/least_privilege) describes restricting users' access privileges to the minimum necessary to accomplish their assigned tasks.

This pattern differs from the access-related patterns already examined. [Why former employees still have access](/patterns/why-do-former-employees-still-have-access/) and [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) deal with people who have left. [Why AI adoption creates a new access-control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/) deals with machine identities. This pattern is about the people still working in the business, every day.

## Diagnosis

The visible symptom is broad, unexplained access. The common assumption is that tightening access will slow people down. The structural causes usually include:

- **Copy-a-colleague provisioning.** New starters are given the same access as someone in a similar role, including whatever that person accumulated over years.
- **Access added on role change, never removed.** When people move roles, they gain new access and keep the old. Microsoft's [best practices for Microsoft Entra roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices) note that people who move teams can amass unnecessary access over time if nobody audits it.
- **Administrator by default.** The person who first set up a cloud service often becomes its top-level administrator. The same Microsoft guidance notes that a user who signs up for a Microsoft cloud service is assigned the Global Administrator role by default, and recommends keeping that role to fewer than five people.
- **Temporary access that becomes permanent.** Cover during leave or a one-off project is granted and never withdrawn.
- **Folder-level sharing instead of role-based access.** Permissions are set file by file and folder by folder, so nobody can see the overall picture.
- **No owner for access decisions.** Nobody in the business is responsible for deciding what each role should have, so the person with administrator rights grants whatever is asked.

## Commercial impact

The commercial value at stake is resilience, governance, continuity and financial and reputational risk.

- **Breach impact.** A compromised account can only reach what it has access to. Excess access turns a contained incident into a business-wide one.
- **Fraud risk.** When the same person can create suppliers, change bank details and release payments, a basic separation of duties is missing.
- **Data protection obligations.** South African businesses processing personal information are expected to take appropriate measures to secure it. Broad access to customer and staff data is difficult to defend after an incident.
- **Accidental damage.** Deletions and overwrites affect more data when more people can change it.
- **Audit and insurance.** Microsoft's [overview of access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) notes that excessive access rights can lead to compromises and to audit findings that indicate a lack of control.

The wider financial exposure is discussed in [not knowing who still has access to your systems](/impact/uncontrolled-system-access-financial-risk/). The size of the risk in any one business depends on what its systems hold and should be assessed against its own data and processes.

## Common misidentification

The usual response is to buy another security product. Products help, but they cannot decide what each role should be allowed to do; that is a business decision. A second response is a one-off clean-up of permissions after an incident or an audit. Without a process for granting and reviewing access, the same accumulation starts again immediately. A third is to lock everything down so tightly that people cannot work, which leads to shared passwords and workarounds that are worse than the original problem.

## Possibility

In a stronger state, access is defined by role. Each role has a documented set of systems and permission levels, and new starters receive exactly that set on their first day, so nobody waits and nobody inherits a colleague's history. Role changes trigger a change of access, not an addition. Administrator rights are held by very few people and used only when needed. Sensitive functions are separated so that no single person can complete a high-risk transaction alone. Access is reviewed on a schedule by the people who own each system.

Done well, this speeds up onboarding rather than slowing it, because access requests become predictable. The onboarding side of the problem is explored in [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/).

## Intervention

1. **Map current access** for your most important systems: who can see, change and administer each.
2. **Define role profiles.** For each role, agree which systems and permission levels are needed to do the job.
3. **Reduce administrator accounts** to the minimum and separate them from day-to-day accounts.
4. **Separate high-risk duties,** such as supplier creation, bank detail changes and payment release.
5. **Change access on role change.** Make removal of old access part of every move, not an afterthought.
6. **Use groups rather than individual grants,** so access follows role membership and can be reviewed as a whole.
7. **Review access regularly.** Ask each system owner to confirm, at least annually, who still needs what. Platforms such as Microsoft Entra provide recurring access reviews for this purpose.

## An illustrative example

The following is illustrative, not a client case. An East London logistics company with thirty staff discovers, during an insurance renewal questionnaire, that it cannot say who has administrator rights to its email and file systems. A review shows six administrators, a shared finance folder open to everyone, and two people able to both load and pay suppliers. The business defines access for its eight roles, cuts administrators to two named people, moves finance data to a restricted group and splits supplier creation from payment release. New starters now receive their role's access on day one, and the next annual review takes an afternoon rather than a week.

## Practical diagnostic questions

- Who can see and change your payroll, banking and customer personal data today?
- How many people have administrator rights to your core systems?
- When someone changes roles, is their old access removed?
- Can any one person create a supplier and also pay it?
- When was access to each important system last reviewed, and by whom?

## Bottom line

When everyone has more access than they need, every mistake and every compromised password reaches further than it should. The fix is not distrust or another product, but deliberate design: access defined by role, administrators kept few, sensitive duties separated and access reviewed regularly. That limits the damage any single failure can do, while making it easier, not harder, for people to get the access they genuinely need.
