---
hub: discovery
record_id: DISC-211
slug: quotes-move-to-spreadsheets-when-crm-pricing-cannot-be-trusted
title: Quotes move to spreadsheets when CRM pricing cannot be trusted
description: Salespeople build quotes outside the CRM when its prices cannot be trusted. Find the missing data and rules, restore an owned price source, and make the quote usable again.
lead: Salespeople build quotes outside the CRM when its prices cannot be trusted. Find the missing data and rules, restore an owned price source, and make the quote usable again.
category: Sales Operations & CRM
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales operations and commercial managers
budget_owner: Sales director or CFO
sources:
  - Define product pricing | https://learn.microsoft.com/en-us/dynamics365/sales/create-price-lists-price-list-items-define-pricing-products
  - Price calculation for opportunity, quote, order, and invoice records (Dynamics 365 Sales) | https://learn.microsoft.com/en-us/dynamics365/sales/price-calculation-opportunity-quote-order-invoice-records
  - Value-Added Tax - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/
related:
  - Salespeople update the CRM only before forecast meetings | /discovery/why-crm-updates-happen-only-before-forecast-meetings/
  - Sales cannot see a customer's credit or service problems | /discovery/sales-cannot-see-a-customer-s-credit-or-service-problems/
  - Opportunities remain open long after buyers go quiet | /discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/
summary: Salespeople build quotes outside the CRM when its prices cannot be trusted. Find the missing data and rules, restore an owned price source, and make the quote usable again.
layout: plain
---
A salesperson opens the CRM to prepare a quote for a regular customer. The product is there, but the price is an old standard rate rather than the customer's agreed rate. A pack is shown as a single unit, and the discount the manager approved is missing. The salesperson opens a familiar spreadsheet, corrects the figures, exports a PDF and sends it. The CRM opportunity moves forward, but the commercial calculation happened somewhere else.

This is the operating condition: the business has a CRM, yet its quotes are built in spreadsheets because the pricing inside it is not dependable. The spreadsheet helps someone get an offer out today. It also creates a second quoting process, where important prices and decisions become difficult to trace, maintain or compare with the deal eventually won.

## The problem in plain language

The failure is not simply that salespeople prefer Excel. A salesperson needs a quote they can explain to a customer and stand behind internally. If using the CRM means checking every amount against another file, it does not save much work. Building the quote directly in the file that appears reliable becomes a rational workaround.

Over time, that workaround spreads. One team adds a freight calculation; another keeps customer-specific prices; a third includes products that have not reached the CRM catalogue. The CRM remains the place to track the opportunity, while the spreadsheet becomes the place to decide what is being offered and at what price.

Management then sees pipeline value without the full pricing history. The amount entered on an opportunity may be a rounded total, rather than the quote's actual products, units, discounts and terms. Requiring staff to attach the spreadsheet improves access to the file, but does not make those calculations reliable or usable by the rest of the business.

## What the buyer is actually trying to solve

The sales operations manager wants standard quotes to be accurate without repeated manual corrections. The commercial manager wants approved prices and exceptions applied consistently. The sales director wants faster responses to customers, and the CFO wants confidence that the price offered will not quietly erode the expected margin.

The desired outcome is a quoting process people can trust enough to use. That requires finding the reasons they leave the CRM, rather than merely enforcing a new rule against spreadsheets. A replacement system will reproduce the same problem if it receives the same incomplete catalogue and nobody takes responsibility for maintaining the prices.

## Evidence and system mechanism

### A product name is not enough to determine a price

Microsoft's documentation on [defining product pricing in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/create-price-lists-price-list-items-define-pricing-products) explains that price lists connect products, units and pricing details. It supports separate price lists and currencies, effective dates, discount lists and different calculation methods. These are concrete dependencies behind a quote, rather than optional descriptive information.

A business should therefore investigate which combination applies to a customer's offer. The right product with the wrong selling unit can produce a plausible but incorrect total. A current general price may also be wrong for a customer with an agreed commercial arrangement. When the CRM cannot express those distinctions reliably, the spreadsheet often contains the missing rule.

This is connected to [sales and finance working from different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/), but the immediate concern here is the point where the salesperson abandons the CRM to construct the offer. That moment reveals which information or calculation the quoting process cannot provide.

### Calculation settings affect the result

Microsoft's [price-calculation documentation](https://learn.microsoft.com/en-us/dynamics365/sales/price-calculation-opportunity-quote-order-invoice-records) describes system calculations for fields including unit price, volume discount, manual discount and extended amount. It also explains that system price calculation is configurable and runs on specified actions, such as adding or updating products, when enabled.

The diagnostic implication is to compare the inputs and calculation settings, not just the final total. A salesperson's correction may compensate for missing data, a wrongly applied rule, or behaviour they do not understand. Each requires a different fix. Adding another editable price field without establishing why the original calculation failed can make the uncertainty worse.

### Tax treatment must be explicit

For a South African example, [SARS states that the standard VAT rate is currently 15%](https://www.sars.gov.za/types-of-tax/value-added-tax/), while certain supplies are zero-rated or exempt. That does not mean every quote should simply have VAT added to every line. The relevant treatment must be established for the supply and seller.

A quotation should make its tax basis clear and apply the configured treatment consistently. Comparing a tax-exclusive spreadsheet amount with a tax-inclusive CRM total can look like a pricing error even when the underlying selling price is the same. During testing, finance should confirm the expected treatment instead of asking salespeople to resolve the difference themselves.

| Gap in the quoting process | Why a spreadsheet appears more useful |
| --- | --- |
| Customer's agreed rate is missing | The salesperson keeps a personal list |
| Product unit or pack size is unclear | A worksheet converts quantities manually |
| Price changes arrive after the CRM update | A recent file appears more trustworthy |
| Discount conditions are not represented | Someone adds the reduction by hand |
| Bundle components cannot be quoted together | A separate workbook constructs the offer |

The last gap overlaps with each sales team building its own product bundles. The common requirement is a usable commercial model, not merely a catalogue with more product names.

## Why this becomes urgent

A CRM replacement or upgrade exposes the hidden process. The project team asks which price list to migrate, and discovers several files with different owners, rules and update dates. Some spreadsheets contain customer terms that are absent from any central source. Others contain calculations nobody can explain without the person who built them.

The risk is migrating the visible CRM data while leaving the real quoting process behind. A successful technical migration can still force salespeople back into spreadsheets on the first day. Customer growth, new product ranges and staff changes can make the same dependency urgent even without a replacement project.

Sales operations should own the day-to-day investigation. Commercial and finance teams should decide price policy and approval authority, while the sales director or CFO sponsors the change. The implementation team should translate those decisions into the system rather than inventing commercial rules during configuration.

## Economic consequence

The cost appears in several places. An old price can reduce the expected margin. An incorrect product unit can distort the amount offered. Unapproved discounts can become customer commitments before anybody notices. Quote turnaround slows when sales staff repeatedly look up prices, check calculations and ask colleagues which file is current.

Consider an illustrative offer for goods with an intended selling value of R12,000 before VAT. A stale worksheet produces R11,400 for the same goods. The R600 difference is a reduction in selling value, not automatically a R600 loss in profit: the actual margin effect depends on the costs and circumstances. The example shows why the business needs to know which price was offered and why, rather than assuming a completed quote used the approved rate.

Rework follows when the customer accepts one set of terms and the order system calculates another. The handoff problem is explored in [orders that do not carry the accepted quote's price and terms](/discovery/why-orders-must-carry-the-price-and-terms-of-the-accepted-quote/). Here, the earlier failure is that the trusted quote was never constructed in the system that should have supplied those terms.

The business also loses visibility of quoted versus won price. A deal marked won may show only its final total, making it difficult to distinguish a negotiated reduction from an incorrect starting price. None of these effects establishes a universal loss rate; they must be measured from the business's own quotes and orders.

## Root cause

The root cause is usually an unreliable pricing process supported by incomplete or poorly maintained system data. A list of products has been loaded, but ownership of customer rates, validity dates, units and discount conditions remains unclear. New prices reach the sales team faster than they reach the CRM, so staff learn to trust the file they received directly.

There may also be a genuine gap in the quoting capability. Complex configurations or customer-specific terms may need functionality the existing setup cannot support. That should be distinguished from a configuration error or an inconvenient screen: each has a different cost and remedy.

Informal approvals add another layer. If a negotiated exception is discussed in chat but not attached to the quote, the spreadsheet may become its only practical expression. See [discount approvals that happen in chat instead of on the quote](/discovery/why-discount-approvals-live-in-chat-threads-instead-of-the-quote/). Moving the arithmetic into the CRM without moving the decision and its conditions leaves the workaround largely intact.

## Practical intervention

### Practical next actions

1. **Watch real quotes being built.** Select examples from different teams and customer types. Ask the salesperson to show the exact moment they leave the CRM and what they do next. Classify the reason: missing price, wrong unit, unavailable product, unsupported arrangement, approval delay or unnecessary effort. Start with evidence from the workflow, rather than a general complaint that the CRM is unreliable.
2. **Define one owned price source.** Agree where approved product prices, customer arrangements and validity dates are maintained, who can change them and how changes reach the quoting process. One source does not require one price for every customer. It means one governed way to establish which approved rule applies, with named owners and a visible update process.
3. **Repair the commercial data and calculations together.** Reconcile product identifiers, selling units, pack sizes, currencies and tax treatment. Remove obsolete entries without erasing the meaning of existing offers. For each supported arrangement, document the inputs and expected result. Where the CRM cannot represent a legitimate requirement, decide explicitly whether to configure it, integrate another quoting capability or retain a controlled exception process.
4. **Put exceptions and approvals on the quote.** Capture the proposed discount, reason, approver and conditions against the offer being issued. Define when changes require renewed approval. A permissible exception should be visible; a missing price should not silently become an unrestricted manual override. Keep approval routes proportional so standard work does not require avoidable escalation.
5. **Test against representative offers.** Compare expected and actual line prices using agreed examples, including different units, customer rates, expired promotions and tax treatments. Have sales and finance sign off the results together. Confirm what happens when a quote is changed or converted to an order, and how an already issued offer remains traceable when the underlying price source changes.
6. **Make adoption measurable and investigate remaining exits.** Record where customer-facing quotes are generated and count those still built outside the approved process. Track the reasons, preparation time and number returned for correction. Do not treat an attached spreadsheet as an in-system quote. Use the remaining workarounds to identify unresolved requirements before removing access to tools people still need.

Begin with a defined product range or team if the catalogue is large. Keep a documented route for unusual offers while the standard path is repaired. The goal is to reduce the need for private calculations without interrupting legitimate customer work.

## Diagnostic questions

- Which recent quotes were calculated outside the CRM, and why did the salesperson leave it?
- Who owns each customer price arrangement and confirms that it is current?
- Can a salesperson see the selling unit and tax basis without checking another file?
- Does the quoted discount have an identifiable decision and approver?
- Can finance reconstruct the offered price from the information stored with the quote?
- What happens to existing offers when a price list changes?

## What good looks like

A salesperson can build a standard offer in the approved quoting process and explain where each price came from. The product, unit, customer arrangement and relevant dates are clear. Exceptions have reasons and approval evidence, and the customer receives an offer consistent with the commercial decision recorded internally.

Sales operations can identify quotes still created outside the process and distinguish legitimate exceptions from unresolved defects. Finance can compare offered and won values using the underlying lines and adjustments, rather than searching for a final spreadsheet. Price updates have an owner, and a CRM upgrade tests the actual quoting workflow instead of migrating a catalogue nobody trusts.

## Where Mellorca fits

Mellorca can trace why salespeople leave the CRM through [a digital systems audit](/services/digital-systems-audit/) and connect the approved price source to the quoting process through [systems implementation and integration](/services/systems-implementation-integration/). [Digital operations improvement](/services/digital-operations-improvement/) can establish price ownership, exception handling and the measures needed to keep the process dependable after implementation.

## Method note

Microsoft documentation provides examples of how pricing data and calculations work in one CRM; the available features and behaviour must be checked in the business's own configuration. The South African VAT fact comes from SARS guidance consulted on 12 October 2026, and is not a determination of tax treatment for a particular transaction. The proposed interventions are operating recommendations derived from the problem described. The rand amounts are illustrative, no client results are implied, and no savings or margin benchmark is claimed.
