---
hub: discovery
record_id: DISC-313
slug: platform-logs-kept-without-a-clear-purpose
title: Why platform logs pile up without anyone knowing what they are for
description: Many businesses collect and store large volumes of system logs, yet cannot find the right evidence during an outage. How to give every log source a purpose, an owner and a retention period.
lead: Many businesses collect and store large volumes of system logs, yet cannot find the right evidence during an outage. How to give every log source a purpose, an owner and a retention period.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or infrastructure lead, with the security or compliance officer and the information officer
budget_owner: Chief information officer or chief financial officer
sources:
  - SP 800-92 Rev. 1, Cybersecurity Log Management Planning Guide - CSRC | https://csrc.nist.gov/pubs/sp/800/92/r1/ipd
  - Logging - OWASP Cheat Sheet Series | https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
  - Manage Data Retention in a Log Analytics Workspace - Azure Monitor | https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-configure
  - Section 14 Retention and restriction of records - POPIA | https://popia.co.za/section-14-retention-and-restriction-of-records/
related:
  - Why infrastructure incidents cannot be linked to the change that caused them | /discovery/infrastructure-incidents-cannot-be-linked-to-recent-changes/
  - Why certificates expire when nobody clearly owns their renewal | /discovery/certificates-expire-because-nobody-owns-renewal/
  - When monitoring alerts fire and nobody knows who should respond | /discovery/monitoring-alerts-without-a-clear-response-owner/
summary: Many businesses collect and store large volumes of system logs, yet cannot find the right evidence during an outage. How to give every log source a purpose, an owner and a retention period.
layout: plain
---
During a three-hour outage of an online ordering system, the IT team searches for the cause. The logging platform holds two years of data from forty sources, at a monthly cost nobody has questioned in a while. Yet the application's error log for the failing component was never connected, the load balancer logs are kept for only seven days, and the debug logging someone switched on last year is filling storage with customer names and phone numbers. Plenty of logs exist. The ones needed do not.

This is the result of logging without a purpose. Logs are switched on because a tool makes it easy, kept because deleting feels risky, and rarely reviewed against what the business actually needs from them.

## The problem in plain language

Logs are records that systems write about what they are doing: errors, sign-ins, changes, requests. They are useful for fixing problems, detecting attacks and proving compliance. But each log source should exist for a reason, be kept for a defined period, and be owned by someone. Signs that this is missing include:

- no list of which systems send logs where;
- retention set to the tool's default, or to “forever”;
- logging costs rising with no link to any decision;
- personal or sensitive information appearing in logs;
- incident teams unable to find the logs they need, despite large volumes stored.

## What the buyer is actually trying to solve

People search for how long to keep logs, how to reduce logging costs, what logs to collect for security, or whether logs fall under POPIA. IT managers want useful evidence during incidents. Finance wants to know why the logging bill keeps growing. Compliance officers want to know what personal information sits in logs and for how long. The real need is a short logging standard: what each source is for, who owns it, what it should contain and how long it is kept.

## Evidence and system mechanism

### Log management is a lifecycle, with purposes

NIST's draft [Cybersecurity Log Management Planning Guide](https://csrc.nist.gov/pubs/sp/800/92/r1/ipd) (SP 800-92 Rev. 1) defines log management as generating, transmitting, storing, accessing and disposing of log data. It names the purposes: identifying and investigating cybersecurity incidents, finding operational issues, and ensuring records are kept for required periods. Disposal is part of the lifecycle, not an afterthought.

### Logging has operational and security purposes, and limits

The OWASP [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) separates operational uses, such as debugging and performance monitoring, from security uses, such as detecting incidents and creating audit trails. It lists data that should not be recorded directly, including passwords, session tokens, payment card and bank details, and sensitive personal information. It also says log data should not be destroyed before the required retention period and must not be kept beyond it.

### Retention is a setting, and it costs money

Microsoft's Azure Monitor documentation on [managing log retention](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-configure) shows that retention can be set per table, from a few days to many years, with lower-cost long-term tiers, and that charges are based on data volume and days retained. Without a decision per source, every table inherits the same default, whether the data is valuable or not.

### Personal information must not be kept longer than needed

Section 14 of the [Protection of Personal Information Act](https://popia.co.za/section-14-retention-and-restriction-of-records/) says records of personal information must not be kept longer than necessary for the purpose for which they were collected, subject to exceptions such as legal requirements. Logs that contain customer or staff details fall within this.

## Problem owner and why-now trigger

The IT manager or infrastructure lead owns the logging platform. The security or compliance officer defines what must be kept for investigations and audits, and the information officer has an interest in personal information held in logs. Budget usually sits with the chief information officer or chief financial officer.

The most common trigger is an availability incident in which the team cannot find the evidence it needs. Others include a logging bill that jumps after a cloud migration, a security investigation, a POPIA review that finds personal data in logs, or an auditor asking for a retention policy.

## Economic consequence

- **Longer outages.** Missing or unsearchable logs slow diagnosis. The broader point is made in [the difference between having data and having visibility](/patterns/the-difference-between-having-data-and-having-visibility/).
- **Rising storage and ingestion cost.** Volume grows with every service, much of it never read.
- **Privacy exposure.** Personal information kept in logs without need increases the impact of any breach.
- **Audit gaps.** Logs that matter for compliance may be kept too briefly while low-value logs are kept for years.
- **Noise.** Large volumes of irrelevant data make real signals harder to see.

## Root cause

- **Logging is switched on by default.** Tools make it easy to collect everything and hard to see the cost.
- **No purpose per source.** Nobody has decided what each log is for.
- **Retention by default.** Periods are inherited rather than chosen.
- **Developers control content.** What goes into application logs is decided in code, without privacy review.
- **No review.** Sources are added as systems arrive and never removed.

## Practical intervention

1. **Inventory log sources.** List each source, its destination, volume, retention and cost.
2. **Assign a purpose.** For each source, record whether it supports operations, security, compliance or nothing identifiable.
3. **Set retention by purpose.** Short periods for debugging and performance data, longer for security and audit logs, and periods required by law or contract where they apply.
4. **Fill the gaps.** Connect the logs your incident and security teams actually need for critical services.
5. **Remove or reduce noise.** Turn off unused sources and lower verbose debug logging in production.
6. **Review content for personal data.** Remove or mask personal and sensitive fields, and agree logging rules with developers and suppliers.
7. **Review twice a year.** Compare sources, retention and costs against the standard.

Logging for automated workflows deserves the same discipline, as discussed in [why AI agents and automated workflows need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/).

### Trade-offs

Cutting retention too far can leave you without evidence when an incident is discovered late. Agree minimum periods for security and audit logs with your compliance lead before reducing anything, and use low-cost archive tiers where long retention is genuinely needed.

### An illustrative example

Illustrative: an East London insurance broker with about 80 staff found its logging costs had tripled after a cloud migration. An inventory showed most volume came from verbose application debugging and network flow data that nobody queried, while sign-in logs for its policy system were kept for only 30 days. The team set retention by purpose, reduced debug logging, masked client identity numbers in application logs, and extended sign-in log retention. Costs fell and the next investigation found its evidence quickly.

## Diagnostic questions

- Can you list every log source and what it is for?
- How long is each kept, and who decided?
- Which logs did your last incident need, and were they available?
- Do any logs contain personal information that does not need to be there?
- What did logging cost last month, and which sources drove it?

## What good looks like

Every log source has a stated purpose, an owner and a retention period set by that purpose. Logs needed for incidents and security are present and searchable. Personal information is excluded or masked, and nothing is kept longer than necessary. Costs are visible by source and reviewed. When an outage happens, the evidence is there.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can inventory log sources, set retention by purpose and connect missing logs. Mellorca's [managed digital operations](/services/managed-digital-operations/) service can run the twice-yearly review and keep the logging standard current.

## Method note

This article draws on NIST and OWASP guidance, current cloud provider documentation and the text of POPIA. It is not legal advice; confirm retention periods that apply to your sector with your compliance adviser. The example is illustrative rather than a client case.
