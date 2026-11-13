---
hub: insights
record_id: INS-066
slug: when-an-integration-platform-is-worth-buying-and-when-it-is-not
title: When an integration platform makes sense—and when it does not
description: An integration platform can tame a tangle of connections or become one more system to maintain. How to judge which, by systems, events, ownership and cost.
lead: An integration platform can tame a tangle of connections, or become one more system to maintain. How to judge which, based on the number of systems, shared events, ownership and cost.
category: Systems Integration
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Systems Integration
sources:
  - Publisher-Subscriber Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber
  - Queue-Based Load Leveling Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
related:
  - How to integrate a new platform into an existing business | /insights/how-to-integrate-a-new-platform-into-an-existing-business/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - What management cannot see usually becomes expensive | /insights/what-management-cannot-see-usually-becomes-expensive/
  - How to design a business application architecture | /insights/designing-the-architecture-behind-a-business-application/
summary: An integration platform can tame a tangle of connections, or become one more system to maintain. How to judge which, based on the number of systems, shared events, ownership and cost.
layout: plain
---
Every growing business reaches the point where someone says, "We need something to connect all this." The accounting package does not talk to the order system, the CRM is fed by hand from the website forms, and the warehouse works from a spreadsheet that someone emails at 07:30. An integration platform looks like the tidy answer: one product, many connectors, a visual canvas on which flows can be drawn. Sometimes it is exactly the right answer. Sometimes it is an expensive way to add a fifth system that nobody fully understands.

This article sets out how to tell the difference. The aim is not to argue against integration platforms, but to make sure the decision is driven by the shape of the operation rather than by a vendor presentation.

## What an integration platform actually is

An integration platform is a layer that sits between your business systems and moves data or triggers between them. It typically offers prebuilt connectors, a way to transform data from one format to another, scheduling, error handling and some form of logging. Some are hosted services, some are installed on your own servers, and some are bundled into larger software suites.

The alternative is not "no integration". It is usually one of three things: the native integration that two products already offer each other, a handful of direct connections built by a developer, or a person doing the transfer by hand. Each has a place. A platform is simply the option that centralises the connections, and centralisation has costs as well as benefits. If the terms are unfamiliar, [APIs, webhooks and integrations: what business leaders actually need to know](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/) covers the vocabulary in plain language.

## When a platform makes sense

A platform tends to earn its keep when several of the following are true at once.

- **Three or more systems exchange data.** With two systems, one connection is enough. With five systems, direct connections can multiply into ten, each with its own logic and its own failure mode. The pattern is described in [point-to-point integrations versus a more maintainable integration architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/).
- **The same event matters to more than one system.** A confirmed order may need to reach stock, invoicing, the courier and the customer's notification. Microsoft's architecture guidance describes the [publisher-subscriber pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber) for this situation: the sender announces an event once, and each interested system receives it, rather than the sender knowing about every receiver.
- **Systems change often.** If you expect to swap the billing tool or add a new sales channel within two years, putting the connections in one managed layer makes each swap a change in one place instead of five.
- **Volumes are uneven.** Month-end, a Black Friday promotion or a payroll run can produce bursts that a simple direct connection cannot absorb. Microsoft's [queue-based load levelling pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) describes how a queue between systems smooths such bursts so the receiver is not overwhelmed.
- **Someone will own it.** A platform needs a named person or team who understands the flows, watches for failures and approves changes. Without that, even a good platform decays.

## When it does not

There are equally clear signs that a platform is premature.

- **You have two systems and one flow.** If your online store needs to push orders into your accounting package and both products offer a maintained native connector, use it. Buying a platform to run one flow adds a subscription, a vendor and a skill to maintain.
- **The process underneath is unclear.** If nobody can say which system holds the correct customer record, a platform will move the disagreement faster. Settle [which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) first.
- **The real problem is duplicate tools.** Sometimes the answer to "our systems do not talk" is to retire one of them. [When two tools are doing the job of one](/insights/when-two-tools-are-doing-the-job-of-one/) describes how to recognise that case.
- **Data quality is poor.** Connecting a system full of duplicate and incomplete records to a clean one contaminates the clean one. Fix the source, then connect it.
- **The volume is trivial.** If a person spends twenty minutes a week moving data, the cost of a platform, its set-up and its upkeep may exceed the cost of the work it removes for years.

## The costs people forget

The licence fee is the visible cost. The hidden ones are larger. Connectors rarely cover every field you care about, so custom mapping is needed. Foreign-currency platforms bill in dollars or euros, so a weaker Rand quietly raises the price each renewal. Staff or contractors need training, and the person who builds the flows becomes a dependency, a risk explored in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/). There is also the matter of lock-in: flows built in a vendor's proprietary canvas cannot usually be exported and run elsewhere.

Microsoft's [implementation guidance on fit-to-standard analysis](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis) makes a point that applies here as well. Where a standard capability meets the requirement, use it, and customise only where the gap is genuine. Applied to integration, that means asking whether native connections already cover most of the need before building a layer on top of them.

## Data protection does not disappear

An integration platform becomes a place where personal information passes through, and in many designs a place where it is stored temporarily in logs or queues. Under the Protection of Personal Information Act, a business remains responsible for the personal information it hands to an operator. Ask where the platform's servers are, what it logs, how long failed messages are kept, and who at the vendor can see them. The [IBM overview of data silos](https://www.ibm.com/think/topics/data-silos) is a useful reminder of the opposite risk too: when systems are not connected, the same personal information is duplicated across disconnected stores, each of which must be kept accurate and secured.

## A short decision test

Before committing, work through these questions with the people who run the affected processes, not only with IT.

1. How many systems need to exchange data now, and how many in two years?
2. Which flows are business-critical, and what happens if each one stops for a day?
3. Do the native integrations of our existing products cover the main flows?
4. Who will own the platform, and who covers when that person is on leave?
5. What will we stop doing manually once it is live, and how will we confirm that it has actually stopped?
6. What does the first twelve months cost in licences, set-up and support, in Rand, at a pessimistic exchange rate?

If the answers point to several systems, shared events, frequent change and a clear owner, a platform is probably justified. If they point to two systems and one flow, the better investment is a native connector and a written description of how it works.

## An illustrative example

The following is a hypothetical case. A Gqeberha company selling industrial fasteners runs an online store, a separate stock system, an accounting package and a courier portal. Orders are retyped into the stock system by two staff members each morning. The owner is shown an integration platform and told it will remove the retyping.

Mapping the flows shows that the store and the accounting package already have a maintained connector, which the company had simply never switched on. The stock system has a basic export that can feed the courier portal. Only one flow, orders into stock, has no off-the-shelf option. The company builds that single connection with a developer, documents it and assigns an owner.

It spends a fraction of the platform's annual cost and removes the retyping within a month. Two years later, with a second warehouse and a marketplace channel added, the number of systems has grown to six, and a platform is now a reasonable discussion. The decision was right at both points because it followed the business, not the brochure.

## The point

An integration platform is a means of managing complexity you already have. It does not remove complexity, and it adds some of its own. Buy one when the connections have become the problem, when someone can own it, and when the underlying processes and data are settled enough to be worth connecting. Until then, the better questions are in [before you buy another tool, ask these questions](/insights/before-you-buy-another-tool-ask-these-questions/).
