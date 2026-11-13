---
hub: patterns
record_id: PAT-329
slug: why-systems-slow-down-at-the-moment-demand-increases
title: Why systems slow down at the moment demand increases
description: A busy month should be good news, yet the business slows, errors rise and the team works late. Here is why throughput falls as demand climbs.
lead: A busy month should be good news, yet the business gets slower, errors rise and the team works late. Here is why throughput falls just as demand climbs, and what to change first.
category: Scale, Capacity & Growth
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Scale, Capacity & Growth
pattern_family: Scale, Capacity & Growth
observable_condition: During busy periods throughput drops sharply, errors and rework rise, staff work late and customers wait, even though demand is higher.
primary_identification: Capacity collapse under load: the narrowest unmeasured step is exhausted first, and its failures create repeat work that overloads it further.
commercial_value_dimensions: Peak-period revenue, customer trust, staff retention, rework and overtime cost
sources:
  - Google SRE - Cascading Failures: Reducing System Outage | https://sre.google/sre-book/addressing-cascading-failures/
  - Queue-Based Load Leveling Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling
  - Autoscaling Guidance - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling
related:
  - Why a process that works for 20 customers breaks at 200 | /patterns/why-a-process-that-works-for-20-customers-breaks-at-200/
  - When customers know their order is late before your team does | /patterns/when-customers-know-their-order-is-late-before-your-team-does/
  - When staff get blamed for errors their systems created | /patterns/when-staff-get-blamed-for-errors-their-systems-created/
  - Which processes usually break first during growth | /insights/which-business-processes-break-first-when-a-company-grows/
summary: A busy month should be good news, yet the business gets slower, errors rise and the team works late. Here is why throughput falls just as demand climbs, and what to change first.
layout: plain
---
## Observable condition

A Johannesburg online retailer runs a successful month-end promotion. Orders double over three days. By the second afternoon the order screen takes half a minute to load, the picking list is a day behind, customer emails about delivery dates are stacking up, and two staff are re-entering orders that the website failed to pass through. Yesterday the business was coping. Today, with only twice the volume, it is close to stopping.

The same pattern shows up outside retail. A quarter-end rush at an accounting practice makes the practice management software crawl just when every client wants their figures. A new contract at a logistics company triples the number of tracking queries, and the single person who answers them can no longer answer any of them promptly. A payroll run on the 25th takes an hour on an ordinary month and four hours on a heavy one, with errors that nobody saw before.

The unsettling part is the shape of the curve. Output does not rise gently and level off. It rises, bends, and then falls. Doubling the demand does not halve the speed. It can bring the whole operation to a standstill.

## Realisation

A business that handles volume comfortably is often one that is only barely handling it. Slack, in the form of idle time, spare capacity and quiet hours, is what allows small hiccups to be absorbed. Once demand uses up that slack, every hiccup turns into a queue, every queue creates rework, and rework becomes more demand on the same people and systems.

[Google's engineering guidance on cascading failures](https://sre.google/sre-book/addressing-cascading-failures/) describes the same dynamic in software: when part of a system is overloaded and begins to fail, the remaining parts take on its work, become overloaded themselves, and fail in turn. The mechanism is not limited to servers. Staff, approvals and spreadsheets all behave this way when pushed past what they can absorb.

**Realisation prompt:** think of your last unusually busy week. Did the work take twice as long, or did it take far longer than twice, with more mistakes and more chasing?

## Identification

This is a pattern of capacity collapse under load. The visible symptom is a sharp slowdown, errors and overtime during peaks. The common assumption is that the business needs more people or a bigger server. The structural cause is that the process has a narrow point, usually unmeasured, whose capacity is exhausted first, and that failures at that point feed more work back into the system.

The Insight [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/) describes the long-term version of this, as volume rises over years. The Pattern [why small tasks become expensive at scale](/patterns/why-small-tasks-become-expensive-at-scale/) looks at per-task cost. This Pattern concentrates on the short peak and the sudden loss of speed.

## Diagnosis

- **One step sets the limit.** Whatever has the lowest capacity, whether a person, an approval, an integration or a licence limit, decides how much the whole process can finish. Everything upstream simply piles up in front of it.
- **Utilisation is already high on a normal day.** If a person or system is busy 90% of the time, a modest rise in demand pushes it past capacity, because there is no margin for the work arriving in bursts.
- **Failures create repeat work.** A failed sync means re-keying. A late order means a status query. Each chaser adds to the load at the narrowest point.
- **Manual steps do not scale smoothly.** A person cannot be doubled by Thursday. Microsoft's guidance on auto-scaling notes that elastic capacity has to be designed, with rules for when to add and release it. Many businesses have no equivalent rule for people or process.
- **Everything arrives at once.** Systems that were sized for the average day meet a peak with no buffer between the sender and the receiver. Microsoft's description of queue-based load levelling explains why placing a queue between a task and a service smooths demand peaks that would otherwise overload it.
- **Load-shedding and power cuts compound it.** In South Africa, an outage or unstable connection at the busiest hour turns a slowdown into a stoppage and leaves a backlog to clear afterwards.

## Commercial impact

The commercial value at stake is revenue captured during peaks, customer trust, staff retention and the cost of rework.

Peaks are when money is made. A retailer, a seasonal service provider or a firm with a filing deadline earns a disproportionate share of its income in a few days. If the system fails in exactly those days, orders are lost, abandoned or refunded, and the marketing spend that created the demand has been partly wasted.

The damage to customers outlasts the peak. People who experienced a slow or failed order remember the business as unreliable, and they do not return for the next campaign. Staff who work late through every rush tire quickly, and errors made at midnight create more corrections the next day. Overtime, temporary staff and courier recoveries are costs that rarely appear next to the sales that caused them.

It also limits ambition. A management team that knows the business will struggle if demand doubles becomes cautious about winning bigger accounts or running bigger campaigns. The Pattern [how disconnected tools quietly limit scale](/patterns/how-disconnected-tools-quietly-limit-scale/) covers a closely related ceiling.

## Common misidentification

The usual response is to add people at the point where the queue is visible. If the real bottleneck is an approval, a licence cap or a manual import further along, the extra staff simply move the queue. Another common response is to upgrade the main system or hosting package. That helps only if the limit was the hardware, and often it is a rule, a person or a connection between two tools.

A third response is to blame the promotion for being too successful. The better reading is that demand revealed a weakness that had always been present. The Insight [why growth exposes problems that were already there](/insights/why-growth-exposes-problems-that-were-already-there/) makes this point directly.

## Possibility

In a better state, the business knows the capacity of its narrowest steps, in orders per hour or jobs per day, and knows how close a normal day runs to that limit. Peaks are anticipated: the sales calendar is shared with operations and IT, and extra capacity is arranged before the campaign launches, not during it.

Work that arrives faster than it can be handled waits in an orderly queue, with customers told what to expect, rather than failing silently. Microsoft's [queue-based load levelling pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) describes using a queue as a buffer between a task and the service it calls, which smooths intermittent heavy loads. Its [autoscaling guidance](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) covers adding resources as load grows, while cautioning that autoscaling is not an instant solution. Repeat work is low because failures are rare and visible. A rise in demand is welcome, because the team has rehearsed what happens when it arrives.

## Intervention

1. **Find the narrowest step.** Take the last peak and follow one order or job from start to finish. Note where work waited longest and where staff worked overtime. That is usually the constraint.
2. **Measure its capacity and its normal load.** If a step runs above roughly four-fifths of capacity on an ordinary day, a peak will break it.
3. **Share the demand calendar.** Promotions, month-ends, deadlines and contract starts should be known to operations and IT weeks ahead, with an estimated volume.
4. **Add a buffer where bursts hit.** Introduce a queue, a batch window or a holding status so that spikes are absorbed and processed at a steady rate.
5. **Cut the repeat work.** Fix the failure that causes re-keying or customer chasers, and send proactive status updates so customers do not need to ask.
6. **Rehearse the peak.** Run a small test at one and a half times the expected volume, and write down who does what if a system or the power fails. The Insight [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/) is a useful companion.

## Diagnostic questions

- Which single step limits how much work you can finish in a day?
- How busy is that step on an ordinary day?
- Do operations and IT know about promotions and deadlines before they start?
- What happens to orders or requests that arrive faster than they can be handled?
- When did you last test the business at above-normal volume?

## Bottom line

Systems slow down when demand increases because the spare capacity that hid their weaknesses has been used up, and the problems that follow create more work for the same narrow point. Finding that point, sharing the demand calendar and building a buffer are modest steps, and they decide whether a busy month earns revenue or loses it.
