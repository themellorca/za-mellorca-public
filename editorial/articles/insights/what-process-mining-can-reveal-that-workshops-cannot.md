---
hub: insights
record_id: INS-121
slug: what-process-mining-can-reveal-that-workshops-cannot
title: What process mining can reveal that workshops cannot.
description: How process mining can expose rework, variants, bottlenecks and real execution paths that workshops and process maps may miss.
lead: Workshops explain how people think a process works. Event data can show how the process actually behaves across thousands of cases—including the paths nobody remembers to mention.
category: Digital Operations
published_date: 2026-09-02
updated_date: 2026-09-02
eyebrow: Article
page_title: What Process Mining Can Reveal That Workshops Cannot | Mellorca
tags:
  - Process Mining
  - Workflow Evidence
  - Operational Improvement
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Analyze processes using object-centric process mining | https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/analyze-processes-using-object-centric-process-mining
  - Process Mining Manifesto - IEEE Task Force on Process Mining | https://www.tf-pm.org/resources/manifesto
related:
  - How to find automation opportunities from operational evidence | /insights/how-to-find-automation-opportunities-from-operational-evidence/
  - Why approval processes become bottlenecks | /insights/why-approval-processes-become-bottlenecks/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
---
Process workshops are useful. They capture intent, policy, role knowledge and the reasons people make certain decisions. They are also incomplete by nature. Participants remember typical work better than edge cases. Different teams describe the same handoff differently. Rework is often normalised. Waiting time is easy to underestimate. And the process drawn on a whiteboard can quietly become the process everyone wishes existed.

Process mining adds a different kind of evidence. It reconstructs execution paths from timestamped events in operational systems, allowing teams to compare the designed process with what actually happened. Microsoft's [overview of process mining in Power Automate](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes the approach as extracting event data from systems of record to visualise the processes happening in an organisation, compare them, find the root causes of inefficiency and monitor performance indicators.

> Workshops tell you why people believe the process works a certain way. Process data can tell you how often reality disagrees.

## Why workshops miss things

The gaps in a workshop are not caused by people being careless or dishonest. They are structural. A workshop asks people to describe from memory a process that thousands of cases have passed through, each slightly differently. Memory compresses that variation into a typical case. The people in the room may only see their own stage. Senior participants may describe the process as designed rather than as performed. And the most time-consuming part of many processes, waiting, is by definition the part nobody is actively doing, so nobody describes it.

Event data does not have those limitations. It has different ones, which are covered below. But it records each case as it happened, including the cases nobody would think to mention.

## See variants, not only the happy path

A conventional process map tends to show one primary route with a few exceptions. Real operations often contain dozens or hundreds of variants. Some are legitimate customer or regulatory paths. Others are symptoms of rework, missing information, inconsistent ownership or system friction.

Microsoft's process mining tooling includes rework detection, root-cause analysis, custom metrics and process comparison. Its [object-centric process mining capability](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/analyze-processes-using-object-centric-process-mining), generally available from June 2026, also addresses a limitation of simple case-based models by allowing events to relate to several objects at once, for example orders, items, deliveries and invoices, so analysis can preserve more of the real operational context. That matters because real processes rarely follow a single linear case: one shipment may contain items from several orders, and a delay on one object can cascade across others.

## Measure where time is actually lost

Teams often focus on handling time because it is visible. Process data can reveal that the larger delay sits between actions.

*Illustrative example, not a client case:* a request waits 18 hours for review, then takes four minutes to process. A workshop may describe the four-minute task in detail while the queue remains invisible. Automating the four-minute task would barely change the customer's experience. Changing how reviews are allocated might change it substantially.

For commercially important workflows, analyse throughput time, waiting time, rework frequency, handoff count, exception rate and the distribution of cases, not just averages. A process with a respectable average can still contain a damaging long tail: the small share of cases that take weeks rather than days are often the ones that generate complaints, escalations and lost customers.

## Find rework people have stopped noticing

Repeated activities are a strong signal. A record moves forward, returns to a previous stage, gets corrected, then moves forward again. Staff may regard this as ordinary because it happens every day. Event analysis can quantify how often it happens and which conditions correlate with it, such as a particular product, channel, team or data source.

That evidence changes the improvement conversation. Instead of debating whether a problem is common, the team can investigate why a specific variant creates repeat handling or delay.

## Warning signs that workshop evidence is not enough

- Different teams give confident but contradictory descriptions of the same process.
- Average cycle time looks acceptable, yet customers and managers keep reporting delays.
- Improvement projects have changed the documented process but outcomes have not moved.
- Nobody can say how many cases go back a stage, or why.
- Automation proposals are based on how long a task takes, not on how long cases wait.

## Understand the limits of event data

Process mining is not a substitute for operational knowledge. Event logs do not automatically explain intent, customer context, policy constraints or why people take work outside the system. They can also be misleading when timestamps are incomplete, systems capture only part of the workflow, or important activity happens in email and spreadsheets.

The IEEE Task Force on Process Mining's [Process Mining Manifesto](https://www.tf-pm.org/resources/manifesto) makes the same point in its guiding principles. It argues that event data should be treated as a first-class citizen, because the quality of any process mining result depends heavily on the quality of the log, and that log extraction should be driven by questions, because without concrete questions it is very difficult to select meaningful data. It also recommends treating process mining as a continuous activity rather than a one-off exercise, because processes change while they are being analysed.

In practice, this means a mining exercise can confidently show what the system recorded, but the team must still check what the system did not record.

## Use workshops and mining together

The stronger method combines both. Use data to identify patterns and anomalies. Use workshops, interviews and observation to interpret them. Then test proposed changes against the evidence.

| Question | Better answered by |
| --- | --- |
| Why is the process designed this way? | Workshops and policy review |
| How many variants actually occur, and how often? | Event data |
| Where do cases wait, and for how long? | Event data |
| Why does a particular variant happen? | Both: data to find it, people to explain it |
| What happens outside the systems? | Observation and interviews |
| Did the change work? | Event data before and after, interpreted with the team |

## Know when process mining is worth the effort

It is most useful where transaction volume is meaningful, digital event data exists, the process spans several stages or systems, and the organisation cannot reliably explain why outcomes vary. For a small, stable workflow with a handful of cases, direct observation may be faster and cheaper.

Do not buy a process-mining platform simply to produce attractive maps. Start with a commercial question: where is cycle time being lost, why is rework occurring, which route creates failure, or which process variant should be redesigned?

## A practical diagnostic

Before investing in process mining, check:

1. Is there a specific commercial question the analysis must answer?
2. Do the relevant systems record a case identifier, an activity and a timestamp for the steps that matter?
3. How much of the process happens outside those systems, in email, chat or spreadsheets?
4. Is the volume large enough that patterns will be meaningful?
5. Who will interpret the results with the people who do the work?
6. What decision will change depending on what the analysis finds?

If the answers to the second and third questions are weak, the first improvement may be better event capture rather than analysis.

## The trade-offs

Process mining requires data extraction, cleansing and interpretation effort, and it can create a false sense of completeness when key activity sits outside the logged systems. Workshops are cheaper and capture reasoning, but they are vulnerable to memory, politics and the idealised process. Neither method is objective on its own. The value comes from letting each one challenge the other.

## What better looks like

A mature improvement programme treats process design as a hypothesis that can be tested. Teams understand the intended workflow, observe the actual workflow, quantify meaningful variation and use both operational context and execution evidence to decide what to remove, standardise, integrate or automate. That evidence should come before automation decisions, as discussed in [Before You Automate, Understand How the Work Actually Moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).

The goal is not perfect conformity. It is knowing which variation creates value and which variation creates avoidable cost.

[Digital Operations Improvement](/services/digital-operations-improvement/) can combine process evidence with workflow redesign. A [Digital Systems Audit](/services/digital-systems-audit/) can identify where stronger operational evidence is needed before investment decisions are made.
