---
hub: impact
record_id: CPS-356
slug: duplicate-supplier-invoice-payments-weak-controls-cost
title: Paying the same supplier invoice twice: The direct cost of weak controls
description: Duplicate supplier payments send cash out for nothing. Simple controls on invoice numbers, supplier records and payment runs prevent most of them.
lead: Duplicate supplier payments are cash that leaves the business for nothing. Simple controls on invoice numbers, supplier records and payment runs prevent most of them and recover the rest.
category: Finance Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Finance Operations
commercial_domain: Finance Operations
primary_pain: Paying duplicate supplier invoices because controls are weak
primary_cost_mechanism: Direct cash loss, cash-flow impact, recovery labour and fraud exposure
sources:
  - National Fraud Initiative Report 2022 - 2024 (HTML) | https://www.gov.uk/government/publications/national-fraud-initiative-reports/national-fraud-initiative-report-2022-2024-html
  - Vendor invoices overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoices-overview
  - Procure to pay (part 4) - GOV.UK | https://www.gov.uk/government/publications/help-with-vat-compliance-controls-guidelines-for-compliance-gfc8/procure-to-pay-part-4
related:
  - The payroll cost of a slow, spreadsheet-heavy month-end | /impact/manual-month-end-close-payroll-cost/
  - Two departments, same work: The payroll cost of duplicated effort | /impact/departments-duplicating-same-work-payroll-cost/
  - Late invoices from manual billing: The cash-flow cost | /impact/late-invoicing-manual-billing-cash-flow-cost/
summary: Duplicate supplier payments are cash that leaves the business for nothing. Simple controls on invoice numbers, supplier records and payment runs prevent most of them and recover the rest.
layout: plain
---
## The tolerated pain

A supplier emails an invoice. A week later, their accounts department sends a reminder with the same invoice attached. Someone in finance captures it again, perhaps with the invoice number typed slightly differently, and both copies are approved and paid in the next payment run. Nobody notices until the supplier's statement shows a credit balance, or until the auditors find it, or never.

Most owners assume their business does not pay invoices twice. Most businesses also have no routine check that would tell them if it did. Duplicate payments are one of the few operational failures where the cost is pure cash: money leaves the bank account and buys nothing.

The handling cost of receiving the same invoice through several inboxes is covered in [supplier invoices arriving in multiple inboxes](/impact/supplier-invoices-multiple-inboxes-handling-cost/). That article treats multiple copies as a condition to investigate. This one is about the controls that stop a duplicate becoming a payment, and about recovering money already paid.

## How duplicates get through

- **Re-sent invoices and reminders** captured as new invoices.
- **Inconsistent invoice numbers**: "INV-1042", "INV1042" and "1042" look different to a system and to a tired person.
- **Duplicate supplier records**: the same supplier set up twice, under a trading name and a registered name, so a duplicate check per supplier never compares the two.
- **Statements paid as invoices**: a statement total paid alongside the individual invoices it lists.
- **Two payment routes**: an invoice paid by card or urgent EFT, then paid again in the normal run.
- **Manual payment runs** built from spreadsheets rather than from the accounting system's open items.
- **Automation retries**: an integration that resubmits a failed step and creates the invoice or payment twice.

## Why weak controls are tolerated

Small finance teams are busy, and controls feel like bureaucracy. Supplier set-up is often done by whoever is available. Approvals are given on the invoice image rather than against the ledger. And because suppliers rarely volunteer refunds promptly, overpayments sit quietly as credits on their books rather than as visible losses on yours.

## Evidence of scale

There is little published data on duplicate payments in South African private businesses, so it is worth looking at public-sector exercises where data matching is done systematically. The UK's [National Fraud Initiative report for 2022 to 2024](https://www.gov.uk/government/publications/national-fraud-initiative-reports/national-fraud-initiative-report-2022-2024-html) states that its matching of trade creditor data identified 819 duplicate payments totalling £11 million, of which £10.3 million (93%) was recovered, and that 548 duplicate supplier standing-data records were corrected or deleted. The report also cites an estimate that around 1.5% of an organisation's total outgoing cash flow can be attributed to duplicate payments.

That estimate relates to large public bodies in another country and should not be treated as a benchmark for any particular business. The useful lessons are qualitative: duplicate payments occur even in organisations with formal finance functions; duplicate supplier records are part of the problem; and most duplicate payments, once found, can be recovered.

## What accounting systems can already do

Many accounting and ERP systems include duplicate checks that are switched off or not used consistently. Microsoft's [vendor invoices overview for Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-invoices-overview), for example, describes an option that stops an invoice being submitted for approval when its number matches another posted invoice, alerting the person who submitted it, if the accounts payable parameter is set to reject duplicates. The same page describes blocking submission when the invoice total does not match the registered total, and matching invoice lines to product receipts. Smaller accounting packages commonly offer simpler versions, such as a warning when a supplier invoice reference has been used before. HMRC's [procure-to-pay compliance guidance](https://www.gov.uk/government/publications/help-with-vat-compliance-controls-guidelines-for-compliance-gfc8/procure-to-pay-part-4) lists, as a control point, that an invoice is recorded only once.

These checks are valuable but not complete. An exact-match check on invoice numbers will not catch a number typed with an extra space, a different prefix or a different supplier record. Controls need to cover data quality as well as system settings.

## How the pain becomes money

- **Direct cash loss:** the duplicate payment itself, until recovered, and permanently if never found.
- **Cash-flow impact:** even recovered money is unavailable while it sits with the supplier.
- **Recovery labour:** reconciling statements, contacting suppliers and processing refunds or credits.
- **Fraud exposure:** the same weaknesses that allow honest duplicates make deliberate duplicate billing easier.
- **Audit cost:** findings and adjustments take time from finance staff and external auditors.

## An illustrative cost model

This example is **illustrative**; all figures are assumptions. Picture a Polokwane wholesaler paying R3 million a month to about 120 suppliers.

| Item | Illustrative assumption | Annual figure |
| --- | --- | --- |
| Duplicate payments made | 3 a quarter, averaging R18,000 | R216,000 paid in error |
| Recovered from suppliers | 75% of the value, after an average of 60 days | R162,000 recovered |
| Permanently lost | Suppliers closed, disputed or never identified | R54,000 |
| Recovery labour | 12 cases × 4 hours × R350 per hour | R16,800 |

On these assumptions, the business loses about R70,800 a year outright and has R216,000 of cash tied up for weeks at a time. The rates are invented for the example. A one-off review of the last two years of payments is the quickest way to replace them with real numbers.

## When it becomes commercially urgent

1. Supplier statements regularly show unexplained credit balances.
2. The supplier master file has obvious duplicates or inactive records that are never cleaned.
3. Payment runs are assembled outside the accounting system.
4. Invoices arrive through several channels or are re-sent frequently.
5. An integration or automation now creates supplier invoices without human capture; see [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

## What better looks like

Every supplier exists once in the master file, with a registration or VAT number that is checked before a new record is created. Invoice numbers are captured in a consistent format and the system rejects or flags duplicates per supplier. Purchase-order and goods-received matching is used where purchases justify it. Payment runs are generated from approved open items in the accounting system, never from a separate list. Supplier statements are reconciled monthly. Approvals happen in a workflow rather than in inboxes, as discussed in [invoice approvals stuck in inboxes](/impact/pain-invoice-approvals-in-inboxes/).

## Practical next actions

1. **Run a duplicate review** of the last 24 months of payments: same supplier and amount within a short period; same amount and similar invoice number across different suppliers.
2. **Reconcile supplier statements** for your largest suppliers and request refunds for credit balances.
3. **Clean the supplier master file**: merge duplicates and deactivate unused records.
4. **Switch on duplicate-invoice checks** in your accounting system and standardise how invoice numbers are captured.
5. **Close side channels**: urgent payments are recorded against the invoice in the system before the run.
6. **Repeat the duplicate review quarterly** until the results are consistently clean.

Matching and reconciliation work is labour-intensive when done by hand; [the cost of manual payment matching](/impact/manual-payment-matching-reconciliation-cost/) explains why. Where invoice capture and approval can be automated safely, with duplicate checks built in, Mellorca's [business automation service](/services/business-automation/) can help design it.

## Bottom line

A duplicate payment is the most direct financial cost a weak process can create: money paid for nothing. Most duplicates are preventable with controls the business already owns, and many past ones are recoverable. A single review of historical payments usually pays for itself and shows whether the controls need attention.
