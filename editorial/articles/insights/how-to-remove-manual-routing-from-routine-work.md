---
hub: insights
record_id: INS-138
slug: how-to-remove-manual-routing-from-routine-work
title: How to Remove Manual Routing From Routine Work
description: When an experienced person spends the morning deciding who does what, work waits and knowledge sits in one head. Record the decisions, capture the facts and hand routine sorting to rules.
lead: When an experienced person spends the morning deciding who does what, work waits and knowledge sits in one head. Record the decisions, capture the facts and hand routine sorting to rules.
category: Workflow Automation
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Workflow Automation
sources:
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-record-routing | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-record-routing
summary: When an experienced person spends the morning deciding who does what, work waits and knowledge sits in one head. Record the decisions, capture the facts and hand routine sorting to rules.
layout: plain
---
Every morning at a Durban freight forwarding company, the operations supervisor spends her first ninety minutes reading the shared inbox and forwarding each message to the right person. Customs queries go to one clerk, rate requests to another, damage claims to the claims desk, and anything from the three largest clients to their dedicated coordinators. She is good at it. She is also the reason nothing moves before half past nine, and on the days she is on leave, the inbox becomes a free-for-all where some messages are handled twice and some not at all.

Manual routing like this is easy to miss because it looks like management. In reality it is a repetitive sorting task performed by one of the most expensive and experienced people in the team. Removing it frees that person for work that needs judgement and makes the operation less dependent on one pair of eyes.

## Recognise manual routing when you see it

Manual routing is any point where a person's main job is to decide who should do a piece of work, rather than to do it. Common forms include:

- A supervisor forwarding emails from a shared mailbox.
- A receptionist deciding which technician gets a call-out.
- A sales manager handing out web leads by hand each morning.
- A finance clerk passing supplier invoices to whichever manager signs for that cost centre.
- A team chat where someone posts "who can take this?" and waits.

The cost is not only the sorter's time. Work waits until the sorter is free, the logic behind the decisions lives in one head, and nobody can see how long items sat before being assigned. Our article on [why shared inboxes become operational bottlenecks](/insights/why-shared-inboxes-become-operational-bottlenecks/) describes how this pattern grows.

## Step one: record the decisions before you automate them

Before changing anything, spend two weeks recording what the person who routes the work actually decides. A simple spreadsheet is enough: the date and time an item arrived, what kind of item it was, which customer it came from, who it was given to and, crucially, why. After a few hundred rows, patterns appear.

In most businesses the large majority of routing decisions are rule-like: "anything mentioning customs goes to Thandi", "anything from this client goes to their coordinator", "leads from Gauteng go to the Johannesburg team". A smaller share needs real judgement, such as a complaint that might become a legal issue or a request that does not fit any category. The goal is to automate the first group and protect human attention for the second.

## Step two: capture the routing facts at intake

Rules can only route on information the system holds. If the supervisor reads a whole email to find out whether it is a customs query, a rule cannot easily do the same. The fix is usually upstream: collect the facts that decide the route at the moment work enters the business.

- Replace a general email address with a short web form that asks for request type and reference number.
- Give large clients a dedicated address or portal so their work is identified on arrival.
- Add a required category to internal requests in your ticketing or task tool.
- Look up the customer account automatically from the sender's address where your system allows it.

Our guide to [designing a new customer intake that collects once and starts right](/insights/how-to-design-a-new-customer-intake-that-collects-once-and-starts-right/) covers the same principle for onboarding.

## Step three: separate classification from assignment

It helps to treat routing as two decisions rather than one. First, what is this item and how urgent is it? Second, who among the available people should take it? Microsoft's [overview of unified routing](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing) describes exactly this split: a classification stage, where rules or models add information such as skills required and urgency, and an assignment stage, where items are prioritised and matched to people based on skills, availability and workload.

Even if you never use that product, the split is useful. Classification rules change when your services change. Assignment rules change when your staff change. Keeping them apart means a new hire does not require you to rewrite the logic for recognising customs queries.

## Step four: always define a fallback

No rule set covers everything. Decide in advance where unmatched items go, who watches that queue, and how quickly it must be cleared. A fallback queue that nobody owns is just a new place for work to disappear. The supervisor in our example might keep only this queue, which typically holds a small share of the volume, plus the judgement cases.

Also decide what happens when the assigned person is absent. Rules that send work to a named individual break the day that person is sick. Route to a role or a small team where possible, and let the system choose an available member. Microsoft's guidance on [setting up record routing](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-record-routing) shows the building blocks commonly involved: intake rules that choose a workstream, routing rules that choose a queue, and distribution settings that consider capacity and presence.

## Step five: run the rules in parallel first

Do not switch off the human router on day one. For a week or two, let the rules suggest a route while the person still makes the final call, and record where the two disagree. Each disagreement is either a missing rule, a rule in the wrong order, or a judgement case that should stay manual. Fix the first two, accept the third, and switch over once the disagreement rate is low enough that the supervisor trusts it.

## Step six: watch for misroutes after go-live

Give the people receiving work a quick way to say "this is not mine", and count how often it happens. A rising misroute count usually means a new type of request has appeared or a team has changed. Review the routing rules monthly with the people who receive the work, not just the person who built them. Our article on [why a quiet workflow is not proof it worked](/insights/why-a-quiet-workflow-is-not-proof-it-worked/) explains why silence after go-live should not be mistaken for success.

## What changes for the person who used to route

The supervisor does not become redundant. She becomes the owner of the routing rules, the handler of genuine judgement cases and the person who spots patterns in the fallback queue. That is a better use of her experience than forwarding emails, and it means the operation keeps moving when she is away. For a broader view of the design choices involved, see [how to route work to the right person automatically](/insights/how-to-route-work-to-the-right-person-automatically/).

## Practical next actions

1. Identify every point in your business where someone's job is mainly to decide who should do a task, and estimate the time it takes each day.
2. Log two weeks of routing decisions with the reason for each, and mark which ones followed a simple rule.
3. Change your intake so that the facts which decide the route, such as request type and customer, are captured when work arrives.
4. Write classification and assignment rules separately, route to roles rather than named people, and define a fallback queue with an owner and a clearing time.
5. Run the rules alongside the human router for a short period, fix the disagreements, then switch over and track misroutes monthly.
