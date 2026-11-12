---
hub: patterns
record_id: PAT-277
slug: when-growth-makes-the-business-feel-less-efficient
title: When Growth Makes the Business Feel Less Efficient
description: When more customers and staff make the business feel slower rather than stronger, informal coordination has usually run out. Designing ownership, visible work status and defined handoffs restores the link between headcount and output.
lead: When more customers and staff make the business feel slower rather than stronger, informal coordination has usually run out. Designing ownership, visible work status and defined handoffs restores the link between headcount and output.
category: Growth, Scale & Headcount Efficiency
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Growth, Scale & Headcount Efficiency
pattern_family: Growth, Scale & Headcount Efficiency
observable_condition: As customers and staff increase, the business feels slower and more effortful: more meetings, more messages, later information and an owner who is busier but less in touch.
primary_identification: Coordination-overhead and operating-model scaling problem: growth has outrun informal coordination through proximity, memory and the owner.
commercial_value_dimensions: productivity, margin, speed, scalability, growth
sources:
  - Brooks's law - Wikipedia | https://en.wikipedia.org/wiki/Brooks%27s_law
  - Communication and Collaboration - Introduction to DevOps on AWS | https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/two-pizza-teams.html
related:
  - Why Do Good Leads Disappear Between Marketing and Sales? | /patterns/why-good-leads-disappear-between-marketing-and-sales/
  - The Process That Gets Slower Every Time Volume Increases | /patterns/the-process-that-gets-slower-every-time-volume-increases/
  - When a Status Update Requires a Staff Member to Investigate | /patterns/when-a-status-update-requires-a-staff-member-to-investigate/
summary: When more customers and staff make the business feel slower rather than stronger, informal coordination has usually run out. Designing ownership, visible work status and defined handoffs restores the link between headcount and output.
layout: plain
---
## Observable condition

The business is doing well. There are more customers, more staff and more work than two years ago. Yet the people who have been there longest say the same thing in different words: it used to be easier. Decisions took a conversation; now they take a meeting. Everyone used to know what was happening; now people find out late. The owner, who once had the whole operation in their head, now spends the day answering questions and still feels out of touch.

No single thing has gone wrong. Each new hire is capable, each new customer is welcome, and each new tool was bought for a sensible reason. But the business as a whole feels slower, noisier and more effortful than it did when it was smaller. Output has grown, just not in proportion to the effort.

## Realisation

This feeling is easy to dismiss as nostalgia or growing pains. It is often a precise signal. When a business is small, much of its coordination happens informally: people sit near each other, overhear conversations, and the owner connects the dots. That informal coordination is free and invisible, so it never appears in anyone's plan. As the business grows, it stops working, and nothing has been built to replace it.

The cost then shows up as effort rather than as a line item. People spend more of their day finding out, checking, confirming and chasing. The business is not inefficient because its people work less hard. It is inefficient because a larger share of their work is coordination.

Realisation prompt: compare how a typical order, job or request moved through the business when it was half its current size with how it moves now. If there are more people involved, more messages exchanged and more meetings needed for the same outcome, growth has added coordination work faster than it has added capacity.

## Identification

This is a **coordination-overhead and operating-model scaling problem**. The business has grown its headcount, customers and tools, but it is still coordinated through the informal mechanisms that worked at a smaller size: proximity, memory, conversation and the owner's personal oversight.

It overlaps with, but is distinct from, the admin-headcount pattern examined in [why revenue growth requires more admin staff](/patterns/why-revenue-growth-requires-more-admin-staff/). That pattern concerns transactional work multiplying with volume. This one concerns the coordination between people multiplying with size.

## Diagnosis

The underlying mechanism is well described in software engineering, and it generalises to any team. Fred Brooks, in *The Mythical Man-Month*, observed that adding people to a late software project tends to make it later. As summarised in the [overview of Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law), two reasons are given: new people need ramp-up time that draws on experienced colleagues, and the number of communication channels grows combinatorially as a team grows, so more time goes on keeping people aligned. Brooks himself described the law as an oversimplification, and the same summary notes that well-structured work with fewer dependencies reduces the effect.

The arithmetic is simple. If everyone may need to coordinate with everyone else, the number of possible pairs is n × (n − 1) ÷ 2. Five people have ten possible pairings; twenty people have one hundred and ninety. Not every pair needs to talk, but without structure the business has no way of knowing which do, so information travels by broadcast, meeting and copy-all.

Several structural factors make this worse:

- **Unclear ownership.** When nobody owns an outcome end to end, more people are drawn into each decision.
- **Invisible work status.** If the state of an order or job is not visible in a system, people must ask, which multiplies messages.
- **Founder as the integration point.** The owner remains the place where information from different teams is joined up, which limits the whole business to one person's bandwidth.
- **Tools added per team.** Each team adopts tools that suit it, so information is spread across more places.
- **Undefined handoffs.** Work moves between people by conversation rather than by a defined handoff with the information attached.

Some large organisations respond by deliberately limiting team size and giving teams end-to-end ownership. Amazon's [two-pizza team principle](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/two-pizza-teams.html), described in an AWS whitepaper, links small teams with better collaboration and with ownership of a process end to end. The lesson for a smaller business is not to copy Amazon's structure but to recognise that coordination cost is a design variable, not a fact of life.

## Commercial impact

The commercial value at stake is **productivity, margin, speed, scalability and growth**.

- **Productivity.** A growing share of skilled people's time goes on coordination rather than on the work customers pay for.
- **Margin.** If cost grows with headcount while output grows more slowly, margins come under pressure even as revenue rises.
- **Speed.** Decisions wait for meetings, and customers wait for decisions.
- **Scalability.** The business can only grow as far as its informal coordination stretches. Hiring more people adds load as well as capacity, a risk examined in [the cost of scaling by adding headcount](/impact/scaling-by-adding-headcount/).
- **Owner capacity.** The owner is pulled into operational detail, leaving less time for customers, strategy and growth.

The size of the effect is specific to each business and is best estimated from evidence: how many people touch a typical order, how many internal messages it generates, and how much management time goes on status and coordination.

## Common misidentification

The first instinct is often to hire a manager, add a weekly meeting, or buy a collaboration tool. Each adds another layer through which coordination must pass. A second instinct is to blame people for poor communication. Communication is rarely the root cause; the absence of shared structure is. The broader dynamic is explored in [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/).

## Possibility

A business that scales well replaces informal coordination with designed coordination. Work items such as orders, jobs and requests carry their own status, owner and history, so people can see rather than ask. Ownership is defined end to end for each core process. Handoffs happen through systems with the necessary information attached. Teams are organised so that most decisions can be made within them, and the owner is no longer the integration point.

In that state, adding a person adds capacity without adding a matching amount of coordination.

## Intervention

1. **Measure the coordination load.** For one core process, count the people involved, internal messages and meetings per item, and compare with how it worked when the business was smaller.
2. **Assign end-to-end process owners.** Give each core process, such as quote-to-cash or order-to-delivery, one accountable owner.
3. **Make status visible.** Put work items in a shared system so that progress can be seen rather than asked about, which directly reduces the chasing described in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).
4. **Define handoffs.** Agree what information must accompany work as it moves between teams.
5. **Move the owner out of the middle.** Identify decisions only the owner currently makes and set rules or delegations for the routine ones.
6. **Consolidate tools around processes** rather than around teams, so information sits where the process needs it.

## An illustrative example

The following is illustrative, not a client case. A Johannesburg signage company grows from eight to twenty-five staff in three years. At eight, the owner took every order, briefed design and production across one table, and knew every job's status. At twenty-five there are sales, design, production and installation teams. Each job now generates a stream of WhatsApp messages and a Monday meeting that runs past an hour. Installers arrive without final artwork; sales cannot tell customers when jobs will be ready. Every individual is busy and competent. The business simply never built a way for jobs to carry their own status between teams.

## Practical diagnostic questions

- Are more people involved in a typical order or job than when the business was smaller?
- Do staff learn about changes by asking, or by seeing them in a system?
- Does the owner remain the place where information from different teams is joined up?
- Has the number of internal meetings grown faster than the number of customers?
- Does adding staff noticeably increase output, or mostly increase activity?

## Bottom line

When growth makes a business feel less efficient, the feeling is often accurate. Informal coordination that worked at a smaller size has run out, and coordination work is consuming the capacity growth was meant to add. Designing ownership, visibility and handoffs restores the link between more people and more output.
