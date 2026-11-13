---
hub: patterns
record_id: PAT-403
slug: the-hidden-cost-of-re-keying-order-information
title: The hidden cost of re-keying order information
description: When the same order is typed into several systems, the cost shows up as labour, errors and delay, not a line item. How to see it and where to start fixing.
lead: When the same order is typed into several systems, the cost shows up as labour, errors and delay rather than as a line item. Here is how to see it and where to start fixing it.
category: Order-to-Cash, Manual Work & Data Flow
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Order-to-Cash, Manual Work & Data Flow
pattern_family: Order-to-Cash, Manual Work & Data Flow
observable_condition: The same order details are typed by hand into an order system, then a warehouse tool and the accounting package, and a regular list of corrections and queries follows from mismatches.
primary_identification: Manual transcription between disconnected steps: order data lives in unconnected places and a person carries it across, creating labour cost, errors and delay that scale with volume.
commercial_value_dimensions: Labour capacity, order accuracy, cash flow, customer satisfaction and scalability
sources:
  - Poka Yoke - A Resource Guide - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/poka-yoke/
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
related:
  - The hidden cost of re-entering the same information | /patterns/the-hidden-cost-of-reentering-the-same-information/
  - Why the same problems return after you replace the system | /patterns/why-the-same-problems-return-after-you-replace-the-system/
  - The hidden cost of asking customers for the same information twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
summary: When the same order is typed into several systems, the cost shows up as labour, errors and delay rather than as a line item. Here is how to see it and where to start fixing it.
layout: plain
---
## Observable condition

An order arrives as an email with a PDF attached. Someone opens it, reads the customer name, product codes, quantities, delivery address and special instructions, and types them into the order system. The warehouse then prints a pick list. Finance later types the same details again into the accounting package to raise the invoice. When the customer rings to change a quantity, the change is made in one place, and sometimes in the others.

The same information passes through three or four pairs of hands, and each retyping is a small act of translation. A "12" becomes "21". A delivery address loses its unit number. A product code is picked from a drop-down list and the wrong near-identical item is chosen. Most of these slips are caught. Some are not, and they surface later as a wrong delivery, a disputed invoice or a credit note.

An illustrative example: a Port Elizabeth building-supplies company with about eighty staff receives around two hundred orders a week by email, WhatsApp and phone. Two order clerks capture each one into the order system, and the accounts team re-enters the delivered quantities into the accounting software at month end. Every Monday starts with a list of orders to correct, and one in every thirty or so deliveries involves a query about what was ordered.

## Realisation

Re-keying looks like a clerical task, but it is really a copying process with an error rate. Every time data is typed again, there is a chance it differs from the original, and a cost to find and fix it when it does. The labour of typing is the visible cost. The less visible costs are the checking that grows around it, the corrections that follow it, and the delay that builds up because each retyping waits for someone to get round to it.

Lean thinking offers a useful lens. The Lean Enterprise Institute describes [poka-yoke](https://www.lean.org/lexicon-terms/poka-yoke/) as mistake-proofing: designing the process so that errors are prevented or caught at the source instead of being inspected for later. Re-keying is the reverse. It builds the opportunity for error into the process and then relies on vigilance to catch it. The Site Reliability Engineering literature [describes toil](https://sre.google/sre-book/eliminating-toil/) as manual, repetitive work that scales linearly with volume and has no enduring value. Order re-keying fits that description exactly: double the orders, double the typing.

**Realisation prompt:** how many times is a single order's information typed by a person between the customer's request and the invoice being paid?

## Identification

This is a pattern of manual transcription between disconnected steps. The visible symptom is order information being typed in more than once. The common assumption is that it is just how orders are processed, or that staff need to be more careful. The structural cause is that the places where order information lives, the inbox, the order system and the accounting package, are not connected, so a person has to carry the data across.

The published Pattern [why an order needs so many manual touches](/patterns/why-does-an-order-need-so-many-manual-touches/) looks at the number of hands involved. This Pattern focuses on one type of touch, retyping, and on the commercial cost of the errors and delays it causes. The Discovery page on [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/) shows the same problem one step earlier in the sales process.

## Diagnosis

- **Orders arrive in unstructured form.** Email bodies, PDFs, photos of handwritten lists and voice notes each need interpretation before they can be captured.
- **Systems are not connected.** The order system, warehouse tools and accounting software each hold their own copy, with no automatic transfer between them.
- **Spreadsheets as bridges.** Someone exports from one system, reformats in a spreadsheet and imports into another, adding a further chance of error.
- **Reference data is not clean.** Duplicate customers, inconsistent product names and out-of-date price lists force manual judgement during capture.
- **No capture-time checks.** The system accepts impossible quantities, invalid addresses or products that are no longer sold, because nobody set validation rules.
- **Changes are not propagated.** An amendment made in one place does not update the others, so versions drift apart.

## Commercial impact

The commercial value at stake is labour capacity, order accuracy, cash flow, customer satisfaction and scalability.

Take the building-supplies example. Two clerks capturing two hundred orders a week, at perhaps six minutes each, spend about twenty hours a week typing. Add the accounts team's retyping and the Monday corrections, and a full-time salary in rand is spent on moving data from one screen to another. That cost recurs every week and grows with volume. The Impact page on [orders re-keyed after the sale](/impact/orders-rekeyed-after-sale-fulfilment-risk-cost/) describes how that cost combines with fulfilment risk, and [duplicated data entry](/impact/pain-employees-duplicated-data-entry/) covers the wider effect on staff time.

The cost of errors is larger than the cost of typing. A wrong item delivered means a second trip, a return, a credit note and an unhappy customer. An invoice that does not match the order is queried and paid late. Both delay cash. The delay also limits growth: a business whose order capture depends on typing speed must hire in proportion to orders.

## Common misidentification

The usual response is to treat errors as a staff accuracy issue: add a second person to check each order. Checking catches some mistakes but doubles the touches, and it makes the process slower without removing the cause.

The other is to assume the answer is a new, large system. In many cases the existing systems have import functions, integrations or application programming interfaces that are simply not in use. The Insight [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/) explains the usual routes by which the same information is entered more than once, and shows that connecting what already exists often solves most of the problem.

## Possibility

In a better state, order information is captured once, as close to the customer as possible, and flows from there. A web form or customer portal produces a structured order that goes straight into the order system. Orders that still arrive by email are read by a capture tool or a trained person once, with the system validating quantities, products and addresses at entry. The warehouse and accounting systems receive the order automatically, and a change in one place updates the others. Staff move from typing to exception handling: looking at the orders the system could not process cleanly.

Mistake-proofing at entry matters as much as connection. A drop-down that only offers current products, a check that the delivery address is complete, and a warning when a quantity is ten times the customer's normal order catch errors when they are cheapest to fix.

For the supplies company, a structured order form for regular customers, an automated feed from the order system into the accounting package and a validation rule on quantities would remove most of the retyping and the Monday correction list.

## Intervention

1. **Trace one order.** Follow a typical order from first request to payment and mark every point where someone types the information again. This is the same idea as [value-stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/), which charts every step in the flow from order to delivery.
2. **Count and cost it.** Estimate the minutes per order at each point, multiply by weekly volume and add the cost of corrections and credit notes.
3. **Find the cheapest connections.** Check whether your order and accounting systems already support imports, integrations or scheduled transfers.
4. **Standardise the input.** Offer repeat customers a form, portal or template, so that orders arrive in a structured format.
5. **Add validation at entry.** Limit product choices, check addresses and flag unusual quantities.
6. **Clean the reference data.** Merge duplicate customers and tidy product lists so automatic matching works.
7. **Measure again.** After each change, track the correction list, credit notes and time per order, and move on to the next retyping point.

## Diagnostic questions

- How many times is order information typed between the customer's request and the invoice?
- What proportion of orders need correcting after capture?
- Do your order, warehouse and accounting systems exchange data automatically, or does a person move it?
- Which customers could be given a structured way to order tomorrow?
- If order volume doubled, how many more people would you need to type?

## Bottom line

Re-keying order information is a quiet tax on every sale. It costs labour on the way in, errors on the way out and delay in between. The fix rarely begins with a new platform. It begins with tracing where the data is typed again, capturing it once, validating it at entry and connecting the systems you already own. The saving is not only in hours. It is in fewer wrong deliveries, faster invoices and a business that can handle more orders without hiring more typists.
