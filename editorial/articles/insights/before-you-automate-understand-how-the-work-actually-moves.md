---
hub: insights
record_id: INS-101
slug: before-you-automate-understand-how-the-work-actually-moves
title: Before you automate, understand how the work actually moves.
description: Why workflow mapping and process intelligence should come before automation—and how to find the real process, bottlenecks, rework and exceptions.
lead: Automation decisions are often based on how people think a process works. Better decisions begin with how the work actually behaves: the handoffs, rework, waiting, exceptions and system events that make up the real operation.
category: Digital Operations
published_date: 2026-08-31
updated_date: 2026-08-31
eyebrow: Article
page_title: Before You Automate, Understand How the Work Actually Moves | Mellorca
tags:
  - Digital Operations
  - Process Design
  - Automation
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
side_text: Related capability: [Digital Operations](/services/digital-operations/).
sources:
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Prepare processes and data - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data
  - Overview of task mining - Power Automate | Microsoft Learn | https://learn.microsoft.com/en-us/power-automate/task-mining-overview
related:
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - How to find automation opportunities from operational evidence | /insights/how-to-find-automation-opportunities-from-operational-evidence/
---
Ask five people how an important business process works and you may get five different answers.

The manager describes the intended process. The team member describes the practical workaround. The CRM shows one sequence. The spreadsheet shows another. Email contains exceptions that never made it into either system.

This gap matters because many automation projects start with the intended process rather than the real one.

> If you automate the process people describe instead of the process the business actually runs, you can make the mismatch faster.

## The official process is rarely the whole process

Most operating processes contain invisible work. Someone checks a record before moving it forward. A team member copies information into a second system because an integration is missing. An approval waits because the approver is unclear. A customer exception is handled through messaging rather than the workflow. A report is manually corrected before management sees it.

These steps often disappear from process documentation because they were never deliberately designed. They emerged as adaptations.

That is precisely why they need to be understood before automation.

### A worked example

A Pretoria-based property management company wants to automate tenant maintenance requests. The documented process is simple: tenant logs a request, coordinator assigns a contractor, contractor completes the job, invoice is approved. Walking through twenty real requests reveals much more. Coordinators phone tenants to confirm access times because the form does not ask. Jobs over a certain value wait for the landlord's approval, which arrives by WhatsApp. Contractors send completion photos to a personal mobile. About one request in four is a repeat of an earlier job that was not properly closed.

Automating the documented four steps would have produced a tidy workflow that the team bypassed within a week. The real automation opportunities were capturing access times at the start, routing landlord approvals properly and linking repeat jobs to the original.

## Map the work before choosing the automation

A useful workflow map does not need to become a consulting diagram with hundreds of boxes. It needs to expose the operating facts that affect execution.

At minimum, identify:

- what triggers the work;
- which person or system owns each stage;
- what information is required;
- which systems are touched;
- where decisions occur;
- what conditions cause exceptions;
- where work waits;
- where information is re-entered;
- what indicates completion; and
- what happens when the happy path fails.

That map turns "automate this process" into a more useful set of questions.

## Look for four kinds of friction

### 1. Waiting

Work is ready to move but cannot, because it is waiting for a person, an approval, missing information or another system.

### 2. Rework

A task is repeated because information was incomplete, entered incorrectly or changed downstream.

### 3. Handoffs

Responsibility moves between people or teams, and context is lost, delayed or reconstructed.

### 4. Exceptions

The workflow handles the normal case, but anything unusual leaves the system and becomes a manual recovery exercise. When that happens often enough, the exception path becomes the real process, as described in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).

These are often better automation targets than the obvious task at the centre of the process.

## Process intelligence adds evidence

Interviews and workshops remain useful, but businesses increasingly have another source of evidence: the event data already generated by the systems doing the work.

Process mining uses records from systems of record to reconstruct how processes actually run. Microsoft's [process mining overview](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes it as a way to understand real processes, visualise them from event data, compare variants, find the root causes of inefficiency, monitor KPIs and identify opportunities for improvement and automation. Its [task mining overview](https://learn.microsoft.com/en-us/power-automate/task-mining-overview) describes a companion capability that captures the detailed steps people take on their desktops, to show how tasks are really performed, where common mistakes occur and which tasks can be automated.

The data requirement is modest in principle. Microsoft's guidance on [preparing process data](https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data) lists three essentials: a case ID that identifies each instance of the process, such as an order or request number; an activity name for each step; and a timestamp for when each step happened. It also notes that many application tables hold only the current state of a record, not the history of events, and that not every event of interest is logged.

The important idea is larger than one product: operational decisions can increasingly be based on observed execution rather than only on memory and opinion. The difference between the two sources of evidence is explored in [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/).

## Do not confuse process mining with automatic truth

System data is powerful, but it is not complete by default. If important work happens outside the recorded systems, the event log will not magically reveal it. If timestamps are unreliable or users bypass the intended fields, analysis can still mislead.

A strong diagnosis combines system evidence with operating context. Data can show that a case spent three days in a stage. A conversation may reveal that the team was waiting for information that the system never records.

The goal is to understand the operating reality, not to defend a particular methodology.

## What should be automated after the process is understood?

Once the process is visible, automation opportunities become easier to classify.

### Deterministic automation

Use rules for predictable actions: moving data, assigning work, triggering notifications, creating records or enforcing known conditions.

### AI-assisted work

Use AI where language, classification, summarisation or probabilistic judgement genuinely adds value.

### Human decisions

Keep people where context, accountability, negotiation or exceptional judgement matters.

### Process removal

Some steps should not be automated at all. They should be deleted because they exist only to compensate for a poor system or an outdated control.

This last category is often overlooked. Removing a useless step is usually more robust than automating it.

## A practical diagnostic before any automation project

Before approving an automation, ask:

1. Can we describe the start and end of the workflow clearly?
2. Do we know who owns each stage?
3. Do we know where the required data comes from?
4. Do we know the common exception paths?
5. Can we identify the largest waiting and rework points?
6. Are we automating a necessary step or preserving an unnecessary one?
7. What should happen if the automation fails?

If several of those answers are unclear, implementation is premature. The last question deserves particular weight, because [every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

### Trade-offs

Mapping takes time, and there is a risk of over-analysing a simple process. A proportionate rule helps: a low-volume, low-risk task can be mapped in an hour with the people who do it. A process that touches customers, money or compliance deserves a sample of real cases and, where the data exists, an event-log view.

## What better looks like

A well-designed workflow is understandable enough that people can explain it, systems can support it, automation can run the repeatable portions and management can see when it is not behaving as expected.

That does not mean eliminating every exception. It means exceptions are known, owned and handled deliberately rather than becoming hidden side processes.

The payoff is wider than automation. Once the real workflow is visible, the business can make better decisions about software, roles, service levels, reporting and operational improvement.

## When to act

If automation discussions repeatedly begin with a tool demonstration, staff disagree on how the process works, important work happens in spreadsheets or chat, or exceptions routinely escape the formal workflow, start with diagnosis. For current-state diagnosis, a [digital systems audit](/services/digital-systems-audit/) is the usual starting point.

### What to do first

1. Choose one process that people want to automate.
2. Pull twenty recent real cases and walk each from trigger to completion with the people involved.
3. Mark every wait, re-entry, handoff and exception.
4. Delete or simplify at least one step.
5. Only then write the automation requirement, including what happens when it fails.

The fastest route to better automation is sometimes to delay the automation long enough to understand what it should actually do.
