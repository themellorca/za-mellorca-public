---
hub: impact
record_id: CPS-255
slug: automation-understood-by-one-employee-continuity-maintenance-cost
title: The Automation Only One Person Understands: The Hidden Cost of Dependency
description: When one employee built an automation and nobody else knows how it works, the business is one resignation or sick day away from manual work, reverse-engineering and costly errors.
lead: When one employee built an automation and nobody else knows how it works, the business is one resignation or sick day away from manual work, reverse-engineering and costly errors.
category: Digital Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: A business-critical automation understood and maintained by only one employee
primary_cost_mechanism: Manual fallback cost, reverse-engineering effort and error correction when the person is absent, plus emergency maintenance and blocked improvement
sources:
  - Power Automate coding guidelines for cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/
  - Use consistent naming for flow components - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-consistent-naming-conventions
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
related:
  - When Every Decision Waits for One Person: The Cost of a Decision Bottleneck | /impact/work-stalls-when-decision-maker-unavailable-cost/
  - The Human Dispatcher: The Cost of Manually Routing Every Incoming Request | /impact/manually-assigning-incoming-requests-routing-delay-cost/
  - Cloud Prices for Old Infrastructure: The Cost of Moving Without Redesign | /impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/
summary: When one employee built an automation and nobody else knows how it works, the business is one resignation or sick day away from manual work, reverse-engineering and costly errors.
layout: plain
---
## The tolerated pain

Three years ago a clever employee in the finance team built an automation. It reads supplier invoices from a shared mailbox, extracts the amounts, posts them to the accounting system and flags anything over an approval limit. It saves hours every week, and everyone is grateful. Nobody else has seen how it works. It runs from his account, uses rules he adjusted by trial and error, and depends on a spreadsheet he keeps in a folder only he uses.

The business has come to rely on it, yet it is held together by one person's memory. If he resigns, goes on leave or is simply off sick during month-end, the automation becomes a mystery. If it fails, nobody can say why. If it needs to change because a supplier alters an invoice layout, nobody else dares to touch it.

This is single-person dependency in automation. The wider pattern is covered in [key-person operational dependency](/impact/key-person-operational-dependency/) and the underlying idea in [why key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/). This article focuses on the specific form that dependency takes when the thing only one person understands is a piece of automation.

## Why automations are especially prone to it

Automations are often built by the enthusiastic person closest to the problem, not by an IT team. Low-code tools make this easy and valuable, and that is precisely why so many exist. But several characteristics make them fragile when understanding sits in one head.

- **They run invisibly.** A working automation produces no activity for anyone to observe, so nobody learns how it works by watching.
- **They grow by tweaks.** A rule is added for one supplier, an exception for another, and the logic ends up as layers that only the builder can explain.
- **They hide in personal accounts.** Connections, credentials and files tied to one user's profile stop working when that user leaves or changes role.
- **Their dependencies are undocumented.** A mailbox rule, a spreadsheet, a folder path and an interface from another system may all be required, and the list exists only in the builder's head.
- **They fail quietly.** Without an error path, an automation can stop doing its job for days before anyone notices. See [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/).

## What good practice looks like on paper

Microsoft's published [Power Automate coding guidelines](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/) say their purpose is to help makers build flows that are consistent, perform well and can be maintained more easily. They apply to both citizen and professional developers. Their companion page on [consistent naming for flow components](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-consistent-naming-conventions) explains that standard naming improves collaboration, simplifies troubleshooting and streamlines maintenance, and recommends descriptive names rather than vague ones such as "Trigger1". The page on [robust error handling](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling) describes configuring what should happen when an action fails, for example sending a notification or logging the error details.

None of this is difficult. It is also not what most self-built automations look like. They are usually named after the day they were built, have no failure path, and tell nobody when they stop. The gap between the guideline and the reality is where the continuity cost sits.

## Why businesses tolerate it

- **It works.** A reliable automation attracts no attention, and documentation feels like effort with no immediate payoff.
- **The builder is busy and valued.** Asking a high performer to document their own work competes with the work they are known for.
- **Nobody else has the skills or the time.** Handing over to a colleague who has never seen the tool is a project in itself.
- **It falls outside formal support.** IT does not know it exists, so it is not on any list of supported services. The article on [unowned small automations](/impact/unowned-small-automations-support-failure-cost/) describes this gap.
- **Risk feels theoretical.** People rarely resign on a convenient schedule, but the possibility feels distant until it happens.

## Operational symptoms

- one name is the answer to every question about how a process "just runs";
- the automation is not listed anywhere and is described only as "Thabo's thing";
- nobody else has the login, the access or the folder it depends on;
- changes to a related system are delayed because nobody knows what the automation expects;
- when the builder takes leave, staff do the task manually "to be safe";
- repairs are made by trial and error, without a way to test safely.

## How the pain becomes money

- **Continuity cost:** when the person is absent or leaves, the task falls back to manual work at a much higher hourly cost.
- **Reverse-engineering cost:** a replacement or consultant must work out how the automation functions before changing or rebuilding it.
- **Error cost:** an unnoticed failure causes missed postings, duplicated actions or payments that must be corrected.
- **Maintenance premium:** the builder's time is spent on emergency fixes instead of the work he was hired to do.
- **Opportunity cost:** improvements are not made because nobody else is willing to change something they do not understand.
- **Bargaining risk:** the person becomes indispensable, which can distort remuneration, flexibility and the relationship with the business.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Johannesburg logistics company whose invoice-capture automation is understood only by one finance analyst, and who resigns.

| Assumption | Value |
| --- | --- |
| Hours of manual invoice capture the automation replaces | 25 per week |
| Cost of manual capture (clerical, loaded) | R180 per hour |
| Time to understand, rebuild or replace the automation | 6 weeks |
| Consultant or internal effort to reverse-engineer it | 40 hours at R950 |
| Corrections for errors made during the transition | R22,000 |

- Manual capture during the gap: 25 × R180 × 6 = R27,000
- Reverse-engineering: 40 × R950 = R38,000
- Error corrections: R22,000
- **Illustrative one-time cost: about R87,000**, before any late-payment penalties or supplier relationship damage

An hour spent documenting the automation each month would cost a small fraction of that. The point is not the specific figure but the asymmetry: a few hours of preparation against many weeks of disruption.

## When it becomes commercially urgent

- the builder gives notice, plans extended leave or is being headhunted;
- the automation handles money, customer commitments or regulated data;
- the process it supports is changing, for instance a new accounting system or supplier format;
- an audit or insurer asks who is responsible for business-critical automation;
- the business plans to grow volume that the automation was never designed to handle.

## What better looks like

The aim is not to discourage people from building automations. It is to make sure that what they build survives them.

1. **Keep an inventory.** List every automation, what it does, who built it, who owns it and what it depends on.
2. **Name a business owner and a backup.** The owner answers for outcomes; the backup can operate and explain it.
3. **Document it where others can find it.** A one-page description of purpose, trigger, steps, dependencies, credentials location and what failure looks like. The Insights article on [why automation documentation matters](/insights/why-automation-documentation-matters/) explains how little is needed.
4. **Move off personal accounts.** Use shared or service connections that remain valid when staff change.
5. **Add a failure path.** Make the automation tell a named person when it stops, in line with the error-handling guidance above.
6. **Pair, then rotate.** Have a second person run, change and test the automation under supervision at least once a year.
7. **Review support ownership.** Critical automations deserve the service expectations described in [why critical low-code automations need support ownership](/discovery/why-critical-low-code-automations-need-support-ownership/).

## Practical next actions

1. Ask each department which tasks run "by themselves" and who set them up.
2. For the three most important, record purpose, owner, dependencies and where credentials live.
3. Check that none depends on a personal account, personal folder or personal mailbox rule.
4. Add a failure notification to each, sent to two people.
5. Schedule a handover session in which a second person performs one change under supervision.
6. Repeat the inventory each quarter and when anyone gives notice.

## Bottom line

An automation that only one person understands is borrowed time. It delivers real savings now and a bill later, paid in manual work, reverse-engineering and mistakes when that person is not available. The fix is modest: a list, an owner, a backup, a page of documentation and a failure alert. That is far cheaper than discovering how fragile the process was on the day it stopped.
