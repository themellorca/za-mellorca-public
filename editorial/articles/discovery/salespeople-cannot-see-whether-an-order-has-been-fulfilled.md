---
hub: discovery
record_id: DISC-081
slug: salespeople-cannot-see-whether-an-order-has-been-fulfilled
title: Why salespeople cannot see whether an order has actually been fulfilled
description: The CRM says the deal is won, but delivery and invoicing happen elsewhere. Without status flowing back, salespeople phone the warehouse for answers.
lead: The CRM says the deal is won, but delivery and invoicing happen in other systems. Without status flowing back, salespeople phone the warehouse to answer customers.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Sales Director / Revenue Operations Lead
budget_owner: COO / CFO
sources:
  - Prospect-to-cash in dual-write - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/data-entities/dual-write-prospect-to-cash
  - Set up the mapping for the sales order status columns - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/sales-status-map
  - What is Order Management? - IBM | https://www.ibm.com/think/topics/order-management
related:
  - Why finance cannot trace an invoice back to the deal that approved it | /discovery/why-finance-cannot-trace-an-invoice-to-its-commercial-approval/
  - Why you cannot measure the time from accepted quote to first invoice | /discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/
  - Why credit checks happen after sales has already promised delivery | /discovery/why-credit-checks-happen-after-sales-has-promised-delivery/
summary: The CRM says the deal is won, but delivery and invoicing happen in other systems. Without status flowing back, salespeople phone the warehouse to answer customers.
layout: plain
---
A key customer phones their account manager: has our order shipped? The CRM shows the opportunity as won and the order as submitted, and nothing after that. The salesperson emails the warehouse, messages someone in finance about the invoice, and calls the customer back two hours later with an answer that may already be out of date. Multiply that by every account manager and every order, and a large share of the sales team's week goes on finding out what happened after the sale.

## The problem in plain language

Sales works in the CRM. Fulfilment happens in the ERP, warehouse or job management system. Invoicing happens in accounting. Often the order travels forward from sales to operations, but nothing comes back. The salesperson, who owns the customer relationship, cannot see whether the order was confirmed, picked, partly delivered, delivered, invoiced or cancelled.

The symptoms are easy to spot. Salespeople keep their own spreadsheets of open orders. The warehouse and accounts teams field constant "where is it?" calls from colleagues. Customers hear different answers from different people. Salespeople promise delivery dates that operations never agreed to. Commission disputes arise because sales thinks an order closed when finance has not invoiced it.

## What you are actually trying to solve

The problem is usually raised as "sales can't see fulfilment status", "how do we show order status from the ERP in the CRM?" or "how do we sync delivery status to the CRM?" It usually comes from a sales or revenue operations manager under pressure. The immediate goal is to answer customers without an internal investigation. The wider goal is one view of the order from quote to cash that sales, operations and finance all trust. That need sharpens as sales grows, because the number of orders to chase rises faster than the number of people available to chase them.

## Evidence and system mechanism

Order management, as IBM describes it in its [overview of order management](https://www.ibm.com/think/topics/order-management), covers the full order lifecycle: order entry, inventory, fulfilment and after-sales service. Visibility to both the business and the buyer is one of its main benefits. When that lifecycle is split across systems, visibility depends on status flowing between them.

Microsoft's documentation for linking Dynamics 365 Sales with Supply Chain Management shows how much detail is involved even when both systems come from one vendor. Its guide to [prospect-to-cash in dual-write](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/data-entities/dual-write-prospect-to-cash) explains that quotations and orders can sync both ways in real time. Invoices are created in the supply chain system and synced back into Sales, and the order status in Sales changes to invoiced once the invoice arrives. The order owner is made owner of the invoice so they can see it.

The companion page on [mapping sales order status columns](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/sales-status-map) is more revealing. The two applications use different status lists. On the supply chain side, the order's overall status is open, delivered, invoiced or cancelled, and a separate document status records whether a confirmation, picking list, packing slip or invoice was last produced. Sales has its own list: active, submitted, fulfilled, invoiced and cancelled. A processing status is needed to translate between them, so that states such as "picked" or "partially delivered" mean the same thing on both sides. The mapping needs extra setup. Without it, a salesperson would see a less precise status than the warehouse does.

The lesson applies to any combination of CRM and ERP, not just Microsoft's. Showing fulfilment status to sales is a design decision. Someone has to decide which statuses matter to the customer conversation, how they translate between systems, and how quickly they must flow back.

### What it looks like day to day

*Illustrative example, not a client case.* A Gauteng distributor of industrial consumables runs a cloud CRM for its twelve-person sales team and a separate ERP for stock, dispatch and invoicing. Orders are keyed into the ERP from the CRM by the sales administrator. Nothing returns. The dispatch supervisor estimates that a large part of her day goes on internal status questions. A customer is twice told an order has shipped when it is waiting on back-ordered stock, and the account is put at risk by a problem that is entirely about information.

## Problem owner and why now

The sales director or revenue operations lead feels the pain. Operations and finance own the systems that hold the answer. The budget usually sits with the COO or CFO, because the fix crosses departments. The common trigger is sales growth: more orders, more account managers, larger customers with stricter service expectations, or a new channel such as a customer portal that needs order status to show.

## Economic consequence

The costs show up as selling time lost to status chasing, operations and finance time lost to answering internal questions, customer frustration that weakens renewals and repeat orders, and disputes over commission and revenue timing. Promises made without fulfilment visibility can also lead to expedited freight or penalties to keep a customer. Estimate the cost from your own data: internal status queries per week, minutes per query, and the number of customer escalations about order status.

## Root cause

- **One-way integration.** Orders flow from sales to operations, but status, delivery and invoice data never come back.
- **Status lists that do not match.** Each system has its own stages, and nobody has agreed how they translate.
- **No shared order reference.** The CRM and ERP number orders differently, so matching them takes manual work.
- **Partial fulfilment is not modelled.** Split deliveries and back orders show up as a single status, or not at all.
- **No owner for the end-to-end view.** Each department optimises its own system, as described in [when every department optimises its part but the whole process gets worse](/patterns/when-every-department-optimizes-its-part-but-the-whole-process-gets-worse/).

## Practical intervention

1. **Agree a shared order lifecycle.** List the six to eight stages the customer conversation needs, for example confirmed, awaiting stock, picked, partly delivered, delivered, invoiced and cancelled. Map each system's statuses to them.
2. **Carry one order reference across systems,** so every record can be matched without guesswork.
3. **Return status, delivery and invoice events to the CRM,** at line level where partial delivery is common, through the integration or platform connector.
4. **Show expected dates as well as status.** "Awaiting stock, expected Thursday" answers the customer's real question.
5. **Alert account managers on exceptions,** such as delays, back orders and cancellations, rather than making them check.
6. **Retire side spreadsheets** once the CRM view is trusted.

Fixing the earlier handover helps too. Orders that are re-keyed between systems cause the mismatches described in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/). The customer-facing side of the same problem is explored in [why customers have to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/).

## Trade-offs

Near-real-time status sync costs more to build and run than a daily update, and not every business needs it. A nightly refresh may be enough where deliveries take weeks. More status detail is not always better, because salespeople need a clear stage, not every warehouse transaction. Deciding which system owns each status avoids two systems overwriting each other.

## Diagnostic questions

- Can a salesperson see, without asking anyone, whether a specific order has been delivered and invoiced?
- Do your CRM and ERP use the same order number?
- How are partial deliveries and back orders shown to sales?
- How many internal status queries reach dispatch and accounts each week?
- Who owns the definition of each order stage?

## What good looks like

Account managers open a customer record and see every open order with its current stage, expected date and invoice status, kept up to date from the systems that do the work. Exceptions reach them before the customer calls. Operations and finance stop answering colleagues' status questions, and commission is calculated on the same facts finance uses.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) service designs and builds the return flow of order, delivery and invoice status into the CRM, including the shared lifecycle and order reference. Where the wider quote-to-cash process needs redesign, our [digital operations improvement](/services/digital-operations-improvement/) work maps it end to end first.

*Method note:* the Dynamics 365 examples show one vendor's documented approach; other CRM and ERP combinations need equivalent mapping decisions.
