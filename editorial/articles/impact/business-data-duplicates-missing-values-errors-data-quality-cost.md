---
hub: impact
record_id: CPS-111
slug: business-data-duplicates-missing-values-errors-data-quality-cost
title: Duplicates, Gaps and Typos: What Poor Data Quality Costs a Growing Business
description: Duplicate records, empty fields and simple errors in core business data rarely look urgent. Their cost appears as rework, failed deliveries, wasted marketing and reports nobody trusts.
lead: Duplicate records, empty fields and simple errors in core business data rarely look urgent. Their cost appears as rework, failed deliveries, wasted marketing and reports nobody trusts.
category: Data and Information
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Important business data contains duplicates, missing values and errors that staff have to work around
primary_cost_mechanism: Daily checking and correction labour, failed deliveries and mispriced quotes, wasted marketing and per-record software spend, unreliable reports and slower decisions, and exposure under personal information accuracy duties
sources:
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://www.gov.uk/government/publications/the-government-data-quality-framework | https://www.gov.uk/government/publications/the-government-data-quality-framework
summary: Duplicate records, empty fields and simple errors in core business data rarely look urgent. Their cost appears as rework, failed deliveries, wasted marketing and reports nobody trusts.
layout: plain
---
## The spreadsheet that looked fine

A Pretoria-based supplier of office consumables wanted to send a price-increase notice to all active customers. The marketing coordinator exported the customer list from the accounting system: 2,400 rows. Before sending, she checked a sample. One customer appeared four times under slightly different names. Two hundred rows had no email address. Some had a telephone number in the email field. About a tenth of the addresses belonged to people who had left the customer's business years ago. A two-hour task became a two-week clean-up, and the notice went out late, to an incomplete list.

Nothing in that list was dramatic. Each problem had arrived one record at a time over years of normal work. Together they made a basic business task slow, unreliable and expensive. That is how poor data quality usually behaves: invisible until the day the business needs the data to work.

## The three common faults

Most data problems in small and mid-sized businesses fall into three groups.

- **Duplicates.** The same customer, supplier, product or employee recorded more than once, often with small differences in spelling, branch name or contact person.
- **Missing values.** Fields left empty because they were optional at the point of capture: email addresses, VAT numbers, delivery instructions, product weights, cost prices.
- **Errors.** Values in the wrong field, typing mistakes, outdated information and inconsistent formats, such as dates entered three different ways or phone numbers with and without the country code.

Each fault has a different cause. Duplicates come from several people or systems creating records without checking first. Missing values come from forms that allow a record to be saved half-complete. Errors come from manual typing and from information that changes in the real world without anyone updating the record.

## Where the money goes

### Rework and checking

The largest cost is usually labour spent correcting, checking and working around bad data. Finance staff confirm customer details before invoicing. Dispatch staff phone customers to confirm addresses. Report preparers remove duplicates by hand every month. None of that time appears as a line item, but it is paid for every week.

### Operational mistakes

A wrong delivery address means a failed delivery and a second courier fee. A missing cost price means a quote priced below margin. A duplicate supplier record can let the same invoice be paid twice, a problem examined in [duplicate supplier invoice payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/). A wrong product weight means freight is undercharged on every order.

### Wasted spend

Marketing sent to duplicate or outdated contacts costs money and damages sender reputation. Software priced per record or per contact charges for every duplicate. Analytics and AI tools trained on poor data produce poor results, as discussed in [AI on poor-quality data](/impact/ai-on-poor-quality-data-financial-cost/).

### Decisions nobody trusts

When customer counts, product margins or sales by region differ depending on who prepared the report, managers stop using reports to decide and start using them to argue. The cost is slower decisions and decisions made on instinct because the numbers are not believed. The article on [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/) explores that consequence.

## A transparent way to estimate the cost

The following example uses illustrative assumptions. Replace them with your own figures.

A business has five people who each spend around 30 minutes a day checking or correcting data before they can complete their work. That is 2.5 hours a day, or roughly 55 hours a month. At a loaded cost of R250 an hour, it is close to R14,000 a month in labour. Add 15 failed deliveries a month at R180 each for a second courier trip, and two quotes a month priced below cost because the cost price field was blank. The total is easily over R200,000 a year for a business that would say it has no data problem.

The figure is less important than the method. Counting minutes spent on checking and the number of avoidable mistakes for one month usually gives a business its first honest view of what poor data quality costs.

## The legal angle in South Africa

For personal information, data quality is also a legal duty. The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. Duplicate customer records with conflicting details, and contact information that has not been reviewed for years, make that duty harder to meet. This is general information rather than legal advice.

## Why businesses put up with it

Poor data quality is tolerated because each individual error is small and someone always finds a workaround. Cleaning feels like a one-off project that never reaches the top of the list. And nobody owns the data as a whole: sales owns the customer conversation, finance owns the invoice, and the customer record sits in between.

Public bodies have faced the same problem. The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework) starts from the position that people who manage and use data are responsible for checking whether it is fit for purpose, and it describes a proactive, evidence-based and targeted approach to improving it. That principle scales down well: data quality improves when someone is responsible for it and checks it regularly, not when it is cleaned once.

## What better looks like

A business with good-enough data does not have perfect records. It has a short list of fields that must be correct, rules at the point of capture that stop the most common faults, and a routine that finds and fixes problems before they cause a mistake. Practical guidance on [cleaning data without a never-ending project](/insights/how-to-clean-data-without-creating-a-never-ending-cleanup-project/) describes this approach in more depth.

## Practical next actions

1. **Pick the five fields that cause the most trouble.** Typical candidates are customer email, delivery address, VAT number, product cost price and supplier bank details.
2. **Measure the current state.** Count duplicates, blanks and obviously wrong values in those fields. Record the numbers so improvement can be shown.
3. **Make critical fields mandatory at capture.** Where the system allows it, require them and validate their format when the record is created.
4. **Search before creating.** Require staff to search for an existing customer or supplier before adding a new one, and use the duplicate-matching features many systems include.
5. **Name an owner for each core record type.** One person is accountable for customer data, one for supplier data and one for product data.
6. **Run a monthly quality check.** Repeat the measurement from step two and fix what it finds while the list is still short.

Poor data quality is rarely a single expensive event. It is a tax on almost every process that touches a record, and it is one of the few costs a business can reduce substantially without buying anything new.
