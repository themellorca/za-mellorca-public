---
hub: moments
record_id: STORY-ANGLE-000129
slug: when-ordering-supplies-takes-five-emails
title: When Ordering Supplies Takes Five Emails
description: Toner, gloves, a replacement drill bit. Ordering something ordinary can take a request, a quote, an approval, a reminder and a query about delivery, all by email. What that friction takes from people, and what a simple, visible request route gives back.
lead: Toner, gloves, a replacement drill bit. Ordering something ordinary can take a request, a quote, an approval, a reminder and a query about delivery, all by email. What that friction takes from people, and what a simple, visible request route gives back.
category: Relief from Friction
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Relief from Friction
thematic_domain: relief_from_friction
human_situation: An employee who needs an ordinary item for their work, such as consumables or a replacement part, sends and chases a chain of emails to request, quote, approve, order and confirm delivery, while the work that needs the item waits.
human_dividend: Time and attention: routine items requested in one step through a visible route, with no need to remember, chase or re-explain the request.
trade_off: Purchasing controls prevent waste and fraud; a formal request route can feel bureaucratic if over-designed; catalogues limit choice; a new system needs upkeep and someone to maintain supplier lists and prices.
epistemic_state: HYPOTHESISED: the time and attention cost of email-based ordering for individual requesters is inferred from procurement process guidance and operational reasoning, not measured in South African businesses.
sources:
  - What Is Procure To Pay (P2P)? - IBM | https://www.ibm.com/think/topics/procure-to-pay
  - Raise purchase requisitions overview - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/source-to-pay-raise-purchase-requisitions-overview
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
related:
  - The Relief of a Password You Don't Have to Reset | /moments/the-relief-of-a-password-you-dont-have-to-reset/
  - Why Teams Stop Suggesting Improvements | /moments/why-teams-stop-suggesting-improvements/
  - The Evening Spent Chasing Signatures | /moments/the-evening-spent-chasing-signatures/
summary: Toner, gloves, a replacement drill bit. Ordering something ordinary can take a request, a quote, an approval, a reminder and a query about delivery, all by email. What that friction takes from people, and what a simple, visible request route gives back.
layout: plain
---
The workshop has run out of cutting discs. The technician who noticed sends an email to the office manager. The office manager asks the usual supplier for a quote. The quote arrives two days later and is forwarded to the owner for approval. The owner, travelling, replies on Friday. The office manager places the order. On Tuesday the technician writes again to ask whether it has been ordered and when it will arrive.

Five emails, three people and a week, for an item that costs a few hundred rand and is bought every month. Meanwhile, the technician has borrowed discs from another bay, or put a job aside.

Nothing in this sequence is unreasonable on its own. Each step exists for a reason. Together, they turn an ordinary need into a small administrative project, carried mostly in the heads and inboxes of the people involved.

## What a purchase is supposed to look like

IBM's explanation of the procure-to-pay process sets out the standard sequence: identify a need, create a requisition for approval, source a supplier, issue a purchase order, receive and inspect the goods, match the invoice and pay. It notes that standardising and automating these steps reduces the time spent creating orders and matching invoices, reduces errors and gives visibility of commitments.

Microsoft's guidance on purchase requisitions describes the requisition as the formal first step in the process, giving control, budget visibility and an audit trail. It also notes that requisitions are not mandatory for every organisation, and that a poorly defined requisition process leads to inefficiency, errors and delays. Purchasing policies can define which catalogues and categories people may order from, and which suppliers are preferred.

Neither source is about small South African businesses specifically, and few small firms need the full apparatus of a large procurement system. But the underlying steps are the same whether they happen in a dedicated system or in an inbox. The difference is whether anyone, other than the people writing the emails, can see where a request is.

## Why ordinary orders become email chains

Consider an illustrative case: a Pietermaritzburg vehicle repair business with about twenty staff. There is no agreed way to request supplies. Some people email the office manager, some tell her in passing, and some message the owner directly. Every purchase above a small amount needs the owner's agreement, regardless of whether it is a routine consumable or an unusual tool.

The friction comes from a few ordinary causes:

- **No single place to ask.** Requests arrive by email, chat and conversation, so some are lost and all must be remembered.
- **Routine and unusual items are treated the same.** A repeat order of gloves goes through the same approval as a new piece of equipment.
- **No list of standard items or suppliers.** Every order starts with a quote, even for items bought monthly at a known price.
- **No visible status.** The person who asked cannot see whether the request was approved, ordered or delivered, so they ask again.

The operational consequences are covered in [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/) and [the pain of processing routine requests through email chains](/impact/the-pain-of-processing-routine-requests-through-email-chains/). A single approval can delay much more than the item itself, as described in [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/).

## The human tax: time and attention

For the person who needs the item, the time cost is not mostly in writing the emails. It is in waiting, checking and working around the gap. They may delay a job, borrow from a colleague, or make a personal trip to a hardware store to keep work moving.

The attention cost is the part people rarely mention. Once a request is sent into an email chain, someone must remember that it is open. The technician remembers that discs are coming. The office manager remembers which quotes are awaiting approval. The owner remembers, or forgets, the email on Friday. Each of them carries a small open loop until the item arrives.

It would be wrong to say that everyone finds this stressful. For some people a few emails a week are a minor background task. For others, especially office managers who handle every request in the business, the open loops accumulate into a constant low-level load. That difference matters, and it should not be flattened into a single claim about how staff feel.

There is also a quieter cost in how the request reflects on the person making it. Having to justify, chase and re-explain a need for something as ordinary as cutting discs can make a skilled technician feel more like a petitioner than a professional. Some people shrug this off; others start avoiding requests altogether and make do with worn tools. Neither outcome is visible in any report, but both shape the working day.

## What could change

The answer for a small business is usually not a large procurement system. It is a simpler, visible route.

1. **One place to request.** A simple form or a request feature in the existing accounting or job system, so that every request is captured once and can be seen by the person who asked.
2. **A standard list for routine items.** Consumables bought every month can sit on a short list with an agreed supplier and price, so no quote is needed.
3. **Proportionate approval.** Routine items within an agreed monthly amount can be ordered without individual approval, with a review afterwards. Unusual or larger purchases still go to the owner.
4. **Delegation when approvers are away.** Microsoft's documentation for its small-business accounting system describes delegating approval requests to a substitute and sending reminders for overdue approvals. Even without such a system, naming a stand-in approver removes the Friday bottleneck.
5. **Visible status.** Requested, approved, ordered, delivered. Four words that remove most of the chasing.

In the illustrative repair business, a short standard list and a monthly allowance for consumables might mean that the technician's request for cutting discs becomes an order on the same day, with no emails at all.

The approval side of this is discussed from the employee's point of view in [when the system decides what you can do today](/moments/when-the-system-decides-what-you-can-do-today/).

## Trade-offs

- **Controls exist for reasons.** Purchasing checks prevent waste, duplicate orders and fraud. A monthly allowance without review can quietly become a leak.
- **Process can become bureaucracy.** A form that asks for too much information turns five emails into one longer form, and people will route around it.
- **Standard lists limit choice.** A preferred supplier may not always have the best price or the right item. The list needs revisiting.
- **Someone must own the list.** Prices change and items are discontinued. Without upkeep, the standard list becomes another source of errors.

## Why it matters

For the business, a clear request route means fewer stalled jobs, fewer emergency purchases and better visibility of what is being spent. For the people involved, the change is smaller and more personal. The technician who needs discs asks once and can see when they will arrive. The office manager no longer carries every open request in memory. The owner is not asked to approve gloves from an airport.

That is the dividend: not a sophisticated system, but the removal of a small, repeated friction that consumes more time and attention than its size suggests. Ordering something ordinary should feel ordinary.
