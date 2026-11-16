---
hub: discovery
record_id: DISC-057
slug: when-payment-terms-agreed-in-a-contract-never-reach-the-finance-system
title: When payment terms agreed in a contract never reach the finance system
description: Deposits, milestone payments, instalments, retentions and escalation dates are negotiated into supplier contracts, then paid from whatever the invoice says. How to carry payment obligations from the agreement into accounts payable.
lead: Deposits, milestone payments, instalments, retentions and escalation dates are negotiated into supplier contracts, then paid from whatever the invoice says. How to carry payment obligations from the agreement into accounts payable.
category: Contracts & Obligation Management
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: Financial controller or accounts payable manager, with the procurement lead who negotiated the agreement
budget_owner: CFO or financial director
sources:
  - Configure the payment schedule - Training | https://learn.microsoft.com/en-us/training/modules/configure-accounts-payable-dyn365-finance/2-payment-schedule
  - Invoice prepayments - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/finance-invoice-prepayments
related:
  - Why contract renewals surprise finance and operations | /discovery/why-contract-renewals-surprise-finance-and-operations/
  - Signed agreements are scattered across inboxes and shared drives | /discovery/why-signed-agreements-end-up-scattered-and-how-to-gather-them/
  - Contract amendments filed apart from the agreement they change | /discovery/contract-amendments-filed-apart-from-the-agreement-they-change/
summary: Deposits, milestone payments, instalments, retentions and escalation dates are negotiated into supplier contracts, then paid from whatever the invoice says. How to carry payment obligations from the agreement into accounts payable.
layout: plain
---
A Durban food manufacturer consolidates its packaging suppliers from six to two. The new three-year agreement with its main carton supplier is carefully negotiated: a 20 percent deposit on new print plates, payment sixty days from statement, a 2 percent discount for payment within fifteen days, an annual price adjustment capped at the producer price index each March, and a rebate if volumes pass an agreed threshold. The procurement manager files the signed agreement. Accounts payable sets the supplier up with the standard thirty-day terms used for every other vendor. For a year, invoices are paid early when they could have waited, the settlement discount is never claimed, the March increase is accepted at the full rate the supplier invoices, and nobody asks for the rebate.

## The problem in plain language

A contract often contains more payment logic than the finance system knows about. Payment terms, deposits, staged or milestone payments, instalment plans, retention amounts held back until completion, early-payment discounts, price escalation formulas, volume rebates and penalties are all agreed between the business and its supplier or customer. But the finance system usually holds only a default payment term on the supplier record and whatever amount appears on the invoice. The obligation is written down in one place and executed somewhere else, with nothing connecting the two.

The result is that accounts payable pays what is invoiced, when the system says it is due, regardless of what was negotiated. Nobody is being careless: the people paying the invoice have simply never seen the contract.

## What the buyer is actually trying to solve

The financial controller, accounts payable manager or procurement lead looking into this wants payments to follow the contract. They want the negotiated terms set up on the supplier or the purchase document, scheduled payments to fall due on the right dates, discounts and rebates to be claimed, and price changes to be checked against the agreed formula before they are paid. They also want to know, for each significant supplier, what the contract says about money and who is responsible for applying it.

## Evidence and system mechanism

### Finance systems can hold contract payment logic, if someone sets it up

Mainstream finance software can model much of what contracts say about payment. Microsoft's training on [configuring payment schedules in Dynamics 365 Finance](https://learn.microsoft.com/en-us/training/modules/configure-accounts-payable-dyn365-finance/2-payment-schedule) explains that a payment schedule splits an invoice into instalments with defined amounts and due dates, using allocation methods such as a fixed amount, a fixed number of payments or specified amounts on specified dates. It notes that this is also known as a finance plan or contract payments, and that an invoice paid on schedule is not treated as past due. Microsoft's [Business Central guidance on prepayments](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-invoice-prepayments) describes how deposits can be invoiced and posted against a purchase or sales order before the final invoice, with default prepayment percentages set per vendor, customer or item, so that all payments are posted against the same order.

These functions exist, but they only work if the terms in the contract are translated into them. A schedule or prepayment percentage that nobody enters is no control at all.

### The handover is usually a filed PDF

In most small and mid-sized businesses, procurement or the commercial team negotiates the agreement and accounts payable creates the supplier record. Unless there is a defined step where someone reads the payment clauses and sets them up, the supplier inherits the standard terms. Our article on [obligations that nobody owns after signature](/discovery/nobody-owns-the-obligations-that-start-after-a-contract-is-signed/) covers the broader pattern; payment obligations are the subset where the cost is measured directly in cash.

## Why this becomes urgent

Supplier consolidation is a common trigger. When a business moves volume to fewer suppliers, it usually negotiates better terms in exchange: longer payment periods, discounts, rebates or capped increases. Those gains are only realised if finance applies them. Consolidation also raises the stakes because each remaining contract covers more spend. Other triggers include an audit finding on payments made outside agreed terms, a cash squeeze that makes payment timing matter, or a supplier dispute where the business discovers it has been paying a price the contract did not allow.

## Economic consequence

The costs fall into four groups. Cash leaves earlier than necessary when negotiated longer terms are not applied, which weakens working capital. Money is left on the table when early-payment discounts, rebates and service credits are not claimed. Overpayments happen when price escalations, surcharges or out-of-contract items are paid as invoiced. And the business loses negotiating credibility: if it cannot show what it has paid against what was agreed, it cannot hold the supplier to the contract at renewal. Our piece on [tracing an invoice back to its commercial approval](/discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/) covers the audit side.

## Root cause

- **No contract-to-finance handover step.** Signature ends procurement's task; nothing starts finance's.
- **Payment clauses are not extracted.** Terms, schedules, discounts and formulas stay in the document.
- **Supplier records default to standard terms.** The finance system is set up for the average supplier, not this one.
- **Invoices are checked against the purchase order, not the contract.** If the order carries the invoiced price, the match passes.
- **Nobody owns contract-level money events.** Rebates and annual escalations happen once a year and belong to no regular process.

## What good looks like

Every new or renewed agreement above a set value goes through a short finance setup step before the first invoice arrives. Someone in accounts payable or finance operations reads the payment clauses using a checklist and records them: payment term, deposit, schedule, retention, discount, escalation basis and date, rebate thresholds and penalties. The supplier record and purchase agreement carry the correct terms. Scheduled payments and deposits are set up in the finance system rather than tracked in a spreadsheet. Annual events such as escalation dates and rebate calculations appear as dated tasks with an owner. Invoices that change price are checked against the agreed formula before approval. Once a year, finance reconciles what was paid to each major supplier against what the contract allowed.

## Diagnostic questions

- For your ten largest suppliers, do the payment terms in the finance system match the signed contracts?
- Who reads the payment clauses of a new agreement before its first invoice is paid?
- How many early-payment discounts and rebates did you claim last year, and how many were available?
- When a supplier applies an annual increase, who checks it against the agreed formula?
- Are deposits, retentions and instalments tracked in the finance system or in a spreadsheet?

## Practical next actions

1. Pick your ten highest-spend supplier agreements and compare the payment clauses with the terms set up in the finance system.
2. Create a one-page payment clause checklist covering terms, deposits, schedules, retentions, discounts, escalations, rebates and penalties.
3. Add a finance setup step to the contract process so no first invoice is paid until the checklist is complete.
4. Configure payment schedules, prepayments and supplier terms in the finance system instead of tracking them in spreadsheets.
5. Put annual escalation and rebate dates into a dated task list with a named finance owner.
6. Reconcile a year of payments for one consolidated supplier against the contract to measure what was missed.

## Where Mellorca fits

Mellorca helps finance and procurement teams build the handover from signed agreement to finance system: extracting payment clauses, configuring terms and schedules, and automating the checks and dated tasks that follow. This sits within [business automation and AI workflows](/services/business-automation-ai-workflows/). For the wider supplier invoice journey, see [why supplier invoices still need so many hands](/patterns/why-supplier-invoices-still-need-so-many-hands-before-they-are-paid/).

## Method note

This article uses Microsoft Dynamics 365 Finance training material and Business Central documentation as examples of how finance systems model payment schedules and prepayments; other systems use different names and options. The opening example is illustrative, and contract terms vary widely by industry and supplier.
