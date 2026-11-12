---
hub: patterns
record_id: PAT-086
slug: why-a-single-customer-question-gets-passed-between-three-departments
title: Why One Customer Question Has to Travel Through Three Departments
description: A customer asks one thing and the answer is split between sales, accounts and operations. Here is why the question travels, what it costs, and how to shorten the route.
lead: A customer asks one thing and the answer is split between sales, accounts and operations. Here is why the question travels, what it costs, and how to shorten the route.
category: Customer Experience & Service
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Customer Experience & Service
pattern_family: Customer Experience & Service
observable_condition: A customer's single question is forwarded from the person who received it to sales, then accounts, then operations before anyone can reply, and the customer waits or asks again.
primary_identification: Fragmented ownership of the answer: the facts are split across departments and no one role is responsible for assembling them into one reply.
commercial_value_dimensions: Response time, customer trust, staff time, repeat contact volume and retention
sources:
  - Welcome to Dynamics 365 Customer Service | https://learn.microsoft.com/en-us/dynamics365/customer-service/overview
  - Shared mailboxes in Exchange Online | https://learn.microsoft.com/en-us/exchange/collaboration-exo/shared-mailboxes
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
related:
  - Why Leave Requests Still Travel Through Messages and Spreadsheets | /patterns/why-leave-requests-are-still-handled-through-chat-messages-and-spreadsheets/
  - The Hidden Cost of Asking Customers for the Same Information Twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
  - When Customers Can See the Gaps Between Your Systems | /patterns/when-customers-can-see-the-gaps-between-your-systems/
summary: A customer asks one thing and the answer is split between sales, accounts and operations. Here is why the question travels, what it costs, and how to shorten the route.
layout: plain
---
## Observable condition

A customer sends a short message: "Has my order shipped, and will the invoice match the quote?" It sounds like one question. Inside the business it is three. The first is about delivery and belongs to operations. The second is about the price agreed, which sits with whoever made the sale. The third is about what has been billed, and only accounts can see that.

The person who received the message does not hold any of the three answers. So they forward it. Operations replies to them, not to the customer. Sales adds a note about a discount. Accounts says the invoice has not been raised yet. Somebody then stitches the pieces into a reply, usually the next day, and by then the customer has already phoned.

An illustrative example: a Durban commercial cleaning-supplies distributor with a small sales team, a warehouse and a part-time bookkeeper. Every query that touches more than one of them starts in the sales inbox and ends with the sales manager acting as a human switchboard.

## Realisation

The realisation is that the slow reply is rarely about effort. Each person in the chain responded quickly to their own part. The delay is built into the route: the question has to be carried between people, and each hand-over adds a wait, a chance of being lost and a chance of being misread.

It also reveals a quieter fact. The business has no single place where a question about a customer can be answered from start to finish. [Microsoft's overview of its customer service application](https://learn.microsoft.com/en-us/dynamics365/customer-service/overview) describes bringing customer interactions and the related records into one workspace so an agent can resolve a case with the context in front of them. Whether or not a business buys such a product, the idea is the useful part: the person answering should be able to see the whole customer, not one department's slice of them.

**Realisation prompt:** take the last five customer questions that needed more than one department. How many people touched each one before the customer got a reply?

## Identification

This is a pattern of fragmented ownership. The visible symptom is the forwarded email with "can you check this?" at the top. The common assumption is that the front-line person should know more, or that the other departments should reply faster. The structural cause is that the facts needed for one answer are held in three places, and the front-line person has access to none of them.

It is related to, but different from, the situation described in [why customers keep emailing to ask for an update](/patterns/why-customers-keep-emailing-to-ask-for-an-update/), which looks at what customers do when they hear nothing. This pattern looks at what happens inside the business during the silence.

## Diagnosis

- **The question has no owner.** The first recipient owns it only until they forward it. After that, everyone assumes someone else is replying to the customer.
- **Each department keeps its own record.** Sales has the quote in an email thread, operations has the pick list, accounts has the ledger. None links to the others by a shared reference, so each person must ask the next to look.
- **Shared inboxes hide who is dealing with what.** A shared mailbox lets several people read and send from one address, which [Microsoft's Exchange documentation](https://learn.microsoft.com/en-us/exchange/collaboration-exo/shared-mailboxes) describes. Without a clear convention for claiming a message, two people reply, or nobody does.
- **Replies go back to the forwarder, not the customer.** The relay adds a step every time because each department answers the colleague, not the person who asked.
- **Context is retyped.** At each hand-over the sender summarises the history from memory, and details such as the agreed delivery date or the discount disappear.
- **No one measures the whole journey.** Each department can show it replied within a day. Nobody can show that the customer waited four.

## Commercial impact

The commercial value at stake is response time, customer confidence, staff capacity and repeat business.

The most visible cost is the waiting customer. A buyer who needs to know a delivery date before they can tell their own client is under pressure of their own. Delay on a routine question teaches them that the business is hard to deal with, and they begin to keep a second supplier warm.

The second cost is repeat contact. Each unanswered or half-answered question produces a chaser, and the chaser starts the relay again. The Impact note [customers waiting while staff search several systems](/impact/customers-waiting-staff-search-several-systems-service-payroll-cost/) describes how that search time accumulates into real payroll cost.

The third cost falls on the people in the middle. Whoever receives the question first is interrupted three or four times to chase it. Their own work slides, and the best, most responsive employee often becomes the switchboard because they are the one who bothers to follow up.

The fourth is the risk of inconsistent answers. When three people each contribute a piece, the pieces occasionally disagree. The Moment [the customer who gets a different answer from every person](/moments/the-customer-who-gets-a-different-answer-from-every-person/) captures how that feels from the customer's side.

## Common misidentification

The usual response is to ask the departments to reply faster, or to put a deadline on internal queries. That treats each hand-over as the problem when the number of hand-overs is the problem. Another is to buy a customer service tool and expect it to fix things, which fails if the underlying facts still sit in three unconnected places. A third is to make the sales manager the permanent point of contact, which is quick, but turns one person into the bottleneck.

## Possibility

In a better state, a question has one named owner from the moment it arrives, and that owner can see the quote, the order status and the invoice status without asking anyone. The three departments still hold their own information, but it is linked by one reference, such as the order number, and visible to whoever answers.

Many questions then need no relay at all. For the rest, the owner asks a specific colleague a specific question, with the context attached, and the reply returns to the owner, who answers the customer once. Microsoft's documentation on cloud flows in Power Automate describes automating steps such as notifying a person or updating a record when something changes, which is the kind of mechanism that can move status information to where it is needed. Treat it as an option to evaluate, not a starting point.

The Insight [one customer record, three teams, three useful views](/insights/one-customer-record-three-teams-three-useful-views/) explains how departments can keep their own views while sharing the same underlying record.

## Intervention

Start with the questions, not the tools. A short audit usually shows that a handful of question types cause most of the relays.

## Practical next actions

1. **Log the last 20 multi-department questions.** Note what was asked, who received it, who was consulted and how long the customer waited. Group them into types, such as delivery date, price check and invoice status.
2. **Name an owner for each type.** One role, not one department, is responsible for the final reply to the customer, whichever colleagues contribute.
3. **Agree one reference.** Use the order or quote number on every internal message so any department can find the record without asking for a summary.
4. **Make the facts visible to the owner.** Give the owner read access to order status and invoice status, even if only as a simple shared view, so the common questions are answered on the spot.
5. **Set a claim rule for shared inboxes.** Decide how a person marks a message as theirs, so there are no duplicate or missing replies.
6. **Measure the whole journey.** Track time from the customer's first message to the customer's reply, not time within each department.

## Diagnostic questions

- Who owns the reply when a question touches sales, accounts and operations at once?
- How many people see a typical cross-department question before the customer does?
- Can the person who first receives a question see order and invoice status without asking?
- Which three question types would disappear if that person could see the facts directly?
- Does anyone measure how long the customer waited, or only how long each department took?

## Bottom line

When one question needs three departments, the delay is rarely a people problem. It is the cost of facts being held apart from the person who has to answer. Naming an owner for the reply and making the essential facts visible to that owner removes most of the relay, and it does so without asking anyone to work harder.
