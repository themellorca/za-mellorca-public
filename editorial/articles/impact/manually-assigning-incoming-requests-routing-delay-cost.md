---
hub: impact
record_id: CPS-034
slug: manually-assigning-incoming-requests-routing-delay-cost
title: The Human Dispatcher: The Cost of Manually Routing Every Incoming Request
description: When one person must read every incoming request and decide who handles it, the business pays for triage labour and for the waiting time before any work starts.
lead: When one person must read every incoming request and decide who handles it, the business pays for triage labour and for the waiting time before any work starts.
category: Digital Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Staff manually assigning incoming requests to the right person
primary_cost_mechanism: Labour cost of triage and re-routing, response delay cost and revenue loss from slower service
sources:
  - Workflow: Auto-assigning tickets to a specific agent or group | https://support.zendesk.com/hc/en-us/articles/7384207242778-Workflow-Auto-assigning-tickets-to-a-specific-agent-or-group
  - Automatic Ticket Assignment in Freshdesk Using Omniroute | https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-
  - Add a condition to a cloud flow in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/add-condition
related:
  - When Your Experts Become the Help Desk: The Cost of Routine Requests | /impact/specialists-pulled-into-routine-requests-expertise-cost/
  - When Every Decision Waits for One Person: The Cost of a Decision Bottleneck | /impact/work-stalls-when-decision-maker-unavailable-cost/
  - Meetings That Decide Nothing: The Payroll Cost of Meeting Overload | /impact/meetings-without-decisions-payroll-cost/
summary: When one person must read every incoming request and decide who handles it, the business pays for triage labour and for the waiting time before any work starts.
layout: plain
---
## The tolerated pain: nothing starts until someone decides who does it

In many businesses, every incoming request passes through a person before it reaches the person who will actually do the work. A customer query arrives in the general mailbox, and the office manager forwards it to the right consultant. A maintenance request comes in by phone, and the operations coordinator decides which technician gets it. An internal IT, HR or facilities request lands in a shared channel, and someone senior assigns it. Quote requests are read by the sales manager and handed out.

The dispatcher is usually experienced, knows the team and makes good decisions. That is precisely the problem. The business has made its response time depend on one person's availability and attention. When the dispatcher is in a meeting, on leave or simply busy with their real job, requests wait. Nothing about the request is complicated. It just has not been routed yet.

This is distinct from requests being lost altogether, which Mellorca covered in [customer requests lost in shared inboxes](/impact/customer-requests-lost-shared-inbox-missed-service-work/), and from sales leads left without an owner, covered in [unassigned sales enquiries](/impact/unassigned-sales-enquiries-leads-going-cold/). Here the requests are not lost. They are delayed, and someone is being paid to handle every one of them twice.

## Why businesses tolerate it

- **Routing feels like judgement.** Because a person decides, the business assumes the decision cannot be written down as rules.
- **It started small.** When there were ten requests a day, forwarding them took minutes. At a hundred, it takes hours, but the method never changed.
- **The dispatcher is trusted.** Nobody wants to suggest that a respected manager's role includes avoidable admin.
- **Tools are underused.** Many help desk, CRM and email systems already include routing features that were never configured.
- **Delay is not measured.** Few businesses record when a request arrived versus when it was assigned, so the waiting time is invisible.

## Operational symptoms

- Requests sit unassigned overnight, over weekends or while the dispatcher is away.
- Response times vary widely depending on when a request arrives and who is in the office.
- The dispatcher's own work, often senior and specialised, is constantly interrupted by triage.
- Workload is uneven: some staff are overloaded because the dispatcher knows they are reliable, while others are underused.
- Requests are forwarded more than once because the first assignment was wrong, and the history becomes a long email chain.
- Customers follow up to ask whether their request was received, creating more volume for the same dispatcher.

## How the pain becomes money

- **Labour cost.** Paid time spent reading, deciding and forwarding, often at a senior rate.
- **Response delay cost.** Work that could start immediately waits for routing, which slows quotes, repairs and service.
- **Revenue loss.** Customers who want a fast answer, especially for quotes and urgent call-outs, go to competitors who respond first.
- **Capacity cost.** Uneven assignment means some staff wait for work while others build backlogs, so the business appears short-staffed when it is really poorly balanced.
- **Key-person risk.** Routing knowledge lives in one head, so absence or resignation disrupts the whole flow of work.

## A transparent cost model

The figures below are illustrative assumptions. Use your own volumes, timings and rates.

| Item | Assumption | Annual effect |
| --- | --- | --- |
| Requests routed by hand | 80 a working day, 250 days | 20,000 requests |
| Dispatcher time per request | 1.5 minutes to read, decide and forward | 500 hours |
| Re-routing of wrongly assigned requests | 8% of requests, 5 minutes each | 133 hours |
| Average wait before assignment | 2 hours in working time | Slower start on every request |

At an illustrative loaded cost of R400 an hour for a senior coordinator or manager, the 633 hours of triage and re-routing cost about R253,000 a year. That is before counting the effect of a two-hour average delay on quotes won, call-outs kept and customers retained, which depends on your market and should be estimated from your own conversion and churn figures rather than assumed.

*Illustrative example.* A KwaZulu-Natal electrical contracting business received call-out requests by email, phone and a website form. The operations manager assigned each job to a team based on area and skills. On days when she was on site, jobs logged in the morning were often assigned only after lunch. The business configured its job system to assign requests by area and job type automatically, with only after-hours emergencies and unclear requests coming to her. Her triage time fell to a short review of exceptions, and morning call-outs began on the same morning.

## When it becomes commercially urgent

- customers complain that it takes too long to hear who is handling their request;
- the dispatcher's absence visibly slows the whole operation;
- request volume is rising and triage is consuming a senior person's day;
- staff report uneven workloads or idle time while requests wait;
- service-level commitments are being missed before work has even started.

## What better looks like

### Turn routing judgement into rules

Most routing decisions follow a small number of patterns: by request type, area, customer, product, language or channel. Write them down. In many businesses a handful of clear categories accounts for most of the volume, but the share varies, so measure it from your own records before designing rules. Whatever does not fit a clear category goes to a person.

### Use the routing features you already have

Help desk and service platforms are built for this. Zendesk's documentation, for example, describes triggers that automatically assign newly created, unassigned tickets to a specific agent or group based on conditions such as channel, organisation or tags applied to particular customers, and recommends tagging auto-assigned tickets so they can be monitored. Freshdesk documents automatic assignment within a group using round-robin, load-based or skill-based methods, considering only agents who are marked as available and respecting capacity limits; these options depend on the plan. Simpler setups can use conditions in an automation tool: Microsoft's Power Automate documentation describes conditions that send a flow down different paths depending on the content of an item.

### Balance by availability and load, not habit

Good routing considers who is available and how much they already hold, not only who is best. That spreads work fairly and shortens waiting time. It also exposes real capacity shortages instead of hiding them behind a busy dispatcher.

### Keep a human for exceptions

Unclear, sensitive or high-value requests should still go to an experienced person. The aim is to reserve that judgement for requests that need it. Mellorca's pattern on [service quality that depends on who picks up the ticket](/patterns/when-service-quality-depends-on-who-picks-up-the-ticket/) explains why consistent routing also improves consistency of service.

## Practical steps

1. Record, for two weeks, when each request arrives, when it is assigned and to whom.
2. Group the requests by the reason they were assigned to that person.
3. Write routing rules for the largest groups and agree who handles exceptions.
4. Bring all channels, including email, forms and phone logs, into one queue where rules can apply.
5. Configure automatic assignment in your existing tools, with a tag or field that marks automated routing.
6. Measure time-to-assignment and re-routing rates monthly and refine the rules.

Mellorca's [digital operations improvement](/services/digital-operations-improvement/) service helps businesses map request flows and configure routing that fits their teams.

## Bottom line

A human dispatcher is a hidden queue in front of every request. The business pays for the triage time and pays again in slower responses, uneven workloads and dependence on one person. Most routing decisions can be expressed as simple rules in tools many businesses already own. Automating the routine routes and keeping people for the exceptions shortens response times and frees senior staff for the work they were hired to do.
