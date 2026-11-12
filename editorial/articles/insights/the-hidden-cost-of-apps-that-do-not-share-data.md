---
hub: insights
record_id: INS-041
slug: the-hidden-cost-of-apps-that-do-not-share-data
title: The hidden cost of apps that do not share data
description: How disconnected applications create duplicate entry, reconciliation, delay and unreliable operational context.
lead: Disconnected software does not only create an integration problem. It creates repeated human work, inconsistent records and slower decisions.
category: Digital Infrastructure
published_date: 2026-09-06
updated_date: 2026-09-06
eyebrow: Article
page_title: The Hidden Cost of Apps That Do Not Share Data | Mellorca
tags:
  - Integration
  - Data Flow
  - Architecture
side_title: Topics
sources:
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Introduction to Integration Styles - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/IntegrationStylesIntro.html
closing_title: Explore Mellorca
closing_text: [Explore our solutions](/solutions/) or [start a conversation](/contact/).
related:
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
  - Why AI makes data quality more important, not less | /insights/why-ai-makes-data-quality-more-important-not-less/
---
Two useful applications can still produce a poor operating system if information has to be copied between them by people. The cost appears as duplicated capture, spreadsheet reconciliation, status checking and delayed handoffs. Because each application works well on its own, the problem is easy to miss: it sits in the gaps between them.

Most growing businesses accumulate software one decision at a time. A quoting tool, a CRM, an accounting package, a project tracker and a support desk may each be sensible choices. Whether they share data is often an afterthought, and the consequences arrive gradually.

## Integration cost is often labour cost in disguise

When systems disagree, somebody becomes the bridge. That role may not appear in the technology budget, but it consumes operating capacity and creates opportunities for error. The bridge takes several forms:

- **Re-keying.** A customer’s details are typed into the CRM, then again into the accounting system, then again into the project tool.
- **Reconciliation.** Someone exports from two systems each month and compares them in a spreadsheet because the totals do not match.
- **Status checking.** Staff open three applications, or ask three colleagues, to answer a single customer question.
- **Context loss.** Information captured at the start of a relationship, such as special terms or delivery constraints, does not travel with the work and has to be rediscovered later.

Google’s Site Reliability Engineering book offers a useful lens in its chapter on [eliminating toil](https://sre.google/sre-book/eliminating-toil/). It describes toil as work that is manual, repetitive, automatable, reactive and without enduring value, and notes that toil tends to scale linearly as volume grows. Human data bridging fits that description closely. Twice as many orders usually means twice as much copying, and the business pays for growth in administrative effort that adds nothing to the customer.

An illustrative example: a client changes their billing address. Sales updates the CRM. Nobody updates accounting, so the next invoice goes to the old address, payment is delayed, and a credit controller spends time chasing a debt that is really a data problem. No single step was careless. The systems simply had no agreed way to keep each other current.

## Errors compound with every copy

Each manual transfer is a chance for something to go wrong. The UK government’s [Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) lists errors in manual data entry, duplicated data and inconsistent formats among common causes of poor data quality, and describes consistency as values that do not contradict data held elsewhere. Disconnected applications produce exactly these failures: duplicate customer records, different spellings of the same company, and figures that disagree depending on which system is asked. The framework also recommends using root cause analysis to solve data quality issues at source rather than applying temporary fixes. Recurring reconciliation is usually a temporary fix that has become permanent.

## Define ownership before connecting systems

Integration works better when the business knows which platform owns each important record, what event should move information, and what happens when the transfer fails. Three questions are worth answering before any connector is built:

- **Which system is the source of truth for this record?** Customer details, prices, orders and invoices may each have a different owner. See [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).
- **What should trigger the transfer?** A deal marked as won, an order approved, a payment received. Clear triggers prevent half-finished records moving downstream.
- **What happens on failure?** If a transfer fails silently, the business is back to a human bridge, but now one that does not know it is needed. Every important integration needs [an owner](/insights/why-every-important-integration-needs-an-owner/) and a visible failure path.

## Not every connection must be real time

The right design depends on the business consequence of delay. Some data needs immediate propagation; other information can move safely in controlled batches. Architecture should follow the operating need rather than technical novelty.

The long-standing [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/patterns/messaging/IntegrationStylesIntro.html) catalogue describes four broad integration styles: file transfer, a shared database, remote procedure invocation and messaging. Each has trade-offs. File transfer is simple but can leave data stale between exchanges. A shared database reduces delay but couples applications tightly, making each harder to change independently. Messaging can inform other systems as soon as data is ready, at the cost of more moving parts to operate. For a business, the practical question is simpler: what goes wrong, and for whom, if this information arrives an hour or a day late?

## Warning signs

- Staff describe part of their job as “keeping the systems in step”.
- Month-end involves exporting and comparing data from several applications.
- Customers are asked for the same information more than once.
- Reports from different systems give different answers to the same question.
- Duplicate records appear regularly and are cleaned up periodically rather than prevented.
- Nobody can describe, end to end, how a customer’s details move between systems.

## A practical diagnostic

1. **Map the flows.** List the key records (customer, order, job, invoice) and trace which systems hold them and how they move between them, including the human steps.
2. **Estimate the bridge effort honestly.** Ask the people who do it how often, how long and how frequently corrections are needed. Use their observations rather than an invented productivity figure.
3. **Rank by consequence.** Prioritise flows where errors reach customers, cash or compliance, not just those that are tedious.
4. **Decide the treatment.** For each flow, choose whether to integrate, consolidate onto one system, simplify the process so the transfer is unnecessary, or keep it manual as a deliberate control.
5. **Design ownership and failure handling** before choosing a tool, and [document](/insights/what-to-document-before-connecting-two-business-platforms/) what each connection does.

## Trade-offs

Integration is not free. Every connection needs to be built, monitored and maintained, and it can break when a vendor changes an API or a field is repurposed. A web of point-to-point links can become harder to manage than the manual work it replaced. Sometimes consolidating onto fewer applications is a better answer than connecting more of them; see [why more software can make the business harder to run](/insights/why-more-software-can-make-the-business-harder-to-run/). And some manual steps are genuine controls, where a person checking information before it moves is the point.

## What better looks like

Information is captured once where practical, authoritative ownership is clear, transfers happen on defined triggers, failures are visible, and staff spend less time reconciling software with software. Growth adds customers and orders without adding the same proportion of administrative effort.

If your teams are acting as the integration layer, [Systems Implementation & Integration](/services/systems-implementation-integration/) can design and build the connections, and a [Digital Systems Audit](/services/digital-systems-audit/) can establish which flows are worth fixing first.
