---
hub: discovery
record_id: DISC-292
slug: teams-cannot-trace-a-business-transaction-across-systems
title: Why teams cannot trace one business transaction across several systems
description: When a customer asks what happened to an order, staff search four systems by four different reference numbers. A shared business reference carried through every system turns that hunt into a lookup.
lead: When a customer asks what happened to an order, staff search four systems by four different reference numbers. A shared business reference carried through every system turns that hunt into a lookup.
category: Integration & API Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Integration Lead / Operations Manager
budget_owner: COO / CIO
sources:
  - Trace Context | https://www.w3.org/TR/trace-context/
  - Context propagation | https://opentelemetry.io/docs/concepts/context-propagation/
  - Collect diagnostic data for workflows - Azure Logic Apps | https://learn.microsoft.com/en-us/azure/logic-apps/monitor-workflows-collect-diagnostic-data
related:
  - Why retry logic creates duplicate transactions at the receiving end | /discovery/retry-logic-creates-duplicate-transactions-at-the-receiving-end/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
  - Why batch integrations leave your systems hours out of date | /discovery/batch-integrations-leave-systems-hours-out-of-date/
summary: When a customer asks what happened to an order, staff search four systems by four different reference numbers. A shared business reference carried through every system turns that hunt into a lookup.
layout: plain
---
A customer disputes an invoice. Finance needs to know what was ordered, what was delivered, which price applied and when the payment came in. The order number is in the web shop. The ERP has its own sales order number. The courier uses a waybill number. The payment provider has a transaction ID. The accounting system has an invoice number. Matching them takes a morning of searching, phoning and comparing dates and amounts. Sometimes the answer is still a best guess.

This is a tracing problem. Each system keeps good records of its own part of the transaction, but there is no thread linking those parts into one story.

## The problem in plain language

A single business transaction, such as an order, a claim, an application or a return, passes through several systems. Each system creates its own identifier and its own log. Unless something links those records together, following the transaction from start to finish means reading every system's records and matching them by hand.

This is different from knowing whether a transaction finished. Monitoring that confirms business completion is covered in [why integration monitoring can show green while the business transaction fails](/discovery/why-integration-monitoring-misses-business-completion/). Tracing answers a wider question that support, finance, audit and IT all ask: what happened to this specific transaction, in which order, and where is it now?

## What the buyer is actually trying to solve

Searches such as "trace a transaction across multiple systems", "end-to-end order traceability" or "correlation ID across integrations" usually come from someone who has spent too long investigating a single case: an operations manager, finance controller, support lead or integration developer. They want investigations to take minutes rather than hours. They want audit questions answered from records, not memory. And they want IT to diagnose integration problems without asking each vendor for logs.

## Evidence and system mechanism

The technical world has largely standardised how requests are traced between software services. The W3C [Trace Context](https://www.w3.org/TR/trace-context/) recommendation defines standard headers, traceparent and tracestate, that carry a trace identifier from one service to the next. The specification explains the problem it addresses: traces that crossed between different tracing vendors could not be followed because there was no agreed identifier. OpenTelemetry's documentation on [context propagation](https://opentelemetry.io/docs/concepts/context-propagation/) describes how that context travels across process and network boundaries so that traces, metrics and logs can be linked. It also allows extra key-value data, called baggage, to travel with it. It warns against putting sensitive information such as credentials or personal information in baggage, because it may be logged or passed to downstream services.

Technical trace IDs are valuable to developers. Business users, though, search by the numbers they know: order numbers, invoice numbers and customer references. Integration platforms allow for this. Microsoft's guidance on [collecting diagnostic data for Logic Apps workflows](https://learn.microsoft.com/en-us/azure/logic-apps/monitor-workflows-collect-diagnostic-data) describes a custom tracking ID that can be set from the incoming message, for example a business reference, and passed in a client tracking header. It also describes tracked properties that record chosen values from each step, so runs can be searched by them later. The same page notes that diagnostic logs are not fully lossless and can arrive with delays of up to tens of minutes. Logs help an investigation, but they are not a permanent business record.

The practical conclusion is that tracing has two layers. A technical trace connects calls between services. A business reference connects the records each system keeps. Most businesses need both, and the business reference is usually the missing one.

### What an investigation looks like today

*Illustrative example, not a client case.* A South African medical supplies distributor takes orders from a portal, a sales team and EDI from hospital groups. Orders enter the ERP, go to a third-party warehouse, ship by courier and are invoiced from accounting. When a hospital queries a short delivery, the support team searches the portal by customer and date, finds the ERP order by amount, asks the warehouse for its pick record by email, and searches the courier site by delivery address. A typical query takes most of a morning. After the business adds its order number as a required reference in every downstream system, along with a simple cross-reference table, the same query takes a few minutes.

## Problem owner and why now

Ownership tends to be split: integration or IT leads own the links, while operations, finance and support carry the investigation burden. The budget owner is often the COO or CIO. Triggers include growth in integrations and APIs, which adds more systems to each transaction, as well as audit or regulatory requests for transaction histories, customer disputes, outsourcing to third-party logistics or payment providers, and incidents where nobody could tell where a batch of transactions went.

## Economic consequence

The main cost is investigation time across several teams, often senior staff, for every query, dispute and audit sample. Slow answers lengthen disputes and delay payment. When tracing is too hard, businesses may write off amounts or issue credits rather than investigate. Integration incidents take longer to resolve, because IT cannot quickly find the affected transactions or prove which system failed. Count your own figures: investigations per month, average time per investigation, and credits issued without full investigation.

## Root cause

- **Each system creates its own identifier,** and the originating reference is not stored downstream.
- **No cross-reference record.** Nothing keeps a map of how one transaction's IDs relate.
- **Integrations drop context.** Messages carry the data needed to act, but not the references needed to trace.
- **Logs are short-lived and scattered,** held by different vendors with different retention.
- **Third parties are outside the design.** Couriers, warehouses and payment providers are not asked to return the business reference.

## Practical intervention

1. **Choose a business reference for each transaction type,** usually the originating order, claim or case number, and decide which system issues it.
2. **Carry it everywhere.** Require the reference as a field in every downstream system and every integration message, including in contracts and specifications with third parties.
3. **Keep a cross-reference record** that maps the business reference to each system's own IDs as they are created, and make it searchable by support and finance.
4. **Add technical tracing** using standard trace context, and set tracking IDs and tracked properties on integration runs, so IT can link business references to technical events.
5. **Record key milestones** such as received, confirmed, shipped, delivered, invoiced and paid against the business reference, so a timeline can be shown without opening every system.
6. **Protect personal information** by keeping it out of trace metadata and logs, and using references rather than names or ID numbers.

Agreeing which system owns each identifier is part of the wider decision covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/). When something does go wrong across vendors, a shared reference also shortens the process described in [why integration incidents require several vendors to diagnose](/discovery/why-integration-incidents-require-several-vendors-to-diagnose/).

## Trade-offs

Adding a reference field to every system and integration is detailed work, and some packaged systems or third parties make it awkward. A cross-reference store is one more component to own. Full technical tracing has storage and setup costs, and sampling reduces both cost and completeness. Start with the transaction types that generate the most queries.

## Diagnostic questions

- Given one order number, can someone find every related record in every system without asking a colleague?
- Do your courier, warehouse and payment providers return your reference?
- How long does a typical customer or audit query take to investigate?
- Can IT link a failed integration run to the business transactions it affected?
- Is any personal information travelling in logs or trace data?

## What good looks like

Every transaction carries one business reference through every system and partner. A single search shows its records, milestones and current state. IT can move from a business reference to the technical trace and back. Investigations take minutes, audit samples are produced from records, and disputes are settled on evidence.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) service adds business references, cross-reference records and tracing to existing integrations. Our [digital systems audit](/services/digital-systems-audit/) maps how a transaction moves today and where the thread breaks.

*Method note:* the standards and platform features named are examples; equivalent capabilities exist in most integration platforms and monitoring tools.
