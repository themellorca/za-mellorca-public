---
hub: insights
record_id: INS-156
slug: why-automations-that-worked-in-the-demo-stop-working-in-production
title: Why automation projects fail after the demo
description: The demo shows the happy path on clean data. Production brings exceptions, messy records and outages. Why automations fail afterwards, and what to ask.
lead: The demo shows the happy path on clean data. Production brings exceptions, untidy records, outages and staff who were never involved. Why automations fail afterwards, and what to ask before you sign.
category: Automation
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Automation
sources:
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - Overview of the Automation Kit - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction
  - Develop your own training strategy for your implementations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/training-strategy
related:
  - Why automating a broken process makes the problem worse | /insights/why-automating-a-broken-process-makes-the-problem-worse/
  - What business automation should actually solve | /insights/what-business-automation-should-actually-solve/
  - How to know whether an automation actually ran | /insights/how-to-know-whether-an-automation-actually-ran/
summary: The demo shows the happy path on clean data. Production brings exceptions, untidy records, outages and staff who were never involved. Why automations fail afterwards, and what to ask before you sign.
layout: plain
---
The demo went perfectly. A customer order arrived, the automation created the invoice, updated the stock, sent the confirmation email and posted a message to the team channel, all in under a minute. Everyone in the room was impressed. Three months later, the same automation is switched off, the team is back to retyping orders, and nobody wants to talk about it.

This is a common story, and it is rarely about bad technology. A demo shows the automation on its best day, with clean data, a friendly scenario and a presenter who knows where not to click. Production is the other 364 days. This article describes why automation projects fail after the demo and what to do about it before the money is spent.

## The demo shows the happy path only

A demo follows the straight line through a process. The customer exists, the product code is correct, the address is complete, the payment arrives and the approver responds within minutes. Real work has a long tail of variations: the customer with two trading names, the item that is discontinued, the order amended after confirmation, the invoice query. Each exception is rare. Together they are a large share of the work.

Automations that cover only the standard path leave people to handle everything else by hand, and often make that harder, because the exception now arrives mid-way through a flow that has already done half the work. The pattern is described in [why manual work persists because automation covers the happy path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/). Before approving any project, ask for a list of the exceptions and what the automation does with each.

## Production data is not demo data

Demo data is typed in by the person presenting. Production data comes from years of different people, systems and habits. Duplicate customers, missing fields, inconsistent product names and free-text entries break rules that worked perfectly in the sample. An automation that expects a valid VAT number in a field will fail the first time the field contains a note that says "ask Sipho".

Test with a real extract, including the untidy parts, before go-live. Microsoft's guidance on automation emphasises the value of testing and structured handling of errors, and the same logic applies to the data an automation will meet. The connection between data quality and any automated process is discussed in poor data is an operations problem, not just a data problem.

## Nobody designed for failure

Every automation will eventually fail: a password expires, an external service is unavailable, a field is renamed after a software update, or the power drops during load-shedding while a job is running. The question is what happens next. Microsoft's guidance on [error handling](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling) in automated flows stresses designing explicit paths for errors rather than letting the flow stop silently, and Azure's architecture guidance describes the retry pattern, in which a failed operation is attempted again under defined limits, rather than abandoned or repeated endlessly.

Many projects are accepted with no failure design at all. The first time something goes wrong, nobody is told, and the damage accumulates unseen. The fix is not complicated: decide in advance who is alerted, how, and what they do about it. See [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) and how silent automation failures damage operations.

## No one owns it after the project team leaves

Projects have a start and an end. Automations have a life. The consultant or developer who built the flow moves on, the internal sponsor changes roles, and the automation continues running, until something changes around it. If nobody can say who is responsible for it, the first failure becomes a crisis of discovery, as described in [what happens after the automation goes live](/insights/what-happens-after-the-automation-goes-live/).

A named owner, a written description and a place for changes to be requested are minimum requirements, not extras. Microsoft's [automation kit](https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction) overview highlights inventory and monitoring of automations as a governance need; the same principle applies at any scale, even if the inventory is a simple shared table.

## The people were never part of it

Staff who were not consulted often find reasons not to trust the new process. They keep their private spreadsheet in case the automation gets it wrong, re-check every output, or bypass it on busy days. The automation then runs alongside the old manual process instead of replacing it, and the promised saving never appears.

Training also matters, not only on how to use the tool but on what to do when it does not work. Microsoft's implementation guidance on [training strategy](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/training-strategy) describes preparing people with the knowledge they need for the change, which is as relevant for a small team as for a large programme. Automation designed so that staff can see and understand what it does tends to be adopted, a principle explored in [how to design automations that people can understand](/insights/how-to-design-automations-that-people-can-understand/).

## The measure of success was the demo

A project that is judged complete when the flow runs is likely to be declared a success. A business that judges success by outcomes asks different questions: did the time to process an order fall, did errors fall, did the team stop doing the old step, and did anyone reallocate the time saved? Counting how many times an automation ran says little about whether it helped.

Without a baseline measured beforehand, nobody can prove the benefit, and unproven benefits do not survive the next budget round. Define the measures first, using the approach in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).

## Questions to ask before the contract is signed

1. Can you show us this working on a sample of our own messy data, including the exceptions?
2. What happens, step by step, when each connected system is unavailable for an hour?
3. Who is alerted when it fails, and how will we know it has not silently stopped?
4. What is the maintenance cost after go-live, in Rand per month, and who does the work?
5. Can we see and edit the logic ourselves, or is it locked inside the supplier's environment?
6. How do we retire the old manual step, and on what date?
7. What is the measure of success, and what is today's baseline?

These questions apply equally to a vendor, a consultant or an internal developer. A supplier who welcomes them is probably confident in their work. One who deflects them is giving useful information. The same discipline applies when buying software generally, as set out in [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/).

## An illustrative example

The following is a hypothetical case. A Bloemfontein agricultural supplier introduces an automation that creates delivery notes from confirmed orders and emails them to customers. In the demo, it works flawlessly. In production, 15 percent of orders fail because customer email fields contain two addresses, a phone number or nothing at all. The failure produces no alert, so customers who never receive a note phone to ask where their goods are. Staff go back to creating notes manually and also check the automation's output, doubling the work.

The recovery is not a new tool. The company adds an alert that lists failed orders each morning, assigns the dispatch coordinator as the owner, cleans the email data over two weeks, and adds a rule that routes orders without a valid address to a manual queue. It then removes the manual check entirely on a stated date. Failure rates fall below two percent and the automation finally delivers what the demo promised, but only because the unglamorous parts were built.

## What a successful project looks like

The projects that survive beyond the demo tend to share features: they begin with a clearly mapped process, handle exceptions explicitly, are tested on real data, have alerting and an owner, involve the people who do the work, and measure results against a baseline. None of these is exciting, which is why they are so often skipped. Yet they are the difference between an impressive afternoon and a lasting improvement.
