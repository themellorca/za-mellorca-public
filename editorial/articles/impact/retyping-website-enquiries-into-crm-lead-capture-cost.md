---
hub: impact
record_id: CPS-046
slug: retyping-website-enquiries-into-crm-lead-capture-cost
title: Retyping website enquiries into the CRM: The cost of slow, error-prone lead capture
description: When someone copies each website enquiry into the CRM by hand, leads wait, contact details get mistyped, duplicates multiply and the lead source is lost.
lead: When someone copies each website enquiry into the CRM or job system by hand, leads wait, contact details get mistyped, duplicates multiply and the record of where the lead came from is lost.
category: Sales Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Sales Operations
commercial_domain: Business Automation
primary_pain: Staff manually copy website enquiries into the CRM or other internal systems
primary_cost_mechanism: Capture and clean-up labour, with revenue loss from delayed or unreachable leads and wasted marketing spend
sources:
  - Capture forms in Customer Insights - Journeys - Dynamics 365 Customer Insights | https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/real-time-marketing-form-capture
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013popi.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013popi.pdf
related:
  - "Let me check and come back to you": The cost of manual availability checks | /impact/checking-stock-capacity-by-hand-before-promising-cost/
  - Typing invoices from data you already hold: The labour and billing delay cost | /impact/invoices-retyped-from-existing-records-billing-labour-cost/
  - Digital filing by hand: The labour cost of moving files between folders and systems | /impact/manually-moving-files-between-folders-systems-filing-cost/
  - Phone calls recorded on notepads: The cost of incomplete customer records | /impact/phone-call-notes-not-recorded-in-shared-system-cost/
summary: When someone copies each website enquiry into the CRM or job system by hand, leads wait, contact details get mistyped, duplicates multiply and the record of where the lead came from is lost.
layout: plain
---
## The tolerated pain: a person as the bridge between website and CRM

A prospect fills in the contact form on the website. The form sends an email. At some point, sometimes within the hour and sometimes the next morning, an administrator opens that email, creates a new lead or customer in the CRM, job system or spreadsheet, and types in the name, company, phone number, email address and enquiry details. Then the lead can be assigned and followed up.

The step looks harmless. It takes a few minutes per enquiry and the information arrives already structured, so it feels like there is little to go wrong. Yet every enquiry now waits for a person to be available, and every field is typed a second time by someone who has never spoken to the prospect.

Several related problems are covered elsewhere on Mellorca: [website forms that fail silently](/impact/website-forms-failing-silently/), [the revenue cost of slow lead response](/impact/slow-sales-lead-response-revenue-cost/) and [enquiries nobody owns](/impact/unassigned-sales-enquiries-leads-going-cold/). This article looks at the copying step itself: what it costs, what it breaks, and why it is usually the easiest part of lead handling to remove.

## Why businesses tolerate it

- **The form was set up to send email.** That was the default when the website was built, and nobody revisited it when the CRM arrived.
- **Someone likes to screen enquiries.** Copying by hand doubles as a filter for spam and job applications.
- **Website and CRM belong to different people.** Marketing or an agency owns the site; sales or operations owns the CRM.
- **Volumes crept up.** Ten enquiries a week were easy to copy; a hundred are not, but the change was gradual.

## Operational consequence

- **Delay before anyone acts.** The lead does not exist in the sales system until it is copied, so assignment and follow-up cannot start.
- **Mistyped contact details.** One wrong digit in a phone number or a misspelt email address makes a genuine lead unreachable.
- **Duplicates.** Returning prospects are captured again as new records, and salespeople contact the same person twice.
- **Lost context.** The page the prospect was on, the campaign that brought them and the exact time they enquired are often not copied across.
- **Lost consent.** Whether the prospect agreed to receive marketing is ticked on the form but rarely transferred.
- **Backlogs after leave and weekends.** Enquiries pile up whenever the person who copies them is away.

The data-quality point is not only operational. The Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure personal information is complete, accurate, not misleading and updated where necessary, having regard to the purpose for which it was collected. Retyping accurate details that a prospect has already entered is an unnecessary way to introduce inaccuracy.

## How the pain becomes money

1. **Capture labour:** minutes per enquiry to read, screen, create the record and type the details.
2. **Clean-up labour:** merging duplicates and correcting wrong details later.
3. **Unreachable leads:** enquiries lost because contact details were mistyped. Measure these by checking a sample of failed contacts against the original form submission.
4. **Response delay:** the time between enquiry and record creation, added to every lead before follow-up can begin.
5. **Wasted marketing spend:** without source information, the business cannot tell which campaigns produce customers, so budget is allocated on guesswork.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African business that generates enquiries through its website. They are not benchmarks. Replace them with your own counts.

| Activity (illustrative) | Assumption | Minutes per month |
| --- | --- | --- |
| Copying enquiries into the CRM | 420 enquiries × 5 minutes | 2,100 |
| Screening spam and misdirected messages | 150 messages × 1 minute | 150 |
| Merging duplicates and fixing details | 35 records × 10 minutes | 350 |
| Tracing unreachable leads to the original email | 10 leads × 12 minutes | 120 |
| **Total** |  | **2,720** |

2,720 minutes is about 45.3 hours a month. At an illustrative loaded cost of R230 an hour, that is roughly R10,430 a month, or about R125,100 a year.

The revenue effect needs its own evidence. If a sample shows that a certain number of genuine enquiries each month were never reached because of mistyped details, multiply that number by your own historical conversion rate and average first-order value to estimate the value at risk. Do not borrow a conversion rate from elsewhere.

## Secondary consequences

A CRM fed by hand is never quite trusted. Salespeople keep their own lists, managers question the pipeline figures, and marketing cannot connect spend to sales. The copying step also concentrates personal information in an email inbox, where it is harder to secure, retain correctly or delete when no longer needed. Over time the gap between the website and the sales process becomes one of the reasons [good leads disappear between marketing and sales](/patterns/why-good-leads-disappear-between-marketing-and-sales/).

## When this becomes commercially urgent

- Enquiries regularly wait more than a few working hours before they appear in the sales system.
- Salespeople report wrong numbers or bounced emails on new leads.
- Duplicate records are common enough that someone runs periodic clean-ups.
- Marketing cannot say which campaigns produced last quarter's customers.
- Lead capture stops when one administrator is on leave.

## What better looks like

In a better state, a form submission creates or updates the record directly, with the prospect's own entries mapped to the right fields, the source and time recorded, consent stored, and the lead routed to an owner immediately. People review the exceptions: spam that slipped through, unclear enquiries and possible duplicates.

Most CRMs provide a way to do this, either through their own forms or by capturing submissions from an existing form. Microsoft's documentation for Dynamics 365 [Customer Insights](https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/real-time-marketing-form-capture), for example, describes a form capture script that maps the fields of an existing website form to lead or contact attributes, records consent, and sends submissions to the system. The same documentation flags practical details that matter, such as ensuring the submission completes before the page redirects, otherwise submissions can be recorded inconsistently or not at all. On the receiving side, Microsoft's Power Platform documentation describes [duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) that can compare, for example, the email field on contacts with the email field on leads.

Whatever tool is used, the connection must be monitored. A direct form-to-CRM link that breaks quietly is worse than a manual process that someone at least notices.

### Trade-offs to weigh

- **Spam goes straight in.** Add bot protection and validation before connecting the form to the CRM.
- **Field mapping needs care.** Free-text fields, dropdowns and consent boxes must map to the right attributes.
- **Duplicates must be handled by rule.** Decide when a submission updates an existing record and when it creates a new one.
- **Integrations need an owner.** Someone must watch for failures after website changes.

## Practical diagnostic

1. For one month, record the time each website enquiry arrived and the time its record was created in the CRM.
2. Compare a sample of twenty CRM records with the original form emails and count differences in contact details.
3. Count duplicate records created from website enquiries in the same period.
4. Check whether source, campaign and consent information survive the copying step.
5. Confirm who would capture enquiries if the usual person were away for a week.

The same habit of rekeying information from messages appears across the business, as described in [the labour cost of retyping email details into business systems](/impact/copying-email-details-into-business-systems-admin-cost/).

## The bottom line

Copying website enquiries into internal systems by hand adds delay to every lead, introduces errors into details the prospect entered correctly, and strips away the information needed to judge marketing spend. Connecting the form to the system of record, with monitoring and rules for duplicates, removes a recurring cost and gives every enquiry a faster, cleaner start.
