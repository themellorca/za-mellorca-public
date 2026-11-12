---
hub: discovery
record_id: DISC-077
slug: accepted-quotes-that-do-not-create-fulfilment-work
title: Accepted quotes do not automatically create fulfilment work
description: A customer says yes, but nothing in the business starts until someone notices. How to make acceptance a recorded event that creates orders, jobs and billing without retyping.
lead: A customer says yes, but nothing in the business starts until someone notices. How to make acceptance a recorded event that creates orders, jobs and billing without retyping.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Sales operations lead or operations manager, with sales and fulfilment teams
budget_owner: Chief operating officer, managing director or business owner
sources:
  - Online signatures for order confirmations — Odoo 17.0 documentation | https://www.odoo.com/documentation/17.0/applications/sales/sales/send_quotations/get_signature_to_validate.html
  - Electronic Communications and Transactions Act 25 of 2002 - South African Government | https://www.gov.za/documents/electronic-communications-and-transactions-act
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
related:
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - When sales and finance work from different product and price data | /discovery/sales-and-finance-use-different-product-and-price-data/
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
summary: A customer says yes, but nothing in the business starts until someone notices. How to make acceptance a recorded event that creates orders, jobs and billing without retyping.
layout: plain
---
The customer accepts the quote on Tuesday morning. The salesperson sees the email, replies "great, thank you", and moves on to the next call. The warehouse does not know. Finance does not know. The installation team finds out on Thursday when the customer phones to ask why nobody has been in touch. Somebody then copies the quote into an order form, someone else raises a job card, and a delivery date is promised that the customer was expecting two days earlier.

This article looks at that operating condition: accepted quotes that do not automatically create fulfilment work. It is especially visible when a business changes its pricing model, because new bundles, subscriptions or tiered rates make manual transcription slower and more error-prone.

## The problem in plain language

A quote is a commitment on paper. Acceptance is the moment the business should start delivering. In many businesses, the system that holds the quote is not connected to the systems that schedule stock, staff and invoices. The accepted quote therefore sits as a document until a human notices it and re-creates the same information somewhere else. Each step that depends on someone noticing adds delay, and each re-keying adds an opportunity for the order to differ from what the customer agreed.

## What the buyer is actually trying to solve

Sales directors, operations managers and owners search for ways to shorten the time from "yes" to delivery, stop orders being captured incorrectly, and make sure nothing that has been sold is forgotten. The need is for acceptance to be a recorded event that triggers the next steps, with the same line items, prices and conditions carried through without being typed again.

## Evidence and system mechanism

### Acceptance can be a recorded system event

Quoting tools that are connected to an order process make this concrete. Odoo's documentation on [online signatures for order confirmations](https://www.odoo.com/documentation/17.0/applications/sales/sales/send_quotations/get_signature_to_validate.html) describes a customer confirming an order by signing it directly in the portal, after which the salesperson on the order is notified instantly that it is confirmed. Whatever product a business uses, the point is the same: acceptance is captured as a structured event in the system that holds the quote, not as an email that a person must interpret.

### Electronic acceptance is recognised in South African law

The [Electronic Communications and Transactions Act](https://www.gov.za/documents/electronic-communications-and-transactions-act) provides a framework for electronic transactions and data messages in South Africa. A business that captures acceptance electronically therefore has a record of the offer, the terms and the acceptance. The detail of what makes an agreement enforceable depends on the transaction and should be confirmed with a legal adviser, but a dated, system-held record is stronger than a chain of forwarded emails.

### Consumer-facing quotes carry additional expectations

Where the buyer is a consumer rather than another business, the [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) sets expectations about disclosure, the supply of goods and services as agreed, and delivery. An accepted quote that is not actioned promptly or is captured incorrectly can quickly become a complaint rather than only an internal inefficiency.

### Warning signs

- Staff ask "has that one been accepted yet?" in chat or in the morning meeting.
- Orders are created by copying numbers from a PDF quote, a problem explored in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).
- Customers phone to ask for confirmation of delivery dates that were never set.
- Invoices differ from the accepted quote and need credit notes.
- Nobody can measure the time from acceptance to first invoice, as described in [why you cannot measure time from accepted quote to first invoice](/discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/).

## Problem owner and why-now trigger

The sales operations lead or operations manager owns the handover from quote to work. Sales owns the quote; operations, the warehouse or the service team owns fulfilment; finance owns billing. The budget owner is usually the chief operating officer, managing director or owner, because the fix crosses departments.

The trigger is often a new pricing model. A shift from once-off sales to bundles, subscriptions, usage-based fees or tiered discounts increases the number of line items and conditions on each quote. What a salesperson could once re-key in five minutes now takes thirty, and mistakes become expensive. Other triggers are growth in quote volume, a missed delivery that cost a major customer, or a new system purchase that exposes how disconnected the old process was.

## Economic consequence

The direct cost is delay and rework. If an average of one day is lost between acceptance and the start of fulfilment, every order starts a day late, which postpones delivery and the invoice that follows. The cash flow effect is real: revenue that has been sold but not yet delivered cannot be billed. Errors introduce further costs, including returns, credit notes and discounting to appease customers. Staff time is spent chasing and checking instead of selling or delivering. For a closer look at how re-keying causes risk after a sale, see [orders re-keyed after sale and fulfilment risk](/impact/orders-rekeyed-after-sale-fulfilment-risk-cost/).

## Root cause

- **Quote and order live in different tools.** The quote is built in a document or spreadsheet; the order is created in an operational system.
- **Acceptance is not a status.** There is no field that changes when the customer says yes, so nothing can respond to it.
- **Pricing complexity outgrew the template.** New price structures cannot be represented in the old order form, so they are translated by hand.
- **Ownership gap.** Sales considers the job done at acceptance; operations considers it started at the order. Nobody owns the gap.
- **No time target.** Without a measure of acceptance-to-start, delays remain invisible.

## Practical intervention

1. **Define "accepted".** Decide what counts as acceptance: a signature, a purchase order number, a deposit, or a reply on a specific channel. Record it as a status on the quote.
2. **Map what must happen next.** List the actions that follow acceptance: reserve stock, schedule work, check credit, raise a deposit invoice, notify the customer. Mark which are automatic candidates.
3. **Carry the data across once.** Use the quote's line items, prices and terms as the source for the order, rather than retyping them. If the tools cannot connect, use a structured template with the same fields on both sides.
4. **Create the work item at acceptance.** The order, job card or pick list should appear as soon as the status changes, assigned to a queue with an owner.
5. **Confirm back to the customer.** An automatic acknowledgement with the agreed scope, price and expected start gives the customer certainty and exposes discrepancies early.
6. **Measure acceptance-to-start.** Track the hours between acceptance and the first action, and review exceptions weekly.

### Trade-offs

Automatic creation of fulfilment work can propagate errors faster if quotes are wrong or credit has not been checked. Add the checks that matter before acceptance is final, such as credit approval for large orders, as discussed in [why credit checks happen after sales has promised delivery](/discovery/why-credit-checks-happen-after-sales-has-promised-delivery/). Highly bespoke work may still need a person to review the scope before it is released, but that review should be a defined step with a time limit, not an accident of who noticed.

### An illustrative example

Illustrative: a Durban company supplying and installing water treatment equipment moved from fixed prices to a package-plus-monthly-service model. Salespeople kept quoting in a spreadsheet, and the operations coordinator copied accepted quotes into the job system, usually a day or two later. The company added an "accepted" status, a standard acceptance email and a job template carrying the package and service lines across. Jobs now appear on the scheduling board on the day of acceptance, and the coordinator reviews them instead of capturing them.

## Diagnostic questions

- When a customer accepts a quote, what exactly changes in your systems?
- How many hours pass between acceptance and the first fulfilment action?
- How many data fields are retyped between the quote and the order?
- Who is responsible for the period between "yes" and "started"?
- What did your last three order errors cost to correct?

## What good looks like

Acceptance is a recorded event with a clear definition. It creates the order or job automatically or semi-automatically, using the quote's own line items and terms. The customer receives confirmation, the work appears in the right queue, and finance can see what is due to be billed. Acceptance-to-start time is measured, and exceptions are reviewed. Nobody has to notice an email for the business to begin delivering.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can connect quoting tools to order, stock and scheduling systems so that acceptance triggers the next step. [Business automation](/services/business-automation/) can add the confirmation messages, checks and queue assignment around the handover.

## Method note

The Odoo documentation is used as an example of how acceptance can be captured as a system event; it is not a recommendation of a specific product. Legislation is cited for general context only, and specific legal questions should be put to a qualified adviser. The example is illustrative rather than a client case.
