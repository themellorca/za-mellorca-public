---
hub: discovery
record_id: DISC-094
slug: why-metered-usage-data-is-disconnected-from-the-contract-it-should-be-billed-against
title: Why usage-based billing data never quite matches the customer contract
description: Usage records and contract terms sit in different systems, so every metered invoice needs a human to reconcile it. How to connect them and stop disputes.
lead: Usage records arrive from one system and contract terms sit in another, so every metered invoice needs a human to reconcile them. How to connect the two and stop the disputes.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Billing or revenue operations lead, with the contracts manager owning the commercial terms
budget_owner: Financial director
sources:
  - Basic usage-based billing | https://docs.stripe.com/billing/subscriptions/usage-based
  - Set up a pay-as-you-go pricing model | https://docs.stripe.com/billing/subscriptions/usage-based/implementation-guide
  - IFRS - IFRS 15 Revenue from Contracts with Customers | https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
related:
  - When sales and finance work from different product and price data | /discovery/sales-and-finance-use-different-product-and-price-data/
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
  - Why tax and currency are still corrected by hand after the invoice goes out | /discovery/why-tax-and-currency-corrections-keep-happening-after-invoices-are-issued/
summary: Usage records arrive from one system and contract terms sit in another, so every metered invoice needs a human to reconcile them. How to connect the two and stop the disputes.
layout: plain
---
At the end of the month a billing analyst exports usage from the platform: calls made, licences active, kilograms processed, hours logged. She then opens a folder of signed contracts, finds the customer's rate card, checks whether a minimum commitment or a tiered discount applies, and builds the invoice by hand. For forty customers this takes three days. For the fortieth, she discovers the contract was amended in March and the amendment sits in somebody's email.

This article looks at that operating condition: usage-based billing data that is disconnected from the customer contracts it is supposed to be billed against. It affects software providers, telecoms resellers, logistics firms, equipment lessors and any business that charges for what customers consume.

## The problem in plain language

Usage billing needs two things to meet: a measurement, and a rule. The measurement comes from an operational system. The rule comes from the contract: the unit price, the free allowance, the tiers, the minimum monthly charge, the date the new rate takes effect. In many businesses these live in different places and are joined by a person with a spreadsheet. The join is slow, and every manual step is a chance for the wrong rate, the wrong period or the wrong customer.

## What you are actually trying to solve

The business is trying to issue a usage invoice that the customer accepts without questions, on the day it should go out. That requires the contract terms to be machine-readable enough that the billing step can apply them, and the usage records to be traceable to a customer, a contract and a period. The goal is not a more elaborate pricing scheme. It is a dependable link between what was agreed and what was measured.

## Evidence and system mechanism

### Billing products assume usage is tied to a priced plan

Stripe's documentation on [usage-based billing](https://docs.stripe.com/billing/subscriptions/usage-based) describes the model as one where customers are charged according to consumption, with usage reported against a defined price. Its [implementation guide](https://docs.stripe.com/billing/subscriptions/usage-based/implementation-guide) walks through defining what is metered, how it is aggregated and how events are attributed to the customer. The relevant point for any business, whatever tool it uses, is the structure: a meter, a customer and a price must be linked in advance. When the price lives only in a PDF contract, that link has to be rebuilt by a person each cycle.

### Revenue accounting follows the contract

Under [IFRS 15](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/), revenue is recognised by reference to the contract and the obligations in it, and the standard has specific provisions for variable consideration. For operations, the practical message is that the contract is the authority. Usage data that cannot be matched to contract terms leaves finance unable to explain how the amount was derived, which complicates both the audit and the customer conversation.

### Customers have rights when charges are unclear

Where the customer is a consumer, South Africa's [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) sets expectations about fair dealing and transparency in pricing. Business-to-business customers are not covered the same way, but they apply the same instinct: a charge that cannot be explained from the contract will be queried. The safe operating standard is the one a careful customer would apply, namely that each line can be traced to a rate and a quantity.

### Warning signs

- A billing run that depends on one person who knows which customers have special terms.
- Contract changes that are applied to invoices weeks after the effective date.
- Usage records with a customer name that does not match the contract's legal entity.
- Credit notes issued because a tier, allowance or minimum was missed.

## Problem owner and why-now trigger

The billing or revenue operations lead owns the invoice run. The commercial or contracts manager owns the terms. The product or operations lead owns the measurement. The financial director owns the exposure and typically holds the budget for fixing it.

The trigger is usually rising billing disputes. A growing customer count multiplies special terms. A new product with a metered component introduces usage billing to a team that has only invoiced fixed fees. A large customer queries a bill and asks for the calculation, and no one can produce it quickly.

## Economic consequence

Under-billing is silent: a customer on the wrong tier simply pays less, and nobody notices. Over-billing is loud: the customer disputes, withholds payment and eventually leaves. Both cost money. The staff time is also real. If three days of every month are spent matching usage to contracts, that is more than a month of one person's year, before counting disputes. Illustratively, a business with R1.5 million of monthly usage revenue that misses a one per cent tier adjustment loses R15,000 a month without any alarm. Late invoices also push cash collection back, a theme covered in the piece on [why you cannot measure time from accepted quote to first invoice](/discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/).

## Root cause

- **Contracts are documents, not data.** Rates, tiers and effective dates are inside PDFs or Word files and not in fields a billing step can read.
- **Customer identity differs between systems.** The usage system, the CRM and the accounting package spell the customer differently, and nothing ties them together.
- **Amendments are not versioned.** A rate change has no effective date in the billing set-up, so old and new terms are mixed.
- **Recurring set-up is manual.** After a deal closes, billing is configured by hand, as explored in [why recurring billing is set up by hand after a deal closes](/discovery/why-recurring-billing-is-set-up-by-hand-after-a-deal-closes/).
- **No pre-invoice check.** Nobody compares expected billing against last month before invoices are sent.

## Practical intervention

1. **Inventory the billing terms.** List every customer billed on usage and record, in one sheet, the meter, unit, rate, tiers, allowance, minimum, start date and end date.
2. **Fix the customer key.** Agree one customer identifier that appears in the usage data, the contract record and the invoice.
3. **Give each term an effective date.** A rate change creates a new line with a start date. It never overwrites the old line.
4. **Calculate from the table.** Build the invoice calculation from the terms table and the usage export, not from the contract document. Start with the ten largest customers.
5. **Add a pre-send check.** Compare each invoice with the previous period and flag movements above an agreed percentage for review before sending.
6. **Show the working.** Attach a usage summary to each invoice listing quantity, rate and any allowance applied. Many disputes disappear when the customer can see the arithmetic.

### Trade-offs

Turning contracts into structured terms takes effort up front and exposes inconsistencies the business had been tolerating, such as customers on undocumented side deals. The temptation is to build everything at once; a staged start with the largest customers captures most of the value. A terms table that is not maintained becomes a second source of truth that is wrong, so someone must own changes to it.

### An illustrative example

Illustrative: a Pretoria fleet-tracking provider with 35 staff billed per vehicle per month with volume tiers. Its finance officer rebuilt each invoice from contract PDFs. Six of the forty-two customers had amended terms that were not reflected in the invoices. The provider built a terms table with effective dates, matched customers on the account number and added a pre-send comparison. The three-day run fell to roughly one, and a recurring dispute with its largest customer ended once the invoice showed the tier calculation.

## Diagnostic questions

- Where exactly is each customer's current rate recorded, and when did it take effect?
- If a customer asked how a line was calculated, how long would it take to answer?
- Which customers have terms that differ from the standard, and who knows?
- How many credit notes last quarter came from a rate, tier or minimum error?

## What good looks like

Every metered customer has a dated terms record. Usage is matched to the customer by a common identifier. The invoice is calculated from the terms, checked against the previous period and sent with the working shown. Disputes are rare and quickly settled, and billing is a routine task rather than a three-day project.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) maps where usage, contracts and invoices are held and how they are joined today. [Systems implementation and integration](/services/systems-implementation-integration/) can then connect the usage source, the terms record and the billing system so the calculation no longer depends on one person.

## Method note

The sources describe how usage-based billing is structured in a widely used billing product, the revenue standard's focus on contracts and South African consumer pricing expectations. They do not measure error rates in any specific business. The figures and the example are illustrative rather than a client case.
