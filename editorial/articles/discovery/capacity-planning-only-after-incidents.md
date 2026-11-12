---
hub: discovery
record_id: DISC-311
slug: capacity-planning-only-after-incidents
title: When capacity planning only happens after something has gone down
description: Many businesses add server, database or cloud capacity only after a slowdown or outage. Why reactive capacity planning keeps repeating, and how to plan ahead using business events and real usage data.
lead: Many businesses add server, database or cloud capacity only after a slowdown or outage. Why reactive capacity planning keeps repeating, and how to plan ahead using business events and real usage data.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or infrastructure lead, with sales, marketing and operations leads who own demand-changing events
budget_owner: Chief information officer, chief financial officer or chief operating officer
sources:
  - Architecture strategies for capacity planning - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning
  - Google SRE - IT Service Management: Automate Operations | https://sre.google/sre-book/introduction/
  - REL01-BP01 Aware of service quotas and constraints - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_manage_service_limits_aware_quotas_and_constraints.html
related:
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
  - Why manual changes keep bypassing your infrastructure-as-code | /discovery/manual-changes-bypass-infrastructure-as-code/
summary: Many businesses add server, database or cloud capacity only after a slowdown or outage. Why reactive capacity planning keeps repeating, and how to plan ahead using business events and real usage data.
layout: plain
---
The month-end invoicing run stalls at 21:00. The database server is at full CPU and the run that normally takes two hours takes nine. The next morning the server is upgraded to a larger size and everyone moves on. Three months later a marketing promotion doubles web orders, the shop slows to a crawl, and the same thing happens again. Each time, capacity is added in a hurry, after customers or staff have already felt the problem.

This is reactive capacity planning: decisions about servers, databases, storage and cloud limits are made in response to incidents rather than ahead of predictable demand. It feels efficient because nothing is spent until it is needed. In practice it makes outages part of the planning process.

## The problem in plain language

Capacity means having enough computing power, memory, storage, network bandwidth and platform allowance to serve the business at its busiest. Most demand peaks are predictable: month-end, payroll, seasonal sales, campaigns, new branches, new customers. Signs that planning is reactive include:

- capacity changes that follow incidents rather than calendars;
- IT hearing about campaigns, launches or acquisitions after they start;
- no record of peak usage for key systems over the past year;
- cloud limits or quotas discovered when a scale-up fails;
- capacity added in a crisis never reviewed or reduced afterwards.

## What the buyer is actually trying to solve

People search for why systems slow down at month-end, how to plan server capacity, how to prepare IT for a sales peak, or why the cloud did not scale. IT managers want fewer emergencies; finance managers want fewer unplanned upgrades. The real need is a simple, regular way to link business plans to infrastructure capacity, so that demand changes are prepared for rather than discovered.

## Evidence and system mechanism

### Plan before usage changes, not after

Microsoft's Azure Well-Architected guidance on [capacity planning](https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/capacity-planning) says it should be done before predicted changes in usage, naming seasonal variation, product updates, marketing campaigns, special events, business model changes and acquisitions. It recommends analysing historical utilisation and trends, identifying bottlenecks, understanding the limits of each resource, and validating with load testing. It warns that a lack of capacity planning leads to performance problems, bottlenecks and higher costs, and that misjudged planning causes either over-provisioning or under-provisioning.

### Forecast organic and event-driven demand, and test

The introduction to Google's [Site Reliability Engineering](https://sre.google/sre-book/introduction/) book lists three steps it treats as mandatory: a forecast of organic demand that looks further ahead than the time needed to obtain capacity; incorporating inorganic demand such as launches and campaigns; and regular load testing to relate raw capacity to what the service can actually handle. It observes that these steps are often neglected, despite capacity being critical to availability.

### The cloud has limits too

The AWS Well-Architected best practice on [service quotas and constraints](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_manage_service_limits_aware_quotas_and_constraints.html) lists anti-patterns that include assuming cloud services have no limits, assuming quotas increase automatically, not testing at peak traffic, and not assessing capacity before a new customer event. Quotas and resource constraints, such as disk throughput, can cause degradation or outages when reached unexpectedly.

## Problem owner and why-now trigger

The IT manager or infrastructure lead owns capacity. But the people who know when demand will change are usually in sales, marketing, finance and operations, so they share responsibility for telling IT early. Budget usually sits with the chief information officer, chief financial officer or chief operating officer.

Cloud migration is a common trigger. Teams often assume that moving to the cloud removes the need to plan, then find that autoscaling is not configured, quotas are low, or databases do not scale the way web servers do. Other triggers include a slow month-end, a failed promotion, rapid customer growth, or an acquisition that adds users overnight.

## Economic consequence

- **Lost revenue at peak.** Slowdowns hit precisely when demand is highest.
- **Staff overtime.** Month-end and payroll runs that overrun push work into nights and weekends.
- **Emergency spend.** Upgrades bought in a hurry are rarely the best value, and are often never reduced. The cost of excess capacity is covered in [overprovisioned server capacity](/impact/overprovisioned-server-capacity-cost/).
- **Reputation.** Customers remember a site that failed during a sale.
- **Distraction.** Each incident pulls the IT team away from planned work.

## Root cause

- **No link between business plans and IT.** Campaigns, launches and new contracts are not shared with whoever manages capacity.
- **No usage history.** Peak utilisation is not recorded, so trends cannot be seen.
- **Bottlenecks unknown.** Teams do not know which component fails first under load.
- **Belief in unlimited cloud.** Autoscaling and quotas are assumed rather than checked.
- **No owner for review.** Capacity is nobody's regular job until something breaks.

Growth exposes these gaps faster, as described in [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/).

## Practical intervention

1. **Build a demand calendar.** List predictable peaks such as month-end, payroll, seasonal trading and planned campaigns, and ask business leads to add events as they are planned.
2. **Record peak usage.** For each critical system, capture peak CPU, memory, storage, database and response times, and keep at least a year of history.
3. **Find the first bottleneck.** Identify which component limits each service, whether database, disk, network or a platform quota.
4. **Check limits and scaling.** Confirm cloud quotas, autoscaling settings and what does not scale automatically.
5. **Test before big events.** Run a load test before major campaigns, launches or migrations.
6. **Review quarterly.** Compare forecasts with actual peaks, reduce capacity that is no longer needed, and plan the next quarter.

### Trade-offs

Formal forecasting models are rarely needed in smaller businesses. A shared calendar, a year of peak data and a quarterly half-day review cover most of the benefit. Some headroom is also sensible; the aim is planned headroom, not permanent excess.

### An illustrative example

Illustrative: a Johannesburg distributor with about 120 staff moved its ERP and web shop to the cloud and had two slowdowns in the first quarter, both at month-end. A review found that the database had a fixed throughput limit and that a promotion had coincided with the invoicing run. The team set up a shared demand calendar with sales and finance, recorded peak usage weekly, raised the relevant limits before month-end, and moved the promotion's start date. The next two month-ends completed on time.

## Diagnostic questions

- When was your last capacity change, and was it planned or a reaction to an incident?
- Does IT see the marketing and sales calendar before campaigns start?
- What was the peak load on your most critical system last year?
- Which component would fail first if demand doubled?
- Do you know your cloud quotas and what does not autoscale?

## What good looks like

Business events that change demand reach IT before they happen. Peak usage is recorded and trends are visible. The first bottleneck for each critical service is known, cloud limits are checked, and big events are load-tested. Capacity is reviewed quarterly, increased ahead of peaks and reduced afterwards. Incidents still happen, but they are no longer how capacity gets planned.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can set up usage monitoring, limit checks and load testing, particularly during cloud migrations. Mellorca's [managed digital operations](/services/managed-digital-operations/) service can run the quarterly capacity review and keep the demand calendar current.

## Method note

This article draws on published cloud architecture frameworks and reliability engineering guidance. The right level of headroom depends on each service's business impact and how quickly capacity can be added. The example is illustrative rather than a client case.
