---
hub: discovery
record_id: DISC-002
slug: staff-keep-old-application-access-after-they-change-roles
title: Staff keep old application access after they change roles
description: A role change adds the new access but nothing removes the old. Link HR role changes to access, decide what moves with the person, and review leftover access before the next audit.
lead: A role change adds the new access but nothing removes the old. Link HR role changes to access, decide what moves with the person, and review leftover access before the next audit.
category: Identity & Access Lifecycle
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Identity & Access Lifecycle
problem_domain: Identity & Access Lifecycle
problem_owner: Head of IT or identity and access lead
budget_owner: CIO or COO
sources:
  - https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf
  - Plan a Lifecycle Workflow deployment - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/lifecycle-workflows-deployment
  - Lifecycle Workflows templates and categories - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/lifecycle-workflow-templates
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
  - New SaaS purchases create integrations nobody budgets to maintain | /discovery/why-new-saas-integrations-have-no-maintenance-budget/
  - Why application risk assessments cannot be one-time reviews | /discovery/why-application-risk-assessments-cannot-be-one-time/
summary: A role change adds the new access but nothing removes the old. Link HR role changes to access, decide what moves with the person, and review leftover access before the next audit.
layout: plain
---
Picture the internal audit team at a Johannesburg insurer, working through a sample of staff who changed roles during the past year. For each person, the auditors compare the access they hold today with the access their current job needs. The pattern repeats. An accounts payable clerk who moved to sales operations can still release payments. A service-desk agent who moved to HR can still reset other people's passwords. A project coordinator promoted to team leader holds the approval rights of both jobs.

None of this was approved as an exception. Each person's new access was requested and granted promptly enough, usually by asking IT to "give her the same access as her colleague". Nobody asked IT to remove the old access, because nobody thought of it, and nothing in the HR system tells IT that the old job has ended. The audit report calls it a finding, and the head of IT is asked how many other staff are in the same position.

The operating condition is plain: when an employee changes role, new access is added and old access stays, because nothing links the HR role change to the removal of access that no longer fits. That matters to the CIO and the COO because the leftover access is a risk the business carries without having chosen it, and because each audit or incident repeats the cost of finding out who still holds what.

## The problem in plain language

Staff change roles often. They are promoted, move between departments, take on new responsibilities or cover for a colleague. Each change alters what the person needs to do their job in the business's systems.

Most businesses have a reasonable process for giving access. A manager raises a request, an approver agrees, and IT provides the access. The same process rarely exists for taking access away. Removal depends on someone remembering that the person had access to something they no longer need, and on that someone telling IT.

So access accumulates. The first role gives a person a set of permissions. The second adds another set and keeps the first. By the third role, the person holds a mix that no job description would justify. The pattern is sometimes called access creep, and it is hardest to see because every individual permission was once legitimate.

The people who move are rarely the problem. They are not trying to keep access they should not have. The gap lies in the process: the event that matters, the role change, is recorded in the HR system, and the place where access is controlled, the identity system and the applications, is told nothing.

This differs from [new staff waiting days for system access](/discovery/why-new-employees-wait-for-system-access/). That problem is about giving access to joiners quickly enough. This one is about what happens to existing staff when their job changes, and it is made worse by the same habit: copying a colleague's access to get someone started fast.

## What the buyer is actually trying to solve

Heads of IT and identity and access leads put this in practical terms. How many of our staff hold access from roles they left? What do we tell the auditor? Why does every role change create a pile of requests but never a removal? How do we fix this without slowing people down when they move?

The outcome they want is a role change that triggers a defined set of access changes. What belongs to the old role is removed, what belongs to the new role is granted, and anything unusual goes to a person. The result is visible and the evidence is available when an auditor asks.

## Evidence and system mechanism

### Standards treat transfers as a control in their own right

Security frameworks name this moment explicitly. NIST's [Security and Privacy Controls for Information Systems and Organizations](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), in its personnel security control on transfers (PS-5), requires an organisation to review and confirm the ongoing operational need for current logical and physical access when individuals are reassigned or transferred. It also requires the organisation to initiate defined transfer actions within a defined time after the formal transfer, to modify access to match the change in operational need, and to notify defined people or roles within a defined time. The guidance says the actions can include closing accounts and setting up new ones, and changing access privileges, and that the control applies when a move is permanent or lasts long enough to warrant action.

The wording matters. The control is about confirming that old access is still needed, and removing it if not. A process that only adds access does not satisfy it.

### Identity tools can act on a role change, if they are told

Identity platforms now offer automation for these events. Microsoft's guidance on [planning a Microsoft Entra Lifecycle Workflows deployment](https://learn.microsoft.com/en-us/entra/id-governance/lifecycle-workflows-deployment) organises the work as joiner, mover and leaver scenarios. Its predefined tasks for an employee job profile change include notifying the manager of the move, removing the user from selected groups and from selected Teams, and requesting an access package assignment for the new role. Microsoft's page on [lifecycle workflow templates](https://learn.microsoft.com/en-us/entra/id-governance/lifecycle-workflow-templates) says these workflows can be triggered by attribute changes or group membership changes, and that they build on HR-driven provisioning, which handles the creation and attribute updates of user accounts, by automating further tasks.

Two practical points follow. The workflow removes the groups and assignments it is told to remove, so someone has to decide which groups belong to which role. And it works on what the identity system manages. An application that keeps its own list of users, outside the directory, will not be changed by a directory workflow unless it is connected to receive those changes.

| Gap | Effect |
| --- | --- |
| HR role change not linked to the identity system | Nobody is told that the old job has ended |
| Access granted by "same as colleague" requests | New access copies the colleague's accumulated extras |
| No defined set of access per role | Nobody can say what should be removed |
| Removal depends on someone remembering | Old access stays indefinitely |
| Applications with their own user lists | Changes in the directory never reach them |
| No review after a move | Leftover access is discovered only in audit |

### What South African law expects of the safeguards

POPIA gives leftover access a legal edge where the applications hold personal information. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/documents/protection-personal-information-act) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information in its possession by taking appropriate, reasonable technical and organisational measures to prevent loss of, damage to or unauthorised access to that information. It also requires the party to identify reasonably foreseeable risks, establish and maintain safeguards, verify regularly that they are effectively implemented, and update them in response to new risks.

A person who has moved to a different job but can still open customer or staff records for their old one is a foreseeable risk of unauthorised access. A defined mover process, with evidence that old access was reviewed and removed, is practical evidence that the safeguard works. Confirm with your information officer how the Act applies to your own systems.

## Why this becomes urgent

A security or audit finding is the usual trigger. An auditor samples movers and finds leftover access. An incident review shows that an account with old rights was used. An insurer or regulator asks for evidence of how access changes when roles change. In each case the question arrives suddenly and the business discovers that it cannot answer it.

The answer is not available because the data is scattered. HR knows who moved and when. The identity system knows the groups. Each application knows its own permissions. Nobody has compared them. The first time the comparison is done, the number of people with leftover access is larger than anyone expected.

Pressure also builds from growth. A larger business has more movers, more applications and more managers asking for "the same access as" a colleague. The accumulated extra access grows faster than anyone can check by hand.

## Economic consequence

The cost of mover access that nobody manages falls in several places:

- **Access risk.** More people able to approve payments, change records or see personal information than their current job justifies, which raises the chance and impact of an error or misuse.
- **Audit effort.** Time spent assembling lists of who holds what, explaining each case and preparing responses to findings, repeated at every audit.
- **Service-desk labour.** Requests to copy a colleague's access, follow-up tickets when it turns out to be wrong, and clean-up tickets after a finding.
- **Lost productive time.** Staff waiting for the access their new role needs, because the request goes through a slow, manual process, or being given too much access that later has to be reversed.
- **Excess licences.** Paid seats held by people who moved to jobs that no longer need the application, with nobody to say that the licence can be released.

As an illustrative example only, suppose a business has two hundred role changes in a year and each one leaves an average of two permissions behind. That is four hundred leftover permissions, each of which an auditor may ask about. Reviewing and explaining them by hand could take weeks of skilled time, which a defined mover process would largely avoid. The numbers are invented, but the arithmetic shows how a small gap in each move adds up.

Licences are a quieter cost. A seat for an application that someone no longer uses is spend that goes unnoticed until a licence review, and if the application is not on any list, as with [application inventories that miss unofficial tools](/discovery/why-application-inventories-leave-out-shadow-it/), the review cannot find it.

## Root cause

The root cause is that access is granted when a role starts but not reviewed when it changes, because the HR event and the access system are not connected. The business built a process for the start of a role and left the rest of the lifecycle to memory.

A second cause is that nobody has defined what access belongs to each role. Without a standard set, there is no baseline against which to compare what a person holds, and no list of what to remove. A request to "give her what her colleague has" copies whatever the colleague has accumulated.

A third cause is that the people who could say what an application's permissions mean are often not available. Where [application owners leave without handing over](/discovery/application-owners-leave-without-transfer/), nobody can tell the identity team which permissions belong to which job, and the safest course is to leave everything as it is.

## Practical intervention

### Practical next actions

1. **Treat a role change as an event with a deadline.** Define what counts as a role change: a new job title, department, manager or location, and the length of a secondment that qualifies. Agree a time limit for completing the access changes after the HR record is updated.
2. **Connect the HR record to the identity system.** Use the HR system as the source for job title, department and manager, and make a change to these fields trigger a mover workflow in your identity tooling. Where your tooling cannot do this automatically, create a task for the new and old manager and for IT, raised automatically from the HR change.
3. **Define access by role.** For each role or group of similar roles, list the standard access: applications, groups and permission levels. Start with the roles that carry the most risk, such as finance approvals, system administration, payroll and customer data. Have each application owner agree the list for their application.
4. **Separate what moves from what stays.** For a role change, work out the difference between the old and new standard sets. Remove access that belongs only to the old role, grant access that belongs only to the new role, and keep access common to both. Treat anything outside the standard sets as an exception to be approved.
5. **Ask the old and new manager to confirm.** Send the old manager the list of access to be removed and the new manager the list to be granted, and ask each to confirm or object within a few days. NIST's control expects a confirmation that the ongoing need still exists, and this gives you the evidence.
6. **Stop "same as" requests.** Replace requests that copy a colleague's access with requests that choose a role. Where a colleague's access is used as a guide, compare it with the role's standard set and question the differences.
7. **Reach the applications that keep their own lists.** For applications outside single sign-on, add the removal step to the mover checklist and assign it to the application owner, or connect the application to receive changes from the directory where the product allows it.
8. **Review what is left.** Run a one-off review of everyone who changed role in the past year, using the role standards to find leftover access, and fix what you find. After that, review a sample of movers each quarter and report the results to the CIO.
9. **Keep the evidence.** Record each mover case: the HR change, the access removed and granted, who confirmed it and when. This is the record an auditor or insurer will ask for.

## Diagnostic questions

- When an employee changes role, what tells IT that their old job has ended, and how long does it take?
- For the last ten people who moved into finance, sales operations or IT, can we show what access they lost?
- Do we have a standard set of access for each role, and who agreed it?
- How many access requests in the past quarter were phrased as "the same as" another person?
- Which applications keep their own user lists and would not be changed by a directory workflow?
- Could we answer an auditor today who asked for everyone who holds payment approval rights and moved role in the past year?

## What good looks like

A role change in the HR system starts a defined process. The old and new managers are asked to confirm the changes, standard access for the old role is removed, standard access for the new role is granted, and anything unusual goes to a person for approval. Applications outside the directory are covered by a checklist with an owner. Each case leaves a record, and a sample of movers is reviewed every quarter.

You can measure the result. The time from an HR role change to completed access changes falls and stays within the agreed limit. The number of leftover permissions found in each quarterly review falls towards zero. "Same as" requests become rare. The list of people with high-risk access can be produced in minutes. Audit findings on mover access stop recurring, and the licence count drops where seats were held by people whose jobs no longer need them.

## Where Mellorca fits

If you do not know how much leftover access your movers hold, a [digital systems audit](/services/digital-systems-audit/) can compare the access people hold with what their current roles need, list the leftovers and show which applications sit outside your directory. To build the link between your HR system and your identity tools, with the confirmation steps and records described above, [business automation and AI workflows](/services/business-automation-ai-workflows/) can set up and run the mover process so that it happens on every role change.

## Method note

This article draws on NIST Special Publication 800-53 Revision 5, Microsoft's documentation on Entra Lifecycle Workflows and the text of the Protection of Personal Information Act. The scenario, the counts and the staff time are illustrative and not measured. The article does not claim that any product named is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the systems you run. It is general information and not legal advice: confirm your obligations under section 19 of the Protection of Personal Information Act with your information officer or legal adviser.
