---
hub: impact
record_id: CPS-039
slug: manual-reconciliation-between-systems-labour-cost
title: The labour cost of manually reconciling two systems
description: How repeated manual reconciliation between business systems creates payroll cost, delayed reporting and persistent uncertainty about authoritative records.
lead: Manual reconciliation is sometimes a legitimate control. It becomes expensive when people repeatedly compare systems because authoritative ownership, synchronization and exception handling were never designed.
category: Data & Integration
published_date: 2026-09-05
updated_date: 2026-09-05
byline_category: Digital Infrastructure
tags:
  - Reconciliation
  - Payroll
  - Data Quality
cta_label: Systems Integration
cta_href: /services/systems-implementation-integration/
side_title: Cost mechanisms
sources:
  - Synchronize data across Dataverse environments using Power Platform - Power Platform | https://learn.microsoft.com/en-us/power-platform/architecture/reference-architectures/sync-dataverse-data
  - The True Cost of Poor Data Quality - IBM | https://www.ibm.com/think/insights/cost-of-poor-data-quality
  - Reconcile bank accounts - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately
related:
  - The cost of retyping customer details into every system | /impact/pain-duplication-of-customer-data-entry/
  - When customer details differ between applications | /impact/pain-customer-details-different-applications-cost-mistakes/
  - The cost of business systems that do not talk to each other | /impact/business-systems-do-not-talk-integration-cost/
---
## The tolerated pain

A finance record disagrees with CRM. Operations has a third value. Somebody exports both datasets, matches rows, investigates exceptions and decides which number should win. The same exercise returns next week.

Manual reconciliation is sometimes a legitimate control. Finance teams reconcile bank statements and ledgers for good reason, and some comparisons should always involve human judgement. The problem described here is different: people repeatedly comparing systems because authoritative ownership, synchronisation and exception handling were never designed.

## Why businesses tolerate it

Reconciliation usually begins as a temporary fix. Two systems were connected quickly, or not connected at all, and someone agreed to “check them against each other” until a proper integration was built. The integration never arrived, and the check became a job.

It persists because it works, in the narrow sense that the numbers eventually agree. The person doing it becomes skilled, the spreadsheet becomes sophisticated and the cost disappears into a salary that is paid anyway. Nobody budgets for reconciliation, so nobody sees what it costs. And because the effort is spread across finance, sales and operations, no single manager owns the problem or the case for fixing it.

## Operational consequence

Reporting slows down and confidence declines. Staff begin maintaining private reconciliation spreadsheets, which adds another data source to the problem. Exceptions are corrected after the fact instead of prevented or surfaced automatically.

The wider symptoms are familiar:

- **Delayed decisions:** management waits for the reconciled number before acting, so billing, purchasing or month-end close moves only as fast as the spreadsheet.
- **Disputed figures:** meetings spend time on whose number is right rather than what to do about it.
- **Customer-facing errors:** a customer receives an invoice, quote or delivery based on a record that one system had already corrected.
- **Fragile knowledge:** the matching rules live in one person's head and one person's workbook.
- **Repeated root causes:** the same mismatches recur because the effort goes into correcting outcomes, not removing causes.

The concern is widespread at senior level. IBM, citing its Institute for Business Value 2025 chief data officer study, reports that [43% of chief operations officers identify data quality issues as their most significant data priority](https://www.ibm.com/think/insights/cost-of-poor-data-quality). Manual reconciliation is one of the most visible places where that priority turns into daily labour.

## How it becomes money

> monthly reconciliation cost = reconciliation hours + correction hours + downstream delay cost

Measure direct handling separately from business delay. A reconciliation that consumes four hours may still be commercially significant if it postpones billing, purchasing, close or customer action.

### An illustrative cost model

Every figure below is an **illustrative assumption** chosen to show the method. Replace each with your own observed values.

| Cost element | Illustrative assumption | Annual cost |
| --- | --- | --- |
| Routine reconciliation | 2 staff × 6 hours a week = 12 hours × 48 working weeks = 576 hours × R280 loaded hourly cost | R161,280 |
| Exception correction | 40 exceptions a month × 30 minutes = 20 hours × 12 months = 240 hours × R280 | R67,200 |
| Billing delay | R1,200,000 monthly invoicing delayed 5 days, financed at 12% a year: R1,200,000 × 12% × 5 ÷ 365 = R1,972.60 a month × 12 | R23,671 |
| **Total** |  | **R252,151** |

The arithmetic: 576 × R280 = R161,280. 240 × R280 = R67,200. R1,200,000 × 0.12 = R144,000 a year in financing cost on the full amount; five days of that is R144,000 × 5 ÷ 365 = R1,972.60, and twelve months gives R23,671.20, rounded to R23,671. The total is R161,280 + R67,200 + R23,671 = R252,151.

Notice that the delay line is the smallest here only because the assumptions are modest. In a business where reconciliation delays month-end close, holds up supplier payments that carry early-settlement discounts, or blocks a customer's order, the delay cost can exceed the labour cost. That is why the two should be measured separately. The model also excludes management time spent arguing over numbers and the cost of decisions made on the wrong figure, which are real but harder to quantify defensibly.

## When it becomes commercially urgent

If the same records are manually compared every reporting cycle, the business has turned integration assurance into recurring payroll.

Urgency increases when transaction volumes are growing, because manual reconciliation scales with volume while a designed integration largely does not; when the person who does the reconciliation is leaving or overloaded; when an audit, funding round or acquisition requires figures that can be traced; or when a third system, such as a new e-commerce platform or AI reporting tool, is about to be added to the same data.

## Resolution

The aim is not to remove every check. It is to make the systems responsible for consistency and make people responsible for genuine exceptions.

Microsoft's reference architecture for [synchronising data across Dataverse environments](https://learn.microsoft.com/en-us/power-platform/architecture/reference-architectures/sync-dataverse-data) illustrates the pattern. One environment acts as the authoritative source. Upserts use an alternate key so that existing records are updated and duplicates are avoided. Event-driven updates handle changes quickly, and a scheduled process corrects any missed or failed updates. Even then, the guidance notes that manual intervention may be required for data quality problems such as missing keys.

The design principle is broader than Dataverse: reliable synchronisation still needs ownership, matching and exception recovery. Microsoft's Business Central documentation on [reconciling bank accounts](https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately) shows the same principle in practice: it offers automatic matching of statement lines to ledger entries based on text, and lets people overwrite it or mix it with manual matching.

1. Define which system owns each important entity and field.
2. Establish stable matching keys.
3. Automate predictable synchronisation where appropriate.
4. Detect and queue exceptions instead of comparing everything.
5. Reconcile critical transactions using explicit completion evidence.
6. Track exception volume and root causes over time.

The Insights articles [How to Decide Which System Owns Which Data](/insights/how-to-decide-which-system-owns-which-data/) and [Why Your Reports Cannot Agree on the Same Number](/insights/why-your-reports-cannot-agree-on-the-same-number/) go further into ownership and reporting consistency.

## Bottom line

A strong control checks what can go wrong. It does not require staff to distrust every record by default. When ownership, keys and exception handling are designed, reconciliation shrinks from a weekly comparison of everything to a short review of the few records that genuinely need a human decision.

**In summary:** recurring manual reconciliation is a labour cost, a delay cost and a confidence cost. Measure each separately, fix ownership and matching first, and let people spend their time on exceptions rather than on proving that two systems agree.
