---
hub: insights
record_id: INS-056
slug: how-to-map-the-flow-of-information-between-business-systems
title: How to map the flow of information between business systems
description: A workflow map shows how work moves between people. An information flow map shows how data moves between systems. A practical way to build one in a week.
lead: A workflow map shows how work moves between people. An information flow map shows how data moves between systems: where each key record is created, where it is copied, how it gets there and who notices when it does not. A practical method for building one in a week.
category: Systems & Integration
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Systems & Integration
sources:
  - What Is Data Lineage? - IBM | https://www.ibm.com/think/topics/data-lineage
  - Section 17 Documentation - POPIA | https://popia.co.za/section-17-documentation/
  - Connectors overview | https://learn.microsoft.com/en-us/connectors/overview
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - When copy-and-paste is really an integration problem | /insights/when-copy-and-paste-is-really-an-integration-problem/
  - How duplicate software creates duplicate work | /insights/how-duplicate-software-creates-duplicate-work/
  - How a CRM turns into an expensive address book | /insights/how-a-crm-turns-into-an-expensive-address-book/
summary: A workflow map shows how work moves between people. An information flow map shows how data moves between systems: where each key record is created, where it is copied, how it gets there and who notices when it does not. A practical method for building one in a week.
layout: plain
---
Ask a business how a customer order moves through it and someone can usually describe the steps: the quote, the acceptance, the order, the delivery, the invoice. Ask instead how the customer's details move between the CRM, the accounting package, the delivery system and the e-commerce site, and the answers become vague. Some of it is automatic. Some of it is exported weekly. Some of it is typed in by whoever happens to be there.

That second question is what an information flow map answers. It is different from a workflow map, which follows the work and the people doing it, an approach covered in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/). An information flow map follows the data. Both are useful, but they reveal different problems.

## Why map information flows at all

Most systems problems that feel like software problems are really flow problems. Reports disagree because the same figure arrives in two places by two routes. A customer's address is wrong because it was updated in one system and not copied to another. An integration fails and nobody notices because nobody knew the business depended on it.

The idea is not new. In data management it is called lineage. IBM describes [data lineage](https://www.ibm.com/think/topics/data-lineage) as tracking where data originated, how it changed and where it ended up, and notes that it helps teams trace errors to their source and understand the impact of system changes. A business does not need lineage software to get most of that benefit. It needs a clear, shared picture of a small number of important flows.

There is also a compliance reason in South Africa. Section 17 of POPIA requires a responsible party to [maintain documentation of all processing operations](https://popia.co.za/section-17-documentation/) under its responsibility. Knowing which systems personal information passes through, and how, is a practical part of meeting that.

## Step 1: Choose the information, not the systems

Start by listing the five to eight types of information the business cannot run without. In most small and mid-sized businesses these are:

- customers and contacts;
- products, services and prices;
- quotes and orders;
- invoices and payments;
- stock or job status;
- suppliers and purchase orders;
- employees and their access.

Mapping by information type keeps the exercise focused. Mapping every system and every connection at once produces a diagram nobody can read.

## Step 2: Find where each item is created

For each information type, establish where a new record first comes into existence. A customer might be created in the CRM when a lead arrives, in the web shop at checkout, or in the accounting package when a sales clerk opens an account. If there are several creation points, record all of them. Multiple creation points are one of the most common causes of duplicates, and a strong hint that the business has not decided which system is authoritative. That decision is covered in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## Step 3: Trace every place it travels

Next, follow each item from where it is created to every other system that holds a copy or uses it. For each movement, capture the same handful of facts. A simple register works better than a drawing at this stage:

| Field | What to record |
| --- | --- |
| Information | For example, customer billing details |
| From | The system it leaves |
| To | The system it arrives in |
| Method | Automatic integration, scheduled export and import, or manual re-keying |
| Trigger | What starts the movement: a new record, a status change, a schedule, a person remembering |
| Frequency and volume | How often and how many records |
| Direction | One way, or edited in both places |
| Owner | Who is responsible if it stops working |
| Failure signal | How anyone would know it had failed |

The trigger column is worth particular care. Integration platforms describe automated flows in terms of triggers and actions; Microsoft's [connectors overview](https://learn.microsoft.com/en-us/connectors/overview) gives examples such as a trigger when a new item is added and an action that creates a file. Manual flows have triggers too, they are just less reliable. "When the bookkeeper notices" is a trigger, and writing it down makes the risk visible.

## Step 4: Verify with evidence

People's descriptions of data flows are often wrong in small but important ways. An integration everyone believes is automatic may have been switched off months ago. A weekly export may in fact happen fortnightly. The UK National Cyber Security Centre's guidance on [asset management](https://www.ncsc.gov.uk/collection/10-steps/asset-management) recommends validating what you believe you have against logs and more than one source. The same discipline applies here. Pick a few recent records and check that they appear where the map says they should, with the same values, at the time the map implies.

## Step 5: Draw it, then mark the problems

Only once the register is reasonably complete is it worth drawing a picture. Put systems as boxes and draw one arrow per flow, labelled with the information type. Then mark three things clearly:

- **Manual flows,** where a person carries information between systems. These are the costs and error points. The broader pattern is described in [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/).
- **Two-way flows,** where the same information is edited in both systems. These are where conflicting values come from.
- **Silent flows,** where nobody would know if the movement stopped. These are where failures sit undetected.

A map with those three markings is usually enough to start a useful conversation about priorities.

## An illustrative example

Consider a hypothetical Gqeberha automotive parts wholesaler with an online trade portal, a CRM used by its sales representatives and an accounting package that holds stock and debtors.

Mapping customer information showed three creation points: trade customers registered on the portal, representatives added them to the CRM, and the credit controller opened accounts in accounting. Customer details moved from the portal to accounting through a nightly import, from accounting to the CRM by a monthly spreadsheet, and from the CRM to nowhere. Credit limits existed only in accounting, so representatives regularly took orders from customers on hold.

The map made the priorities obvious: one creation point for trade accounts, accounting as the authority for billing details and credit status, and a daily one-way flow of account status into the CRM. This scenario is illustrative, not a client case study.

## Keeping the map alive

An information flow map is useful for as long as it is accurate. Keep the register in a shared place, name an owner, and update it whenever a system is added, removed or reconnected. Before any new integration is built, check the map and add the flow to it. The details worth recording at that point are set out in [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/).

Review the whole map at least once a year, and whenever a significant change is planned, such as replacing a core system or introducing AI tools that will read from several sources at once.

## When it is worth doing

An information flow map is worth building before replacing a major system, before an integration project, when reports persistently disagree, or when a business is preparing to give automation or AI tools access to its data. It usually takes a few days of focused effort for a small or mid-sized business. Mellorca uses this kind of map as the starting point for a [digital systems architecture roadmap](/services/digital-systems-architecture-roadmap/), because it shows what the current architecture actually is before anyone decides what it should become.
