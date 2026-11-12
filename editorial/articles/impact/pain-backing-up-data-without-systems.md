---
hub: impact
record_id: CPS-152
slug: pain-backing-up-data-without-systems
title: Backing Up Data but Not the Systems That Use It
description: Backups exist, but insufficient system coverage leaves restoration slow and uncertain, increasing downtime cost after incidents.
lead: Backups exist, but insufficient system coverage leaves restoration slow and uncertain, increasing downtime cost after incidents.
category: mellorca.com
published_date: 2026-10-01
updated_date: 2026-10-01
eyebrow: Digital Infrastructure
commercial_domain: mellorca.com
primary_pain: Backups exist but are not usable due to dependent system gaps
primary_cost_mechanism: downtime, lost revenue, customer impact
sources:
  - #StopRansomware Guide - CISA | https://www.cisa.gov/stopransomware/ransomware-guide
  - https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1339.pdf | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1339.pdf
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Offline backups in an online world | https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world
related:
  - The Cost of Retyping Customer Details into Every System | /impact/pain-duplication-of-customer-data-entry/
  - The Hidden Productivity Cost of Poor Office Wi-Fi | /impact/pain-poor-office-wi-fi-slowing-employees-down/
  - Invoice Approvals Stuck in Inboxes | /impact/pain-invoice-approvals-in-inboxes/
summary: Backups exist, but insufficient system coverage leaves restoration slow and uncertain, increasing downtime cost after incidents.
layout: plain
---
## The pain: the data comes back, but the business does not

Backups are a foundational activity, yet failing to back up or validate the systems that restore and use the data undermines resilience. Many organisations can say with confidence that their databases, files and mailboxes are copied every night. Far fewer can say how long it would take to put those copies back into a working server, behind a working network, reachable by people with working accounts, and connected to the other applications the process depends on.

That gap is the tolerated pain. An organisation may discover during an incident that its data stores are recoverable in isolation, but the dependent services, networks, configurations and access paths required to operate that data are themselves degraded or unavailable. The result is prolonged downtime that dwarfs the raw recovery time of any single dataset.

## Why businesses tolerate it

The gap persists because the backup report looks healthy. The jobs complete, the storage is filling at the expected rate and nobody has been asked to prove a full restart. Backing up data is a product feature that can be switched on; backing up a system's ability to run is a design exercise that crosses several teams and suppliers. Server builds, firewall rules, identity settings, licence keys, integration credentials and installation media often live in different places, or only in an engineer's memory.

Current guidance treats these as part of recovery rather than optional extras. CISA's ransomware guide advises maintaining and regularly updating "golden images" of critical systems, using infrastructure as code to redeploy cloud resources, and storing source code or executables, licence agreements and backup hardware so systems can actually be rebuilt. NIST's 2026 OT Backup Quick Start Guide (SP 1339) similarly lists configuration files, licence keys, vendor tools, operating system or virtual machine images and compatible spare hardware as things a restore needs, and asks organisations to consider infrastructure dependencies. The principle applies well beyond industrial environments.

## The operational consequence

The operational symptoms are recognisable once you look for them:

- **Incomplete recovery tests:** restores are tested by recovering a file or a database to a spare location, never by bringing a whole service back for users.
- **Restores that fail on dependencies:** the database is back, but the application server, directory service, DNS, certificates or licence server it needs are offline or rebuilt with different settings.
- **Undocumented order of recovery:** nobody knows which system must come up first, so engineers discover the sequence by trial and error.
- **Access that cannot be re-established:** administrator accounts, multi-factor devices or supplier remote-access paths were themselves affected by the incident.
- **Extended service outages:** the business waits on rebuilding rather than restoring.

These symptoms create a cycle in which the business cannot resume essential processes, customers experience delays and trust erodes. Engineering and support teams move into firefighting, and every other planned piece of work stops behind them. If key steps depend on one person, the recovery also inherits the risk described in our analysis of [key-person operational dependency](/impact/key-person-operational-dependency/).

## The financial consequence

What makes this pain costly is the interdependence of data, infrastructure and processes. Even a robust backup catalogue does not guarantee a usable recovery if the surrounding systems are not resilient. The cost model is driven by three things: the duration of the downtime, the time spent rebuilding system readiness, and the reputational impact of perceived operational fragility. The money at stake is not just the outage window but the speed of business resumption and the assurance of data fidelity across platforms.

The useful comparison is not "backup versus no backup". It is the difference between restoring data and then rebuilding everything around it, and restoring a system that was protected as a system.

### An illustrative rand cost model

Every figure below is an **illustrative assumption**, not a benchmark. Replace each with your own numbers; our article on [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) explains how to build the hourly figure.

| Illustrative assumption | Value |
| --- | --- |
| Gross margin delayed or lost per business hour while order processing is down | R6,000 |
| Employees whose work depends on the system | 20 |
| Loaded employment cost per employee hour | R300 |
| Share of their work blocked during the outage | 60% |
| Emergency engineers during rebuild work, each at R1,200 per hour | 2 |
| Data restore time (same in both scenarios) | 6 hours |
| Rebuild time when only data was protected | 30 hours |
| Rebuild time when images, configuration and runbooks were protected | 4 hours |

**Cost per outage hour:** R6,000 margin + (20 × R300 × 60% = R3,600 blocked labour) = **R9,600**. **Emergency labour per rebuild hour:** 2 × R1,200 = **R2,400**.

> **Data-only protection**
> outage: 6 + 30 = 36 hours × R9,600 = R345,600
> rebuild labour: 30 hours × R2,400 = R72,000
> total: **R417,600**

> **System-level protection**
> outage: 6 + 4 = 10 hours × R9,600 = R96,000
> rebuild labour: 4 hours × R2,400 = R9,600
> total: **R105,600**

In this example the difference for a single incident is R417,600 − R105,600 = **R312,000**. The data restore took the same six hours in both cases. The entire difference comes from the 26 hours spent rebuilding readiness. The model also excludes reputational damage, contractual penalties and customers who quietly move elsewhere, which are real but harder to value.

## When this becomes commercially urgent

Act before an incident proves the gap. Strong triggers include a restore test that has only ever recovered files, a disaster recovery plan that names systems but not their dependencies, servers that have been hand-built and never documented, a move to cloud or a new supplier that changed how systems are deployed, and any revenue-generating process that cannot tolerate more than a working day of interruption. NIST SP 800-34's business impact analysis approach is a practical way to rank which systems deserve the investment first.

## Resolution: protect the ability to run, not just the data

Remediation focuses on system-level continuity:

1. **Map dependencies** for each critical process: data, application, servers, network, identity, certificates, licences, integrations and supplier access.
2. **Back up the build, not only the content:** system images or infrastructure-as-code templates, configuration exports, licence keys and installation media, stored where an incident cannot reach them.
3. **Document recovery runbooks** that cover data, services and access controls in the order they must return.
4. **Test restoration end to end,** measuring the time until a user can complete a real transaction, not the time until the restore job finishes.
5. **Integrate backups with change management** so new systems and changed configurations are added to protection as they appear.
6. **Assign ownership** across IT and business units, so someone is accountable for each service's restart, not just its storage.

A concrete target is a runbook that delivers not only data restoration but immediate reactivation of the supporting services and access pathways that enable productive work. When runbooks reflect real operational dependencies, downtime shrinks and confidence in business continuity rises. Our related analysis of [backups that are never restore-tested](/impact/backups-never-tested-restore-financial-cost/) covers the testing discipline in more detail, and Mellorca's [Digital Infrastructure](/services/digital-infrastructure/) work covers dependency mapping and recovery design.

## Bottom line

Better outcomes emerge when organisations treat backups as an ecosystem, not a silo. The goal is to shorten the path from incident detection to business restart, with reliable data, interoperable services and clear ownership. A backup that restores the data but not the business has only done part of the job, and the unfinished part is usually where most of the downtime cost sits.
