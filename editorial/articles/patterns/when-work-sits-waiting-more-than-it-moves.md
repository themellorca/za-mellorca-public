---
hub: patterns
record_id: PAT-302
slug: when-work-sits-waiting-more-than-it-moves
title: When Work Sits Waiting More Than It Moves
description: When requests take days but involve only hours of actual work, the delay lives in queues and handoffs. Measuring waiting, making queues visible, limiting work in progress and triggering handoffs shortens turnaround without working harder.
lead: When requests take days but involve only hours of actual work, the delay lives in queues and handoffs. Measuring waiting, making queues visible, limiting work in progress and triggering handoffs shortens turnaround without working harder.
category: Approvals, Handoffs & Bottlenecks
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Approvals, Handoffs & Bottlenecks
pattern_family: Approvals, Handoffs & Bottlenecks
observable_condition: Requests and orders take days or weeks to complete although the active work involved adds up to hours; items spend most of their time waiting between steps.
primary_identification: Flow problem: queue and handoff time dominates lead time, while improvement effort targets the work steps rather than the waiting.
commercial_value_dimensions: speed, cash flow, customer experience, capacity, revenue
sources:
  - Flow Efficiency: A great metric you probably aren’t using - Kanban University | https://kanban.university/flow-efficiency-a-great-metric-you-probably-arent-using/
  - Little's law - Wikipedia | https://en.wikipedia.org/wiki/Little%27s_law
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
related:
  - When Your Team Is Busy but Output Is Not Increasing | /patterns/when-your-team-is-busy-but-output-is-not-increasing/
  - When Growth Makes the Business Feel Less Efficient | /patterns/when-growth-makes-the-business-feel-less-efficient/
  - The Process That Gets Slower Every Time Volume Increases | /patterns/the-process-that-gets-slower-every-time-volume-increases/
summary: When requests take days but involve only hours of actual work, the delay lives in queues and handoffs. Measuring waiting, making queues visible, limiting work in progress and triggering handoffs shortens turnaround without working harder.
layout: plain
---
## Observable condition

A customer's credit application takes eight working days. When someone finally traces it, the actual work adds up to well under two hours: capturing the form, running a check, reviewing the result and setting up the account. The rest of the time the application sat somewhere. It waited in an inbox, waited for a signature, waited for a missing document, waited for the person who handles that type of request to come back from leave.

The same shape appears across many processes. Quotes, purchase orders, job cards, supplier set-ups, refunds and month-end tasks all take days or weeks, yet nobody is idle. Every team feels busy and every person can explain why their part took as long as it did. The work itself is not slow. It simply spends most of its life not moving.

## Realisation

Most improvement effort focuses on the work: faster capture, quicker checks, better tools for the person doing the task. But if an item spends most of its elapsed time waiting, making the work faster barely changes how long the customer waits. Halving a ninety-minute task saves forty-five minutes on an eight-day process.

The realisation is that elapsed time is mostly determined by the gaps between steps rather than by the steps themselves. Those gaps are rarely measured, rarely owned and often invisible, because each item is sitting in a different person's queue looking perfectly normal.

Realisation prompt: pick one process and ask, for a recent item, how long it took end to end and how much of that time someone was actively working on it. If nobody can answer the second question, the business is managing the work but not the waiting.

## Identification

This is a **flow problem**: work items spend more time in queues and handoffs than in value-adding activity. Lean practice describes the gap between total elapsed time and active work time as a primary source of hidden waste.

It is related to the single-approval bottleneck examined in [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/), but it is broader. Approval is one place work waits. Others include handoffs between teams, missing information, batching and overloaded individuals.

## Diagnosis

The visible symptom is long turnaround. The common assumption is that people are slow or under-resourced. The structural causes usually sit in how work flows between steps:

- **Too much work in progress.** When many items are started at once, each waits longer for attention. Little's law, summarised in the [overview of Little's law](https://en.wikipedia.org/wiki/Little%27s_law), relates the average number of items in a system to the arrival rate and the average time each spends in the system. It is widely used in manufacturing to predict lead time from production rate and work in process. Put simply, at the same throughput, more work in progress means longer waits.
- **Handoffs without triggers.** When one step finishes, nothing tells the next person it is their turn. The item waits until someone notices.
- **Incomplete hand-overs.** Work arrives without the information needed, so it waits while someone chases the missing piece.
- **Batching.** Items are processed in weekly or daily batches for convenience, so each one waits for the batch.
- **Specialist queues.** Certain tasks can be done by only one person, and their queue determines everyone's turnaround.
- **Invisible queues.** Nobody can see how many items are waiting where, or how long the oldest has been there.

Two established practices make the waiting visible. Value stream mapping, described by the [Lean Enterprise Institute](https://www.lean.org/lexicon-terms/value-stream-mapping/), diagrams every step in the material and information flow from order to delivery and helps reveal where waste and its sources sit. Kanban practitioners use a measure called flow efficiency: active work time divided by total lead time. In an article on flow efficiency, [Kanban University](https://kanban.university/flow-efficiency-a-great-metric-you-probably-arent-using/) reports the author's experience that teams who are not paying attention to it generally sit around 15%, and cites David J. Anderson's view that anything above 40% is good. Those figures come from knowledge-work teams rather than from a study of South African businesses, but they illustrate how common it is for waiting to dominate.

## Commercial impact

The commercial value at stake is **speed, cash flow, customer experience, capacity and revenue**.

- **Speed.** Customers experience the elapsed time, not the work time. Long waits make the business look slow even when its people are not.
- **Cash flow.** Where the waiting sits between delivery and invoicing, or between order and fulfilment, money arrives later than it needs to.
- **Revenue.** Slow quotes and onboarding give competitors time to win the business.
- **Capacity.** Waiting work generates chasing, status questions and rework, all of which consume time that could go on productive tasks.
- **Predictability.** When most of the elapsed time is queue time, turnaround becomes erratic and promises become hard to keep.

The value of improvement should be estimated from the business's own data: elapsed time against active time for a sample of items, and what faster turnaround would mean for cash, conversion or customer retention.

## Common misidentification

The usual response is to make individual steps faster through automation, extra staff or new software. These help only if they reduce waiting. Automating a ten-minute task does little if the item then waits three days for the next step. The common opposite error is to push people to start more items to keep everyone busy, which raises work in progress and lengthens every wait. The point is developed further in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).

## Possibility

In a stronger state, the business manages flow, not just activity. Each process has visible queues, so anyone can see where items are waiting and for how long. Work in progress is limited, so items finish before new ones start. Handoffs trigger the next step automatically, with the necessary information attached. Specialist bottlenecks are protected and supported, because they set the pace for everyone.

The outcome is shorter and more predictable turnaround without asking people to work harder.

## Intervention

1. **Measure one process.** For a sample of recent items, record when each step started and finished. Calculate active time against total elapsed time.
2. **Map the waits.** Identify where items sit longest and why. Process mining can help when the systems hold timestamps, as discussed in [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/).
3. **Make queues visible.** Show every item's current step and age on a shared board or system view.
4. **Limit work in progress.** Agree how many items each step should hold at once and finish before starting more.
5. **Trigger handoffs.** Use workflow tooling so that completing a step notifies the next owner and carries the required information, a principle covered in [broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/).
6. **Reduce batching** where the batch exists for habit rather than economics.
7. **Only then automate the steps** where active time is genuinely significant.

## An illustrative example

The following is illustrative, not a client case. A Gqeberha vehicle-parts wholesaler takes about a fortnight to open new trade accounts. Sales capture the form, credit checks it, the financial manager approves it and the accounts team sets it up. When the operations manager tracks ten applications, almost all of the elapsed time turns out to be waiting: forms emailed to a shared inbox checked twice a week, approvals batched for Friday, and set-up waiting for a missing company registration document nobody asked for at the start. No step was slow. The fix was to collect the documents up front, route approvals daily and show each application's status on one board.

## Practical diagnostic questions

- For a typical item, how much of its elapsed time is active work?
- Can anyone see how many items are waiting at each step, and for how long?
- Does completing a step automatically tell the next person?
- Are items processed in batches for convenience?
- Does one person's queue set the pace for the whole process?

## Bottom line

When work sits waiting more than it moves, faster work will not fix slow turnaround. Measuring the waiting, making queues visible, limiting work in progress and triggering handoffs shortens elapsed time where customers actually feel it.
