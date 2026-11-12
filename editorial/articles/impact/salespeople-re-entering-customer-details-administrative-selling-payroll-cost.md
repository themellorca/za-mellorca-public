---
hub: impact
record_id: CPS-305
slug: salespeople-re-entering-customer-details-administrative-selling-payroll-cost
title: Salespeople as Data Clerks: The Payroll Cost of Re-Entering Customer Details
description: When the same customer details are typed into the CRM, the quote, the proposal and the accounting system, selling time becomes clerical time, and the business pays sales salaries for data capture.
lead: When the same customer details are typed into the CRM, the quote, the proposal and the accounting system, selling time becomes clerical time, and the business pays sales salaries for data capture.
category: Sales Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Sales Operations
commercial_domain: Sales Operations
primary_pain: Salespeople manually entering the same customer information into several systems
primary_cost_mechanism: Sales payroll spent on clerical re-entry, lost selling time, quote and invoice rework, and drifting customer data
sources:
  - Welcome to Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/overview
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Retyping Website Enquiries Into the CRM: The Cost of Slow, Error-Prone Lead Capture | /impact/retyping-website-enquiries-into-crm-lead-capture-cost/
  - The Revenue Cost of Slow Sales Lead Response | /impact/slow-sales-lead-response-revenue-cost/
  - An Inbox Is Not a Sales Process: The Revenue Cost of Emailed Website Enquiries | /impact/website-enquiries-email-inbox-sales-process-revenue-cost/
summary: When the same customer details are typed into the CRM, the quote, the proposal and the accounting system, selling time becomes clerical time, and the business pays sales salaries for data capture.
layout: plain
---
## The selling that happens after the call

Ask a sales manager how the team spends its week and the answer is usually "with customers". Ask the salespeople themselves and a different picture appears. A call ends, and then the real keyboard work starts: the contact goes into the CRM, the same details are typed into the quoting spreadsheet, the company name and VAT number are re-entered for the proposal, and a few days later someone in finance asks for the registration number and billing address again. The salesperson has become the human connector between four systems that do not share a record.

This is administrative selling. It is not prospecting, negotiating or relationship building. It is the clerical effort needed to move one customer's details from where they were first captured to everywhere else they are needed. It sits inside salary lines that were budgeted for selling, which is why it is so rarely questioned.

## Why salespeople end up as data clerks

Nobody designs this on purpose. It accumulates through a series of sensible decisions made at different times.

- **Tools are added one at a time.** The CRM arrives first, then a quoting template, then an e-signature tool, then an accounting package that finance already used. Each is bought to solve a local problem and none is connected to the others.
- **The salesperson is the only person who knows the details.** They took the call, so they type the record, then repeat it for each downstream step.
- **Integration is assumed to be "an IT thing" for later.** Meanwhile the team compensates by hand.
- **Customer details change.** A new contact, a new delivery address or a changed purchase-order process means updating every copy, not just one.
- **Good intentions about data quality turn into extra fields.** Management asks for more information in the CRM, but nothing is removed from the other places it is already captured.

Microsoft's own overview of [Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/overview) describes the purpose of a sales platform as keeping track of accounts and contacts and moving a sale from lead through to order. That is the aim of any CRM: one place where the customer record lives so the rest of the sales process can use it. When the record is typed again at each step, the platform is being used as a filing cabinet rather than as the start of the process.

## What it looks like on the ground

- the same company name spelled three ways across the CRM, the quote and the invoice;
- quotes built in a spreadsheet by copying fields from the CRM record;
- salespeople staying late on Thursdays to "catch up the CRM" before the pipeline meeting;
- finance returning new-customer forms because a registration number or bank detail is missing;
- customers asked to supply the same details to sales, then to credit control, then to the delivery team;
- the top performers being the ones who resist updating the CRM, because they know what it costs them.

The last point is worth sitting with. When your best sellers avoid the system, the system is usually costing them more than it gives back. Related patterns are covered in [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) and in the discovery note on [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

## How the pain turns into money

The cost has several layers, and the first is the one people tend to see last.

- **Payroll spent on clerical work.** Every hour a salaried salesperson spends re-entering a record is an hour paid at selling rates for data capture. Commission-based sellers feel it as lost earning time instead.
- **Selling time that never happens.** The calls not made and follow-ups not sent because the afternoon went on admin are real revenue risks, even though they never appear on a ledger.
- **Error and rework.** Each retyping step is another chance for a transposed digit in a phone number, a wrong VAT number or a mismatched address. A quote that carries the wrong legal entity may need to be reissued, and an invoice that carries it may be disputed.
- **Delay.** The customer waits while the details move from one tool to the next, which stretches the time between "yes" and the first invoice.
- **Weakened data.** Records that are costly to update are updated late, so forecasts, contact lists and reports drift from reality.
- **Personal data spread across copies.** Under POPIA, personal information must be kept accurate and protected. The more copies that sit in personal spreadsheets and downloaded exports, the harder it is to keep them correct or remove them when asked. The text of the [Protection of Personal Information Act 4 of 2013](https://www.gov.za/documents/protection-personal-information-act) is published by the South African government.

The cost of personal side-records is explored further in [salespeople keeping customer records in personal spreadsheets](/impact/salespeople-personal-spreadsheets-customer-records-cost/), and the general pattern of retyping is covered in [duplication of customer data entry](/impact/pain-duplication-of-customer-data-entry/).

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical distribution business with a sales team of 12 in Gauteng. Replace them with your own.

| Assumption | Value |
| --- | --- |
| Salespeople | 12 |
| Hours a week each spends re-entering customer, quote or order details | 5 |
| Loaded cost per salesperson hour (salary, benefits, overhead) | R450 |
| Working weeks a year | 46 |
| Details-related corrections a month (reissued quotes, returned forms, disputed invoices) | 25 |
| Time spent on each correction | 45 minutes |

- Re-entry time: 12 × 5 × R450 × 46 = R1,242,000
- Corrections: 25 × 0.75 hours × R450 × 12 = R101,250
- **Illustrative total: about R1.34 million a year**

Even if half of the re-entry time is truly unavoidable, the remaining figure is large enough to justify a proper look. The model does not count the revenue effect of the lost selling hours, which is likely to be the larger number and the harder one to measure.

## Why it is tolerated

The work is spread thinly. Ten minutes after a call does not feel like a problem, and nobody tracks it. Salespeople assume it is part of the job. Managers see activity reports that show "CRM updated" and read it as discipline. Finance sees a payroll line that looks normal. And the business has often grown into the arrangement, so no single moment prompted a decision to question it.

## When it becomes urgent

- sales headcount is about to grow and each new hire will inherit the same manual routine;
- a large customer complains about being asked for the same information repeatedly;
- a pricing or tax error from a retyped quote reaches a customer;
- leadership asks for a forecast that nobody trusts because the CRM is out of date;
- a POPIA request exposes how many copies of customer details exist.

## What better looks like

The goal is not to make salespeople type faster. It is to ensure that a customer's details are captured once, at the point of first contact, and carried forward automatically.

1. **Map the journey of one customer record.** Follow a new customer from first call to first payment and mark every place where details are typed. Most teams are surprised by the count.
2. **Choose the system that owns the customer record.** Usually this is the CRM. Every other tool should read from it or receive from it.
3. **Connect the steps that matter most.** Generate quotes from CRM fields, and pass accepted quotes into accounting without a retype. Workflow tools such as [Power Automate](https://learn.microsoft.com/en-us/power-automate/getting-started) are described by Microsoft as a way to automate repetitive tasks and build workflows between apps and services; the same approach is available in most platforms.
4. **Cut fields, not just retype them.** Ask which fields are used by someone downstream. Remove the rest.
5. **Let finance supply what finance needs.** Credit and bank details usually do not need to pass through the salesperson at all.
6. **Measure it.** Ask the team to log re-entry time for two weeks. The number makes the case for change better than any argument.

Where administration is eating selling time more broadly, [high-value employees doing low-value admin](/impact/high-value-employees-doing-low-value-admin/) describes the wider effect on the payroll.

## Practical next actions

1. Pick the five most recent new customers and trace where each one's details were typed.
2. Count the typing steps and ask each salesperson to estimate the weekly time.
3. Decide which system is the single source for customer details.
4. Remove one handoff, for example quote creation from CRM data, before attempting anything larger.
5. Set a simple rule: a field that nobody downstream uses is deleted from the form.
6. Review the result in a month and compare the pipeline meeting preparation time.

## Bottom line

Administrative selling is a payroll cost hiding in the sales budget. It is rarely large on any single day, which is exactly why it persists. A business that captures customer details once, owns the record in one place and lets the rest of the process read from it gives its salespeople back hours that were always meant for customers.
