---
hub: insights
record_id: INS-328
slug: what-happens-when-the-only-person-who-understands-the-system-leaves
title: What Happens When the Only Person Who Understands the System Leaves?
description: When the one person who understands a critical system leaves, problems unfold in stages: lost admin access, automations failing on their account, then a system nobody dares change. Here is what to secure, and in what order.
lead: When the one person who understands a critical system leaves, problems unfold in stages: lost admin access, automations failing on their account, then a system nobody dares change. Here is what to secure, and in what order.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
sources:
  - Manage emergency access admin accounts - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access
  - Change the owner of a cloud flow in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/change-cloud-flow-owner
  - Remove a former employee - Overview - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee
related:
  - What to Do With a Software Stack Nobody Fully Understands | /insights/what-to-do-with-a-software-stack-nobody-fully-understands/
  - What Happens When Every Department Chooses Its Own Tools | /insights/what-happens-when-every-department-chooses-its-own-tools/
  - Why uncontrolled configuration changes create operational risk | /insights/why-uncontrolled-configuration-changes-create-operational-risk/
summary: When the one person who understands a critical system leaves, problems unfold in stages: lost admin access, automations failing on their account, then a system nobody dares change. Here is what to secure, and in what order.
layout: plain
---
Many businesses have one person who understands a critical system. They set up the CRM, built the automations, know why the stock codes are structured the way they are and hold the relationship with the software vendor. Everyone knows this is a risk. Few businesses know exactly what would happen if that person resigned on Friday.

The question is worth answering concretely, because the consequences do not arrive all at once. They unfold over days, weeks and months, and each stage is cheaper to prevent than to repair. This article follows that sequence and then sets out what to secure before it starts.

> When the only person who understands a system leaves, the system keeps running for a while. What stops is the business's ability to change it, fix it or trust it.
>

## The first days: access

The first problems are usually about accounts and permissions. The departing person may hold the only administrator account for a platform, the login to the domain registrar, or the account that owns the company's automation subscriptions. If their account is disabled as part of normal offboarding, those things may become unreachable.

Microsoft's guidance on emergency access accounts for Microsoft Entra ID lists, among the reasons an organisation can lose administrative access, the situation in which the person with the most recent Global Administrator access leaves the organisation. Microsoft recommends two or more emergency access accounts that are not tied to any individual, with credentials stored where several authorised people can reach them, and tested regularly. The principle applies to every critical system: administrative access must never depend on one person's account.

There is also the opposite risk. If the person's access is not removed, a former employee still holds the keys to the business's systems. That pattern is described in [why former employees still have access](/patterns/why-do-former-employees-still-have-access/). Both problems come from the same gap: nobody has a list of what the person had access to.

## The first weeks: things that were running on their name

Next, automations and integrations start to fail. Many were built under the departing person's account and run with their permissions, connections and licences.

Microsoft's documentation for Power Automate shows how this plays out. When a flow is created, the creator becomes its owner. For scheduled and automated flows, the flow runs under the owner's licence and request limits. Ownership can be transferred, but for flows that are not part of a solution, Microsoft notes the owner cannot be changed in place because the owner is part of the flow's identity; the flow has to be recreated or moved first. Microsoft suggests a service principal, a non-human identity, as an owner that is not tied to a person who could leave.

Similar dependencies exist in most automation tools. Connections authenticated with a person's password stop working when the password is reset. Reports emailed from their mailbox stop arriving. Alerts that went to them now go nowhere. The general risk is explored in [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).

Data matters too. Microsoft's guidance on removing a former employee from Microsoft 365 notes that once a user's account is deleted, the content of their mailbox and OneDrive is retained for 30 days, during which the account can be restored. Configuration notes, exports and scripts saved in a personal drive can disappear with the account if nobody moves them in time.

## The first months: the system becomes untouchable

If the business gets through access and automations, a slower problem follows. Nobody knows why the system is configured the way it is. A field that seems unused turns out to drive a report. A workflow rule that looks redundant prevents a duplicate invoice. Staff become reluctant to change anything, so requests pile up and people work around the system with spreadsheets.

At the same time, the vendor relationship weakens. Renewal notices go to a mailbox nobody reads. Support tickets cannot be logged because the registered contact has gone. Licence changes and price increases arrive without anyone assessing them. The system is still running, but nobody is looking after it. This is the point at which [ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/) stops happening by default.

## What to secure before anyone leaves

Each of the problems above can be prevented with work done while the person is still there. The useful output is not a long manual. It is a short, maintained record covering five areas.

| Area | What to record or change |
| --- | --- |
| Access | Every admin account and who holds it; at least two people or a shared emergency account for each critical system |
| Ownership | Automations, integrations and subscriptions transferred from personal accounts to service or shared accounts |
| Dependencies | Which systems connect to which, what each automation does and what breaks if it stops |
| Reasons | Why key configuration choices were made, especially unusual ones |
| Relationships | Vendor contacts, contract and renewal dates, support arrangements, with a named business owner |

The record should be kept with the system, not in the person's head or personal drive. A good test is whether a competent outsider could use it to make a small, safe change to the system without speaking to the person who built it.

## If the person has already resigned

Notice periods are short, and they are often taken up with finishing current work. Use them in priority order:

1. **Access first.** List every account the person administers and add a second administrator to each before their last day.
2. **Ownership second.** Find every automation, integration and scheduled report that runs under their account and move it to a non-personal owner while they can still explain it.
3. **Dependencies third.** Ask them to walk through what each automation does and what would happen if it stopped, and record the answers with the system.
4. **Reasons fourth.** Capture the decisions that would surprise a newcomer.
5. **Relationships last.** Update vendor contacts and renewal notifications to a role or shared mailbox.

Delay disabling their account until access and ownership have been moved, but remove personal access on their last day. If something is missed, it is far easier to recover within the retention period than after it.

## An illustrative example

Consider an illustrative East London agricultural supplies distributor with about 70 staff. Its operations manager had set up the online ordering portal, the integration to the accounting package and a dozen automations that sent order confirmations, stock alerts and debtor reminders. She resigned with a month's notice.

The business started by listing what she administered and found three systems where she was the only administrator, including the domain registration. Eleven automations ran under her account. Two used a connection signed in with her password. Debtor reminders went out from her mailbox. Over three weeks, a second administrator was added to each system, the automations were moved to a service account, reminders were sent from an accounts mailbox, and she recorded what each automation did and why the ordering portal's discount rules were structured as they were. Her account was disabled on her last day without any process stopping.

The business then did something more important. It made this record a standing requirement for every critical system, reviewed twice a year, so the next resignation would not need a rescue. Assessing where such dependencies exist is covered in [how to know whether your business depends too much on one person](/insights/how-to-know-whether-your-business-depends-too-much-on-one-person/), and the wider argument in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).
