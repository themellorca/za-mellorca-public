---
hub: insights
record_id: INS-106
slug: how-to-find-which-handoffs-are-slowing-your-work-down
title: How to identify the handoffs that cause delays
description: Most delay sits between people, not inside tasks. A practical way to measure waiting time at each handoff and pick the few that deserve fixing first.
lead: Most delay sits between people, not inside tasks. A practical way to measure waiting time at each handoff and pick the few that deserve fixing first.
category: Workflow and Process Design
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Workflow and Process Design
sources:
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
  - Working with WIP limits for kanban - Atlassian | https://www.atlassian.com/agile/kanban/wip-limits
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - What is Kanban in Project Management? | https://www.atlassian.com/agile/kanban
related:
  - What should be measured at each stage of a workflow? | /insights/what-to-measure-at-each-stage-of-a-business-workflow/
  - Why software configuration should follow workflow design | /insights/why-software-configuration-should-follow-workflow-design/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
summary: Most delay sits between people, not inside tasks. A practical way to measure waiting time at each handoff and pick the few that deserve fixing first.
layout: plain
---
When a customer complaint reaches the owner of a Johannesburg engineering supplier, the instinct is to ask who was slow. After a short investigation the answer is usually that nobody was. The sales coordinator processed the order within an hour. The planner scheduled it the next morning. The workshop started two days later. Each person did their part promptly, yet the customer waited nine days for a job that needed about one day of actual work. The delay lived in the gaps: the points at which work passed from one person or team to another.

These gaps are handoffs, and they are the most common source of avoidable delay in a business. They are also hard to see, because nobody owns the time between two people. This article shows how to find the handoffs that cost you the most, using evidence rather than hunches.

## Why handoffs are where time disappears

A task has someone working on it. A handoff has nobody working on it. The item sits in an inbox, a shared folder, a chat thread or someone's memory until the receiver notices, understands it and has capacity to start. If information is missing, there is another loop of questions and answers before real work can begin.

That is why a department can be efficient by every measure it keeps and still be part of a slow process. The measures cover the work, not the waiting. IBM's explanation of [process mining](https://www.ibm.com/think/topics/process-mining) draws the same distinction: by looking at the timestamps between events in a system, you can see the time between steps and not only the time within them, and so find the bottlenecks. The organisational view, which shows which roles or departments are involved, is useful for exactly this reason: it shows where work crosses a boundary.

## Step one: choose one process and one measure

Do not try to review the whole business. Pick a process that customers feel, such as order to delivery, quote to acceptance, or new client to first invoice. Then choose one measure: the elapsed time from start to finish. Write down what the business promises and what actually happens on a typical case. The distance between the two is the size of the prize.

## Step two: list the handoffs in order

Walk through three or four recent cases and list every point at which work moved from one person, team or system to another. Include the ones that feel trivial. Typical handoffs include:

- a salesperson passing an accepted quote to operations;
- operations asking finance to check credit or raise a deposit invoice;
- a request passing from a branch to head office for approval;
- work moving between your business and an outside party such as a courier, auditor or supplier;
- a shift handover, including the evening-to-morning handover when work is paused.

It is common to find eight or ten handoffs in a process that everyone describes as having four steps. A fuller approach to drawing the sequence is in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/).

## Step three: measure the waiting at each handoff

For each handoff, record two timestamps: when the sender considered the work passed on, and when the receiver actually started. The difference is the handoff delay. You can often get these without new tools.

- Email: the sent time of the request and the time of the first substantive reply.
- CRM or ticketing system: the stage-change timestamp and the time of the next logged activity.
- Paper or spreadsheet: ask the receiver to write the time on the item for two weeks.
- Chat: the message time and the time of the first acknowledgement that shows real engagement, not just an emoji.

Add a second measure: how often the receiver had to go back with a question. A handoff that is fast but triggers a clarification round almost every time is slow in effect. The pattern of chasing that results is described in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

## Step four: look for the signals

Once you have even a small sample, certain patterns separate the handoffs that matter from the ones that do not.

1. **Long and variable waits.** If a handoff takes anywhere from ten minutes to four days, there is no reliable routine behind it.
2. **Piles.** Where work accumulates before a person or team, that point is a constraint. Atlassian's explanation of work-in-progress limits notes that limiting the work in a stage makes bottlenecks and blockers visible, which is why a visible queue is more useful than a hidden one.
3. **Rework loops.** Work that goes back to the sender for missing information is a sign that the handoff does not carry what the receiver needs. See [how to find rework inside a business process](/insights/how-to-find-rework-inside-a-business-process/).
4. **Dependence on memory.** If the handoff works only when a particular person remembers to do it, it will fail on leave days. [How to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) covers the remedy.
5. **Cross-boundary handoffs.** Those between departments, sites or companies are usually slower than those within a team, because priorities, tools and incentives differ.

## Step five: rank, then fix the top few

Multiply the average delay at each handoff by how often it occurs per month and by a rough cost, such as the value of the delayed invoice or the cost of the customer's time lost. A two-day delay on a handoff that happens twice a month matters less than a four-hour delay that happens sixty times. Rank the results and work on the top two or three only.

The remedies are usually modest. Common ones are a standard handoff note that lists exactly what the receiver needs; a shared queue instead of a personal inbox, so absence does not stop work; a named owner for the item until the receiver accepts it; and an agreed response time. Where a handoff is a pure transfer of data between systems, it may be a candidate for automation, but only once the underlying process is sound, as [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/) argues. IBM's overview of [workflow automation](https://www.ibm.com/think/topics/workflow-automation) notes that automation replaces manual tasks with software that carries out all or part of a process, which is most valuable when the manual transfer is the slow part.

## Avoid the usual traps

- **Blaming the receiver.** The aim is to improve the handoff, not to find a slow person. Present results as findings about the process.
- **Measuring only the average.** The worst cases are what customers remember. Look at the longest waits as well.
- **Fixing a handoff that shifts the queue.** Speeding up a step in front of a constraint only builds a larger pile at the constraint. Fix the constraint first.
- **Ignoring the handoffs outside the building.** Clients, suppliers and regulators such as SARS add their own waiting time. You cannot control it, but you can plan around it and chase on a schedule.

## An illustrative example

The following is a hypothetical case. A Port Elizabeth company that fits out commercial kitchens promised delivery within ten working days but averaged sixteen. Tracing four recent orders showed seven handoffs. Most were quick, but two stood out: the wait between quote acceptance and the deposit invoice being raised averaged three days, and the wait between the deposit arriving and the workshop being told averaged two and a half.

Both depended on someone remembering to send an email. The company created a shared order board with a card for each job, named an owner for each stage, and made the card move automatically to the workshop column when finance ticked "deposit received". Average delivery fell to eleven working days within two months, without anyone working faster.

## The point

Delay is rarely about effort. It is about the unowned time between people. List the handoffs, timestamp them, look for long, variable, piled-up or memory-dependent waits, and fix the few that cost the most. The same people will deliver sooner, and the business will stop discovering lateness only when a customer complains.
