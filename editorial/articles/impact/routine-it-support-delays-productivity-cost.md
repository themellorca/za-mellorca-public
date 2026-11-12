---
hub: impact
record_id: CPS-203
slug: routine-it-support-delays-productivity-cost
title: When Routine IT Support Takes Days: The Productivity Bill Nobody Counts
description: Small IT problems left waiting for days quietly consume paid working time. A single request queue, target times, self-service and remote fixes turn routine support into a measurable service.
lead: Small IT problems left waiting for days quietly consume paid working time. A single request queue, target times, self-service and remote fixes turn routine support into a measurable service.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Employees waiting days for routine IT support requests to be resolved
primary_cost_mechanism: Labour cost of paid waiting time, delayed customer work and risk from user workarounds
sources:
  - What Is ITSM (IT Service Management)? - IBM | https://www.ibm.com/think/topics/it-service-management
  - What Is a Help Desk? - IBM | https://www.ibm.com/think/topics/help-desk
  - Self-service password reset deep dive - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks
  - Use Remote Help to Assist Users Authenticated by your Organization - Microsoft Intune | https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/remote-help
related:
  - The Human Dispatcher: The Cost of Manually Routing Every Incoming Request | /impact/manually-assigning-incoming-requests-routing-delay-cost/
  - New Starters Waiting for Logins: The Payroll Cost of Slow Access Setup | /impact/new-starters-waiting-for-logins-access-setup-cost/
  - When Your Experts Become the Help Desk: The Cost of Routine Requests | /impact/specialists-pulled-into-routine-requests-expertise-cost/
summary: Small IT problems left waiting for days quietly consume paid working time. A single request queue, target times, self-service and remote fixes turn routine support into a measurable service.
layout: plain
---
## The tolerated pain

An employee cannot open a shared folder. A laptop will not connect to the printer. A password has expired while someone is working from home. None of these is a crisis, so each is logged, emailed or mentioned to whoever "does IT", and then it waits. One day becomes two, two becomes four, and in the meantime the employee works around the problem, borrows a colleague's machine or simply does less.

Most owners would not describe this as an IT problem. They would describe it as a normal part of running a business with a small IT budget. The outsourced provider is busy, the internal person who is "good with computers" has a real job as well, and routine requests are, by definition, not urgent. That is precisely why they wait.

This article is about the queue, not the equipment. If the delay comes from tired hardware, [the paid waiting cost of slow computers](/impact/slow-computers-paid-waiting-cost/) covers that separately. Here the question is what happens when ordinary, solvable problems sit unresolved for days because nobody has designed how routine support should flow.

## Why businesses put up with it

- **Each ticket looks small.** A two-day wait for a printer fix seems trivial. Nobody adds up thirty such waits a month.
- **Support is bought by the hour or on a fixed fee with vague targets.** The contract may promise a response time but rarely a resolution time for routine requests.
- **Requests arrive informally.** WhatsApp messages, corridor conversations and emails to one person cannot be prioritised, counted or escalated.
- **Incidents and requests are mixed.** A server outage and a request for a new mailbox land in the same inbox, so the routine work is always pushed back.
- **Staff stop reporting.** After a few slow experiences, people tolerate a fault rather than log it, which makes the problem look smaller than it is.

## Operational symptoms

- employees saying "I logged it last week" with no way to check progress;
- the same password reset, mailbox permission or printer fault recurring every month;
- staff using personal devices, personal email or shared logins to get around a fault;
- new joiners waiting for access, which overlaps with [the onboarding cost of employees without equipment](/impact/new-employees-without-equipment-onboarding-cost/);
- managers chasing the IT provider directly because there is no shared queue;
- nobody able to say how many requests were opened last month or how long they took.

## What well-run support separates

IT service management, as IBM's overview of [IT service management](https://www.ibm.com/think/topics/it-service-management) describes it, distinguishes between incident management, which restores interrupted services quickly, request management, which handles standard demands such as access or equipment through defined workflows, and problem management, which looks for the root cause when several incidents share one. Service level agreements formalise what users can expect.

That distinction matters for small businesses because routine requests behave differently from incidents. They are predictable, repetitive and often low-skill. They can be standardised, partly automated or handed back to the user safely. When they are treated as ad hoc favours instead, they queue behind everything else.

IBM's explainer on [help desks](https://www.ibm.com/think/topics/help-desk) makes a practical point: every request, regardless of size, should become a ticket, so work can be tracked and solutions reused, and self-service and a knowledge base can resolve some issues before an agent is needed.

## Some of the queue does not need a person at all

The most common routine request in many offices is a forgotten or expired password. Microsoft's documentation on [self-service password reset in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks) describes how users who have registered authentication methods can reset or unlock their own accounts without administrator or help desk involvement, which Microsoft says reduces help desk calls and loss of productivity. It is not automatic: users must register methods first, and if they have not, they are told to contact their administrator.

For faults that do need a technician, remote assistance removes travel and scheduling delays. Microsoft's [Intune Remote Help](https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/remote-help) documentation describes a cloud-based tool that lets support staff connect securely to a user's device, with role-based control over who can view or take control, and reports on who helped whom and for how long. Equivalent tools exist from other vendors. The point is that a large share of routine fixes can happen in minutes once someone picks them up.

## How the pain becomes money

- **Labour cost:** employees paid to wait, work slowly or repeat work while a fault persists.
- **Revenue and service delay:** quotes, invoices or customer responses held up because someone cannot access a system.
- **Management time:** supervisors chasing tickets and reassigning work around blocked staff.
- **Risk exposure:** workarounds such as personal email and shared passwords create security and data protection problems.
- **Retention and morale:** skilled people find repeated technology friction demoralising, which is hard to price but real.

## An illustrative cost model

This example is **illustrative**; every figure is an assumption to show the method, not a benchmark. Picture a 40-person engineering consultancy in Durban with an outsourced IT provider.

| Input | Illustrative assumption |
| --- | --- |
| Routine support requests per month | 35 |
| Average time to resolution | 2.5 working days |
| Productive time lost per affected employee per day of waiting | 45 minutes |
| Loaded cost of employee time | R350 per hour |

On these assumptions, each request costs about 1.9 hours of lost time (2.5 days × 0.75 hours), or roughly R660. Thirty-five requests a month gives about R23,000 a month, or around R276,000 a year, before counting any delayed invoices or client work. If self-service and remote assistance cut the average wait to half a day, the same requests would cost about R4,600 a month. Your own numbers will differ; the value is in measuring the wait, not in borrowing these figures.

## When it becomes commercially urgent

1. Fee earners or salespeople are among those waiting, so the lost hours are billable or revenue-generating.
2. The same routine requests recur every month without anyone fixing the cause.
3. Staff have started using workarounds that create security or data protection exposure.
4. The IT support contract is due for renewal and nobody can say how well it performed.

## What better looks like

Every request goes into one queue, through a simple portal or a dedicated address, and gets a reference number the employee can check. Requests are categorised as incidents or routine requests, and routine requests have their own target times. Password resets and account unlocks are self-service. Common fixes are written up so the next one is faster. A short monthly report shows volumes, waiting times and recurring causes, and someone is responsible for removing the top recurring cause each month. When service depends on which technician answers, the pattern described in [when service quality depends on who picks up the ticket](/patterns/when-service-quality-depends-on-who-picks-up-the-ticket/) is usually close behind.

## Practical next actions

1. **Count the queue.** For one month, log every IT request, however it arrives, with the date raised and the date resolved.
2. **Separate incidents from routine requests** and agree target resolution times for each with your provider.
3. **Turn on self-service password reset** and make registration part of onboarding.
4. **Enable secure remote assistance** so simple fixes do not wait for a site visit.
5. **Write down the five most common fixes** and share them with staff.
6. **Review the top recurring cause monthly** and fix it at source.

Regular attention is cheaper than repeated firefighting, a theme explored in [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/). Designing and running this kind of support flow is part of Mellorca's [managed digital operations](/services/managed-digital-operations/) work.

## Bottom line

Routine IT problems are cheap to fix and expensive to leave waiting. When requests have no single queue, no target times and no self-service, the business pays for the delay in salaried hours every week. Measuring how long ordinary requests actually take is usually enough to show whether the support arrangement is protecting productivity or quietly taxing it.
