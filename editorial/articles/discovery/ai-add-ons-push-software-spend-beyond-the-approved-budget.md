---
hub: discovery
record_id: DISC-329
slug: ai-add-ons-push-software-spend-beyond-the-approved-budget
title: AI add-ons increase software spend outside original budgets
description: Per-user AI tiers and add-ons arrive as small recurring charges nobody approves. How to find them, test their value and bring them into budget.
lead: Per-user AI tiers and optional add-ons arrive as small recurring charges that no approval process catches. How to find them, test their value and bring them inside the budget.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Finance manager, with IT or operations lead administering the software consoles
budget_owner: CFO, financial director or business owner
sources:
  - License Options for Microsoft Copilot | https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing
  - Budgeting FinOps Framework Capability | https://www.finops.org/framework/capabilities/budgeting/
  - Anomaly Management FinOps Framework Capability | https://www.finops.org/framework/capabilities/anomaly-management/
  - Optimize your cloud investment with Cost Management - Microsoft Cost Management | https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-best-practices
related:
  - Why software portfolio decisions need business value, not only licence counts | /discovery/why-software-portfolio-decisions-need-business-value-not-only-licence-counts/
  - Paying for unused software features because contracts are bundled | /discovery/why-bundled-software-contracts-hide-unused-features/
  - Vendors change packaging and pricing faster than budgets adapt | /discovery/why-vendor-pricing-changes-outrun-software-budgets/
summary: Per-user AI tiers and optional add-ons arrive as small recurring charges that no approval process catches. How to find them, test their value and bring them inside the budget.
layout: plain
---
The annual software budget was approved in February. By August the finance manager is looking at a card statement that shows something nobody planned for: a per-user AI charge on the productivity suite, a "copilot" tier on the CRM, a premium assistant on the helpdesk tool, and two standalone AI subscriptions bought by team leads who wanted to try them. None of these lines existed in the budget. Each is small. Together they have added a six-figure annual commitment in Rand, spread across departments, with no single person who agreed to the total.

This article looks at that operating condition: AI add-ons increasing software spend outside the original budget. It is common in businesses that have already tidied their core software and then find that every vendor now sells an AI layer on top.

## The problem in plain language

Software vendors increasingly sell AI features as optional extras, priced per user per month, per usage unit, or as a step up to a higher plan. The core product is already budgeted and approved. The add-on is a separate purchase that can be switched on in an admin console, often by someone with the authority to spend a few hundred Rand a month and no obligation to tell finance. Because each decision looks small and reversible, none triggers the approval process designed for larger purchases. The budget is not exceeded by one decision; it is exceeded by many.

## What you are actually trying to solve

A finance manager or owner facing this problem usually wants three things: a clear list of every AI charge the business is paying, a way to decide which ones earn their cost, and a rule that stops the next unplanned charge from arriving unnoticed. Department heads, meanwhile, want to keep the tools that genuinely save their teams time. A workable answer has to serve both.

## Evidence and system mechanism

### Add-ons are priced on top of an existing licence

Microsoft's own [licensing guidance for Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing) describes it as an add-on plan that requires one of a list of prerequisite Microsoft 365 subscriptions. That structure is typical. A business cannot simply buy the AI feature; it must first hold the right base plan, so adopting an add-on can force a plan upgrade as well as a new line item. The cost of the "extra" is therefore often larger than the price on the add-on's own page.

### Budgets only work if spending is tracked against them

The [FinOps Foundation's budgeting capability](https://www.finops.org/framework/capabilities/budgeting/) describes budgeting as setting approved funding, tracking spend and value within it, and defining acceptable variance thresholds and how to handle out-of-cycle changes. It was written for cloud and technology spending, but the principle transfers to any recurring software cost: a budget without a variance threshold and an exception route is a wish rather than a control.

### Unexpected spend needs detection and an owner

The FinOps framework's [anomaly management capability](https://www.finops.org/framework/capabilities/anomaly-management/) treats unexpected cost as something to detect, alert on to the responsible parties, investigate and document. In a small business this does not need special tooling. It needs a monthly comparison of actual recurring charges with the approved list, and a named person who asks about every new line.

### Cost accountability sits with finance, managers and the teams using the tool

Microsoft's [cost management guidance](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-best-practices) recommends that finance, managers and the teams doing the work are all aligned and accountable for cost, with planning that begins before money is spent. The same three-way split applies to AI add-ons: finance sees the charge, the manager owns the business case, and the team using the tool reports whether it is used.

### Warning signs

- Card or debit-order statements show recurring charges for AI features that no approval record mentions.
- Several departments pay separately for tools that do overlapping AI work, a pattern described in [departments buy overlapping software for the same capability](/discovery/departments-buy-overlapping-software-for-the-same-capability/).
- Nobody can say how many people actually use each add-on.
- The software budget variance is explained as "AI", with no breakdown.

## Problem owner and why-now trigger

The finance manager or financial director owns the budget and feels the variance first. The IT lead or operations manager owns the administration consoles where add-ons are switched on. Department heads own the business case for the tools their teams use. The budget owner is usually the CFO, financial director or business owner.

The trigger is typically a budget review that does not reconcile, a vendor renewal that includes an AI uplift, or a Rand–dollar exchange rate move that makes dollar-priced subscriptions noticeably dearer. Many AI products are priced in US dollars, so the Rand cost changes between invoices even when nothing else does. See also [AI subscription sprawl and its unmeasured cost](/impact/ai-subscription-sprawl-unmeasured-value-cost/).

## Economic consequence

The direct cost is the sum of the add-ons themselves, plus any plan upgrades they require. The indirect cost is larger. Spend that finance cannot see cannot be forecast, so the cash-flow plan is wrong. Add-ons that nobody measures keep renewing whether or not anyone uses them. And because the charges are scattered, negotiating leverage is lost: three departments buying three small plans from the same vendor have not asked for a combined discount.

## Root cause

- **Approval thresholds written for large purchases.** Small monthly charges fall below the level that triggers review, however many of them there are.
- **Admin rights without spend rights.** Whoever can enable a feature can commit the business to paying for it.
- **No register of recurring charges.** The business knows its core platforms but not the extras attached to them.
- **Vendor packaging.** AI features arrive as trials that convert to paid, or as plan tiers whose price change is described as an improvement.
- **No stated purpose.** AI is bought because it is available, not because a defined problem needs it, as explored in [buying AI without a defined business problem](/impact/buying-ai-without-defined-business-problem-cost/).

## Practical intervention

1. **List every AI charge.** Go through twelve months of card statements, debit orders and vendor invoices. Record vendor, product, monthly cost in Rand, billing currency, number of seats and who requested it.
2. **Add a rule on recurring spend.** Any new recurring charge, whatever its size, needs a named owner and a one-line purpose before it is switched on. Count the annual value, not the monthly price.
3. **Separate admin from approval.** Console administrators can enable a feature only after finance confirms the budget line.
4. **Measure use for 60 days.** For each add-on, record active users and one task it is supposed to improve. Cancel or reduce seats where there is no evidence of use.
5. **Set a variance threshold.** Agree the percentage by which software spend can exceed budget before the finance manager must explain it, and review actual against approved each month.
6. **Consolidate before renewal.** Compare overlapping tools and negotiate once per vendor.

### Trade-offs

A strict approval rule can slow down teams who are legitimately experimenting. A pragmatic compromise is a small, capped experimentation allowance with a fixed review date, so people can try a tool for ninety days without a full business case, but it cannot quietly become permanent.

### An illustrative example

Illustrative: a Johannesburg professional services firm with 60 staff found, when reconciling its card statement, that eleven recurring AI-related charges had started in the year, none budgeted. Four were duplicates of a capability already inside the productivity suite. The finance manager cancelled those, reduced seats on three others to the staff who used them, and created a register with an owner for each remaining line. The following quarter's software variance was explained line by line instead of with one word.

## Diagnostic questions

- Can you list every AI-related recurring charge the business pays, with its owner?
- Which of those were in the approved budget?
- How many people used each one in the last thirty days?
- Who can switch on a paid feature without finance knowing?

## What good looks like

Every recurring software charge, including AI add-ons, sits on a register with a named owner, a stated purpose and a review date. New charges need approval before activation. Finance compares actual recurring spend with the approved list every month and explains variances in detail. Add-ons that are used and valuable continue; the rest are reduced or removed before they renew.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can build the register of software and add-on spend and test what is actually used. [Digital operations improvement](/services/digital-operations-improvement/) can then set up the approval, ownership and monthly review routine so that the register stays accurate.

## Method note

The sources are vendor and framework documentation used to describe how add-ons are packaged and how budget control is usually structured. They do not establish how much any particular business is spending. The example is illustrative rather than a client case.
