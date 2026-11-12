---
hub: impact
record_id: CPS-102
slug: untrusted-business-numbers-unreliable-decision-cost
title: Which Business Numbers Can You Trust? The Cost of Deciding on Bad Data
description: When management cannot tell reliable figures from rough ones, it over-trusts or distrusts everything. How to rate, assure and fix the numbers that matter.
lead: When management cannot tell reliable figures from rough ones, it over-trusts or distrusts everything. How to rate, assure and fix the numbers that matter.
category: Reporting
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Reporting
commercial_domain: Reporting & Decision Support
primary_pain: Management does not know which business numbers can be trusted
primary_cost_mechanism: Decision cost, verification labour and opportunity cost from unreliable data
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - The AQuA Book | https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government
related:
  - When Revenue Is Visible but Profitability Is Not | /impact/no-visibility-into-customer-product-profitability/
  - The Cost of Deciding with Outdated Information | /impact/pain-decision-making-with-outdated-information/
  - Sales, Finance and Operations Each With Their Own Customer: The Cost | /impact/departments-separate-customer-records-financial-impact/
summary: When management cannot tell reliable figures from rough ones, it over-trusts or distrusts everything. How to rate, assure and fix the numbers that matter.
layout: plain
---
## The tolerated pain: every number looks equally confident

A monthly management pack typically contains dozens of figures: revenue, gross margin, debtor days, stock on hand, jobs completed, conversion rates, overtime hours, customer complaints. On the page they all look the same. Each has two decimal places, a neat chart and a comparison to last month.

Behind the page, they are not the same at all. Revenue may come straight from a reconciled ledger. Stock may depend on a count that has not been done since the last financial year end. Jobs completed may be typed into a spreadsheet by a supervisor on Friday afternoon. Conversion rates may depend on whether sales staff remembered to update the CRM. Some numbers are solid. Some are rough estimates. Some are wrong. Management usually cannot tell which is which.

That is the pain this article addresses. It is related to, but different from, [not being able to trace where a reported number came from](/impact/untraceable-reporting-number-audit-cost/). Traceability is about the path behind a single figure. This is about the business having no shared view of which of its numbers deserve confidence at all.

## Why businesses tolerate it

- **Reports hide quality.** A dashboard displays a figure with the same weight whether the input was audited or guessed.
- **The people who know do not write it down.** The bookkeeper knows the stock figure is soft; the operations manager knows the job count misses weekend work. That knowledge stays in their heads.
- **Admitting doubt feels risky.** Analysts and managers may be reluctant to flag that a number they present is unreliable.
- **Nobody owns the definitions.** When two teams calculate "active customers" differently, both numbers circulate. Mellorca's pattern on [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/) explores that root cause.

## Operational consequence

A business that cannot distinguish reliable numbers from unreliable ones tends to fall into one of two failure modes, and often swings between them.

### Over-trust

Weak numbers are treated as fact. Stock is reordered against an inaccurate count. A sales incentive is paid on CRM data that overstates closed deals. A product line is cut because its margin looks poor, when the overhead allocation behind it was a rough split nobody revisited.

### Blanket distrust

After being caught out once or twice, management stops trusting any report. Every meeting begins with arguments about whose number is right. Decisions wait while someone rebuilds a figure from source in a spreadsheet. Good data is ignored alongside bad.

The UK Government Data Quality Framework puts the consequence plainly in its own context: poor-quality data leads to failings in services, poor decision-making and an inability to understand how to improve. The same mechanism applies inside a business.

## How the pain becomes money

- **Decision cost:** pricing, purchasing, hiring and investment choices made on figures that were not fit for that purpose.
- **Labour cost:** analysts and managers repeatedly verifying, reconciling and rebuilding numbers before anyone will act on them.
- **Opportunity cost:** slower decisions while people argue about data, and good opportunities missed because a sound number was disbelieved.
- **Incentive leakage:** commissions, bonuses or supplier rebates calculated on unreliable inputs.
- **Funding and lending risk:** management accounts or forecasts presented to banks, investors or buyers that later prove unreliable damage credibility.

## A transparent cost model

The cost of untrusted numbers is easiest to see in two places: the time spent checking, and the decisions that were later reversed.

> **Monthly verification cost**
> hours spent re-checking or rebuilding report figures × loaded hourly cost of the people doing it
> **Decision correction cost**
> for each decision reversed or adjusted because the underlying number was wrong: cost of the original action + cost of reversal + margin lost in between

*Illustrative example.* A food manufacturer in the Western Cape with about 120 staff produces a monthly operations and finance pack. For one quarter, the financial controller asks the management team to log every time a figure in the pack was questioned, checked or rebuilt, and every decision later changed because a figure proved wrong. The log shows hours of senior time each month spent re-verifying yield and waste figures before any production decision. It also records a raw-material order sized on a stock figure that turned out to be overstated, which led to an urgent top-up purchase at a higher price. Using its own salary and purchasing data, the company can now attach a rand value to doubt. That figure becomes the business case for fixing the two or three inputs that cause most of it.

## When it becomes commercially urgent

- management meetings spend more time debating numbers than acting on them;
- a material decision has been reversed because a figure was wrong;
- incentives or commissions are disputed;
- the business is preparing for funding, a sale or an audit and needs to stand behind its reporting;
- AI and automation tools are about to start acting on the same data, which multiplies the effect of bad inputs, as explored in [why AI makes data quality more important](/insights/why-ai-makes-data-quality-more-important-not-less/).

## What better looks like

The aim is not perfect data. The UK framework notes that data must be fit for its intended purpose and that perfect quality is often unachievable. The aim is that every important number carries an honest, visible indication of how far it can be trusted, and that the most consequential numbers are assured most heavily.

### Rate key numbers against simple quality dimensions

The Data Quality Framework, drawing on DAMA UK, uses six dimensions: completeness, uniqueness, consistency, timeliness, validity and accuracy. For each key performance figure, a business can ask a plain question under each heading. Is every transaction included? Are there duplicates? Does it agree with the same figure elsewhere? Is it current? Is it in the right format and range? Does it match reality when checked?

### Assure in proportion to the stakes

The UK government's AQuA Book on quality analysis makes proportionality central: the assurance applied should match the potential effect of the analysis and its complexity, with higher-risk outputs receiving stronger checks. In business terms, the number that drives pricing or bank covenants deserves more checking than the number that tracks meeting-room use.

### Communicate quality to the reader

Both sources stress telling users about quality and uncertainty in plain language. A management pack can do this with a simple confidence label next to each figure.

| Label | Meaning | Appropriate use |
| --- | --- | --- |
| Reliable | From a reconciled system, definition agreed, checked regularly | Decisions and external reporting |
| Indicative | Known gaps or manual inputs, but directionally sound | Trends and internal discussion, not precise commitments |
| Unreliable | Known to be incomplete or inconsistent | Do not base decisions on it until fixed |

## Practical remediation steps

1. **List the twenty numbers** management uses most for decisions.
2. **For each, record its source, owner and definition**, and ask the people closest to it how reliable it really is.
3. **Apply a confidence label** and show it in the management pack from next month.
4. **Log verification time and reversed decisions** for a quarter to quantify the cost.
5. **Fix the inputs behind the highest-stakes unreliable numbers first**: often a manual capture step, a missing system integration or an inconsistent definition.
6. **Add simple automated checks** where possible, such as totals that must reconcile between systems.
7. **Review the labels quarterly** and promote numbers as their inputs improve.

Where reports disagree because data is moved between systems manually, the underlying fix is usually an operational one. Mellorca's [digital operations](/services/digital-operations/) work addresses the capture and integration points that produce unreliable figures, rather than adding another dashboard on top. The insight on [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) covers the reconciliation side.

## Bottom line

When every number looks equally confident, a business either trusts too much or trusts nothing, and both are expensive. Naming which figures are reliable, which are indicative and which are not, then fixing the inputs behind the most consequential ones, turns reporting from a debate into a basis for decisions.
