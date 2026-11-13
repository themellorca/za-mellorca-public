---
hub: patterns
record_id: PAT-055
slug: when-only-one-person-knows-where-the-reports-numbers-come-from
title: When only one person knows where the report's numbers come from
description: When one person alone knows where reporting data lives and how it is adjusted, every management decision depends on their memory. Document the route.
lead: When one person is the only map of where reporting data lives and how it is adjusted, the business depends on their memory for every management decision. Writing down the data's route turns that memory into an asset.
category: Reporting & Operational Visibility
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Reporting & Operational Visibility
pattern_family: Reporting & Operational Visibility
observable_condition: Monthly or weekly management reports can only be produced, explained or corrected by one person, who knows which exports, files, adjustments and exclusions turn source data into the reported figures.
primary_identification: Undocumented data lineage and single-person dependency in management reporting.
commercial_value_dimensions: Decision speed, management capacity, risk, resilience and audit readiness
sources:
  - What Is Data Lineage? - IBM | https://www.ibm.com/think/topics/data-lineage
  - Data lineage - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-data-lineage
  - The AQuA Book | https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government
related:
  - Why reporting delays become decision delays | /patterns/why-reporting-delays-become-decision-delays/
  - The difference between having data and having visibility | /patterns/the-difference-between-having-data-and-having-visibility/
  - Why does management find out too late? | /patterns/why-management-finds-out-too-late/
summary: When one person is the only map of where reporting data lives and how it is adjusted, the business depends on their memory for every management decision. Writing down the data's route turns that memory into an asset.
layout: plain
---
## Observable condition

The monthly management pack always arrives, and it always comes from the same person. They know that sales come from the accounting system but that two large customers must be split out by hand. They know which export from the job system has the right date filter, which spreadsheet holds the corrections for returned stock, and that the branch in Durban is reported a week late and has to be estimated. When the managing director asks why gross margin dropped, they are the only person who can answer, because they are the only person who knows how the number was put together.

It works, until they go on leave. Then the pack is late, or somebody else produces it and the numbers do not match last month, and the first week after their return is spent reconciling the difference.

An illustrative example: a KwaZulu-Natal engineering services company with three branches relies on its financial manager to produce the monthly report for the owners. The report draws on the accounting package, a job-costing spreadsheet per branch and a timesheet export. When she was booked off sick for three weeks during year-end, the owners went into a bank meeting without current figures, and the auditor's queries waited until she returned.

## Realisation

It is easy to see this as a staffing issue: one capable person, not enough backup. But the report is not really held in a person. It is held in a route, a series of steps that takes data from where it is recorded, through extracts, adjustments and exclusions, to the figure on the page. That route has simply never been written down. The person is the only map.

The data profession has a name for this map. IBM describes data lineage as tracking the flow of data over time: where it originated, how it changed and where it ended up. Lineage is what lets someone trace a wrong figure back to its source, or understand which reports will change if a source changes. Microsoft's documentation for its reporting tools notes that questions such as why a report is not up to date can otherwise require a team of experts or deep investigation to answer. In a small business, that investigation is one person's memory.

There is a quality dimension too. The UK government's guidance on producing quality analysis, the [AQuA Book](https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government), expects documentation for all analysis, even single-analyst work, and states that the analyst and the person assuring the work should be separate. When only one person can explain a number, nobody can check it.

**Realisation prompt:** if the person who builds your monthly report resigned today, how long would it take someone else to produce the same figures, and how would you know they were right?

## Identification

This is a data-lineage and key-person dependency problem in management reporting. The visible symptom is reporting that is late, unexplainable or inconsistent whenever one person is absent. The common assumption is that the business needs a second person trained up. The structural cause is that the route from source data to reported figure exists only as personal knowledge, built up through workarounds that were never recorded.

It overlaps with neighbouring Patterns but is distinct from them. [The hidden cost of waiting for management information](/patterns/the-hidden-cost-of-waiting-for-management-information/) deals with the queue for reports. [Why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/) deals with the coordination effort. This Pattern is about the knowledge itself: where it lives, and what happens when the one person who holds it is not there. The general problem is explored in the Insight [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## Diagnosis

- **Undocumented sources.** Nobody else knows which systems, exports and files feed the report, or which version of each.
- **Hidden adjustments.** Manual corrections, reclassifications and exclusions are applied every month but recorded nowhere except the spreadsheet itself, often in cells nobody else understands.
- **Unwritten definitions.** What counts as a sale, a completed job or an active customer has been decided by the report-builder over time, not agreed by the business.
- **Personal storage.** Working files sit on a laptop or in a personal folder rather than a shared, controlled location.
- **No independent check.** Because only one person understands the method, nobody reviews it, so errors can persist for months.

## Commercial impact

The commercial value at stake is decision speed, management capacity, risk, resilience and audit readiness.

Decisions slow down whenever the one person is busy or away. Management capacity is consumed because leaders must route every question about the numbers through a single desk. Risk sits in unreviewed adjustments: an error in the method repeats every month, and the business may make pricing, staffing or credit decisions on it. Resilience is weak, because the business cannot produce its own figures without one employee. Audit and lender queries become slow and stressful, as described in [the cost of a reporting number nobody can trace](/impact/untraceable-reporting-number-audit-cost/). And the person carrying the knowledge often carries the stress too, which makes the dependency more fragile.

## Common misidentification

Training a backup person is the usual response. It helps, but if the method is still undocumented, the business now has two memories instead of one, and they will drift apart.

Buying a dashboard tool is the other. A dashboard built on the same undocumented route simply automates the opacity. The data still needs to be traced, defined and agreed before it is visualised.

## Possibility

In a better state, every figure in the management pack can be traced to its source by someone other than its author. There is a short written map showing which system each number comes from, which adjustments are applied and why, and who owns each definition. Recurring corrections have been fixed at source where possible, and the rest are recorded as explicit, reviewed steps. Working files sit in a shared, controlled location. A second person reviews the pack each month, which both checks the numbers and keeps the knowledge alive.

Where reporting tools are used, their lineage features can show which reports depend on which sources, so a change in one system does not silently break the monthly figures.

For the engineering company, that might mean a one-page source map per report section, branch job costing captured in the accounting system rather than separate spreadsheets, and the operations manager reviewing the pack before it goes to the owners.

## Intervention

1. **Sit with the builder.** Watch the report being produced end to end and record every source, export, filter, adjustment and judgement call.
2. **Draw the route.** Turn that record into a simple map from source system to reported figure for each key number.
3. **Name the definitions.** Write down what each key metric means and get the owners to agree it, linking to the approach in [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).
4. **Remove recurring adjustments at source.** Where the same correction is made every month, fix the coding, mapping or process that creates it.
5. **Move files to shared control.** Keep working files and the documented method in a shared location with version history.
6. **Separate building and checking.** Have a second person review the pack monthly and produce it at least once a quarter, using the guidance in [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/).

## Diagnostic questions

- Who, apart from its author, can produce your monthly management report?
- Is there a written list of every source and adjustment behind the key figures?
- How many manual corrections are applied each month, and are they documented?
- Where are the working files stored, and who else can open them?
- When did someone other than the author last check the method?

## Bottom line

When reporting depends on one person knowing where the data lives, the business is relying on an undocumented route that only one memory can follow. The fix is not only another trained person. It is writing down where each number comes from, removing the recurring corrections, agreeing the definitions and separating the building of the report from its review. That turns a fragile personal skill into a dependable business capability.
