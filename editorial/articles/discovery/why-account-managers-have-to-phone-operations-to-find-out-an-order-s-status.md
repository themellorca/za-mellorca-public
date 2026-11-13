---
hub: discovery
record_id: DISC-097
slug: why-account-managers-have-to-phone-operations-to-find-out-an-order-s-status
title: Why account managers cannot see where their customers' orders stand
description: Account managers who cannot see order status spend their day asking colleagues and calming customers. What a shared status view looks like and who owns it.
lead: Account managers who cannot see order status spend their day asking colleagues and calming customers. What a simple shared status view looks like and who has to own it.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Head of sales or key accounts, with operations owning the status data
budget_owner: Commercial director or managing director
sources:
  - Sales order - Wikipedia | https://en.wikipedia.org/wiki/Sales_order
  - Sales operations - Wikipedia | https://en.wikipedia.org/wiki/Sales_operations
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
related:
  - Why cancelled and reduced orders take so long to reach the revenue forecast | /discovery/why-order-cancellations-and-reductions-take-weeks-to-change-the-revenue-forecast/
  - Orders are created with values that differ from the accepted quote | /discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/
  - Quote revisions create duplicate or contradictory order instructions | /discovery/why-revised-quotes-need-numbered-versions-before-they-become-orders/
summary: Account managers who cannot see order status spend their day asking colleagues and calming customers. What a simple shared status view looks like and who has to own it.
layout: plain
---
A customer phones her account manager at ten in the morning: the delivery promised for Tuesday has not arrived and her own client is waiting. The account manager does not know. He messages the warehouse, who say the order is with dispatch. Dispatch say it is waiting on a credit release. Finance, when asked, say the release was approved yesterday but the system was not updated. Forty minutes later he phones the customer back with half an answer, and the customer notes that she learned nothing she could not have learned herself.

This article looks at that operating condition: order status that is not visible to the account managers who own the customer relationship. It is common in businesses where the CRM stops at the sale and the order lives in an ERP, a spreadsheet or a warehouse system that sales cannot open.

## The problem in plain language

After a quote is accepted, the order becomes operations' problem. It passes through credit approval, stock allocation, production or picking, dispatch and invoicing. Each stage has its own system or its own person. The account manager, who is accountable to the customer, is outside all of them. The only way to know where an order stands is to ask someone, so the account manager becomes a relay between the customer and a set of colleagues who are busy doing the work.

## What you are actually trying to solve

The person facing this wants account managers to answer customer questions without leaving their seat. They also want to stop the cycle of internal chasing, which interrupts people on the operations side and delays the work it is meant to speed up. A good answer is not a full integration of every system. It is a small number of agreed status points, visible in the tool the account manager already uses, updated when the work moves.

## Evidence and system mechanism

### The order is a record that moves through functions

A [sales order](https://en.wikipedia.org/wiki/Sales_order) is the document that confirms the sale and drives the fulfilment steps that follow. Its life cycle crosses several functions, and each one changes something about it. The basic design question is therefore whether the order keeps one status that all functions update, or whether each function keeps its own. Where each keeps its own, nobody holds the whole picture, and the customer-facing person is the one who needs it most.

### Sales support work includes visibility, not only selling

The role of [sales operations](https://en.wikipedia.org/wiki/Sales_operations) is described as supporting the sales function through processes, tools and data so that sales staff can concentrate on customers. Giving account managers a reliable view of order progress is a standard part of that support. When it is missing, selling time is converted into tracking time.

### Customers have a right to clear answers

For consumer customers, the [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) sets out rights around delivery and information. Business customers do not rely on the same statute, but their expectations are shaped by it, and by the service they receive from larger suppliers. A supplier who cannot say where an order is looks disorganised, whatever the reason.

### Warning signs

- Account managers keep their own list of open orders in a notebook or a spreadsheet.
- Operations staff receive the same status question from several people on the same day.
- Customers phone operations directly because they have learned it is faster.
- The first the account manager hears of a delay is the customer's complaint, a pattern also described in [when customers know their order is late before your team does](/patterns/when-customers-know-their-order-is-late-before-your-team-does/).

## Problem owner and why-now trigger

The head of sales or key accounts owns the customer experience. The operations or supply chain manager owns the status data. The person who can make the two meet is often the IT or systems lead, or a sales operations specialist. The budget usually sits with the managing director or commercial director.

The trigger is commonly a change that increases the number of orders in flight: a new pricing model that draws more small orders, a larger customer who asks for status reports, or a stretch of delivery problems that makes status questions more frequent. Load-shedding that interrupts warehouse and dispatch also raises the number of delays that need to be explained.

## Economic consequence

The cost is spread thinly and therefore missed. If each of six account managers spends forty-five minutes a day chasing status, that is more than four and a half hours daily, or roughly a full working week of selling capacity every month. Operations absorbs a matching amount of interruption. Repeat customers who cannot get a clear answer buy less, or place their next order with a competitor who can. Illustratively, a business that loses even one mid-sized account a year to service frustration has paid for the fix. There are also cases where the account manager promises something that cannot be delivered because the real status was unknown.

## Root cause

- **The CRM ends where the order begins.** The sale is recorded, but fulfilment sits in another system, as in [salespeople who cannot see whether an order has been fulfilled](/discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/).
- **No shared status vocabulary.** Each function uses its own words, so even shared data is hard to read.
- **Status is updated for the work, not for the viewer.** A warehouse worker ticks a box that serves picking; nobody designs it to be read by sales.
- **Access is blocked by habit.** The ERP licence list does not include sales, or the interface is too difficult for non-specialists.
- **No exception alert.** Delays are visible only to people who go looking.

## Practical intervention

1. **Agree five or six status points.** For example: confirmed, credit cleared, in preparation, dispatched, delivered, invoiced. Define each in one sentence and name who sets it.
2. **Choose where account managers will look.** Use the CRM, a shared view or a simple dashboard. It should be one place, not a menu of options.
3. **Feed the status automatically where possible.** Where the source system can export or send events, use that. Where it cannot, a daily import from a spreadsheet is better than nothing.
4. **Add a delay flag.** Operations marks an order as delayed, with a revised date and a short reason. The account manager is notified and contacts the customer first.
5. **Give the customer a self-service answer.** Offer a tracking link or a standard status email for the most common questions.
6. **Measure the chasing.** Count status queries to operations for a fortnight before and after. The fall is the benefit.

### Trade-offs

Once status is visible, delays are visible too, and operations may feel exposed. The framing should be shared information, not surveillance. A status view that is wrong is worse than none, so the first phase should cover only fields that are reliably updated. Giving sales access to operational data raises permission questions, and customer pricing or margin should not leak through a status screen.

### An illustrative example

Illustrative: a Johannesburg industrial supplier with eight account managers and a warehouse on a separate system. Account managers phoned the warehouse supervisor about a dozen times a day. The company agreed on six status points, added a morning export from the warehouse system to a shared sheet that the CRM read, and made the warehouse mark delays with a new date. The supervisor's calls fell sharply and the account managers began warning customers before they asked.

## Diagnostic questions

- Can an account manager see the status of any of their customers' orders without asking anyone?
- How many status queries does operations receive in a typical day, and from whom?
- Who tells the account manager when an order is delayed?
- Which stage of an order is hardest to see from outside operations?

## What good looks like

Every open order has a status in a common vocabulary, visible to the account manager in their normal tool. Delays arrive as alerts with a new date and a reason. Customers are told before they ask, operations is interrupted less, and account managers use their time on customers rather than on chasing.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) identifies where order status is created and who can see it today. [Business automation](/services/business-automation/) can then push the agreed status points into the tool account managers use, with alerts for exceptions.

## Method note

The sources describe the sales order, the role of sales operations and consumer protection expectations. They do not measure how much time any business spends chasing status. The time estimates and the example are illustrative rather than a client case.
