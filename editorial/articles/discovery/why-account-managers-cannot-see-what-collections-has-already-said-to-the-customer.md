---
hub: discovery
record_id: DISC-161
slug: why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer
title: Collections activity is not visible to account managers
description: Finance chases the overdue invoice while the account manager pitches the next deal, unaware. What an account manager needs to see about collections, and how to put it in front of them.
lead: Finance chases the overdue invoice while the account manager pitches the next deal, unaware. What an account manager needs to see about collections, and how to put it in front of them.
category: Accounts Receivable & Collections
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Credit controller or finance manager, with account managers as the main users of the view
budget_owner: Financial director or managing director
sources:
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - Reconcile bank accounts and apply payments - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts
related:
  - Sales promises payment extensions that finance cannot see | /discovery/how-informal-payment-extensions-from-sales-undermine-collections/
  - Collections handoffs change when staff are absent | /discovery/why-collections-follow-up-changes-whenever-the-credit-controller-is-away/
  - Recurring invoice failures are handled as isolated exceptions | /discovery/why-recurring-invoice-failures-need-a-reason-code-and-an-owner/
summary: Finance chases the overdue invoice while the account manager pitches the next deal, unaware. What an account manager needs to see about collections, and how to put it in front of them.
layout: plain
---
A key account goes quiet on payment. The account manager is two weeks into planning an upsell, has just sent a proposal for a further R320,000 of work, and has no idea that the customer's last two invoices are 45 days overdue. Meanwhile a credit controller has already phoned the customer's finance team three times, been promised payment on Friday, and recorded that promise in a spreadsheet only the finance department opens. The customer's buyer is irritated about the phone calls. The account manager is blindsided in the next meeting. The money is still outstanding.

This is what it looks like when collections activity is not visible to the people who own the commercial relationship. Nobody is lazy here. The information simply lives in the wrong place for the person who needs it.

## Why the account manager is usually the last to know

In most South African businesses of 20 to 300 people, collections sits in finance and the customer relationship sits in sales or operations. Each team has a system built for its own job. The ledger knows what is overdue and by how many days. The CRM knows who the customer's decision-makers are and what has been proposed. Neither system knows what the other team has said to the customer this week.

The collections conversation itself is also hard to see. A credit controller sends a statement, phones a payables clerk, receives a promise to pay, and logs a note. If that note lives in a personal notebook, a mailbox or a column in a spreadsheet, it is invisible to everyone else. An account manager who wants to know whether a customer has been contacted has to ask, and asking costs a conversation, so it tends not to happen until something goes wrong.

## What visibility actually needs to include

Showing an account manager a list of overdue invoices is a start, but it is not enough. An overdue amount without context invites the wrong reaction: either alarm over a balance that is already agreed to be paid on Monday, or complacency about one that has been ignored for a month. The account manager needs to see five things for each customer they own:

- **What is overdue and how old it is**, grouped by age band rather than one long list of invoices.
- **What has been done**: the last statement, reminder or phone call, with a date and the name of the person who made it.
- **What the customer said**, including any promise to pay and the date promised.
- **Whether any invoice is disputed**, and who is resolving the dispute.
- **Who owns the next step**, and by when.

With those five fields visible, an account manager can decide whether to leave the matter to finance, make a call themselves, or hold back a new proposal until a dispute is resolved.

## What the evidence from finance systems shows

Finance software vendors have built this problem into their products, which tells us it is common. Microsoft's documentation on [credit and collections in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) describes a Collections page that gives managers a centralised view of receivables collection information. It describes customer pools that organise work between collections agents, and list pages for collections customers, activities and cases. It also says that all collections information for a customer is available on one page, from which action can be taken.

The same documentation describes credit management features that put sales orders on hold based on overdue amounts, payment terms and the percentage of a credit limit used. That matters for account managers because it ties collections status directly to the commercial act of selling more. If an order can be held because of an overdue balance, the person who raised the order needs to know why before they promise a delivery date.

Microsoft's page on [collecting outstanding balances in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances) goes a step further for smaller businesses. It describes collections as a mix of statements, reminders, finance charges and direct communication by phone or email. It also describes fields for a dispute status and a promise-to-pay date on invoices that can be updated from within Outlook, so that the person handling the email conversation does not have to switch systems to record what the customer said. The design point is that the conversation and the record are kept together.

You do not need either product for this to work. The lesson from both is structural: a collections record that sits in one shared place, with activity, disputes and promises attached to the customer, can be read by anyone who has a reason to. A record that lives in a mailbox cannot.

One dependency is easy to overlook: the view is only as current as the payment records behind it. Microsoft's guidance on [applying payments and reconciling bank accounts](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts) describes matching bank payments to open invoices through a reconciliation journal, with rules for matching payment references automatically. If receipts are applied weeks late, the account manager sees an overdue balance that the customer has already paid, and trust in the view collapses on the first mistake.

## The cost of keeping collections invisible

The damage shows up in four ways. First, **customers get contradictory messages**: finance chases while sales asks for more business, and the customer concludes the supplier is not coordinated. Second, **account managers cannot use their relationships**. A senior contact who could resolve a stalled payment in one conversation never hears about it, because the account manager is unaware. Third, **disputes sit unresolved** because the person who understands the commercial history is not told that an invoice is being contested; the pattern is described in the existing article on [invoice disputes living in email](/discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/). Fourth, **days sales outstanding creeps up** while everyone believes someone else is dealing with it.

If your collections follow-up is already inconsistent, the cash-flow cost is covered in [the impact of inconsistent payment follow-up](/impact/inconsistent-payment-follow-up-cash-flow-cost/). If your team chases customers in the order invoices happen to appear on a report, see [collections teams chasing without a ranked queue](/discovery/collections-teams-chase-customers-without-a-priority-queue/).

## What to avoid

Two responses tend to make the situation worse. The first is giving every account manager read access to the full ledger. They then see hundreds of invoice lines, most of which are current, and stop looking. The second is asking finance to send a weekly email summary. It is out of date by Tuesday and nobody can act on it between mails. Visibility works when it is current, filtered to the account manager's own customers, and limited to what they can act on.

## A simple way to test whether you have the problem

Pick your ten largest customers. For each, ask the responsible account manager three questions without letting them check: Is anything overdue? When was the customer last contacted about it? What did the customer say? If more than a few answers are wrong or missing, collections activity is not visible to the people who need it. Then ask the credit controller the same questions and compare the answers. The gap between the two is the size of the problem.

## Practical next actions

1. Run the three-question test on your ten largest customers and record how many answers differ between the account manager and the credit controller.
2. Agree the five fields an account manager needs to see for each customer: overdue amount by age, last action, customer response, dispute status and next step with owner and date.
3. Choose one place where collections notes and promises to pay are recorded, and stop using personal notebooks and private mailboxes for that purpose.
4. Give each account manager a filtered view of only their own customers, showing accounts with a balance overdue by more than 30 days or an outstanding dispute.
5. Set a rule that a new proposal or order for a customer with a seriously overdue balance is raised with finance first, so the account manager hears about it before the customer does.
6. Review the view monthly with finance and sales together for the five customers with the oldest balances, and agree who will make each next contact.

For the wider cash-flow consequences of slow action on late accounts, see [customers becoming payment risks through late action](/impact/customers-becoming-payment-risks-late-action-overdue-accounts-cost/).
