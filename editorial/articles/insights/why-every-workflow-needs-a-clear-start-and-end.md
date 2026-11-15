---
hub: insights
record_id: INS-116
slug: why-every-workflow-needs-a-clear-start-and-end
title: Why Every Workflow Needs a Clear Start and End
description: If three people give three answers about when a process starts and finishes, it cannot be measured, owned or automated properly. Define the trigger and the outcome.
lead: If three people give three answers about when a process starts and finishes, it cannot be measured, owned or automated properly. Define the trigger and the outcome.
category: Workflow Design
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Workflow Design
sources:
  - About the Business Process Model and Notation Specification Version 2.0.2 | https://www.omg.org/spec/BPMN/2.0.2/About-BPMN
  - Triggers - Power Automate | https://learn.microsoft.com/en-us/power-automate/triggers-introduction
  - Measuring completion rate | https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate
  - Business process flows overview - Power Automate | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
related:
  - How to Design a Workflow Around Outcomes Instead of Departments | /insights/how-to-design-a-workflow-around-outcomes-instead-of-departments/
  - How to Route Work to the Right Person Automatically | /insights/how-to-route-work-to-the-right-person-automatically/
  - How Exceptions Should Be Designed Into a Workflow | /insights/how-exceptions-should-be-designed-into-a-workflow/
summary: If three people give three answers about when a process starts and finishes, it cannot be measured, owned or automated properly. Define the trigger and the outcome.
layout: plain
---
A recruitment agency in Rosebank wanted to know how long its placement process takes. The answer depended on who was asked. The consultants measured from the moment a client signed the job specification to the moment a candidate accepted an offer: about five weeks. Finance measured from first client contact to receipt of the placement fee: closer to eleven weeks. The managing director measured from the job specification to the candidate's first day: about nine weeks. All three were measuring "the placement process". None of them had agreed where it started or where it ended.

This is more than a reporting quirk. A workflow without a clear start and end cannot be measured, cannot be owned end to end, and cannot be reliably automated. Defining the boundaries is one of the cheapest and most useful design decisions you can make.

## Why boundaries matter

When the start of a workflow is vague, work begins informally before anyone records it. Requests arrive by WhatsApp, are discussed in corridors and only enter a system when someone remembers. The business loses sight of demand and of how long work waits before it is picked up.

When the end is vague, work never quite closes. Records stay open "just in case", follow-ups linger, and nobody can say whether the outcome was achieved. Reports count items as complete when the internal team finishes, even if the customer has not received what they needed. Our article on [why a quiet workflow is not proof it worked](/insights/why-a-quiet-workflow-is-not-proof-it-worked/) describes the consequences.

## Defining the start: the trigger

Every workflow should begin with a single, observable trigger: an event that can be pointed to, dated and recorded. The Object Management Group describes its [Business Process Model and Notation (BPMN)](https://www.omg.org/spec/BPMN/2.0.2/About-BPMN) as the de-facto standard for business process diagrams: a flowchart-like notation that business people can read and that is precise enough to be turned into software. Whatever notation you use, the first thing to draw on any process diagram is where it begins and where it finishes. Automation tools work the same way. Microsoft's documentation on [triggers in Power Automate](https://learn.microsoft.com/en-us/power-automate/triggers-introduction) describes a trigger simply as the event that starts a flow, whether that is an automated event such as an email arriving, a manual button press or a schedule.

For a business workflow, a good trigger has three properties:

- **It is observable.** "Client signs job specification" can be seen and dated. "Client becomes interested" cannot.
- **It creates a record.** The trigger should cause a record to be created in a system, with a date, so the workflow is visible from the first moment.
- **It has one entry point.** If requests can arrive by email, phone and chat, decide how each channel feeds the same starting record.

Our guide on [keeping internal requests visible](/insights/why-internal-requests-vanish-and-how-to-keep-them-visible/) covers ways to bring informal requests into a single entry point.

## Defining the end: the outcome

The end of a workflow should be defined by the outcome for the customer or the business, not by the last internal task. For the agency, "candidate accepts offer" is a milestone, but the client's need is met only when the candidate starts work. The business's need is met only when the fee is paid. That suggests one of two designs: either the placement workflow ends at the candidate's first day, with a separate billing workflow, or it ends at fee receipt and includes billing.

Either is valid. What matters is choosing deliberately and writing it down. A useful end definition includes:

- **The end state:** what must be true, such as "candidate has started and client has confirmed".
- **The evidence:** what record proves it, such as a start-date confirmation from the client.
- **The alternative endings:** every way the workflow can legitimately end without success, such as "client withdrew the role" or "no suitable candidate after the agreed period", each with a reason code.

The UK government's guidance on [measuring completion rate](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate) takes this approach for digital services: a transaction starts at a defined start page and completes when the user reaches a defined end page, with anything else counted as a failed or abandoned transaction. Defined boundaries make completion measurable.

## Watch for endings that nothing notices

Automation tools sometimes behave unexpectedly at the boundaries. Microsoft's guidance on [business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) notes that a workflow set to run when the final stage is exited does not trigger, because finishing the process is not a stage transition, and recommends using process-level triggers for completion or abandonment instead. The broader lesson applies to any system: test what actually happens when a case ends, including when it is abandoned, and make sure closing actions such as invoices, surveys or file archiving are tied to the end event itself.

## Boundaries between workflows

Once each workflow has a clear start and end, the handovers between workflows become clear too. The end of "sales" should be the trigger for "onboarding". The end of "delivery" should trigger "billing". When these connections are explicit, information can travel with the work instead of being re-requested. Our article on [what should trigger after a customer says yes](/insights/what-should-trigger-after-a-customer-says-yes/) looks at one of the most important of these handovers.

## A simple test

For any workflow, ask three people independently: when does this start, and when is it finished? If the answers differ, the workflow needs boundary definitions. Write the agreed trigger and end state at the top of the process document, configure the system to record both dates, and use the difference as the workflow's cycle time. From then on, conversations about speed will at least be about the same thing.

## Practical next actions

1. Pick your three most important workflows and ask three people independently when each one starts and when it ends.
2. For each workflow, agree a single observable trigger and make sure it creates a dated record in a system.
3. Define the successful end state, the evidence that proves it, and every legitimate unsuccessful ending with a reason code.
4. Test what your systems do when a case completes or is abandoned, and attach closing actions to those end events.
5. Connect each workflow's end to the next workflow's trigger, and report cycle time as the difference between the start and end dates.
