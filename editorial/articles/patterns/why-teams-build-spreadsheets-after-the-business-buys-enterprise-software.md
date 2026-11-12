---
hub: patterns
record_id: PAT-254
slug: why-teams-build-spreadsheets-after-the-business-buys-enterprise-software
title: Why Teams Build Spreadsheets After the Business Buys Enterprise Software
description: When spreadsheets reappear after an ERP or CRM goes live, each one marks a gap between the system as implemented and how the work is done. Treating them as requirements and closing the gaps deliberately recovers the value of the investment.
lead: When spreadsheets reappear after an ERP or CRM goes live, each one marks a gap between the system as implemented and how the work is done. Treating them as requirements and closing the gaps deliberately recovers the value of the investment.
category: Spreadsheet Dependency & Shadow Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Spreadsheet Dependency & Shadow Operations
pattern_family: Spreadsheet Dependency & Shadow Operations
observable_condition: After an ERP, CRM or similar system goes live, teams build and maintain spreadsheets refreshed from or reconciled against it.
primary_identification: Post-implementation fit problem: gaps between the configured system and real processes are filled by parallel spreadsheets.
commercial_value_dimensions: return on system investment, accuracy, operational risk, scalability, continuity
sources:
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
  - Apply change management with effectivity and success - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/change-management
related:
  - The Hidden Risk of One File Controlling an Operation | /patterns/the-hidden-risk-of-one-file-controlling-an-operation/
  - When Work Goes Missing in the Gap Between Two Systems | /patterns/when-work-goes-missing-in-the-gap-between-two-systems/
  - When Disconnected Systems Let the Business Act on Old Information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
summary: When spreadsheets reappear after an ERP or CRM goes live, each one marks a gap between the system as implemented and how the work is done. Treating them as requirements and closing the gaps deliberately recovers the value of the investment.
layout: plain
---
## Observable condition

Eighteen months ago the business replaced its old accounting package with a proper ERP system. The project was expensive and the go-live was declared a success. Today, the production planner runs the weekly schedule from a spreadsheet that is refreshed from a system export every Monday. The sales team tracks quotes in a shared workbook because the system's quote screen is "too slow". Finance reconciles stock in Excel before month-end because the system's valuation report "never quite matches". The warehouse keeps a list of back orders in a separate file because nobody can find them in the system.

Nobody decided to work this way. Each spreadsheet was built by a capable person solving a real problem in the quickest way available. But taken together, the business has paid for an integrated system and is still running significant parts of its operation outside it.

## Realisation

These spreadsheets are easy to dismiss as habit, resistance to change or a training gap. The realisation is that each one is evidence. A spreadsheet built after a system is implemented marks a specific point where the system, as configured, does not support the way the work needs to be done. It might be a missing report, a screen that takes too many clicks, a process the implementation never covered, or information the system holds but does not present usefully.

Read that way, the spreadsheets are a map of the gaps between what was bought and what the business needs. Ignoring them means the gaps stay open indefinitely. Banning them without closing the gaps simply pushes the work somewhere even less visible.

Realisation prompt: list every spreadsheet that is regularly refreshed from, or reconciled against, your main business system. For each, ask what it does that the system does not. The answers describe the unfinished part of your implementation.

## Identification

This is a post-implementation fit problem: the system has been installed, but the business processes it was meant to support were never fully fitted to it, so people have built parallel tools to fill the gaps. It differs from the pattern described in [why your most important process is running in Excel](/patterns/why-your-most-important-process-is-running-in-excel/), where a process has always lived in a spreadsheet. Here the spreadsheet appeared after the investment that was supposed to replace it. When those parallel files grow into something the operation depends on, the risks discussed in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/) follow.

## Diagnosis

The visible symptom is spreadsheets alongside the system. The common assumption is that users are resisting change. The structural causes usually lie in how the implementation was scoped and finished:

- **The implementation followed the software, not the processes.** Microsoft's implementation guidance for Dynamics 365, in its article on [implementing a solution based on business processes](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution), argues that business processes should drive the project and warns that it is a mistake to think the new system defines your processes. When processes were never mapped, gaps only appear after go-live.
- **Gaps were identified but never closed.** The same guidance describes [fit-to-standard and fit-gap analysis](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis) as a way to decide, process by process, whether to adopt the standard, configure, extend or buy an add-on. When that analysis is skipped or cut for budget, the remaining gaps are handed to users by default.
- **Reporting was left for later.** Many projects go live with transactions working and reporting deferred. People who need information then export data and build their own views.
- **Screens fit the vendor's process, not the user's job.** A task that took one screen in the old tool now takes five, so people capture in a spreadsheet and enter in batches.
- **Nobody owns the system after go-live.** The implementation partner leaves, and there is no internal owner collecting gaps and fixing them.
- **Old processes were rebuilt in new software.** Where workarounds from the previous system were carried over, they reappear as spreadsheets.

## Commercial impact

The commercial value at stake is return on the system investment, accuracy, operational risk and scalability.

- **Return on investment.** The business pays licence and support fees for capability it does not fully use, while also paying staff time to run parallel tools.
- **Accuracy.** Spreadsheets fed by exports are out of date as soon as they are refreshed, and manual reconciliation introduces errors.
- **Operational risk.** Critical information sits in files with no access control, audit trail or backup discipline, often understood by one person.
- **Scalability.** Each parallel spreadsheet needs a person to maintain it, so growth adds manual work the system was meant to remove.
- **Future change.** Upgrades and integrations are planned around the system, but the real process runs partly outside it, so changes break things nobody expected.

The size of the effect should be estimated from the business's own evidence: how many parallel spreadsheets exist, how much time each consumes, and what errors they have caused.

## Common misidentification

The two common responses pull in opposite directions. One is to blame the users and mandate that "everything must be in the system", without fixing the reasons they left it. The other is to conclude that the system was the wrong choice and start looking for a replacement. Both can be expensive mistakes. The issue is often less about the software than about how it was implemented and looked after once it was live, a theme developed in [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/). Microsoft's [guidance on change management for Dynamics 365 projects](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/change-management) makes a related point: a training and communication plan on its own is rarely all the change management a project needs.

## Possibility

In a stronger state, every parallel spreadsheet is treated as a requirement. Each one is understood, and a deliberate decision is made: close the gap through configuration, a report, a small extension or an integration; change the process to fit the standard system; or accept the spreadsheet as a legitimate, controlled tool. A named owner keeps a list of gaps and works through it after go-live. The system becomes the place where the work actually happens, and the remaining spreadsheets are there by choice rather than by default.

## Intervention

1. **Inventory the parallel spreadsheets.** Ask each team which files they refresh from or reconcile against the main system. Record purpose, owner, frequency and time spent.
2. **Classify each one.** Is it filling a reporting gap, a process gap, a usability gap or an integration gap?
3. **Do a late fit-gap review.** For each gap, decide whether to configure, report, extend, integrate, change the process or keep the spreadsheet under control.
4. **Close reporting gaps first.** They are often the quickest to fix and remove the most exports.
5. **Appoint a system owner.** Someone inside the business should own the backlog of gaps and the relationship with the implementation partner.
6. **Retire spreadsheets deliberately.** When a gap is closed, agree a date to stop using the spreadsheet and check that it has stopped.

Lessons for the next purchase are set out in [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/).

## An illustrative example

The following is illustrative, not a client case. A Cape Town food manufacturer implements a mid-market ERP. A year later the operations director counts eleven spreadsheets refreshed weekly from the system, including the production plan, a quote tracker and a stock reconciliation. Working through them with the team, she finds that four exist only because reports were never built, three because a screen was slow for a high-volume task, and two because a process was never configured. The remaining two are genuine planning tools worth keeping. Over six months, seven spreadsheets are retired and the planner no longer spends Monday mornings rebuilding the schedule.

## Practical diagnostic questions

- How many spreadsheets are regularly refreshed from your main business system?
- What does each one do that the system does not?
- Who owns the system and its list of gaps now that the implementation has finished?
- Were your processes mapped before the system was configured?
- Which parallel spreadsheet would hurt most if its owner left?

## Bottom line

Spreadsheets built after an enterprise system goes live are not a sign that people refuse to change. They are a precise record of where the system, as implemented, does not yet fit the business. Treating them as requirements, and closing the gaps deliberately, is how a business finally gets the value it paid for.
