---
hub: patterns
record_id: PAT-115
slug: when-revenue-leakage-starts-with-administrative-friction
title: When Revenue Leakage Starts With Administrative Friction
description: Revenue rarely leaks through one dramatic failure. It seeps out through small chargeable items nobody bills, price increases nobody applies and contracts nobody renews on time. The common cause is admin that is too awkward to do every time.
lead: Revenue rarely leaks through one dramatic failure. It seeps out through small chargeable items nobody bills, price increases nobody applies and contracts nobody renews on time. The common cause is admin that is too awkward to do every time.
category: Sales, CRM & Revenue Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Sales, CRM & Revenue Operations
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: Call-out fees, extra hours, additional materials, annual price increases and contract renewals are sometimes not billed, because adding them to an invoice needs someone to remember, look up a rate or ask a colleague.
primary_identification: Friction-driven leakage: the effort required to bill an item correctly is high enough that it is skipped, delayed or underbilled, and nothing in the process detects the omission.
commercial_value_dimensions: Earned revenue, margin, contract renewal income and pricing discipline
sources:
  - Welcome to subscription billing - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/srb/welcome
  - Standard recurring sales lines - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-work-standard-lines
related:
  - When Quote Creation Becomes a Sales Bottleneck | /patterns/when-quote-creation-becomes-a-sales-bottleneck/
  - The Pattern Behind Leads That Receive No Second Follow-Up | /patterns/the-pattern-behind-leads-that-receive-no-second-follow-up/
  - Why Sales Teams Build Private Spreadsheets Beside the CRM | /patterns/why-sales-teams-build-private-spreadsheets-beside-the-crm/
summary: Revenue rarely leaks through one dramatic failure. It seeps out through small chargeable items nobody bills, price increases nobody applies and contracts nobody renews on time. The common cause is admin that is too awkward to do every time.
layout: plain
---
## Observable condition

An IT support company in Bloemfontein has forty small business clients on monthly contracts. Each contract includes a set number of support hours, with extra hours billed at an agreed rate. Several contracts allow an annual price increase linked to inflation.

At month end, the bookkeeper prepares invoices from last month's invoices. To bill extra hours she needs the technicians' time records, which are in a separate ticketing tool, and the rate for each client, which is in the signed contract PDF. Most months she gets to the biggest clients. For the smaller ones, she sends the standard monthly fee and plans to catch up later.

When the owner checks, he finds that three clients have not had their annual increase applied for two years, and that extra hours for a dozen clients were never billed.

## Realisation

The realisation is that the revenue was earned. The work was done, the contract allowed the charge and the client would have paid. The money was lost in the effort between knowing the charge exists and putting it on an invoice.

Nobody decided to give the work away. The process made billing it awkward enough that it slipped, month after month, without anyone noticing.

**Realisation prompt:** pick ten client accounts at random. For each, compare what the contract allows you to bill with what you actually billed in the last six months.

## Identification

This is a pattern of friction-driven leakage. The visible symptom is lower revenue than the volume of work suggests. The common assumption is that clients are on the wrong price or that the business is simply competitive. The structural cause is that billing each chargeable item requires manual lookups and cross-referencing, so the items most awkward to bill are the ones most often skipped.

It is distinct from [the cost of late invoicing](/impact/late-invoicing-manual-billing-cash-flow-cost/). Late invoices are eventually sent. Leaked revenue is never invoiced at all.

## Diagnosis

- **Chargeable activity is recorded in a different system from billing.** Time, materials and call-outs live in a job or ticket tool that does not feed invoices.
- **Rates live in documents.** Contract rates and terms are in PDFs or emails, so each charge needs a lookup.
- **Invoices are copied from last month.** Copying carries forward the old price and omits anything new.
- **Price increases need someone to remember.** Annual escalations depend on a calendar reminder or on nobody.
- **No reconciliation of work against billing.** Nobody compares what was delivered with what was invoiced.

## Commercial impact

The commercial value at stake is earned revenue, margin, renewal income and pricing discipline.

Leaked revenue is pure margin. The cost of doing the work has already been paid. Every unbilled hour, call-out or price increase falls straight off the bottom line.

The losses compound. A price increase missed this year is missed again next year, and the base for future increases is lower. Over a few years, a client can end up paying noticeably less than contracted.

Pricing discipline weakens. When staff see that extras are often not billed, they start treating them as free, and clients learn to expect them. Charges calculated by hand also invite errors, as described in [the cost of fees and charges calculated in spreadsheets](/impact/fees-commissions-charges-calculated-in-spreadsheets-error-cost/).

## Common misidentification

One misreading is to treat it as a staff performance issue. The bookkeeper is doing what the process allows in the time available.

Another is to run a once-off billing audit, recover some revenue and move on. Without changing the process, the leak resumes the next month.

A third is to assume clients would object to correct billing. Most clients expect to pay what the contract says; what they object to is surprise back-billing for two years at once.

## Possibility

The possibility is that every chargeable item reaches the invoice without a manual lookup. Contract terms, rates and increase dates are held as data. Billable time and materials flow from the job system into a billing proposal. Recurring fees and their escalations are calculated automatically, and staff review exceptions instead of building invoices.

Accounting platforms support this directly. Microsoft's overview of [subscription billing in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/srb/welcome) describes billing contractually agreed services on a recurring basis, with billing proposals, billing templates and notice periods, and notes that this reduces errors from quote to recurring invoice. For simpler cases, [standard recurring sales lines](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-work-standard-lines) let regular items be added to sales documents without retyping.

Fixing the upstream record often also fixes the issue described in [why wrong invoices are usually an operations problem, not a billing one](/patterns/why-wrong-invoices-are-usually-an-operations-problem-not-a-billing-one/).

## Intervention

Start with a sample audit: compare contract terms and delivered work against invoices for a set of clients over six months. Estimate the leak and group it by type, such as extra hours, materials, call-outs or price increases.

Then remove friction from the biggest category first. Capture contract rates and escalation dates in the billing system, not in PDFs. Connect the job or ticketing system so that billable time arrives in a billing proposal. Add a monthly check that compares work delivered with work invoiced.

For historic leakage, decide client by client whether to recover, and communicate it before the next invoice rather than on it.

## Practical next actions

1. Audit ten client accounts for six months, comparing contract terms and delivered work with invoices.
2. Group unbilled revenue by type and estimate the annual value of each type.
3. Move contract rates and price escalation dates from documents into the billing system.
4. Feed billable time and materials from the job system into a monthly billing proposal.
5. Add a monthly reconciliation of delivered work against invoiced work.
6. Agree a client-by-client approach to any historic underbilling before raising it.

## Diagnostic questions

- When did we last compare what our contracts allow us to bill with what we billed?
- How many steps does it take to add an extra hour of work to a client's invoice?
- Which clients have not had a contractual price increase applied in the last year?
- Where are our contract rates stored, and who looks them up?

## Bottom line

Revenue leakage usually starts with administration that makes billing awkward, not with clients refusing to pay. Hold contract terms as data, connect delivered work to billing and reconcile the two every month. The revenue you have already earned will start reaching the bank.
