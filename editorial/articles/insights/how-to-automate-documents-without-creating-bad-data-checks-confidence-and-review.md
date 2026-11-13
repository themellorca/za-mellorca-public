---
hub: insights
record_id: INS-163
slug: how-to-automate-documents-without-creating-bad-data-checks-confidence-and-review
title: How to Automate Documents Without Creating Bad Data
description: Reading invoices, orders and forms automatically saves hours, but a wrong extracted value travels straight into your systems. Here is how to design document automation that checks before it posts.
lead: Reading invoices, orders and forms automatically saves hours, but a wrong extracted value travels straight into your systems. Here is how to design document automation that checks before it posts.
category: Data Quality
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Data Quality
sources:
  - https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence | https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence
  - https://www.sars.gov.za/businesses-and-employers/tax-invoices/ | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
  - https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
summary: Reading invoices, orders and forms automatically saves hours, but a wrong extracted value travels straight into your systems. Here is how to design document automation that checks before it posts.
layout: plain
---
A wholesaler in Pietermaritzburg automates supplier invoice capture. A tool reads each PDF, pulls out the supplier, invoice number, date and amounts, and posts the result to the accounting system. For the first month it looks like a success: hours of typing gone. Then the month-end reconciliation shows a cluster of invoices posted with the VAT amount in the total field, two duplicates from a supplier who sends each invoice twice and one invoice booked to the wrong supplier because two companies share a similar name.

None of these errors came from the reading itself being bad. They came from posting extracted data without checking it. Manual capture had checks built in, because a person noticed when a number looked odd. Automated capture removed the person and, with them, the checks.

## Why document automation creates a particular kind of bad data

When someone types a wrong value, the error is usually isolated. When an automated process misreads a field, it tends to misread it the same way on every similar document, so errors arrive in batches. They also arrive looking authoritative, because they came from "the system". And they arrive fast, so by the time someone notices, the data has flowed into reports, payments and customer records. Our article on [how one typing error becomes a disputed invoice and a wrong report](/insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/) shows how far a single bad value can travel; automation multiplies that distance.

The design goal, then, is not perfect extraction. It is making sure that uncertain or inconsistent values are caught before they are posted, and that the people who used to capture documents become the people who handle exceptions.

## Know what each document must contain

Start with a written definition of a valid document of each type. For South African tax invoices, much of this is set by law. SARS's page on [tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) lists what a full tax invoice must show, including the words "tax invoice" or similar, the supplier's name, address and VAT registration number, the recipient's details, a serial number and date, a description of the goods or services, the quantity, the value of the supply, the tax charged and the consideration. Those requirements make excellent validation rules: if an extracted invoice lacks a VAT number or the tax does not reconcile to the value, it should not post automatically.

Do the same for purchase orders, delivery notes, application forms and anything else you plan to automate. Define the required fields, the expected format of each and the relationships between them.

## Use confidence scores, but do not stop there

Most document extraction tools return a confidence score for each extracted value. Microsoft's documentation on [interpreting accuracy and confidence scores](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence) explains that field confidence is an estimated probability that the prediction is correct, and that where accuracy is critical, confidence can be used to decide whether to accept a result automatically or flag it for human review. It also notes that not every field returns a confidence score and that low read confidence often points to poor input quality, such as bad scans.

Set thresholds per field, not one threshold for the whole document. A low-confidence reference number might be acceptable; a low-confidence bank account number or total amount is not. Then add business checks that confidence scores cannot provide:

- **Arithmetic:** line items sum to the subtotal; subtotal plus VAT equals the total.
- **Reference data:** the supplier's VAT number matches a known supplier record; the customer exists; the product codes are valid.
- **Duplicates:** the same supplier and invoice number have not already been posted.
- **Plausibility:** the amount is within a normal range for this supplier; the date is not in the future or years in the past.
- **Cross-document matching:** the invoice matches an open purchase order and a delivery note, where your process uses them.

A value with high confidence that fails a business check is still a problem. In our experience the business checks catch more real errors than the confidence threshold does.

## Design the exception queue as carefully as the happy path

Documents that fail a check should land in an exception queue with the reason, the document image and the extracted values side by side, so a person can correct them in seconds. Measure the queue: how many documents enter it, why, and how long they wait. If one supplier's layout causes most of the exceptions, fix that template or ask the supplier for a cleaner format. Our guide to [building automation that expects exceptions from the start](/insights/how-to-build-automation-that-expects-exceptions-from-the-start/) covers the wider principle.

Resist the temptation to clear the queue by loosening thresholds. If the queue is too large, the fix is better input, better templates or better reference data, not accepting more uncertain values.

## Fix problems at the source, not downstream

The UK government's [Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) recommends using root cause analysis to solve data quality issues at their source rather than applying temporary fixes, and lists dimensions such as completeness, uniqueness, consistency, timeliness, validity and accuracy. Those dimensions are a useful checklist for document automation. Duplicated invoices are a uniqueness problem; a missing VAT number is a completeness problem; a date in the wrong format is a validity problem.

When you find a recurring error, trace it back. Is the scanner producing poor images? Is a supplier sending a new layout? Is your supplier master file missing VAT numbers, so the match always fails? Correcting the cause removes a whole class of exceptions, whereas correcting each document by hand keeps the cost forever. Our article on [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/) helps decide how strict each check needs to be.

## Roll out gradually and keep a trail

Run a new document automation in parallel with manual capture for a few weeks and compare results field by field before you let it post on its own. Then switch on automatic posting for the cleanest document types first, keeping the rest in review. Keep the original document linked to every record the automation creates, along with the extracted values, the checks applied and who approved any correction. When a disputed invoice surfaces six months later, that trail answers the question in minutes.

## Practical next actions

1. Pick one document type and write down its required fields, formats and the relationships between fields, using SARS requirements for tax invoices.
2. Set confidence thresholds per field, with stricter thresholds for amounts, VAT numbers and bank details.
3. Add arithmetic, reference-data, duplicate and plausibility checks before anything posts automatically.
4. Build an exception queue that shows the document, extracted values and failure reason together, and measure its size and age weekly.
5. Run the automation in parallel with manual capture for at least two weeks and compare every field before switching to automatic posting.
6. Review the top three exception causes each month and fix them at the source rather than by loosening checks.
