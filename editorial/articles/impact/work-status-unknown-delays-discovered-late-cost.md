---
hub: impact
record_id: CPS-402
slug: work-status-unknown-delays-discovered-late-cost
title: "On Track" Until It Isn't: The Cost of Discovering Delays Too Late
description: When managers learn the real status of important work only through meetings and chasing, delays surface after the cheap options to fix them have gone. Visible work states and early blockers change that.
lead: When managers learn the real status of important work only through meetings and chasing, delays surface after the cheap options to fix them have gone. Visible work states and early blockers change that.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Managers not knowing the true status of important work until delays are already expensive
primary_cost_mechanism: Recovery cost of late intervention, penalties and credits, and opportunity cost of decisions made on wrong status
sources:
  - Agile tools and techniques | https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques
  - The Official Guide to The Kanban Method - Kanban University | https://kanban.university/kanban-guide/
  - What is the cumulative flow diagram? - Jira Cloud - Atlassian Support | https://support.atlassian.com/jira-software-cloud/docs/what-is-the-cumulative-flow-diagram/
related:
  - "I Thought You Were Doing It": The Labour Cost of Unclear Responsibilities | /impact/unclear-responsibilities-duplicated-dropped-work-cost/
  - When Your Experts Become the Help Desk: The Cost of Routine Requests | /impact/specialists-pulled-into-routine-requests-expertise-cost/
  - Waiting Weeks for Management Reports: What Late Visibility Costs the Business | /impact/waiting-weeks-for-management-reports-late-visibility-cost/
summary: When managers learn the real status of important work only through meetings and chasing, delays surface after the cheap options to fix them have gone. Visible work states and early blockers change that.
layout: plain
---
## The tolerated pain

Every week the answer is the same: "It's on track." The client installation is on track, the new pricing schedule is on track, the system migration is on track. Then, two days before the deadline, it is not. A supplier never confirmed. A colleague was waiting for an answer nobody knew they needed. Testing found a problem a fortnight ago and it has been sitting in someone's notes ever since.

The work did not suddenly go wrong. It went wrong slowly, and the manager found out late. That gap between when a delay starts and when somebody with authority to act learns about it is the real pain. The later the discovery, the fewer and more expensive the options.

The tooling side of this problem, running work through email threads and private spreadsheets, is covered in [projects run through email threads and private spreadsheets](/impact/pain-projects-managed-through-email-spreadsheets/). This article looks at the reporting side: why status is unreliable even when people are honest, and what it costs.

## Why status reports go wrong

- **Status is an opinion, not an observation.** "On track" is what someone believes. Unless it is tied to visible facts, such as which steps are finished and what is blocked, it reflects optimism more than progress.
- **Nobody wants to be the bearer of bad news.** People hope to recover quietly before the next meeting, so small slips are not reported.
- **Waiting is invisible.** A task that is waiting for a supplier, a client or a colleague looks the same as a task being worked on.
- **Too much is started at once.** When everyone has many things in progress, each moves slowly and none looks clearly late.
- **Status lives in people's heads.** To find out, a manager has to ask, which means status is only as current as the last conversation.

## Operational symptoms

- weekly meetings spent going around the room asking for updates;
- managers messaging individuals to find out where something stands;
- deadlines moved at the last minute, often more than once;
- clients learning about delays before internal leadership does;
- weekend work and overtime concentrated in the final days before a deadline;
- post-mortems that reveal the problem was known to someone weeks earlier.

The Patterns piece [why management finds out too late](/patterns/why-management-finds-out-too-late/) describes how information that exists in the business fails to reach decision-makers in time. The cost described here is what happens next.

## How the pain becomes money

- **Recovery cost:** overtime, courier premiums, rush purchases and contractors brought in to rescue a deadline.
- **Revenue and penalty exposure:** late delivery can delay invoicing, trigger contract penalties or lose renewals.
- **Opportunity cost:** people pulled onto rescues stop work on other commitments, which then slip as well.
- **Cash-flow impact:** work that finishes late is invoiced late, which delays cash the business was counting on.
- **Decision cost:** resources allocated on the basis of wrong status, such as accepting a new client project because the team appears to have capacity.

The underlying principle is simple: a delay found in week two can often be solved by rearranging work. The same delay found in week eight can only be solved with money, or not at all.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Pretoria engineering services firm with 45 staff running about 20 client jobs a quarter.

| Assumption | Value |
| --- | --- |
| Jobs per year | 80 |
| Share with a delay discovered only in the final week | 20% (16 jobs) |
| Recovery cost per late-discovered delay (overtime, rush purchases, contractors) | R18,000 |
| Late-discovered delays that also trigger a penalty, credit or fee concession | 4 at R25,000 each |
| Jobs taken on in the wrong month because capacity looked free | 2, each costing R30,000 in subcontracted work |

- Recovery cost: 16 × R18,000 = R288,000
- Penalties and credits: 4 × R25,000 = R100,000
- Capacity misjudgements: 2 × R30,000 = R60,000
- **Illustrative total: R448,000 a year**, before any lost repeat business

Not all of that is avoidable. Some delays are genuinely unforeseeable. But if earlier discovery halved the late rescues and penalties, the illustrative saving would be R194,000 a year, and the business would have fewer difficult client conversations. The time managers spend asking for updates is a separate cost again. Test the model with your own last year of jobs: how many slipped, when did management find out, and what did recovery cost?

## What makes status trustworthy

Methods developed for knowledge work offer practical help. The GOV.UK Service Manual's guidance on [agile tools and techniques](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques) describes a team wall that shows what the team has done, what it is working on and what is still to do, and short daily stand-ups where people raise problems or dependencies, such as needing help from someone else. The point is that blockers are raised daily, not saved for the weekly meeting.

The [Kanban Guide](https://kanban.university/kanban-guide/) makes two related points. Visualising work that is otherwise invisible improves transparency, and limiting work in progress matters because fully loaded people and systems produce very poor flow. Fewer things in progress means each moves faster and a stalled item stands out.

Status can also be measured rather than reported. Atlassian's documentation on the [cumulative flow diagram](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-cumulative-flow-diagram/) notes that when the area for one stage widens over time, that stage is generally a bottleneck. You do not need that particular tool; the idea is that where work piles up can be seen from the work records themselves.

## When it becomes commercially urgent

- a client complaint, penalty or lost contract traced back to a delay that was known internally;
- growth in the number of concurrent jobs or projects beyond what managers can track in their heads;
- management meetings that consume hours but still produce surprises;
- new contracts with service levels or delivery dates that carry financial consequences.

## What better looks like

1. **Work states are explicit.** Each important job moves through a small number of defined stages that anyone can see.
2. **Waiting is marked as waiting.** Blocked items are flagged with what they are waiting for and since when.
3. **Blockers are raised early.** The norm is to raise a problem the day it appears, and raising one is not treated as failure.
4. **Work in progress is limited.** Teams finish before starting more.
5. **Status updates itself.** Managers read status from the shared record rather than asking for it.

The Insights article [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/) explains why the fix is structural rather than a matter of discipline.

## Practical next actions

1. Pick the ten most important pieces of work in progress and write down, for each, the current stage and what it is waiting for.
2. Look back at the last five delays: note when the problem first appeared and when management learned about it.
3. Define four to six stages for your most common type of job and put every active job on one shared board or list.
4. Add a visible "blocked" marker with a date, and review blocked items first in every meeting.
5. Set a limit on how many jobs each team can have in progress at once.
6. Replace the round-the-room status meeting with a review of the shared board, focused on blockers and decisions.

## Bottom line

Delays are rarely sudden. They are usually known somewhere in the business long before they become expensive. When status depends on asking people, managers learn late and pay for rescues, overtime and disappointed clients. Making work states and blockers visible moves the discovery earlier, when fixing a delay still costs a conversation rather than a premium.
