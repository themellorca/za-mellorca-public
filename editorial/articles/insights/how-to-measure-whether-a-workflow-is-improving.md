---
hub: insights
record_id: INS-117
slug: how-to-measure-whether-a-workflow-is-improving
title: How to Measure Whether a Workflow Is Improving
description: Without a baseline and a balanced set of measures, workflow improvements end in opinions. Here is how to show whether a change actually made things better.
lead: Without a baseline and a balanced set of measures, workflow improvements end in opinions. Here is how to show whether a change actually made things better.
category: Process Improvement
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Process Improvement
sources:
  - How to set performance metrics for your service | https://www.gov.uk/service-manual/measuring-success/how-to-set-performance-metrics-for-your-service
  - Prepare processes and data - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data
  - Measuring completion rate | https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate
related:
  - How to Find Steps That Exist Only Because the System Is Bad | /insights/how-to-find-steps-that-exist-only-because-the-system-is-bad/
  - Why Hiring More People Does Not Fix Broken Operations | /insights/why-hiring-more-people-does-not-fix-broken-operations-diagnose-before-you-add-headcount/
  - How to Reduce Unnecessary Approvals | /insights/how-to-reduce-unnecessary-approvals/
summary: Without a baseline and a balanced set of measures, workflow improvements end in opinions. Here is how to show whether a change actually made things better.
layout: plain
---
A logistics broker in Kempton Park spent four months redesigning its quote process. It introduced a standard rate card, automated the first response to enquiries and moved approvals into the CRM. At the quarterly review, the sales manager said quotes were "much faster now". The finance director said win rates had not changed. The operations lead said her team was busier than ever fixing quote errors. Nobody could prove anything, because nobody had measured how the process performed before the change.

Improvement work often ends like this. Effort goes into changing a workflow, and very little into knowing whether the change worked. Measuring improvement does not require sophisticated tools. It requires a baseline, a small set of well-chosen measures, and the discipline to compare like with like over time.

## Decide what "better" means before you change anything

A workflow can improve in several ways that sometimes pull against each other: faster, cheaper, more accurate, more consistent, or better for the customer. Before redesigning, write down which of these you are trying to improve and what you expect to happen. The UK government's guidance on [setting performance metrics](https://www.gov.uk/service-manual/measuring-success/how-to-set-performance-metrics-for-your-service) recommends turning each intended benefit into a hypothesis, stating what you will change, what benefit should follow and the assumption behind it, and choosing a small number of measures that test it. It also stresses setting a baseline and building a trend over time rather than relying on snapshots.

For the logistics broker, the hypothesis might have been: "A standard rate card and automated first response will cut the time from enquiry to quote from two days to four hours without increasing quote errors, and win rates will rise because customers hear from us first."

## Choose a balanced set of measures

A single measure invites distortion. If you only measure speed, people will cut corners. A balanced set usually covers four angles:

- **Flow:** how long cases take from start to finish, and how much of that time is waiting rather than working.
- **Quality:** how often cases need rework, correction or a second attempt.
- **Outcome:** whether the workflow achieves its purpose, such as quotes won, customers onboarded or claims settled.
- **Effort:** how much staff time each case consumes.

Our article on [what to measure at each stage of a business workflow](/insights/what-to-measure-at-each-stage-of-a-business-workflow/) suggests specific measures for each stage. Keep the improvement set to four to six measures. More than that and nobody looks at them.

## Capture a baseline from the data you already have

Most business systems already record when things happen. Microsoft's guidance on [preparing data for process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data) explains that event logs need three things: a case ID identifying each instance of the process, an activity name for each step, and a timestamp. Even without a process mining tool, those three fields in a spreadsheet let you calculate cycle times, count steps and see where cases wait. CRM activity histories, ticket logs and order status changes are common sources.

Take at least two to three months of history before the change, so that the baseline reflects normal variation and not a single unusual week. If you cannot get historical data, measure for a few weeks before changing anything. A short delay to collect a baseline is far cheaper than an improvement project that cannot show its value.

## Look at distributions, not just averages

Averages hide the cases that matter most. If the average quote takes six hours but one in ten takes four days, customers remember the four-day quotes. Report the median, which shows the typical case, and a high percentile such as the ninetieth, which shows how bad the slow cases are. Improvements often show up first in the slow tail, as the worst delays are removed, before the median moves at all.

## Measure completion, not just activity

Be careful to measure cases that finished, and to count those that did not. The UK government's guidance on [measuring completion rate](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate) defines it as the share of started transactions that reach a defined end, with abandoned and failed ones counted against it. In a business workflow, a faster average cycle time means little if more cases are quietly being dropped. Track how many cases start, how many finish successfully, and how many end in other ways.

## Compare like with like

Workflows are affected by seasons, volumes and the mix of work. A quote process will look faster in a quiet month and slower in the end-of-year rush, whatever you change. Compare the same period year on year where you can, or compare similar types of case. If you change the workflow for one branch or team first, the others make a useful comparison group. Note any other changes that happened at the same time, such as new staff, price changes or system outages, so they are not mistaken for the effect of the redesign.

## Review on a rhythm, and act on what you see

Put the improvement measures in front of the process owner every month for at least six months after a change. Look at the trend, not just the latest number. If a measure is moving the wrong way, find out why before deciding the change failed. Sometimes a dip is temporary while people adapt. Sometimes it reveals a side effect, such as the broker's quote errors, that needs fixing. Our guide to [finding rework inside a business process](/insights/how-to-find-rework-inside-a-business-process/) can help trace where quality problems are coming from.

When the evidence shows a real improvement, say so with the numbers. That builds support for the next change. When it does not, the measures tell you where to look next. Either way, the business learns something more useful than "it feels faster". For the wider picture of how visibility supports decisions, see [what operational visibility actually means](/insights/what-operational-visibility-actually-means/).

## Practical next actions

1. Before changing a workflow, write down what better means, what you expect to change and the assumption behind it.
2. Choose four to six measures covering flow, quality, outcome and effort, and define each one precisely.
3. Pull at least two months of case IDs, step names and timestamps from your systems to build a baseline.
4. Report medians and ninetieth percentiles alongside completion rates, and compare like periods or like teams.
5. Review the measures monthly with the process owner for six months after the change, and record what you learned.
