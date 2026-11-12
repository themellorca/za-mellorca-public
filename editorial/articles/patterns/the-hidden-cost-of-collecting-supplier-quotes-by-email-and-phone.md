---
hub: patterns
record_id: PAT-428
slug: the-hidden-cost-of-collecting-supplier-quotes-by-email-and-phone
title: The Hidden Cost of Chasing Supplier Quotes
description: When every quote request is a separate conversation, buyers spend the week chasing and reformatting replies. Here is where the effort goes and how to give quoting a structure.
lead: When every quote request is a separate conversation, buyers spend the week chasing and reformatting replies. Here is where the effort goes and how to give quoting a structure.
category: Procurement & Supplier Management
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Procurement & Supplier Management
pattern_family: Procurement & Supplier Management
observable_condition: Buyers email and phone several suppliers for each non-routine purchase, then chase late replies and rebuild the comparison by hand.
primary_identification: Unstructured sourcing: requests lack a written specification and deadline, replies arrive in different formats, and follow-up and history depend on one person's memory.
commercial_value_dimensions: Buyer time, purchase lead time, price accuracy, supplier performance knowledge and negotiating position
sources:
  - Procurement and sourcing overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-sourcing-overview
  - Purchase requisition overview - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-requisitions-overview
  - Purchase agreements - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-agreements
related:
  - The Hidden Cost of Waiting for Management Information | /patterns/the-hidden-cost-of-waiting-for-management-information/
  - When New Employees Spend Their First Week Chasing Basics | /patterns/why-new-starters-lose-their-first-week-to-logins-templates-and-names/
  - The Hidden Cost of Repetitive Customer Questions | /patterns/the-hidden-cost-of-repetitive-customer-questions/
summary: When every quote request is a separate conversation, buyers spend the week chasing and reformatting replies. Here is where the effort goes and how to give quoting a structure.
layout: plain
---
## Observable condition

A branch needs forty replacement pallets, a new set of tyres for the delivery fleet, or a quarter's worth of packaging. The buyer emails three suppliers, phones a fourth, and puts a reminder in her diary. Two days later one quote has arrived as a PDF, one as a photo of a handwritten page, one as a message in a chat, and one not at all. Each is priced for slightly different quantities, delivery terms and validity. Comparing them means building a table by hand, then phoning back to ask what was left out.

An illustrative example: a Port Elizabeth food manufacturer buys ingredients, packaging and spare parts from some sixty suppliers. Every non-routine purchase starts with the buyer chasing quotes. Some of them take a week. By the time the cheapest is confirmed, its price has expired, and the process starts again for one line.

## Realisation

The realisation is that obtaining a quote is a process with steps, a deadline and a standard of completeness, but the business runs it as a series of conversations. Each conversation has its own format, its own wait, and its own follow-up. The effort goes not into the decision about who to buy from, but into gathering the material that the decision needs.

Procurement software shows what a more structured version looks like. Microsoft's [procurement and sourcing overview](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-sourcing-overview) describes sharing the specifications of the requested product so that potential vendors can see whether they can deliver something that conforms, after which vendors return their bids and the procurement department reviews them before choosing a supplier. The notable point for a smaller business is not the software; it is the sequence. The same specification goes to everyone, and the replies come back in a comparable form.

**Realisation prompt:** take your last three quotes for similar goods. Were they requested with the same specification, received in the same format, and valid for the same period?

## Identification

This is a pattern of unstructured sourcing. The visible symptom is a buyer spending much of the week chasing replies. The common assumption is that suppliers are slow or disorganised. The structural cause is that the request itself is informal, so every supplier answers a slightly different question in a different way, and the buyer must reconcile the differences by hand.

It is close to the Pattern [how purchase requests get lost in an inbox](/patterns/how-purchase-requests-get-lost-in-an-inbox/), which describes the internal request leaving the business. This Pattern follows the next step: the external chase for prices that follows once the request has been approved.

## Diagnosis

- **The specification is not written.** The need is described in an email or a phone call, so suppliers fill the gaps with assumptions about quantity, grade, packing or delivery.
- **Replies arrive in different formats.** PDFs, photos, spreadsheets and chat messages cannot be compared without retyping, and every retyping is a chance for an error.
- **There is no deadline.** Without a stated closing time, each quote arrives when the supplier gets to it, and the buyer cannot say when the decision can be made.
- **Follow-up depends on memory.** The buyer remembers who has not answered. If she is away, the request goes quiet, a pattern described in the Discovery page [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/).
- **History is not kept.** Previous quotes sit in sent items. Next time, the buyer starts again, with no record of who answered, how quickly, or at what price.
- **Repeat purchases are quoted as if new.** Items bought every month go through the same chase, even where a standing price would do.

## Commercial impact

The first cost is buyer time. Writing the request, sending it several times, chasing, reformatting the replies and comparing them often takes longer than the purchase decision itself. That is skilled time spent on administration.

The second cost is delay to the people waiting for the goods. Production lines, workshops and branches that wait a week for a price wait a further period for delivery. The Pattern [why does buying something internally take so long](/patterns/why-does-buying-something-internally-take-so-long/) describes how these delays accumulate across the purchase.

The third cost is poorer price outcomes. A comparison made from quotes with different assumptions favours whichever supplier left the most out. The cheapest quote may exclude delivery, carry a shorter validity, or specify a different grade, and the difference appears later as a surprise on the invoice.

The fourth cost is missing information about suppliers. When responses are not recorded, the business cannot tell which suppliers reply promptly, quote accurately and deliver to the quote. The Impact page [supplier performance not measured](/impact/supplier-performance-not-measured/) shows the consequence: decisions are made on recollection, and the best performers earn no extra business.

The fifth cost is lost leverage. Suppliers who sense that the buyer is only collecting prices informally, without a consistent process, have little reason to sharpen their numbers. A structured request with a deadline and a clear specification signals that the business compares carefully.

## Why the usual response falls short

The usual response is to appoint one person to handle all quotes. That concentrates the effort but does not reduce it, and it creates a single point of failure. When that person is on leave, buying slows down.

A second response is to ask suppliers to respond faster. This rarely lasts, because the delay is rarely caused by suppliers' unwillingness. It is caused by incomplete requests that need clarifying and by a format that makes replying more difficult than it should be.

A third response is to stay with a favourite supplier to avoid the process. That reduces effort but also reduces price discipline, and the business may pay more over time than the saved hours are worth.

## How to approach it

Start with a standard request. For each category of purchase, write the fields every quote must cover: quantity, specification, delivery location and date, payment terms, validity period and any extras. Send the same request to every supplier, with a reply-by time, so that responses can be placed side by side.

Next, decide when a quote is needed at all. The Microsoft documentation on [purchase agreements](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-agreements) describes a contract that commits an organisation to buy a specified quantity or amount through multiple purchase orders over time, in exchange for special prices and discounts. For items bought regularly, a negotiated price for a defined period removes the need to re-quote each time. Reserve the formal quote process for new items, large values and annual reviews.

Then link the quote to the approval that follows. The documentation on [purchase requisitions](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-requisitions-overview) explains that a requisition is an internal document authorising the purchasing department to buy, and that once approved it can be used to generate a purchase order. When the quotes and the approval live in the same record, nothing has to be re-keyed and the decision can be traced later. For the wider issue of processes carried on email, see [the cost of running business processes through email threads](/patterns/the-cost-of-running-business-processes-through-email-threads/).

## Practical next actions

1. Pick the three purchase categories where you request quotes most often and write a one-page request template for each, covering quantity, specification, delivery, payment terms and validity.
2. Send every quote request with a clear reply-by date and time, and record the date each request went out and each reply came in.
3. Create one comparison sheet per request that lists suppliers side by side on price, delivery, validity and exclusions, so differences are visible.
4. Identify items bought at least monthly and approach the main supplier for a fixed price for a defined period instead of quoting each purchase.
5. Keep every quote, with its reply time and outcome, in one shared location rather than in personal inboxes.
6. After three months, review which suppliers replied quickly and accurately, and invite those suppliers first next time.

## What changes when quoting has a structure

With a consistent request, a deadline and a place to record answers, the buyer stops chasing and starts deciding. Quotes can be compared at a glance, standing prices remove repeat effort, and a record of supplier behaviour builds up over time. The people waiting for goods get them sooner, and the business can say with evidence why it chose a particular supplier.
