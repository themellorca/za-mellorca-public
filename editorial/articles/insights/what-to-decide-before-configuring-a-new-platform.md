---
hub: insights
record_id: INS-353
slug: what-to-decide-before-configuring-a-new-platform
title: What to decide before configuring a new platform
description: Configuration records decisions whether or not anyone made them. Ten decisions to settle before setting up a new CRM, ERP or job system.
lead: Configuration records decisions whether or not anyone made them. Ten decisions about the work and the platform's governance to settle before setting up a new CRM, ERP or job management system.
category: Systems & Strategy
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Systems & Strategy
sources:
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
  - Secure your Dynamics 365 data and apps - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/security
  - Introduction to the Success by Design framework - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/success-by-design
related:
  - How to decide whether to replace or reconfigure a system | /insights/how-to-decide-whether-to-replace-or-reconfigure-a-system/
  - How to measure whether software is paying for itself | /insights/how-to-measure-whether-software-is-paying-for-itself/
  - How software renewal dates can force better technology decisions | /insights/how-software-renewal-dates-can-force-better-technology-decisions/
summary: Configuration records decisions whether or not anyone made them. Ten decisions about the work and the platform's governance to settle before setting up a new CRM, ERP or job management system.
layout: plain
---
Modern business platforms are easy to start configuring. A CRM, field service tool or ERP trial can be set up in an afternoon: fields added, stages named, users invited. That speed is useful, and it is also how many implementations go wrong. Choices made casually in the first week become the structure the business lives with for years, and some of them are expensive to undo once data and people depend on them.

This article sets out the decisions worth making before configuration starts. None needs a long project. Most can be settled in a few focused working sessions. What matters is that they are made deliberately, by the business, rather than by whoever happened to be clicking through the settings.

> Configuration records decisions. If the decisions have not been made, configuration makes them anyway, usually without anyone noticing.
>

## Why the order matters

Microsoft's [implementation guidance for Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution) is blunt about this. It describes a common mistake as thinking that the new system defines your processes, and states that it is the other way around: technology is an enabler, and the system should serve and fit the business's operations. It also says business processes must be defined before work on requirements and other aspects of the solution. Microsoft's [Success by Design framework](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/success-by-design) takes a similar view of timing: it starts with a solution blueprint review in the earliest phase so that risks are found before they become costly.

That guidance is written for large implementations, but the principle holds for a 20-person business setting up its first CRM. The decisions below fall into two groups: those about the work, and those about how the platform will be governed.

## Decisions about the work

### 1. What the platform is for, in business terms

State the outcomes in a few sentences: faster quote turnaround, no missed renewals, invoices raised the day work is completed. These outcomes are the test for every later configuration choice. A field or rule that does not serve one of them needs a reason to exist.

### 2. Which processes are in scope, and which are not

List the processes the platform will support and those it will not, at least for now. Microsoft's guidance recommends identifying all relevant processes, including those outside the current project, and marking them as out of scope, or noting which other system or manual method handles them, rather than ignoring them. That prevents a common problem: the platform slowly absorbing work it was never designed for.

### 3. The stages each piece of work moves through

Define the states of each main record, such as a lead, job, order or case, and what must be true for work to move from one to the next. Stages configured without this become labels people choose freely, and reports built on them mean little.

### 4. The words the business uses

The Dynamics 365 guidance talks about using the business's own language, organised as a taxonomy from broad to detailed processes, so that everyone, including external partners, describes the work the same way. In practice this means agreeing what "customer", "active", "won" and "complete" mean before they become field names and report filters.

### 5. Which system is authoritative for which data

Decide whether the new platform or another system owns customers, products, prices and contacts, and what identifies each record. If the accounting package remains the master for customers, the new platform should reference its customer codes rather than create its own. This decision prevents duplicates and conflicting reports later; see [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## Decisions about how the platform will be governed

### 6. Who can see and change what

Microsoft's guidance says [security should be the first concern](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/security) when a project starts, not an afterthought, and warns that ignoring it can cause legal, financial and business risks as well as delays. It also warns against hiding fields from forms as a form of security, since anyone with the right role can still reach the data in other ways. Decide roles and access rules before data is loaded, especially for personal and financial information.

### 7. Standard features or customisation

Every platform has a standard way of doing most things. Decide in advance how strong the case must be to depart from it. Customisation can be the right answer, but each one adds cost to upgrades, support and future changes. A useful rule is to adopt the standard process unless the difference is a genuine source of advantage or a legal requirement. The risk of letting the vendor's model decide everything is discussed in [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/).

### 8. What data comes across

Decide which historical records will be migrated, how far back, and in what condition. Moving everything moves the old problems too. Moving nothing leaves staff checking two systems. Agree what the business actually needs on day one and where older history will be kept.

### 9. Which other systems it must connect to

List the integrations the platform needs, which direction data flows and which system starts each exchange. These shape field design, identifiers and permissions, so they belong before configuration rather than after.

### 10. Who owns the platform after launch

Name the business owner, at least two administrators and the way changes will be requested, approved and recorded. Platforms without an owner drift quickly once the implementation team steps back, a pattern described in [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).

## A one-page decision record

| Decision | Output | Decided by |
| --- | --- | --- |
| Purpose | Three to five business outcomes | Owner or managing director |
| Scope | Processes in, out and handled elsewhere | Process owners |
| Stages | States and entry rules for each main record | Process owners |
| Language | Agreed definitions of key terms | Process owners and finance |
| Data authority | Master system and identifier for each data type | Finance and operations |
| Access | Roles and what each can see and change | Owner, with privacy input |
| Standard or custom | Rule for departing from standard features | Owner and implementer |
| Migration | Records, period and clean-up required | Process owners |
| Integrations | Connections, direction and triggers | Systems owner |
| Ownership | Business owner, administrators and change route | Owner |

## An illustrative example

Consider an illustrative Bloemfontein provider of security and access control installations with about 30 staff. It bought a job management platform and a staff member configured it over two weeks, copying the structure of the spreadsheets it replaced.

Within three months the business had two customer lists, one in the new platform and one in the accounting package, with no shared code. Job stages had been named differently by each team. Every user could see every customer's site access details and alarm codes. Reports on job profitability did not match finance's figures.

The business paused, worked through the ten decisions above in four half-day sessions, and reconfigured. The accounting customer code became the identifier in both systems. Job stages were reduced to six with clear entry rules. Site access details were restricted to the technicians assigned to each job. Reconfiguring cost more than deciding first would have, but much less than continuing to build on the original structure. Planning the move into live use is covered in [how to implement a new business system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/).

## Trade-offs

Deciding everything in advance is neither possible nor desirable. Some answers only become clear once people use the platform. The aim is to settle the decisions that are expensive to reverse, such as data authority, identifiers, access, stages and ownership, and leave room to adjust the rest. A business that knows which of its choices are structural and which are cosmetic can configure quickly without building in problems it will pay for later.
