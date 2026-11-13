---
hub: impact
record_id: CPS-151
slug: backups-never-tested-restore-financial-cost
title: Backups nobody has tested: The cost when recovery fails
description: A backup is only a promise until the business proves it can restore the data and systems it needs within a recovery time it can survive.
lead: A backup is only a promise until the business proves it can restore the data and systems it needs, within a recovery time the operation can survive.
category: Business Continuity
published_date: 2026-08-31
updated_date: 2026-08-31
byline_category: Backup, Disaster Recovery & Business Continuity
tags:
  - Downtime
  - Recovery cost
  - Continuity risk
cta_label: Architecture & Roadmap
cta_href: /services/digital-systems-architecture-roadmap/
side_title: Cost mechanisms
side_text: Resilience problems belong in the architecture of the business, not only in backup software.
sources:
  - #StopRansomware Guide - CISA | https://www.cisa.gov/stopransomware/ransomware-guide
  - Contingency Planning Guide for Information Technology Systems | https://www.nist.gov/publications/contingency-planning-guide-information-technology-systems
  - Offline backups in an online world | https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world
closing_title: Method note
closing_text: Downtime calculations in this article are a framework, not a benchmark. Use your own payroll, contribution margin, recovery and service-level data.
related:
  - Backups in the same place as the data: The risk of losing both | /impact/backups-same-environment-losing-both-copies-risk/
  - Backing up data but not the systems that use it | /impact/pain-backing-up-data-without-systems/
  - Not knowing who still has access to your systems | /impact/uncontrolled-system-access-financial-risk/
---
## A green backup job is not the same as recovery

Many organisations can show that a backup process ran successfully last night. Far fewer can answer the questions that matter during an incident: Which systems must be restored first? How long will it take? Are the credentials available? Are application configurations, keys and dependencies included? Can staff actually open and use the restored information?

The pain appears only when the business needs the backup. By then, discovering that a file is corrupt, incomplete, inaccessible or operationally useless is expensive.

Consider a manufacturing business in Durban with around 80 staff. Its accounting database, job-costing system and shared drive are backed up nightly to a network storage device in the server room, and a monthly copy goes to cloud storage. The backup software reports success every morning. When a server fails, the team discovers three things in the first hour: the database backup restores, but the licence key and configuration for the job-costing application were never captured; the person who set up the cloud account has left and nobody has the administrator login; and the monthly cloud copy is three weeks old. Each problem is solvable, but each costs hours while the factory floor waits for job cards.

## Why this problem gets tolerated

Backup is easy to treat as a technical checkbox because normal operations provide almost no daily feedback about recovery quality. Storage jobs run in the background and success emails create confidence. Restore testing, by contrast, consumes time, requires coordination and can expose uncomfortable gaps.

[CISA's ransomware guidance](https://www.cisa.gov/stopransomware/ransomware-guide) explicitly recommends maintaining offline encrypted backups and regularly testing their availability and integrity in a disaster-recovery scenario. It also recommends keeping "golden images" of critical systems, preconfigured templates that can be redeployed quickly. [NIST contingency-planning guidance](https://www.nist.gov/publications/contingency-planning-guide-information-technology-systems) likewise treats testing, training and exercises as part of maintaining a viable recovery capability, alongside a business impact analysis and ongoing plan maintenance. The UK [National Cyber Security Centre](https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world) adds that at least one backup should be offline at any time, so that an incident cannot affect every copy simultaneously, and that backups should be regularly tested to check they work as expected. The principle is simple: **recovery has to be demonstrated, not assumed.**

## How failed recovery turns into financial pain

- **Employee downtime:** payroll continues while staff cannot access systems or data.
- **Revenue interruption:** orders, appointments, billing or customer service may stop.
- **Emergency technical spend:** specialists, replacement infrastructure and recovery services are purchased under pressure.
- **Reconstruction labour:** teams rebuild records, configurations and transactions manually.
- **Customer and supplier disruption:** commitments are delayed while the business works from incomplete information.
- **Reduced negotiating room in a cyber incident:** if an attacker also reaches accessible backups, the organisation can lose its clean recovery path.

The NCSC notes that ransomware has encrypted not only original data but also connected USB and network drives holding backups. A backup device permanently attached to the same network, using the same administrator accounts, is therefore part of the attack surface rather than protection from it.

## Calculate the cost before the outage

The business does not need a generic "average downtime cost" to justify resilience. Calculate its own exposure.

> **Hourly operational exposure**
> idle payroll + lost contribution margin + emergency operating cost + contractual or service penalties

> **Scenario model**
> 4-hour exposure = hourly exposure × 4
> 24-hour exposure = hourly exposure × 24
> 3-day exposure = hourly exposure × 72

Not every rand of revenue is permanently lost during an outage. Separate revenue that is merely delayed from revenue that genuinely disappears. That distinction produces a more credible model. A professional practice may recover most delayed billing once systems return; a retailer or a business with same-day delivery commitments may lose sales outright. Mellorca's article on [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) walks through building this figure from your own payroll and margin data.

These calculations are a framework, not a benchmark. Use your own payroll, contribution margin, recovery and service-level data rather than published averages.

## A restore test should answer business questions

A useful test is not merely "can we restore a file?" It should confirm that the correct data is protected, critical applications and configurations can be rebuilt, dependencies are understood, restored data is recent enough, the recovery order matches business priorities, and the achieved recovery time is acceptable.

> **The commercial signal.** If management can say "we have backups" but cannot say how long the business takes to recover a critical service, the organisation has storage evidence, not proven resilience.

### What a practical test looks like

For a small or mid-sized business, a meaningful test can be done in a day without disrupting production:

1. Choose one critical workload, such as the accounting system.
2. Restore it to a separate machine or isolated environment, not over the live system.
3. Have a real user log in and perform normal tasks: open a customer, post a test entry, run a report.
4. Record how long each step took, what was missing, and who had to be called.
5. Compare the age of the restored data with what the business said it could tolerate losing.
6. Write up the blockers with an owner and a date for each fix.

The most common findings are not technical failures of the backup software. They are missing passwords and licence keys, undocumented steps that only one person knows, cloud services that were assumed to be backed up by the provider, and restore times far longer than anyone expected.

## When this becomes commercially urgent

Immediate attention is warranted when backups have never been restored in a test, when all copies are reachable from the same administrative environment, when important SaaS data has no independent recovery plan, when the company has changed systems without updating recovery procedures, or when recovery depends on one person being available.

### Warning signs to check this week

- Nobody can say when the last successful restore test happened.
- Backup failure alerts go to a single mailbox, or to someone who has left.
- Backup storage uses the same administrator credentials as the main network.
- Email, CRM or file-sharing data in cloud services is not included in any backup plan.
- The recovery procedure, if one exists, is stored only on the systems it is meant to recover.

Mellorca's pattern article on [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/) looks at the wider operating picture, and [unmonitored backups and false recovery confidence](/impact/unmonitored-backups-false-recovery-confidence/) covers the monitoring gap specifically.

## What good looks like

Good backup operations have defined recovery objectives, appropriately separated copies, monitored backup jobs, documented restoration procedures and scheduled recovery tests. Test results create actions, owners and deadlines. Management understands the business impact, not just the technical status.

There are trade-offs. Offline or immutable copies add cost and some operational effort. More frequent backups reduce potential data loss but increase storage and may need more bandwidth. Faster recovery, such as standby systems, costs more than restoring from a slower archive. The right balance depends on what each process can tolerate, which is why the business, not only IT, needs to set the recovery objectives.

## Practical next actions

1. Identify the systems and data that would stop the business if unavailable.
2. Define how much data loss and downtime each process can tolerate.
3. Confirm where backups live and whether one mistake or compromise could affect every copy.
4. Run a controlled restore test of a representative critical workload.
5. Time the recovery and document every blocker.
6. Repeat tests after material system changes and on a defined schedule.

### What to do first

If you do only one thing this month, schedule a restore test of your most important system and ask a business user, not just IT, to confirm the restored system is usable. Store the result, including the time taken, where management can see it.

## Bottom line

Backups reduce risk only when recovery works. The commercial pain of an untested backup is false confidence: the business believes it has bought resilience, but it has not yet proved that the operation can return when a system fails.
