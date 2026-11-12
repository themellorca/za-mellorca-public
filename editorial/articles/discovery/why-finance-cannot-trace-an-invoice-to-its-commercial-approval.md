---
hub: discovery
record_id: DISC-091
slug: why-finance-cannot-trace-an-invoice-to-its-commercial-approval
title: Why finance cannot trace an invoice back to the deal that approved it
description: When an invoice cannot be linked to the quote, discount and sign-off behind it, every query becomes an investigation. How to keep the approval attached from deal to bill.
lead: When an invoice cannot be linked to the quote, discount and sign-off behind it, every query becomes an investigation. How to keep the approval attached from deal to bill.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Financial controller
budget_owner: Finance director
sources:
  - Create or edit quotes in Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales
  - Create and manage invoices | https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-invoice-sales
  - Online signatures for order confirmations — Odoo 17.0 documentation | https://www.odoo.com/documentation/17.0/applications/sales/sales/send_quotations/get_signature_to_validate.html
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/
related:
  - Why you cannot measure the time from accepted quote to first invoice | /discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/
  - Why salespeople cannot see whether an order has actually been fulfilled | /discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/
  - Why every upsell means rebuilding the customer's deal from scratch | /discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/
summary: When an invoice cannot be linked to the quote, discount and sign-off behind it, every query becomes an investigation. How to keep the approval attached from deal to bill.
layout: plain
---
A customer queries an invoice. The unit price is lower than the price list, there is a 12% discount nobody in finance recognises, and the payment terms are 60 days instead of the usual 30. The credit controller asks sales. The account manager thinks the discount was agreed with the sales director in a meeting last quarter. The sales director remembers approving something, but not this. Finance cannot find a signed quote, an approval email or any note on the order. The invoice stands, but nobody can prove it is right.

This article looks at that operating condition: an invoice that cannot be traced back to the commercial approval behind it. It matters to any business that negotiates prices, discounts or terms, and it gets worse as sales volume grows.

## The problem in plain language

Every invoice is the end of a chain of commercial decisions: a price, a discount, a set of terms, a scope, and somebody's authority to agree them. In a traceable process, each of those decisions is recorded once and carried forward, so the invoice points back to the order, the order to the accepted quote, and the quote to the approval. In many businesses the chain breaks somewhere in the middle. The invoice exists. The approval may exist too, in an inbox, a chat thread or someone's memory. But there is no reliable link between them.

## What the buyer is actually trying to solve

Finance managers search for ways to link invoices to sales orders, enforce discount approvals, or build an audit trail from quote to invoice. Commercial directors want to know that the discounts going out are the ones they agreed to. Auditors want evidence that revenue was billed on authorised terms. The underlying need is simple to state: for any invoice line, someone in finance should be able to see, within a minute, which quote it came from, who approved the price and terms, and when.

## Evidence and system mechanism

### Sales systems can carry the approval forward

Mainstream CRM and ERP products are built around a linked chain of documents. Microsoft's guidance on [creating quotes in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-quote-sales) describes a quote that starts as a draft, is activated when it is ready for the customer, and becomes an order when the customer accepts it. Once a quote is active, its overall amount is locked, and once closed its prices are treated as fixed unless a new quote or agreement is created. That locking is what makes the quote usable as evidence.

Acceptance can be recorded too. Odoo's documentation on [confirming quotations with an online signature](https://www.odoo.com/documentation/17.0/applications/sales/sales/send_quotations/get_signature_to_validate.html) explains that the signature, the name of the signer and the date signed are stored on the order. The customer's acceptance is then part of the record rather than an attachment in someone's mailbox.

### But the chain can be bypassed

The same systems also allow documents to be created on their own. Microsoft's page on [creating and managing invoices](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-invoice-sales) notes that an invoice is typically converted from an order, but that you can also create an invoice that does not originate from an order, adding products manually. That flexibility is useful for genuine one-off charges. It is also exactly how traceability is lost: if invoices are routinely created from scratch, or in a separate accounting system, the link to the approved quote never exists.

### The invoice itself must be accurate

In South Africa there is a regulatory reason to care. SARS guidance on [tax invoices](https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/) lists the particulars a full tax invoice must contain, including an accurate description of the goods or services, the quantity or volume supplied, and the value and tax charged. It also notes the time frame for issuing a tax invoice: 21 days from when the supply was made. An invoice built by hand from memory, rather than from the agreed quote, is more likely to carry the wrong description, quantity or price, and more likely to need a credit note later.

### Where the link usually breaks

| Break point | What finance sees |
| --- | --- |
| Discount agreed by email or phone | A price on the invoice with no recorded approver |
| Quote edited after acceptance | Invoice and signed quote disagree |
| Order captured from a PDF in the ERP | No reference back to the CRM quote |
| Invoice raised manually | No order or quote reference at all |
| Special terms noted in free text | Payment terms that differ from the customer master with no explanation |

## Problem owner and why-now trigger

The financial controller owns the outcome, because invoice disputes, credit notes and audit queries land in finance. Sales operations owns the CRM and the quote process. The commercial or sales director owns the approval policy: who may grant which discount. The finance director usually funds the fix.

The usual trigger is sales growth. With a handful of salespeople, the financial controller can walk over and ask. With twenty, spread across branches, that stops working. Other triggers include a new sales director tightening discount authority, an audit finding on revenue, or a dispute with a large customer that the business could not substantiate.

## Economic consequence

The most direct cost is time: every query becomes an investigation across inboxes and people. Unresolved queries delay payment, which hurts cash flow; the cash cost of slow billing is explored in [the cash flow cost of late invoicing and manual billing](/impact/late-invoicing-manual-billing-cash-flow-cost/). When the business cannot prove the agreed terms, it often concedes the customer's version, issuing credit notes that become margin given away. There is a control cost too: unapproved discounts are invisible, so margin erosion is only seen in aggregate, months later. For the audit side of untraceable figures, see [the audit cost of untraceable reporting numbers](/impact/untraceable-reporting-number-audit-cost/).

## Root cause

- **Approval happens outside the system.** Discounts and special terms are agreed in conversation, so no record exists to link to.
- **Two systems, no shared key.** The quote lives in the CRM and the invoice in the accounting system, with no reference that ties them together. The wider version of this gap is described in [when your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/).
- **Re-keying breaks the chain.** When orders are retyped rather than converted, the link to the quote is lost; see [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).
- **Prices drift between systems.** If sales and finance hold different price lists, a correct quote and a correct invoice can still disagree; see [why sales and finance use different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/).

## Practical intervention

1. **Write the approval policy down.** Define who may approve which discount levels, payment terms and non-standard scope, and record approvals against the quote, not in email.
2. **Make the quote the only route to an order.** Orders should be created from accepted quotes, carrying the quote reference, price and terms forward.
3. **Carry references onto the invoice.** Every invoice line should hold the order and quote reference, whichever system raises it.
4. **Restrict free-standing invoices.** Allow invoices without an order only for defined cases, with a reason field and a reviewer.
5. **Record acceptance.** Use electronic acceptance or attach the signed quote to the order record so the customer's agreement is part of the chain.
6. **Exception report monthly.** List invoices with no quote reference, or with prices that differ from the accepted quote, and review them.

### Trade-offs

Formal approval steps add friction for salespeople, especially on urgent deals. Keep thresholds sensible so routine discounts are approved automatically and only real exceptions need a person. Legacy contracts will not have a clean trail; decide whether to backfill the largest accounts or start the rule from a given date.

### An illustrative example

Illustrative: a Durban industrial supplies distributor with about 90 staff found that a large share of its credit notes followed disputes about agreed prices. Quotes were built in the CRM, but branch administrators typed orders into the accounting system from emailed PDFs. The business added a discount approval step to the CRM, pushed accepted quotes into the accounting system as orders with the quote number attached, and blocked manual invoices without a reason code. Disputes did not disappear, but each one could now be answered from the record.

## Diagnostic questions

- Pick five recent invoices at random. Can finance find the approved quote for each within a few minutes?
- Is there a written discount authority, and is it enforced by the system or by memory?
- What share of invoices are created without an originating order?
- Does the invoice carry a quote or order reference that sales would recognise?
- How many credit notes last quarter related to disputed prices or terms?

## What good looks like

Every invoice line points to an order, every order to an accepted quote, and every non-standard price or term to a named approver and date. Free-standing invoices are rare and explained. A customer query is answered from the record, not from people's recollections, and auditors can sample the chain without a meeting.

## Where Mellorca fits

Mellorca helps businesses map where the quote-to-invoice chain breaks through a [digital systems audit](/services/digital-systems-audit/), then connects CRM and accounting systems so references and approvals flow through, as part of [systems implementation and integration](/services/systems-implementation-integration/). Approval routing and exception reporting can be automated through [business automation](/services/business-automation/).

## Method note

Product references illustrate common mechanisms and are not recommendations. The example is illustrative and does not describe a specific client. Tax requirements summarised here should be confirmed against current SARS guidance and professional advice for your circumstances.
