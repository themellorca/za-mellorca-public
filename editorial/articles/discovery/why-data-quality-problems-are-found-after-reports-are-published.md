---
hub: discovery
record_id: DISC-257
slug: why-data-quality-problems-are-found-after-reports-are-published
title: Why data-quality problems are found only after the report has gone out
description: When a reader spots duplicated sales or missing branches after a pack goes out, the correction costs credibility. How to test data before publishing.
lead: When a reader spots duplicated sales or missing branches after the pack is circulated, the correction costs credibility. How to test data before reports are published.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: BI or reporting lead
budget_owner: Finance director
sources:
  - Add data tests to your DAG - dbt Developer Hub | https://docs.getdbt.com/docs/build/data-tests
  - Source freshness - dbt Developer Hub | https://docs.getdbt.com/docs/deploy/source-freshness
  - What is Data Observability? - IBM | https://www.ibm.com/think/topics/data-observability
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
related:
  - Why master data changes break downstream reports without warning | /discovery/master-data-changes-break-reports-without-warning/
  - Why dashboards keep running after the process they measure has changed | /discovery/dashboards-outlive-the-process-they-measure/
  - How to find out which of your reports anyone actually uses | /discovery/teams-cannot-tell-which-reports-are-actually-used/
summary: When a reader spots duplicated sales or missing branches after the pack is circulated, the correction costs credibility. How to test data before reports are published.
layout: plain
---
The monthly management pack goes out on the fifth working day. On the sixth, the operations director replies to all: the Polokwane branch shows zero sales, and the Durban figure looks double what it should be. The reporting team investigates. A source extract failed for one branch and a re-run loaded another branch's data twice. Both problems were present before the pack was circulated. Nobody checked for them, because nobody had defined what to check.

This article looks at that operating condition: data-quality problems that are discovered only after reports are published. It is one of the fastest ways to lose trust in management information, and it becomes more likely when the data platform changes.

## The problem in plain language

Reports are usually checked for presentation: formatting, totals that add up, commentary. They are less often checked for whether the underlying data is complete, current and plausible. So missing records, duplicates, stale extracts and broken mappings pass straight through to the published report. The first quality check is effectively the reader. By then the figures may have been discussed, forwarded or used in a decision.

## What you are actually trying to solve

Finance and reporting leads ask how to catch data errors before reports are sent, automate data validation, or set up data quality checks for reporting. Executives want reports that do not need correcting. The underlying need is a set of automatic checks that run before publication, with clear rules about what blocks a report and what only raises a warning.

## Evidence and system mechanism

### Quality rules can be written as tests

Data teams express expectations about data as automated tests. dbt's documentation on [data tests](https://docs.getdbt.com/docs/build/data-tests) describes them as assertions about your data, written as queries that return failing records; if no records fail, the test passes. Four generic tests come built in: unique, not null, accepted values, and relationships, which checks that a value such as a customer ID exists in the table it refers to. Each test can be set to warn or to error, and the documentation recommends running them in production whenever transformations run, to confirm that assumptions about source data still hold.

### Freshness can stop a stale run

Missing or late data is a quality problem too. dbt's guidance on [source freshness](https://docs.getdbt.com/docs/deploy/source-freshness) describes checks that compare source data against the service level agreement you define. Run as a step in the job, a freshness failure stops the subsequent steps from running, which is exactly the behaviour you want before publishing a report built on yesterday's extract.

### Five things to watch

IBM's overview of [data observability](https://www.ibm.com/think/topics/data-observability) sets out five pillars of data health: freshness, distribution (whether values fall within expected ranges), volume (whether the amount of data is complete), schema (whether the structure is consistent) and lineage. It describes the aim as detecting problems such as missing values, duplicate records or inconsistent formats early, before they affect downstream use. Each pillar maps to a failure readers commonly spot in published reports.

### Platform changes break reports quietly

Schema changes are a frequent cause after a platform change. Microsoft's documentation on [data refresh in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) notes that a refresh fails when a source column or table is renamed or removed, because the service does not refresh the schema. A failed refresh at least raises a notification to the model owner. The harder case is a change that does not fail: a new status code, a split field or a changed meaning that loads without error and produces wrong numbers.

### Common issues and the checks that catch them

| Issue readers find | Check before publication |
| --- | --- |
| A branch or region missing | Volume: every expected branch has records for the period |
| Figures doubled | Uniqueness: no duplicate transaction IDs |
| Last month's data shown | Freshness: latest record date within the target |
| Unknown category in a chart | Accepted values: codes match the agreed list |
| Sales with no customer | Relationships: every key exists in its reference table |
| Implausible swing | Distribution: totals within a tolerance of prior periods |

## Problem owner and why-now trigger

The BI or reporting lead owns the checks. Where there is no such role, the financial controller who signs off the management pack usually carries the problem. The finance director typically funds the work, because the cost falls on the credibility of finance.

The common trigger is a data-platform change: a new data warehouse, a move to a cloud ERP, a new integration tool, or a change in how extracts are produced. Each changes the assumptions reports were built on. Other triggers include an embarrassing correction to a board pack, or an AI initiative that will use the same data without a human reviewing each figure; the cost of that is explored in [the financial cost of running AI on poor-quality data](/impact/ai-on-poor-quality-data-financial-cost/).

## Economic consequence

Each post-publication correction costs investigation time, re-issue effort and meeting time. The larger cost is trust: once readers have found errors, they check everything themselves or ignore the reports. Decisions taken before a correction may have to be revisited. Over time the reporting team becomes a correction service, the pattern described in [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/).

## Root cause

- **No defined quality rules.** Nobody has written down what complete, current and plausible data looks like for each report.
- **Checks are manual and visual.** Reviewers look at the report, not at the data behind it.
- **No gate before publication.** Reports go out on schedule whether or not the data passed any checks.
- **Source problems treated as reporting problems.** Quality issues start in operational systems; see [why poor data is an operations problem, not just a data problem](/insights/poor-data-is-an-operations-problem-not-just-a-data-problem/).
- **Change without regression testing.** Platform and integration changes go live without re-testing downstream reports.

## Practical intervention

1. **Start with the most visible reports.** Pick the board and management packs where errors hurt most.
2. **Write the rules.** For each, list expected branches, periods, codes, keys and tolerances for period-on-period movement.
3. **Automate the checks.** Implement the rules as tests that run after each data load, in the transformation layer or as scheduled queries.
4. **Gate publication.** Decide which failures block the report and which only warn, and do not publish until blocking checks pass.
5. **Route failures to source owners.** Send exceptions to the people who can fix the data at source, not only to the reporting team.
6. **Re-test after every change.** Run the full set of checks before and after any platform, integration or mapping change.

### Trade-offs

Blocking checks can delay a report; agree in advance whether a late correct report is better than an on-time doubtful one. Tolerance rules will raise false alarms at first and need tuning. Checks catch only what they are written for, so review them when new errors slip through.

### An illustrative example

Illustrative: a Limpopo agricultural co-operative with about 120 staff corrected its monthly pack twice in one quarter after moving to a new cloud ERP. The reporting lead wrote checks for branch completeness, duplicate invoice numbers, data freshness and unknown product codes, ran them after each nightly load, and made two of them blocking. Subsequent packs went out a few hours later on bad-data days, but without corrections.

## Diagnostic questions

- How many published reports were corrected after circulation in the last six months?
- Who found the errors: the reporting team or the readers?
- Are there written rules for what complete and current data looks like for your main pack?
- Do any automated checks run before a report is published, and can they stop it?
- After your last system change, were downstream reports re-tested?

## What good looks like

Critical reports have written data-quality rules, implemented as automated checks that run after every load. Blocking failures stop publication, warnings are reviewed, and exceptions reach the people who own the source data. Readers rarely find errors, because the checks find them first.

## Where Mellorca fits

Mellorca helps businesses find where data quality breaks down between source and report through a [digital systems audit](/services/digital-systems-audit/), builds automated checks and publication gates through [business automation](/services/business-automation/), and monitors them over time as part of [managed digital operations](/services/managed-digital-operations/).

## Method note

Product references illustrate common mechanisms and are not recommendations. No error rates are claimed; measure your own correction history. The example is illustrative and does not describe a specific client.
