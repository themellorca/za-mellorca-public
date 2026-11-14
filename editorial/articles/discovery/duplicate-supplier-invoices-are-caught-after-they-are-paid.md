---
hub: discovery
record_id: DISC-478
slug: duplicate-supplier-invoices-are-caught-after-they-are-paid
title: Duplicate supplier invoices are caught after they are paid
description: Invoices arrive by several channels with inconsistent numbers and duplicate supplier records. Check at capture, block exact matches, review near matches and merge duplicate suppliers.
lead: Invoices arrive by several channels with inconsistent numbers and duplicate supplier records. Check at capture, block exact matches, review near matches and merge duplicate suppliers.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable manager
budget_owner: Financial director or CFO
sources:
  - Using Payables Invoice to Pay | https://docs.oracle.com/en/cloud/saas/financials/25d/fappp/how-can-i-find-duplicate-invoices-without-considering-the.html
  - Using Payables Invoice to Pay | https://docs.oracle.com/en/cloud/saas/financials/25d/fappp/payables-invoice-audit-listing.html
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
related:
  - Invoices arrive through multiple inboxes and channels | /discovery/why-supplier-invoices-need-one-front-door-as-volume-grows/
  - Supplier bank-detail changes arrive by email and go unchecked | /discovery/supplier-bank-detail-changes-arrive-by-email-and-go-unchecked/
  - Expense claims are checked by hand against a written policy | /discovery/expense-claims-are-checked-by-hand-against-a-written-policy/
summary: Invoices arrive by several channels with inconsistent numbers and duplicate supplier records. Check at capture, block exact matches, review near matches and merge duplicate suppliers.
layout: plain
---
Picture the accounts payable team at a Johannesburg wholesaler that has just moved to a new payment platform. For years the team's most experienced clerk had a routine before every payment run: she sorted the proposed payments by supplier, scanned for repeated amounts, and compared them against the supplier statements she kept in a folder. Nobody had written the routine down. It lived in her week, and when the new platform went live and her role changed, it was not carried over.

Six weeks later a supplier's statement shows an invoice paid twice. The same invoice had been emailed to two different mailboxes and captured twice. One copy was entered as "INV-1043" and the other, from a reminder email, as "INV1043". The supplier also existed in the system under two records, one with "(Pty) Ltd" in the name and one without. Every check the platform ran passed, because each entry looked like a different invoice from a different supplier. The money, an illustrative R186,450, has left the account, and getting it back depends on the supplier agreeing to offset it against future invoices.

The operating condition is plain: duplicate supplier invoices are found only when somebody reviews payments after the fact, not when the invoice is captured. That matters to the financial director and the CFO because every duplicate that gets through is money paid twice, and recovery is slow, uncertain and dependent on the supplier's goodwill.

## The problem in plain language

A supplier invoice is a request for payment. The accounts payable process turns it into a record in the system, matches it to an order or receipt, approves it and pays it. A duplicate arises when the same request for payment is turned into two records, and both are paid.

Duplicates are rarely the supplier's attempt to be paid twice. They come from the way invoices reach the business. The same invoice may arrive by email, through a supplier portal, by post and as a reminder. It may be sent to the accounts mailbox, to the buyer and to the person who placed the order. It may be re-sent because the supplier thought the first copy was lost, or because an email was forwarded.

Each copy is captured by a person or a tool, and capture is where small differences creep in. A dash is added or dropped. A leading zero disappears. The letter O is typed for a zero. The date is read in a different format. The supplier is selected from a list that holds two entries for the same company.

Once two records exist, the system's job is simple. It approves and pays what it is given. If nothing at capture has flagged the pair, the duplicate travels the whole process and is found only when a person looks at the payment list, at a supplier statement or at a reconciliation.

This is different from [retries that create duplicate transactions](/discovery/retry-logic-creates-duplicate-transactions-at-the-receiving-end/). That problem is about systems repeating an action by mistake. Here the repeat comes from people and from several channels delivering the same real-world invoice, and the fix is at the point of capture.

## What the buyer is actually trying to solve

Accounts payable managers and finance leaders put this in practical terms. How do we stop paying the same invoice twice? How many have we already paid and not found? Why does the system miss duplicates that a person would see in seconds? What did the old process catch that the new one does not?

The outcome they want is a check at the moment of capture. An exact duplicate is blocked. A likely duplicate is held for a person to review before it can be approved. Duplicate supplier records are merged, so that the check compares like with like. Duplicates found after payment become rare, and when they happen, they are caught within days.

## Evidence and system mechanism

### Built-in checks are narrow, and some are switched off

Most finance systems have a duplicate check, but its scope is limited. Oracle's documentation on [finding duplicate invoices without relying on the invoice number alone](https://docs.oracle.com/en/cloud/saas/financials/25d/fappp/how-can-i-find-duplicate-invoices-without-considering-the.html) describes an additional check, which, once enabled, compares the combination of supplier, invoice type, amount, currency and date across all invoices received and processed from a supplier. The page shows that using it requires an administrator to create and enable a specific lookup. In other words, the broader check exists but is something the business has to turn on.

This pattern is common across products. A basic check on supplier and invoice number may run by default, and broader checks need configuration. Whether a given duplicate is caught depends on whether the right check is on and whether the data entered matches exactly.

### After-the-fact reports are a different thing

Systems also provide reports for finding duplicates after they have been entered. Oracle's [Payables Invoice Audit Listing](https://docs.oracle.com/en/cloud/saas/financials/25d/fappp/payables-invoice-audit-listing.html) is described as a report to use periodically to check that duplicate invoices were not entered for the same supplier, and to review for duplicates by supplier, amount and creation date. It helps identify invoices that may have been entered more than once.

Reports like this are useful and worth running, but they are a safety net, not a control. They find duplicates when somebody runs them, and by then an invoice may already be approved or paid. A process that depends on periodic review has a gap between the duplicate being captured and the duplicate being found.

### Matching on exact text misses the near duplicates

The checks above compare data as entered. Two invoices that are the same in reality but differ in how they were typed look different to an exact comparison.

| What differs between the two records | Why an exact check misses it |
| --- | --- |
| "INV-1043" and "INV1043" | Punctuation changes the text |
| "00123" and "123" | Leading zeros are different characters |
| "INV-1043" and "inv-1043" | Capital and small letters differ |
| The letter O and the digit zero | They look alike but are different characters |
| The supplier recorded under two names or two records | The check treats them as two suppliers |
| The same invoice in two currencies or amounts rounded differently | The amount does not match exactly |

The remedy is to compare a normalised version of each field: for example the invoice number with spaces, punctuation and leading zeros removed and letters made the same case, matched against a single supplier identity.

### What South African law gives you to match on

South African tax rules help here. SARS explains on its page about [tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) that, from 8 January 2016, a valid tax invoice must carry the words "Tax Invoice", "VAT Invoice" or "Invoice", the supplier's name, address and VAT registration number, the recipient's details where the recipient is a vendor, and a serial number and date of issue. A full tax invoice is required when the consideration is more than R5 000, and without a proper tax invoice a business cannot deduct input tax.

Those required fields are good matching keys. The supplier's VAT registration number identifies the supplier more reliably than a typed name, and the serial number and date of issue identify the invoice. Two captured invoices with the same supplier VAT number, the same normalised serial number and the same date are very probably the same invoice. This works for VAT-registered suppliers. For suppliers that are not VAT registered, you will need another stable identifier, such as the company registration number or bank account, and a clear rule.

Because input tax is claimed against a tax invoice, a duplicate that is captured can also create a risk of the same input tax being claimed twice. Ask your tax adviser how duplicates should be treated in your VAT returns.

## Why this becomes urgent

A new payment platform is the usual trigger. The old process had checks that lived in somebody's routine: a clerk who recognised repeats, a manual comparison with statements, a habit of reading the payment list line by line. Those checks were never written down, so they were never specified for the new platform.

The new platform often makes duplicates more likely, at the same time. It may capture invoices automatically from a shared mailbox and a supplier portal, which brings in the same invoice through two routes in the same hour. The volume goes up and the human review goes down.

The first duplicate payment found after go-live is the signal. It shows that the routine has been lost, that duplicates are being created at a different point than before and that nobody can say how many have already been paid.

## Economic consequence

The costs of late-caught duplicates fall in several places:

- **Money paid twice.** The invoice value, and sometimes more than one invoice.
- **Slow recovery.** Getting the money back depends on the supplier refunding it or agreeing to offset it, which may take weeks or months and ties up cash in the meantime.
- **Supplier statement disputes.** Reconciliations that do not agree, queries in both directions and strained relationships.
- **Rework.** Finance staff investigating the duplicate, unpicking approvals and corrections, and repeating the process for each one found.
- **Audit findings.** Auditors who find duplicate payments, or find the business cannot show how it prevents them, record a control weakness.
- **Hidden duplicates.** Those not yet found, which sit as overpayments on supplier accounts.

As an illustrative example only, suppose a duplicate of R186,450 is found six weeks after payment, and recovery takes a further two months of emails, statement queries and offsetting against later invoices. The business has funded the supplier for the best part of a quarter and used skilled staff time on something a capture-time check would have stopped in seconds. The amounts are invented, but the pattern, a large single loss and a slow recovery, is typical.

Duplicates found only when accounts are reconciled belong to a wider pattern, described in [leakage that only shows at month-end reconciliation](/discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/). The earlier the check, the smaller the loss.

## Root cause

The root cause is that invoices arrive through several channels and are captured with inconsistent numbers and supplier records, so duplicates are found only when somebody reviews payments. The point of capture is where the information is first available, yet it is where the least checking is done.

A second cause is that the checks were people, not process. The old routine caught duplicates because one person knew the suppliers and read the list closely. When the process changed, the knowledge did not move.

A third cause is that supplier records are not clean. Where one supplier exists under two records, any check that compares invoices within a supplier cannot see across the split. Many businesses have never cleaned their supplier master, because the duplicates were harmless until a check depended on them.

The channels problem is related to [procurement requests that disappear into email](/discovery/why-procurement-requests-disappear-into-email/). When invoices and requests arrive in personal inboxes and shared mailboxes, there is no single place at which to check what has already been received.

## Practical intervention

### Practical next actions

1. **Choose one entry point for all invoices.** Route email, portal and post invoices through a single capture queue, and tell suppliers to send invoices to one address only. Forward nothing manually to the queue without recording it.
2. **Define the match key.** Use the supplier's VAT registration number (or another stable identifier for non-VAT suppliers) together with the normalised invoice number, the invoice date and the amount. Write the rule down.
3. **Normalise before comparing.** Convert invoice numbers to one case, strip spaces and punctuation, remove leading zeros and treat commonly confused characters such as O and 0 as the same. Compare the normalised values.
4. **Block exact matches at capture.** If supplier, normalised invoice number, date and amount all match an existing invoice, the system should refuse to create a second record and show the person the original.
5. **Hold near matches for review.** Where some but not all fields match, for example the same supplier and amount with a similar number or a date a few days apart, put the invoice in a review queue. A named person checks it and records the decision before the invoice can be approved.
6. **Clean up supplier records.** Find suppliers that exist more than once, using VAT numbers, registration numbers, bank account details and similar names. Merge or block the duplicates, and set a rule that new suppliers are checked against existing ones before being created.
7. **Run a look-back.** Search recent payments for duplicates using the same key and normalisation, including across duplicate supplier records. Recover what you find, and note how each one got through.
8. **Keep the periodic reports as a safety net.** Run a duplicate report on a schedule, review the results and use what it finds to improve the capture rules.
9. **Record the check in the process.** Add duplicate checking to the written procedure for the payment platform, so that it does not depend on one person's routine again.

## Diagnostic questions

- At what point in our process would a second copy of an invoice first be noticed, and by whom or what?
- Do all invoices come through one entry point, or do they also reach individual mailboxes?
- Does our duplicate check compare normalised values, or only exact text?
- How many suppliers do we have under more than one record, and how would we find them?
- What did our old process catch that our new one does not?
- When did we last search paid invoices for duplicates, and what did we find?

## What good looks like

All invoices enter through one queue. At capture, the system compares the normalised supplier identifier, invoice number, date and amount against everything already received. Exact matches are blocked. Near matches wait in a review queue with a named owner. Each supplier exists once. A duplicate report runs on a schedule as a safety net, and finds little.

You can measure the result. The number of duplicate payments found after payment falls and, when one is found, it is traced to a gap that is then closed. The review queue is cleared within an agreed time. The supplier master has no unresolved duplicate records. Supplier statements reconcile without queries about invoices paid twice, and auditors see a documented control.

## Where Mellorca fits

If you do not know how many duplicates have already been paid, or how many suppliers appear twice, a [digital systems audit](/services/digital-systems-audit/) can run the look-back, clean up the supplier records and show where invoices enter your process. Once the rules are agreed, [business automation and AI workflows](/services/business-automation-ai-workflows/) can build the capture-time check, the normalisation and the review queue into your payment platform so they run on every invoice.

## Method note

This article draws on Oracle's documentation for duplicate invoice checks and the Payables Invoice Audit Listing, and on the SARS page on tax invoices. The scenario, the invoice numbers and the amounts are illustrative and not measured. The article does not claim that any product named is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the system you use. It is general information and not tax or legal advice: confirm VAT treatment of duplicate invoices with your tax adviser.
