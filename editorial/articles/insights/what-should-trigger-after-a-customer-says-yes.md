---
hub: insights
record_id: INS-282
slug: what-should-trigger-after-a-customer-says-yes
title: What Should Trigger After a Customer Says Yes?
description: The moment a customer agrees is when follow-through is most likely to slip. Define the trigger, split what happens next into three layers, and make each step run once.
lead: The moment a customer agrees is when follow-through is most likely to slip. Define the trigger, split what happens next into three layers, and make each step run once.
category: Workflow Design
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Workflow Design
sources:
  - REL04-BP04 Make mutating operations idempotent - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_prevent_interaction_failure_idempotent.html
  - Triggers - Power Automate | https://learn.microsoft.com/en-us/power-automate/triggers-introduction
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - How to Route Work to the Right Person Automatically | /insights/how-to-route-work-to-the-right-person-automatically/
  - How to Design a Customer Onboarding Workflow That Scales | /insights/how-to-design-a-customer-onboarding-workflow-that-scales/
  - Why Software Configuration Should Follow Workflow Design | /insights/why-software-configuration-should-follow-workflow-design/
summary: The moment a customer agrees is when follow-through is most likely to slip. Define the trigger, split what happens next into three layers, and make each step run once.
layout: plain
---
A Pretoria accounting practice wins a new client on a Thursday. The partner says yes to the engagement terms on a call, shakes hands virtually, and moves on to the next meeting. On Monday the client asks when someone will be in touch. The engagement letter has not been sent, no one has opened a client file, and the junior who would do the onboarding has not been told. The sale was real. The follow-through depended on the partner remembering to ask for it.

The moment a customer says yes is the point of greatest goodwill and the point where work is most likely to be dropped, because the person who earned the yes is usually already focused on the next one. This article sets out what should happen automatically, what should be assigned to a person, and how to design the trigger so it fires once, on time and for the right reasons.

## Define what "yes" means before you automate it

The first problem is that "yes" is not an event in most systems. It is a conversation. Before anything can trigger, the business has to agree on the specific, recordable moment that counts: a signed quote, a deposit received, a status changed to "won", an accepted online order. Pick one, and make it something a person or system can mark in a single action.

A vague trigger leads to two opposite failures. If it is too early, such as a verbal agreement logged as "won", the delivery team starts work on a deal that may still fall through. If it is too late, such as waiting for the first invoice to be paid, the customer waits days after saying yes and begins to doubt the decision. Decide which cost is worse for your business. A software subscription that can be cancelled can start on acceptance. A custom manufacturing job that commits stock may need a deposit first.

## The three layers of what follows

Everything that should happen after yes falls into three layers, and mixing them up is the usual reason follow-up goes wrong.

- **Immediate and automatic.** Things that need no judgement and should happen within minutes: a confirmation message to the customer, the creation of a customer record and a delivery task, a notice to the team that owns the next step.
- **Assigned and time-boxed.** Things that need a person but have a deadline: a welcome call within one working day, a kick-off meeting booked within three, a credit check completed before first delivery.
- **Conditional.** Things that depend on the deal: extra paperwork for a regulated product, a different team for an enterprise customer, a purchase order for stock that is not on the shelf.

Write each layer as a short list. If an item sits on the wrong layer, you will feel it. A welcome call buried in an automated message is cold, and a data-entry step assigned to a busy person will be late.

## Make the trigger fire once

Automated triggers have a particular weakness: they can fire twice. A record is saved, edited and saved again, and the system treats each save as a fresh "yes". The customer receives two welcome messages and two delivery tasks appear. In financial processes the result can be a duplicate invoice or payment.

Engineers have a name for the property you want. AWS describes it in its reliability guidance on [making mutating operations idempotent](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_prevent_interaction_failure_idempotent.html): a request can be received one or more times without creating duplicate records or side effects, typically by attaching a token that identifies the request so that repeats return the original result. You do not need to build that yourself, but you can apply the idea. Give every won deal a unique reference, and have each follow-up step check whether it has already been done for that reference before acting. The risk of repeated runs is examined in [automation retries that create duplicate customer or financial actions](/discovery/automation-retries-create-duplicate-customer-or-financial-actions/).

The same guidance warns against going too far. Its list of anti-patterns includes applying the safeguard indiscriminately where it is not needed. Use the check on steps that create things or send things, and skip it for harmless ones.

## Choose the trigger type that matches the event

Most workflow tools offer more than one way to start a sequence, and picking the right one avoids many headaches. Microsoft's introduction to [Power Automate triggers](https://learn.microsoft.com/en-us/power-automate/triggers-introduction) distinguishes triggers that start automatically after an event occurs, those started manually by a person, and those that run on a schedule. Each has a place after a yes:

1. An event trigger suits the confirmation message and record creation, because they should follow the status change immediately.
2. A manual trigger suits steps where a person must decide, such as approving an exception to standard terms.
3. A scheduled trigger suits the safety net: a daily check for deals marked as won more than a day ago with no delivery task attached.

The scheduled check is the part most businesses leave out, and it is the one that catches everything else. If the main trigger fails silently, the check turns a lost customer into a late one. Every sequence should have a failure path, as discussed in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

## Carry the customer's information across intact

The yes triggers a handoff from the people who sold to the people who deliver. What the sales team learned in the conversation, such as the customer's real priority, the person who actually makes decisions and any promise made about timing, needs to travel with the deal. Otherwise the customer is asked the same questions again within a week, which is among the quickest ways to erode the confidence the sale created. See [where customer information gets lost during onboarding](/insights/where-customer-information-gets-lost-during-onboarding/) for the common leak points.

The fix is to make the handoff a structured record, not a memory. Require a short set of fields before a deal can be marked won: what was agreed, the start date, the customer's main contact, any special conditions. The principle is spelled out in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/), and the wider sales-to-delivery pattern in [how to stop sales-to-delivery handoffs from breaking](/insights/how-to-stop-sales-to-delivery-handoffs-from-breaking/).

## Tell the customer what happens next

Everything above is invisible to the customer unless you say it. The confirmation message should state what has been received, what happens next, who will contact them and by when. Three short sentences beat a long welcome pack. Then keep the promise: if the message says someone will call within one working day, the scheduled check should flag any customer for whom that has not happened.

## Practical next actions

1. Write down the single recordable event that counts as "yes" in your business and make sure staff mark it the same way every time.
2. List everything that currently happens after a yes, and sort each item into immediate, assigned and conditional.
3. Add a unique reference to each won deal and make every follow-up step check whether it has already run for that reference.
4. Set up a daily check that lists won deals with no delivery task, and send the list to a named person.
5. Require a handful of handoff fields before a deal can be closed as won.
6. Rewrite the confirmation message so it states what happens next, who will be in touch and by when.
