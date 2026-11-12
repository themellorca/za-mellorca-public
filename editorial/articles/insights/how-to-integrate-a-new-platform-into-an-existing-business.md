---
hub: insights
record_id: INS-065
slug: how-to-integrate-a-new-platform-into-an-existing-business
title: How to Integrate a New Platform Into an Existing Business
description: A new platform has to coexist with the systems, spreadsheets and habits that already run the business. A practical sequence for integrating it without disrupting operations or creating a second place to do the same work.
lead: A new platform has to coexist with the systems, spreadsheets and habits that already run the business. A practical sequence for integrating it without disrupting operations or creating a second place to do the same work.
category: Systems Integration
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Systems Integration
sources:
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
  - Extend Dynamics 365 apps without compromising performance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/extend-your-solution
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why Your Business Feels Harder to Run Than It Should | /insights/why-your-business-feels-harder-to-run-than-it-should/
  - How to decide which software to remove | /insights/how-to-decide-which-software-to-remove/
  - What Good Digital Operations Look Like Before You Buy Anything New | /insights/what-good-digital-operations-look-like-before-you-buy-anything-new/
summary: A new platform has to coexist with the systems, spreadsheets and habits that already run the business. A practical sequence for integrating it without disrupting operations or creating a second place to do the same work.
layout: plain
---
Buying a new platform is the easy part. The harder part begins on the first Monday after the contract is signed, when the new system has to coexist with the accounting package, the spreadsheets, the inbox rules and the habits that already hold the business together. Integration is not a technical task that follows the purchase. It is the work of fitting a new component into an operation that is already running, without stopping it.

Most failed platform projects do not fail because the software is bad. They fail because the platform was treated as a separate island, configured in isolation, and then connected to everything else in a rush. This article sets out a sequence that keeps the business working while the new platform earns its place.

> A platform is integrated when work flows through it without anyone having to remember a special step. Until then it is merely installed.
>

## Start with what the platform is replacing, not what it adds

Every new platform displaces something: a spreadsheet, a shared inbox, a legacy tool, or a person's memory. List what will be switched off, what will be kept, and what will be changed. If nothing is scheduled to stop, the likely outcome is a second place to do the same work, which is the pattern described in [how duplicate software creates duplicate work](/insights/how-duplicate-software-creates-duplicate-work/).

Microsoft's implementation guidance for its business applications recommends a fit-to-standard approach: compare what the platform does out of the box with the business's requirements, and only customise where the gap is genuine. The principle is useful for any platform. Adapting a few internal habits is usually cheaper and safer than bending the software to match every existing quirk, a trade-off explored in [when customisation turns a useful platform into a liability](/insights/when-customisation-turns-a-useful-platform-into-a-liability/).

## Map the existing flow before you connect anything

Before any integration is built, draw how information currently moves through the area the platform will touch: where it is captured, who handles it, which system holds the official version, and where it waits. Lean practitioners call this value stream mapping, and the discipline applies equally to a quote-to-cash flow or an onboarding process. A simple method is given in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/).

The map usually exposes two surprises. The first is a step nobody mentioned in the requirements, such as the Friday export that finance depends on. The second is a handoff that only works because one person fixes it by hand. Both need a home in the new design, or they will quietly break.

## Decide which system owns which data

The most common integration fault is two systems that both believe they own the customer, the product list or the price. Changes made in one overwrite the other, or worse, neither. Before connecting platforms, settle ownership field by field. A customer's billing address might belong to the accounting system, while their preferred contact person belongs to the CRM. The reasoning is covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/), and the cost of skipping it in [what happens when two systems both think they own the same data](/insights/what-happens-when-two-systems-both-think-they-own-the-same-data/).

Where personal information is involved, this decision also has a legal side. Section 19 of the Protection of Personal Information Act requires a responsible party to take appropriate measures to secure the integrity and confidentiality of personal information. A new connection that copies customer records into another system creates another place that must be secured, and another place where inaccurate data can persist.

## Integrate in thin slices, not in one release

A sensible sequence moves value early and risk late.

1. **Pick one narrow flow.** For example, new customers created in the platform appear in the accounting system. Do only that.
2. **Run it beside the old way.** For a defined period, keep the old process alive and compare outputs daily. Differences are bugs in the design, not problems with people.
3. **Move one team across.** Choose a team with a patient manager and moderate volume, not the busiest department in month-end week.
4. **Switch off the old step.** Only once the comparison is clean, and only explicitly, with a date and a named person.
5. **Repeat with the next flow.**

This is slower on paper than a single go-live weekend and faster in practice, because each slice produces learning before the next one is built. The wider lessons on avoiding disruption are in [how to implement a new business system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/).

## Document the connections while they are fresh

Every integration is a dependency. Record what it moves, in which direction, how often, what triggers it, what happens when it fails, and who is responsible. Our guide to what to document before connecting two business platforms gives a practical checklist. A one-page note per integration is enough, provided it is kept where the next person will look.

It is also worth naming an owner for each connection on day one. Integrations that nobody owns are the ones that stop silently and are discovered weeks later through a customer complaint or a reconciliation that will not balance, as discussed in why every important integration needs an owner.

## Plan for failure paths and monitoring

Connections fail: a password expires, a field is renamed in a supplier update, an API limit is reached. Decide beforehand what should happen when a record fails to transfer. Does it queue and retry, alert someone, or stop the flow? A silent failure is worse than a loud one. The minimum is a daily check that confirms the expected number of records moved and an alert when it did not. See why every automation needs a failure path for the design questions.

South African conditions add their own risks. Load-shedding can interrupt overnight synchronisation jobs on locally hosted systems, and a connection that normally completes at 02:00 may simply not run. Test what happens on the morning after a missed run, not only on the morning when everything worked.

## Prepare people as deliberately as systems

A technically perfect integration still fails if staff keep working around it. Tell people what is changing in their week, not in the architecture. Show them the specific screen they will use, the old step they can stop, and who to call when something looks wrong. Keep a short list of known issues visible during the first month, and review it with the team weekly. Quick acknowledgement of small problems prevents the spread of private spreadsheets that rebuild the old process alongside the new one.

## An illustrative example

The following is a hypothetical case. A Durban distribution company with 60 staff adopts a new order management platform. Orders now originate there, but invoicing remains in the existing accounting package. In the first plan, the team intended to switch every department over on one weekend. After mapping the current flow, they discovered that credit approvals were being given verbally by the finance manager and recorded only in a spreadsheet. The platform had no step for it.

Instead of a single go-live, they integrated one slice first: customer creation and credit limits flowed from accounting into the platform, so credit holds appeared at order entry. They ran the old and new processes in parallel for three weeks, found two mismatched customer codes, fixed them, and then moved invoicing across. The same platform and the same budget produced a calmer rollout because the sequence respected how the business actually worked.

## Checks before you call it integrated

- Can you name what the platform replaced, and has that been switched off?
- Is it clear which system is the authority for each shared data item?
- Does every connection have a documented owner and a failure path?
- Has someone confirmed the data matches between systems over a full cycle, such as a month-end?
- Can a new staff member do the work from the written process, without relying on a colleague's memory?

When the answers are yes, the platform has stopped being a project and become part of the operation. That is the point of integration: not that systems are connected, but that the business no longer depends on anyone remembering how they fit together.
