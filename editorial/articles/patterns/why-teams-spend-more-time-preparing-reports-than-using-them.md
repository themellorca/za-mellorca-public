---
hub: patterns
record_id: PAT-056
slug: why-teams-spend-more-time-preparing-reports-than-using-them
title: Why Teams Spend More Time Preparing Reports Than Using Them
description: When the monthly pack takes days to build and minutes to use, the business is investing in assembling information rather than acting on it. Here is why that happens and how to rebalance it.
lead: When the monthly pack takes days to build and minutes to use, the business is investing in assembling information rather than acting on it. Here is why that happens and how to rebalance it.
category: Reporting & Operational Visibility
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Reporting & Operational Visibility
pattern_family: Reporting & Operational Visibility
observable_condition: Skilled staff spend days each cycle assembling a management report that is used for a short discussion, with many sections rarely read.
primary_identification: Reporting-effort imbalance: reporting is designed as manual production rather than as a by-product of systems tied to specific decisions.
commercial_value_dimensions: Management capacity, decision speed, labour and risk
sources:
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
related:
  - When Operational Problems Are Discovered in the Monthly Meeting | /patterns/when-operational-problems-are-discovered-in-the-monthly-meeting/
  - Why Decision-Makers Keep Asking for Status Updates | /patterns/why-decision-makers-keep-asking-for-status-updates/
  - Why Does Management Find Out Too Late? | /patterns/why-management-finds-out-too-late/
summary: When the monthly pack takes days to build and minutes to use, the business is investing in assembling information rather than acting on it. Here is why that happens and how to rebalance it.
layout: plain
---
## Observable condition

Every month, a capable person in finance or operations spends the better part of three or four days producing the management pack. They export figures from several systems, paste them into a workbook, fix the customer names that do not match, adjust for the credit notes that were captured late, rebuild the charts and check the totals twice. The pack goes out on time, and it is thorough.

Then it is used for perhaps forty minutes. In the management meeting, people flip to the page they care about, ask a question or two, and move on. Several sections are never discussed. Nobody can say for certain who reads the appendix. Next month, the same days of preparation begin again.

Nobody thinks this is unusual. Producing the report is seen as part of the job, and the time it takes is rarely recorded anywhere.

## Realisation

The realisation is a simple comparison. If a report takes thirty hours to prepare and contributes to an hour of discussion and a handful of decisions, the business is investing far more in assembling information than in using it. The ratio is upside down.

That matters for two reasons. First, the preparation time is skilled capacity: the people who build reports are usually the ones who understand the numbers best, and they could be analysing them instead of assembling them. Second, when preparation dominates, the report tends to arrive late, and its readers have less time to think about it before the meeting. The effort intended to support decisions crowds out the decisions.

**Realisation prompt:** for your main management report, how many hours go into building it, and how many minutes go into deciding something because of it?

## Identification

This is a reporting-effort imbalance. The visible symptom is a heavy, recurring preparation cycle. The structural issue is that reporting has been designed as a manual production task rather than as a by-product of the systems and as a tool for specific decisions.

It overlaps with the lateness problem described in [when the weekly report is already out of date](/patterns/when-the-weekly-report-is-already-out-of-date/), but the emphasis here is different. A report can arrive on time and still be poor value if most of the effort goes into making it rather than using it.

## Diagnosis

Several causes usually sit together.

- **Manual assembly.** Data is extracted and shaped by hand each cycle. Microsoft's Power Query documentation names the underlying problem directly: data often needs reshaping before use, and when that shaping is one-off it is not repeatable. Its answer is to define the steps once as a query that can be refreshed. Many businesses already own tools that can do this but still rebuild by hand.
- **Reconciliation at the end, not the source.** Mismatched customer names, late credit notes and inconsistent product codes are corrected during report preparation every cycle, instead of being prevented where the data is captured.
- **Report accretion.** Sections are added when someone asks a question and are rarely removed when the question goes away. The pack grows; its use does not.
- **No link to decisions.** Few reports state which decisions they support. Without that, there is no way to judge whether a section earns its preparation time.
- **Preparation is invisible.** The hours are absorbed by salaried staff and never appear as a cost, so there is no pressure to reduce them.

Google's site reliability engineering guidance offers a helpful test for this kind of work. It describes toil as manual, repetitive and automatable work with no enduring value, where the service remains in the same state once the task is done. A monthly rebuild of the same report from the same sources fits that description closely.

## An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A Durban-based manufacturer of packaging with around ninety staff produces a forty-page monthly pack. The financial controller and an assistant spend most of the first week of each month on it. When the managing director is asked which pages drive decisions, the answer is four: cash, debtors, production yield and order book. A short review finds that the remaining pages were added over several years in response to one-off questions. Most of the preparation effort goes into pages that are skimmed or skipped.

## Commercial impact

The commercial value at stake is management capacity, decision speed, labour and risk. The direct cost is the recurring time of skilled people. The indirect cost is that the business's most numerate staff spend their time on assembly instead of analysis, so problems that a careful look at the numbers would reveal are found later or not at all.

There is also risk in manual preparation itself. Every hand-copied figure and hand-adjusted total is a place where an error can enter, and errors in management information lead to decisions made on the wrong basis. The labour side of this is explored in [the cost of rebuilding recurring reports by hand](/impact/rebuilding-recurring-reports-by-hand-labour-cost/). Any estimate of the cost should be based on the hours actually recorded, not assumed.

## Common misidentification

The usual response is to buy a reporting or dashboard tool. That can help, but only if the underlying preparation is automated and the content is cut down to what is used. A new tool on top of the same manual extraction simply moves the work. As argued in [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/), display is rarely the bottleneck.

The other misreading is to see the problem as the preparer's efficiency. Asking the same person to work faster on the same manual process does not change the ratio; it just compresses it.

## Possibility

In a better state, the report is shorter, built from refreshable connections to the source systems, and organised around the few decisions it exists to support. Data corrections are made where data is captured, so the report does not have to repair them every cycle. Preparation shrinks from days to a review of exceptions and a short written commentary.

The people who used to assemble the report now spend that time interpreting it: explaining movements, testing assumptions and raising questions before the meeting. Microsoft's Power BI documentation describes scheduled refresh that imports data from the original sources several times a day; even a modest version of that idea, applied to a workbook, removes much of the monthly rebuild.

## Intervention

1. **Measure both sides.** Record the hours spent preparing the main report for one cycle, and note which sections are discussed or used to decide something.
2. **Link each section to a decision.** For every page, write down the decision it supports and who makes it. Remove or archive what has none.
3. **Automate extraction and shaping.** Replace manual exports with refreshable queries or scheduled connections to the source systems.
4. **Fix data at the source.** Take the recurring corrections made during preparation and address them where the data is captured.
5. **Shift preparer time to analysis.** Agree that the time saved goes into commentary and exception review, not into new sections.
6. **Review annually.** Prune the report each year so that accretion does not return.

## Diagnostic questions

- How many hours does your main management report take to prepare each cycle?
- Which sections led to a decision in the last three meetings?
- Which corrections are made by hand every time the report is built?
- Could the person who prepares the report explain the numbers if they had more time?
- When was a section last removed from the report?

A report is only valuable at the moment someone uses it. When preparation consumes most of the effort, the business is paying for information it barely has time to act on, and the fix starts with asking what each page is for.
