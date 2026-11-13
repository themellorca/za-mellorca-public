---
hub: insights
record_id: INS-059
slug: how-to-decide-what-should-be-the-system-of-record
title: How to decide what should be the system of record.
description: How to assign authoritative ownership of business data when several systems create, update and consume the same records.
lead: When several systems hold the same customer, product, supplier or employee data, the key question is not where the data appears. It is which system is authoritative for each fact.
category: Digital Infrastructure
published_date: 2026-09-01
updated_date: 2026-09-01
eyebrow: Article
page_title: How to Decide What Should Be the System of Record | Mellorca
tags:
  - Data Architecture
  - System of Record
  - Integration
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - Integrate data into Microsoft Dataverse - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/data-integrator
  - Dataverse as a master data system - Dynamics 365 - Microsoft Learn | https://learn.microsoft.com/en-us/dynamics365/guidance/reference-architectures/dataverse-master-data-system
related:
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
  - The hidden cost of apps that do not share data | /insights/the-hidden-cost-of-apps-that-do-not-share-data/
  - What to document before connecting two business platforms | /insights/what-to-document-before-connecting-two-business-platforms/
---
Businesses often talk about creating a “single source of truth” as though that means putting everything into one database. In practice, most operating environments need several systems. Finance, CRM, service, commerce and HR platforms may each be legitimate owners of different parts of the same business entity.

The architectural problem starts when ownership is implicit. One application changes a customer address, another changes it back during a sync, a spreadsheet contains a third version, and reporting teams spend time deciding which record to believe.

IBM's guidance on master data management describes the purpose of MDM as creating consistent enterprise master data across applications while reducing fragmentation, duplication and inaccuracies. It is explicit that this depends on a well-defined data model and solid data stewardship, not only on technology. The point is not necessarily one physical database; it is governed ownership, reconciliation and stewardship.

> A system of record is an ownership decision before it is a technology decision.

## Why implicit ownership becomes expensive

When nobody has decided which system is authoritative, every connected system behaves as though it might be. Users correct data wherever they happen to be working. Integrations copy whichever value changed most recently. Reports pull from whichever source the analyst knows best. Each choice is locally reasonable, and together they produce a business that cannot say with confidence what a customer's address, a product's price or a supplier's payment terms actually are.

IBM gives a simple illustration of the consequence: an incorrect address in customer master data can send invoices and products to the wrong place, leading to customer dissatisfaction and increased operating cost. The error is small; the propagation is what makes it costly.

## Choose authority at field level when necessary

“The CRM is the system of record for customers” can still be too vague. The CRM may own contact details and sales status while the finance platform owns credit status, invoicing identifiers and tax information. A support platform may own service entitlements. The useful design question is: *which system has the right to create or change this attribute?*

For each important data domain, define the authoritative source, which systems may update it, which systems may only consume it, and what happens when records conflict.

## An illustrative example

*This is a hypothetical scenario for illustration, not a client case.* A wholesaler's sales team updates customer billing addresses in the CRM because that is where they talk to customers. The finance team updates the same addresses in the accounting platform when invoices bounce. A nightly two-way sync copies whichever value changed last. When both teams correct the same customer on the same day, one correction silently overwrites the other. The fix is not a better sync. It is a decision: finance owns the billing address because it is verified when invoices are issued; sales owns contact names and roles; the sync is then configured to respect those rules and flag conflicts rather than resolve them by timestamp.

## Use four tests

- **Process proximity:** where is the fact created or verified as part of real work?
- **Control strength:** which system has the strongest validation, permissions and auditability for that fact?
- **Lifecycle ownership:** which team is accountable for keeping it correct over time?
- **Integration practicality:** can downstream systems consume the authoritative value reliably without creating circular updates?

The most familiar interface is not automatically the right master. Neither is the newest system. Authority should follow the business process that legitimately creates and governs the information.

When the tests disagree — the fact is created in one system but governed more strongly in another — favour the system whose owning team will be held accountable for errors, and design the capture so the fact flows into that system as early as possible.

## Avoid bidirectional ambiguity

Bidirectional integration can be useful, but it also increases the need for explicit ownership. Microsoft's current Dataverse integration guidance describes tightly coupled bidirectional patterns between business applications, in which a data change on either side causes writes to the other. Technically, both sides may be able to write. Architecturally, that does not remove the need to define which changes are valid, how mappings behave and how conflicts are handled. Microsoft's reference architecture for [Dataverse as a master data system](https://learn.microsoft.com/en-us/dynamics365/guidance/reference-architectures/dataverse-master-data-system) shows the one-way alternative: the data is maintained in one central store, and each create or update is published so that the other systems receive it from there.

Without those rules, integration can distribute inconsistency faster. A synchronisation job that works perfectly can still be wrong if it copies an unauthoritative value into every connected system. This is one reason [every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/): someone has to decide what the integration is allowed to change.

## Separate system of record from reporting layer

The place where management consumes data does not have to be the place where operational data is mastered. A warehouse or analytics layer may combine information from many sources for reporting while the underlying operational systems retain authoritative ownership of their domains.

This distinction matters because trying to turn a dashboard or data lake into an operational master without appropriate controls can create another shadow system. Reporting should know where each metric comes from and which source owns the underlying facts. When it does not, the result is familiar: [reports that cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Warning signs

- Teams ask which customer record, product code or revenue figure is “the real one”.
- Corrections made in one system reappear wrong the next day.
- Duplicate records are cleaned up periodically and quietly return.
- Integration mappings exist only in the configuration of the integration tool, or in one engineer's memory.
- Spreadsheets are maintained as the version people actually trust.

## A practical diagnostic

1. List the critical data domains: typically customers, products, suppliers, employees, prices and contracts.
2. For each, list every system that stores it and every system that can change it.
3. Mark where the fact is first created and where it is verified.
4. Identify integrations that write in both directions and check whether conflict rules exist.
5. Name the team accountable for correctness, and confirm they agree.

The gaps that appear — domains with several writers and no owner — are where the effort should go first. A related article explains [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) in more detail.

## Trade-offs

Field-level authority gives precision but adds design and documentation effort, and every exception must be maintained as systems change. A dedicated MDM platform can centralise matching and stewardship but is a significant investment that only makes sense when the number of systems and the cost of inconsistency justify it. Many organisations get most of the benefit from clear ownership rules, one-directional flows where possible and a disciplined exception process, before any new platform is considered.

## What better looks like

A mature data architecture has a short, explicit answer for each critical data domain: who owns it, where it is mastered, which systems can change it, how it is distributed, how duplicates are resolved, and who investigates exceptions. Those answers are documented alongside integration mappings rather than living in one engineer's memory.

If teams regularly ask which customer record, product code or revenue number is “the real one”, the organisation has already reached the point where system-of-record decisions need to be formalised.

[Digital Systems Architecture & Roadmap](/services/digital-systems-architecture-roadmap/) defines system ownership and target-state data flows. [Systems Implementation & Integration](/services/systems-implementation-integration/) turns those rules into maintainable interfaces and mappings.
