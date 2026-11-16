---
hub: insights
record_id: INS-408
slug: when-a-spreadsheet-should-become-a-database
title: When a Spreadsheet Should Become a Database
description: Spreadsheets are excellent for analysis but weak at holding shared, related records over time. These are the signs that the data has outgrown the grid, and how to move it safely.
lead: Spreadsheets are excellent for analysis but weak at holding shared, related records over time. These are the signs that the data has outgrown the grid, and how to move it safely.
category: Data Management
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Data Management
sources:
  - Excel specifications and limits - Microsoft Support | https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3
  - Horror Stories - European Spreadsheet Risk Interest Group | https://eusprig.org/research-info/horror-stories/
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - How to Choose Where Business Data Should Live | /insights/how-to-choose-where-business-data-should-live/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - Why shared inboxes become operational bottlenecks | /insights/why-shared-inboxes-become-operational-bottlenecks/
summary: Spreadsheets are excellent for analysis but weak at holding shared, related records over time. These are the signs that the data has outgrown the grid, and how to move it safely.
layout: plain
---
A Bloemfontein training provider tracks its learners in a workbook. One tab lists learners, another lists courses, a third lists assessments, and a fourth holds invoices. Lookups link them together. Five people edit it, sometimes at the same time. When a learner changes her surname after marriage, someone updates the learner tab but not the assessments tab, and her certificate prints with the old name. When the funding body asks how many learners completed a module in the last two years, it takes the administrator two days to produce an answer she is not sure of.

Nothing is wrong with spreadsheets. They are one of the most useful business tools ever made. But this workbook has quietly turned into a database without any of the protections a database provides. Knowing when to make that move deliberately, and how, saves a great deal of rework and risk.

## What spreadsheets do well, and what they do not

Spreadsheets are excellent for calculation, modelling, one-off analysis and lists that one person owns. Their flexibility is the point: anyone can add a column, change a formula or paste in data.

A database is built for a different job: holding records that many people and processes share, that relate to one another, and that need to stay consistent over time. It enforces structure. A learner exists once, and every assessment points to that one record. Change the surname in one place and it is right everywhere.

The trouble starts when a spreadsheet is asked to do the database's job. Our article on [when a spreadsheet becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/) describes the broader shift. The signs below are the specific structural ones that point towards a database.

## Sign one: the same thing is recorded in several places

If a customer, product, learner or asset appears on several tabs or in several files, and has to be kept in step by hand, the data is relational. Lookups help, but they break when someone sorts a range, inserts a column or types a name slightly differently. A database stores each entity once and links to it, which removes a whole class of errors.

## Sign two: several people edit at once

Modern cloud spreadsheets handle simultaneous editing better than they used to, but they still cannot stop two people overwriting each other's logic, deleting a row someone else needed, or changing a formula that a report depends on. When more than two or three people regularly update the same file, you need record-level editing with rules about who can change what.

## Sign three: the data keeps growing

Spreadsheets have hard limits. Microsoft's published [Excel specifications and limits](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) put a worksheet at 1,048,576 rows by 16,384 columns. Most businesses will hit performance problems long before that: slow recalculation, files that take minutes to open, and crashes during saves.

Older formats are far more constrained, and that can matter. The European Spreadsheet Risks Interest Group's [horror stories collection](https://eusprig.org/research-info/horror-stories/) records how, in 2020, Public Health England lost track of nearly 16,000 positive Covid test results because an automated process loaded data into templates using the old XLS format, which holds only about 65,000 rows. The data did not fail loudly. It was silently cut off. The same collection documents many smaller incidents in finance, pricing and reporting. If losing a few rows would harm customers or money, the data needs something that rejects or flags problems rather than truncating them.

## Sign four: you need history

A spreadsheet shows the current value. It does not reliably show who changed it, when, or what it was before. If you are regularly asked "what was this customer's credit limit in March?" or "who changed this price?", you need an audit trail. Databases and the business applications built on them record changes as a matter of course.

## Sign five: other systems or processes depend on it

When an automation reads from the sheet, a report pulls from it, or an integration writes into it, the sheet has become part of your systems. A renamed column or moved tab can break all of them without warning. A database offers a stable structure that other systems can connect to safely. Our guide on [what a system of record is](/insights/what-a-system-of-record-is-and-why-it-matters/) explains why the authoritative copy of important data needs that stability.

## Sign six: it holds personal information

Spreadsheets of learners, employees, patients or customers are easy to copy, email and leave on laptops. The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) sets minimum conditions for processing personal information, including keeping it secure. A database-backed tool lets you restrict access by role, log who viewed or changed records, and avoid dozens of uncontrolled copies.

## What "database" means for a smaller business

Moving off a spreadsheet rarely means hiring a developer to build something from scratch. The realistic options are:

- **A purpose-built application** for the job, such as a CRM, learner management system, asset register or job management tool, which has the database built in.
- **A no-code database or list tool** that looks like a spreadsheet but enforces field types, relationships and permissions.
- **Tables inside a platform you already own**, such as custom objects in your CRM or ERP.
- **A custom database with a simple front end**, for genuinely unusual needs.

Start by checking whether a system you already pay for can hold the data properly. Our article on [how databases support everyday business operations](/insights/how-databases-support-everyday-business-operations/) explains the underlying concepts in plain language.

## How to make the move

First, map the entities. List the things the spreadsheet tracks, such as learners, courses and assessments, and how they relate. Each entity becomes a table; each relationship becomes a link. Second, clean the data before moving it: remove duplicates, standardise names and codes, and fill required fields. Third, decide which columns are real data and which are calculations or notes; calculations can usually be rebuilt as reports.

Then run the two side by side for a short period, with the database as the record and the spreadsheet frozen as read-only. Finally, give people what they valued about the spreadsheet: an easy export for analysis, a grid view for quick edits, and a way to request new fields. If the new tool feels rigid, people will start a new side spreadsheet within weeks. Our article on [turning side spreadsheets into system improvements](/insights/turning-side-spreadsheets-into-crm-improvements/) shows how to treat those as signals rather than rebellion.

## When to leave the spreadsheet alone

Not every important spreadsheet needs to move. A financial model one analyst owns, a budget workbook rebuilt each year, or a one-off analysis are all good uses of a spreadsheet. The test is whether the file holds shared, ongoing records that other people and processes rely on. If it does, it has become a database already. The only question is whether it gets to be a good one.

## Practical next actions

1. List the spreadsheets that more than two people update regularly, or that other reports, automations or integrations depend on.
2. For each, check the six signs: repeated entities, simultaneous editing, growth, need for history, dependent systems and personal information.
3. For the highest-scoring file, map its entities and relationships on a single page.
4. Check whether a system you already own can hold that data with proper fields, links and permissions before buying anything new.
5. Clean the data, move it, freeze the old file as read-only, and provide an easy export so people keep the flexibility they valued.
