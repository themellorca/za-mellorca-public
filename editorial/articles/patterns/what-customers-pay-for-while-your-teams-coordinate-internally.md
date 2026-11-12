---
hub: patterns
record_id: PAT-087
slug: what-customers-pay-for-while-your-teams-coordinate-internally
title: The Cost of Making Customers Wait for Internal Coordination
description: A customer asks for something simple and waits days. The delay is rarely effort. It is the time the request spends travelling between people who each hold one piece of the answer.
lead: A customer asks for something simple and waits days. The delay is rarely effort. It is the time the request spends travelling between people who each hold one piece of the answer.
category: Customer Operations & Service Delivery
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Customer Operations & Service Delivery
pattern_family: Customer Operations & Service Delivery
observable_condition: A customer request that takes minutes of actual work waits days for a reply because several internal people must each contribute a piece, and nobody owns the whole response.
primary_identification: Serial internal coordination: the request travels from person to person by message, with no single owner, no visible status and no agreed time limit at each step.
commercial_value_dimensions: Customer retention, response time, staff capacity, revenue timing and service reputation
sources:
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Welcome to Dynamics 365 Customer Service | https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/overview
related:
  - When Customers Can See the Gaps Between Your Systems | /patterns/when-customers-can-see-the-gaps-between-your-systems/
  - Why One Customer Question Has to Travel Through Three Departments | /patterns/why-a-single-customer-question-gets-passed-between-three-departments/
  - When Client Onboarding Becomes a Growth Constraint | /patterns/when-client-onboarding-becomes-a-growth-constraint/
summary: A customer asks for something simple and waits days. The delay is rarely effort. It is the time the request spends travelling between people who each hold one piece of the answer.
layout: plain
---
## Observable condition

A customer emails a Johannesburg equipment supplier: can the order be split into two deliveries, and what would that do to the price? The answer needs three people. Sales must confirm the discount still applies. The warehouse must say whether stock can be released in two lots. The finance clerk must say whether the customer's account allows a second invoice. Each of them could answer in five minutes. The reply goes out on Thursday, three days after the question arrived.

Nobody was idle in those three days. The salesperson forwarded the question to the warehouse on Monday afternoon. The warehouse supervisor was on the floor and read it on Tuesday. He replied to the salesperson, who was at a client. Finance was asked on Wednesday. The customer, meanwhile, sent a polite follow-up on Wednesday morning and a less polite one on Thursday.

This is an illustrative composite, but most owners will recognise the shape of it.

## Realisation

The realisation is that the customer is not waiting for work. They are waiting for movement. The actual effort in the example is perhaps fifteen minutes. The elapsed time is seventy-two hours. Almost all of it is the request sitting in an inbox or on a phone, waiting for the next person to see it.

That changes the question the business asks. "Why are we slow?" invites a search for the slow person, and there usually is none. The better question is "how many hands does a routine request pass through, and what happens to it between hands?"

**Realisation prompt:** pick the last customer request that needed more than one person. Write down the time it arrived, the time each person touched it and the time the customer got an answer. Add up the minutes of work and compare with the elapsed time.

## Identification

This is a pattern of serial internal coordination. The visible symptom is a customer who has to chase. The common assumption is that staff are overloaded or the customer is impatient. The structural cause is that the response is assembled in sequence, by message, with no one accountable for the finished answer.

It differs from the situation described in [why new clients wait while internal teams coordinate](/patterns/why-new-clients-wait-while-internal-teams-coordinate/), which concerns the onboarding of a new account. Here the customer is already established and the request is an ordinary one that arrives on any day.

## Diagnosis

- **The request has no owner.** The person who received it forwards it and assumes it is handled. The people who receive it assume the sender is still managing it. In practice, nobody is.
- **Inputs are collected one at a time.** Asking sales, then the warehouse, then finance means the delays add up. Asking all three at once would cost the longest single wait, not the sum.
- **There is no visible status.** The salesperson cannot tell whether the warehouse has seen the message. The only way to find out is to ask, which is another message and another wait.
- **Time limits are unspoken.** Nobody has said that an internal question should be answered within two working hours, so it is answered when it surfaces.
- **The channel is the wrong shape.** Questions arrive mixed with everything else in a personal inbox or a busy chat group. [Microsoft's documentation for its customer service application](https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/overview) describes representatives managing requests from any channel in one workspace, which is the opposite of a request scattered across private inboxes.
- **Knowledge is held by individuals.** If only the warehouse supervisor knows whether stock can be split, the question must go to him. The related pattern [why service teams spend their day chasing internal answers](/patterns/why-service-teams-spend-their-day-chasing-internal-answers/) describes how much time this consumes.

## Commercial impact

The first cost is the customer's patience. A customer who waits three days for a simple answer begins to wonder what a complicated problem would take. Some will quietly place the next order with a supplier who answers faster. The loss rarely shows up as a complaint. It shows up as an order that did not come.

The second cost is revenue timing. In the example, the customer may delay the order until the answer arrives. A deal that could have been confirmed on Monday is confirmed on Thursday, and every such delay pushes cash later.

The third cost is staff time spent on follow-up. Every "any update?" from a customer triggers an internal "any update?" to colleagues. The work is duplicated: people reply to messages that exist only because earlier messages went unanswered. The Impact note [waiting on colleagues for information](/impact/waiting-on-colleagues-for-information-idle-time-cost/) sets out the idle time this creates.

The fourth cost is reputation. Customers talk, particularly in industries where suppliers are few and procurement people know each other.

## Common misidentification

The usual response is to tell everyone to reply faster. That treats the symptom and makes each person's inbox noisier. Another is to add a coordinator who chases colleagues, which can help but turns one person into a permanent messenger. A third is to buy a new platform without changing how requests are handed over, so the same waits move into the new tool.

## Possibility

In a better state, every customer request that needs more than one person has a single named owner for the response. The inputs needed are requested together, not in sequence. Each request has a visible status and a time limit, and the owner can see at a glance which contribution is outstanding.

Simple automation can carry some of this. [Microsoft describes cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) as automated workflows that can be started by an event such as the arrival of an email and then act across several services. A flow could, for instance, notify the warehouse, finance and sales at once and show who has replied. Its approval features, covered in [Microsoft's approvals guide](https://learn.microsoft.com/en-us/power-automate/get-started-approvals), can also request a yes or no from several people in parallel and record the answers.

Automation is not required to start. A shared list, an agreed owner and a two-hour limit already change the outcome.

## Intervention

The aim is to shrink the time between hands. Start with the three request types customers raise most often.

## Practical next actions

1. **Trace three recent requests.** For each, record the arrival time, every hand-off and the reply time. Mark how much was work and how much was waiting.
2. **Name a response owner.** Decide that whoever receives a customer request owns the answer until it is sent, even when others contribute.
3. **Ask for inputs in parallel.** Replace the forwarding chain with one message, or one shared item, addressed to everyone who must contribute at the same time.
4. **Set an internal time limit.** Agree, for example, that internal questions on customer matters are answered within two working hours, and say what happens when someone is away.
5. **Make status visible.** Keep open customer requests in one shared list that shows owner, outstanding input and age. The guidance in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/) explains why this matters more than reminders.
6. **Write down the common answers.** If the same internal question comes up weekly, such as whether deliveries can be split, record the rule so the question stops needing a person.

## Diagnostic questions

- For the last customer request that needed three people, how many minutes of work did it contain, and how many hours elapsed?
- Who owns the response to a customer request once it is forwarded?
- Are inputs collected one after another or at the same time?
- Can the person holding the customer see where the request is without asking?
- What internal time limit exists for answering a colleague's customer question?

## Bottom line

Customers experience your internal structure as waiting time. Most of that time is not work but requests moving between people without an owner, a status or a limit. Naming one owner, asking for inputs together and making progress visible shortens the wait without anyone working harder.
