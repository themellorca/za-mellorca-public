---
hub: discovery
record_id: DISC-388
slug: why-recovery-environments-quietly-drift-away-from-production
title: Recovery environments drift from production
description: A standby environment that matched production last year rarely matches it now. How configuration drift defeats recovery, and how to keep the two in step during a cloud migration.
lead: A standby environment that matched production last year rarely matches it now. How configuration drift defeats recovery, and how to keep the two in step during a cloud migration.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Infrastructure or IT manager responsible for the standby environment and its upkeep
budget_owner: IT director, operations director or managing director
sources:
  - Disaster recovery options in the cloud - Disaster Recovery of Workloads on AWS: Recovery in the Cloud | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
  - Run a test failover (disaster recovery drill) to Azure in Azure Site Recovery - Azure Site Recovery | https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-test-failover-to-azure
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
related:
  - Continuity and cyber recovery plans disagree on what comes first | /discovery/continuity-and-cyber-recovery-plans-disagree-on-what-comes-first/
  - After a cloud migration, nobody updates who to call in a crisis | /discovery/after-a-cloud-migration-nobody-updates-who-to-call-in-a-crisis/
  - Manual recovery steps are not timed during tests | /discovery/why-manual-recovery-steps-need-a-stopwatch-during-every-test/
summary: A standby environment that matched production last year rarely matches it now. How configuration drift defeats recovery, and how to keep the two in step during a cloud migration.
layout: plain
---
A company moves its main application to the cloud in March. The old server room is kept as a recovery site, with copies of the data synchronised nightly. By October the cloud environment has a new authentication provider, two security patches that changed a port setting, an upgraded database version and a new integration with the payroll bureau. The recovery site has none of those. Nobody decided to leave it behind; every change was made under pressure to fix something in production, and the recovery environment was not the thing that was broken.

When the company finally needs the recovery site, it starts, but the application will not connect to the login service. The standby has drifted.

## The problem in plain language

A recovery environment is a copy of production that is not in use. Production changes every week: patches, settings, certificates, firewall rules, new integrations, new users, new versions. The copy changes only when somebody remembers to change it. Over months the two become different in dozens of small ways. Each difference is harmless until the day the standby has to carry the business, and then the sum of them decides whether recovery takes an hour or two days.

Drift is not caused by carelessness. It is the default outcome whenever changes are made by hand to one place and not recorded for the other.

## What the buyer is actually trying to solve

The person who searches for this is usually in the middle of a migration or has just run a test that failed for a reason nobody expected. They want to know how to tell whether the standby matches production now, how to keep it that way without doubling the workload, and whether it is better to maintain a standby at all or rebuild from scratch when needed. Their underlying concern is simple: will the recovery work on the day, or only on the day we last tested it?

## Evidence and system mechanism

### Configuration is part of what must be recovered

Data is only part of a recovery. In its [disaster recovery options guidance](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html), AWS says you must back up not only data but also the configuration and infrastructure needed to redeploy a workload and meet the recovery time objective. It recommends defining resources as code so they can be reliably deployed and redeployed, and warns that without that approach, restoring a workload in the recovery region may be complex, leading to longer recovery times that can exceed the objective. It also advises backing up code and configuration, including machine images, and automating redeployment.

The same logic applies outside any single vendor. If the way production is built exists only in the heads of the people who built it, and in the live system itself, the recovery environment can only be a best-effort copy.

### A plan has to cover every component

Microsoft's [reliability guidance on disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) recommends tested and documented plans that cover all components and the system as a whole. A common failure is to cover the large components, such as servers and databases, and to miss the connective items: certificates, domain name records, identity configuration, secrets, firewall rules, scheduled jobs and the settings of third-party connections. Those items are changed more often than the large components, and they are the ones most likely to differ.

### Tests reveal drift only if they are realistic

Microsoft's page on running a [test failover in Azure Site Recovery](https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-test-failover-to-azure) describes validating a replication and recovery strategy without affecting production or ongoing replication. A test of that kind is the most direct way to find out whether the standby still behaves like production, because it exercises the recovered systems against a realistic network. A test that starts the machine and stops there will not find a failed login or a closed port.

## Common sources of drift

- **Emergency fixes.** A setting changed at 22:00 to stop an outage is never repeated in the standby.
- **Software versions.** Production is upgraded; the standby image still contains last year's version and cannot read the newer data format.
- **Identity and access.** New staff, new roles and changed administrator accounts exist only in production.
- **Network rules.** New integrations require openings that the recovery network does not have, or have addresses that changed.
- **Certificates and secrets.** They expire or rotate in production; the standby holds the old ones.
- **Capacity.** Production grew, and the standby was sized for the business of two years ago.

## Why it persists

Changes are tracked for production because production is where incidents happen and auditors look. Recovery has no customers waiting on it, so it is the last place anyone updates. A migration makes this worse. During a move to the cloud, production changes shape quickly, the recovery plan written for the old design lingers, and the team rationalises that the new platform "has resilience built in". As described in [cloud migration without redesign](/impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/), old assumptions often travel with the workload. Built-in resilience features also protect against specific failures; they do not guarantee that your own configuration will rebuild correctly, a gap discussed in [critical services depending on one cloud region by accident](/discovery/critical-services-depend-on-one-cloud-region-by-accident/).

## What good looks like

A business with controlled recovery environments has stopped relying on memory. Production and recovery are built from the same definitions, whether those are infrastructure-as-code templates, scripted builds or a documented build sheet. A change is not finished until it is applied to both or the exception is recorded. A regular comparison, monthly for critical services, lists the differences between the two environments and a named person clears them. Each failover test is followed by a list of differences found and fixes made.

| Check | Production | Recovery | Match? | Owner |
| --- | --- | --- | --- | --- |
| Operating system and application versions | Record version | Record version | Yes or no | Systems administrator |
| Network rules and integrations | Record rule set | Record rule set | Yes or no | Network lead |
| Identity, roles and secrets | Record last change | Record last change | Yes or no | Security lead |
| Capacity and licences | Record size | Record size | Yes or no | IT manager |

## Risks and trade-offs

Keeping two environments aligned costs effort, and a fully identical standby doubles infrastructure spend. Many businesses choose a cheaper approach: keep only the data and the build definitions, and rebuild on demand. That reduces drift to one place, the definitions, but lengthens recovery and makes the rebuild itself something that must be practised. Neither choice is wrong. The wrong choice is to assume the standby is current without checking.

It also helps to design recovery around the service the business depends on rather than the individual server, the approach in [organising recovery plans around business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/).

## Practical next actions

1. Pick one critical service and write down every component it needs to run, including certificates, domain records, identity settings, secrets, scheduled jobs and third-party connections.
2. Compare each component in production with the recovery copy, and list every difference. Treat the length of the list as your first drift measure.
3. Change your change process so that every production change ticket has a line asking whether the recovery environment needs the same change, and who will make it.
4. Move the build of at least the critical service into scripts or templates stored in version control, so that production and recovery can be built from the same source.
5. Run a test failover or rebuild with realistic users and integrations within the next quarter, log every surprise, and repeat after each major migration step.

## When it is worth getting help

If a migration is under way and nobody holds the full picture of what production now consists of, an independent review can document the current build, set up the comparison routine and run the first realistic test. The result should be a recovery environment that matches production today, with a routine that keeps it matching.
