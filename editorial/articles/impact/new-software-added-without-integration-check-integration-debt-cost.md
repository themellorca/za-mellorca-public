---
hub: impact
record_id: CPS-097
slug: new-software-added-without-integration-check-integration-debt-cost
title: Buying Software Before Asking How It Connects: The Cost of Integration Debt
description: Each new application bought without checking how it will exchange data with the rest of the business adds manual transfers, fragile workarounds and future rework. That accumulated burden is integration debt.
lead: Each new application bought without checking how it will exchange data with the rest of the business adds manual transfers, fragile workarounds and future rework. That accumulated burden is integration debt.
category: Automation and Integration
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Automation and Integration
commercial_domain: Automation and Integration
primary_pain: New software is added without checking how it will connect to existing systems, creating integration debt
primary_cost_mechanism: Recurring manual data transfer labour, re-keying errors, costly late integration and data clean-up projects, and lock-in to poorly connected tools that would not be chosen again
sources:
  - Shopify API limits | https://shopify.dev/docs/api/usage/limits
  - Microsoft Graph throttling guidance - Microsoft Graph | https://learn.microsoft.com/en-us/graph/throttling
  - Versioning - Stripe API Reference | https://docs.stripe.com/api/versioning
related:
  - When Customers Find the Broken Integration Before You Do | /impact/integrations-breaking-silently-customers-report-failure-first-cost/
  - The Integration That Is Always Being Fixed: Paying for Poorly Designed Connections | /impact/custom-integrations-constantly-need-repair-poorly-designed-connections-cost/
  - Shadow Automations: The Hidden Risk of Workflows Built Outside Oversight | /impact/personal-automations-outside-business-oversight-shadow-automation-continuity-risk/
summary: Each new application bought without checking how it will exchange data with the rest of the business adds manual transfers, fragile workarounds and future rework. That accumulated burden is integration debt.
layout: plain
---
## A good tool that created a new job

A property management company in Stellenbosch bought a well-regarded maintenance scheduling application. Contractors liked it, tenants could log faults from their phones and the operations team finally had a clear view of open jobs. Three months later, the finance team was spending a day a week copying completed jobs into the accounting system so contractors could be paid and costs could be recharged to landlords. The scheduling tool had an export, but it did not match the accounting system's import format. Nobody had asked about that before signing.

The application did what it was bought to do. It also created a permanent manual job that nobody had budgeted for.

## What integration debt is

Technical teams use the term "technical debt" for shortcuts that save time now but cost more later. Integration debt is the same idea applied to the connections between systems. Every time a new application is added without a plan for how data will move in and out of it, the business takes on an obligation that has to be paid later, in one of three forms:

- **Manual transfer**: people copying, exporting and importing data between systems.
- **Fragile workarounds**: quick scripts, spreadsheet bridges or third-party connectors set up under pressure, without monitoring or ownership.
- **Rework**: a proper integration built later, often after data has diverged and has to be cleaned up first.

Like financial debt, it accumulates. Each new application adds its own obligations and also makes later connections harder, because there are more systems holding overlapping information.

## The questions that were not asked

Integration debt usually begins with a buying process that looks only at features, price and user experience. A short set of technical questions, asked before purchase, would reveal most of the future cost. The guide on [what to ask about APIs before buying business software](/insights/what-to-ask-about-apis-before-buying-business-software/) covers them in more detail. They include:

- Which of our existing systems does this need to exchange data with, and in which direction?
- Does it have a documented API, and does our plan level include access to it?
- Are there ready-made connectors to our accounting, CRM or operations systems, and who maintains them?
- Can it notify other systems when something changes, or does everything have to be checked on a schedule?
- What limits apply to how much data can be moved, and how quickly?
- How does the vendor handle changes to its API, and how much notice is given?

## Why limits and versions matter

An API existing is not the same as an integration being easy. Platforms set limits on how much traffic each connection may generate. Shopify's documentation on [API rate limits](https://shopify.dev/docs/api/usage/limits) describes a leaky-bucket model in which requests that exceed the limit fail with a throttle error and the app must wait before retrying. Microsoft's [Microsoft Graph throttling guidance](https://learn.microsoft.com/en-us/graph/throttling) explains that over-limit requests receive an HTTP 429 response with a suggested wait time, and recommends using change notifications rather than repeatedly polling for updates.

Interfaces also change over time. Stripe's [API versioning documentation](https://docs.stripe.com/api/versioning) explains that it releases monthly versions without breaking changes and twice-yearly major releases that start with breaking changes, and advises testing before upgrading. None of this is a reason to avoid these platforms. It is a reason to understand, before buying, what it will take to connect and maintain them.

## The cost of integration debt

The figures below are illustrative.

### Manual transfer labour

One day a week of copying data at a loaded cost of R300 an hour is roughly R125,000 a year for a single connection. Businesses with several unconnected applications often carry several such jobs.

### Errors from re-keying

Every manual transfer introduces mistakes: wrong amounts, missed records, duplicates. Each error costs time to find and correct and sometimes reaches a customer or supplier.

### Late or expensive integration

When the business eventually builds a proper connection, it pays for data clean-up, mapping between inconsistent records and the integration itself, often more than the original software purchase.

### Lock-in to the wrong choice

Once data and processes depend on a poorly connected tool, replacing it is disruptive. The business may keep paying for an application it would not buy again. This is a common consequence of the situation described in [every team choosing its own software without integration standards](/impact/every-team-chooses-own-software-no-integration-standards-fragmented-data-cost/).

## Why it keeps happening

Software is often bought by the team that will use it, to solve a pressing problem, with a monthly subscription that does not trigger formal approval. Vendors demonstrate features, not integration effort. The people who will carry the cost, usually finance or IT, are not in the room. The pattern overlaps with [software bought without approval](/impact/software-bought-without-approval-shadow-it-cost/), but integration debt also arises from properly approved purchases when the approval process does not include an integration check.

## Building an integration check into buying

The fix does not need a large procurement process. It needs a short, mandatory step before any new application that will hold or use business data is approved:

- A one-page integration assessment listing the systems it must connect to and how.
- Confirmation of API access, connector availability and limits on the intended plan.
- An estimate of the integration cost, whether build, connector subscription or manual effort, added to the purchase case.
- A named owner for each connection once it exists.
- A decision on which system will be the system of record for any shared data, so that two tools do not compete.

The guide on [integrating a new platform into an existing business](/insights/how-to-integrate-a-new-platform-into-an-existing-business/) describes how to plan the connection once the purchase is approved.

## Practical next actions

1. **List applications added in the last two years.** For each, note how data moves in and out today: integrated, connector, export and import, or manual re-keying.
2. **Estimate the manual effort for each gap.** Ask the people who do the transfers how many hours a week they spend.
3. **Rank the gaps by cost and error risk.** Start with those that affect invoicing, payments and customer records.
4. **Add an integration check to software approval.** Make the one-page assessment a requirement for any tool that will hold business data.
5. **Include integration cost in every business case.** Compare the true total, not just the subscription price.
6. **Review vendor API and version policies.** Record limits, notice periods and who will track changes for each connected application.

Integration debt is easiest to avoid at the moment of purchase, when a few questions cost nothing. After the contract is signed, the same answers usually come with a recurring cost in staff time or a project budget.
