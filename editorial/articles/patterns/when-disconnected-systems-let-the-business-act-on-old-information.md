---
hub: patterns
record_id: PAT-029
slug: when-disconnected-systems-let-the-business-act-on-old-information
title: When Disconnected Systems Let the Business Act on Old Information
description: The hidden cost of systems that do not talk to each other is not only re-keying. It is the gap in time between one system changing and the others finding out, and the decisions taken inside that gap.
lead: The hidden cost of systems that do not talk to each other is not only re-keying. It is the gap in time between one system changing and the others finding out, and the decisions taken inside that gap.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Staff take actions such as accepting orders, releasing deliveries, quoting prices or booking work using one system while a more recent change sits unseen in another system until someone re-keys or reconciles it.
primary_identification: A timing and synchronisation gap between systems of record, causing decisions to be taken on stale information.
commercial_value_dimensions: Error cost, margin, customer experience, credit risk, speed and scalability
sources:
  - Event-Driven Architecture Style - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
related:
  - Why Staff Keep a Spreadsheet Between Two Business Systems | /patterns/why-staff-keep-a-spreadsheet-between-two-business-systems/
  - When Work Goes Missing in the Gap Between Two Systems | /patterns/when-work-goes-missing-in-the-gap-between-two-systems/
  - Why the Same Problems Return After You Replace the System | /patterns/why-the-same-problems-return-after-you-replace-the-system/
summary: The hidden cost of systems that do not talk to each other is not only re-keying. It is the gap in time between one system changing and the others finding out, and the decisions taken inside that gap.
layout: plain
---
## Observable condition

A salesperson confirms an order for twenty units because the stock screen shows thirty. Two hours earlier the warehouse had allocated twenty-five of them to another customer, but that allocation lives in a different system and will only be reflected after the afternoon update. A delivery is released to a customer whose account finance placed on hold that morning, because the dispatch team works from yesterday's list. A quote goes out at last month's price because the price change was loaded into the accounting package but not into the quoting tool.

Nobody did anything wrong. Each person used the system in front of them, and each system was correct about what it knew. The problem is that they did not know the same things at the same time.

An illustrative example: a Western Cape food-packaging supplier runs its online orders, its accounting and its warehouse on three separate systems. Orders are exported to the warehouse twice a day and stock levels are sent back overnight. Customer service regularly has to phone customers to apologise for items that showed as available when they ordered, and finance occasionally discovers that goods went out to an account that was already over its limit.

## Realisation

The hidden cost of systems that do not talk to each other is usually described as duplicate typing. That cost is real, and it is the most visible. But the more expensive cost is often time. Every disconnected system creates a window between the moment something changes in one place and the moment the rest of the business finds out. Inside that window, people make commitments to customers, suppliers and colleagues on the basis of information that is no longer true.

Architects have a precise way of describing this. Microsoft's guidance on event-driven architecture explains that when systems are connected asynchronously, there can be a measurable delay between one part emitting a change and the others reflecting it, and that during this window different parts of the system hold a different view of the current state. In well-designed systems, that window is deliberate, short and managed. In a business connected by overnight exports, spreadsheets and people, the window is long, unmanaged and usually invisible.

The cost does not show up as integration cost. It shows up as cancelled orders, credit notes, bad debts, apology calls and lost trust, all filed under other headings.

**Realisation prompt:** if your stock, credit status or price changed at nine this morning, at what time would every system and person who relies on it know?

## Identification

This is a synchronisation and timing problem between systems of record. The visible symptom is a recurring set of avoidable errors: overselling, wrong prices, deliveries to blocked accounts, double bookings. The common assumption is that staff should have checked. The structural cause is that the business has several systems that each hold part of the truth, connected by batch transfers or by people, with no design for how quickly a change must reach the others.

Several existing Patterns describe neighbouring problems. [Why information has to be copied from one system to another](/patterns/why-information-has-to-be-copied-from-one-system-to-another/) covers the re-keying itself. [When your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/) covers one specific pair of systems. [When nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/) covers undeclared data authority. This Pattern concerns the time dimension: how long the business runs on yesterday's version of the facts.

## Diagnosis

- **Batch transfers set the clock.** When data moves by scheduled export or nightly import, the business is only as current as the last run. IBM describes the difference between batch integration and real-time approaches such as change data capture, which replicates changes from source systems as they happen.
- **People are the transport.** Where the link is a person re-typing or emailing a spreadsheet, the delay depends on their workload, leave and memory.
- **Nobody has set a freshness requirement.** The business has never decided how current each piece of information needs to be at the point of use. Credit status at the moment of dispatch needs to be minutes old; a monthly sales summary does not.
- **No declared master.** When two systems both hold prices or stock, neither is clearly authoritative. Master data management exists precisely to give key entities, such as customers and products, one governed version.
- **No check at the point of commitment.** Orders and deliveries are committed without a last look at the authoritative source, because that source is in another system the user cannot see.

## Commercial impact

The commercial value at stake is error cost, margin, customer experience, credit risk, speed and scalability.

Error cost appears as cancelled lines, re-deliveries, credit notes and the staff time to handle them. Margin suffers when goods are sold at outdated prices or expedited to cover an oversell. Customer experience is damaged most by promises the business then cannot keep. Credit risk rises when goods leave for accounts that should have been stopped. Speed suffers because cautious staff start double-checking everything by phone, adding a manual step to every transaction. Scalability is limited because the number of transactions inside each stale window grows with volume, so the error count grows with sales. The broader cost of disconnected tools is covered in [the integration cost of business systems that do not talk](/impact/business-systems-do-not-talk-integration-cost/).

## Common misidentification

The most common response is a reminder to staff to check the other system first. That adds a manual step and still depends on the other system being current.

The second is to buy one large system to replace everything. Consolidation can help, but it is a major change with its own risks, and many businesses can close the most expensive timing gaps far sooner by connecting the systems they have and deciding which one is authoritative for each item.

The third is to make every connection real-time. Not every piece of information needs to move instantly. Treating everything as urgent adds cost and complexity without benefit.

## Possibility

In a better state, the business has listed the handful of facts that drive commitments to customers, typically stock availability, credit status, price and delivery capacity, and decided for each one which system is authoritative and how fresh it must be at the moment of use. The most time-sensitive facts move between systems as events, so a credit hold in finance reaches dispatch within minutes. Less sensitive information continues to move in scheduled batches. Where a commitment is made, the system checks the authoritative source at that moment rather than relying on a copy.

For the packaging supplier, that might mean stock allocations sent from the warehouse to the online shop as they happen, and dispatch blocked automatically when an account is placed on hold.

## Intervention

1. **List the costly errors.** Collect three months of cancellations, credit notes, re-deliveries and write-offs, and note which were caused by out-of-date information.
2. **Identify the deciding facts.** For each error type, name the fact that was stale and the systems involved.
3. **Declare authority.** For each fact, choose one authoritative system, using the approach in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).
4. **Set freshness requirements.** Decide how current each fact must be at the point of commitment: minutes, hours or a day.
5. **Connect to match.** Use event-based or real-time integration only where the requirement is tight, and scheduled transfers elsewhere. The Insight [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/) explains what to expect.
6. **Add a check at commitment.** Where possible, validate stock, credit and price against the authoritative source at the moment an order or delivery is confirmed.

## Diagnostic questions

- How many systems hold stock levels, prices or customer credit status?
- How often does information move between them, and by what means?
- How many credit notes or cancellations last quarter were caused by out-of-date information?
- Can dispatch see a credit hold placed this morning?
- Has anyone decided how current each critical fact must be?

## Bottom line

Systems that do not talk to each other cost more than the time spent re-typing. They create a gap in time during which the business makes promises on information that has already changed. Naming the few facts that drive commitments, declaring which system owns each one and connecting them at the speed each actually requires turns a stream of avoidable errors into a managed, predictable flow of information.
