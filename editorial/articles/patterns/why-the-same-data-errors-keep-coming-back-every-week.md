---
hub: patterns
record_id: PAT-232
slug: why-the-same-data-errors-keep-coming-back-every-week
title: When Teams Correct the Same Data Errors Repeatedly
description: A fix repeated every Monday is a hidden standing process. This pattern shows how recurring corrections signal an upstream fault and how to stop it at the source.
lead: A fix repeated every Monday is a hidden standing process. This pattern shows how recurring corrections signal an upstream fault and how to stop it at the source.
category: Data, Reporting & Management Visibility
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Data, Reporting & Management Visibility
pattern_family: data-quality
observable_condition: The same cleaning steps applied to exports and reports every week, private cleaning workbooks, and reports that are not trusted until checked
primary_identification: Readers can list the corrections their teams make before trusting a file and see which recur
commercial_value_dimensions: Staff time spent on repeat fixes, errors that slip through, report trust and accuracy of personal information
sources:
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - Power BI usage scenarios: Self-service data preparation (legacy) - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-usage-scenario-self-service-data-preparation
related:
  - The Cost of Manual Consolidation Across Workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
  - When a Formula Error Can Change a Business Decision | /patterns/when-one-wrong-formula-changes-a-price-a-forecast-or-a-payment/
  - The Pattern Behind Conflicting Management Reports | /patterns/why-two-correct-management-reports-still-contradict-each-other/
summary: A fix repeated every Monday is a hidden standing process. This pattern shows how recurring corrections signal an upstream fault and how to stop it at the source.
layout: plain
---
## Observable condition

Every Monday, a debtors clerk at a Pietermaritzburg building-supplies company opens the customer export and fixes the same things. Some account names have trailing spaces. Some VAT numbers are missing a digit. A handful of delivery addresses have the suburb in the province field. She corrects them by hand, sends the cleaned file to the credit controller, and the following Monday the same kinds of error are back.

In the same business, the warehouse retypes product codes that arrive from suppliers in a different format, and the finance manager rounds the same currency column before every month-end pack. Each of these people is competent and diligent. Each has a private routine for tidying what arrives. None of the routines is written down, and none of them stops the errors from arriving.

This is an illustrative example, but the condition is common wherever data passes from one person or system to another: the correction happens at the end, and the cause stays where it started.

## Realisation

The realisation is that a correction repeated every week is not a correction. It is a standing process, with real cost, that the business has never named. Fixing the same fault again and again feels like diligence, yet it is evidence that the fault is being generated upstream by a form, an import, a supplier format or a habit, and that nobody has gone to look.

It also matters that the people doing the fixing are usually the people least able to stop the cause. The clerk can repair the file, but she cannot change how the sales team captures a new account. As a result the effort stays local, and the pattern remains invisible to the people who could address it.

**Realisation prompt:** ask each team which fixes they make before they trust a report or a file. The ones that come up in every conversation are the repeating errors.

## Identification

This is a pattern of recurrent correction. The visible symptoms are cleaning steps at the start of every report, a "do not use until checked" attitude towards certain exports, and one or two people regarded as the only ones who know how to make the numbers come right. The common assumption is that the data is simply messy or that staff are careless. The structural cause is that the point where data enters the business accepts values it should reject, and nothing records which errors keep occurring.

The related Pattern [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/) describes how this lands on one function. This Pattern looks at the loop itself: the same error, found and fixed repeatedly, without the cause ever being traced.

## Diagnosis

- **Entry is unconstrained.** A free-text field accepts anything. If a phone number, VAT number or province can be typed in any shape, it will be, and the variation is the source of the cleaning work.
- **Cleaning lives in someone's spreadsheet.** The fix is a set of find-and-replace steps in a personal workbook. It works, but it cannot be inspected, tested or shared, and it leaves with the person.
- **The source never hears about it.** The team that corrects the error does not tell the team that produced it, often because the two do not meet. The fault travels downstream with a new batch every week.
- **Corrected data stays corrected only in the copy.** The clerk repairs her export, but the original record in the source system is untouched. The next export reproduces the same fault.
- **There is no count.** Nobody knows how many errors there are, which kinds recur, or how long the fixing takes, so the cost cannot be compared with the cost of fixing the cause.
- **Tools exist but are not applied.** Microsoft describes [Power Query as a way to connect to data, reshape it and save the transformation steps as a repeatable query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) that can be refreshed. Used well, that turns a weekly manual fix into a recorded step. Used as a one-off tidy-up, it changes nothing about where the error began.

## Commercial impact

The commercial value at stake is staff time, report reliability, customer experience and the cost of decisions made on data that was only partly cleaned.

The most direct cost is the time itself. A clerk who spends two hours every Monday on the same corrections has spent over a hundred hours in a year on a task that creates nothing new. Spread across several teams, the sum is a noticeable fraction of a salary, which is why the Insight on [calculating the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) is a useful starting point for putting a figure on it.

The second cost is the error that gets through. A person fixes ninety-five of a hundred faults and misses five. Those five turn up as an invoice sent to the wrong address, a statement addressed to a closed account, or a customer counted twice. The Insight on [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/) describes one of the most common ways these slip through.

The third cost is legal as well as operational. South Africa's Protection of Personal Information Act, published on the [South African Government site](https://www.gov.za/documents/protection-personal-information-act), includes a requirement that a responsible party take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. A business that corrects its customer data only in downstream copies is not meeting that expectation in the place where it matters, which is the record itself.

The fourth cost is trust. When people know that a report needs cleaning first, they stop believing figures they have not personally checked, and decisions slow down while each person re-verifies what they were handed.

## Common misidentification

The usual response is to remind staff to capture data carefully. That targets the people at the end of the chain and ignores the form that allowed the mistake. A second response is a one-time data clean-up project. It produces a clean file on the day and the same dirt a month later, because the entry point is unchanged. A third is to hire a data capturer to do the fixing, which turns a defect into a job.

## Possibility

In a better state, the business knows its three or four most frequent errors by name and has decided where each should be stopped. Entry forms refuse impossible values and offer lists where a free choice is not needed. Corrections are made in the source record and logged, so they only need to be made once. Where a transformation is genuinely required, such as converting a supplier's file format, it is written as a visible, repeatable step rather than a private routine. The team that produces the error is told about it in a regular, brief way.

The Discovery note on [why data quality problems are found after reports are published](/discovery/why-data-quality-problems-are-found-after-reports-are-published/) shows the other side of the same issue: the later an error is found, the more places it has already travelled.

## Intervention

Begin by keeping a tally for two weeks. Each time someone corrects data, they note what was wrong, where it came from and how long it took. The result is a short ranked list of repeating faults. Take the top one, trace it to its entry point and change the entry point first. Move any cleaning steps out of personal files into a shared, documented place. Microsoft's Power BI planning guidance describes [moving data preparation out of individual files so the logic is centralised](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-usage-scenario-self-service-data-preparation), which reduces the effort for everyone who uses it. Then agree who tells the source team when a fault recurs.

## Practical next actions

1. Ask each team to list the corrections they make before using a report or file, and collect the answers on one page.
2. Keep a two-week tally of every correction, with the type of error, its origin and the minutes spent.
3. Pick the single most frequent error and trace it back to the form, import or supplier file where it first appears.
4. Add a simple rule at that entry point, such as a required format, a drop-down list or a check digit, and measure whether the error stops.
5. Move any personal cleaning workbook into a shared location with a short note on what each step does and who owns it.
6. Agree a monthly ten-minute review where the team that corrects data reports the top three recurring faults to the team that produces them.

## Article summary

When teams correct the same data errors again and again, the business is paying for a standing process it never chose and cannot see. The commercial implication is lost time, errors that slip through and reports that nobody fully trusts. The remedy is to count the repeating faults, trace the commonest to its entry point and stop it there, so the correction is made once instead of every week.
