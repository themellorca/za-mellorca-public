---
hub: impact
record_id: CPS-038
slug: invoices-retyped-from-existing-records-billing-labour-cost
title: Typing invoices from data you already hold: The labour and billing delay cost
description: When quotes, job cards, timesheets and delivery notes already hold the billing details, retyping them into invoices costs paid hours and adds errors.
lead: When quotes, job cards, timesheets and delivery notes already hold the billing details, retyping them into invoices costs paid hours, introduces errors and slows billing.
category: Finance Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Finance Operations
commercial_domain: Business Automation
primary_pain: Staff manually create invoices from information that already exists in quotes, job cards, timesheets and orders
primary_cost_mechanism: Labour cost of invoice capture and checking, with error rework, revenue leakage and slower billing
sources:
  - https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf | https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf
  - Make sales quotes - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers
  - Create a project sales invoice to invoice a project - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/projects-how-invoice-jobs
  - Invoice sales - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-invoice-sales
related:
  - The payroll cost of a slow, spreadsheet-heavy month-end | /impact/manual-month-end-close-payroll-cost/
  - Paying the same supplier invoice twice: The direct cost of weak controls | /impact/duplicate-supplier-invoice-payments-weak-controls-cost/
  - Creating the same documents by hand: The labour cost of repeat paperwork | /impact/same-documents-created-by-hand-repeat-paperwork-cost/
  - Why supplier invoices still need so many hands before they are paid | /patterns/why-supplier-invoices-still-need-so-many-hands-before-they-are-paid/
summary: When quotes, job cards, timesheets and delivery notes already hold the billing details, retyping them into invoices costs paid hours, introduces errors and slows billing.
layout: plain
---
## The tolerated pain: the invoice is assembled twice

By the time most invoices are created, nearly every detail on them already exists somewhere in the business. The customer's name, address and VAT number sit in the customer record. The agreed prices sit in the accepted quote. The hours sit in a timesheet or job card. The quantities sit on a signed delivery note. The customer's order number sits in an email.

Yet in many South African small and mid-sized businesses, someone in finance opens each of those sources and types the details into the accounting package, line by line. The information is not new. It is simply being moved by hand from one place where it is already correct to another place where it can now be wrong.

This article is about that retyping work and the errors it creates. The related question of how long work waits before it is billed, and what that does to cash flow, is covered in [the cash-flow cost of late invoicing from manual billing](/impact/late-invoicing-manual-billing-cash-flow-cost/). The two problems usually travel together, but they have different costs and different fixes.

## Why businesses tolerate it

- **Each invoice only takes a few minutes.** Nobody multiplies those minutes by the number of invoices issued each month.
- **Finance is trusted to be careful.** Retyping feels like a control, because a person looks at every line.
- **The sources are in different tools.** Quotes may live in Word, job cards on paper, timesheets in a spreadsheet and orders in email, so there is no obvious single place to invoice from.
- **The accounting system was set up for finance only.** Operations never enter anything into it, so finance has to.

## Operational consequence

The symptoms are familiar to anyone who has worked in a small finance team:

- **Billing bunches up.** Invoices are created in batches when the bookkeeper has time, rather than when the work is done.
- **Finance chases operations.** Someone has to ask for missing job cards, unclear hours or the customer's order number before the invoice can be finished.
- **Small items fall off.** Call-out fees, extra materials and travel are on the job card but never make it onto the invoice.
- **Invoices bounce back.** Large customers reject invoices with a missing order number, a wrong entity name or a VAT number that does not match their records.
- **Credit notes multiply.** Every wrong price or quantity has to be reversed and reissued.

Rejected invoices matter in South Africa because a VAT-registered customer needs a valid [tax invoice](https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf) to claim input tax. SARS's checklist for VAT invoices lists what a full tax invoice must contain once the supply exceeds R5,000, including the supplier's and recipient's names, addresses and VAT numbers, a serial number and date, an accurate description, the quantity or volume supplied, and the value, VAT and total. Every one of those fields is a chance to mistype something that was already correct elsewhere.

## How the pain becomes money

There are four cost lines, and they should be measured separately rather than blended into one number.

1. **Capture labour:** the active minutes spent finding source documents and typing them into invoices.
2. **Checking labour:** the time a second person spends reviewing invoices because retyping is known to cause mistakes.
3. **Correction labour:** credit notes, reissued invoices and customer queries caused by capture errors.
4. **Revenue leakage:** billable items that were recorded at source but never invoiced. Only count this where you can show specific missed items from a sample.

There is also a timing cost. Invoices that wait for someone to retype them leave later, and payment terms usually run from the invoice. That cost is real, but it belongs to the billing-delay calculation rather than the labour calculation, so keep it apart to avoid counting the same problem twice.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African services business. They are not benchmarks. Replace each one with your own counts and timings.

| Activity (illustrative) | Assumption | Minutes per month |
| --- | --- | --- |
| Capturing invoices from source documents | 400 invoices × 8 minutes | 3,200 |
| Second-person check | 400 invoices × 2 minutes | 800 |
| Corrections and reissues | 20 invoices (5%) × 30 minutes | 600 |
| **Total** |  | **4,600** |

4,600 minutes is about 76.7 hours a month. At an illustrative loaded cost of R240 an hour, that is roughly R18,400 a month, or about R220,800 a year, spent moving information that already existed. The model excludes missed billable items and the cost of later payment, which should be estimated separately from your own sample.

That figure is not a saving on its own. Released hours only become money if they are redirected to useful work, absorb growth without a new hire, or remove overtime or temporary staff.

## Secondary consequences

Retyped invoices also weaken the audit trail. When an invoice is typed rather than generated from a quote, order or project, there is no reliable link back to what the customer agreed. Disputes then depend on someone finding the original email. Customer data can also drift: a customer updates their address with the sales team, but finance keeps typing the old one, a pattern described in [when your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/).

## When this becomes commercially urgent

- Invoice volume is rising and finance is asking for more staff or overtime.
- Corporate customers are rejecting invoices for missing references.
- Credit notes are a noticeable share of invoices issued.
- Spot checks of job cards find work that was never billed.
- The bookkeeper is the only person who knows how to assemble a correct invoice.

## What better looks like

The principle is simple: create the invoice from the record that already holds the data, rather than retyping it. Most accounting and business systems already support this. Microsoft's documentation for Business Central, for example, describes converting an accepted sales quote into a sales invoice or order, after which the invoice carries the number of the quote it came from.

The same documentation describes an optional setting that makes the customer's external document number mandatory, so an invoice cannot be posted without the order reference a corporate customer needs. For project work, Microsoft describes creating sales invoices directly from project planning lines, including a batch job that invoices several projects at once once work is complete or an invoicing date is reached.

The product is not the point. The point is that the business's own system can carry the quote, the order reference, the hours and the quantities forward without a person retyping them. Where operations work in a separate tool, the same result comes from an integration or a structured import, as discussed in [why sending an invoice requires so much work](/patterns/why-sending-an-invoice-requires-so-much-work/).

### Trade-offs to weigh

- **Garbage flows faster.** If quotes or job cards are inaccurate, generating invoices from them sends the error to the customer sooner. Fix the source first.
- **Some review is still needed.** Keep a human check on exceptions, high-value invoices and new customers rather than on every line.
- **Integrations need owners.** A connection between the job system and accounting can fail quietly, so someone must watch it.
- **Setup takes effort.** Price lists, customer records and item codes must be clean before invoices can be generated from them.

## Practical diagnostic

1. Take twenty recent invoices across different customers and job types.
2. For each line, note where the information originally came from: quote, job card, timesheet, delivery note or email.
3. Time how long it takes to assemble and capture a typical invoice, and count how many fields are typed rather than selected.
4. Count credit notes and rejected invoices over the last quarter and note the cause of each.
5. Compare a sample of job cards or delivery notes with what was invoiced, and list any items that were never billed.
6. Identify the single largest source document type and test whether invoices can be generated directly from it.

The broader habit of moving data by hand between systems is explored in [the cost of employees entering the same data twice](/impact/pain-employees-duplicated-data-entry/). Invoicing is usually the most expensive place it shows up, because errors reach customers and delay payment.

## The bottom line

Invoices built by retyping information the business already holds cost paid hours on every invoice, create errors that customers reject, and let small billable items slip away. The fix is rarely more care from finance. It is making the quote, order, timesheet or job record the starting point for the invoice, so that people review exceptions instead of copying data.
