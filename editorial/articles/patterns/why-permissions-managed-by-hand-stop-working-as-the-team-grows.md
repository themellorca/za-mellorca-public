---
hub: patterns
record_id: PAT-357
slug: why-permissions-managed-by-hand-stop-working-as-the-team-grows
title: Why Manual Permission Management Fails as Teams Grow
description: Granting and removing access one request at a time works for ten people. At fifty, it produces forgotten permissions, inconsistent roles and reviews nobody can complete.
lead: Granting and removing access one request at a time works for ten people. At fifty, it produces forgotten permissions, inconsistent roles and reviews nobody can complete.
category: Security, Access & Compliance
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Security, Access & Compliance
pattern_family: Security, Access & Compliance
observable_condition: Access is granted, changed and removed one request at a time, nobody can say who has access to what, and every new hire or role change triggers a round of messages to find out what to give them.
primary_identification: Permissions managed individually instead of by role: each person's access is the sum of past requests, so it grows, diverges from colleagues' and is never reviewed against the job.
commercial_value_dimensions: Security exposure, onboarding speed, audit and compliance readiness, IT administration time and the risk of error or fraud
sources:
  - Best practices for Microsoft Entra roles - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices
  - What is entitlement management? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
related:
  - Why access, equipment and accounts are still set up manually | /patterns/why-access-equipment-and-accounts-are-still-set-up-by-hand/
  - The hidden risk of shared accounts | /patterns/the-hidden-risk-of-shared-accounts/
  - The cost of manual consolidation across workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
summary: Granting and removing access one request at a time works for ten people. At fifty, it produces forgotten permissions, inconsistent roles and reviews nobody can complete.
layout: plain
---
## Observable condition

When the business had eight people, access was easy. The owner knew everyone, the office manager set up their accounts, and anyone could ask for anything by walking across the room. Now there are forty-five staff, three sites and a dozen systems. Requests arrive as emails, chat messages and conversations in the passage. A new debtors clerk joins, and her manager asks for "the same as Thandi". Thandi's access was assembled over four years, including a folder from a project that ended in 2022.

An illustrative example: a Gqeberha logistics firm adds a finance system, a fleet-tracking tool and a customer portal in two years. Each has its own user list. When the auditor asks who can approve supplier payments, it takes a week of cross-checking to produce an answer, and the answer includes a person who moved to operations last year.

Nobody has been careless. The method simply did not scale. What worked through familiarity now depends on memory and goodwill.

## Realisation

The realisation is that permissions managed by hand are a history, not a design. Each person's access reflects the requests that were made and granted, not a deliberate decision about what their job needs. Over time the history becomes impossible to read.

The principle most security guidance returns to is least privilege. The [NIST glossary definition of least privilege](https://csrc.nist.gov/glossary/term/least_privilege) describes giving each user only the access needed to perform assigned tasks. Request-by-request management drifts away from that principle, because granting is quick and removing is never anyone's urgent task.

Microsoft's [best practices for role-based access control](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices) make the same point from a design angle: assign permissions to roles that match job functions, limit the number of high-privilege assignments, and avoid giving individuals broad access by default. The method is the opposite of the ad hoc request.

**Realisation prompt:** choose two people with the same job title and compare what they can do in your three most important systems. If the lists differ and nobody can explain why, access has been accumulating by accident.

## Identification

This is a pattern of unscaled access administration. The visible symptoms are slow onboarding, "same as" requests, difficulty answering who can do what, and surprises at audit time. The common assumption is that the person handling requests needs to be more organised. The structural cause is that the unit of management is the individual request instead of the role, so the workload and the inconsistency both grow with every hire.

The Pattern [when system access is granted through chat messages and memory](/patterns/when-system-access-is-granted-through-chat-messages-and-memory/) describes how requests are made. The Pattern [when everyone has more system access than their job needs](/patterns/when-everyone-has-more-system-access-than-their-job-needs/) describes the outcome. This pattern explains why the method breaks as the organisation grows.

## Diagnosis

- **Copying a colleague.** "Same as Thandi" copies every permission she accumulated, including those she should no longer hold.
- **Additions without removals.** A move from sales to operations adds new access and leaves the old in place, so the longest-serving staff hold the most.
- **No single list.** Each system holds its own users, and no one place shows a person's access across all of them.
- **Approvals by whoever is nearby.** Access is approved by the person who happens to be asked, with no consistent rule on who may approve what.
- **Reviews that never finish.** When a manager receives a spreadsheet of user rights for a system they barely understand, the review is ticked without being done. The Discovery note [why administrator access reviews fail when reviewers cannot see the application](/discovery/why-administrator-access-reviews-fail-when-reviewers-cannot-see-the-application/) explains this.
- **Time lost on each hire.** Every start date triggers a round of messages to find out what the person should have, and the answer differs each time.

Microsoft's description of [entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview) sets out the alternative: bundling the resources a role or project needs into packages that can be requested, approved and given an end date, so access is not open-ended by default.

## Commercial impact

The first cost is security exposure. The more access each person holds beyond their job, the more a stolen password, a mistake or a dishonest act can reach. Excess permissions also mean that a compromised account of a long-serving employee is more valuable to an attacker than that of a new one.

The second cost is control over money. Where permissions to create suppliers, approve payments or change bank details have accumulated, the separation of duties that finance relies on can quietly disappear. This is often found only after an irregularity.

The third cost is time. Onboarding waits on access, and administrators spend hours each month answering the same questions. The Impact note [employees with more system access than their job requires](/impact/employees-more-system-access-than-job-requires-excess-permissions-cost/) sets out how the exposure builds up.

The fourth cost is compliance. The Protection of Personal Information Act expects a responsible party to take appropriate measures to secure personal information. Being unable to show who can reach customer or employee records makes that difficult to demonstrate.

## Common misidentification

The usual fix is to appoint a more diligent administrator, who then faces the same unscalable method with more care. Another reflex is to run a one-off clean-up before an audit, which produces a clean list that begins drifting the next week. A third is to buy an identity tool before deciding what the roles are, which automates the confusion. Tooling helps only after the business has decided who should have what and why.

## Possibility

In a better state, the business defines a small number of roles that match real jobs, such as debtors clerk, branch supervisor and dispatcher. Each role carries a known set of permissions. A new hire receives their role; a transfer swaps one role for another; a leaver loses them all. Exceptions are rare, approved by a named person and given an end date.

Review also becomes feasible. Microsoft's [overview of access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) describes asking the right people, on a regular schedule, to confirm whether access should continue. That is workable when the question is "does this person still need this role?" and not "are these four hundred individual permissions correct?".

The Pattern [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) covers the leaver end of the same lifecycle.

## Intervention

Begin with the systems where a mistake costs most, such as finance, payroll and customer data, and work outward.

## Practical next actions

1. **Export who has access to what.** For your three most sensitive systems, produce a current list of users and their rights, and note any account that belongs to someone who has left or changed role.
2. **Define five to ten roles.** Group staff by what they actually do, and write down the access each role needs in each system. Start with the largest groups.
3. **Name an approver for each role.** Decide who may authorise access for it, so approval does not depend on whoever is asked.
4. **Move people onto roles.** Assign the role, remove permissions that are not part of it, and treat anything left over as a documented exception with a review date.
5. **Set a review rhythm.** Every quarter, ask each manager to confirm that their team's roles are still correct, using a list they can understand.
6. **Connect access to HR events.** Make joining, moving and leaving each trigger the matching role change, so access follows the person's employment record.

## Diagnostic questions

- Can you list everyone who can approve a supplier payment today?
- If a new person starts on Monday, is there a defined set of access for their job, or is it assembled by request?
- When someone changes role, who removes what they no longer need?
- How long did your last access review take, and did the reviewers understand what they were reviewing?
- How many people hold access that nobody can explain?

## Bottom line

Permissions managed one request at a time pile up and diverge as the business grows, until nobody can say who can do what. Defining roles, naming approvers and reviewing access on a schedule turns a growing history of favours into a system the business can explain and defend.
