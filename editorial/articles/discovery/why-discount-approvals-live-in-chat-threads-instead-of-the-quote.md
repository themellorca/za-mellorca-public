---
hub: discovery
record_id: DISC-079
slug: why-discount-approvals-live-in-chat-threads-instead-of-the-quote
title: Discount approvals happen outside the quoting system
description: When a manager approves a discount by message and the quote shows only the final price, finance cannot tell what was agreed or why. How to bring approvals into the quote record.
lead: When a manager approves a discount by message and the quote shows only the final price, finance cannot tell what was agreed or why. How to bring approvals into the quote record.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Sales director or revenue operations lead, with the finance manager owning margin and billing accuracy
budget_owner: Financial director or managing director
sources:
  - What Is CPQ, or Configure, Price, Quote? | https://www.salesforce.com/sales/cpq/what-is-cpq/
  - How quotes work | https://docs.stripe.com/quotes
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Coupons and promotion codes | https://docs.stripe.com/billing/subscriptions/coupons
related:
  - Why credit checks happen after sales has already promised delivery | /discovery/why-credit-checks-happen-after-sales-has-promised-delivery/
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - Why salespeople cannot see whether an order has actually been fulfilled | /discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/
summary: When a manager approves a discount by message and the quote shows only the final price, finance cannot tell what was agreed or why. How to bring approvals into the quote record.
layout: plain
---
A salesperson needs a 12 percent discount to close a deal before month end. She sends a message to the sales manager, who replies with a thumbs-up emoji. The quote is amended to the lower price and sent to the customer, who accepts. Six weeks later the customer disputes the invoice because the delivery fee was never mentioned, and finance opens the quote to see what was agreed. The quote shows a total. It does not show the discount, the reason, or who approved it. The only evidence is a thumbs-up in a chat thread that nobody can find.

This article looks at that operating condition: discount approvals happening outside the quoting system. It affects any business that sells on negotiated prices and uses a mix of a quoting tool, email and messaging apps.

## The problem in plain language

Most businesses have a rule about who may approve what level of discount. The rule exists in a policy document or in people's heads. The approval itself, however, happens wherever the conversation happened: a WhatsApp message, a hallway comment, an email, a phone call. The quote is then edited to the new price, and the quoting system records only the final figure. The link between the price, the person who approved it and the reason is lost, or sits in a place that finance and the customer-facing team cannot reach.

## What the buyer is actually trying to solve

The person searching for this problem is usually a finance manager, sales director or revenue operations lead who has been caught out by a dispute or a margin shortfall. They want three things: to see which discounts were approved and by whom, to stop unapproved discounts reaching customers, and to do both without slowing the sales team to a crawl. Salespeople, who need quick answers to win deals, will use the fastest channel available. A control that is slower than a chat message will be bypassed.

## Evidence and system mechanism

### Quoting tools are designed to hold the approval

Salesforce describes [configure, price, quote software](https://www.salesforce.com/sales/cpq/what-is-cpq/) as helping sales teams apply pricing and discount rules and route approvals when needed, so that quotes are generated from approved terms. The description is a vendor's own, so it shows what such tools are meant to do, not how well any business uses them. The point is that the capability for in-system approval is standard. The failure is more often one of process and adoption than of missing software.

### A quote has a lifecycle that can be controlled

Stripe's documentation on [how quotes work](https://docs.stripe.com/quotes) shows a simple pattern: a quote starts as a draft that can be edited, is finalised to an open state, and then is accepted or cancelled. Once open, most of it can no longer be changed, and revised quotes carry a revision number. That structure illustrates a useful principle. If the discount has to be settled before the quote is finalised, the approval belongs in the draft stage, and any later change creates a visible revision rather than a silent edit.

### Approvals can be automated with a record

Microsoft's guidance on [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes requests that go to named approvers, who respond within the tool, with the response recorded. A business that does not have a full quoting platform can still build the same behaviour with a form, an approver and a stored response linked to the quote number.

### Discounts have a mechanism of their own

Stripe's page on [coupons and promotion codes](https://docs.stripe.com/billing/subscriptions/coupons) shows discounts being created as defined objects applied to subscriptions or invoices, with set terms, rather than as ad hoc edits to a total. Treating a discount as a structured item with a type, amount and duration, instead of a changed price, is what makes it reportable later.

### Warning signs

- Quotes show final prices with no discount line or reason.
- Finance learns of discounts only when margin reports look wrong.
- The approval trail depends on someone's phone or inbox.
- Different salespeople receive different discounts for similar deals with no recorded justification.
- Billing disputes cite promises that the quote does not reflect, as described in [why finance cannot trace an invoice to its commercial approval](/discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/).

## Problem owner and why-now trigger

The sales director or head of revenue operations owns the discount policy. The finance manager owns margin and billing accuracy. The system administrator owns the quoting tool. The budget owner for improvement is typically the financial director or the managing director.

The trigger is usually rising billing disputes, a margin review that cannot explain the gap between list and realised price, or a new sales hire whose discounts nobody had a rule for. Price pressure also adds urgency. When customers negotiate harder, the number of discount requests rises, and informal approval cannot keep up.

## Economic consequence

The direct cost is margin given away without a decision. A sample illustration: a business with R2 million a month in quoted sales that gives away an extra three percent through unrecorded discounts loses R60,000 a month, or R720,000 a year, and cannot tell which deals it came from. Indirect costs include disputes that take finance and sales hours to resolve, credit notes issued to settle arguments, and inconsistent treatment of customers, which weakens trust in the price list. Poor records also make VAT documentation harder to support, since the invoice has to reflect the agreed consideration.

## Root cause

- **The approval route is slower than the chat.** If the quoting tool needs five clicks and a message needs one, the message wins.
- **No discount thresholds.** Everyone needs approval for everything, or no one does, so the rule is ignored.
- **The quote is editable after agreement.** A salesperson can change the price without leaving a trace.
- **Different data for sales and finance.** The price list used by sales differs from the one finance holds, a gap described in [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).
- **Nobody reports on discounts.** What is not measured is not governed.

## Practical intervention

1. **Write the thresholds.** For example, up to five percent is the salesperson's call, five to ten needs the sales manager, above ten needs the director. Keep it to one page.
2. **Add a discount field and a reason code.** Make both mandatory when the price is below list, whatever the tool.
3. **Route the request inside the quote.** The approver sees the customer, the margin effect and the reason, and approves or declines in one step. Aim for a same-day response.
4. **Lock after approval.** A change to price or discount after approval creates a new revision and a new request.
5. **Accept the fast channel, record the outcome.** If approvers prefer messaging, let the message trigger the approval request, so the decision still lands on the record.
6. **Report monthly.** Show discount by salesperson, customer and reason, and compare list price to realised price.

### Trade-offs

Tighter control slows some deals, and the sales team will notice. Generous thresholds for small discounts and a fast turnaround for larger ones keep the friction low. A control that nobody follows is worse than none, because it creates a false sense of safety.

### An illustrative example

Illustrative: a Cape Town equipment distributor found that quoted prices differed from invoiced prices on about one deal in five, because discounts had been agreed in messages. The finance manager and sales director set three approval bands, added a reason field to the quote and made the manager's approval part of the quote record. After two months, disputes about agreed prices dropped and the monthly report showed which customers received repeated large discounts.

## Diagnostic questions

- For the last ten discounted deals, can you show who approved each discount and why?
- How long does an approval take, and what do people do when it is slow?
- Can a price be changed after the customer has accepted?
- Does finance see the discount before the invoice goes out?

## What good looks like

Every discount below list price carries a reason, an approver and a date on the quote. Approval is quick enough that the sales team prefers it to messaging. Finance sees the same record the customer saw, and disputes about what was agreed can be settled by opening the quote.

## Where Mellorca fits

Mellorca's [business automation](/services/business-automation/) work can build the approval routing and reason codes into the tools a business already uses. A [digital systems audit](/services/digital-systems-audit/) can first show where discounts are being agreed today and how the quote, order and invoice records connect.

## Method note

The sources are vendor documentation describing how quoting, approval and discount features are meant to work. They do not show how much any business loses through informal approvals. The Rand figures and the example are illustrative rather than a client case.
