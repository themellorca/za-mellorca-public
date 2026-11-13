---
hub: discovery
record_id: DISC-084
slug: why-one-off-implementation-fees-never-reach-the-first-invoice
title: One-off implementation fees are forgotten during billing setup
description: The monthly subscription is billed on time but the agreed set-up fee quietly disappears. How to put one-off charges into the billing handover.
lead: The monthly subscription gets billed on time, but the set-up fee agreed in the quote quietly disappears. How to make one-off charges part of the billing handover so they are invoiced once, correctly.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Billing or finance manager, with the sales operations lead owning the quote data
budget_owner: Financial director or managing director
sources:
  - Use the Dashboard | https://docs.stripe.com/billing/invoices/create
  - How subscriptions work | https://docs.stripe.com/billing/subscriptions/overview
  - Subscription billing overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/subscription-billing-summary
related:
  - Orders are created with values that differ from the accepted quote | /discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/
  - Accepted quotes do not automatically create fulfilment work | /discovery/accepted-quotes-that-do-not-create-fulfilment-work/
  - Why usage-based billing data never quite matches the customer contract | /discovery/why-metered-usage-data-is-disconnected-from-the-contract-it-should-be-billed-against/
summary: The monthly subscription gets billed on time, but the set-up fee agreed in the quote quietly disappears. How to make one-off charges part of the billing handover so they are invoiced once, correctly.
layout: plain
---
A new customer signs on a Tuesday. The quote lists a monthly fee of R18,500 and a once-off implementation fee of R42,000 for configuration, data migration and training. By Friday the monthly subscription is loaded into the billing system and the first invoice is scheduled. The implementation fee is not. Nobody decided to leave it out. It simply lived on the quote, the quote went to the delivery team, and the person who set up billing worked from the subscription line only.

Six weeks later the project is finished, the customer has been trained, and finance realises that R42,000 has never been invoiced. When the invoice finally goes out it arrives all at once, out of sequence, and the customer's accounts payable team asks why they are being billed for work completed a month and a half ago. This article looks at that gap: one-off fees that are agreed in the quote and forgotten when billing is configured.

## The problem in plain language

Many businesses sell a bundle that has two different billing shapes. One part recurs every month or year. The other happens once: set-up, onboarding, migration, installation, a licence activation, a hardware deposit. Recurring charges are handled by a schedule that runs by itself. One-off charges need somebody to trigger them at the right moment. When the person who configures billing is looking at a subscription screen, the one-off line has no natural place to go, and it is easy to miss.

The result is revenue that is earned but not billed, or billed late, or billed in a way that surprises the customer. All three show up as disputes.

## What you are actually trying to solve

A finance director facing this problem is usually not asking for new billing software. They want to know why money they are owed keeps slipping through the first month of a customer relationship, and how to make sure every priced line on an accepted quote becomes an invoice at the right time. They also want customers to stop questioning invoices, because each query costs staff time and weakens the relationship at its most fragile point, the start.

## Evidence and system mechanism

### One-time items and recurring prices are different objects

Stripe's documentation on [creating invoices](https://docs.stripe.com/billing/invoices/create) shows the pattern clearly. An invoice can include recurring products, but a one-time item is added separately, either as a single item or from a saved product, with its own quantity and price. The system treats them as different kinds of line. Nothing forces the person setting up the customer to add the one-time line. If it is not added, no error appears, because from the system's point of view nothing is missing.

### Subscriptions generate invoices on their own; one-off charges do not

The [subscription overview](https://docs.stripe.com/billing/subscriptions/overview) explains that once a subscription is created, the platform automatically generates invoices and attempts to collect payment through the subscription lifecycle. That automation is the point of a subscription, and it is also why the recurring line is rarely forgotten. A one-off fee has no lifecycle of its own unless somebody creates one. The asymmetry is built in: the recurring charge is protected by automation, and the one-off charge is protected only by memory.

### Larger finance systems solve this with schedules at line level

Microsoft's description of [subscription billing in Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/subscription-billing-summary) explains that billing schedules manage recurring billing and that the system bills and recognises revenue at the line level. The design principle is worth borrowing even if you never use that product: every priced line carries its own billing rule, whether that is monthly, annual, on delivery or on milestone. A line without a billing rule is visible as a gap, rather than invisible as an omission.

### Warning signs

- The first invoice a customer receives contains only the subscription, and a second, larger invoice follows weeks later.
- Finance finds out about the set-up fee when the delivery team mentions that the project is complete.
- Customers ask why they were charged separately for something they believed was included.
- Month-end review turns up customers who have been live for months with no implementation invoice.

## Problem owner and why-now trigger

The billing or finance manager owns the invoice. The sales operations lead, or whoever maintains the quote template, owns the structure of the quote. The budget owner is usually the financial director, because the cost shows up as delayed or lost revenue rather than as a line in a budget.

The trigger is typically a rise in billing disputes. As the business grows, the person who used to configure every new customer by hand and remember each deal is replaced by several people working from a form. What used to live in one person's head now needs to live in a process, and the one-off fee is the first thing to fall out of it. A new product bundle with a set-up fee, a pricing change, or a new billing system often marks the point at which the problem becomes visible.

## Economic consequence

The direct cost is cash. A R42,000 fee invoiced six weeks late on thirty-day terms is paid roughly ten weeks after the work started, and that cash was needed to pay the consultants who did it. If the fee is never invoiced at all, the business has delivered the work for free. In a company that onboards six customers a month, even one omission in every ten is more than half a million rand of unbilled work across a year at this fee level.

The indirect cost is the dispute itself. A late, lump-sum invoice invites questions about scope and timing, and staff time is spent reconstructing the story from emails. Customers who see a billing error in the first month assume there will be more. This is the same pattern that makes [revenue leakage visible only at month-end reconciliation](/discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/), but with one difference: here the leak is predictable and can be closed at source.

## Root cause

- **The quote and the billing system describe the same deal in different shapes.** The quote lists lines; the billing system expects a plan. Anything that is not a plan has to be added by hand, as described in [recurring billing set up by hand after a deal closes](/discovery/why-recurring-billing-is-set-up-by-hand-after-a-deal-closes/).
- **No handover checklist ties each quote line to an invoice.** The person configuring billing has no list to tick against.
- **Nobody owns the one-off trigger.** Is it invoiced at signing, at go-live or at completion? Without a named rule, it waits for someone to ask.
- **Delivery and finance do not share a status.** The project team knows when work starts and ends; finance learns later, as seen in [the inability to measure time from accepted quote to first invoice](/discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/).

## Practical intervention

1. **Classify every priced line by billing type.** On the quote template, mark each line as recurring, one-off at signing, one-off at milestone or usage-based. A line with no type cannot be quoted.
2. **Build a billing handover form.** It lists every quote line with its type, amount and trigger, and the person setting up billing must tick each one as scheduled or invoiced. The form is attached to the customer record.
3. **Decide the default trigger for set-up fees.** Many businesses invoice a set-up fee on signing, or split it into a deposit and a balance at go-live. Whichever you choose, write it into the quote terms so the customer expects it.
4. **Create the invoice at handover, even if it is held.** A draft invoice for the one-off fee, dated for the agreed trigger, makes the charge visible in the queue instead of leaving it in memory.
5. **Run a weekly exception report.** List customers who are live and have a recurring invoice but no one-off invoice where the quote contained one. This takes minutes and catches the stragglers.
6. **Close the loop with delivery.** When the project manager marks go-live, finance receives the prompt for any milestone-based fee.

### Trade-offs

Invoicing a set-up fee at signing improves cash flow but requires the customer to accept paying before work starts, which some larger customers will refuse. Milestone billing is easier to agree but depends on a disciplined status feed from delivery. An additional form adds a few minutes to each onboarding, and if it is not reviewed it becomes another box to tick. The exception report is what keeps it honest.

### An illustrative example

Illustrative: a Pretoria software reseller with thirty staff sold annual licences plus a once-off configuration fee. Billing was set up from the licence line by an accounts clerk. After a customer queried a configuration invoice that arrived four months after go-live, the financial director compared quotes with invoices for the previous two quarters and found that roughly one onboarding in eight had never been billed for configuration. She introduced a handover form with a billing type for each line and a Monday exception list. Within two months the list was empty most weeks, and first-month queries from customers dropped noticeably.

## Diagnostic questions

- For the last ten new customers, does every one-off line on the quote appear on an invoice?
- Who decides when a set-up fee is invoiced, and is it written down?
- Can finance see a new customer's quote lines when configuring billing, or only the subscription?
- How many first-month billing queries did you receive last quarter?

## What good looks like

Every priced line on an accepted quote has a billing type and a trigger before the customer goes live. The first invoice a customer receives matches what was sold, with no surprise follow-up bill. Finance can list, on any Monday, the customers who are live but missing a one-off charge, and the list is short. Disputes about the first invoice become rare, because the invoice is simply the quote in a different form.

## Where Mellorca fits

Mellorca's work on quote-to-cash starts with tracing what happens to each line of an accepted quote on its way to an invoice, and finding where lines drop out. From there it helps design the handover, the billing types and the exception report so that the process holds when volumes rise. Where the cost of late invoicing is already visible, the analysis in [late invoicing and manual billing](/impact/late-invoicing-manual-billing-cash-flow-cost/) shows how the cash-flow effect adds up.

## Method note

The sources describe how invoice and subscription systems treat one-time and recurring charges and how a larger finance system bills at line level. They do not measure how often one-off fees are missed in any business. The rand figures, the proportion of missed fees and the example are illustrative rather than a client case.
