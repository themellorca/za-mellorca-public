---
hub: insights
record_id: INS-112
slug: how-exceptions-should-be-designed-into-a-workflow
title: How Exceptions Should Be Designed Into a Workflow
description: A process that only describes the easy cases leaves the hard ones to phone calls and memory. Give common exceptions their own states, owners, time limits and ways back.
lead: A process that only describes the easy cases leaves the hard ones to phone calls and memory. Give common exceptions their own states, owners, time limits and ways back.
category: Workflow Design
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Workflow Design
sources:
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction | https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction
  - https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
summary: A process that only describes the easy cases leaves the hard ones to phone calls and memory. Give common exceptions their own states, owners, time limits and ways back.
layout: plain
---
A building supplies merchant in Polokwane has a tidy order process on paper: quote, order, pick, deliver, invoice. In practice, roughly one order in five does something else. The customer changes the quantity after picking has started. A product is out of stock and a substitute is offered. The delivery truck cannot reach the site because of rain. The customer disputes the delivered quantity. Each of these is handled by phone calls and memory, and none of them appear in the system. The official process covers the easy eighty percent. The other twenty percent consumes most of the management time.

Exceptions are not a failure of process design. They are a normal part of real work. The failure is designing a workflow as if they will not happen, so that when they do, they fall outside the system entirely. A well-designed workflow treats the common exceptions as expected paths with their own states, owners, time limits and ways back.

## Exceptions are part of the process, not interruptions to it

A useful shift in thinking is to stop treating the "happy path" as the process and exceptions as noise. Instead, describe the process as the happy path plus a known set of deviations, each with its own handling. When you do that, several things change. Staff stop improvising. Managers can see how many orders are in each exceptional state. And the business can measure which exceptions are growing and fix their causes. Our article on [why the official process is often not the real process](/insights/why-the-official-process-is-often-not-the-real-process/) explores how the gap between the two opens up.

## Step one: name the exceptions at each stage

Walk through the workflow stage by stage and ask, for each one: what can go wrong here, and what can change here? For the merchant:

- **Quote:** price needs approval below margin; customer asks for credit terms.
- **Order:** stock not available; customer changes quantity or product.
- **Pick:** damaged stock found; wrong location in the warehouse.
- **Deliver:** site inaccessible; customer not present; partial delivery.
- **Invoice:** quantity disputed; customer purchase order missing.

Use recent history to rank them. A handful will account for most of the volume, and those are the ones to design first.

## Step two: give each exception a visible state

Most systems let you add statuses to a record. An order should be able to sit in "Awaiting substitute approval", "Delivery rescheduled" or "Quantity disputed" rather than staying at "Delivered" while people argue on the phone. A visible state means the order shows up in the right list, the right person sees it, and reports can count it.

Keep the list short. A status for every possible situation becomes unmanageable. Group similar exceptions, and use a reason field for detail.

## Step three: decide owner, time limit and escalation

An exception without an owner turns into a forgotten record. For each exceptional state, name who is responsible for resolving it, how long it may stay in that state, and what happens when the time is exceeded. "Awaiting substitute approval" might belong to the salesperson, with a limit of one working day, after which the branch manager is notified. Our guide on [designing better escalation paths](/insights/how-to-design-better-escalation-paths-for-business-systems/) covers how to set these up without creating noise.

## Step four: design the way back, including undoing work

Many exceptions mean that work already done must be partly reversed. A cancelled order after picking means stock must be returned to the shelves. A changed quantity after invoicing means a credit note. These reversal steps are often where errors happen, because they are rare and nobody remembers the right sequence.

Software architects have a name for this: the [compensating transaction pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction). Microsoft's description of it makes several points that apply to business processes in general. Undoing work is often more complex than simply restoring the original state and may need business-specific rules, such as a partial refund rather than a full one. The process should record what has been done so that it can be reversed. And it advises identifying "points of no return", steps that cannot be undone, and placing them only after critical checks have passed. For the merchant, loading a truck might be a point of no return for that day's delivery, so stock availability and access to the site should be confirmed before it.

## Step five: let automation fail into the exception path

Where parts of the workflow are automated, make sure an automation failure lands in a visible exception state rather than vanishing. Microsoft's guidance on [error handling in Power Automate](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling) describes configuring what happens after an action fails, grouping steps into try and catch scopes, and logging errors and notifying people. Whatever tool you use, the principle is the same: the failure path should set a status the business can see, not just write to a technical log. Our article on [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) covers this in more detail.

## Step six: review exceptions as a source of improvement

Once exceptions are visible states, you can count them. Review the counts monthly. If "site inaccessible" rises every rainy season, add a site-access check when the order is placed. If "customer purchase order missing" is frequent, make the purchase order number required at order stage for customers who need one. Each exception that can be prevented upstream is one fewer to handle downstream. Our guide on [diagnosing a business that runs on exceptions](/insights/how-to-diagnose-a-business-that-runs-on-exceptions/) describes how to read these patterns.

## What not to do

Avoid two opposite mistakes. The first is designing for every conceivable exception before going live, which produces a workflow too complex to use. Design for the common few and route the rest to a general "needs attention" state with an owner. The second is leaving all exceptions to email and phone, which keeps the system clean and the business blind. The right balance is to make the frequent exceptions first-class and to give rare ones a single, owned place to land.

## Practical next actions

1. Walk through each stage of one important workflow and list what can go wrong or change there, then rank the exceptions by how often they occurred in the last three months.
2. Add a visible status for each of the five most common exceptions, plus a general "needs attention" status for the rest.
3. Assign an owner, a time limit and an escalation step to each exceptional status.
4. Write down the reversal steps for exceptions that undo work, such as returns to stock and credit notes, and identify the points of no return.
5. Count exceptions by type every month and fix the cause of the most frequent one upstream.
