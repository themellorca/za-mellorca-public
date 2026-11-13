---
hub: insights
record_id: INS-083
slug: one-customer-record-three-teams-three-useful-views
title: Why sales, operations and service need different views of the same customer
description: One customer record does not mean one screen. Each team needs its own slice of the same facts, and designing those slices is what makes a CRM useful.
lead: A single customer record does not mean a single screen. Each team needs its own slice of the same facts, and designing those slices is what makes the CRM useful.
category: Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Operations
sources:
  - Security roles and privileges for Dataverse - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Section 11 Consent, justification and objection - POPIA | https://popia.co.za/section-11-consent-justification-and-objection/
related:
  - How to clean up a CRM without breaking active work | /insights/a-safe-sequence-for-cleaning-up-a-crm-while-the-team-keeps-working/
  - Broken handoffs are systems problems | /insights/broken-handoffs-are-systems-problems/
  - Why your CRM is not the problem you think it is | /insights/why-your-crm-is-not-the-problem-you-think-it-is/
  - How to stop people keeping shadow spreadsheets beside the CRM | /insights/turning-side-spreadsheets-into-crm-improvements/
summary: A single customer record does not mean a single screen. Each team needs its own slice of the same facts, and designing those slices is what makes the CRM useful.
layout: plain
---
A salesperson, a project coordinator and a support agent can all be looking at the same customer on the same afternoon and want completely different things from the screen. The salesperson wants to know whether there is a renewal coming and who signed the last quote. The coordinator wants the delivery address, the site contact and what has been promised for Thursday. The support agent wants the open tickets, the equipment installed and the tone of the last phone call.

When the CRM shows all three people the same cluttered page, each has to dig for what matters. When the teams respond by building their own lists, the business ends up with three versions of the customer and no agreement about which is right. The way out is neither a single identical screen nor three separate databases. It is one customer record presented through different views.

## One record, many uses

The distinction matters. A *record* is the set of facts the business holds about a customer. A *view* is a selection and arrangement of those facts for a particular job. Good practice keeps the record singular and makes the views plural.

The reasons are practical. If sales, operations and service each keep their own copy, a change of address or a new contact person reaches one team and not the others. Our pattern page on [when sales, finance and support disagree about the same customer](/patterns/when-sales-finance-and-support-disagree-about-the-same-customer/) shows where that leads: meetings spent arguing about whose information is correct instead of what to do for the customer. And the article on [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/) explains how quickly parallel lists drift apart.

## What each team actually needs to see

An illustrative example helps. Picture a mid-sized South African firm that installs and maintains security systems for commercial clients. It has a sales team, an installation and operations team, and a support desk. All three work with the same client records, but each asks different questions of them.

### Sales

- Open opportunities, their stage and expected close date
- Quote history and what was agreed on price and terms
- Key decision-makers and the date of the last meaningful contact
- Contract end dates and renewal windows
- A short summary of service problems, so nobody is surprised by a complaint in a meeting

### Operations

- Confirmed orders, delivery or installation dates and the site address
- Site access instructions and the person who will be on site
- Commitments made in the sales process that affect delivery
- What has been delivered, what is outstanding and what is waiting on the customer
- Credit status, but only as a clear indicator rather than the full finance history

### Service

- Open and recent tickets, with the history of each
- Products or systems installed, with serial numbers and warranty dates
- The support entitlement the customer has paid for
- Named contacts who may authorise work
- Any special handling notes, such as a customer who must be phoned rather than emailed

Notice how much overlaps. The customer's name, contacts, addresses and status are common to all three. That shared core is the record's backbone, and it should be maintained once. The differences lie in what sits in front of each team.

## How to design the views

1. **Start from decisions, not fields.** For each team, list the five or six questions they ask about a customer most often. Build the view around answering them in one glance.
2. **Agree the shared core.** Decide which fields every team sees and who is allowed to edit each. Name, registration number, billing and delivery addresses and primary contacts are typical. The guidance in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) applies equally to fields within a CRM.
3. **Give each team a home screen.** Most CRMs let you create role-based forms, saved filters or dashboards. Set each team's default to its own view so they are not tempted to look elsewhere.
4. **Add a "what other teams need to know" strip.** A few lines such as open complaints, upcoming delivery dates or renewal status let teams see just enough of each other's work to avoid surprises, without reading each other's full notes.
5. **Keep the full record one click away.** Views should narrow attention, not hide information. Anyone with a legitimate reason can open the full record.
6. **Review the views twice a year.** Teams change what they ask. Remove fields nobody uses and add the ones they keep requesting by email.

## Views are not the same as permissions

A view is about convenience. A permission is about what a person is allowed to do. The two are related but should be designed separately, and confusing them causes trouble in both directions: a field hidden from a view is not protected, and a field locked by permissions is a nuisance if the person needs it daily.

Microsoft's documentation for Dataverse, the data platform behind Dynamics 365, shows how granular permissions can be. [Security roles](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges) define which privileges a user has on each type of record: reading, creating, writing, deleting, assigning and sharing, among others. Each privilege also has an access level, so a role can allow a user to act on only the records they own, those in their business unit or all records in the organisation.

The documentation notes that user-level access is typical for sales and service representatives, and reserves organisation-wide access for managers with authority over the organisation. It also describes ready-made permission settings such as Collaborate, where users can view all records but edit only their own, and Reference, where users can view records but not edit them.

Whether or not you use that platform, the idea transfers to any CRM that offers roles. A support agent might be allowed to read a customer's quote history but not change it. Operations might read credit status but not the underlying finance notes. Sales might read ticket summaries but not close tickets. Matching the permission to the job is a better safeguard than a rule that "everyone sees everything" or "everyone only sees their own".

## Why this is also a data protection matter

Customer records contain personal information, and South Africa's Protection of Personal Information Act (POPIA) expects a business to think about why it holds and uses it. Section 11 sets out the lawful grounds for processing, such as consent, the performance of a contract or the legitimate interests of the responsible party. Section 16 requires reasonably practicable steps to keep the information complete, accurate, not misleading and updated where necessary, having regard to the purpose for which it is used.

Both points favour role-based views. Showing each team what it needs for its purpose, rather than every detail of every customer to everybody, is easier to justify. And a single maintained record is much easier to keep accurate than three copies. This is a design consideration, not legal advice; check requirements for your own business with a suitably qualified adviser.

## Common mistakes

- **Copying the record into a team's own tool.** A department-specific spreadsheet or a separate app with its own customer list creates a second record in all but name. Read [why teams stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/) for what follows.
- **Letting the loudest team set the layout.** Sales often has the strongest voice, so its fields dominate and the others are buried. Involve all three in the design.
- **Making every field mandatory for everyone.** Fields that matter to only one team should be required only where that team works.
- **Burying the shared facts.** The common core should be visible and editable in a consistent place on every view.

## A small first step

If the CRM currently has one form for everybody, begin with a single change. Ask each team for its top five questions, build a short first-screen for each, and leave everything else as it is. Within a few weeks, you will find out which fields were noise and which questions nobody had thought to include. The record stays whole, the teams feel it was built for them and the conversation shifts from whose data is right to what the customer needs next. The wider purpose of the system is discussed in [the five jobs a CRM should do for a growing business](/insights/the-five-jobs-a-crm-should-do-for-a-growing-business/).
