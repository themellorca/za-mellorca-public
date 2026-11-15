---
hub: patterns
record_id: PAT-236
slug: why-staff-create-their-own-lists-because-they-distrust-the-system
title: Why Staff Create Their Own Lists Because They Distrust the System
description: When staff keep a notebook of real stock counts, a private list of correct customer contacts or their own record of what was ordered, the business has a trust problem with its data. The lists are the symptom.
lead: When staff keep a notebook of real stock counts, a private list of correct customer contacts or their own record of what was ordered, the business has a trust problem with its data. The lists are the symptom.
category: Data Quality, Ownership & Governance
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Data Quality, Ownership & Governance
pattern_family: Data Quality, Ownership & Governance
observable_condition: Warehouse staff keep their own stock notes, sales administrators keep a private list of correct customer contacts and buyers track orders in a notebook, because the system figures have been wrong before.
primary_identification: Eroded data trust: repeated experiences of incorrect system data have taught staff to verify everything privately, so the official record is no longer the working record.
commercial_value_dimensions: Duplicated effort, decision quality, automation readiness and operational accuracy
sources:
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Create a business rule in Microsoft Dataverse - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule
  - Manage Dataverse auditing - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing
related:
  - When nobody knows which system holds the correct data | /patterns/when-nobody-knows-which-system-holds-the-correct-data/
  - When nobody owns the definition of a business metric | /patterns/when-nobody-owns-the-definition-of-a-business-metric/
  - When good processes keep failing because of the data fed into them | /patterns/when-good-processes-keep-failing-because-of-the-data-fed-into-them/
summary: When staff keep a notebook of real stock counts, a private list of correct customer contacts or their own record of what was ordered, the business has a trust problem with its data. The lists are the symptom.
layout: plain
---
## Observable condition

At a Rustenburg mining supplies distributor, the stock system shows twelve units of a particular hydraulic fitting. The sales administrator does not quote from it. She phones the warehouse, where the storeman checks a small notebook he keeps in his top pocket. According to the notebook, there are four. He is right.

Elsewhere in the business, the accounts clerk keeps a spreadsheet of customer contacts that are actually correct, because the system contains duplicates and old names. The buyer keeps a list of supplier orders and expected dates, because the purchase order statuses are rarely updated.

Each private list exists because the person who keeps it was once embarrassed by the system's data.

## Realisation

The realisation is that the private lists are not a discipline problem. They are a rational response to unreliable data. Once someone has quoted stock that did not exist, or emailed a contact who left two years ago, they protect themselves by keeping their own version of the truth.

The business now has two sets of records: the official system that nobody fully trusts and the private lists that only their owners can use. Every decision has to pass through a person who knows which one to believe.

**Realisation prompt:** ask staff, without blame, what they check before trusting a number from the system. Their answers map where trust has broken.

## Identification

This is a pattern of eroded data trust. The visible symptom is notebooks, private spreadsheets and phone calls to verify system figures. The common assumption is that staff resist the system or prefer old habits. The structural cause is that the system's data has been wrong often enough, without being fixed at the source, that verification has become part of everyone's job.

It explains why [critical work ends up outside the approved system](/patterns/why-critical-work-ends-up-outside-the-approved-system/), and it is a precondition problem for automation, as discussed in [why an AI tool cannot rescue records your own staff do not believe](/patterns/why-an-ai-tool-cannot-rescue-records-your-own-staff-do-not-believe/).

## Diagnosis

- **Transactions are recorded late or not at all.** Stock moves, returns and status changes happen physically before they happen in the system.
- **Duplicates accumulate.** The same customer or product exists several times, with different details.
- **Nothing validates entries.** The system accepts incomplete or inconsistent data without warning.
- **Errors are corrected privately.** People fix their own list rather than the shared record, so the system never improves.
- **Nobody can see who changed what.** When a figure is wrong, there is no easy way to trace why, so the error repeats.

## Commercial impact

The commercial value at stake is duplicated effort, decision quality, automation readiness and accuracy with customers.

Effort is duplicated. Every private list is maintained alongside the system, so the same information is recorded twice and checked a third time by phone.

Decisions are made on uncertain figures. Managers looking at system reports see numbers the front line does not believe. [The cost of untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/) builds up across purchasing, pricing and planning.

Automation stalls. Automated reorders, customer messages or reports built on distrusted data simply automate the errors, which deepens distrust further.

Customers feel it. Stock promised and not available, or invoices sent to old contacts, are direct consequences. [Why checking is not the same as knowing](/moments/why-checking-is-not-the-same-as-knowing/) captures the strain on the people doing the checking.

## Common misidentification

One misreading is to ban private lists and insist on system use. Without fixing the data, that forces staff to use figures they know are wrong.

Another is a large data clean-up project. Cleaning helps, but if the causes of bad data remain, the system drifts back within months.

A third is to replace the system. A new system fed by the same habits inherits the same distrust.

## Possibility

The possibility is that the official system becomes accurate enough, and visibly enough, that staff stop needing their own lists. Errors are fixed at the source, entries are validated as they are made, duplicates are prevented and changes are traceable. Trust returns because experience shows the system is right.

The tools for this are standard. Microsoft's guidance on [duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) explains how to reduce duplicate records. [Business rules](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule) validate data and show error messages when entries are incomplete or inconsistent. [Auditing](https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing) answers who created or updated a record, when, and what the previous value was, so errors can be traced to their cause.

Duplicate records are a frequent starting point, as covered in [when duplicate records start causing operational problems](/patterns/when-duplicate-records-start-causing-operational-problems/).

## Intervention

Start by collecting the private lists, with the owners' help, and asking what each one corrects. The differences between each list and the system show exactly where the data fails.

Pick the area with the greatest commercial impact, often stock or customer contacts. Trace why the system figure is wrong, such as late capture, duplicates or missing validation, and fix that cause. Then ask the list owner to compare the system with their list for a month.

When the system matches, retire the private list publicly and recognise the person who kept it. Their list was the business's most accurate record; their knowledge should now be in the system.

## Practical next actions

1. Ask staff to share the private lists they keep and what each one corrects.
2. Compare each list with the system and record the differences.
3. Trace the cause of the biggest differences, such as late capture, duplicates or missing validation.
4. Fix causes at the source with validation rules, duplicate detection and timely capture.
5. Turn on change auditing for key records so errors can be traced.
6. Retire each private list once the system has matched it for a month.

## Diagnostic questions

- Which private lists, notebooks or spreadsheets do our staff rely on instead of the system?
- When a system figure is wrong, can we see who changed it and when?
- Are errors corrected in the shared record or only in people's own lists?
- Would staff quote stock or contact a customer based on system data alone?

## Bottom line

Staff create their own lists because experience has taught them the system is wrong. Treat each list as a map of where data fails, fix the causes at source and make changes traceable. When the system proves itself, the lists retire on their own.
