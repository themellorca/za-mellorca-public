---
hub: patterns
record_id: PAT-227
slug: when-nobody-knows-which-system-holds-the-correct-data
title: When nobody knows which system holds the correct data
description: When stock, prices or contacts differ between systems, nobody knows which to trust. Name a system of record and an owner for each data element.
lead: When stock, prices or contact details differ between systems and staff must check each one, the cause is usually undeclared data authority. Naming a system of record and an owner for each data element removes the guesswork.
category: Data Quality, Ownership & Governance
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Data Quality, Ownership & Governance
pattern_family: Data Quality, Ownership & Governance
observable_condition: Staff compare several systems, phone colleagues or check physical sources before trusting basic data such as stock, prices or contact details, because systems disagree.
primary_identification: Data authority and ownership problem: no declared system of record or accountable owner for each important data element.
commercial_value_dimensions: speed, capacity, customer experience, revenue, risk
sources:
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Master Data Management in Microsoft Purview - Microsoft Learn | https://learn.microsoft.com/en-us/purview/data-governance-master-data-management
related:
  - When nobody owns the definition of a business metric | /patterns/when-nobody-owns-the-definition-of-a-business-metric/
  - When poor data quality becomes an automation failure | /patterns/when-poor-data-quality-becomes-an-automation-failure/
  - Why information has to be copied from one system to another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - Why AI cannot fix data nobody trusts | /patterns/why-an-ai-tool-cannot-rescue-records-your-own-staff-do-not-believe/
summary: When stock, prices or contact details differ between systems and staff must check each one, the cause is usually undeclared data authority. Naming a system of record and an owner for each data element removes the guesswork.
layout: plain
---
## Observable condition

A sales rep wants to confirm stock before promising a delivery date. The online store shows twelve units, the stock sheet in the warehouse shows eight, and the accounting system shows ten. The rep phones the warehouse, who walk to the shelf and count. The order goes out, but the same question will be asked again tomorrow.

The pattern repeats with other data. Which delivery address is current: the one in the CRM or the one on the last invoice? Which price is right: the price list, the quote template or the e-commerce catalogue? Which phone number should collections use? Each time, staff resolve the question by comparing systems, asking a colleague or checking a physical source. Nobody can point to a rule that says "for this piece of information, this system is the truth".

## Realisation

The issue is not simply that systems disagree. Some disagreement is normal when information changes at different times in different places. The deeper issue is that the business has never decided which system is authoritative for each kind of data, so every disagreement has to be investigated from scratch by whoever happens to notice it.

That turns data reliability into a personal skill. Experienced staff learn, informally, that the warehouse sheet is usually right for stock, the accounts system for balances, and the CRM for contacts, except when it is not. New staff do not know these rules, automations do not know them, and reports built on the "wrong" source quietly mislead.

Realisation prompt: for your five most important pieces of business data, could anyone in the business name the authoritative system for each, and who is responsible for keeping it right? If the answer depends on whom you ask, the business is running on informal trust rather than defined authority.

## Identification

This is a **data authority and ownership problem**. The business holds the same data elements in several systems without having declared, for each element, which system is the source of record, which systems are copies, and who owns correctness.

It is related to, but different from, duplicated customer records, examined in [why one customer exists differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/). Duplication is about the same entity appearing more than once. Authority is about which version wins when copies disagree, and that question applies to stock, prices, product details, balances and contacts alike.

## Diagnosis

The visible symptom is staff checking several systems. The common assumption is that one of the systems is unreliable and should be replaced. The structural cause usually sits elsewhere:

- **Systems were added one at a time.** Each new tool, whether an online store, CRM or job system, arrived with its own copy of products, customers or prices. Nobody revisited which system should now lead.
- **Edits are allowed everywhere.** When the same field can be changed in three places, each system becomes partly authoritative and none is fully trusted.
- **Synchronisation without direction.** Integrations or manual exports copy data between systems, but the direction and timing are unclear, so a correction made in one place may be overwritten from another.
- **No named owner.** Nobody is responsible for the correctness of a given data element across the business. Each team looks after its own system and assumes the others are someone else's concern.
- **Quality is not measured.** Errors are discovered when they cause a problem, not through routine checks.

Established data-management practice describes this gap clearly. IBM's overview of [master data management](https://www.ibm.com/think/topics/master-data-management) describes core business entities such as customers, products, suppliers and locations, and the aim of a single source of truth so that everyone works from the same information. It also notes that keeping several copies aligned across systems requires deliberate integration, deduplication and synchronisation.

The UK government's [Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) frames quality as fitness for purpose, lists dimensions including consistency, timeliness and accuracy, and recommends solving data quality issues at source rather than applying temporary fixes. A business without declared authority cannot fix problems at source, because nobody agrees where the source is. Microsoft Purview's [master data management](https://learn.microsoft.com/en-us/purview/data-governance-master-data-management) documentation describes the same aim: a deduplicated set of master data records, or golden records, against which other data can be checked.

## Commercial impact

The commercial value at stake is **speed, capacity, customer experience, revenue and risk**.

- **Speed and capacity.** Every check across systems adds minutes to routine work, and the checking falls to people who could be selling, serving or delivering.
- **Customer experience.** Customers receive wrong delivery dates, wrong prices or invoices to old addresses, and each mistake costs trust.
- **Revenue.** Sales may be lost because stock is shown as unavailable when it exists, or promised when it does not.
- **Decision quality.** Management reports drawn from different systems produce different answers, a problem explored in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).
- **Automation risk.** Any automation or AI tool connected to the wrong source will act confidently on the wrong data.

How large these effects are depends on transaction volumes and how often the systems diverge. A practical starting point is to count how often staff check a second system before acting, and how many errors reach customers in a month.

## Common misidentification

The usual instinct is to replace the system people trust least, or to buy a single platform that will "hold everything". A new system can help, but if authority and ownership are not defined, the new platform simply becomes one more copy. The question "which system is right?" reappears within months.

Another misreading is to treat the problem as an integration gap. Connecting systems spreads data faster, but if the direction of authority is wrong, integration spreads errors faster too.

## Possibility

In a stronger state, every important data element has a declared home. Stock quantity is authoritative in one system; customer contact details in another; prices in a third. Other systems read from the authoritative source and do not allow local edits, or they send changes back to it through a defined path. Each element has a named owner who is accountable for its accuracy, and simple quality checks show where copies have drifted.

Staff stop checking because there is nothing to check: the answer comes from the source that the business has agreed to trust.

## Intervention

1. **List the contested data.** Identify the data elements staff most often check across systems, usually stock, prices, customer contacts, product details and account balances.
2. **Declare authority per element.** For each one, choose the system of record based on where the data is created and maintained in the normal course of work. The reasoning is set out in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).
3. **Name an owner.** Assign a role, not just a team, that is responsible for the correctness of each element and for resolving disagreements.
4. **Restrict edits in copies.** Where possible, lock fields in non-authoritative systems, or route changes back to the source rather than editing locally.
5. **Fix the direction of integration.** Confirm that data flows from the authoritative system outwards, and that corrections are not overwritten by older copies.
6. **Measure divergence.** Run a simple periodic comparison for the highest-risk elements and treat mismatches as process signals, not just clean-up tasks. Inventory is a common place to start, as discussed in [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/).

## An illustrative example

The following is illustrative, not a client case. A Pretoria distributor of catering equipment sells through reps, a website and a trade counter. Products and prices are maintained in the accounting package, but the website team edits prices directly in the store, and reps keep their own price spreadsheet for negotiated deals. After a supplier increase, the accounting prices are updated, the website is not, and two weeks of online orders are invoiced at a higher price than customers saw at checkout. The fix is not a new website; it is a decision that prices live in one place and flow outward.

## Practical diagnostic questions

- For stock, prices and customer contacts, can staff name the authoritative system without hesitation?
- Can the same field be edited in more than one system?
- When systems disagree, who decides which is right, and is that written down?
- Do integrations have a defined direction, or do they sync both ways?
- How often do customers receive information that turns out to be out of date?

## Bottom line

When nobody knows which system holds the correct data, every disagreement becomes an investigation and every report becomes negotiable. Declaring authority and ownership for each important data element turns data reliability from a personal skill into a property of the business.
