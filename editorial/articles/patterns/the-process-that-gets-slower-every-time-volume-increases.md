---
hub: patterns
record_id: PAT-020
slug: the-process-that-gets-slower-every-time-volume-increases
title: The Process That Gets Slower Every Time Volume Increases
description: When turnaround grows much faster than volume, a process has usually lost its headroom. Knowing its capacity, separating simple from complex work and reducing effort per item restores the margin to grow.
lead: When turnaround grows much faster than volume, a process has usually lost its headroom. Knowing its capacity, separating simple from complex work and reducing effort per item restores the margin to grow.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: A modest increase in volume produces a much larger increase in turnaround time for a process handled by the same team.
primary_identification: Capacity-and-queueing problem: the process runs so close to its limit that waiting time dominates and grows sharply with volume.
commercial_value_dimensions: speed, customer experience, revenue, cash flow, staff resilience, scalability
sources:
  - Google SRE - Cascading Failures: Reducing System Outage | https://sre.google/sre-book/addressing-cascading-failures/
  - Google SRE: Load Balancing with Client Side Throttling | https://sre.google/sre-book/handling-overload/
  - Takt Time - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/takt-time/
related:
  - When Copy-and-Paste Becomes Part of the Job Description | /patterns/when-copy-and-paste-becomes-part-of-the-job-description/
  - When New Business Brings More Paperwork Than Profit | /patterns/when-new-business-brings-more-paperwork-than-profit/
  - When Manual Exceptions Become the Normal Process | /patterns/when-manual-exceptions-become-the-normal-process/
summary: When turnaround grows much faster than volume, a process has usually lost its headroom. Knowing its capacity, separating simple from complex work and reducing effort per item restores the margin to grow.
layout: plain
---
## Observable condition

A year ago, a new customer account was opened within two days. Volumes have risen by perhaps a quarter since then, and the same team still handles the work. Nobody has left, nothing in the process has changed, and yet account opening now takes a week or more. In busy months it takes two. The team is not working less hard. If anything they are working harder, and the delay seems to grow faster than the extra volume would explain.

The same shape shows up in quoting, claims, job scheduling, returns and supplier payments. A modest rise in demand produces a disproportionate rise in turnaround time. Managers are puzzled, because the arithmetic does not seem to add up: twenty-five per cent more work should mean, at worst, twenty-five per cent more delay.

## Realisation

That arithmetic assumes the process behaves in a straight line. Most processes do not. When a team has spare capacity, new work is picked up almost immediately and the elapsed time is close to the time it takes to do the work. As the team approaches the limit of what it can handle, each new item increasingly has to wait behind others. Close to full capacity, a small increase in arrivals creates a long queue, and the queue, not the work, sets the turnaround.

The realisation is that a process running near its limit has no tolerance for variation. A slightly busier week, one person on leave or a cluster of complicated cases is enough to push the queue up sharply, and it can take weeks to drain. The process did not become slower because the work changed. It became slower because it lost its headroom.

Realisation prompt: for one core process, compare how long items took when volumes were lower with how long they take now, and how full the team's week is in each period. If turnaround has risen much faster than volume, the process is likely operating near capacity.

## Identification

This is a capacity-and-queueing problem: a process whose capacity is roughly fixed is being run so close to its limit that waiting time dominates elapsed time and grows sharply with each increase in volume. Engineers who run large computer systems describe the same behaviour. Google's site reliability guidance on [addressing cascading failures](https://sre.google/sre-book/addressing-cascading-failures/) notes that when a server is at capacity its queues saturate, so requests wait longer, and it recommends keeping queues short relative to capacity. The principle carries over to people and paperwork.

It is related to, but distinct from, [when work sits waiting more than it moves](/patterns/when-work-sits-waiting-more-than-it-moves/), which deals with waiting caused by handoffs and batching at any volume. This pattern is about how waiting grows as volume approaches the capacity of the process.

## Diagnosis

The visible symptom is turnaround that worsens out of proportion to volume. The common assumption is that staff are struggling or that the work has become harder. The structural causes are usually found in how capacity and demand meet:

- **Capacity planned to the average.** The team can cope with an average week, so it is sized for one. But demand is rarely average; peaks arrive and there is nothing in reserve.
- **Uneven arrivals.** Work comes in clusters at month-end, after a marketing campaign or on Monday mornings, creating queues that the quieter days never fully clear.
- **Variable task times.** A mix of simple and complicated cases in the same queue means simple items wait behind complex ones.
- **Manual effort per item.** Because each item needs the same human effort, capacity grows only when people are added.
- **Interruptions from the queue itself.** As waits lengthen, customers chase and staff answer status queries, which takes time from processing and lengthens the queue further.
- **No signal before the breaking point.** Nobody tracks how full the process is, so the first warning is a complaint.

The last two causes compound. Google's guidance on [handling overload](https://sre.google/sre-book/handling-overload/) describes how systems that are not designed for excess load suffer as tasks compete for resources, and why it is better to prioritise deliberately as utilisation approaches its limits than to let everything slow down together.

## Commercial impact

The commercial value at stake is speed, customer experience, revenue, cash flow and staff resilience.

- **Speed and customer experience.** Customers experience the queue. A process that took two days and now takes ten feels like a different company.
- **Revenue.** Slow quoting and onboarding give competitors a window, and growth itself becomes the cause of lost sales.
- **Cash flow.** Where the slowing process sits between delivery and invoicing, money arrives later as volume rises.
- **Staff strain.** Teams running at their limit have no time to improve the process, train others or recover from absence.
- **Growth ceiling.** The business can only grow as fast as it can add capacity to its slowest manual process.

The value of change should be measured from the business's own turnaround and volume data rather than assumed.

## Common misidentification

The usual response is to push the team harder or to add a person once the backlog becomes painful. Overtime can clear a queue temporarily, but if capacity stays at the edge of demand, the queue returns with the next busy period. Adding a person helps, but the wider problems with that approach are examined in [when every rise in workload needs another hire](/impact/scaling-by-adding-headcount/). A second error is to treat every slowdown as a performance issue, which damages morale without addressing capacity. The broader way growth exposes the limits of arrangements that once worked is discussed in [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/).

## Possibility

In a stronger state, the business knows how much each core process can handle and how close it is to that limit. Lean practice uses [takt time](https://www.lean.org/lexicon-terms/takt-time/), the available working time divided by customer demand, to match the pace of work to the pace of demand. A business that knows its takt time for, say, account opening can see in advance when demand will exceed capacity. Routine items move through with little manual effort, so capacity rises without matching headcount. Simple and complex cases are separated, peaks are smoothed where possible, and the process keeps deliberate headroom so that a busy week causes a small delay, not a crisis.

## Intervention

1. **Measure arrivals, capacity and turnaround together.** Track how many items arrive each week, how many are completed and how long they wait.
2. **Calculate the pace demand requires.** Compare it with the pace the team can sustain, including leave and interruptions.
3. **Separate simple from complex work.** Give routine items a fast lane so they are not stuck behind cases that need investigation.
4. **Smooth arrivals where you can.** Spread billing runs, stagger campaign launches or offer booking slots.
5. **Reduce effort per item.** Remove re-keying and manual checks through integration and automation, which raises capacity without adding people.
6. **Set an early-warning threshold.** Alert when queue size or age passes a level that signals the process is nearing its limit.
7. **Make status visible to customers.** Fewer status queries means more time for processing.

## An illustrative example

The following is illustrative, not a client case. A Pretoria equipment-hire business notices that delivery scheduling, once same-day, now runs two to three days behind on Mondays and Fridays. Tracking a month of bookings shows that most arrive on those days and that one scheduler handles all of them alongside phone queries. The business introduces online booking with preferred delivery slots, lets the system propose routes for standard deliveries, and keeps the scheduler for unusual jobs. Busy days still create a short queue, but it clears the same day.

## Practical diagnostic questions

- Has turnaround in your core processes grown faster than volume?
- Do you know how many items each process can handle in a week?
- How much of the week is spare capacity in your busiest team?
- Do simple items wait behind complex ones in the same queue?
- What warning do you get before a process falls behind?

## Bottom line

A process that slows sharply as volume rises has usually lost its headroom rather than its efficiency. Knowing its capacity, separating simple from complex work, smoothing demand and reducing manual effort per item restores the margin that lets a business grow without its turnaround times collapsing.
