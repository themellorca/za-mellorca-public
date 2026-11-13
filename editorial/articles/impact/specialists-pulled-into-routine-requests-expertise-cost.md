---
hub: impact
record_id: CPS-023
slug: specialists-pulled-into-routine-requests-expertise-cost
title: When your experts become the help desk: The cost of routine requests
description: When every routine request goes to the most knowledgeable person, you pay specialist rates for simple work. A front door and triage protect expert time.
lead: When every routine request goes straight to the most knowledgeable person, the business pays specialist rates for simple work and delays the projects only they can do. A simple front door and triage protect expert time.
category: Digital Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Specialists pulled away from high-value work to handle routine requests
primary_cost_mechanism: Rate mismatch on routine work, interruption cost and delayed high-value projects
sources:
  - https://www.ics.uci.edu/~gmark/chi08-mark.pdf | https://www.ics.uci.edu/~gmark/chi08-mark.pdf
  - What Is a Help Desk? - IBM | https://www.ibm.com/think/topics/help-desk
  - Set up a knowledge base for self-service - Jira Service Management Data Center 11.3 - Atlassian Documentation | https://confluence.atlassian.com/servicemanagementserver/set-up-a-knowledge-base-for-self-service-956713310.html
related:
  - The human dispatcher: The cost of manually routing every incoming request | /impact/manually-assigning-incoming-requests-routing-delay-cost/
  - When every decision waits for one person: The cost of a decision bottleneck | /impact/work-stalls-when-decision-maker-unavailable-cost/
  - Recurring tasks that live in someone's memory: The cost of missed work | /impact/recurring-tasks-relying-on-memory-missed-work-cost/
summary: When every routine request goes straight to the most knowledgeable person, the business pays specialist rates for simple work and delays the projects only they can do. A simple front door and triage protect expert time.
layout: plain
---
## The tolerated pain

Every business has specialists: the senior engineer who designs the complex jobs, the financial controller who manages tax and funding, the one person who really understands the ERP system, the experienced estimator whose quotes win work. They are expensive, hard to replace and usually overloaded.

They are also the people everyone goes to. A password needs resetting, so someone asks the person who set up the system. A customer wants a copy of an invoice, so the request lands with the controller. A junior technician needs a standard specification, so they phone the senior engineer. Each request is reasonable and quick. Together they turn the business's most valuable people into an informal help desk.

This is related to, but different from, two problems covered elsewhere. [The cost of high-value employees doing low-value admin](/impact/high-value-employees-doing-low-value-admin/) deals with clerical work specialists do themselves because processes are broken. Repeated questions caused by missing documentation are another variant. This article is about inbound requests: routine work that arrives at a specialist's desk because there is no other place for it to go.

## Why businesses tolerate it

- **Going to the expert is fastest.** For the person asking, the expert gives a quick, reliable answer.
- **Experts like to help.** Being the go-to person is satisfying, and saying no can feel unhelpful.
- **There is no front door.** Without a shared request channel, people use whoever they know.
- **Routine and complex requests look alike on arrival.** Nobody sorts them, so everything goes to the person most likely to know.
- **The cost is invisible.** The specialist's salary is fixed, so lost hours never appear as an expense.

## What the evidence shows

Interruptions are not free even when the request is quick. In a 2008 study, [The Cost of Interrupted Work: More Speed and Stress](https://www.ics.uci.edu/~gmark/chi08-mark.pdf), Gloria Mark of the University of California, Irvine, and colleagues at Humboldt University found that people completed interrupted tasks in less time with no difference in quality, but did so by working faster, at the price of more stress, higher frustration, time pressure and effort. For a specialist handling a steady stream of routine requests, that means hidden strain on top of the lost time, which in turn raises the risk of burnout and resignation.

Support teams have long dealt with this by sorting requests. IBM's explainer on [help desks](https://www.ibm.com/think/topics/help-desk) describes knowledge bases that guide people to answers before they need an agent, and cites research suggesting that up to 25% of help desk tickets can be resolved by the person asking. Atlassian's guidance on [setting up a knowledge base for self-service](https://confluence.atlassian.com/servicemanagementserver/set-up-a-knowledge-base-for-self-service-956713310.html) describes the same idea: people find answers themselves, which deflects requests, while specialists share their expertise once in articles that others reuse. Neither source measures your business, but the approach transfers well outside IT.

## Operational symptoms

- specialists who say they only get "real work" done early in the morning or after hours;
- complex projects, designs or analyses that slip week after week;
- long chat and email threads asking the same experts for routine items;
- service quality that depends on whether the expert is available, a pattern described in [when service quality depends on who picks up the ticket](/patterns/when-service-quality-depends-on-who-picks-up-the-ticket/);
- junior staff who never learn to resolve routine issues because the expert always does it;
- specialists showing signs of fatigue or talking about leaving.

## How the pain becomes money

- **Rate mismatch:** routine work is paid at specialist rates rather than at the cost of the right level of support.
- **Interruption cost:** every request breaks concentration, so the expert's complex work takes longer.
- **Delay cost:** high-value projects, quotes and improvements are pushed back, delaying revenue or savings.
- **Retention cost:** overloaded specialists leave, and replacing them is slow and expensive.
- **Capability cost:** other staff stay dependent instead of developing.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Johannesburg engineering services company with 70 staff and five specialists who receive most routine requests.

| Assumption | Value |
| --- | --- |
| Specialists receiving routine requests | 5 |
| Routine requests per specialist per day | 10 |
| Specialist time per request, including regaining focus | 9 minutes |
| Specialist loaded hourly cost | R650 |
| Loaded hourly cost of a trained first-line person | R250 |
| Share of requests that could be handled first-line or by self-service | 70% |
| Working days per year | 225 |

- Specialist time on routine requests: 5 × 10 × 9 minutes = 450 minutes, or 7.5 hours a day
- Annual cost at specialist rates: 7.5 × R650 × 225 = R1,096,875
- Hours that could move: 7.5 × 70% = 5.25 hours a day, or about 1,181 hours a year
- Cost of those hours at specialist rates: 1,181 × R650 = about R768,000
- Cost of the same hours first-line: 1,181 × R250 = about R295,000
- **Illustrative saving: about R473,000 a year**, plus roughly 1,181 specialist hours returned to complex work

The returned hours are often worth more than the saving. If they allow one additional major project, quote or improvement each quarter, the commercial value can exceed the table. Test the assumptions by asking specialists to tally routine requests for two weeks.

## When it becomes commercially urgent

- a specialist resigns, citing workload;
- strategic projects that depend on specialists keep missing deadlines;
- the business is growing, so routine requests grow with headcount;
- customers notice slower responses on complex work;
- the business is considering hiring another specialist to cope with volume.

## What better looks like

The goal is not to cut specialists off. It is to make sure their time is spent on work that needs them.

- **One front door.** A shared mailbox, form or request channel for each type of routine request, rather than personal messages.
- **Simple triage.** Someone, or a simple rule, sorts requests into routine and complex before they reach the specialist.
- **Self-service for the common items.** Short answers to the most frequent requests, written once by the specialist and kept where people look first.
- **A first-line role.** A trained administrator or junior team member handles routine items, escalating only what they cannot resolve.
- **Protected time.** Specialists set blocks for focused work and set office hours for questions.

Specialists need to be part of the design, not its target. Ask them which requests they would happily never see again, and which they want to keep because the contact is useful. Some routine questions are early warnings of bigger problems, and a good triage rule passes those through. The aim is fewer interruptions, not a wall. The general cost of constant interruptions, from any source, is covered in [the financial impact of constant context switching](/impact/pain-employees-interrupted-messages-notifications-context-switching/).

The underlying pattern, where expensive people end up passing information between systems and colleagues, is explored in [why high-value employees become human middleware](/patterns/why-high-value-employees-become-human-middleware/).

## Practical first steps

1. **Tally requests for two weeks.** Ask each specialist to log every routine request, how it arrived and how long it took.
2. **Find the top ten.** Most volume usually comes from a short list of request types.
3. **Write ten short answers.** Have the specialist document how each is handled, in plain language.
4. **Set a front door.** Create one channel per request type and ask people to use it.
5. **Assign first-line ownership.** Name who handles routine requests and when to escalate.

## The bottom line

Every routine request answered by a specialist is paid at specialist rates and costs the business a little of its most scarce capacity. A front door, simple triage and a few written answers move that work to the right level, protect expert time and reduce the strain that drives good people away.
