---
hub: impact
record_id: CPS-212
slug: employee-device-storage-not-backed-up-synchronised-preventable-data-loss-cost
title: Work Lost With the Laptop: The Cost of Storage That Is Not Synchronised
description: Many businesses pay for cloud storage that would protect every file, yet staff still save work to the desktop, the downloads folder or an unsynced drive. When the device fails, the work goes with it.
lead: Many businesses pay for cloud storage that would protect every file, yet staff still save work to the desktop, the downloads folder or an unsynced drive. When the device fails, the work goes with it.
category: Digital Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Employees lose work because files saved on their devices are outside synchronised and backed-up folders
primary_cost_mechanism: Staff time recreating lost work, missed deadlines and client penalties, uncertain data recovery attempts, slower device replacement, and personal information exposure from lost or stolen devices
sources:
  - Redirect and move Windows known folders to OneDrive - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/redirect-known-folders
  - Back up your organisation’s critical data | https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data
related:
  - When your experts become the help desk: The cost of routine requests | /impact/specialists-pulled-into-routine-requests-expertise-cost/
  - Cloud prices for old infrastructure: The cost of moving without redesign | /impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/
  - The cost of work waiting for approval | /impact/approval-queues-blocked-capacity-cost/
summary: Many businesses pay for cloud storage that would protect every file, yet staff still save work to the desktop, the downloads folder or an unsynced drive. When the device fails, the work goes with it.
layout: plain
---
## The business had the tool, but not the setting

A small engineering consultancy in Gqeberha pays for Microsoft 365 for every employee, which includes OneDrive storage for each person. When a project engineer's laptop was stolen from a car, the firm assumed the loss was limited to the hardware. It was not. The engineer had been saving drawings and calculation workbooks to the desktop because it was quicker. OneDrive was installed, but only a single folder was synchronised, and the desktop was not part of it. Three weeks of work had to be redone, and a client deadline moved.

This is a different problem from a business that has no cloud storage at all. The protection was paid for. It was simply never set up to cover the places where people actually save files.

## How work ends up outside the protected area

Synchronisation tools protect only the folders they are told to watch. In practice, files end up elsewhere for ordinary reasons:

- **The desktop and downloads folders** are the default save location for many applications and browsers.
- **Applications with their own save locations**, such as design, engineering or accounting software that writes to a local project folder.
- **Sync paused or broken** because of a full quota, an expired sign-in, a file name with unsupported characters or a file that is too large.
- **Second drives and USB sticks** used for large files, which sit outside any sync policy.
- **Personal accounts** where a staff member signed in to a private cloud service instead of the business one.

Each route is invisible until a device is lost, stolen, damaged or reimaged.

## What the platforms offer

Microsoft documents a feature called Known Folder Move in its guidance on [redirecting Windows known folders to OneDrive](https://learn.microsoft.com/en-us/sharepoint/redirect-known-folders). It moves the Desktop, Documents, Pictures, Screenshots and Camera Roll folders into OneDrive so that users keep their familiar folders while the files are backed up in the cloud and available from any device. Administrators can prompt users, move the folders silently, and prevent users from turning the feature off. Microsoft recommends it for enterprises and notes that small and medium businesses may also find it useful, with some experience of configuring policies. Apple and Google offer comparable desktop and documents synchronisation in their own platforms.

Synchronisation is not the whole answer. The UK National Cyber Security Centre's advice on [backing up critical data held in online services](https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data) warns against relying solely on the provider's built-in features and recommends keeping an independent copy. A synchronised folder protects against a lost laptop. On its own, it may not protect against a deletion or encryption that synchronises to the cloud as well.

## The cost of preventable data loss

The examples below are illustrative and use stated assumptions.

### Recreating work

If a professional earning a loaded cost of R500 an hour loses two weeks of work, recreating it takes perhaps 60 hours, or R30,000, not counting the work that should have been done during that time. The pattern is explored in [staff recreating lost documents](/impact/staff-recreating-lost-documents-duplicated-work-cost/).

### Missed deadlines and client impact

Lost work often surfaces as a late deliverable. For consultancies, agencies and engineering firms, that can mean penalty clauses, a written-off invoice or a client relationship under strain.

### Recovery attempts

Data recovery from a failed drive is expensive and uncertain, and impossible if the device was stolen. Staff time spent searching old email attachments for earlier versions adds to the cost.

### Slower device replacement

When files live on the device, every replacement or reinstall becomes a manual migration. The broader cost is described in [manual device setup](/impact/manual-device-setup-labour-rework-cost/).

### Personal information exposure

A stolen laptop with unsynchronised, unencrypted files can also be a security compromise involving personal information, which brings obligations under the Protection of Personal Information Act.

## Why the gap persists

Cloud storage is often rolled out as a licence rather than a configuration project. Staff are told "save to OneDrive" or "use the shared drive", and nobody checks whether they do. Sync errors appear as a small icon that users learn to ignore. Nobody reviews which devices have healthy sync and which have been failing for weeks. The related problem of files deliberately kept only on personal machines is covered in [critical files stored only on employee computers](/impact/critical-files-stored-only-on-employee-computers-device-failure-loss-continuity-cost/). This article focuses on a narrower and very common case: the business has the right tools, and they are not covering the places where work is actually saved.

## What a sound setup includes

- Known folders such as Desktop and Documents redirected to the business cloud storage by policy, not by user choice.
- Application save locations reviewed and pointed at synchronised folders where possible.
- Sync health monitored centrally, with alerts for devices that have not synchronised for several days.
- An independent backup of the cloud storage itself, for protection against deletion and ransomware.
- Device encryption and remote wipe, so a lost laptop is a hardware cost rather than a data breach.
- A short rule for large or unusual files, so staff know what to do instead of using a USB drive.

The common thread is that protection should not depend on each person remembering to save in the right place. It should be the default.

## Checking the result

A configuration change is only useful if it works on real devices. After rolling out folder redirection, pick a few laptops at random and look. Are the desktop files present in the cloud? Is the sync status healthy? Are there large folders of project files in places the policy does not cover? A quarterly spot check takes less than an hour and catches the drift that occurs as new software and new staff arrive. It also shows whether backups of the synchronised storage are complete, which links to the risk of [unmonitored backups giving false confidence](/impact/unmonitored-backups-false-recovery-confidence/).

## Practical next actions

1. **Check five laptops this week.** Look for work files on the desktop, in downloads and in local application folders, and check sync status.
2. **Turn on known folder redirection by policy.** Start with Desktop and Documents, and stage the rollout to manage upload bandwidth.
3. **Review application save locations.** Point design, engineering and finance tools at synchronised folders where the software allows it.
4. **Monitor sync health.** Use the admin reporting available in your platform to find devices with failing or paused sync.
5. **Add an independent backup of cloud storage.** Protect against deletion and encryption that synchronise along with legitimate changes.
6. **Enforce device encryption and remote wipe.** Make a lost device a replacement cost, not a data loss and privacy incident.

Most data lost from employee devices is preventable with tools the business already pays for. The gap is configuration and follow-through, not budget.
