---
hub: patterns
record_id: PAT-358
slug: when-new-software-creates-new-access-blind-spots
title: When New Software Creates New Access Blind Spots
description: Every new system arrives with its own accounts, roles and sharing settings. If nobody designs them, the business ends up with access it cannot list or explain.
lead: Every new system arrives with its own accounts, roles and sharing settings. If nobody designs them, the business ends up with access it cannot list or explain.
category: Governance & Risk
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Governance & Risk
pattern_family: Governance & Risk
observable_condition: A newly adopted system is set up with copied roles and left outside the leaver checklist, so former staff, locums and external users keep access nobody can list.
primary_identification: Access that grows faster than it is reviewed, because no one owns the decision of who may use each new system or checks it on a routine.
commercial_value_dimensions: Data protection, regulatory exposure, audit readiness, operational continuity and licence spend
sources:
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - Review permissions granted to enterprise applications - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-application-permissions
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - Why Critical Workflows Live Outside Approved Systems | /patterns/why-critical-work-ends-up-outside-the-approved-system/
  - The Cost of Not Knowing Who Can See What | /patterns/the-cost-of-not-being-able-to-say-who-can-open-which-files/
  - Why AI adoption creates a new access-control problem | /patterns/why-ai-adoption-creates-a-new-access-control-problem/
summary: Every new system arrives with its own accounts, roles and sharing settings. If nobody designs them, the business ends up with access it cannot list or explain.
layout: plain
---
## Observable condition

A medical-practice group in the Western Cape adopts a new cloud booking and billing system. It is a good product and the roll-out goes smoothly. The practice manager sets up the first accounts herself, giving the receptionists the same broad role she uses, because it was the fastest way to get everyone working by Monday.

Six months later a receptionist resigns. Her login to the old system is switched off on her last day. Her login to the new one is not, because nobody thought of it as part of the same job. A locum doctor who covered two weekends still has an active account. A billing clerk from an outsourced firm can open patient records she has no need to see.

Nothing has gone wrong yet. But the business has more doors than it has keys on a list, and it could not say today who can walk through each one.

## Realisation

Most businesses think about access when they decide who should have it. New software changes the picture, because it adds a whole new set of accounts, roles and permissions that sit outside the processes the business already uses to grant and remove access. The old checks do not extend to it automatically.

The realisation is that every new system is also a new access problem. It arrives with its own default roles, its own sharing settings and its own idea of who an administrator is. If nobody maps these onto how the business really works, the system fills with access that was never decided on, only convenient on the day.

**Realisation prompt:** for the last system you introduced, can you name who has administrator rights, who can export data, and who was removed when they left?

## Identification

This is a pattern of access that grows faster than it is reviewed. The visible symptoms are small: a former contractor who can still log in, a shared password in a spreadsheet, a manager who cannot say who can see salary information. The common assumption is that the software vendor handles security. The structural cause is that responsibility for deciding and reviewing who has access sits with the customer, and no one has been given the job.

It is related to [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/), which looks at leavers. This pattern looks at the earlier moment: the day a new system is switched on and its access picture is set, often without anyone designing it.

## Diagnosis

- **Roles are copied, not designed.** The first administrator gives everyone similar rights to get started. Nobody returns to narrow them once people have settled into their jobs.
- **The new system sits outside the leaver checklist.** Offboarding covers email and the main systems the business remembers. Anything added since is quietly absent.
- **Accounts are created by whoever has the rights that week.** There is no request trail, so nobody can show why a given person was given a given role.
- **Default sharing settings are accepted as they arrive.** Links, exports and integrations are enabled because turning them off might get in the way.
- **External users blur the picture.** Auditors, locums, agency staff and suppliers are given temporary access that is rarely given an end date.
- **Nobody reviews access on a schedule.** Microsoft's documentation on [access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) describes a structured way to have owners confirm periodically that people still need access to applications and groups, which implies a business has first decided who the owners are.

## Commercial impact

The commercial value at stake is data protection, regulatory exposure, audit readiness, operational continuity and trust with customers.

The clearest exposure is personal information. South Africa's Protection of Personal Information Act places a duty on organisations that process personal information to secure it. The [Information Regulator's POPIA page](https://inforegulator.org.za/popia/) points to the Act, which includes security safeguards among its conditions for lawful processing. A system where former staff and unneeded users can still reach customer data is hard to defend when something goes wrong, even if no misuse was intended.

The second cost is the effort of finding out. When a customer complains, an auditor asks or an incident occurs, someone has to reconstruct who had access and when. Without a record, that exercise takes days and often ends in uncertainty, which is its own kind of answer.

The third is continuity. If the only administrator is a person who has left, or a role that nobody remembers creating, recovering control of the system can stall operations at the worst time.

The fourth is wasted spend. Licences held by people who no longer work for the business are paid for every month. That is a small cost per seat, but it is a cost with no value attached.

## Common misidentification

The common misreading is that this is a technical weakness best left to IT. In small and mid-sized businesses there is often no IT department, and the person who set up the system was simply the most capable user. The gap is one of ownership and routine, not of technical skill.

A second misreading is to assume that a strong password policy solves it. Good passwords protect against guessing. They do nothing for an active account that should not exist.

A third is to see the blind spots as a one-off clean-up. A clean-up helps, but without a routine the same condition returns within a year.

## Possibility

The possibility is a business that can answer a simple question quickly: who has access to what, and why? Access is granted by role, with a record of who approved it. A leaver triggers a single checklist that covers every system, new and old. Someone reviews administrator and external accounts on a set rhythm. When a new system is introduced, its access design is part of the project and not an afterthought.

That gives owners confidence that new software extends the business without quietly widening its exposure.

## Intervention

The starting point is an inventory of systems that hold customer, financial or staff information, followed by a list of who can sign in to each. The exercise is usually short and often surprising. The business can then define a few standard roles per system, remove accounts that do not match a current person and a current need, and name an owner for each system who is responsible for the answer.

The second step is to join access to people processes. The leaver checklist lists every system by name. The new-starter checklist grants a defined role instead of copying a colleague's. Where the business uses Microsoft tools, features such as those described in the documentation on [managing application permissions](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-application-permissions) can help review what has been granted to an application. For wider context, see [when everyone has more system access than their job needs](/patterns/when-everyone-has-more-system-access-than-their-job-needs/).

## Practical next actions

1. List every system that holds customer, payroll or financial data, including the ones added in the last two years, and name one owner for each.
2. Export the user list from each system and mark every account that does not match a current employee, contractor or supplier with a current need.
3. Switch off or downgrade the accounts you cannot justify, and record who approved each change and when.
4. Add every system, by name, to the leaver checklist, and give each external user an end date for their access.
5. Put a calendar reminder every quarter for the system owners to confirm who has administrator rights and who can export data.

## Diagnostic questions

- Which system did we introduce most recently, and did anyone design its roles?
- Can we name everyone with administrator rights across all our systems?
- When someone leaves, who is responsible for removing their access in the newer systems?
- Do any external parties still have active logins from a project that ended?

## Bottom line

New software solves a visible problem and, unless it is managed, creates a less visible one. Access blind spots build up in the gap between buying a system and deciding how it will be controlled. Closing that gap takes a short inventory, a few clear roles and a regular review. Related reading on how departments end up with overlapping tools is in [why application inventories leave out shadow IT](/discovery/why-application-inventories-leave-out-shadow-it/).
