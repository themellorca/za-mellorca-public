---
hub: impact
record_id: CPS-158
slug: critical-files-stored-only-on-employee-computers-device-failure-loss-continuity-cost
title: The Only Copy on a Laptop: What Local-Only Files Put at Risk
description: When important files live only on an employee's computer, a theft, failure or accident can erase months of work and put deadlines and client data at risk.
lead: When important files live only on an employee's computer, a theft, failure or accident can erase months of work and put deadlines and client data at risk.
category: Digital Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Employees storing critical files only on their own computers
primary_cost_mechanism: Rebuilding lost work at full staff cost, missed deadlines and lost contracts, idle time during device replacement, and exposure of personal information on lost or stolen devices
sources:
  - Redirect and move Windows known folders to OneDrive - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/redirect-known-folders
  - Cybersecurity Basics | https://www.nist.gov/itl/smallbusinesscyber/cybersecurity-basics
related:
  - The Automation Only One Person Understands: The Hidden Cost of Dependency | /impact/automation-understood-by-one-employee-continuity-maintenance-cost/
  - Stitching Spreadsheets Together: The Labour and Delay Behind Management Reports | /impact/manually-combining-spreadsheets-before-management-sees-performance-labour-delay-cost/
  - Recurring Tasks That Live in Someone's Memory: The Cost of Missed Work | /impact/recurring-tasks-relying-on-memory-missed-work-cost/
summary: When important files live only on an employee's computer, a theft, failure or accident can erase months of work and put deadlines and client data at risk.
layout: plain
---
## The only copy was on the laptop

A quantity surveyor at a Pretoria construction consultancy spends eight months building a pricing model for a large tender. It lives in a folder on her laptop's Desktop, named "final v7". On the Friday before submission, she puts the laptop in her car boot outside a restaurant. When she returns, the car has been broken into. The laptop can be replaced by Monday. The model cannot, and the tender is due in four days.

Stories like this do not need theft. A failed solid-state drive, a spilled coffee, a ransomware infection or a Windows update that goes wrong can end in the same place. The pain is that critical business files exist only on an employee's own computer, so the business's financial position depends on one device staying healthy and in the owner's hands.

## Why files end up there

Nobody decides to keep critical files on a laptop. It happens through convenience.

- **The default save location is local.** On many Windows computers, Desktop, Documents and Downloads are folders on the device itself unless someone has changed the setup.
- **The shared drive is slow or awkward.** If opening a large file from the server takes a minute, people copy it locally "just for now".
- **Working offline.** Staff travelling to sites or clients save locally to keep working, and the copy never returns.
- **Personal systems of organisation.** Experienced employees build their own folder structures and trust them more than any shared arrangement.
- **Nobody asked.** The business never told staff where files should live or why.

The same habit shows up as lost time. [Employees searching for files](/impact/employees-searching-for-files-lost-productivity-cost/) are often searching for the one that is on a colleague's computer. The difference here is the downside: it is not that finding the file takes long, but that it may not be recoverable at all.

## What it costs when the device fails

The cost has a likelihood and a size. The likelihood is modest on any given day but not small across several years and several devices. The size depends on what is on the computer.

### Rebuilding lost work

If a model, a design, a set of client records or a year of correspondence has to be recreated, the cost is the employee's time at full cost to the company. Eight months of partial effort on a pricing model is not a trivial figure. It is also time that cannot be recovered during a busy period.

### Missed deadlines and lost contracts

Some losses are not about rebuilding at all. A tender that cannot be submitted, a report that cannot be delivered or an invoice that cannot be supported by the underlying file results in lost revenue, not extra work.

### Idle staff and slow recovery

While a new device is bought and set up, the employee is often working at half capacity. Where devices are replaced only on failure, as covered in [buying devices only when they break](/impact/buying-devices-only-when-they-break-emergency-replacement-cost/), the delay is longer and the price higher.

### Exposure of personal information

A lost or stolen laptop with unencrypted client or employee files is a data incident as well as an inconvenience. The Protection of Personal Information Act, available from the [government document library](https://www.gov.za/documents/protection-personal-information-act), requires a responsible party to secure the integrity and confidentiality of personal information by taking appropriate, reasonable measures against loss, damage and unauthorised access. A file that exists only on a personal device, with no backup and no encryption, makes that difficult to demonstrate.

### Reduced trust

Clients who learn that a deliverable was lost because it lived on a laptop will ask what else is stored the same way. That question is hard to answer when nobody knows.

## Backup is not the same as central storage

Business owners often assume that a backup exists. It is worth asking what that means for these files. A server backup protects what is on the server, not what is on a laptop's Desktop. A cloud backup of mail does not include a spreadsheet saved to Documents. And as shown in [backups that were never tested](/impact/backups-never-tested-restore-financial-cost/), a backup that has never been restored is a belief rather than a fact.

Personal devices can make this worse. When staff use their own computers for company work, a situation covered in [staff personal computers for company work](/impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/), the business does not control the device, its updates or its backups, yet depends on it.

## Moving the files without changing how people work

The most practical fix is to keep the folders staff already use and change where those folders are saved. Microsoft's documentation on [redirecting and moving Windows known folders to OneDrive](https://learn.microsoft.com/en-us/sharepoint/redirect-known-folders) explains that Desktop, Documents and Pictures can be moved so that users continue to use familiar folders while their files are saved to OneDrive, which backs up the data in the cloud and makes it available from any device. The page notes that small and medium businesses may also find this useful, although it does require some experience with configuring policies. Other platforms offer comparable features, so the principle is more important than the product.

The wider guidance is consistent. The US National Institute of Standards and Technology provides [cybersecurity basics for small businesses](https://www.nist.gov/itl/smallbusinesscyber/cybersecurity-basics) and treats protecting and backing up data as part of the foundation. The advice is not to rely on individual devices as the permanent home for business information.

## A rule people can follow

Technology helps, but people need a short rule. The simplest is: "Work lives in the shared location. The laptop is a window, not a vault." Then back it with exceptions that are written down, such as a named offline folder for field work that syncs when the employee is back in range.

It also helps to decide what is critical. Not every file needs the same protection. A good test is a single question: if this laptop vanished tonight, what would be gone for good? The answers become the first files to protect. For businesses that rely on one backup method, [having a single backup method and no fallback](/impact/single-backup-method-no-recovery-fallback-cost/) compounds the problem, so the question also applies to the central location.

## Practical next actions

1. **Ask the vanishing-laptop question.** Have each team member list the files that would be lost for good if their computer disappeared tonight, then collect the answers.
2. **Choose one shared location and say so.** Write a one-page rule that names where client, finance and project files must be saved and what counts as a draft.
3. **Redirect the Desktop and Documents folders.** Use your cloud platform's known-folder or folder-sync feature on a pilot group first, then roll out to everyone.
4. **Turn on device encryption.** This limits exposure if a computer is lost, even where files have already been copied elsewhere.
5. **Test a restore.** Once a quarter, pick a random file, delete it from a test device and recover it from the shared location or backup, recording how long it took.
6. **Handle the field-work exception.** Agree a synchronised offline folder for people who work away from connectivity, and check it is syncing when they return.

None of these steps is expensive. Each shifts the business from hoping that nothing happens to a device to being able to carry on when it does.
