---
hub: impact
record_id: CPS-044
slug: certificates-confirmations-standard-letters-typed-by-hand-cost
title: Typing certificates and confirmation letters one by one: The labour cost
description: Certificates, confirmations and letters produced one at a time from records you already hold cost paid hours, invite errors and leave no register.
lead: Certificates, confirmations and standard letters produced one at a time from records the business already holds cost paid hours, invite errors and leave no reliable register of what was issued.
category: Business Automation
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Staff manually produce certificates, confirmations and standard letters one at a time
primary_cost_mechanism: Labour cost of repeatable document production, with correction, verification and integrity risk
sources:
  - Use mail merge for bulk email, letters, labels, and envelopes - Microsoft Support | https://support.microsoft.com/en-us/office/use-mail-merge-for-bulk-email-letters-labels-and-envelopes-f488ed5b-b849-4c11-9cff-932c49474705
  - Using Word templates for bulk communications - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/ui-mail-merge
  - https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf | https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf
related:
  - Creating the same documents by hand: The labour cost of repeat paperwork | /impact/same-documents-created-by-hand-repeat-paperwork-cost/
  - Rebuilding the same report every month: The labour cost of manual reporting | /impact/rebuilding-recurring-reports-by-hand-labour-cost/
  - From inbox to system by hand: The labour cost of retyping emails | /impact/copying-email-details-into-business-systems-admin-cost/
summary: Certificates, confirmations and standard letters produced one at a time from records the business already holds cost paid hours, invite errors and leave no reliable register of what was issued.
layout: plain
---
## The tolerated pain: a record goes in, a document comes out, by hand

Some documents are not really written at all. They are the predictable output of an event the business has already recorded. A learner completes a course, so a certificate is due. An installation passes inspection, so a certificate of compliance is issued. A booking is paid, so a confirmation goes out. An employee asks for proof of employment for a bank, so a standard letter is prepared. Someone leaves, so a certificate of service must be provided.

In each case, the facts are already in a system or a spreadsheet: names, dates, course or job details, reference numbers. Yet in many South African small and mid-sized businesses, an administrator opens a Word file, overwrites the last person's details, adjusts the date, saves it as a PDF and sends it. Then repeats the process for the next one, sometimes dozens of times on the same afternoon.

This differs from the work of drafting proposals or contracts, where content varies from client to client. It also differs from the cost of [formatting documents and spreadsheets by hand](/impact/formatting-documents-spreadsheets-by-hand-cost/) and of [recreating documents that cannot be found](/impact/staff-recreating-lost-documents-duplicated-work-cost/). Here the wording is fixed, the data already exists, and only the act of combining them is manual.

## Why businesses tolerate it

- **The last document works as a template.** Copying it feels efficient, so nobody sees the need for anything better.
- **Volumes arrive in bursts.** End of a course, end of a project, year-end letters: the peaks pass and are forgotten.
- **The documents look important.** A certificate or official letter feels like something a person should prepare and check personally.
- **The data lives in a different place.** Attendance or job records sit in one tool, the template in another, and nobody has connected them.

## Operational consequence

- Documents are issued days or weeks after the event because the administrator is busy.
- Names are misspelt, dates are wrong or the previous recipient's details are left in a field.
- Reissues and corrections become a regular task.
- Nobody can say with confidence how many certificates were issued, to whom, or with which number.
- Verification requests, such as an employer or client asking whether a certificate is genuine, require someone to search folders and inboxes.
- Wording drifts as each person edits their own copy of the template.

Some of these documents carry legal weight. The [Basic Conditions of Employment Act](https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf), for example, entitles an employee on termination to a certificate of service stating their full name, the employer's name and address, the dates of commencement and termination, the job title or description of work, the remuneration at termination and, on request, the reason for termination. Every item is already in the employment record, and every item can be mistyped.

## How the pain becomes money

1. **Production labour:** minutes per document to find the data, edit the template, save, check and send.
2. **Correction labour:** reissuing documents with errors, plus the customer or employee contact that triggered it.
3. **Verification and search labour:** answering "did you issue this?" when there is no register.
4. **Delay cost:** where a document gates something valuable, such as a client's handover or an employee's bond application, late issue has consequences for the relationship. Record these as incidents rather than forcing a rand value.
5. **Integrity risk:** without controlled numbering and a register, forged or altered certificates are harder to detect.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African training and compliance services business. They are not benchmarks. Replace them with your own counts.

| Activity (illustrative) | Assumption | Minutes per month |
| --- | --- | --- |
| Producing certificates and letters | 260 documents × 9 minutes | 2,340 |
| Checking before sending | 260 documents × 2 minutes | 520 |
| Corrections and reissues | 16 documents (about 6%) × 20 minutes | 320 |
| Verification and search requests | 15 requests × 12 minutes | 180 |
| **Total** |  | **3,360** |

3,360 minutes is 56 hours a month. At an illustrative loaded cost of R220 an hour, that is R12,320 a month, or R147,840 a year, spent combining fixed wording with data the business already holds. The figure excludes the commercial effect of late documents, which should be assessed from actual incidents.

As always, released hours are only a saving if they are redirected to useful work or avoid additional staff during peaks.

## Secondary consequences

Manually produced documents tend to be stored as loose PDFs in personal folders or sent items, which makes them hard to retrieve and easy to lose when staff leave. Templates copied from the last document carry forward old logos, outdated accreditation numbers or superseded legal wording. And because each document passes through a person's mailbox, personal information is spread more widely than necessary.

## When this becomes commercially urgent

- Document volume is growing with student numbers, jobs completed or headcount.
- Customers or employees chase for documents that should have arrived automatically.
- A wrong certificate or letter has reached a client, regulator or bank.
- An accreditation body, client or auditor asks for a list of everything issued.
- The person who knows how to produce the documents is about to go on leave.

## What better looks like

The better state treats each standard document as a template plus a data source plus a trigger. The wording is controlled in one approved template. The data comes from the record where it already lives. The document is generated when the event is recorded, or in a batch when many events complete at once, and each issued document is logged with its number, recipient and date.

The basic tools are widely available. Microsoft's support documentation describes [mail merge](https://support.microsoft.com/en-us/office/use-mail-merge-for-bulk-email-letters-labels-and-envelopes-f488ed5b-b849-4c11-9cff-932c49474705) in Word as creating a batch of documents personalised for each recipient, using merge fields that pull data from a source such as an Excel spreadsheet, an Outlook contact list or another database. Business systems take this further: Microsoft's Business Central documentation describes Word templates that use the system's own records as the data source, can generate one document per record, and can be attached to an email directly from the system. Dedicated document generation and e-signature services add numbering, verification links and audit trails where the document's integrity matters.

The deciding question is the one raised in [why a task still needs a person every time](/patterns/why-does-this-task-still-need-a-person-every-time/): what judgement is the person adding? For most standard documents, the honest answer is a final check, not authorship.

### Trade-offs to weigh

- **The data must be right first.** Generating documents from inaccurate records sends errors out faster and in larger numbers.
- **Some letters need judgement.** Letters about disputes, disciplinary matters or unusual circumstances should stay with a person.
- **Templates need an owner.** Someone must approve wording changes and retire old versions.
- **Signatures need a decision.** Decide which documents can carry a printed or digital signature and which require a personal one.

## Practical diagnostic

1. List every certificate, confirmation and standard letter the business issues, with monthly volume for each.
2. For the highest-volume type, time the full process from request or trigger to sending.
3. Check where each field's data originally comes from, and whether it is already in a system.
4. Count reissues and corrections over the last quarter, with their causes.
5. Test whether you can produce a complete list of documents issued last month, with numbers and recipients. If you cannot, start a register before automating anything.

A useful lens for deciding what to keep manual is the distinction between [necessary human work and avoidable manual work](/insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/).

## The bottom line

Certificates, confirmations and standard letters are predictable outputs of records the business already keeps. Producing them by hand costs paid hours on every document, introduces avoidable errors, and leaves no reliable trail of what was issued. One controlled template, one data source and a clear trigger turn a recurring chore into a routine output that people only need to review.
