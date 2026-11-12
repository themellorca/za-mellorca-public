---
hub: impact
record_id: CPS-355
slug: pain-invoice-approvals-in-inboxes
title: Invoice Approvals Stuck in Inboxes
description: Manual, inbox‑based invoice routing creates delays that ripple through cash flow and supplier relationships.
lead: Manual, inbox‑based invoice routing creates delays that ripple through cash flow and supplier relationships.
category: mellorca.com
published_date: 2026-10-01
updated_date: 2026-10-01
eyebrow: Business Automation
commercial_domain: mellorca.com
primary_pain: Invoices remain unprocessed in inboxes, delaying payments
primary_cost_mechanism: cash-flow disruption, supplier relationships
sources:
  - Late payment | https://single-market-economy.ec.europa.eu/smes/sme-strategy/late-payment-directive_en
  - Late commercial payments: charging interest and debt recovery | https://www.gov.uk/late-commercial-payments-interest-debt-recovery
  - Late commercial payments: charging interest and debt recovery | https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt
  - Vendor invoices overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoices-overview
related:
  - The Cost of Retyping Customer Details into Every System | /impact/pain-duplication-of-customer-data-entry/
  - Projects Run Through Email Threads and Private Spreadsheets | /impact/pain-projects-managed-through-email-spreadsheets/
  - The Hidden Productivity Cost of Poor Office Wi-Fi | /impact/pain-poor-office-wi-fi-slowing-employees-down/
summary: Manual, inbox‑based invoice routing creates delays that ripple through cash flow and supplier relationships.
layout: plain
---
Invoice approvals languishing in inboxes are not just a nuisance; they anchor a slow and error-prone financial process that directly affects cash flow and supplier trust. A supplier invoice arrives as a PDF, is forwarded to a budget holder, waits behind a week of other email, is queried, forwarded again and eventually approved. By the time it reaches the payment run, the due date may have passed and any early-payment discount has expired.

When approvals fail to move at the pace of business, discounts are missed, payment terms are breached and suppliers struggle with the reliability of payment timing. The friction compounds as teams juggle PDF scans, email threads and multiple approval steps without a unified workflow.

## Why businesses tolerate it

Email is free, familiar and already open on everyone's screen, so routing invoices through it feels efficient. Approvers are senior people with other priorities, and nobody wants to chase them. Finance sees the delay but cannot see where each invoice is sitting, and the budget holder does not see the consequence because the supplier calls accounts payable, not them. The cost is spread across departments, so no single person owns it. Mellorca's insight on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) explores this pattern more broadly.

## Operational consequence

Operational symptoms include late payments, repeated supplier queries and inconsistent approval timestamps. Typically the business sees:

- **No status visibility:** finance cannot say whether an invoice is unopened, queried or approved without asking.
- **Chasing work:** accounts payable spends hours each week sending reminders and answering supplier calls about payment status.
- **Weak audit trail:** approval evidence is an email reply that may be forwarded, edited or lost when someone leaves.
- **Duplicate risk:** the same invoice, resent by a frustrated supplier, can enter the process twice.
- **Month-end distortion:** unapproved invoices are missing from accruals, so reported costs and liabilities are understated.

Purpose-built finance systems treat this differently. Microsoft's documentation for Dynamics 365 Finance, for example, describes vendor invoice review workflows that can apply to the invoice header, the lines or both, along with checks that block submission when totals do not match or when an invoice number duplicates a posted invoice. The point is not the specific product. It is that approval is a controlled workflow with a status, rather than a message somewhere in someone's inbox.

The intake side of the same problem is covered in Mellorca's article on [supplier invoices arriving in multiple inboxes](/impact/supplier-invoices-multiple-inboxes-handling-cost/).

## Financial consequence

The financial effect extends beyond timing. Late payment can incur interest and recovery charges, harm supplier relationships and degrade the predictability that underpins financial planning. The cost mechanism is anchored in working capital impact, interest on late payments, lost discounts, handling labour and supplier risk.

Late payment is also regulated in many markets. In the European Union, the Late Payment Directive gives suppliers an automatic entitlement to interest on overdue payments, set at least 8% above the European Central Bank reference rate, plus a minimum of EUR 40 in recovery costs. In the UK, GOV.UK guidance sets statutory interest for business-to-business debts at 8% plus the Bank of England base rate. The rules differ by jurisdiction, so check the law that applies to your contracts, but the direction is consistent: paying late can cost more than the invoice.

### An illustrative cost model

The following example is **illustrative only**. Each input is an assumption, not a benchmark or a measured result.

| Assumption (illustrative) | Value |
| --- | --- |
| Supplier invoices per month | 400 |
| Average invoice value | R18,000 |
| Share of invoice value from suppliers offering 2% for payment within 10 days | 20% |
| Share of those discounts currently missed because of approval delay | 100% |
| Invoices paid late each month because of approval delay | 20 |
| Average days late | 15 |
| Annual interest or late charge applied | 15% |
| Accounts payable hours spent chasing approvals and answering supplier queries each week | 6 |
| Loaded hourly cost of that time | R250 |

On those assumptions:

- **Missed discounts:** R7.2 million a month × 20% = R1.44 million eligible. At 2%, that is R28,800 a month, or **R345,600** a year.
- **Late-payment charges:** 20 invoices × R18,000 = R360,000 overdue each month. At 15% a year for 15 days, about R2,219 a month, or **R26,630** a year.
- **Chasing labour:** 6 hours × R250 × 48 weeks = **R72,000** a year.

The illustrative total is about **R444,000 a year**. Notice where the money sits. The interest charge is modest; the larger costs are discounts the business could have taken and staff time spent chasing. A 2% discount for paying 20 days early is worth roughly 37% on an annualised basis (2 ÷ 98 × 365 ÷ 20), which is why it is worth capturing when cash allows. Not every business will want to pay early, but delayed approval removes the choice.

Harder to price but often more important: suppliers who are paid unpredictably may tighten credit terms, ask for deposits, raise prices or prioritise other customers when stock is short.

## When it becomes urgent

Act when supplier statements regularly show overdue items that finance had not seen, when early-payment discounts are offered but rarely taken, when a key supplier changes terms, when month-end accruals keep needing late adjustments, or when an approver's absence leaves a backlog. Growth in invoice volume without a change in process is a strong trigger, because inbox routing scales with headcount rather than with automation. The capacity cost of queued approvals is covered in [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/).

## Resolution

Remediation prioritises end-to-end digital invoice processing, centralised approval workflows and real-time visibility of status. An automation layer that routes invoices to the right approver, enforces policy and keeps an auditable trail reduces cycle times and protects supplier relationships.

1. Measure today's cycle time from invoice receipt to approval, and from approval to payment.
2. Create one intake address or portal so every invoice enters the same queue.
3. Define approval rules by amount, cost centre and supplier, with named delegates for absence.
4. Move approval into a workflow with status, reminders and escalation instead of email.
5. Match invoices to orders and receipts automatically where purchase orders exist.
6. Flag discount-eligible invoices so they are approved first.
7. Report weekly on invoices awaiting approval and their age.

Mellorca's [business automation](/services/business-automation/) work focuses on designing these workflows around the systems a business already uses.

## What better looks like

Better looks like a resilient, auditable and scalable process that respects terms, avoids manual handoffs and provides clear exception handling. Finance can see every invoice and its status. Approvers receive a short, prioritised queue. Suppliers are paid when promised.

## Bottom line

The bottom line is not just faster accounts payable; it is steadier cash flow, improved supplier confidence and a more predictable financial operating model. An invoice sitting in an inbox is a small delay. Hundreds of them a month are a working-capital decision the business never meant to make.
