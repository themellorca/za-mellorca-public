---
hub: discovery
record_id: DISC-154
slug: customer-payments-arrive-without-the-references-needed-to-match-them
title: Customer payments arrive without the references needed to match them
description: A deposit with a vague reference cannot be matched to an invoice, so it sits unapplied while the customer gets reminders. Why reference data goes missing, and how to raise automatic matching rates.
lead: A deposit with a vague reference cannot be matched to an invoice, so it sits unapplied while the customer gets reminders. Why reference data goes missing, and how to raise automatic matching rates.
category: Accounts Receivable & Collections
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Finance operations manager or credit controller responsible for cash application
budget_owner: CFO or financial director
sources:
  - Rules for automatic application of payments - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-how-set-up-payment-application-rules
  - Review and apply payments manually after automatic application - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-how-review-apply-payments-auto-application
  - Reserve Bank on adoption of International Organization for Standardization in South Africa - South African Government | https://www.gov.za/news/media-statements/reserve-bank-adoption-international-organization-standardization-south-africa
related:
  - Disputes are tracked separately from invoice status | /discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/
  - Collections activity is not visible to account managers | /discovery/why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer/
  - Sales promises payment extensions that finance cannot see | /discovery/how-informal-payment-extensions-from-sales-undermine-collections/
summary: A deposit with a vague reference cannot be matched to an invoice, so it sits unapplied while the customer gets reminders. Why reference data goes missing, and how to raise automatic matching rates.
layout: plain
---
On the bank statement the line reads "ABC TRADING PMT 45 200.00". ABC Trading has six open invoices, none of them for R45 200. It might be three invoices added together, a part-payment of a larger one, or a payment for the new monthly service fee that started last month. The credit controller emails the customer to ask. Until the reply comes, the money sits in a suspense account, the invoices stay open, and the customer's account shows them as overdue.

## The problem in plain language

Matching a payment to what it pays for needs information: who paid, which invoices are being settled, and how the amount splits between them. Customers often send payments with a company name, a short code or nothing useful at all. Banking apps limit reference length, customers pay several invoices at once, and some pay from a parent company or a different account. When the reference is weak, automatic matching fails and the payment becomes manual work.

The cost is not only the time spent matching. Until a payment is applied, the ledger is wrong. Customers who have paid receive reminders, credit limits are blocked, and cash reports understate what has been collected.

## What the buyer is actually trying to solve

The finance operations manager or credit controller searching for this wants a higher share of payments to match automatically, fewer items in suspense, and faster resolution of the ones that do not match. They also want to stop chasing customers who have already paid. The practical questions are what data customers should send, what the matching system can use, and what to do with the exceptions.

## Evidence and system mechanism

### How automatic matching decides

Microsoft's documentation on [payment application rules in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-how-set-up-payment-application-rules) shows the logic most matching engines follow. The system first tries to match the related-party details on the bank line, such as bank account, name or address, to customers and vendors with open documents. It then tries to match the transaction text to document numbers or external document numbers, and finally matches the amount against open entries within a tolerance. Each rule carries a match confidence from low to high, and rules can be flagged for review before posting. The documentation notes that text matching only works for text longer than four characters.

The implication is direct: if the bank line carries no invoice number and the amount does not equal any single open item, the best the system can offer is a low-confidence guess based on name alone.

### Exceptions still need a human

The companion page on [reviewing and applying payments manually](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-how-review-apply-payments-auto-application) describes how users review suggested matches, split lump-sum payments across several invoices for the same account, and accept or reapply entries. It also points out that payments with discounts taken after the due date, or amounts converted from foreign currencies, may not match. These are the exceptions that pile up when references are poor.

### Payment messages can carry more data than most businesses use

South Africa's payment infrastructure has moved to ISO 20022 messaging. In its [statement on adopting the standard](https://www.gov.za/news/media-statements/reserve-bank-adoption-international-organization-standardization-south-africa), the South African Reserve Bank explains that ISO 20022 allows richer, better-quality data, including remittance details, the purpose of the payment and the original source and ultimate beneficiary. Whether that data reaches your ledger depends on what your customers send, what your bank passes through in statement files, and whether your system reads it.

## Why this becomes urgent

A change in billing model is a common trigger. Moving from a few large project invoices to monthly subscriptions or usage-based charges multiplies the number of small invoices. Customers start paying several at once, or paying a round amount on account, and a matching rate that was tolerable becomes a daily backlog. Other triggers include taking on a new customer segment that pays through banking apps with short reference fields, adding debit orders alongside EFTs, and moving to a new finance system whose matching rules have not been tuned.

## Economic consequence

Unmatched payments delay the true picture of cash, which weakens cash forecasting and credit decisions. Customers who have paid but still appear overdue receive reminders or are put on credit hold, damaging relationships and sometimes delaying orders. Credit control time goes on investigation instead of collecting genuinely overdue balances. At month-end, suspense balances must be cleared or explained before the close. Our analysis of [the cost of manual payment matching](/impact/manual-payment-matching-reconciliation-cost/) and the related problem of [paying customers still getting overdue reminders](/discovery/why-paying-customers-still-get-overdue-invoice-reminders/) describe the knock-on effects in more detail.

## Root cause

- **Customers are not told what to put in the reference.** Invoices and statements do not state a clear, short payment reference.
- **Invoice numbers are too long or inconsistent.** Long prefixes do not fit banking app fields and get truncated.
- **Customer bank details are not recorded.** The matching engine cannot use the payer's account number if it is not on the customer record.
- **Remittance advices arrive separately.** The detail of which invoices are being paid comes by email, disconnected from the bank line.
- **Matching rules were never tuned.** Default rules and tolerances do not reflect how your customers actually pay.

## What good looks like

Every invoice and statement shows one short, unique payment reference, usually the customer account number or the invoice number in a format that fits banking fields. Customer records hold the bank account numbers they pay from, so the system can identify the payer even when the reference is missing. Remittance advices are captured into the same queue as bank lines, not left in an inbox. Matching rules are tuned so that high-confidence matches post automatically and lower-confidence suggestions go to a review queue with an owner and a daily target. Unmatched items have an age limit after which the customer is contacted with a standard query. The automatic match rate is measured monthly and improves.

## Diagnostic questions

- What percentage of incoming payments matched automatically last month?
- How much is sitting in suspense or unapplied cash today, and how old is the oldest item?
- What reference do your invoices ask customers to use, and does it fit in a banking app's reference field?
- Do your customer records include the bank accounts customers pay from?
- Where do remittance advices go when they arrive?

## Practical next actions

1. Measure your current automatic match rate and the value and age of unapplied payments, so you have a baseline.
2. Choose one short payment reference format, print it clearly on every invoice and statement, and tell customers in writing how to use it.
3. Add customers' paying bank account numbers to their records, starting with the customers who generate the most unmatched items.
4. Route remittance advices into the same work queue as unmatched bank lines, so the two can be matched together.
5. Review and tune your matching rules and amount tolerances, and decide which confidence levels post automatically and which need review.
6. Stop automated overdue reminders for customers with unapplied payments on their account until those payments are resolved.

## Where Mellorca fits

Raising match rates is usually a mix of process changes with customers, data clean-up and configuration of bank feeds and matching rules. Mellorca supports this through [business automation and AI workflows](/services/business-automation-ai-workflows/), including capture of remittance advices and exception queues. For the forecasting side of the problem, see [why cash forecasts need to know which overdue invoices are disputed, promised or on hold](/discovery/why-cash-forecasts-need-to-know-which-overdue-invoices-are-disputed-promised-or-on-hold/).

## Method note

The matching logic described is taken from Microsoft's Business Central documentation as an example; other finance systems use similar approaches with different names. The information on ISO 20022 comes from the South African Reserve Bank's published statement. The opening example is illustrative.
