---
hub: discovery
record_id: DISC-496
slug: vat-checks-done-after-supplier-invoices-are-in-the-workflow
title: VAT checks done after supplier invoices are already in the workflow
description: Invalid tax invoices are often found at VAT return time, after approval and payment. Why tax validation belongs at the point of capture, and which checks to automate as invoice volumes grow.
lead: Invalid tax invoices are often found at VAT return time, after approval and payment. Why tax validation belongs at the point of capture, and which checks to automate as invoice volumes grow.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable manager working with the tax accountant
budget_owner: CFO or financial director
sources:
  - https://www.sars.gov.za/businesses-and-employers/tax-invoices/ | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
  - https://www.sars.gov.za/types-of-tax/value-added-tax/faqs-for-vat-vendors/ | https://www.sars.gov.za/types-of-tax/value-added-tax/faqs-for-vat-vendors/
  - https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoice-automation | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoice-automation
summary: Invalid tax invoices are often found at VAT return time, after approval and payment. Why tax validation belongs at the point of capture, and which checks to automate as invoice volumes grow.
layout: plain
---
Two days before the VAT return is due, the tax accountant reviews input tax claims and finds a problem. Eleven supplier invoices above R5 000 are missing the business's VAT number or address. Three carry a supplier VAT number that does not appear in the SARS vendor search. One supplier has charged VAT but is not registered at all. All of these invoices were approved by budget holders weeks ago, and most have been paid. The accountant now has to choose between delaying the claims, which costs cash, or chasing suppliers for corrected tax invoices against a deadline.

## The problem in plain language

In many businesses, supplier invoices go through capture, coding, approval and payment, and only reach someone who checks tax validity at the end, usually when the VAT return is prepared. By then the invoice has moved through the whole workflow and been paid. Any problem found has to be fixed backwards: the supplier must be contacted, a new tax invoice obtained, and the input tax claim delayed or reversed. The later the check, the more work and the less leverage the business has.

## What the buyer is actually trying to solve

The financial controller, tax accountant or accounts payable manager searching for this wants invalid invoices stopped at the point of capture, before approval and payment. They want to know which checks are required, which can be automated, and how to handle exceptions without slowing every invoice down.

## Evidence and system mechanism

### SARS sets out what a valid tax invoice contains

SARS's page on [tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) lists the required particulars, including the words tax invoice, VAT invoice or invoice, the supplier's name, address and VAT registration number, the recipient's name and address and, where the recipient is a vendor, its VAT number, a serial number and date, a description of the goods or services, the quantity, and the value, tax and consideration. A full tax invoice is required where consideration is more than R5 000, and an abridged invoice may be used at R5 000 or less. These are checkable fields.

### Registration can be verified

The SARS [FAQs for VAT vendors](https://www.sars.gov.za/types-of-tax/value-added-tax/faqs-for-vat-vendors/) answer the question of how to establish whether a person is registered for VAT by pointing to the VAT vendor search on the SARS VAT page. Checking a supplier's VAT number when the supplier is set up, and again periodically, catches unregistered or deregistered suppliers before invoices are paid.

### Capture is where systems can reject or route invoices

Microsoft's documentation on [invoice automation in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoice-automation) describes invoices arriving through an integration from an OCR provider, with failed invoices placed in an exception list showing the error message, where accounts payable can fix the problem and then create the pending invoice. The same point of entry is where tax checks can run: if required fields are missing or the supplier's VAT status is wrong, the invoice goes to an exception queue instead of an approver.

## Why this becomes urgent

Invoice volume growth is the usual trigger. A tax accountant can review every invoice at return time when there are a few hundred a month. At a few thousand, a review at the end becomes sampling, and errors slip through into claimed input tax. Moves to automated capture can make it worse if the automation pushes invoices straight to approval without tax checks. A SARS audit or verification request is the other common trigger, because it exposes how many invoices would not support the claims made.

## Economic consequence

Input tax on an invalid tax invoice may not be claimable until a valid one is obtained, which delays cash and can lead to penalties and interest if claims are disallowed on audit. Paying suppliers who charged VAT without being registered loses the business the VAT amount unless it can be recovered. Late corrections take time from finance and suppliers. Retyping invoice details to fix them adds to the cost described in [retyping invoices by hand](/impact/retyping-invoices-manual-capture-labour-error-cost/). And when invoices arrive through several channels, as discussed in [supplier invoices across multiple inboxes](/impact/supplier-invoices-multiple-inboxes-handling-cost/), a single consistent check is harder to apply.

## Root cause

- **Tax review is a period-end task.** It is scheduled around the VAT return, not around invoice arrival.
- **Capture focuses on amounts.** Capture checks totals and coding, not tax invoice particulars.
- **Supplier VAT status is set once.** VAT numbers are recorded at supplier set-up and never re-verified.
- **Approvers are not tax reviewers.** Budget holders approve the spend, not the document's validity.
- **No exception route.** Without a queue for tax problems, invalid invoices either stop entirely or pass through. Our pattern on [why supplier invoices need so many hands](/patterns/why-supplier-invoices-still-need-so-many-hands-before-they-are-paid/) shows how this adds touches.

## What good looks like

Every supplier invoice is checked for tax validity when it is captured. Automated rules confirm that required particulars are present, that the supplier's VAT number matches the supplier record, that the recipient details are your business's correct name, address and VAT number, and that full tax invoice rules apply above R5 000. Supplier VAT numbers are verified through the SARS vendor search at set-up and re-checked on a schedule. Invoices that fail go to a tax exception queue with a standard supplier request, and do not reach approvers until resolved. The tax accountant reviews exceptions daily rather than everything at month-end, and the VAT return becomes a confirmation rather than a clean-up.

## Diagnostic questions

- At what point in your invoice workflow is tax validity checked, and by whom?
- How many invoices were found invalid at VAT return time in the last six periods?
- When were supplier VAT numbers last verified against the SARS vendor search?
- Does your capture tool check for required tax invoice particulars, or only amounts?
- Where do invoices with tax problems go, and who follows up with the supplier?

## Practical next actions

1. List the tax invoice particulars SARS requires and turn them into a checklist used at capture for every invoice.
2. Verify the VAT numbers of active suppliers through the SARS vendor search, starting with the largest by spend, and update supplier records.
3. Configure your capture tool or workflow to flag invoices missing required particulars or with mismatched VAT numbers.
4. Create a tax exception queue with an owner and a standard request to suppliers for corrected tax invoices.
5. Prevent invoices in the tax exception queue from going to approval or payment until resolved.
6. Track the number of invalid invoices found at capture and at return time, and aim to move almost all detection to capture.

## Where Mellorca fits

Mellorca helps finance teams add tax validation to invoice capture, connect supplier records and build exception queues. This sits within our [business automation and AI workflows](/services/business-automation-ai-workflows/) work, usually starting with a sample of recent invoices to measure the error rate.

## Method note

This article summarises SARS published guidance on tax invoices and the VAT vendor search and uses Microsoft documentation as an example of capture-stage exception handling. It is not tax advice; confirm specific VAT questions with your tax adviser. The opening example is illustrative.
