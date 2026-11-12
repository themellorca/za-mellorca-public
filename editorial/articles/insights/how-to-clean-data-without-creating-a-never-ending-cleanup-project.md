---
hub: insights
record_id: INS-233
slug: how-to-clean-data-without-creating-a-never-ending-cleanup-project
title: How to Clean Data Without Creating a Never-Ending Cleanup Project
description: A data clean-up that only treats symptoms has to be repeated forever. Define the finish line by use, fix how the mess gets in, and clean in repeatable batches.
lead: A data clean-up that only treats symptoms has to be repeated forever. Define the finish line by use, fix how the mess gets in, and clean in repeatable batches.
category: Data Quality
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Data Quality
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
related:
  - How Manual Data Entry Creates Downstream Problems | /insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/
  - How to Reduce Re-Entry of the Same Information Across Systems | /insights/how-to-stop-the-same-information-being-typed-into-several-systems/
  - Why Automation Projects Fail After the Demo | /insights/why-automations-that-worked-in-the-demo-stop-working-in-production/
summary: A data clean-up that only treats symptoms has to be repeated forever. Define the finish line by use, fix how the mess gets in, and clean in repeatable batches.
layout: plain
---
A Cape Town training company decides its customer list is a mess. Duplicates, missing phone numbers, three spellings of the same school. It books a team member for two weeks to fix it. The list looks excellent in March. By September, new duplicates have appeared, a second spreadsheet has taken root in the sales team, and someone proposes another clean-up. The project never ends because the work was aimed at the data and not at the way the data gets made.

Cleaning data is necessary, but a clean-up on its own is a repair to a leaking pipe with the tap still running. This article describes how to clean the data you have, stop the mess recurring, and know when to stop.

## Why clean-up projects never finish

Three habits turn a tidy-up into a permanent fixture.

The first is vague scope. "Clean the data" has no edge, so every fixed problem reveals another. The second is treating symptoms. The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) observes that work on data quality is often reactive, and that where problems are found the symptoms are often treated instead of the cause, which leads to ineffective improvements and wasted resources. It argues instead for work that is proactive, evidence-based and targeted. That is a useful standard for any business, not only a public body. The third habit is aiming at perfection. The same document is explicit that there is no such thing as perfect quality data, and asks for a culture of continuous improvement instead. A project that waits for perfect will never close.

The fix is to define the finish line in terms of use, not tidiness. Data is clean enough when the people and systems relying on it can do their jobs without workarounds. The idea is explored further in [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/).

## Start from the decisions, not the dataset

Before touching a single record, write down three or four things the business does that depend on this data. For a customer list, that might be sending monthly statements, calling renewal prospects and reporting revenue by region. For each, list the fields it needs and what "usable" means for each field.

A statement run needs a valid email address or postal address and a correct account name. A renewal call needs a phone number and the date the current agreement ends. Regional reporting needs a consistent province. Fields no process uses, such as the second line of a decades-old address, can wait or be ignored entirely. This one step usually cuts the scope by more than half, and it gives the project an honest end: when those fields are usable for those purposes, you are done.

## Fix the source before you scrub the stock

Every messy field was created by a specific moment: a form that accepts free text for a province, an import that does not check for existing records, a salesperson who types a new contact because finding the old one is slow. Trace the five or six worst problems back to the point of entry and ask what let them in.

Typical controls cost little:

- **Dropdowns instead of free text** for provinces, industries, lead sources and statuses.
- **Required fields at the right moment**, such as an agreement end date before a deal can be marked won.
- **A duplicate check on creation**, matching on email address or company registration number before a new record is saved.
- **One named owner per field**, so there is someone to ask when a value looks wrong.

Understanding how the errors arrive is covered in [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) and [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/). Put the entry controls in place first. If you clean before you control, you are merely resetting a counter that will start climbing again.

## Clean in a repeatable way

For the data already in your systems, avoid one-off hand edits where you can. Manual fixes cannot be repeated, cannot be checked and leave no record of what changed. A better approach is to record the cleaning steps as a repeatable routine. Microsoft's documentation on [Power Query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) describes the idea well: you define a process that connects to the data, reshapes it and saves the transformation steps as a query you can refresh later, so the shaping is not a one-off. Whether you use that tool, a script or a documented spreadsheet procedure, the principle is the same. Write the rules down as steps, run them, and keep them so they can run again next quarter on fresh data in minutes.

Typical rules include trimming stray spaces, standardising capitalisation, converting dates to a single format, mapping known variants such as "Gauteng", "GP" and "Gautng" to one value, and flagging records that fail a test instead of deleting them. Flagging is important. Deleting a record you cannot confidently identify as a duplicate is a mistake that cannot be undone.

## Work in batches with a rollback

Do the clean-up in small batches, such as one region or one customer segment at a time. Before each batch, export a copy of the affected records. After it, spot-check twenty at random and compare against the export. If something went wrong, you can restore a small set instead of unpicking the whole list. This also lets the team keep working in the system while you progress, which matters because the data is live. The same approach for a customer system is laid out in [a safe sequence for cleaning up a CRM while the team keeps working](/insights/a-safe-sequence-for-cleaning-up-a-crm-while-the-team-keeps-working/).

## Know what the law expects

For personal information, accuracy is not just good housekeeping. Section 16 of the Protection of Personal Information Act, in the [published text of the Act](https://www.gov.za/documents/protection-personal-information-act), requires a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary, with regard to the purpose it is used for. Notice the qualifiers: reasonably practicable, and tied to purpose. That supports the approach above. You are expected to keep the data fit for what you use it for, and you are not expected to chase every theoretical imperfection.

## Finish properly: hand over to routine upkeep

A clean-up ends when it becomes a habit. Before you close the project, set up three things.

1. A short monthly check that counts the problems you cleaned: duplicates created, required fields blank, invalid values. If a number rises, you find out in weeks, not years.
2. A named person for each key field who corrects exceptions as they appear.
3. A written list of the rules, so that the next person does not have to rediscover them.

Data quality also slips as a business grows, with more people, more systems and more shortcuts. [Why business data quality declines with growth](/insights/why-business-data-quality-declines-with-growth/) explains why the monthly check matters most after a hiring spurt or a system change.

## Practical next actions

1. List three or four business activities that depend on your most important dataset, and for each write the fields needed and what usable means.
2. Pick the five worst data problems and trace each to the form, import or habit that created it.
3. Fix those entry points first with dropdowns, required fields and a duplicate check on creation.
4. Write your cleaning rules as repeatable steps, flag doubtful records instead of deleting them, and export a copy before every batch.
5. Set a finish line in plain terms, such as "no blank agreement end dates on active accounts", and close the project when you reach it.
6. Book a monthly fifteen-minute check on the same measures so the project stays finished.
