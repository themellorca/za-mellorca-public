---
hub: patterns
record_id: PAT-229
slug: why-reporting-problems-often-begin-with-data-capture
title: Why Reporting Problems Often Begin With Data Capture
description: Late, contested and hand-corrected reports are usually blamed on the report. The cause is more often how the data was typed in at the start. Here is how to find and fix it.
lead: Late, contested and hand-corrected reports are usually blamed on the report. The cause is more often how the data was typed in at the start. Here is how to find and fix it.
category: Data, Reporting & Decision Visibility
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Data, Reporting & Decision Visibility
pattern_family: Data, Reporting & Decision Visibility
observable_condition: Reports arrive late, totals disagree between teams, and an analyst spends days correcting duplicates, formats and missing values before each release.
primary_identification: Downstream correction of upstream capture: data is entered without shared definitions, validation or feedback, so errors are repaired in the report instead of prevented at entry.
commercial_value_dimensions: Decision quality, finance productivity, reporting speed, trust in management information and scalability
sources:
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - What is Microsoft Dataverse? - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
  - Model relationships in Power BI Desktop - Power BI | https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand
  - Pay As You Earn - South African Revenue Service | https://www.sars.gov.za/types-of-tax/pay-as-you-earn/
related:
  - When Nobody Knows Which Spreadsheet Is the Latest | /patterns/when-nobody-knows-which-spreadsheet-is-the-latest/
  - When Every Department Reports the Same Metric Differently | /patterns/when-every-department-reports-the-same-metric-differently/
  - Why the Same Problems Return After You Replace the System | /patterns/why-the-same-problems-return-after-you-replace-the-system/
summary: Late, contested and hand-corrected reports are usually blamed on the report. The cause is more often how the data was typed in at the start. Here is how to find and fix it.
layout: plain
---
## Observable condition

The monthly management pack is late again. When it arrives, the sales total does not match finance, the stock count differs from the warehouse, and one customer appears under three slightly different names. Before the pack goes to the directors, an analyst spends two days cleaning: merging duplicates, fixing dates that were typed as text, removing a product code with a trailing space, and asking branch staff what an entry of "see note" was supposed to mean.

The conversation that follows is predictable. The directors ask why the report is wrong. The finance team says the figures are what the systems contain. The IT person offers to rebuild the report with better formulas. A new version appears, which is slightly different, and the argument starts again the next month.

An illustrative example: a Pretoria-based building supplies group with eleven branches sends weekly sales and stock reports to head office. Each branch captures orders into a shared spreadsheet and a till system. Head office combines them. By Tuesday afternoon someone is always rekeying figures that did not import, and by Wednesday the numbers have been corrected three times by three people.

## Realisation

Reports are the visible end of a long chain. By the time a figure reaches a chart, it has been typed by a person, saved in a system, exported, combined and formatted. Most of the errors that make a report untrustworthy entered at the first step, when the data was captured, and nothing downstream could have known they were wrong.

That is why fixing the report does not fix the problem. The analyst's clean-up is real work, and it is repeated every period, but it treats a symptom. If branch staff can still type a customer name any way they like, enter dates in four formats, leave a mandatory field empty and choose between six similar product codes, the next report will need the same rescue. The effort moves to the end of the process, where it is most expensive and least visible.

**Realisation prompt:** the last time a report was wrong, how far back did you trace the error: to the report, to the system, or to the moment someone typed it in?

## Identification

This is a pattern of downstream correction of upstream capture. The visible symptom is a reporting problem: delay, disagreement or manual patching. The common assumption is that the report logic, the tool or the analyst is at fault. The structural cause is that data is captured without agreed definitions, without validation at the point of entry, and without any feedback to the people who enter it.

The published Pattern [when good processes keep failing because of the data fed into them](/patterns/when-good-processes-keep-failing-because-of-the-data-fed-into-them/) covers the same dependency from the process side, and the Insight [poor data is an operations problem, not just a data problem](/insights/poor-data-is-an-operations-problem-not-just-a-data-problem/) explains why ownership belongs with operations. This article concentrates on the moment of capture as the place where reporting quality is decided.

## Diagnosis

- **Free text where a choice is needed.** Customer names, product descriptions, branch names and reasons are typed instead of selected, so the same thing exists in many spellings.
- **No validation at entry.** Dates, amounts and codes can be entered in any format. Required fields can be left empty. A negative quantity or a future invoice date is accepted without comment.
- **Several capture points for the same fact.** A sale is recorded in the till, the spreadsheet and an email to head office, and the three versions drift apart.
- **Definitions are not shared.** Does "sale date" mean order date, invoice date or payment date? Each branch answers differently, so totals cannot be compared.
- **Errors are found far from their cause.** The person who entered the record never learns it caused a problem, because it surfaces three weeks later in a report they never see.

## Commercial impact

The commercial value at stake is decision quality, finance productivity, reporting speed and trust in management information. The direct cost is the clean-up: analyst and finance days each period spent making data usable. The Pattern [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/) describes how skilled people drift into this role.

The larger cost is hesitation. When directors know the numbers need adjusting, they delay decisions, ask for another version or rely on instinct. The Pattern [why teams spend more time preparing reports than using them](/patterns/why-teams-spend-more-time-preparing-reports-than-using-them/) shows how the balance tips away from analysis. Errors can also have an external cost. Employers submitting PAYE reconciliations to SARS, for example, are expected to submit accurate declarations, and the quality of what was captured about employees determines whether that submission is clean.

There is a growth cost as well. A group with eleven branches that patches data by hand will need to patch more when it opens a twelfth, and automated tools and AI assistants built on the data will inherit its flaws instead of correcting them.

## Common misidentification

The usual response is to improve the report: more formulas, a new dashboard, a better visual. Microsoft's documentation on Power Query shows what is possible at the end of the chain, with a data preparation engine that can clean and reshape data from sources before it is loaded. That is valuable, and it is better than doing the same clean-up by hand. But transformations that repair the same fault every period are a permanent tax, and they can mask the cause. Each time a rule is added to repair a new kind of error, another quiet dependency is created.

Another misidentification is to blame the people typing. Branch staff are working at a counter with a queue; the system either helps them get it right or it does not. Likewise, the data model can be misread as a guarantee. Microsoft's Power BI documentation notes that model relationships do not enforce data integrity, so a well-built model still reports whatever was captured, including unmatched or duplicated records. The Discovery page [why data quality problems are found after reports are published](/discovery/why-data-quality-problems-are-found-after-reports-are-published/) explores that lateness.

## Possibility

In a better state, the data is right when it enters. Customers and products are chosen from a maintained list rather than typed. Dates and amounts have fixed formats. Required fields cannot be skipped, and impossible values are rejected immediately with a clear message. Each fact is captured in one system and shared with others, not retyped. A short data dictionary states what each field means, so a sale date is the same everywhere.

Business application platforms support this directly. Microsoft's description of Dataverse lists logic and validation among its features: calculated columns, business rules and workflows that help ensure data quality, with role-based access to control who can see and change data. The same ideas can be implemented in the existing accounting, point-of-sale or CRM system by configuring mandatory fields, drop-down lists and duplicate checks.

For the building supplies group, the report would still be produced by head office, but the Tuesday rekeying would disappear because branch figures would arrive in one consistent structure.

## Intervention

1. **Trace one wrong number.** Pick the most disputed figure in the last pack and follow it back to the person and screen where it was first typed.
2. **List the repairs.** Record every manual correction made before the report is released. Each is a capture rule waiting to be written.
3. **Agree definitions.** Write down what each key field means and which system is the source for it. Keep it to one page.
4. **Replace typing with choosing.** Convert recurring free-text fields into lists, and set required fields and formats.
5. **Close the loop.** Show the people who capture data the errors they cause, quickly, with a simple weekly exceptions list.
6. **Retire repairs as they become unnecessary.** Once capture is fixed, remove the downstream corrections so the report no longer hides the cause. Where paper or double entry is involved, the Impact page on [paper forms captured twice](/impact/paper-forms-captured-twice-double-handling-cost/) shows what to remove first.

## Diagnostic questions

- How many manual corrections are made to the data before each report is released?
- Can a user type a customer or product name that does not exist in the master list?
- Do all branches use the same definition of the key figures?
- Who sees the errors, and how soon after they are made?

## Bottom line

Reporting problems usually look like report problems, but they begin when a person types a record into a system that lets them type anything. Better formulas and dashboards help only at the margin. Defining the fields, validating at entry, capturing each fact once and showing people their own errors fixes the cause, shortens the reporting cycle, and gives management numbers it can act on without a second opinion.
