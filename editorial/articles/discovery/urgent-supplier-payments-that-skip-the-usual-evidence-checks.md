---
hub: discovery
record_id: DISC-488
slug: urgent-supplier-payments-that-skip-the-usual-evidence-checks
title: Urgent supplier payments that skip the usual evidence checks
description: When a payment is marked urgent, the order, invoice and approval checks are often waived. Why urgency is the weak point in payment controls, and how to build a fast route that keeps the evidence.
lead: When a payment is marked urgent, the order, invoice and approval checks are often waived. Why urgency is the weak point in payment controls, and how to build a fast route that keeps the evidence.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable manager or finance operations lead
budget_owner: CFO or financial director
sources:
  - Internet Crime Complaint Center (IC3) - Business Email Compromise: The $50 Billion Scam | https://www.ic3.gov/PSA/2023/PSA230609
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
  - Separation of Duty (SOD) - Glossary - CSRC | https://csrc.nist.gov/glossary/term/separation_of_duty
related:
  - VAT checks done after supplier invoices are already in the workflow | /discovery/vat-checks-done-after-supplier-invoices-are-in-the-workflow/
  - Supplier bank-detail changes arrive by email and go unchecked | /discovery/supplier-bank-detail-changes-arrive-by-email-and-go-unchecked/
  - Foreign-currency payment costs nobody analyses by route | /discovery/foreign-currency-payment-costs-nobody-analyses-by-route/
summary: When a payment is marked urgent, the order, invoice and approval checks are often waived. Why urgency is the weak point in payment controls, and how to build a fast route that keeps the evidence.
layout: plain
---
It is Friday afternoon. The operations manager forwards an email from a supplier: if payment is not received today, Monday's delivery will be cancelled and the production line will stop. There is no purchase order yet and the invoice is a PDF attached to the email. The financial director approves by reply on her phone. The payments clerk captures the payment directly on the banking platform, bypassing the ERP because the invoice has not been loaded. The payment goes through. Whether the supplier was genuine, whether the amount was right, and whether the bank details matched the supplier's record, nobody checked.

## The problem in plain language

Most businesses have a standard payment process: a purchase order, a captured invoice, matching against the order and delivery, approval in the system, and a payment run. That process works for routine payments. When a payment is urgent, people step around it. Approval happens by email or message, the payment is captured directly at the bank, and the supporting documents are collected afterwards, if at all.

Urgency is exactly when controls matter most. Fraudsters create urgency deliberately, and genuine urgent payments are also more likely to contain errors because they are rushed.

## What the buyer is actually trying to solve

The financial director or accounts payable manager who searches for this wants a way to pay genuinely urgent suppliers quickly without abandoning the evidence and approval that protect the business. They want to know what minimum checks should apply to every payment, how to keep urgent payments inside the system, and how to see how often the bypass is used.

## Evidence and system mechanism

### Urgency and changed details are classic fraud signals

The FBI's Internet Crime Complaint Center describes business email compromise in its [public service announcement on the scam](https://www.ic3.gov/PSA/2023/PSA230609) as a sophisticated scheme targeting businesses and individuals who perform legitimate transfer-of-funds requests. It reports 277,918 incidents and an exposed dollar loss of more than USD 50.8 billion between October 2013 and December 2022. Its protection tips include confirming requests to change account information through a secondary channel, and being suspicious of requests to change payment methods or bank account details. An urgent payment that skips the normal route is exactly the opening such schemes look for.

### Approval workflows can lock payments until approved

Finance systems can enforce approval on payments themselves. Microsoft's documentation on [approval workflows in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows) explains that core approval workflows exist for purchase documents and payment journals, that a record pending approval stays locked for processing until all approvers approve, and that approvals can be delegated to a substitute when an approver is unavailable. Delegation matters here: one reason people bypass the system for urgent payments is that the normal approver is away.

### No one person should be able to complete a payment

NIST's glossary defines [separation of duty](https://csrc.nist.gov/glossary/term/separation_of_duty) as the principle that no user should have enough privileges to misuse a system on their own. In payments, that means the person who captures a payment should not also be able to release it, and the two-person rule should apply whether a payment is urgent or not.

## Why this becomes urgent

A new payment platform is a common trigger. When a business moves to a new banking platform or payment tool, there is often a period when payments can be captured in more than one place, and the bank-side capture route is easier than the ERP route. Urgent payments drift into the easier channel and stay there. Other triggers include a fraud attempt that nearly succeeds, an audit finding about payments without supporting documents, and supply chain pressure that makes urgent payments more frequent.

## Economic consequence

The direct risk is paying a fraudster or paying the wrong amount, and urgent payments outside the normal route are harder to recover because they are noticed late. Indirect costs include duplicate payments when the invoice is later processed through the normal route as well, a problem covered in [duplicate supplier invoice payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/), audit findings, and time spent at month-end chasing the documents that should have come first. When urgent payments are frequent, the standard controls become optional in practice.

## Root cause

- **The standard route is too slow for genuine urgency.** If the system cannot process a payment in hours, people will find another way.
- **Approvers are unavailable.** Without delegation, the only way to get approval quickly is outside the system, a pattern described in [when one missing approval holds up the payment run](/patterns/when-one-missing-approval-holds-up-the-whole-payment-run/).
- **Payments can be captured at the bank directly.** If the banking platform accepts payments not originating from the ERP, the bypass exists by design.
- **No minimum evidence rule.** Nobody has defined what must be in place before any payment, urgent or not.
- **Bypasses are not measured.** Without a count of out-of-process payments, management cannot see the problem.

## What good looks like

The business has a defined urgent payment route inside the finance system, not around it. It requires a short minimum evidence set before payment: a captured invoice or pro forma, a supplier record with bank details verified through a known contact, and approval by an authorised person through the system, with delegation set up so approval does not depend on one individual. The purchase order and delivery evidence may follow, but within a fixed number of days, with an owner and an exception report if they do not. Bank-side capture of supplier payments is restricted to payments created in the ERP, with a separate release by a second person. Every urgent payment is flagged, and the finance team reviews the list monthly to find suppliers or departments that rely on urgency too often. Our article on [automating approvals without losing control](/insights/how-to-automate-approvals-without-losing-control/) covers how to keep the route quick.

## Diagnostic questions

- How many supplier payments last quarter were made without an invoice captured in the finance system first?
- Can payments be captured and released directly on your banking platform by one person?
- Who approves payments when the usual approver is on leave or travelling?
- How do you verify bank details on an urgent payment to a supplier you have not paid before?
- Does anyone review urgent payments after the fact to confirm the evidence arrived?

## Practical next actions

1. Count out-of-process and urgent payments for the last three months and list the suppliers and requesters involved.
2. Define the minimum evidence required for every payment, including urgent ones, and publish it to finance and operations.
3. Set up an urgent payment route inside the finance system, with approval delegation so that it does not depend on one approver.
4. Restrict bank-side capture so supplier payments originate in the ERP and require release by a second person.
5. Require independent verification of bank details by phone to a known number for any new or changed supplier account, regardless of urgency.
6. Review urgent payments monthly, follow up missing documents, and address the suppliers or departments that generate most of them.

## Where Mellorca fits

Mellorca helps finance teams design payment routes that are fast enough for real urgency and still controlled, including approval workflows, delegation and the link between ERP and bank. This work sits within [digital operations improvement](/services/digital-operations-improvement/).

## Method note

Figures on business email compromise come from the FBI's 2023 public service announcement and relate mainly to reports made to that agency. System behaviour is described from Microsoft's Business Central documentation as an example. The opening scenario is illustrative.
