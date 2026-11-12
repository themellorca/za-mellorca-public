---
hub: insights
record_id: INS-231
slug: why-business-data-quality-declines-with-growth
title: Why Data Quality Gets Worse as a Business Grows
description: Data rarely gets worse because people become careless. It gets worse because growth adds people, systems, products and exceptions faster than it adds rules. How the decline happens and how to slow it.
lead: Data rarely gets worse because people become careless. It gets worse because growth adds people, systems, products and exceptions faster than it adds rules. How the decline happens and how to slow it.
category: Data Quality
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Data Quality
sources:
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - What is Data Governance? - IBM | https://www.ibm.com/think/topics/data-governance
related:
  - How Bad CRM Data Gets Created | /insights/how-bad-crm-data-gets-created/
  - Why Automating a Broken Process Makes the Problem Worse | /insights/why-automating-a-broken-process-makes-the-problem-worse/
  - How Piling On AI Tools Creates a New Layer of Software Mess | /insights/how-piling-on-ai-tools-creates-a-new-layer-of-software-mess/
summary: Data rarely gets worse because people become careless. It gets worse because growth adds people, systems, products and exceptions faster than it adds rules. How the decline happens and how to slow it.
layout: plain
---
A business with eight people and one spreadsheet usually has excellent data. Everyone knows the customers, the owner remembers the odd price arrangements, and the one person who maintains the list notices when something looks wrong. Five years and sixty staff later, the same business holds customer details in an accounting package, a CRM, a billing tool, three spreadsheets and several inboxes, and nobody is quite sure which version is right.

It is tempting to blame carelessness, but that is rarely the cause. Data quality declines with growth for structural reasons. The business adds volume, people, systems and exceptions faster than it adds the rules and ownership that kept the small version accurate. Understanding the mechanism is the first step to counteracting it.

> In a small business, quality is maintained by people who remember. In a larger one, it has to be maintained by design.
>

## Reason one: the person who kept it right is no longer enough

Early data quality is a personal achievement. One bookkeeper or office manager has the whole picture and quietly corrects things. As volume grows, that person is promoted, overloaded or replaced, and the informal corrections stop. Nothing announces the change. Duplicates, outdated contacts and half-completed records accumulate until a report no longer reconciles. The pattern is closely related to the one described in [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/).

## Reason two: every new system creates another copy

Growth brings new tools: a CRM when sales needs structure, a billing platform when invoicing gets complicated, a support desk when enquiries multiply. Each tool holds its own version of the customer. IBM describes the result as data silos, where information is isolated within one group or system and not readily shared. Without clear rules, each silo is edited independently, and the versions drift apart. A change of address made in one place is not made in the others, and the business is then dealing with several partial truths. Mapping where each item lives is the starting point, as outlined in [how to map the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/).

## Reason three: more people means more ways of entering the same thing

With two people capturing data, conventions are shared naturally. With twenty, they are not. One person enters "Pty Ltd", another "(Pty) Ltd", a third leaves it out. Phone numbers appear with and without the +27 prefix. A customer is captured as "Mr J Dlamini", "John Dlamini" and "J. Dlamini". Free-text fields, which are flexible in a small team, become a source of variety in a large one. Each variation prevents the system from recognising that two entries refer to the same entity.

## Reason four: complexity creates exceptions, and exceptions create workarounds

A larger business has more product lines, pricing tiers, branches and special terms. When the system cannot represent a situation, staff improvise: a customer's special discount is typed into a notes field, a second account is opened for a different branch, a product is duplicated with a new code for a one-off deal. These workarounds are rational at the time. They also create records that other people, reports and automations interpret literally. This mechanism is discussed in [master data changes break reports without warning](/discovery/master-data-changes-break-reports-without-warning/).

## Reason five: data ages faster than anyone reviews it

Contacts leave their employers, companies change banks, addresses and tax details change. A small customer base can be refreshed by memory and conversation. A larger one cannot, and each year of growth leaves a larger share of records that were once correct and no longer are. Section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. In a growing business that obligation cannot be met by good intentions. It needs a routine.

## Reason six: nobody owns the data, so nobody is accountable

Systems usually have an administrator, but data rarely has an owner. When sales, finance and operations all use the customer record, each assumes that someone else is responsible for its accuracy. Governance is the discipline of settling this. IBM defines data governance as the processes, policies and standards that help ensure data is accurate, available and secure. The term sounds heavyweight, but the practical content for a mid-sized business is modest: a named owner per data set, agreed definitions and a way to report problems.

## What slows the decline

The answer is not a large data project. A handful of controls, introduced early, do most of the work.

1. **Name an owner for each core data set.** Customers, suppliers, products and staff each need one accountable person who decides the rules and approves changes.
2. **Replace free text with controlled choices.** Use drop-downs for province, industry, payment terms and product category. Validate formats for phone numbers, VAT numbers and email addresses at the point of entry.
3. **Detect duplicates automatically.** Many CRMs offer matching rules. Microsoft's documentation on duplicate detection rules in Power Platform describes how rules compare fields and warn users before a duplicate is created. Switch such features on, and review the matches regularly.
4. **Decide which system is the master.** For each item, choose the one place where it is created and changed, and have other systems read from it.
5. **Measure a few quality indicators.** Count duplicates, records missing a mandatory field and contacts not confirmed in the past 12 months. Report the trend monthly.
6. **Make cleaning part of a rhythm.** A quarterly review costs far less than a one-off rescue before an audit or a system migration.

Catching problems close to the point of entry is far cheaper than fixing them in a report, a theme developed in [why data quality problems are found after reports are published](/discovery/why-data-quality-problems-are-found-after-reports-are-published/). The stakes rise as automation spreads, because tools act on whatever they find, as set out in [why AI makes data quality more important, not less](/insights/why-ai-makes-data-quality-more-important-not-less/).

## An illustrative example

The following is a hypothetical case. A Bloemfontein building-supplies company grows from two branches to six in four years. Each branch keeps its own customer list, and a new CRM is added at head office. By year four, the same contractor appears under four spellings, with three different credit limits. Statements go to the wrong person, and head office cannot say what a customer is really worth.

The company appoints the credit controller as owner of customer data, makes the accounting system the master for company name, VAT number and credit limit, and adds duplicate detection to the CRM. Over two months, a clean-up merges about 900 duplicate records. The monthly report on missing fields then shows the trend heading in the right direction, and branch managers start to treat the customer record as a shared asset rather than a private list.

## A note on timing

Data quality is cheapest to protect when the business is small and most expensive to repair when it is large. If your business is growing, the right time to name owners, standardise entry and choose a master system is before the next system or branch is added, not after the first embarrassing report.
