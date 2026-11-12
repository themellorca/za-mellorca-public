---
hub: insights
record_id: INS-404
slug: designing-the-architecture-behind-a-business-application
title: How to Design a Business Application Architecture
description: Business application architecture is the plan for how a system's parts, data and connections fit together. How a non-technical leader can steer it: capabilities, data ownership, layers, messages and change.
lead: Business application architecture is the plan for how a system's parts, data and connections fit together. How a non-technical leader can steer it: capabilities, data ownership, layers, messages and change.
category: Systems Architecture
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Systems Architecture
sources:
  - Architecture Styles - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/
  - Asynchronous Messaging Options - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging
  - Publisher-Subscriber Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber
related:
  - What Should a COO Understand About Systems Architecture? | /insights/what-a-coo-needs-to-know-about-systems-architecture/
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
summary: Business application architecture is the plan for how a system's parts, data and connections fit together. How a non-technical leader can steer it: capabilities, data ownership, layers, messages and change.
layout: plain
---
When a business commissions an application, whether a custom-built order system, a heavily configured platform or a set of connected tools, someone eventually says, "We need to get the architecture right." The phrase tends to end the conversation for non-technical people. It sounds like something for developers and consultants, a matter of diagrams and acronyms that the business can only approve. That is a mistake. Architecture is a set of decisions about how the parts of a system fit together, and many of those decisions are business decisions: what the system is for, who owns which information, what must never fail, and what must be easy to change.

This article sets out a sequence a business leader can follow to design, or review, a business application architecture, with enough vocabulary to ask good questions.

## What architecture actually is

Microsoft's Azure Architecture Center describes an architecture style as a family of architectures that share specific characteristics, and notes that styles do not require particular technologies. It also says that some technologies are better suited to some styles. That framing is useful. The architecture is the shape of the solution: its layers, its parts and how they communicate. The products come second. A business that chooses products first inherits a shape it never chose, a risk discussed in [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/).

## Step 1: Start with business capabilities

List what the application must let the business do, in plain verbs: take an order, reserve stock, issue an invoice, record a payment, handle a return, report to SARS. Group them into capabilities, and for each note who uses it, how often, and how bad it is if it is unavailable for an hour. This list is the foundation. Every later decision should trace back to one of these capabilities, and anything that does not can be questioned. If you are unsure which systems already support these capabilities, [how to identify the systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/) offers a way to find out.

## Step 2: Decide who owns each piece of data

For each important kind of information, such as customers, products, prices, orders and payments, decide which part of the application is the authoritative source, and which parts merely use copies. Most architectural mess is data with two owners. The method is covered in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/). Include the legal angle here: customer and employee data is personal information under the Protection of Personal Information Act, so decide where it lives, who may see it and how it will be deleted.

## Step 3: Choose a basic shape

Here the vocabulary helps. Microsoft's guide to architecture styles describes several common ones. An N-tier style divides an application into layers, typically presentation, business logic and data access, where each layer calls only those beneath it. The guide says this suits migrating existing applications that are already layered, though the horizontal layering can make it harder to change one part without affecting others. A web-queue-worker style separates the user-facing front end from background processing, which communicate through a queue. The guide also describes microservices, which divide an application into many small independent services.

For most small and mid-sized businesses, the honest answer is the simplest shape that meets the capabilities: a layered application, perhaps with a queue for slow background tasks such as invoice runs and report generation. Many small teams that adopt many small independent services find they have exchanged one problem for the cost of running dozens. Do not accept complexity because it is fashionable. Ask the developer or vendor to explain, in business terms, what each additional part buys you and what it costs to run.

## Step 4: Decide how the parts talk to each other

Parts of an application, and the applications around it, need to exchange information. Microsoft's guidance on asynchronous messaging distinguishes two kinds of message. A command asks a specific consumer to do something, such as "create this invoice". An event announces that something happened, such as "order confirmed", without expecting any specific action. The guide notes that a command must be delivered at least once, because if it is lost the entire business transaction may fail, yet in most cases should not be processed more than once, because duplicate processing can cause erroneous transactions such as duplicate orders or double billing. Events, by contrast, can have many subscribers or none.

You do not need to implement this yourself, but you should ask the question that follows from it: if the same message arrives twice, or does not arrive, what happens to the invoice? The answer should be written down. The publisher-subscriber pattern, also described by Microsoft, lets a sender announce an event once and have each interested system receive it, so the sender need not know about every receiver. It suits cases where one event, such as a confirmed order, matters to stock, invoicing and delivery. Weigh that against simpler direct connections, a trade-off covered in [point-to-point integrations versus a more maintainable integration architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/).

## Step 5: Write down the qualities that matter

Besides what the application does, state how well it must do it. These are sometimes called non-functional requirements, and they drive architecture more than features do. Put a number or a plain statement against each.

- **Availability:** how many hours of downtime a month can the business tolerate, and what happens during load-shedding?
- **Speed and volume:** how many orders at the busiest hour, and how many users at once?
- **Security and privacy:** who can see what, how access is removed when someone leaves, and how personal information is protected.
- **Recoverability:** if the system is lost, how much work can you afford to redo, and how fast must it return?
- **Changeability:** what changes do you expect in two years, such as a new sales channel, a second branch, a new tax rule?
- **Cost to run:** licences, hosting, support and the Rand-dollar exposure on any foreign-priced component.

## Step 6: Draw it on one page

An architecture the business cannot see is an architecture the business cannot question. Ask for a single-page diagram showing the main parts, the data each owns, the connections between them and the outside systems. Then check it against the information flows in your business, using [how to map the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/). If a flow in the real operation does not appear on the diagram, the diagram is wrong or the design is incomplete.

## Step 7: Record the decisions

Keep a short log of the major decisions: what was chosen, what was rejected, why, and who agreed. A paragraph each is enough. This stops the same debate reopening every six months and gives the next person a way to understand why the system looks the way it does. It also tells you when circumstances have changed enough to revisit a choice.

## Step 8: Plan for ownership

An architecture is only as good as the care it receives. Name who maintains the diagram, who approves changes that affect the shape, and who is responsible for each connection. Connections without owners are where designs begin to rot, as [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/) explains.

## An illustrative example

The following is a hypothetical case. A Stellenbosch wine exporter wants a new order application to replace spreadsheets and emails. A developer proposes a set of ten independent services. The managing director asks for the capabilities first: take an export order, check stock, produce shipping documents, invoice in foreign currency, and report to finance. She then assigns ownership of data: the application owns orders and shipping documents, the accounting package owns invoices and payments, and the stock system owns stock levels.

A simple layered application with a queue for document generation meets every capability. She asks the developer what happens if a "create invoice" message is sent twice, and the answer, a unique order reference that blocks duplicates, goes into the design record. The one-page diagram has six boxes rather than twenty. The developer is not disappointed; the project is cheaper, and the next person to inherit it can understand it in an hour.

## The point

You do not need to read code to steer an architecture. You need to define the capabilities, decide who owns the data, choose the simplest shape that meets the need, ask what happens when messages are duplicated or lost, state the qualities that matter, insist on one readable diagram and keep a record of decisions. Those are business responsibilities, and when the business takes them seriously, technical specialists build something that fits.
