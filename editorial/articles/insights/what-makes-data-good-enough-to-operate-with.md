---
hub: insights
record_id: INS-229
slug: what-makes-data-good-enough-to-operate-with
title: What Makes Data Good Enough to Operate With?
description: Waiting for perfect data means waiting forever. Data is good enough when it fits a defined use, meets an agreed threshold and has a named owner. Six questions and an example table to test it.
lead: Waiting for perfect data means waiting forever. Data is good enough when it fits a defined use, meets an agreed threshold and has a named owner. Six questions and an example table to test it.
category: Data and Reporting
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Data and Reporting
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Manage your data in Dynamics 365 implementation projects - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management
related:
  - How to Decide What Should Be on an Operations Dashboard | /insights/how-to-decide-what-should-be-on-an-operations-dashboard/
  - What Digital Infrastructure Means for a Modern Business | /insights/what-digital-infrastructure-means-for-a-modern-business/
  - What Managed Digital Operations Actually Means | /insights/what-managed-digital-operations-actually-means/
summary: Waiting for perfect data means waiting forever. Data is good enough when it fits a defined use, meets an agreed threshold and has a named owner. Six questions and an example table to test it.
layout: plain
---
Nearly every business has a data problem, and nearly every business is waiting until the data is "clean" before doing something about it. That day does not come. Customer lists decay, product codes drift, staff retype things, and systems disagree. A business that waits for perfect data waits indefinitely, while a business that ignores data quality altogether builds its decisions, its automations and its reports on sand.

The more useful question is the one in the title: what makes data good enough to operate with? The answer is never a single number. Data is good enough when it is fit for the specific use it is being put to, when the people relying on it know its limits, and when somebody is responsible for keeping it that way.

> Data is not good or bad in general. It is good enough, or not, for a particular decision or process.
>

## Fitness for use, not perfection

The UK government's Data Quality Framework, written to help public bodies assess and improve the data they rely on, starts from the idea that quality must be understood in relation to the purpose the data serves. It sets out dimensions to examine, including completeness, uniqueness, consistency, timeliness, validity and accuracy. These are a helpful vocabulary for a business too, as long as they are applied against a real use case rather than as an abstract audit.

Consider a customer table. For a monthly newsletter, a few missing phone numbers and some out-of-date job titles hardly matter. For a debt collection process, a wrong contact person or a missing account number is a real problem. For an AI assistant that drafts replies to customers, duplicated or conflicting records could lead to confident but wrong answers. The same table is good enough for one purpose and not for another.

## Six questions that test whether data is good enough

For any process or decision that depends on a data set, work through these questions with the people who use it daily.

### 1. Is it complete where it counts?

Not every field needs to be filled in. Identify the handful that the process cannot run without, such as a delivery address, a VAT number on a business customer, or a valid contract end date. Measure completeness for those fields only. A table that is 60 percent complete overall may be perfectly usable if the critical fields are 99 percent complete.

### 2. Is it unique?

Duplicate customers, suppliers and products are among the most expensive forms of poor data, because they split history, create double payments and make reports disagree. Look at how duplicates are being created, not only how many exist. Our articles on [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/) and [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/) cover the usual entry points.

### 3. Is it consistent across systems?

If a customer's name, status or credit limit differs between the CRM, the accounting package and the support system, the business is running on three versions of the customer. Consistency requires deciding which system is the authority for each item, a decision explored in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/). Without that decision, no amount of cleaning will last.

### 4. Is it timely enough?

Stock levels that are updated overnight are fine for weekly planning and useless for promising delivery to a customer on the phone. Data does not have to be real time, but it must be as fresh as the decision demands, and the people using it should be able to see how old it is.

### 5. Is it valid and accurate?

Validity asks whether values follow the rules: dates are dates, email addresses are formatted correctly, product codes exist. Accuracy asks whether they are true. Validity can be checked automatically. Accuracy often needs a sample check against reality, such as phoning ten customers or counting stock for ten items.

### 6. Can we trace where it came from?

Data that nobody can trace is hard to trust and impossible to correct at source. Knowing which system, import or person produced a record turns a one-off fix into a lasting one.

## Set a threshold before you look at the numbers

The step most businesses skip is deciding what "good enough" means before measuring. Otherwise every result can be explained away or, equally, used to justify a costly cleaning exercise nobody needed. For each important use, write down a threshold in plain language and agree it with the person accountable for the outcome.

| Use | Critical data | Example threshold |
| --- | --- | --- |
| Monthly invoicing | Billing address, rate, contract status | No invoice should fail for a missing or invalid field; fewer than 1 in 200 needs manual correction |
| Debtor follow-up | Contact name, email, balance, due date | At least 98 percent of overdue accounts have a working contact |
| Stock availability to customers | On-hand quantity, location | Counted accuracy of 95 percent or better on top-selling items |
| AI-drafted customer replies | Customer record, open orders, current terms | No known duplicates for active customers; terms updated within one working day |

These figures are illustrations, not standards. The point is that they are chosen by the business for a reason, and reviewed when the use changes.

## The legal angle in South Africa

Data quality is not only an operational preference. Section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary, having regard to the purpose for which it is processed. That wording is, in effect, a fitness-for-purpose test. A business that can show it has defined what accuracy means for each purpose, and checks it, is far better placed than one that holds data indefinitely and hopes for the best.

## Make quality cheaper at the source

Cleaning data after the event is expensive and temporary. The better investment is to prevent bad data entering. Practical options include required fields on forms, drop-down lists in place of free text, validation of formats such as registration numbers and email addresses, and a single point of capture rather than retyping between systems. Where staff are working around a system, the fault usually lies in the system or the process, not in the staff.

It also helps to find problems early. In [why data quality problems are found after reports are published](/discovery/why-data-quality-problems-are-found-after-reports-are-published/) we describe how problems are typically discovered by someone reading the final report. A small set of automatic checks, run daily on the critical fields, turns that around. The effect of poor data grows once AI is involved, which is why [AI makes data quality more important, not less](/insights/why-ai-makes-data-quality-more-important-not-less/).

## An illustrative example

The following is a hypothetical case. A Pretoria-based training company plans to automate course reminders and invoices from its booking system. A review finds that 12 percent of delegate records lack a company name and that about 400 companies appear twice under slightly different names. The owner's first instinct is a three-month data cleanse.

Instead, the team defines what the automation needs: a valid contact email, a single company record and a purchase order number where the client requires one. They find that only 3 percent of upcoming bookings fail those tests. They fix those bookings by hand, add required fields to the booking form, merge the duplicates among active clients only, and set up a weekly report of records failing the three tests. The automation goes live in three weeks, and the cleanse becomes an ongoing habit rather than a project.

## A working definition

Data is good enough to operate with when the critical fields for a defined use meet an agreed threshold, when its limits and age are visible to the people relying on it, when there is a named owner who monitors and fixes it at source, and when failures are caught by checks rather than by customers. That is a standard a mid-sized business can meet this quarter, and it is the only standard that makes automation and AI safe to build on.
