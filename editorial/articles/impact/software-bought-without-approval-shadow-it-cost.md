---
hub: impact
record_id: CPS-056
slug: software-bought-without-approval-shadow-it-cost
title: Software bought without approval: The financial and security cost of shadow IT
description: When staff buy applications on company cards without central approval, you pay twice: in duplicated spend and in data held where nobody protects it.
lead: When staff buy applications on company cards without central approval, the business pays twice: in duplicated spend and in data held where nobody is protecting it.
category: Digital Infrastructure
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Employees buy software applications without central approval or oversight
primary_cost_mechanism: Technology waste from duplicated subscriptions plus risk exposure from company data held in unmanaged applications
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - Discover and manage Shadow IT - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it
  - CIS Control 2: Inventory and Control of Software Assets | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
  - What Is Shadow IT? - IBM | https://www.ibm.com/think/topics/shadow-it
related:
  - Paying for tools you already own: The cost of underused software platforms | /impact/expensive-tools-for-tasks-existing-platform-handles-cost/
  - Subscriptions that outlive the employee: The cost of orphaned software | /impact/orphaned-software-subscriptions-after-employee-leaves-cost/
  - Automatic software renewals: The cost of paying for yesterday's requirements | /impact/automatic-software-renewals-without-value-review-cost/
summary: When staff buy applications on company cards without central approval, the business pays twice: in duplicated spend and in data held where nobody is protecting it.
layout: plain
---
## The tolerated pain: anyone with a card can buy software

In most growing businesses, software no longer arrives through a formal purchase. A marketing coordinator signs up for a design tool on a company credit card. A project manager starts a paid team plan for a task board. A salesperson pays for a document-signing service and claims it back. Each purchase is small, sensible on its own and solves a real problem that day.

Over a year or two, these choices add up to an estate of applications that nobody chose as a whole. The business does not know exactly what it uses, who holds the admin accounts, which customer information sits in each tool or what it is committed to paying.

The UK [National Cyber Security Centre describes this as shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it): unknown assets used for business purposes without corporate oversight. Mellorca has already looked at related symptoms, including [not knowing what subscriptions you pay for](/impact/unknown-software-subscriptions-invisible-recurring-cost/) and [buying a new application for every process problem](/impact/buying-software-for-every-process-problem/). This article looks at the cause: the absence of any approval point between a staff member's need and the company's money and data.

## Why businesses tolerate it

- **Approval feels like bureaucracy.** Owners want people to solve problems quickly and do not want to become a bottleneck.
- **The amounts look trivial.** A few hundred rand a month per tool never reaches the threshold that triggers scrutiny.
- **Free trials become paid plans.** A tool tested by one person quietly becomes something a whole team relies on.
- **Expense claims hide software.** Software spend is spread across credit cards, petty cash and reimbursements, and coded to general expense lines.
- **There is no obvious alternative.** Staff buy their own tools because the approved route is slow, unclear or does not exist.

The NCSC makes the last point explicitly: most shadow IT comes from legitimate work needs, not malice. That matters, because the fix is not to punish people but to give them a faster legitimate route.

## How common it is

[Microsoft's documentation for its cloud app discovery tooling](https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it) states that IT administrators asked to estimate how many cloud apps their employees use typically say 30 or 40, while the average in practice is over 1,000, and that 80% of employees use non-sanctioned apps that nobody has reviewed. Those figures come from large organisations. A small business will have far fewer apps, but the gap between what leaders believe and what is in use tends to follow the same pattern. [IBM](https://www.ibm.com/think/topics/shadow-it), summarising research by its Institute for Business Value, reports that 41% of employees had acquired, modified or created technology without their IT team's knowledge.

## Operational consequence

- **Company data in unmanaged places.** Customer lists, quotes, contracts and staff information are uploaded to tools the business has never assessed.
- **Admin access tied to individuals.** The person who bought the tool owns the account. When they leave, the business may lose access to its own information.
- **No single sign-on or multi-factor authentication.** Each tool has its own login and password policy, often weaker than the main business systems.
- **Duplicated tools.** Different teams pay for different products that do the same job, and their information cannot be combined.
- **Integration gaps.** IBM notes that unsanctioned tools often do not integrate with official systems, which disrupts workflows and creates inconsistent data.

## How the pain becomes money

- **Technology waste.** Overlapping subscriptions, unused seats and monthly plans that would cost less on an annual business agreement.
- **Risk exposure.** The NCSC identifies data compromise, network vulnerability and compliance gaps as the main risks. For a South African business, personal information held in an unassessed service still falls under POPIA's security safeguards, and a breach there is the business's problem.
- **Recovery and migration cost.** When a critical tool is owned by a departed employee, regaining access or moving the data can take days of effort.
- **Labour cost.** Staff move information by hand between tools that do not connect.
- **Weak negotiating position.** Spend spread across many cards cannot be consolidated into better terms.

## A transparent way to size it

You can estimate the direct financial side in an afternoon. The figures below are illustrative assumptions.

| Item | Illustrative value |
| --- | --- |
| Software charges found on cards and expense claims in 12 months | R186,000 |
| Share that duplicates another tool already paid for | 25% |
| Share of seats or plans no longer in active use | 15% |

**Avoidable recurring spend:** R186,000 × (25% + 15%) = about R74,000 a year.

That number is only the visible part. The larger exposure is the information held in those tools. For each unapproved application, ask what would happen if its data were leaked, or if the business lost access to it tomorrow. Mellorca's article on [uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/) explains why that risk is often far larger than the subscription itself.

*Illustrative example.* A Cape Town recruitment agency with 25 staff reviewed a year of card statements and found 31 separate software charges. Three different teams were paying for e-signature tools. Candidate CVs were stored in a file-sharing service opened by a consultant who had since left, and the agency had to ask a former employee for the password. Consolidating to approved tools reduced spend, but the more important result was knowing where candidate information was held.

## When it becomes commercially urgent

- you cannot list every application that holds customer or staff personal information;
- an employee who managed a key tool has left or is about to;
- a customer or insurer asks about your information security controls;
- software costs are rising but nobody can explain the increase;
- you are introducing single sign-on or multi-factor authentication and do not know which apps to include.

## What better looks like

Good control is light and fast, not restrictive. The aim is that every application holding company data is known, owned and set up properly.

- **An inventory.** [The Center for Internet Security](https://www.cisecurity.org/controls/inventory-and-control-of-software-assets) makes software inventory a foundational control: actively manage all software so that only authorised software is in use, and unmanaged software is found and removed or brought under control.
- **A simple request route.** A short form, a named approver and a response within a day or two. The NCSC recommends streamlining approval and anticipating needs with legitimate alternatives, so staff have no reason to go around the process.
- **Basic security criteria.** Company account ownership, single sign-on or MFA, data location and an exit plan.
- **Discovery.** Card statements and expense claims are a good starting point. Where Microsoft 365 or similar platforms are in use, cloud discovery tools can show which services staff actually connect to, and Microsoft's guidance suggests reviewing discovered apps by category, because unsanctioned tools often meet a real need that no approved tool covers.

## Practical steps

1. Pull 12 months of card, expense and supplier payments and extract every software charge.
2. Ask each team lead to list the tools their team uses, paid or free.
3. For each tool, record owner, cost, users and the type of data it holds.
4. Move admin ownership of business-critical tools to company accounts.
5. Choose one approved tool per job and plan migrations from duplicates.
6. Publish a one-page request route and review new requests quickly.
7. Repeat the discovery every quarter.

Mellorca's guide on [knowing when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/) helps with consolidation decisions.

## Bottom line

Unapproved software purchases are a small, steady leak in spending and a much larger, less visible exposure of company information. The commercial value at stake is the duplicated subscriptions, the hours lost moving data between unconnected tools and the cost of a breach or lost access in a service nobody was managing. A light approval route and a maintained inventory cost far less than any of these.
