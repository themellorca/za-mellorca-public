---
hub: insights
record_id: INS-087
slug: a-safe-sequence-for-cleaning-up-a-crm-while-the-team-keeps-working
title: How to clean up a CRM without breaking active work
description: A staged, reversible method for removing duplicates, stale records and clutter from a live CRM while salespeople and service staff carry on working.
lead: A staged, reversible method for removing duplicates, stale records and clutter from a live CRM while salespeople and service staff carry on working.
category: Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Operations
sources:
  - Merge records | https://knowledge.hubspot.com/records/merge-records
  - Delete bulk records - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/delete-bulk-records
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Section 14 Retention and restriction of records - POPIA | https://popia.co.za/section-14-retention-and-restriction-of-records/
related:
  - Why sales, operations and service need different views of the same customer | /insights/one-customer-record-three-teams-three-useful-views/
  - Poor data is an operations problem, not just a data problem | /insights/poor-data-is-an-operations-problem-not-just-a-data-problem/
  - How much manual work is hiding inside your business? | /insights/how-much-manual-work-is-hiding-inside-your-business/
summary: A staged, reversible method for removing duplicates, stale records and clutter from a live CRM while salespeople and service staff carry on working.
layout: plain
---
Everyone who has used a CRM for a few years knows it needs a clean-up, and most people who have attempted one have a story about what went wrong. A merge swallowed a customer's open quote. A bulk delete removed contacts that a project team was still emailing. A tidy-up of the "stage" field left half the sales team unable to find their deals on Monday morning.

The difficulty is that a CRM is not an archive. It is a working tool, and people are using it while you are trying to repair it. A safe clean-up therefore has two goals: improve the data, and avoid harming anyone's live work in the process. This article sets out a staged method that achieves both, based on a simple principle: change the least reversible things last, and always with a way back.

## Before you touch anything

### Decide what "clean" means

Write down the three or four problems you are trying to fix. Typical ones include duplicate customers, contacts who have left, deals that will never close, inconsistent formats and fields nobody uses. Without a target, a clean-up expands indefinitely. The article on [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/) can help you set a realistic standard.

### Find out why the mess exists

If you clean without fixing the causes, the CRM will be messy again within months. Our pieces on [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) and [why business data quality declines with growth](/insights/why-business-data-quality-declines-with-growth/) describe the common causes. Plan the preventive changes at the same time as the clean-up.

### Name an owner and tell the team

One person leads, with authority to say no to side requests. Tell staff what will change, when, and how to report anything that looks wrong. Surprises are what cause the loudest complaints.

### Take a full backup

Export all the data you can, in a form you can read, and store it somewhere safe before the first change. Test that the export actually opens and that you can see the data you expect. A backup you have never looked at is a hope, not a safeguard.

## A safe sequence, from least to most risky

### Stage 1: Look, do not change

Run reports that count the problems: how many duplicates by email or company number, how many contacts with no activity for two years, how many deals open past their expected close date, how many records missing key fields. Share the numbers with the team. This stage changes nothing and often reveals that a few sources cause most of the trouble.

### Stage 2: Prevent new mess

Before you remove the old clutter, stop creating more. Turn on or tighten duplicate detection, make a few fields mandatory where they genuinely matter and use picklists in place of free text for things like industry or region. Microsoft's guidance on [duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) notes that default rules cover only accounts and contacts, and recommends basing criteria on a field with unique values, such as email. It also notes that the number of published rules per record type is limited. Choose a small number of matching rules well rather than many loose ones.

### Stage 3: Standardise safe fields

Fix formats first: phone numbers, capitalisation, province names, country, job titles. These changes are mechanical and rarely affect business meaning. Do them in batches, spot-check a sample of records after each batch and keep a log of what was done.

### Stage 4: Tag, then act

For records you think should be merged, archived or deleted, do not act yet. Add a temporary tag or status such as "clean-up: review" and generate a list. This is the most important habit in the whole method. It separates deciding from doing, and it gives the people who own those records a chance to say "wait, that one is live."

### Stage 5: Archive before deleting

Use an "inactive" or "archived" status that removes records from daily views but keeps them available, in preference to deleting them. Old contacts and closed deals provide history that sales and service staff sometimes need, and archived data is easy to bring back.

If you do delete, understand your platform's behaviour. Microsoft's documentation for bulk deletion describes a permanent deletion option under which records cannot be recovered, and advises using it judiciously. It also explains that, where deleted-record retention is enabled, administrators can restore records deleted by a bulk job within a configured time frame, and it recommends developing and testing bulk deletion jobs in a sandbox environment, validating them in preproduction and then importing to production. The note that imported jobs run immediately on import is a good reminder to plan the timing.

### Stage 6: Merge carefully, in small batches

Merging is where most harm occurs. HubSpot's documentation is explicit that merges cannot be undone. It also explains what the surviving record keeps: generally the primary record's values, with the secondary record's value used where the primary is empty, the oldest create date and combined activities and associations. The secondary record is removed from workflows and static segments, which may matter if it was part of an active sequence. There are also limits, including that records with a large combined number of prior merges cannot be merged.

These details suggest a safe approach:

1. Merge a pilot batch of ten to twenty pairs, then check each result with its owner.
2. Decide the rule for the "primary" record in advance, usually the one with the most complete data and the longest history.
3. Check for open deals, quotes, tickets and sequences on both records before merging.
4. Record the identifiers of both records in your log so that you can trace what was merged. HubSpot notes that merged record IDs remain available as a property, which helps recovery.
5. Do not merge on name alone. Use an identifier such as email, tax number or company registration number.

### Stage 7: Close out stale deals with the owners

Dead deals distort forecasts, but closing them in bulk can erase real opportunities that a salesperson is quietly working. Send each owner a list of their deals with no activity for a set period and ask them to close, update or confirm each one within a week. After that, close the remainder with a note recording the reason. For why this matters, see [why dead deals stay open in the CRM and distort the sales forecast](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/).

## Protect active work during the clean-up

- **Schedule bulk changes for quiet periods.** Evenings and weekends are better than Monday at nine.
- **Avoid changing stage names or field meanings in the middle of the exercise.** If the stages need redesign, treat that as its own piece of work.
- **Pause automations that depend on the data you are changing.** Otherwise a bulk edit can trigger hundreds of unwanted emails or tasks.
- **Keep a visible log** of what changed, when and why, in a place the whole team can read.
- **Give people a single contact for "something went missing".** Fast fixes preserve trust.

## Retention is part of the picture

Clean-up often raises the question of how long to keep old customer data. Section 14 of South Africa's Protection of Personal Information Act says personal information should not be kept longer than needed for the purpose it was collected for, unless an exception applies, such as retention required or permitted by law, a contract or consent.

When the business is no longer authorised to hold a record, it must destroy, delete or de-identify it as soon as reasonably practicable, in a way that prevents it from being reconstructed in an intelligible form. In some situations, such as a disputed accuracy or the need to keep proof, processing must be restricted instead of deleted. So a clean-up should have a retention rule agreed in advance, ideally with advice, and deletion should follow the rule rather than convenience.

## An illustrative timeline

Imagine a Pretoria engineering supplier with about eight thousand contacts. Week one is reporting and agreeing the target. Week two sets up duplicate warnings and standardises formats. Weeks three and four tag candidates and share lists with owners. Week five archives inactive contacts. Weeks six and seven merge confirmed duplicates in small batches, and week eight closes stale deals with owner sign-off. Throughout, salespeople work normally and see only improvements. The project is slower than a one-day purge, and it avoids the Monday morning crisis.

## After the clean-up

Schedule a short data review every quarter, and keep the reports from Stage 1 as a dashboard. A CRM that is maintained a little at a time seldom needs another large clean-up. If trust has already suffered, [why teams stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/) explains how to win it back, and [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/) shows what to keep an eye on.
