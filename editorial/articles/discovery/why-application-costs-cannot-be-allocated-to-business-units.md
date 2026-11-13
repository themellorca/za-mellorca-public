---
hub: discovery
record_id: DISC-341
slug: why-application-costs-cannot-be-allocated-to-business-units
title: Why application costs cannot be allocated to business units
description: Application costs are hard to allocate when ownership, cost-centre mappings and shared services are not tied to the application portfolio. Link them.
lead: A software bill can be perfectly accurate while the business still cannot explain which teams, products or services are responsible for the cost.
category: SaaS & Application Portfolio Management
published_date: 2026-09-06
updated_date: 2026-09-06
tags:
  - SaaS
  - Allocation
  - FinOps
cta_label: Digital Operations
cta_href: /services/digital-operations/
problem_domain: SaaS & Application Portfolio Management
problem_owner: application portfolio and technology finance owner
budget_owner: CIO / CFO / business-unit budget owners
sources:
  - Allocation FinOps Framework Capability | https://framework.finops.org/framework/capabilities/allocation/
  - Invoicing & Chargeback FinOps Framework Capability | https://framework.finops.org/framework/capabilities/invoicing-chargeback/
  - Use tags to organize your Azure resources and management hierarchy - Azure Resource Manager | https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources
related:
  - Why free trials become production dependencies | /discovery/why-free-trials-become-production-dependencies/
  - Application owners leave without transferring responsibility | /discovery/application-owners-leave-without-transfer/
  - Why legacy applications remain live without an owner | /discovery/why-legacy-applications-remain-live-without-an-owner/
---
## The problem in plain language

Finance receives invoices for cloud services, SaaS subscriptions, platforms and support, but the organisation cannot reliably assign those costs to the business units, applications, products or services that consume them. Shared contracts, central accounts and inconsistent metadata turn technology spend into a large central number rather than an accountable operating cost.

The invoice itself is rarely wrong. A provider bills accurately for what was bought or consumed. The difficulty is that the provider's view of the world — accounts, subscriptions, tenants, licence tiers, seats — is not the same as the organisation's view, which is built around business units, cost centres, products and services. Somebody has to translate one into the other, and in many businesses that translation is done by hand, once a month, by whoever understands the spreadsheet.

## What you are actually trying to solve

The buyer wants to understand technology cost by responsibility and business purpose: which unit owns the spend, which application or service benefits, what is shared, and how shared costs should be apportioned.

In practice, the questions arrive in plainer language: “why is our IT recharge so high?”, “which team is paying for this platform?”, “how do we do showback or chargeback for SaaS?”, “what does this product actually cost to run?”, or “can we cut this licence without breaking somebody's work?”. Each is a request for the same missing capability — a dependable route from a line on an invoice to a named owner and a business purpose.

## Evidence and system mechanism

The [FinOps Framework defines allocation](https://framework.finops.org/framework/capabilities/allocation/) as the practice of assigning and sharing technology cost and usage using accounts, tags, labels and other metadata so responsible teams and projects can understand the costs they own. It also distinguishes direct allocation from shared-cost strategies and notes that different stakeholders may need different views, such as cost centre, application, production environment or product. The framework describes three supporting strategies: an allocation strategy (how the organisation wants to look at cost), a tagging or metadata strategy (how resources map to those groupings) and a shared-cost strategy (how common services are split or funded centrally).

The framework is candid about the limits. It notes that some costs cannot be tagged, that tagging compliance is a recurring challenge, and that several versions of these strategies may be in force at once, so complete consistency may be difficult to achieve. It also observes that many early practices deliberately fund some shared items centrally — an explicit business decision rather than an oversight.

Platform documentation shows the same mechanics at a technical level. [Microsoft's Azure guidance](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources), for example, explains that tags can be applied to resources, resource groups and subscriptions, but that resources do not inherit tags from their resource group or subscription unless a policy applies them. A business can therefore believe it has tagged its estate while much of the actual spend remains untagged at resource level.

The companion [FinOps Invoicing & Chargeback capability](https://framework.finops.org/framework/capabilities/invoicing-chargeback/) describes the finance side of the problem: invoices summarised to a sub-account level can be hard to allocate to cost centres, invoice timing rarely matches usage data, and a single organisation may receive many separate invoices across providers. Chargeback is only credible when finance can rely on consistent, timely cost data.

The mechanism fails when billing structures and the internal application portfolio are disconnected. A provider may know the subscription or tenant, but the organisation still needs a maintained mapping from that technical grouping to business ownership, cost centres, applications and shared-service rules.

> The invoice tells you what was bought. Only the organisation can say who it was bought for — and that answer has to be maintained, not reconstructed.

## An illustrative example

*The following is a hypothetical scenario, not a client case.* A business buys a collaboration platform on one enterprise agreement, funds a data platform from a central IT account and lets three departments expense their own SaaS tools on cards. Each quarter, finance needs to recharge technology costs to divisions. The enterprise agreement shows a single licence count; the data platform shows usage by workspace names chosen by engineers; the card spend shows supplier names with no cost centre. One analyst spends several days building a recharge that divisional heads then dispute, because nobody can show which of their services consumed what. The figures are accurate. The allocation is not trusted.

## Problem owner and why now

Technology finance, FinOps, application portfolio and enterprise architecture owners typically share the problem. CFO and CIO budgets feel the effect most directly, while business-unit budget owners feel it when recharges arrive without explanation. Urgency rises during budget reduction, portfolio rationalisation, chargeback or showback design, acquisitions or growth in centrally purchased SaaS and platforms. It also rises when usage-based pricing replaces fixed licences, because spend then moves month to month with behaviour that only the consuming teams can influence.

## Warning signs

- A material “unallocated” or “central IT” line that grows each year.
- Recharges calculated by headcount because nothing better is available, and disputed every quarter.
- Application inventories, contract registers and finance ledgers that use different names for the same system.
- Renewals approved centrally because no business owner will claim the cost.
- Tag or label coverage that nobody can state with confidence.

## Economic consequence

Poor allocation weakens accountability and makes rationalisation harder. Teams cannot see the full cost of the applications and services they depend on, finance spends time investigating unidentified charges, and shared costs can distort product or business-unit economics. Decisions about which software to remove or renew are made on licence counts rather than on the cost of the service a unit actually consumes.

The useful measures are unallocated spend, time spent resolving ownership, shared-cost pools and the proportion of the portfolio with reliable business and cost-centre mappings.

## Root cause

The root cause is usually a missing cost-to-portfolio model rather than a bad invoice. Application ownership, account structures, contract data, cost-centre mappings and technical metadata have evolved independently, leaving no durable relationship between spend and business responsibility.

Several symptoms are often mistaken for the cause. Poor tagging is real, but it is downstream of having no agreed allocation targets. A weak spreadsheet is real, but it exists because no system holds the mapping. And a reluctant business unit is often reacting reasonably to a recharge it cannot verify. Related problems — [an incomplete application inventory](/discovery/why-businesses-cannot-list-all-applications-they-use/) and [renewals without a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/) — usually sit alongside this one.

## Practical intervention

1. Define the organisational targets to which technology costs need to be allocated.
2. Connect each application and platform to business and technical owners.
3. Standardise account, subscription, tenant, tag and cost-centre metadata, and enforce it where resources and subscriptions are created rather than cleaning it up afterwards.
4. Separate directly attributable costs from genuinely shared services.
5. Define and document shared-cost apportionment rules — fixed, proportional or based on a usage proxy — and decide explicitly which items stay centrally funded.
6. Surface unidentified or unallocated cost as an exception queue with an owner.
7. Reconcile allocation rules with portfolio and budgeting changes.

## Trade-offs

More granular allocation is not automatically better. Each additional layer adds metadata to maintain, rules to explain and disputes to resolve. Showback — reporting cost to a unit without moving budget — is often a sensible first step before formal chargeback, because it exposes the data quality problems without making them a financial argument. Proxy-based apportionment is fairer than headcount but needs a usage measure everyone accepts. The right level is the one that supports the decisions the organisation actually needs to make.

## Diagnostic questions

- Can every material application cost be tied to an accountable owner?
- Which charges are genuinely shared, and how are they apportioned?
- Do finance, architecture and application inventories use the same identifiers?
- How much spend requires manual investigation each month?
- Can a business unit see the technology costs associated with the services it consumes?
- Is tagging or metadata enforced at creation, or repaired after the bill arrives?
- When an application changes owner, does the allocation follow automatically?

## What good looks like

Technology costs are traceable through a maintained allocation model. Direct costs map cleanly to accountable targets, shared costs use documented rules, unidentified charges are visible exceptions and the application portfolio uses identifiers that finance can reconcile. Business units receive cost views they recognise, can question and can influence, and portfolio decisions draw on the same data that finance closes the month with.

## Where Mellorca fits

Mellorca can map application ownership and cost structures, connect portfolio data to financial metadata, design allocation and exception workflows, and build reporting that makes technology cost responsibility visible. A [Digital Systems Audit](/services/digital-systems-audit/) is a practical starting point; [Systems Implementation & Integration](/services/systems-implementation-integration/) covers the connections between billing, inventory and finance data.

## Method note

The FinOps Framework and Microsoft platform documentation are used here for the allocation mechanism. The appropriate allocation model depends on the organisation's accounting policy, contractual structure, architecture and management objectives; this article does not prescribe a specific chargeback method.
