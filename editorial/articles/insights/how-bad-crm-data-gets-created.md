---
hub: insights
record_id: INS-079
slug: how-bad-crm-data-gets-created
title: How Bad CRM Data Gets Created
description: Poor CRM data is rarely the work of one careless person. Six mechanisms, from free-text fields to silent integrations, explain how it gets in, and each needs a different fix.
lead: Poor CRM data is rarely the work of one careless person. Six mechanisms, from free-text fields to silent integrations, explain how it gets in, and each needs a different fix.
category: Data Quality
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Data Quality
sources:
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
related:
  - How Duplicate Data Gets Into Business Systems | /insights/how-duplicate-data-gets-into-business-systems/
  - How Repetitive Admin Work Accumulates Across a Team | /insights/how-repetitive-admin-work-accumulates-across-a-team/
  - How to Map the Flow of Information Between Business Systems | /insights/how-to-map-the-flow-of-information-between-business-systems/
summary: Poor CRM data is rarely the work of one careless person. Six mechanisms, from free-text fields to silent integrations, explain how it gets in, and each needs a different fix.
layout: plain
---
Ask a sales team why the CRM is full of duplicates, outdated phone numbers and contacts with no company attached, and the usual answer is that people are careless. That explanation is comfortable and mostly wrong. Bad CRM data is rarely the result of one careless person. It is the predictable output of how data enters the system, how little checking happens on the way in, and how many other systems quietly write into it.

Understanding the mechanisms matters because each one needs a different fix. Telling staff to be more careful addresses almost none of them.

> Data quality is decided at the point of entry and at every point of change. Cleaning afterwards treats the symptom while the source keeps running.
>

## Mechanism 1: free-text fields where a choice should be

When a field accepts anything, it receives everything. "Johannesburg", "Jhb", "JHB " and "Joburg" are the same place to a person and four different values to a report. Industry, lead source, region and status fields are the usual offenders. The result is filters that miss records and reports that disagree with each other, a theme developed in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/). The fix is a controlled list for any field that will later be filtered, counted or used to trigger an action.

## Mechanism 2: duplicates created at the front door

Duplicates arise whenever a record can be created without first checking whether it already exists. Two salespeople meet the same prospect at an expo. A web form creates a new contact while the existing one sits under a slightly different email address. An import from a spreadsheet adds every row as new. Microsoft's documentation for Dynamics 365 and Power Platform includes duplicate detection rules precisely because this is a default behaviour of record-based systems, not an exception. More detail on how the problem spreads is in [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/).

## Mechanism 3: required fields that people fill dishonestly

Make a field mandatory without explaining why, and people supply the quickest value that lets them save the record. A mobile number becomes 0000000000. A deal value becomes R1. The system is satisfied, and the data is worse than an honest blank, because it looks complete. If a field is mandatory, someone must be able to say who uses it and what decision depends on it. If nobody can, remove the requirement rather than collecting fiction.

## Mechanism 4: the system asks for effort and returns nothing

People maintain data when maintaining it helps them. When a salesperson sees no benefit from logging a call, the log is late, thin or missing. The CRM then reflects what people had time to type, not what happened. This is why adoption and data quality are tied together, as described in [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/). The most reliable improvement is to make the CRM the quickest way to get something done, such as generating a quote, rather than a place where work is reported after the fact.

## Mechanism 5: other systems writing into the CRM

A modern CRM is rarely edited by humans alone. Marketing tools, website forms, accounting integrations and enrichment services all write to it. Each has its own idea of what a correct value is. When two systems both believe they own the customer's address, the later write wins, and nobody can say which was right. This is the ownership problem in [what happens when two systems both think they own the same data](/insights/what-happens-when-two-systems-both-think-they-own-the-same-data/). Every field that arrives by integration needs a designated owner and a rule for conflicts.

## Mechanism 6: records that age silently

People change jobs, companies change addresses, and mobile numbers lapse. A record that was accurate when entered becomes wrong without anyone touching it. Without a review cycle, the share of stale records grows steadily, and the CRM drifts toward being the expensive address book described in [how a CRM turns into an expensive address book](/insights/how-a-crm-turns-into-an-expensive-address-book/).

## Why this is also a compliance matter

For South African businesses, data quality is not only a commercial concern. Section 16 of the Protection of Personal Information Act sets out the quality of information requirement: a responsible party must take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. A CRM full of outdated or duplicated personal details makes that duty harder to demonstrate. A person who asks what you hold about them, or asks for a correction, should not trigger a search across five versions of the same record.

## What to do about it, in order

1. **Measure first.** Take a sample of 100 records and count how many have a duplicate, a missing key field, or a clearly wrong value. A baseline turns an opinion into a number you can improve.
2. **Find the entry points.** List every route by which a record can be created or changed: manual entry, forms, imports, integrations. Rank them by volume. Usually two or three account for most of the damage.
3. **Fix the top entry point, not the data.** Add a dropdown, a duplicate check or a required confirmation at the source with the largest share of errors.
4. **Assign field owners.** For each key field, name a person who decides what a valid value is and who may change it.
5. **Clean once, after the fixes.** A bulk clean-up before the entry points are repaired is wasted effort; the same problems return within months.
6. **Schedule a light review.** A quarterly pass over the most valuable records keeps ageing in check.

The broader view of why this matters beyond sales is in [poor data is an operations problem, not just a data problem](/insights/poor-data-is-an-operations-problem-not-just-a-data-problem/).

## An illustrative example

The following is a hypothetical case. A Cape Town training company with eight salespeople finds that campaign emails keep going to the wrong contact and that the monthly pipeline report never matches finance. A sample of 100 records shows 19 duplicates, 31 with no industry, and "lead source" holding 44 different spellings across a few hundred records.

Tracing the entry points shows that the website form and a quarterly spreadsheet import created most of the duplicates, while the free-text lead source field accounted for the inconsistency. The company adds a duplicate check on the form, converts lead source to a short list, and makes the import template match against email address before creating a record. Only then does it merge the existing duplicates. Three months later, a repeat sample shows duplicates down to a handful, and the pipeline report agrees with finance within an explainable difference. Nobody was told to be more careful.

## The principle to hold on to

Bad CRM data is a design outcome. Every field, form, import and integration either protects the record or lets damage in. When a business treats data quality as a property of its processes rather than a character flaw in its staff, the problem becomes tractable, and the CRM starts to earn the trust that the team withdrew from it. If your team has already stopped believing the numbers, why teams stop trusting the CRM describes how that happens and how it is reversed.
