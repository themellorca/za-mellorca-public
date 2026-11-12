---
hub: impact
record_id: CPS-258
slug: automation-without-measured-time-saved-errors-reduced-unproven-return
title: Automation With No Proof of Return: Measure Before You Build More
description: Businesses build automations and never record the time saved or errors avoided, so they cannot tell which ones pay and which ones only cost.
lead: Businesses build automations and never record the time saved or errors avoided, so they cannot tell which ones pay and which ones only cost.
category: Automation
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Automation
commercial_domain: Process automation
primary_pain: Automation built and run without a baseline or tracked results
primary_cost_mechanism: Build and running costs with unproven benefit, effort spent on low-value automations and undetected errors
sources:
  - Overview of process mining and task mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-advisor-overview
  - Troubleshoot a cloud flow - Power Automate | https://learn.microsoft.com/en-us/power-automate/fix-flow-failures
  - Cost optimization quick links - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/
related:
  - The Flow Nobody Can Explain: What Undocumented Automations Cost to Fix and Change | /impact/undocumented-automations-slow-troubleshooting-risky-changes-cost/
  - AI Pilots That Never Ship: The Cost of Experiments With No Operational Payoff | /impact/ai-pilots-stuck-in-demonstration-stage-experimentation-cost/
  - Paper Forms Captured Twice: The Cost of Double Handling | /impact/paper-forms-captured-twice-double-handling-cost/
summary: Businesses build automations and never record the time saved or errors avoided, so they cannot tell which ones pay and which ones only cost.
layout: plain
---
## Automation that nobody can price

A firm builds a workflow that copies enquiries into a spreadsheet, sends invoice reminders and posts a summary to a chat channel. People are pleased. It saves effort, everyone says, and there is a general feeling that the business is becoming more efficient. Six months later, the owner asks a simple question: how much time did it save, and how many mistakes did it prevent? Nobody can answer, because nobody measured how long the work took before.

That is the pain this article addresses. The cost is not the automation itself; the cost is paying for, maintaining and expanding automation whose return has never been shown. It is a close relative of [software return that was never measured against a baseline](/impact/software-return-never-measured-before-after-baseline-technology-spending-cost/), applied to workflows, not applications.

## Why measurement gets skipped

- **The benefit feels obvious.** Removing a tedious task seems self-evidently good, so the before-and-after numbers seem unnecessary.
- **The baseline is awkward to collect.** Timing manual work takes effort, and the pressure is to build the automation now, not to study the task first.
- **Success is defined as "it runs".** The team reports that the flow executes on schedule. It does not report whether the outcome improved, a distinction explored in [automation success measured by runs, not business outcomes](/discovery/automation-success-measured-by-runs-not-business-outcomes/).
- **Nobody owns the result.** The builder moves on to the next task, and the manager assumes it is working.
- **Time saved is not cash saved.** Ten minutes a day returned to a salaried employee does not appear on any invoice, so it is easy to claim and impossible to verify.

## What goes wrong when the return is unproven

### Effort is spent on the wrong things

Without measurements, the next automation is chosen by enthusiasm. A task that takes fifteen minutes a month gets built because it is interesting, while a task that consumes twenty hours a month stays manual. This is the pattern behind [automation chosen for convenience, not for costly bottlenecks](/impact/automation-chosen-for-convenience-not-costly-bottlenecks-opportunity-cost/).

### Running costs pile up unseen

Automation has costs after it is built: licences, connector fees, monitoring, fixes when a form or system changes, and the time of whoever understands it. If those costs are not set against a measured benefit, nobody can say when an automation has become a net cost.

### Errors continue under a new name

A process that is automated can still produce wrong results, only faster. Microsoft's guidance on troubleshooting cloud flows notes that owners can [look at the start time, duration and status of specific runs](https://learn.microsoft.com/en-us/power-automate/fix-flow-failures). A successful status shows that the steps completed, not that the invoice amount, the customer match or the recipient was correct. Checking outcomes needs a defined measure of what correct looks like.

### Credibility with the team erodes

When automation is promoted on feelings and later questioned, staff learn to distrust the next proposal. Good projects then struggle for approval because earlier ones cannot be justified.

## What can be measured, and how

Measurement does not need advanced tooling. For most small and mid-sized businesses, four numbers are enough.

- **Time per task.** Record how long a representative sample of the manual work takes, including waiting and rework.
- **Volume.** Count how often the task occurs in a month. A short task done 400 times is larger than a long task done twice.
- **Error or correction rate.** Count the items that had to be fixed, resent or refunded.
- **Elapsed time.** Measure the delay between a trigger and completion, such as enquiry to first reply or delivery to invoice.

For larger workflows, tools exist that measure rather than guess. Microsoft's documentation on [process mining and task mining in Power Automate](https://learn.microsoft.com/en-us/power-automate/process-advisor-overview) describes using event log data from systems of record to show process maps with metrics that highlight performance problems, and monitoring desktop tasks to see how work is actually done. Even if you never use that product, the principle is useful: base automation decisions on observed data about the process, not on recollection.

For a practical method that needs no software at all, see [how to find the manual work nobody is measuring](/insights/how-to-find-the-manual-work-nobody-is-measuring/).

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Port Elizabeth wholesale distributor with 25 staff. They are not benchmarks.

| Assumption | Value |
| --- | --- |
| Automations built in the last year | 8 |
| Average build cost, including contractor time | R12,000 |
| Annual running and maintenance cost across all eight | R36,000 |
| Automations with a measured baseline and tracked result | 1 |
| Automations that, once measured, save under 5 hours a month | 3 of the 7 unmeasured, assumed |
| Value of an hour of staff time | R250 |

Total spend is R96,000 to build plus R36,000 to run, or R132,000. If three of the unmeasured automations each save four hours a month, they return R3,000 a month in total, R36,000 a year, against roughly R36,000 of build cost and a share of the running cost. They break even only slowly. The other four may well be valuable, but without measurement the business cannot tell which. The cost of not measuring is the cost of building more of the three and fewer of the four.

These figures are examples, not claims about your business. Replace them with timings you collect yourself.

## A lightweight measurement habit

1. Before building, write one sentence stating the expected outcome, such as "reduce quote turnaround from two days to four hours".
2. Time ten examples of the manual task and record the error count for a month.
3. After launch, collect the same figures for the same period.
4. Name an owner who reports the comparison at the next management meeting.
5. Review again at ninety days, then decide whether to extend, repair or retire the automation.

Where automation fails quietly, the measurement is also your early warning. [Silent automation failures](/impact/silent-automation-failures-financial-impact/) are far easier to spot when you know what a normal week should look like.

## Who should own the numbers

Measurement works best when one person is responsible for it, ideally the manager of the team whose work was automated, not the person who built the automation. The builder has a natural interest in the project succeeding; the manager has an interest in the work being done well. A short monthly note stating the time saved, the corrections needed and the running cost is enough, and it gives the owner a basis for requesting changes or retiring a flow that no longer earns its keep.

## Practical next actions

1. List every automation currently running and write beside each the manual task it replaced and the person who owns it.
2. For the three most used, estimate monthly volume, minutes per item and error rate from a sample of recent work.
3. Add a rule that no new automation is approved without a stated baseline and a target measure.
4. Check run history and output samples monthly, not only the run status, to confirm the results are correct.
5. Calculate the annual running cost of each automation, including licences and maintenance time, and compare it to the measured saving.
6. Retire or rebuild any automation that cannot show a benefit after ninety days.
