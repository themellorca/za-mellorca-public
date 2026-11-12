---
hub: discovery
record_id: DISC-158
slug: how-informal-payment-extensions-from-sales-undermine-collections
title: Sales promises payment extensions that finance cannot see
description: A friendly yes from an account manager can leave finance chasing a customer who has been promised more time. How to record extensions without taking flexibility away from sales.
lead: A friendly yes from an account manager can leave finance chasing a customer who has been promised more time. How to record extensions without taking flexibility away from sales.
category: Accounts Receivable & Collections
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Credit controller or finance manager, working with the sales manager
budget_owner: Financial director or managing director
sources:
  - Late commercial payments: charging interest and debt recovery | https://www.gov.uk/late-commercial-payments-interest-debt-recovery
  - Billing collection methods | https://docs.stripe.com/billing/collection-method
  - How invoicing works | https://docs.stripe.com/invoicing/overview
related:
  - Collections activity is not visible to account managers | /discovery/why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer/
  - Collections handoffs change when staff are absent | /discovery/why-collections-follow-up-changes-whenever-the-credit-controller-is-away/
  - Cash forecasts ignore real collections workflow states | /discovery/why-cash-forecasts-need-to-know-which-overdue-invoices-are-disputed-promised-or-on-hold/
summary: A friendly yes from an account manager can leave finance chasing a customer who has been promised more time. How to record extensions without taking flexibility away from sales.
layout: plain
---
A customer rings their account manager three days before an invoice falls due and asks for another two weeks. The account manager, wanting to keep the relationship warm, says yes and sends a friendly confirmation by WhatsApp. The ledger still shows the invoice as due on Friday. On Monday the credit controller sends a firm reminder, the customer replies with a screenshot of the promise, and the account manager is cc'd in an uncomfortable thread. Nobody acted in bad faith. The agreement simply lived in a place finance could not see.

## The problem in plain language

In many growing businesses the person who sells and the person who collects work from different information. Sales hears about cash problems first, because customers phone the person they know. Finance works from the due date in the accounting system. When a salesperson grants an extension informally, there are two versions of the truth: the customer's and the ledger's. The longer the gap, the more it costs to reconcile, and the more it damages the customer's confidence that the business knows what it has agreed.

## What the buyer is actually trying to solve

A financial director or credit controller searching for this wants three things. They want to stop chasing customers who have an approval in hand. They want to know how much of the overdue balance is real and how much is promised-but-invisible. And they do not want to take away the commercial flexibility that sales needs to keep a good customer, because a rigid rule that refuses every extension will cost sales that were worth keeping.

## Evidence and system mechanism

### The due date is a recorded term, and the record is what counts

UK government guidance on [late commercial payments, interest and debt recovery](https://www.gov.uk/late-commercial-payments-interest-debt-recovery) is written for a different legal system, so it cannot be applied directly in South Africa. It is useful here for a principle that carries across: remedies for late payment hang on the payment date that the parties agreed. If the date changes by phone or message and the change is not recorded where the invoice lives, the business has weakened its own position without noticing. Before relying on any interest or recovery rights, take advice on how the South African position applies to your contracts.

### Billing systems separate the due date from the commercial conversation

Stripe's documentation on [billing collection methods](https://docs.stripe.com/billing/collection-method) shows a common design. An invoice that is sent to the customer for payment carries a number of days until due, set on the invoice itself, while an invoice collected automatically follows a different path. The date is a field on the invoice, not a note in an email thread. The same principle applies in any accounting package: if the extension is not written into the due date field or an attached promise record, the system will keep treating the invoice as late.

### Automated reminders only know what they are told

The same documentation explains that when invoices are sent for manual payment the platform sends them according to the configured due date and reminders follow that schedule. Automated chasing is therefore only as accurate as the due date. A promise made to a salesperson does not stop a reminder from going out, and a reminder sent to a customer with an agreed extension is more damaging than no reminder at all.

### Warning signs

- Customers quote an agreement that the credit controller has never seen.
- The ageing report lists accounts as overdue that sales says are fine.
- Collection calls are made, then retracted after a message from sales.
- Extensions are discovered at month-end, when someone asks why a large balance has not been paid.

## Why this becomes urgent

This is a growth problem. With ten customers, everyone remembers who was given more time. With a hundred, the memory is spread across account managers, and the credit controller is no longer in the conversation. Customer growth also brings larger accounts, where an extension can be worth a month's cash flow, and more first-time buyers whose payment behaviour is still unknown.

## Economic consequence

The first cost is cash forecasting. If the cash plan uses due dates and some invoices are quietly running two weeks late, the forecast is wrong in the direction that matters, and the business borrows at the wrong time or delays a supplier payment. The second cost is wasted effort: collections staff chase accounts that do not need chasing, and then spend time repairing the relationship. The third is control. When extensions are informal, there is nothing to stop the same customer from receiving repeated extensions while their exposure grows. This is the pattern described in [inconsistent payment follow-up and its cash-flow cost](/impact/inconsistent-payment-follow-up-cash-flow-cost/).

## Root cause

- **Authority without a record.** Salespeople are allowed to be flexible, but there is no simple way to record what they agreed.
- **Two systems, two owners.** The CRM holds the relationship, the accounting system holds the invoice, and neither holds the promise. The related issue of terms that are agreed before finance has checked them is covered in [credit checks that happen after delivery is promised](/discovery/why-credit-checks-happen-after-sales-has-promised-delivery/).
- **No limits.** Without a rule on how long, how often and for how much, every request looks like a one-off.
- **Disputes and extensions are mixed up.** A customer who disputes a charge and a customer who wants more time need different handling, as [disputes that live in email while the ledger says overdue](/discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/) shows.

## Practical intervention

The aim is not to remove sales discretion but to make it visible. A short, structured promise record is usually enough.

1. **Create a payment promise record.** Fields: customer, invoice numbers, original due date, new date, amount, who agreed it and why. One form, one place.
2. **Set authority levels.** An account manager can grant up to a set number of days or amount without approval. Beyond that, a finance manager signs off.
3. **Let the promise change the status.** A recorded extension pauses automated reminders and moves the invoice into a promised category, so it stays in the ageing report but is not chased.
4. **Make the customer's confirmation part of the record.** A short email stating the new date is enough, and it protects both sides.
5. **Review broken promises weekly.** When a promised date passes, the account manager and the credit controller see it together.

### Trade-offs

Every approval step adds friction, and if the form is slow, salespeople will keep promising by phone. Keep it to a minute. A strict limit on extensions may also lose a sale to a competitor with more flexibility, so the thresholds should reflect margin and customer history rather than a blanket policy.

## Diagnostic questions

- How many overdue accounts last month had an extension that finance did not know about?
- Where does a salesperson record an agreed payment date today?
- Do automated reminders stop when an extension is granted?
- Can you list the total value of invoices running on promised dates?

## What good looks like

Every extension is recorded within a day, with a date, an amount and an owner. The ageing report separates overdue from promised, and the credit controller knows which calls to make. Sales keeps its room to help good customers, and finance keeps a forecast it can believe. The customer never receives a reminder for something they were told they did not have to pay yet.

## Practical next actions

1. List this month's overdue invoices and ask each account manager which ones have a promised date that is not in the ledger.
2. Draft a one-page promise record with the seven fields above and test it with two account managers for two weeks.
3. Agree extension limits by customer category and write them into the credit policy.
4. Configure reminders so that a recorded promise pauses chasing until the new date, and check this works on a test invoice.
5. Add a promised-balance line to the weekly cash-flow meeting so that the size of the hidden amount is visible.

## Where Mellorca fits

Mellorca works with finance and sales teams to map how a payment agreement actually moves from a conversation to the ledger, and to design the record, the authority levels and the reminder rules. The aim is a process that sales will use because it takes seconds, and finance can rely on because it is complete. See also the related point on [orders that carry the price and terms of the accepted quote](/discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/).

## Method note

The sources describe how invoices carry due dates and how billing systems act on them, and give UK guidance on the legal weight of agreed payment terms. They do not measure how often informal extensions occur. The scenario is illustrative.
