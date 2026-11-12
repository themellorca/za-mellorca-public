---
hub: insights
record_id: INS-073
slug: how-to-stop-the-same-information-being-typed-into-several-systems
title: How to Reduce Re-Entry of the Same Information Across Systems
description: A five-step programme for finding repeated data entry, ranking it by risk and choosing the most effective fix, from removing the field to a safe automatic transfer.
lead: A five-step programme for finding repeated data entry, ranking it by risk and choosing the most effective fix, from removing the field to a safe automatic transfer.
category: Data and Process Efficiency
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data and Process Efficiency
sources:
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Extract, transform, load (ETL) - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl
  - Idempotent Consumer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer
related:
  - How to Identify the Systems Your Business Actually Depends On | /insights/how-to-identify-the-systems-your-business-actually-depends-on/
  - Broken Handoffs Are Systems Problems | /insights/broken-handoffs-are-systems-problems/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
summary: A five-step programme for finding repeated data entry, ranking it by risk and choosing the most effective fix, from removing the field to a safe automatic transfer.
layout: plain
---
Pick any customer your business has served in the past month and follow their details. Their name and contact numbers were probably typed in by sales, typed again by whoever raised the order, typed a third time when finance opened the account, and possibly a fourth when the delivery was booked. Each person did their job properly. The business still paid four times for the same information, and it now holds four slightly different versions of it.

Re-entry is the quiet tax on a business with several systems. It is rarely large on any single day, which is why it survives. But it adds up in hours, in mistakes and in the slow divergence of records that should agree. This article is about getting rid of it systematically: how to find where information is typed more than once, how to decide which repeats to remove first, and which design options remove them, from the most to the least effective.

## Why it persists

Re-entry usually appears at the seams between systems that were bought at different times for different purposes. Nobody designed it. A new tool was added, it could not receive data from the old one, and someone began typing as a stopgap. The stopgap became the process. Because the typing is done by competent people who also fix their own mistakes, the cost is hidden inside normal working hours.

The related symptom, copying between screens, is covered in [when copy and paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/), and the cost side in [why copying data between systems is more expensive than it looks](/insights/why-copying-data-between-systems-is-more-expensive-than-it-looks/). Here the focus is on a practical programme of removal.

## Step 1: Find every place information is typed twice

Choose one important thing that moves through your business, such as a new customer, a sales order or a new employee, and trace it from the first moment it is captured to the last system that holds it. At each step, ask who types what, into which system, and where they got it from. Mark every field that is entered for the second time or later.

Two sources will tell you more than any system report. First, ask the people who do the typing. They know which fields are copied, which are rechecked and which are always wrong. Second, look for the shadow copies: spreadsheets kept alongside the official system, because the official system does not hold what someone needs. Those spreadsheets are re-entry in disguise, and [how to map the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/) describes a method for drawing the whole picture.

## Step 2: Rank the repeats

Not every repeat deserves the same attention. Score each one on four things:

1. **Frequency.** How many times a day or week does it happen?
2. **Time.** How long does each repeat take, including checking?
3. **Error consequence.** If it is typed wrongly, who finds out, and what does it cost? A wrong delivery address costs more than a wrong job title.
4. **Divergence.** Does the repeat produce records that later disagree, forcing reconciliation?

Start with the repeats that score highest on error consequence and frequency together. A small, frequent step that feeds an invoice is worth more than a large, rare one that feeds an internal list. For help with putting a figure on the time involved, see [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

## Step 3: Choose the right way to remove each one

There are several ways to stop information being typed twice, and they are not equal. Work down this list, and take the first option that applies.

### Remove the field

Ask whether the second system really needs the information. Often a field was added years ago for a report nobody reads. The cheapest repeat to handle is the one you eliminate.

### Capture it once, at the source

Decide which system is the original home of each piece of information, and make that the only place where it is typed. Other systems should receive it, not collect it again. This is the "system of record" idea, and the decision is covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/). The source should also be where the information is checked, since errors are cheapest to correct at the moment of capture.

### Look up, do not copy

Where one system needs to show another's information, it can often refer to it by a shared identifier, such as a customer number, instead of holding its own copy. Staff see the current value, and an update in one place applies everywhere. This avoids creating a second record that can drift from the first.

### Transfer automatically

Where a copy must exist, move it by connection, not by hand. A scheduled or event-based transfer takes over the typing, and, if designed well, handles the checks as well. Microsoft's guidance on extract, transform and load processes notes that transformation commonly includes cleaning, deduplicating and validating data as it moves. Those steps are where a connection can do better than a person: it applies the same rule every time.

One design detail matters a great deal. A transfer should update an existing record where one exists and create a new one only where none does, matched on a business identifier. Microsoft's description of the idempotent consumer pattern notes that an upsert keyed on a business identifier produces the same result whether it runs once or many times, which makes it naturally safe to repeat. Without this, a retry or a re-run creates duplicates, and you have exchanged re-entry for clean-up work. The risk is described in [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/).

### Standardise what remains

Some re-entry cannot be removed for now. Make it safer by providing pick-lists in place of free text, formats that reject nonsense, and a standard order of fields, so that what is typed is at least consistent. And add a visible check at the second typing: a count, a total or a matching reference, so a mismatch is caught on the day.

## Step 4: Protect accuracy while you change things

Removing re-entry changes who is responsible for the quality of information, and that must be made explicit. If sales now capture the customer's details once and everyone else relies on them, sales need to know that their accuracy has become everyone's problem, and need the tools, such as required fields and format checks, to get it right.

There is a legal dimension for South African businesses. Section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary, having regard to the purpose for which it is collected or used. A business holding the same customer's details in four systems, typed four times, has four chances to fall short of that standard. One well-maintained source, with others drawing from it, makes the obligation far easier to meet.

## Step 5: Measure and hold the gain

Before changing anything, record a baseline for each repeat you tackle: how often it happens, how long it takes and how many errors it produces. After the change, measure again. This confirms that the work paid for itself and gives you evidence for the next one. Re-entry tends to return unless someone owns it, so assign responsibility for the flow of each major record type, and revisit the trace whenever a new system is added. [How to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/) offers a useful companion view.

## An illustrative example

Consider a hypothetical Centurion training company where learner details were typed into an enquiry spreadsheet, again into the booking system, again into the invoicing package and finally onto certificates. Tracing one learner showed twelve fields repeated, and a wrong ID number typed in one place caused rejected certificates every quarter. The company worked down the options. Two fields were removed because nobody used them. The booking system became the single place of capture, with a format check on ID numbers. Invoicing drew learner and company details from bookings through a nightly transfer that updated existing accounts instead of creating new ones. Certificates pulled directly from bookings. Typing per learner dropped from four entries to one, and certificate rejections fell to the occasional genuine error.

## A closing test

For any record that matters in your business, ask: if this detail changed today, in how many places would a person have to change it? The target is one. Every number above one is a place where your information can quietly disagree with itself.
