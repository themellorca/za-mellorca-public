---
hub: insights
record_id: INS-406
slug: how-to-choose-where-business-data-should-live
title: How to Choose Where Business Data Should Live
description: Choose a home of record for each data set by purpose, users, sensitivity and exit options, instead of letting the tools decide by accident.
lead: Choose a home of record for each data set by purpose, users, sensitivity and exit options, instead of letting the tools decide by accident.
category: Data Management
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Data Management
sources:
  - Make better use of data | https://www.gov.uk/guidance/make-better-use-of-data
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - Define your purchasing strategy | https://www.gov.uk/guidance/define-your-purchasing-strategy
related:
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - How to decide what should be on an operations dashboard | /insights/how-to-decide-what-should-be-on-an-operations-dashboard/
  - Batch sync vs real-time sync: Which does the business actually need? | /insights/batch-or-real-time-sync-how-fast-does-each-data-flow-need-to-be/
summary: Choose a home of record for each data set by purpose, users, sensitivity and exit options, instead of letting the tools decide by accident.
layout: plain
---
Ask a small business where its customer list lives and the answer is often a pause. There is a version in the accounting package, another in the CRM, a third in a sales rep's spreadsheet and a fourth in the newsletter tool. Each was a sensible choice on the day it was made. Together they make a business that cannot say with confidence how many customers it has.

Deciding where business data should live is not a technology question first. It is a question about who needs the data, who is responsible for it and what happens when you need to move it. This article gives you a way to decide, one data set at a time.

## Start with the data, not the tool

Most placement mistakes happen because the tool was chosen first and the data was poured into it afterwards. Reverse the order. For each major data set, such as customers, products, prices, orders, employees and contracts, write down four things before looking at any software.

- **Purpose:** what decisions and tasks depend on this data?
- **Users:** who creates it, who changes it and who only reads it?
- **Sensitivity:** does it contain personal information, financial detail or trade secrets?
- **Lifespan:** how long must it be kept, and when should it be deleted?

The UK government's guidance on making better use of data makes a point that applies to any organisation: your data should not depend on the lifecycle of your technology or service. It advises defining and managing the lifecycle and storage of data so you can keep using it for as long as you need to, whatever happens to the tool that holds it. You can read the reasoning in the [Technology Code of Practice guidance on data](https://www.gov.uk/guidance/make-better-use-of-data).

## Give each data set one home of record

For every data set, choose one system that is the authoritative source, the place where the data is created and corrected. Other systems may hold copies, but they receive updates rather than originate them. Without this rule, two systems each believe they own the same record, and staff spend their days deciding which one to trust. We look at the consequences in [what happens when two systems both think they own the same data](/insights/what-happens-when-two-systems-both-think-they-own-the-same-data/), and at the method of choosing in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

A useful default: the home of record should be the system closest to the people who know the data best. Customer contact details belong where the account manager works, not in the finance package. Payment terms and credit limits belong where finance works, not in the CRM. Products and prices belong where the business decides them, with sales and finance reading from there.

## Five questions to ask of any candidate home

1. **Can the right people reach it, and only the right people?** Check role-based access, audit trails and whether a leaver's access can be removed quickly.
2. **Can the data come out again?** Ask what formats you can export, whether exports include every field and attachment, and whether there is an interface for automated access. The UK guidance states that supplier contracts should give access to all your data and specify exit and renewal arrangements, including returning data in an open format from the underlying store.
3. **Where is it physically held?** This matters for law as well as speed. In South Africa, the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) includes provisions to regulate the flow of personal information across the borders of the Republic, so if your tool stores customer or staff data abroad you need to understand the conditions that apply. Ask the supplier which regions it uses, and take advice if the answer is unclear.
4. **Does it connect to the systems that need the data?** A perfect home that cannot share its data pushes people back to copying and pasting. See our article on [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/).
5. **Will it still suit you in three years?** Consider the cost of growth: more users, more records, more storage and more integrations.

## Where spreadsheets and email fit

Spreadsheets and shared mailboxes are legitimate places for data when the data is small, short-lived and used by one person or a very small team. They become a problem when they carry data that many people need, that must be correct or that must be kept for a long time. The point at which that happens is usually unnoticed. Our piece on [when a spreadsheet is a useful tool and when it becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/) gives warning signs to watch for.

## Separate what is shared from what is private

Not all data needs the same home. A practical split uses three tiers.

- **Core records:** customers, suppliers, products, staff, contracts and financial transactions. These get a system of record with controlled access, backup and an owner.
- **Working files:** drafts, analyses and presentations. These can live in shared document storage with sensible naming and retention rules.
- **Personal and temporary files:** notes and scratch calculations. These should not hold anything other people depend on, and they should be cleared out regularly.

The tiers help you decide how much control each category deserves. Treating a draft like a core record wastes effort, and treating a customer list like a draft puts the business at risk.

## Plan the exit before you commit

Every system will eventually be replaced, so choose with the departure in mind. The UK guidance on defining a purchasing strategy asks buyers to understand a product's full lifecycle, including upgrading and retirement, and to be explicit in contracts about who owns the data, as set out in its [purchasing strategy guidance](https://www.gov.uk/guidance/define-your-purchasing-strategy). A business of any size can borrow the principle. Before you sign, ask how you would leave: how long an export takes, what it costs and what you would lose. Our article on [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/) describes how often this is learned too late.

## Practical next actions

1. List your ten most important data sets and, beside each, write every place a copy currently lives.
2. For each data set, name one system as the home of record and one person accountable for its accuracy.
3. Check the three highest-risk data sets, usually customer, staff and financial records, for storage location, access rights and backup, and note any gaps.
4. Ask each key supplier in writing how you would export all your data, in what format and at what cost, and file the answers.
5. Set a retention rule for each data set, covering how long it is kept and who deletes it, and add a review of these decisions to your yearly calendar.

Where data lives is a decision about control. Make it deliberately, one data set at a time, and you will spend far less effort later working out which version is right.
