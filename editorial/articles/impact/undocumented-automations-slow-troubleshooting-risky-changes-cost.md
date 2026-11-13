---
hub: impact
record_id: CPS-256
slug: undocumented-automations-slow-troubleshooting-risky-changes-cost
title: The flow nobody can explain: What undocumented automations cost to fix and change
description: When automations have no written record of what they do and why, every failure takes longer to diagnose and every change risks breaking something unknown.
lead: When automations have no written record of what they do and why, every failure takes longer to diagnose and every change risks breaking something nobody knew depended on it.
category: Automation
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Automation
commercial_domain: Automation
primary_pain: Building automations without documentation
primary_cost_mechanism: Slow troubleshooting, reverse-engineering before every change, accidental breakage of dependent processes and reliance on outside help
sources:
  - Troubleshoot a cloud flow - Power Automate | https://learn.microsoft.com/en-us/power-automate/fix-flow-failures
  - Use consistent naming for flow components - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-consistent-naming-conventions
  - Operational Excellence quick links - Power Platform | https://learn.microsoft.com/en-us/power-platform/well-architected/operational-excellence/
related:
  - Late payments nobody follows up: The cost of slow collections | /impact/inconsistent-payment-follow-up-cash-flow-cost/
  - Five laptop models, three chargers: What inconsistent hardware costs a business | /impact/mixed-laptop-models-and-accessories-support-and-procurement-cost/
  - One spreadsheet, three jobs: The cost of using Excel as form, database and workflow | /impact/spreadsheet-as-form-database-workflow-errors-maintenance-cost/
summary: When automations have no written record of what they do and why, every failure takes longer to diagnose and every change risks breaking something nobody knew depended on it.
layout: plain
---
## The tolerated pain

A flow was built on a Friday afternoon to move new orders from the website into the accounting system. It has run quietly for fourteen months. Then one Monday, orders stop arriving. The person who built it is on leave, the screen shows a red error that means nothing to anyone else, and nobody can say what the flow connects to, which account it uses, what it is supposed to do when an order has a missing field, or who relies on its output.

Troubleshooting begins with archaeology. Someone opens each step, guesses at the intent and tests changes on live data because there is no description to compare against. A job that would take an hour with a one-page note takes a day without it. This article looks at that cost: the time lost when something breaks, the extra risk every time someone wants to change an automation, and the practical minimum of documentation that avoids both. It is closely related to [automations understood by only one employee](/impact/automation-understood-by-one-employee-continuity-maintenance-cost/), but the focus here is the written record itself, not the person.

## Why automations go undocumented

- **They start small.** A quick flow to save ten minutes does not feel like a system that needs a manual.
- **Building is rewarding and writing is not.** The visible result is the working flow, and documentation delivers nothing the day it is created.
- **The tool seems self-explanatory.** Visual builders show boxes and arrows, which creates the impression that the design explains itself. It shows what happens, not why.
- **Ownership is unclear.** The builder moves on, the department changes, and the flow becomes everyone's and no one's.
- **Changes pile up.** A flow is edited five times to handle exceptions, and the original reasoning disappears.

## Operational symptoms

- nobody can list all automations the business runs, or who owns each;
- when a flow fails, the first step is to find the person who built it;
- staff are reluctant to change anything because "it might break something";
- flows have names like "Flow 3 copy (2)" with no description;
- credentials and connections tied to a personal account, so a password change or a departure stops the flow;
- unexplained rules inside the flow, such as a filter that excludes certain customers, with no recorded reason;
- different people give different answers about what the automation is meant to do.

## How the pain becomes money

- **Slow diagnosis:** the incident itself is short, but finding the cause takes hours. Microsoft's guidance on [fixing flow failures](https://learn.microsoft.com/en-us/power-automate/fix-flow-failures) describes using run history and error details to find what failed; those details tell you where the flow broke, not what it was meant to do.
- **Prolonged business impact:** while troubleshooting drags on, orders, invoices or notifications are late or missing. See [silent automation failures and their financial impact](/impact/silent-automation-failures-financial-impact/).
- **Costly changes:** every modification needs reverse-engineering first, and the risk of unintended consequences rises.
- **Accidental breakage:** a change to a form, a spreadsheet column or a field name quietly breaks a flow nobody knew depended on it. A related pattern is covered in [unowned small automations and support failure cost](/impact/unowned-small-automations-support-failure-cost/).
- **Dependence on outside help:** consultants charge to rediscover what a short document would have told them.
- **Compliance gaps:** an automation that handles customer or employee data without a record of what it moves makes it difficult to answer a POPIA question about where personal information goes.

## An illustrative cost model

This example is **illustrative**. All figures are assumptions for a hypothetical Port Elizabeth logistics business with 25 live automations.

| Assumption | Value |
| --- | --- |
| Automation incidents a year | 12 |
| Extra diagnosis time per incident without documentation | 4 hours |
| Changes requested a year | 8 |
| Extra reverse-engineering time per change | 5 hours |
| Loaded cost of technical time | R450 an hour |
| Changes that accidentally break something else | 2 a year at R12,000 each |

- Slower troubleshooting: 12 × 4 × R450 = R21,600
- Slower changes: 8 × 5 × R450 = R18,000
- Accidental breakage: 2 × R12,000 = R24,000
- **Illustrative total: R63,600 a year**

The estimate leaves out the business effect of late orders or missing messages while someone searches. Writing a page for each of 25 automations might take three hours each, or roughly R34,000 at the same rate, one time. The saving in a single year is close to double that, and the notes stay useful.

## Why the pain is tolerated

When automations work, nobody asks for documentation. When they fail, the pressure is to fix, not to write. Afterwards the urgency has passed. Documentation also feels like admin, so it loses against billable or customer-facing work. The cost appears only in aggregate, spread across incidents and changes that look unrelated.

## When it becomes commercially urgent

- the person who built the key automations resigns or goes on extended leave;
- a system the automations connect to is upgraded or replaced;
- an incident reaches a customer, such as a missed confirmation or duplicate invoice;
- the business wants to scale volumes and the existing flows are suspected to be fragile;
- an auditor or customer asks how personal data moves between systems.

## What better looks like

The goal is not a manual per automation. It is enough written context for a competent colleague to diagnose and change a flow safely.

1. **Keep a register.** One list of every automation with its name, purpose, owner, systems touched, trigger, schedule and business criticality.
2. **Write a one-page note for each.** Cover what it does in plain language, what starts it, what it reads and writes, what happens when input is wrong, which accounts it uses, who is told when it fails and how to turn it off safely.
3. **Record the reasons.** Note why each rule exists. A filter without an explanation is the line most likely to be removed by mistake.
4. **Use clear names and descriptions inside the tool.** Microsoft's [naming convention guidance for Power Automate](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-consistent-naming-conventions) recommends consistent naming so that flows and their actions can be understood by others. The same principle applies on any platform.
5. **Use service accounts, not personal ones,** and record which. See [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).
6. **Make it part of the build.** A flow is not finished until its note exists and a second person has read it.
7. **Update on change.** Add a dated line to the note whenever the flow is edited.

Documentation does not need to be elaborate to be useful. The ideas in [how to design automations that people can understand](/insights/how-to-design-automations-that-people-can-understand/) show how clear design and short notes support each other.

## Practical next actions

1. Make a list of every automation running today, including those in spreadsheets, forms and email rules.
2. Rank them by what would hurt most if they stopped for a day.
3. Write one-page notes for the top five this month.
4. Replace personal connections with shared service accounts where possible.
5. Add a rule that no new automation goes live without a note.
6. Ask a colleague who did not build a flow to read its note and explain it back.

## Bottom line

An undocumented automation is not free. It borrows time from the future and charges interest each time it breaks or needs a change. The repayment is a short note per flow, a shared register and a habit of recording reasons. These cost a few hours each and save many, and they keep the business running when the person who built the flow is unavailable.
