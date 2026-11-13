---
hub: impact
record_id: CPS-106
slug: manually-combining-spreadsheets-before-management-sees-performance-labour-delay-cost
title: Stitching spreadsheets together: The labour and delay behind management reports
description: When performance is visible only after someone merges a dozen spreadsheets by hand, you pay in skilled hours, late decisions and copy-and-paste errors.
lead: When performance can only be seen after someone merges a dozen spreadsheets by hand, the business pays in skilled hours, late decisions and the risk of copy-and-paste errors.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Manually combining spreadsheets before management can see performance
primary_cost_mechanism: Skilled labour hours each reporting cycle, delayed visibility that postpones decisions, error risk from copy and paste and key-person dependency
sources:
  - Horror Stories - European Spreadsheet Risk Interest Group | https://eusprig.org/research-info/horror-stories/
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - Combine files overview - Power Query | https://learn.microsoft.com/en-us/power-query/combine-files-overview
related:
  - Waiting weeks for management reports: What late visibility costs the business | /impact/waiting-weeks-for-management-reports-late-visibility-cost/
  - The labour cost hidden behind software that needs constant workarounds | /impact/software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee/
  - Re-keying orders after the sale: The labour and fulfilment cost of disconnected systems | /impact/orders-rekeyed-after-sale-fulfilment-risk-cost/
summary: When performance can only be seen after someone merges a dozen spreadsheets by hand, the business pays in skilled hours, late decisions and the risk of copy-and-paste errors.
layout: plain
---
## Friday afternoon, nine tabs open

The financial manager of a regional building-supplies group has a routine. On the second working day of every month she collects a spreadsheet from each branch: sales by product line, debtors, stock on hand and expenses. They arrive in slightly different layouts. One branch has renamed a column. Another sends figures with a thousands separator that the formulas do not recognise. She copies each into a master workbook, fixes the formats, reconciles the totals against the accounting system and eventually produces a summary page for the directors. On a good month it takes a day and a half. On a bad month the directors see performance numbers around the tenth.

Nothing in this process is unusual, and nobody in it is incompetent. But the business pays a recurring price for it: hours of skilled time, delayed decisions and a standing risk that one pasted cell is wrong. This article looks at that price and at how to reduce it without buying a large reporting platform.

For the broader pattern of reports rebuilt on a schedule, see [rebuilding recurring reports by hand](/impact/rebuilding-recurring-reports-by-hand-labour-cost/). This article focuses on the specific step of combining multiple spreadsheets before anybody can see performance.

## Why spreadsheets get combined by hand

Combining is usually the symptom of a deeper gap: there is no shared place where the operational data lands in a consistent shape. Each team keeps its numbers where it works, and the only way to see the whole is to merge the parts.

- **Branches or departments own their own files.** Each has built something that suits its work, and consistency was never a requirement.
- **Systems export in different formats.** The accounting package, the point-of-sale system and the payroll tool each produce a report of a different shape.
- **Nobody owns the combined view.** The summary is made by whoever has the skill and the patience, as in [when only one person knows where the report's numbers come from](/patterns/when-only-one-person-knows-where-the-reports-numbers-come-from/).
- **It started small.** With three files it was fifteen minutes. With twelve it is a day, but the habit was already set.

## The signs that it has become a problem

- the monthly report is ready only after the second week, so the numbers describe a month that is already over;
- a particular person is the only one who can produce it and takes leave carefully around reporting dates;
- column names, product codes or branch names differ between files and are corrected by hand each time;
- totals are checked by eye, or not checked at all;
- managers ask for a "quick view" in between and are told it is not available until the full report is done;
- when numbers are questioned, nobody can say exactly which version of which file they came from, a theme found in [untraceable reporting numbers and audit cost](/impact/untraceable-reporting-number-audit-cost/).

## The evidence on spreadsheet error

Manual combining is not just slow; it is a known source of mistakes. The European Spreadsheet Risks Interest Group (EUSPRIG) maintains a long-running collection of [spreadsheet horror stories](https://eusprig.org/research-info/horror-stories/) documenting incidents in which spreadsheet errors, many of them in copied, linked or consolidated data, led to financial and operational consequences. The collection is anecdotal rather than a statistical estimate of error rates, but it illustrates how easily a single misaligned range or overwritten formula can flow into a decision.

Microsoft's own documentation reflects a similar view of the problem from the tool side. Its overview of [what Power Query is](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) describes a data-connection and transformation engine intended to get, clean and shape data without repeating the same manual steps each time, and the guidance on [combining files](https://learn.microsoft.com/en-us/power-query/combine-files-overview) explains how files with a consistent structure can be appended into a single table that refreshes when the source files change. These features are built into tools many South African businesses already pay for.

## How the pain turns into money

1. **Labour.** Skilled finance or operations time, repeated every period, is spent copying, reformatting and checking. That time could be spent analysing.
2. **Delay.** A report that arrives on day ten supports a decision made on day twelve. Problems such as slow-moving stock, rising overdue debtors or margin leakage run for an extra week or two before anybody sees them.
3. **Error risk.** Every manual step is a chance for a missing row, a wrong sign or a stale file. Errors found late cost more to correct than errors prevented.
4. **Key-person exposure.** If the one person who knows the process is away or leaves, reporting stops, which echoes [what happens when the only person who understands the system leaves](/insights/what-happens-when-the-only-person-who-understands-the-system-leaves/).
5. **Opportunity cost.** Skilled people spending a day and a half on assembly are not doing the analysis, forecasting or cost-reduction work that justifies their salary.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical group with eight branches. They are not a benchmark.

| Assumption | Value |
| --- | --- |
| Spreadsheets combined each month | 8 branch files plus 4 head-office files |
| Hours a month the financial manager spends collecting, reformatting and combining | 14 |
| Hours a month branch staff spend preparing and re-sending files | 16 across all branches |
| Hours a month spent fixing errors found afterwards | 5 |
| Loaded hourly cost, financial manager / branch staff | R420 / R180 |
| Reporting cycles per year | 12 |
| Average delay to management's view of the numbers | 7 working days |

- Financial manager: (14 + 5) × R420 × 12 = R95,760
- Branch staff: 16 × R180 × 12 = R34,560
- **Illustrative direct labour: about R130,000 a year**

The delay is harder to value but often larger. If a faster view allowed even one margin problem or overdue-debt build-up to be caught a week sooner, the benefit could exceed the whole labour figure. Because that benefit is a possibility rather than a certainty, the sensible way to present it is as an upside to be tested, not a number to bank.

## Why it persists

The process works, in the sense that a report does eventually appear. The cost is spread across several people and several hours, none of which are labelled "reporting overhead". The person who does the work has little time to improve it. Buying a business-intelligence platform sounds like a big project, so the issue is deferred. And when the business grows, another branch file is simply added, as noted in [why teams spend more time preparing reports than using them](/patterns/why-teams-spend-more-time-preparing-reports-than-using-them/).

## What better looks like

1. **Standardise the inputs first.** Agree a single template with fixed column names, formats and codes. This costs little and removes much of the cleaning.
2. **Put files in one controlled location.** A shared folder with a naming rule, rather than email attachments, gives a combined query something reliable to read.
3. **Automate the append and clean.** Use the combine feature in Power Query or a comparable tool so that the master table refreshes rather than being rebuilt.
4. **Move the source upstream where possible.** If the numbers already sit in the accounting or point-of-sale system, pull them from there rather than via a branch spreadsheet. See [when copy-and-paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/).
5. **Add a few automatic checks.** Compare combined totals against a control figure from the ledger and flag any difference.
6. **Document the process.** Write the steps so that a second person can run it.

## When it becomes urgent

- the business is opening another branch or acquiring a company;
- lenders, investors or auditors want timely management accounts;
- a reporting error leads to a wrong decision;
- the person who produces the report resigns or gives notice;
- management stops using the report because it is always late.

## Bottom line

Combining spreadsheets by hand is a modest daily habit that adds up to a large annual cost in labour, delay and risk. The fix is rarely a big system. Standard templates, a single drop location and an automated combine step can remove most of the work and give management its numbers days earlier. The aim is not to eliminate spreadsheets but to stop people being the glue between them.
