---
hub: discovery
record_id: DISC-290
slug: why-legacy-integrations-stop-businesses-from-upgrading-their-applications
title: Legacy integrations block application upgrades
description: The application is ready for a new release, but the connections around it are not. How to map, isolate and migrate legacy integrations so upgrades stop being a risk to everything else.
lead: The application is ready for a new release, but the connections around it are not. How to map, isolate and migrate legacy integrations so upgrades stop being a risk to everything else.
category: Integration & API Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: IT or integration manager responsible for the application estate
budget_owner: Chief information officer, operations director or managing director
sources:
  - https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online | https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig | https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig
summary: The application is ready for a new release, but the connections around it are not. How to map, isolate and migrate legacy integrations so upgrades stop being a risk to everything else.
layout: plain
---
The vendor announces a new release of the finance application. It brings a better approval workflow, a cleaner interface and an interface for connecting AI assistants. The IT manager reads the notes, then opens the integration list and stops. Eleven connections tie the application to payroll, the warehouse system, the bank file and a reporting database. Four were built by a contractor who left in 2019. One runs from a script on a server nobody wants to restart. Nobody can say what breaks if the application changes. The upgrade is postponed, again.

## The problem in plain language

An application can only be upgraded as fast as its slowest connection. When integrations are hard-wired to the way an old version behaves, such as a particular file layout, a database table, an old sign-in method or an interface that the vendor has since replaced, any upgrade is a risk to everything connected. The application itself may be perfectly capable of moving forward. The things around it are what hold it in place.

## What the buyer is actually trying to solve

An IT manager or operations director looking into this is trying to regain the ability to upgrade without a company-wide panic. They want to know what depends on what, which connections are safe to move first, and how to stop the situation getting worse. They are often under pressure from two directions: the vendor is retiring old versions, and the business wants new capabilities that only the current release provides.

## Evidence and system mechanism

### Vendors do retire the old way of connecting

Microsoft's notice on the [deprecation of basic authentication in Exchange Online](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online) is a well-documented example of this pattern. A sign-in method that many scripts, devices and applications had relied on for years was switched off for a class of connections, and anything still using it had to be changed. The lesson is general. An integration that works today may depend on a behaviour that its supplier has already announced it will remove, and the date is set by the supplier, not by you.

### Wrapping the old behaviour protects the new system

Microsoft's architecture guidance on the [anti-corruption layer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) describes placing a translation layer between a modern system and a legacy one, so that the new design does not inherit the legacy model's quirks. In business terms, the old integration keeps talking to a stable adapter, and the application behind the adapter is free to change. The adapter takes on the awkward details so that the rest of the estate does not have to.

### Replacement can be gradual

The [strangler fig pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig) describes replacing a legacy system incrementally, routing individual functions to a new component until the old one can be retired. Applied to integrations, it means that you do not need a single cut-over weekend. You move one connection at a time, check it, and leave the others where they are.

### Warning signs

- Upgrade plans stall at the question "what else uses this?".
- Integrations rely on file drops, shared accounts or direct reads of another application's database.
- The documentation is the memory of one contractor or one long-serving employee.
- The vendor has announced end of support for the version you run.

## Why this becomes urgent

An AI agent rollout changes the arithmetic. Agents need current interfaces with proper permissions, clear data definitions and reliable responses. A legacy integration that relies on a shared login and a nightly file is a poor foundation for software that will act on its own. The wish to adopt agents tends to bring the integration debt into the open at the same moment as the vendor's own timelines. The wider risk is discussed in [why AI agents raise the stakes for business integration](/insights/why-ai-agents-raise-the-stakes-for-business-integration/).

## Economic consequence

The cost of an upgrade deferred is rarely visible in a single line. The business pays for extended support on outdated versions, for security exposure on software that no longer receives fixes, and for features it licenses but cannot use. It pays when a forced change, such as a retired sign-in method, arrives on someone else's timetable and has to be fixed in a hurry. And it pays in opportunity: projects that depend on the new release wait behind a queue of connections nobody wants to touch. The accumulated effect is described in [postponing legacy replacement out of fear of disruption](/impact/postponing-legacy-system-replacement-disruption-fear-delay-cost/).

## Root cause

- **Connections built point to point.** Each integration was written against the application's internals, so the application cannot change without breaking it.
- **No inventory.** Nobody has a list of what connects to what, and who relies on it. Compare [integrations that quietly run on file names and folders](/discovery/when-file-names-and-folders-quietly-run-integrations/).
- **No owner.** The integration belongs to a person who has moved on, in the same way as in [legacy applications that stay live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/).
- **No tests.** There is no quick way to prove that an integration still works after a change, so every change feels dangerous.

## Practical intervention

1. **Build the dependency map.** For each application, list every inbound and outbound connection, the method, the data, the schedule, the credentials and the person who would notice if it failed.
2. **Classify each connection.** Mark it as business-critical, useful or unused. Switch off and archive the unused ones only after a monitored quiet period.
3. **Put an adapter in front of the worst offenders.** A stable, documented interface that legacy consumers call, with a translation behind it, lets the application upgrade independently.
4. **Add a smoke test per integration.** One automatic check that a known record travels from source to destination, run after every change.
5. **Migrate in order.** Start with low-risk, well-understood connections to build confidence, then tackle the critical ones, retiring each old path as its replacement proves stable.

### Trade-offs

An adapter is itself a thing to own and maintain, and a poorly designed one becomes tomorrow's legacy. The map takes real effort, and the first version will be incomplete. A phased migration lengthens the period in which two ways of doing the same job coexist. These costs are usually smaller than the cost of a forced, simultaneous change, but they are real, and should be budgeted. The principles in [designing integrations that survive supplier and business change](/insights/how-to-design-integrations-that-survive-supplier-and-business-change/) help keep the new design from repeating the problem.

## Diagnostic questions

- Can you list every integration that touches your three most important applications?
- Which integrations depend on a shared account, a file drop or a direct database read?
- What is the oldest application version you run, and when does the vendor end support?
- If the application changed tomorrow, how would you know what broke?

## What good looks like

Every integration has an owner, a record and a test. Connections go through stable, documented interfaces rather than internals. A vendor announcement leads to a planned change rather than a scramble, and an upgrade is a routine project rather than a company-wide event. The business can adopt new capabilities, including agents, when it chooses to.

## Practical next actions

1. List all integrations for your most upgrade-sensitive application and record method, owner and failure impact for each.
2. Check the vendor's published support dates and deprecation notices for every version you run.
3. Identify the three riskiest connections and decide whether each needs an adapter, a rebuild or retirement.
4. Write a simple test that proves a sample record travels through each critical integration, and run it after every change.
5. Agree a named owner and a review date for every integration on the list.

## Where Mellorca fits

Mellorca helps businesses map their integration estate, rank connections by risk and design the adapters, tests and migration order that free an application to upgrade. The work is sequenced so that the business keeps running while the connections are modernised.

## Method note

The sources describe a documented vendor deprecation and two architectural patterns for isolating and replacing legacy components. They do not measure how many businesses are blocked by integrations. The opening scenario is illustrative.
