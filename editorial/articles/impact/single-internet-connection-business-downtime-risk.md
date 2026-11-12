---
hub: impact
record_id: CPS-177
slug: single-internet-connection-business-downtime-risk
title: When One Internet Connection Can Stop the Business
description: How a single connectivity dependency turns an internet outage into payroll, service and revenue interruption—and how to model the resilience case.
lead: Cloud applications, voice, payments, support and remote access can make connectivity a production dependency rather than an office convenience.
category: Connectivity
published_date: 2026-09-04
updated_date: 2026-09-04
byline_category: Digital Infrastructure
tags:
  - Downtime
  - Payroll
  - Revenue delay
cta_label: Digital Infrastructure
cta_href: /services/digital-infrastructure/
side_title: Cost mechanisms
sources:
  - Business Continuity and Disaster Recovery (BCDR) for On-premises Data Gateway and Virtual Network Data Gateway | https://learn.microsoft.com/en-us/data-integration/gateways-business-continuity-disaster-recovery
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
related:
  - Video Calls That Freeze and Drop: The Cost to Customers and Remote Teams | /impact/video-calls-freezing-dropping-communication-cost/
  - When One Employee Knows How Everything Works | /impact/key-person-operational-dependency/
  - The Cost of Automations That Stop Silently | /impact/silent-automation-failures-financial-impact/
---
## The tolerated pain

A business can have reliable connectivity for months and still have a fragile design if one circuit, provider path or edge device is the only route to critical work. The fragility stays invisible because the connection usually works. It becomes visible only on the day a fibre cable is cut, a router fails, a provider has a regional fault or the building loses power.

For many organisations the internet connection is no longer an office convenience. Accounting, CRM, email, telephony, card payments, stock systems, file storage and remote access all depend on it. When it fails, the business may still have staff, stock and customers, but it can no longer reach the systems that connect them.

## Why businesses tolerate it

Connectivity was bought when the business used it mainly for email and browsing, and the contract has simply been renewed since. Each move to a cloud application quietly increased the dependency without anyone revisiting the design. A second line feels like paying twice for the same thing, and past outages were short enough to be absorbed. There is also a common misconception that a second connection from the same provider, or one running through the same duct, is redundancy. Often it is not.

## Operational consequence

During an outage, employees may remain present but unable to reach cloud systems, process transactions, communicate normally or serve customers. Recovery then depends on the provider rather than an operating choice. Typical effects include:

- **Idle capacity:** staff who cannot work without cloud access wait, or switch to low-value tasks.
- **Transaction interruption:** card payments, online orders and bookings cannot be processed or confirmed.
- **Communication gaps:** internet-based phone systems stop, so customers cannot reach the business at all.
- **Backlog and overtime:** work deferred during the outage must be caught up later, often at higher cost.
- **Data risk:** work captured offline or on paper must be re-entered, creating errors.

The same principle applies inside cloud platforms. Microsoft's business continuity guidance for its data gateways notes that an on-premises gateway will stop working if a dependent Azure service is down in a region, even when local infrastructure is unaffected, and recommends high-availability clusters, gateways in multiple regions and monitoring with alerts. The lesson carries over directly: where a dependency can fail, secondary capacity has to be designed deliberately rather than assumed.

## How it becomes money

> downtime exposure per hour = idle labour + delayed or lost contribution + recovery effort + customer/service impact

Use observed transaction and staffing data. Not every delayed sale is lost revenue, so scenario assumptions should distinguish delayed, recoverable and permanently lost activity. Mellorca's article on [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) sets out how to gather those inputs.

### An illustrative cost model

The following example is **illustrative only**. Every value is an assumption to demonstrate the arithmetic, not a measured outage rate or industry benchmark.

| Assumption (illustrative) | Value |
| --- | --- |
| Staff on site during an outage | 25 |
| Share of their work that needs connectivity | 70% |
| Loaded hourly staff cost | R250 |
| Revenue normally transacted per hour | R30,000 |
| Share of that revenue permanently lost during an outage | 20% |
| Gross margin on lost revenue | 35% |
| Catch-up and recovery effort per outage | R1,500 |
| Outages per year | 3 |
| Average outage duration | 6 hours |

On those assumptions:

- **Idle labour:** 25 staff × 70% × R250 = **R4,375** per outage hour.
- **Lost contribution:** R30,000 × 20% × 35% = **R2,100** per outage hour. The other 80% of revenue is assumed delayed and recovered, so it is not counted as a loss.
- **Hourly exposure:** R6,475 per hour.
- **Annual exposure:** 3 outages × 6 hours = 18 hours × R6,475 = R116,550, plus 3 × R1,500 recovery = **R121,050** a year.

Now compare a resilience option, again with illustrative figures: a secondary connection from an independent provider and technology at R1,200 a month, plus R8,000 once-off for failover-capable equipment, comes to R22,400 in the first year and R14,400 thereafter.

The shape of the risk matters more than the average. In this model a single 24-hour outage, such as a damaged cable awaiting repair, would cost about R155,400 on its own. Businesses tend to plan for the typical short outage while the occasional long one carries most of the exposure. Customer and service impact has not been priced here at all; if customers who cannot reach you go elsewhere permanently, the true figure is higher.

> **Commercial trigger:** if an hour without the primary link stops meaningful operations, compare the annualised cost of resilience with the business's own outage exposure.

## When it becomes urgent

Act when a recent outage stopped trading, when telephony has moved to the internet, when card or online sales make up most revenue, when a contract renewal is approaching, or when the business is moving more systems to the cloud. Power is part of the same question: a second line does not help if both routers lose power together, so check backup power for network equipment as well.

## Resolution

1. Identify processes that genuinely require live connectivity, and those that can run in a degraded mode.
2. Calculate realistic outage exposure using your own staffing and transaction data.
3. Map provider, circuit, power and equipment single points of failure, including shared ducts and shared upstream providers.
4. Design an independent fallback where justified, ideally a different provider and a different technology.
5. Test failover under operating conditions, not only at installation.
6. Document degraded-mode procedures, such as offline card processing and mobile call forwarding.
7. Monitor both links and alert when either fails, so a silent backup failure is caught.

The United States National Institute of Standards and Technology's contingency planning guide, SP 800-34, offers a structured approach to this kind of work, including business impact analysis templates for identifying which systems matter most and how long they can be unavailable. Connectivity resilience also depends on recovery of data, covered in [backups that have never been tested](/impact/backups-never-tested-restore-financial-cost/). Mellorca's [digital infrastructure](/services/digital-infrastructure/) work covers the design and testing of these fallbacks.

## Bottom line

Redundancy is not automatically worth buying. It becomes rational when the cost of an independent fallback is lower than the risk-adjusted interruption the business is already carrying. For many businesses that run on cloud systems, a few hours of outage a year is enough to tip the balance. The only way to know is to do the arithmetic with your own numbers.
