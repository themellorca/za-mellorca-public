---
hub: insights
record_id: INS-230
slug: how-to-decide-which-system-owns-which-data
title: How to decide which system owns which data
description: A practical method for assigning authoritative ownership of business data across CRM, finance, operations and connected applications.
lead: When several applications can store the same customer, product, employee or transaction information, the business needs more than integration. It needs an explicit rule for which system is authoritative for each data domain.
category: Digital Infrastructure
published_date: 2026-09-03
updated_date: 2026-10-02
eyebrow: Article
page_title: How to Decide Which System Owns Which Data | Mellorca
tags:
  - Data Ownership
  - Systems Architecture
  - Integration
cta_label: Start a conversation
cta_href: /contact/
side_title: Topics
sources:
  - GOV.UK: Data ownership model | https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model
  - GOV.UK: Identifying and recording critical data assets | https://www.gov.uk/government/publications/identify-and-record-critical-data-assets/identifying-and-recording-critical-data-assets
  - What Is Data Lineage? - IBM | https://www.ibm.com/think/topics/data-lineage
related:
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
  - The hidden cost of apps that do not share data | /insights/the-hidden-cost-of-apps-that-do-not-share-data/
  - What to document before connecting two business platforms | /insights/what-to-document-before-connecting-two-business-platforms/
---
Connected businesses often discover a difficult truth: integration does not automatically create clarity. A CRM may contain customer details, the finance system may also contain them, a service platform may maintain its own copy, and spreadsheets may sit around all three. When a value differs, people ask which one is correct.

The right question is not simply which application contains the data. It is which system has authority to create, change and publish that data for a defined business purpose.

> Data ownership is a business rule expressed through system architecture.

A common example: a wholesale business updates a customer's delivery address in its CRM after a phone call. The next morning a nightly sync from the accounting system, which still holds the old address, overwrites the change. The order goes to the wrong site, the driver returns, and the customer service team spends an afternoon working out which system "won". Nobody made a mistake in their own system. The business simply never decided which one was allowed to own the address.

## Do not assign one system as the owner of everything

A single platform rarely has legitimate authority over every data domain. The CRM may own prospect and relationship information, finance may own posted invoices and payment status, HR may own employment records, and an operational platform may own fulfilment status.

The objective is not to force every fact into one database. It is to make authority explicit enough that connected systems know where each important fact originates and how changes propagate.

This builds on Mellorca's article about [deciding what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/). The next step is to break the problem down by data domain rather than talking about one global system of record.

## Start with the business meaning of the data

Before choosing an owner, define the object. "Customer" may mean a prospect to sales, a legal account to finance and an active service recipient to operations. Those are related but not always identical concepts.

List the critical data domains and define what each represents. Typical examples include customer identity, billing account, product master, employee identity, contract, order, invoice, payment, service case and inventory position.

UK government guidance on [identifying and recording critical data assets](https://www.gov.uk/government/publications/identify-and-record-critical-data-assets/identifying-and-recording-critical-data-assets) emphasises named accountability for important data and recording, for each asset, a description, an owner and the purposes it supports, with that information reviewed annually. The context is government, but the operating principle applies broadly: important data needs explicit accountability rather than accidental ownership by whichever application was implemented first.

### Signs that ownership is undefined
- Staff keep a personal spreadsheet because they "don't trust" a system's copy.
- Integration logs show the same field being updated back and forth between systems.
- Reports from different systems give different customer counts or stock levels.
- Nobody can say who approves a change to what a field means.
- Fixing a wrong value in one system does not stick, because another system overwrites it.


The stock version of this problem is explored in Mellorca's note on [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## Choose ownership using the point of legitimate creation

A useful test is to ask where the data becomes authoritative. A quotation may begin in CRM, but an invoice becomes authoritative when finance posts it. A person may appear in an applicant system, but the employment record becomes authoritative when HR creates the employee. A stock reservation may originate from an order event, while the inventory ledger remains authoritative in the inventory platform.

Authority should follow the business process that has the right controls, accountability and lifecycle responsibility for the record.

When the test produces two plausible answers, ask a second question: which system would an auditor, a regulator or a court treat as the record? For financial and employment data, that usually settles it. For operational data such as delivery instructions, the answer is often the system closest to the people who act on it.

## Separate ownership from consumption

A system can use data without owning it. The service platform may need customer contact details, but that does not mean service agents should maintain a second independent customer master.

Where possible, consuming systems should receive authoritative data through controlled integration. If local editing is necessary, define whether the change flows back to the owner, creates a request for approval or remains a local attribute with a different meaning.

## Define field-level ownership where domains overlap

Sometimes one system owns the object while another legitimately owns specific fields. A CRM may own preferred contact information, finance may own credit status, and operations may own delivery instructions.

Document these boundaries. Without field-level rules, integrations can become bidirectional synchronisation loops where each platform overwrites another and nobody can explain why a value changed. The delivery-address example above is exactly this failure.

## Make conflict resolution explicit

Connected systems will eventually disagree. Decide in advance what happens. Does the authoritative value overwrite the downstream copy? Does a discrepancy create an exception for review? Are some fields merged? Is there a timestamp rule, and if so, is "latest" actually equivalent to "correct"?

The correct resolution depends on the meaning of the data. A last-write-wins rule may be acceptable for a low-risk preference and reckless for a financial or compliance attribute.

Being able to trace changes helps. IBM describes data lineage as tracking where data originated, how it has changed and where it ends up, which lets teams find the root cause of a discrepancy rather than arguing about it. Even basic change logging in each integration, recording which system sent which value and when, makes conflicts far easier to resolve.

## Assign human accountability as well as system authority

System ownership is not enough. A named business owner should be accountable for definitions, quality expectations, access rules and change decisions for each critical data domain. The UK government's [data ownership model](https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model) similarly distinguishes accountable ownership from the systems through which data is stored and shared. It describes data owners as senior leaders accountable for a grouping of data, data stewards as subject-matter experts who manage it day to day, and data custodians as those who manage the technical storage and access.

This human layer matters because architecture cannot decide whether a field's meaning should change or whether two departments are actually measuring different things. In a mid-sized business, the roles may sit with a handful of people: the financial director owning billing and payment data, the sales manager owning customer relationship data, an operations lead owning fulfilment data, with IT or an external partner acting as custodian.

## A practical ownership matrix

For each critical data domain, document:
- business definition;
- authoritative system;
- business owner;
- where the record is created;
- which systems consume it;
- which fields other systems may edit;
- how updates propagate;
- how conflicts are resolved;
- quality controls and review cadence.


A short worked row might look like this:

| Domain | Authoritative system | Owner | Consumers | Conflict rule |
|---|---|---|---|---|
| Customer delivery address | CRM | Sales manager | Accounting, dispatch | CRM overwrites; downstream edits blocked |
| Credit status | Accounting | Financial director | CRM (read-only) | Accounting always wins |
| Invoice | Accounting | Financial director | CRM, reporting | No edits outside accounting |

## What to do first
1. Pick the three data domains that cause the most arguments, usually customer, product and stock.
2. Write a one-line definition of each and name a business owner.
3. Apply the point-of-legitimate-creation test to choose the authoritative system.
4. Check each integration that touches those domains and confirm it flows in the agreed direction.
5. Switch off or restrict editing in consuming systems where it is causing overwrites.


The trade-off is some loss of local convenience. Teams used to editing data wherever they happen to be working will need to make certain changes in the owning system, or raise a request. That friction is usually small compared with the cost of data that cannot be trusted.

## What better looks like

A well-designed data architecture does not eliminate copies. It eliminates ambiguity about authority. People know which system to trust, integrations know which direction changes should move, and data issues can be traced to a responsible process and owner.

That is how a business moves from "our systems have different numbers" to a controlled operating model for shared data. A [Digital Systems Audit](/services/digital-systems-audit/) can map conflicting data ownership and integration paths, and [Systems Implementation & Integration](/services/systems-implementation-integration/) can then implement controlled data flows around the agreed ownership model.
