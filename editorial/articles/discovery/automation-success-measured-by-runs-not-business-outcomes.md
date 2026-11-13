---
hub: discovery
record_id: DISC-460
slug: automation-success-measured-by-runs-not-business-outcomes
title: Automation success is measured by runs rather than business outcomes
description: Run counts and hours-saved estimates look busy but prove nothing. How to define, baseline and report the business outcome each automation changes.
lead: Run counts and hours-saved estimates make automation programmes look busy without proving a result. How to define, baseline and report the business outcome each automation should change.
category: AI, Automation & Agent Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Automation programme lead / COO
budget_owner: CFO
sources:
  - Google SRE - Defining slo: service level objective meaning | https://sre.google/sre-book/service-level-objectives/
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Choose the best methods and tools to measure business value - Power Platform | Microsoft Learn | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value-methods
related:
  - Why automations should not run on personal credentials | /discovery/why-automations-should-not-run-on-personal-credentials/
  - Automation candidates are chosen by novelty instead of business value | /discovery/automation-candidates-are-chosen-by-novelty-instead-of-business-value/
  - AI usage costs are not allocated to business outcomes | /discovery/ai-usage-costs-not-allocated-to-business-outcomes/
summary: Run counts and hours-saved estimates make automation programmes look busy without proving a result. How to define, baseline and report the business outcome each automation should change.
layout: plain
---
Ask how an automation programme is going and the answer often arrives as a count: flows built, bots deployed, runs completed this month, hours "saved". These numbers are easy to produce because the automation platform records them automatically. They say very little about whether customers are served faster, invoices are paid sooner or staff are doing less rework. When run counts become the measure of success, a programme can look busy while the business sees no change.

## The problem in plain language

The automation dashboard is green. Thousands of runs completed, a high success rate, a respectable figure for estimated hours saved. Yet the finance team still closes the month late, the service backlog has not moved, and the operations manager cannot point to anything that is cheaper or quicker than it was a year ago.

The gap exists because a run is an activity, not a result. A flow that copies an email attachment into a folder "succeeds" every time it copies the file, whether or not the invoice inside it is ever processed. A bot that creates a ticket "succeeds" whether or not the customer's problem is resolved. Counting runs measures how much the automation did, not what the business got.

## What you are actually trying to solve

The person facing this is usually a COO, finance director or the sponsor of an automation programme who has been asked to justify the spend. Their questions sound like "how to measure automation ROI", "automation KPIs that matter", "RPA success metrics", "how to prove automation is working" or "hours saved is not a real saving".

What they want is a way to show, with evidence the board will accept, that automation changed a business result, and a way to spot automations that run constantly but contribute nothing.

## Evidence and system mechanism

Site reliability engineering has dealt with the same trap for years, and its guidance transfers well. Google's SRE book advises that when choosing service level indicators, teams should start by thinking about what users care about, not what they can measure, and warns that starting with what is easy to measure produces less useful objectives. It also recommends working backwards from desired objectives to specific indicators ([Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)).

The same book's chapter on monitoring separates "what's broken" (the symptom a user experiences) from "why" (the internal cause), and argues for alerting on symptoms that are actually affecting users rather than internal states ([Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)). A run count is an internal state. A customer waiting three days for a refund is a symptom.

The mechanism inside a business is predictable. Automation platforms log executions natively, so run data is free. Outcome data, such as cycle time from request to completion or the share of cases needing manual correction, sits across the CRM, the accounting system and people's inboxes, and has to be assembled deliberately. The free number wins by default, and over time it becomes the number people are rewarded for. Microsoft's own guidance on [measuring the business value of Power Platform solutions](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value-methods) starts from the objectives the solution is meant to serve and asks that KPIs such as response times, resolution times and error rates align with them.

## Problem owner and why now

The problem owner is the automation programme lead or the person who sponsors automation spend, often the COO or head of operations. The budget owner is usually the CFO, who is increasingly asked to approve platform licences, AI usage costs and contractor time for automation work.

The trigger is rapid tool adoption. As low-code platforms and AI features spread, the number of automations grows quickly and the platform reports grow with them. Typical moments that expose the gap include a licence renewal where finance asks what the business received, a budget reduction that forces a choice between automations, or a board question about why headcount and backlogs have not changed despite "thousands of hours saved".

## Economic consequence

- **Misallocated effort:** teams build more automations of the kind that produce many runs, rather than the ones that remove the most cost or delay.
- **Invisible failures:** an automation can succeed technically while the business process fails downstream, so problems surface through customers rather than reports. See [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/).
- **Unverifiable savings:** estimated hours saved are rarely matched by a reduction in overtime, contractor spend or backlog, so finance discounts them and the programme loses credibility.
- **Running cost without return:** automations that no longer contribute keep consuming licences, API calls and maintenance time.

The size of these effects depends on the business. Measure them by comparing outcome measures before and after each automation, not by multiplying runs by an assumed minutes-per-task figure.

## Root cause

- **No outcome defined at design time:** the automation was approved to "automate the task", not to reduce a specific delay, cost or error.
- **Measurement follows the tool:** the platform's built-in analytics become the scorecard because nothing else exists.
- **Process boundaries hide the result:** the automation covers one step, while the outcome is measured, if at all, at the end of a process owned by another team.
- **Incentives reward activity:** teams are recognised for automations delivered, not for business results changed.

## Practical intervention

1. **Write the outcome before the build.** For each automation, record the business result it should change, the measure, the current baseline and the owner of that measure. Use the approach in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).
2. **Measure end to end, not step by step.** Pick one or two outcome measures per process, for example request-to-completion time, first-time-right rate, cost per case or days sales outstanding.
3. **Keep run metrics, but demote them.** Runs, failures and duration remain useful operational signals for the automation team. They should not be the headline in management reporting.
4. **Reconcile claimed savings with real spend.** If an automation saves time, show where that time went: reduced overtime, absorbed growth, reduced backlog or redeployed staff.
5. **Review the portfolio quarterly.** Retire or redesign automations whose outcome measure has not moved, and fund those that have.

### An illustrative example

*Illustrative:* a Cape Town property management company with about 40 staff reports that its maintenance-request automation ran several thousand times last year. When it adds a single outcome measure, days from tenant request to contractor booking, it finds the automation logs and routes requests quickly, but bookings still wait for a manual approval step. The useful fix is to the approval rule, not more automation, and the outcome measure shows the improvement within a month.

## Diagnostic questions

- For your five most-used automations, can you name the business result each one is meant to change?
- Does management reporting show outcome measures, or only runs and success rates?
- Can finance trace any claimed hours saved to an actual change in cost or capacity?
- Would you know if an automation ran successfully every day while the process it supports got worse?
- Have you retired an automation because it did not deliver its intended outcome?

## What good looks like

Every material automation has a stated outcome, a baseline and an owner. Management sees a short scorecard of business results, with run statistics available underneath for the people who maintain the automations. Savings claims are reconciled with finance. The portfolio is pruned and funded according to evidence. This is the practical meaning of [what business automation should actually solve](/insights/what-business-automation-should-actually-solve/).

## Where Mellorca fits

Mellorca helps businesses define outcome measures for their automations, connect the data needed to report them, and review automation portfolios against results. That work sits within [business automation](/services/business-automation/) and, for ongoing reporting and portfolio review, [managed digital operations](/services/managed-digital-operations/).

## Method note

The SRE sources describe service reliability practice rather than business process automation; they are used here because their distinction between easy-to-measure signals and user-relevant outcomes applies directly. No savings figures or benchmarks are quoted, and the example is illustrative.
