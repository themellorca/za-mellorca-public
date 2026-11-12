---
hub: insights
record_id: INS-302
slug: why-work-gets-lost-between-teams
title: Why Work Gets Lost Between Teams
description: Work rarely disappears inside a team. It disappears in the space between teams, where no queue, owner or system takes responsibility for it. Why that space exists, and how to design it out.
lead: Work rarely disappears inside a team. It disappears in the space between teams, where no queue, owner or system takes responsibility for it. Why that space exists, and how to design it out.
category: Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Operations
sources:
  - Conway's Law | https://martinfowler.com/bliki/ConwaysLaw.html
  - Key concepts and practices for applying a Team Topologies approach to team-of-teams org design — Team Topologies - Organizing for fast flow | https://teamtopologies.com/key-concepts
  - The Kanban Guide - May 2025 (latest) - Kanban Guides | https://kanbanguides.org/english/
related:
  - How Much Manual Work Is Hiding Inside Your Business? | /insights/how-much-manual-work-is-hiding-inside-your-business/
  - How to Tell Whether You Have a People Problem or a Systems Problem | /insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/
  - Why Your Business Feels Harder to Run Than It Should | /insights/why-your-business-feels-harder-to-run-than-it-should/
summary: Work rarely disappears inside a team. It disappears in the space between teams, where no queue, owner or system takes responsibility for it. Why that space exists, and how to design it out.
layout: plain
---
Ask a team whether it is losing work and the answer is almost always no. Sales can show every deal in its pipeline. Operations can show every job on its board. Finance can show every invoice in its ledger. Each team's own work is tracked and, within its walls, reasonably well managed.

And yet customers wait for things nobody is working on. Requests are made and never answered. Orders are confirmed and never scheduled. The work has not disappeared inside any team. It has disappeared between them, in the space where one team believes it has passed something on and the next team does not yet know it exists.

> Every team can be doing its job well while the business as a whole is failing the customer in the gaps between them.
>

## The space between teams is usually unowned

Inside a team, work has an owner, a place where it is recorded and someone who notices when it stalls. Between teams, it typically has none of these. The sending team considers the work done once it has sent an email or changed a status. The receiving team only starts tracking once it has accepted the work. Whatever happens in between belongs to nobody.

That gap is where most cross-team problems live: the request that was sent to someone on leave, the order that was marked "ready for operations" on a status nobody in operations watches, the query forwarded to a shared mailbox that three people assume someone else is handling.

## Why the gap exists

### Systems are shaped like the organisation

Conway's Law, as Martin Fowler explains it, observes that any organisation that designs a system will produce a design that copies the organisation's communication structure. Business systems follow the same logic when they are chosen team by team. Sales picks a CRM, operations a job-management tool, finance an accounting package, support a helpdesk. Each fits its team well. The connections between them, which is where the cross-team work travels, are nobody's design responsibility and are often an email, an export or a person.

### Requests travel through side channels

When there is no agreed way for one team to ask another for something, people use whatever works: a WhatsApp message, a hallway conversation, an email to the person they know. These requests are invisible to the receiving team's system and to management. They cannot be counted, prioritised or followed up, and they are easy to forget. The pattern is common enough to have its own entry: [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/).

### Nobody owns the end-to-end outcome

Each manager owns their team's part of the process. Very often, nobody owns the whole of it, from customer request to delivered result. When that is the case, delays between teams have no one whose job it is to notice them, and each team can reasonably say the problem is somewhere else.

### Teams are measured on their own part

Sales is measured on deals closed, operations on jobs completed, finance on invoices issued. None of these measures rises when work is lost between teams, so none of them reveals it. Worse, a team under pressure to hit its own number may push work out quickly to the next team without everything that team needs, improving its own figures while making the whole process slower. This is explored in [when every department optimises its part but the whole process gets worse](/patterns/when-every-department-optimizes-its-part-but-the-whole-process-gets-worse/).

## Waiting is the real cost

Team Topologies, a widely used model for organising teams, puts the problem bluntly: nothing kills productivity faster than one team waiting on another. It also warns that organisations often focus on making individual teams efficient while ignoring the delays between them. In a small or mid-sized business, those delays show up as customers chasing, staff chasing each other and managers spending time investigating where something has got to, a problem described in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

## An illustrative example

An illustrative Gqeberha supplier of industrial spares, with about 35 staff, noticed that a growing number of customers were calling to ask why their orders had not arrived. Sales showed the orders as won. The warehouse showed no record of most of them. Finance had invoiced some.

The cause was a change in how special-order items were handled. Sales had started emailing these orders to a buyer for sourcing, instead of creating them in the stock system, because the stock system did not handle non-catalogue items well. The buyer worked through them from her inbox. When she was busy or away, orders waited, and nobody else could see them. Sales thought the orders were with procurement. Procurement had no queue. The warehouse had never heard of them.

The fix was not more effort from the buyer. Special orders were created as records in the stock system with a "sourcing" status, owned by procurement and visible to sales, and anything in that status for more than three working days appeared on a daily exceptions list reviewed by the operations manager.

## How to design the gap out

### 1. Make the cross-team flow one piece of work

The Kanban Guide asks teams to define what a work item is, when it starts and finishes, and the states it passes through, and to make that workflow transparent. Apply this to the whole cross-team journey rather than each team's part of it. An order, a case or a request should be one item with one record, from the moment it is created until the customer has the result, even as it moves between teams.

### 2. Give the in-between states an owner

States such as "awaiting acceptance by operations" or "waiting for finance approval" are where work is most likely to be lost. Each should have a named owner and a time limit. Sending is not the end of the sender's responsibility until the receiver has accepted.

### 3. Agree how teams ask each other for things

Team Topologies describes deliberate interaction modes between teams, such as close collaboration for a defined period, or one team providing something "as a service" that another consumes with minimal interaction. Small businesses do not need the vocabulary, but the principle helps: decide how each team should request work from each other team, and route those requests to a queue that can be seen, rather than to individuals.

### 4. Name an end-to-end owner

For each important cross-team process, such as order to cash or enquiry to delivery, name one person responsible for the whole flow. They do not do every step. They watch the gaps, review stuck items and fix the rules when work keeps getting lost in the same place.

### 5. Measure the whole journey

Add at least one end-to-end measure, such as the time from order to delivery, and one measure of the gaps, such as the number of items waiting for acceptance by another team. These are the numbers that reveal lost work.

## Warning signs

- Customers are the first to notice that something has not happened.
- Staff regularly ask "who has this?" and nobody is sure.
- Requests between teams are made mostly by email or chat to individuals.
- Each team's report looks healthy while customer complaints rise.
- Good leads, orders or cases go quiet after a transfer, as in [why good leads disappear between marketing and sales](/patterns/why-good-leads-disappear-between-marketing-and-sales/).

## Trade-offs

Making cross-team work visible asks teams to record work they previously passed on informally, and it exposes delays that were previously hidden. That can feel like extra administration and, at first, like blame. The aim should be explicit from the start: the gaps are a design problem, not a performance problem, and the point of seeing them is to fix the design. The individual handoff, the moment of transfer itself, still needs its own care, as discussed in [broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/).
