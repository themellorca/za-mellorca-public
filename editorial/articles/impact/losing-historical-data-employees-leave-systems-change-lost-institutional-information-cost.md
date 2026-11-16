---
hub: impact
record_id: CPS-117
slug: losing-historical-data-employees-leave-systems-change-lost-institutional-information-cost
title: When History Walks Out the Door: The Cost of Losing Records at Exits and System Changes
description: A mailbox is deleted after a resignation, an old system is switched off after a migration, and years of customer, pricing and job history disappear. The loss surfaces later, in disputes, audits and decisions.
lead: A mailbox is deleted after a resignation, an old system is switched off after a migration, and years of customer, pricing and job history disappear. The loss surfaces later, in disputes, audits and decisions.
category: Data and Information
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Historical business records are deleted or stranded when employees leave, mailboxes are removed or systems are replaced
primary_cost_mechanism: Risk exposure in SARS verifications and audits, disputes conceded for lack of evidence, lost customer and supplier knowledge, analysis that can no longer be done, and cost of keeping obsolete systems running
sources:
  - Record keeping - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/record-keeping/
  - Section 14 Retention and restriction of records - POPIA | https://popia.co.za/section-14-retention-and-restriction-of-records/
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
related:
  - Information in Too Many Places: The Cost of Data Spread Across Inboxes and Folders | /impact/business-data-scattered-email-spreadsheets-applications-personal-folders-fragmented-information-cost/
  - What Counts as a Customer? The Cost of Running a Business Without Agreed Definitions | /impact/no-agreed-definition-revenue-customers-leads-completed-work-inconsistent-metrics-cost/
  - Yesterday's Data, Today's Decisions: The Cost of Delayed System Syncs | /impact/data-transferred-between-systems-on-delay-stale-information-decision-cost/
summary: A mailbox is deleted after a resignation, an old system is switched off after a migration, and years of customer, pricing and job history disappear. The loss surfaces later, in disputes, audits and decisions.
layout: plain
---
## The history nobody thought to keep

A building supplies merchant in East London replaces its ten-year-old accounting and stock system. The migration brings across open customer balances, current stock and the last financial year of transactions. Everything older stays in the old system, which is switched off when its licence expires a few months later. The same year, a senior buyer retires; her mailbox and personal network folder are deleted under the standard leaver process. Eighteen months on, SARS selects the business for a VAT verification covering an earlier period, a major customer disputes historical rebate calculations, and management wants to analyse five years of supplier price increases. The records needed for all three are gone, or locked in a system nobody can open.

The example is illustrative, but this kind of loss is common because it happens quietly. Historical information rarely disappears in a dramatic incident. It is lost through routine events: an employee leaves, a mailbox is removed, a laptop is wiped, a subscription is cancelled, a system is replaced. Each step seems reasonable. The cost appears much later, when someone needs the history and finds it is no longer there.

## How history gets lost

- **Leaver processes that delete rather than transfer.** Mailboxes, personal drives and laptops are cleared without first moving business records to shared locations.
- **Migrations that bring only current data.** New systems are loaded with open balances and recent transactions, and older history is left behind to save time and cost.
- **Old systems switched off without an archive.** Legacy applications are decommissioned before their data is exported in a readable form.
- **Records held in personal accounts.** Business information lives in personal email, cloud storage or phones and leaves with the person.
- **No retention rules.** Nobody has decided how long each type of record must be kept, so decisions are made case by case, often by IT staff without business context.

The pattern of [offboarding leaving digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) covers the security side of leavers; this article is about the opposite risk, where the leaver process removes information the business still needs. The note on [application owners leaving without a transfer](/discovery/application-owners-leave-without-transfer/) covers a related gap.

## What lost history costs

### Tax and audit exposure

South African businesses must keep records that support their tax returns. SARS's guidance on [record keeping](https://www.sars.gov.za/businesses-and-employers/record-keeping/) states that records must generally be kept for five years from the date a return was submitted, longer where an audit, objection or appeal is under way, and that records may be kept electronically if they remain in their original form, orderly, safe and open for inspection. A business that cannot produce supporting records for a verified period risks adjustments, penalties and a long, expensive audit.

### Disputes that cannot be defended

Customer and supplier disputes often concern events years old: rebates, warranties, price agreements, deliveries and payments. Without the original records and correspondence, the business negotiates from a weak position and often concedes.

### Lost customer and supplier knowledge

Emails and files of a departing employee often contain the history of key relationships: what was promised, what went wrong, what each customer prefers. The article on [customer relationships living in a salesperson's inbox](/impact/customer-relationships-in-salesperson-inbox-lost-opportunities-when-they-leave/) covers the revenue side of this loss.

### Analysis the business can no longer do

Trends need history. Pricing reviews, supplier negotiations, demand planning and customer profitability analysis all depend on several years of data. When that data is lost at a migration, the business has to rebuild its baseline from scratch.

### Paying to keep old systems alive

Some businesses respond by keeping obsolete systems running indefinitely, just in case. That avoids the loss but creates licence, hosting and security costs, as the article on [old applications kept because migration feels difficult](/impact/old-applications-kept-because-data-migration-feels-difficult-delay-maintenance-risk-cost/) explains.

## Retention cuts both ways

Keeping everything forever is not the answer either. The Protection of Personal Information Act requires that records of personal information are not kept longer than necessary for the purpose for which they were collected, unless retention is required or allowed by law, needed for lawful functions, required by contract or consented to; see the summary of [section 14 on retention and restriction of records](https://popia.co.za/section-14-retention-and-restriction-of-records/). The aim is a deliberate schedule: keep what the law and the business need for as long as they need it, and dispose of the rest in a controlled way.

## A hypothetical view of the cost

The following figures are illustrative. Suppose a SARS verification of a period whose records were lost leads to disallowed input VAT of R90,000, plus penalties and interest. Add a customer rebate dispute conceded at R60,000 because the agreement cannot be found, and 80 hours of staff time reconstructing records at R250 an hour. A single year of consequences comes to about R170,000, far more than the cost of a retention schedule and an archive.

## What good practice looks like

Businesses that protect their history do four things. They keep business records in shared, business-owned locations rather than personal ones. They have a simple retention schedule stating how long each type of record is kept and where. Their leaver process transfers mailboxes and files to a manager or archive before anything is deleted. And every system change includes an explicit decision about historical data: migrate it, archive it in a readable format, or document why it can be disposed of. Platform tools can support this. Microsoft's documentation on [retention policies and labels](https://learn.microsoft.com/en-us/purview/retention) describes retaining content for a minimum period to meet regulatory requirements and deleting it when it is no longer needed, applied to email, documents and messages in place.

## Practical next actions

1. **Write a one-page retention schedule.** List the main record types, such as accounting, tax, payroll, contracts and customer correspondence, with how long each must be kept and where.
2. **Change the leaver process.** Require that mailboxes, files and devices are reviewed and business records transferred to a shared location before anything is deleted.
3. **Find records in personal locations.** Ask teams to move business documents out of personal drives, personal email and phones into shared, backed-up storage.
4. **Add a history step to every system change.** Before switching off any system, export historical data in a readable format, test that it can be opened, and record where it is stored.
5. **Apply retention settings in your platforms.** Use the retention features of your email and document systems to keep required records for the required period automatically.
6. **Test retrieval once a year.** Pick a past period and check that you can produce the records SARS, an auditor or a customer might ask for.

History is easy to lose and expensive to rebuild. A business that decides deliberately what to keep, where and for how long protects itself in audits and disputes, and keeps the knowledge it needs to make better decisions.
