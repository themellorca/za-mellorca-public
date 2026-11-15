---
hub: impact
record_id: CPS-096
slug: systems-different-definitions-same-business-metric-conflicting-reports-cost
title: One Metric, Three Definitions: The Cost of Systems That Count Differently
description: The CRM, the accounting package and the operations system each report revenue, customers or orders, and each counts them differently. The result is conflicting reports and decisions built on whichever number is nearest.
lead: The CRM, the accounting package and the operations system each report revenue, customers or orders, and each counts them differently. The result is conflicting reports and decisions built on whichever number is nearest.
category: Data and Information
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Different systems use different definitions for the same business metric, producing conflicting reports
primary_cost_mechanism: Management and analyst time reconciling figures, effort and commission aligned to the wrong measure, delayed decisions while numbers are disputed, and lost credibility with banks, auditors and investors
sources:
  - https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl | https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl
  - https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
summary: The CRM, the accounting package and the operations system each report revenue, customers or orders, and each counts them differently. The result is conflicting reports and decisions built on whichever number is nearest.
layout: plain
---
## Three systems, three answers

A software reseller in Centurion asked a simple question at its quarterly review: how many active customers do we have? The CRM said 1,240, counting every account with an open opportunity or a contact in the last year. The billing system said 860, counting accounts invoiced in the last twelve months. The support platform said 1,050, counting organisations with a valid support contract. Each number was correct by its own system's logic. None of them answered the question the board was asking, which was how many customers were paying and likely to renew.

The meeting spent forty minutes reconciling definitions and ended without a decision on the renewal campaign.

## Why systems define metrics differently

Each application is designed around its own job. A CRM thinks in terms of relationships and opportunities. An accounting system thinks in transactions and periods. An operations or support system thinks in jobs, tickets and contracts. When each system reports a metric with the same name, it applies its own built-in logic:

- **Revenue** can mean deals won in the CRM, invoices raised in accounting, cash received in the bank, or revenue recognised over a contract period.
- **Customer** can mean a contact, a company, a billing account or a delivery address.
- **Order** can mean a quote accepted, a sales order created, a job dispatched or an invoice issued.
- **Active**, **new** and **lost** each depend on time windows that differ between systems.

Departments often adopt their own system's version, which is how the problem described in [departments reporting different numbers for the same metric](/impact/departments-reporting-different-numbers-same-metric-meeting-decision-cost/) develops. This article focuses on the root cause in the systems themselves, and on how to fix definitions so that the problem does not keep returning.

## The financial impact of conflicting reports

The figures below are illustrative.

### Meeting time and analysis

If six managers spend an hour each month reconciling numbers, and an analyst spends two days a month preparing explanations, that is roughly 260 hours a year. At an average loaded cost of R500 an hour, around R130,000 a year spent agreeing what the numbers mean.

### Misallocated effort

A sales team targeted on CRM revenue may celebrate deals that billing never invoices or that customers never pay. Commission, forecasting and resource decisions follow the wrong figure.

### Decisions delayed or avoided

When nobody trusts the number, decisions wait. Campaigns, hiring and investment get deferred until the debate is settled. The broader effect is described in [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/).

### External credibility

Numbers given to banks, investors, auditors or major clients that later change undermine confidence and invite additional scrutiny.

## How organisations fix it

The fix is to decide, in writing, what each important metric means, and then to make the systems and reports follow that decision. Data tooling now supports this directly. The dbt documentation on its [semantic layer](https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl) describes centralising metric definitions so that every downstream tool uses the same ones, and a change to a definition applies everywhere the metric is used. Microsoft Power BI supports [endorsement of content](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content), where certified semantic models and reports are marked as meeting the organisation's quality standards and regarded as reliable and authoritative.

Smaller businesses do not need specialist tooling to start. They need the same discipline in a simpler form:

- **A metric dictionary**: a short document listing each key metric, its definition, the system of record it comes from, the time window and the owner.
- **A system of record for each concept**: one system decides what a customer is, another decides what revenue is, and other systems refer to them. The guide on [what a system of record is](/insights/what-a-system-of-record-is-and-why-it-matters/) explains the idea.
- **Distinct names for distinct measures**: "pipeline value", "invoiced revenue" and "cash received" rather than three things called revenue.
- **One certified report** for each metric used in management meetings, with other views clearly labelled as working or departmental.

## An example of a useful definition

A good definition is short and testable. For the software reseller, an agreed definition might read: "Active customer: a billing account with at least one paid invoice in the last twelve months, or with a current support or subscription contract. Source: billing system. Owner: financial manager." With that sentence in place, the CRM can still report "accounts in relationship" and the support platform can still report "contracted organisations". Both remain useful for their own teams. They simply stop being presented as the number of customers.

The same approach works for revenue. Sales can report "pipeline value" and "deals won", finance reports "invoiced revenue" and "cash received", and the management pack states which one is being discussed. Most arguments about numbers disappear once each figure has its own name and a known source.

## Where definitions break down in practice

Even with a dictionary, conflicts creep back in. A new report is built by someone who did not know the definition existed. A system upgrade changes how a status is calculated. An integration copies records between systems and brings the source system's logic with it. A quarterly check of the certified reports against the dictionary, and a habit of asking "which definition is this?" whenever a new figure appears in a meeting, keeps the discipline in place without much overhead.

## Who should own definitions

Definitions are business decisions, not technical ones. Finance usually owns revenue and margin definitions. Sales and operations own pipeline and fulfilment measures. Someone senior has to arbitrate where definitions conflict, and changes should be recorded with a date so that historical comparisons remain meaningful. The guide [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) goes further into the governance side.

## Practical next actions

1. **List the ten metrics used most in management meetings.** Note every system that reports a version of each.
2. **Write the current definition used by each system.** Include the time window, inclusions and exclusions.
3. **Agree one business definition per metric.** Assign an owner and a system of record, and rename the other versions so they are not confused with it.
4. **Publish a one-page metric dictionary.** Keep it where people build reports and refer to it in meetings.
5. **Certify one report per key metric.** Make it the only source used for management decisions and external reporting.
6. **Review definitions twice a year.** Record changes with dates so trends remain comparable.

Conflicting reports are rarely a sign that a system is wrong. They show that the business has not decided which definition to use. Once that decision is made and written down, the reconciliation time in meetings usually falls quickly.
