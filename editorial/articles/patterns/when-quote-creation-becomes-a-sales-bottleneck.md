---
hub: patterns
record_id: PAT-112
slug: when-quote-creation-becomes-a-sales-bottleneck
title: When Quote Creation Becomes a Sales Bottleneck
description: When every quote is built by hand from old documents, price lists and phone calls, sales can only move as fast as the person who writes them. Here is how to tell and what to change.
lead: When every quote is built by hand from old documents, price lists and phone calls, sales can only move as fast as the person who writes them. Here is how to tell and what to change.
category: Sales, CRM & Revenue Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Sales, CRM & Revenue Operations
pattern_family: Sales, CRM & Revenue Operations
observable_condition: Representatives build each quote by copying an earlier one, checking prices in a spreadsheet, phoning the warehouse for stock and emailing for discount approval, so quotes take days to send.
primary_identification: Manual document assembly at a commercial choke point: the facts needed for a quote are not held in one source the quote can draw from.
commercial_value_dimensions: Win rate, sales capacity, pricing accuracy, margin protection and order accuracy
sources:
  - https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales | https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales
  - https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers
  - https://learn.microsoft.com/en-us/power-automate/modern-approvals | https://learn.microsoft.com/en-us/power-automate/modern-approvals
summary: When every quote is built by hand from old documents, price lists and phone calls, sales can only move as fast as the person who writes them. Here is how to tell and what to change.
layout: plain
---
## Observable condition

A sales representative at a Midrand supplier of industrial fasteners and fittings finishes a site visit with a promising enquiry. The buyer wants a price on forty line items by Thursday. Back at the office, the rep opens last month's quote for a similar customer, saves a copy, and starts editing.

Prices must be checked against the current list, which lives in a spreadsheet that procurement updates when supplier costs change. Two items need a stock check, so the rep phones the warehouse. One needs a special discount, so the rep emails the sales manager. Delivery terms are copied from the old quote and may no longer be right.

The quote goes out on Friday afternoon. The buyer has already received two others.

## Realisation

The realisation is that quoting has become the narrowest point in the sales process. The business can generate enquiries and can deliver orders, but the step between them depends on a few people assembling documents by hand from several sources.

When demand rises, that step does not stretch. Quotes queue up, response times lengthen and the representatives who should be selling spend their afternoons formatting.

**Realisation prompt:** how long, on average, does it take from receiving a quote request to sending the quote? How much of that time is waiting rather than working?

## Identification

This is a pattern of manual document assembly at a commercial choke point. The visible symptom is slow quotes and representatives working late on paperwork. The common assumption is that the sales team needs more people or better time management. The structural cause is that the facts needed for a quote, products, prices, discounts, stock and terms, are not held in one place that a quote can draw from.

It relates to [the hidden revenue cost of slow follow-up](/patterns/the-hidden-revenue-cost-of-slow-follow-up/), which covers delay after first contact. This pattern focuses specifically on the work of producing the quote document itself.

## Diagnosis

- **Quotes start from old quotes.** Copying a previous document carries forward outdated prices, terms and errors.
- **Prices live in a spreadsheet.** Each quote requires a manual lookup, and the rep may be using an old copy.
- **Discount approval is informal.** Special pricing is approved by email or phone, which adds waiting time and leaves no record. An approval flow, such as those described in [Microsoft's guidance on approval workflows](https://learn.microsoft.com/en-us/power-automate/modern-approvals), can route sales quotations for sign-off and record the decision.
- **Stock is checked by phone.** Representatives cannot see availability, so they call the warehouse or promise without checking.
- **Quote and order are separate documents.** When the customer accepts, the order is retyped from the quote, introducing new errors.
- **No one tracks quote status.** Sent quotes are not followed up systematically, so some go cold without anyone noticing.

## Commercial impact

The commercial value at stake is win rate, sales capacity, pricing accuracy and margin.

Speed affects win rate. Business buyers often accept the first credible quote, especially for routine purchases. A competitor who quotes the same day wins work that a slower supplier never knew it lost. The Impact note on [slow sales lead response](/impact/slow-sales-lead-response-revenue-cost/) sets out how response time affects revenue.

Capacity is the second cost. If a representative spends two hours on each complex quote and produces ten a week, that is half their week on document assembly rather than customer contact.

Accuracy affects margin. Old prices copied from earlier quotes mean the business sometimes sells below current cost. Discounts given without approval erode margin quietly.

Finally, there is the cost of errors after acceptance. When the order is retyped from the quote, mistakes in quantities or prices lead to disputes, credit notes and delayed payment. Checking availability by hand, as described in [checking stock and capacity by hand before promising](/impact/checking-stock-capacity-by-hand-before-promising-cost/), adds further delay.

## Common misidentification

The usual response is to hire another representative or a sales administrator to produce quotes. That adds capacity but keeps the manual process, so each new hire inherits the same inefficiency.

Another is to blame individual reps for being slow. The fastest rep is often the one with the most personal shortcuts, which are not shared.

A third is to buy a quoting tool without first sorting out the price list and discount rules. A tool built on a messy price list produces wrong quotes more quickly.

## Possibility

The possibility is a business where a representative builds a quote by selecting products from a current catalogue, with prices drawn from one maintained list, discounts applied by rule and exceptions routed for approval automatically. Stock is visible as the quote is built. When the customer accepts, the quote converts to an order without retyping.

[Microsoft's documentation on quotes in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales) describes quotes drawing on a product catalogue, price lists, discounts and taxes, then moving from draft to active to order. [Business Central's sales quotes](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers) show the same conversion from accepted quote to order for smaller businesses. The principle applies regardless of tool: quotes should draw from data, not from old documents.

## Intervention

Start by timing the process. For twenty quotes, record when the request arrived, when work started, when it was waiting on someone and when it was sent.

Next, fix the price list. Agree one source of current prices with one owner, and retire copies. Define standard discount bands that reps can apply without approval, and a simple approval route above them.

Then build a standard quote template that pulls from the price list rather than from old quotes. Even a well-structured spreadsheet template is an improvement on copying documents.

Finally, make quote status visible: sent, followed up, accepted or lost. Review open quotes weekly. See also [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/).

## Practical next actions

1. Time twenty recent quotes from request to send, separating working time from waiting time.
2. Appoint one owner for the price list and retire every other copy in circulation.
3. Define discount bands reps may use freely and an approval route for anything beyond them.
4. Replace copy-from-last-quote with a template that draws prices from the current list.
5. Make accepted quotes convert to orders without retyping, even if that starts as a structured spreadsheet import.
6. Track every open quote with a follow-up date and review the list in the weekly sales meeting.

## Diagnostic questions

- How many hours a week do our representatives spend building quotes?
- When did we last discover a quote went out at an outdated price?
- How long does a discount approval take, and where is it recorded?
- How many quotes last quarter were lost without anyone following up?

## Bottom line

When quotes are assembled by hand from old documents and scattered price lists, quoting becomes the bottleneck that limits sales. Fix the price list, set clear discount rules, build quotes from data rather than from previous quotes and track every quote to an outcome. Representatives get time back for selling, and customers get prices before the competition does.
