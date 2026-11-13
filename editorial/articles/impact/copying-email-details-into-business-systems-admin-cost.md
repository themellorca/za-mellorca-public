---
hub: impact
record_id: CPS-013
slug: copying-email-details-into-business-systems-admin-cost
title: From inbox to system by hand: The labour cost of retyping emails
description: When orders, bookings and enquiries arrive by email and staff retype them, you pay in admin hours, keying errors and delay. Measure it, then automate.
lead: When orders, bookings and enquiries arrive by email and staff retype them into business systems, the business pays in admin hours, keying errors and delay. How to measure it and what to automate first.
category: Business Automation
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Employees manually copying information from emails into business systems
primary_cost_mechanism: Labour cost of avoidable administration, keying error and rework cost, and scaling cost
sources:
  - Trigger a cloud flow based on email properties in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/email-triggers
  - Document processing model overview - AI Builder | https://learn.microsoft.com/en-us/ai-builder/form-processing-model-overview
  - Specify which emails are automatically tracked - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/email-message-filtering-correlation
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - Paper forms captured twice: The cost of double handling | /impact/paper-forms-captured-twice-double-handling-cost/
  - Rebuilding the same report every month: The labour cost of manual reporting | /impact/rebuilding-recurring-reports-by-hand-labour-cost/
  - Gathering information before work can start: The payroll cost of preparation | /impact/compiling-information-before-work-preparation-payroll-cost/
  - When information reaches your systems only because someone carried it | /patterns/when-information-reaches-your-systems-only-because-someone-carried-it/
summary: When orders, bookings and enquiries arrive by email and staff retype them into business systems, the business pays in admin hours, keying errors and delay. How to measure it and what to automate first.
layout: plain
---
## The tolerated pain

A customer emails a purchase order as a PDF. Someone opens it, reads the account number, the items, the quantities and the delivery address, and types them into the order system. A client emails to change a booking; someone reads the message and updates the schedule. A new enquiry arrives through the website, lands in an inbox as a block of text, and someone copies the name, phone number and request into the CRM. All day, information arrives by email and leaves by keyboard.

This is so normal that most businesses do not see it as a process at all. It is "checking the inbox". Yet in many offices it is one of the largest single uses of administrative time, and it sits at the very start of the work, where a mistake travels furthest.

This article is about the step where email content becomes a record in a business system. The broader cost of entering the same data more than once is covered in [the cost of employees entering the same data twice](/impact/pain-employees-duplicated-data-entry/). Here the focus is the inbox as an unstructured front door, and what it costs to have people translate it by hand.

## Why businesses put up with it

- **Customers and suppliers choose the format.** They send what is convenient for them, and the business accepts it to be easy to deal with.
- **Volume grew slowly.** Ten emails a day was manageable. Eighty a day became a job, but nobody decided that it should be.
- **It looks like it needs judgement.** Emails vary, so it feels as if a person must read every one, even when most follow the same few shapes.
- **The cost is buried in roles.** The time sits inside "admin", "sales support" or "bookings", not in a process anyone measures.

## Operational symptoms

- staff keeping an inbox and a business system open side by side for most of the day;
- backlogs after weekends, public holidays or staff leave;
- orders or bookings processed in the order they were read, not the order they arrived;
- mistyped account numbers, quantities, dates or email addresses discovered later;
- customers asking whether their email was received, because nothing confirms it;
- important details that never leave the inbox, a pattern described in [when business knowledge lives in inbox history](/patterns/when-business-knowledge-lives-in-inbox-history/).

## How the pain becomes money

- **Labour cost:** paid time spent reading, interpreting and retyping rather than serving customers or managing exceptions.
- **Error and rework cost:** keying errors become wrong deliveries, wrong invoices, missed appointments or duplicated records that must be cleaned up.
- **Delay cost:** work cannot start until the email has been captured, so turnaround depends on the inbox backlog.
- **Scaling cost:** more customers means more emails, which means more administrators.
- **Compliance exposure:** under South Africa's Protection of Personal Information Act, [section 16](https://popia.co.za/section-16-quality-of-information/) requires reasonably practicable steps to keep personal information complete, accurate, not misleading and up to date. Manual retyping is one of the easiest ways for customer details to become inaccurate.

## What can be automated, and what should not

Not every email can or should be captured automatically. But a large share of inbound email is predictable: orders from regular customers, booking requests, enquiry forms, remittance notices. Three practical options exist in most mainstream platforms.

**Route and trigger on arrival.** Microsoft's documentation on [triggering a cloud flow from email properties](https://learn.microsoft.com/en-us/power-automate/email-triggers) describes starting an automated flow when an email arrives in a particular folder, from a particular sender, to a particular address, with an attachment or with specific words in the subject. The flow can then create or update a record elsewhere. Other automation platforms offer equivalent triggers.

**Extract from attachments.** Microsoft's [AI Builder document processing overview](https://learn.microsoft.com/en-us/ai-builder/form-processing-model-overview) explains that a model can be trained to read and save information from standard documents such as invoices, and used inside automated flows. Microsoft says a small number of sample documents is enough to start, but extracted data still needs sensible checks, and low-confidence results should go to a person.

**Link email to the record automatically.** CRM platforms can attach incoming email to the right customer or case. Microsoft's guidance on [which emails are automatically tracked](https://learn.microsoft.com/en-us/power-platform/admin/email-message-filtering-correlation) in Dynamics 365 describes how replies are matched to previously tracked messages and linked to the related record, so staff do not have to copy correspondence across by hand.

The simplest option is often not technical at all: replace free-text email with a short structured form for the requests that arrive most often, so the information arrives in fields rather than prose.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption to show the method. Picture a KwaZulu-Natal industrial supplies business receiving customer orders and queries by email.

| Input | Illustrative assumption |
| --- | --- |
| Emails per day that need capturing into a system | 120 |
| Average capture time per email | 4 minutes |
| Loaded cost of administrative time | R220 per hour |
| Working days per year | 240 |
| Share of captures with an error needing correction | 2% |
| Average cost to correct an error | R600 |

On these assumptions capture takes eight hours a day, roughly one full-time person, costing about R1,760 a day or R422,000 a year. Errors add about 2.4 a day at R600, or around R346,000 a year. If structured forms and automated capture handled 60% of the volume, with a person reviewing exceptions, the labour saving alone would be about R253,000 a year, and fewer manual keystrokes should mean fewer errors. Test these figures against a week of your own inbox before relying on them; [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) sets out the method.

## When it becomes commercially urgent

1. Inbox backlogs are delaying orders, bookings or responses.
2. Keying errors are causing wrong deliveries, credit notes or customer complaints.
3. The business is about to hire another administrator purely to keep up with email.
4. Personal information is being retyped across several systems with no single accurate record.

## What better looks like

Common request types arrive through structured forms or portals. Where email remains, a shared address routes messages by type, automation creates draft records from predictable messages and attachments, and people review exceptions and approve drafts rather than retyping them. Customers receive an automatic acknowledgement with a reference number. Every record shows where it came from, so a mistake can be traced to its source.

## Practical next actions

1. **Sample one week of inbound email** and sort it into types: orders, bookings, enquiries, changes, other.
2. **Time the capture of each type** and note which fields are retyped.
3. **Replace the most common free-text request with a short form** and ask regular customers to use it.
4. **Automate one predictable type end to end**, with a person checking the result for the first few weeks.
5. **Track errors and backlog** before and after, so the business case for the next step rests on evidence.

Where the inbox feeds several systems, the issue is usually wider than email, as described in [why information has to be copied from one system to another](/patterns/why-information-has-to-be-copied-from-one-system-to-another/). Designing intake and capture flows like these is part of Mellorca's [business automation](/services/business-automation/) work.

## Bottom line

An inbox is a poor front door for business systems. Every email that must be read and retyped costs paid time and adds a chance of error at the start of the process. Measuring the volume and capture time usually shows that a few predictable message types account for most of the work, and those are the ones to structure or automate first.
