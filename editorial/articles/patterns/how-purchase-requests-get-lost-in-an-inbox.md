---
hub: patterns
record_id: PAT-427
slug: how-purchase-requests-get-lost-in-an-inbox
title: When Procurement Starts With an Email Request
description: When every purchase begins as a free-text message, the inbox quietly becomes the queue, the approval trail and the filing system.
lead: When every purchase begins as a free-text message, the inbox quietly becomes the queue, the approval trail and the filing system.
category: Procurement, Suppliers & Inventory
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Procurement, Suppliers & Inventory
pattern_family: Procurement, Suppliers & Inventory
observable_condition: Purchase requests begin as emails or messages that are interpreted, forwarded and retyped before an order exists.
primary_identification: Unstructured intake and status-visibility problem
commercial_value_dimensions: speed, capacity, cash flow, risk
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Use SharePoint and Power Automate to build workflows - Power Automate | https://learn.microsoft.com/en-us/power-automate/sharepoint-overview
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - When One Missing Item Stops a Larger Process | /patterns/when-one-missing-item-stops-a-larger-process/
  - Why Staff Have to Chase Stock Availability | /patterns/why-staff-end-up-phoning-around-to-find-out-whats-in-stock/
  - The Hidden Cost of Signing In to Every System Separately | /patterns/the-hidden-cost-of-signing-in-to-every-system-separately/
summary: When every purchase begins as a free-text message, the inbox quietly becomes the queue, the approval trail and the filing system.
layout: plain
---
A workshop supervisor needs a replacement bearing before Thursday. He writes a short email to the office, copies in the finance clerk "for awareness" and goes back to the floor. By Wednesday afternoon nobody can say whether the order was placed, whether the manager saw it, or which of three suppliers was asked for a price. The bearing arrives on Friday, after the machine has been idle for two shifts.

Nothing in that story involved bad intent. It involved an inbox doing a job it was never designed to do.

## The condition: buying starts as a message

In many small and mid-sized South African businesses, the first step in any purchase is a sentence typed into an email, a WhatsApp message or a hallway conversation. Someone then reads it, decides what it means, forwards it, asks a follow-up question, and eventually creates a purchase order in the accounting system. The request exists in several places at once, and the one place where everybody could see it, a shared record of open requests, does not exist.

You can recognise the condition from a handful of everyday signs:

- Requests arrive with different levels of detail: sometimes a quantity and a supplier, sometimes only "we need more of the usual".
- The buyer replies to ask what was meant, and the answer arrives in a separate thread.
- Approval is a forwarded email, or a "yes" in a chat, that has to be found again at month end.
- Requesters ask "did you get my email?" more often than they ask about price or delivery.
- The person who processes orders keeps a personal folder, or a spreadsheet, to remember what is still open.

## The realisation: the inbox is acting as a database

Email is excellent at carrying a message from one person to another. It is poor at holding the state of a piece of work. An inbox cannot tell you how many requests are open, which are waiting for approval, how long the oldest has been waiting, or which supplier has been asked to quote. All of that lives in someone's memory, and the person who holds it becomes the process.

That is the useful shift in perspective. The delay is rarely caused by the buyer being slow. It is caused by every request having to be interpreted, completed and tracked by a person before anything can move. The inbox is acting as intake form, queue, approval trail and filing system at the same time, and it does none of those jobs on purpose.

## Identification: an unstructured intake problem

The class of issue here is an unstructured intake and status-visibility problem. The symptom is slow, inconsistent purchasing. A common assumption is that the buyer needs to work faster or that staff need reminding to send requests earlier. The structural cause is different: the request enters the business as free text, so the business cannot route it, validate it or measure it without human effort.

It helps to separate three things that tend to be blurred together:

1. **The visible symptom:** orders are late, urgent requests keep appearing, and people chase each other.
2. **The common assumption:** people are disorganised, or approvals are being deliberately slow.
3. **The structural cause:** there is no single defined place and shape for a purchase request, so every request starts incomplete.

## Diagnosis: where the time actually goes

An illustrative example, not a client case. A small distribution business has four people who can raise purchase requests and one buyer. Each request is emailed to the buyer. In a typical week the buyer spends part of every request establishing what is missing: the cost centre, the preferred supplier, the quantity, the delivery date. Then the request is forwarded to a director for approval. The director answers from a phone, often with a one-word reply. The buyer finally keys the order into the accounting package, and the original email is filed or lost.

The effort is not in the buying. It is in the clarification, the forwarding, the waiting and the retyping. A useful way to see this is to list the touches a single request receives from first message to supplier confirmation. Each one is a point where information can be lost or delayed, and each one exists only because the first message had no structure.

Three mechanisms usually combine:

- **Information:** the request does not carry the fields a purchase needs, so the buyer has to ask for them.
- **Process:** approval limits exist in someone's head or in a policy document, but are not applied when the request is made, so every request takes the same route regardless of value or risk.
- **Systems:** the email system and the accounting system do not share any state, so the same details are typed again, and the approval evidence sits in a different place from the order.

## The commercial value at stake

The value of fixing this is mostly speed, capacity and control. Speed, because requests that reach the buyer complete and correctly routed can be actioned the same day. Capacity, because a buyer who is not acting as a clarification desk can compare suppliers, negotiate and plan ahead. Control, because an approval that is recorded against the order is easier to stand behind when the books are reviewed.

There is also a working-capital angle. If you cannot see open requests, you cannot see commitments you are about to make, and you cannot easily spot a duplicate order or a supplier you are repeatedly ordering from in small, urgent lots. The size of any saving will differ from business to business; the first step is simply being able to see it. Our related articles on [why buying something internally takes so long](/patterns/why-does-buying-something-internally-take-so-long/) and [why teams keep chasing sign-off](/patterns/why-teams-keep-chasing-sign-off/) cover the downstream effects in more detail.

## A common misidentification

Many businesses respond by buying a full procurement suite. For a team of five requesters that often adds screens and training without solving the intake problem. The first question is narrower: what fields does a request need, and where should it land so everyone can see its status? Our article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) explains why the order in which you fix things matters.

## Possibility: a request that arrives complete

The alternative is not exotic. A purchase request is captured through a simple structured form or a list, with required fields for item, quantity, need-by date, cost centre and, where relevant, a suggested supplier. The request is written to a shared list, so its status is visible to the requester, the buyer and the approver without anyone asking. The approval step is then triggered automatically and routed according to the value or category of the purchase.

Microsoft's documentation shows how ordinary this capability has become. Its description of Power Automate approvals explains that an approval can be started from a flow, that approvers are notified and can respond from Outlook or Teams, and that responses are stored and form a history. It also describes sequential approvals, where each approver responds in turn, and options where any single approver or all approvers must respond. Its overview of SharePoint integration describes flows that start when an item is created in a list. Together, these describe the building blocks of a request list with routing and a recorded decision.

## Intervention: sequence matters

If this condition is familiar, the order of work is usually more important than the choice of tool.

1. **Write down what a complete request looks like.** Review a month of emailed requests and list what the buyer had to ask for. Those questions are your required fields.
2. **Define the approval rules once.** Decide which purchases need whose sign-off, by value and category, and write it as a rule that can be applied automatically rather than as a convention.
3. **Give requests one home.** A shared list that shows every open request and its status removes the need to ask "did you get my email?".
4. **Connect the decision to the order.** The approval should be stored with the request and passed through to the accounting system, so that nobody retypes the details or hunts for the evidence later.
5. **Measure the age of open requests.** A simple view of how long requests have been waiting will show where the delay sits before any more automation is added.

Process mining, which Microsoft describes as a way to extract event data from systems of record and visualise how processes actually run, can help larger operations find the real routes requests take. For most smaller businesses, a month of tracked requests in a list will reveal the same story.

## Practical diagnostic questions

- If the person who normally processes orders were away for a week, could someone else see every open request?
- How many of last month's requests needed a clarifying question before they could be ordered?
- Can you find the approval for a purchase made six months ago in under two minutes?
- When two people need the same item, does the business find out before or after two orders are placed?

## The bottom line

When procurement starts with an email, the business has not chosen a process; it has inherited one. Treating the request as a small piece of structured data, rather than a message to be interpreted, gives the buyer time back and gives the business a view of what it is about to commit to. If you want to go further, our piece on [how to choose the first workflow to automate](/insights/how-to-choose-the-first-workflow-to-automate/) is a sensible next read.
