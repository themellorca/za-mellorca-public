---
hub: patterns
record_id: PAT-120
slug: when-pipeline-hygiene-requires-constant-chasing
title: When Pipeline Hygiene Requires Constant Chasing
description: Every week someone reminds reps to update close dates, values and stages. Why pipeline data only stays clean while it is being chased, and how to make it hold.
lead: Every week someone reminds reps to update close dates, values and stages. Why pipeline data only stays clean while it is being chased, and how to make it hold.
category: Sales, Leads & Revenue Handoffs
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Sales, Leads & Revenue Handoffs
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: Managers or a sales administrator send weekly reminders to update close dates, values, stages and next steps, and the pipeline is only reasonably accurate in the day or two after each round of chasing.
primary_identification: Hygiene as a separate task: pipeline updates are designed as admin done for management, disconnected from the rep's own selling work, so they decay as soon as attention moves elsewhere.
commercial_value_dimensions: Selling capacity, forecast reliability, management time and revenue predictability
sources:
  - Business process flows overview - Power Automate | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - In New Survey, UK Sales Teams Name AI and Agents #3 Growth Tactic for 2026 | https://www.salesforce.com/uk/news/stories/state-of-sales-report-announcement-2026/
related:
  - Why Lead Qualification Becomes Inconsistent Across Reps | /patterns/why-lead-qualification-becomes-inconsistent-across-reps/
  - Why Sales Managers Cannot See Where Deals Are Actually Stuck | /patterns/why-sales-managers-cannot-see-where-deals-are-actually-stuck/
  - When lead routing depends on someone checking an inbox | /patterns/when-lead-routing-depends-on-someone-checking-an-inbox/
summary: Every week someone reminds reps to update close dates, values and stages. Why pipeline data only stays clean while it is being chased, and how to make it hold.
layout: plain
---
## Observable condition

Every Thursday afternoon the reminders go out. Please update your close dates. Please move anything that has slipped. Please make sure values are current before tomorrow's forecast meeting. By Friday morning the pipeline is roughly right. By the following Wednesday it has drifted again: close dates in the past, deals in the wrong stage, values from the first conversation. The cycle repeats every week.

Someone carries the cost of this. It may be the sales manager, a sales administrator or the owner. They spend hours each week checking records, sending reminders, following up the reminders, and correcting obvious errors themselves. The reps spend time too, in short bursts of updating that interrupt selling and are often done from memory.

An illustrative example: a Gauteng office equipment supplier with twelve reps. Its sales administrator estimates that most of her Thursday goes on chasing pipeline updates. When she was on leave for two weeks, the forecast meeting was cancelled because nobody trusted the numbers.

## Realisation

The realisation is that data which stays accurate only while it is chased is not being maintained by the process. It is being maintained by a person. The chasing is a hidden, permanent role that the business pays for and never designed. It also produces a pipeline that is accurate for one day a week, which is not the same as an accurate pipeline.

The underlying problem is that updating the pipeline is a separate task from selling. Reps update records for management, not for themselves, so updates happen when management asks. Research from CRM vendors points to the same tension. [Salesforce's 2026 State of Sales announcement](https://www.salesforce.com/uk/news/stories/state-of-sales-report-announcement-2026/) reports that the average seller spends about 40% of their time selling and identifies administrative work, including manual data entry and data cleansing across siloed systems, as a drag on productivity. These are vendor survey figures, not a measure of any one team, but they describe the trade-off every rep makes between updating and selling.

**Realisation prompt:** if nobody chased pipeline updates for a month, how accurate would your pipeline be at the end of it?

## Identification

This is a pattern of hygiene as a separate task. The visible symptom is weekly chasing to keep pipeline data current. The common assumption is that reps lack discipline. The structural cause is that the pipeline asks reps to record information that serves management but not their own work, at times that are disconnected from the selling events that change it. Without chasing, the data decays.

It feeds the condition described in the Discovery note on [why CRM updates happen only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/), and it often leaves the pipeline cluttered in the way described in [why dead deals stay open in the CRM](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/).

## Diagnosis

- **Updates are not tied to selling events.** A meeting, a proposal sent or a verbal yes does not automatically change the record, so the rep must remember to do it separately.
- **The fields serve management, not reps.** Close date and probability are forecasting inputs. Reps gain nothing from keeping them current, so they don't.
- **Stages have no entry or exit rules.** Without clear criteria, a deal's stage is a matter of opinion, and opinions are updated only when someone asks. [Microsoft's overview of business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) describes how stages can contain required steps that must be completed before a record moves forward, which ties stage changes to recorded facts.
- **Activities live outside the CRM.** Emails, calls and meetings happen in other tools, so the CRM does not see that a deal has moved.
- **Stale data has no visible consequence.** A close date in the past is not flagged, so it can sit there indefinitely.
- **Chasing replaces design.** Because a person fixes the data each week, the underlying process is never changed.

## Commercial impact

The commercial value at stake is selling capacity, forecast reliability and management time.

The chasing role is a direct cost, often carried by someone whose time is valuable elsewhere. Reps lose selling time to batch updates done from memory, which are also less accurate than updates made at the moment something happens. The forecast built on chased data is accurate only at a point in time, so cash planning, stock and hiring decisions rest on numbers that drift between meetings.

There is also a trust cost. When everyone knows the pipeline is accurate only after chasing, nobody relies on it between meetings. Managers ask reps directly, reps keep their own lists, and the CRM becomes a reporting obligation rather than a working tool. The Insight [how to keep a CRM clean after the cleanup project ends](/insights/how-to-keep-a-crm-clean-after-the-cleanup-project-ends/) discusses how to break that cycle.

## Common misidentification

The usual responses are stricter reminders, public league tables of data quality, or linking commission to CRM compliance. These can raise update rates for a while, but they increase the sense that the CRM is a management tool rather than a selling tool, and they still rely on chasing. Another response is a large cleanup project, which produces a clean pipeline that decays within weeks because the process that creates the mess is unchanged.

## Possibility

In a better state, the pipeline updates as a side effect of selling. Logging a meeting, sending a proposal from the CRM or recording a decision moves the deal forward. Stages have clear entry and exit criteria. Close dates in the past and deals without a next step are flagged automatically to the rep, not chased by a manager. Reps get something back from the system, such as reminders, prepared documents or a clear list of what needs attention, so keeping it current helps them sell. The person who used to chase spends that time on analysis and coaching.

## Intervention

Start by measuring the chasing, then remove the reasons for it one at a time.

## Practical next actions

1. **Measure the chasing time.** Ask whoever chases updates to log the hours spent each week for a month.
2. **List the fields that go stale.** Identify the three or four fields most often out of date, usually close date, stage, value and next step.
3. **Tie each field to a selling event.** Decide which event should update it, such as proposal sent moving the stage, and automate or simplify that link.
4. **Define stage exit criteria.** Write one or two facts that must be true before a deal can move to each stage.
5. **Flag stale data automatically.** Set up views or alerts that show each rep their deals with past close dates or no next step.
6. **Give reps something back.** Use the CRM to generate their proposals, follow-up reminders or call lists, so the record helps them as well as management.

## Diagnostic questions

- Who chases pipeline updates in your business, and how many hours a week does it take?
- How many open deals currently have a close date in the past?
- Which selling events, if any, automatically update a deal's stage?
- What does a rep personally gain from keeping the CRM current?
- How would your forecast look if nobody chased updates for a month?

## Article summary

When pipeline hygiene requires constant chasing, the business is paying a person to hold together data that its process lets decay. Tying updates to selling events, defining stage criteria and flagging stale records automatically makes accurate data a by-product of selling, frees management time and gives the business a pipeline it can trust every day of the week. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine why your pipeline drifts and how Mellorca may be able to help.
