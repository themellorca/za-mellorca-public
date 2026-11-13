---
hub: impact
record_id: CPS-328
slug: support-requests-without-clear-owners-cost
title: Support requests without owners: The cost of slow answers and frustrated customers
description: When customer requests move between teams with no single owner, each handover adds delay and nobody watches the clock. Ownership rules and targets help.
lead: When customer requests move between teams with no single owner, each handover adds delay and nobody watches the clock. Clear ownership rules and visible targets protect service and revenue.
category: Customer Experience and CRM
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Customer Experience and CRM
commercial_domain: Customer Service and Support Operations
primary_pain: Support requests not having clear owners as they move between teams
primary_cost_mechanism: Revenue loss from frustrated customers, coordination labour, duplicate work and delayed cash from disputes
sources:
  - Overview of unified routing | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing
  - Configure service-level agreements in Dynamics 365 Customer Service | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements
  - Create service level agreements (SLAs) to manage goals - Jira Service Management Cloud - Atlassian Support | https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/
related:
  - When customers have to repeat themselves every time | /impact/pain-of-customers-repeating-information-disconnected-records/
  - Sales, finance and operations each with their own customer: The cost | /impact/departments-separate-customer-records-financial-impact/
  - Onboarding new customers by email: The labour and revenue cost of a slow start | /impact/manual-customer-onboarding-email-checklists-revenue-delay-cost/
summary: When customer requests move between teams with no single owner, each handover adds delay and nobody watches the clock. Clear ownership rules and visible targets protect service and revenue.
layout: plain
---
## The tolerated pain

A customer reports that a delivery arrived damaged. Customer service logs it and passes it to the warehouse. The warehouse says it is a courier issue and sends it to logistics. Logistics says the credit note is a finance matter. Finance waits for someone to confirm the claim. A week later the customer phones again, angrier, and the first person they speak to has to reconstruct the whole story.

Nobody in this chain is lazy. Each team handled its part. What was missing was a single person who owned the request from start to finish, and a rule that said who that person should be. Without that, requests become a relay race in which the baton is dropped at every handover.

A separate article, [customer requests lost in a shared inbox](/impact/customer-requests-lost-shared-inbox-missed-service-work/), covers requests that are never picked up because they sit in a mailbox everyone can see. This article deals with what happens after a request is picked up: unclear ownership as it moves between people and teams.

## Why unclear ownership persists

- **Ownership is assumed, not assigned.** Everyone believes the request belongs to whoever is working on it at that moment.
- **Handovers transfer work, not responsibility.** Passing a request on feels like completing it.
- **Cross-team requests have no home.** Complaints, returns and billing disputes touch several departments, so none owns them outright.
- **No clock is running.** Without response and resolution targets, nobody notices how long a request has been open.
- **Escalation is personal.** Requests get resolved when a customer knows someone senior, not because the process works.

## Operational symptoms

- customers chasing for updates, a pattern described in [why customers have to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/);
- requests reassigned several times before anyone acts;
- internal emails asking "who is dealing with this?";
- the same customer issue logged more than once by different staff;
- no report of open requests by age or by owner;
- complaints that reach management before the team knows they are overdue.

## What service platforms are designed to do

Customer service platforms treat ownership and timing as configuration, not good intentions. Microsoft's overview of [unified routing in Dynamics 365 Customer Service](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing) describes two stages. In classification, rules add information to an incoming request, such as required skills, urgency and customer category. In assignment, requests are prioritised and assigned to representatives based on the nature of the work, skills, availability and workload. Microsoft presents this as a way to connect customers with the best-suited person and reduce resolution time.

Timing is handled through service level agreements. Microsoft's guidance on [configuring service-level agreements](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements) describes performance indicators such as first response and resolve-by times, warning and failure durations, business hours, and pause conditions for requests that are legitimately on hold. Actions can be triggered when a request nears non-compliance, so someone is alerted before the deadline is missed. Atlassian's documentation on [creating SLAs in Jira Service Management](https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/) describes similar building blocks: time to first response, time to resolution, conditions that start, pause and stop the clock, calendars for working hours, and goals by priority.

The tools differ, but the principle is consistent: every request has an owner, a clock and a rule for what happens when the clock is running out. A small business may not need an enterprise platform, but it does need those three things.

## How the pain becomes money

- **Revenue loss:** customers who wait too long or have to chase repeatedly reduce their business or leave.
- **Labour cost:** time spent re-reading history, re-explaining issues and asking who owns what.
- **Duplicate work:** two people resolving the same issue, or issuing two credits for one complaint.
- **Cash-flow impact:** disputed invoices remain unpaid while the dispute bounces between teams.
- **Management time:** senior people pulled into escalations that a clear process would have prevented.

## An illustrative cost model

This example is **illustrative**; all figures are assumptions. Picture a Bloemfontein office equipment supplier handling 800 customer requests a month across service, warehouse and finance.

| Input | Illustrative assumption |
| --- | --- |
| Requests that move between teams without a single owner | 15% (120 a month) |
| Extra internal handling per bounced request | 25 minutes at R300 per hour |
| Customers lost each year after poorly handled requests | 2 |
| Annual gross profit per lost customer | R60,000 |

On these assumptions, bounced requests consume about 50 hours a month, or R15,000 of staff time, which is R180,000 a year. Two lost customers add R120,000 of annual gross profit. The total of about R300,000 a year comes from coordination, not from the underlying faults. Replace the figures with your own request volumes and churn history.

## Trade-offs to respect

Single ownership does not mean one person does all the work. The owner coordinates and communicates; specialists still do their parts. The risk is overloading front-line staff with requests they cannot influence, so ownership rules should give owners a clear escalation route and the authority to chase other teams. Targets also need care. Clocks that cannot pause while the business waits for the customer, or that ignore working hours, quickly produce false breaches, and staff then learn to ignore the warnings. Start with a few realistic targets for the most common request types and tighten them once the data shows what is achievable.

## When it becomes commercially urgent

1. Key customers have complained about chasing or repeating themselves.
2. Disputed invoices are ageing because the dispute has no owner.
3. The business has added teams or locations, so more requests cross boundaries.
4. Management cannot see how many requests are open, with whom, or for how long.

## What better looks like

Every request is logged once and has one named owner from creation to closure, even when other teams do part of the work. Ownership rules are written down: who owns complaints, returns, billing disputes and technical issues. Other teams contribute as tasks on the same record rather than taking the request away. Response and resolution targets are visible on each request, with a warning before they are breached. A daily view shows open requests by age and owner. Handover design is discussed further in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) and in [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/).

## Practical next actions

1. **Trace ten recent requests** that took longest, and note every handover.
2. **Write ownership rules** for the five most common request types.
3. **Keep one record per request**, with contributing teams adding tasks rather than reassigning it.
4. **Set response and resolution targets** with warnings before breach.
5. **Review open requests by age** every day, with a named person accountable.
6. **Tell customers who owns their request** and when they will hear next.

Redesigning how requests move through a business is part of Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work.

## Bottom line

A request without an owner is a request everyone touches and nobody finishes. The cost appears as wasted coordination time, ageing disputes and customers who give up. Assigning a single owner, a visible clock and an escalation rule to every request is a modest change that protects both service quality and revenue. It also gives management something it rarely has today: a clear view of where requests stall, which is the starting point for fixing the underlying causes.
