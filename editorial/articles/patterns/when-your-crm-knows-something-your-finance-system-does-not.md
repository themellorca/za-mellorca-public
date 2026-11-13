---
hub: patterns
record_id: PAT-032
slug: when-your-crm-knows-something-your-finance-system-does-not
title: When your CRM knows something your finance system does not
description: Conflicting customer and commercial data across CRM and finance systems can reveal an integration and ownership problem.
lead: When one business system has the latest customer or commercial truth but another still operates on older information, the problem is rarely solved by asking staff to reconcile harder.
category: Disconnected Systems & Integration Friction
published_date: 2026-09-04
updated_date: 2026-09-04
eyebrow: Pattern
tags:
  - Speed
  - Errors
  - Scale
cta_label: Systems Integration
cta_href: /services/systems-implementation-integration/
side_title: Commercial value
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Customer, quote or order information is current in the CRM but absent, delayed or different in finance and operations systems.
primary_identification: cross-system data ownership and integration problem
commercial_value_dimensions: Labour, Errors, Speed, Customer experience, Scalability
sources:
  - Dual-write overview - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-overview
  - Prospect-to-cash in dual-write - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-prospect-to-cash
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
related:
  - When APIs exist but the business still works manually | /patterns/when-apis-exist-but-the-business-still-works-manually/
  - Why information has to be copied from one system to another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - Why one number requires three people and four systems | /patterns/why-one-number-requires-three-people-and-four-systems/
summary: When CRM and finance hold different versions of the same customer or commercial event, the business may need clearer data ownership and a controlled integration model rather than more reconciliation work.
---
## Observable condition

Sales updates a customer, quote or order in the CRM, but finance cannot see the same change. Teams export files, re-key records, send screenshots or ask one another which version is correct. A new billing address reaches the CRM but not the invoice. A discount agreed in a quote is missing from the order finance processes. A customer placed on hold for credit reasons still appears active to sales.

## Realisation

The business does not merely have two applications. It has two operating views of the same commercial event. If the handoff between them is informal, disagreement is inevitable as volume and change increase.

The realisation is that the friction between sales and finance is often not a people problem. Each team is acting correctly on the information in front of it. They simply have different information, and nothing in the operating design guarantees they will ever converge.

## Identification

This is a **cross-system data ownership and integration problem**. The question is not which system is better, but which system owns each business fact and how valid changes propagate.

The [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) frames this as consistency: the degree to which values do not contradict other values representing the same entity, including across different systems. When the CRM and the finance system hold different values for the same customer or order, the data fails that test, however accurate each system is internally.

## Diagnosis

The visible symptom is disagreement. The common assumption is that someone forgot to update a record. The structural cause usually involves several of these:

- **Duplicate master data.** Customers and products are maintained separately in each system.
- **Asynchronous manual exports.** Data moves on a schedule, or when someone remembers, rather than when it changes.
- **Unclear field ownership.** Both systems allow the same field to be edited, so neither can be trusted as the source.
- **Missing integration mappings.** Concepts that look alike, such as a CRM account and a finance customer, are not formally mapped, so values are translated by hand.
- **Separate lifecycles.** Quotation, order and billing are treated as separate worlds rather than stages of one commercial event.

Microsoft’s [dual-write overview](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-overview) is a useful illustration of what an explicit design looks like. It describes tightly coupled, near-real-time, bidirectional integration between customer engagement apps and finance and operations apps, and a mapping between concepts in each. It also lists activity and error logs, alerts and thresholds as infrastructure features, which recognises that integrations fail and that failures must be seen.

The detail in Microsoft’s [prospect-to-cash documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-prospect-to-cash) shows how many decisions sit inside apparently simple synchronisation. Quotes and orders can originate in either app and are synced, while invoices are created in Supply Chain Management and synced to Sales. Price, discount, charge and tax columns are maintained on the finance and operations side. Number sequences in the two apps must be kept distinct so that order numbers are not duplicated. Discount calculation differs between the apps, so rounding has to be handled deliberately. The broader lesson is not about any one product: shared business concepts need explicit ownership, mappings and lifecycle rules.

## Commercial impact

The commercial value at stake is **labour, errors, speed, cash flow, customer experience and scalability**.

Conflicting records generate reconciliation work and delay downstream actions such as fulfilment and invoicing. When invoices are late or wrong, cash arrives later and disputes increase; [Why sending an invoice requires so much work](/patterns/why-sending-an-invoice-requires-so-much-work/) explores that consequence. Customers may receive inconsistent information from sales and accounts. As volume grows, the reconciliation effort grows with it; the [labour cost of manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/) sets out how that accumulates.

## Common misidentification

Teams often blame incomplete updates or weak user adoption. Those can matter, but if users must update the same business fact in more than one place, the operating architecture itself is creating opportunities for divergence. Another misidentification is to treat integration as a one-off project: a connector is installed, works for a while, and silently stops when a field or process changes.

## Possibility

A stronger design identifies the system of record for each entity and field, then synchronises only what downstream processes genuinely need. Integration becomes governed infrastructure rather than an occasional data movement exercise. Sales and finance can each trace the same commercial event from quote to cash, and when a sync fails, a named owner sees it before a customer does. [How to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) and [Why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/) develop these principles.

## Intervention

1. **Map the prospect-to-cash path.** Follow a real deal from lead to payment and record every system and handoff.
2. **Define ownership.** Decide which system owns customers, products, prices, quotes, orders, invoices and financial status, field by field where necessary.
3. **Document transformations.** Record how values are mapped between systems, including codes, statuses, number sequences and rounding.
4. **Decide timing.** Identify which changes must propagate immediately and which can wait.
5. **Implement monitored interfaces.** Build integrations with error queues, alerts and an owner, treating reconciliation as part of the design rather than an afterthought.
6. **Retire the workarounds.** Remove the exports, spreadsheets and re-keying the integration replaces, so that a parallel process does not persist.

Where the gap appears at the moment a deal is won, see [The cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/).

## Practical diagnostic

### Warning signs

- Sales and finance regularly ask each other which figure is correct.
- Won deals are re-keyed into the finance system as new orders.
- Customer details differ between quotes and invoices.
- Month-end includes a step to reconcile CRM revenue with finance revenue.
- Integration errors are discovered by customers or auditors rather than by alerts.
- Nobody can say who to call when the sync stops.

### Diagnostic questions

- Which system owns customer master data?
- Which changes must propagate immediately?
- Where are records re-keyed today?
- How are integration failures surfaced, and to whom?
- Can sales and finance trace the same commercial event end to end?

## Bottom line

If the CRM and finance regularly disagree, staff may be compensating for a missing ownership and integration model. Fixing that model can remove recurring reconciliation from the operating process and let both teams act on the same version of the truth.
