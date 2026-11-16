---
hub: patterns
record_id: PAT-359
slug: why-offboarding-is-a-security-workflow-not-an-hr-checklist
title: Why Offboarding Is a Security Workflow, Not an HR Checklist
description: When a leaver is handled through an HR form and a few emails, access, devices and shared secrets slip through. Why offboarding needs a security owner and a trigger.
lead: When a leaver is handled through an HR form and a few emails, access, devices and shared secrets slip through. Why offboarding needs a security owner and a trigger.
category: Security, Access & Operational Risk
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Security, Access & Operational Risk
pattern_family: Security, Access & Operational Risk
observable_condition: A leaver is processed through an HR exit form and an email to IT, and weeks later the business discovers the person's access, forwarded mail, shared passwords or company data still in place.
primary_identification: Misplaced ownership: offboarding is designed as a personnel task with HR as owner, so the security steps depend on informal requests and memory rather than on a trigger, an owner and a verified finish.
commercial_value_dimensions: Risk, data protection compliance, continuity, licence cost and client trust
sources:
  - Understanding lifecycle workflows - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/understanding-lifecycle-workflows
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why do former employees still have access? | /patterns/why-do-former-employees-still-have-access/
  - When everyone has more system access than their job needs | /patterns/when-everyone-has-more-system-access-than-their-job-needs/
  - When AI agents can act but governance cannot see them | /patterns/when-ai-agents-can-act-but-governance-cannot-see-them/
summary: When a leaver is handled through an HR form and a few emails, access, devices and shared secrets slip through. Why offboarding needs a security owner and a trigger.
layout: plain
---
## Observable condition

An employee resigns. HR completes the exit form, calculates the final pay, collects the access card and sends a note to IT. IT disables the email account. Everyone considers the matter closed.

Three months later, a client mentions that they still receive emails from the former employee's personal address with company price lists attached. The leaver's login to the online accounting system was never removed because it was not linked to the email account. The shared password for the supplier portal, which the leaver knew, has not been changed. Their laptop is in a cupboard, unchecked. Nobody did anything wrong according to the checklist. The checklist simply did not cover these things.

An illustrative example: a Pretoria property management company with forty staff and some twenty cloud applications, about half of which sign in separately from the main email account. The HR exit checklist has six lines. None of them names a cloud application.

## Realisation

The realisation is that offboarding has two jobs that look similar but are not. One is a personnel job: ending employment fairly, paying correctly and keeping records. The other is a security job: removing every route by which the person can still reach company systems, data or money, and confirming that it has been done. HR is well placed to run the first. It usually cannot see enough of the systems to run the second.

When offboarding is designed as an HR task, the security steps are delegated by email and depend on someone remembering every system, shared account and device. In a business with many cloud applications, nobody remembers them all.

**Realisation prompt:** for your last leaver, can anyone show a record of every system, shared credential and device that was dealt with, and who confirmed each one?

## Identification

This is a pattern of misplaced ownership. The visible symptom is access or data that outlives employment. The common assumption is that offboarding is an HR process and that disabling email ends access. The structural cause is that the security part of offboarding has no owner, no reliable trigger, no complete list of what must be removed, and no step that verifies completion.

The consequences are described in the Pattern [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) and the Impact note on [former employees still active in systems](/impact/former-employees-still-active-systems-incomplete-offboarding-cost/). This article looks upstream, at how the workflow is designed and who owns it.

## Diagnosis

- **The trigger is informal.** IT learns about a leaver from an email, a conversation or a resignation letter forwarded late. Sometimes it learns after the person has gone.
- **The list of systems is incomplete.** Applications that do not use the company sign-in, trial accounts, supplier portals and banking profiles are not on any list, so they are not on the checklist.
- **Shared secrets are invisible.** Passwords that several people know, such as for a social media account, a supplier portal or a Wi-Fi network, are not tied to anyone and are rarely changed when one of those people leaves.
- **Movers are ignored.** People who change role keep the access of their old role, so by the time they leave, nobody knows what they have.
- **Completion is not verified.** The checklist records that a request was sent, not that access was removed and checked.
- **Data handover is unmanaged.** Mailbox forwarding, files in personal storage and client contacts on personal phones are not reviewed.

Identity platforms model this as a joiner, mover and leaver cycle. [Microsoft's documentation on lifecycle workflows](https://learn.microsoft.com/en-us/entra/id-governance/understanding-lifecycle-workflows) describes workflows with defined triggers, such as an attribute change from the HR system or a date, and a set of tasks that run for the people in scope, with a history of what ran. The tool matters less than the design: a trigger, a defined set of tasks and a record.

## Commercial impact

The commercial value at stake is risk reduction, data protection compliance and client trust, with some direct savings on licences.

The main exposure is unauthorised access to company and client information. In South Africa, a responsible party must secure the personal information it holds. [Section 19 of POPIA](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) requires appropriate technical and organisational measures, including identifying foreseeable risks and regularly verifying that safeguards are effective. A former employee with live access to client records is a foreseeable risk.

There is also continuity risk. When a leaver's mailbox is simply switched off, client correspondence, approvals and supplier conversations may be lost with it. And there is a plain cost: licences for departed staff keep renewing until someone notices.

## Common misidentification

The usual fix is a longer HR checklist. It helps a little, but it still relies on HR knowing every system and on IT acting on an email. Another response is to blame IT for missing a system that nobody told it about. A third is to buy an identity tool and assume the problem is solved, without first building the list of systems and shared credentials the tool needs to act on.

## Possibility

In a better state, offboarding has two coordinated parts. HR owns the personnel steps and raises a formal leaver event with a date. A named security or IT owner runs the access steps from a maintained register of systems, shared credentials and devices, and signs off when each one is confirmed. Role changes trigger the same review. The business can show, for any leaver, what was removed and when.

## Intervention

Start by giving the security side of offboarding a clear owner and a clear trigger, then build the list it works from.

## Practical next actions

1. **Name the security owner of offboarding.** One person, internal or at your IT provider, is accountable for confirming that access has been removed.
2. **Make the trigger formal.** HR raises a leaver notice with a last working date as soon as a resignation or dismissal is confirmed, through one agreed channel.
3. **Build an access register.** List every application, portal, shared account and device, with who has access. Include systems that do not use the company sign-in.
4. **Rotate shared secrets on every exit.** Change any password the leaver knew, and work toward individual accounts where possible.
5. **Decide what happens to data.** Set rules for mailbox handover, forwarding, personal storage and client contacts before the last day.
6. **Verify and record.** Check a sample of systems a week after each exit and keep the record, so completion is proven rather than assumed.

## Diagnostic questions

- Who is accountable for confirming that a leaver's access has been removed from every system?
- How does IT learn that someone is leaving, and how early?
- Does your offboarding list include applications that do not use your main sign-in?
- Which shared passwords did your last leaver know, and have they been changed?
- Can you prove, for your last three leavers, what was removed and when?

## Article summary

Treating offboarding as an HR checklist leaves the security work to memory and email, so access and data quietly outlive employment. Giving the access steps an owner, a formal trigger, a complete register and a verification step turns offboarding into a reliable control that protects client data and the business's reputation. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where your offboarding gaps sit and how Mellorca may be able to help.
