---
hub: impact
record_id: CPS-114
slug: no-agreed-definition-revenue-customers-leads-completed-work-inconsistent-metrics-cost
title: What Counts as a Customer? The Cost of Running a Business Without Agreed Definitions
description: Sales counts a lead one way, marketing another; finance and operations disagree on when a job is done. Without written definitions, bonuses, targets and investment decisions rest on shifting ground.
lead: Sales counts a lead one way, marketing another; finance and operations disagree on when a job is done. Without written definitions, bonuses, targets and investment decisions rest on shifting ground.
category: Data and Information
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Core business terms such as revenue, customer, lead and completed work have no single written definition, so each department measures them differently
primary_cost_mechanism: Error and dispute cost in commissions and bonuses, misleading targets and ratios, misjudged statutory and contractual thresholds, poor investment decisions, and reduced credibility with lenders and buyers
sources:
  - Small Businesses - Taxpayers - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/small-businesses-taxpayers/
  - Endorsement overview - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview
  - Semantic Models in the Power BI Service - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-understand
related:
  - One Metric, Three Definitions: The Cost of Systems That Count Differently | /impact/systems-different-definitions-same-business-metric-conflicting-reports-cost/
  - When History Walks Out the Door: The Cost of Losing Records at Exits and System Changes | /impact/losing-historical-data-employees-leave-systems-change-lost-institutional-information-cost/
  - When Important Data Is Trapped in One Department's App | /impact/data-trapped-in-one-department-application-information-silo-cost/
summary: Sales counts a lead one way, marketing another; finance and operations disagree on when a job is done. Without written definitions, bonuses, targets and investment decisions rest on shifting ground.
layout: plain
---
## Four people, four answers

The owner of a solar installation company in Centurion asks his leadership team a simple question at the quarterly review: how many customers do we have? The sales manager says 1,400, counting everyone who has ever signed a contract. The finance manager says 920, counting accounts invoiced in the past twelve months. The service manager says 610, counting sites with an active maintenance plan. Marketing quotes 3,200 from the mailing list. Each number is correct by its owner's logic. None of them is the answer the owner needed, which was how many customers are likely to buy again this year.

The example is illustrative, but the underlying gap is everywhere. Most businesses use a handful of words every day, such as revenue, customer, lead, sale, order, completed job and active user, without ever agreeing in writing what each one means. The words feel obvious, so nobody defines them. The cost appears when decisions, payments and promises rest on them.

## The terms that cause the most trouble

- **Revenue.** Is it the value of signed contracts, invoices issued, cash received, or revenue recognised as work is delivered? Does it include VAT, pass-through costs or once-off installation fees?
- **Customer.** Is it any account ever created, anyone who bought in the last twelve months, or anyone with an active contract? Is a group of companies one customer or five?
- **Lead.** Is every web form a lead, or only enquiries that meet basic criteria? When does a lead become an opportunity?
- **Completed work.** Is a job complete when the technician leaves site, when the customer signs off, when the invoice is issued, or when the warranty period starts?

Each department naturally defines these terms in the way that suits its work. The problem is not that the definitions differ; it is that nobody has chosen which one the business uses for which purpose, and written it down.

## Where the money is affected

### Commissions and bonuses

When incentives depend on "sales" or "completed jobs", an undefined term becomes a negotiation every month. Salespeople argue that a signed order should count even if it is later cancelled; finance argues it should count only when paid. Without a written rule, the business either overpays or spends management time settling disputes, and staff feel treated unfairly either way.

### Targets and performance management

A target is meaningless if the measure behind it can change. Teams meet targets by shifting definitions rather than by improving results, and managers cannot tell real progress from reclassification.

### Statutory and contractual thresholds

Some obligations depend on precise measures. SARS's guidance for [small businesses](https://www.sars.gov.za/businesses-and-employers/small-businesses-taxpayers/) sets compulsory VAT registration by reference to turnover, with the threshold rising from R1 million to R2.3 million from 1 April 2026. Loan covenants, franchise fees, supplier rebates and customer service levels often depend on similar figures. A business whose departments use different revenue numbers risks misjudging when a threshold is crossed.

### Investment and pricing decisions

Customer acquisition cost, lifetime value, churn and conversion rates are all ratios of defined terms. If "customer" or "lead" means different things in the numerator and denominator, the ratio misleads. The business may spend more on a channel that only looks efficient because it counts leads generously.

### Credibility with lenders and buyers

Banks, investors and acquirers test the numbers. A business that cannot explain how its own metrics are defined loses credibility and may accept worse terms.

## A hypothetical example of the cost

The following figures are illustrative. A sales team of six earns 3 percent commission on monthly "sales". If sales is measured on signed orders, but 8 percent of signed orders are later cancelled or reduced, and the team sells R2.5 million a month, commission is paid on R200,000 of revenue that never arrives. That is R6,000 a month, or R72,000 a year, before counting the hours spent arguing about which number is right.

## Why definitions are never written

Definitions feel like a technical or academic exercise. Each manager is confident their meaning is the obvious one. Systems are bought separately and each comes with its own default terms. And when the business is small, everyone understands the context and disagreements are easy to resolve in conversation. The pattern of [nobody owning the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/) explains how this becomes entrenched, and the article on [departments reporting different numbers for the same metric](/impact/departments-reporting-different-numbers-same-metric-meeting-decision-cost/) covers the meeting time it consumes.

## What a shared vocabulary looks like

The practical fix is a short business glossary: one page listing the twenty or so terms that drive money and decisions, with a plain-language definition, the system that is the source of truth, who owns the definition, and how it is calculated. Where different purposes genuinely need different measures, the glossary names them separately, such as "signed order value" and "invoiced revenue", rather than letting one word mean both.

Reporting tools can then enforce the glossary. Microsoft's documentation on [endorsing data and reports](https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview) describes certifying content that meets organisational quality standards and labelling master data as the authoritative single source of truth for kinds of business data such as customer lists. Its overview of [semantic models](https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-understand) describes the shared data model that reports draw from, so that a measure defined once is reused across reports. The insight on [why reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) covers the technical side.

## Practical next actions

1. **List the terms that drive money.** Start with revenue, customer, lead, opportunity, order and completed job, plus any term used in commissions, targets or contracts.
2. **Collect current definitions.** Ask each department how it defines and calculates each term today, and note where they differ.
3. **Choose and name the definitions.** Agree one definition per term, and create separately named measures where different purposes need different numbers.
4. **Assign an owner and a source system.** For each term, name who can change the definition and which system holds the authoritative figure.
5. **Align incentives and targets.** Rewrite commission and bonus rules to reference the glossary terms explicitly.
6. **Build reports from the glossary.** Define each measure once in your reporting tool and retire reports that calculate it differently.

Agreed definitions cost little to write and save a great deal of argument. More importantly, they make sure that the numbers used to pay people, set targets and plan investment mean the same thing to everyone who relies on them.
