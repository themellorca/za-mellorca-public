---
hub: discovery
record_id: DISC-168
slug: why-small-overdue-balances-take-more-collections-time-than-they-are-worth
title: Small overdue balances consume disproportionate manual effort
description: Chasing a R340 balance takes as many steps as chasing R340,000. How to set balance bands, automate the small ones and fix the causes behind them.
lead: Chasing a R340 balance takes as many steps as chasing R340,000. How to set balance bands, automate the small ones and fix the causes behind them.
category: Accounts Receivable & Collections
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Credit controller or finance manager
budget_owner: Financial director or managing director
sources:
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - Late commercial payments: charging interest and debt recovery | https://www.gov.uk/late-commercial-payments-interest-debt-recovery
related:
  - Collections activity is not visible to account managers | /discovery/why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer/
  - Collections handoffs change when staff are absent | /discovery/why-collections-follow-up-changes-whenever-the-credit-controller-is-away/
  - Sales promises payment extensions that finance cannot see | /discovery/how-informal-payment-extensions-from-sales-undermine-collections/
summary: Chasing a R340 balance takes as many steps as chasing R340,000. How to set balance bands, automate the small ones and fix the causes behind them.
layout: plain
---
A credit controller has a list of 212 overdue accounts. Thirty of them account for 80 percent of the money. The other 182 owe between R180 and R2,400 each. Last week she spent most of her time on the long tail: emailing a statement to a customer owing R340, phoning a payables clerk about R1,150, and re-sending an invoice copy for R620 that the customer said they never received. Each task felt like progress. By Friday, three of the big accounts had slipped another week without a single call.

Small overdue balances are a real problem, but not because of the money. They are a problem because of the effort they consume compared with what they return, and because that effort is usually spent without anyone deciding to spend it.

## Why small balances take so much time

A R400 invoice takes the same steps to chase as a R400,000 one. Someone finds the invoice, checks whether it has been paid, confirms the contact, sends a reminder, waits, phones, logs a note, and checks again. Customers with small balances are also often the hardest to reach. They may have no dedicated accounts person, the invoice may have gone to a general mailbox, or the amount may be too small for anyone on their side to treat as urgent.

The effort is made worse by how small balances come about. A short payment because of bank charges, a rounding difference, a partly disputed line, a deposit paid slightly under the quoted amount, an unallocated receipt, a credit note not applied: many of these are not customers refusing to pay, but record-keeping differences that never got tidied up. Chasing them as if they were debts creates friction for no reason.

## How this grows with the customer base

The cost does not rise in step with revenue. It rises with the number of invoices. A business moving from 150 customers to 600 on similar average invoice values quadruples the number of small residual balances, but not the number of finance staff. The credit controller's day fills with low-value items while the larger exposures wait. The broader point on how small tasks multiply into real cost is made in [why small tasks become expensive at scale](/patterns/why-small-tasks-become-expensive-at-scale/).

## What finance systems provide for small amounts

Accounts receivable products usually include ways to handle small balances without a human touching each one. Microsoft's documentation on [credit and collections in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) says that collections users can waive, reinstate or reverse interest and fees in one step, and can create write-off transactions in one step. It also describes customer pools that organise accounts so that different agents or approaches can be applied to different groups of customers. The point is that a small residual balance can be treated by a different rule from a large exposure, and the system is built to allow it.

The guide to [collecting outstanding balances in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances) describes how statements and reminders can be created, issued and posted through automated processes, and how reminders can calculate finance charges. A statement showing all open items, sent automatically to every customer with an overdue balance, can clear many small items without any individual attention, particularly where the cause is an unnoticed short payment.

These are tools. The decision about what to do with a small balance is a business decision, and it should be made once and written down rather than made again every time one appears.

## A balance-size policy

Most businesses benefit from three bands, each with a defined treatment. The thresholds are examples and should come from your own cost of a collections touch and your own customer profile.

| Band | Treatment |
| --- | --- |
| Under a low threshold, such as R250 | Review for a recurring cause such as bank charges; write off against an approved account within an approved monthly limit, or net against the next invoice |
| Middle band, such as R250 to R5,000 | Automated statement and reminder only; a person steps in only after two automated attempts fail or the customer replies |
| Above the middle band | Named person, phone contact and a recorded promise to pay |

The write-off limit needs a control around it. A write-off is a decision to give up money, and it should have an approver, a monthly cap and a report. Done properly, it is a deliberate rule that converts hours of effort into a small, visible, accountable cost. Done informally, it becomes a way for balances to disappear without anyone noticing a pattern.

## Do not ignore the pattern behind the small amounts

Before writing anything off, look at why the balances are small. If thirty customers each owe R35 because of bank fees deducted from payments, the fix is a line in your payment terms or a change in how receipts are matched, not thirty write-offs a month. If many small balances come from credit notes that were issued but not applied, the fix is in the billing process. Writing off the symptom while leaving the cause in place only moves the effort to a different team.

It is also worth knowing what rights you have when late payment is real. The UK government's page on [late commercial payments](https://www.gov.uk/late-commercial-payments-interest-debt-recovery) explains that businesses there can claim interest and recovery costs, and that where no payment date is agreed, payment is treated as late 30 days after the invoice or delivery. That is UK law and does not apply directly to South African contracts, but it shows why clear written payment terms matter: they are what give a late-payment claim a basis. Check the terms in your own contracts, and seek legal advice before relying on interest or cost recovery.

The link to the wider collections picture is covered in [collections teams chasing without a ranked queue](/discovery/collections-teams-chase-customers-without-a-priority-queue/) and in [the cash-flow cost of inconsistent payment follow-up](/impact/inconsistent-payment-follow-up-cash-flow-cost/).

## Practical next actions

1. Export your overdue accounts and sort them by balance. Note how many accounts make up 80 percent of the value and how many make up the rest.
2. Ask the credit controller to log, for one week, how much time goes on balances below your chosen threshold, so the decision rests on real hours.
3. Review the twenty smallest balances for a common cause such as bank charges, unapplied credit notes or unallocated receipts, and fix the process behind the most common one.
4. Define two or three balance bands with a treatment for each, and set a write-off limit with a named approver and a monthly cap.
5. Set up an automated statement or reminder cycle for the middle band, so a person only becomes involved after the automated attempts fail.
6. Produce a monthly report of write-offs by customer and cause, and review it with the financial director.
