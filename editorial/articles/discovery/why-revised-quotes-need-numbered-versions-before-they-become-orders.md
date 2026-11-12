---
hub: discovery
record_id: DISC-087
slug: why-revised-quotes-need-numbered-versions-before-they-become-orders
title: Quote revisions create duplicate or contradictory order instructions
description: A repriced quote, a second email and a re-keyed order can produce two instructions for one job. How numbered revisions, acceptance against a version and a block on second orders prevent it.
lead: A repriced quote, a second email and a re-keyed order can produce two instructions for one job. How numbered revisions, acceptance against a version and a block on second orders prevent it.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Head of sales operations or operations manager, with finance reviewing invoices against accepted versions
budget_owner: Financial director or managing director
sources:
  - How quotes work | https://docs.stripe.com/quotes
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
  - Idempotent requests - Stripe API Reference | https://docs.stripe.com/api/idempotent_requests
related:
  - Why account managers cannot see where their customers' orders stand | /discovery/why-account-managers-have-to-phone-operations-to-find-out-an-order-s-status/
  - Why cancelled and reduced orders take so long to reach the revenue forecast | /discovery/why-order-cancellations-and-reductions-take-weeks-to-change-the-revenue-forecast/
  - Why usage-based billing data never quite matches the customer contract | /discovery/why-metered-usage-data-is-disconnected-from-the-contract-it-should-be-billed-against/
summary: A repriced quote, a second email and a re-keyed order can produce two instructions for one job. How numbered revisions, acceptance against a version and a block on second orders prevent it.
layout: plain
---
A customer asks for a revised quote after the company introduces a new pricing model. The salesperson edits the original, saves it under a new name and emails it. The customer accepts the second version by replying "go ahead" to the first email thread. The sales administrator, working from the thread, captures an order from version one. A week later the customer's buyer sends a purchase order that matches version two. Now there are two orders for the same job, with different prices, different delivery dates and one line item that appears in only one of them. The warehouse picks both.

This article is about that operating condition: quote revisions that create duplicate or contradictory order instructions. It shows up whenever a pricing change, a scope change or a negotiation causes the same deal to be quoted more than once.

## The problem in plain language

A quote is a proposal that can change many times before it is accepted. An order is an instruction to the business to deliver. The trouble starts when the revision history of the first is not controlled, so the second is created from whichever version someone happens to be holding. Revisions get saved as copies, accepted in emails and re-keyed by hand into the order system. Nothing marks the earlier versions as superseded, and nothing connects the accepted version to the order that follows.

## What the buyer is actually trying to solve

The person searching for this problem wants to know that every order in the system traces to one accepted quote, in one version, and that nobody can accidentally act on a version the customer no longer wants. Sales wants to revise prices quickly, finance wants invoices that match what was agreed, and operations wants to stop acting on contradictory instructions.

## Evidence and system mechanism

### Quoting tools treat revision as a first-class idea

Stripe's documentation on [how quotes work](https://docs.stripe.com/quotes) is a useful example of what controlled quoting looks like in software. A quote starts as a draft and can be edited freely. Once finalised it becomes open, and only the expiry date can be changed. When the customer accepts, it becomes accepted and generates an invoice, subscription or subscription schedule. A cancelled or expired quote can no longer be accepted. Finalising assigns a number made of the customer prefix, the quote sequence and a revision sequence, so that a second revision of the same quote is visibly the second revision. The principle is that a sent version is fixed, a change creates a new numbered version, and only an accepted version produces downstream work.

### Events can fire more than once

Where quotes and orders sit in different systems, the link between them is often a message. Stripe's guidance on [receiving webhook events](https://docs.stripe.com/webhooks) warns that duplicate deliveries can occur and tells developers to track event identifiers so that an event already handled is not handled again. If an acceptance message is processed twice, or a revised quote triggers a second order-creation event, the result is the same duplicate the salesperson created by hand. Systems need a rule that one accepted quote version can create one order.

### Repeating an instruction safely requires a key

Stripe's explanation of [idempotent requests](https://docs.stripe.com/api/idempotent_requests) describes attaching a unique key so that a repeated request returns the original result rather than performing the operation again. Applied to quote-to-order, the key is the quote number and revision. If a second attempt arrives to create an order from the same quote revision, the system recognises it and refuses. If an order arrives from a different revision of the same quote, the system should stop and ask rather than add a second order.

### Warning signs

- Staff ask in chat, "which version did they accept?"
- Quotes are saved as "final", "final v2" and "final FINAL" in shared folders.
- An order is later changed because the customer refers to a different quote from the one used.

## Problem owner and why-now trigger

The problem owner is typically the head of sales operations or the operations manager who inherits the order. The budget owner is the financial director or managing director, because the cost lands in credit notes, re-work and margin leakage. The trigger here is a new pricing model: a price list change, a new bundle, a shift from once-off to recurring pricing or a revised discount structure. Every open quote must be revised, many at once, and the volume of revisions exposes the weakness in version control. The related discipline of making orders carry the agreed commercial terms is covered in [why orders must carry the price and terms of the accepted quote](/discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/).

## Economic consequence

Duplicate or contradictory orders cost money in three places. First, work done twice or wrongly: goods picked, installed or booked against the wrong instruction. Second, credit notes and corrections to bring invoices back into line. Third, margin lost when the lower of two prices is honoured to avoid a dispute. A trading business that sees even two such cases a month at R15,000 each in rework, credits and concessions is looking at R360,000 a year. These figures are illustrative; the right number comes from counting corrected orders. The wider cost of re-keying is described in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

## Root cause

- **No single quote record.** Versions live as files and emails, not as numbered revisions of one record.
- **Acceptance is informal.** A reply on an email thread or a spoken "yes" is not tied to a specific version, a gap also found in [discount approvals that live in chat threads](/discovery/why-discount-approvals-live-in-chat-threads-instead-of-the-quote/).
- **The order is typed, not generated.** Someone re-keys from a document, so the order inherits whatever that person is looking at.
- **Orders do not check for existing orders.** The system accepts a second order against the same customer and job.

## Practical intervention

1. **Give every quote one number and a revision suffix.** The format can be as simple as Q-2041-1, Q-2041-2.
2. **Lock versions on sending.** Once sent, a version is not edited. A change makes a new revision, and the earlier one is marked superseded automatically.
3. **Record acceptance against a version.** Use a signed acceptance, a purchase order reference or a button in a customer portal, any of which names the exact revision.
4. **Generate the order from the accepted revision.** Copy lines, prices and terms directly; do not re-type them. Store the quote number and revision on the order.
5. **Block a second order.** If an order already exists from any revision of the same quote, require a named person to decide whether it is a change, a replacement or an error.
6. **Expire superseded quotes.** When a revision is issued, the earlier one cannot be accepted.
7. **Handle price-model changes in bulk.** List all open quotes affected, reissue each as a new revision, and notify the customer which one replaces which. Link this to [accepted quotes that do not create fulfilment work](/discovery/accepted-quotes-that-do-not-create-fulfilment-work/) so the order is created once.

### Trade-offs

Locking versions slows down small corrections, such as a typing mistake in a delivery address. Allow a controlled amendment that creates a new revision rapidly rather than permitting edits in place. Customers who reply by email need a prompt to confirm the quote number.

### An illustrative example

Illustrative: a Bloemfontein agricultural equipment dealer moved to per-month service pricing and had to reissue 40 open quotes. The operations manager moved quoting into a numbered revision format, marked each earlier version as superseded and made the order screen pull its lines straight from the accepted revision. Over the next quarter the dealer found no duplicate orders, where the previous quarter had shown five.

## Diagnostic questions

- For your last ten orders, can you name the exact quote revision each came from?
- How many quotes in the past month were revised more than once?
- What stops a second order being created for the same job?

## What good looks like

Each quote is one record with numbered revisions. Sent versions are fixed, superseded versions cannot be accepted, and acceptance names the revision. The order is generated from the accepted revision and carries its number. A second order against the same quote prompts a decision from a named person.

## Where Mellorca fits

Mellorca helps South African businesses design the quote-to-order handoff: revision control, a single acceptance record and orders generated from the accepted version rather than re-typed. We work with sales, operations and finance so that a pricing change does not multiply the number of instructions in circulation.

## Method note

The sources describe how one widely used platform handles quote statuses, numbering and acceptance, and how duplicate events and repeat requests are treated. They do not measure how often revisions cause duplicate orders in any particular business. The rand figures and the dealer are illustrative rather than a client case.
