---
hub: patterns
record_id: PAT-067
slug: when-measuring-performance-means-collecting-numbers-all-month
title: When KPI Tracking Becomes a Data Collection Exercise
description: A scorecard fed by hand and chosen for convenience consumes the time that was meant for improving the things it measures.
lead: A scorecard fed by hand and chosen for convenience consumes the time that was meant for improving the things it measures.
category: Data & Reporting
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data & Reporting
pattern_family: Data & Reporting
observable_condition: A scorecard of many hand-collected measures is assembled each month and rarely changes what anyone does.
primary_identification: Measurement-design and manual data-flow problem
commercial_value_dimensions: productivity, speed, focus, decision quality
sources:
  - Google SRE - Defining slo: service level objective meaning | https://sre.google/sre-book/service-level-objectives/
  - Get started with goals in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-goals-introduction
  - Endorsement overview - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview
related:
  - Why Manual Reporting Creates Invisible Risk | /patterns/the-risk-inside-reports-that-are-assembled-by-hand/
  - The Operational Blind Spots Created by Periodic Reporting | /patterns/what-happens-between-reporting-periods-that-nobody-sees/
  - Why Executives Keep Asking Teams to “Send the Latest Numbers” | /patterns/why-the-latest-numbers-are-always-a-request-and-never-a-view/
summary: A scorecard fed by hand and chosen for convenience consumes the time that was meant for improving the things it measures.
layout: plain
---
On the last Thursday of every month, a team leader at a regional services company opens a spreadsheet with twenty-two KPIs and starts chasing. Customer response times come from the helpdesk export. Utilisation comes from the timesheets, once the late ones are in. Debtor days come from finance, who are busy closing. By Monday the sheet is full, the coloured cells have been set to green, amber and red, and the team leader has spent more hours collecting performance than improving it.

The scorecard exists. The question nobody has time to ask is whether it has ever changed what anyone did.

## The condition: measuring has become a monthly chore

Key performance indicators are meant to focus attention on what matters. In many businesses they have drifted into something else: a recurring collection exercise whose output is a table. The effort goes into gathering, formatting and presenting the numbers. By the time the table is ready, the period it describes is over, and the discussion it prompts is about whether the numbers are right.

The condition shows up as:

- A scorecard with many measures, most of which have never prompted an action.
- Numbers that are entered by hand each month by the people being measured.
- Measures chosen because the data was available, not because the business needed them.
- Reviews that begin with "is this up to date?" and end with "we'll look at it next month".
- A quiet understanding that red does not mean trouble and green does not mean safe.

## The realisation: a KPI is a tool for acting, not a record for keeping

A useful measure answers a question someone needs to act on: are customers waiting longer, is cash coming in slower, is a team overloaded? When a KPI is simply collected and reported, it becomes an archive. It tells you what happened without telling anyone what to do next.

The second realisation is about cost. Every manually collected measure carries a standing charge in people's time, every period, for as long as it is on the sheet. Measures that were added in a good year or at someone's request are rarely removed. The scorecard grows, the collection time grows with it, and the share of effort left for improvement shrinks.

## Identification: a measurement-design and data-flow problem

The class of issue is measurement design combined with manual data flow. The visible symptom is that KPI reporting is time-consuming and unconvincing. The common assumption is that people are not engaged with the numbers. The structural cause is twofold: the measures were selected from what was easy to count rather than from what the business needs to decide, and the numbers travel from source to scorecard by hand.

Google's site reliability engineering book, written for running online services, addresses the first half of this clearly. Its chapter on service level objectives says not to track every available metric, notes that choosing too many makes it hard to focus, and suggests that a handful of representative indicators is usually enough. It also advises starting from what users care about, even when that is hard to measure, rather than from what is easy to measure. Those are engineering teams, but the instinct applies to any business scorecard.

## Diagnosis: how a scorecard turns into a collection exercise

An illustrative example, not a client case. A small training company builds a scorecard with thirty measures after a strategy workshop. Each manager is asked to supply their numbers by the fifth of the month. Some come from systems, some from memory. A manager who is behind estimates, because a blank cell draws more attention than a rough number. Over a year the scorecard accumulates inconsistencies: three people define "active learner" differently, and a measure for repeat business is quietly dropped because nobody can calculate it reliably.

The structural mechanisms are these:

- **Process:** there is no step that asks, for each measure, what decision it supports and who owns it.
- **Information:** definitions are held loosely, so the same label means different things to different people.
- **Systems:** source systems are not connected to the scorecard, so collection is manual and periodic.
- **People:** those being measured also supply the data, which creates both a burden and an incentive to smooth the numbers.

Our article on [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/) explores the ownership issue, and [why teams spend more time preparing reports than using them](/patterns/why-teams-spend-more-time-preparing-reports-than-using-them/) covers the effort side.

## The commercial value at stake

The value connected to this pattern is productivity, execution speed and focus. Productivity, because the hours spent on collection can go to improving the things being measured. Speed, because a measure that updates from its source can show a trend while it is still early enough to change. Focus, because fewer, better-defined measures give leaders a clearer view of what matters and what does not.

There is also a trust dimension. A scorecard that people know to be hand-assembled and loosely defined loses authority, and with it the ability to steer behaviour. We have not quantified the time involved, because it varies from business to business, but it is easy to estimate locally: ask each contributor how long their monthly submission takes.

## Possibility: fewer measures, fed by the work itself

The alternative is a short list of measures, each with a purpose, a definition and an owner, and with data that flows from the system where the work is recorded. Microsoft's documentation on Power BI scorecards describes goals that can be connected to data, in which case the value updates as often as the underlying semantic model refreshes, or kept as manual goals, which only change when someone performs a check-in. It adds a practical limit: where a goal is connected to data, its value cannot be updated by hand, which prevents the common problem of someone overwriting the figure. The documentation describes the purpose of scorecards in terms of accountability, alignment and visibility.

The definition issue is addressed by the endorsement feature in Fabric and Power BI, which allows items to be marked as promoted, certified or master data. A certified item has been reviewed by an authorised person against the organisation's quality standards, which is the same idea as saying that a KPI has one agreed definition and a named owner. Again, the products are examples; the discipline is the point.

## Intervention: prune, define, connect

1. **Audit the scorecard.** For each measure, write down what decision it supports and when it last changed an action. Measures with no answer are candidates for removal.
2. **Cut to a handful.** Keep the few that tell you whether customers are served, cash is flowing and the team is coping.
3. **Write one definition per measure.** Include the source, the calculation and the owner.
4. **Connect before you automate.** Wherever a measure can be calculated from an existing system, connect it. Leave manual entry for the few measures with no digital source and flag them.
5. **Review the review.** After a quarter, ask whether the meeting spent more time on actions or on checking numbers.

The broader reasoning on choosing what to put in front of leaders is in our article on [how to decide what should be on an operations dashboard](/insights/how-to-decide-what-should-be-on-an-operations-dashboard/).

## Practical diagnostic questions

- How many hours does your team spend each month collecting KPI data?
- Can each measure on the scorecard be linked to a decision it has influenced?
- Are any figures typed in by the people whose performance they describe?
- Do two departments calculate the same measure in different ways?

## The bottom line

When KPI tracking becomes a data collection exercise, the business is spending its improvement effort on gathering evidence of how it is doing. Reducing the scorecard to the measures that drive decisions, defining them clearly and feeding them from the systems where the work lives turns tracking back into a management tool.
