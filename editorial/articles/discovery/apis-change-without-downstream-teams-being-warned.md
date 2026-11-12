---
hub: discovery
record_id: DISC-277
slug: apis-change-without-downstream-teams-being-warned
title: APIs change without downstream teams being warned
description: Renamed fields and retired values break integrations when nobody tells the teams that depend on them. How to register API consumers, define breaking changes and give proper notice.
lead: Renamed fields and retired values break integrations when nobody tells the teams that depend on them. How to register API consumers, define breaking changes and give proper notice.
category: Integration & API Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: API owner (development team or vendor) with the consumer integration lead
budget_owner: CIO/IT budget holder
sources:
  - API Versions - GitHub Docs | https://docs.github.com/en/rest/about-the-rest-api/api-versions
  - Versioning - Stripe API Reference | https://docs.stripe.com/api/versioning
related:
  - Why API Rate Limits Create Intermittent Business Failures | /discovery/why-api-rate-limits-create-intermittent-business-failures/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
  - Why Undocumented Interface Mappings Make Integration Change Risky | /discovery/why-undocumented-interface-mappings-make-change-risky/
summary: Renamed fields and retired values break integrations when nobody tells the teams that depend on them. How to register API consumers, define breaking changes and give proper notice.
layout: plain
---
A developer improves an internal API: a field is renamed for clarity, a status value is retired, a new required parameter is added. The change is tested, released and works perfectly for the application it was built for. The next morning the warehouse integration stops creating picking slips, the finance report shows blanks, and an agency's website can no longer submit orders. Nobody in those teams was told, because nobody knew they were using the API.

## The problem in plain language

APIs connect a business's systems to each other and to partners. Every API has consumers: other applications, integrations, automations, reports and external parties that depend on it behaving the way it did yesterday. When the team or vendor that owns an API changes it without telling those consumers in time, the consumers find out by breaking.

This article is about the communication gap rather than the technical design. A separate Discovery article covers [how automations can be made more resilient to interface changes](/discovery/automations-break-when-application-interfaces-change/), and another covers [schema versioning](/discovery/message-schemas-evolve-without-version-control/). Both help. Neither works if the provider does not know who its consumers are, or has no habit of warning them.

## What the buyer is actually trying to solve

The buyer is usually an IT manager, integration lead or head of a development team, sometimes an operations manager who keeps absorbing the outages. Searches sound like "API breaking change notification", "how to communicate API changes", "API deprecation policy", "who uses our API" or "API change management process".

What they need is simple to state: no change that could break a consumer goes live without the affected consumers knowing about it, in time to prepare.

## Evidence and system mechanism

Mature API providers treat change communication as part of the product. GitHub's REST API documentation lists what it considers breaking changes, including removing an operation, removing or renaming a parameter or response field, adding a new required parameter, making an optional parameter required, changing a field's type, removing enum values, adding a new validation rule and changing authentication requirements. It commits to supporting a previous API version for at least 24 months after a new one is released, uses Deprecation and Sunset response headers to signal closing and removal dates, and says that exceptional changes are communicated through release notes, changelogs and direct communication ([GitHub Docs: API versions](https://docs.github.com/en/rest/about-the-rest-api/api-versions)).

Stripe takes a similar approach. Its documentation describes monthly API releases with no breaking changes, and major releases twice a year that may contain breaking changes. Each account and webhook endpoint is pinned to an API version, so a consumer's integration keeps working until it chooses to upgrade, and all changes are published in a changelog ([Stripe Docs: Versioning](https://docs.stripe.com/api/versioning)).

The lesson for smaller organisations is not to copy these companies' engineering, but their discipline. Both define what counts as a breaking change, separate breaking from non-breaking releases, give consumers time and publish changes where consumers can see them. Internal APIs in most businesses have none of this. Many external SaaS vendors do it inconsistently, and their notices go to an email address nobody monitors.

## Problem owner and why now

Two owners share the problem. The API owner, an internal development team or a vendor, controls the change. The consumer owner, often an integration lead or the business owner of a dependent process, carries the consequence. Budget usually sits with the CIO or IT budget holder, though outage costs land in operations and finance.

The trigger is API growth. As businesses connect more SaaS platforms, build internal services and expose APIs to partners, the number of consumers grows faster than anyone's knowledge of them. The problem tends to surface after a release causes an outage in a team nobody consulted, after a vendor retires an API version, or when a partner complains that orders have stopped flowing.

## Economic consequence

- **Outages in dependent processes:** orders, invoices or stock updates stop or go wrong until someone traces the cause.
- **Silent data damage:** some changes do not cause failures but cause wrong or missing values, found later at reconciliation.
- **Emergency work:** consumer teams drop planned work to repair integrations under pressure.
- **Partner friction:** external partners lose confidence when integrations break without notice.
- **Change paralysis:** after a few incidents, API owners become reluctant to improve anything, and technical debt accumulates.

Use your own incident records to identify outages caused by upstream changes, and the time taken to detect and fix them.

## Root cause

- **No consumer register:** the API owner does not know who calls the API, for what, or who to contact. See [when nobody knows which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/).
- **No definition of breaking change:** developers judge compatibility case by case, often from their own application's point of view.
- **No deprecation policy:** there is no standard notice period or overlap during which old and new behaviour both work.
- **Notices go nowhere:** vendor change emails reach a former employee or a general mailbox, and internal changes are announced only in a team chat.
- **No named owner on the consumer side,** so even a well-sent notice has nobody to act on it. See [why critical integrations need a named operational owner](/discovery/why-critical-integrations-need-a-named-operational-owner/).

## Practical intervention

1. **Build a consumer register.** For each important API, internal or vendor, list who consumes it, what they use, and a named contact. Use API keys or gateway logs to find consumers you did not know about.
2. **Adopt a breaking-change definition.** A short list, modelled on published examples such as GitHub's, removes guesswork.
3. **Set a deprecation policy.** Define a minimum notice period and an overlap window for breaking changes, scaled to how many consumers depend on the API and how critical they are.
4. **Publish a changelog and notify directly.** Keep one place where all changes are recorded and send targeted notices to registered consumers for anything breaking.
5. **Route vendor notices to owners.** Make sure developer and status notifications from SaaS vendors reach a monitored team address and are assigned to the owner of each affected integration.
6. **Add consumer impact to change approval.** Before release, the API owner confirms which consumers are affected and that they have been told.

### An illustrative example

*Illustrative:* a Bloemfontein agricultural-supplies group runs an internal pricing API used by its web shop, its branch point-of-sale and a reseller portal. A developer changes the discount field from a percentage to a rand amount, which suits the web shop. Resellers are suddenly quoted wrong prices. Afterwards the group keeps a register of the three consumers, adopts a one-page breaking-change list, and requires a notice period and a versioned endpoint for any change on that list.

## Diagnostic questions

- For your most important internal API, could you name every system and team that uses it?
- Do your developers share a written definition of a breaking change?
- Is there a standard notice period before breaking changes go live?
- Where do vendor API change notices arrive, and who reads them?
- Have you had an outage in the last year caused by a change nobody announced?

## What good looks like

Every important API has an owner, a consumer register and a changelog. Breaking changes are defined, announced to named consumers with enough notice, and released alongside the old behaviour for an agreed period. Vendor notices reach the people who can act on them. Consumer teams plan upgrades instead of discovering them, and API owners can improve their services without fear.

## Where Mellorca fits

Mellorca helps businesses map API consumers, set practical change and deprecation policies, and connect vendor notices to integration owners. That work sits within [systems implementation and integration](/services/systems-implementation-integration/) and, for ongoing change monitoring, [managed digital operations](/services/managed-digital-operations/).

## Method note

GitHub and Stripe are used as published examples of change discipline, not as benchmarks a small business must match. Notice periods and overlap windows should be set by consumer criticality. The example is illustrative and no statistics are quoted.
