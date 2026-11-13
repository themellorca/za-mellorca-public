---
hub: impact
record_id: CPS-080
slug: orders-rekeyed-after-sale-fulfilment-risk-cost
title: Re-keying orders after the sale: The labour and fulfilment cost of disconnected systems
description: When every confirmed order is typed again into accounting or warehouse systems, the business pays for the typing and for the wrong deliveries it causes.
lead: When every confirmed order is typed again into accounting or warehouse systems, the business pays for the typing and for the wrong deliveries it causes.
category: Digital Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Orders must be manually re-entered into other systems after a sale is made
primary_cost_mechanism: Labour cost of order capture plus error, rework and revenue loss from fulfilment mistakes and delays
sources:
  - Synchronize and fulfill sales orders - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/synchronize-orders
  - What Is EDI: Electronic Data Interchange? - IBM | https://www.ibm.com/think/topics/edi-electronic-data-interchange
  - GS1 EDI - GS1 | https://www.gs1.org/standards/edi
related:
  - Fixing avoidable mistakes instead of serving customers: The cost of rework | /impact/fixing-preventable-mistakes-rework-customer-time-cost/
  - The human dispatcher: The cost of manually routing every incoming request | /impact/manually-assigning-incoming-requests-routing-delay-cost/
  - Answering the same question again: The payroll cost of undocumented know-how | /impact/same-internal-questions-undocumented-knowledge-cost/
  - Overselling stock: What out-of-sync sales channels really cost you | /impact/inventory-not-updating-across-sales-channels-overselling-stock-errors-cost/
summary: When every confirmed order is typed again into accounting or warehouse systems, the business pays for the typing and for the wrong deliveries it causes.
layout: plain
---
## The tolerated pain: the sale is made, then it is typed again

A customer places an order. It might arrive through the online store, an emailed purchase order, a sales rep's order form, a WhatsApp message or a call to the counter. The sale is done. Then someone in the office opens the accounting or stock system and types the order in again: customer, delivery address, product codes, quantities, prices, discounts and delivery date. Sometimes it is typed a third time into a courier portal or a warehouse picking sheet.

This step sits at the most sensitive point in the business: between a promise made to a customer and the work needed to keep it. It is also one of the most common manual handovers in South African small and mid-sized businesses that sell physical goods or scheduled services.

Mellorca has written about the broader [cost of business systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/). This article focuses on one specific gap, the order handover, because its costs are unusually easy to trace: every re-keying error becomes a wrong delivery, a credit note or an unhappy customer.

## Why businesses tolerate it

- **It started small.** When there were ten orders a day, typing them in took minutes.
- **The sales channel was added later.** An online store or B2B portal was set up without connecting it to the accounting or stock system.
- **Someone checks every order anyway.** Re-keying feels like a useful control, even though it adds errors rather than catching them.
- **Integration sounds technical and expensive.** Many owners do not know that common platforms already offer connectors.
- **Orders arrive in many formats.** Emailed PDFs and messages do not fit neatly into any system, so a person bridges the gap.

## Operational consequence

- **Delay between sale and fulfilment.** Orders wait in an inbox or tray until someone captures them. Late-afternoon orders slip to the next day.
- **Keying errors.** Wrong product code, quantity, unit of measure or delivery address. IBM, describing [electronic data interchange](https://www.ibm.com/think/topics/edi-electronic-data-interchange), lists the errors manual entry introduces: typing mistakes, hard-to-read handwriting, missed fields and misread categories.
- **Overselling.** Stock levels in the sales channel and the stock system drift apart because updates are typed in batches.
- **Customer queries the office cannot answer.** Until the order is captured, nobody can confirm its status.
- **Peak-time breakdowns.** During month-end, promotions or seasonal peaks, the capture backlog grows exactly when speed matters most.

The wider pattern is described in [why an order needs so many manual touches](/patterns/why-does-an-order-need-so-many-manual-touches/).

## How the pain becomes money

- **Labour cost.** Paid capture time for every order, often by staff who could be handling customers or exceptions.
- **Error and rework cost.** Return freight, re-picking, re-delivery, credit notes and time spent investigating what went wrong.
- **Revenue loss.** Cancelled orders after slow dispatch, and customers who do not reorder after a wrong delivery.
- **Margin erosion.** Wrong prices or discounts typed into invoices, and free replacements sent to protect the relationship.
- **Scaling cost.** Capture time grows with every order, so growth means hiring more capture staff.
- **Cash-flow impact.** Orders captured late are invoiced late.

## A transparent cost model

These inputs are illustrative assumptions. Replace them with your own order data.

| Input | Illustrative value |
| --- | --- |
| Orders a month | 1,200 |
| Capture time per order (all re-keying steps) | 6 minutes |
| Loaded cost of capture staff per hour | R220 |
| Orders with a fulfilment error caused by capture | 1.5% |
| Average cost to correct one error (freight, re-pick, credit, admin) | R650 |

**Capture labour:** 1,200 × 6 minutes = 120 hours a month; 120 × R220 = R26,400 a month, or about R317,000 a year.

**Error cost:** 1,200 × 1.5% = 18 errors a month; 18 × R650 = R11,700 a month, or about R140,000 a year.

**Combined:** roughly R457,000 a year before lost repeat business. Track your own error rate for a month before relying on any figure; credit notes and re-delivery records usually show it.

The model leaves out effects that are harder to value but often larger: customers who quietly move to a supplier that delivers correctly, sales staff who spend time apologising instead of selling, and managers drawn into investigating disputes. Record those as qualitative consequences unless you have evidence to put a number on them.

*Illustrative example.* A Pretoria distributor of cleaning supplies took orders through its website, by email and from reps' tablets, and two administrators captured all of them into the accounting system each morning. Afternoon orders waited overnight. When the owner matched credit notes to their causes, most were wrong quantities or units typed during capture. Connecting the online store to the accounting system removed capture for about half of orders and let the administrators focus on emailed orders and exceptions.

## When it becomes commercially urgent

- dispatch is regularly delayed by the capture backlog;
- credit notes and re-deliveries are rising;
- you are adding a new sales channel, such as an online store or marketplace;
- a major customer asks for electronic ordering or tighter delivery times;
- you are about to hire another person mainly to capture orders.

## What better looks like

In a well-run order flow, the order is captured once, at the point of sale, and every later step reads from that record.

- **Connected sales channels.** Many platforms already include connectors. Microsoft's Business Central documentation for its Shopify connector, for example, describes importing online orders and creating sales documents automatically, with a fully fulfilled order becoming an invoice and an unfulfilled one becoming a sales order. It also provides views for orders where processing hit an error or where the order changed after it was processed. That is the right design: automation for the normal case, and a visible queue for exceptions.
- **Electronic ordering with larger customers.** IBM describes electronic data interchange as standards for exchanging business documents directly between systems, with rigid formatting that checks information before it enters business processes.
- **Structured order capture for the rest.** Reps and counter staff use a form that writes directly into the system, with product codes from a list rather than typed by hand.
- **One order record that tracks status.** An order management approach, as IBM puts it, tracks orders from inception to fulfilment, so customer queries can be answered without investigation. GS1 says its [EDI standards](https://www.gs1.org/standards/edi) allow automation of business transactions commonly occurring across the supply chain.

## Practical steps

1. Count orders a month by channel and how each one reaches the stock or accounting system.
2. Time capture for a sample of orders from each channel.
3. Match three months of credit notes and re-deliveries to their causes, and separate capture errors.
4. Check whether your sales channel and accounting system already offer a connector.
5. Connect the highest-volume channel first and set up an exception queue that someone owns.
6. Replace free-text order forms with structured ones that use product lists.

Where several systems are involved, Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) service can design the order flow end to end.

## Bottom line

Typing an order again after the sale is not a control; it is a point where errors are added and time is lost. The commercial value at stake is the capture payroll, the cost of every wrong delivery and the customers lost to slow dispatch. Because order volume and capture effort rise together, the cost grows with every successful month. Capturing the order once and letting systems carry it forward is one of the clearest returns on integration a trading business can find.
