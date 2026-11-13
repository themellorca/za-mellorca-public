---
hub: patterns
record_id: PAT-030
slug: when-adding-software-creates-more-work-instead-of-less
title: When adding software creates more work instead of less
description: A new tool can solve its problem and still add data entry, logins and parallel routines. Count the net work and retire what it replaces.
lead: A new tool can solve its problem and still add data entry, logins, exports and parallel routines. Counting net work, retiring what it replaces and integrating data make software reduce effort.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: After a new software tool is introduced, staff carry extra data entry, logins, exports and the old method alongside it.
primary_identification: Net-work problem in technology adoption: tools are added without accounting for integration, administration and duplication, or retiring what they replace.
commercial_value_dimensions: return on technology spend, productivity, data quality, security, staff experience
sources:
  - The Technology Code of Practice | https://www.gov.uk/guidance/the-technology-code-of-practice
  - Choosing technology: an introduction | https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction
  - What is single sign-on in Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
related:
  - When your CRM knows something your finance system does not | /patterns/when-your-crm-knows-something-your-finance-system-does-not/
  - When APIs exist but the business still works manually | /patterns/when-apis-exist-but-the-business-still-works-manually/
  - When one change has to be made in every system you own | /patterns/when-one-change-has-to-be-made-in-every-system-you-own/
  - What a smaller, better-connected software stack looks like | /insights/what-a-smaller-better-connected-software-stack-looks-like/
summary: A new tool can solve its problem and still add data entry, logins, exports and parallel routines. Counting net work, retiring what it replaces and integrating data make software reduce effort.
layout: plain
---
## Observable condition

The business bought a scheduling app to stop double-bookings. It works: double-bookings are rare now. But the receptionist still keeps the paper diary "just in case", customer details are typed into the app and again into the invoicing system, technicians have another login to remember, and the office manager spends Friday afternoons exporting the week's bookings to a spreadsheet so that finance can see them. A few months later a separate tool arrives for quotes, then another for customer feedback. Each solved its problem. Each also added steps that did not exist before.

Ask the team whether the new software has made work easier and the answer is mixed. Some things are better. But the working day now involves more screens, more places to check and more small tasks keeping the tools in step with each other.

## Realisation

Software is bought for what it does. What it requires is rarely examined with the same care. Every new tool brings its own data that must be entered, its own records that must agree with other systems, its own users to manage, its own notifications to watch and its own place where information might be found. If the old way of doing the job is not switched off, the new tool runs alongside it, and staff carry both.

The realisation is that a tool's value depends on net work: the steps it removes minus the steps it adds. When the added steps are not counted, a business can buy software that genuinely solves a problem and still end up with more work overall. Repeated across several purchases, the effect is a business that has invested steadily in technology and feels harder to run.

Realisation prompt: for the last piece of software you introduced, list what it removed from the working day and what it added. Include data entry, logins, exports, checks and the old method if it is still in use.

## Identification

This is a net-work problem in technology adoption: tools are introduced to solve a single task without accounting for the integration, administration and duplication they create, and without retiring what they replace.

Public-sector technology guidance anticipates this. The UK government's [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice) asks that technology should work with existing technologies, processes and infrastructure, and adapt to future demands. Its [service manual guidance on choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction) stresses starting from user needs and minimising total cost of ownership. The same principles apply to a fifteen-person business choosing an app.

This pattern is close to the wider argument in [why more software can make the business harder to run](/insights/why-more-software-can-make-the-business-harder-to-run/), and to [signs your business needs an operating system, not another app](/patterns/signs-your-business-needs-an-operating-system-not-another-app/). Its focus is narrower: what happens to the workload at the moment a new tool is adopted, and how to tell whether it reduced work or moved it.

## Diagnosis

The visible symptom is more effort after a purchase that was meant to reduce it. The common assumption is that staff have not adapted yet. The structural causes are usually these:

- **No integration.** The tool does not exchange data with existing systems, so people copy information in and out.
- **Parallel running.** The old method is kept as a safety net and never formally retired.
- **A new source of truth.** Customer, job or product information now lives in two places and must be kept in agreement.
- **Access overhead.** Another set of usernames, passwords and permissions for staff and for whoever administers them.
- **Task-level buying.** The tool was chosen to fix one step, without looking at the process either side of it.
- **No owner.** Nobody is responsible for configuring the tool well, so it is used at its defaults and gaps are filled by hand.

## Commercial impact

The commercial value at stake is return on technology spend, productivity, data quality and staff experience.

- **Return on spend.** Subscriptions are paid while part of the expected saving is consumed by new manual steps.
- **Productivity.** Time goes on keeping systems aligned rather than on the work the tools support.
- **Data quality.** Duplicated records drift apart, creating disagreements between systems.
- **Security.** More accounts mean more credentials to manage and more access to remove when people leave.
- **Adoption fatigue.** Staff become sceptical of each new tool, making genuinely useful change harder.

The cost of continuing to buy software for every process problem is set out in [when every process problem becomes another software purchase](/impact/buying-software-for-every-process-problem/). Any figure for a particular business should come from its own subscription and time data.

## Common misidentification

The extra work is often blamed on staff resistance or a learning curve. Some of it is, and it fades. But steps that come from missing integration or parallel running do not fade; they become permanent. Another misreading is to conclude that software was a mistake, when the problem is how it was introduced. A third is to solve the new friction with yet another tool.

## Possibility

In a stronger state, each new tool is assessed for net work before purchase. Data flows between it and existing systems, so information is entered once. The old method is retired on a set date. Staff sign in once and reach the tools they need; Microsoft's guide to [single sign-on in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) describes how users keep fewer credentials and sign in less often, while admins control access from one place. Each tool has an owner who keeps its configuration aligned with the process. Fewer, better-connected tools do more of the work.

## Intervention

1. **Audit recent adoptions.** For each tool introduced in the past two years, list steps removed and steps added.
2. **Retire what was replaced.** Set a date to stop parallel methods and remove the safety-net spreadsheets and diaries.
3. **Integrate or consolidate.** Connect tools that share data, or remove those whose function another system already covers.
4. **Centralise sign-in.** Bring tools under single sign-on where possible.
5. **Assign an owner to each tool.** Someone accountable for configuration, users and fit with the process.
6. **Add a net-work test to purchasing.** Before buying, map the process either side of the task and require an integration and retirement plan. A fuller set of pre-purchase checks appears in [before you buy another tool, ask these questions](/insights/before-you-buy-another-tool-ask-these-questions/).
7. **Review after ninety days.** Repeat the removed-and-added list once the tool has settled in, and act on any steps that have not gone away.

## An illustrative example

The following is illustrative, not a client case. An East London plumbing business audits the five apps it adopted in three years. Two duplicate features of its job management system, one has never been connected to invoicing, and staff still use a paper diary alongside the scheduler. The business switches off the two duplicates, connects scheduling to invoicing and retires the diary. Friday exports stop, and the team has fewer logins and fewer places to look.

## Practical diagnostic questions

- For each recent software purchase, what did it remove and what did it add?
- Are old methods still running alongside new tools?
- How many places hold the same customer or job information?
- How many separate logins does a typical employee use each day?
- Does each tool have a named owner?

## Bottom line

Software reduces work only when the steps it removes outweigh the steps it adds. Counting net work, retiring what new tools replace, integrating data and centralising access turn technology purchases back into what they were meant to be: less effort, not more.
