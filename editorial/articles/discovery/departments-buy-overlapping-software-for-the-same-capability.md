---
hub: discovery
record_id: DISC-327
slug: departments-buy-overlapping-software-for-the-same-capability
title: Why departments buy overlapping software for the same capability
description: Marketing, operations and HR each buy their own forms, project or e-signature tool. The fix is not a purchasing ban but a capability map that is checked before anything new is bought.
lead: Marketing, operations and HR each buy their own forms, project or e-signature tool. The fix is not a purchasing ban but a capability map that is checked before anything new is bought.
category: SaaS & Application Portfolio Management
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT Manager / Head of Procurement
budget_owner: CFO / COO
sources:
  - FinOps for SaaS - FinOps Framework Technology Category | https://www.finops.org/framework/technology-categories/saas/
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
  - Select your cloud migration strategies - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy
  - Share, reuse and collaborate | https://www.gov.uk/guidance/share-and-reuse-technology
related:
  - Data-export limits are discovered only when leaving a vendor | /discovery/data-export-limits-discovered-only-when-leaving-a-vendor/
  - Why Free Trials Become Production Dependencies | /discovery/why-free-trials-become-production-dependencies/
  - Why Software Portfolio Decisions Need Business Value, Not Only Licence Counts | /discovery/why-software-portfolio-decisions-need-business-value-not-only-licence-counts/
summary: Marketing, operations and HR each buy their own forms, project or e-signature tool. The fix is not a purchasing ban but a capability map that is checked before anything new is bought.
layout: plain
---
Finance runs a software spend review and finds three e-signature subscriptions, two project management tools, four survey products and two separate ways of building online forms. Each was bought by a different department, each for a sensible reason, and each one works. Together they mean the business pays several times for the same capability, holds customer and employee data in more places than it knows, and has no standard way of doing a common task.

## The problem in plain language

Business software is now bought by subscription, often on a card, often by the team that needs it. That speed is useful. The cost is that nobody checks whether the business already owns something that does the same job. Over time the business ends up with clusters of tools that overlap: different products serving the same business capability in different departments.

The cost of overlapping licences is part of it, and we look at that in [paying for multiple applications that do the same job](/impact/pain-paying-for-multiple-applications-duplicate-software-fragmented-work/). This article looks at the buying pattern behind it: why overlap keeps happening even after a clean-up, and what stops it recurring.

## What the buyer is actually trying to solve

Searches such as "departments buying the same software", "overlapping SaaS tools" or "software rationalisation after acquisition" come from a financial director, IT manager or operations head who has spotted the duplication. They want to consolidate where it makes sense. More importantly, they want a light process that lets departments get the tools they need without creating the next cluster of duplicates. The issue tends to surface during a merger or acquisition, when two sets of tools must be combined, or during a cost review.

## Evidence and system mechanism

The FinOps Foundation's [guidance on SaaS](https://www.finops.org/framework/technology-categories/saas/) as a technology category describes the mechanism. Decentralised procurement and corporate card spending create fragmented visibility. Software arrives through several channels, including direct from the publisher, resellers, managed service providers and marketplaces. The guidance names redundant applications as a measurable problem, tracks overlapping coverage as a metric, and points to consolidating redundant vendors to increase buying power and reduce complexity. It also stresses that governance needs procurement, security, finance, legal and business owners working together. No single team can solve it alone.

You cannot remove overlap you cannot see. Microsoft's documentation on [cloud app discovery in Defender for Cloud Apps](https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery) describes analysing firewall and proxy traffic logs against a catalogue of more than 31,000 cloud apps to show which services are actually in use, including ones IT never approved. Expense reports, card statements and single sign-on logs give similar evidence by other routes.

Once overlap is visible, there are established ways to decide what happens to each tool. Microsoft's Cloud Adoption Framework guidance on [choosing a strategy for each workload](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) includes retiring redundant or low-value workloads, after confirming they have no critical dependencies, and replacing systems with a SaaS product where that simplifies operations. The same options apply to overlapping business tools: keep one, retire the rest, or replace several with a platform the business already owns.

Prevention depends on checking before buying. The UK government's guidance on how to [share and reuse technology](https://www.gov.uk/guidance/share-and-reuse-technology) asks teams to plan for reuse from the start of a project, and to look at what others already use, to avoid duplication and unnecessary spending. It also points to combining buying requirements to get better terms. The setting is public sector, but the principle carries over to any business with several departments.

### How overlap builds up

*Illustrative example, not a client case.* A South African logistics group acquires a smaller courier business. The group uses one project tool and one e-signature product. The acquired company uses different ones, and its sales team has its own CRM. Six months after the deal, both sets are still running. Staff working across the two businesses need logins for both, and customer contracts are signed in two places. Nobody owns the decision because the integration plan covered finance and payroll, not everyday tools.

## Problem owner and why now

The problem usually has no single owner. IT may know about some tools, finance sees the spend and departments own the use. The budget owner is often the CFO or COO. Common triggers are mergers and acquisitions, a cost-reduction drive, a security review that finds sensitive data in unapproved tools, a licence renewal season, or a new platform rollout that already includes capabilities other teams are paying for separately.

## Economic consequence

The direct cost is paying for several subscriptions where one would do, and losing volume discounts by spreading spend across vendors. Indirect costs are often larger. Data is split across tools, so reporting is harder. More logins mean more onboarding and offboarding work, and more security risk when leavers keep access. Staff who move between teams must learn new tools, and integrations multiply. Measure it from your own records: subscriptions per capability, total spend per capability, number of active users in each, and the integrations each one needs.

## Root cause

- **Buying is organised by department, not by capability.** Each team solves its own need without seeing the rest of the business.
- **No capability map.** There is no list of business capabilities, such as e-signature, forms, project tracking and surveys, with the standard tool for each.
- **No check before purchase.** Card and expense purchases skip any "do we already have this?" step.
- **Standard tools are hard to get.** When the approved tool needs a long request, teams buy their own.
- **Mergers bring a second set of tools,** and integration plans rarely include them.

## Practical intervention

1. **Build an application inventory** from finance, card, single sign-on and network evidence, as described in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/).
2. **Group tools by business capability,** not by vendor or department, so overlaps become visible.
3. **Choose a standard for each capability,** based on fit, data, security, integration and cost. Decide to keep, retire or replace each overlapping tool, with an owner and a date.
4. **Add a short pre-purchase check.** Before any new software is bought, including on a card, the buyer confirms whether the capability already exists. A one-page form or chat request is enough.
5. **Make the standard tool easy to get,** with fast licence allocation and basic training, so the approved route is also the quick one.
6. **Plan tool consolidation into every acquisition,** alongside finance and payroll.
7. **Review renewals against the capability map,** linking each renewal to a confirmed owner, as discussed in [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).

## Trade-offs

Standardising can force a team off a tool that genuinely suits it better, so allow documented exceptions where the business case is clear. Moving data and retraining people costs money, and contract terms may delay retirement until renewal. A pre-purchase check that is slow will be bypassed, so it must take days, not weeks. Some overlap is acceptable where tools serve different needs that only look similar.

## Diagnostic questions

- How many tools do you pay for that do e-signature, forms, surveys or project tracking?
- Is there a written standard tool for each common business capability?
- What happens before a department buys software on a card?
- Did your last acquisition include a plan for overlapping tools?
- Who decides which of two overlapping tools is retired?

## What good looks like

The business has a short capability map listing the standard tool and owner for each common need. New purchases are checked against it quickly. Overlaps found after an acquisition or review have a decision, an owner and a retirement date. Departments still get tools quickly, and spend, data and logins grow with the business rather than with the number of teams.

## Where Mellorca fits

A Mellorca [digital systems audit](/services/digital-systems-audit/) builds the inventory and capability view and identifies overlaps. Our [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work sets the standard for each capability and plans consolidation, including after acquisitions.

*Method note:* discovery tools and metrics named here are examples of available approaches; the right evidence sources depend on how your business buys and signs in to software.
