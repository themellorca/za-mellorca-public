---
hub: insights
record_id: INS-310
slug: how-to-handle-work-that-does-not-fit-the-standard-process-without-breaking-it
title: How to Handle Work That Does Not Fit the Standard Process
description: Every process meets cases it was not designed for. Handling them well takes a defined route, not heroics or a growing pile of workarounds.
lead: Every process meets cases it was not designed for. Handling them well takes a defined route, not heroics or a growing pile of workarounds.
category: Process Design
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Process Design
sources:
  - Saga Design Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/saga
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
  - Compensating Transaction Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction
related:
  - How to Route New Customers to the Right Team Automatically | /insights/how-to-route-new-customers-to-the-right-team-automatically/
  - Why Processes Break Between Departments | /insights/why-processes-break-between-departments-and-how-to-close-the-gaps/
  - How to Find Steps That Exist Only Because the System Is Bad | /insights/how-to-find-steps-that-exist-only-because-the-system-is-bad/
summary: Every process meets cases it was not designed for. Handling them well takes a defined route, not heroics or a growing pile of workarounds.
layout: plain
---
A Port Elizabeth manufacturer has a clean order process: quote, order confirmation, production, delivery, invoice. Then a long-standing customer asks for a part to be made to a slightly different specification, delivered in two halves, and invoiced to a different entity. The system has no way to record any of this. The sales administrator handles it by email and a private spreadsheet, the production planner is told verbally, and finance finds out when the customer queries the invoice.

No process covers every case. What separates a steady operation from a chaotic one is not the absence of exceptions, but whether there is a deliberate way to handle them. This article describes how to design that way.

## Accept that exceptions are part of the process

When a standard process is designed, it is usually modelled on the typical case. That is reasonable, but it leaves a gap: the process describes what to do when everything goes right, and says nothing about the rest. People then improvise, and improvisation becomes habit. Our article on [diagnosing a business that runs on exceptions](/insights/how-to-diagnose-a-business-that-runs-on-exceptions/) describes what happens when the exceptions become the norm and the standard process is the exception.

The first step is to stop treating non-standard work as a failure of discipline. It is information about the real range of work your customers bring. The question is not how to eliminate it, but how to route it so that it is visible, owned and learnt from.

## Define what counts as standard

You cannot recognise an exception without a clear boundary. For each core process, write down the conditions under which the standard route applies: product types, order sizes, payment terms, delivery locations, approval limits. Anything outside those conditions is a non-standard case and follows a different route. The boundary should be written in terms a frontline person can check in a minute, not in judgement-heavy language like "unusual" or "complex".

Then classify the deviations you meet. Most fall into a few families: a different specification, a different commercial term, a different timing, a different party, or a one-off request for something you do not normally offer. Having names for these families lets you count them, which is the first step to deciding what to do about each.

## Give non-standard work its own route

A defined exception route has four elements.

1. **A trigger.** A clear rule for when a case leaves the standard route, ideally flagged in the system so the person does not have to remember.
2. **An owner.** One named person or role who decides how the case will be handled, rather than a thread of people each assuming another is in charge.
3. **A decision record.** A short note of what was agreed, why, and who approved it, kept on the customer or order record where everyone can see it.
4. **A path back.** A defined point at which the case rejoins the standard process, such as invoicing or delivery, so the exception does not leak into later steps.

Software designers have long dealt with this problem when a multi-step process fails halfway. Microsoft's description of the [saga pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) covers sequences of steps where each step has a compensating action to undo its effect if a later step fails. You do not need the technical detail to take the idea: for each stage of a business process, ask what would you do to reverse or adjust it if something later turned out differently, and who is allowed to do that.

## Decide how much freedom frontline staff have

Exceptions often stall because nobody is sure who may approve what. Set explicit limits. A branch manager might be allowed to agree an extended payment term up to thirty days, a discount up to a set percentage, or a delivery date change within a week, without escalation. Anything beyond that goes to a defined approver with a target response time. This avoids two bad outcomes: the front line saying yes to everything, and every small deviation climbing to the owner's desk.

Write the limits down, share them with the team, and review them quarterly against what actually happened. If a particular limit is being exceeded constantly, the limit probably does not match reality.

## Make exceptions visible and countable

An exception that lives in an inbox cannot be managed. Record every non-standard case in one place, with the family it belongs to, the customer, the owner, the date it started and the date it was resolved. A shared tracker or a status field in your main system is enough. Within a quarter you will have the evidence for good decisions.

Visible exceptions also expose queues. Where cases that need human review pile up faster than they are cleared, work stalls, a pattern explained in [why human exception queues grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/). Tracking age and volume tells you early when the route is overloaded, and which family of case is responsible.

## Decide which exceptions should become standard

The most valuable use of the exception log is to find recurring cases. If one family of deviation appears every week, it is no longer an exception, it is a missing variant of the standard process. For each family, choose one of three outcomes:

- **Absorb it.** Add it as a recognised variant, with its own steps, fields and approvals.
- **Price it.** If handling the case costs real effort, charge for it or limit it, so that the extra work is a decision rather than an unrecognised cost.
- **Decline it.** If the case does not suit your business, say no clearly, and give the customer a reason.

This is also where automation planning comes in. A process that works only for the happy path leaves people to handle everything else by hand, a pattern described in [why manual work persists because automation covers the happy path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/). If you plan for non-standard cases from the start, as set out in [building automation that expects exceptions from the start](/insights/how-to-build-automation-that-expects-exceptions-from-the-start/), the automated route can hand cases to a person with the context attached rather than failing silently. Microsoft's documentation on [error handling in automated flows](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling) shows the principle in practice: specify what should happen when an action fails or is skipped, so there is an alternative path that notifies someone or records the details.

## Keep the people dimension in view

Handling exceptions often depends on one experienced person who knows how to get things done. That is valuable and risky. The reality of such workarounds is captured in [when the exception process is the only way to get things done](/moments/when-the-exception-process-is-the-only-way-to-get-things-done/). Capture what that person knows in the decision record and the family definitions, so the knowledge survives leave, resignation and growth.

## Practical next actions

1. Write the conditions under which your main process counts as standard, in terms a frontline person can check in a minute.
2. Start an exception log with the case family, customer, owner, start date and resolution date, and record every deviation for one month.
3. Set written approval limits for the common deviations, such as payment terms, discounts and delivery changes, and name who approves beyond them.
4. Review the log, find the families that recur weekly, and decide for each whether to absorb, price or decline it.
5. Add a decision note to the customer or order record every time a case leaves the standard route, so the reason is visible to the next person.
