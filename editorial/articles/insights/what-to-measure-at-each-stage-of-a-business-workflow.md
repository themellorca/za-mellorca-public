---
hub: insights
record_id: INS-255
slug: what-to-measure-at-each-stage-of-a-business-workflow
title: What Should Be Measured at Each Stage of a Workflow?
description: Measuring only the end result tells you something went wrong but not where. A stage-by-stage guide to the few measures that make a workflow visible: volume, waiting time, rework and completion.
lead: Measuring only the end result tells you something went wrong but not where. A stage-by-stage guide to the few measures that make a workflow visible: volume, waiting time, rework and completion.
category: Process Measurement
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Process Measurement
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - How to choose incident management KPIs and metrics - Atlassian | https://www.atlassian.com/incident-management/kpis
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
related:
  - What a Good Workflow Map Should Show | /insights/what-a-useful-workflow-map-contains-and-what-it-leaves-out/
  - Why Growth Exposes Problems That Were Already There | /insights/why-growth-exposes-problems-that-were-already-there/
  - What Digital Infrastructure Means for a Modern Business | /insights/what-digital-infrastructure-means-for-a-modern-business/
summary: Measuring only the end result tells you something went wrong but not where. A stage-by-stage guide to the few measures that make a workflow visible: volume, waiting time, rework and completion.
layout: plain
---
Ask most business owners how a core workflow is performing and they will give you a single number or a feeling. Quotes go out within a few days. Invoices are mostly on time. Onboarding takes a couple of weeks. These are useful summaries, but they hide the interesting part: where, between the start and the finish, the time and the errors actually accumulate.

Measuring a workflow stage by stage is not about producing more reports. It is about picking a few numbers at the points where work changes hands, so that when something slows down, you can see which stage is responsible without a week of investigation.

> The end-to-end number tells you that you have a problem. The stage numbers tell you where it lives.
>

## First, define the stages

Before measuring anything, list the stages a piece of work moves through, using words the people involved would recognise. A quote-to-cash workflow might read: enquiry received, quote prepared, quote accepted, order fulfilled, invoice sent, payment received. A stage is a place where an item can wait, where ownership changes, or where a decision happens. Lean practitioners use value stream mapping to set out each step and the time spent in it, and the discipline works for office processes as well as factories. If you have not yet drawn the flow, [understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/) before choosing measures.

Keep the list short. Six to eight stages are enough. More than that, and the measurement becomes a project of its own.

## Distinguish the time spent working from the time spent waiting

The most revealing distinction in any workflow is between process time, when someone is actively working on the item, and lead time, the total elapsed time from arrival to completion. In many offices, the work itself takes forty minutes while the item takes six days to get through, because it spends most of that time in an inbox, a queue or a pending approval. Measuring both for each stage shows that the delay is rarely where people think it is. It is usually in the handoffs, a pattern we look at in [broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/).

## What to measure at the entry of a workflow

The first stage determines everything that follows. Useful measures here are:

- **Volume in.** How many items enter per day or week, and how it varies. This is the baseline for every other number and the first sign of seasonal or campaign effects.
- **Completeness at intake.** The share of items that arrive with every required piece of information. Missing information at the start is a cause of rework at every later stage.
- **Time to first response.** How long between arrival and someone acknowledging the item. Incident management guidance from Atlassian describes time to acknowledge as a standard measure of how quickly a team responds, and the idea transfers directly to enquiries and requests.

## What to measure in the middle

The middle stages are where most delay and error occur, so these deserve the most attention.

- **Time in stage.** Elapsed time between entering and leaving each stage, reported as a median and as the slowest 10 percent. Averages hide the long waits that customers remember.
- **Queue size and age.** How many items are waiting at each stage, and how old the oldest is. A queue of 12 items that are one day old is a different problem from a queue of 12 that are three weeks old.
- **Rework rate.** The share of items sent back to an earlier stage. A high rate at one stage points to unclear requirements upstream or a missing check.
- **Handoff failures.** Items that arrive at the next stage without what is needed to proceed. This is closely tied to [what information must move with the work](/insights/what-information-must-move-with-the-work/).

## What to measure at the end

At the final stage, the question is whether the outcome was achieved and whether it was reached in an acceptable time.

- **Completion rate.** The share of items that entered and were finished within the target period. Items that disappear, stall indefinitely or are quietly abandoned are the true measure of leakage.
- **Total lead time.** The end-to-end figure, as a median and as a long-tail percentile.
- **Outcome quality.** Corrections after delivery, credit notes issued, complaints or returns. This is the result that confirms whether speed was bought at the expense of accuracy.
- **Cost or effort per item.** Even a rough estimate of staff hours at a Rand rate per hour will turn the other measures into a business case.

Microsoft's adoption guidance on business value for the Power Platform makes the same point in general terms: value claims need measurable outcomes defined before the work starts, so that improvement can be demonstrated rather than assumed.

## Avoid measuring activity as if it were results

A frequent mistake is to count what is easy: number of emails sent, tickets opened, automation runs completed. These measure effort, not outcomes. A workflow that processed 2,000 items quickly but misrouted 200 of them has a very different result from a count of 2,000. This distinction is explored in [automation success measured by runs, not business outcomes](/discovery/automation-success-measured-by-runs-not-business-outcomes/). For every number you choose, ask what decision it would change. If the answer is none, drop it.

## Give every measure an owner and a rhythm

A number that nobody is responsible for is decoration. Assign each stage to a person who can act on its measures, and agree a rhythm for looking at them: weekly for operational stages, monthly for the end-to-end picture. Our article on [how to make ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/) sets out how. Keep the reporting simple. A single page of six or eight numbers, with last month beside this month, is usually more useful than an elaborate dashboard, a caution developed in [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/).

## An illustrative example

The following is a hypothetical case. A Johannesburg engineering services firm complains that invoices go out late. Management measures only the days from job completion to invoice, and finds an average of 11. Nothing in the figure says why.

They define five stages: job closed on site, paperwork received at the office, quality sign-off, invoice drafted, invoice sent. Measuring time in each stage for a month shows that the invoice drafting takes under an hour of actual work. The delay is in the second stage, where site paperwork takes an average of five days to reach the office, and in the third, where sign-off waits for one manager who travels. The firm introduces a photograph-and-upload step on site and a named deputy for sign-off. Total lead time drops to about four days without anyone working harder in the billing office.

## A starter set to adapt

1. Volume in, per week.
2. Share of items complete at intake.
3. Median and slowest-decile time in each stage.
4. Age of the oldest item waiting at each stage.
5. Rework rate between stages.
6. Completion rate within target time.
7. Corrections after delivery.

Seven numbers are enough to start. Run them for a month, look for the stage that stands out, and fix that one before adding anything else. A measure earns its place by pointing somewhere the business can act.
