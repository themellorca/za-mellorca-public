---
hub: insights
record_id: INS-103
slug: why-the-official-process-is-often-not-the-real-process
title: Why the official process is often not the real process
description: The written process and the one people follow rarely match, and laziness is seldom the cause. Why the gap forms and how to close it without blame.
lead: Every business has two versions of its processes: the one written down and the one people actually follow. The gap is rarely laziness. It is usually a sign that the written process does not fit real conditions. Why the gap forms, why it matters, and how to close it without blame.
category: Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Operations
sources:
  - Where the rubber meets the road: using FRAM to align work-as-imagined with work-as-done when implementing clinical guidelines - PMC | https://pmc.ncbi.nlm.nih.gov/articles/PMC4553017/
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - Why repeated workarounds are a warning sign | /insights/why-repeated-workarounds-are-a-warning-sign/
  - How to map a business workflow without making it complicated | /insights/how-to-map-a-business-workflow-without-making-it-complicated/
  - What to fix first when everything feels broken | /insights/what-to-fix-first-when-everything-feels-broken/
summary: Every business has two versions of its processes: the one written down and the one people actually follow. The gap is rarely laziness. It is usually a sign that the written process does not fit real conditions. Why the gap forms, why it matters, and how to close it without blame.
layout: plain
---
Most businesses can produce a description of how their important processes are supposed to work. It might be a procedure document, a flowchart from a past project or simply what the manager says when asked. Watch the same process for a week, though, and the picture changes. Steps are skipped, reordered or done in a different system. Approvals happen by WhatsApp. A spreadsheet appears that is not mentioned anywhere. One experienced person quietly fixes problems before anyone sees them.

None of this is unusual. In almost every organisation, the official process and the real process are different things. The useful question is not how to make people follow the official version, but why the two have drifted apart.

## Work as imagined and work as done

Safety researchers have a name for this gap. They distinguish "work-as-imagined", the way designers, managers and procedure writers believe a job is done, from "work-as-done", the way it is actually carried out under real conditions. A 2015 study in the journal Implementation Science, [using FRAM to align work-as-imagined with work-as-done](https://pmc.ncbi.nlm.nih.gov/articles/PMC4553017/) in clinical guidelines, found that written guidelines contained elements that were unrealistic once mapped against actual workflow and organisational constraints, and that this led to workarounds rather than compliance.

The setting is hospitals, but the lesson applies to any business. A procedure written without enough knowledge of real conditions will be adapted by the people who have to make it work. The adaptations are often sensible. They are just invisible to management.

## Why the gap forms

The official process usually drifts from the real one for a handful of reasons:

- **The procedure was designed for the normal case.** Real work includes missing information, urgent customers, unavailable approvers and system outages. People handle these by improvising, and the improvisations become habit. The pattern is described in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).
- **The systems do not support the procedure.** If the official process requires information the system cannot hold, or a step the system does not allow, staff will find another way.
- **The business changed and the document did not.** New products, customers, staff and tools change how work moves. Procedures are rarely updated at the same pace.
- **Different people do it differently.** Without a shared, workable standard, each person develops a personal version. Results then depend on who handles the work.
- **The official version was aspirational.** Some procedures describe how management would like the work to happen, written during a project, and were never tested against reality.

## Why it matters

A gap between documented and actual process is not only an untidiness. It has real consequences.

### Decisions are made on a fiction

Managers estimating capacity, cost or the effect of a change will use the process they believe exists. If the real process has extra steps, waits and rework, those estimates will be wrong.

### Automation fails

Automating the documented process automates something nobody actually does. The automation then breaks against the real exceptions, or staff work around it as they did the original procedure. The case for understanding real work first is set out in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).

### Knowledge sits with individuals

When the real process is undocumented, it lives in the heads of the people who perform it. Holidays, resignations and illness expose the gap immediately.

### Controls are weaker than they look

If the official process includes an approval or check that is routinely bypassed, the business believes it has a control it does not have. That matters for payments, discounts, credit decisions and access to personal information.

## How to find the real process

Workshops and interviews are a start, but people tend to describe the process they think they should follow. Three sources of evidence get closer to reality.

1. **Follow real cases.** Take ten recent orders, claims or requests and trace each one from start to finish using emails, system records and timestamps. Note every step, wait and handoff that actually happened.
2. **Watch the work.** Sit with the people who do it for a few hours. Ask what they do when information is missing, when the system is slow or when the usual approver is away.
3. **Use system logs.** Where the process runs through business software, the logs record what happened. IBM describes [process mining](https://www.ibm.com/think/topics/process-mining) as analysing event log data from systems such as ERP and CRM tools, and explains that conformance checking compares the intended process model with what actually occurs. Microsoft's [process mining overview](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) makes the same point: extracting event data shows how processes are actually executed in practice. For when this is worth the effort, see [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/).

## How to close the gap without blame

The instinct on discovering the gap is to enforce the official process. That rarely works, because the reasons people departed from it are still there. A better approach treats each difference as information.

For every significant difference between the documented and real process, ask which of three things is true:

| Finding | Response |
| --- | --- |
| The real practice is better than the official one | Adopt it as the standard and update the documentation |
| The real practice is a workaround for a missing system capability or missing information | Fix the underlying cause, then remove the workaround |
| The real practice bypasses a control that genuinely matters | Make the control easier to follow, then enforce it |

Most differences fall into the first two rows. The third is real but less common than managers fear.

Once the process has been reconciled, document the real version, including the common exceptions. Not every process needs this treatment at once; the ones that carry the most risk or depend most on individuals should come first, as discussed in [what business processes need documentation first](/insights/what-business-processes-need-documentation-first/).

## An illustrative example

Consider a hypothetical Pietermaritzburg building supplies merchant. Its documented credit process says new trade accounts are approved by the financial manager after a credit check, before any goods are released.

Tracing twenty recent accounts showed something different. In most cases the branch manager released goods on the day of application, because contractors needed materials on site and the financial manager was often unavailable. The credit check happened afterwards, sometimes weeks later. Branch staff were not ignoring the rule; they were protecting sales the rule would have lost.

The fix was not stricter enforcement. The merchant introduced a small provisional limit branch managers could approve on the spot, with the full check due within two working days and a weekly report of overdue checks. The documented process now matched what people could actually do, and the control became real. This scenario is illustrative, not a client case study.

## A habit worth keeping

Processes will always drift as the business changes. The aim is not to stop that but to notice it. A short review of each important process once a year, using real cases rather than the document, keeps the official and real versions close enough to manage. The commercial value at stake is better decisions, automation that works on the first attempt and controls that hold. Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work starts from the real process for exactly that reason.
