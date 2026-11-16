---
hub: impact
record_id: CPS-481
slug: opening-new-branches-copying-inconsistent-processes-scaling-bad-operations-cost
title: New Branches, Old Habits: The Cost of Copying Inconsistent Processes as You Expand
description: Each new site inherits whichever version of the process its first manager learned. Differences multiply, costs rise, and head office loses the ability to compare, support or improve branches.
lead: Each new site inherits whichever version of the process its first manager learned. Differences multiply, costs rise, and head office loses the ability to compare, support or improve branches.
category: Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Operations
commercial_domain: Operations
primary_pain: New branches copy whichever version of the process their first manager learned, so inconsistencies and errors multiply with each site
primary_cost_mechanism: Scaling cost from per-branch training, support and reconciliation, incomparable branch reporting, replicated errors and stock losses, inconsistent customer experience, and slower openings
sources:
  - Standardize processes during a Dynamics 365 implementation - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/standardize-business-processes
  - Business process flows overview - Power Automate | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - Growth That Adds Admin Faster Than Output: The Margin Cost of Complexity | /impact/business-growth-administration-outpacing-productive-capacity-margin-cost/
  - Bottlenecks You Cannot See: The Price of Problems Management Misses | /impact/not-knowing-where-operational-bottlenecks-form-hidden-delay-financial-cost/
  - Tasks Given in Passing: The Cost of Work That Disappears Between Conversations | /impact/work-assigned-verbally-then-forgotten-tasks-lost-between-conversations-cost/
summary: Each new site inherits whichever version of the process its first manager learned. Differences multiply, costs rise, and head office loses the ability to compare, support or improve branches.
layout: plain
---
## Three branches, three ways of doing the same job

A tyre and fitment business opens its fourth branch in Polokwane. The new branch manager spends two weeks at the busiest existing branch to learn the ropes, then sets up the new site the way that branch works. Unfortunately, that branch quotes, books jobs, records stock and handles warranty claims differently from the other two. One branch uses the point-of-sale system for job cards; another uses paper and captures them later; a third keeps a spreadsheet of fitment bookings. Warranty claims follow three different routes. Within six months, head office cannot compare branch margins, stock counts do not reconcile, and staff transferred between branches have to relearn basic tasks.

The example is illustrative, but the pattern is familiar to any business that grows by adding sites. Expansion is usually planned around premises, staff and stock. The process the new branch will follow is copied informally from whichever existing branch is nearest or most successful, including its workarounds, its exceptions and its errors.

## How inconsistency spreads

Most first branches never had a designed process. The way work is done evolved through the habits of the founding team, and it worked because those people knew each other and could fix problems in person. When the second branch opens, it copies the first, with local adjustments. The third copies the second. Each copy introduces small differences, and nobody records which version is correct.

Several conditions make this worse:

- **No written process.** New managers learn by shadowing, so they inherit one person's habits rather than the business's standard.
- **Systems configured differently per site.** The same software is set up with different codes, categories and workflows at each branch.
- **Exceptions treated as local rules.** A workaround for one customer or supplier becomes the normal way of working at that branch.
- **Speed of opening** takes priority over consistency, so process design is deferred until after the branch is trading, which in practice means never.

## What scaling inconsistency costs

### Higher operating cost per branch

Every variation needs its own training, its own support and its own reporting fixes. Head office staff must remember how each branch does things. Costs that should fall as the business grows instead rise with each new site. The related article on [processes designed for five people failing as the business grows](/impact/five-person-processes-growing-business-scaling-cost/) describes the same pressure inside a single site.

### Numbers that cannot be compared

When branches record sales, stock, labour and returns differently, management reports compare unlike with unlike. Head office cannot tell whether one branch is genuinely less profitable or simply records costs differently. Decisions about where to invest, which managers to promote and which sites to close are made on unreliable information.

### Errors multiplied, not fixed

A flaw in the original process, such as a missing approval step or a manual stock adjustment, is copied into every new branch. Instead of being fixed once, the error is now repeated across sites. The insight on [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/) explains this effect.

### Inconsistent customer experience

Customers who use more than one branch notice different prices, different warranty handling and different paperwork. Brand trust suffers, and national or fleet customers may refuse to deal with branches that do not follow the agreed terms.

### Slower openings and harder transfers

Without a standard, each new branch is effectively designed from scratch. Staff moved between branches lose productivity while they learn local variations.

## A hypothetical estimate

The following figures are assumptions for illustration. If each of five branches spends ten extra hours a month on reconciliation, rework and head-office queries caused by process differences, that is 600 hours a year. At a loaded cost of R250 an hour, the direct labour cost is R150,000 a year, before counting stock losses, warranty errors or poor decisions made from incomparable reports. Each additional branch opened on the same basis adds to the figure.

## Why businesses tolerate it

Branch managers value autonomy, and some variation genuinely reflects local conditions. Standardising feels like a large project, and while the business is growing quickly there never seems to be time. Successful branches resist changing what works for them. And the cost of inconsistency is spread across head office and branches, so nobody owns it.

## What a replicable operating model looks like

A business that scales well defines a core process template that every branch follows, with deliberately limited and documented local variations. Microsoft's guidance on [standardising business processes](https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/standardize-business-processes) describes standardisation as establishing uniform methods across departments, locations or legal entities, recommends assessing the current state and documenting processes before designing a common framework, and lists overlooked local needs and overly rigid design among the risks. Tools can help enforce and measure the standard. Microsoft's overview of [business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) describes guiding people through the same stages and steps every time, and its overview of [process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes using event data from business systems to see how processes are actually executed and where they differ.

A simpler starting point is to compare branches against one written process for the few activities that matter most: quoting, job or order capture, stock movements, returns and cash handling. The guide on [documenting exceptions, not just the happy path](/insights/how-to-document-exceptions-not-just-the-happy-path/) helps make that template realistic. Before automating anything, simplify it; the article on [automating a broken process](/impact/automating-broken-process-without-simplifying-cost/) explains why.

## Practical next actions

1. **Map one core process at every branch.** Start with the process that most affects margin or customers, such as quoting or stock control, and document how each branch actually does it.
2. **Agree the standard version.** Choose the best practice across branches, fix known weaknesses, and write it down with clear steps, owners and controls.
3. **Decide which variations are allowed.** List genuine local differences and record them as approved exceptions rather than leaving them informal.
4. **Align system configuration.** Use the same codes, categories, workflows and reports in every branch so that numbers are comparable.
5. **Build an opening playbook.** Make the standard processes, system setup and training plan part of the checklist for every new branch, before it trades.
6. **Measure consistency.** Compare cycle times, error rates and stock variances between branches each quarter and investigate the outliers.

Growth through new branches multiplies whatever the business already does. If the processes are sound and consistent, each new site becomes easier and more profitable to run. If they are not, expansion multiplies cost, confusion and risk.
