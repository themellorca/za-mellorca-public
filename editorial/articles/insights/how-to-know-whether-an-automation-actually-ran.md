---
hub: insights
record_id: INS-203
slug: how-to-know-whether-an-automation-actually-ran
title: How to know whether an automation actually ran
description: A green tick in a run log does not prove the business outcome happened. How to confirm that each important automation started, finished and delivered.
lead: A green tick in a run log is not proof that the business outcome happened. A practical method for confirming that each important automation started, finished and produced the result it exists to produce.
category: Automation
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Automation
sources:
  - Healthchecks.io Documentation - Healthchecks.io | https://healthchecks.io/docs/
  - Troubleshoot a cloud flow - Power Automate | https://learn.microsoft.com/en-us/power-automate/fix-flow-failures
  - View and manage your Zap history | https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history
related:
  - What business automation should actually solve | /insights/what-business-automation-should-actually-solve/
  - Why automating a broken process makes the problem worse | /insights/why-automating-a-broken-process-makes-the-problem-worse/
  - The difference between necessary human work and avoidable manual work | /insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/
summary: A green tick in a run log is not proof that the business outcome happened. A practical method for confirming that each important automation started, finished and produced the result it exists to produce.
layout: plain
---
Ask the owner of almost any automated process whether last night's run worked and you will usually get one of two answers: "I didn't get an error, so yes" or "Let me check." The first is an assumption. The second often means twenty minutes in a run log that shows activity but not outcome.

That gap matters more as automation spreads. A business that has five or six workflows moving invoices, orders, leads and stock updates no longer has a person watching each step. If nobody can answer "did it run, and did it work?" quickly and with evidence, the business is relying on silence as its control. Silence is not a control.

> An automation has only run when the business result it exists to produce can be found, counted and matched to what was expected.
>

## Three different questions hiding inside "did it run?"

The question sounds simple, but it contains three separate questions, and most monitoring answers only the first or second.

1. **Did it start?** Was the automation triggered at the time, or by the event, it was supposed to be? A scheduled job that never fired leaves no failed run behind. It leaves nothing at all.
2. **Did it finish?** Did every step complete, or did it stop part-way, wait on an approval, or get filtered out by a condition?
3. **Did it produce the outcome?** Is there an invoice in the accounting system, a confirmation in the customer's inbox, a stock level that matches the warehouse count? This is the question the business actually cares about.

A run can pass the first two and fail the third. A flow that copies orders into the accounting package can report success while writing every order against the wrong customer, or while processing zero records because the source filter was changed. The broader damage this does is covered in [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/). This article is about the narrower, practical job of proving a run happened.

## What the tools already tell you, and what they do not

Most automation platforms keep a run history, and it is worth knowing what it shows. Microsoft's troubleshooting guidance for Power Automate describes a run history for each cloud flow showing start time, duration and status, a 28-day run history for locating a failed run, and optional "repair tips" emails sent to the flow owner when a flow fails. Zapier's documentation describes [Zap history](https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history) as a log of every workflow that has run, and it separates runs that have finished (with statuses such as filtered, held, stopped or success) from runs that are still playing or waiting.

These are useful, but notice their limits:

- A run history records runs that happened. It cannot show a run that never triggered because the schedule was paused, the connection expired before the trigger could fire, or the upstream system stopped sending events.
- A "success" or "filtered" status describes the platform's view of the workflow, not the business's. A filtered run may be exactly right, or it may mean a changed field value is quietly excluding every record.
- Failure emails go to the flow owner. If that person has left, changed role or filters those emails, the alert exists but nobody receives it.
- History is kept for a limited period, so it is not a long-term audit trail.

Run history answers "what did the platform do?" The business still needs an answer to "what should have happened, and did it?"

## Layer one: detect runs that never happened

The hardest failure to see is absence. The standard answer is the "dead man's switch" pattern. Healthchecks.io, a service built around it, describes listening for pings from scheduled jobs and staying silent while they arrive on time. Each check has an expected period and a grace time, which is extra time allowed for normal variation. If a ping has not arrived by the end of the period plus the grace time, the check is marked down and an alert is sent.

The principle is more important than any particular tool. For every important scheduled automation, record:

- when it is expected to run (every hour, at 06:00 on weekdays, after each order);
- how late it can reasonably be before someone should worry;
- who is told when that deadline passes with no sign of a run.

The automation's last step then reports "I finished" to something independent of the automation itself. If that report does not arrive, the absence is the alert. This inverts the usual logic: instead of waiting for an error, the business expects a signal of success and treats its absence as a problem.

## Layer two: confirm the run finished completely

A run that started but stalled is the next gap. Useful checks here are simple:

- Record the number of items each run picked up and the number it completed. If a nightly sync picked up 42 orders and completed 38, four need attention, even if the platform reports the run as successful.
- Treat "waiting", "held" and long-running states as items with an age. A run that has been waiting for an approval for three days is not in progress. It is stuck.
- Make the failure path explicit. Where should a failed item go, who sees it, and how is it retried safely? Retries need their own care so that a second attempt does not create a duplicate invoice or payment; see [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

## Layer three: reconcile the business outcome

This is the layer that turns "the automation ran" into "the work got done". It compares what should exist in the destination with what does exist, using counts and totals that a non-technical manager can understand.

| Automation | Outcome check | Compared against |
| --- | --- | --- |
| Web orders to accounting | Number and value of invoices created today | Number and value of paid web orders today |
| Debtor reminder emails | Reminders sent this week | Invoices more than 30 days overdue |
| Stock sync to online store | Products with a stock figure updated in the last 24 hours | Active products in the stock system |
| Lead routing from website form | Leads assigned to a salesperson | Form submissions received |

The comparison does not have to be sophisticated. A daily count that should match, displayed where the responsible person looks every morning, will catch most problems within a day instead of at month-end. The point is that it measures business completion, not technical activity. The same gap appears in integrations more broadly, as described in [why integration monitoring misses business completion](/discovery/why-integration-monitoring-misses-business-completion/).

## An illustrative example

Consider an illustrative Durban distributor of catering supplies with about 30 staff. Its web orders flow automatically into the accounting system each night, and invoices are emailed to customers the next morning. For three weeks the run history showed every run as successful. Then the finance manager noticed that debtors were unusually low for the season.

The cause was a change to the online store's payment statuses. A new status had been introduced for card payments, and the automation's filter only collected orders marked with the old status. Every run "succeeded" by processing the orders it was told to look for, and quietly ignored most of the rest. No error was raised because nothing had technically gone wrong.

A single daily check comparing the count of paid orders with the count of invoices created would have shown the mismatch on the first morning. The fix to the filter took minutes. Finding and invoicing three weeks of missed orders took days. The financial side of this kind of failure is set out in [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/).

## Build a simple run register

For a small or mid-sized business, the most useful artefact is a short register of important automations. One row per automation is enough:

- what it does, in business terms;
- its trigger and expected frequency;
- the late threshold before someone is told;
- the outcome check and what it is compared against;
- the named owner and a backup owner;
- where failures go and how they are retried.

Writing the register is often revealing in itself. Businesses regularly find automations nobody can describe, automations running on a former employee's account, and automations whose only alert goes to an inbox nobody reads. Ownership is the subject of [who watches the automations](/insights/who-watches-the-automations/); the register is how that ownership becomes checkable.

## Trade-offs

Not every automation deserves three layers of verification. A workflow that posts a celebratory message when a deal closes can fail for a week without harm. A workflow that issues invoices, moves money, changes stock or contacts customers cannot. A sensible rule is to apply all three layers to anything that affects cash, customers or compliance, and only the first layer to the rest.

There is also a cost to over-alerting. If every minor delay produces a message, people learn to ignore them, and the important alert is lost among the noise.

## What to do this week

1. List the five automations that would hurt most if they stopped without anyone noticing.
2. For each, write down when it should run and what business result it should produce.
3. Add one outcome count that can be compared with an independent count every day.
4. Check who receives each failure alert, and confirm they still work in that role.
5. Add a "did not run" alert for any scheduled automation that has none.

None of this requires new software. It requires deciding, in advance, what evidence would prove the automation did its job, and then looking for that evidence routinely rather than waiting for a customer, supplier or auditor to point out its absence.
