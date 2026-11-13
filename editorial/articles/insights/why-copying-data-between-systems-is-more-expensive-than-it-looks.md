---
hub: insights
record_id: INS-128
slug: why-copying-data-between-systems-is-more-expensive-than-it-looks
title: Why copying data between systems is more expensive than it looks
description: Retyping an order looks like minutes of admin, but typing is the cheapest part. Checking, correcting, reconciling and waiting cost more. See the full cost.
lead: Retyping an order or pasting a customer's details looks like a few minutes of admin. The typing is the cheapest part. Checking, correcting, reconciling, waiting and depending on one person cost far more. A way to see the full cost of copying data, layer by layer.
category: Systems & Integration
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Systems & Integration
sources:
  - What is Data Integrity? - IBM | https://www.ibm.com/think/topics/data-integrity
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - How to map the flow of information between business systems | /insights/how-to-map-the-flow-of-information-between-business-systems/
  - How duplicate software creates duplicate work | /insights/how-duplicate-software-creates-duplicate-work/
  - How a CRM turns into an expensive address book | /insights/how-a-crm-turns-into-an-expensive-address-book/
  - How to reduce re-entry of the same information across systems | /insights/how-to-stop-the-same-information-being-typed-into-several-systems/
summary: Retyping an order or pasting a customer's details looks like a few minutes of admin. The typing is the cheapest part. Checking, correcting, reconciling, waiting and depending on one person cost far more. A way to see the full cost of copying data, layer by layer.
layout: plain
---
Ask someone how long it takes to copy an accepted quote into the accounting system as a sales order and they will probably say a few minutes. They are right about the typing. They are wrong about the cost.

Manual copying between systems is one of the most underestimated expenses in small and mid-sized businesses, because the visible part, the keying, is small and the rest is spread across other people, other days and other departments. This article breaks the cost into layers so that it can be seen, and estimated, as a whole.

## Layer 1: The keying itself

This is the part everyone counts: the minutes spent opening one system, reading a record and typing or pasting it into another. Multiplied by volume, it is often already larger than expected. Forty orders a day at three minutes each is two hours a day, every day, before anything goes wrong.

But this is the floor of the cost, not the total. A fuller method for costing repetitive work is set out in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

## Layer 2: Checking

Once people know that copying introduces mistakes, they check. Someone compares the order to the quote. Someone reviews the invoice before it is sent. Someone spot-checks the import. Checking is sensible, but it is also a direct cost of the copying, and it is usually done by more senior, more expensive people than the copying itself.

## Layer 3: Errors that get through

Checks catch some errors, not all. IBM's overview of [data integrity](https://www.ibm.com/think/topics/data-integrity) lists human error during data entry and errors introduced when data is transferred between systems among the main threats to accurate, consistent data. In practice these show up as a wrong price, a transposed account number, a missing line item or an old delivery address.

The cost of an error depends on where it is found. Caught at entry, it costs a minute. Caught when the customer queries the invoice, it costs a credit note, a reissue, a delayed payment and some goodwill. Caught after goods have been sent to the wrong address, it costs a second delivery. The further an error travels, the more people it touches.

## Layer 4: Divergence and reconciliation

Every copy is a second version of the truth, and versions drift. A customer updates their address with sales, and the change never reaches accounts. A price changes in the price list but not in the quote template. IBM describes the operational drain of [data silos](https://www.ibm.com/think/topics/data-silos) in exactly these terms: duplicate data, manual reconciliation and redundant workflows that slow the business down.

Reconciliation, the periodic work of finding and fixing those differences, is often the largest single cost of copying, and it tends to land on finance at month-end. The pattern is explored further in [the labour cost of manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/).

## Layer 5: Delay

Copying happens when someone gets to it. An order accepted on Friday afternoon may not reach the accounting system until Tuesday. During that gap the stock is not reserved, the invoice is not raised and the customer cannot be told when to expect delivery. Delay is rarely costed, but it affects cash flow, customer experience and the accuracy of every report that depends on the second system. How this builds into a constraint is covered in [how manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/).

## Layer 6: Dependence on a person

Manual transfers are usually done by one or two people who know the quirks: which field maps to which, which customers need special handling, which records to skip. When they are on leave, the copying stops or is done badly by someone else. The business has an integration; it just happens to be a person, with all the fragility that implies.

## Layer 7: Compliance and control

For personal information, every uncontrolled copy makes it harder to meet section 16 of POPIA, which requires reasonably practicable steps to ensure that personal information is [complete, accurate, not misleading and updated where necessary](https://popia.co.za/section-16-quality-of-information/). For financial information, manual steps between systems are where controls are weakest, because a person can change a value in transit without any record that it was changed.

## Putting the layers together

A simple table is often enough to make the full cost visible for one data flow:

| Layer | Question to ask | How to estimate |
| --- | --- | --- |
| Keying | How many records, how long each? | Volume multiplied by handling time |
| Checking | Who checks, and how long does it take? | Checker's time per batch or per record |
| Errors | How many errors reach customers or reports each month? | Count of credit notes, reissues and corrections, with time to fix |
| Reconciliation | How long does finance spend matching the systems? | Hours per month-end attributable to this flow |
| Delay | How long between the event and the second system knowing? | Average lag, and what it delays (invoicing, stock, reporting) |
| Dependence | What happens when the usual person is away? | Backlog and error rate during absences |
| Control | Could a value be changed in transit without trace? | A yes or no, noted as a risk |

The first row is usually the smallest. The fourth and fifth are usually the largest.

## An illustrative example

Consider a hypothetical East London packaging distributor that receives around thirty orders a day by email. A sales administrator copies each order into the accounting package to raise the invoice and reserve stock.

Keying takes roughly two minutes per order, a little over an hour a day. That is the figure management had in mind. Working through the layers showed more. The sales manager spends twenty minutes each afternoon checking the day's orders. About three orders a week contain a pricing or quantity error that reaches the customer, each needing a credit note and a reissued invoice. Orders received after three o'clock are not captured until the next day, delaying invoicing. And at month-end, the bookkeeper spends most of two days reconciling order records against stock movements.

Added together, the copying cost several times what the keying estimate suggested, and the largest parts were checking, correction and reconciliation rather than typing. This scenario is illustrative, not a client case study.

## What to do with the number

A full cost is useful because it changes which fixes look worthwhile. An integration that seemed expensive against an hour a day of keying may look cheap against the whole picture. Equally, the analysis may show that the copying feeds a step that is not needed at all, or that the real problem is that two teams edit the same information. Telling those situations apart before building anything is the subject of [when copy-and-paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/).

Start with the flows that are highest in volume or closest to money: quotes to orders, orders to invoices, timesheets to billing, new customers to accounts. The quote-to-order flow in particular is a common example, discussed in [why sales quotes have to be re-keyed before orders](/discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/).

The commercial value at stake is rarely the typist's time. It is the checking, rework, reconciliation and delay that sit behind it. Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work begins by costing those layers, so that the decision to connect two systems is made on the full number.
