---
hub: patterns
record_id: PAT-162
slug: the-pattern-behind-late-invoices
title: The Pattern Behind Late Invoices
description: Late invoices are rarely the fault of a slow finance team. They follow a recognisable pattern: billing runs on a calendar batch, while the work it bills for finishes on a different day, and nothing connects the two.
lead: Late invoices are rarely the fault of a slow finance team. They follow a recognisable pattern: billing runs on a calendar batch, while the work it bills for finishes on a different day, and nothing connects the two.
category: Finance & Cash Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Finance & Cash Operations
pattern_family: Finance, Billing & Cash Flow
observable_condition: Work is completed or goods delivered on any day of the month, but invoices are prepared in a batch at month end once paperwork reaches finance, so many invoices go out two to five weeks after the work.
primary_identification: Batch-triggered billing: invoicing is driven by the finance calendar rather than by the operational event of completion, and no signal tells finance when billable work is done.
commercial_value_dimensions: Cash flow, debtor days, billing accuracy, tax invoice compliance and finance capacity
sources:
  - https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/ | https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/
  - https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-invoice-sales | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-invoice-sales
summary: Late invoices are rarely the fault of a slow finance team. They follow a recognisable pattern: billing runs on a calendar batch, while the work it bills for finishes on a different day, and nothing connects the two.
layout: plain
---
## Observable condition

A Pietermaritzburg electrical contractor completes most jobs within a day or two. Electricians fill in a paper job card and drop it in a tray at the office when they next pass by, which may be days later. On the last few days of the month, the bookkeeper works through the tray and raises invoices.

A job finished on the 3rd is invoiced on the 29th. The customer pays on thirty-day terms from invoice date, so the contractor waits nearly two months for money earned at the start. When a job card goes missing in a bakkie, the job is not invoiced at all until the customer, puzzled, asks for one.

The owner regularly asks why cash is tight when the team is fully booked.

## Realisation

The realisation is that the invoice is late before finance even sees the work. Billing is driven by the finance calendar, while the work it bills for finishes on any day. Nothing tells finance that a job is complete and billable, so finance waits for paperwork and processes it in a batch.

The delay is designed into the process. Finance could work twice as fast and invoices would still be late, because the trigger to invoice is the month end, not the end of the job.

**Realisation prompt:** for twenty recent invoices, compare the date the work was completed with the date the invoice was issued. Calculate the average gap.

## Identification

This is a pattern of batch-triggered billing. The visible symptom is a month-end rush and invoices that lag the work by weeks. The common assumption is that finance is under-resourced or slow. The structural cause is that billing is not connected to the operational event that makes it due, so it falls back on a periodic batch.

The specific delays from timesheets, approvals and proof of delivery are explored in [what it costs when invoicing waits for timesheets, approvals and delivery proof](/patterns/what-it-costs-when-invoicing-waits-for-timesheets-approvals-and-delivery-proof/). This pattern is the common thread under them: invoicing waits for a calendar rather than responding to completion.

## Diagnosis

- **Completion is recorded on paper or not at all.** The evidence that work is done travels physically and slowly.
- **Finance learns about completed work last.** There is no notification when a job closes.
- **Invoicing is a monthly event.** The finance routine is built around month end, not around jobs.
- **Invoice details must be assembled.** Prices, materials and hours have to be gathered from several places before an invoice can be raised.
- **No list of completed but uninvoiced work.** Nobody can see what has been earned but not yet billed.

## Commercial impact

The commercial value at stake is cash flow, debtor days, accuracy, compliance and finance capacity.

Cash flow is the obvious cost. If payment terms run from invoice date, every day of invoicing delay is a day added to the wait for cash. For a business that funds materials and wages up front, that gap may have to be covered by an overdraft. [The cash flow cost of late invoicing](/impact/late-invoicing-manual-billing-cash-flow-cost/) sets this out in more detail, and [when late invoices become late salaries](/moments/when-late-invoices-become-late-salaries/) shows how it reaches people.

Accuracy suffers. Invoices prepared weeks later, from memory and scraps of paper, miss materials and hours. Customers are also more likely to query an invoice for work they have half forgotten.

There is a tax dimension. [SARS guidance on tax invoices](https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/) notes that the VAT Act prescribes a timeframe for issuing a tax invoice: 21 days from the time the supply was made. A monthly batch can push some invoices past that window.

## Common misidentification

One misreading is to hire extra finance help for month end. That speeds up the batch but leaves the gap between completion and the batch untouched.

Another is to ask technicians to submit paperwork faster. Reminders help briefly; paper still moves slowly and still gets lost.

A third is to shorten payment terms. That might work with some customers, but it does not fix invoices issued weeks after the work.

## Possibility

The possibility is that completing a job creates the invoice, or at least puts it in front of finance the same day. Job details, materials and hours are captured digitally at the point of work. When the job is closed, it appears on a list of work ready to invoice, with everything needed to raise it. Finance reviews and sends invoices daily rather than in a monthly batch.

Accounting systems support this. [Business Central's guidance on invoicing sales](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-invoice-sales) explains when to use a sales order or a direct sales invoice, and how quotes and orders can be turned into invoices without retyping. Connecting field job capture to that step removes most of the delay.

The same change reduces the effort described in [why sending an invoice requires so much work](/patterns/why-sending-an-invoice-requires-so-much-work/), because the details arrive with the job.

## Intervention

Start by measuring the gap between completion and invoice for a sample of jobs. Break it into stages: completion to paperwork received, paperwork to invoice raised, invoice raised to sent.

Fix the longest stage first. In many businesses that is getting completion information to finance. A simple digital job card on a phone, with a required sign-off and materials list, can bring that from days to minutes.

Then create a daily list of completed but uninvoiced jobs and make clearing it part of finance's daily routine. Track the average gap monthly.

## Practical next actions

1. Measure the days from work completion to invoice issue for twenty recent jobs.
2. Break the gap into stages and identify the longest.
3. Capture job completion digitally at the point of work, with materials and hours.
4. Create a daily list of completed work that has not yet been invoiced.
5. Move invoicing from a monthly batch to a daily or twice-weekly routine.
6. Check that tax invoices are issued within the 21-day timeframe set out by SARS.

## Diagnostic questions

- What is our average gap between finishing work and issuing the invoice?
- How does finance learn that a job is complete?
- Can we list, today, all work that is complete but not yet invoiced?
- How many invoices last quarter were raised more than 21 days after the supply?

## Bottom line

Late invoices follow a pattern: billing runs on the finance calendar while work finishes on its own schedule, and nothing connects the two. Capture completion where the work happens, put completed work in front of finance the same day and invoice continuously. Cash arrives sooner and invoices are more accurate.
