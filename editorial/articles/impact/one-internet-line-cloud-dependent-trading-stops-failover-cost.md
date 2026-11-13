---
hub: impact
record_id: CPS-181
slug: one-internet-line-cloud-dependent-trading-stops-failover-cost
title: When the line drops and nothing works: The cost of one Internet connection
description: If sales, stock and telephones all live online, one failed connection stops the business. Wages, lost trade and catch-up work cost more than a second path.
lead: If sales, stock and telephones all live online, one failed connection stops the whole business, and the wages, lost trade and catch-up work add up faster than a second path would cost.
category: Digital Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: A single internet connection for a business that cannot operate offline
primary_cost_mechanism: Idle paid labour, lost trading margin, post-outage catch-up and rework, and emergency purchasing during connectivity failures
sources:
  - Architecture Strategies for Designing for Redundancy - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - Architecture strategies for defining reliability targets - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics
related:
  - The automation only one person understands: The hidden cost of dependency | /impact/automation-understood-by-one-employee-continuity-maintenance-cost/
  - Which version is final? The cost of teams working from different copies | /impact/conflicting-document-versions-rework-decision-cost/
  - Two departments, same work: The payroll cost of duplicated effort | /impact/departments-duplicating-same-work-payroll-cost/
  - Slow network, unknown cause: What it costs when nobody can see who uses the bandwidth | /impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/
summary: If sales, stock and telephones all live online, one failed connection stops the whole business, and the wages, lost trade and catch-up work add up faster than a second path would cost.
layout: plain
---
## The tolerated pain

On a normal Thursday, the card machines work, the online orders arrive, the accounting package opens and the phones ring. Then the fibre line in the street is cut, or the provider has a fault, or a contractor drills through a cable, and within ten minutes the whole business is standing around. Cashiers cannot process cards. The warehouse cannot print pick slips. Calls that run over the internet drop. Staff watch the clock while the provider's helpdesk promises a technician "within the service window".

Plenty of businesses accept this. They have one connection because it was what the building came with, or because a second line felt like paying for something that would rarely be used. This article is about the narrower case where the business genuinely cannot work offline, because its sales, stock, payroll, telephones or customer records all live in cloud systems. Our earlier piece on [a single internet connection and business downtime risk](/impact/single-internet-connection-business-downtime-risk/) introduces the general problem. Here we look at how to work out what a connectivity failure really costs, and what a proportionate fallback looks like.

## Why one connection stays in place

- **It usually works.** A line that fails twice a year feels reliable, even though each failure may stop the whole business for half a day.
- **The cost of a fallback is visible; the cost of an outage is not.** A second line shows up on the monthly bill. Idle staff do not show up anywhere.
- **Nobody owns connectivity.** It sits between IT, the landlord and the provider, so nobody is asked to justify the risk.
- **Dependency has grown quietly.** Five years ago the business could fall back on paper. Today the point-of-sale, the telephone system, the stock system and the bank portal all need the internet, and nobody re-assessed the risk as each one moved to the cloud.
- **Load-shedding hides the real picture.** Power cuts and connectivity failures overlap in South Africa, so outages get blamed on "Eskom" even when a line fault or an unprotected router was the real cause.

## Operational symptoms

- staff sending customers home or asking them to "come back later" when the line drops;
- card payments only possible on a single device that depends on the same connection;
- a cloud telephone system with no mobile fallback number published for customers;
- managers using personal phone hotspots to keep a few key tasks alive, with no policy on data use;
- no record of how many outages occurred last year or how long each lasted;
- a provider contract that promises "best effort" restoration with no compensation or target repair time.

## How the pain becomes money

Connectivity failure is rarely a technology cost. It is a trading and labour cost that happens to start with a network fault.

- **Paid but idle time:** salaries and wages continue while staff cannot work.
- **Lost or deferred sales:** customers who cannot pay, cannot be quoted or cannot reach you go elsewhere. Some sales return later; some do not.
- **Catch-up cost:** the backlog after an outage is processed in overtime or with mistakes, which then create rework. See [fixing preventable mistakes: rework and customer time cost](/impact/fixing-preventable-mistakes-rework-customer-time-cost/).
- **Customer trust:** a delivery that cannot be dispatched or an account query that cannot be answered leaves an impression that outlasts the outage.
- **Emergency purchasing:** buying data bundles, hotspots or a rushed second line on the day of the failure costs more than a planned arrangement.

Microsoft's reliability guidance on [redundancy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/redundancy) makes a point that applies well beyond the cloud: remove single points of failure for the parts of a workload that are critical, and match the level of redundancy to how important each part is. A business does not need a gold-plated network. It needs to know which functions cannot stop, and to protect those first.

## An illustrative cost model

The figures below are **illustrative** assumptions for a hypothetical Durban distributor with 30 staff, a trading counter and an online order channel. Replace them with your own.

| Assumption | Value |
| --- | --- |
| Outages a year | 5 |
| Average duration | 3 hours |
| Staff unable to work during an outage | 30 |
| Loaded cost per person per hour | R180 |
| Gross margin lost per trading hour (net of sales that return later) | R2,500 |
| Overtime and rework after each outage | R3,000 |

- Idle labour: 5 × 3 × 30 × R180 = R81,000
- Lost margin: 5 × 3 × R2,500 = R37,500
- Catch-up cost: 5 × R3,000 = R15,000
- **Illustrative total: R133,500 a year**

Compare that with a possible fallback: a mobile-network router with automatic failover, assumed at R6,000 to install and about R1,200 a month for a data plan, or about R20,400 in the first year. Even if the fallback only covers half the lost time, the arithmetic favours action. If your own figures show a smaller exposure, the sensible answer might be a cheaper arrangement, and that is a legitimate result too.

The exercise needs one number many businesses lack: what an hour of downtime costs them. The method is described in [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).

## Why the pain is tolerated

An outage is a story with an obvious villain: the provider, the weather, the power grid. That makes it feel like bad luck rather than a design choice. Because each incident is resolved eventually, nobody adds up the year. And the people who feel it most, such as cashiers and warehouse staff, are rarely the people who sign the telecoms contract.

## When it becomes commercially urgent

- a large customer, tender or franchise agreement asks for evidence of business continuity arrangements;
- an outage lands on month-end, payroll day or a peak trading weekend;
- the business moves its telephones, point-of-sale or accounting to the cloud and increases its dependency overnight;
- a second site or remote team depends on the main office link;
- an insurer asks about operational resilience at renewal.

## What better looks like

Better does not mean buying everything twice. It means deciding what must keep running and giving those functions a second path.

1. **List what cannot stop.** Typically card payments, order intake, dispatch and telephone contact. Everything else can wait for the line to return.
2. **Measure the current record.** Ask the provider for fault history, and keep a simple log of start time, end time and cause for the next three months.
3. **Add a second path through a different technology.** A fibre line backed by a mobile-network connection fails differently from two fibre lines in the same duct. Automatic failover is better than a manual switch, because the outage will not start when the right person is in the building.
4. **Protect the equipment, not only the line.** A small battery or inverter for the router, switch and card-machine hub keeps the network alive through load-shedding. This is often the cheapest improvement of all.
5. **Prepare an offline mode for the critical few.** Know how to take orders on paper, which card devices can store transactions, and who has the mobile numbers to call.
6. **Test it.** Unplug the main line on a quiet morning and see what happens. The reliability principles in Microsoft's guidance on [disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) stress that a recovery plan which has never been exercised is a hope, not a plan.
7. **Review the contract.** Look for repair-time targets, fault-reporting channels and what the provider owes you when it misses them.

Failover also needs thought about security. Traffic that moves to a mobile connection should still pass through the same firewall rules, and staff should not fall back to uncontrolled personal hotspots with company data. The wider picture of what infrastructure a business depends on is covered in [which digital systems are actually infrastructure](/insights/which-digital-systems-are-actually-infrastructure/).

## Practical next actions

1. Write down the five activities that stop completely when the internet fails.
2. Start a one-line outage log today: date, duration, cause, who was affected.
3. Estimate your hourly cost of an outage using the table above.
4. Get two quotes for a fallback connection that uses a different network technology.
5. Check that the router, switch and card-machine hub have battery backup.
6. Schedule a ten-minute failover test and record the result.

## Bottom line

A single connection is a reasonable choice for a business that can work offline. It is a risky one for a business whose sales, stock and telephones live online. The cost sits in idle wages, lost trade and clean-up, and it arrives in lumps that nobody adds together. Measure what an hour offline costs, protect the few functions that cannot stop, and add a second path that fails differently from the first. That is usually a modest monthly spend set against a much larger hidden bill.
