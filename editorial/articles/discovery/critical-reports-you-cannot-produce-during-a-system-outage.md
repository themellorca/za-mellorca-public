---
hub: discovery
record_id: DISC-397
slug: critical-reports-you-cannot-produce-during-a-system-outage
title: The reports you need most are the ones you cannot run during an outage
description: Payroll, stock, cash and customer lists are needed most when the main system is down. How to identify the reports a business cannot operate without, and keep a way to produce them in an outage.
lead: Payroll, stock, cash and customer lists are needed most when the main system is down. How to identify the reports a business cannot operate without, and keep a way to produce them in an outage.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity lead working with the financial controller
budget_owner: CFO, COO or managing director
sources:
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - Active Geo-Replication - Azure SQL Database | https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview
related:
  - Recovery order set by system owners, not by how the business runs | /discovery/recovery-order-set-by-system-owners-not-by-how-the-business-runs/
  - Who tells customers what during an outage? Fix it before the next one | /discovery/who-tells-customers-what-during-an-outage/
  - Crisis decisions that nobody writes down, and why it costs you later | /discovery/crisis-decisions-that-nobody-writes-down/
summary: Payroll, stock, cash and customer lists are needed most when the main system is down. How to identify the reports a business cannot operate without, and keep a way to produce them in an outage.
layout: plain
---
The ERP system at a food distributor goes down on the morning of the 25th, after a failed update. The technical team expects it back in a day or two. Then the questions start. Finance needs the payroll and supplier payment listing to release salaries. The warehouse needs the list of today's deliveries and customer addresses. Sales needs credit limits before releasing urgent orders. The insurer wants the stock valuation as at the outage. Every one of these reports normally comes from the ERP. None of them can be produced until it returns.

## The problem in plain language

Recovery plans usually focus on getting systems back. They rarely ask what information the business needs while the systems are still down. Some reports are needed every day to keep operating: what to deliver, whom to pay, how much cash is available, which customers can be supplied on credit. Others become urgent because of the outage itself: insurers, auditors, banks and regulators may ask for figures as at the time of the incident. If every one of those reports depends on the system that has failed, the business is both blind and stuck.

## What the buyer is actually trying to solve

The financial controller, operations director or continuity lead who asks about this wants to know which reports are critical, how fresh they need to be, and how to produce them when the source system is unavailable, without building a second copy of everything. Often the prompt is an audit or insurance question about how the business would operate and report during a prolonged outage.

## Evidence and system mechanism

### Contingency planning includes operating without the system

NIST's [contingency planning guide, SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), helps organisations evaluate systems and operations to set contingency requirements and priorities, and provides a business impact analysis template. A business impact analysis is the natural place to record not just which systems matter but which outputs from them the business relies on.

### Plans and the information to run them must stay reachable

Microsoft's [disaster recovery guidance](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) says recovery succeeds only when the plan and the tools needed to execute it remain available under all failure conditions. It recommends storing documentation and recovery components in highly available locations and maintaining offline or printed copies for worst-case scenarios. The same reasoning applies to the critical reports the business needs while it recovers.

### A readable copy can serve reporting

Technology can provide a second source for reports. Microsoft's documentation on [active geo-replication for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview) describes readable secondary databases that applications can query for read-only workloads, kept transactionally consistent but possibly slightly behind the primary. Where the core system is built this way, reports can sometimes run from the secondary during a primary outage. Where it is not, a scheduled export of a small set of critical reports to a separate location can do the same job for much less.

## Why this becomes urgent

Audit and insurance requirements are common triggers. Insurers may ask for stock, asset or revenue figures at the time of an incident to assess a claim, and auditors reviewing continuity arrangements ask how financial reporting would continue. Other triggers include an outage that coincides with payroll or month-end, a ransomware incident where the main system and its reporting are both encrypted, and a move to a cloud system where reports that used to run from a local copy now depend entirely on the vendor's availability.

## Economic consequence

Without critical reports, the business either stops or acts on guesswork. Salaries and supplier payments are delayed, which affects staff and supplier relationships. Deliveries are missed because nobody knows what was due. Orders are released to customers who are over their credit limit, or held for customers who are not. Insurance claims are delayed or reduced because the business cannot evidence its position. Managers spend the outage rebuilding figures by hand from email and memory, a risk discussed in [reports assembled by hand](/patterns/the-risk-inside-reports-that-are-assembled-by-hand/). Our piece on [the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) shows how quickly that adds up.

## Root cause

- **Reports are not in the continuity plan.** The plan lists systems, not the information outputs the business needs.
- **Every report runs from the live system.** There is no read-only copy or recent export that survives the outage.
- **Critical reports were never identified.** Nobody has distinguished the handful that matter during an outage from the hundreds produced routinely.
- **Informal copies are unreliable.** Spreadsheet extracts on individual laptops may exist, but nobody knows how current they are, a pattern described in [spreadsheet extracts becoming the reporting system](/discovery/how-spreadsheet-extracts-quietly-become-the-reporting-system/).
- **Outages hit at reporting peaks.** Month-end, payroll and year-end are when systems are under most strain and reports most needed.

## What good looks like

The business has a short, agreed list of outage-critical reports, typically between five and fifteen: payroll and payment listings, open orders and deliveries, customer credit positions, stock on hand by location, bank and cash position, key contacts, and any figures insurers or lenders would require. For each report, the plan records who needs it, how current it must be and where an outage copy is kept. Those reports are produced automatically on a schedule, for example nightly, to a secure location independent of the main system, in a format that can be opened without it. Access is tested, and someone checks periodically that the exports are complete and current. Where the platform supports readable secondary copies, reporting during an outage is routed there.

## Diagnostic questions

- If your main system were unavailable for three days starting on payroll day, which reports would you need, and where would they come from?
- Is there a copy of those reports that does not depend on the main system or its network?
- How old would that copy be at the moment of an outage?
- Who has access to it, and have they tried to open it recently?
- What figures would your insurer ask for after a major incident?

## Practical next actions

1. Ask finance, operations and sales leaders which reports they would need in the first three days of a main system outage, and agree a short list.
2. For each report, record the owner, the required freshness and the format needed.
3. Set up a scheduled export of those reports to a secure location independent of the main system, in a format that opens without it.
4. Restrict and log access to the exports, since they often contain personal and financial information.
5. Add a monthly check that the exports ran, are complete and can be opened by the people who need them.
6. Include producing these reports from the outage copy in your next continuity exercise, ideally timed to a payroll or month-end scenario.

## Where Mellorca fits

Mellorca helps businesses identify outage-critical information, design read-only or exported reporting paths that survive a primary system failure, and fit them into the continuity plan. This usually sits within our [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work.

## Method note

This article draws on NIST SP 800-34 and Microsoft's disaster recovery and Azure SQL documentation. It does not prescribe a specific technology. Exported reports containing personal information must be handled in line with POPIA. The opening example is illustrative.
