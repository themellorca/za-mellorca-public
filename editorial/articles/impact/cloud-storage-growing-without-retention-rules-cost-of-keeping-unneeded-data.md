---
hub: impact
record_id: CPS-235
slug: cloud-storage-growing-without-retention-rules-cost-of-keeping-unneeded-data
title: Storage That Only Grows: The Cost of Data You No Longer Need
description: When nobody sets retention rules, cloud storage grows without limit, and the business pays for capacity, backup and risk on data it no longer needs.
lead: When nobody sets retention rules, cloud storage grows without limit, and the business pays for capacity, backup and risk on data it no longer needs.
category: Cloud and Data
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Cloud and Data
commercial_domain: Cloud and Data
primary_pain: Cloud storage growing indefinitely because nobody manages retention
primary_cost_mechanism: Rising storage and backup charges, staff time lost searching duplicate and stale files, and exposure from holding personal information longer than necessary
sources:
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - Managing the lifecycle of objects - Amazon Simple Storage Service | https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
  - Azure Blob Storage lifecycle management overview - Azure Blob Storage | https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
related:
  - Backups in the Same Place as the Data: The Risk of Losing Both | /impact/backups-same-environment-losing-both-copies-risk/
  - Premium Plans for Basic Work: The Cost of Overbuying Software | /impact/premium-software-plans-basic-needs-overbuying-cost/
  - Software Bought Without Approval: The Financial and Security Cost of Shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
summary: When nobody sets retention rules, cloud storage grows without limit, and the business pays for capacity, backup and risk on data it no longer needs.
layout: plain
---
## The folder nobody dares to delete

A Cape Town marketing and events company has been trading for eleven years. Its shared cloud storage began as a tidy folder per client. Today it holds roughly four terabytes: finished campaign files, raw video footage, ten versions of every proposal, exported email archives, scanned ID documents from old freelancer contracts, and a folder called "Old server backup 2019 DO NOT TOUCH". The storage bill rises every year, and no one can say which part of it the business still needs.

This is a different problem from running out of space. The business never runs out, because the provider simply sells more. Growth continues without a decision, which is exactly why it is expensive: nobody chose to keep any of it. This article looks at storage that grows indefinitely because retention is not managed, and at the cost of holding data the business no longer needs. It complements our pieces on [unused cloud resources](/impact/unused-cloud-resources-financial-waste/) and on [cloud costs that rise without explanation](/impact/cloud-costs-rising-without-explanation/), which focus on computing and billing surprises rather than on the data itself.

## Why data piles up

Storage becomes a one-way street for ordinary reasons, none of which looks irresponsible at the time.

- **Deleting feels riskier than keeping.** If a file might be needed in a dispute or audit, nobody wants to be the person who removed it. The cost of keeping it is spread thinly across every month, so it never prompts a decision.
- **No one owns the clean-up.** IT provisions the storage, departments fill it, and finance pays for it. The person who knows what a folder is for is rarely the person who can delete it.
- **Departed staff leave data behind.** Personal drives and mailboxes of former employees are kept "just in case" and then never reviewed.
- **Copies multiply.** Shared files are downloaded, edited, saved again and re-uploaded. Sync tools, exports and email attachments each create another copy.
- **No retention rule exists.** Without a written rule stating how long each type of record is kept, the default is forever.

## The cost has three layers

### 1. The storage bill

The simplest cost is the monthly charge for capacity. At small volumes it is trivial. At several terabytes, with versioning, replication and backups also keeping copies, it becomes a recurring line item that quietly compounds. Cloud providers price storage by tier, and older data that is rarely read can usually be held more cheaply. Amazon's documentation on [managing the lifecycle of stored objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) describes how rules can move data to cheaper storage classes or expire it after a set period. Microsoft's [lifecycle management for Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview) offers the same idea. If the data is never classified, neither tier nor expiry can be set, and everything is held at the full price.

### 2. The cost around the data

Every extra gigabyte is also backed up, indexed, searched, synchronised and sometimes scanned for malware. A larger estate means longer backup windows, bigger restore tests and slower searches for the document someone is actually trying to find. Staff time is lost sifting through five versions of a contract to find the signed one, and that cost never appears on a cloud invoice.

### 3. The liability of holding what you should not

This layer is the one South African owners most often underrate. The Protection of Personal Information Act sets conditions for processing personal information, including that records should not be kept longer than is necessary for the purpose for which they were collected, unless another law or a legitimate need requires it. The Act is published by the [South African government](https://www.gov.za/documents/protection-personal-information-act). Old scanned IDs, CVs from candidates rejected years ago, and customer lists from retired products are all personal information. Holding them without a reason adds exposure if the storage is ever breached, and it makes the business's answer to "what do you hold on me?" much harder to produce.

Retention is not only about deleting. Some records must be kept for set periods under tax, employment and company law, and the business must be able to show that it kept them. The aim is a deliberate decision per type of record, not a purge.

## An illustrative example

Imagine the events company above has 4 TB across a shared drive, mailbox archives and a backup copy. Suppose a records review shows that about half is finished-project raw footage older than three years, ten percent is duplicates, and a small share is personal information with no ongoing purpose. Moving the footage to a cheaper archive tier, deleting duplicates and removing the personal records would cut the monthly bill, but the larger gain is the smaller backup and the shorter search. Those figures are illustrative; your own proportions will differ, and the first review usually shows a bigger surprise in one folder than anyone expected.

The same exercise exposes a second finding: some folders everyone assumed were being kept are not covered by any backup, and some folders that are being backed up have no business value. Our note on [backups that are never tested](/impact/backups-never-tested-restore-financial-cost/) shows why it is better to find that out in a review than during a recovery.

## What managed retention looks like

A workable approach is modest and starts with classification, not technology.

- **A short retention schedule.** One page that lists the record types the business holds, how long each is kept, why, and who may approve deletion.
- **Named data owners.** Each major folder or system has a person responsible for its contents, not just its permissions.
- **Automatic rules where possible.** Microsoft's [retention policies and labels in Purview](https://learn.microsoft.com/en-us/purview/retention) show how a policy can keep content for a period, delete it afterwards, or both. Storage lifecycle rules do the same job at the file or object level.
- **A leaver rule for accounts and drives.** A fixed number of days after departure, the data is reviewed, handed over or deleted according to the schedule.
- **A defensible record.** A log of what was deleted, when, and under which rule, so that a deletion can be explained later.

As businesses begin to feed their stored documents to AI assistants, ungoverned storage becomes a second problem: the more stale, duplicated and sensitive material is available, the more an assistant can surface it. Our article on [uncontrolled AI use of company data](/impact/uncontrolled-ai-company-data-financial-risk/) covers that risk in more detail.

## Practical next actions

1. **Measure what you have.** Export a size report by top-level folder, mailbox and drive for the last month. Find the five largest locations and who owns them.
2. **Write a one-page retention schedule.** List the ten to fifteen record types you hold, such as employee files, invoices, contracts, CVs and project files, with a keep period and a reason. Ask your accountant and a labour-law adviser to check the statutory periods.
3. **Review personal information first.** Look for old CVs, scanned identity documents and customer lists with no ongoing purpose, and decide whether each should be deleted or kept with a documented reason.
4. **Set one automatic rule.** Pick one low-risk area, such as a temporary exports folder, and apply an expiry or archive rule. Check the result after a month before extending it.
5. **Add storage to the leaver checklist.** Decide what happens to a departing person's drive and mailbox, who reviews it, and the date it is removed.
6. **Schedule a yearly review.** Put the retention review in the same calendar as the budget so storage growth is discussed alongside the cost it creates.

Cheap storage makes it easy to postpone every decision, but the decisions do not go away. They accumulate, and the longer they wait the more they cost to make.
