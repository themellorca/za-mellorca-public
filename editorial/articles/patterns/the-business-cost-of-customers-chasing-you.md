---
hub: patterns
record_id: PAT-093
slug: the-business-cost-of-customers-chasing-you
title: The Business Cost of Customers Chasing You
description: Every time a customer has to chase a quote, a delivery or a refund, the business pays twice: once in staff time and again in trust. Here is how to count it and reduce it.
lead: Every time a customer has to chase a quote, a delivery or a refund, the business pays twice: once in staff time and again in trust. Here is how to count it and reduce it.
category: Customer Experience & Service
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Customer Experience & Service
pattern_family: Customer Experience & Service
observable_condition: Customers regularly contact the business to ask where their quote, booking, delivery, refund or corrected invoice is, before the business has told them anything.
primary_identification: Outsourced follow-up: promised dates are not recorded or monitored, so the customer becomes the only alarm when a step runs late.
commercial_value_dimensions: Staff time, quote conversion, cash collection speed, customer trust and repeat business
sources:
  - Configure service-level agreements in Dynamics 365 Customer Service | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
related:
  - When a Customer Portal Would Not Fix the Underlying Problem | /patterns/when-a-customer-portal-would-not-fix-the-underlying-problem/
  - Why Service Teams Become the Buffer for Broken Processes | /patterns/why-service-teams-become-the-buffer-for-broken-processes/
  - Why Customers Should Not Need Your Org Chart to Get an Answer | /patterns/why-customers-should-not-need-your-org-chart-to-get-an-answer/
summary: Every time a customer has to chase a quote, a delivery or a refund, the business pays twice: once in staff time and again in trust. Here is how to count it and reduce it.
layout: plain
---
## Observable condition

A facilities manager at a Johannesburg office park asked an electrical contractor for a quote on a Tuesday. On Friday she emailed to ask whether it was coming. The following Wednesday she phoned. The quote arrived that afternoon with a note apologising for the delay. She accepted it, and then had to chase again for a start date.

The contractor is good at the work itself. Customers who get through the process say so. But almost every job involves the customer chasing at least twice: for the quote, for the booking, for the completion certificate or for a corrected invoice.

Inside the contractor's office, those chasers arrive as interruptions. Someone stops what they are doing, finds out where the job is, replies, and goes back to their work. Nobody records how often it happens.

## Realisation

The realisation is that a chaser is a sign that the business has handed a piece of its own job to the customer. The customer has become the person monitoring progress, setting reminders and escalating when things stall. That is work the business should be doing, and the customer notices.

It is also work the business pays for twice. The customer's chaser has to be read, investigated and answered, often by a senior person who knows where things are. And the delay that caused the chaser is usually still there afterwards.

**Realisation prompt:** look at the last twenty jobs or orders. On how many did the customer contact you to ask about progress before you told them?

## Identification

This is a pattern of outsourced follow-up. The visible symptom is customers sending "just checking in" messages. The common assumption is that some customers are anxious or pushy. The structural cause is that the business has no reliable way of knowing when a promised step is overdue, so the customer becomes the alarm.

It is the commercial side of [why customers keep emailing to ask for an update](/patterns/why-customers-keep-emailing-to-ask-for-an-update/). That page explores what customers do when they hear nothing. This one counts what the business loses each time.

## Diagnosis

- **Promises are not recorded as dates.** "We will get back to you this week" is said on the phone and forgotten. Nothing flags it when Friday passes.
- **Work waits in personal inboxes.** A quote request sits with the estimator, who is on site. Nobody else can see that it is waiting.
- **No internal service levels.** The business has never decided how long a quote, a booking or a refund should take, so it cannot tell when one is late. [Microsoft's guidance on service-level agreements](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements) describes setting first-response and resolve-by targets with warning and failure times, which is the same idea at any scale.
- **Updates are manual.** Telling a customer that their job has moved forward relies on someone remembering to send a message.
- **Chasers are not counted.** Each one is handled and forgotten, so the business never sees the total.

## Commercial impact

The commercial value at stake is staff time, conversion rate, cash collection and repeat business.

Start with time. If each chaser takes ten minutes to investigate and answer, and a business receives fifteen a day, that is two and a half hours of skilled time lost daily. The Impact note on [customers who do not know their request status](/impact/customers-do-not-know-request-status-inbound-follow-up-and-lost-trust-cost/) describes how this inbound follow-up accumulates.

Next, conversion. A customer who has to chase a quote is comparing you with the competitor who sent theirs on time. Some never chase at all. They simply accept the other quote, and the business never learns why it lost the work.

Then cash. A customer chasing a corrected invoice is a customer who is not paying yet. Every chaser on a billing matter is a delay in collection.

Finally, reputation. Customers who chase remember the experience, even if the work was excellent. They describe the business to others as good but hard to deal with.

## Common misidentification

The usual misreading is that the problem is customer impatience, and the response is to set expectations more firmly. Clear expectations help, but only if the business then meets them and can see when it will not.

Another is to ask staff to be more responsive. Most chasers are not caused by slow replies. They are caused by the absence of any reply until the customer asks.

A third is to treat chasers as a service team problem. The chaser arrives at the service desk, but the delay usually sits in estimating, scheduling or accounts.

## Possibility

The possibility is a business that knows before the customer does when something is running late. Each request has a promised date. A list shows which requests are approaching that date. When a step completes, the customer hears about it automatically. When a date will be missed, someone tells the customer first, with a new date.

In that business, chasers become rare and meaningful. When one does arrive, it points to a specific failure that can be fixed. The approach in [when customers know their order is late before your team does](/patterns/when-customers-know-their-order-is-late-before-your-team-does/) describes the same shift for deliveries.

## Intervention

For one month, log every chaser: the date, the customer, what they were chasing and which step it was waiting on. This takes a minute per chaser and produces the evidence needed for everything else.

Set a simple target for the three steps that attract the most chasers, for example quotes within two working days, bookings confirmed within one and refunds within five. Record a due date on each request when it arrives.

Make overdue items visible. A shared list sorted by due date is enough to start. An automated flow, of the kind described in [Microsoft's overview of cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud), can send a reminder to the owner when a due date approaches and a short update to the customer when a step is completed.

Finally, review the chaser log monthly. If chasers fall, the targets are working. If they cluster on one step, that is where to look next. See also [the labour cost of manual progress updates](/impact/manual-customer-progress-updates-status-message-labour-cost/).

## Practical next actions

1. Start a chaser log today and record every customer follow-up for four weeks, including what step it was waiting on.
2. Agree a target turnaround for quotes, bookings and refunds, and write it where the whole team can see it.
3. Give every new request a due date and a named owner at the moment it is received.
4. Create one shared list of open requests sorted by due date and review it at the start of each day.
5. Send customers an update when each major step completes, starting with the step that attracts the most chasers.
6. When a date will be missed, contact the customer before the due date with a revised one.

## Diagnostic questions

- How many chasers did we receive last week, and what were they chasing?
- Do we know, today, which customer promises are already overdue?
- Which internal step produces the most customer follow-ups?
- How many quotes did we lose last quarter because they arrived after a competitor's?

## Bottom line

When customers have to chase you, they are doing the monitoring the business should be doing, and the business pays for it in staff time, lost work, slower cash and a weaker reputation. Record promises as dates, make overdue work visible, tell customers when things move, and the chasers will fall away.
