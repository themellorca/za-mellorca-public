---
hub: insights
record_id: INS-069
slug: how-to-design-integrations-that-survive-supplier-and-business-change
title: How to Design Integrations for Change, Not Just for Launch
description: Suppliers rename fields, businesses change rules and both are normal. How to build connections that tolerate additions, flag breaking changes and stay owned after launch.
lead: Suppliers rename fields, businesses change rules and both are normal. How to build connections that tolerate additions, flag breaking changes and stay owned after launch.
category: Systems Integration
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Systems Integration
sources:
  - Web API Design Best Practices - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design
  - Tolerant Reader | https://martinfowler.com/bliki/TolerantReader.html
  - Versioning - Stripe API Reference | https://docs.stripe.com/api/versioning
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
related:
  - When an Integration Platform Makes Sense—and When It Does Not | /insights/when-an-integration-platform-is-worth-buying-and-when-it-is-not/
  - Batch Sync vs Real-Time Sync: Which Does the Business Actually Need? | /insights/batch-or-real-time-sync-how-fast-does-each-data-flow-need-to-be/
  - How to Handle Failed Integrations Without Losing Work | /insights/how-to-handle-failed-integrations-without-losing-the-work-in-flight/
summary: Suppliers rename fields, businesses change rules and both are normal. How to build connections that tolerate additions, flag breaking changes and stay owned after launch.
layout: plain
---
Most integrations are judged on the day they go live. Does the order reach the accounting system? Does the customer record appear on the other side? If yes, the project is declared a success and the team moves on. Six months later a supplier renames a field, a new product line needs an extra piece of information, or the business changes its VAT handling, and the connection that "worked" starts rejecting records. Nobody planned for this, because the design question was how to make the connection work, not how to keep it working while everything around it changes.

Change is the normal state of business software. Suppliers update their products on their own schedule, and the business itself keeps changing: new products, new channels, new regulations. An integration built only for launch is built for a moment that passes quickly. This article describes how to design a connection so that change is an expected event with a known procedure, not an emergency.

## Understand what actually changes

Not all change is equally dangerous. It helps to separate three kinds, because each calls for a different defence.

- **Additive changes.** A system starts sending a new field, or adds a new status. Well-designed connections should survive these without anyone noticing.
- **Breaking changes.** A field is renamed, removed or changes meaning, or a required value is added that the other side does not supply. These stop a connection, or worse, let it carry wrong data without stopping.
- **Business changes.** The systems are unchanged, but the rules are not: a new discount structure, a new branch, a new tax treatment. The connection still works technically, but it now moves the wrong thing.

Microsoft's guidance on web API design draws the first two apart clearly. Adding content to an existing resource might not be a breaking change, because client applications that are not expecting the new content ignore it. But more drastic changes, such as removing or renaming fields or altering relationships between resources, can be breaking changes. The practical consequence is that the first design aim is to make your side of the connection tolerant of additions, and the second is to make breaking changes visible before they hit.

## Read only what you need

A connection that insists on a rigid shape for every incoming message is fragile by design. Martin Fowler describes the alternative as the Tolerant Reader pattern. The consumer extracts only the data it actually uses, ignores fields it does not recognise, and avoids rigid assumptions about the structure of the document. He also points out that binding tightly to a schema tends to break when the provider adds fields, even though additions should be safe, and he recommends keeping the code that reads the incoming data in one place so it can be tested and adjusted.

In business terms, this means three things when you commission or configure an integration:

1. List the specific fields the receiving system needs. Do not accept "everything the other system sends" as the specification.
2. Make sure unknown fields are ignored, not rejected.
3. Keep the reading and mapping logic in a single, documented place, not scattered across several scripts.

The reverse also applies. When your system sends data to others, send what the agreement says, no more and no less, and treat any change to that content as something others may need warning about.

## Give the connection a contract

A contract is a written statement of what each side sends and expects: the fields, their formats, which are required, what values are allowed, and what happens when something is missing. It sounds formal, but a one-page table is enough for most small and mid-sized businesses. Without it, the only description of the integration is the code, and the code can be read only by the person who wrote it.

The contract has a second use: it is the thing you compare against when something breaks. Many integration problems come down to the fact that the sender and receiver disagree about what a field means, and nobody can say who is right because nothing was ever written down. The article on [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/) lists what to capture, and [why undocumented interface mappings make change risky](/discovery/why-undocumented-interface-mappings-make-change-risky/) shows what happens when it is skipped.

## Plan for versions

Suppliers handle change in different ways, and it pays to know how each of your suppliers does it. Microsoft's design guidance lists several approaches to versioning an API, including putting a version number in the address, in a query string, in a header or in the media type, and notes that each has trade-offs. Simple internal interfaces may not need versioning at all.

A well-documented example from the payments company Stripe shows the principle at work. Its documentation states that, since a 2024 change in process, it releases new API versions monthly with no breaking changes and issues a new major release twice a year that does contain them, so customers can upgrade to monthly releases without updating their code but must plan for major ones. Requests use the account's default version unless the caller sets a version explicitly, webhook events use the version set when the endpoint was created, and the documentation advises using versioning to test a new version before committing to an upgrade. You do not need to be a payments company to take the lesson: an integration should state which version of the other side it expects, so that the supplier's upgrade does not silently become your outage.

For your own suppliers, three questions are worth asking before you sign:

- How are changes announced, and how far ahead?
- Is there a way to stay on a stable version while you test a newer one?
- Who at the supplier should we contact when the interface changes?

The questions about interfaces that business leaders should ask are collected in [APIs, webhooks and integrations: what business leaders actually need to know](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/). If a supplier changes interfaces without warning, as described in [APIs change without downstream teams being warned](/discovery/apis-change-without-downstream-teams-being-warned/), this is where the questions pay off.

## Separate your meaning from theirs

Your business has its own names for things: customer, account, job, order. Every supplier has theirs, and they rarely match. If your internal systems adopt a supplier's terms directly, every change in the supplier's product ripples through your business. A better design puts a translation step between the two, so that your side speaks in your terms and only the translation changes when a supplier does.

This idea is widely used in software design. Microsoft describes it as the anti-corruption layer: a facade or adapter between subsystems that do not share the same semantics, so that dependencies on outside systems do not limit the design of your own. It adds a component to maintain, so it is not free, but for any supplier you expect to change, replace or add alongside others, the extra step is cheap insurance.

## Make breakage visible and ownership clear

Even a tolerant design will meet changes it cannot absorb. When that happens, two things decide whether it is a nuisance or a crisis: how fast you find out, and who acts. A short list of working practices covers most of it.

- Keep a test case: a sample record that you can send through the connection after any change, on either side.
- Alert on the business outcome as well as the technical error, for example "no orders received in the last two hours".
- Name an owner for each important integration, with a deputy. The case for this is made in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).
- Keep a change log of what was altered, when and by whom, on both sides if you can.
- Review each integration at a fixed interval, such as every six months, to ask whether the business rules it carries are still right.

The last point deserves emphasis because business change is the one the technology cannot warn you about. The reasons connections fail after appearing to work are explored in [why integrations break after they seem to be working](/insights/why-integrations-break-after-they-seem-to-be-working/).

## An illustrative example

Consider a hypothetical Port Elizabeth retailer that connects its web shop to a courier's booking system. In the first design, the shop sends every order field it holds and the connection rejects any message that does not match the courier's exact expected layout. When the courier adds an optional field for delivery instructions, the connection starts failing and parcels are not booked for two days. In the redesign, the shop sends only the eight fields the courier needs, ignores anything extra in the reply, records the courier's interface version in the integration notes, and sends a test parcel on the first working day of each month. A named operations coordinator receives a message if no bookings arrive within a set time. When the courier next changes its interface, the monthly test catches it before customers do.

## The principle

An integration is a relationship between two things that will both change, and it is easier to design for that from the start than to retrofit. Keep it tolerant, written down, translated at the edges, tested after change and owned by a named person. None of this is expensive, and it turns the supplier's next update from a surprise into a scheduled task.
