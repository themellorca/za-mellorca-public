---
hub: patterns
record_id: PAT-282
slug: what-growth-reveals-about-systems-that-were-good-enough
title: When Growth Exposes Systems That Were “Good Enough”
description: Good enough is a relationship between a system and a volume. This pattern shows why a bigger contract exposes weak joints and how to find limits before volume does.
lead: Good enough is a relationship between a system and a volume. This pattern shows why a bigger contract exposes weak joints and how to find limits before volume does.
category: Scaling & Growth Constraints
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Scaling & Growth Constraints
pattern_family: growth-constraint
observable_condition: Errors that were rare becoming routine after a volume increase, memory-dependent steps failing, and effort rising faster than output
primary_identification: Readers can estimate how their processes behave at double volume and identify the weakest step
commercial_value_dimensions: Delivery on newly won contracts, margin under strain, staff retention and confidence in capacity decisions
sources:
  - Architecture strategies for optimizing scaling and partitioning - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/scale-partition
  - Architecture strategies for capacity planning - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning
  - Performance Efficiency Pillar - AWS Well-Architected Framework - Performance Efficiency Pillar | https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html
related:
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - Why Signed Deals Stall Before Delivery Begins | /patterns/why-signed-deals-sit-idle-between-acceptance-and-the-first-day-of-delivery/
  - How Disconnected Tools Quietly Limit Scale | /patterns/how-disconnected-tools-quietly-limit-scale/
summary: Good enough is a relationship between a system and a volume. This pattern shows why a bigger contract exposes weak joints and how to find limits before volume does.
layout: plain
---
## Observable condition

A Johannesburg catering company has run for seven years on a handful of tools: a shared calendar for events, a spreadsheet for quotes, a WhatsApp group for the kitchen and an accounting package for invoices. At thirty events a month, the arrangement worked. Then a hotel group signs a contract that triples the volume. Within two months, two events are double-booked, a quote goes out with last year's prices, and the kitchen group is so busy that the head chef mutes it.

The owner's first reaction is surprise. Nothing has changed in how the team works. The same people are using the same tools in the same way, and yet the business feels as though it is falling apart. What has changed is the load, and the load has found the places where the arrangement was only ever adequate.

This is an illustrative example, but many growing South African businesses will recognise the sequence: good results, a bigger contract, then a run of problems that seem to come from nowhere.

## Realisation

The realisation is that "good enough" is not a property of a system. It is a relationship between a system and a volume. A process that handles thirty transactions comfortably may be good enough at thirty and unsuitable at ninety, with no change to the process itself. The owner is not seeing a decline in quality; the owner is seeing a limit.

Cloud architecture guidance expresses the same idea in technical language. Microsoft's Well-Architected guidance states that [a workload that doesn't scale or partition might experience poor performance in high-demand periods](https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/scale-partition). That passage concerns software workloads, but the point carries over to the way a business runs: if the arrangement was designed for a given level of demand, it will show strain when demand exceeds it, and the strain appears first at the weakest joint.

**Realisation prompt:** if next month's volume doubled, which two or three things would break first, and does anyone already know?

## Identification

This is a pattern of hidden thresholds. The visible symptoms are errors that were rare and are now routine, longer working hours for the same output, and a feeling that people are working harder without getting further. The common assumption is that growth has brought in staff or customers who are less careful. The structural cause is that the business never tested its processes against higher volume, so the first test is happening in front of customers.

Microsoft's guidance on [capacity planning](https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning) says it should be done before predicted changes in usage, naming special events and campaigns among the triggers, and the [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html) likewise offers a way to measure a design against best practice and identify areas for improvement. A business can borrow the habit: plan capacity before the contract, not after.

The related Pattern [why a process that works for 20 customers breaks at 200](/patterns/why-a-process-that-works-for-20-customers-breaks-at-200/) explains the arithmetic of this effect. This Pattern is about the moment of exposure itself, and why the people closest to the work are surprised by it.

## Diagnosis

- **Memory carries the load.** At low volume, the owner or a long-serving employee remembers which customers are special, which supplier is slow and which price is out of date. At higher volume, memory is the first thing to fail.
- **Manual steps scale with volume.** Each quote that was typed out in ten minutes is now typed ninety times. Time scales in a straight line; the number of staff does not.
- **Exceptions pile up.** A rare special case, handled informally, becomes a daily occurrence. The Pattern [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/) describes how the informal path takes over.
- **Tools are connected by people.** Data moves between the calendar, the quote sheet and the accounts by someone copying it across. Every extra transaction adds an extra chance for a slip.
- **Nobody owns the end-to-end flow.** Each person is responsible for a piece. When the flow as a whole stops working, there is no one whose job it is to notice.
- **No early signal exists.** The business does not measure turnaround, error rate or backlog, so the first indication that it is near a limit is a customer complaint.

## Commercial impact

The commercial value at stake is the ability to deliver on a contract that has just been won, the margin on that contract, staff retention and the reputation that earned the work.

The most immediate cost is service failure at the moment it matters most. A new, larger customer is also a more visible one. Double-booked events or late invoices to a hotel group do more damage than the same slips for a small client, and they arrive in the first weeks, when the relationship is least forgiving.

The second cost is margin. To cope, the business adds temporary help, pays overtime, or re-does work. These are paid for from the profit on the new contract, which can quietly turn a good deal into a thin one. The Impact note on [five-person processes in a growing business](/impact/five-person-processes-growing-business-scaling-cost/) describes how the cost of a process that never changed rises as the business around it grows.

The third cost is staff. The people who held the system together on memory and goodwill are the people who burn out first. Losing them removes the very knowledge that was compensating for the gaps.

The fourth cost is in the decisions the owner can no longer make with confidence. When capacity is unclear, every new enquiry becomes a gamble: take it and risk failing, or decline it and slow the business.

## Common misidentification

The typical response is to hire. More people can help with a temporary surge, but if the underlying arrangement is unchanged, each additional person adds to the coordination burden, and the problem returns at the next step up. The Pattern [when hiring more people is the automatic answer to process strain](/patterns/when-hiring-more-people-is-the-automatic-answer-to-process-strain/) looks at why this reflex is so strong. A second misreading is to blame the new customer for being demanding. A third is to buy a large system in a hurry, before the actual constraints have been identified, which tends to move the problem rather than solve it.

## Possibility

In a better state, the business knows its current limits before it signs a contract that will test them. It can say, for example, that the quoting process handles around forty requests a month before delays begin, that the calendar is reliable up to a certain number of concurrent events, and that the kitchen needs a structured daily brief rather than a group chat. Growth is then planned as a series of changes to the weakest joints in order, not as an emergency.

It also means being clear about which systems truly need replacing and which only need a small fix. Many "good enough" arrangements can continue for a long time with one or two targeted improvements.

## Intervention

Begin by mapping the order of work from enquiry to payment and marking each step where a person copies, remembers or decides something that could be written down. Estimate how each step would behave at double the current volume. Rank the steps by how much damage a failure would do, and fix the first one before the new volume arrives. Put in two simple measures, such as turnaround time on quotes and number of corrections per week, so the next limit announces itself earlier.

## Practical next actions

1. Draw the path of one typical order from first enquiry to payment on a single page, and mark every manual copy or memory-dependent step.
2. For each marked step, write down what would happen at twice the current volume, and who would notice first.
3. Choose the one step with the most serious failure consequence and design a small fix for it before taking on more volume.
4. Record two measures weekly, such as quote turnaround and the number of corrections, so you can see a limit approaching.
5. Before accepting a large new contract, check capacity against the weakest step instead of against total headcount.
6. Write down the informal knowledge your long-serving staff carry, such as special customers and known pitfalls, and turn it into a shared checklist.

## Article summary

Growth rarely breaks a business by itself; it reveals which arrangements were only ever adequate for a smaller load. The commercial implication is a risk of failing at the moment of greatest opportunity, with margin and key staff paying for the strain. The remedy is to find the thresholds before volume does, and to fix the weakest joints one at a time.
