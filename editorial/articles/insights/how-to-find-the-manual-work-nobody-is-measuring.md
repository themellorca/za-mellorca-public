---
hub: insights
record_id: INS-012
slug: how-to-find-the-manual-work-nobody-is-measuring
title: How to find the manual work nobody is measuring.
description: A practical way to identify hidden manual work, repeated handoffs and unmeasured operational effort before deciding what to simplify or automate.
lead: The most expensive manual work is often not a formally assigned task. It is the repeated chasing, copying, checking and reconstructing that has become normal enough to disappear from management view.
category: Digital Operations
published_date: 2026-09-02
updated_date: 2026-09-02
eyebrow: Article
page_title: How to Find the Manual Work Nobody Is Measuring | Mellorca
tags:
  - Manual Work
  - Operational Friction
  - Process Evidence
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - Overview of task mining - Power Automate | https://learn.microsoft.com/en-us/power-automate/task-mining-overview
  - Analyze processes using object-centric process mining | https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/analyze-processes-using-object-centric-process-mining
  - Power Automate - Process mining | https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/process-mining
related:
  - How to find automation opportunities from operational evidence | /insights/how-to-find-automation-opportunities-from-operational-evidence/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
---
Most organisations know about obvious administrative work. Fewer can see the small fragments of manual effort distributed across dozens of roles: downloading a report, renaming a file, copying a value into another system, checking whether somebody replied, rebuilding context from email, updating a status field because another platform cannot, or reconciling two lists before a meeting.

Each activity can look trivial. The commercial problem appears when the same friction repeats across people, customers, orders, weeks and systems. Because the work is embedded inside larger jobs, it is rarely captured as a project, queue or cost centre. It becomes invisible operating overhead.

> Hidden manual work is usually not one big task. It is a pattern of small compensating behaviours around weak systems and unclear workflows.

## Why this work stays invisible

Hidden manual work survives because nothing in a normal management system is designed to see it. Timesheets record projects and clients, not the twenty minutes spent reconciling two exports. Job descriptions describe responsibilities, not workarounds. System reports show what happened inside each application, not the copying that connects them. And the people doing the work have usually absorbed it so thoroughly that it no longer feels like a separate task.

There is also an incentive problem. Capable staff are often the ones who quietly compensate for weak systems, and their reliability hides the cost. The work only becomes visible when they are absent, leave or are overloaded, which is why hidden manual work is closely linked to key-person dependency.

## Do not start with a survey asking what should be automated

People are poor at estimating fragmented effort, especially when work has become routine. Asking teams what they want automated tends to surface the most annoying task, not necessarily the most expensive or structurally important one.

Start instead with evidence. Follow a transaction, request, customer, invoice or case from start to finish. Record every system touched, every handoff, every re-entry of information, every waiting point and every manual check required to keep the work moving.

## Look for five signatures of hidden manual work

- **Repeated transfer:** information is copied between email, spreadsheets, CRM, finance, ticketing or shared drives.
- **Status reconstruction:** somebody has to ask several people or inspect several systems to answer a basic progress question.
- **Human reminders:** work advances because one person remembers to chase, follow up or escalate.
- **Manual reconciliation:** two reports or lists must be compared before anyone trusts the result.
- **Exception absorption:** a person repeatedly fixes predictable cases that the normal workflow does not handle well.

These signals matter because they show where labour is being used to compensate for missing integration, unclear ownership, poor data design or incomplete workflow logic. Each signature points to a different underlying cause, which is why it helps to name them separately.

| Signature | What it usually indicates |
| --- | --- |
| Repeated transfer | Missing or unreliable integration |
| Status reconstruction | No single system of record for progress |
| Human reminders | Workflow has no built-in triggers or deadlines |
| Manual reconciliation | Data definitions or sources disagree |
| Exception absorption | Workflow design does not cover predictable cases |

### An illustrative example

*This is a hypothetical scenario, not a client case.* A sales operations coordinator spends part of every Monday exporting deals from the CRM, matching them against a finance spreadsheet and emailing account managers about mismatches. Nobody has listed this as a process. When the transaction is traced end to end, it turns out to involve four people, two systems and a weekly delay before invoices can be raised. The fix is not an automation that does the reconciliation faster. It is agreeing which system owns the contract value and connecting the two properly.

## Measure frequency before debating technology

For each recurring manual step, estimate frequency, average handling time, number of people involved, waiting time created, error or rework risk and downstream dependency. A three-minute task performed a few times a month may not deserve attention. The same task performed hundreds of times across a team is different.

Do not convert every minute directly into cash. Time saved only becomes economic value if it removes overtime, avoids future headcount, reduces delay, increases throughput, improves control or lets people spend more time on measurable higher-value work. The method for turning these measurements into an investment decision is set out in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).

## Use process evidence where it exists

System logs can reveal work that workshops miss. Microsoft continues to expand [Power Automate Process Mining](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/process-mining), including rework detection, root-cause analysis, process comparison and custom metrics, along with [object-centric process mining](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/analyze-processes-using-object-centric-process-mining) for processes that do not fit a simple one-case-one-sequence model, such as an order whose items ship in several deliveries.

Desktop activity is a separate source. Microsoft's [task mining overview](https://learn.microsoft.com/en-us/power-automate/task-mining-overview) describes capturing the detailed steps people perform on their desktops to see which activities take longest, how many variations of a process exist, which applications teams spend most time in, and which tasks could be automated. That is precisely the layer where hidden manual work lives. Recording desktop activity also raises obvious questions of consent, privacy and trust, which should be settled openly with staff before any capture begins.

None of this means every company needs a process-mining or task-mining platform. It does reinforce the value of event evidence when the real process is too distributed or variable to reconstruct reliably from memory. A practical approach can range from simple work sampling and transaction tracing to process-mining tools, depending on scale and available data.

## Warning signs

- Teams rely on a recurring spreadsheet that nobody formally owns.
- A basic status question takes hours or several messages to answer.
- Work stalls whenever a particular person is on leave.
- Month-end or week-end routines involve exports, matching and emails.
- Staff describe parts of their job as "just checking" or "just tidying up".

## A practical diagnostic

Pick one high-volume transaction and work through these steps over two to four weeks:

1. Trace a sample of real cases end to end and record every system, handoff and manual step.
2. Tag each manual step with one of the five signatures.
3. Estimate frequency, handling time, waiting time and the number of people involved.
4. Identify which steps are intentional controls and which compensate for weak systems.
5. Decide for each step whether to remove, redesign, integrate, keep or automate it.
6. Repeat for the next transaction only once the first has produced decisions.

## Separate removal, redesign, integration and automation

Once the manual work is visible, do not automatically automate it. Some steps should be deleted because the underlying requirement no longer matters. Some should be moved earlier or later in the workflow. Some disappear when systems are integrated. Some remain human because judgment is valuable. Only after those decisions should automation be considered.

This distinction prevents an organisation from spending money to automate work that should not exist.

## The trade-offs

Making manual work visible takes time from the people already doing it, and the findings can feel like criticism of how they work. Some manual steps are deliberate controls that should stay, even if they look inefficient. And removing compensating work before the underlying system is fixed simply moves the problem somewhere less visible. The aim is understanding first, then deliberate change.

## What better looks like

A better operating environment makes routine work observable. Teams can explain where effort goes, which handoffs create delay, which manual controls are intentional and which are compensating for weak systems. Repeated low-value work is reviewed periodically rather than allowed to accumulate indefinitely.

The objective is not to eliminate humans from operations. It is to stop using human attention as invisible middleware between systems and processes that should carry more of their own operational load.

A [Digital Systems Audit](/services/digital-systems-audit/) can identify hidden manual work across systems and workflows. [Digital Operations Improvement](/services/digital-operations-improvement/) can then remove, redesign or standardise the underlying process before automation is considered.
