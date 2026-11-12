---
hub: discovery
record_id: DISC-294
slug: apis-exist-but-internal-teams-cannot-find-them
title: Why internal teams cannot find the APIs your business already has
description: When nobody can find the APIs a business already owns, teams rebuild them, scrape screens or fall back to spreadsheets. How an API inventory with owners and descriptions fixes it.
lead: When nobody can find the APIs a business already owns, teams rebuild them, scrape screens or fall back to spreadsheets. How an API inventory with owners and descriptions fixes it.
category: Integration & API Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: IT manager or head of integration, with application owners who publish the APIs
budget_owner: Chief information officer or chief operating officer
sources:
  - Backstage Software Catalog - Backstage Software Catalog and Developer Platform | https://backstage.io/docs/features/software-catalog/
  - OpenAPI Specification v3.1.0 | https://spec.openapis.org/oas/v3.1.0
related:
  - APIs change without downstream teams being warned | /discovery/apis-change-without-downstream-teams-being-warned/
  - Why retry logic creates duplicate transactions at the receiving end | /discovery/retry-logic-creates-duplicate-transactions-at-the-receiving-end/
  - Why teams cannot trace one business transaction across several systems | /discovery/teams-cannot-trace-a-business-transaction-across-systems/
summary: When nobody can find the APIs a business already owns, teams rebuild them, scrape screens or fall back to spreadsheets. How an API inventory with owners and descriptions fixes it.
layout: plain
---
A developer is asked to connect the new customer portal to the billing system. They spend two weeks building a small service that reads invoices from the billing database. A month later someone mentions that the billing vendor has offered a supported invoice API for years, and that another team already uses it for the collections tool. Nobody knew to look, and there was nowhere to look.

Businesses often have more integration capability than they realise. The APIs exist, in vendor platforms, in systems built by contractors and in services a previous team created. They are simply invisible to the people who need them.

## The problem in plain language

An API is only useful if the people building processes know it exists, what it does, who owns it and whether they are allowed to use it. When that information is missing, teams do one of four things:

- build a new integration that duplicates one that already exists;
- read directly from another system's database, bypassing its rules;
- automate the screen with a bot because they could not find an interface;
- give up and move data by hand or spreadsheet.

Each choice is reasonable for the person making it. Together they create duplicated cost, fragile connections and the familiar situation described in [when APIs exist but the business still works manually](/patterns/when-apis-exist-but-the-business-still-works-manually/).

## What the buyer is actually trying to solve

People search for how to list all the APIs in an organisation, how to document internal APIs, or what an API catalogue is. Managers notice the symptom differently: two teams paying for overlapping integrations, a project estimate that includes building something that sounds familiar, or a new developer who needs weeks to learn what connects to what. The underlying need is a single place where anyone building a process can find the available interfaces, understand them and know whom to ask.

## Evidence and system mechanism

### Inventory is a recognised discipline with its own tooling

Microsoft describes [Azure API Center](https://learn.microsoft.com/en-us/azure/api-center/overview) as a way to track all of an organisation's APIs in one place for discovery, reuse and governance, regardless of their type, lifecycle stage or where they are deployed, together with versions, definition files and common metadata. It explicitly includes unmanaged APIs and APIs still under development, and mentions detecting "shadow APIs" that apps use without being registered. That a major vendor builds a product for this shows how common the gap is.

### Ownership has to travel with the API

The open-source [Backstage software catalog](https://backstage.io/docs/features/software-catalog/) takes a similar approach for all software. It keeps track of ownership and metadata, with descriptor files stored alongside the code in source control, so the catalogue updates when the code does. The design choice matters: an inventory kept in a separate spreadsheet goes stale, while one that teams maintain as part of normal work tends to stay current.

### A machine-readable description makes an API understandable

The [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0) defines a standard description of HTTP APIs so that both people and computers can discover and understand a service's capabilities without access to its source code or additional documentation. Many business platforms already publish OpenAPI descriptions. Where internal APIs have one, they can be loaded into a catalogue, searched and checked; where they do not, the API is effectively undocumented to anyone outside the team that built it.

## Problem owner and why-now trigger

The IT manager or head of integration usually owns the problem, with application owners responsible for describing their own APIs. Budget typically sits with the chief information officer or chief operating officer, because the cost shows up as duplicated project spend across departments.

Mergers and acquisitions are a sharp trigger. When two businesses combine, each brings its own systems, contractors and integrations. Without an inventory, the combined team cannot see which interfaces can be reused and which overlap, so integration work is duplicated during exactly the period when budgets are tight. Other triggers include adopting AI tools or automation platforms that need reliable interfaces, staff turnover in the IT team, and audits asking which systems expose data externally.

## Economic consequence

- **Duplicated build cost.** Integrations are built more than once, and each copy has to be maintained.
- **Fragile workarounds.** Direct database reads and screen bots break when systems are upgraded, and bypass validation rules.
- **Slower projects.** Each new project starts with discovery that should already have been done.
- **Security exposure.** APIs nobody knows about are not reviewed, monitored or retired, and may still hold old credentials, a related risk covered in [API credentials shared across unrelated integrations](/discovery/api-credentials-shared-across-unrelated-integrations/).
- **Missed value from existing licences.** The business pays for platform API access it never uses.

## Root cause

- **No inventory.** There is no single list of APIs, internal or vendor-provided.
- **No owner field.** Even where APIs are known, nobody records who maintains them or approves their use.
- **Documentation held privately.** Descriptions live in a developer's notes, a contractor's handover document or a vendor portal only one person can log into.
- **Project-by-project delivery.** Each project delivers its own integration and closes without publishing what it built.
- **Vendor APIs treated as technical detail.** Procurement records licences but not the interfaces they include.

## Practical intervention

1. **Start a simple inventory.** For each API, record name, system, purpose, owner, consumers, authentication method, environment links, status and where its description lives. A shared register is fine to begin with.
2. **Include vendor APIs.** List the APIs your SaaS and ERP subscriptions already provide, with links to their documentation and any usage limits.
3. **Require a description.** New internal APIs are not considered done until they have an OpenAPI or equivalent description and an inventory entry.
4. **Make discovery the first step of every project.** Integration requests start with a search of the inventory, and the result is recorded.
5. **Move the inventory closer to the work.** As it grows, use a catalogue tool or keep descriptor files with the code, so updates happen as part of normal delivery.
6. **Retire what nobody uses.** Unowned or unused APIs are reviewed, closed down or given an owner.

### Trade-offs

A catalogue platform is not needed on day one. For a business with a few dozen interfaces, a well-kept register with owners and links delivers most of the value; tooling helps once the list grows or changes often.

### An illustrative example

Illustrative: a Cape Town financial services firm with about 150 staff merged with a smaller advisory practice. Both had customer portals and CRMs, and contractors had built several integrations over the years. Before planning the combined integration work, the firm spent three weeks building an inventory. It found eleven APIs, two of which did nearly the same job and three of which no current employee owned. The consolidation plan reused four existing APIs and retired three, rather than building new connections for everything.

## Diagnostic questions

- Could a new developer find, in one place, the APIs your core systems expose?
- For each API, do you know who owns it and who uses it?
- Do your SaaS subscriptions include APIs that nobody uses?
- Has any recent project built an integration that duplicated an existing one?
- Are there APIs still running that were built by contractors who have left?

## What good looks like

There is one searchable inventory of internal and vendor APIs, each with a named owner, a description, known consumers and a lifecycle status. New projects start by checking it. Descriptions are kept current as part of delivery. Unowned APIs are found and resolved. The questions to ask vendors about their APIs before purchase are covered in [what to ask about APIs before buying business software](/insights/what-to-ask-about-apis-before-buying-business-software/).

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can build the initial API inventory, document key interfaces and set up the habits that keep it current. A [Digital Systems Audit](/services/digital-systems-audit/) is a useful starting point when systems and integrations have accumulated over years or through a merger.

## Method note

Product capabilities are described from current vendor and project documentation. Naming these tools is not an endorsement; the same approach can be implemented with other tools or a simple register. The example is illustrative rather than a client case.
