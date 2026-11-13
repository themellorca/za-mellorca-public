---
hub: impact
record_id: CPS-376
slug: new-starters-waiting-for-logins-access-setup-cost
title: New starters waiting for logins: The payroll cost of slow access setup
description: Setting up accounts and permissions only after a new employee arrives means paying a full salary for days of waiting. Drive access from the hire record.
lead: When accounts, permissions and sign-in methods are set up only after a new employee arrives, the business pays a full salary for days of waiting. Driving access from the hire record fixes it.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: New employees spending their first days waiting for accounts, permissions and system access
primary_cost_mechanism: Labour cost of paid but blocked time, plus IT and manager rework and access-control risk
sources:
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
  - Plan cloud HR application to Microsoft Entra user provisioning - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/plan-cloud-hr-provision
  - Configure a Temporary Access Pass in Microsoft Entra ID to register passwordless authentication methods - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-temporary-access-pass
related:
  - Answering the same question again: The payroll cost of undocumented know-how | /impact/same-internal-questions-undocumented-knowledge-cost/
  - Waiting weeks for management reports: What late visibility costs the business | /impact/waiting-weeks-for-management-reports-late-visibility-cost/
  - Catching up before starting: The cost of poor handovers and scattered updates | /impact/catching-up-after-absence-poor-handover-cost/
  - When access requests depend on messages and memory | /patterns/when-system-access-is-granted-through-chat-messages-and-memory/
summary: When accounts, permissions and sign-in methods are set up only after a new employee arrives, the business pays a full salary for days of waiting. Driving access from the hire record fixes it.
layout: plain
---
## The tolerated pain

The laptop is on the desk. The new employee has signed the contract, collected an access card and met the team. Then they sit down and cannot do anything. There is no email account yet, or there is an account but no access to the accounting system, the shared drive, the CRM or the job-costing tool. Somebody has emailed IT. IT is waiting for the manager to confirm which systems the person needs. The manager is in meetings until Thursday.

This is a different problem from the device not arriving, which is covered in [new employees starting without equipment](/impact/new-employees-without-equipment-onboarding-cost/). Here the hardware is ready but the identity is not: accounts, group memberships, licences, application roles and the first sign-in method. In many small and mid-sized businesses these are still created by hand, one request at a time, after the person has already started being paid.

## Why businesses tolerate it

- **Each delay looks small.** Half a day waiting for email, a day waiting for the finance system. Nobody adds the pieces together.
- **Nobody owns the whole joiner process.** HR owns the hire, the manager owns the role and IT owns the accounts. The start date belongs to all of them and therefore to none.
- **Access is decided person by person.** Without a standard access set for each role, IT has to ask what the person needs, and the manager has to think about it from scratch.
- **"Copy what Thabo has" feels efficient.** Cloning an existing employee's access is quick, but it copies every permission that person has gathered over years, which creates its own risk.
- **First weeks are expected to be slow.** Induction time hides blocked time, so the waiting is not recognised as waste.

## Operational symptoms

- new starters reading policy documents or shadowing because they cannot sign in to anything useful;
- access requests arriving one at a time over the first two weeks as each missing system is discovered;
- colleagues sharing their own logins "just for today" so the new person can help;
- IT dropping planned work to create accounts urgently on the morning of the start date;
- temporary passwords sent by WhatsApp or written on a sticky note;
- managers unable to say on day one what the new person should be able to access.

The borrowed-login symptom matters most. Once a colleague's account is used by someone else, the business can no longer say who did what in its systems. It is the mirror image of the risk described in [former employees retaining system access](/impact/former-employees-retaining-system-access/): access that does not match the person who is actually using it.

## What the joiner process can look like

The technology for automating joiner access is mature and widely available. Microsoft's documentation on [lifecycle workflows](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows) describes the goal plainly: when users join, they should be ready to go on day one, with the correct access to information, group memberships and applications. Its own example is a workflow that emails the manager seven days before the hire date recorded on the user, so the trigger is the start date rather than somebody remembering.

The same vendor's guidance on [planning HR-driven user provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/plan-cloud-hr-provision) describes the manual alternative frankly. It notes that IT staff have historically relied on methods such as uploading CSV files or custom scripts, and calls these processes error prone, insecure and hard to manage. It states that automating account, licence and group assignment gives new hires immediate access to their job tools.

First sign-in is often the last blocker. A [Temporary Access Pass](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-temporary-access-pass) is a time-limited passcode that lets a new user sign in for the first time and register stronger sign-in methods, including during device setup. It replaces the habit of sending a password in a chat message, and it expires on its own.

None of this requires a large enterprise. The tools exist in common business platforms, but they only work if the hire record exists early, the start date is accurate and each role has a defined access set.

## How the pain becomes money

- **Labour cost:** the new employee is paid in full while they cannot do the work they were hired for.
- **Rework cost:** IT handles several separate requests instead of one, and managers chase each missing system.
- **Colleague time:** the people who lend logins, explain workarounds or redo work the new person could not finish.
- **Risk exposure:** shared credentials and cloned permissions weaken the audit trail and leave excess access in place.
- **Scaling cost:** the effort rises with every hire, so a growing business pays more each year.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business, not a benchmark. Picture a Durban logistics company with 120 employees that hires 30 people a year.

| Assumption | Value |
| --- | --- |
| Hires per year | 30 |
| Productive hours lost per hire waiting for access (excluding genuine induction) | 12 |
| Loaded hourly cost of a new employee | R250 |
| IT time per hire on separate, urgent access requests | 3 hours at R400 |
| Manager time per hire chasing access | 2 hours at R500 |

- Blocked new-starter time: 30 × 12 × R250 = R90,000
- IT rework: 30 × 3 × R400 = R36,000
- Manager time: 30 × 2 × R500 = R30,000
- **Illustrative total: R156,000 a year**, or about R5,200 per hire

The model leaves out slower time to full productivity, the security exposure of shared logins and any customer impact. Replace each figure with your own: count the hours between the start date and the moment each new starter could use every system the role needs.

## When it becomes commercially urgent

- hiring volume increases, or seasonal staff join in batches;
- new starters work in customer-facing or billable roles, where each blocked day is lost revenue as well as cost;
- an audit, client questionnaire or insurer asks how access is granted and reviewed;
- shared logins are discovered in a system that records financial or personal information;
- a key person in IT is the only one who knows how to set up a new user.

## What better looks like

1. **The hire record starts the process.** Once HR confirms the hire and start date, access tasks are triggered automatically, days before the person arrives.
2. **Each role has a standard access set.** A bookkeeper, a driver controller and a sales consultant each get a defined bundle of accounts and groups. Exceptions are requested and approved separately.
3. **First sign-in is planned.** The new starter receives a time-limited way to sign in and set up their own secure methods on day one.
4. **Completion is visible.** Someone can see, before the start date, whether every account is ready.
5. **The same record drives movers and leavers.** When a role changes or employment ends, access changes from the same source.

This is the same thinking explained in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/): the start date should drive the work, not someone's inbox.

## Practical next actions

1. For the last ten hires, record the start date and the date each person could use every system they needed.
2. List the roles you hire most often and write down the access each one needs on day one.
3. Agree who owns the joiner process from offer acceptance to full access, and give that owner a checklist with a deadline before the start date.
4. Check whether your identity platform already supports automated joiner tasks or HR-driven provisioning under your current licences.
5. Stop sending passwords through chat; use a time-limited first sign-in method instead.
6. Review cloned access: compare what recent starters have against what their role actually needs.

The Discovery note on [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/) sets out the underlying pattern in more detail, and the wider admin load of hiring is explored in [why hiring someone creates so much internal admin](/patterns/why-does-hiring-someone-create-so-much-internal-admin/).

## Bottom line

Every new hire is a planned event with a known date. When accounts and permissions are still created by hand after the person arrives, the business pays a salary for waiting, pulls IT and managers off other work and weakens its own access controls. Driving access from the hire record turns a recurring, invisible cost into a routine task that is finished before day one.
