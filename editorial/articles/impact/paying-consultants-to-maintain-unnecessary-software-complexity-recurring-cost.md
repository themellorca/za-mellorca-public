---
hub: impact
record_id: CPS-065
slug: paying-consultants-to-maintain-unnecessary-software-complexity-recurring-cost
title: Paying Consultants to Keep Unnecessary Software Complexity Running
description: An over-customised technology environment turns every change into a paid job, and the premium for keeping it complicated can be measured and reduced.
lead: An over-customised technology environment turns every change into a paid job, and the premium for keeping it complicated can be measured and reduced.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Paying external consultants to keep an over-complicated technology environment running
primary_cost_mechanism: Recurring support premium, slower and costlier change, rework and delayed upgrades caused by avoidable complexity
sources:
  - Operational Excellence cloud design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles
  - Introduction to the Success by Design framework - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/success-by-design
  - FinOps Foundation - What is FinOps? | https://www.finops.org/introduction/what-is-finops/
related:
  - Every Team Picks Its Own Software: The Cost of Having No Integration Standards | /impact/every-team-chooses-own-software-no-integration-standards-fragmented-data-cost/
  - Long Software Contracts Signed Before Adoption Is Proven | /impact/long-software-contracts-signed-before-adoption-proven-paying-for-unused-capacity/
  - Software Bought Before the Process Was Defined: What Failed Implementations Cost | /impact/technology-bought-before-process-defined-failed-implementation-wasted-licences/
summary: An over-customised technology environment turns every change into a paid job, and the premium for keeping it complicated can be measured and reduced.
layout: plain
---
## The environment only the consultant understands

Somewhere in the business there is a system that nobody can change without a phone call. Perhaps it is a heavily customised accounting set-up, a web of scripts connecting four applications, or an add-on built years ago "just for us". When something breaks or needs adjusting, the same external consultant is called, quotes a few hours, and a few days later a fix appears. The invoices are regular. The system is, in a sense, working. But the business is paying every month to keep a level of complexity alive that it may never have needed.

This article is not an attack on consultants. Good outside help is often the cheapest way to get specialist skills. The problem here is narrower: a technology environment that has become more complicated than the business's needs justify, where the complexity itself creates a permanent stream of paid support. It is a cost that looks like normal running expense until someone asks how much of it exists only because the setup is harder than it should be.

## How complexity accumulates

Almost nobody sets out to build something complicated. It happens through a series of reasonable steps. A standard feature did not quite fit, so it was customised. A new tool needed data from an old one, so a connector was written. A departmental request was met with a one-off report. A consultant solved a deadline problem with a quick fix that was never replaced. Each step solves a problem. None of them is reviewed against the cumulative result.

Three conditions let it persist:

- **Nobody inside owns the whole picture**, so nobody can say what could be removed.
- **Documentation is thin**, so only the person who built it can safely change it.
- **The consultant's incentives and the business's are not perfectly aligned.** This is not a claim of bad faith. It is simply that a supplier paid by the hour does not gain from a simpler system, and a business that cannot judge the complexity cannot ask for one.

The business that tolerates this is often rational at each point. Reducing complexity is a project with an upfront cost and no deadline, while the monthly retainer is small and predictable.

## What the guidance says about complexity and operations

The Azure Well-Architected Framework's [operational excellence principles](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles) are written for cloud workloads, but several points travel well. They recommend setting standards for procedures and reviewing them regularly. They recommend removing redundant workflows or adding value to justify human effort. They say consistency in tools and conventions "reduces complexity" and makes maintenance easier. And they advise being explicit about whether to build custom tooling or buy off-the-shelf software, noting that bought software saves on maintenance costs while custom builds give control at a cost impact. Their warning about chaotic operations is blunt: without clear ownership, teams often resort to methods executed with high effort and low outcomes.

Microsoft's [Success by Design framework](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/success-by-design) adds a relevant caution from implementation practice: configurations, customisations and partner solutions can themselves affect how a solution performs, even when the underlying platform is sound. In other words, the complexity you add is your responsibility, not the platform's.

The FinOps Foundation's description of [what FinOps is](https://www.finops.org/introduction/what-is-finops/) frames technology spending as a matter of shared accountability and informed trade-offs, with the aim of optimising the value technology delivers, not merely cutting cost. That framing is useful here. The question is not "how do we spend less on the consultant?" but "what value does each part of this environment deliver?".

## Symptoms in the business

- **Small changes take days.** A new field, a changed report or a new user needs outside help.
- **Fear of upgrades.** Updates are avoided because they might break a customisation.
- **Several tools do overlapping jobs**, linked by custom code.
- **The same issues recur** and are patched rather than resolved.
- **No one can draw the system on a page** or say what depends on what. Compare [undocumented automations that slow troubleshooting and make changes risky](/impact/undocumented-automations-slow-troubleshooting-risky-changes-cost/).
- **Costs that rise without a clear reason**, because each new problem costs more to diagnose in a tangled environment.

## How it becomes money

The mechanisms are technology waste, error and rework cost, and scaling cost. Complexity multiplies the effort of every future change. A useful way to frame it:

> Complexity premium = annual support spend on the environment − what the same business function would cost on a simpler, more standard setup

### An illustrative calculation

Consider a 50-person professional services firm that has used one consultant for eight years to maintain a customised practice management system, three scripts that move data between it and the accounting package, and a bespoke reporting add-on. All figures are **illustrative assumptions**.

| Item | Assumption | Annual cost |
| --- | --- | --- |
| Retainer | R12,000 a month | R144,000 |
| Ad hoc fixes | 6 fixes × 8 hours × R1,100 | R52,800 |
| Internal time dealing with errors and waiting | 3 staff × 2 hours a week × 48 weeks × R300 | R86,400 |
| Delayed upgrades (avoided benefits, estimated) | Allowance for features not adopted | R30,000 |
| **Total** |  | **R313,200** |

Check: 6 × 8 × 1,100 = R52,800. 3 × 2 × 48 × 300 = R86,400. R144,000 + R52,800 + R86,400 + R30,000 = R313,200. Suppose a review finds that a standard configuration of a mainstream platform, with documented integration, would cost R90,000 a year to support, and a one-off simplification project of R280,000 would be needed to get there. The annual premium is then R313,200 − R90,000 = R223,200, and the project pays back in about 15 months. These are assumptions, not a forecast. They show that the decision can be framed as an investment with a payback period, not as a vague wish to "simplify".

Treat the allowance for delayed upgrades with caution: it is a judgement, and the calculation should still make sense if you set it to zero. Without it, the premium is R193,200 and the payback about 17 months.

## Secondary consequences

Dependence on one outside party creates continuity risk, which is explored in [key-person operational dependency](/impact/key-person-operational-dependency/). Security can suffer if the environment is too fragile to patch. Switching costs rise each year, making the business less able to negotiate. And a complicated environment makes every strategic move, from adding automation to launching a new service, slower and more expensive.

## When it becomes urgent

Look at it again when the support bill has risen for several consecutive years, when a vendor ends support for a component you have customised, when the consultant retires or becomes unavailable, or when you want to introduce automation or AI and discover that nobody can say where the data lives. The cheapest moment to simplify is before one of those events forces it.

## What better looks like

A simpler environment has a clear owner inside the business, a one-page map of systems and integrations, and a rule that customisation needs a business case. Standard features are preferred over custom code. Every integration and custom component has a named purpose and a documented fallback. Support arrangements are reviewed against value, with an agreed handover if the supplier changes. Importantly, the consultant remains useful, but as an adviser who helps reduce complexity as well as maintain it. The Mellorca article on [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/) explores how to keep design decisions with the business.

## Practical steps

1. **Get the invoices together** for the last 12 to 24 months and categorise each one: break-fix, change request, upgrade, or routine maintenance.
2. **Draw the environment** on one page, with every integration and custom component. Mark those nobody can explain.
3. **Ask for an explanation** of each custom component: what it does, what depends on it, and what the standard alternative would be.
4. **Identify removable items**, such as unused reports, duplicate tools and integrations with no consumers.
5. **Get a second opinion** from someone who does not benefit from the current arrangement, such as a [digital systems audit](/services/digital-systems-audit/).
6. **Agree a simplification plan** in stages, starting with the components that cause the most recurring cost.

## Bottom line

Complexity is not free, and it is rarely neutral. Every component that is harder to understand than it needs to be turns into a recurring charge, a slower change and a larger risk. The business does not need to dismiss its consultant. It needs to know how much of what it pays for is maintaining value and how much is maintaining complication, and to treat the second category as a cost that can be reduced.
