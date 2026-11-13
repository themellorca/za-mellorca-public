---
hub: impact
record_id: CPS-357
slug: retyping-invoices-manual-capture-labour-error-cost
title: Retyping invoices into the accounting system: The labour and error cost
description: Retyping supplier invoices means paying twice, in capture hours and corrections. Extraction with human review of exceptions shifts effort to checking.
lead: Finance teams that retype supplier invoices pay twice: once in capture hours and again in corrections. Extraction with human review of exceptions moves effort from typing to checking.
category: Finance Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Finance Operations
commercial_domain: Finance Operations
primary_pain: Employees retyping invoice information into accounting systems
primary_cost_mechanism: Labour cost of manual capture, error and rework cost, delayed payments and VAT risk
sources:
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/
  - Invoice data extraction – Document Intelligence - Foundry Tools | https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice
  - Invoice processing prebuilt AI model | https://learn.microsoft.com/en-us/ai-builder/prebuilt-invoice-processing
  - Use OCR to turn PDF into e-invoices - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-ocr-pdf-images-files
related:
  - Typing invoices from data you already hold: The labour and billing delay cost | /impact/invoices-retyped-from-existing-records-billing-labour-cost/
  - Commissions and fees worked out in spreadsheets: The payroll and error cost | /impact/fees-commissions-charges-calculated-in-spreadsheets-error-cost/
  - The payroll cost of a slow, spreadsheet-heavy month-end | /impact/manual-month-end-close-payroll-cost/
  - Why supplier invoices still need so many hands before they are paid | /patterns/why-supplier-invoices-still-need-so-many-hands-before-they-are-paid/
summary: Finance teams that retype supplier invoices pay twice: once in capture hours and again in corrections. Extraction with human review of exceptions moves effort from typing to checking.
layout: plain
---
## The tolerated pain

A supplier invoice arrives as a PDF. Someone in finance opens it, reads the supplier name, invoice number, date, amounts and VAT, and types them into the accounting system. For invoices with several lines, they type each line, choose the right account and check that the totals agree. Then they open the next one. In many businesses this is a large part of someone's week, every week.

It is tolerated because it works and because it feels like part of the job. The invoices are already digital, so it does not look like a paper problem. The person doing it is careful, so errors seem rare. And the cost is buried in a salary rather than shown on any invoice of its own.

This article focuses on the capture step itself. How invoices arrive and get routed is covered in [the handling cost of supplier invoices arriving in multiple inboxes](/impact/supplier-invoices-multiple-inboxes-handling-cost/), and the risk of paying the same invoice twice is covered in [duplicate supplier invoice payments and weak controls](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/). Here the question is simpler: why are people still retyping information that already exists in a document?

## Why manual capture persists

- **It is the way it has always been done.** The process was designed when invoices arrived on paper and was never revisited.
- **Suppliers use different layouts.** Every invoice looks different, which makes automation seem harder than it is.
- **Capture doubles as checking.** Staff check the invoice as they type it, so removing the typing feels like removing the control.
- **Volumes grew gradually.** Fifty invoices a month was manageable; five hundred crept up without a decision point.
- **The accounting system's capture features are unused.** Many systems offer document capture, but it was never switched on or configured.

## Operational symptoms

- finance staff spending hours a day on data entry rather than analysis or supplier queries;
- a capture backlog at month-end that delays closing and reporting;
- transposed digits, wrong dates and invoices posted to the wrong supplier;
- VAT amounts or numbers that do not match the source document;
- suppliers querying late payments because invoices were captured late;
- overtime or temporary staff at busy periods just to keep up.

## Why accuracy matters beyond tidiness

Captured invoice data feeds VAT returns. The South African Revenue Service page on [tax invoices](https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/) lists the particulars a full tax invoice must contain when the consideration exceeds R5,000, including the supplier's and recipient's names, addresses and VAT registration numbers, a serial number and date, a description and quantity of goods or services, and the value, tax and total consideration. SARS states that without a proper tax invoice a business cannot deduct input tax. Careless capture does not change the invoice itself, but it can hide the fact that an invoice is incomplete, or attach the wrong values to a valid one.

## What capture technology can and cannot do

Document extraction has become mainstream. Microsoft's documentation for the [Document Intelligence invoice model](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice) describes extracting key fields and line items from invoices in formats including phone photos, scans and digital PDFs, returning structured data such as customer, billing address, due date and amount due. Microsoft notes that accurate extraction is typically the first and one of the most critical steps in invoice automation.

Extraction is not infallible. The [AI Builder invoice processing model](https://learn.microsoft.com/en-us/ai-builder/prebuilt-invoice-processing) returns a confidence score for each field, and Microsoft's own examples route invoices to further processing when the confidence for a value such as the invoice total falls below a chosen threshold. Business Central's guidance on [using OCR to turn PDFs into purchase invoices](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-ocr-pdf-images-files) is frank that a service may misread a supplier's layout at first, for example mistaking a logo for the vendor name, and describes correcting those errors so the service learns, as well as a manual verification step for uncertain fields.

The lesson is that the right design is not "no human". It is people reviewing exceptions and low-confidence fields instead of typing every field on every invoice.

## How the pain becomes money

- **Labour cost:** paid hours spent copying data that already exists in a document.
- **Error and rework cost:** time spent finding and correcting mis-keyed invoices, plus supplier queries.
- **Cash-flow impact:** late capture delays approval and payment, which can cost early-payment discounts or supplier goodwill.
- **Tax risk:** wrong VAT figures or incomplete invoices accepted without question.
- **Scaling cost:** more invoices means more capture staff, so growth adds overhead.

## An illustrative cost model

This example is **illustrative**; every figure is an assumption. Picture a Polokwane building supplies business receiving 600 supplier invoices a month.

| Input | Manual capture (assumed) | Extraction with exception review (assumed) |
| --- | --- | --- |
| Minutes per invoice | 6 | 2 |
| Hours per month | 60 | 20 |
| Cost at R250 per hour | R15,000 | R5,000 |
| Invoices needing correction (assumed 2%) | 12, at 45 minutes each | Fewer, if checks target low-confidence fields |

On these assumptions, manual capture costs about R180,000 a year in labour, plus roughly nine hours a month of corrections. Extraction with review could reduce the capture labour to about R60,000 a year, before the cost of the tool and set-up. Whether the saving is worth it depends on your volumes, your software and your supplier mix, so test with a month of your own invoices before committing.

## Trade-offs to respect

Automated capture is not worth it for every business. At very low volumes the set-up effort may exceed the saving, and suppliers with unusual layouts may need correction for some time. Capture also needs a clean supplier master file, or extracted invoices will be matched to the wrong account. Treat the first months as a learning period and keep the manual check for high-value or unusual invoices.

## When it becomes commercially urgent

1. Invoice volumes are growing and finance is asking for another capturer.
2. Month-end close is regularly delayed by capture backlogs.
3. Errors have caused overpayments, supplier disputes or VAT corrections.
4. Skilled finance staff are spending most of their time on data entry.

## What better looks like

Invoices arrive in one place and are read automatically. Supplier, date, number, amounts and VAT are extracted and matched to the supplier record and, where relevant, the purchase order. People review exceptions: unknown suppliers, mismatched totals, missing VAT details and low-confidence fields. Corrections improve future extraction. Finance time moves from typing to checking, queries and analysis. The wider pattern of skilled people doing clerical transfer is described in [when copy and paste becomes part of the job description](/patterns/when-copy-and-paste-becomes-part-of-the-job-description/).

## Practical next actions

1. **Time the capture** of a sample of invoices to establish your own minutes per invoice.
2. **Count monthly volumes** and the share from your top twenty suppliers.
3. **Check what your accounting system already offers** for document capture.
4. **Pilot extraction** on one month of invoices and compare accuracy with manual capture.
5. **Define exception rules** for what must always be reviewed by a person.
6. **Measure** hours, error rates and capture backlog before and after.

The method for pricing a task like this is set out in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/). Designing capture and approval flows is part of Mellorca's [business automation](/services/business-automation/) work.

## Bottom line

Retyping invoice data is paid labour spent copying information that already exists. It adds errors, delays and growth overhead. Modern capture tools do not remove the need for judgement, but they let finance staff apply it to the exceptions instead of to every keystroke.
