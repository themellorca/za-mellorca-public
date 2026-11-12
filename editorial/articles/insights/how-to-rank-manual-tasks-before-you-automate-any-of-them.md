---
hub: insights
record_id: INS-130
slug: how-to-rank-manual-tasks-before-you-automate-any-of-them
title: Which Manual Tasks Should You Automate First?
description: Twenty candidate tasks and budget for two. A five-criteria scoring method, a bottleneck tie-breaker and lists of good and poor first candidates to choose where to start.
lead: Twenty candidate tasks and budget for two. A five-criteria scoring method, a bottleneck tie-breaker and lists of good and poor first candidates to choose where to start.
category: Automation
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Automation
sources:
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
  - Overview of the Automation Kit - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction
  - Five Focusing Steps, a Process of On-Going Improvement | https://www.tocinstitute.org/five-focusing-steps.html
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
related:
  - What Business Automation Should Actually Solve | /insights/what-business-automation-should-actually-solve/
  - How to Know Whether an Automation Actually Ran | /insights/how-to-know-whether-an-automation-actually-ran/
  - Why Automation Projects Fail After the Demo | /insights/why-automations-that-worked-in-the-demo-stop-working-in-production/
summary: Twenty candidate tasks and budget for two. A five-criteria scoring method, a bottleneck tie-breaker and lists of good and poor first candidates to choose where to start.
layout: plain
---
Once a business decides to automate, the next problem arrives quickly: there are twenty candidates and budget for two. Everyone has a favourite. The finance team wants bank reconciliation automated, sales wants quote generation, and the owner wants a dashboard. Choosing by volume of complaints or by the loudest advocate usually produces a project that is interesting but not valuable. A better approach is to score the candidates against a few plain criteria and begin where the payoff is highest and the risk is lowest.

This article offers a practical way to do that. It complements the broader discussion in [how to choose the first workflow to automate](/insights/how-to-choose-the-first-workflow-to-automate/) by providing a concrete scoring method and a sequence of questions.

## Begin with a list based on evidence

Before ranking anything, build the list from observation, not opinion. Ask each team to log, for two weeks, every task they repeat more than a few times: what it is, how long it takes, how often, and which systems it touches. Hidden effort is easy to underestimate, which is why the exercise in [how much manual work is hiding inside your business](/insights/how-much-manual-work-is-hiding-inside-your-business/) is worth doing first. Microsoft's guidance on measuring the business value of automation makes a similar point: you need a baseline of time and effort before you can claim a saving.

## Five criteria that matter

Score each candidate from one to five on the following. Keep the scoring rough. The goal is to separate clear winners from clear laggards, not to produce false precision.

### 1. Frequency and volume

A task done 200 times a month is a better candidate than one done four times, even if the rare task is more annoying. Multiply the minutes per occurrence by the number of occurrences, and express it in hours per month. Then convert it to Rand using the loaded hourly cost of the person doing it, including benefits and overhead, not just salary.

### 2. Stability and clarity of the rules

Automation works best on tasks where the rules are consistent and can be written down. "If the invoice total matches the purchase order within one percent, approve; otherwise send to the buyer" is automatable. "Use your judgement" is not, yet. If staff disagree about how the task is done, that is a process problem, covered in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/).

### 3. Quality of the input data

An automation can only be as reliable as what it is given. A task fed by free-text emails and handwritten forms is harder than one fed by a structured export. If the data is unreliable, the first investment may be cleaning it, not automating anything.

### 4. Cost of error

Be wary of starting with the tasks where a mistake is expensive, such as payments, tax submissions or customer-facing legal notices. These are good eventual candidates but poor first projects, because your confidence in the automation has not yet been earned. Start with tasks where an error is easy to see and cheap to reverse, such as internal reports, data transfers between systems with a clear check, and notifications.

### 5. Ease of connection

Check whether the systems involved have usable interfaces. A task that spans two modern cloud applications with maintained connectors is much easier than one that depends on a legacy desktop program with no export. Microsoft's description of its automation toolkit notes the value of keeping an inventory and monitoring of automations, a reminder that every automation you add is also something to be maintained.

## Use the bottleneck as a tie-breaker

When two candidates score similarly, prefer the one that sits on the critical path. The Theory of Constraints, summarised by the TOC Institute in its five focusing steps, holds that improving anything other than the system's constraint yields little overall benefit. If orders wait three days for credit approval and thirty minutes for data capture, automating the data capture will save effort but will not make customers wait less. Automating the part that is actually slow will. See also what makes an automation worth building.

## Typical good first candidates

Across small and mid-sized businesses, certain tasks regularly rank well on these criteria.

- **Moving data between two systems by hand.** Re-keying orders, copying new customers from a form to the accounting system, exporting and importing the same file each week. The cost is high and the error rate non-trivial. See [how manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/).
- **Routine notifications and reminders.** Overdue invoice reminders, appointment confirmations, onboarding checklists and status updates to customers.
- **Standard document preparation.** Generating quotes, statements or onboarding packs from existing data using fixed templates.
- **Collecting and consolidating reports.** Pulling the same figures from three systems into a weekly view.
- **Simple approvals with clear thresholds.** Routing a purchase request to the right approver based on amount, with reminders when it is stuck.

## Typical poor first candidates

- **Anything rare.** Annual or quarterly tasks rarely recover the cost of building and maintaining the automation.
- **Tasks whose rules change often.** If the logic is rewritten monthly, the automation will always be out of date.
- **Tasks depending on tacit judgement.** Complaint triage, pricing exceptions and complex customer disputes need human attention, though they may benefit from preparation by software.
- **Work you are about to abolish.** If a process is being redesigned or a system retired next quarter, automating the old version is wasted effort.

Not every manual task should be removed. Some human work is necessary and valuable, a distinction drawn in [the difference between necessary human work and avoidable manual work](/insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/).

## A simple scoring table

| Candidate task | Hours per month | Rules clear | Data reliable | Error cost low | Easy to connect |
| --- | --- | --- | --- | --- | --- |
| Re-keying web orders into accounting | 24 | 5 | 4 | 4 | 4 |
| Chasing overdue invoices by email | 12 | 4 | 4 | 4 | 5 |
| Handling supplier disputes | 10 | 1 | 2 | 2 | 2 |

The first two clearly outrank the third, and the table has made the reason visible. The discussion that follows from the table is more valuable than the numbers themselves.

## Check the saving is real

A task that takes two hours a week does not free two hours a week unless someone decides what that time will be used for. Savings spread thinly across several people are often absorbed without trace. Decide in advance what changes: a reduced backlog, a faster month-end close, a vacancy not filled, or capacity to take on work. Microsoft's business value guidance for automation stresses defining the measures of success up front. A method for the sums is in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).

## An illustrative example

The following is a hypothetical case. A Johannesburg engineering supplies business lists nine automation ideas. After a two-week task log, the top three by hours are re-keying orders from emailed purchase orders, producing a weekly stock report, and sending delivery confirmations. The purchase-order task scores high on volume but poorly on data, because suppliers send PDFs in eight formats. The team starts instead with delivery confirmations, which are frequent, rule-based and low risk, and with the weekly report. Both are live within a month, and the time they free is redirected to cleaning the purchase-order data capture process. Only then is the larger automation attempted. The order of work was set by readiness, not by the loudest request.
