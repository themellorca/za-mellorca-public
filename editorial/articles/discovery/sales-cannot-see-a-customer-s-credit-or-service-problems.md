---
hub: discovery
record_id: DISC-221
slug: sales-cannot-see-a-customer-s-credit-or-service-problems
title: Sales cannot see a customer's credit or service problems
description: Credit holds, overdue balances and open complaints sit in finance and service systems. Here is how to bring the few signals sales needs into the customer record.
lead: Credit holds, overdue balances and open complaints sit in finance and service systems. Here is how to bring the few signals sales needs into the customer record.
category: Sales Operations & CRM
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Head of sales operations
budget_owner: Sales director, with the CFO as co-sponsor
sources:
  - Create and edit virtual tables with Microsoft Dataverse - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities
  - Credit limit holds FAQ - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/credit-hold-faq
related:
  - Nobody keeps customer contact roles current after the deal | /discovery/nobody-keeps-customer-contact-roles-current-after-the-deal/
  - Quotes move to spreadsheets when CRM pricing cannot be trusted | /discovery/quotes-move-to-spreadsheets-when-crm-pricing-cannot-be-trusted/
  - Opportunities remain open long after buyers go quiet | /discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/
summary: Credit holds, overdue balances and open complaints sit in finance and service systems. Here is how to bring the few signals sales needs into the customer record.
layout: plain
---
Picture an account manager at a Johannesburg distributor on a Tuesday morning. She opens the CRM, finds a long-standing customer with an open opportunity, and spends two days building a quote and arranging a site visit. The customer record shows a friendly history of calls, meetings and past orders. What it does not show is that finance put the account on credit hold on Friday, that three invoices are well past terms, and that the customer logged a complaint last week about a delivery that never reached its second site.

The business has an information gap. The customer record that sales works from does not carry credit status, overdue balances or open service cases, because those facts live in the accounting and service systems. Until sales can see them, selling effort goes into deals that finance will stop, and customers hear a sales pitch while they are still waiting for an unresolved problem to be fixed.

## The problem in plain language

Most businesses run three systems that each know something different about the same customer. The CRM knows who the contacts are, what has been promised and what is in the pipeline. The accounting or ERP system knows what has been invoiced, what has been paid, what is overdue and whether the account is on hold. The service desk knows whether the customer has an open case and how long it has been open.

Each of these is correct inside its own boundary. The trouble is that the people who talk to the customer every day, in sales, look at only one of them. A salesperson cannot act on information they cannot see, and they cannot fairly be blamed for making a call that finance would have advised against.

The gap usually stays hidden because it is not a data error. Nothing is wrong in any single system. It surfaces when a CRM project, a restructure or a run of awkward customer conversations shows that the three views were never joined. It is related to, but different from, [account managers who cannot see where orders stand](/discovery/why-account-managers-have-to-phone-operations-to-find-out-an-order-s-status/): that problem is about order status, while this one is about the health of the customer relationship itself.

## What the buyer is actually trying to solve

The sales director and the CFO rarely describe this as a data integration problem. They ask questions like these: why did we quote a customer who already owes us money? Why does finance block orders that sales has already promised? Why was the customer so angry when we rang about a new project?

The outcome they want is simple. Before anyone in sales contacts a customer, they know whether that customer is in good standing, owes money past terms, or has a problem open with the business, and they know what they are allowed to do about it.

That outcome is narrower than "give sales access to everything in finance". Sales does not need the debtors ledger. It needs a few signals, kept current, with a clear instruction about what each one means.

## Evidence and system mechanism

### Where the facts live

Credit status is usually enforced in the accounting system at the point an order is entered. Microsoft's documentation on [credit limit holds in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/credit-hold-faq) shows how this works in one widely used product. It explains that blocking rules and credit management checkpoints must be set up before the system checks a customer's credit limit on a sales order, and that whether the user sees a warning or an error depends on a setting in the credit and collections parameters. It also notes that, with credit management switched on, a credit limit of zero means the customer has no credit at all.

All of that happens when the order is entered. A salesperson who built a quote in a separate CRM two weeks earlier never touched that check, so the first time anyone learns about the hold is when the order stops.

### Bringing the signals to the CRM

There are two broad ways to show finance data on a CRM record. One is to copy a small set of fields across on a schedule. The other is to read the data from its source when the record is opened. Microsoft's documentation on [virtual tables in Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities), the data platform under Dynamics 365, describes the second approach: the CRM connects to the external data source at run time, so the data is available without being copied in and the record reflects its current state. Salesforce and other CRMs offer similar features under different names.

Which approach suits a business depends on how fresh the signal must be, how many customers are involved and how much load the accounting system can take. Copying is simpler but creates its own risk: a flag that was true on Monday and is still displayed on Thursday. A copied signal needs a visible "as of" time and a refresh rule. A signal read live needs a sensible fallback for when the source system is slow or offline.

| Gap | Effect |
| --- | --- |
| Credit hold set in accounting, not shown in the CRM | Sales quotes and promises delivery that finance later blocks |
| Overdue balance visible only to credit control | Sales pushes new business to a customer who is already behind on payments |
| Open service case visible only in the service desk | Sales rings a customer with an unresolved complaint and damages the relationship |
| Signal copied to the CRM with no refresh time | Sales trusts a flag that may be days out of date |
| No agreed response to a flag | Flags are seen, but every salesperson reacts differently |

### What South African law expects of the data

South African law does not tell a business which fields to show in a CRM, but it does set a standard for the quality of customer information once the business holds it. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) includes a condition on information quality. Section 16 requires a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary.

A stale "credit hold" or "overdue" flag shown against a customer is exactly the kind of information that can mislead. Where customer records include identifiable individuals, such as the contacts who run an account or sole proprietors, a flag that is wrong or out of date is a quality problem as well as a commercial one. The Act's definition of personal information also reaches identifiable companies, not only people. The practical lesson is to give every signal an owner, a refresh rule and a way to be corrected, and to involve your information officer before widening who can see credit information.

## Why this becomes urgent

A CRM replacement is the usual trigger. Old CRMs are often loosely governed, so sales has long relied on informal habits: a call to the credit controller, a message in the sales chat, a note on a spreadsheet. A replacement forces the business to define what the customer record is for. When the project team maps fields, it finds that credit, debtor and service data were never connected to the customer record sales uses, and that the informal habits depended on people who have since left.

Growth makes it worse. More customers, more salespeople and more orders mean more chances to call the wrong customer at the wrong time, and fewer people who know each account's history by heart.

## Economic consequence

The costs are easy to recognise and hard to total because they land in different departments.

As an illustrative example only, suppose an account manager spends eight hours on a quote and a site visit for a customer that finance had already put on hold. If that happens on a few accounts in a quarter, the lost selling time alone adds up to several working days, before counting the finance team's time chasing the order and unwinding it.

The other costs follow a pattern:

- Orders that finance blocks after sales has promised a delivery date, which damages trust with the customer and with finance.
- Relationships damaged when a salesperson pushes a customer who has an open complaint, because the customer reads it as the business not listening.
- Bad debt that grows when sales keeps adding exposure to an account that is already behind, because nobody in the sales process sees the balance.

None of these appears as a line in the budget. They appear as slow quotes, tense conversations between sales and finance, and write-offs.

## Root cause

The root cause is that each system was bought and configured to serve its own department. The CRM was set up around the pipeline, the accounting system around invoicing and cash collection, and the service desk around cases. Nobody owned the question "what must a salesperson know about this customer before they pick up the phone?" Without an owner, the customer record contains whatever each system's administrator happened to include.

This is the mirror image of [credit checks that happen after sales has promised delivery](/discovery/why-credit-checks-happen-after-sales-has-promised-delivery/). There, credit is looked at too late and the customer has already been promised something. Here the fix is to move the knowledge earlier, to the moment sales plans the contact rather than the moment finance reviews the order.

A second related issue shows up as well. When [customer account structures miss how customers are really connected](/discovery/why-crm-account-hierarchies-miss-how-customers-are-really-connected/), a flag on one account is of little use if the customer trades through several linked accounts and sales cannot see the whole group.

## Practical intervention

### Practical next actions

1. **Choose the few signals.** Start with three: credit status (good standing, on hold or under review), the overdue amount past terms, and the number of open service cases. Resist adding more until these three are trusted.
2. **Name an owner and a refresh rule for each signal.** Credit status belongs to credit control, the overdue amount to the finance team and open cases to the service manager. For each, write down how often it refreshes and what the CRM shows when a refresh fails.
3. **Decide how each signal reaches the CRM.** Copy it on a schedule or read it live from the source. Whichever you choose, show the time the signal was last updated next to the signal itself.
4. **Agree what sales does when a flag is raised.** For example: an account on hold gets no new quote without the credit controller's approval; an overdue amount above an agreed level means the account manager speaks to finance before contacting the customer; an open case means checking with the service manager and raising the case first. Write this on one page and have the sales director and the CFO sign it off.
5. **Match customer identifiers across the three systems.** Make sure the key that links a CRM account to a ledger account and a service customer is the same, and decide how customers with several accounts are grouped.
6. **Test with real customers before roll-out.** Pick a small sample across good standing, overdue and on-hold accounts and check what the CRM displays against what each source system says.
7. **Review access and train the team.** Confirm with your information officer who may see credit information, then train sales on the one-page rule and review how often flags change the outcome of a deal.

## Diagnostic questions

- Can an account manager see, from the customer record, whether the account is on credit hold? If not, how do they find out today?
- Where does the overdue balance live, and who sees it before a quote is sent?
- How does sales learn that a customer has an open service case, and how old is that information by the time they learn it?
- When did finance last block an order that sales had already promised, and what did it cost in time?
- Who owns the credit and overdue flags, and what happens if the feed fails or a flag is wrong?
- If the CRM were replaced tomorrow, which of these signals would be lost because they depend on one person's memory?

## What good looks like

A salesperson opens a customer record and sees three signals at the top: credit status, overdue amount and open cases, each with the time it was last updated. A hold, or an overdue amount above the agreed level, brings up the agreed action rather than a vague warning. Finance still decides on credit, but sales is no longer surprised by it.

You can measure the result. The number of orders that finance blocks after a delivery promise falls. The time between a credit hold being set and sales knowing about it shrinks to a stated limit. Quotes to accounts on hold stop. Customers with open complaints are contacted about the complaint before they are contacted about a new sale.

## Where Mellorca fits

If you are unsure where each signal lives and how reliable it is, a [digital systems audit](/services/digital-systems-audit/) maps the customer data across your CRM, accounting and service systems and shows the gaps. Once you know which signals sales needs, [systems implementation and integration](/services/systems-implementation-integration/) connects them to the customer record with the refresh rules and fallbacks described above.

## Method note

This article draws on Microsoft's documentation on credit limit holds in Dynamics 365 Finance and on virtual tables in Dataverse, and the text of the Protection of Personal Information Act. The scenarios, hours and sample sizes are illustrative, not measured. The article does not claim that any product behaves the same way in your environment, so check the documentation for the systems you run. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser.
