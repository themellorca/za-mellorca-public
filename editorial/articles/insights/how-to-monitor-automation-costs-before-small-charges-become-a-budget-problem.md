---
hub: insights
record_id: INS-210
slug: how-to-monitor-automation-costs-before-small-charges-become-a-budget-problem
title: How to Monitor Automation Costs
description: Automation rarely fails by costing a fortune on day one. It drifts, one licence, one run and one forgotten workflow at a time.
lead: Automation rarely fails by costing a fortune on day one. It drifts, one licence, one run and one forgotten workflow at a time.
category: Automation
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Automation
sources:
  - Optimize your cloud investment with Cost Management - Microsoft Cost Management | https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-best-practices
  - Managing your costs with AWS Budgets - AWS Cost Management | https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
  - Monitor usage and spending with cost alerts in Cost Management - Microsoft Cost Management | https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
related:
  - How to Choose the First Workflow to Automate | /insights/how-to-choose-the-first-workflow-to-automate/
  - How to Know Whether an Automation Actually Ran | /insights/how-to-know-whether-an-automation-actually-ran/
  - What Should Be Automated Inside a CRM? | /insights/crm-tasks-worth-automating-first/
summary: Automation rarely fails by costing a fortune on day one. It drifts, one licence, one run and one forgotten workflow at a time.
layout: plain
---
A Johannesburg distribution company automates its order confirmations in March. The first invoice for the tools is small enough that nobody queries it. By September the same workflow is running three times as often, two extra connectors have been added, someone has built a second copy for a different branch, and the monthly charge has quietly become one of the larger lines in the software budget. Nothing was wasted on purpose. Nobody was watching.

Automation costs behave differently from most business costs. They are made of many small parts, they are usually billed in foreign currency, and they change when the business changes, not when someone signs a new contract. This article sets out how to monitor them in a way a small finance team can sustain.

## Know what an automation actually costs

The licence fee is only one component. A complete picture has at least five parts:

- **Platform charges:** subscriptions, per-user licences, and usage-based fees such as runs, tasks, or API calls.
- **Underlying infrastructure:** cloud servers, storage, and data transfer that the automation relies on.
- **Connected services:** paid add-ons, premium connectors, or AI model usage that the workflow calls on each run.
- **Exchange-rate exposure:** many of these are priced in dollars, so the rand cost moves even when usage does not.
- **People time:** the hours spent fixing, adjusting, and checking the workflow, which is usually the largest cost and the least often recorded.

Our guide to [calculating the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/) covers the benefit side. Monitoring is the other half: confirming, month after month, that the cost you approved is the cost you are paying.

## Give every automation a cost owner and a tag

Costs that belong to nobody are not monitored. The first control is simple: every automation has a named owner, and every charge can be traced to that automation. Cloud providers support this directly. Microsoft's guidance on [optimising a cloud investment with Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-best-practices) describes cost management as an organisational problem and an ongoing practice that begins before money is spent, and it names finance, managers and the teams who run the resources as three groups that must be aligned. The same logic applies to a business with five automations and no cloud team at all. Finance pays the bill, a manager decides whether the outcome is worth it, and the person who built the workflow understands why it costs what it does.

In practice this means a short register: automation name, what it does, who owns it, which cost centre it belongs to, which tools it depends on, and what it should cost in a normal month. Where your platform allows tagging or naming conventions, use them so that a line on an invoice can be matched to a row in the register. If a charge cannot be matched, treat that as a finding in its own right. Our article on [finding technology costs hidden across departments](/insights/how-to-find-technology-costs-hidden-across-departments/) shows how often those unmatched charges sit on a manager's credit card.

## Set a baseline and a budget for each one

You cannot spot drift without a reference point. For each automation, record three numbers when it goes live: expected monthly cost, expected volume of runs, and therefore expected cost per run. Cost per run is the most useful of the three because it separates a healthy increase (more orders, so more runs) from an unhealthy one (the same orders, but more runs or dearer runs).

Then set a budget. Providers make this easy to do and easy to forget. Amazon's documentation on [managing your costs with AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) describes cost budgets and usage budgets, alerts on both actual and forecasted spend, and notification at a percentage of the budgeted amount such as 80 percent. Forecast alerts matter because they warn you in the middle of the month, when you can still act, rather than when the invoice arrives. Microsoft offers comparable [cost alerts for monitoring usage and spending](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending). If your automation platform has no budget feature, a monthly calendar reminder and a one-line spreadsheet comparison do the same job.

## Watch the drivers, not only the total

A total that is stable can hide two offsetting problems, and a total that rises can be perfectly healthy. Track the drivers beneath it:

1. **Runs per automation per week.** A sudden jump often means a loop, a retry storm, or a trigger firing on events it should ignore.
2. **Failed runs and retries.** Failed runs frequently cost as much as successful ones, and a retry can double the charge for the same business outcome. Platforms that document how [failed actions are handled and retried](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling) show where this happens.
3. **Licences assigned versus licences used.** Seats attached to people who have left, or who have never signed in, are pure waste.
4. **Per-unit price changes.** Vendors change tiers and the rand moves. Note the unit price each month so a change is visible.
5. **Duplicate or overlapping automations.** Two workflows that do the same job double the cost without doubling the value.

The metrics that tell you whether an automation is healthy overlap with those for cost, which is why [what to monitor in an automated business process](/insights/what-should-you-monitor-in-an-automated-business-process/) is worth reading alongside this article.

## Include AI usage deliberately

Where an automation calls an AI model, cost is tied to the volume and length of what is sent. A workflow that summarises every inbound email costs more as the inbox grows, and a change in prompt length changes the bill without anyone touching the licence. Treat AI usage as its own line in the register, with its own budget and alert. The related problem of spend that cannot be tied to an outcome is described in [AI usage costs not allocated to business outcomes](/discovery/ai-usage-costs-not-allocated-to-business-outcomes/).

## Run a short monthly review

Monitoring only works if someone looks. A fifteen-minute monthly review, attended by finance and the automation owners, is enough for most small businesses. The agenda is the same each time:

- Compare actual spend to budget for each automation and for the total.
- Look at cost per run and flag anything more than a set margin away from baseline.
- List unassigned or unmatched charges and give each an owner.
- Ask of each automation whether the outcome it delivers is still needed.
- Record decisions: switch off, resize, renegotiate, or keep.

The final question is the one most often skipped. Retired processes leave automations running, and an automation nobody asked for last quarter is still charged this quarter. A quarterly check that each workflow still has a living process behind it catches these. The review also gives the people behind the work a chance to say that an automation has become fragile, which is often cheaper to address early. The question of who looks at a workflow after launch is explored in [who watches the automations](/insights/who-watches-the-automations/).

## Decide in advance what happens when a threshold is crossed

An alert nobody acts on is noise. For each automation, agree what happens at 80 percent of budget and at 100 percent. At 80 percent, the owner reviews run volume and failures within a week. At 100 percent, the owner either justifies the increase in writing, with a revised budget, or pauses the non-critical parts. For a business-critical workflow, pausing may not be acceptable, so write down that decision beforehand rather than improvising during a month-end crunch.

## Practical next actions

1. List every automation you run and the tool behind it, then add a named owner and a cost centre to each.
2. For each one, record expected monthly cost, expected runs, and cost per run as a baseline.
3. Switch on budget and forecast alerts at 80 percent in every platform that offers them, and send them to the owner and to finance.
4. Check licences assigned against licences used, and remove seats that belong to leavers or inactive accounts.
5. Book a recurring fifteen-minute monthly review and use the same five-point agenda each time.
