---
hub: discovery
record_id: DISC-083
slug: why-recurring-billing-is-set-up-by-hand-after-a-deal-closes
title: Why recurring billing is still set up by hand after a deal closes
description: When contract terms are retyped into billing after a deal is won, missed start dates and escalations repeat for years. How to turn closed deals into billing schedules directly.
lead: When contract terms are retyped into billing after a deal is won, missed start dates and escalations repeat for years. How to turn closed deals into billing schedules directly.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Financial controller or billing manager, with sales operations owning deal data
budget_owner: Finance director
sources:
  - Subscription billing overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/subscription-billing-summary
  - How subscriptions work | https://docs.stripe.com/billing/subscriptions/overview
  - IFRS - IFRS 15 Revenue from Contracts with Customers | https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/
related:
  - Why you cannot measure the time from accepted quote to first invoice | /discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
summary: When contract terms are retyped into billing after a deal is won, missed start dates and escalations repeat for years. How to turn closed deals into billing schedules directly.
layout: plain
---
A salesperson closes a three-year managed services contract: a once-off installation fee, a monthly service charge, an annual licence and a price escalation every March. The deal is marked as won in the CRM. Then someone in finance opens the signed PDF and sets up the recurring charges by hand in the billing system. If they miss the escalation clause, nobody notices for a year. If they start billing a month late, the first invoice is never raised at all.

This article looks at that operating condition: recurring charges set up manually after a deal closes. It affects any business with contract or subscription revenue, from managed IT and security services to equipment rental, software, maintenance plans and memberships.

## The problem in plain language

Sales and finance meet at the point where a commitment becomes a billing schedule. In many businesses that handover is a document, an email or a spreadsheet row. Finance reads the terms and recreates them in the billing or accounting system: start date, frequency, amount, escalation, notice period, end date. Every recurring invoice for the life of the contract then depends on that one manual interpretation being correct and complete.

## What the buyer is actually trying to solve

Finance managers search for ways to automate recurring invoicing, stop missed billing, or connect the CRM to the accounting system for subscriptions. Sales and operations leaders want customers billed correctly from the first month without chasing finance. The underlying need is that the commercial terms agreed at closing become the billing schedule directly, without being retyped, and that changes during the contract follow the same route.

## Evidence and system mechanism

### Billing systems can model the contract, if they are given it

Modern finance systems are designed to hold recurring terms as structured data rather than as notes. Microsoft's [subscription billing overview for Dynamics 365 Finance](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/subscription-billing-summary) describes billing schedules for recurring contract billing, price management, contract renewal and consolidated invoicing, with revenue deferrals and allocation designed to support IFRS 15 and ASC 606. Payment platforms work similarly: [Stripe's subscriptions documentation](https://docs.stripe.com/billing/subscriptions/overview) explains that once a subscription exists, invoices are generated automatically for each period and the subscription moves through defined statuses. The capability is common. What is often missing is an automatic path from the closed deal to that structured record.

### The terms matter for revenue, not only for invoices

The [IFRS 15 standard](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/) requires revenue to be recognised as promised goods or services are transferred, through five steps: identify the contract, identify performance obligations, determine the transaction price, allocate it, and recognise revenue as obligations are satisfied. A bundled deal with a once-off fee and a monthly service is exactly where allocation and timing matter. If the contract terms are reinterpreted by hand, both billing and revenue recognition rest on that reinterpretation.

### Common failure points

| Where it goes wrong | Typical consequence |
| --- | --- |
| Start date entered late | First months never invoiced |
| Escalation clause missed | Billing stays at year-one price |
| Wrong frequency or term | Annual charge billed monthly, or the reverse |
| Amendment not passed on | Upgrades delivered but not billed |
| End or notice date not recorded | Billing continues after cancellation, causing disputes |

## Problem owner and why-now trigger

The financial controller or billing manager owns the outcome, because missed and wrong invoices land in accounts receivable. Sales operations owns the CRM and the deal data. The finance director usually funds the fix.

The trigger is commonly an ERP or CRM change. A new CRM rarely includes a link to recurring billing on day one, and a new accounting system forces the business to re-enter every live contract, exposing how many were set up inconsistently. Growth in contract volume is the other trigger: a process that works for twenty contracts breaks at two hundred.

## Economic consequence

The most direct cost is revenue that is earned but never billed: late starts, missed escalations and unbilled upgrades. Because recurring revenue compounds, a missed escalation repeats every month for the rest of the term. Billing errors in the customer's disfavour create disputes, delayed payment and credit notes, which harm cash flow and the relationship. There is also a reporting cost. Monthly recurring revenue and deferred revenue figures are only as good as the schedules behind them. The cash impact of slow and manual billing is explored in [the cash flow cost of late invoicing and manual billing](/impact/late-invoicing-manual-billing-cash-flow-cost/).

## Root cause

- **Deal terms captured as documents.** The CRM records that a deal was won, but not its recurring terms in structured fields.
- **No handover interface.** Nothing creates the billing schedule from the deal; a person does.
- **Amendments outside the system.** Upgrades, downgrades and renewals are agreed by email and may never reach finance; see [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).
- **No reconciliation.** Nobody routinely compares active contracts with active billing schedules.

The one-off version of this handover, re-keying quotes into orders, is covered in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/). Recurring revenue raises the stakes, because one keying error repeats for years.

## Practical intervention

1. **Structure the terms at closing.** Make the recurring fields mandatory before a deal can be marked won: products, quantities, price, frequency, start date, term, escalation rule and notice period.
2. **Decide the system of record for contracts.** Choose where the live contract and its billing schedule are held, whether in the ERP, a subscription billing tool or the CRM, and write the decision down.
3. **Integrate the handover.** Create the billing schedule automatically from the won deal, with a finance review step rather than a retyping step.
4. **Route changes the same way.** Treat amendments, renewals and cancellations as structured changes to the same contract record, not as emails.
5. **Reconcile monthly.** Compare won contracts and active schedules, and investigate any contract without billing or billing without a contract.
6. **Clean the existing book.** Before or during automation, review live contracts against their schedules to recover missed escalations and charges where the contract allows.

### Trade-offs

Making fields mandatory at closing adds a few minutes to the sales process, and sales teams may resist. Unusual contracts will not fit standard fields, so a controlled exception route is needed. The review step in finance should stay, but it should check rather than recreate.

### An illustrative example

Illustrative: a Johannesburg managed IT services provider with about 60 staff reviewed its 180 live contracts while moving to a new accounting system. It found several contracts where the annual escalation had never been applied and a handful of add-on services that had been delivered for months without being billed. The business added mandatory recurring fields to its CRM, built an integration that drafts billing schedules from won deals for finance approval, and introduced a monthly contract-to-billing reconciliation.

## Diagnostic questions

- When a recurring deal is won, how does finance learn its terms, and how long does it take?
- Are escalation rules stored as data, or as text in a PDF?
- Could you list every active contract that currently has no billing schedule?
- How are upgrades and downgrades during a contract passed to billing?
- When did you last compare contract terms with what is actually being invoiced?

## What good looks like

Recurring terms are captured as structured data when a deal closes. The billing schedule is created from that data automatically and reviewed by finance. Amendments, renewals and cancellations update the same record. A monthly reconciliation confirms that every contract is billed and every bill has a contract, and escalations happen on the date the contract says they should.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can structure recurring deal terms in the CRM and connect them to billing and accounting systems. [Business automation](/services/business-automation/) can add the approval, amendment and reconciliation steps that keep contracts and billing aligned.

## Method note

Product capabilities are taken from current vendor documentation and are examples rather than recommendations. This article does not provide accounting advice on IFRS 15, which should come from the business's accountants. The example is illustrative rather than a client case.
