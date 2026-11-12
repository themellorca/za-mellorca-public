---
hub: impact
record_id: CPS-257
slug: automation-chosen-for-convenience-not-costly-bottlenecks-opportunity-cost
title: Automating the Easy Things First: The Opportunity Cost of Leaving Bottlenecks Alone
description: When automation effort goes to small conveniences instead of the slow, repetitive work that drains cash and capacity, the business pays twice: once for the trivial tools and again for the bottleneck left in place.
lead: When automation effort goes to small conveniences instead of the slow, repetitive work that drains cash and capacity, the business pays twice: once for the trivial tools and again for the bottleneck left in place.
category: Automation and AI
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Automation and AI
commercial_domain: Automation and AI
primary_pain: Automation used for convenience instead of high-cost bottlenecks
primary_cost_mechanism: Opportunity cost of unautomated costly work, delayed cash, repeated manual labour and maintenance of low-value automations
sources:
  - Power Platform Well-Architected - Power Platform | https://learn.microsoft.com/en-us/power-platform/well-architected/
  - Operational Excellence quick links - Power Platform | https://learn.microsoft.com/en-us/power-platform/well-architected/operational-excellence/
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
related:
  - Trusting the AI Answer: What Unchecked Facts Cost Before Anyone Notices | /impact/employees-trust-ai-answers-without-checking-critical-facts-confident-mistakes-cost/
  - Two Departments, Same Work: The Payroll Cost of Duplicated Effort | /impact/departments-duplicating-same-work-payroll-cost/
  - Retyping Invoices Into the Accounting System: The Labour and Error Cost | /impact/retyping-invoices-manual-capture-labour-error-cost/
summary: When automation effort goes to small conveniences instead of the slow, repetitive work that drains cash and capacity, the business pays twice: once for the trivial tools and again for the bottleneck left in place.
layout: plain
---
## Automation that makes the small things easier

A Midrand logistics firm proudly lists its automations. Meeting invitations are created automatically. Weekly reminder emails go out on time. Files from a shared inbox are saved to the right folder. Everyone agrees these are handy. Meanwhile, the dispatch team spends six hours each day re-keying delivery notes into the billing system, and invoices are delayed by a week because of it. Nothing about that has been automated.

The firm is not failing at automation. It is succeeding at the wrong parts of it. Convenience automations are easy to build, easy to show off and easy to justify, so they get built first. The expensive bottlenecks are harder, involve several people and systems, and so they wait.

## Convenience versus consequence

A convenience automation saves a few seconds for one person. A bottleneck automation removes a queue, a delay or a repeated error that costs real money. The difference is where the time and cash actually go.

- **Convenience:** annoying, small, personal and pleasant to remove. The benefit is felt by the person who built it.
- **Bottleneck:** slow, repeated, error-prone and shared by many. The benefit is felt in cash flow, customer waiting time or staff capacity.

Microsoft's [Power Platform Well-Architected guidance](https://learn.microsoft.com/en-us/power-platform/well-architected/) frames workload design around business outcomes and operational excellence rather than around what a tool can do, which is a useful discipline for any small business building its first automations: start from the outcome you need, then choose the work to automate. Its [operational excellence](https://learn.microsoft.com/en-us/power-platform/well-architected/operational-excellence/) pillar adds that automations need to be maintained and monitored once built, and the [Power Automate getting-started page](https://learn.microsoft.com/en-us/power-automate/getting-started) shows how little effort it takes to build a first flow, which is exactly why easy ones multiply.

## Why the wrong work gets automated first

- **Ease decides.** The first automations are what the tool makes simple, not what the business needs most.
- **Builders choose their own pain.** People automate the tasks they personally find tiresome, which are not necessarily the costliest.
- **Bottlenecks cross departments.** The real delay may sit between sales, dispatch and finance, so no one owns it.
- **Nobody has a ranked list.** Without data on where time goes, the loudest request wins. The related discovery on [automation candidates chosen by novelty instead of business value](/discovery/automation-candidates-are-chosen-by-novelty-instead-of-business-value/) describes the same pattern.
- **Success is measured by activity.** Counting automations built or runs completed feels like progress even when cash flow has not moved. See automation success measured by runs rather than business outcomes.

## The opportunity cost

Every automation consumes scarce attention: the time of whoever builds it, tests it and keeps it running. Spending that attention on a minor convenience means the bottleneck waits another quarter. The cost is not the money spent on the small automation, which may be trivial. It is the saving that the bottleneck automation would have delivered in that time, plus the maintenance burden of the small automations, which accumulates. Automations that nobody owns eventually break, as covered in [unowned small automations](/impact/unowned-small-automations-support-failure-cost/).

## How the pain becomes money

- **Delayed cash:** slow invoicing, quoting or onboarding steps keep money out of the bank longer.
- **Repeated labour:** skilled people key data by hand for hours a week. See [repeatable manual work and payroll cost](/impact/repeatable-manual-work-payroll-cost-automation/).
- **Errors and rework:** manual re-entry produces mistakes that reach customers and supplier statements.
- **Slow response:** customers wait while internal steps queue up.
- **Maintenance on low-value tools:** small automations still need fixing when applications change.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical 35-person logistics business. They are not measurements from any real company.

| Assumption | Value |
| --- | --- |
| Time saved by the convenience automations, in total | 4 hours a week |
| Manual re-keying of delivery notes into billing | 30 hours a week |
| Share of re-keying a well-designed automation could remove | 70 percent |
| Loaded hourly cost of the staff involved | R190 |
| Invoices delayed by the manual step | R1,800,000 outstanding, held 7 days longer than necessary |
| Cost of borrowing or overdraft, annual | 12 percent |
| Working weeks per year | 48 |

- Value of the convenience automations: 4 × R190 × 48 = R36,480 a year
- Labour recoverable from the bottleneck: 30 × 0.7 × R190 × 48 = R191,520 a year
- Financing cost of the invoice delay: R1,800,000 × 12 percent × (7 ÷ 365) = about R4,141 for each cycle of that outstanding amount, and more if the pattern repeats weekly
- **Illustrative annual gap: roughly R155,000 or more in labour alone, before counting cash-flow benefit and fewer errors**

The gap between the two sets of automations is the opportunity cost of choosing convenience first.

## Why the pain is tolerated

The convenience automations did work, and everyone saw them work. The bottleneck is thought of as simply how things are done. The people who suffer from it are not the people who build automations. Nobody wants to start something large and cross-functional when a small win is available this afternoon.

## When it becomes commercially urgent

- month-end closes later each quarter because of manual steps;
- a growth spurt forces the business to hire for data capture;
- a large customer demands faster, error-free documents;
- the person who does the manual work resigns or goes on leave;
- the business realises it has dozens of small automations and a persistent queue of manual work.

## What better looks like

1. **Measure where the time goes.** Ask teams to log the repeated tasks that consume the most hours, using the method in [how to rank manual tasks before you automate any of them](/insights/how-to-rank-manual-tasks-before-you-automate-any-of-them/).
2. **Put a rand value on each task.** Multiply hours by loaded cost, add delay and error cost, and sort from largest to smallest.
3. **Check the process first.** A broken process automated stays broken, as set out in [automating a broken process without simplifying it](/impact/automating-broken-process-without-simplifying-cost/).
4. **Choose the first target deliberately.** Use the criteria in [how to choose the first workflow to automate](/insights/how-to-choose-the-first-workflow-to-automate/).
5. **Set an outcome, not an activity.** Define success as hours saved, days shortened or errors reduced, and measure it afterwards.
6. **Keep convenience automations, but cap them.** They are fine when cheap and owned, but they do not deserve the attention that the bottleneck does.

## Practical next actions

1. List your current automations and write next to each the hours it saves per month.
2. Ask each department head for the single task that takes the most repeated hours.
3. Estimate the annual rand cost of the top three tasks.
4. Compare that cost with the total value of the automations you already have.
5. Assign an owner and a measurable target to the largest bottleneck before building anything else.

## Bottom line

Automation is not valuable because it exists. It is valuable in proportion to the cost it removes. A business that automates what is easy will feel busy and modern, while the slowest and most expensive work continues unchanged. Ranking the work by rand value, and starting at the top, turns automation from a collection of conveniences into a deliberate saving.
