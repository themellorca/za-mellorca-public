---
hub: insights
record_id: INS-038
slug: what-happens-when-every-department-chooses-its-own-tools
title: What Happens When Every Department Chooses Its Own Tools
description: Department-led software choices usually work well inside each team. The problems appear between departments: customers in several versions, reports that disagree, access nobody can account for and renewals nobody sees. How to keep local choice with a few shared rules.
lead: Department-led software choices usually work well inside each team. The problems appear between departments: customers in several versions, reports that disagree, access nobody can account for and renewals nobody sees. How to keep local choice with a few shared rules.
category: Digital Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Operations
sources:
  - Announcing Zylo's 2026 SaaS Management Index | https://zylo.com/news/2026-saas-management-index
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why shared inboxes become operational bottlenecks | /insights/why-shared-inboxes-become-operational-bottlenecks/
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
  - Why Software Consolidation Is an Operations Project, Not Just an IT Project | /insights/why-software-consolidation-is-an-operations-project-not-just-an-it-project/
summary: Department-led software choices usually work well inside each team. The problems appear between departments: customers in several versions, reports that disagree, access nobody can account for and renewals nobody sees. How to keep local choice with a few shared rules.
layout: plain
---
Letting each department choose its own software sounds sensible. The people closest to the work know what they need, they can move quickly, and nobody has to wait for a central committee to approve a tool for scheduling site visits or tracking marketing campaigns. For a while, it works.

The trouble does not appear inside any single department. Each team usually ends up with a tool it likes. The trouble appears between departments, where the work crosses from one team's system into another's, and in the areas nobody in particular is responsible for: shared customer data, access control, contracts and company-wide reporting.

This article looks at what happens in those gaps, why they are easy to miss, and how to keep the benefits of local choice without paying for them in operational confusion.

## This is now the normal way software arrives

Department-led buying is not an edge case. Zylo's [2026 SaaS Management Index](https://zylo.com/news/2026-saas-management-index), based on a large dataset of software licences in mostly larger organisations, reports that business units control around 81% of software-as-a-service spend, while IT directly manages about 15%. A South African business with 40 or 150 staff will not have the same numbers, but the direction is familiar: software decisions have moved out to the teams, and the company-wide view has not kept up.

## What happens at the seams

### The customer exists in several versions

Sales keeps customers in its CRM. Operations keeps them in a job management tool. Finance keeps them in the accounting system. Support keeps them in a helpdesk. Each department captures the details it needs, in its own format, at its own time. When a customer changes their billing contact or address, the change lands in one system and not the others.

The result is not a dramatic failure. It is a steady stream of small errors: invoices sent to old contacts, delivery details that do not match the order, and staff ringing each other to check which version is right. People quietly become the link between systems, a pattern described in [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/).

### Reports stop agreeing

When each department defines its own records, it also defines its own numbers. Sales counts a customer as active when a deal is signed; finance counts it when the first invoice is paid; operations counts it when work starts. Management meetings turn into debates about whose figure is correct rather than what to do about it. [Why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) covers how this happens and how to fix the definitions.

### Nobody can say who has access to what

Every tool has its own user list. When a new employee joins, each department sets up access separately, if it remembers. When someone moves role or leaves, their access has to be removed from every tool their old department used, and from any shared tools they were invited into along the way.

Microsoft's documentation on [access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) sets out the questions any business should be able to answer: how new joiners get the access they need, how old access is removed when people change teams or leave, and why excessive access creates both security exposure and audit findings. It recommends asking resource owners to review regularly who still has access. When every department runs its own tools, there is often no single owner who can answer those questions for the whole business. The consequences are covered in [former employees retaining system access](/impact/former-employees-retaining-system-access/).

### Personal information spreads without a plan

Under section 19 of the Protection of Personal Information Act, a business must take [appropriate, reasonable technical and organisational measures](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) to protect personal information. That includes identifying foreseeable risks, maintaining safeguards and checking that they work. Doing that is difficult when customer and staff information sits in a dozen tools chosen by different teams, each with its own settings, retention rules and supplier terms. The obligation sits with the business as a whole, not with the department that happened to buy the tool.

### Contracts renew in the dark

Department-led tools are often bought on annual plans with automatic renewal. Each renewal date sits in a different manager's inbox. Price increases, seat changes and notice periods are handled one at a time, usually at the last minute, and finance only sees the total when it arrives. See [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).

## Why the problem stays invisible

Every department can show that its tool works. The sales team closes deals in its CRM; the operations team schedules jobs in its tool. Nobody owns the end-to-end process that runs across both, so nobody is measured on how well the handover works. The costs are spread thinly across many people: a few minutes of retyping here, a reconciliation there, an awkward call to a customer about a wrong invoice. No single cost is large enough to trigger a decision.

The problem usually becomes visible only when something forces a company-wide view: a new financial year, an audit, a security incident, a merger, or a manager trying to answer a simple question such as "how many active customers do we have?"

## A worked example

*Illustrative example:* a Gauteng distribution business with about 90 staff had let each department pick its tools as it grew. Sales used one CRM, the warehouse used a stock app, the service team used a helpdesk, and finance ran an accounting package. Each choice was reasonable.

A review of a single month found that customer details were captured four times, by four teams, with no agreed master. Twelve per cent of service tickets could not be matched to a customer account without a phone call. Two former employees still had working logins to the helpdesk. The business was paying for two survey tools and two file-sharing services, one in each of two departments. None of these issues was visible from inside any single team.

The fix did not involve taking tools away from departments. The business agreed which system owned customer records, connected the helpdesk and CRM to it, added every tool to one list with a named owner and renewal date, and made leaver checklists cover every application rather than just email.

## Keep local choice, add a few shared rules

The answer is rarely to centralise every software decision. Departments do know their work best, and a slow central process simply pushes buying underground. A better model is local choice within a small set of shared rules:

| Departments decide | The business decides once, for everyone |
| --- | --- |
| Which tool best supports their day-to-day work | Which system owns customer, supplier, product and staff records |
| How the tool is configured for their process | How people sign in, and how access is granted and removed |
| Who uses it and how they are trained | Minimum checks before personal information goes into a new tool |
| When it needs improving | Where every tool, owner, cost and renewal date is recorded |

The shared rules are about the seams: data ownership, identity, contracts and the application list. The question of which system should own which record is the most important of these, and it is set out step by step in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Questions to ask this month

1. For your three most important types of record, such as customers, jobs and invoices, which system is the master copy?
2. When someone leaves, who removes their access from every tool, and how do they know which tools to check?
3. Can you list every application that holds personal information, with an owner for each?
4. Which processes cross from one department's tool into another's, and who owns each handover?
5. Where are renewal dates recorded, and who sees them before they arrive?

If several of these have no clear answer, the business has the benefits of departmental choice without the shared structure that makes it safe. Adding that structure is usually a modest piece of work, and it is far cheaper than living with the seams.
