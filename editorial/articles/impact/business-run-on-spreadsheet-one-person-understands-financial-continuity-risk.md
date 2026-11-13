---
hub: impact
record_id: CPS-105
slug: business-run-on-spreadsheet-one-person-understands-financial-continuity-risk
title: The spreadsheet only one person understands: Financial and continuity risk
description: When pricing, payroll or cash planning rests on a workbook only one person can explain, errors go unseen and every absence becomes a business risk.
lead: When pricing, payroll or cash planning depends on a workbook that only one employee can explain, errors go unseen and every absence or resignation becomes a business risk.
category: Risk and Continuity
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Risk and Continuity
commercial_domain: Risk and Continuity
primary_pain: Business run from spreadsheets that only one person understands
primary_cost_mechanism: Undetected formula errors, key-person maintenance burden, disruption during absence and costly rebuild if the author leaves
sources:
  - Horror Stories - European Spreadsheet Risk Interest Group | https://eusprig.org/research-info/horror-stories/
  - Research and Information - European Spreadsheet Risk Interest Group | https://eusprig.org/research-info/
  - Office Scripts in Excel - Office Scripts | https://learn.microsoft.com/en-us/office/dev/scripts/overview/excel
related:
  - How much data could you lose? The cost of an undefined recovery point | /impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/
  - When one employee knows how everything works | /impact/key-person-operational-dependency/
  - When every decision waits for one person: The cost of a decision bottleneck | /impact/work-stalls-when-decision-maker-unavailable-cost/
  - Why spreadsheet flexibility eventually becomes operational fragility | /patterns/why-the-flexibility-that-made-a-spreadsheet-useful-makes-it-risky-later/
summary: When pricing, payroll or cash planning depends on a workbook that only one employee can explain, errors go unseen and every absence or resignation becomes a business risk.
layout: plain
---
## The tolerated pain

Every few months the owner of a Pretoria building-supplies firm asks the same question: "Can you send me the pricing sheet?" The sheet is a single workbook with eleven tabs, colour-coded cells, a few macros and a set of formulas that pull supplier costs into customer quotes. It was built six years ago by Johan, the first employee in the office, and it has been growing ever since. It works. Quotes go out, margins look sensible and the business has grown on the back of it.

Only Johan knows why column M multiplies by 1.075 on some rows and not others. Only Johan knows which cells must never be touched and in what order the tabs are updated on the first of the month. When he takes leave, the quotes slow down. When he is ill, they are done "carefully", which means with fear.

This article is about that situation: a business whose daily decisions, pricing, payroll, stock or cash planning rest on spreadsheets that one person understands. It looks at the financial cost and the continuity risk, and at what a sensible response looks like without throwing away something that works. A related problem, where the spreadsheet is used as the data store for forms and workflows, is covered in [spreadsheets used as forms and databases](/impact/spreadsheet-as-form-database-workflow-errors-maintenance-cost/). Here the focus is on knowledge concentrated in one head.

## How a spreadsheet becomes a single point of failure

Nobody sets out to build critical infrastructure in a workbook. It starts as a quick calculation for a specific problem. It works, so it gets reused. Someone adds a tab, then a lookup, then a macro, then a link to another file. Over time the workbook turns from a note into a system, but nobody changes how it is documented, tested or protected.

- **It grows by accretion.** Each change makes sense on its own, and nothing is ever removed.
- **Logic hides inside cells.** Rules live in formulas, not in a document anyone can read. Hard-coded numbers sit beside live ones.
- **The creator is also the only reviewer.** No second person checks the formulas, so errors are found only when the result looks wrong.
- **There is no handover.** The author is too busy running the business with the file to write down how it works.
- **Success discourages change.** Because the sheet has produced answers for years, questioning it feels risky.

The European Spreadsheet Risks Interest Group (EuSpRIG) has collected real-world examples on its [spreadsheet horror stories](https://eusprig.org/research-info/horror-stories/) page, describing cases in which errors in spreadsheets led to financial loss or embarrassment. Its wider [research and information](https://eusprig.org/research-info/) pages gather work on how errors arise and why they go undetected. The recurring theme is not carelessness. It is that spreadsheets are easy to build and hard to audit, especially when a single author owns them.

## Operational symptoms

- a workbook whose name includes words like "final", "new" or "v7", with several copies in circulation;
- colleagues who send questions to one person and wait for the answer;
- people afraid to open or edit the file in case something breaks;
- manual steps that must be done in a particular order, remembered rather than written;
- outputs, such as quotes or payroll figures, that nobody can independently reproduce;
- macros or links to files on one person's laptop;
- a business that "cannot" take on a certain type of job because the sheet cannot handle it.

## How the pain becomes money

- **Undetected formula errors:** a wrong range, a hard-coded number or a lookup that fails silently can under-price quotes or miscalculate commission for months before anyone notices.
- **Key-person premium:** the person who understands the sheet becomes harder to replace, harder to manage and harder to refuse. Their time is spent on maintenance rather than on higher-value work, as discussed in [automation understood by one employee](/impact/automation-understood-by-one-employee-continuity-maintenance-cost/).
- **Continuity cost:** if the person is absent, the business either stops, estimates or uses a cruder method. All three cost money.
- **Rebuild cost:** if the author leaves, the business pays someone else to reverse-engineer the logic, which is almost always slower and more expensive than documenting it while the author is present.
- **Data-protection exposure:** sheets containing employee or customer details emailed between people create POPIA risks, covered in [salespeople's personal spreadsheets and customer records](/impact/salespeople-personal-spreadsheets-customer-records-cost/).
- **Opportunity cost:** the business avoids changes to prices, products or staffing because it is afraid of what will happen to the sheet.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Pretoria building-supplies business quoting about 90 jobs a month.

| Assumption | Value |
| --- | --- |
| Average quote value | R45,000 |
| Quotes affected by a hidden formula flaw | 4% of quotes |
| Margin lost on each affected quote | 3% of value |
| Quotes per year | 1,080 |
| Key person's hours a month spent on maintenance and answering questions | 20 hours at R300 |
| Days of delayed or estimated quoting per year when the key person is away | 10 days |
| Estimated margin lost to delay or estimating per such day | R6,000 |

- Flawed quotes: 1,080 × 4% × R45,000 × 3% = about R58,300
- Maintenance time: 20 × R300 × 12 = R72,000
- Absence disruption: 10 × R6,000 = R60,000
- **Illustrative total: about R190,000 a year**

This excludes the large, low-probability event: the day the key person resigns without notice, or the file is corrupted or deleted. If the business then needed six weeks to rebuild its pricing logic, the cost would be a multiple of the annual figure above. The business cannot calculate that risk precisely, but it can decide whether it is comfortable carrying it.

## Why the pain is tolerated

The spreadsheet works, and the person who built it is loyal and capable. Asking for documentation can feel like questioning their competence or signalling that they are about to be replaced. The owner may not understand the workbook well enough to ask the right questions. The risk is also invisible: a business can run for years on a fragile file without any incident, and that record becomes a reason for complacency. The broader pattern is explored in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/).

## When it becomes commercially urgent

- the key person gives notice, falls ill or goes on extended leave;
- an error is found and nobody can say how long it has existed;
- a lender, auditor or buyer asks how a key figure is calculated;
- growth makes the workbook slow, large or prone to crashing;
- the owner wants to change a pricing rule and is told "it will break everything".

## What better looks like

The aim is not to ban spreadsheets. They are a useful tool, as discussed in [when a spreadsheet is a useful tool and when it becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/). The aim is to remove the dependence on one person's memory.

1. **List the spreadsheets that drive money.** Quotes, payroll, commission, cash forecasts, stock and budgets. Rank them by what goes wrong if the sheet is wrong or unavailable.
2. **Document the logic.** Ask the author to write one page per workbook: what it does, the inputs, the order of steps and the known traps. Do this while they are available and willing.
3. **Add a second pair of eyes.** Have another person walk through the formulas and reproduce three results by hand.
4. **Separate inputs, calculations and outputs.** Put assumptions such as tax rates and markups in one clearly labelled place, not buried in formulas.
5. **Protect and back up.** Store the file in a shared, versioned location with controlled access rather than on one laptop or in email attachments.
6. **Decide what should graduate.** If a sheet has become core infrastructure, consider moving the logic into a managed system. See [what happens when the only person who understands the system leaves](/insights/what-happens-when-the-only-person-who-understands-the-system-leaves/) for what the alternative looks like.

Where the task is repetitive and rule-based, Microsoft's [Office Scripts in Excel overview](https://learn.microsoft.com/en-us/office/dev/scripts/overview/excel) describes recording and automating actions in a workbook, which can replace some remembered manual steps with documented, repeatable ones. Treat any automation as new logic that also needs an owner and a description.

## Practical next actions

1. Ask each department which workbook they would struggle most to work without.
2. For the top three, name who understands them and who could take over.
3. Book two hours with the author to record how the file works.
4. Ask a second person to rebuild one result from the raw inputs and compare.
5. Move the master copies into one controlled shared location.
6. Set a review date to decide which workbooks should be redesigned or replaced.

## Bottom line

A spreadsheet that only one person understands is not a technology problem. It is a business-continuity problem that happens to live in Excel. The cost is paid in quiet formula errors, in the premium and pressure on the key person, and in the disruption whenever they are away. Writing down the logic, getting a second reviewer and storing the file properly are inexpensive steps that turn a fragile personal tool back into a business asset.
