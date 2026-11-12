---
hub: patterns
record_id: PAT-160
slug: when-one-missing-approval-holds-up-the-whole-payment-run
title: When One Missing Approval Delays the Entire Payment Cycle
description: A single unsigned invoice can stall a weekly payment run, strain supplier relationships and tie up the finance team. Here is why it happens and how to stop one gap blocking everything.
lead: A single unsigned invoice can stall a weekly payment run, strain supplier relationships and tie up the finance team. Here is why it happens and how to stop one gap blocking everything.
category: Finance & Cash Flow
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Finance & Cash Flow
pattern_family: Finance & Cash Flow
observable_condition: The scheduled payment run is postponed or partly released because one invoice still lacks an approval, and the finance team spends the day chasing a signature instead of paying the rest.
primary_identification: Single point of approval: the payment cycle treats the batch as one unit and each invoice depends on one named approver, so one absence or oversight stops many payments.
commercial_value_dimensions: Supplier relationships, early-payment discounts, late-payment penalties, finance team time and cash planning accuracy
sources:
  - https://learn.microsoft.com/en-us/power-automate/modern-approvals | https://learn.microsoft.com/en-us/power-automate/modern-approvals
  - https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals | https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals
  - https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
summary: A single unsigned invoice can stall a weekly payment run, strain supplier relationships and tie up the finance team. Here is why it happens and how to stop one gap blocking everything.
layout: plain
---
## Observable condition

It is Thursday, and the supplier payment run is meant to go out at noon. A Durban food manufacturer has forty-one invoices ready. Forty of them have been approved by the relevant department heads. One, for packaging, is waiting for the production manager, who is at a customer site with poor reception.

The bookkeeper calls twice and sends a message. The financial director considers releasing the forty and holding the one, but the payment file is prepared as a single batch and the bank upload needs a second authoriser who wants the whole list checked together. By three o'clock the decision is to move everything to Friday. Friday brings its own delays, and by Monday a supplier is phoning about an overdue account.

This is an illustrative example, but the pattern is familiar to almost every business that pays suppliers on a cycle.

## Realisation

The realisation is that one missing approval is rarely the whole problem. The larger issue is how the cycle is built. If payment is prepared and released as one block, a single gap holds up everything in it. If each invoice depends on one named person with no backup, an absence becomes a payment delay.

The delay also tends to be blamed on the person who has not signed. That misses the design: nobody told the bookkeeper in advance, there was no deadline for approvers, and no alternative route existed. The same dynamic is explored more broadly in [why does one approval hold up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/).

**Realisation prompt:** look at your last three payment runs. How many were released late, partly or not as planned, and what was the reason each time?

## Identification

This is a pattern of a single point of approval inside a batch process. The symptom is a delayed or postponed payment run. The common assumption is that approvers need to be more disciplined. The structural cause is that approval is tied to individuals and release is tied to the batch, so no part of the system can carry on without the missing piece.

It differs from the situation in [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/), which asks whether an approval step is worth having. Here the step is worthwhile. The problem is how its absence is handled.

## Diagnosis

- **Approvals travel by email or chat.** The request sits in an inbox, competes with other messages and is invisible to the finance team until they chase. See [invoice approvals trapped in inboxes](/impact/pain-invoice-approvals-in-inboxes/) for the cost.
- **No deadline exists.** Approvers are not told when approval is needed by, so their own priorities decide the timing.
- **There is no deputy.** Nobody is authorised to approve in the absence of the usual person, so leave, travel and illness block payment.
- **The batch is all or nothing.** The payment file is built after all approvals are in, rather than from the invoices already approved.
- **Status is hard to see.** The bookkeeper discovers which invoices are outstanding by checking a spreadsheet or asking around.

## Commercial impact

The first cost is to supplier relationships. Small suppliers in particular plan their cash flow around your payment date. A run that slips by a few days, again and again, makes you a customer to be deprioritised when stock is short.

The second is financial. Some suppliers offer a discount for early payment, and some charge interest on overdue accounts. Both depend on predictable payment, and a delayed run can forfeit the first and trigger the second. Delays can also affect the supply terms you negotiate in future.

The third is team time. The bookkeeper spends hours on chasing, the financial director on deciding whether to pay part of the list, and the production manager on a rushed review of invoices he has not seen. The cost of work stuck in queues is covered in [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/).

The fourth is accuracy of cash planning. If you cannot say when a payment will leave, you cannot say what the bank balance will be next week.

## Common misidentification

Three misreadings are common. The first is to treat the delay as a one-off, blaming the absent approver. The second is to remove the approval requirement altogether, which weakens control and can expose the business to errors or duplicate payments. The third is to add more approvers, so that every invoice needs two or three signatures. That increases the number of people who can hold up a payment.

The control is not the problem. The weakness is in how approvals are requested, timed and covered.

## Possibility

A better design keeps the control but stops one gap blocking the rest. Approved invoices can go into the run while others wait. Approval requests can carry a due date and a reminder. A named deputy can step in when the first approver is unavailable.

Many accounting and workflow tools offer these features. [Microsoft's documentation on approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/modern-approvals) describes approval requests that approvers can answer by email or in an approvals centre, with the outcome recorded. Its page on [sequential approvals](https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals) describes routing a request to approvers one after another. For accounting software, [the Business Central guidance on approval workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows) shows how approvals can be attached to purchase documents. These are examples of what is available, to be weighed against your own systems, not a recommendation to switch.

## Intervention

The aim is to make the payment cycle resilient rather than perfect. Agree a cut-off day for approvals, a short list of backup approvers and a rule that approved invoices proceed on schedule. The rest roll into the next run, or into a mid-cycle run for anything urgent.

Keep the control by recording who approved what and when. That record is also useful when a supplier queries a payment, and for audit.

## Practical next actions

1. **Review the last three runs.** List every invoice that was late or held back and record who it was waiting for and for how long.
2. **Set an approval cut-off.** Choose a day and time, such as Tuesday at 15:00 for a Thursday run, and tell all approvers in writing.
3. **Name a backup for each approver.** Agree who may approve when the usual person is away, and record the limits of their authority.
4. **Release in two parts.** Adopt a rule that approved invoices are paid on schedule and unapproved ones carry over, with a mid-week run for urgent cases.
5. **Make outstanding approvals visible.** Give the finance team a single list showing each unapproved invoice, its approver and its due date.
6. **Send reminders automatically.** Use the reminders in your accounting or workflow tool, or a simple scheduled message, to prompt approvers before the cut-off.

## Diagnostic questions

- In the last quarter, how many payment runs went out late or incomplete because of one approval?
- Does each approver know the deadline for the next run?
- Who can approve when the usual approver is away?
- Can approved invoices be paid without waiting for the rest of the batch?
- How would the finance team find out today which approvals are still outstanding?

## Bottom line

A payment cycle that stops for one signature is built around a single point of failure. Keep the approval, but give it a deadline, a backup and a way for the approved invoices to move on. Suppliers get paid when they expect, the finance team stops chasing and the business can predict its cash with more confidence.
