---
hub: discovery
record_id: DISC-476
slug: why-supplier-invoices-need-one-front-door-as-volume-grows
title: Invoices arrive through multiple inboxes and channels
description: When invoices land in personal inboxes, shared mailboxes and chat messages, nobody knows what is owed. How to give accounts payable one front door and one record of arrival.
lead: When invoices land in personal inboxes, shared mailboxes and chat messages, nobody knows what is owed. How to give accounts payable one front door and one record of arrival.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable lead or financial manager
budget_owner: Financial director or managing director
sources:
  - https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoice-automation | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoice-automation
  - https://learn.microsoft.com/en-us/ai-builder/prebuilt-invoice-processing | https://learn.microsoft.com/en-us/ai-builder/prebuilt-invoice-processing
  - https://www.sars.gov.za/types-of-tax/value-added-tax/ | https://www.sars.gov.za/types-of-tax/value-added-tax/
summary: When invoices land in personal inboxes, shared mailboxes and chat messages, nobody knows what is owed. How to give accounts payable one front door and one record of arrival.
layout: plain
---
A supplier invoice for R84,000 is emailed to the accounts address on the first of the month. The same supplier's sales representative also sent it to the project manager, who forwarded it to the financial manager, who forwarded it to accounts payable with the words "please process". A week later the supplier's statement arrives through a third channel, a WhatsApp message to the owner, with the remark that the invoice is overdue. Accounts payable now holds two copies of the same invoice in different formats, and nobody is certain whether the first has been captured.

When a business is small this is irritating. When invoice volume grows, it becomes a control problem. This article looks at what happens when invoices arrive through several inboxes and channels, and how to redesign intake so that every invoice enters the process once, in one place.

## The problem in plain language

Invoice intake is the moment a supplier's bill becomes a record in your system. If there is only one door, you can count what came in. If there are six doors, including shared mailboxes, personal email, a portal, WhatsApp, courier-delivered paper and attachments on purchase queries, you cannot. Some invoices are captured twice, some late and some never.

Most businesses did not choose this arrangement. It grew because suppliers send invoices to whoever they know, and because staff forward what they receive without telling anyone else.

## What the buyer is actually trying to solve

People who search for this problem are generally finance managers or financial directors who feel invoice volume growing and the team struggling to keep up. They want to stop chasing invoices across mailboxes, avoid duplicate payments and meet payment terms so that suppliers stop complaining. They are rarely looking for a technology purchase first. They want a clear answer to a plain question: how do we make sure every invoice we owe is visible in one place, as soon as it arrives?

## Evidence and system mechanism

### Automation assumes a single feed

Microsoft's documentation on [invoice automation for scanned documents](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoice-automation) describes a typical arrangement: vendors send invoices by email to a service provider, optical character recognition generates invoice data and a scanned image, and an integration layer feeds both into the finance system. The design depends on a defined entry point. Where invoices land in a dozen personal mailboxes, no such feed can exist, and automation has nothing reliable to work from. The same documentation describes exception processing for invoices that fail to match, which is the second thing a controlled intake allows: exceptions are visible rather than lost.

### Data extraction works best on clean input

Microsoft's page on the [invoice processing prebuilt AI model](https://learn.microsoft.com/en-us/ai-builder/prebuilt-invoice-processing) says the model extracts key data such as invoice number, date and amount due, and advises providing one clear photo or scan per invoice for best results, in JPEG, PNG or PDF format within a stated file size. That advice has a practical consequence for intake. A photo of a crumpled invoice taken on a phone, a forwarded email chain with the invoice buried at the bottom, and a multi-invoice PDF all degrade the result. Setting simple rules for what suppliers send is part of the fix.

### The tax record depends on the invoice itself

For VAT vendors, the invoice is also a tax document. SARS maintains its guidance on [Value-Added Tax](https://www.sars.gov.za/types-of-tax/value-added-tax/), which is where businesses should confirm what a valid tax invoice must show and how input tax is claimed. An invoice that sits unseen in a forwarded email may be paid late, claimed in the wrong period or not claimed at all. A single intake point makes it possible to check each document for completeness on arrival, while the supplier can still correct it.

## Problem owner and why-now trigger

The problem owner is the accounts payable lead or financial manager. The budget owner is the financial director or managing director. The trigger is invoice volume growth: more suppliers, more projects, more people placing orders. The informal arrangement that worked at fifty invoices a month breaks at five hundred, because no single person can remember which invoices were seen. Growth also adds the approvers who receive invoices directly. A related symptom, covered in [invoice approvals trapped in inboxes](/impact/pain-invoice-approvals-in-inboxes/), is that approvers become a hidden channel of their own.

## Economic consequence

The visible costs are staff hours spent searching, forwarding and asking "have you seen this?", and late-payment friction with suppliers who stop extending favours. Handling cost is discussed in [the handling cost of supplier invoices in multiple inboxes](/impact/supplier-invoices-multiple-inboxes-handling-cost/).

The less visible cost is control. When the same invoice can arrive twice through different doors, duplicate payment risk rises, a theme in [duplicate supplier invoice payments and weak controls](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/). Accruals at month-end are incomplete because invoices received but not captured are not in the ledger. Cash forecasts are unreliable for the same reason. A business that cannot say what it owes this week cannot plan what to pay.

## Root cause

- **No published address.** Suppliers were never told where invoices should go, so they use contacts they know.
- **Order placers receive invoices.** Project managers, buyers and site staff deal with suppliers daily, so invoices arrive with them.
- **Forwarding has no receipt.** A forwarded email does not tell the sender whether anyone captured the invoice.
- **Intake and capture are the same task.** Whoever sees the invoice first is expected to process it, so nobody owns the log of what has arrived.

## Practical intervention

The aim is one front door and one record of arrival. Create a single accounts payable address and ask every supplier to use it, stating this on purchase orders and in supplier onboarding. Set a short rule: invoices sent elsewhere will be forwarded and the supplier asked to resend to the correct address. Staff who receive invoices forward them to the shared address without further comment, and the intake log, not the forwarder's memory, records what has arrived.

Next, define what a good submission looks like: one invoice per document, in PDF, with the purchase order number quoted. That helps both people and any extraction tool. Finally, reconcile weekly against supplier statements, since a statement is the independent list of what the supplier believes you owe.

### An illustrative example

Illustrative: a Pretoria construction supplier with 200 active vendors had invoices arriving in eleven mailboxes. The financial manager created one shared address, added it to every purchase order template and wrote to the twenty largest suppliers. Staff were asked to forward, not process. Within a quarter the weekly statement reconciliation, which had been turning up several missing invoices each time, was down to a handful, and two duplicate invoices were caught on arrival instead of after payment.

## Diagnostic questions

- How many mailboxes and channels received a supplier invoice last month?
- Can you say how many invoices arrived in total, not only how many were paid?
- Do purchase orders tell suppliers where to send invoices?
- How many missing invoices does a statement reconciliation find?

## What good looks like

Suppliers know where to send invoices and mostly do so. Anything arriving elsewhere is forwarded and logged, and the supplier receives a polite reminder. Accounts payable can state at any time how many invoices have arrived, how many are captured and how many await approval. Statement reconciliations find few surprises. Month-end accruals are complete.

## Practical next actions

1. Count the mailboxes, portals and messaging channels through which invoices arrived over the last month.
2. Set up one shared accounts payable address and add it to your purchase order template and supplier onboarding pack.
3. Write to your twenty largest suppliers with the address, the one-invoice-per-PDF rule and the need to quote the purchase order number.
4. Brief everyone who receives invoices to forward them to the shared address and not process them.
5. Reconcile your top ten supplier statements against captured invoices each week for the next two months.

## Where Mellorca fits

Mellorca helps finance and operations teams redesign how invoices enter and move through the business. That includes mapping every channel, defining the intake rules and showing where automation would help and where it would only speed up a muddle. The broader flow is described in [why supplier invoices still need so many hands before they are paid](/patterns/why-supplier-invoices-still-need-so-many-hands-before-they-are-paid/).

## Method note

The sources describe how invoice automation is structured, what input suits data extraction and where VAT guidance is published. They do not measure how many channels the average business uses. The scenario and example are illustrative rather than a client case, and tax requirements should be confirmed with SARS or an adviser.
