---
hub: patterns
record_id: PAT-161
slug: why-finance-teams-keep-downloading-and-reformatting-data
title: Why Finance Teams Keep Downloading and Reformatting Data
description: When finance staff export the same reports every week and spend hours cleaning them before they can use them, the work is repeatable but is being repeated by hand. Here is how to change it.
lead: When finance staff export the same reports every week and spend hours cleaning them before they can use them, the work is repeatable but is being repeated by hand. Here is how to change it.
category: Finance & Cash Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Finance & Cash Operations
pattern_family: Finance & Cash Operations
observable_condition: Each week or month, finance staff export reports from several systems and spend hours fixing layouts, dates and names before they can combine and use the figures.
primary_identification: Manual data preparation: identical cleaning steps are performed by memory on new data each period instead of being captured once as a repeatable, refreshable process.
commercial_value_dimensions: Finance capacity, reporting timeliness, figure accuracy and key-person risk
sources:
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
related:
  - Why Accounts Receivable Becomes a Chasing Function | /patterns/why-the-debtors-clerk-spends-the-month-chasing-instead-of-collecting/
  - When every department reports the same metric differently | /patterns/when-every-department-reports-the-same-metric-differently/
  - Why Managers Keep Asking HR for the Same Reports | /patterns/why-managers-keep-asking-hr-for-the-same-reports/
summary: When finance staff export the same reports every week and spend hours cleaning them before they can use them, the work is repeatable but is being repeated by hand. Here is how to change it.
layout: plain
---
## Observable condition

Every Monday morning, the finance officer at an East London motor parts distributor exports three reports: debtors from the accounting system, sales by branch from the point-of-sale system and stock movements from the warehouse system. Each arrives in a different layout. Dates are formatted differently. Branch names are spelt differently. One system puts minus signs after the number.

She spends the morning deleting header rows, splitting columns, fixing dates and matching branch names so that the three reports can be combined into the weekly cash and margin pack. The pack goes to the owner by Monday afternoon. On Tuesday she starts on the debtors follow-up, which is the work she was employed to do.

She has done this every Monday for three years. The steps are identical each week.

## Realisation

The realisation is that the reformatting is not analysis. It is the same mechanical sequence applied to new data, and it produces nothing that the business could not have produced automatically. The finance officer's skill is being spent on making columns line up.

The data is already in the business's systems. The problem is that each system speaks a slightly different dialect, and the translation between them is done by hand.

**Realisation prompt:** list every report your finance team exports and reformats each week or month. For each, how many minutes go into cleaning before anyone looks at the numbers?

## Identification

This is a pattern of manual data preparation. The visible symptom is finance staff spending hours in spreadsheets before reports are ready. The common assumption is that this is the normal price of having several systems. The structural cause is that the cleaning steps have never been captured as a repeatable process, so they are performed by memory each time.

It overlaps with [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/), which looks at finance correcting errors made elsewhere. This pattern is narrower: the routine downloading and reshaping of data that is correct but not in a usable form.

## Diagnosis

- **Exports instead of connections.** Data leaves each system as a file rather than being read directly by the reporting tool.
- **Inconsistent reference data.** Branch, customer and product names differ between systems, so matching is manual.
- **Cleaning steps are undocumented.** The sequence lives in one person's head. If she is away, the pack is late or wrong.
- **No refresh.** Each week's pack is built from scratch rather than refreshed from the previous one.
- **Errors creep in.** A step missed once, such as a filter left on, quietly changes a total.

## Commercial impact

The commercial value at stake is finance capacity, reporting timeliness, accuracy and key-person risk.

Capacity is the clearest cost. Half a day a week is roughly a tenth of a finance officer's time, spent on work that adds no judgement. In a small finance team, that is time not spent on collections, supplier queries or cash planning.

Timeliness matters. Because the pack takes a morning to build, it reflects last week, not today. Decisions about stock orders or credit limits are made on older figures than necessary.

Accuracy is at risk. Manual steps repeated weekly will eventually be done wrongly. A mistake in a branch mapping can make one branch look profitable and another unprofitable for months.

Key-person risk is significant. When the person who knows the steps is on leave, the pack is either not produced or produced by someone guessing. The Moment [the late night spent reconciling two spreadsheets](/moments/the-late-night-spent-reconciling-two-spreadsheets/) captures what that looks like at month end.

## Common misidentification

One misreading is that the business needs one system to replace the three. That may come eventually, but it is a large project, and the reformatting can usually be removed long before.

Another is to ask finance to work faster or to hire a junior to do the formatting. That moves the work without removing it.

A third is to accept the work as part of finance. Finance should check and interpret figures, not reshape files.

## Possibility

The possibility is a weekly pack that refreshes itself. Each system's data is connected to the reporting workbook or tool. The cleaning steps, removing headers, fixing dates, mapping branch names, are recorded once and applied automatically every time. On Monday morning the finance officer opens the pack, checks that the totals reconcile and spends her time on what the numbers mean.

[Microsoft's explanation of Power Query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) describes exactly this: transformation steps saved as a repeatable query that can be refreshed to get up-to-date data, instead of one-off shaping. Power Query is available in Excel, so many businesses already own the tool. In Power BI, [scheduled data refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) can update the report before anyone arrives at work.

That connects with [why finance reconciles information that systems already hold](/patterns/why-finance-reconciles-information-that-systems-already-hold/) and reduces the labour described in [the cost of a manual month-end close](/impact/manual-month-end-close-payroll-cost/).

## Intervention

Begin by writing down the cleaning steps for one report, exactly as they are done today. This document is useful even if nothing else changes, because it removes key-person risk.

Create a single mapping table for reference data such as branch, customer group and product category, so that names from each system translate to one standard version.

Then rebuild one report using a repeatable query. Point it at the exported file in a fixed folder to start with; later, connect it directly to the source system where possible. Run the old and new versions side by side for a month to confirm they match.

Once the first report works, repeat for the next. Most finance teams find that three or four queries remove most of the weekly reformatting.

## Practical next actions

1. List every report finance exports and reformats regularly, with the time each takes.
2. Document the cleaning steps for the most time-consuming report exactly as performed today.
3. Build one mapping table that translates branch, product and customer names between systems.
4. Rebuild that report as a refreshable query and run it alongside the manual version for a month.
5. Save exports to a fixed folder with fixed file names so the query can find them each week.
6. Move to the next report only once the first produces matching results without manual edits.

## Diagnostic questions

- How many hours a month does finance spend reshaping data before using it?
- Could anyone else produce the weekly pack if the usual person were away?
- When did a reformatting error last change a reported figure?
- Are we using tools we already own to make data preparation repeatable?

## Bottom line

When finance staff download and reformat the same data every week, the business is paying skilled people to repeat a mechanical task. Write down the steps, standardise the reference data and turn the cleaning into a refreshable query. Finance gets its time back for judgement, and reports arrive sooner and more reliably.
