---
hub: impact
record_id: CPS-162
slug: servers-backed-up-saas-cloud-application-data-unprotected-incomplete-backup-cost
title: Servers Backed Up, Cloud Apps Exposed: The Cost of Half a Backup Plan
description: Many businesses still back up the office server faithfully while email, shared files, CRM and accounting data now live in cloud applications that sit outside the backup plan entirely.
lead: Many businesses still back up the office server faithfully while email, shared files, CRM and accounting data now live in cloud applications that sit outside the backup plan entirely.
category: Business Continuity
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity
commercial_domain: Business Continuity
primary_pain: Servers are backed up while SaaS and cloud application data, where most current records live, is left outside the backup plan
primary_cost_mechanism: Staff time recreating deleted or corrupted work, lost customer history in CRM, slow partial recovery through retention features, and continued spending on a backup routine that protects mainly archives
sources:
  - https://www.microsoft.com/en-us/servicesagreement | https://www.microsoft.com/en-us/servicesagreement
  - https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data | https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data
  - https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview | https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview
summary: Many businesses still back up the office server faithfully while email, shared files, CRM and accounting data now live in cloud applications that sit outside the backup plan entirely.
layout: plain
---
## A backup routine designed for a different business

The IT routine at a Pretoria professional services firm was set up ten years ago. Every night, the file server copies to an external drive, and once a week a copy goes offsite. The routine has never failed. Over the same ten years, the firm moved its email to Microsoft 365, its client files to SharePoint and OneDrive, its sales pipeline to a cloud CRM and its bookkeeping to an online accounting package. The server now holds old archives and a few legacy folders. The business data that matters most has moved, and the backup plan did not move with it.

Nobody noticed because nothing had gone wrong. The backup report still arrived each morning saying "completed successfully".

## Why cloud applications are not automatically backed up

Cloud providers protect their own infrastructure very well. They replicate data across data centres so that a hardware failure does not lose it. That is resilience of the service, not a backup of your business records. If a user deletes a folder, if an automation overwrites customer records, if ransomware encrypts synced files, or if a departing employee's account is removed, the provider will faithfully replicate that change.

The providers say so themselves. The [Microsoft Services Agreement](https://www.microsoft.com/en-us/servicesagreement) recommends, in its section on service availability, that users regularly back up their content and data. The UK National Cyber Security Centre's guidance on [backing up critical data in online services](https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data) advises that you should not rely solely on a provider's built-in mechanisms and should keep an independent copy in another safe place or service.

Microsoft now sells a separate product, [Microsoft 365 Backup](https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview), for OneDrive, SharePoint and Exchange Online, priced per gigabyte protected per month. Its existence makes the point: protection beyond normal retention features is an extra decision the customer has to make.

## Where the gaps usually are

- **Email and calendars** in Microsoft 365 or Google Workspace, protected only by recycle bins and retention settings.
- **Shared files** in SharePoint, OneDrive, Google Drive or Dropbox, where a sync can spread deletion or encryption.
- **CRM records**, including notes, deal history and attachments.
- **Accounting and payroll data** held by an online package, where export may be possible but is rarely scheduled.
- **Configuration**: automation rules, user permissions, templates and integrations that take weeks to rebuild.

## What incomplete protection costs

The figures below are illustrative and based on stated assumptions.

### Recreating lost work

If a shared project folder with three months of client work is deleted beyond the recycle bin window, a team of four may spend two weeks reconstructing it from email attachments and memory. At a loaded cost of R450 an hour, that is roughly R140,000 of time, with no guarantee the result is complete.

### Lost customer history

Corrupted or deleted CRM data removes context for sales and service. Follow-ups are missed, quotes are repeated and customers notice that the business has forgotten their history.

### Recovery delay

Even where some recovery is possible through retention features, restoring item by item is slow. The question of how much data the business can afford to lose, covered in [undefined recovery points](/impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/), has usually never been answered for cloud applications.

### Paying for protection that covers the wrong things

The server backup still costs money for software, drives, support time and storage. If it protects mainly archives, the business is paying for reassurance rather than protection.

## Why the gap persists

Backup decisions are often made once, by a supplier, and then left. Moving to cloud applications is usually treated as a licensing change rather than an infrastructure change. The related assumption that providers cover everything is examined in [assuming cloud applications back up all business data](/impact/assuming-cloud-applications-back-up-all-business-data-backup-gaps-recovery-cost/). This article is about the more specific situation where a backup programme exists, works, and is pointed at the wrong place. The guidance on [treating SaaS applications as operating infrastructure](/insights/why-saas-applications-are-part-of-your-operating-infrastructure-not-just-subscriptions/) explains why they need the same protection decisions as servers.

## A short test of your current position

Three questions reveal most gaps quickly. First, if a user deleted the main shared client folder today and nobody noticed for six weeks, could you get it back? Second, if your CRM provider closed your account tomorrow because of a billing dispute or a security lock, how much of your customer history would you still hold? Third, if a former employee's mailbox was removed three months ago, is that correspondence recoverable? If the honest answer to any of these is "probably not" or "we would have to ask the provider", the backup plan does not yet cover the business as it operates today.

These questions also help when talking to an IT provider. They move the conversation away from technical features and towards outcomes that the owner and operations team can judge directly.

## Building a backup plan that matches where data lives

- Start from the business processes, not the hardware: list where the records for each important process are kept.
- For each application, record what the provider's built-in retention covers and for how long.
- Decide on independent protection for the applications that matter, through the vendor's backup product, a third-party service or scheduled exports.
- Agree recovery targets: how much data you can lose, and how quickly each application must be restored.
- Test restores, including a single file, a mailbox and a set of CRM records. The risks of skipping this are covered in [backups that are never tested](/impact/backups-never-tested-restore-financial-cost/).

## Practical next actions

1. **Map where your business data lives today.** List every cloud application that holds records you could not easily recreate.
2. **Compare that list with your backup scope.** Mark each application as protected, partly protected through retention only, or unprotected.
3. **Read each provider's retention terms.** Note recycle bin periods, version history and what happens when a user account is removed.
4. **Price independent backup for the gaps.** Compare vendor backup products, third-party services and scheduled exports, including storage costs.
5. **Set recovery targets per application.** Agree acceptable data loss and restore time with the people who run each process.
6. **Run a restore test each quarter.** Record how long it took and what could not be recovered.

A backup report that says "completed successfully" only shows that the configured backup ran. If that configuration still reflects how the business stored data ten years ago, much of today's important data may be outside it.
