---
hub: impact
record_id: CPS-055
slug: unknown-software-subscriptions-invisible-recurring-cost
title: How many software subscriptions do you pay for? The cost of not knowing
description: Scattered, auto-renewing software subscriptions create a recurring cost line no one owns. How to find the real figure and bring it under control.
lead: Scattered, auto-renewing software subscriptions create a recurring cost line no one owns. How to find the real figure and bring it under control.
category: Software Spend
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Software Spend
commercial_domain: Software Spend
primary_pain: The business does not know how many software subscriptions it is paying for
primary_cost_mechanism: Technology waste and price creep from unowned, auto-renewing recurring expenditure
sources:
  - CIS Control 2: Inventory and Control of Software Assets | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
  - Manage recurring billing in the Microsoft 365 admin center | https://learn.microsoft.com/en-us/microsoft-365/commerce/subscriptions/renew-your-subscription
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
related:
  - AI tool sprawl: Paying for overlapping AI subscriptions without measuring value | /impact/ai-subscription-sprawl-unmeasured-value-cost/
  - When nobody owns the business software you pay for | /impact/pain-unclear-ownership-technology-spending/
  - Paying for cloud resources nobody uses | /impact/unused-cloud-resources-financial-waste/
  - Expense-card software purchases bypass central visibility | /discovery/why-software-bought-on-company-cards-never-reaches-the-application-register/
summary: Scattered, auto-renewing software subscriptions create a recurring cost line no one owns. How to find the real figure and bring it under control.
layout: plain
---
## The tolerated pain: nobody can give the number

Ask the owner of a growing business how many software subscriptions the company pays for, and the honest answer is often a guess. There is the accounting package, Microsoft 365 or Google Workspace, perhaps a CRM. Then the list gets vague. Marketing has a design tool and an email platform. Operations signed up for a scheduling app. Someone in sales pays for a lead database on a company card. A project manager expensed a diagramming tool two years ago and it still renews every month.

The individual charges are small enough that nobody questions them. Collectively, they form a recurring cost line that no one owns, no one has listed in full and no one has reviewed as a whole. The pain is not any single subscription. It is that the business cannot see its own recurring software commitments.

This is a different problem from [paying for licences nobody uses](/impact/unused-software-licences-financial-waste/). That article assumes you know what you have and asks whether it is used. This one is about the step before: you cannot manage what you have never listed.

## Why businesses tolerate it

- **Buying software has become frictionless.** A card number and an email address are enough. No purchase order, no supplier onboarding, no contract review.
- **Charges are scattered.** Subscriptions land on several company cards, on personal cards that are reimbursed through expense claims, on supplier invoices bundled with other services and on direct debits.
- **Foreign currency hides the pattern.** Many subscriptions are billed in US dollars or euros, so the rand amount changes every month and does not look like a fixed recurring charge.
- **Renewal is the default.** Software subscriptions typically renew automatically. Microsoft's own documentation for its business subscriptions, for example, notes that when paying by card or billing profile, recurring billing is on by default and the subscription continues to be billed at the end of each term unless someone turns it off.
- **No owner.** Finance sees the transactions but not the purpose; departments see the purpose but not the total.

## Operational consequence

The lack of a list causes problems well beyond the cost line:

- **Duplicate tools.** Two teams pay for different products that do the same job, and data splits between them.
- **Orphaned accounts.** When the person who signed up leaves, the subscription keeps billing and nobody has the login to cancel it or retrieve the data.
- **Unknown data locations.** Customer lists, files and personal information sit in services that IT and management do not know exist.
- **Weak negotiating position.** The business cannot consolidate spend with a supplier it does not know it has.
- **Slow month-end.** Finance spends time identifying unfamiliar card transactions and chasing staff for receipts and explanations.

The security consequence is significant. The Center for Internet Security places [inventory and control of software assets](https://www.cisecurity.org/controls/inventory-and-control-of-software-assets) among its foundational controls. Its rationale is straightforward: an organisation that does not know what software is in use cannot identify unauthorised or outdated applications, and so cannot manage the risk they create. A subscription nobody knows about is also an account nobody secures, reviews or removes when staff leave.

## How the pain becomes money

- **Technology waste:** subscriptions for tools that are no longer used, used by one person or duplicated by another tool.
- **Price creep:** annual increases, tier changes and exchange-rate movement go unnoticed because no one compares this year to last year.
- **Labour cost:** finance and management time spent investigating and reconciling unexplained transactions.
- **Lost leverage:** no consolidated view means no volume discount, no annual-versus-monthly comparison and no structured renewal conversation.
- **Risk exposure:** data held in unmanaged services, and accounts left active after people leave.

## A transparent way to find the real figure

There is no need for a market benchmark. The business's own bank and card data contains the answer.

1. Export twelve months of transactions from every company card, the main bank account and the expense-claim system.
2. Filter for recurring charges and for known software merchants, including foreign-currency transactions.
3. Group by supplier and convert to an annual rand figure.
4. For each line, record the business owner, the number of users, what it is for and whether a similar tool exists elsewhere.

> **Annual recurring software exposure**
> sum of all recurring software charges over twelve months
> **Immediate reduction opportunity**
> subscriptions with no identifiable owner or purpose + duplicated tools + seats beyond active users

*Illustrative example.* A 50-person marketing and events agency in Johannesburg believes it pays for about a dozen tools. Finance exports a year of card, bank and expense data and finds considerably more recurring software merchants than anyone expected, spread across four company cards and several staff expense claims. Some are clearly needed. Some belong to people who have left. Two pairs of tools do the same job. Several dollar-billed tools have increased in rand terms over the year without anyone deciding to spend more. The agency's own export, not an industry average, is the basis for the saving it then pursues.

## Network evidence where the bank data runs out

Bank data shows what is paid for, but not free tools or tools paid by individuals. Larger environments can also look at network traffic. Microsoft's documentation for Defender for Cloud Apps describes cloud discovery, which analyses firewall and proxy logs against a catalogue of more than 31,000 cloud apps to give visibility of shadow IT and the risk it poses. A smaller business can achieve a rougher version of the same thing by reviewing which third-party apps staff have connected to their Microsoft 365 or Google accounts. Mellorca's discovery note on [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/) covers the governance side in more depth.

## When it becomes commercially urgent

- software spend has grown faster than headcount and nobody can explain why;
- a staff member leaves and the business discovers it cannot access or cancel tools they set up;
- a POPIA question arises about where customer data is held;
- the rand weakens and dollar-billed subscriptions jump together;
- management is preparing a budget and cannot state the current technology run rate.

## What better looks like

A simple, owned register of every recurring software commitment, reviewed on a schedule. For most small and mid-sized businesses a well-kept spreadsheet is enough to start. Each line should record:

| Field | Why it matters |
| --- | --- |
| Supplier and product | Identifies what is being paid for |
| Business owner | Someone accountable for value and renewal |
| Billing method and currency | Shows where the charge lands and its exchange-rate exposure |
| Annual cost in rand | Makes small monthly charges comparable |
| Users and active users | Reveals unused seats |
| Renewal date and notice period | Creates a decision point before auto-renewal |
| Data held | Supports POPIA and offboarding |

## Practical remediation steps

1. **Build the register** from twelve months of card, bank and expense data.
2. **Assign an owner** to every line. Lines with no owner after two weeks are candidates for cancellation.
3. **Consolidate payment** onto as few company cards or accounts as practical, and stop reimbursing personal subscriptions without approval.
4. **Set a purchase rule:** new recurring software needs a named owner and an entry in the register before it is bought.
5. **Diary renewal dates** with enough notice to decide, rather than letting renewal happen by default.
6. **Add subscriptions to offboarding** so departing staff hand over or cancel what they set up.
7. **Review quarterly** for duplication, unused seats and price changes.

When the register reveals a wider pattern of overlapping tools and unclear ownership, Mellorca's [digital systems audit](/services/digital-systems-audit/) maps applications to the processes and data they support, so decisions about what to keep are based on how the business actually works. The related question of [when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/) is a useful next read.

## Bottom line

Invisible recurring expenditure is still expenditure. Small subscriptions, scattered across cards and currencies and renewing by default, add up to a cost line that grows without a decision. Listing every commitment, giving each an owner and creating a renewal checkpoint turns that drift back into a managed budget, and closes security gaps at the same time.
