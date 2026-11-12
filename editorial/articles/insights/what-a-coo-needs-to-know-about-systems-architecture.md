---
hub: insights
record_id: INS-478
slug: what-a-coo-needs-to-know-about-systems-architecture
title: What Should a COO Understand About Systems Architecture?
description: Systems architecture shapes how fast work moves and how painful change is. Five ideas and six questions that let an operations leader take part in architecture decisions without becoming technical.
lead: Systems architecture shapes how fast work moves and how painful change is. Five ideas and six questions that let an operations leader take part in architecture decisions without becoming technical.
category: Systems Architecture
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Systems Architecture
sources:
  - Maintain an architecture decision record (ADR) - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Event-Driven Architecture Style - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven
related:
  - How to Design a Business Application Architecture | /insights/designing-the-architecture-behind-a-business-application/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - What Information Must Move With the Work? | /insights/what-information-must-move-with-the-work/
summary: Systems architecture shapes how fast work moves and how painful change is. Five ideas and six questions that let an operations leader take part in architecture decisions without becoming technical.
layout: plain
---
A chief operating officer does not need to read code, draw network diagrams or choose between database products. Yet most of the decisions a COO makes about how the business runs, such as how fast an order moves from quote to delivery, how many hands touch a customer record, or how painful it is to add a new branch, are shaped by systems architecture. The architecture is already there, whether anyone designed it or not. The only question is whether the person accountable for operations understands it well enough to ask the right questions.

This article sets out what a COO should understand, framed in operational terms rather than technical ones. It is not a primer for IT staff. It is a short list of ideas that make conversations with technical colleagues, vendors and advisers more productive. For the equivalent view from the top of the organisation, see [what should a CEO understand about digital operations](/insights/what-should-a-ceo-understand-about-digital-operations/).

## Architecture is a set of decisions, not a diagram

People often picture architecture as a drawing of boxes and arrows. The drawing is a record. The architecture itself is the accumulation of decisions: which system holds customer records, how orders reach the warehouse, which tool produces the figures the board sees, how the finance system learns that a delivery happened. Microsoft's guidance on architecture decision records puts it directly: the architecture is the accumulation of its decisions, so a log of those decisions is effectively a record of how and why the system came to be its current shape.

That framing matters to a COO because decisions can be questioned, owned and revisited, whereas a tangle cannot. Most operational frustration comes from decisions that were made implicitly, by whoever was in a hurry, and never written down.

## Five things a COO should be able to explain

### 1. Which system is the source of truth for each important thing

For every major business object, such as customer, product, price, order, invoice and employee, there should be one system whose version wins when two disagree. Where there is no agreed answer, staff spend their days reconciling. A COO should be able to say, for each object, where the master copy lives and who is accountable for its accuracy. The practical approach is described in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/), and the ownership question in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

### 2. How information moves between systems

Every connection between two systems is a design choice with consequences. Some are direct links built for a single purpose. Some pass through a shared exchange. Some are people copying figures from screen to screen. A COO does not need the technical detail, but should know how many connections exist, which are automated, which are manual, and which carry money or customer commitments. The trade-offs between direct links and more structured approaches are covered in [point-to-point integrations vs a more maintainable integration architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/).

It is worth knowing that there are two broad styles of communication between systems. In a request-and-response style, one system asks another and waits. In an event-driven style, one system announces that something happened and others react in their own time. Microsoft's description of the event-driven style lists benefits such as decoupling and the ability to add new consumers without changing the producer. It is equally frank about the costs: data across services is not immediately consistent, errors are harder to trace, and the approach may not suit workloads that need strong consistency or teams without experience of operating asynchronous systems. The operational lesson is that "real time" and "event driven" are not free upgrades. They shift effort from one place to another.

### 3. Where the boundaries between systems sit

Boundaries decide what can change independently. If the quoting tool, the stock system and the accounts package are tightly knotted together, a change to one risks the others. If each has a clear boundary and a defined way of talking to its neighbours, you can replace or upgrade one without a business-wide project. Microsoft's anti-corruption layer pattern illustrates the idea: a translating layer between two systems that do not share the same data model, so that the older system does not dictate the design of the newer one. The pattern comes with a cost, since it adds a component to run and monitor, but it shows how deliberate boundaries make change safer.

### 4. What would happen if a component failed

Operations lives with failure. A COO should be able to answer, for each critical process, what happens when a system is slow, down or sending wrong data. Does work wait safely, or is it lost? Who is told? What do staff do in the meantime? These questions are rarely asked in the buying process and almost always asked during an outage. The design principle behind [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) applies at the architecture level as well.

### 5. Who decides when the architecture changes

Without a named decision-maker, architecture changes by accumulation. Each department buys what suits it, each vendor proposes what fits its product, and the whole drifts. A COO should know who can approve a new system, a new connection or a change to a master record, and what they are expected to consider. The risk of letting suppliers set the shape of the whole is discussed in [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/).

## Questions worth asking

You do not need to become technical to test the state of your architecture. These questions work in a meeting with the IT lead, an external adviser or a software supplier.

- If we replaced this system, what else would have to change?
- Where does this information come from, and who can overwrite it?
- Which of our systems talk to each other automatically, and which rely on people?
- What breaks if this connection stops for a day?
- Which important decisions about our systems have been written down, and where?
- Who owns each of our critical systems, by name?

A confident, plain-language answer is a good sign. A long pause, or an answer that begins "it depends who you ask", points to an area that deserves attention.

## Keep a decision log

The single most practical habit is a short log of significant architecture decisions. Microsoft's guidance suggests that each entry should state the problem and its context, the options considered, the decision and its trade-offs, and a status such as proposed, accepted or superseded. It also recommends that accepted records are not edited after the fact: if a decision changes, a new record supersedes the old one and the two are linked, preserving the history of the thinking. The guidance adds that a decision that is made but never recorded will likely be forgotten, leading to repeated debates or changes that unknowingly contradict the original intent.

For a mid-sized South African business, this need not be elaborate. A shared document with a half-page entry per decision is enough. The test of its value is whether a new operations manager, a year from now, could read it and understand why the systems are arranged as they are.

## An illustrative example

Imagine a hypothetical Pretoria manufacturer whose COO is asked to approve a new customer-portal project. The proposal looks sensible, but the COO asks the five questions above. It emerges that customer records live in three systems with no agreed master, that order status reaches the portal through a nightly file transfer set up by a contractor who has since left, and that nobody has decided what the portal should do when the file fails to arrive. The COO does not reject the project. Instead, she asks that three things be settled first: which system is the master for customer data, how order updates will reach the portal and how quickly they need to, and what the portal will say when the data is stale. The project starts later and costs less to run, because the decisions that would have been made by accident are made on purpose.

## Where specialist help fits

None of this requires a COO to draw the architecture personally. It requires being able to ask for a clear picture and judge whether it is clear. Where the current picture does not exist, or where several competing versions do, an [architecture roadmap](/services/digital-systems-architecture-roadmap/) can set out the present arrangement, the intended direction and the order of changes, in language an operations leader can use to make decisions.
