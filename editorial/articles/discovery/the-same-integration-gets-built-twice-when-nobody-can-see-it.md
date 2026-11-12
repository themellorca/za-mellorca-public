---
hub: discovery
record_id: DISC-295
slug: the-same-integration-gets-built-twice-when-nobody-can-see-it
title: The same integration gets built twice when nobody can see it
description: Teams rebuild connections that already exist because no one can find them. A simple catalogue with named owners, checked at project start, stops the duplicates.
lead: Teams rebuild connections that already exist because no one can find them. A simple catalogue with named owners, checked at project start, stops the duplicates.
category: Integration & API Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Head of integration or enterprise architecture lead
budget_owner: CIO, with the CFO as co-sponsor
sources:
  - https://learn.microsoft.com/azure/api-center/overview | https://learn.microsoft.com/azure/api-center/overview
  - https://backstage.io/docs/features/software-catalog/descriptor-format | https://backstage.io/docs/features/software-catalog/descriptor-format
summary: Teams rebuild connections that already exist because no one can find them. A simple catalogue with named owners, checked at project start, stops the duplicates.
layout: plain
---
Picture a Cape Town retailer that has just started rolling out AI assistants. In March, the e-commerce team builds an assistant that answers store staff about stock, and a developer writes a connection to the ERP's stock and orders interface for it. In June, the call centre builds an order-status assistant. Nobody tells the call centre that a connection to the same ERP interface already exists, because nobody knows who to ask. A second developer writes a second connection, with its own credentials and its own idea of what "available stock" means.

By August the two assistants give different answers about the same product. One counts stock reserved for open orders as available and the other does not. A customer is told by a store assistant that an item is in stock, and by the call centre that it is not. When the ERP supplier changes a field name in the next release, both connections break, and the integration team learns that it was supporting two copies of the same thing.

The operating condition is simple: the business is paying for the same integration more than once because the first one cannot be seen. That matters to the head of IT and the CFO because the duplicate costs money to build, money to run, and trust when the copies disagree.

## The problem in plain language

An integration is a working connection between two systems: a piece of software that reads from one and writes to or reads from another, with credentials, rules about what data moves, and someone responsible for keeping it running. An API is the doorway one system offers so that others can make that connection.

In most mid-sized businesses these connections are built by different teams, at different times, for different projects. Some sit in an integration platform. Some are scripts on a server. Some were built by a supplier and handed over with a short document. Few are written down in one place that a new project can search.

When a team needs a connection to the ERP, it asks itself a quick question: is it faster to find out whether one exists, or to build it? If finding out means emailing around, asking three managers and waiting for replies, building wins. Building feels like progress. Asking feels like delay.

This is related to, but different from, [APIs that exist but internal teams cannot find](/discovery/apis-exist-but-internal-teams-cannot-find-them/). That topic is about a single hidden interface. This article is about what it produces: the same connection built twice, with two sets of credentials and two versions of the data rules, each of which has to be paid for and secured.

## What the buyer is actually trying to solve

The head of integration and the CIO put this in practical terms. Why did we pay for this connection a second time? Why do two systems give different answers to the same question? How many connections to the ERP do we have, and who looks after each? Which of them can we turn off?

The outcome they want is modest. Before anyone builds a connection, they can find out in minutes whether one already exists, who owns it, what data it covers and whether it can be reused. They do not need a perfect map of everything on day one. They need a list that is good enough to check, and a habit of checking it.

## Evidence and system mechanism

### A catalogue is a list with owners and metadata

Large platform vendors have built products around exactly this need. Microsoft's description of [Azure API Center](https://learn.microsoft.com/azure/api-center/overview) explains that an API center holds a structured inventory of an organisation's APIs regardless of their type, lifecycle stage or where they are deployed, together with details such as versions, definition files and common metadata. It lists discovery and reuse as a stated purpose, so that developers can find existing APIs through a portal and filter them by built-in and custom metadata.

The useful idea here is not the product. It is the shape of the record: what the interface is, what version, where it runs, and enough metadata to filter and search. A business can hold the same information in a shared register long before it buys any tooling.

### Ownership has to be part of the record

A catalogue entry that has no named owner goes out of date within months. The software catalog in Backstage, an open-source developer portal, shows the idea in its [descriptor format](https://backstage.io/docs/features/software-catalog/descriptor-format). Each catalogue entry is a small descriptor file kept in the repository that holds the code, and the example in the documentation includes an owner field naming a team. Because the descriptor sits with the code and the catalogue reads it automatically, the entry is updated by the people who change the integration.

Whatever tool is used, the principle carries over: the owner is written into the entry, and the entry lives close to the thing it describes.

| Gap | Effect |
| --- | --- |
| No searchable list of existing integrations | Teams cannot tell whether a connection already exists |
| Entries without a named owner | Nobody can be asked to explain or change the integration |
| Entries that do not say which data is covered | Teams cannot tell whether an existing connection fits their need |
| Checking the list is optional | Building remains the easier path |
| Duplicates never retired | Cost, credentials and failure points keep growing |

### What South African law expects of the connections

Every extra connection is another place where data can leak. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) sets out security safeguards in section 19. It requires a responsible party to secure the integrity and confidentiality of personal information in its possession through appropriate, reasonable technical and organisational measures. It also requires the party to identify reasonably foreseeable internal and external risks, put safeguards in place, check that they work regularly and update them when new risks appear.

A business cannot safeguard connections it cannot list. If two integrations carry customer records to two different places, each with its own credentials, each one is a separate risk to identify and a separate safeguard to maintain and check. A catalogue is the simplest evidence that the business knows what connections exist and who is accountable for each.

## Why this becomes urgent

An AI agent rollout is the trigger that turns a quiet inefficiency into a visible cost. Every new assistant or agent needs access to the same core systems: customer records, stock, orders, invoices. Each project team, working to its own deadline, builds its own connection. The number of copies grows with every agent.

In a business with three AI initiatives, there may be three connections to the same ERP, three sets of credentials stored in three places, and three descriptions of what a field means. Before agents, the same duplication happened slowly, one project at a time. With agents, it happens in weeks and across departments at once.

## Economic consequence

The cost of a duplicate has several parts, and they arrive at different times:

- **Build.** The second connection costs developer and testing time that the first one already consumed.
- **Run.** Both connections need monitoring, patching and support, for as long as both exist.
- **Inconsistency.** Each copy applies its own rules, so the same question gets different answers, and people spend time working out which one is right.
- **Security.** More credentials mean more secrets to store, rotate and protect, and more places where a leaked key opens a door into a core system.
- **Change.** When a source system changes, every connection to it has to be found and fixed, and a forgotten copy breaks quietly.

As an illustrative example only, suppose a connection takes a developer three weeks to build and test. A duplicate built by another team repeats that cost in full, then adds ongoing support for a second copy. Across several systems and several agent projects, the repeated effort becomes a noticeable share of the integration team's year, without ever appearing as a single line in a budget. Related costs of this kind often sit inside other budgets; [integration costs hidden inside application projects](/discovery/integration-costs-hidden-inside-application-projects/) describes how that happens.

## Root cause

The root cause is that there is no usable catalogue of existing integrations and APIs with owners, so teams cannot find what already exists and building is easier than asking. The knowledge exists, but it is held in people's heads, in project folders and in the memory of whoever built each connection.

Ownership makes this worse. Where [critical integrations have no named owner](/discovery/why-critical-integrations-need-a-named-operational-owner/), nobody can answer a project team's question, and the team is right to conclude that asking is a waste of time. The catalogue problem and the ownership problem feed each other: a list with no owners cannot be trusted, and owners with no list cannot be found.

## Practical intervention

### Practical next actions

1. **Start with the systems that agents and projects will connect to first.** List the core systems, such as the ERP, the CRM, the finance system and the service desk, and for each find the integrations that read from or write to them. A shared spreadsheet is enough to begin.
2. **Record the same few fields for every integration.** Capture its name, the systems it connects, the data it covers, its owner, how it authenticates, where its code and documentation live, and whether it is in use. Keep the list short enough that people will actually fill it in.
3. **Name an owner for each entry.** This is a team or role, not a person who may leave. If an integration has no owner, record that as a finding and assign one.
4. **Make checking the catalogue a required step.** Add it to the project start checklist and to the request form for any new agent or automation: before building a connection, the team confirms in writing that it searched the catalogue and either reused an entry or explains why not.
5. **Review requests with an integration lead.** One person or a small group reviews new connection requests, points teams to existing entries and approves exceptions.
6. **Keep the catalogue close to the code.** Where the integration team already uses code repositories, store each entry next to the integration it describes, so it is updated when the integration changes.
7. **Retire duplicates over time.** When you find two connections that do the same job, choose one, move the users across at a planned point, switch off the other, remove its credentials and update the catalogue.

## Diagnostic questions

- How many separate connections do we have into our ERP, and can someone list them within a day?
- When a new project needs data from a core system, how does the team find out what already exists?
- Does every integration have a named owner, and would that owner answer an email?
- Have we recently found two integrations doing the same job, and what did we do about it?
- How many sets of credentials do our integrations hold for each core system, and who stores them?
- Does the request form for a new AI agent or automation ask whether an existing connection could be reused?

## What good looks like

A project team that needs a connection to a core system searches the catalogue first. In a few minutes it finds the existing entry, sees what data it covers and who owns it, and either uses it or asks the owner to extend it. The request form records that the check was done.

You can measure the result. The number of integrations per core system stops rising unless there is a recorded reason. Every entry has an owner. Duplicate connections found in an audit are retired on a plan with dates. When a source system changes, the team knows which integrations to update before anything breaks.

## Where Mellorca fits

If you do not yet know what connections you have, a [digital systems audit](/services/digital-systems-audit/) can inventory them and show which ones overlap, who looks after each and where credentials are duplicated. Once the picture is clear, [systems implementation and integration](/services/systems-implementation-integration/) can consolidate duplicates into shared connections and move users across without disruption.

## Method note

This article draws on Microsoft's documentation for Azure API Center, the documentation for the Backstage software catalog descriptor format and the text of the Protection of Personal Information Act. The retailer scenario and the effort figures are illustrative and not measured. The article does not claim that any named product is needed to build a catalogue, nor that it behaves the same in your environment, so check the documentation for the tools you use. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser.
