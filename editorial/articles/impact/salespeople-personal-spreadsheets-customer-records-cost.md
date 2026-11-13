---
hub: impact
record_id: CPS-303
slug: salespeople-personal-spreadsheets-customer-records-cost
title: Customer records in salespeople's spreadsheets: The revenue and continuity cost
description: When customer knowledge lives in salespeople's personal spreadsheets, the business does not own its relationships. The cost appears when someone leaves.
lead: When customer knowledge lives in salespeople's personal spreadsheets, the business does not really own its relationships. The cost appears when someone leaves, in lapsed accounts and rebuilt records.
category: Sales Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Sales Operations
commercial_domain: Sales, Leads & Customer Relationship Management
primary_pain: Salespeople keeping customer information in personal spreadsheets
primary_cost_mechanism: Revenue loss and customer attrition on staff departure, rebuild labour and data protection risk
sources:
  - What Is Customer Relationship Management (CRM)? - IBM | https://www.ibm.com/think/topics/crm
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - An inbox is not a sales process: The revenue cost of emailed website enquiries | /impact/website-enquiries-email-inbox-sales-process-revenue-cost/
  - The revenue cost of slow sales lead response | /impact/slow-sales-lead-response-revenue-cost/
  - "Let me check and come back to you": The cost of manual availability checks | /impact/checking-stock-capacity-by-hand-before-promising-cost/
  - When customer relationships live in one salesperson's inbox | /impact/customer-relationships-in-salesperson-inbox-lost-opportunities-when-they-leave/
summary: When customer knowledge lives in salespeople's personal spreadsheets, the business does not really own its relationships. The cost appears when someone leaves, in lapsed accounts and rebuilt records.
layout: plain
---
## The tolerated pain

Ask a good salesperson where their customer information lives and the honest answer is often "in my spreadsheet". It has the contacts who actually make decisions, the notes from last month's call, the renewal dates, the pricing that was agreed informally and the leads they are quietly working on. The CRM, if there is one, holds a thinner and older version. The real picture of the customer is on one person's laptop or in their personal cloud storage.

Managers tolerate this because the salesperson is delivering. Forcing them into a system feels like admin that gets in the way of selling. And for as long as that person stays, is healthy and is not on leave, the arrangement seems to work.

It stops working the day they leave, go on extended leave or simply cannot be reached when a customer calls. A separate article, [the financial impact of departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/), looks at sales, finance and operations each holding their own version of the customer. This one is narrower and more personal: customer knowledge held by individuals rather than by the business.

## Why it persists

- **The spreadsheet is faster.** It fits how the salesperson works, with their own columns and shortcuts, while the CRM feels slow and generic.
- **Information is power.** Some salespeople see their customer list as personal capital, especially if commission depends on it.
- **The CRM was never designed around the sales process.** If fields are irrelevant and screens are cumbersome, people route around it.
- **Nobody checks.** Managers judge salespeople by results, not by the completeness of records.
- **Exit processes ignore data.** Laptops are returned, but nobody verifies that customer information is in the business's systems first.

## Operational symptoms

- managers asking salespeople for an update instead of looking it up;
- customers calling and nobody else able to see their history or agreed terms;
- forecasts built by collecting spreadsheets from each salesperson;
- duplicate or outdated contacts in the CRM, because the real updates happen elsewhere;
- a scramble to rebuild relationships whenever a salesperson resigns;
- customer lists emailed to personal addresses or stored on unmanaged devices.

## What a shared customer record is for

IBM's explainer on [customer relationship management](https://www.ibm.com/think/topics/crm) describes a CRM as a set of integrated technologies used to document, track and manage an organisation's relationships and interactions with existing and potential customers, and contrasts this with relying on traditional spreadsheets. The point is not the software. It is that the relationship belongs to the business, can be seen by the people who need it and survives staff changes.

A shared record only helps if it is clean. Microsoft's guidance on [setting up duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) notes that Dynamics 365 Sales and similar apps include default duplicate detection for accounts and contacts, and recommends matching on a field with unique values, such as email. That matters when years of personal spreadsheets are imported: without matching rules, the migration simply moves the mess into the CRM.

## A data protection issue as well as a sales issue

Customer contact details for individuals are personal information. Section 19 of the Protection of Personal Information Act, summarised on [this page on POPIA's security safeguards](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/), requires a responsible party to secure the integrity and confidentiality of personal information through appropriate, reasonable technical and organisational measures, to identify foreseeable risks, to maintain safeguards and to verify them regularly. A spreadsheet on a personal laptop, synced to a personal cloud account and taken home when someone resigns, is difficult to reconcile with that obligation. This is not legal advice, but it is a reason to treat the issue as a risk rather than a habit.

## How the pain becomes money

- **Revenue loss:** renewals, follow-ups and opportunities missed when the only record leaves with a person.
- **Customer attrition:** customers who feel forgotten during a handover may move to a competitor, sometimes to the departing salesperson's new employer.
- **Labour cost:** time spent rebuilding contact lists, histories and pricing agreements.
- **Forecasting error:** decisions made on pipeline figures nobody can verify.
- **Risk exposure:** personal information held outside controlled systems.

## An illustrative cost model

This example is **illustrative**; every figure is an assumption to show the method. Picture an East London industrial supplies distributor where a senior salesperson who manages 150 active accounts resigns.

| Input | Illustrative assumption |
| --- | --- |
| Active accounts held mainly in a personal spreadsheet | 150 |
| Share that lapse or move during a poorly informed handover | 10% (15 accounts) |
| Average annual gross profit per account | R40,000 |
| Time to rebuild contacts, history and terms | 60 hours at R400 per hour |

On these assumptions, the business risks about R600,000 of annual gross profit from lapsed accounts, plus R24,000 of rebuilding effort, from a single resignation. The attrition rate is invented for the example; estimate your own by reviewing what happened to accounts after past departures.

## Trade-offs to respect

Banning spreadsheets outright rarely works. Salespeople keep them because they meet a real need: speed, personal views and quick filtering. A better route is to find out what the spreadsheet does that the CRM does not, and add that to the CRM through saved views, simple fields or mobile access. Where a spreadsheet remains useful for analysis, it should be an export from the shared record, not a replacement for it. The goal is one source of truth, not one tool for every task.

## When it becomes commercially urgent

1. A salesperson with a large book of business resigns, retires or goes on extended leave.
2. Management cannot produce a reliable pipeline without asking each salesperson.
3. Customers complain that they have to repeat themselves when a different person answers.
4. The business is preparing for investment, sale or audit, where customer data quality will be examined.

## What better looks like

There is one customer record that the business owns, and salespeople find it easier to use than their spreadsheet because it is designed around how they actually sell. Fields are few and relevant. Notes, contacts and agreed terms are captured as part of the work, not afterwards. Managers review pipeline in the system, which makes it worth keeping current. Exit and leave processes include a handover of accounts in the system. Why a CRM so often becomes an expensive address book is explored in [how a CRM turns into an expensive address book](/insights/how-a-crm-turns-into-an-expensive-address-book/), and why adoption problems are usually workflow problems is covered in [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/).

## Practical next actions

1. **Ask each salesperson** where their real customer information lives, without blame.
2. **Compare** the spreadsheets with the CRM to see what is missing.
3. **Simplify the CRM** so it captures what salespeople already track in their spreadsheets.
4. **Import with duplicate rules** switched on, matching on email or another unique field.
5. **Run pipeline meetings from the system**, not from emailed files.
6. **Add a customer-data check** to resignation and leave procedures.

Configuring and integrating a CRM around the real sales process is part of Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work.

## Bottom line

Customer relationships are business assets, but personal spreadsheets make them personal property in practice. The cost stays hidden until someone leaves. Moving customer knowledge into a shared, clean and usable record protects revenue, simplifies handovers and reduces data protection exposure.
