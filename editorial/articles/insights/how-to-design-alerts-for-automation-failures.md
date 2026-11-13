---
hub: insights
record_id: INS-206
slug: how-to-design-alerts-for-automation-failures
title: How to design alerts for automation failures
description: Alerts that fire constantly get ignored, and alerts sent to nobody get missed. How to decide what to alert on, who owns each alert and what it should say.
lead: Alerts that fire constantly get ignored, and alerts that go to nobody get missed. A practical way to decide what to alert on, who owns each alert, and what the message should say.
category: AI and Automation
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: AI and Automation
sources:
  - What is Alert Fatigue? Causes & Prevention - Atlassian | https://www.atlassian.com/incident-management/on-call/alert-fatigue
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Google SRE - Prometheus Alerting: Turn SLOs into Alerts | https://sre.google/workbook/alerting-on-slos/
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
related:
  - Why giving AI access to more systems is not automatically better | /insights/why-giving-ai-access-to-more-systems-is-not-automatically-better/
  - What should you monitor in an automated business process? | /insights/what-should-you-monitor-in-an-automated-business-process/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
summary: Alerts that fire constantly get ignored, and alerts that go to nobody get missed. A practical way to decide what to alert on, who owns each alert, and what the message should say.
layout: plain
---
An automation that fails loudly is an inconvenience. An automation that fails quietly is a business problem, because the invoices stop going out, the leads stop being assigned or the stock file stops updating, and nobody finds out until a customer asks. Alerts are the usual answer, but alerts are easy to get wrong in two opposite directions. Too few, and failures go unseen. Too many, and the people who receive them learn to ignore them.

Designing alerts well is less about the tooling and more about a handful of decisions: what counts as a failure, who needs to know, how quickly, and what they should do next. This article sets out a practical way to make those decisions for the automations that matter most.

> An alert is a request for a specific person to take a specific action. If it does not name the person or the action, it is noise.
>

## Start with consequences, not with errors

Most automation platforms can send a message whenever a step errors. Switching that on for everything is the quickest way to create [alert fatigue](https://www.atlassian.com/incident-management/on-call/alert-fatigue). Atlassian's guidance on alert fatigue describes the effect plainly: when responders are bombarded with notifications, many of them low value, they become desensitised and may miss the ones that matter.

A better starting point is the business consequence. For each automation, ask what happens, and how soon, if it stops. A nightly price update that fails might cost nothing until Monday morning. A payment confirmation that fails might mean customers are chased for money they have already paid within the hour. Those two failures deserve different alerts, different recipients and different urgency.

A simple three-level scheme works for most small and mid-sized businesses:

- **Act now:** customers, money or legal obligations are affected within hours. These interrupt someone, by phone or instant message.
- **Act today:** work is delayed or will be soon, but nothing is lost yet. These go to a monitored queue or channel and are reviewed at set times.
- **Review weekly:** degradation and patterns, such as rising retries or slower runs. These appear in a summary, not as individual messages.

## Alert on symptoms the business would notice

Google's site reliability engineering guidance on monitoring distributed systems recommends that alerts be tied to symptoms rather than every possible cause, and that every alert that pages a person should be actionable and urgent. The same thinking applies to business automations. "Webhook returned a 502 error" is a cause. "No new orders have reached the warehouse system in 45 minutes during trading hours" is a symptom the business cares about, and it will fire whatever the underlying cause turns out to be.

This also deals with a subtler problem: automations that fail by doing nothing. If a trigger never fires, there is no error to report. The only way to detect it is to alert on the absence of an expected outcome, such as a daily export that has not arrived by 07:00. We cover this in [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) and [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/).

## Name an owner for every alert

The most common alert design failure is not technical. It is that the message goes to a shared mailbox, a group channel or the person who built the automation and has since changed role. Everyone assumes someone else has it. The pattern is described in [monitoring alerts without a clear response owner](/discovery/monitoring-alerts-without-a-clear-response-owner/), and it is cheap to fix.

For each alert, record three things:

1. **A primary owner** who is expected to respond.
2. **A backup** who is alerted if the primary does not acknowledge within a defined time.
3. **An escalation point**, usually a manager or supplier contact, for failures that cannot be resolved quickly.

Avoid routing failures to personal inboxes. People go on leave, resign and ignore their email, and in South Africa an unexpected load-shedding stage can take a person offline at exactly the wrong moment. A shared, monitored channel with a clear rota is sturdier, provided that each alert within it still has a named owner.

## Say what to do in the alert itself

A good alert answers four questions without the reader having to open anything else:

- **What failed?** Use the business name of the process, such as "supplier invoice import", not a technical job identifier alone.
- **What is the impact?** For example, "47 invoices are waiting and will not reach the accounting system".
- **What should I do first?** A link to a short runbook, or the first two steps written out.
- **Who else is involved?** The vendor, the system owner or the finance contact who will need to know.

This is where the idea of a failure path matters. If an automation has no defined behaviour on failure, there is nothing sensible to write in the alert. Our article on [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) explains how to design what happens to the work in flight, so the alert can point to a recovery step rather than only a problem.

## Control the volume

Once alerts exist, the work shifts to keeping them useful. Four habits help.

### Group related alerts

When an integration goes down, fifty records may fail one after another. Send one alert that says fifty records failed, not fifty alerts. Most platforms can batch or threshold messages, and where they cannot, a simple counter in a scheduled check does the job.

### Use thresholds and time windows

One failed run out of a hundred, followed by a successful retry, does not need a human. Three failures in a row, or a failure rate above an agreed percentage in an hour, does. Choose thresholds from the business tolerance for delay, not from the default setting.

### Retire alerts that nobody acts on

Review each alert every quarter. If it fired and nobody did anything, either the action was unnecessary, in which case remove or downgrade the alert, or the alert did not give enough information to act, in which case improve it. The wider problem of volume is covered in [monitoring produces more alerts than teams can triage](/discovery/monitoring-produces-more-alerts-than-teams-can-triage/).

### Test the alert, not only the automation

A surprising number of alert paths have never fired. The email address belongs to a former employee, the channel was archived, or the mobile notification was muted. Once a quarter, trigger a harmless test failure and confirm that the right person receives it and knows what to do.

## An illustrative example

The following is a hypothetical case. A Cape Town wholesaler automates the creation of delivery notes when orders are approved. Failures are sent to a general operations mailbox that eight people can see. One Friday afternoon the integration stops after a software update. The mailbox fills with error messages, and each of the eight assumes a colleague has picked it up. On Monday morning, 120 orders have no delivery notes and the drivers are waiting.

The redesign takes an afternoon. One symptom alert is added: if no delivery note has been created within 30 minutes of an approved order during trading hours, the dispatch supervisor is messaged, with the backup being the operations manager. The message says how many orders are waiting and links to a one-page procedure for printing manual delivery notes. Detailed technical errors go to a weekly review. The next failure is noticed in 25 minutes.

## A short checklist

- Have we ranked our automations by the consequence of failure?
- Does each important automation have an alert on the outcome, not only on errors?
- Does every alert have a named owner, a backup and an escalation point?
- Does each message state impact and first action?
- Do we review and test alerts on a schedule?

If you are also unsure who is watching your automations in the first place, [who watches the automations](/insights/who-watches-the-automations/) is a good place to begin. Well-designed alerts do not make failures disappear. They make sure that the right person hears about them, in time, with enough information to put things right.
