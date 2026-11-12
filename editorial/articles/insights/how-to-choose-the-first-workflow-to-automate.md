---
hub: insights
record_id: INS-153
slug: how-to-choose-the-first-workflow-to-automate
title: How to Choose the First Workflow to Automate
description: The first automation a business builds does more than save time. It sets expectations, teaches the team how automation is run and decides whether there will be a second. Why the first choice deserves different criteria from later ones, and a short method for making it.
lead: The first automation a business builds does more than save time. It sets expectations, teaches the team how automation is run and decides whether there will be a second. Why the first choice deserves different criteria from later ones, and a short method for making it.
category: Automation
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Automation
sources:
  - Recommendations for implementing automation - Power Platform | https://learn.microsoft.com/en-us/power-platform/well-architected/operational-excellence/automate-tasks
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
related:
  - How to Know Whether an Automation Actually Ran | /insights/how-to-know-whether-an-automation-actually-ran/
  - What Business Automation Should Actually Solve | /insights/what-business-automation-should-actually-solve/
  - The Difference Between Necessary Human Work and Avoidable Manual Work | /insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/
summary: The first automation a business builds does more than save time. It sets expectations, teaches the team how automation is run and decides whether there will be a second. Why the first choice deserves different criteria from later ones, and a short method for making it.
layout: plain
---
Once a business decides to start automating, the list of candidates arrives quickly. Invoices, onboarding, quotes, leave requests, stock reorders, customer reminders, monthly reports. Everyone has a favourite. The temptation is to start with the biggest pain or the most impressive idea.

That is usually a mistake for the first one. The first automation is not just a project; it is how the business learns what automation involves. It establishes who owns automations, how they are tested, how failures are noticed and how much trust staff place in the result. A first project that runs late, breaks quietly or annoys the people it was meant to help can set automation back for years. A first project that works modestly and reliably makes the second one easier.

## Why the first choice is different

Later automations can be chosen mainly on value. The first should be chosen on value and learnability together. It needs to be worth doing, but it also needs to be small enough to finish, clear enough to test and safe enough that a mistake is not costly.

Microsoft's Power Platform Well-Architected guidance makes a similar point in its [recommendations for implementing automation](https://learn.microsoft.com/en-us/power-platform/well-architected/operational-excellence/automate-tasks). It suggests aiming for "easy wins": tasks that are highly procedural, clearly defined, free from complicating variables and performed as part of normal operations. It also advises against prioritising tasks that require complex logic to handle variable situations or that rarely occur.

## Seven qualities of a good first workflow

### 1. It happens often

A workflow that runs daily or weekly will show its value quickly and expose problems quickly. A quarterly task gives too few chances to learn and too long a wait to see whether it worked.

### 2. It follows clear rules

The steps should be describable as "when this happens, do that", with few judgement calls. IBM's explanation of [workflow automation](https://www.ibm.com/think/topics/workflow-automation) notes that it does not need AI to be effective; straightforward rule-based automation works well for repetitive tasks such as data entry, approvals and document handling. A first project that depends on interpretation or AI adds uncertainty the team is not yet equipped to manage.

### 3. The process is already stable

If people disagree about how the workflow should run, or it is done differently each time, automate later. Automation does not fix a broken process; it runs it faster, a problem explored in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/).

### 4. Its inputs are reliable

The information the workflow needs should arrive in a consistent form from a system, not from free-text emails or handwritten forms. Poor inputs are the most common reason first automations fail.

### 5. A mistake is recoverable

For the first project, choose a workflow where an error can be caught and corrected without harm. Internal notifications, task creation and report preparation are forgiving. Payments, customer-facing pricing and deletion of records are not.

### 6. Success is easy to see

The result should be visible to the people involved: an hour a day no longer spent, a report that arrives on time, a request that no longer needs chasing. Visible success builds support for the next project.

### 7. Someone wants to own it

A first automation needs a business owner who cares about the outcome and will notice when it stops working. Without one, it becomes an orphan the moment the builder moves on.

## Common first choices that go wrong

- **The most painful process.** It is usually painful because it is complex, variable and cross-departmental, which is exactly what makes it a poor first project.
- **The most novel idea.** An impressive AI use case can absorb months and deliver little. The tendency is described in [automation candidates chosen by novelty instead of business value](/discovery/automation-candidates-are-chosen-by-novelty-instead-of-business-value/).
- **A process run by one expert.** If only one person understands the workflow, automating it means extracting undocumented knowledge first. That is valuable, but it is a bigger job than it looks.
- **Anything touching money or customers on day one.** Get the operating habits right on something safer first.

## A short method for choosing

1. **Gather candidates from evidence.** Look at where time is actually spent and where work queues up, rather than relying only on opinion. The approach is set out in [how to find automation opportunities from operational evidence](/insights/how-to-find-automation-opportunities-from-operational-evidence/). Where systems record the process, event logs can help; IBM's overview of [process mining](https://www.ibm.com/think/topics/process-mining) explains how they reveal the real sequence of steps and where work waits.
2. **Shortlist five.** Remove anything that fails qualities 3, 4 or 5 above.
3. **Score the shortlist.** Rate each candidate from one to three on frequency, rule clarity, input reliability, recoverability, visibility of success and ownership. Add a simple estimate of hours saved per month.
4. **Pick the best balance, not the highest saving.** The right first project is usually in the top half for value and the top two for learnability.
5. **Define done before building.** Agree what the workflow will do, what it will not do, how exceptions are handled, how failures are reported and who owns it. The importance of the failure path is covered in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

| Candidate | Frequency | Clear rules | Reliable inputs | Recoverable | Visible result | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| New-customer welcome and account set-up tasks | 3 | 3 | 2 | 3 | 3 | 3 |
| Supplier invoice capture and approval routing | 3 | 2 | 1 | 2 | 3 | 2 |
| Monthly management pack preparation | 1 | 2 | 2 | 3 | 3 | 3 |

In this illustrative scoring, the first candidate is the strongest starting point. The second may deliver more value eventually, but its unreliable inputs make it a better second or third project.

## An illustrative example

Consider a hypothetical Stellenbosch wine logistics business with around forty staff. The owner wanted to start by automating supplier invoice processing, the most time-consuming task in finance. Invoices arrived as PDFs in varied formats, approvals depended on which manager was available, and exceptions were common.

Working through the qualities above suggested a different start: the internal steps triggered when a new customer account was approved, such as creating the account in the logistics system, setting up the customer folder, notifying the account manager and scheduling the first check-in. It ran several times a week, followed clear rules, used data already in the CRM, and a mistake meant only a missing task. It was live within a few weeks. The team learned how to test, monitor and own an automation on something forgiving, and tackled invoices next with that experience. This scenario is illustrative, not a client case study.

## After the first one

Treat the first automation as a pattern for the rest: record what it does, who owns it, how failures are reported and how changes are made. Microsoft's guidance also recommends documenting manual processes you decide not to automate yet, as a checklist that reduces errors and helps design future automation. Once the first workflow has run reliably for a month or two, value can take a larger role in choosing the next. A full method for weighing that value is set out in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).

Mellorca's [business automation](/services/business-automation/) work often begins with exactly this choice, because a well-chosen first workflow makes every later one easier to justify and run.
