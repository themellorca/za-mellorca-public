---
hub: insights
record_id: INS-303
slug: how-to-design-a-handoff-that-cannot-depend-on-memory
title: How to design a handoff that cannot depend on memory
description: How to engineer cross-team handoffs with explicit triggers, required context, ownership, routing, acceptance and escalation instead of memory and chasing.
lead: A reliable handoff should move work, context and accountability together. If one person has to remember who to tell, what to send and when to chase, the process is not controlled—it is being held together by attention.
category: Digital Operations
published_date: 2026-09-03
updated_date: 2026-10-02
eyebrow: Article
page_title: How to Design a Handoff That Cannot Depend on Memory | Mellorca
tags:
  - Handoffs
  - Workflow Design
  - Ownership
cta_label: Start a conversation
cta_href: /contact/
side_title: Topics
sources:
  - Handoffs - PSNet | https://psnet.ahrq.gov/primer/handoffs-and-signouts
  - Overview of unified routing | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing
  - I-PASS: Handoff Tool - Agency for Healthcare Research and Quality | https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/ipass.html
related:
  - How to design workflows that can survive staff changes | /insights/how-to-design-workflows-that-can-survive-staff-changes/
  - Why shared inboxes become operational bottlenecks | /insights/why-shared-inboxes-become-operational-bottlenecks/
  - Why your team keeps chasing information | /insights/why-your-team-keeps-chasing-information/
---
Many operational delays happen between steps rather than inside them. Sales finishes its work but delivery does not know the customer is ready. Procurement approves a request but finance does not receive the information needed to pay. A service team resolves one issue while the next team waits for context that never arrives.

These failures are often described as communication problems. Sometimes they are. More often, the handoff itself has never been designed as a controlled part of the workflow.

> A handoff is complete only when the next owner has the work, the context and a clear obligation to act.
>
> A handoff is complete only when the next owner has the work, the context and a clear obligation to act.

## The hidden operating cost of memory-based handoffs

Memory-based handoffs create chasing, status meetings, duplicate messages and uncertainty about who owns the next move. The business becomes dependent on conscientious people noticing that something should happen.

This is one reason customer onboarding often breaks as volume increases. As Mellorca explains in [why customer onboarding breaks as the business grows](/insights/why-customer-onboarding-breaks-as-the-business-grows/), coordination mechanisms that worked informally at low volume become fragile once more customers and teams are involved.

Other fields learned this lesson long ago. In healthcare, the US Agency for Healthcare Research and Quality's patient safety primer on handoffs notes that communication failures between providers have been found to be a leading cause of preventable error, and that handoffs often take place in settings full of interruption and distraction. Hospitals responded with structured formats, such as I-PASS and SBAR, that standardise what must be said at every transfer. Business handoffs are rarely life-or-death, but the mechanism is the same: when the transfer is left to individual habit, information drops out under pressure. AHRQ's [I-PASS guidance](https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/ipass.html) adds that organisations with a standard handoff approach are more likely to avoid omissions that can cause harm.

### A worked example

A Cape Town solar installation company sells systems to homes and small businesses. Once a quote is accepted, the salesperson is supposed to tell the installation coordinator. In practice, the salesperson sends a WhatsApp message when they remember, sometimes with the site photos and roof notes, sometimes without. The coordinator schedules the install, the crew arrives, and finds the inverter location was never agreed with the customer.

Meanwhile, deposits sit in the bank account for days before anyone realises the job is ready to schedule. Nobody is careless. The handoff simply has no trigger, no defined content and no owner. The revenue effect of this kind of delay is discussed in [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/).

## Define the event that creates the handoff

Every reliable handoff begins with a trigger. "Tell operations when the deal is ready" is weak. "When the contract is signed and the initial payment requirement is satisfied, create the delivery work item" is much stronger.

The trigger should be observable in a system where possible. It might be a status change, approval, completed form, payment event, signed document or other business state. A clear trigger allows the workflow to create the next step consistently instead of waiting for someone to remember.

In the solar example, the trigger becomes "deposit received and site survey marked complete". Both are recorded facts, not judgement calls, so the next step can be created reliably.

## Define the minimum context that must travel with the work

Moving a task without its context simply transfers the confusion. Identify what the next team must know to act without reopening the entire history.

That could include customer identity, approved scope, deadline, priority, requested outcome, attachments, exceptions, commercial commitments, previous decisions and the person who can clarify unresolved issues.

Do not transfer every available field. Transfer the information required for the receiving team to make the next decision or perform the next action.

The healthcare formats are a useful model here. SBAR, for example, organises a handoff into situation, background, assessment and recommendation. A business equivalent might be: what has been agreed, what the receiving team must do, what is unusual about this case, and who to ask. Turning that into required fields on a form is far more reliable than hoping each sender remembers.

## Assign one receiving owner

A handoff to "the team" is often a handoff to nobody. The workflow needs a receiving owner, queue or role with a defined responsibility to accept and progress the work.

Modern workflow platforms commonly use assignment rules, queues and skills-based routing to match work with a responsible resource. Microsoft's description of [unified routing](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing) in Dynamics 365, for instance, separates classification, where rules add information to a work item, from assignment, where items are prioritised and matched to people based on skills, availability and workload. The product is less important than the principle: the process needs a deterministic destination rather than a message broadcast to several people.

## Add an acceptance state

Sending is not the same as receiving. A robust handoff has an acceptance state so the originating process can distinguish between "sent", "received" and "being worked".

This can be as simple as a task moving from New to Accepted, or as formal as a service queue acknowledging responsibility. Without acceptance, the upstream team may believe the work has moved while the downstream team has never actually taken ownership.

The I-PASS format includes a final step in which the receiver summarises what they have understood. In business terms, acceptance should mean the receiving owner has checked that the context is sufficient, not merely clicked a button.

## Design the exception path

Handoffs fail when the incoming work is incomplete, misrouted, urgent, duplicated or outside the receiving team's scope. A reliable process defines what the recipient should do in those cases.

The worst design is silent rejection. If the work cannot be accepted, return it with a reason, route it to an exception queue or escalate it. The original owner should be able to see that the handoff did not complete normally.

## Make elapsed handoff time visible

If the business cannot see how long work sits between owners, it cannot distinguish slow execution from slow coordination. Capture the time from the handoff trigger to acceptance and from acceptance to the next meaningful action.

This is more useful than relying on meetings to discover stuck work after the fact. It also complements the reasoning in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/): queues need explicit ownership and escalation, not just more reminders. When managers find themselves phoning people for status, that is the symptom described in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

## How to diagnose a weak handoff
- Work regularly arrives with a follow-up question attached, such as "which option did they choose?"
- Status meetings exist mainly to find out where things are.
- The receiving team learns about new work from the customer.
- Handoffs happen in chat or personal email rather than in a system of record.
- When a key person is on leave, work stops at their boundary.


Pick one boundary that shows these signs, take ten recent cases and record when the trigger occurred, when the next team knew, when they started and what they had to ask for. The gaps usually speak for themselves.

## Automate the transfer, not the ambiguity

Once the handoff rule is clear, automation can create the next work item, copy the required context, assign the receiving owner, notify only the people who need to know and start the appropriate service timer.

If the rule is not clear, automation merely accelerates misrouting. Workflow design comes first.

### Trade-offs

Formal handoffs add a small amount of work for the sender, and required fields can be gamed with placeholder text. Keep the mandatory context short, explain why each item matters, and review rejected handoffs so the specification improves. In very small teams a shared board may be enough; the principles still apply, just with lighter tooling.

## A practical handoff specification
- What event starts the handoff?
- What information must accompany it?
- Who or what queue receives it?
- What proves that it has been accepted?
- What happens if the information is incomplete?
- What happens if nobody accepts it within the expected time?
- How can management see stuck or rejected handoffs?


## What to do first

Choose the handoff that causes the most chasing, often sales to delivery. Write the seven answers above on one page, agree them with both teams, and run it manually for a month with a simple log of trigger, acceptance and start times. Only then automate it.

## What better looks like

A mature handoff does not rely on a good employee remembering to send a message. The business state creates the transfer, the next owner receives the context required to act, acceptance is visible, exceptions are routed deliberately and delays can be measured.

That is the difference between communication as a courtesy and handoff design as an operating control. The wider case is made in [broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/).
