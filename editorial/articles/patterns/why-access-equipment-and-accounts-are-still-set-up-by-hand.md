---
hub: patterns
record_id: PAT-179
slug: why-access-equipment-and-accounts-are-still-set-up-by-hand
title: Why Access, Equipment and Accounts Are Still Set Up Manually
description: New starters wait while accounts, permissions and laptops are arranged one request at a time. Here is why provisioning stays manual and how to connect it to a single trigger.
lead: New starters wait while accounts, permissions and laptops are arranged one request at a time. Here is why provisioning stays manual and how to connect it to a single trigger.
category: Operational Friction & Manual Work
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Operational Friction & Manual Work
pattern_family: Operational Friction & Manual Work
observable_condition: New starters wait days for accounts, permissions and equipment that are arranged one request at a time by whoever is available, and nobody can list what each person was given.
primary_identification: Manual provisioning: no single trigger, role definition or asset register connects a hire or role change to the systems and devices that must be set up.
commercial_value_dimensions: Productive time of new starters, access-control and POPIA exposure, asset control and licence cost, first-week experience
sources:
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
  - Overview of Windows Autopilot | https://learn.microsoft.com/en-us/autopilot/windows-autopilot
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
related:
  - Why New Clients Wait While Internal Teams Coordinate | /patterns/why-new-clients-wait-while-internal-teams-coordinate/
  - When APIs Exist but the Business Still Works Manually | /patterns/when-apis-exist-but-the-business-still-works-manually/
  - The Business Process That Only Works Because Someone Remembers | /patterns/the-business-process-that-only-works-because-someone-remembers/
summary: New starters wait while accounts, permissions and laptops are arranged one request at a time. Here is why provisioning stays manual and how to connect it to a single trigger.
layout: plain
---
## Observable condition

A new sales coordinator starts on Monday. Her laptop was ordered on Thursday, her email address was created on Friday afternoon, and by ten o'clock on day one she is still waiting for access to the accounting package, the shared drive and the customer system. Her manager sends three separate emails to three different people. One of them is on leave. The coordinator spends the morning reading the staff handbook, which is the only thing she is able to open.

Nothing here is unusual. In many South African small and mid-sized businesses, joining, moving and leaving are handled by a chain of favours: HR tells the manager, the manager tells whoever "does IT", that person creates accounts one at a time, and someone in finance is asked separately to add the new starter to payroll and to the expense tool. Equipment follows its own route, through a supplier quote, a courier and a hand-over that is rarely written down.

An illustrative example: a Pretoria engineering services firm of about sixty people hires eight staff in a quarter. Each one needs a laptop, a phone, a mailbox, a licence for the drawing software, access to project folders and a building access card. The office manager keeps a mental list. Two people end up with access to folders for projects they never worked on, one is missing a licence for three weeks, and a laptop that was meant for a new starter is found in a cupboard four months later.

## Realisation

The realisation is that the work is not hard, it is scattered. Each individual step takes minutes. What costs time is the finding out: who needs to be told, in what order, with what details, and how anyone knows that it has been done. Because the steps are small, nobody ever stops to design the whole sequence, so every hire quietly reinvents it.

**Realisation prompt:** think of your last new starter. Could you list, without asking anyone, every system and device they were given and the date each one arrived?

## Identification

This is a pattern of manual provisioning. The visible symptom is a slow and uneven first week. The common assumption is that the business simply needs a more diligent office manager or a longer lead time. The structural cause is that the events that should trigger set-up, such as a signed contract or a changed role, are not connected to the systems that hold accounts, licences and equipment records, so people have to carry the trigger across by email.

Related published material looks at the same ground from other angles. The Discovery note [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/) describes the delay, the Impact page [on new employees without equipment](/impact/new-employees-without-equipment-onboarding-cost/) describes the cost of idle starters, and the Pattern [why hiring someone creates so much internal admin](/patterns/why-does-hiring-someone-create-so-much-internal-admin/) covers the HR paperwork side. This Pattern concentrates on why accounts, devices and permissions are still handled one request at a time even when the business has modern tools.

## Diagnosis

- **There is no single trigger.** The start date lives in a contract, a spreadsheet or an email. Nothing in it automatically tells the person who creates accounts or the person who orders the laptop.
- **Role definitions are informal.** "Give her what the last coordinator had" is a common instruction. Nobody has written down what a coordinator should have, so new starters inherit the leftovers of whoever came before.
- **Tools are bought one at a time.** Each application brings its own user list. Even where the software could be linked to a central directory, the connection was never set up, so every system needs its own manual entry.
- **Equipment has no register.** Devices are bought on a credit card or through a reseller and delivered to whoever is in the office. The asset list, if it exists, is updated when someone remembers.
- **Nobody owns the end-to-end result.** HR owns the contract, IT or its stand-in owns accounts, and the line manager owns the outcome of the first week without having the means to ensure it.

Microsoft's documentation on lifecycle workflows in Microsoft Entra describes the idea in plain terms: joiner, mover and leaver events can trigger tasks automatically, because doing them by hand leads to delay and inconsistency. The same documentation is a reminder that the tooling to do this is already available to many businesses that pay for the relevant licences, and that the real gap is usually in deciding what should happen at each event.

## Commercial impact

The commercial value at stake is productive time, security, asset control and the first impression a new employee forms of the business.

The simplest cost is paid-for time that produces nothing. If a new starter on R35,000 a month is unable to work properly for three days, the business has spent roughly R5,000 for very little output, plus the time of the manager and colleagues who chase and improvise. Multiplied across a year of hiring, the figure is not small, and it falls on the people the business has just spent money to recruit.

Security exposure is the less visible cost. The principle of least privilege, as defined by NIST, is that users should have only the access needed for their tasks. Manual provisioning drifts away from that principle in both directions: new starters are given broad access to save time, and role changes add permissions without removing old ones. Under POPIA, a responsible party has to secure the personal information it holds, and being unable to show who can reach customer or employee records is an uncomfortable position if an incident occurs. The Pattern [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) shows where the same drift ends.

## Common misidentification

The most common misreading is that onboarding is slow because the people involved are not trying hard enough. That leads to reminders, longer checklists and the occasional reprimand. The effort is usually already high. The problem is that the checklist lives in a person's head or in a document that is out of date, and every step depends on a separate human noticing it.

## Possibility

In a better state, hiring is recorded once, in one place, and that record sets everything else in motion. The manager selects the role, and the role defines a standard bundle: which accounts, which groups, which licences, which device. Requests for equipment and access go out automatically with the start date, and the business can see on a single list what has been done and what is outstanding. For devices, tools such as Windows Autopilot allow a laptop to be configured for a user from the supplier without being handled by hand, which reduces a half-day task to a delivery.

On the day someone changes role or leaves, the same record triggers the removal of access that no longer applies. The review of who can reach what becomes a short report instead of an investigation. New starters are productive on the morning they arrive, and the business can show an auditor, a client or the Information Regulator how access is controlled.

## Intervention

1. **Trace the last three starters.** For each, list every account, device and permission, who handled it, and how many days after the start date it arrived. This gives the real map of the process.
2. **Define standard bundles by role.** Write one page per common role showing the systems, groups, licences and equipment it needs. Keep exceptions explicit rather than informal.
3. **Choose one trigger and one owner.** Decide where a hire is recorded, who is told automatically, and who is accountable for the first-day result.
4. **Create an asset register.** Log every device against a person with a serial number and date of issue, and check it when roles change or people leave.
5. **Connect what can be connected.** Start with the systems that hold the most sensitive data and the most users. Use directory-based sign-in and automated lifecycle tasks where the existing licences allow, and leave genuinely rare systems manual but listed.
6. **Review access twice a year.** Ask each manager to confirm their team's permissions against the role bundles.

## Diagnostic questions

- How many days after the start date does a typical new starter have everything they need?
- Is there a written list of what each role should have access to?
- Can you produce a list of every company device and who holds it?
- When someone changes role, who removes the access they no longer need?

## Bottom line

Access, equipment and accounts are still set up by hand because each task is small and no one has been asked to design the whole. Recording the hire once, defining what each role needs and connecting the trigger to the tools gives back the first week, tightens control of who can see what, and makes the business look as organised as it intends to be.
