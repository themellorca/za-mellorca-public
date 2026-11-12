---
hub: discovery
record_id: DISC-156
slug: why-invoice-disputes-live-in-email-while-the-ledger-says-overdue
title: Disputes are tracked separately from invoice status
description: A customer disputes one line, the invoice stays overdue, and the reminders keep coming. How to give every dispute a status, an owner and a visible link to the invoice so collections and DSO make sense.
lead: A customer disputes one line, the invoice stays overdue, and the reminders keep coming. How to give every dispute a status, an owner and a visible link to the invoice so collections and DSO make sense.
category: Accounts Receivable & Collections
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Credit controller or finance manager, with the account manager owning resolution of the customer's query
budget_owner: Financial director
sources:
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - Automatic collection | https://docs.stripe.com/invoicing/automatic-collection
related:
  - Collections handoffs change when staff are absent | /discovery/why-collections-follow-up-changes-whenever-the-credit-controller-is-away/
  - Collections activity is not visible to account managers | /discovery/why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer/
  - Recurring invoice failures are handled as isolated exceptions | /discovery/why-recurring-invoice-failures-need-a-reason-code-and-an-owner/
summary: A customer disputes one line, the invoice stays overdue, and the reminders keep coming. How to give every dispute a status, an owner and a visible link to the invoice so collections and DSO make sense.
layout: plain
---
A customer's accounts payable clerk writes to say that invoice 4417 is wrong. The delivery note shows 120 units and the invoice charges for 150. The email goes to the account manager, who agrees it looks like an error and promises to sort it out. The ledger, however, knows nothing of this. Invoice 4417 is simply sixty-one days old and unpaid. The collections report lists it as overdue, the automated reminder goes out on schedule, and a month later the credit controller phones the same clerk to demand payment of the full amount.

The customer is irritated, the controller looks uninformed, and the amount that is truly in dispute, R31,000, is buried inside an invoice total of R168,000 that is being chased as if it were all simply late. This article looks at the condition behind that scene: disputes tracked in inboxes and spreadsheets, apart from the invoice status that collections and reporting rely on.

## The problem in plain language

An unpaid invoice can be unpaid for different reasons. The customer may be slow, short of cash, waiting for an approval, or perfectly happy to pay but has misplaced the document. Or the customer may genuinely disagree with some part of the invoice. These situations call for different actions: a reminder for the first, a phone call to the budget holder for the second, and a correction or credit note for the last. When all of them look the same in the ledger, everyone gets the same treatment, and the wrong action is taken most of the time.

The dispute exists. It is recorded, but it is recorded somewhere else: an email thread, the account manager's notes, a sheet kept by the credit controller. The invoice record does not say so.

## What the buyer is actually trying to solve

A financial director who searches for this is usually responding to a symptom. Days sales outstanding have crept up, the ageing report looks worse each month, and yet the collections team says it is working hard. The real question is how much of the overdue balance is a payment problem and how much is a billing, delivery or pricing problem, and who is responsible for fixing each. Without that split, the team collects harder when it should be correcting invoices.

## Evidence and system mechanism

### Collections tooling assumes you can classify and track cases

Microsoft's overview of [credit and collections in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) describes a collections workspace where aged balances, customer activities and cases are organised in one place, and where all collections information for a customer is available on one page. Collections agents work from customer pools and lists, and can act from that page. The design assumption is that the activity, the case and the balance are connected. A business that keeps cases in a separate inbox has the activity and the balance but not the connection.

### Collections communication includes managing disputes

The Business Central guide to [collecting outstanding balances](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances) lists the standard toolkit: statements, reminders, finance charge memos and direct communication with customers. It describes that last step as including the management of potential misunderstandings and disputes. In other words, disputes are an expected part of collection, not an exception. The reminders and finance charges in the same toolkit are blunt instruments that operate on overdue balances. If a disputed invoice is still marked as an ordinary overdue invoice, those tools will treat it like any other.

### Automation acts on payment state, not on the story behind it

Stripe's page on [automatic collection](https://docs.stripe.com/invoicing/automatic-collection) describes automated revenue recovery for one-off invoices, including emails when payments fail and retries at chosen times. The point is general: automated follow-up is triggered by what the system knows about payment status. If the system does not know that an invoice is in dispute, nothing will stop the reminder. The more a business automates its collections, the more it needs a dispute flag that the automation can respect.

### Warning signs

- Customers receive a reminder or a call about an invoice they have already queried.
- The credit controller asks account managers for a list of disputes before every month-end.
- The ageing report shows large overdue balances that nobody can explain by customer behaviour.
- The same billing error is raised by several customers over several months.

## Problem owner and why-now trigger

The credit controller or finance manager owns the receivables position. The account manager owns the customer's query and its resolution, which is often an operational question about delivery, pricing or contract terms. The budget owner is the financial director, since the exposure is working capital.

The trigger is usually a deterioration in days sales outstanding that cannot be explained by customers paying later. A business that has recently grown, changed pricing, added a billing system or started invoicing from a new source often finds that errors rise before the process catches up. In a tight cash environment, where interest rates and fuel costs make working capital expensive, a few extra days of DSO is more than a statistic.

## Economic consequence

If a business invoices R4 million a month on thirty-day terms and DSO drifts from 38 to 48 days, about R1.3 million more is tied up in receivables at any time. If a fifth of that drift is disputed invoices that were never resolved, chasing the customer harder makes no difference. The invoice must be corrected before it is paid.

There is also a relationship cost. Dunning a customer for an amount they have already contested signals that the supplier is not listening. And the finance team's time is wasted: each unnecessary reminder or call is followed by a call from the customer, and each of those is followed by an internal conversation. The pattern is related to [paying customers who still receive overdue reminders](/discovery/why-paying-customers-still-get-overdue-invoice-reminders/): in both cases the collections process does not know something the business already does.

## Root cause

- **The dispute has no home in the ledger.** There is no status such as "in dispute" with an amount, reason and owner.
- **Different people hold different pieces.** The account manager knows the query, the controller knows the balance, and neither sees the other's view.
- **Reminders and call lists are generated from the ageing report.** They contain no information about queries, so they cannot exclude disputed amounts, a gap that also weakens [collections work without a priority queue](/discovery/collections-teams-chase-customers-without-a-priority-queue/).
- **Disputes are not categorised.** Without reasons such as pricing error, short delivery, wrong quantity or missing purchase order number, nobody sees the pattern and the cause is not fixed.
- **Resolution has no deadline.** A query can sit for months because no one is accountable for closing it.

## Practical intervention

1. **Create a dispute status on the invoice.** Even in a basic system this can be a flag and a reference field. The record should show disputed amount, reason, date raised, owner and promised resolution date.
2. **Split the invoice balance.** Where a customer disputes one line, treat the undisputed portion as collectable and chase it. Track only the contested amount as a dispute.
3. **Suppress automatic reminders on disputed amounts.** Replace them with an internal prompt to the owner: resolve, credit or hold firm.
4. **Agree a response time.** For example, an acknowledgement within one working day and a decision within ten. Escalate to a senior person after that.
5. **Classify every dispute by cause.** Review monthly: which causes recur, which customers, which products, which process step.
6. **Report disputed value next to overdue value.** The ageing report should show overdue and disputed separately, so DSO can be understood and the right team acts.

### Trade-offs

A dispute status can be abused: customers, or staff, may raise one to delay payment. A reason code, a time limit and a partial-payment rule for the undisputed portion keep it honest. More structure also means more administration; keep the fields few. And if account managers do not log queries, the flag stays empty, so the first step is to make the credit controller the single place where disputes are recorded, not to rely on everyone remembering.

### An illustrative example

Illustrative: a Johannesburg building supplies wholesaler saw DSO rise by eleven days over a year. The credit controller started a simple dispute register tied to invoice numbers and found that nearly a third of overdue value was contested, mostly because delivered quantities differed from invoiced quantities. Reminders were suppressed on those lines, driver delivery notes were captured the same day, and the register was reviewed weekly with the sales manager. Three months later disputed value had halved and the collections team was chasing only genuinely late payers.

## Diagnostic questions

- If you opened the ledger now, could you list every invoice currently in dispute and the amount contested?
- When a customer queries an invoice, who records it and where?
- Do automated reminders go out for invoices that are in dispute?
- What were the three most common dispute reasons last quarter?

## What good looks like

Every query becomes a dispute record linked to the invoice, with an amount, a reason, an owner and a date. Reminders respect it. The ageing report separates late payment from contested amounts, so DSO can be explained and managed. The credit controller chases people who are late, and the account manager resolves what is wrong, and the same cause rarely shows up twice.

## Where Mellorca fits

Mellorca's work on receivables starts by tracing what happens between a customer query and the invoice record, and where information is lost. It then helps set up the status, the owner, the response time and the report that separates disputed from late. If follow-up still depends on individual memory, the pattern described in [when cash collection depends on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/) will be familiar.

## Method note

The sources describe how collections tools organise balances, activities and cases, how collections communication includes disputes, and how automated recovery acts on payment state. They do not measure how disputes affect DSO in any business. The figures and the example are illustrative rather than a client case.
