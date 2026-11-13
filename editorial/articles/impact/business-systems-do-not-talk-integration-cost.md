---
hub: impact
record_id: CPS-076
slug: business-systems-do-not-talk-integration-cost
title: The cost of business systems that do not talk to each other
description: When systems cannot share information, employees become the integration layer and the business pays through copying, reconciliation, errors and delays.
lead: When systems cannot share information, employees become the integration layer. The business pays for that gap through copying, reconciling, delays, errors and poor customer handovers.
category: Systems Integration
published_date: 2026-08-31
updated_date: 2026-08-31
byline_category: Disconnected Systems, Integrations & Duplicate Data
tags:
  - Labour waste
  - Errors & rework
  - Integration cost
cta_label: Implementation & Integration
cta_href: /services/systems-implementation-integration/
side_title: Cost mechanisms
side_text: Disconnected systems usually require both architecture and implementation work.
sources:
  - What’s Driving SMB Success in 2025: 7 Business Statistics | https://www.salesforce.com/au/small-business/business-statistics/
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
  - The Small Business Trends Report | https://www.salesforce.com/ap/resources/research-reports/smb-trends/
  - 2025 SMB Trends: Why ASEAN Businesses Are Investing in AI and Automation | https://www.salesforce.com/ap/blog/2025-smb-trends/
  - Data Integration For Small Business: Everything You Need To Know | https://www.salesforce.com/blog/small-business/data-integration-for-small-business/
closing_title: Method note
closing_text: Financial examples are illustrative. Use your own labour, transaction, error and contribution-margin data when quantifying the business case.
related:
  - The labour cost of manually reconciling two systems | /impact/manual-reconciliation-between-systems-labour-cost/
  - From inbox to system by hand: The labour cost of retyping emails | /impact/copying-email-details-into-business-systems-admin-cost/
  - Paper forms captured twice: The cost of double handling | /impact/paper-forms-captured-twice-double-handling-cost/
---
## The employee becomes the integration layer

A sale is entered in one system. Someone copies the customer into accounting. Another person retypes the order into fulfilment. Support cannot see what sales promised, so the customer repeats the story. Management exports several spreadsheets before it can see a complete picture.

This is what disconnected systems look like in practice. The software may work individually, but the business process does not flow across them. Human beings become the bridge between applications, a pattern we describe in [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/).

Consider a 35-person office-furniture supplier in Cape Town. A sales representative closes a deal in the CRM. The sales administrator then creates the customer in the accounting package, types the order into a stock system, emails the warehouse a PDF, and updates a delivery spreadsheet the drivers read on their phones. Five places hold some version of the same order. When a customer changes the delivery address by phone, only two of those places get updated, and the truck goes to the old site.

## Why businesses tolerate disconnected systems

Fragmentation usually arrives through reasonable local decisions. Sales chooses the best CRM for sales. Finance chooses accounting software. Operations adopts a scheduling or inventory system. Marketing adds forms and campaign tools. Each choice can make sense in isolation while producing a poor system at company level.

[Salesforce’s small-business research](https://www.salesforce.com/au/small-business/business-statistics/) reports that the average small business uses seven different apps to run daily operations, and that half of the leaders it surveyed report data inconsistencies between their tools. Vendor research is not a universal law, but the operational mechanism is easy to verify inside any business: if employees keep moving the same data between applications, integration debt already exists.

There are other reasons the situation persists. The person doing the copying is often quick and reliable, so the cost looks small. Integration projects sound technical and expensive, while retyping sounds like ordinary admin. And nobody owns the whole process, so nobody sees the full cost.

## How the pain becomes money

- **Duplicate labour:** staff re-enter information that already exists.
- **Reconciliation labour:** teams investigate why two systems disagree.
- **Error cost:** mistyped customer, pricing, inventory or billing data creates corrections and rework.
- **Response delay:** leads, orders and service requests wait while information is manually transferred.
- **Customer friction:** customers repeat information because departments cannot see a shared history.
- **Reporting delay:** managers wait for exports and spreadsheet consolidation before acting.

> **The commercial signal:** whenever an employee says “I take this from system A and put it into system B”, you have found a measurable integration cost.
>

## A transparent cost model

List the manual handoffs between systems and measure them. For each handoff:

- **Annual transfer labour** = transfers per day × minutes per transfer ÷ 60 × loaded hourly labour cost × working days

Add the cost of corrections separately:

- **Annual rework cost** = errors per month × average correction hours × loaded hourly cost × 12

Where delays affect leads, orders or retention, estimate revenue exposure using your own conversion and contribution-margin data. Keep that model conservative; delayed revenue and permanently lost revenue are not the same thing.

### Running the numbers on one handoff

Take the furniture supplier’s CRM-to-accounting step. Count a normal week of orders, time a handful of transfers with a stopwatch, and pull the loaded hourly cost of the sales administrator from payroll. Then count, from the last quarter, how many credit notes or re-deliveries traced back to a retyping mistake, and how long each took to resolve. These are numbers the business already holds. The point is not precision; it is to replace “it only takes a few minutes” with a figure that can be compared to the cost of connecting the systems.

## How to diagnose where the gaps are

A quick diagnosis does not need technical tools. Sit with the people who do the work and follow real transactions:

1. Pick one recent order and trace it from first enquiry to cash received.
2. At every step, ask which system holds the information, how it got there, and who put it there.
3. Mark each export, copy-paste, email attachment and spreadsheet.
4. Note where two systems hold the same field, such as a customer address or a price, and ask which one is right when they disagree.
5. Ask what happens when something changes after the first entry, such as a new address or a revised quantity.

The last question is often the most revealing. Initial entry is usually handled; changes after the fact are where copies drift apart. A customer who exists three slightly different ways is the visible symptom, as explored in [why one customer exists differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/).

## The hidden scaling problem

Disconnected systems often look tolerable at low volume because employees compensate. As volume grows, the same manual bridge requires more people. Growth therefore creates proportional administration instead of operating leverage.

This is why integration is not merely an IT neatness project. It is a question of whether transaction volume can increase without matching growth in copying, checking and coordinating.

## When the pain becomes commercially urgent

Priority rises when transaction volumes increase, customers experience repeated handoff failures, finance spends significant time reconciling systems, management reports cannot be trusted, or the business is preparing to implement AI. AI does not automatically repair fragmented source systems; it can simply make inconsistent information move faster.

## What good looks like

A good environment has a clear system of record for important entities such as customers, products, employees and financial transactions. Systems exchange data through documented integrations, shared identifiers and controlled workflows. Exceptions are visible instead of silent. Employees handle judgement and exceptions rather than routine copying.

[IBM describes master data management](https://www.ibm.com/think/topics/master-data-management) as creating one authoritative “golden record” for core entities such as customers and products, and warns that without it, organisations maintain several potentially inconsistent versions of the same data. A small business does not need an enterprise programme to apply the principle. It needs to decide, field by field, where the truth lives; our guide on [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) walks through that choice.

### Trade-offs in how you connect systems

| Approach | Suits | Watch for |
| --- | --- | --- |
| Native connector between two products | Common pairs such as CRM and accounting | Limited field mapping; unclear behaviour on errors |
| Integration platform or automation tool | Several systems, moderate volume | Needs an owner and monitoring, or failures go unseen |
| Direct API integration | High volume or specific rules | Development and maintenance cost; documentation |
| Consolidating onto one platform | Heavy overlap between tools | Migration effort; some loss of specialist features |

Whichever route you choose, an integration that nobody watches can fail quietly and put people back to retyping without anyone noticing. See [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/) for the behaviours to insist on, including error handling and visibility.

## Practical next actions

- Map one end-to-end process such as lead-to-cash, order-to-fulfilment or hire-to-access.
- Mark every point where data is retyped, exported, emailed or reconciled.
- Choose the authoritative system for each key data object.
- Prioritise integrations by labour saved, error reduction and revenue impact.
- Document ownership and monitoring for every integration you build.
- Remove redundant spreadsheets only after the underlying data flow is reliable.

### What to do first

Start with the single handoff that happens most often and causes the most corrections. For many businesses that is won deal to invoice, or order to dispatch. Measure it for two weeks, agree the system of record for the customer and order, and connect that one flow properly before touching anything else. A working first integration builds the case and the habits for the next.

## Bottom line

The cost of disconnected systems is not the integration project you have avoided. It is the recurring labour, rework, delay and customer friction you already pay for every day. Integration becomes commercially rational when the cost of human bridging exceeds the cost of fixing the flow.

*Method note:* financial examples are illustrative. Use your own labour, transaction, error and contribution-margin data when quantifying the business case.
