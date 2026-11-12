---
hub: insights
record_id: INS-080
slug: the-five-jobs-a-crm-should-do-for-a-growing-business
title: What Your CRM Should Actually Do for the Business
description: A CRM is not an address book or a magic loyalty device. Five practical jobs it should do for the business, a one-hour test of your current system, and what it should never be asked to carry.
lead: A CRM is not an address book or a magic loyalty device. Five practical jobs it should do for the business, a one-hour test of your current system, and what it should never be asked to carry.
category: Customer Systems
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Customer Systems
sources:
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
related:
  - Which Digital Systems Are Actually Infrastructure? | /insights/which-digital-systems-are-actually-infrastructure/
  - How to Measure Whether Software Is Paying for Itself | /insights/how-to-measure-whether-software-is-paying-for-itself/
  - What a Digital Systems Audit Should Actually Tell You | /insights/what-a-digital-systems-audit-should-actually-tell-you/
summary: A CRM is not an address book or a magic loyalty device. Five practical jobs it should do for the business, a one-hour test of your current system, and what it should never be asked to carry.
layout: plain
---
Ask five people in a business what the CRM is for and you will usually get five answers. The sales manager says it is for the pipeline. The owner says it is for forecasting. The service team says it is where customer history should live. Marketing says it is the mailing list. Finance has never opened it. When a system is bought to do everything for everyone, it is rarely configured to do any one thing well, and within a year it is described as "just an address book".

A CRM, short for customer relationship management system, is not a magic customer-loyalty device. It is a shared record of who your customers and prospects are, what has happened between you, and what needs to happen next. This article sets out what a CRM should actually do for a South African business of moderate size, and how to tell whether yours is doing it.

> A CRM is working when a colleague can pick up any customer relationship, on any day, and know what to do next without asking the person who last touched it.
>

## Job one: one trustworthy record of each customer

The first job is the least glamorous. Each customer or prospect should appear once, with the right company name, contact people, communication history and status. If the same client exists under three spellings, nobody can see the whole relationship. The IBM overview of data silos describes how information held in separate, unconnected places leaves an organisation with an incomplete picture, and a poorly kept CRM can become one more such place.

Duplicate prevention is a feature, not an afterthought. Microsoft's documentation on duplicate detection rules in its platform shows the principle: define which fields identify a duplicate, such as email address or company name, and have the system warn when a new record looks like an existing one. Whatever product you use, ask whether it can do this and whether anyone has switched it on. Where records go wrong in the first place is covered in [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/).

## Job two: show what happens next

A record of the past is useful. A record of the next step is what turns a CRM into an operating tool. Every open opportunity or customer issue should have a named owner and a next action with a date. Reports that show opportunities with no next step, or with a date in the past, are far more useful than a pipeline chart. They tell a manager where to look today.

This is where many implementations quietly fail. Staff are asked to record activity after the fact, which feels like paperwork. If recording the next step is built into how the work is done, for example when a quote is sent the system prompts for the follow-up, it becomes part of the job. The relationship between adoption and process is explored in [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/).

## Job three: hand work over cleanly

Customers do not experience your departments. They experience a sale, an onboarding, a delivery and an invoice as one continuous relationship. The CRM is often the place where the handoff from sales to delivery should happen. When a deal is won, what the customer was promised, the contact details, the agreed price and special conditions should travel with it. If that currently happens by email or a verbal briefing, the CRM is not doing its job. The causes and cures of handoff failure are discussed in [broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/).

## Job four: connect to the systems that handle money

A CRM that is separate from invoicing creates a familiar gap: sales sees a customer as active, while finance sees them as overdue. At minimum, the customer account number should be common to both systems, and a salesperson should be able to see whether the account is in good standing before promising anything. This does not require a heavy integration. It requires a decision about which system owns which information, as set out in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Job five: protect personal information

A CRM is, by definition, a database of personal information. Under the Protection of Personal Information Act, section 16 requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. A CRM full of former employees' contacts, people who asked to be removed, and phone numbers years out of date is more than untidy. It is a compliance weakness. A good CRM should let you correct a record in one place, record the source and purpose of the contact, and delete or restrict a record when required.

## What a CRM should not be asked to do

Equally important is what falls outside the CRM's remit. It should not become:

- **A document store.** Contracts, signed quotes and compliance documents belong in a controlled document system, linked from the CRM, not buried in attachments.
- **An accounting package.** Showing balances is useful. Raising and posting invoices belongs in the finance system.
- **A project management tool.** Delivery tasks that run for months belong where delivery teams actually work.
- **A second spreadsheet.** If staff export data to Excel every week to do their real tracking, the CRM is failing at job two.

Overloading a CRM is one route to the problem described in [how a CRM turns into an expensive address book](/insights/how-a-crm-turns-into-an-expensive-address-book/), because the cluttered system stops being trusted, and an untrusted system stops being updated.

## A practical test of your current CRM

You can test a CRM in an hour without any consultant. Choose five active customers at random and ask a colleague who does not manage them to answer the following from the CRM alone.

1. Who is the right contact, and are their details current?
2. What was the last interaction, and when?
3. What is the next planned step, and who owns it?
4. What has been sold, quoted or promised?
5. Is the account in good standing financially?

Count the questions answered correctly out of twenty-five. If the result is below roughly two-thirds, the CRM is not yet the shared record of the relationship, whatever the licence cost. Record where the answers were missing, because the gaps point to the specific job that is failing.

## An illustrative example

The following is a hypothetical case. A Pretoria firm supplying commercial cleaning services has a CRM with 4,000 contacts and three salespeople. The owner complains that it is "useless". The test reveals that a third of the active customers have duplicate entries, next steps are almost never filled in, and each salesperson keeps a private spreadsheet of quotes.

The firm does not change software. It merges duplicates, switches on the duplicate warning, and makes the next-step field mandatory when an opportunity is saved. It stops accepting quotes that are not logged in the CRM, and uses a single weekly report of opportunities with no next step as the Monday meeting agenda. Within two months the spreadsheets disappear because the CRM is now the faster place to look. The product was never the problem. The jobs it was meant to do had never been defined.

## Define the jobs before you judge the tool

If you are considering replacing a CRM, write down the five jobs above, and for each state what good looks like in your business and who is responsible. A tool that does those jobs for a handful of staff is worth keeping, however modest it looks. A tool that does not will fail them in any new interface. Many frustrations attributed to the software turn out to be a lack of agreed purpose, a pattern examined in [why your CRM is not the problem you think it is](/insights/why-your-crm-is-not-the-problem-you-think-it-is/).
