---
hub: impact
record_id: CPS-033
slug: manually-moving-files-between-folders-systems-filing-cost
title: Digital filing by hand: The labour cost of moving files between folders and systems
description: Downloading, renaming and moving files between inboxes, folders and systems is paid filing work that creates duplicates, misfiles and record-keeping risk.
lead: Downloading, renaming and moving files from inboxes to folders and from one system to another is paid digital filing work that creates duplicates, misfiles and record-keeping risk.
category: Business Automation
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Employees manually moving files between folders and systems
primary_cost_mechanism: Labour cost of digital filing, with error and rework cost from misfiles, delayed invoicing and record-keeping risk
sources:
  - Microsoft SharePoint Connector for Power Automate | https://learn.microsoft.com/en-us/sharepoint/dev/business-apps/power-automate/sharepoint-connector-actions-triggers
  - Record keeping - South African Revenue Service | https://www.sars.gov.za/client-segments/record-keeping/
  - Section 14 Retention and restriction of records - POPIA | https://popia.co.za/section-14-retention-and-restriction-of-records/
related:
  - From inbox to system by hand: The labour cost of retyping emails | /impact/copying-email-details-into-business-systems-admin-cost/
  - Creating the same documents by hand: The labour cost of repeat paperwork | /impact/same-documents-created-by-hand-repeat-paperwork-cost/
  - Sending routine reminders by hand: The payroll cost of repetitive follow-up | /impact/manual-routine-reminders-repetitive-follow-up-payroll-cost/
summary: Downloading, renaming and moving files from inboxes to folders and from one system to another is paid digital filing work that creates duplicates, misfiles and record-keeping risk.
layout: plain
---
## The tolerated pain: the filing cabinet moved online, the filing clerk did not leave

Many businesses went paperless years ago and still employ people to file. The difference is that the filing now happens on screen. A supplier invoice arrives by email, so someone downloads the PDF, renames it, saves it to the finance folder and uploads it to the accounting system. A signed delivery note comes back from a driver as a photo, so someone saves it, renames it and moves it into the customer's job folder. Scanned contracts land in a shared scanner folder and wait for someone to sort them. Month-end reports are exported from one system and copied into another team's folder.

Each of these moves takes a minute or two. Together they can add up to a part-time job, spread across finance, admin, operations and sales. Because the work is invisible and every move feels trivial, few businesses ever ask whether a person needs to be the one carrying files from place to place.

This is related to, but different from, the cost of [employees searching for files](/impact/employees-searching-for-files-lost-productivity-cost/). Searching is the cost of poor filing. This article is about the cost of the filing itself, and the errors it introduces when people act as the connection between systems. Mellorca's pattern on [staff becoming the integration between platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/) describes the wider version of the same problem.

## Why businesses tolerate it

- **It looks like housekeeping.** Moving files feels like tidying rather than work that has a cost.
- **Folder structures depend on judgement.** Staff decide where each file belongs, so the business assumes the step needs a person.
- **Systems do not share files.** Email, the shared drive, the accounting package and the job system each hold their own copies, and nobody owns the connections between them.
- **Naming rules are informal.** Without a consistent naming convention, automation seems impossible.
- **The volume grew slowly.** A task that once took ten minutes a day has become two hours, but nobody noticed the change.

## Operational symptoms

- The same document exists in an inbox, a downloads folder, a shared drive and a business system, with different names.
- Files are saved to the wrong client, job or month and are found only when someone needs them urgently.
- Scanner and download folders contain hundreds of unsorted files waiting for someone to deal with them.
- Staff keep personal copies because they do not trust the shared folder to be complete.
- When the person who files is away, documents pile up and downstream work, such as invoicing or payment, waits.
- Nobody can say with confidence which copy is the record of a transaction.

## How the pain becomes money

- **Labour cost.** Paid time spent downloading, renaming, moving, uploading and checking files.
- **Error and rework cost.** Misfiled documents lead to wrong invoices, payments against the wrong supplier record, missing proof of delivery in disputes and time spent searching and correcting.
- **Delay cost.** Invoicing, payments and job close-out wait for files to reach the right place, which slows cash flow.
- **Risk exposure.** Duplicate copies of personal information spread across inboxes, local drives and shared folders, making it harder to control access and retention.
- **Storage and clean-up cost.** Duplicates consume storage and make migrations and archive clean-ups slower and more expensive.

## A transparent cost model

The figures below are illustrative assumptions for a business handling a moderate volume of documents. Replace them with your own counts and timings.

| File movement | Files a month | Minutes each | Hours a month |
| --- | --- | --- | --- |
| Supplier invoices from email to folder and accounting system | 400 | 2 | 13.3 |
| Proofs of delivery and job photos to job folders | 600 | 1.5 | 15 |
| Scanned contracts and forms sorted and renamed | 150 | 3 | 7.5 |
| Reports exported and copied between teams | 60 | 5 | 5 |
| Finding and correcting misfiled documents | – | – | 6 |

**Total:** about 47 hours a month, or roughly 560 hours a year. At an illustrative loaded cost of R230 an hour, that is about R129,000 a year in direct labour, before counting delayed invoicing or disputes lost for want of a document.

Not every move can be automated, and some files genuinely need a person to decide where they belong. The model is a way to see which movements are high volume and rule-based, because those are the ones worth tackling first.

*Illustrative example.* A Johannesburg logistics company received signed proofs of delivery as photos from drivers on WhatsApp. An administrator saved each one, renamed it with the waybill number and moved it into the customer's monthly folder before invoicing could proceed. When the administrator was on leave over a December peak, invoicing for several large customers slipped by more than a week. The business later moved delivery capture into its dispatch app, which stored each proof against the waybill record automatically.

## When it becomes commercially urgent

- invoicing, payment or job close-out regularly waits for files to be filed;
- a dispute or audit could not be resolved because a document was missing or misfiled;
- scanner or download folders have become permanent backlogs;
- you are migrating to a new document system and face moving years of duplicates;
- document volume is rising with growth, and filing is becoming someone's full-time job.

## What better looks like

### Capture once, at the right place

The best file movement is the one that never happens. Where possible, documents should be captured directly into the system that owns the record: delivery proofs into the dispatch or job system, supplier invoices into the accounting or payables tool, signed contracts into the contract record. That removes the inbox-to-folder-to-system relay.

### Automate the rule-based moves

Where files must move, rules can do it. Microsoft's documentation for the [SharePoint connector](https://learn.microsoft.com/en-us/sharepoint/dev/business-apps/power-automate/sharepoint-connector-actions-triggers) in Power Automate lists triggers such as *When a file is created (properties only)* and actions including *Move file*, *Copy file* and *Create file*, which can file documents based on their properties. The same documentation notes practical limits: moving a file between libraries does not change its metadata and does not trigger flows in the destination library, and flows may batch several changes into one run. Designs need to allow for these behaviours rather than assume instant, one-for-one processing.

### Agree naming and ownership

Automation needs consistency. Agree a naming convention and a small set of document types, and decide which system is the official home for each. Mellorca's guide on [deciding what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) covers how to make that choice.

### Respect retention rules

Fewer copies also make compliance easier. SARS states that taxpayers who submit returns must generally keep records for five years from the date of submission, longer if an audit, objection or appeal is open, and that records may be kept electronically in a form prescribed by the Commissioner. Section 14 of POPIA requires that personal information is not kept longer than necessary unless a lawful exception applies, and that it is deleted or de-identified when no longer needed. Both are far easier to manage when each document has one official home rather than four copies.

## Practical steps

1. List the file movements staff make every week, with the source, destination and volume of each.
2. Identify which are rule-based (the destination is clear from the file or its sender) and which need judgement.
3. Agree a naming convention and an official home for each main document type.
4. Redirect capture into the owning system for the highest-volume document first.
5. Automate the remaining rule-based moves, with an exceptions folder for files the rules cannot place.
6. Clear existing backlog folders and remove duplicate copies in line with your retention policy.

For practical help designing and building these flows, see Mellorca's [business automation](/services/business-automation/) service.

## Bottom line

Manual digital filing is labour the business pays for every day, and it produces duplicates, misfiles and delays that cost more than the minutes it takes. Capturing documents in their owning system, automating rule-based moves and keeping one official copy turns filing from a hidden job into a background process, and makes record-keeping obligations easier to meet.
