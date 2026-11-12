---
hub: insights
record_id: INS-204
slug: what-should-you-monitor-in-an-automated-business-process
title: What Should You Monitor in an Automated Business Process?
description: A practical map of the six signals worth monitoring in an automated business process: arrival, completion, outcome, exceptions, dependencies and change, and how to turn them into alerts people act on.
lead: A practical map of the six signals worth monitoring in an automated business process: arrival, completion, outcome, exceptions, dependencies and change, and how to turn them into alerts people act on.
category: Business Automation
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Business Automation
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - View Workflow Status and Run History - Azure Logic Apps | https://learn.microsoft.com/en-us/azure/logic-apps/view-workflow-status-run-history
  - Overview of Azure Monitor alerts - Azure Monitor | https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview
related:
  - How to calculate the business case for automation | /insights/how-to-calculate-the-business-case-for-automation/
  - Is your business actually ready for AI agents? | /insights/is-your-business-actually-ready-for-ai-agents/
  - Why automation documentation matters | /insights/why-automation-documentation-matters/
summary: A practical map of the six signals worth monitoring in an automated business process: arrival, completion, outcome, exceptions, dependencies and change, and how to turn them into alerts people act on.
layout: plain
---
When a business automates an important process, the usual monitoring decision is made by default. The platform sends an email when a run fails, someone sets up a rule to file those emails, and that is treated as monitoring. Months later, the business finds out that invoices stopped going out, leads stopped being assigned or stock stopped syncing, and nothing in the inbox said so.

The problem is not a lack of tools. Most automation platforms record a great deal. The problem is that nobody decided what the business needed to know about the process, so the monitoring covers what was easy to switch on rather than what matters. This article sets out what to monitor in an automated business process, layer by layer, and how to decide who should be told about each signal.

> Monitor an automated process the way you would supervise a team: is work arriving, is it getting done, is the result right, and is anything piling up?
>

## Start with symptoms, not with the software

Google's site reliability engineering guidance on monitoring makes a distinction that applies well beyond large technology companies. Monitoring should answer two questions: what is broken, and why. The first is the symptom and the second is the cause. The guidance recommends putting symptoms first, because those are the problems people actually experience, and it notes that one person's symptom is often another person's cause.

For a business process, the symptom is almost always a business outcome that did not happen: an order not invoiced, a customer not welcomed, a supplier not paid on time. The cause might be an expired connection, a changed field or a full mailbox. If monitoring only watches causes, it will miss the failures nobody anticipated. If it watches symptoms, it will catch them whatever their cause.

The same guidance identifies four signals for user-facing systems: latency, traffic, errors and saturation. Translated into business process terms, they become a useful checklist: how long work takes, how much work is arriving, how much is failing, and how full the queues are.

## The six things worth monitoring

### 1. Arrival: is work coming in at the expected rate?

Every automated process has an input: web orders, form submissions, supplier invoices, new employees. Count them. A sudden drop to zero is often the first sign that an upstream system has changed or a trigger has stopped firing. Microsoft's documentation for Azure Logic Apps shows why this matters: a trigger can record a status of *Skipped* when it checked for data and found nothing that met its criteria, so no run is created at all. If the criteria were changed by mistake, every check looks normal and nothing happens.

Arrival monitoring compares today's volume with what is normal for the day and time. Fifty orders on a Monday and none on Tuesday is worth a message to someone before lunch, not a discovery at month-end.

### 2. Completion: did the work that arrived get through?

For each run or batch, record how many items started and how many finished. The Logic Apps run history distinguishes statuses such as failed, timed out, waiting and succeeded, and it notes that a trigger can succeed while the run itself still fails. It also has a status of *succeeded with retries*, which is easy to ignore but often an early warning that a connection or external service is becoming unreliable.

The practical detail of proving that a run happened and finished is covered in [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/). For monitoring purposes, the point is that started-versus-finished should be a number someone can see.

### 3. Outcome: is the business result correct?

This is the signal most often missing. Compare what should exist in the destination with what does: paid orders against invoices raised, form submissions against leads assigned, approved leave against payroll adjustments. A daily count that should match is enough for most small and mid-sized businesses. Measuring automation by its runs rather than its outcomes is a recognised failure pattern, described in [automation success measured by runs, not business outcomes](/discovery/automation-success-measured-by-runs-not-business-outcomes/).

### 4. Exceptions: what is waiting for a person?

Well-designed automations send the cases they cannot handle to a person: a customer record with no tax number, an invoice that does not match a purchase order. These exception queues are where automated processes quietly fail. Monitor two numbers for each queue: how many items are in it, and how old the oldest one is. A queue of three items is fine. A queue of three items, one of which is 19 days old, is not.

### 5. Dependencies: is anything the process relies on about to break?

Automations depend on connections, user accounts, licences, API limits and sometimes on a specific person's credentials. Many failures are predictable: a password policy will expire a connection, a licence will lapse, a staff member will leave. Monitor the things you know will expire, and record the date. This is the "saturation" idea in business terms: how close each dependency is to its limit.

### 6. Change: has anything about the process been altered?

Many silent failures begin with a well-meant change: a new status in the online store, a renamed field in the CRM, an edited filter. Keep a simple record of changes to important automations and the systems they connect to, and check the outcome signal more closely in the days after any change.

## A monitoring plan on one page

For each important automated process, the plan can fit in a table like this:

| Signal | Example measure | When to act | Who is told |
| --- | --- | --- | --- |
| Arrival | Web orders received per hour | No orders for two hours during trading hours | Operations lead |
| Completion | Orders picked up versus processed per run | Any difference after the run ends | Process owner |
| Outcome | Invoices raised versus paid orders | Daily totals do not match | Finance |
| Exceptions | Age of oldest item in the review queue | Older than two working days | Team leader |
| Dependencies | Days until connection or licence expiry | Fewer than 14 days | Systems owner |
| Change | Edits to the automation or source fields | Any edit to a live process | Process owner |

The thresholds above are illustrative. The right ones depend on volumes, trading hours and how quickly a missed item becomes expensive. Agreeing those expectations is part of setting [service levels for business-critical automations](/insights/what-service-levels-make-sense-for-business-critical-automations/).

## Decide who is told, and make every alert actionable

Collecting signals is only half the job. The Google SRE guidance is direct about alerts that interrupt people: each one should be actionable, should reflect a real or imminent problem, and should need human judgement. If an alert only ever prompts the same mechanical response, it should be automated instead. Alerts that do not meet that standard train people to ignore alerts.

Microsoft's overview of Azure Monitor alerts describes an alert rule as a combination of what is monitored, the signal and the condition. It also distinguishes stateful alerts, which fire once and do not fire again until the condition clears, from stateless alerts, which fire every time the condition is met. It lets responders mark an alert as new, acknowledged or closed. Whatever tool is used, those three ideas are worth copying:

- **Be precise about the condition.** "More than five runs fail in an hour", an example Microsoft uses for Logic Apps, is actionable. "Something went wrong" is not.
- **Avoid repeat noise.** One alert that stays open until the problem is fixed is better than forty identical emails.
- **Track acknowledgement.** An alert that nobody has acknowledged is the same as no alert.

Route alerts to a role or a shared queue, not to the personal inbox of whoever built the automation. When that person goes on leave, the alerts go on leave with them. The broader ownership question is explored in [who watches the automations](/insights/who-watches-the-automations/).

## An illustrative example

Consider an illustrative Johannesburg wholesaler of hardware supplies with about 40 staff. It automated three processes: web orders into its accounting package, supplier invoices from a shared mailbox into an approval queue, and nightly stock updates to its online store. Each automation emailed its builder on failure.

When the business reviewed its monitoring, it found that none of the three would have reported its most likely failures. A paused trigger produced no failure email. Supplier invoices the automation could not read went into a review folder nobody checked. The stock sync reported success even when it updated a fraction of the products.

The business did not buy a monitoring product. It added an hourly order count during trading hours, a morning comparison of invoices raised against paid orders, an age check on the supplier invoice review folder, and a list of connection expiry dates reviewed monthly. Alerts went to a shared operations channel with a named owner for each process. The first week surfaced two supplier invoices that had been waiting nearly three weeks.

## What to monitor first

If a business can only do one thing this month, it should add an outcome check to its most important automation: a daily count of what should have happened compared with what did. Next, it should add an age check to every exception queue. Arrival, dependency and change monitoring follow. The aim is not to watch everything. It is to make sure that when an automated process stops doing its job, a named person finds out within hours, from the business's own signals, before a customer or the month-end close tells them.
