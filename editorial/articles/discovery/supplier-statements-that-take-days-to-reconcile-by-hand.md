---
hub: discovery
record_id: DISC-493
slug: supplier-statements-that-take-days-to-reconcile-by-hand
title: Supplier statements that take days to reconcile by hand
description: Every month the accounts payable team ticks supplier statements against the ledger line by line. Why the differences keep appearing, and how to cut statement reconciliation to the exceptions.
lead: Every month the accounts payable team ticks supplier statements against the ledger line by line. Why the differences keep appearing, and how to cut statement reconciliation to the exceptions.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable manager
budget_owner: CFO or financial director
sources:
  - Reconcile vendor payment receipts or refunds in the payment journal - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-apply-purchase-transactions-manually
  - https://www.sars.gov.za/wp-content/uploads/Legal/Notes/LAPD-IntR-IN-2012-56-Recipient-Created-Tax-Invoices-Credit-Debit-Notes.pdf | https://www.sars.gov.za/wp-content/uploads/Legal/Notes/LAPD-IntR-IN-2012-56-Recipient-Created-Tax-Invoices-Credit-Debit-Notes.pdf
  - Using Analytics and Reports for Financials | https://docs.oracle.com/en/cloud/saas/financials/25d/ocuar/payables-to-ledger-reconciliation-report-explained.html
related:
  - Expense claims are checked by hand against a written policy | /discovery/expense-claims-are-checked-by-hand-against-a-written-policy/
  - Invoices arrive through multiple inboxes and channels | /discovery/why-supplier-invoices-need-one-front-door-as-volume-grows/
  - Duplicate supplier invoices are caught after they are paid | /discovery/duplicate-supplier-invoices-are-caught-after-they-are-paid/
summary: Every month the accounts payable team ticks supplier statements against the ledger line by line. Why the differences keep appearing, and how to cut statement reconciliation to the exceptions.
layout: plain
---
On the third working day of the month, the accounts payable clerk prints the statement from the largest packaging supplier. It shows R412 000 owing. The ledger shows R371 000. She works down the statement with a highlighter: one invoice not yet captured because it is waiting for approval, a credit note the supplier issued that never arrived, a payment the supplier allocated to the wrong invoice, and two invoices captured twice in the supplier's system. It takes most of a morning. There are thirty more statements in the pile.

## The problem in plain language

A supplier statement is the supplier's view of what you owe. Your creditors ledger is your view. They should agree, apart from timing differences. In practice they often do not, and finding out why means comparing them document by document. When this is done by hand, it is slow, it is usually only done for the largest suppliers, and the same types of differences recur month after month because the causes are never fixed.

## What the buyer is actually trying to solve

The accounts payable manager or financial controller searching for this wants to reduce the time spent on statement reconciliation, find real problems sooner, such as missing credit notes or duplicate invoices, and cover more suppliers without adding staff. The question is what can be automated, what data is needed, and which causes should be fixed upstream.

## Evidence and system mechanism

### The ledger is only as reliable as its applications

Microsoft's documentation on [applying vendor payments and credit memos in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-apply-purchase-transactions-manually) states that all vendor ledger entries must be applied to obtain correct vendor statistics and account statements. Payments and credit memos that are posted but not applied to the right invoices leave open items that do not match the supplier's view, even when the totals agree. Unapplied or misapplied entries are a common source of statement differences that look like errors but are really housekeeping.

### Credit notes are a formal document with a purpose

SARS [Interpretation Note 56](https://www.sars.gov.za/wp-content/uploads/Legal/Notes/LAPD-IntR-IN-2012-56-Recipient-Created-Tax-Invoices-Credit-Debit-Notes.pdf) explains that a supplier must issue a credit or debit note to correct VAT incorrectly charged on a tax invoice, for example where the consideration for a supply is reduced, and that tax invoices, credit notes and debit notes create a paper trail for audit purposes. When a supplier's statement shows a credit note your ledger does not have, it is not just a balance difference; your VAT records may be incomplete too.

### Reconciliation reports exist, but not for the supplier's side

Finance systems provide reconciliation between the payables subledger and the general ledger, such as Oracle's [Payables to Ledger Reconciliation Report](https://docs.oracle.com/en/cloud/saas/financials/25d/ocuar/payables-to-ledger-reconciliation-report-explained.html), which helps reconcile payables transactions with accounting. These reports confirm your internal records agree with each other. They do not compare your records with the supplier's, which is why statement reconciliation remains a separate, often manual, task.

## Why this becomes urgent

A new payment platform often brings the problem into focus. When payments move to a new bank or payment tool, remittance advices change format, payment references change, and suppliers may allocate payments differently. Differences on statements jump for a few months, and the manual process cannot keep up. Growth in supplier numbers and invoice volumes has the same effect over time.

## Economic consequence

The labour cost is the most visible: days per month of skilled time spent ticking documents. The hidden costs are larger. Missing credit notes mean the business overpays or loses VAT input adjustments. Duplicate invoices on the supplier's side lead to disputes and stop-supply threats. Differences found late delay month-end close. Because reconciliation covers only the biggest suppliers, problems with smaller ones can run for months. Our piece on [late nights reconciling two spreadsheets](/moments/the-late-night-spent-reconciling-two-spreadsheets/) describes the human side.

## Root cause

- **Invoices are captured late.** Invoices waiting for approval are on the supplier's statement but not in your ledger.
- **Credit notes are not received or not captured.** Suppliers send them to a different address, or they are treated as low priority.
- **Payments are not applied consistently.** Lump-sum payments are not allocated to specific invoices in your system or in the supplier's.
- **Remittance advices are incomplete.** The supplier cannot tell which invoices a payment covers.
- **Statements arrive as PDFs.** Without structured data, comparison must be done by eye. Our pattern on [why supplier invoices need so many hands](/patterns/why-supplier-invoices-still-need-so-many-hands-before-they-are-paid/) covers the wider capture problem.

## What good looks like

Supplier statements arrive in one mailbox and are converted to structured data, either from a file the supplier provides or by document capture. The data is matched automatically against open items in the creditors ledger by document number and amount. Matched items need no attention. Differences are sorted into types: invoice not yet captured, credit note missing, payment allocation difference, possible duplicate, and unknown. Each type has a standard action and an owner, such as requesting the missing credit note or sending a detailed remittance. Remittance advices for every payment list the invoices paid. Payments and credit notes are applied to invoices when posted. Statement reconciliation covers all active suppliers monthly, with the clerk's time going only to exceptions. Recurring difference types are reported so their causes can be fixed.

## Diagnostic questions

- How many supplier statements are reconciled each month, and how many hours does it take?
- What share of suppliers is reconciled at all?
- What are the three most common types of difference you find?
- Do your remittance advices list every invoice each payment covers?
- Are all payments and credit notes applied to specific invoices in your system?

## Practical next actions

1. Record the time spent on statement reconciliation for one month and categorise every difference found by type.
2. Clear unapplied payments and credit notes in your creditors ledger so open items reflect what is truly owed.
3. Make sure every remittance advice lists the invoices paid, and send it automatically with each payment.
4. Route all supplier statements to one mailbox and convert them to structured data, starting with your largest suppliers.
5. Set up automatic matching of statement lines to open items, with an exception list sorted by difference type and owner.
6. Fix the most common cause first, for example slow invoice approval or missing credit notes, and track whether the difference count falls.

## Where Mellorca fits

Mellorca helps accounts payable teams automate statement capture and matching, connect it to the creditors ledger and set up exception queues. This sits within our [business automation and AI workflows](/services/business-automation-ai-workflows/) work. For the broader cost of the manual approach, see [the labour cost of manual reconciliation](/impact/manual-reconciliation-between-systems-labour-cost/).

## Method note

This article draws on Microsoft and Oracle product documentation and SARS Interpretation Note 56. It does not give tax advice; confirm VAT treatment of credit notes with your tax adviser. The opening example is illustrative.
