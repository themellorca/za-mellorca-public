---
hub: impact
record_id: CPS-335
slug: support-staff-manually-routing-tickets-other-departments-triage-labour-delay-cost
title: Support Desks Acting as Switchboards: The Cost of Manual Ticket Triage
description: Billing questions, delivery problems and technical faults all land in one support queue, and agents spend their day forwarding them. The labour is real, and so is the delay customers feel.
lead: Billing questions, delivery problems and technical faults all land in one support queue, and agents spend their day forwarding them. The labour is real, and so is the delay customers feel.
category: Customer Service
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Customer Service
commercial_domain: Customer Service
primary_pain: Support staff read, classify and forward tickets to other departments by hand, using routing rules that exist only in experienced agents' heads
primary_cost_mechanism: Labour cost of manual triage, delay before the right team starts work, repeat contact from lost context, misrouted tickets, and poor reporting on where issues originate
sources:
  - Overview of unified routing | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing
  - Configure work classification rulesets | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-work-classification
  - Creating ticket triggers for automatic ticket updates and notifications | https://support.zendesk.com/hc/en-us/articles/4408886797466-About-triggers-and-how-they-work
related:
  - "Just checking on my order": The labour cost of manual progress updates | /impact/manual-customer-progress-updates-status-message-labour-cost/
  - Online Customers Who Cannot Find Basic Answers: The Cost of Weak Self-Service | /impact/online-customers-cannot-find-basic-answers-weak-self-service-support-cost/
  - Phone calls recorded on notepads: The cost of incomplete customer records | /impact/phone-call-notes-not-recorded-in-shared-system-cost/
summary: Billing questions, delivery problems and technical faults all land in one support queue, and agents spend their day forwarding them. The labour is real, and so is the delay customers feel.
layout: plain
---
## A support team that mostly forwards work

An internet service provider in Pretoria has a support team of eight. Customers write to one address or log one type of ticket, whatever their problem. A typical morning brings billing disputes, installation bookings, router faults, cancellation requests and questions about contracts. The support agents read each one, decide which department should handle it, copy the details into an email or a separate system, and send it on. Some tickets bounce back because they went to the wrong team. Others sit in a departmental inbox until somebody notices. When the manager finally measures it, roughly a third of the team's day is spent deciding where work should go rather than resolving anything.

The example is illustrative, but the pattern is common in businesses where support is the front door for every kind of customer request. The support desk becomes a switchboard, and skilled people spend their time on sorting and forwarding.

## How manual triage builds up

Manual routing usually starts sensibly. When a business is small, one person reads every request and knows exactly who should deal with it. As volumes grow, more channels open, more departments get involved, and the rules for who handles what multiply. Nobody writes those rules down. They live in the heads of experienced agents, which means new staff route slowly and inaccurately, and the business cannot automate what it has never defined.

Several conditions make the problem worse:

- **One generic entry point** for all requests, with no categories or forms that capture the type of issue up front.
- **Different systems in different departments**, so routing means retyping the request somewhere else.
- **No agreed definition of ownership** for edge cases, such as a billing error caused by a failed installation.
- **No feedback loop** when a ticket is sent to the wrong place, so the same mistakes repeat.

## Where the cost appears

### Labour spent on administration

Every ticket that needs reading, classifying and forwarding consumes a few minutes. The following is a hypothetical calculation. If a team handles 2,000 tickets a month and 1,200 need to be routed elsewhere, at four minutes each that is 80 hours a month, or about half of one full-time role spent purely on triage. Add the time spent on tickets that bounce between departments and the figure rises.

### Delay before anyone starts the work

A ticket that waits in a support queue, then waits again in a departmental inbox, has lost hours or days before the right person sees it. For faults, delivery problems and billing errors, that delay is felt directly by the customer, and it often triggers follow-up messages that create more tickets.

### Lost context and repeat contact

Each time a request is copied from one place to another, detail is lost. The receiving department asks the customer to repeat information already provided, and the customer's frustration rises. Repeat contact adds load to the very queue that is already overloaded.

### Poor reporting

When routing happens in email, the business cannot see how long each department takes, which issues are most common or where tickets get stuck. Management decisions about staffing and process are made without data.

### Skilled people doing clerical work

Experienced agents are often the ones trusted with triage because they know the business best. That means the people most capable of resolving difficult problems spend a large share of their time sorting easy ones. Customers with complex issues wait longer, and the business pays specialist salaries for switchboard work. Over time, good agents tire of the role and leave, taking the unwritten routing rules with them.

## Why it is tolerated

Manual triage looks like part of the support job. The people doing it are competent and willing, and the work does get done eventually. The cost is spread across many small actions, so it never looks like a problem worth a project. The related piece on [manually assigning incoming requests](/impact/manually-assigning-incoming-requests-routing-delay-cost/) looks at assignment inside a single team; this article is about the cross-departmental hand-off, where delays and lost context are greatest. The pattern of [service quality depending on who picks up the ticket](/patterns/when-service-quality-depends-on-who-picks-up-the-ticket/) is a common symptom.

## What rule-based routing looks like

Modern helpdesk and service platforms can classify and route requests automatically once the business defines the rules. Microsoft's overview of [unified routing](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing) describes two stages: classification, in which rules or models add information such as required skills, urgency and customer category, and assignment, in which work is prioritised and sent to the best-suited queue and person. Its guidance on [work classification rulesets](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-work-classification) shows the typical format: if a defined condition is met, set certain attributes, such as priority. Zendesk's documentation on [ticket triggers](https://support.zendesk.com/hc/en-us/articles/4408886797466-About-triggers-and-how-they-work) describes the same idea as business rules that run when a ticket is created or updated, including routing new tickets based on initial criteria such as the channel they came from.

Technology only works if the business has done three things first: agreed categories that customers or forms can capture, clear ownership of each category, and a single system or reliable integration so that routed tickets arrive with their full history. Without those, automation simply moves tickets to the wrong place faster. The existing piece on [support requests without clear owners](/impact/support-requests-without-clear-owners-cost/) covers the ownership side.

## Practical next actions

1. **Sample a week of tickets.** Count how many were forwarded to another department, how many went to the wrong place first, and how long each waited before the right team started.
2. **Write down the routing rules agents already use.** Interview your most experienced agents and turn their judgement into a simple table of request types and owners.
3. **Capture the request type at entry.** Add categories to web forms, email subject options or the first question of a chat, so that most tickets arrive already classified.
4. **Automate the clear cases first.** Configure your helpdesk to route the most common, unambiguous categories automatically, and leave genuinely unclear tickets for human triage.
5. **Give departments access to the same ticket.** Route within one system or connect systems so that context travels with the request and customers are not asked to repeat themselves.
6. **Review misroutes monthly.** Track tickets that changed department more than once and adjust the rules accordingly.

Support teams should spend their time solving problems, not deciding who should solve them. Turning unwritten routing knowledge into explicit rules releases capacity, shortens response times and gives management a clear view of where customer issues come from.
