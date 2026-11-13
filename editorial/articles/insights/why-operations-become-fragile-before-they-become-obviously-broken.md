---
hub: insights
record_id: INS-022
slug: why-operations-become-fragile-before-they-become-obviously-broken
title: Why operations become fragile before they become obviously broken
description: Operations rarely fail suddenly. They lose slack first, as buffers shrink and workarounds pile up. Early signs and how to restore margin before a break.
lead: Operations rarely fail suddenly. They lose their slack first: buffers shrink, workarounds pile up and more of the work depends on a few people and files. How fragility builds quietly, the early signs to watch for and how to restore margin before something breaks.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - Google SRE - Cascading Failures: Reducing System Outage | https://sre.google/sre-book/addressing-cascading-failures/
  - What is Technical Debt? - IBM | https://www.ibm.com/think/topics/technical-debt
  - What Is Business Continuity? - IBM | https://www.ibm.com/think/topics/business-continuity
related:
  - Why customer onboarding breaks as the business grows | /insights/why-customer-onboarding-breaks-as-the-business-grows/
  - Why growth exposes problems that were already there | /insights/why-growth-exposes-problems-that-were-already-there/
  - Seven signs your digital systems are slowing the business down | /insights/seven-signs-your-digital-systems-are-slowing-the-business-down/
summary: Operations rarely fail suddenly. They lose their slack first: buffers shrink, workarounds pile up and more of the work depends on a few people and files. How fragility builds quietly, the early signs to watch for and how to restore margin before something breaks.
layout: plain
---
When an operation finally breaks, it usually looks sudden. Month-end does not close. A key client is invoiced wrongly three times. The person who runs the stock spreadsheet resigns and nobody can reproduce the weekly order. Leaders ask what went wrong last week, but the real answer is that the operation had been fragile for months. It was working, but only just, and only because people were absorbing the strain.

Fragility is the stage between healthy and broken. It is expensive to ignore because it is the last point at which problems are cheap to fix. Once the failure is visible, the business pays for the fix and the damage at the same time.

## What fragility actually means

A robust operation has margin. It can absorb a sick day, a busy month, a supplier delay or a software update without anyone noticing much. A fragile operation produces the same output on a normal day, but it has used up its margin. Small disturbances that would once have been absorbed now cause delays, errors or overtime.

The output is what management sees, so a fragile operation looks fine in the reports. Orders still go out. Invoices still get sent. The cost is hidden in effort, risk and luck.

## How margin gets used up

### Workarounds that become permanent

Every workaround is a small loan against the future. A manual check here, a side spreadsheet there, a habit of phoning the warehouse because the stock figure cannot be trusted. IBM's explanation of [technical debt](https://www.ibm.com/think/topics/technical-debt) describes how shortcuts taken under deadline pressure create future costs, and how, like financial debt, the longer they go unaddressed the more expensive they become. The same logic applies to operational workarounds. Each one is reasonable on its own. Together they leave the operation dependent on many small things going right.

### Capacity that is fully used

A team working at full stretch has no room to absorb a spike. When one person is away, their work lands on colleagues who are already full, who then make more mistakes, which create rework, which adds more load. Google's reliability engineers describe a similar effect in software: a [cascading failure](https://sre.google/sre-book/addressing-cascading-failures/) is one that grows over time through positive feedback, as overload on one part pushes more load onto the parts that remain. Their advice is to know where the breaking point is and to keep headroom rather than run at maximum utilisation. Operations teams behave in much the same way.

### Knowledge concentrated in a few people

As workarounds multiply, fewer people understand how the whole thing fits together. The operation starts to depend on specific individuals remembering specific steps. That is a systems weakness, not a staffing one, as argued in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

### Critical work running on fragile tools

A spreadsheet that one person maintains, an automation running on someone's personal login, an integration nobody monitors. These are fine until they are not, and when they fail they often fail silently. The risk of a single file carrying a whole process is set out in [the hidden risk of one file controlling an operation](/patterns/the-hidden-risk-of-one-file-controlling-an-operation/).

## Why fragility stays hidden

Three things keep fragility out of sight. First, capable people compensate. They stay late, double-check, chase and patch, so the output stays steady. Second, most measures track output rather than effort or risk. Third, nothing fails often enough to force a decision. A near miss every few weeks is easy to dismiss as bad luck.

Growth makes all of this worse, because extra volume uses up whatever margin was left. That dynamic is covered in [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/).

## Early warning signs to watch

Fragility leaves traces before it causes failure. These are worth checking every quarter:

- **Overtime and after-hours work** concentrated in the same people or the same week of the month.
- **Near misses**: errors caught just in time, deadlines met at the last minute, invoices corrected before they went out.
- **Rising rework**: more corrections, credit notes, re-sent documents or repeat customer queries.
- **Holiday anxiety**: certain people cannot take leave without the work stopping or being postponed.
- **More checking**: extra review steps added because outputs are no longer trusted.
- **Unexplained variation**: the same task taking an hour one week and a day the next.
- **Silent dependencies**: when asked what would happen if a given spreadsheet, login or integration disappeared, nobody is sure.

None of these signs proves the operation is about to fail. Several together, getting worse over time, mean it has little margin left.

## How to restore margin before something breaks

### Find the critical paths

Not every process deserves the same attention. Identify the few workflows where a failure would hurt most: getting paid, fulfilling orders, payroll, client delivery. IBM's guide to [business continuity](https://www.ibm.com/think/topics/business-continuity) starts with a business impact analysis, which assesses business functions for risks and vulnerabilities and estimates their likelihood and impact so effort can be prioritised. A small business can do a simple version of this in an afternoon.

### Map the weak points on those paths

For each critical workflow, list the people, files, tools and connections it depends on. Mark anything that relies on one person, has no backup, is not monitored or is held together by a manual step. These are your fragility points.

### Pay down the riskiest workarounds first

You cannot remove every workaround at once. Choose the ones that sit on critical paths and would cause the most damage if they failed. Replace a personal-login automation with a service account. Move a critical spreadsheet into a controlled system, or at least add version history and a second person who understands it. Write down the steps only one person knows.

### Build in slack deliberately

Margin is not waste. Cross-training, a realistic workload and a buffer before known peaks are cheaper than the failure they prevent. If the only way to meet demand is for everyone to work at full stretch every week, the operation is already fragile.

### Watch the leading indicators, not just output

Add a few of the warning signs above to the regular management view: overtime by team, rework counts, near misses logged. They are crude, but they show the trend before the failure. Ongoing operational attention of this kind is the core of [managed digital operations](/services/managed-digital-operations/).

## An illustrative example

The following is a hypothetical example. A South African logistics business with around sixty staff has never missed a payroll run. A quick review finds that payroll relies on one administrator exporting hours from the time system, correcting them in a spreadsheet and importing them into the payroll package, with no documented steps and no backup person. In the last six months she has worked late every payroll week and caught several errors just before submission.

Nothing has broken. But the operation is fragile: one illness during payroll week would stop it. The business documents the steps, trains a second person and replaces the manual export with a direct import. The cost is small. The cost of a failed payroll would not have been.

## The point of acting early

The fragile stage is uncomfortable to act on, because nothing has failed and there is always more urgent work. But it is the stage where problems are still cheap, where the people who understand the workarounds are still in the business, and where change can be planned rather than rushed. Waiting for the operation to break means fixing it under pressure, with less information and at higher cost.
