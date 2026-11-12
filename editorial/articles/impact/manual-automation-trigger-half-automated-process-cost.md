---
hub: impact
record_id: CPS-259
slug: manual-automation-trigger-half-automated-process-cost
title: Manual Automation Triggers Leave Half the Process Manual
description: An automation can remove task effort while still depending on a person to notice the event, prepare the input and press start.
lead: A workflow may run automatically after somebody presses a button, uploads a file or sends a command. The hidden cost sits in the human work required to notice when it should start.
category: Business Automation
published_date: 2026-09-07
updated_date: 2026-09-07
tags:
  - Business Automation
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Cost mechanisms
side_text: Monitoring labour, start-delay and missed-execution rework
side_text_position: above_tags
content_id: CONTENT-000167
commercial_domain: Business Automation
primary_pain: automations manually triggered despite predictable business events
primary_cost_mechanism: monitoring labour, start-delay and missed-execution rework
evidence_basis: qualitative operational analysis and transparent time-cost model; no universal ROI benchmark asserted
sources:
  - Triggers - Power Automate | https://learn.microsoft.com/en-us/power-automate/triggers-introduction
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
related:
  - Gathering Information Before Work Can Start: The Payroll Cost of Preparation | /impact/compiling-information-before-work-preparation-payroll-cost/
  - The Payroll Cost of Work Software Could Do Automatically | /impact/repeatable-manual-work-payroll-cost-automation/
  - Rebuilding the Same Report Every Month: The Labour Cost of Manual Reporting | /impact/rebuilding-recurring-reports-by-hand-labour-cost/
---
## The tolerated pain

The automated portion may be fast and reliable, so the process is labelled automated. But a person still checks an inbox, notices a status change, prepares a file or remembers a schedule before the workflow can begin. That human trigger becomes part of the control system even when nobody designed it that way.

The situation is common because it usually begins as a sensible compromise. The first version of an automation is built around a button, a script or a shared folder because connecting it to the real business event would have taken longer. The button works, the project closes and the compromise becomes permanent. Months later, the business describes the process as automated while one or two people still act as its eyes and ears.

## Why businesses tolerate it

A manual start looks cheap. It takes a few minutes, the person doing it understands the process and the automation itself produces visible results. Nobody records the time spent watching for the right moment, and nobody notices the runs that start late.

Most automation platforms make the distinction explicit. Microsoft's Power Automate documentation, for example, describes [three ways to start a flow](https://learn.microsoft.com/en-us/power-automate/triggers-introduction): automated flows that run after an event occurs, instant flows that a person starts manually, and scheduled flows that run at a defined time. A manual trigger is a legitimate choice for genuinely ad hoc work. The pain arises when it is used for events that are predictable and already recorded in a system.

Google's site reliability engineering guidance offers a useful lens. Its chapter on [eliminating toil](https://sre.google/sre-book/eliminating-toil/) defines toil as work that tends to be manual, repetitive, automatable, tactical and without enduring value, and that scales linearly as a service grows. It counts work as manual even when the human is only running an automation script. A person who starts the same workflow every time an email arrives fits that definition closely.

## Operational consequence

Execution timing now depends on attention and availability. The automation may start late, run in batches because staff accumulate work, or not run at all when the responsible person is absent. Monitoring effort remains in the process even though the processing step itself has been automated.

The operational symptoms tend to look like this:

- **Start delay:** the automation runs in minutes, but only after work has waited hours for someone to notice it.
- **Batching:** staff accumulate items and trigger them together, which turns steady flow into peaks and queues.
- **Absence risk:** leave, illness or a busy day stops the process, and the failure is often discovered downstream.
- **Hidden knowledge:** only the trigger owner knows when inputs are ready, so the process carries a key-person dependency.
- **Inconsistent preparation:** files are renamed, cleaned or moved by hand before the run, introducing variation the automation was meant to remove.

## Financial consequence

Measure trigger work separately from automated processing: minutes spent monitoring, preparing and starting each run × run frequency × loaded labour cost. Add documented rework caused by late or missed starts. Do not claim the whole amount becomes cash savings; the primary benefit may be released capacity, faster cycle time or lower exception risk.

### An illustrative cost model

Every value below is an illustrative assumption. Replace it with your own run logs and labour costs.

| Input | Illustrative value |
| --- | --- |
| Manually triggered runs per working day, across three workflows | 40 (illustrative) |
| Minutes of monitoring, preparation and starting per run | 6 (illustrative) |
| Loaded labour cost | R360 per hour, or R6 per minute (illustrative) |
| Working days per year | 220 (illustrative) |
| Late or missed starts needing rework | 2 per month, 3 hours each (illustrative) |

> **Annual trigger labour**
> 40 runs × 6 minutes × 220 days = 52,800 minutes (880 hours)
> 52,800 minutes × R6 = R316,800 per year

> **Annual rework from late or missed starts**
> 2 incidents × 12 months × 3 hours = 72 hours
> 72 hours × R360 = R25,920 per year

> **Total illustrative exposure**
> R316,800 + R25,920 = R342,720 per year

That figure is the value of capacity consumed, not a guaranteed saving. Event-driven triggers still need some monitoring, and the released hours only become cash if they avoid a hire, reduce overtime or allow the team to absorb growth. The delay cost sits on top and is often more important: customer onboarding, order release or invoice generation that waits for a person to notice it delays revenue-relevant outcomes.

## Commercial urgency

The trigger point is a stable business event that already exists in a system but still requires a person to translate that event into an automation start. High frequency, time-sensitive work and processes that fail when one person is absent deserve priority.

Urgency also rises when volume grows. Because trigger work scales linearly with the number of runs, a process that took one person twenty minutes a day at launch can quietly absorb a significant share of a role as the business expands. Look closely when a team says the automation "mostly runs itself" but cannot cover a holiday without a handover note.

## Resolution

Map the real start condition and identify whether it can be represented as a reliable event: a record created, approval completed, status changed, file received or schedule reached. Validate input readiness, define idempotency and duplicate protection, add observable failure paths, and preserve a manual override for genuine exceptions rather than making manual start the default.

In practice, work through the following steps:

1. List every automation that is started by a person, and record who starts it, how often and what they check first.
2. For each one, write down the business event the person is actually waiting for and the system in which that event is recorded.
3. Decide whether the event is reliable enough to trigger the workflow directly, or whether a schedule plus a readiness check is safer.
4. Build duplicate protection so that a repeated event or a retried run cannot process the same item twice.
5. Add alerting for runs that fail or do not happen, so removing the human sensor does not create a silent gap. The [financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/) shows why this step matters.
6. Keep a documented manual start for exceptions, with a named owner.

Event-driven triggers do not remove the need for ownership. Someone still needs to know whether the automation is healthy, which is the question addressed in [who watches the automations](/insights/who-watches-the-automations/).

## The economic meaning

Automation is incomplete when people still serve as sensors for predictable events. The goal is not automation for its own sake; it is removing avoidable monitoring and waiting while keeping ownership and exceptions visible. A process that waits for someone to remember it has an availability limit set by that person's calendar.

## Method note

This article uses an input-based labour and delay model. It asserts no generic automation ROI, and all rand values are illustrative. Related Mellorca analysis covers failure-path design, which remains necessary when triggers become event-driven: [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/). For help redesigning triggers and failure paths, see [business automation](/services/business-automation/).
