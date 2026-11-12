---
hub: discovery
record_id: DISC-273
slug: dashboards-outlive-the-process-they-measure
title: Why dashboards keep running after the process they measure has changed
description: A process is redesigned, but its dashboard keeps measuring the old steps and statuses. Why reports drift out of step with operations, and how to tie dashboard reviews to process change.
lead: A process is redesigned, but its dashboard keeps measuring the old steps and statuses. Why reports drift out of step with operations, and how to tie dashboard reviews to process change.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Process owner, with the BI or reporting lead
budget_owner: COO or operations director
sources:
  - Power BI implementation planning: Content lifecycle management - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-overview
  - Power BI implementation planning: Retire and archive content - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-retire-archive
  - Semantic model impact analysis - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-dataset-impact-analysis
related:
  - Why data-quality problems are found only after the report has gone out | /discovery/why-data-quality-problems-are-found-after-reports-are-published/
  - Why reports keep recalculating figures your systems already produce | /discovery/reports-recalculate-figures-already-available-upstream/
  - How to find out which of your reports anyone actually uses | /discovery/teams-cannot-tell-which-reports-are-actually-used/
summary: A process is redesigned, but its dashboard keeps measuring the old steps and statuses. Why reports drift out of step with operations, and how to tie dashboard reviews to process change.
layout: plain
---
A logistics business redesigns how it handles customer returns. Returns used to be logged by the warehouse, inspected, then credited by finance. Now customers book returns online, couriers collect them, and credits are issued automatically on scan. The process is faster and everyone is pleased. The returns dashboard, however, still shows a chart of "returns awaiting inspection" that is permanently near zero, and a turnaround time measured from warehouse logging, a step that no longer happens. Managers glance at it, see nothing alarming, and move on. Meanwhile, the new failure point, courier collections that never happen, is not measured anywhere.

This article looks at that operating condition: BI dashboards that remain live after the process they measure has changed. It is common in businesses that improve or automate processes regularly, and it is becoming more common as AI and automation initiatives redesign work faster than reports are reviewed.

## The problem in plain language

A dashboard is built around a process as it existed on the day it was designed: its steps, statuses, hand-offs and timestamps. When the process changes, the dashboard does not know. It continues to refresh, it continues to show numbers, and nothing on the page indicates that those numbers now describe a process that no longer exists. Some measures go flat, some quietly change meaning, and the new risks introduced by the redesign go unmeasured.

This is different from a broken report. A broken report fails visibly. An outdated dashboard looks healthy, which is why it survives.

## What the buyer is actually trying to solve

Operations and BI leads search for how to keep dashboards aligned with business processes, when to retire a report, or why metrics stopped making sense after a system change. Process owners who have just redesigned a workflow want to know whether it is working. The practical need is a link between process change and reporting change, so that any redesign triggers a review of the dashboards that measure it.

## Evidence and system mechanism

### Reporting content has a lifecycle, including retirement

Microsoft's guidance on [content lifecycle management](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-overview) describes six stages for reporting content: plan and design, develop and manage changes, validate, deploy, support and monitor, and retire and archive. It notes that supporting and monitoring content often leads to planning new content, and that content should be retired when consumers no longer need or use it. The lifecycle assumes that content is revisited. In practice, most dashboards pass through the first four stages once and then stay in the fifth indefinitely, regardless of what happens to the process underneath.

### Low usage is a clue, but not a complete one

The companion guidance on [retiring and archiving content](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-retire-archive) recommends regular clean-up activities using views, viewers, refresh dates and update dates, and advises checking documentation and speaking to the owner before retiring anything. It notes that retiring unused items reduces confusion about which content to use. But a dashboard for a redesigned process may still be opened every week out of habit. Usage tells you whether people look at a report; it cannot tell you whether the report still describes reality. That needs a process trigger.

### Knowing who depends on a dashboard before changing it

When a dashboard must be redesigned or retired, the people relying on it need to be told. Microsoft's [impact analysis](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-dataset-impact-analysis) shows how many workspaces, reports and dashboards depend on a semantic model, with views and viewers over the last 30 days, and provides a way to notify the contacts of affected workspaces about a change.

### Common signs a dashboard has outlived its process

- A status or stage on the dashboard is always zero or always 100%.
- Turnaround times are measured from or to a step that no longer exists.
- The process owner relies on a different report, or on the system's own screens.
- New statuses introduced by the redesign are grouped under "Other" or are missing.
- Nobody can say when the dashboard was last checked against the process.

## Problem owner and why-now trigger

The process owner owns the question of whether the dashboard still describes the process. The BI or reporting lead owns the change. The COO or operations director usually funds the work, because the cost appears as poor operational visibility.

The common trigger today is an AI or automation initiative. When steps are automated, statuses change, hand-offs disappear and new exception paths appear, and the dashboard built for the manual process no longer fits. System replacements and outsourcing a process step have the same effect. A related automation problem is described in [why retired processes leave orphaned automations running](/discovery/retired-processes-leave-orphaned-automations-running/).

## Economic consequence

The main cost is false reassurance. A dashboard that shows a healthy picture of a process that no longer exists hides the risks of the new one, so problems are found by customers rather than by managers. There is a smaller but real maintenance cost: data pipelines keep feeding measures nobody needs. And redesign benefits go unproven, because nobody is measuring the new process well enough to show improvement. The underlying gap between having data and having visibility is explored in [the difference between having data and having visibility](/patterns/the-difference-between-having-data-and-having-visibility/).

## Root cause

- **Process change and reporting change are separate projects.** Redesigns are planned without listing the reports that depend on the process.
- **Dashboards have no process owner.** The report builder owns the dashboard, but the process owner never signs it off.
- **No review date.** Dashboards are published without a date by which they must be checked.
- **Measures are tied to system statuses.** When statuses are renamed or removed, measures fail silently rather than visibly.
- **Retirement is judged on usage alone.** Dashboards that are still opened are assumed to be still valid.

## Practical intervention

1. **Link each dashboard to a process and an owner.** Record which process it measures and which process owner signs it off.
2. **Add reporting to the change checklist.** Every process redesign, automation or system change lists the dashboards affected and includes their update in scope.
3. **Measure the new process from day one.** Define the measures for the redesigned process, including its new failure points, before go-live.
4. **Retire or archive the old measures.** Remove measures that describe steps that no longer exist, and archive the old version for historical comparison.
5. **Tell the readers.** Notify the people who rely on the dashboard about what changed and why.
6. **Set review dates.** Ask process owners to confirm each critical dashboard still fits the process at least annually.

### Trade-offs

Changing a dashboard breaks comparisons with history. Keep the old measures available in an archive or a historical page, clearly labelled, rather than mixing old and new definitions in one trend line. Adding reporting to every change adds a step to change projects; limit it to dashboards used in management meetings.

### An illustrative example

*Illustrative:* a Gauteng logistics company with about 300 staff automated its returns process and found, three months later, that its returns dashboard still measured warehouse inspection. The process owner and BI lead replaced it with measures for booking-to-collection time, failed collections and automatic credit exceptions, archived the old dashboard, and added a reporting line to the company's change request template. Failed collections, previously unmeasured, became the first item reviewed in the weekly operations meeting.

## Diagnostic questions

- For each dashboard used in management meetings, can you name the process and the process owner?
- Which processes have been redesigned or automated in the past year, and were their dashboards updated?
- Does your change request template ask which reports are affected?
- Are any dashboard measures permanently zero or permanently full?
- When was each critical dashboard last checked against the process it measures?

## What good looks like

Every important dashboard is tied to a named process and owner. Process changes include reporting changes by default, new processes are measured from go-live, outdated measures are archived rather than left running, and owners confirm their dashboards still fit at a set interval.

## Where Mellorca fits

Mellorca maps which dashboards measure which processes through a [digital systems audit](/services/digital-systems-audit/), builds reporting changes into process redesign and automation through [digital operations improvement](/services/digital-operations-improvement/), and keeps dashboard reviews on schedule as part of [managed digital operations](/services/managed-digital-operations/).

## Method note

Product references illustrate common mechanisms and are not recommendations; features and time windows were current when checked and may change. The example is illustrative and does not describe a specific client.
