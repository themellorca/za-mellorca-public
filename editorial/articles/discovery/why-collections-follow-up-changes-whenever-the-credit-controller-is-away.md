---
hub: discovery
record_id: DISC-171
slug: why-collections-follow-up-changes-whenever-the-credit-controller-is-away
title: Collections handoffs change when staff are absent
description: Leave, resignations and month-end pressure quietly change how overdue accounts are chased. How to keep promises, disputes and customer preferences with the account, not the person.
lead: Leave, resignations and month-end pressure quietly change how overdue accounts are chased. How to keep promises, disputes and customer preferences with the account, not the person.
category: Accounts Receivable & Collections
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Credit control lead or finance manager
budget_owner: Financial director or managing director
sources:
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - Late commercial payments: charging interest and debt recovery | https://www.gov.uk/late-commercial-payments-interest-debt-recovery
related:
  - Sales promises payment extensions that finance cannot see | /discovery/how-informal-payment-extensions-from-sales-undermine-collections/
  - Disputes are tracked separately from invoice status | /discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/
  - Collections activity is not visible to account managers | /discovery/why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer/
summary: Leave, resignations and month-end pressure quietly change how overdue accounts are chased. How to keep promises, disputes and customer preferences with the account, not the person.
layout: plain
---
A credit controller goes on leave for two weeks in the middle of the month. Her work is shared out in a short email: "Please cover my accounts, the list is on the shared drive." One colleague picks up the larger customers, another gets the rest. Neither knows that one customer was promised a credit note on Wednesday, that another asked not to be phoned before ten, or that a third paid last Friday and is waiting for the receipt to be applied. Reminders go out anyway. A customer who had agreed a payment plan is sent a stern letter. When she comes back, the aged debtors report has moved the wrong way.

Collections handoffs that change when people are absent are one of the quietest sources of cash-flow slippage. Staff leave is normal and expected. The process should survive it.

## Why absence changes the process

In many finance teams the collections process exists in the heads of the people doing it. They know which customers need a phone call and which respond to email, which payables clerk is helpful and which invoices are being held for a known reason. This knowledge is not written down because it never needed to be: the same person does the work week after week.

When that person is absent, the work is covered by someone who sees the ledger but not the history. They see overdue invoices and apply the obvious action, which is to remind. The context that would have told them to hold back, to call instead, or to check a dispute first is missing. In practice the handoff turns into a different process from the one that normally runs, with different timing, different tone and different follow-through.

It happens in four common situations: annual leave, sick leave, a resignation with a short notice period, and the quiet shift in who covers what when a team member is reassigned to month-end close. Month-end is especially risky because collections is the first task to be dropped when other deadlines press.

## What gets lost in the handoff

Four categories of information tend to disappear:

- **Commitments**: promises to pay, promised credit notes, agreed payment plans and holds on action.
- **Customer preferences**: who to contact, how, and when.
- **Disputes and reasons**: why an invoice is unpaid and what is needed to settle it.
- **Timing**: when the last contact was made and when the next one is due.

The cost falls on the customer, who experiences inconsistency, and on the business, which loses momentum on accounts that were close to being resolved. The wider impact of staff absence on handover quality is described in [catching up after absence](/impact/catching-up-after-absence-poor-handover-cost/).

## What collections tools assume

Finance software is designed on the assumption that collections work is shared and handed over. Microsoft's documentation on [credit and collections in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) describes customer pools, which organise accounts so that collections agents can have their own pools, and list pages for collections customers, activities and cases. It states that all collections information for a customer is on one page, from which action can be taken. If a pool is reassigned, the person picking it up inherits the activities and cases attached to each customer, not just the invoices.

The same principle appears in the Business Central guidance on [collecting outstanding balances](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances). It describes dispute status and promise-to-pay date as fields on invoices, together with automated creation, issue and posting of reminders. Automated reminders deserve care during absences: if a promise to pay is recorded, a well-configured process should not send a routine reminder to a customer who is not yet late against their promise. Where the promise lives in a private email, the automation has no way to know.

Neither product removes the need for people to follow a consistent routine. What they provide is a place where the history lives with the customer, rather than with the staff member, so that coverage is a matter of reassigning records.

## Timing matters more than most finance teams realise

Customer payment behaviour often follows regular cycles. Many businesses pay on a monthly run with a cut-off a few days before payment day. A two-week gap in follow-up around that cut-off can cost a whole month. The gov.uk guidance on [late commercial payments](https://www.gov.uk/late-commercial-payments-interest-debt-recovery) is a reminder of how much depends on agreed dates: where a payment date is not agreed, payment is treated as late 30 days after the invoice or delivery. The law is UK law and does not govern South African contracts, but the principle that dates drive entitlements applies to any credit arrangement. If the business does not act around the agreed dates because the person who watches them is away, the opportunity passes.

## Making the process independent of the person

The fix is to move what the person knows into a shared record, and to make coverage a defined routine rather than an improvised favour.

1. Every customer has a short collections note: preferred contact, usual payment day, known issues and any standing arrangements.
2. Every contact is logged on the day it happens, with the next action and its date.
3. Each person has a named cover, agreed in advance, who has already seen the notes for the largest accounts.
4. Before leave starts, a fifteen-minute handover goes through the accounts with a commitment or dispute, in order of value.
5. Automated reminders are paused for accounts that have a recorded promise or an open dispute.

The same discipline helps in other settings. The article on [cash collection depending on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/) covers what happens when memory is the system, and [collections teams chasing customers without a ranked queue](/discovery/collections-teams-chase-customers-without-a-priority-queue/) addresses the order in which covering staff should work.

## Test the handoff before you need it

A simple exercise shows how fragile the current arrangement is. Ask a colleague who does not normally do collections to cover the ten largest accounts for one day using only the written records. Count how many times they have to ask the usual owner a question. Every question is a piece of knowledge that is not written down. The list of questions is the list of fields to add to your shared record.

## Practical next actions

1. List the ten largest overdue accounts and write a four-line collections note for each: preferred contact, usual payment day, open commitments and open disputes.
2. Choose one place for contact logs and promises to pay, and require every contact to be recorded there on the day it is made.
3. Name a cover for each collections role, and have the pair review the largest accounts together once a quarter.
4. Write a one-page leave handover checklist that covers commitments, disputes, paused reminders and the next five dated actions.
5. Configure or instruct your reminder process to skip accounts that have a recorded promise to pay or an open dispute.
6. Run the one-day cover test next month and use the questions the covering colleague had to ask to add missing fields to the customer notes.
