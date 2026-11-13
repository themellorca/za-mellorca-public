---
hub: impact
record_id: CPS-057
slug: orphaned-software-subscriptions-after-employee-leaves-cost
title: Subscriptions that outlive the employee: The cost of orphaned software
description: Software bought and owned by an employee keeps billing and renewing after they leave. Here is how orphaned subscriptions build up and how to stop them.
lead: Software bought and owned by an employee keeps billing and renewing after they leave. Here is how orphaned subscriptions build up and how to stop them.
category: Digital Infrastructure
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Software subscriptions requested and owned by an employee keep running and renewing after that employee leaves
primary_cost_mechanism: Technology waste from orphaned licences and renewals, with data continuity risk and recovery labour
sources:
  - Step 6 - Remove and delete a Microsoft 365 for business license from a former employee - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee-step-6
  - Buy or remove licenses for a Microsoft business subscription | https://learn.microsoft.com/en-us/microsoft-365/commerce/licenses/buy-licenses
  - Delete or remove a user from your organization - User management - Google Workspace Help | https://knowledge.workspace.google.com/admin/users/delete-or-remove-a-user-from-your-organization
related:
  - Automatic software renewals: The cost of paying for yesterday's requirements | /impact/automatic-software-renewals-without-value-review-cost/
  - Software bought without approval: The financial and security cost of shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
  - Paying for tools you already own: The cost of underused software platforms | /impact/expensive-tools-for-tasks-existing-platform-handles-cost/
summary: Software bought and owned by an employee keeps billing and renewing after they leave. Here is how orphaned subscriptions build up and how to stop them.
layout: plain
---
## The tolerated pain: the tool outlives the person who wanted it

A marketing coordinator signs up for a design tool. A project manager starts a paid plan on a task board for one large client. A sales manager buys a contact-data service on the company card. Each request made sense at the time. Each was set up by that person, often with their own work email as the account owner and their inbox receiving the invoices.

Then the person leaves. HR closes the employment file and IT blocks the email account. But the subscriptions keep running. The card is still charged every month, the annual renewal still goes through, and the invoices now land in a mailbox nobody reads. The tool may not have been opened since the person's last day. Nobody cancels it, because nobody else knows it exists, or nobody else has the login to cancel it.

Mellorca has covered the security side of departures in [when former employees still have system access](/impact/former-employees-retaining-system-access/), and the wider waste of unused seats in [unused software licences](/impact/unused-software-licences-financial-waste/). This article looks at a narrower, very common leak: subscriptions that belonged to one person's role and were never handed over when that person left.

## Why businesses tolerate it

- **Offboarding checklists cover access, not spending.** They ask IT to disable accounts and recover laptops. They rarely ask "what did this person buy, and who pays for it now?"
- **The subscription is tied to the person, not the business.** The vendor account is registered to their email address, so control leaves when they do.
- **Charges look routine.** A familiar vendor name on the card statement does not raise questions.
- **Cancelling feels risky.** Nobody is sure whether the tool still holds something important, so it is left running "just in case".

## Operational symptoms

- Card statements show software charges no current manager can explain.
- Vendor emails about renewals, price changes or failed payments go to a disabled or forwarded mailbox.
- Staff discover that a former colleague's account holds client files, templates or contact lists that nobody else can open.
- A tool is cancelled, then urgently re-bought because a process depended on it.
- Different teams pay for the same kind of tool because nobody knew a previous one was already running. That pattern is examined in [paying for several applications that do the same job](/impact/pain-paying-for-multiple-applications-duplicate-software-fragmented-work/).

## Why switching off the user does not stop the bill

Many businesses assume that removing a leaver's account ends the cost. Vendor documentation shows why it often does not.

Microsoft's guidance on removing a [former employee](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee-step-6) explains that after you unassign a licence you can either give it to someone else or delete it from the subscription. To stop paying, a separate step is needed: reducing the number of licences in the subscription under billing. Microsoft's licensing documentation adds that for some billing account types licences can only be removed within seven days of buying or renewing; outside that window the reduction takes effect at renewal. It also notes that the person who signed up for a subscription automatically becomes a billing account owner, which is exactly why a subscription started by an employee can leave with them.

Google Workspace's help for administrators makes a similar point. On flexible plans, deleting a user's account prorates the monthly charge. On annual or fixed-term plans, deleting an account does not reduce the number of licences and does not affect billing. Google also notes that to keep a departing user's Gmail or Drive data, it must be transferred to another user, because deleted data cannot be recovered.

If that is how the major platforms work, the many smaller tools signed up for by individuals are even less likely to stop billing by themselves.

## How the pain becomes money

- **Technology waste:** recurring fees for tools that nobody uses.
- **Renewal lock-in:** annual plans that renew in full before anyone notices, committing another year of spend.
- **Data and continuity risk:** client files, designs or contact lists trapped in an account nobody controls.
- **Recovery cost:** staff time spent proving ownership to a vendor, resetting accounts or rebuilding lost work.
- **Exposure:** an active account, with company data, sitting outside the business's control.

## An illustrative cost model

The figures below are *illustrative assumptions* for an unnamed South African professional-services firm with 45 staff and about eight leavers a year. They are not benchmarks.

| Orphaned subscription | Assumption | Annual cost |
| --- | --- | --- |
| Design tool, 3 seats | R450 per seat per month | R16,200 |
| Project board, team plan | R1,800 per month | R21,600 |
| Contact-data service | Annual plan renewed at R28,000 | R28,000 |
| Survey tool | R650 per month | R7,800 |
| **Total** |  | **R73,600** |

Checking the arithmetic: 3 × R450 × 12 = R16,200; R1,800 × 12 = R21,600; R650 × 12 = R7,800; R16,200 + R21,600 + R28,000 + R7,800 = R73,600.

Each item is small. Together they add up to R73,600 a year for tools nobody uses. And because a few new orphans can be created with every departure, the total tends to grow until someone looks for it. If one of these tools also holds client data the business later needs, the recovery effort can cost more than the subscription itself.

## When it becomes commercially urgent

- Staff turnover is rising, or a restructure is planned.
- Software is bought on company cards or through expense claims.
- A finance review finds charges nobody can explain, a problem we cover in [how many software subscriptions do you pay for?](/impact/unknown-software-subscriptions-invisible-recurring-cost/)
- A client asks where their data is held, and the answer includes tools no current employee manages.

## What better looks like

- **Every subscription has a business owner and a role owner.** The business owner approves the spend; the role owner uses it. When one leaves, the other is still there.
- **Vendor accounts are registered to shared addresses.** Use a role mailbox such as accounts or IT for ownership and invoices, never a personal work address.
- **Payment runs through a controlled method.** Software charges on personal or individual cards are moved to one controlled channel.
- **Offboarding includes a spending step.** The checklist asks what the leaver bought, owned or administered, and transfers or cancels each item before their last day.
- **Renewal dates are recorded.** Annual plans are reviewed before they renew, not after.

The pattern of access left behind after departures is described in [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/). Spending follows the same path and needs the same discipline.

## Practical first steps

1. Pull twelve months of card and bank statements and list every software charge.
2. Match each charge to a current employee. Flag every charge linked to someone who has left.
3. For each flagged tool, decide: transfer to a new owner, export the data and cancel, or keep with a documented reason.
4. Change account ownership and billing contacts to shared role addresses.
5. Add "subscriptions and vendor accounts" to the offboarding checklist, with finance sign-off.
6. Repeat the statement check every quarter until no unexplained charges remain.

## Bottom line

When software is bought by individuals and owned in their names, it does not leave when they do. It keeps billing, keeps renewing and keeps holding company data out of anyone's reach. The fix costs little: shared ownership, one payment channel and a spending step in every offboarding. Without it, each departure can add a few small charges that keep running until someone goes looking for them.
