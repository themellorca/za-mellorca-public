---
hub: insights
record_id: INS-160
slug: how-to-avoid-creating-a-fragile-automation-stack
title: How to Avoid Creating a Fragile Automation Stack
description: Automations built one afternoon at a time can form a chain that fails silently. Here is how to build so that one change does not break everything.
lead: Automations built one afternoon at a time can form a chain that fails silently. Here is how to build so that one change does not break everything.
category: Workflow Automation
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Workflow Automation
sources:
  - Reliability design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Circuit Breaker Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
related:
  - How to Reduce Manual Status Checking | /insights/how-to-reduce-manual-status-checking-across-your-team/
  - What Happens When the Only Person Who Understands the System Leaves? | /insights/what-happens-when-the-only-person-who-understands-the-system-leaves/
  - Why Processes Break Between Departments | /insights/why-processes-break-between-departments-and-how-to-close-the-gaps/
summary: Automations built one afternoon at a time can form a chain that fails silently. Here is how to build so that one change does not break everything.
layout: plain
---
A small logistics firm in Cape Town has grown its automations one at a time. A form sends an email. The email triggers a spreadsheet update. The spreadsheet feeds a report that a second tool turns into an invoice draft. Each link was added in an afternoon by a different person, and each one worked on the day it was built. Then a supplier changes a column heading, one login expires, and invoices stop appearing. It takes two days to find out which link broke, because nobody remembers how the chain was assembled.

This is a fragile automation stack: a set of automations that works under ideal conditions and fails in ways that are hard to see, hard to trace and hard to fix. Fragility is rarely designed in. It accumulates through reasonable shortcuts. This article describes how fragility builds up and what to do at each point to avoid it.

## What makes a stack fragile

An automation stack is fragile when a small change in one place causes a large failure somewhere else. Four conditions tend to be present together.

- **Long chains with hidden dependencies.** Each automation relies on the output of another, but the connection is implicit, such as a spreadsheet column or a folder name.
- **Single points of failure.** One personal account, one API key or one person's knowledge holds the whole thing together.
- **Silent failure.** When something breaks, nothing tells anyone. The first sign is a customer complaint or a missing payment.
- **No owner and no documentation.** The people who built it have moved on, or no one is clearly responsible for keeping it working.

Microsoft's reliability guidance in the Azure Well-Architected Framework puts the underlying goal plainly: a reliable workload should be able to recover from failures and continue functioning. Its [reliability design principles](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles) stress designing for failure and keeping things simple. Written for cloud workloads, they apply equally well to a collection of business automations, because the core question is the same: what happens when a part stops working?

## Prefer fewer, shorter chains

Every extra link in a chain adds another place to fail and another thing to understand. A useful rule is to ask, for each automation, whether it could be shortened by removing a middle step. Does the form really need to go through a spreadsheet before reaching the invoicing tool? Could the two systems exchange data directly, or could one of them take over the job of the middle one?

Shorter chains are not always possible, but where you must have several steps, make each one do one clear thing and pass on a clearly defined output. Clear naming and structure make a chain far easier to maintain. And before building anything new, check that the process underneath is sound, since automating a broken process only makes the problem worse.

## Isolate the parts that change

Fragility often comes from reaching directly into another system's internal format. When the supplier renames a column, every automation that read that column breaks at once. A more robust approach is to put a single translation point between your automations and the outside system, so that when the outside changes, only one place needs fixing.

Microsoft's description of the [anti-corruption layer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) sets out this idea: a facade or adapter between subsystems that do not share the same semantics, so that external dependencies do not dictate the design of the rest. In small-business terms, it could be a single "intake" step that cleans and standardises incoming data before anything else touches it. The rest of your automations then read from the standard version. Our article on [designing integrations that survive supplier and business change](/insights/how-to-design-integrations-that-survive-supplier-and-business-change/) goes further into this approach.

## Stop failures from spreading

When one part of the stack is unavailable, a naive automation keeps trying, floods the failing system with requests, fills queues, and sometimes creates duplicate records once the system recovers. Microsoft's [circuit breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker) addresses this: it prevents an application from repeatedly trying an operation that is likely to fail, which gives the failing component time to recover. You may not be writing code, but you can apply the principle. Set a limit on retries, pause an automation after a number of consecutive failures, and tell a person when it pauses.

Also decide what each automation should do with the work in front of it when something fails. It should not discard it and should not guess. It should hold it somewhere visible. Our article on [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) sets out the options.

## Make failure loud

The most damaging property of a fragile stack is that it fails quietly. Plan the detection before you plan the build. For each automation, answer three questions: how will we know it ran, how will we know it failed, and who will be told? Our guides on [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) and [how to design alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/) cover both parts. The platform you use will have its own tools for this. Microsoft's guidance on [error handling in Power Automate](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling) shows one way to catch and respond to failed steps, and similar features exist elsewhere.

An alert is only useful if it reaches someone who can act. Send it to a shared mailbox or channel that more than one person monitors, not to the inbox of the person who built the automation and may be on leave.

## Remove the single points of failure

Look at how each automation is authenticated and who can change it. An automation that runs on a former employee's login will stop on the day that account is disabled. Use a dedicated service account or a documented connection owned by the business, store credentials in one managed place, and record when each one expires. At the same time, make sure at least two people understand how each automation works and can edit it. If only one person can fix it, that person is a risk to the business.

## Give every automation an owner and a short document

Write one page per automation: what it does, what triggers it, what it depends on, what a failure looks like and who to call. It need not be elaborate, and our article on [why automation documentation matters](/insights/why-automation-documentation-matters/) explains what to include. Assign a named owner who reviews the automation on a schedule. A regular maintenance routine, as described in [a maintenance plan for the automations you already run](/insights/a-maintenance-plan-for-the-automations-you-already-run/), catches expired logins and changed inputs before they cause damage.

## Know when to stop adding

Each new automation increases the surface that has to be maintained. Before adding one, ask whether its benefit justifies the ongoing cost of owning it. Retire automations that no longer serve a purpose, because an unused automation that still runs can create errors that nobody expects.

## Practical next actions

1. List every automation you run, with its trigger, what it depends on and who built it, and draw the chains between them on one page.
2. Mark every single point of failure: personal logins, expiring keys, and automations only one person understands.
3. Add an alert to each important automation that goes to a shared channel or mailbox when it fails or when it has not run on schedule.
4. Insert one standard intake step in front of the automation most exposed to outside changes, so that external formats are cleaned in one place.
5. Assign an owner to each automation and schedule a quarterly review in which expired credentials, unused automations and changed inputs are fixed or removed.
