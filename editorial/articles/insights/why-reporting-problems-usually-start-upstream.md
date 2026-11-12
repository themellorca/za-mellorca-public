---
hub: insights
record_id: INS-257
slug: why-reporting-problems-usually-start-upstream
title: Why Reporting Problems Usually Start Upstream
description: When a report is wrong, the report is rarely the cause. Trace the number back to where the data was captured, and fix the entry points, identifiers and definitions that feed it.
lead: When a report is wrong, the report is rarely the cause. Trace the number back to where the data was captured, and fix the entry points, identifiers and definitions that feed it.
category: Reporting and Data
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Reporting and Data
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Understand star schema and the importance for Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/star-schema
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
related:
  - Why Fixing Symptoms Without Mapping the System Rarely Works | /insights/why-fixing-symptoms-without-mapping-the-system-rarely-works/
  - What Your Recurring Problems Are Telling You About Your Systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
  - How to Find Technology Costs Hidden Across Departments | /insights/how-to-find-technology-costs-hidden-across-departments/
summary: When a report is wrong, the report is rarely the cause. Trace the number back to where the data was captured, and fix the entry points, identifiers and definitions that feed it.
layout: plain
---
A finance manager at a Midrand wholesaler spends the first three working days of every month rebuilding the sales report. She re-types product names that differ between the order system and the accounting package, deletes duplicate customers and adjusts regions by hand. The report is then challenged in the management meeting because the sales director's own number is different. Everyone agrees the reporting is a problem. The fixes proposed are a better dashboard tool and a new template.

Neither will help much. In most businesses, a report is the last place a problem shows up, not the place it starts. The fault was introduced when an order was captured, a customer was created or a product was renamed. This article explains why reporting problems usually begin upstream, how to trace one to its origin, and what to change so the report stops needing repair.

## A report is a mirror, not a machine

A report does not create facts. It collects records made by other processes, groups them and presents totals. If the records are inconsistent, the report faithfully reproduces the inconsistency. When two reports show different revenue for March, the cause is almost never arithmetic. It is usually that the two used different definitions, different cut-off dates or different copies of the customer list.

The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) makes a point that applies well beyond the public sector: quality problems are often treated at the symptom and not the cause, which wastes effort. Fixing the report is treating the symptom. A hand-corrected spreadsheet looks right this month and wrong again next month because the cause is still running.

## Five upstream causes that surface as report problems

Most reporting complaints trace back to one of five origins.

1. **Free-text entry.** If staff can type any region, product or customer name, the same thing will appear in several spellings, and totals will be split across them.
2. **Duplicate master records.** Two customer accounts for one customer mean revenue is divided and credit exposure is understated. See [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/).
3. **Conflicting definitions.** Sales counts an order when the customer agrees, finance when the invoice is issued, operations when the goods ship. Each is right for its purpose and none matches.
4. **Timing differences.** One system updates overnight, another instantly, a third when someone remembers to export. The reports are fine; they simply describe different moments.
5. **Unclear ownership.** Nobody is responsible for the product list, so nobody notices when a code is retired but still used.

The mismatch between numbers is covered from the reader's side in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/). The point here is the direction of repair: go back along the path the data took, not forward into the report.

## How to trace one number back to its origin

Pick a single figure that someone distrusts, for example March revenue for the Western Cape. Then work backwards in four steps.

- **Find the report's recipe.** Write down exactly how the figure is built: which system it comes from, which filters apply, which manual adjustments are made. If the recipe lives only in one person's head, that discovery is itself a finding.
- **Take five individual records.** Choose five orders that make up the total and follow each from capture to report. Note every system it passes through and every point where a person touches it.
- **Mark where it changes.** At each stage, compare the record with the one before. Any difference, whether a renamed product, a changed date or a dropped line, is a place where the data is being altered or lost.
- **Ask why the change is needed.** Each hand adjustment exists because something upstream is wrong. List those reasons. They become your repair list.

Five records is enough to expose the main patterns. You are not auditing everything; you are looking for the repeated cause. A single typing error can travel a long way before it surfaces, as shown in [how one typing error becomes a disputed invoice and a wrong report](/insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/).

## Design reports around clean building blocks

Once the upstream causes are known, the report itself can be made simpler. Microsoft's guidance on [star schema design for Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) offers a useful mental model, even if you never use that tool. It splits data into two kinds of table. Dimension tables describe business entities such as products, people and places, each with a unique key. Fact tables store observations or events such as sales orders and stock balances, and carry the keys that link them to the entities. The guidance recommends preparing source data properly first, and where the volume or complexity is high, building a warehouse with a regular load process before reporting on top of it.

The practical lesson for a smaller business is this. Give every product, customer and region one agreed record with one identifier, and make every transaction point to those identifiers instead of repeating names. When the report joins on identifiers, the spelling no longer matters, and a rename happens once, in one place. The question of which system should hold each of those master lists is addressed in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Agree definitions before you build

A shared dataset still produces disputes if the definitions differ. For the five or six figures management uses most, write a one-line definition and name an owner. For example: "Revenue is the invoiced amount excluding VAT, recognised on the invoice date, owned by the financial manager." Publish it next to the report. When a number is challenged, the conversation moves from whose figure is right to whether the definition should change, which is a far more productive meeting.

## Retire the monthly rebuild

Once the entry points are controlled, the definitions agreed and the identifiers shared, the monthly manual assembly can be replaced by a repeatable refresh. This is not about buying more reporting software. It is about removing the reasons for the hand adjustments, one at a time, until the report simply reads what the systems already agree on. The wider approach is described in [how to replace the monthly spreadsheet assembly behind management reports](/insights/how-to-replace-the-monthly-spreadsheet-assembly-behind-management-reports/). Measure progress with a simple count: the number of manual adjustments made to the report each month. It should fall steadily, and when it reaches zero the report has been fixed at its source.

## Practical next actions

1. Choose one figure in a regular management report that people distrust and write down its recipe, including every manual adjustment.
2. Follow five individual records from the moment they were captured to the final report and note every point where they change.
3. For each manual adjustment, name the upstream cause and the person who could remove it.
4. Assign one identifier to every product, customer and region, and stop typing names into transaction records.
5. Write a one-line definition and an owner for your five most-used figures, and publish them beside the report.
6. Count the manual adjustments each month and aim to bring that number to zero.
