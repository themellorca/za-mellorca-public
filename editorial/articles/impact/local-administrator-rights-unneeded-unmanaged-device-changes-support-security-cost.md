---
hub: impact
record_id: CPS-210
slug: local-administrator-rights-unneeded-unmanaged-device-changes-support-security-cost
title: Local Administrator Rights Nobody Reviewed: The Cost of Unmanaged Devices
description: When staff hold local administrator rights they do not need, laptops drift apart, controls switch off quietly, and support time and breach exposure rise.
lead: When staff hold local administrator rights they do not need, laptops drift apart, controls switch off quietly, and support time and breach exposure rise.
category: Technology Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Technology Operations
commercial_domain: Technology Operations
primary_pain: Employees hold local administrator rights they do not need, so devices change without approval or record
primary_cost_mechanism: Slower support from undocumented changes, duplicate or unlicensed software, silently disabled security controls, and breach and compliance exposure
sources:
  - https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models | https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models
  - https://csrc.nist.gov/glossary/term/least_privilege | https://csrc.nist.gov/glossary/term/least_privilege
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
summary: When staff hold local administrator rights they do not need, laptops drift apart, controls switch off quietly, and support time and breach exposure rise.
layout: plain
---
## The laptop that nobody can describe any more

A 60-person distribution business in Gqeberha gives every office employee local administrator rights on their laptop. The reason is practical: years ago a printer driver needed it, a sales manager complained, and handing out the rights was quicker than solving the problem. Today nobody remembers deciding it. It is simply how laptops are issued.

Eighteen months later, no two laptops are quite the same. One has a free PDF tool that bundles a browser toolbar. One has a VPN client from a previous employer. One has had its antivirus switched off because it slowed a spreadsheet. When the finance manager's laptop starts failing, the support technician spends half a day working out what has been installed, removed or changed before the actual fault can be found.

This article is about that specific pattern: employees holding local administrator rights they do not need for their jobs, and the financial and security cost of device changes that nobody approved or recorded.

## What local administrator rights actually allow

A standard user can run the applications the business has installed and change their own settings. A local administrator can also install and remove software, change security settings, create other accounts, alter system files and switch off protections. Microsoft's guidance on [least-privilege administrative models](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models) describes the principle plainly: accounts should hold only the rights needed for the task, because every extra right widens what an attacker or a mistake can reach.

The risk is not that employees are careless. Most are not. The risk is that anything running in their session inherits their rights. If a staff member opens a malicious attachment, the malicious program runs as an administrator and can disable defences, install itself permanently and reach further into the network. The same attachment opened by a standard user is far more limited in what it can do.

## Where the money goes

Unneeded administrator rights rarely cause one dramatic loss. They produce a series of ordinary costs, and a tail risk that is much larger.

### Support time that grows with every difference

A fleet of identical, managed laptops can be rebuilt in a predictable way. A fleet of individually altered ones cannot. Each fault becomes an investigation. If a technician loses even an hour per incident to untangling undocumented changes, and the business has thirty such incidents a year, that is thirty hours of skilled time spent on archaeology. The numbers here are illustrative, but the mechanism is familiar to anyone who has watched a reinstall take a day because the user had customised everything.

### Software the business pays for twice, or not at all

When anyone can install anything, the business ends up with duplicate tools, trial versions that convert to paid subscriptions, and software without a valid licence. The first is wasted spend. The second becomes a compliance exposure when a vendor audits. Neither appears in a software register, because the register was never told.

### Security controls that quietly stop working

Local administrators can stop security services, change firewall rules and remove update agents. A laptop that was compliant when issued may be unprotected months later, and the business finds out only when something goes wrong. This is the same visibility problem that appears when [software is bought without approval](/impact/software-bought-without-approval-shadow-it-cost/), applied to the device itself.

### Breach cost and the duty to protect personal information

South African businesses that hold customer or employee data must take appropriate, reasonable technical and organisational measures to secure it under the Protection of Personal Information Act. A laptop on which anyone can disable protections is hard to defend as a reasonable measure after an incident. The business then faces investigation time, notification effort, possible reputational damage and, in a serious case, regulatory attention. This article does not offer legal advice; a business with specific questions should consult a qualified adviser.

## Why the rights were handed out in the first place

Understanding the reason matters, because removing rights without addressing it simply creates a queue of angry employees.

- **A specific application needed it.** Older line-of-business software sometimes writes to protected folders. The fix is usually to adjust that application or its permissions, not to elevate every user.
- **Support was slow.** If getting a tool installed takes a week, employees will find a way to do it themselves.
- **Nobody owned the decision.** The rights were granted case by case and never reviewed, which is the same drift described in [single administrator accounts shared between staff](/impact/single-administrator-account-shared-between-staff-accountability-security-exposure-cost/).
- **Executives and senior staff asked for it.** Seniority is not a technical requirement, and these laptops often hold the most sensitive data.

## A calmer way to remove the rights

Taking rights away overnight is the quickest route to resistance. A staged approach works better and shows the business which rights were genuinely needed.

First, find out who has the rights. Most Windows environments can list the members of the local Administrators group on each device, and a device management tool can report this centrally. Second, identify which applications genuinely require elevation. Third, give those people a controlled alternative. Microsoft documents [Endpoint Privilege Management in Intune](https://learn.microsoft.com/en-us/mem/intune/protect/epm-overview), which lets approved applications run with elevation while the user remains a standard user. Where a business does not use such a tool, a request-and-approve process handled by IT within a day achieves much the same end.

Finally, give the change a clear narrative. Employees accept it more readily when they hear that it protects them from being the person whose laptop caused the incident, rather than that it reflects a lack of trust.

## Measuring whether it is worth it

You do not need exact figures to judge the case. Count the devices with local administrator users, the support incidents last quarter where undocumented changes slowed the fix, and the software found on devices that is not in your register. Multiply the incident hours by your loaded technician cost. Then compare that with the effort of a managed baseline and a simple approval route. For most businesses of this size, the numbers are not close.

This connects with wider questions about [unclear accountability for technology decisions](/impact/unclear-accountability-technology-decisions-cost/). Local administrator rights are often the physical evidence that nobody decided who may change what.

## Practical next actions

1. **Produce a list of every device and every local administrator on it.** Include laptops, desktops and shared machines, and note which of those users hold the right by default and which were granted individually.
2. **Interview five users with the rights and ask what they actually use them for.** Record the applications and tasks, and separate genuine needs from habit.
3. **Define a standard device build and a one-day approval route for exceptions.** Name the person who approves, and record each approval with a date and a reason.
4. **Move users to standard accounts in groups, starting with a pilot team.** Fix the application problems the pilot reveals before extending the change.
5. **Compare installed software with your register each quarter.** Remove what is unlicensed or unused and cancel duplicate subscriptions.
6. **Review the administrator list after every resignation and role change.** Rights should follow the job, not the person.

None of this needs a large project. It needs an owner, an inventory and a short, predictable path for the few people who do need extra rights.
