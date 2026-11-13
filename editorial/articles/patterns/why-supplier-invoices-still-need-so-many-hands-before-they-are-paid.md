---
hub: patterns
record_id: PAT-153
slug: why-supplier-invoices-still-need-so-many-hands-before-they-are-paid
title: Why supplier invoices still need so many hands before they are paid
description: Each supplier invoice is opened, keyed, matched and approved by hand. The hidden cost is memory-based checks, such as duplicates and changed bank details.
lead: Each supplier invoice is opened, checked, keyed, matched, approved and paid by hand. The hidden cost is not only the typing, but the checks that depend on memory: valid tax details, duplicates, delivery and changed bank details.
category: Finance, Billing & Cash Flow
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Finance, Billing & Cash Flow
pattern_family: Finance, Billing & Cash Flow
observable_condition: Supplier invoices arrive by email and post, and each one is opened, checked, typed into the accounting system, matched to an order or delivery, sent for approval and paid through manual steps performed by finance staff.
primary_identification: Manual accounts payable in which capture, matching, approval and payment controls depend on individual attention rather than designed checks.
commercial_value_dimensions: Finance capacity, fraud and payment risk, tax compliance, supplier relationships and cash flow control
sources:
  - https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf | https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf
  - Sabric warns customers of banking scam | https://www.sanews.gov.za/south-africa/sabric-warns-customers-banking-scam
  - Vendor invoices overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoices-overview
related:
  - When cash collection depends on someone remembering to follow up | /patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/
  - Why your technology stack keeps growing but the business gets no smarter | /patterns/why-a-growing-technology-stack-does-not-make-the-business-smarter/
  - When customers can see the gaps between your systems | /patterns/when-customers-can-see-the-gaps-between-your-systems/
summary: Each supplier invoice is opened, checked, keyed, matched, approved and paid by hand. The hidden cost is not only the typing, but the checks that depend on memory: valid tax details, duplicates, delivery and changed bank details.
layout: plain
---
## Observable condition

Supplier invoices arrive as PDF attachments to the accounts address, to individual buyers, to the branch manager and occasionally on paper with a delivery. Someone in finance downloads each one, checks that it looks right and types it into the accounting system. They then look for the purchase order, if there was one, and ask the person who ordered the goods whether they arrived. The invoice goes to a manager for approval by email. When it comes back, it is added to the next payment run, and the bank details are copied into the banking platform.

Each step is quick. Together they are a significant part of the finance team's week, and every step relies on someone noticing when something is wrong.

An illustrative example: a Free State agricultural supplies business with four branches receives several hundred supplier invoices a month. Its two-person finance team captures each one by hand, confirms delivery by phoning branches, and chases managers for approval before the weekly payment run. Month-end regularly finds invoices that were never captured, invoices captured twice, and suppliers phoning to ask why they have not been paid.

## Realisation

The visible cost of manual invoice processing is the typing. The larger cost sits in the checks that the process quietly depends on, each performed from memory and experience rather than by design.

Is this a valid [tax invoice](https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf)? SARS's checklist for VAT invoices sets out what a full tax invoice must contain where the supply exceeds R5,000, including the words "tax invoice", the supplier's and recipient's names, addresses and VAT numbers, a serial number and date, a description and quantity, and the value, VAT and total. A different, shorter set applies to abridged invoices. A clerk checking this by eye on hundreds of invoices will sometimes miss an omission, and an invalid invoice can affect the input tax the business is entitled to claim.

Has it already been captured? Duplicate invoices, resent reminders and statements that look like invoices all arrive in the same inbox. Did the goods actually arrive, at the agreed price and quantity? Without matching to an order and a delivery record, the business pays what it is billed.

And are the bank details genuine? SABRIC has warned about scams in which fraudsters, posing as suppliers, send notices that banking details have changed, and advises confirming any change with a known contact using a number from an independent source, not from the letter itself. In a manual process, the person copying bank details into the payment platform is the last line of defence.

**Realisation prompt:** which of these checks in your business is performed by a system, and which depends on one person's attention on a busy day?

## Identification

This is an accounts payable process-and-control problem. The visible symptom is finance workload, late supplier payments and month-end surprises. The common assumption is that finance needs more people or a scanning tool. The structural cause is that the invoice journey, from receipt through capture, validation, matching, approval and payment, has no designed controls, so each check depends on whoever is handling the invoice.

Narrower aspects are covered elsewhere: [supplier invoices arriving in multiple inboxes](/impact/supplier-invoices-multiple-inboxes-handling-cost/), [invoice approvals stuck in inboxes](/impact/pain-invoice-approvals-in-inboxes/) and [duplicate supplier payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/). The outbound side, issuing invoices to customers, is covered in [why sending an invoice requires so much work](/patterns/why-sending-an-invoice-requires-so-much-work/). This Pattern looks at the whole inbound journey and the controls it leaves to memory.

## Diagnosis

- **Many entry points.** Invoices reach the business through several addresses and people, so some arrive late and some never reach finance.
- **Manual capture.** Supplier, amount, VAT and line details are typed by hand, introducing errors that surface later as reconciliation differences.
- **Validation by eye.** Tax invoice requirements and duplicate checks depend on the clerk noticing.
- **No matching record.** Purchases are not always raised as orders, and deliveries are not recorded in a system, so confirming receipt means phoning someone.
- **Approval by email.** Approvals happen in mailboxes, with no record of who approved what or how long it waited.
- **Uncontrolled supplier master data.** Bank details can be changed on the strength of an email, by the same person who processes payments.

## Commercial impact

The commercial value at stake is finance capacity, fraud and payment risk, tax compliance, supplier relationships and cash flow control.

Finance capacity is consumed by capture and chasing rather than analysis. Fraud risk is concentrated in bank detail changes and duplicate payments. Tax compliance is weakened when input VAT is claimed on invoices that do not meet requirements, or not claimed on valid ones that were lost. Supplier relationships suffer when payments are late because invoices sat unapproved, and early-payment terms are missed. Cash flow control is weak because the business does not know what it owes until invoices are captured, so liabilities appear late, often at month-end, a problem related to [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/).

## Common misidentification

Invoice scanning or capture software is the usual answer. It can remove much of the typing, but if there are no purchase orders or delivery records to match against, no approval routing and no control over bank detail changes, the business has automated capture while leaving the riskier steps untouched.

The other misidentification is to treat errors and fraud attempts as individual failures. When a clerk misses a changed bank account, the question is why the process allowed one person to change and pay it without independent verification.

## Possibility

In a better state, all supplier invoices arrive at one address or upload point. Capture is automated, with a person reviewing what the system could not read. Each invoice is checked for required tax details and for duplicates on supplier and invoice number. Invoices for goods are matched to a purchase order and a recorded delivery; business systems commonly support matching invoice lines to product receipts and blocking submission when an invoice number already exists. Approvals are routed automatically by amount and cost centre, with a visible record. Bank detail changes require independent verification through a known contact and a second person's approval before the next payment.

For the agricultural supplier, that might mean one invoices address, branches recording deliveries in the system, approvals routed by branch, and a written rule that no bank detail change is accepted without a call-back.

## Intervention

1. **Map the journey.** Trace ten recent invoices from arrival to payment, noting every person, system and check.
2. **Consolidate entry.** Publish a single invoice address to suppliers and redirect the others.
3. **Define the checks.** Write down the validation steps: tax invoice contents, duplicate check, order and delivery match, approval limits.
4. **Protect supplier bank details.** Separate the people who change supplier details from those who release payments, and require independent verification for every change.
5. **Record deliveries.** Make receiving goods a system step so matching does not depend on a phone call.
6. **Automate capture and routing.** Only once the process and checks are defined, introduce capture and approval automation, using the approach in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/) as a guard.

## Diagnostic questions

- How many addresses and people receive supplier invoices?
- Who checks that each invoice meets tax invoice requirements, and how?
- How is delivery confirmed before an invoice is approved?
- Who can change a supplier's bank details, and is that change verified independently?
- How many invoices were found uncaptured or duplicated at the last month-end?

## Bottom line

Manual supplier invoice processing costs more than typing time. It leaves tax validity, duplicate detection, delivery confirmation and bank detail verification to individual attention, which is where errors and fraud find their way in. Consolidating how invoices arrive, defining the checks, protecting supplier details and then automating capture and approval turns accounts payable from a weekly scramble into a controlled process.
