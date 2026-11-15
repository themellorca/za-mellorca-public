---
hub: discovery
record_id: DISC-085
slug: when-contract-terms-never-make-it-into-the-billing-rules
title: When contract terms never make it into the billing rules
description: Discounts that expire, price escalations, minimum commitments and currency clauses are agreed in the contract and then missed by billing. Why it happens, why international growth makes it worse, and how to fix it.
lead: Discounts that expire, price escalations, minimum commitments and currency clauses are agreed in the contract and then missed by billing. Why it happens, why international growth makes it worse, and how to fix it.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Revenue operations or sales operations lead responsible for contract-to-billing handover
budget_owner: CFO, chief revenue officer or COO
sources:
  - https://docs.stripe.com/billing/subscriptions/subscription-schedules | https://docs.stripe.com/billing/subscriptions/subscription-schedules
  - https://docs.stripe.com/products-prices/pricing-models | https://docs.stripe.com/products-prices/pricing-models
summary: Discounts that expire, price escalations, minimum commitments and currency clauses are agreed in the contract and then missed by billing. Why it happens, why international growth makes it worse, and how to fix it.
layout: plain
---
A software and services company signs its first customer in Kenya. The agreement includes a 15 percent introductory discount for six months, an annual price increase linked to inflation, a minimum monthly commitment and invoicing in US dollars. The sales director attaches the signed PDF to the deal and moves on. The billing clerk sets the customer up with the discounted rate in rand, because that is how every other customer is set up. A year later the discount is still being applied, the escalation has never been invoiced, the minimum commitment has been ignored in quiet months, and the customer is querying exchange differences on every statement.

## The problem in plain language

A contract describes how a customer should be charged. A billing system charges according to whatever rules have been set up in it. When the two are connected only by someone reading the contract and keying a few values, everything that does not fit the standard set-up is lost: time-limited discounts, step changes, escalation clauses, usage tiers, minimums, billing currency, payment terms that differ from the default, and special invoicing requirements. The business then invoices what the system knows, not what the customer agreed.

## What the buyer is actually trying to solve

The revenue operations lead or financial controller usually notices this through symptoms: credit notes to correct invoices, disputes about rates, revenue that does not match the signed contract value, or an audit question about how pricing terms are applied. The underlying question is how to make sure that every commercial term with a billing effect is captured as a rule the billing system will apply automatically, at the right time, for the life of the contract.

## Evidence and system mechanism

### Accounting already treats the contract as the starting point

IFRS 15, summarised on the [IFRS Foundation's standard page](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/), builds revenue recognition on five steps: identify the contract, identify the performance obligations, determine the transaction price, allocate it to the obligations, and recognise revenue as each obligation is satisfied. The transaction price includes variable consideration that must be estimated. If billing ignores a discount expiry or an escalation, invoices and recognised revenue drift away from the contract, and finance has to reconcile the two by hand.

### Billing platforms can model terms that change over time

Modern billing tools can represent most contract terms if someone configures them. Stripe's documentation on [subscription schedules](https://docs.stripe.com/billing/subscriptions/subscription-schedules) describes phases that change price, quantity or discounts on set dates, such as a discounted first phase followed by a phase at the normal price. Phases can carry their own currency and tax settings, and the documentation warns that changes made directly to a subscription with a schedule attached may be overwritten when the next phase begins. Stripe's overview of [recurring pricing models](https://docs.stripe.com/products-prices/pricing-models) lists flat-rate, per-seat, tiered and usage-based models. The tools exist. The gap is that nobody translates the contract into these structures, or the translation is done once and never checked.

## Why this becomes urgent

International expansion is a common trigger. New markets bring billing currencies, different tax treatment, local payment terms and customers who negotiate harder on contract wording. A billing set-up designed for domestic customers on a standard price list cannot absorb those differences without manual workarounds. Other triggers include moving from once-off projects to recurring contracts, introducing usage-based pricing, and a finance system migration that exposes how many customers are on non-standard terms.

## Economic consequence

The financial effect runs in both directions. Missed escalations and expired discounts that keep being applied leak revenue quietly, often for years. Overbilling, for example when a negotiated cap is ignored, produces disputes, credit notes and damaged relationships. Minimum commitments that are never invoiced weaken the commercial model the business thought it had. Every correction costs finance time and delays cash, and each dispute ties up an account manager. Our piece on [why orders must carry the price and terms of the accepted quote](/discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/) shows how the same loss begins earlier, at the handover from sales.

## Root cause

- **Terms are stored as text.** The contract is a PDF attached to a CRM record, not a set of fields that billing can use.
- **The handover is a single event.** Billing is set up once at contract start, with no mechanism for terms that change later.
- **Price logic lives in several places.** Price lists, CRM quotes and billing products each hold their own version, a pattern covered in [pricing rules maintained in three places](/discovery/why-the-same-pricing-rules-are-maintained-in-three-places-and-drift-apart/).
- **Non-standard terms are approved without a billing check.** Sales can agree terms the billing system cannot represent, and nobody finds out until the first invoice.
- **Usage and commitments are disconnected.** Where pricing depends on usage, the data often does not reach billing in a form tied to the contract, as described in [metered usage disconnected from the contract](/discovery/why-metered-usage-data-is-disconnected-from-the-contract-it-should-be-billed-against/).

## What good looks like

Every signed contract produces a structured billing profile with the fields that drive charges: price, currency, discount and its end date, escalation rule and date, minimums, usage tiers, billing frequency, payment terms and tax treatment. Time-based changes are scheduled in the billing system when the contract is captured, not remembered later. Non-standard terms go through a billing review before signature, so sales knows whether the system can support them. A monthly check compares contracted terms with what was invoiced for a sample of customers, with differences assigned to a named owner. Finance can explain the difference between contract value and invoiced revenue for any customer without opening the PDF.

## Diagnostic questions

- How many active customers are on terms that differ from your standard price list?
- For those customers, where are the non-standard terms recorded in a form the billing system uses?
- How many credit notes last quarter were issued to correct pricing, discounts or currency?
- Who checks whether a proposed contract term can be billed before the contract is signed?
- When a discount expires or an escalation is due, what triggers the change?

## Practical next actions

1. Pull a list of active contracts with non-standard terms and record, for each one, every term that affects what should be invoiced and when.
2. Compare those terms with the last three invoices for each customer and list the differences, separating underbilling from overbilling.
3. Define a standard billing profile, the minimum set of structured fields every contract must produce, and require it before a new customer is invoiced.
4. Configure scheduled changes, such as discount expiries and escalations, in the billing system at set-up rather than relying on reminders.
5. Add a billing feasibility check to the approval route for non-standard terms, especially new currencies, minimums and usage-based pricing.
6. Run a monthly sample comparison of contract terms against invoices, and track the error rate until it is consistently low.

## Where Mellorca fits

Closing this gap usually means connecting the CRM, contract records and billing system so that agreed terms flow through as data, with a review step for anything non-standard. Mellorca does this through [systems implementation and integration](/services/systems-implementation-integration/), starting with a sample reconciliation that sizes the problem. Where currency and tax corrections are already frequent, our article on [tax and currency corrections after invoicing](/discovery/why-tax-and-currency-corrections-keep-happening-after-invoices-are-issued/) covers related causes.

## Method note

This article uses the IFRS Foundation's summary of IFRS 15 and Stripe's public billing documentation to explain the mechanism. It does not give accounting advice. The example in the opening is illustrative and not drawn from a specific business.
