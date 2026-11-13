---
hub: insights
record_id: INS-093
slug: how-duplicate-contacts-and-companies-damage-operations-costs-and-controls
title: How Duplicate Contacts and Companies Damage Operations
description: Two records for the same customer split the history, the credit exposure and the conversation. Here is what duplicates actually cost across sales, service and finance, and the controls that keep them down.
lead: Two records for the same customer split the history, the credit exposure and the conversation. Here is what duplicates actually cost across sales, service and finance, and the controls that keep them down.
category: Data Quality
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Data Quality
sources:
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Deduplicate records in HubSpot | https://knowledge.hubspot.com/records/deduplication-of-records
  - Who makes an application to process Special Personal Information? | https://www.inforegulator.org.za/popia/
related:
  - Why Required Fields Do Not Automatically Create Good Data | /insights/why-required-fields-do-not-automatically-create-good-data/
  - Why More Fields Usually Do Not Fix Data Quality | /insights/why-more-fields-usually-do-not-fix-data-quality/
  - What Data Should Be Required at the Point of Capture? | /insights/what-data-should-be-required-at-the-point-of-capture-and-what-can-wait/
summary: Two records for the same customer split the history, the credit exposure and the conversation. Here is what duplicates actually cost across sales, service and finance, and the controls that keep them down.
layout: plain
---
A building supplies company in Polokwane discovers that one of its largest trade customers exists in its CRM four times: once under the registered company name, once under its trading name, once under a branch name and once as a misspelling entered at a trade show. Each record has a different account manager, a different set of notes and a different view of what the customer has bought. Two salespeople have been quoting the same project at different prices. The credit controller has been assessing exposure on one record while the customer ran up orders on another.

Duplicate records are usually discussed as a tidiness problem. In practice they are an operational problem, because every process that depends on knowing who the customer is will make mistakes when the same customer has more than one identity. We have written separately about [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/). This article focuses on what they cost and how to keep them under control.

## What duplicates do to each part of the business

### Sales

Split records hide the relationship. A salesperson looking at one record cannot see the open quote on another, the complaint logged against a third or the fact that a colleague already has a meeting booked. Customers notice when two people from the same supplier contact them about the same thing, and it makes the business look disorganised. Pipeline and account reports undercount the value of large customers because their activity is spread across several records.

### Customer service

Service staff often find the first matching record and work from it. If the history sits on another record, they ask the customer questions already answered, which is one of the reasons we describe in [why customers are asked to repeat their details](/insights/why-customers-are-asked-to-repeat-their-details/). Cases logged against different records make repeat problems invisible.

### Finance and credit

When orders, invoices and credit limits attach to different records for the same customer, total exposure is understated. Statements go out incomplete. Payments get allocated to the wrong account, generating queries and reconciliation work. If the CRM feeds the accounting system, duplicates can become duplicate debtor accounts, which are harder to unpick.

### Marketing and communication

Duplicated contacts receive the same message twice, or receive a message after they opted out on a different record. That last case is more than an annoyance. South Africa's Protection of Personal Information Act gives people rights over how their personal information is used, including for direct marketing; the Information Regulator's [POPIA resource page](https://www.inforegulator.org.za/popia/) covers direct marketing and complaints. An objection recorded on one duplicate and ignored on another is a compliance risk as well as a customer service failure.

### Reporting and decisions

Customer counts, retention rates, average order values and customer profitability all become distorted. A business with heavy duplication can believe it has more, smaller customers than it really does, and make pricing or account management decisions on that false picture.

## Estimate the size of the problem

You do not need a perfect count to know whether duplicates matter. Take a sample of 100 company records and 100 contact records and check each against the rest of the database using a few simple matches: same email address, same phone number, same company registration or VAT number, same email domain, similar names. Note how many have at least one probable duplicate. Then check your top 20 customers by revenue individually. Duplication among large customers usually does the most damage.

Alongside the count, collect examples of harm: a double quote, a misallocated payment, an unhappy customer contacted twice. Concrete examples make the case for fixing the problem far better than a percentage.

## Prevent duplicates at the point of entry

Cleaning up duplicates without prevention is a recurring cost. Most CRMs offer duplicate detection that can warn people as they create records. Microsoft's guidance on [setting up duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) notes that default rules exist for accounts and contacts, that you can create rules comparing fields such as email across record types, and recommends basing rules on fields with unique values such as email. HubSpot's documentation on [deduplication of records](https://knowledge.hubspot.com/records/deduplication-of-records) explains that it matches contacts by email address and companies by primary domain, and notes an important limit: companies created through the API, including by third-party sync apps, are not deduplicated by domain.

That limit is worth generalising. Duplicate checks that work for people typing into a screen often do not apply to imports, integrations and form submissions. Find out how each route into your CRM behaves, and add matching to imports and integrations where the built-in checks do not cover them.

Choose strong identifiers for your business. For companies in South Africa, a company registration number or VAT number is more reliable than a name. For contacts, email address is usually best. Make the strong identifier a required field where it is practical, so matching has something reliable to work with.

## Merge carefully, not just quickly

Merging duplicates is not simply deleting the extra records. Each record may hold activities, quotes, cases, consent preferences and links to other systems. Decide which record survives, which values win when they conflict and how links in other systems, especially accounting, will be updated. Where consent or opt-out preferences differ, the more restrictive one should win.

Work through merges in priority order: large customers first, then active customers, then the long tail. Our guide to [a safe sequence for cleaning up a CRM while the team keeps working](/insights/a-safe-sequence-for-cleaning-up-a-crm-while-the-team-keeps-working/) explains how to do this without disrupting daily work.

## Keep a standing control

Duplicates will keep appearing at a low rate whatever you do, as we explain in [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/). Schedule a regular duplicate detection job, assign someone to review the results weekly and track the number of new duplicates per month by source. A rising number from one source, such as a website form or an integration, points to the fix.

## Practical next actions

1. Sample 100 company and 100 contact records, check them for probable duplicates and individually check your 20 largest customers.
2. Collect three to five recent examples where duplicates caused a double quote, a misallocated payment or a repeated customer contact.
3. Turn on duplicate detection for companies and contacts based on strong identifiers such as email, registration number or VAT number.
4. List every route into the CRM, including imports, forms and integrations, and confirm which apply duplicate checks.
5. Agree merge rules, including which record survives, how conflicts are resolved and that the most restrictive consent preference wins.
6. Schedule a recurring duplicate check, review it weekly and track new duplicates by source each month.
