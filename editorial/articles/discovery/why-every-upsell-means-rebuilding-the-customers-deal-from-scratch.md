---
hub: discovery
record_id: DISC-093
slug: why-every-upsell-means-rebuilding-the-customers-deal-from-scratch
title: Why every upsell means rebuilding the customer's deal from scratch
description: When adding a product to an existing customer means recreating their whole commercial record, upsells are slow and billing goes wrong. How to amend the live agreement instead.
lead: When adding a product to an existing customer means recreating their whole commercial record, upsells are slow and billing goes wrong. How to amend the live agreement instead.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Sales operations manager
budget_owner: Commercial director
sources:
  - Upsell subscriptions — Odoo 17.0 documentation | https://www.odoo.com/documentation/17.0/applications/sales/subscriptions/upselling.html
  - Change the price of existing subscriptions | https://docs.stripe.com/billing/subscriptions/upgrade-downgrade
  - Prorations | https://docs.stripe.com/billing/subscriptions/prorations
  - Create or edit quotes in Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales
related:
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - Why finance cannot trace an invoice back to the deal that approved it | /discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/
  - When every sales team builds its own version of the same product bundle | /discovery/when-every-sales-team-builds-its-own-product-bundle/
summary: When adding a product to an existing customer means recreating their whole commercial record, upsells are slow and billing goes wrong. How to amend the live agreement instead.
layout: plain
---
An existing customer wants ten more user licences and an extra support module. It should be the easiest sale of the month. Instead the account manager creates a new quote from a blank form, looks up the customer's current products in an old PDF, retypes the contract dates and negotiated prices, and emails finance. Finance sets up a second billing record next to the first, works out a part-month charge on a calculator, and hopes the renewal dates line up. Three months later the customer receives two invoices with different dates and asks which one is real.

This article looks at that operating condition: upsells and add-ons that require the existing commercial data to be recreated by hand. It affects businesses that sell subscriptions, service contracts, rentals, licences or maintenance plans, where growth comes partly from selling more to the same customers.

## The problem in plain language

An upsell is a change to something that already exists: an agreement with products, quantities, prices, dates and terms. The efficient way to handle it is to open that agreement, add or change what is needed, and let the system work out the price difference and the effect on billing. In many businesses there is no live agreement to open. The original deal exists as a closed opportunity, a PDF and a billing record in another system. So every upsell starts from zero, and every recreation is a chance to get something wrong.

## What the buyer is actually trying to solve

Sales operations managers search for ways to quote an add-on for an existing customer, handle mid-term upgrades, or calculate prorated charges. Account managers want to produce an upsell quote in minutes. Finance wants one agreement per customer that reflects what they actually buy. The underlying need is to treat the customer's current agreement as a record that can be amended, rather than a document that has to be copied.

## Evidence and system mechanism

### Amendments are a standard feature

Subscription and billing tools are designed to change existing agreements in place. Odoo's documentation on [upselling subscriptions](https://www.odoo.com/documentation/17.0/applications/sales/subscriptions/upselling.html) describes an upsell quotation that is linked to the original subscription, with the existing subscription product already filled in. Prices on the upsell are prorated to the remaining time in the current invoicing period, and once confirmed the new products become part of the original subscription, with a sales history showing every related order.

Stripe's guide to [changing the price of existing subscriptions](https://docs.stripe.com/billing/subscriptions/upgrade-downgrade) makes the same point from the billing side: an upgrade is made by changing the item on the existing subscription. It also warns that if you do not specify which existing item to replace, the new price is added alongside the old one, so both are billed. That is the system equivalent of the duplicate invoice in the opening example.

### Proration is where manual work goes wrong

Stripe's page on [prorations](https://docs.stripe.com/billing/subscriptions/prorations) explains that changing a subscription mid-period creates a credit for unused time on the old price and a charge for the remaining time on the new one. It gives a worked example: moving from a 10 USD to a 20 USD monthly plan halfway through the month results in an additional 5 USD. The page also notes that customers may pay different amounts than you expect, which is why it supports previewing a proration before the change. When this calculation is done by hand on every upsell, inconsistency is close to guaranteed.

### Quotes can start from existing data

Even outside subscription tools, CRM quotes can be prefilled. Microsoft's guidance on [creating quotes in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales) describes a quote form prefilled from the opportunity, including its products. The capability exists; what is often missing is a live record of what the customer currently has.

### What recreation typically gets wrong

| Recreated by hand | Typical error |
| --- | --- |
| Negotiated prices | Upsell quoted at list price, or the old discount applied to new items without approval |
| Contract dates | Add-on given its own renewal date, so the customer renews twice a year |
| Part-period charge | Proration missed, or calculated differently each time |
| Billing record | Second subscription created instead of amending the first |
| Customer details | Billing contact or VAT number copied from an outdated document |

## Problem owner and why-now trigger

The sales operations manager owns the process, because the friction sits in quoting. The billing or finance manager owns the downstream consequences. The commercial director usually owns the budget, because expansion revenue is their target.

The common trigger is an ERP or CRM change. A migration often brings over customers and invoices, but not the structure of live agreements, so after go-live every upsell becomes a recreation. A push for expansion revenue is the other trigger: a process that was tolerable at a few upsells a month breaks when account managers are targeted on them.

## Economic consequence

The first cost is speed. If an upsell takes days of admin, some customers buy elsewhere or lose interest. The second is billing accuracy: duplicate subscriptions, missed prorations and misaligned renewal dates create disputes, credit notes and churn risk. The third is reporting. If one customer has three billing records, recurring revenue, customer counts and renewal forecasts are all distorted. The labour cost of copying the same data between systems is explored in [the cost of duplicated customer data entry](/impact/pain-duplication-of-customer-data-entry/).

## Root cause

- **No live agreement record.** The deal is stored as a closed opportunity and a document, not as an agreement with current lines and dates.
- **CRM and billing disconnected.** Sales cannot see what the customer is currently billed for; see [when your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/).
- **Migration without structure.** A system change carried balances and contacts, not agreements.
- **No amendment process.** The business has a process for new deals and none for changes, so changes are handled like new deals.

The new-deal version of this problem, retyping an accepted quote into an order, is covered in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

## Practical intervention

1. **Decide where the live agreement lives.** Choose the system that holds each customer's current products, prices, dates and terms, and document the decision.
2. **Rebuild the current book.** Load existing customers' active agreements as structured records, starting with the largest accounts.
3. **Create upsells from the agreement.** Configure quoting so an upsell starts from the customer's current agreement, not a blank form.
4. **Let the system prorate.** Use built-in proration with a defined rule, and preview the result before confirming.
5. **Align co-terming.** Decide whether add-ons follow the main renewal date, and make that the default.
6. **Reconcile agreements to billing.** Check monthly for customers with more than one active billing record for the same service.

### Trade-offs

Rebuilding live agreements takes effort and needs someone who understands the contracts. Some legacy deals will not fit a standard structure. Proration rules need agreement between sales and finance, and some customers will prefer simpler fixed charges. Start with the agreements most likely to change.

### An illustrative example

Illustrative: a Cape Town business software reseller with about 40 staff moved to a new accounting system and found that every upsell after go-live became a new billing record. Within a year, many customers had several. The business loaded active agreements into its subscription module, configured upsell quotes to start from the existing subscription, and merged duplicate records at each customer's next renewal.

## Diagnostic questions

- Can an account manager see exactly what a customer is billed for today, without asking finance?
- Does an upsell quote start from the current agreement or a blank form?
- How are part-period charges calculated, and would two people get the same answer?
- How many customers have more than one active billing record for the same service?
- Did the last system change carry live agreements, or only balances?

## What good looks like

Each customer has one live agreement. An upsell is an amendment to it, quoted in minutes from current data, with the price difference calculated by the system and visible before confirmation. Billing, renewal dates and recurring revenue reports change automatically when the amendment is accepted.

## Where Mellorca fits

Mellorca helps businesses decide where live customer agreements should be held through [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, then connects quoting and billing systems through [systems implementation and integration](/services/systems-implementation-integration/). Agreement-to-billing checks can be automated through [business automation](/services/business-automation/).

## Method note

Product references illustrate common mechanisms and are not recommendations. Currency examples are taken from vendor documentation. The example is illustrative and does not describe a specific client.
