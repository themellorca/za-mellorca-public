---
hub: insights
record_id: INS-044
slug: how-to-build-a-business-application-inventory-that-is-actually-useful
title: How to build a business application inventory that is actually useful
description: Most application lists go stale within months and never inform a decision. How to build an inventory around the questions it must answer and keep it fresh.
lead: Most application lists are built once, go stale within months and never inform a decision. How to design an inventory around the questions it must answer, which fields matter, how to gather the information and how to keep it current without a dedicated tool.
category: Digital Infrastructure
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Infrastructure
sources:
  - Asset management | https://www.ncsc.gov.uk/guidance/asset-management
  - Identifying the critical assets in your organisation | https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation
  - CIS Control 2: Inventory and Control of Software Assets | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
related:
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
  - Why AI makes data quality more important, not less | /insights/why-ai-makes-data-quality-more-important-not-less/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
summary: Most application lists are built once, go stale within months and never inform a decision. How to design an inventory around the questions it must answer, which fields matter, how to gather the information and how to keep it current without a dedicated tool.
layout: plain
---
Many businesses have built an application list at some point. It was usually created for a specific reason, such as an audit, a security questionnaire, a new financial controller or a cost-cutting drive. It took a few days, it was saved in a spreadsheet, and within six months it was out of date. When the next question arrived, somebody started again from scratch.

The problem is rarely effort. It is design. An inventory built as a once-off list of names answers almost nothing. An inventory built around the decisions the business needs to make becomes something people return to, and because they return to it, it stays current.

## Start with the questions, not the list

Before collecting anything, write down the questions the inventory must answer. For most small and mid-sized businesses, they look like this:

- What are we paying for, and when does each commitment renew?
- Who is responsible for each application?
- Which applications hold customer, employee or financial information?
- Which applications would stop the business if they failed?
- What is connected to what?
- Who has access, and who should not any more?
- Which tools overlap, and which are barely used?

The UK National Cyber Security Centre makes the same point in its [asset management guidance](https://www.ncsc.gov.uk/guidance/asset-management): the inventory should contain the information needed to support the uses you have for it. A field that does not help answer one of your questions is a field nobody will maintain.

## The fields that earn their place

A useful inventory can fit on one row per application. These fields cover the questions above without becoming a burden.

| Field | Why it matters |
| --- | --- |
| Application name and supplier | Identifies the tool and who you pay, which is not always the vendor |
| Business purpose | One sentence on what work it supports, in business language |
| Business owner | The named person who decides whether it stays, changes or goes |
| Technical contact | The person or partner who manages settings, users and support |
| Criticality | A simple rating: the business stops, slows or is inconvenienced if it fails |
| Data held | Whether it holds personal information, financial records or other sensitive data |
| Connections | What it sends data to or receives data from |
| Users and licences | Paid seats compared with active users |
| Cost, term and renewal date | What it costs, how it is billed and when it can be changed |
| Sign-in method | Whether it uses the company's central sign-in or separate passwords |
| Last confirmed | The date someone last checked this row was accurate |

The NCSC's [Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation) highlights two of these in particular: knowing who is responsible for each asset and what it is used for. It also stresses that identifying critical assets cannot be done by the technical team alone, which is why business purpose and criticality should be agreed with the people who use each tool.

The "last confirmed" field is the one most often left out and the one that does the most to keep the inventory honest. The NCSC guidance recommends recording a confidence score or "last seen" timestamp so that readers can tell how fresh each record is. A row confirmed last month can be trusted; a row nobody has looked at in two years should be treated as a guess.

## Where to find the information

No single source will give you a complete list. Combine several, and expect each to reveal something the others missed.

1. **Finance records.** Card statements, debit orders and supplier invoices over the last twelve months show paid tools, including ones bought on personal cards and claimed back.
2. **Central sign-in.** If the business uses Microsoft 365 or Google Workspace sign-in for other applications, the admin console lists the connected apps.
3. **Device and network tools.** Software installed on company laptops and services accessed from the network show what people actually use.
4. **Team conversations.** Ask each team what they use to do their work, including free tools, browser extensions and shared spreadsheets that act as systems.
5. **Integration and automation platforms.** These reveal connections and often tools nobody mentioned.

The reasons the first list is always incomplete are covered in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/). Free trials are a common gap; [why free trials become production dependencies](/discovery/why-free-trials-become-production-dependencies/) explains how they slip in.

## Keep it small enough to maintain

An inventory that tries to capture everything will collapse under its own weight. A few principles keep it manageable:

- **Record applications, not features.** One row per tool, not per module.
- **Use short, fixed answers.** Criticality as stop, slow or inconvenience; data held as yes or no per category. Free text invites inconsistency.
- **Link rather than duplicate.** Point to the contract, the integration diagram or the procedure document instead of copying them in.
- **Put detail where it is needed.** Critical applications deserve a fuller record of dependencies and recovery steps. Minor tools need only the basic row.

Dependency detail for the critical few is covered in [how to identify the systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/).

## Keep it current without a dedicated team

An inventory stays alive when updating it is part of work people already do, rather than a separate chore. The CIS Critical Security Controls describe software inventory as something to [actively manage: inventory, track and correct](https://www.cisecurity.org/controls/inventory-and-control-of-software-assets). In a smaller business, that translates into a few simple triggers:

- **Purchase.** No new subscription is paid for until its row exists, with a named owner.
- **Joiners and leavers.** Onboarding and offboarding checklists reference the inventory, so access is granted and removed per application.
- **Renewal.** Each renewal review updates cost, users and the "last confirmed" date.
- **Change.** New integrations or automations are added to the connections field when they go live.
- **Quarterly sample.** Each quarter, pick a handful of rows at random and check them. The Board Toolkit suggests regular sample checks of inventory accuracy, with results reported to leadership.

Automation helps where it is available. Licence counts, sign-in activity and connected apps can often be exported from admin consoles. Where automation is not practical, a short manual review on a fixed rhythm is better than an ambitious system that nobody updates.

## An illustrative example

Consider an illustrative Cape Town property management company with 35 staff. Its first application list, built for an insurance questionnaire, had 14 names and no other information. A year later nobody trusted it.

The rebuild began with five questions from the managing director: what do we pay for, who owns it, what holds tenant data, what would stop us collecting rent, and what renews in the next quarter. The finance and operations managers combined card statements, the Microsoft 365 connected apps list and interviews with each team. The new inventory had 31 rows. Six tools held tenant personal information that nobody had listed before, two were duplicates, and the rent collection platform had no named business owner.

Each row now carries a "last confirmed" date. The finance manager checks five rows each quarter and updates renewal details as reviews happen. The list has stayed current because it is used every month.

## Useful beats complete

A perfect inventory is not the goal. A useful one is: accurate enough to trust, focused on the questions the business actually asks, and maintained through the routines that already exist. Start with the decisions, collect only what answers them, and record when each row was last checked. Everything else can be added when a real question demands it.
