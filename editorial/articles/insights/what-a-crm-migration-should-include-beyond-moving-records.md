---
hub: insights
record_id: INS-094
slug: what-a-crm-migration-should-include-beyond-moving-records
title: What a CRM Migration Should Include Beyond Moving Records
description: Copying contacts and deals into a new CRM is the easy part. The automations, reports, integrations, permissions and habits around the old system also have to move, or be deliberately retired.
lead: Copying contacts and deals into a new CRM is the easy part. The automations, reports, integrations, permissions and habits around the old system also have to move, or be deliberately retired.
category: Systems Implementation
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Systems Implementation
sources:
  - Manage configuration and migration data for Dynamics 365 projects - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management-configuration-data-migration
  - CRM data migration to Dataverse: Key insights and best practices - Power Platform | https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/data-migration/
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - What Belongs in an Implementation Plan | /insights/the-parts-of-a-sound-systems-implementation-plan/
  - How to scope a systems implementation properly | /insights/how-to-scope-a-systems-implementation-properly-before-you-sign/
  - How to Prevent Requirements From Growing Without Control | /insights/how-to-prevent-requirements-from-growing-without-control/
summary: Copying contacts and deals into a new CRM is the easy part. The automations, reports, integrations, permissions and habits around the old system also have to move, or be deliberately retired.
layout: plain
---
A financial advisory practice in Stellenbosch moves from an older CRM to a new one. The data migration goes smoothly: every client, contact and policy record arrives in the new system, and the counts match. On the first Monday, the problems start. Birthday and review reminders no longer go out, because they were automations in the old system. The weekly adviser activity report does not exist. The link that created a client file in the document system has stopped working. Two administrators can see records they should not, and one adviser cannot see her own clients.

The records moved. The system around them did not. A CRM is not just a database of customers; it is a set of rules, automations, reports, connections, permissions and habits built up over years. A migration plan that covers only the records will leave most of that behind.

## Plan the migration as a scope, not a file transfer

Microsoft's implementation guidance on [managing configuration and migration data](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management-configuration-data-migration) separates two kinds of data. Configuration data sets up how the system behaves, such as currencies, tax codes and parameters. Migration data is what you move from the legacy system, such as customers, products and open transactions. It recommends defining a migration strategy before the project starts, covering scope, tools, sequence and dependencies, roles and responsibilities, and the activities before and after cutover, and testing the migration more than once before go-live.

Use that as a frame, then add everything else the old CRM does. A complete migration scope usually has eight parts.

## 1. Records, but only the ones worth moving

Decide what to move rather than moving everything. Active customers, open opportunities, open cases and recent history are usually essential. Records untouched for years, duplicates and test data are candidates for archiving instead. Microsoft's Power Platform guidance on [CRM data migration](https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/data-migration/) lists the common challenges, including schema mismatches, data quality, relationships between tables and security and compliance, and advises identifying and excluding nonessential data early. Clean before you move, as we describe in [a safe sequence for cleaning up a CRM](/insights/a-safe-sequence-for-cleaning-up-a-crm-while-the-team-keeps-working/); migrating duplicates simply transfers the problem.

## 2. Relationships and history

Contacts link to companies, opportunities to contacts, activities to opportunities and cases to products. Map these relationships explicitly and test that they survive. Decide how much activity history to bring across. Emails and notes are often what users value most, and they are easy to lose in a mapping.

## 3. Automations and rules

List every workflow, assignment rule, reminder, scheduled email, validation rule and calculated field in the old system. Many were built years ago by people who have left. For each, decide whether to rebuild it, replace it with something better or deliberately retire it. Tell users what is being retired so they do not discover it by missing a task.

## 4. Reports and dashboards

Inventory the reports people actually use, not every report that exists. Ask each team which numbers they look at weekly and monthly. Rebuild those in the new system before go-live, and compare their outputs against the old system on the same data during testing. Definitions often change subtly when reports are rebuilt.

## 5. Integrations

The CRM probably exchanges data with email, the accounting system, the website, marketing tools and document storage. Each connection must be rebuilt, tested and switched over in the right order. Document each one before you start, using the approach in [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/). Pay particular attention to identifiers: if the accounting system refers to customers by an ID from the old CRM, that link needs a mapping.

## 6. Permissions and access

Recreate roles, teams and record visibility deliberately, rather than giving everyone broad access to avoid complaints in the first week. A migration is a good moment to review who should see what. If you hold personal information about clients, South Africa's [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) requires appropriate safeguards; that applies to the new system's access settings, to any staging copies made during migration and to the old system after cutover.

## 7. People and habits

Users have built routines around the old system: where they look first, which fields they fill in, which shortcuts they use. Training should focus on the new versions of those routines, using real examples from their own work, rather than a tour of features. Identify a few people in each team to help colleagues in the first weeks.

## 8. Cutover and the old system

Plan the cutover in detail: when data entry stops in the old system, when the final extract is taken, how long the new system is checked before users start, and what happens if something goes wrong. Decide how long the old system stays available read-only, who can access it and when it will be switched off and its data archived or deleted. An old CRM left running indefinitely becomes a second source of truth and an unmanaged store of personal information.

## After go-live is part of the migration

Expect problems in the first month and plan for them: a daily check-in during the first week, a simple way for users to report issues and a named person to triage them. Many implementation problems only appear in live use, a pattern we cover in [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/). Keep a log of issues and fixes; it becomes the documentation for the new system.

If you have not yet committed to replacing your CRM, our guide on [when to reconfigure a CRM and when to replace it](/insights/when-to-reconfigure-a-crm-and-when-to-replace-it-a-decision-guide/) may save you the migration altogether.

## Practical next actions

1. Write a migration scope covering records, relationships, automations, reports, integrations, permissions, training and cutover, with an owner for each.
2. Decide which records to move, archive or delete, and clean duplicates before the first test migration.
3. Inventory every automation and rule in the old CRM and mark each as rebuild, replace or retire, telling users about retirements.
4. List the reports teams actually use and compare old and new outputs on the same data during testing.
5. Document every integration and its identifiers, and plan the switch-over order.
6. Run at least two full test migrations, then agree a cutover plan, a read-only period and a date to retire and archive the old system.
