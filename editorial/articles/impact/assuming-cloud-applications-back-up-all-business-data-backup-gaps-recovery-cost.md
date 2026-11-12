---
hub: impact
record_id: CPS-157
slug: assuming-cloud-applications-back-up-all-business-data-backup-gaps-recovery-cost
title: The Cloud Is Not a Backup: Finding Data Protection Gaps Before You Lose Data
description: Cloud services keep their platforms running, but they do not automatically protect every kind of business data from deletion, corruption or lock-out. Here is how to find the gaps first.
lead: Cloud services keep their platforms running, but they do not automatically protect every kind of business data from deletion, corruption or lock-out. Here is how to find the gaps first.
category: Security and Resilience
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Security and Resilience
commercial_domain: Security and Resilience
primary_pain: Assuming cloud applications automatically protect every type of business data
primary_cost_mechanism: Reconstruction labour, trading disruption, client credits and compliance exposure when data is lost beyond the provider's recovery window, versus a small annual cost of independent backup
sources:
  - Shared responsibility in the cloud - Microsoft Azure | https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility
  - Shared Responsibility Model - Amazon Web Services (AWS) | https://aws.amazon.com/compliance/shared-responsibility-model/
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Patching Only After Something Breaks: The Price of Leaving Known Weaknesses Open | /impact/delaying-security-updates-until-something-breaks-known-weakness-financial-risk/
  - The Cost of Retyping Customer Details into Every System | /impact/pain-duplication-of-customer-data-entry/
  - Paying Consultants to Keep Unnecessary Software Complexity Running | /impact/paying-consultants-to-maintain-unnecessary-software-complexity-recurring-cost/
summary: Cloud services keep their platforms running, but they do not automatically protect every kind of business data from deletion, corruption or lock-out. Here is how to find the gaps first.
layout: plain
---
## "It is in the cloud, so it is backed up"

A small manufacturer moves its email, files and customer records to cloud services. The IT supplier tells the owner the data is now "safe in the cloud". The owner relaxes: the old server and its tapes are gone, the monthly cost is predictable, and everything can be reached from anywhere. Eighteen months later, an employee clears out a shared folder before leaving, and the deletion syncs to every device. By the time anyone notices, the recycle bin has been emptied and the retention period has passed. The data is not coming back.

The cloud service did exactly what it was designed to do. The mistake was an assumption: that "available and resilient" means "backed up against every way the business can lose data". This article explains where that assumption comes from, which kinds of loss it leaves open, and how to find out before the loss happens.

It builds on the idea that backups themselves need testing, covered in [backups that are never tested and the cost of failed restores](/impact/backups-never-tested-restore-financial-cost/), and on the wider theme in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/). Here the question is narrower: which of your cloud-held data is actually covered?

## What cloud providers do and do not promise

Large cloud platforms publish what is known as a shared responsibility model. The provider is responsible for running the infrastructure: the data centres, hardware, network and the service itself. The customer remains responsible for its own data, its accounts and how it uses the service. Microsoft's explanation of [shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) sets out how responsibilities shift depending on the type of service, while Amazon Web Services' [shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/) describes a split between security of the cloud, which AWS handles, and security in the cloud, which the customer handles. The detail varies by provider and by product, but the principle is consistent: the provider keeps the service running, and the customer is accountable for the data placed in it.

Many software-as-a-service products also offer retention and recycle-bin features that give a limited window to recover deleted items. Retention is not the same as backup. Microsoft's documentation on [retention policies](https://learn.microsoft.com/en-us/purview/retention) explains that retention settings are about keeping or deleting content for compliance and governance purposes, which is a different goal from restoring a business to a clean state after an accident, an attack or a mass deletion. Whether a given feature meets your recovery needs depends on your plan, your configuration and the type of data. Read your own provider's terms rather than relying on a summary.

## The kinds of data loss the assumption leaves open

- **Accidental deletion.** A user or administrator deletes files, mailboxes or records. After a limited recovery window, they are gone.
- **Malicious deletion or encryption.** A compromised account, a disgruntled leaver or ransomware syncing through a cloud drive can destroy or corrupt data in its live location.
- **Overwriting and corruption.** A bulk import or an automation with a mistake can overwrite thousands of records. The service sees valid changes and keeps them.
- **Account problems.** A suspended or locked account, a lapsed payment or a lost administrator login can cut the business off from its own data.
- **Different data, different cover.** Email may have good recovery options while chat history, shared notes, form responses, CRM records, third-party plug-in data and e-commerce content have little or none.
- **Vendor change.** A provider changes terms, retires a product or closes. You may be left with data in a format you cannot easily export, a risk examined in [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/).

## Why the gap goes unnoticed

A gap in backup coverage produces no symptoms until the day it is needed. Everything works. Files open, email arrives, and the monthly invoice is paid. Nobody asks "what happens if someone deletes the quote history?" because no one remembers that the question exists. Meanwhile, the number of cloud applications grows, each adding its own data with its own rules, and the original assurance about "the cloud" is mentally applied to all of them. Some are covered by a backup service the business pays for. Many are not, and the inventory that would show which is which has never been built.

## How the discovery becomes a cost

1. **Re-creation.** Lost records must be rebuilt from emails, paper, memory or customers, at high labour cost and with errors.
2. **Trading disruption.** If the lost data drives orders, invoicing or scheduling, work slows or stops while it is recovered.
3. **Contract and compliance exposure.** Customers may require you to keep certain records, and tax and employment records have statutory retention periods. SARS and other regulators can ask for supporting records for years after a filing.
4. **Personal information duties.** The Protection of Personal Information Act, available from the [government's documents portal](https://www.gov.za/documents/protection-personal-information-act), expects responsible parties to secure personal information and safeguard its integrity and availability. Unrecoverable loss of customer or staff data may therefore raise questions beyond the practical.
5. **Lost goodwill.** Customers who must resend documents or re-confirm orders lose confidence.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Durban services firm with 18 staff. They are not drawn from a real incident.

| Assumption | Value |
| --- | --- |
| Data lost: shared project folders and CRM notes for the last 3 years, not recoverable | approx. 600 client files |
| Average time to reconstruct each file from other sources | 1.5 hours |
| Loaded hourly cost of staff doing the reconstruction | R220 |
| Days of reduced productivity across the team while this happens | 6 days at 30% capacity loss |
| Team daily loaded cost | 18 × 8 hours × R200 = R28,800 |
| Fees written off or credited to unhappy clients | R45,000 |
| Cost of a dedicated third-party backup for the same data, per year | R20,000 |

- Reconstruction: 600 × 1.5 × R220 = R198,000
- Reduced productivity: 6 × 30% × R28,800 = R51,840
- Client credits and write-offs: R45,000
- **Illustrative total: about R295,000**

Set against about R20,000 a year to protect the same data, the sums favour prevention even if the loss has only a modest chance of happening. As with all such models, the figures are assumptions. The principle is that the protection cost is small and known, and the recovery cost is large and arrives without warning.

## What better looks like

1. **Make a data map.** List each cloud application, what business data lives in it and who owns it. The approach in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) supports this.
2. **Ask the provider direct questions.** What is retained, for how long, who can restore it, and what is the process? Get the answers in writing.
3. **Decide how much loss is tolerable.** The idea of a recovery point, covered in [defining how much data the business can afford to lose](/impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/), tells you how often to back up.
4. **Add independent backup where the gap is real.** Choose a method that is separate from the account being protected, so a compromised login cannot delete both. See [backups kept in the same environment](/impact/backups-same-environment-losing-both-copies-risk/).
5. **Restrict deletion rights.** Fewer people should be able to delete shared data, and administrator accounts should not be shared.
6. **Test a restore.** Pick one folder, one mailbox and one CRM record set, and restore them to a test location. Record how long it took.
7. **Review whenever you add an application.** Add "how is this data backed up?" to your approval questions for new software.

## When it becomes urgent

- staff start using a new SaaS tool for customer or financial data;
- an employee with broad access leaves;
- a customer contract or tender asks for your backup arrangements;
- a colleague asks "can we get that back?" and nobody knows;
- a security incident shows how quickly shared data can be altered or deleted.

## Bottom line

Cloud services protect their own platforms, not automatically every way you can lose your data. The cheapest time to learn where the gaps are is before anything has gone missing. Map the data, ask the provider what is and is not covered, back up what matters outside the account that holds it, and prove it with a restore. That turns an assumption into a known position, at a price far below the cost of finding out the hard way.
