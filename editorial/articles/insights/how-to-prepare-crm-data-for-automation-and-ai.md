---
hub: insights
record_id: INS-099
slug: how-to-prepare-crm-data-for-automation-and-ai
title: How to Prepare CRM Data for Automation and AI
description: Automation acts on whatever the CRM holds, at volume and without judgement. Prepare the specific fields each use case reads, measure them, and keep them ready.
lead: Automation acts on whatever the CRM holds, at volume and without judgement. Prepare the specific fields each use case reads, measure them, and keep them ready.
category: CRM and Customer Systems
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: CRM and Customer Systems
sources:
  - https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - https://learn.microsoft.com/en-us/purview/data-governance-overview | https://learn.microsoft.com/en-us/purview/data-governance-overview
summary: Automation acts on whatever the CRM holds, at volume and without judgement. Prepare the specific fields each use case reads, measure them, and keep them ready.
layout: plain
---
An insurance brokerage in East London wants to automate renewal reminders and use AI to summarise each client's history before review meetings. The plan sounds simple until someone exports the CRM. There are 9,400 contacts, of which about 1,100 look like duplicates. Renewal dates are filled in for only six in ten policies. The "client type" field has fourteen variations of the word "commercial". Meeting notes sit in a free-text field, sometimes with ID numbers pasted in. An automation built on this would send reminders to the wrong people at the wrong time, and an AI summary would be confidently incomplete.

Preparing CRM data for automation and AI is not the same as a general clean-up. It is targeted: you make the specific data that a specific automation will read reliable enough for a machine to act on without a person checking every record.

## Why automation and AI raise the bar

When a person uses CRM data, they apply judgement. They notice that a phone number looks wrong, that a client has two records, or that a renewal date is obviously a typing error. Automation does not notice. It acts on what is there, at volume, and often directly with customers. AI features go further: they summarise, score and suggest based on patterns in your history, so gaps and inconsistencies become distorted conclusions. Our article on [why bad data becomes more dangerous when AI can take actions](/insights/why-bad-data-becomes-more-dangerous-when-ai-can-take-actions/) explains this risk in more depth.

## Step one: start from the use case, not the database

Write down exactly what the automation or AI feature will do, and list every field it will read. For renewal reminders: client email, policy end date, policy status, account owner and communication preference. For AI meeting summaries: contact history, notes, open claims and products held.

Then define what "ready" means for each field. The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) describes quality as fitness for purpose and names six dimensions: completeness, uniqueness, consistency, timeliness, validity and accuracy. Use them as a checklist. A renewal date needs to be complete for every active policy, valid as a date, and accurate to the day. A communication preference needs to be complete and consistent. Fields the automation does not read can wait.

## Step two: measure before you fix

For each field on your list, measure the current state. What share of active records has a value? How many values fall outside the allowed format? How many records appear to be duplicates? These numbers do two things: they tell you how much work is needed, and they give you a baseline to show progress.

A simple export into a spreadsheet, with a few counts per field, is usually enough. For the brokerage, the measurement might show that renewal dates are the real blocker, while email addresses are already in good shape.

## Step three: deal with duplicates first

Duplicates do the most damage to automation, because they cause double messages and split history. Most CRMs include duplicate detection. Microsoft's documentation on [setting up duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) explains that default rules exist for accounts and contacts, that you can create rules for other record types, and recommends matching on fields with unique values such as email. Use the equivalent feature in your own system to find duplicates, merge them carefully with someone who knows the clients, and keep the detection switched on so new duplicates are flagged when they are created.

## Step four: standardise the fields automation will branch on

Any field an automation uses to decide what to do, such as client type, region, product line or status, must have a controlled list of values. Replace free-text fields with dropdowns, map the existing variations to the standard list in one pass, and remove the old values. Fourteen spellings of "commercial" become one. Our article on [what data should be required at the point of capture](/insights/what-data-should-be-required-at-the-point-of-capture-and-what-can-wait/) covers how to stop variations creeping back.

## Step five: fill the critical gaps at the source

Missing values are often best fixed by going back to the source. Renewal dates may be in the insurer's system, the policy schedules or the accounting records. Import them rather than asking staff to retype them. Where the information genuinely does not exist, decide what the automation should do when a field is blank: skip the record and add it to an exception list, rather than guessing.

## Step six: separate sensitive content

Free-text fields accumulate things that should not be there, such as identity numbers, health information or bank details. Before an AI feature reads notes, search them for patterns like thirteen-digit numbers and remove or move sensitive content to appropriate, restricted fields. The Protection of Personal Information Act requires that personal information be processed only for its purpose and with appropriate safeguards, and a new AI feature is a new kind of processing that deserves a check.

## Step seven: assign ownership so it stays ready

Data that is cleaned once and left alone decays. Name an owner for each critical field, add validation at the point of entry, and schedule a short monthly check on the measurements you took in step two. Microsoft's [overview of data governance](https://learn.microsoft.com/en-us/purview/data-governance-overview) describes data owners, who manage quality and access for their data, and data stewards, who look after consistency and definitions. In a small business, these can be the same person, but the responsibilities should be explicit. Our guide on [keeping a CRM clean after the clean-up project ends](/insights/how-to-keep-a-crm-clean-after-the-cleanup-project-ends/) describes a sustainable routine.

## A readiness test before go-live

Before switching on the automation, run it against a sample of real records in test mode, or produce a list of what it would have done, and have someone who knows the clients review it. If the reviewer finds more than an occasional error, go back to the field measurements. This step catches problems that counts alone miss, such as a renewal date that is valid as a date but belongs to an old policy.

## Practical next actions

1. Write down the exact automation or AI use you are preparing for and list every CRM field it will read.
2. Define what ready means for each field using completeness, uniqueness, consistency, timeliness, validity and accuracy, and measure the current state.
3. Find and merge duplicate accounts and contacts, and keep duplicate detection switched on for new records.
4. Convert free-text fields that drive automation into controlled lists, fill critical gaps from source systems, and move sensitive content out of notes.
5. Run the automation against a sample in test mode, have someone who knows the clients review the results, and name an owner for each critical field.
