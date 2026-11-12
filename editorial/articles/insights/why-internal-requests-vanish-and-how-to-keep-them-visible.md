---
hub: insights
record_id: INS-308
slug: why-internal-requests-vanish-and-how-to-keep-them-visible
title: How to Stop Internal Requests From Disappearing
description: Requests sent by email, chat message or a word in the corridor vanish because nobody owns the queue. A practical way to give every request a record, an owner and a clock.
lead: Requests sent by email, chat message or a word in the corridor vanish because nobody owns the queue. A practical way to give every request a record, an owner and a clock.
category: Operations Workflow
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Operations Workflow
sources:
  - Service Request Management: Definition & Process - Atlassian | https://www.atlassian.com/itsm/service-request-management
  - https://www.atlassian.com/agile/project-management/raci | https://www.atlassian.com/agile/project-management/raci
  - Queue-Based Load Leveling Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling
related:
  - How to Design Alerts for Automation Failures | /insights/how-to-design-alerts-for-automation-failures/
  - How to Build a Maintenance Plan for Business Automations | /insights/a-maintenance-plan-for-the-automations-you-already-run/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
summary: Requests sent by email, chat message or a word in the corridor vanish because nobody owns the queue. A practical way to give every request a record, an owner and a clock.
layout: plain
---
A request that disappears rarely does so dramatically. Someone in the warehouse asks the finance team by email to fix a supplier bank detail. A sales rep messages IT on WhatsApp for access to the quoting tool. A manager mentions at the Monday meeting that a contract needs renewing. Each person believes the message has landed. Each recipient is busy, assumes someone else will pick it up, or simply never sees it among a hundred other messages. Two weeks later the supplier has not been paid, the rep is quoting from a spreadsheet and the contract has lapsed.

This is not a discipline problem. It is a design problem: the business has no place where a request becomes a visible, owned piece of work. This article sets out what that place needs to look like, and how to build it without buying an expensive system.

## Why requests vanish

When you trace lost requests back, the causes are remarkably consistent.

- **Many doors, no queue.** Requests arrive by email, chat, phone, a tap on the shoulder and a note on a desk. There is no single list that shows everything outstanding, so nobody can say how many requests are open.
- **The recipient is a person, not a role.** A request sent to one individual disappears when that person is on leave, off sick or has left. This is the same weakness described in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).
- **No acknowledgement.** The requester does not know whether the message was read, accepted or rejected, so they either wait in silence or chase.
- **No status.** Even when someone is working on the request, nobody else can see it, so the same request is raised again, often with a different person.
- **No clock.** Without an expected response time, a request that is a week old looks the same as one that arrived this morning.

The cost of this shows up as chasing. If your staff spend a meaningful part of the week asking others for updates, the underlying issue is explained well in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

## What a request needs to survive

Atlassian's guidance on service request management describes the discipline in plain terms: standardised workflows for how requests are submitted, triaged, fulfilled and communicated. The same source separates a service request, a formal ask for something to be provided, from an incident, which is an unplanned disruption, and recommends handling requests as their own stream of work. That separation is useful outside IT as well. A request for a new supplier to be set up is not an emergency; it is routine work that should move through a predictable path. Whatever tool you use, every request needs six things.

1. **One intake point per request type.** This can be a shared mailbox, a form, or a simple tracker. What matters is that it is shared, so a request is visible to more than one person.
2. **A unique reference.** Even a running number lets the requester and the owner talk about the same thing.
3. **A named owner.** One person is accountable for each request at any moment. Not a team in general, a person.
4. **A status.** Received, accepted, in progress, waiting on the requester, done or declined. Keep it to five or six values.
5. **A due date or target time.** Set by request type, not argued case by case.
6. **A closing step.** The request is closed only when the requester confirms it, or after a stated period of silence.

## Decide who owns what

Ownership is where most designs quietly fail. The RACI model, which Atlassian describes in its guide, assigns each activity people who are responsible for doing it, one who is accountable for the outcome, others who are consulted and others who are informed. You do not need a large matrix. For each request type, write one line: who triages it, who fulfils it, who covers when they are absent, and who is told when it is late. The wider principle is set out in [how to make ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/).

Insist on a deputy for every owner. A request queue that depends on one person's attendance will fail on the first day that person is not there, which in a South African winter of flu, or during a load-shedding afternoon when half the office is working from home, comes sooner than you think.

## Why a queue helps, even for people

Microsoft's architecture guidance on queue-based load levelling describes placing a queue between a producer of work and the service that handles it, so that bursts of demand are absorbed and processed at a steady rate rather than overwhelming the receiver. The setting is software, but the idea transfers. A shared request list does for a finance team what a message queue does for a server: it holds the work in one visible place, lets it be handled in order, and shows how deep the backlog is. Month-end is the obvious example. Requests do not stop when the books are closing; they pile up in people's inboxes. A visible queue lets the team see the pile, decide what can wait and tell requesters honestly when to expect a response.

## Start with one request type

Do not try to fix every kind of request at once. Choose the one that causes the most grief and use these steps.

1. **Count the doors.** For two weeks, ask each team to note every route through which requests of that type arrive.
2. **Close all but one.** Announce the single intake point. For the first month, when a request arrives by the old route, reply with a polite note pointing to the new one rather than quietly handling it.
3. **Write the rules on one page.** Owner, deputy, statuses, target times and what counts as urgent.
4. **Review the ageing list weekly.** Every Monday, someone reads out requests older than their target time. This ten-minute habit does more than any software.
5. **Tell people what they will get.** A requester who knows the target is two working days stops chasing on day one.

The pattern for procurement is shown in [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/), and the same logic applies to HR changes, access requests, price updates and customer data corrections.

## Plan for requests that stall

Even a good queue has requests that stop moving because they depend on a decision, a missing document or a person who is unavailable. Build in a rule for stalled work. A request that has had no movement in a set number of days is moved up one level, to the owner's manager, with a short note saying what is blocking it. The thinking behind this is covered in [how to design better escalation paths for business systems](/insights/how-to-design-better-escalation-paths-for-business-systems/). Escalation should be automatic and unembarrassing, a feature of the process rather than a complaint about a colleague.

## An illustrative example

The following is a hypothetical case. A Cape Town company with forty staff handles supplier detail changes by email to whichever finance person the requester knows. Over a quarter, three changes are never made, and one payment goes to an old bank account, which takes weeks to recover. The finance manager sets up a shared mailbox and a simple online form with five fields: supplier, what is changing, who is asking, evidence attached and urgency. Each submission creates a numbered row in a shared sheet with an owner, a status and a due date of one working day. Because bank detail changes are sensitive, a second person must verify them by phone using a number already on file. After two months, the Monday review shows the longest-open item is three days old. Nobody has asked for an update by email in weeks. The solution used no new software budget, and it fixed the thing that mattered: every request became visible.

## The point

Requests disappear when they have no home. Give each type of request one entrance, an owner with a deputy, a status and a clock, and review what is ageing every week. If the volume outgrows a shared sheet, you will know it, because you will have the data to choose a proper tool. If it does not, you have solved the problem for the cost of a few hours and a habit.
