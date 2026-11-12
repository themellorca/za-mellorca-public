---
hub: discovery
record_id: DISC-166
slug: why-cash-forecasts-need-to-know-which-overdue-invoices-are-disputed-promised-or-on-hold
title: Cash forecasts ignore real collections workflow states
description: A forecast built from due dates treats a promised payment and a disputed invoice alike. How to feed collections states into the cash forecast so it stops running optimistic.
lead: A forecast built from due dates treats a promised payment and a disputed invoice alike. How to feed collections states into the cash forecast so it stops running optimistic.
category: Accounts Receivable & Collections
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Financial director or financial manager who owns the forecast, with the credit controller owning the collections states
budget_owner: Financial director or managing director
sources:
  - Analyze cash flows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/finance-analyze-cash-flow
  - Collect outstanding balances - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
related:
  - Sales promises payment extensions that finance cannot see | /discovery/how-informal-payment-extensions-from-sales-undermine-collections/
  - Customers receive reminders for invoices they already paid | /discovery/why-paying-customers-still-get-overdue-invoice-reminders/
  - Recurring invoice failures are handled as isolated exceptions | /discovery/why-recurring-invoice-failures-need-a-reason-code-and-an-owner/
summary: A forecast built from due dates treats a promised payment and a disputed invoice alike. How to feed collections states into the cash forecast so it stops running optimistic.
layout: plain
---
On Monday the finance director opens the 13-week cash forecast. It shows R2.4 million of receivables coming in over the next four weeks, assumed to arrive in line with each customer's payment terms. By the end of week two, R900,000 of it has not arrived. Part of that was disputed three weeks ago. Part belongs to a customer that has been placed on credit hold. Part was promised for the end of the month by a payables clerk who then went on leave. The forecast saw none of this, because it was built from invoice due dates, and the due date does not know what has happened since.

A cash forecast that treats every unpaid invoice as equally likely to arrive on its due date is a forecast of what the ledger says, not of what collections knows.

## What goes wrong when the forecast ignores workflow states

An overdue invoice is not a single state. Inside a collections process the same R100,000 balance can be in very different situations:

- not yet contacted;
- reminder sent, no reply;
- customer has promised to pay on a specific date;
- invoice is disputed and waiting on a credit note or a correction;
- payment is blocked on the customer's side, such as a missing purchase order or an approval;
- account is on hold or being escalated;
- balance is likely to be written off.

Each state implies a different probability of payment and a different expected date. A promise to pay next Friday from a customer with a clean record is close to cash. A disputed invoice with no resolution owner might not arrive this quarter. If the forecast puts both in the same column, it is wrong by a margin nobody can see.

The error is not random. Forecasts built on due dates are systematically optimistic about late balances, because they assume that overdue means about to be paid. Over a few months, the finance director learns not to trust the forecast and starts adding a private buffer. That buffer is a rough, undocumented correction that exists in one head.

## Why the two views drift apart

The forecast and the collections process are often owned by different people using different tools. Treasury or the financial director builds the forecast in a spreadsheet, refreshed from an ageing report. Credit control works the accounts from a mix of emails, notes and a tracker. The only thing the two share is the invoice number and its due date. The status information collections holds never flows into the forecast, because nobody has defined what a status should do to a forecast line.

## What finance systems model

Finance software already treats collections state as relevant to cash. Microsoft's guidance on [analysing cash flow in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-analyze-cash-flow) describes a cash flow forecast built from receivables and payables, and a worksheet that shows how the forecast treats confirmed sales and purchases. It notes that the forecast can be recalculated after settings change, so assumptions can be revisited rather than frozen. The forecast tool is only as good as what is fed to it.

On the collections side, the documentation for [collecting outstanding balances](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-collect-outstanding-balances) describes fields for a dispute status and a promise-to-pay date on invoices. Those two fields are exactly what a forecast needs: a date the customer has committed to, and a flag that an amount may not be collectable until something is corrected.

The [credit and collections overview in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) adds another dimension. It describes customer aging snapshots that hold aged balance information at a point in time, and blocking rules that put orders on hold based on overdue amounts and credit limit usage. A snapshot is useful for forecasting because it lets you compare what was expected a month ago with what actually arrived, and the credit hold tells you which customers are not going to be shipped to, and therefore not billed, until their balance is settled.

The common thread is that collections state is structured data in these systems, not text in a note. Structure is what allows a forecast to use it. A free-text note saying "spoke to Thabo, says Friday" cannot be added up. A promise-to-pay date and an amount can.

## A simple way to connect the two

You do not need a new forecasting tool. You need a short, agreed list of collections states and a rule for how each one changes the forecast. A workable starting set looks like this:

| Collections state | How the forecast treats it |
| --- | --- |
| Current, not yet due | Forecast on due date, adjusted by the customer's historical average days to pay |
| Overdue, no contact | Move to a later week by the customer's usual lateness |
| Promise to pay recorded | Forecast on the promised date, with a flag if the promise has been broken before |
| Disputed | Remove from the base forecast until the dispute has an owner and a resolution date |
| On credit hold or escalated | Show separately as at risk, not as expected cash |

The percentages or delays you apply should come from your own history, not from a template. After two or three months of recording, you can compare each state's forecast against what really arrived and adjust. The first version will be rough; the value is in making the assumptions visible so they can be improved.

This also exposes where collections information is thin. If most overdue amounts show as "no contact", the forecast is telling you that follow-up is not happening, which links to the wider pattern in [cash collection depending on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/). If disputes are numerous, see [invoice disputes living in email while the ledger says overdue](/discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/).

## The wider cost

A forecast that misses by a large margin does more than embarrass the finance director. It leads to supplier payments being delayed unexpectedly, overdraft use that was avoidable, or the stress described in [the cash flow week that keeps the owner awake](/moments/the-cash-flow-week-that-keeps-the-owner-awake/). Change in an order's status also has to reach the forecast quickly, as covered in [order cancellations taking weeks to change the revenue forecast](/discovery/why-order-cancellations-and-reductions-take-weeks-to-change-the-revenue-forecast/).

## Practical next actions

1. List every state an overdue invoice can be in within your collections process, and agree the list with the credit controller, usually between five and eight states.
2. Add a status field and a promise-to-pay date to wherever collections is tracked, and make sure both are updated whenever a customer is contacted.
3. Write down, for each state, how the forecast should treat the amount, and use your own payment history to set the delay or the probability.
4. Rebuild next month's forecast with the states applied and compare it side by side with the old due-date version.
5. At month end, compare what each state forecast with what was actually received, and adjust the rule for the state with the biggest gap.
6. Agree a weekly ten-minute check between credit control and the person owning the forecast, so changes in status reach the forecast before the Monday review.
