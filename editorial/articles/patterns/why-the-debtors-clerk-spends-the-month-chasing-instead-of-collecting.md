---
hub: patterns
record_id: PAT-159
slug: why-the-debtors-clerk-spends-the-month-chasing-instead-of-collecting
title: Why Accounts Receivable Becomes a Chasing Function
description: Invoices go out, payments do not come in, and the accounts receivable role turns into reminders, calls and explanations. The cause usually sits upstream of the debtor.
lead: Invoices go out, payments do not come in, and the accounts receivable role turns into reminders, calls and explanations. The cause usually sits upstream of the debtor.
category: Finance & Cash Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Finance & Cash Operations
pattern_family: Finance & Cash Operations
observable_condition: The person responsible for accounts receivable spends most of the month sending reminders, phoning customers and explaining invoices, and overdue balances still grow.
primary_identification: Reactive collections: late payment is handled one customer at a time after the due date, while the upstream causes (invoice errors, unclear terms, no approved contact) are left in place.
commercial_value_dimensions: Cash flow, days sales outstanding, finance capacity, customer relationships and borrowing cost
sources:
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
  - Value-Added Tax - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/
related:
  - Why Does Winning a Customer Create an Internal Scramble? | /patterns/why-does-winning-a-customer-create-an-internal-scramble/
  - Why Fulfilment Problems Begin Before the Warehouse | /patterns/why-fulfilment-problems-begin-before-the-warehouse/
  - When Finance Teams Become Data Clean-Up Teams | /patterns/when-finance-teams-become-data-clean-up-teams/
summary: Invoices go out, payments do not come in, and the accounts receivable role turns into reminders, calls and explanations. The cause usually sits upstream of the debtor.
layout: plain
---
## Observable condition

The bookkeeper at a Port Elizabeth distribution company starts each Monday with a list of overdue customers. She sends statements, writes polite reminders, phones the ones she knows will pick up, and updates a spreadsheet with what each customer said. By Thursday she has the list ready again. At month end the balance of overdue invoices is a little higher than it was at the start.

Her job title says accounts receivable. Her working week is chasing. She knows it, and so does the owner, who asks about the overdue list every week and receives the same answer: customers are slow.

This is an illustrative composite, but the weekly rhythm will be familiar to many finance teams.

## Realisation

The realisation is that chasing is the visible part of collection, and often the least effective. By the time a reminder goes out, the reasons the customer has not paid already exist. Perhaps the invoice has the wrong purchase order number, so the customer's payables team has parked it. Perhaps the person who approves payment never saw it. Perhaps the delivery was short, and the customer is waiting for a credit note.

In each case, the reminder does not fix anything. It asks the customer to do the work of finding out why they are not paying. Some do. Many do not, and the clerk reminds them again.

**Realisation prompt:** take the ten oldest overdue invoices and write beside each the real reason it is unpaid. Count how many reasons trace back to something your business did or did not do.

## Identification

This is a pattern of reactive collections. The visible symptom is a clerk who spends the week on reminders and calls. The common assumption is that customers pay late because they can, and that more persistence will help. The structural cause is that nothing before the due date prevents the delay, and nothing after it sorts the causes from one another.

The Pattern [when cash collection depends on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/) looks at the memory dependency. This pattern looks at the larger shape: why the role is organised around chasing at all.

## Diagnosis

- **Invoices contain avoidable errors.** Wrong quantities, missing order numbers or incorrect VAT details give a customer a legitimate reason to hold payment. [SARS publishes the VAT guidance](https://www.sars.gov.za/types-of-tax/value-added-tax/) that sets out what a tax invoice must contain, so a document with missing details can be refused or queried. The Pattern [why wrong invoices are usually an operations problem, not a billing one](/patterns/why-wrong-invoices-are-usually-an-operations-problem-not-a-billing-one/) explains where the errors begin.
- **Terms are agreed but not recorded.** The salesperson told the customer sixty days. Finance's system says thirty. The reminder goes out at day thirty-one and meets a polite refusal.
- **Nobody knows the right contact.** The invoice goes to a general address or the person who placed the order, not to the person who approves payment.
- **Disputes are invisible.** A customer queries a line by email to the salesperson. Finance continues to chase the full amount. The Discovery note [why invoice disputes live in email while the ledger says overdue](/discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/) explains the effect.
- **All overdue accounts get the same treatment.** A large, reliable customer that is five days late is chased as hard as a small account that is ninety days late. [Microsoft's credit and collections overview](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) describes managing credit limits and collection activities separately from invoicing, a reminder that credit control belongs before the sale as well as after it.
- **Reminders are manual.** Every statement and message is created by hand, so the schedule slips whenever the clerk is away or busy. [Microsoft's guidance on collecting outstanding balances](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances) describes statements and reminders that can be created and issued on a defined schedule.

## Commercial impact

The first cost is cash. Every day that an invoice stays unpaid is a day the business funds the customer. For a company with a bank overdraft, this has a direct interest cost. For one without, it means purchases are delayed or paid for from other sources.

The second cost is the clerk's capacity. A skilled person spends the week on repetitive contact work instead of reconciling, analysing which customers are drifting, or improving the process that produces the delay. The work is necessary but low in leverage.

The third cost is the customer relationship. A business that reminds every customer constantly, including those who have a genuine query, teaches them that the reminder is noise. Customers who are treated as debtors by default become less willing to deal.

The fourth cost is unreliable cash planning. If payment dates are unpredictable, forecasts of cash are guesses. The Impact note [inconsistent payment follow-up and its cash flow cost](/impact/inconsistent-payment-follow-up-cash-flow-cost/) describes the knock-on effect.

## Common misidentification

The usual response is to hire a credit controller or tighten the reminder wording. A second person can chase twice as many accounts, but the causes remain. Another is to blame the customer's culture of paying late, which may be true in some industries but explains only part of the delay. A third is to threaten penalties that cannot be enforced, because the terms were never clearly agreed.

## Possibility

In a better state, the invoice leaves correct and arrives with the person who pays it. The agreed terms are on the customer record and on the invoice. A reminder is sent automatically a few days before the due date and again after it, and the clerk's time is reserved for exceptions: disputes, accounts with a pattern of lateness, and calls that need a person. Disputed invoices are tagged, so they stop appearing in the chase list.

The clerk then does the part of the job that needs judgement, and the system does the part that is simply timing.

## Intervention

Begin with causes, not collection tactics. The work is a few focused weeks, not a project.

## Practical next actions

1. **Classify the overdue list.** For the oldest invoices, record the reason each is unpaid: dispute, wrong detail, wrong contact, awaiting approval, cash problem or no reason found.
2. **Fix the most common upstream cause.** If order numbers are missing on a third of the invoices, make the order number a required field before invoicing.
3. **Record terms once.** Put the agreed payment terms on the customer record and make sure sales confirms them before the first invoice.
4. **Capture the right contact.** Ask each customer who approves payment, and send invoices to that person's address in addition to the buyer.
5. **Schedule reminders.** Set automated friendly reminders shortly before and after the due date, and keep personal calls for accounts that stay overdue.
6. **Flag disputes.** Give disputed invoices a status and an owner so they leave the chase list and get resolved.

## Diagnostic questions

- For your oldest ten overdue invoices, how many were late because of something on your side?
- Are payment terms recorded once, in a place both sales and finance use?
- Do you know who approves payment at your five largest debtors?
- How do you separate disputed invoices from simply late ones?
- What share of the clerk's week is exceptions, and what share is routine reminders?

## Bottom line

Accounts receivable becomes a chasing function when late payment is treated as the customer's fault and handled one reminder at a time. Most delays have a cause that can be found and prevented: errors, unclear terms, the wrong contact or an unrecorded dispute. Fixing those lets the receivables role move from chasing to controlling.
