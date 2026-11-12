---
hub: patterns
record_id: PAT-050
slug: the-signs-your-business-needs-an-integration-layer
title: The Signs That Show Your Business Needs an Integration Layer
description: When every change to one system breaks a link somewhere else, the business has outgrown point-to-point connections. Here are the signals that an integration layer is due, and how to introduce one gradually.
lead: When every change to one system breaks a link somewhere else, the business has outgrown point-to-point connections. Here are the signals that an integration layer is due, and how to introduce one gradually.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Systems are connected through many piecemeal automations, scripts and connectors, and changes to one system regularly break links elsewhere without anyone noticing promptly.
primary_identification: Point-to-point integration sprawl: there is no integration layer where connections are translated, monitored and changed in one place.
commercial_value_dimensions: Labour, error rates, speed of change, resilience, risk and scalability
sources:
  - Canonical Data Model - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/CanonicalDataModel.html
  - What Is iPaaS (Integration Platform as a Service)? - IBM | https://www.ibm.com/think/topics/ipaas
  - Basic Enterprise Integration on Azure - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/enterprise-integration/basic-enterprise-integration
related:
  - When One Change Has to Be Made in Every System You Own | /patterns/when-one-change-has-to-be-made-in-every-system-you-own/
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - How Disconnected Tools Quietly Limit Scale | /patterns/how-disconnected-tools-quietly-limit-scale/
summary: When every change to one system breaks a link somewhere else, the business has outgrown point-to-point connections. Here are the signals that an integration layer is due, and how to introduce one gradually.
layout: plain
---
## Observable condition

The business has already connected some of its systems, and that was a good decision at the time. The online shop sends orders to the accounting package. The CRM pushes new clients into the email platform. A small automation copies form submissions into a spreadsheet, and another copies the spreadsheet into the job management tool.

Each connection was built to solve one problem, usually by whoever needed it most, often with a different tool. Now something odd happens whenever anything changes. A field is renamed in the CRM and invoices start arriving without a VAT number. The accounting package is upgraded and two automations stop without anyone noticing for a week. Adding a new system means asking which of the existing links it needs to join, and nobody can answer confidently.

When someone draws the connections on a whiteboard, the picture looks less like a design and more like a tangle.

## Realisation

The instinct is to treat each failure on its own: fix the broken automation, update the mapping, add another rule. The realisation is that the failures are not separate. They are the natural behaviour of an arrangement in which every system talks directly to every other system it needs, each link has its own logic, and there is no common place where information is translated, checked or monitored.

The number of possible direct links rises quickly as systems are added. The Enterprise Integration Patterns reference makes this point with simple arithmetic: connecting six applications directly, each translating to the others' formats, can require thirty translators, while routing them through a shared, application-independent format needs twelve. The exact numbers matter less than the shape. Direct connections grow far faster than the number of systems.

**Realisation prompt:** if you replaced your accounting package next year, could anyone list every connection that would need to be rebuilt?

## Identification

This is a point-to-point integration problem. The visible symptom is fragile, unpredictable links between systems. The structural issue is the absence of an integration layer: a deliberate place where connections between systems are built, translated, monitored and changed.

It is a later stage of a different pattern. In [when APIs exist but the business still works manually](/patterns/when-apis-exist-but-the-business-still-works-manually/), the business has not yet used the connection capabilities its software already offers. Here, it has used them, piecemeal, and the result has become difficult to manage.

## Diagnosis

Several signals together suggest that the business has reached the point where an integration layer is worth considering.

- **Change in one system breaks others.** Renaming a field, upgrading a package or changing a product code causes failures elsewhere, because each link depends directly on the internal format of the systems it joins.
- **The same translation is built several times.** Customer names, tax codes and product codes are converted in several different automations, each slightly differently.
- **Failures are silent.** There is no single place to see whether data moved successfully, so problems are found by staff or customers.
- **Integration tools have multiplied.** Different teams have used different connector services, scripts and plug-ins, so knowledge of how data moves is spread across people and accounts. This is a recognised risk, described in [automation platforms that proliferate without architectural standards](/discovery/automation-platforms-proliferate-without-architectural-standards/).
- **New systems are expensive to add.** Each new application needs custom links to several existing ones.

IBM describes the limitation of traditional point-to-point integration as requiring custom work for each connection, which makes the result hard to scale and maintain and leaves services tightly coupled and inflexible. Microsoft's reference architecture for basic enterprise integration shows the alternative shape: an API gateway that gives clients a consistent interface to back-end systems, and a workflow layer that orchestrates calls between them through connectors, reducing the need for custom code. The point for a small or mid-sized business is not to copy that architecture, but to recognise its logic: separate the systems from the connections, and manage the connections in one place.

## An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A Cape Town professional services firm with about sixty staff has built eleven automations over four years across two connector services and a few scripts written by a former contractor. When the firm changes its practice management system, it discovers that seven of the automations depended on the old system's field names. Three were known; four were found only when time sheets stopped reaching billing. Rebuilding them takes longer than the system change itself, and for a month the finance team reconciles by hand.

## Commercial impact

The commercial value at stake is labour, error rates, speed of change, resilience and scalability. Fragile links create direct costs: staff time spent finding and fixing failures, manual reconciliation while links are down, and errors that reach customers or the books. The larger cost is that the business becomes slow to change. Replacing a system, adding a channel or launching a new service becomes a project mainly because of the connections it touches.

There is also a risk dimension. When nobody can see all the links, nobody can say with confidence where customer or financial data flows, which matters for both operational resilience and data protection obligations.

## Common misidentification

The pattern is often read as poor quality work by whoever built the automations. Sometimes that is part of it, but well-built point-to-point links still accumulate into the same tangle, because the problem is the arrangement rather than the individual connections.

A second misreading is that an integration layer means an expensive enterprise platform. For many businesses, it can be modest: one chosen integration service, a shared definition of core records, a single place for monitoring and a register of what connects to what. Scale the solution to the problem, as discussed in [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).

## Possibility

With an integration layer, each system connects to the layer rather than to every other system. Shared records such as customers, products and invoices are translated into one agreed format once, and each application only needs to be mapped to that format. When a system changes, its mapping changes in one place. When a new system is added, it is connected to the layer, not to every neighbour.

Monitoring becomes possible because data passes through a known point. Failures can raise alerts to a named person rather than surfacing through a complaint. The organisation gains a current picture of how information moves, which makes future decisions about software easier and less risky.

## Intervention

1. **Inventory every connection.** List each automation, script, plug-in and connector service, what it moves, which systems it touches, who built it and whose account it runs under.
2. **Identify the shared records.** Decide which system is authoritative for customers, products, prices, invoices and jobs. The guidance in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) is a useful starting point.
3. **Choose one integration approach.** Select a single integration service or platform appropriate to your size, and agree that new connections are built there.
4. **Define a common format for core records.** Map each system to it, instead of mapping systems to each other.
5. **Migrate gradually.** Move the most fragile and highest-volume links first. Retire duplicates as you go.
6. **Add monitoring and ownership.** Every flow should report success and failure to a named owner. See [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

## Diagnostic questions

- How many separate automations, scripts and connector services move data between your systems today?
- When did a change in one system last break something in another, and how was it found?
- Is the same conversion (tax codes, customer names, product codes) performed in more than one place?
- Where would you look to confirm that yesterday's orders reached accounting?
- How long would it take to replace one core system, counting only the connections?

The need for an integration layer seldom announces itself as a single decision. It appears as a series of small breakages that share a cause. Recognising that shared cause is what turns recurring repair work into a design choice.
