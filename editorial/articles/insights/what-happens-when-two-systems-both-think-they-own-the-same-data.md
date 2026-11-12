---
hub: insights
record_id: INS-060
slug: what-happens-when-two-systems-both-think-they-own-the-same-data
title: What Happens When Two Systems Both Think They Own the Same Data
description: When two systems can both change the same customer or price, updates are silently lost, edits bounce back and duplicates appear. How to spot it and how to get out of it.
lead: When two systems can both change the same customer or price, updates are silently lost, edits bounce back and duplicates appear. How to spot it and how to get out of it.
category: Data Ownership
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Data Ownership
sources:
  - Map HubSpot properties to Salesforce fields | https://knowledge.hubspot.com/salesforce/map-hubspot-properties-to-salesforce-fields
  - Troubleshoot live synchronization issues - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-troubleshooting-live-sync
  - Optimistic concurrency (Microsoft Dataverse) - Power Apps | https://learn.microsoft.com/en-us/power-apps/developer/data-platform/optimistic-concurrency
related:
  - How Duplicate Customer Records Are Created | /insights/how-duplicate-customer-records-are-created/
  - What to document before connecting two business platforms | /insights/what-to-document-before-connecting-two-business-platforms/
  - What Your Recurring Problems Are Telling You About Your Systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
summary: When two systems can both change the same customer or price, updates are silently lost, edits bounce back and duplicates appear. How to spot it and how to get out of it.
layout: plain
---
A customer phones to change their delivery address. The sales coordinator updates it in the CRM. That afternoon, the accounts clerk notices an old address on an overdue invoice and corrects it in the accounting package, using the address on file from a statement last month. Overnight, the sync between the two systems runs. By morning, both systems show the old address, the new one has vanished, and the next delivery goes to a building the customer left six weeks ago.

Nobody did anything wrong. Both systems were configured to treat themselves as a valid place to change customer addresses, and the sync was set to copy whichever change looked most recent. This is what happens when two systems both think they own the same data: the business loses control over which version of a fact survives.

Mellorca has written separately about [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) and [what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/). This article looks at the problem from the other side: what actually goes wrong when that decision has not been made, how to recognise it, and how to get out of it.

## The five ways shared ownership fails

### 1. Silent overwrites

Many integration tools offer a two-way sync that resolves conflicts by keeping the latest change. HubSpot's documentation for its Salesforce integration describes its two-way rule simply: the most recent value will always overwrite any existing values, and deletions sync across both systems. That is a reasonable rule for fields where any change is equally valid. For fields where one team has better information than the other, "most recent" is not the same as "most correct".

The result is a lost update. One person's correct change is replaced by another person's well-meant but stale one, and no error is raised because, from the integration's point of view, nothing failed.

### 2. Edits that bounce back

Sometimes the opposite happens. A user corrects a value, and the next sync quietly restores the old one from the other system. Staff learn that their edits "don't stick" and start keeping their own notes on the side. The data in both systems becomes less trusted than the spreadsheet next to them, which is the pattern described in [when nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/).

### 3. Deletions that travel too far

If both systems may delete a record and the sync passes deletions through, a clean-up in one system can remove records the other team still needs. A marketing team archiving old contacts can, without realising, remove contacts that the accounts team relies on for statements.

### 4. Competing records for the same thing

When both systems are allowed to create the same kind of record, each may give it a different internal number. Microsoft's dual-write troubleshooting guide for Dynamics 365 describes a version of this: when a customer is created in one app, a new party number is generated, and an error appears during synchronisation if a customer record already exists in the other app with a different party number. Better platforms raise an error. Weaker integrations simply create a second record, and the business ends up with two customers who are really one.

### 5. Updates that collide in the moment

Even inside one platform, two processes can update the same record at nearly the same time. Microsoft's Dataverse documentation explains that when two or more update or delete operations on the same data happen at the same time, data loss can result, and it offers optimistic concurrency so that an application can detect whether a record has changed since it was read before overwriting it. Many simple business integrations do not use such checks, which makes collisions invisible.

## How to recognise the problem

Shared ownership rarely announces itself. These are the common signs:

- Staff say that changes "don't stick" or "go back" in a particular system.
- The same customer, product or price is different in two systems, and people argue about which is right.
- Teams keep private lists because they do not trust the shared record.
- Integration logs show the same records being updated back and forth between systems.
- Reports from two departments disagree on basic counts, such as active customers or open orders.

The commercial version of the problem often appears as [sales and finance using different product and price data](/discovery/sales-and-finance-use-different-product-and-price-data/), or as [a CRM that knows something the finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/).

## Why "most recent wins" is the wrong default

Timestamp-based conflict handling is attractive because it needs no business decision. That is exactly its weakness. It assumes every edit is equally authoritative. In practice, different teams verify different facts. Finance confirms billing details when an invoice is paid. Sales confirms decision-makers in conversation. Operations confirms delivery points on site. A rule that ignores who verified a fact will regularly let a weaker source overwrite a stronger one.

The HubSpot documentation also shows the alternative. Alongside two-way sync, it offers rules where one system's value always wins, or wins unless it is blank, and a setting where a field does not sync at all. Those options exist because "most recent wins" is not appropriate for every field.

## Getting out of shared ownership

| Step | What it involves |
| --- | --- |
| Find the contested fields | List fields that can be edited in more than one system and are synced between them |
| Assign one writer per field | Decide which system may change each field; others display it read-only |
| Change the sync rules to match | Replace two-way rules with one-way rules from the owning system for those fields |
| Redirect the edits | Make it easy for other teams to request a change in the owning system, rather than editing locally |
| Restrict creation and deletion | Allow only the owning system to create or delete the record type |
| Reconcile once, then monitor | Correct existing differences, then report any new mismatches weekly |

Two-way sync is not banned by this approach. It remains useful for low-risk fields that any team may legitimately update, such as a contact's mobile number. The point is that two-way should be a deliberate choice for a specific field, not the default for everything.

## An illustrative example

Consider an illustrative Bloemfontein agricultural equipment dealer with about seventy staff and branches in three towns. Its CRM and accounting package had been connected with a two-way sync on customer records. Branch sales staff updated contact details in the CRM, while the debtors team updated billing details in the accounting package. Both systems could create customers.

Over a year, the dealer accumulated a steady stream of returned statements, duplicate customers and arguments about which phone number was current. An audit of the sync showed that a small number of fields, mainly addresses, VAT numbers and account status, were changing back and forth.

The dealer made three decisions. The accounting package became the only system allowed to create customer accounts and to change billing address, VAT number and credit status. The CRM owned contact people, roles and sales notes. Delivery addresses were owned by the branch operations team in the accounting package. The sync was reconfigured to match, and the CRM displayed finance-owned fields as read-only with a button to request a change. Returned statements fell away, and staff stopped keeping their own lists.

## A short diagnostic

1. Pick your most important record type, usually customer.
2. For each field, ask: which systems can change it, and which systems does it sync to?
3. Highlight every field that can be changed in two places and syncs both ways.
4. For each highlighted field, ask which team actually verifies the fact.
5. Make that team's system the only writer, and change the sync accordingly.

When two systems both think they own the same data, the business ends up owning the confusion. A clear decision about who writes each fact costs far less than repeatedly repairing the damage.
