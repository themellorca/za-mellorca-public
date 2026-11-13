---
hub: insights
record_id: INS-154
slug: what-makes-an-automation-worth-building
title: What makes an automation worth building
description: Almost any repetitive task can be automated, but not every one should be. Seven tests separate those that pay off from those that become burdens.
lead: Almost any repetitive task can be automated, but not every one should be. Seven tests that separate automations that pay for themselves from those that become maintenance burdens.
category: Business Automation
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Business Automation
sources:
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
  - Overview of the Automation Kit - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction
  - Five Focusing Steps, a Process of On-Going Improvement | https://www.tocinstitute.org/five-focusing-steps.html
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
related:
  - What should you monitor in an automated business process? | /insights/what-should-you-monitor-in-an-automated-business-process/
  - Who watches the automations? | /insights/who-watches-the-automations/
  - How silent automation failures damage operations | /insights/how-silent-automation-failures-damage-operations/
  - Which manual tasks should stay manual? | /insights/which-manual-tasks-are-better-left-manual-a-sorting-test/
summary: Almost any repetitive task can be automated, but not every one should be. Seven tests that separate automations that pay for themselves from those that become maintenance burdens.
layout: plain
---
Almost any repetitive task can be automated. That does not make every one of them worth automating. Businesses that treat automation as inherently good end up with a collection of small scripts, zaps and flows that cost more to maintain than the work they replaced, or that automate a process nobody should have been doing in the first place.

The better question is not "can we automate this?" but "will automating this leave the business better off after we count the cost of building, running and maintaining it?" This article sets out the tests that separate worthwhile automations from the rest.

> An automation is worth building when it removes work that should exist, reliably, at a cost lower than the work it replaces, with someone accountable for it afterwards.
>

## Test 1: Is the work worth doing at all?

Automating a step that should have been eliminated preserves it permanently. Before building anything, ask whether the task still serves a purpose, and whether the problem it solves could be removed at the source. A weekly report nobody reads does not become useful by being generated automatically. The warning in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/) applies directly: speed does not repair a faulty design.

## Test 2: Is the process stable and understood?

Automation encodes a process as it is today. If the steps change every month, the automation will need rebuilding every month. If different people perform the task differently, you must first agree what the correct way is. Lean practice emphasises standardising work before improving it, and the idea carries across: a process that cannot be described clearly cannot be automated reliably. The sequence in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/) is the right starting point.

## Test 3: Is the volume or value high enough?

An automation has a fixed cost to build and an ongoing cost to run. The saving comes from repetition. A task done 200 times a month for five minutes is a very different prospect from one done four times a month. As a rough guide, estimate the annual hours saved, multiply by a loaded hourly cost in Rand, and compare it with the build cost plus a year of maintenance. The full method is in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).

Volume is not the only route to value. A task done rarely but with serious consequences when wrong, such as a month-end reconciliation or a compliance submission, can justify automation through error reduction rather than time saved. The comparison should then include the cost of mistakes.

## Test 4: Are the rules clear enough?

Good candidates have inputs that arrive in a predictable form and decisions that follow explicit rules. "If the order exceeds R50,000, route it to the finance director" is automatable. "Use judgment about whether the customer seems to be a risk" is not, at least not without keeping a person in the loop. Hybrid designs, where software prepares the work and a person approves it, often capture most of the benefit with less risk. See [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/).

## Test 5: Can you tell if it is working?

Automations fail quietly. A password expires, a field changes, an integration returns an error that nobody reads. If you cannot say how you would know that it stopped, it is not ready to be built. Every worthwhile automation needs a way of confirming that it ran, an alert when it did not, and a defined fallback. These are explored in [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) and [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

## Test 6: Will somebody own it?

Every automation needs a named person responsible for it after the builder moves on. Without an owner, it becomes one more piece of undocumented infrastructure, and the business becomes dependent on something no one understands. The costs of this are described in who watches the automations. If no one in the business is willing to own the result, that is itself an answer.

## Test 7: What does it depend on?

An automation that relies on three systems, two spreadsheets and a supplier's website is a fragile chain. Each dependency is a possible point of failure and each change by a vendor is a risk. Where possible, prefer automations built on stable, supported connections within a small number of systems. The trade-offs are covered in how to connect systems without creating a fragile web of dependencies. In South Africa, add a local check: does it need to run during load-shedding hours on an on-site server, and what happens if it does not?

## A simple scoring approach

Use the seven tests as a short scorecard. Rate each candidate automation from one to three on each test, where three means a clear yes. Anything scoring low on the first two, whether the work should exist and whether it is stable, should be set aside regardless of the total. Among the rest, rank by annual benefit relative to total cost. The Theory of Constraints Institute's [focusing steps](https://www.tocinstitute.org/five-focusing-steps.html) offer a useful final filter: before spending on any improvement, ask whether it relieves the point that actually limits the business. Automating a task that is not near a constraint may save time without changing results.

| Candidate | Worth doing? | Stable? | Volume or value | Clear rules? | Monitorable? | Owner? |
| --- | --- | --- | --- | --- | --- | --- |
| Copying web orders into accounting | Yes | Yes | High | Yes | Yes | Finance lead |
| Weekly sales summary for directors | Unclear | Yes | Low | Yes | Yes | None |
| Deciding which clients get credit | Yes | No | Medium | No | Partly | Finance lead |

In this example, the first is a strong candidate, the second needs a conversation about whether it should exist, and the third is better left to a person supported by clearer policy.

## An illustrative example

The following is a hypothetical case. A Gqeberha e-commerce retailer with fifteen staff lists nine automation ideas. Running the tests removes four immediately: two automate reports no one uses, one automates a returns process that was about to change, and one depends on scraping a supplier's website. Of the remaining five, the retailer builds two first: pushing confirmed web orders into the stock system, and sending dispatch notifications from the courier's tracking updates. Both are high volume, rule-based and built on supported connections. Each has an owner, a daily count check and an alert if the number of orders transferred does not match.

The other three wait until process changes settle. The retailer ends the quarter with two reliable automations instead of nine half-working ones, and a clear record of why the other seven were not built.

## What this means in practice

Choosing what to automate is a business decision, not a technical one. The strongest candidates are the boring ones: frequent, stable, rule-based tasks inside well-understood processes. The weakest are the exciting ones: complex judgment calls, shifting processes and connections to systems you do not control. If you would like to see where to begin, how to choose the first workflow to automate covers the first selection in more detail. The aim is not the largest number of automations. It is the smallest number that clearly pay for themselves, and keep doing so.
