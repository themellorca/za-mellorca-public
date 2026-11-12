---
hub: insights
record_id: INS-207
slug: why-a-quiet-workflow-is-not-proof-it-worked
title: Why No Error Message Does Not Mean the Workflow Worked
description: An automation that raises no alarm may still have done nothing, done half the job or done it wrongly. Why silence is not evidence, and the simple completion checks that turn it into evidence.
lead: An automation that raises no alarm may still have done nothing, done half the job or done it wrongly. Why silence is not evidence, and the simple completion checks that turn it into evidence.
category: Automation Reliability
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Automation Reliability
sources:
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
  - Architecture strategies for monitoring workload reliability - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/monitoring-alerting-strategy
  - Architecture strategies for monitoring workload reliability - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/architecture/framework/resiliency/monitoring
related:
  - How to design retries without creating duplicate work | /insights/how-to-design-retries-without-creating-duplicate-work/
  - What process mining can reveal that workshops cannot | /insights/what-process-mining-can-reveal-that-workshops-cannot/
  - What Should You Monitor in an Automated Business Process? | /insights/what-should-you-monitor-in-an-automated-business-process/
summary: An automation that raises no alarm may still have done nothing, done half the job or done it wrongly. Why silence is not evidence, and the simple completion checks that turn it into evidence.
layout: plain
---
Every business that automates something eventually has the same unpleasant morning. A customer phones about an invoice that never arrived, or the month-end stock count is out by a few hundred units, and someone says: but the workflow ran, and there were no errors. Both statements can be true. A workflow can finish without raising a single alarm and still not have done the job.

Error messages report one narrow thing: that the software hit a condition it recognised as a fault. They say nothing about the conditions it did not recognise. Treating silence as success is one of the most common and most expensive assumptions in operations, and it is worth understanding how it arises.

> An error message tells you the system noticed a problem. It cannot tell you about the problems the system was never built to notice.
>

## Five ways a workflow can fail without complaining

Understanding the patterns makes them easier to design against.

1. **It never started.** The trigger did not fire because a mailbox rule changed, a scheduled job was skipped during a power outage, or a connection expired. No run means no error. The log is empty, and an empty log looks exactly like a quiet day.
2. **It ran on nothing.** A query returned zero rows because a field was renamed or a filter became too strict. The workflow processed all zero of them successfully.
3. **It did part of the job.** Of 400 orders, 380 were processed and 20 were skipped because they lacked a value the workflow expected. Skipping may be logged as information, not as an error.
4. **It did the job wrongly.** The workflow applied last year's rate, mapped a customer to the wrong account or sent a document to an outdated address. Every step succeeded technically.
5. **It handed off and the handoff stalled.** The workflow posted a message to another system, which accepted it and then placed it in a queue nobody monitors. From the first workflow's perspective, the work is done.

The fourth and fifth cases are the hardest, because nothing in the technical record is wrong. They are explored from a monitoring perspective in [why integration monitoring misses business completion](/discovery/why-integration-monitoring-misses-business-completion/) and from an operations perspective in [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/).

## What technical monitoring can and cannot tell you

Good platform guidance already separates the layers. Microsoft's coding guidelines for Power Automate encourage building explicit error handling into flows, for example by running a defined set of actions when a step fails or times out, so that the failure is captured instead of lost. Azure's reliability guidance on monitoring and alerting describes defining health signals and alerting on them so that the right people act. These are necessary foundations. They improve what the system reports about itself.

But they are about the health of the machinery. A perfectly healthy machine can process the wrong thing very efficiently. The business needs a second layer that asks whether the outcome happened, using evidence that does not come from the workflow's own opinion of itself.

## Check the outcome, not the activity

For every important workflow, define one or two completion checks written in business terms. Examples:

- **Volume reconciliation.** The number of orders captured today should equal the number of invoices raised for them. A gap is a finding.
- **Expected-activity checks.** If a payroll export normally produces 140 lines on the 24th, a file with 12 lines or none at all should raise an alert. Absence is a signal.
- **Destination confirmation.** Do not count a document as sent when it leaves the workflow. Count it when the receiving system shows it, or when a delivery receipt arrives.
- **Ageing of the unfinished.** A simple list of items that entered the process more than two days ago and have not left it will catch stalled handoffs better than any error log.
- **Sample inspection.** Each week, a person picks five completed items and traces them from start to finish, comparing the result with what should have happened.

The common thread is that the check is independent. It compares the result against a source other than the workflow itself. Our guide to [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) goes through practical ways of doing so.

## Build a heartbeat for things that should happen

Most alerting reacts to bad events. Many of the worst failures are events that did not occur. A heartbeat flips the logic: the workflow, or a small watcher, records a timestamp each time it completes its cycle, and a separate check raises an alert if the timestamp is older than the expected interval. This is particularly valuable for overnight jobs on locally hosted systems in South Africa, where load-shedding, a failed UPS battery or a dropped fibre line can stop a job without producing any message at all. If the 02:00 synchronisation has not recorded a completion by 06:00, someone should know before the first customer order is captured against stale stock figures.

## Decide who is told, and what they do

A detection that goes to a shared mailbox is not a detection. Each check needs a named owner, a clear threshold and a first action. The design of messages that people will act on is covered in [how to design alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/), and the principle that every workflow also needs a defined route when something goes wrong is set out in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/). Without an owner, an outcome check just produces a more precise version of the same ignored message.

## An illustrative example

The following is a hypothetical case. A Cape Town distributor automates the daily transfer of approved sales orders from its web shop into its accounting package. For months, the log shows green. Then a customer complains of a missing delivery. Investigation shows that a product code had been retired in the accounting system, so any order containing it was quietly skipped. About 30 orders a month, worth roughly R90,000, never reached invoicing. The transfer had not failed. It had been told that skipping an unknown code was acceptable.

The fix had three parts. The skipped orders now go to a visible exceptions list that someone reviews each morning. A daily reconciliation compares the number of approved web orders with the number of sales orders created. And the weekly sample inspection includes one order that was recently changed. The first reconciliation caught a new mismatch within a week, long before a customer noticed.

## Questions to ask about any workflow you rely on

- If it did not run tonight, how and when would we find out?
- If it ran on zero records, would anyone notice?
- If it skipped some records, where would they appear?
- Do we compare the result with an independent source at least once a week?
- Who owns the answer, and what are they expected to do about it?

An error-free log is a pleasant thing to see. It is not a result. The result is a delivered invoice, a correct balance or a customer who got what they were promised, and the business should be able to show that evidence on any given day.
