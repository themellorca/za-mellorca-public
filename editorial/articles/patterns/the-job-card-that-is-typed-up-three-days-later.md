---
hub: patterns
record_id: PAT-453
slug: the-job-card-that-is-typed-up-three-days-later
title: The Hidden Cost of Paper-Based Field Updates
description: Paper job cards create the same record twice, days apart, and leave invoicing, stock and follow-up running on old information.
lead: Paper job cards create the same record twice, days apart, and leave invoicing, stock and follow-up running on old information.
category: Field Operations & Distributed Work
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Field Operations & Distributed Work
pattern_family: Field Operations & Distributed Work
observable_condition: Field work is recorded on paper and typed into the system days later, delaying invoicing and hiding detail.
primary_identification: Data-capture-at-source and field-to-office synchronisation problem
commercial_value_dimensions: cash flow, field productivity, service margin, customer experience
sources:
  - Dynamics 365 Field Service mobile app overview | https://learn.microsoft.com/en-us/dynamics365/field-service/mobile/overview
  - Configure offline data synchronization | https://learn.microsoft.com/en-us/dynamics365/field-service/mobile/offline-data-sync
  - Use inspections in work orders - Dynamics 365 Field Service | https://learn.microsoft.com/en-us/dynamics365/field-service/inspections
related:
  - The Hidden Cost of Asking Customers for the Same Information Twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
  - The Hidden Cost of Re-Keying Order Information | /patterns/the-hidden-cost-of-re-keying-order-information/
  - The Cost of Entering the Same Prospect Information Twice | /patterns/the-real-price-of-capturing-a-prospect-in-two-places/
summary: Paper job cards create the same record twice, days apart, and leave invoicing, stock and follow-up running on old information.
layout: plain
---
An installer finishes a geyser replacement at half past two, fills in a carbon-copy job card on the bonnet of the bakkie, gets the customer's signature and drives to the next call. The pink copy goes into a folder on the passenger seat. On Friday the folder is handed to the office, where someone reads the handwriting, types the details into the accounting package and raises the invoice. The customer, who paid for a Tuesday job, receives the invoice the following week.

The paper itself is cheap. What the paper delays, hides and multiplies is where the real expense sits.

## The condition: the record is created twice, days apart

In many service, maintenance, installation and delivery businesses, the work is done in one place and the record of the work is created somewhere else, later, by someone else. The first version is written by hand, under time pressure, in the field. The second version is typed up in the office, once the paper arrives. Between the two, the business knows less than it appears to.

Typical signs include:

- Job cards, delivery notes or checklists that are collected weekly, or whenever someone remembers.
- An office team whose first task each morning is to decipher yesterday's handwriting.
- Photos of paperwork sent over WhatsApp as a stopgap, so the evidence exists in a chat rather than on a job record.
- Invoices that wait for "the paperwork" even though the work finished days ago.
- Queries from customers that can only be answered after somebody finds the right piece of paper.

## The realisation: paper is a delay and a filter

It is easy to see paper as merely old-fashioned. A more useful view is that paper behaves like a queue and like a filter. As a queue, it holds finished work in a folder until a person moves it. As a filter, it loses detail on the way: a missing reading, an unclear part number, a note that never gets typed because the clerk could not read it. Neither effect is visible on any report, because the report is built from the typed version.

The realisation, then, is that the business is not only paying for the time to retype. It is operating with a lag between what happened at the customer's premises and what the business can act on. During that lag, invoices wait, stock used on site is not reduced, follow-up work is not scheduled, and a repeat fault looks like a new one.

## Identification: a capture-at-source problem

This is a data-capture-at-source and field-to-office synchronisation problem. The visible symptom is slow invoicing and admin load in the office. The common assumption is that the office is understaffed or that technicians are poor at paperwork. The structural cause is that the system of record cannot receive information from where the work is done, so a person has to carry it across.

It is worth separating two questions that are often mixed up. The first is whether paper is acceptable for the technician to write on at the moment of work. The second is whether the information has to stay on paper afterwards. A business can answer "yes" to the first and still need to change the second.

## Diagnosis: why the paper persists

Paper tends to survive for sensible reasons. It works without signal, it is fast to fill in, it does not run out of battery, and customers are used to signing it. Any replacement has to match those strengths or it will be bypassed. An illustrative example, not a client case: a small maintenance contractor introduced a phone form for technicians, but the form required a signal at the point of saving. In basements and rural sites the form failed, and technicians quietly went back to paper, adding the phone form as extra work at the end of the day.

The mechanisms that keep the pattern alive are usually these:

- **People:** technicians are measured on jobs completed, not on the quality of their records, so paperwork is the first thing to be squeezed.
- **Process:** the job card has free-text fields where the business needs structured answers, such as parts used, readings and outcome, so the office must interpret rather than simply accept.
- **Information:** the job record in the system is only created, or only completed, after the paper arrives.
- **Systems and infrastructure:** the tools in use assume a constant connection, or are not connected to billing and stock at all.

## The commercial value at stake

The value connected to this condition is mainly cash flow, field productivity and service margin. Cash flow, because invoicing cannot start until the paper arrives. Productivity, because every job is handled twice, once by the technician and once by an office clerk. Margin, because materials and time that were used but not recorded cannot be billed. Customer experience matters too: a customer who has to wait to be invoiced, or who calls to ask what was done, notices the gap.

We are not asserting a particular percentage here. Whether the leakage is small or substantial is something the business can find out by comparing a sample of paper cards with what was eventually invoiced. For a closely related view of how work escapes the system altogether, see our article on [when field work happens outside the system](/patterns/when-field-work-happens-outside-the-system/), and for the phone calls this lag generates, [why field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/).

## Possibility: capture once, at the job

The alternative is to capture the record once, at the job, in a structured form that feeds the same system the office uses. Modern field-service software is built around that idea. Microsoft's documentation for the Dynamics 365 Field Service mobile app, for example, describes technicians managing assigned work, recording work from a mobile device, and, where an administrator has configured offline capabilities, continuing to access and update work data without an internet connection. The same documentation lists structured inspections, barcode scanning to populate records, and service reports that can be created to review and share completed work.

Two details are especially relevant to the objection that "we work where there is no signal". The documentation describes offline-first operation, with data synchronising when the device reconnects, and sync intervals that can be set from five minutes up to a day. It also describes sync conflicts: if a technician and a dispatcher edit the same work order before syncing, the system has to decide which version to keep. That is a reminder that going digital does not remove the need for clear rules about who owns which part of a job record. It moves the question from "who types this up?" to "who is allowed to change this?".

The product is one example. The principle applies to any reasonable tool: capture structured answers where the work happens, tolerate poor connectivity, and send the result straight to the job record.

## Intervention: change the record before changing the device

1. **Redesign the job card first.** Replace free-text fields with the choices the office actually needs: outcome, parts used, readings, photo of the finished work, customer sign-off. Microsoft's inspection feature, which supports required questions, choice lists, numeric fields, photos and barcode scanning, shows what structured capture can look like, whatever tool you use.
2. **Test in your worst location, not your best.** If the solution only works with a good signal, technicians will go back to paper.
3. **Decide what completes a job.** Make the digital record the trigger for invoicing, so there is a clear reason to complete it on the day.
4. **Keep paper where it earns its place.** A signature on a tablet may be better than a carbon copy, but a legal or customer requirement for a physical document should be handled deliberately, not discovered later.
5. **Measure the lag.** Track the time between finishing a job and its invoice being raised. It is the clearest single signal of whether the change is working.

## Practical diagnostic questions

- How many days pass, on average, between a job finishing and the invoice leaving?
- When did the office last return a job card to a technician because it could not be read?
- If a customer disputes the work from three months ago, how long does it take to find the record?
- Which information on the paper card never reaches the system at all?
- Would your technicians describe the current process as helpful to them, or only to the office?

## The bottom line

Paper-based field updates are rarely a failure of discipline. They are a sign that the business has accepted a gap between the place where work is done and the place where it is recorded. Closing that gap lets invoicing, stock and follow-up respond to what happened today, not what was filed last week. Our related reading on [what operational visibility actually means](/insights/what-operational-visibility-actually-means/) explains why this matters beyond the invoice.
