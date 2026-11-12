---
hub: patterns
record_id: PAT-028
slug: why-information-has-to-be-copied-from-one-system-to-another
title: Why Information Has to Be Copied From One System to Another
description: Re-keying between systems usually persists because nobody has defined how the two systems describe the same thing. The person copying is quietly doing the translation.
lead: Re-keying between systems usually persists because nobody has defined how the two systems describe the same thing. The person copying is quietly doing the translation.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Information that already exists in one system is read and re-captured by a person into another system, often daily, with the copying built into job roles.
primary_identification: Data-model and data-mapping problem: identifiers, structures and meanings differ between systems and the translation rules exist only in a person's head.
commercial_value_dimensions: capacity, speed, cash flow, risk, scalability
sources:
  - Data mapping - Wikipedia | https://en.wikipedia.org/wiki/Data_mapping
  - Extract, transform, load (ETL) - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
related:
  - When Your CRM Knows Something Your Finance System Does Not | /patterns/when-your-crm-knows-something-your-finance-system-does-not/
  - When Nobody Knows Which System Holds the Correct Data | /patterns/when-nobody-knows-which-system-holds-the-correct-data/
  - Why Salespeople Spend Time Updating Systems Instead of Selling | /patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/
summary: Re-keying between systems usually persists because nobody has defined how the two systems describe the same thing. The person copying is quietly doing the translation.
layout: plain
---
## Observable condition

An order is accepted in the sales system and then typed into the accounting package. A job is booked in the scheduling tool and then copied into the stock system so the parts can be reserved. A new supplier is captured in the procurement spreadsheet and then again in the payment platform. In each case the information already exists. Someone still has to read it in one place and write it in another.

When people are asked why, the answers are practical. The two systems do not connect. The integration was quoted but never approved. The fields do not line up. The codes are different. "It is quicker if Sipho just does it." The copying has become part of the process, and in many cases it is written into job descriptions.

An illustrative example: a regional distributor of agricultural inputs takes orders through a sales app used by field representatives. Each evening an administrator re-captures those orders into the ERP. The app records products by a short description and pack size; the ERP uses stock codes. The app has one delivery address field; the ERP needs a farm name, a delivery point and a route code. The administrator is not simply copying. She is translating every order, using knowledge that exists nowhere else.

## Realisation

Re-keying is usually discussed as a typing problem: slow, boring and error-prone. That is true but incomplete. The more important realisation is that the person doing the copying is often performing *translation*. They know that "5L Roundup" in one system is a specific stock code in the other, that a customer called "Van Wyk Boerdery" in the app is account VW014 in the ERP, and that a status of "confirmed" in one tool means "released" in the next.

That translation is real business logic. It is just being held in someone's head rather than designed. This explains why so many integration efforts stall: the connection is technically possible, but nobody has defined how the two systems' versions of the same thing correspond. The Pattern [When APIs Exist but the Business Still Works Manually](/patterns/when-apis-exist-but-the-business-still-works-manually/) describes what that stall looks like from the outside.

> Realisation prompt: if you asked the person who re-captures this information to write down every rule they apply while doing it, how long would the list be?

## Identification

This is a data-model and data-mapping problem presenting as a manual-entry problem. The visible symptom is copying. The common assumption is that the systems simply lack a connector. The structural cause is usually that the business has never defined which system owns each piece of information and how the same item is represented in each system.

Data mapping is the formal name for this work. As the encyclopaedic definition puts it, data mapping defines correspondences and transformation rules between data in a source model and data in a target model, including conversion, concatenation and restructuring. Where those rules do not exist in software, a person performs them by hand.

## Diagnosis

When copying persists, one or more of these mechanisms is usually present.

- **Different identifiers.** Each system has its own customer number, product code or job reference, and there is no cross-reference table. Matching is done by recognition.
- **Different structures.** One system holds a single address field and another needs five. One records quantity in units and the other in cases. Someone has to split, combine or convert.
- **Different meanings.** Status values, categories and tax treatments do not line up one to one. A person decides which value applies.
- **No agreed owner.** Neither system is the recognised source for the record, so both are edited and the copying also becomes reconciliation. The Insight on [deciding what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) covers this choice.
- **Systems bought separately.** Each application was chosen by a different team for a local need. Nobody looked at how its data model would sit next to the others.

Microsoft's architecture guidance on extract, transform and load describes the same challenge at enterprise scale: organisations gather data from sources in different formats, and the data often has to be shaped, cleaned or transformed before it is loaded, with transformation steps such as filtering, joining, deduplicating and validating. A small business faces the same problem with smaller volumes. It simply tends to solve it with a person instead of a pipeline.

## Commercial impact

The commercial value at stake covers capacity, speed, cash flow, risk and scalability.

Capacity is consumed directly by the copying. Speed suffers because the second system is only as current as the last time someone re-captured into it; in the distributor example, stock reservations and invoices lag a day behind orders. Cash flow follows when invoicing depends on the re-capture being done. Risk comes from errors in translation, such as a wrong stock code, a wrong account or a wrong VAT treatment, which surface later as credit notes, disputes or reconciliation work. Scalability is limited because translation volume grows with every order, so growth adds administrators.

There is also a quieter risk. Because the mapping rules live in one person's memory, their absence does not just slow the work down; it can make the work impossible to do correctly. The wider cost of disconnected applications is set out in [The Hidden Cost of Apps That Do Not Share Data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/).

## Common misidentification

The usual responses are to buy a connector, ask a developer to "link the systems", or replace both systems with one suite. Each can be right. Each can also fail if the mapping has not been defined. A connector that moves a free-text product description into a field that expects a stock code will either fail or create bad records faster than a person would.

The opposite mistake is to accept copying as permanent because "the systems are not compatible". Very few business systems are truly incompatible. Most are simply unmapped.

## Possibility

In a better state, each important record has a named owning system. Identifiers are cross-referenced in a maintained table, or one system's identifiers are adopted by the other. Structural differences are handled by documented transformation rules. Values that do not map cleanly are resolved by changing one system's configuration, or routed to a person as a flagged exception rather than handled silently.

Master data management is the discipline behind this at larger scale. IBM describes it as consolidating critical data, such as customer, product and location records, so that departments are not keeping separate and conflicting versions of the same entity. Smaller businesses rarely need a dedicated platform, but they do need the same decisions.

## Intervention

1. **Pick one copying flow.** Choose the highest-volume or highest-risk re-capture, such as orders into accounting.
2. **Write down the translation.** Sit with the person who does the work and record every field, every lookup and every judgement they make. This document is the mapping specification. The Insight on [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/) provides a checklist.
3. **Decide ownership.** For each field, name the system that owns it. Stop editing it in the other.
4. **Remove ambiguity at source.** Where possible, make the upstream system capture data in the form the downstream system needs, for example by selecting a product from a coded list rather than typing a description.
5. **Then connect.** With the mapping defined, an integration, import routine or automation can carry it, and exceptions can go to a person with enough context to resolve them.
6. **Keep the mapping maintained.** When either system changes, the mapping must change too. Undocumented mappings make later change risky.

## Diagnostic questions

- Which information is typed into more than one system in your business each day?
- Does the person doing the copying apply rules or judgement, or is it a straight transfer?
- Do your systems share any common identifier for customers, products or jobs?
- For each copied record, which system is supposed to be correct when they disagree?
- Has a previous integration attempt stalled, and was the reason technical or definitional?

## Bottom line

Information is copied from one system to another mainly because nobody has defined how the two systems describe the same thing. The person doing the copying is quietly holding that definition. Writing it down, deciding which system owns each record and removing ambiguity at the source turns a permanent manual job into a solvable integration, and turns hidden personal knowledge into a business asset.
