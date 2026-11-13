---
hub: impact
record_id: CPS-153
slug: backups-same-environment-losing-both-copies-risk
title: Backups in the same place as the data: The risk of losing both
description: Backups on the same network, server, account or cloud tenant can be lost with the original. Why separation matters and how to cost the difference.
lead: Backups on the same network, server, account or cloud tenant can be lost with the original. Why separation matters and how to cost the difference.
category: Business Continuity
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Business Continuity
commercial_domain: Business Continuity
primary_pain: Backups are stored in the same environment as the original data
primary_cost_mechanism: Extended downtime, reconstruction labour and permanent data loss when both copies are lost together
sources:
  - Offline backups in an online world | https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world
  - Shared responsibility in the cloud - Microsoft Azure | https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility
  - Ransomware Guide - Cybersecurity and Infrastructure Security Agency (CISA) | https://www.cisa.gov/stopransomware/ransomware-guide
related:
  - Important accounts without MFA: The cost of preventable takeover | /impact/accounts-without-mfa-financial-risk/
  - Backing up data but not the systems that use it | /impact/pain-backing-up-data-without-systems/
  - When cloud spend has no business owner | /impact/cloud-costs-without-business-owner-allocation/
  - The cloud is not a backup: Finding data protection gaps before you lose data | /impact/assuming-cloud-applications-back-up-all-business-data-backup-gaps-recovery-cost/
summary: Backups on the same network, server, account or cloud tenant can be lost with the original. Why separation matters and how to cost the difference.
layout: plain
---
## The tolerated pain: the backup sits next to the original

Many businesses that "have backups" have them in the same place as the data they are meant to protect. The backup is a second folder on the same server. It is a network storage device on the same office network, permanently connected and reachable with the same administrator password. It is a copy in the same cloud account, managed by the same login. Or it is no separate copy at all, because the business assumes its cloud provider takes care of it.

These arrangements protect against small accidents: a deleted file, a corrupted spreadsheet. They do not protect against the events that actually threaten a business: ransomware, a compromised administrator account, a fire or burst pipe in the server room, theft, or a mistake made with full administrative rights. In each of those cases, whatever happens to the original can happen to the backup at the same time.

Mellorca has written about [backups nobody has tested](/impact/backups-never-tested-restore-financial-cost/) and about [unmonitored backups](/impact/unmonitored-backups-false-recovery-confidence/). This article deals with a more basic design flaw: a backup that shares its environment with the original is not independent, and so may not be there when it is needed.

## Why backups end up in the same environment

- **Convenience.** A connected drive or a second folder is easy to set up and quick to restore from.
- **Cost.** A separate location, offline media or a second provider feels like an extra expense for something that may never be used.
- **One administrator account for everything.** Small IT environments often use the same admin credentials for servers, storage and the backup software.
- **Cloud assumptions.** Moving to Microsoft 365, Google Workspace or a cloud server can create the belief that the provider protects the data in every scenario.
- **Success messages.** The backup job reports success every night, so nobody asks where the copy actually lives.

### The cloud does not remove this responsibility

Microsoft's [shared responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) guidance is explicit that for every deployment type, including software as a service, the customer retains responsibility for its data, its accounts and identities, and access management. The provider secures the physical infrastructure and platform. Deciding how data is protected against deletion, compromise of the customer's own accounts or misconfiguration remains with the business. A copy kept in the same tenant, under the same administrator accounts, is still in the same environment.

## Operational consequence

The UK National Cyber Security Centre reports incidents in which ransomware encrypted not only the original data but also connected backup storage, including cloud locations. CISA's [ransomware guidance](https://www.cisa.gov/stopransomware/ransomware-guide) makes the same observation: many ransomware variants attempt to find and then delete or encrypt accessible backups. That is why both agencies emphasise copies that are offline, or otherwise separated, when not in use.

When the backup is lost along with the original, the business faces a different kind of outage:

- **No clean recovery point.** Systems cannot simply be restored; they must be rebuilt, and data recreated from emails, paper, customers and memory.
- **Extended downtime.** Recovery takes weeks rather than hours or days.
- **Permanent data loss.** Some records, such as transaction history, job files and design work, may never be fully recovered.
- **Weak position in a ransomware incident.** Without an independent copy, the business has fewer options.
- **Compliance exposure.** Loss of personal information, or inability to produce required records, creates obligations and questions under POPIA and tax record-keeping rules.

## How the pain becomes money

- **Downtime cost:** staff paid while unable to work, and revenue that cannot be earned while systems are down.
- **Reconstruction labour:** weeks of effort rebuilding records, configurations and transaction history.
- **Emergency spend:** specialist recovery, replacement hardware and urgent consulting at short notice.
- **Revenue loss:** customers who cannot be served or invoiced, and some who do not come back.
- **Risk exposure:** regulatory, contractual and reputational consequences of lost data.

## Calculate the difference independence makes

The financial case for separation is the difference between two recovery scenarios: restoring from an independent copy, and rebuilding without one.

> **Scenario A: independent backup survives**
> hourly operational exposure × restore time + data re-entry since last good backup
> **Scenario B: backup lost with the original**
> hourly operational exposure × rebuild time + reconstruction labour + permanent data loss + emergency external spend

Hourly operational exposure is the business's own idle payroll plus genuinely lost contribution margin per hour; Mellorca's article on [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) shows how to calculate it. The gap between Scenario A and Scenario B is what an independent copy is worth. For most businesses it is many times the annual cost of separating the backup.

*Illustrative example.* An architectural practice in Stellenbosch with 18 staff keeps its project files on a file server and backs them up nightly to a network storage device in the same cupboard, using the same administrator account. Its cloud email is not backed up separately. When the partners model the two scenarios using their own salary and fee data, the difference is stark: a restore from an independent copy would cost a day or two of disruption, while losing both copies would mean reconstructing drawings and correspondence for every live project. The practice moves one copy off-site to a separate cloud account with its own credentials and immutability turned on, and adds a third-party backup of its email.

## When it becomes commercially urgent

- the only backup is on a device permanently connected to the same network;
- the backup system uses the same administrator account as the servers or cloud tenant it protects;
- all copies are in the same building;
- cloud data such as email and shared files has no copy outside the provider's own platform;
- the business holds records it is legally required to keep, or data it could not recreate.

## What better looks like

The NCSC summarises the principle as the 3-2-1 approach: at least three copies, on two different devices, with one off-site. It adds that [offline backups](https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world) should be digitally disconnected when not in use, which for cloud storage means separate credentials, limiting which devices can reach the backup and denying connections when the backup is not in use.

CISA recommends offline, encrypted backups of critical data and regular testing of their availability and integrity. It notes that some cloud vendors offer immutable storage, which protects stored data without the need for a separate environment, and suggests considering more than one provider so that a compromise of one vendor account does not reach every copy.

| Separation test | Question to ask |
| --- | --- |
| Location | Is at least one copy in a different building or region? |
| Network | Is at least one copy unreachable from the production network most of the time? |
| Credentials | Does the backup use different accounts from the systems it protects, with MFA? |
| Immutability | Can backups be altered or deleted before their retention period ends? |
| Provider | Is cloud data copied outside the account or platform it lives in? |

## Practical remediation steps

1. **Map where every backup copy lives** and which accounts can reach it.
2. **Separate credentials** so the backup system has its own administrator accounts, protected by MFA and not used for daily work.
3. **Create one independent copy** off-site or in a separate cloud account, with immutability or retention lock enabled where available.
4. **Back up cloud services** such as email and shared files to a location outside the same platform.
5. **Disconnect or restrict** the independent copy so it is not continuously reachable from the production network.
6. **Test a restore from the independent copy**, not just from the local one.
7. **Review the design annually** and whenever systems move or change.

Ongoing backup design, monitoring and restore testing are part of Mellorca's [managed digital operations](/services/managed-digital-operations/). The wider point, that a backup is only one part of being able to keep operating, is covered in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/).

## Bottom line

A backup stored beside the original shares its fate. The same ransomware, stolen password, fire or mistake can remove both, leaving the business to rebuild rather than restore. One independent copy, with separate credentials and protection from alteration, is the difference between an inconvenient day and a crisis measured in weeks.
