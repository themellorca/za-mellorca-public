---
hub: discovery
record_id: DISC-080
slug: quoted-delivery-dates-are-not-checked-against-capacity
title: Quoted delivery dates are not checked against capacity
description: Sales quote delivery dates from a lead-time table or a guess, so export orders miss them. Check dates against stock, capacity and transport, and promise only what can be kept.
lead: Sales quote delivery dates from a lead-time table or a guess, so export orders miss them. Check dates against stock, capacity and transport, and promise only what can be kept.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Revenue operations or sales operations lead
budget_owner: CRO, CFO or COO
sources:
  - Order promising concepts - Training | https://learn.microsoft.com/en-us/training/modules/set-up-order-cash-supply-chain-management/order-promising
  - https://www.sars.gov.za/legal-intr-in-31-documentary-proof-required-for-the-zero-rating-of-goods-or-services/ | https://www.sars.gov.za/legal-intr-in-31-documentary-proof-required-for-the-zero-rating-of-goods-or-services/
  - https://thesait.org.za/wp-content/uploads/2025/04/SAIT-Slides-Cross-border-supplies.pdf | https://thesait.org.za/wp-content/uploads/2025/04/SAIT-Slides-Cross-border-supplies.pdf
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
related:
  - Why revenue leakage only shows up at month-end reconciliation | /discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/
  - When every sales team builds its own version of the same product bundle | /discovery/when-every-sales-team-builds-its-own-product-bundle/
  - Why sales quotes have to be re-keyed before an order can start | /discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/
summary: Sales quote delivery dates from a lead-time table or a guess, so export orders miss them. Check dates against stock, capacity and transport, and promise only what can be kept.
layout: plain
---
Picture a Cape Town manufacturer of water-treatment equipment that has just opened its first export markets, with orders from Kenya and the United Kingdom. The sales team quotes from a template. Every quote says "delivery six weeks from order", because that is the standard lead time the business has always used for local customers, and the quoting tool fills it in automatically.

A Kenyan distributor signs a quote for four pump skids in March and expects delivery in mid-April. The production line is already booked solid for three weeks. Pre-shipment inspection needs a slot that is two weeks away. The sea freight carrier sails weekly, with a port cut-off six days before each sailing, and the container needs customs paperwork that takes several days to prepare. The skids leave Cape Town five weeks later than quoted. The contract carries a late-delivery penalty for each week of delay, so the distributor claims it. Finance has issued an invoice at dispatch, which does not match the quoted date, and spends days reconciling the invoice, the credit note and the freight cost of an air shipment that was added to claw back some time.

The operating condition is plain: the date on a quote is taken from a standard lead time or a salesperson's estimate, and nobody checks it against stock, production capacity, inspection slots or carrier schedules before it is promised. That matters to the CRO, the CFO and the COO because the cost of every missed promise lands after the sale, in penalties, expediting costs and disputes, and the business has no way to see it coming.

## The problem in plain language

When a salesperson quotes a delivery date, they are making a promise on behalf of the business. For the promise to be reliable, someone has to know whether the product will be available, whether the factory or warehouse has room to make or pick it, how long it will take to reach the customer and what could delay it on the way.

In many businesses, that knowledge sits with operations, planning and logistics, and the quote is written by sales. The date comes from a lead-time field, often a single number per product or product family, set once and rarely reviewed. A salesperson may adjust it from experience. Nobody compares it with the production schedule, the stock position or the carrier's sailing dates before the customer sees it.

For local customers in a stable business this works well enough. Lead times are familiar, the road network is predictable and a late order can often be fixed by a phone call.

International orders change that. The journey has more steps. Customs documents, inspection, port cut-offs, vessel schedules and public holidays in two countries all affect the date. A delay at any step moves the delivery by a week or more, because the next carrier sailing may be days away. Standard lead times that were reasonable at home become unreliable when applied to a new market.

This is related to, but different from, [signed quotes that do not start any delivery work](/discovery/accepted-quotes-that-do-not-create-fulfilment-work/). That problem is about what happens after the customer signs. This one is about whether the date on the quote was achievable in the first place.

## What the buyer is actually trying to solve

Revenue operations leads, sales operations leads and finance heads put this in practical terms. Why do we miss the delivery dates we quote? Why does every export order seem to carry a penalty or a dispute? Who is allowed to commit to a date, and how do they know it is possible? Why do the invoice and the contract disagree about when we delivered?

The outcome they want is a promise that can be kept. A date that reflects the stock, the capacity and the transport at the moment of quoting, that is recalculated when the order is confirmed, and that the customer can rely on. They also want finance to be able to invoice on facts that match what was promised.

## Evidence and system mechanism

### Many systems promise from a default number of days

Order-promising features in ERP products show the options clearly. Microsoft's training material on [order promising](https://learn.microsoft.com/en-us/training/modules/set-up-order-cash-supply-chain-management/order-promising) in Dynamics 365 Supply Chain Management says order promising calculates the earliest ship and receipt dates and is based on a delivery date control method and transport days. It lists several methods. The simplest is the sales lead time, which is the time between creating the sales order and shipping the items. The material says the calculation is based on a default number of days and does not consider stock availability, known demand or planned supply. In that mode, the system assumes stock is available beyond the lead time and that the company can promise shipment regardless of the actual availability.

The other methods look at real constraints. Available-to-promise is the quantity of an item that is available and can be promised on a specific date. Capable-to-promise bases the date on a dynamic plan, working out what must be produced or purchased. The material also notes that transport time can affect delivery dates, so order takers can explore the transport choices carriers offer.

Other ERP and quoting tools offer similar choices under different names. What matters is that the simple method, a fixed number of days, is the one most businesses start with and the one that ignores everything that makes an export date uncertain. The better methods need data to be kept current: stock, production capacity, transport days by mode and calendars.

| What the quote date assumes | What can actually delay it |
| --- | --- |
| Stock is available when needed | Stock is reserved for other orders or not yet received |
| The factory has room | Production slots are already full for weeks |
| Inspection and packing are quick | Inspection slots or packing capacity are limited |
| Transport takes a standard time | Carrier sailings are weekly and port cut-offs apply |
| Customs is a formality | Documents, inspections or holidays add days |
| Calendars match | Public holidays in both countries differ |

### The South African tax rules reward timing and proof

Delivery dates affect tax as well as customers. SARS explains in its Interpretation Note on [documentary proof for zero-rating](https://www.sars.gov.za/legal-intr-in-31-documentary-proof-required-for-the-zero-rating-of-goods-or-services/) that a vendor who zero-rates an export supply must obtain and retain documentation substantiating the zero-rating, as section 11(3) of the VAT Act requires. For goods exported directly, the proof includes evidence that the vendor delivered the goods to the export destination, proof of export and customs documentation.

Timing matters too. The South African Institute of Taxation's [slides on cross-border supplies](https://thesait.org.za/wp-content/uploads/2025/04/SAIT-Slides-Cross-border-supplies.pdf) summarise the general rule that goods must be exported within 90 days of the earlier of the time the invoice is issued or payment is received, with exceptions for cases such as advance payments and goods that are manufactured or altered. A business that promises a date, issues an invoice and then misses the delivery by weeks can find that the export falls outside the period. The rules allow an application for an extension in limited circumstances, and a tax adviser can explain how they apply.

The invoice itself must also be right. SARS's page on [tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) says a valid tax invoice must carry the supplier's name, address and VAT registration number, the recipient's details where the recipient is a vendor, and a serial number and date of issue, and that a business cannot deduct input tax without a proper tax invoice. If the date on an invoice has to be corrected because a delivery slipped, the correction trail adds work for finance. Confirm the VAT treatment of your own exports with your tax adviser.

## Why this becomes urgent

International expansion is the usual trigger. A business entering new markets does what it knows: it applies the lead times and quote templates it uses at home. The first few orders go through, and then the pattern of late deliveries emerges.

The pressure builds quickly. Export orders are often larger and more visible than local ones, the contracts tend to include penalty clauses, and distant customers cannot be placated with a phone call and a courier. Each late order damages a relationship the business has spent money to build.

Finance feels it a little later, when disputes, credit notes and expediting costs start to appear in the monthly figures. By then the cause, a date that was never checked, is several steps away from the symptom.

## Economic consequence

Missed promises cost money in several places:

- **Order delays.** Late deliveries leave customers waiting and, in some cases, idle equipment on their side, which sours the relationship and the reference value of the sale.
- **Billing disputes.** The invoice date, the contract date and the actual delivery date disagree, and the customer withholds payment until the difference is explained.
- **Margin leakage.** Contract penalties for lateness, credit notes and the cost of expediting, such as air freight to recover time, come straight off the margin of the order.
- **Slow revenue conversion.** When delivery drifts, so does the point at which revenue can be invoiced and collected, and cash comes in later than the forecast assumed.
- **Reconciliation labour.** Finance and operations spend days matching promised dates, shipped dates, invoice dates and credit notes, a task repeated for every troubled order.

As an illustrative example only, suppose a contract carries a penalty of a small percentage of the order value for each week of delay, and an order is delivered five weeks late. The penalty may take back a meaningful share of the margin, and an air shipment to catch up could remove the rest. The figures are invented, but they show how a single unchecked date can turn a profitable export order into a loss.

Pricing can also go wrong when the date is wrong. A quote prepared with one set of costs may not hold when the real route and timing are used, which is related to [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/), as the lead-time data sales uses and the data operations holds are rarely the same.

## Root cause

The root cause is that delivery dates are quoted from standard lead times or an individual's judgement, and are never validated against the constraints that determine whether the date can be met. The quoting tool asks for a date, the salesperson supplies one, and the process moves on.

A second cause is that the data needed to check the date lives in different systems. Stock is in the ERP, the production schedule in the planning tool, carrier sailings in a freight portal, public holidays in a calendar. Nobody connected them to the quote, so checking is a manual task that people skip when a customer is waiting.

A third cause is that responsibility for the promise is not clear. Sales makes the promise, operations has to keep it, and neither measures the gap. Where [credit checks happen after delivery is promised](/discovery/why-credit-checks-happen-after-sales-has-promised-delivery/), the same pattern appears: a commitment is made first and the checks that should have shaped it come later.

## Practical intervention

### Practical next actions

1. **Measure what actually happens.** For the past year, calculate the real time from order confirmation to dispatch and from dispatch to arrival for each product family and route. Include customs and inspection time, and note how often orders arrived later than quoted.
2. **Build lead-time tables from the data.** Replace the single standard number with a table by product family and route that reflects the measured times. Choose a rule for what the promise covers, such as the time within which most orders arrive, and agree it with sales and operations.
3. **List the constraints that decide the date.** For each product, write down what limits it: production slots, picking capacity, inspection slots, packing, carrier sailing days and cut-offs, customs document time and public holidays at origin and destination. Name an owner for each.
4. **Put capacity where the quote is made.** Give sales a view of available slots and stock when they quote, either through the ERP's order-promising features or through a simple capacity calendar linked to the quoting tool. The date shown should be the earliest date that satisfies the constraints, plus any agreed margin.
5. **Distinguish kinds of date.** Mark each date as requested by the customer, estimated or committed, and use contract wording that matches. Do not let an estimate be printed as a commitment.
6. **Re-check at order confirmation.** When the customer signs, recalculate the date with current stock and capacity, and tell the customer if it has changed before the order proceeds.
7. **Track slippage and tell the customer early.** Monitor orders against their committed dates, flag those at risk and contact the customer before the date passes. Record the cause of every slip.
8. **Tie invoicing and tax proof to real events.** Invoice from confirmed dispatch or delivery as the contract requires, and collect the proof of export and customs documents as part of the shipping task, with a deadline tracked against the export period. Ask your tax adviser how to treat extensions and corrections.
9. **Review misses each month.** Compare promised and actual dates by product, route and cause, and update the lead-time tables, constraints and contract terms accordingly.
10. **Add a checklist for each new market.** Before the first quote, record the route options, transit times, customs steps, holidays, required documents and penalty norms for the new market, and set the lead-time table for it.

## Diagnostic questions

- Where does the delivery date on a quote come from, and who checks it before the customer sees it?
- What share of export orders in the last year arrived by the quoted date, and what caused the misses?
- Can a salesperson see available production slots and stock when quoting, or only a standard lead time?
- Do our lead times for each route include inspection, customs, port cut-offs and public holidays?
- What do our contracts say about late delivery, and how often have the penalties applied?
- How do we make sure proof of export is collected, and within what time?

## What good looks like

The date on a quote is calculated from measured lead times and current constraints, not from a template. Sales can see stock and capacity when quoting. Each date is labelled as estimated or committed. The date is rechecked when the order is confirmed, and the customer is told early if it changes. Invoices and export proof follow actual dispatch and are tracked against the tax deadlines. Missed dates are reviewed each month and the tables are corrected.

You can measure the result. The share of orders delivered by the committed date rises. Penalties, credit notes and expedite costs fall. Billing disputes about dates become rare. The time finance spends reconciling dates shrinks, and revenue is invoiced and collected closer to the forecast.

## Where Mellorca fits

If your quotes pull dates from a template and your capacity data sits in other systems, [systems implementation and integration](/services/systems-implementation-integration/) can connect your ERP, planning and freight data to the quoting tool so that sales sees a date that reflects stock, capacity and transport. To set the lead-time rules, the labelling of dates, the re-check at confirmation and the monthly review with sales, operations and finance, [digital operations improvement](/services/digital-operations-improvement/) can design the process and help it become routine.

## Method note

This article draws on Microsoft's documentation on order promising in Dynamics 365 Supply Chain Management, SARS's Interpretation Note on documentary proof for zero-rating and its page on tax invoices, and slides on cross-border supplies from the South African Institute of Taxation. The scenario, the lead times and the penalty figures are illustrative and not measured. The article does not claim that any ERP or quoting product is required to fix the problem or that it behaves the same way in your environment, so check the documentation for the tools you use. The export timing rules and exceptions are summarised briefly and change over time, so confirm how they apply to your own exports with your tax adviser. It is general information and not tax or legal advice.
