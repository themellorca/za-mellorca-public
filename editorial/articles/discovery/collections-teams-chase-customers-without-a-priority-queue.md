---
hub: discovery
record_id: DISC-151
slug: collections-teams-chase-customers-without-a-priority-queue
title: Collections teams chase customers without a reliable priority queue
description: An ageing report shows what is old, not which call is worth making. How to build a daily ranked contact list that moves cash.
lead: An ageing report shows what is old, not which call is worth making. How to segment the debtors ledger, separate disputes and build a daily ranked contact list that moves cash.
category: Accounts Receivable & Collections
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Credit controller or accounts receivable manager
budget_owner: Financial director or chief financial officer
sources:
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - National Credit Act 34 of 2005 - South African Government | https://www.gov.za/documents/national-credit-act
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - Why data lineage gets rebuilt by hand every time the auditors arrive | /discovery/data-lineage-reconstructed-manually-during-audits/
  - Disputes are tracked separately from invoice status | /discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/
summary: An ageing report shows what is old, not which call is worth making. How to segment the debtors ledger, separate disputes and build a daily ranked contact list that moves cash.
layout: plain
---
On Monday morning the collections clerk opens the debtors ageing report and starts at the top. The first name is a customer owing R480,000, but the invoice is only three days overdue and the customer always pays in the second week. Further down is a customer owing R35,000 who is 75 days late and has stopped answering calls. A third has a query on one invoice that nobody has resolved, so the entire balance sits unpaid. The clerk calls whoever is next on the list, whoever phoned most recently, or whoever the finance director mentioned last week. By Friday, many calls have been made and the debtors days figure has not moved.

This article looks at that operating condition: collections teams chasing customers without a reliable priority queue. It becomes urgent when days sales outstanding (DSO) begins to deteriorate, because the business suddenly needs to know where its collection effort is going.

## The problem in plain language

A collections team has limited hours. How those hours are allocated across customers decides how much cash comes in. An ageing report shows how old each balance is, but age alone does not say which call is most valuable. A priority queue combines more information: how much is owed, how overdue it is, whether the customer has a history of paying after a reminder, whether there is an open dispute, whether a promise to pay has been broken, and what is at stake commercially. Without that ordering, effort follows habit, noise or the loudest voice.

## What you are actually trying to solve

Financial directors, credit controllers and owners want to bring cash in faster, reduce the proportion of old debt, and make the collections team's day predictable. They are usually not looking for software first. They are looking for an answer to a simple operational question: "who should we contact today, and why?"

## Evidence and system mechanism

### Collections is a sequence of different actions, not one

Microsoft's Business Central documentation on [collecting outstanding balances](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances) describes a range of steps that a business may combine: customer statements, reminders (also called dunning letters) that can be automated, finance charge memos for interest, and direct communication by phone or email to resolve misunderstandings and disputes. The range matters for prioritisation. A balance that needs a statement is a different job from one that needs a conversation about a disputed delivery, and a queue that treats them identically wastes effort.

### Credit law shapes how and whom you may pursue

Where customers are consumers, the [National Credit Act](https://www.gov.za/documents/national-credit-act) regulates credit agreements and the conduct of credit providers, and it may affect how collection steps must be taken. Business-to-business accounts are generally governed by the contract and the terms of trade. A prioritisation system should therefore record the customer type and the agreed terms, so the team knows what follow-up is permitted and what has been agreed. Specific legal questions belong with a qualified adviser.

### Collection involves personal information

The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) applies to the personal information of debtors and their contacts, including the details that collection teams hold and use. A prioritised queue with clear contact records, call notes and permitted channels makes it easier to handle that information responsibly than a scatter of personal spreadsheets and phone contacts.

### Warning signs

- Different collectors work from different spreadsheets, and the same customer receives two calls in one day.
- Large balances age past 90 days while small ones are chased repeatedly.
- Promises to pay are not recorded, so broken promises go unnoticed.
- Disputes sit inside the debtors ledger, unresolved, and block payment of otherwise valid invoices.
- Follow-up depends on someone remembering, as described in [when cash collection depends on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/).

## Problem owner and why-now trigger

The credit controller or accounts receivable manager owns the collection queue. The financial director owns the policy and the target. Sales leaders influence payment behaviour through the terms they agree and are often needed to resolve disputes. The budget owner is typically the financial director or chief financial officer.

The trigger is a deterioration in DSO, or its precursor: a cash-flow squeeze that shows up as delayed supplier payments or an overdraft touching its limit. In the South African context, pressure on customers' own cash flow, higher interest rates and the knock-on effects of disruptions can stretch payment cycles across a whole customer base at once. When that happens, the business cannot chase everyone, and the order of contact becomes a financial decision.

## Economic consequence

Every additional day of DSO ties up working capital. On R1.5 million of monthly credit sales, a ten-day deterioration locks up roughly R500,000 more in receivables, which then has to be funded by overdraft, delayed supplier payments or the owner. Poorly directed collection effort also increases bad debts, because older balances are harder to recover. There is a relationship cost as well: loyal customers who pay late by a few days are chased aggressively, while seriously delinquent accounts are not contacted. The related cost of inconsistent follow-up is covered in [inconsistent payment follow-up and cash flow cost](/impact/inconsistent-payment-follow-up-cash-flow-cost/).

## Root cause

- **Ageing as the only lens.** Reports sort by age or balance, but not by recoverability or next action.
- **No recorded customer behaviour.** Payment history, promises and disputes are not available when choosing who to call.
- **Disputes mixed with debt.** Queries about delivery or pricing are not separated from the collection of undisputed amounts.
- **No capacity-based planning.** The team has no daily target of contacts matched to the hours available.
- **Late invoicing.** Customers receive invoices late or wrongly, which makes later chasing less effective; see [late invoicing and cash flow cost](/impact/late-invoicing-manual-billing-cash-flow-cost/).

## Practical intervention

1. **Segment the ledger.** Group customers by balance size, days overdue, payment reliability and dispute status. Four to six segments are enough.
2. **Separate disputes.** Move disputed invoices to a separate list with an owner in sales or operations and a resolution date, and keep chasing the undisputed part.
3. **Score or rank simply.** Use a transparent rule, for example: undisputed amount multiplied by days overdue, adjusted upward for broken promises and downward for customers who pay reliably after a reminder.
4. **Build the daily list.** Produce a ranked contact list each morning sized to the team's capacity, with the reason for each contact and the suggested action.
5. **Record every contact.** Capture the date, the person spoken to, the promise made and the promised date in one shared record, and have the system or a weekly review flag broken promises.
6. **Review weekly.** Track the amount collected per contact hour, the movement in the over-60 and over-90 buckets, and DSO. Adjust the ranking rule based on what the numbers show.

### Trade-offs

A ranking rule is a simplification, and strategic customers may need a different, relationship-led approach decided by the financial director or account owner. Automating reminders reduces effort but can irritate good customers if the tone is wrong, so keep the first reminders courteous and vary them by segment. Let collectors override the ranking with a recorded reason.

### An illustrative example

Illustrative: a Gqeberha wholesale distributor with about 400 active accounts saw DSO rise from 38 to 52 days over two quarters. The credit controller divided the ledger into five segments, moved 40 disputed invoices to a separate list owned by the sales manager, and produced a daily ranked list of 25 contacts with a recorded outcome for each. Within a quarter, the over-90-day balance had fallen by about a third, and the team could explain each week's collections by segment instead of by effort.

## Diagnostic questions

- How does the team decide who to contact first today?
- What share of your overdue balance is genuinely disputed?
- Where are promises to pay recorded, and who notices when one is broken?
- How much was collected per contact hour last month?
- Which three accounts would you chase first if you could only make three calls?

## What good looks like

The ledger is segmented. Disputes are handled by the people who can resolve them. Each morning the team receives a short ranked list with a reason and a suggested action for each contact, and every contact is recorded. Broken promises are flagged automatically or in the weekly review. DSO and the older buckets are tracked and discussed in finance meetings, and the collection effort follows value and probability rather than habit.

## Where Mellorca fits

Mellorca's [business automation](/services/business-automation/) work can produce the daily ranked list, schedule reminders and flag broken promises from the receivables data. [Digital operations improvement](/services/digital-operations-improvement/) can redesign the dispute handover between sales, operations and finance so that undisputed money is not held up. See also [the cash-flow week that keeps the owner awake](/moments/the-cash-flow-week-that-keeps-the-owner-awake/).

## Method note

Microsoft documentation is used to illustrate the range of collection steps that systems typically support and is not a product recommendation. Legislation is cited for general context only and does not replace legal advice. Figures in the economic section are arithmetic illustrations, and the example is illustrative rather than a client case.
