---
hub: discovery
record_id: DISC-323
slug: platform-teams-build-environment-requests-by-hand
title: Why platform teams still build every environment request by hand
description: When every test or development environment is requested by ticket and built manually, platform teams drown in repetitive work and environments drift. How to move to governed self-service.
lead: When every test or development environment is requested by ticket and built manually, platform teams drown in repetitive work and environments drift. How to move to governed self-service.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: Platform, DevOps or infrastructure lead
budget_owner: CTO or head of IT
sources:
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - CNCF Platforms White Paper | https://tag-app-delivery.cncf.io/whitepapers/platforms/
  - What Is Service Catalog? - AWS Service Catalog | https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html
related:
  - Why development environments keep running after projects stop | /discovery/development-environments-keep-running-after-projects-stop/
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
  - Why manual changes keep bypassing your infrastructure-as-code | /discovery/manual-changes-bypass-infrastructure-as-code/
summary: When every test or development environment is requested by ticket and built manually, platform teams drown in repetitive work and environments drift. How to move to governed self-service.
layout: plain
---
A developer needs a test environment: an application server, a database, some storage and network access. They raise a ticket. Someone on the platform or infrastructure team picks it up when they can, builds the environment by hand from memory or an old checklist, and replies a few days later. The next request is almost identical, and so is the one after that. The team is permanently busy, the backlog never shrinks, and no two environments are built quite the same way.

Repetitive environment requests are one of the clearest signs that a small platform team is doing work a well-designed system could do for it.

## The problem in plain language

Environments are the sets of infrastructure that applications run on, for development, testing, training, demonstrations or production. In many businesses each one is requested by email or ticket and assembled manually. That works when requests are rare. As the business adds developers, projects or clients, the requests multiply, and the same experienced people spend most of their week repeating the same steps.

Common signs include:

- a queue of near-identical environment tickets;
- waiting times measured in days for something that takes an hour to build;
- environments that differ in small ways, so code that works in one fails in another;
- temporary environments that are never removed because nobody tracks them;
- platform engineers with no time for improvement work.

This is the infrastructure equivalent of the access-request problem described in [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/): a routine request, handled manually, every time.

## What the buyer is actually trying to solve

Searches include "self-service environments for developers", "automate environment provisioning", "reduce platform team ticket backlog" and "internal developer platform for a small team". The need is straightforward: let people get standard, approved environments quickly without waiting for a person, while keeping control over security, cost and consistency.

It is worth being clear about what the buyer is not asking for. Most smaller businesses do not need a large internal developer portal or a dedicated platform product team. They need the three or four environments people ask for most often to be available reliably and quickly, with sensible limits, and for the team's remaining time to go on the requests that genuinely need judgement.

## Evidence and system mechanism

### Repetitive manual work has a name and a limit

Google's site reliability engineering book chapter on [eliminating toil](https://sre.google/sre-book/eliminating-toil/) defines toil as work that is manual, repetitive, automatable, tactical, has no enduring value and scales linearly as a service grows. Manually building near-identical environments fits that description closely. Google's SRE organisation sets a goal of keeping toil below half of each engineer's time, because left unchecked it expands to fill all available time and crowds out the engineering that would reduce it.

### Platforms are meant to be self-service

The Cloud Native Computing Foundation's [platforms white paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) states that a platform should be self-serviceable, so users can request and receive capabilities autonomously and automatically, and that an essential goal is to reduce the cognitive load on product teams. It also recommends treating the platform as a product, designed around the needs of the people who use it.

### Cloud providers offer governed catalogues

Amazon Web Services describes [Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html) as a way to create and manage catalogues of approved IT services, from single servers and databases to complete multi-tier applications. Administrators set constraints, such as where products can be launched and which instance types are allowed, and grant access; users then browse and launch approved products themselves. Other cloud platforms and open-source tools offer comparable template-based approaches.

## Problem owner and why now

The problem owner is the platform, DevOps or infrastructure lead. The budget owner is typically the CTO or head of IT, who funds both the team's time and the delivery delays it causes.

The urgency trigger is often an availability incident traced to an inconsistent environment: a setting configured by hand in test but missed in production, or a forgotten firewall rule. Other triggers include rapid growth in the development team, a new client requiring isolated environments, or a platform engineer leaving with the knowledge of how things are built.

## Economic consequence

- **Delivery delay:** projects wait days for environments, multiplying across every team.
- **Expensive labour on routine work:** skilled engineers spend their time on repeatable tasks. See [the payroll cost of repeatable manual work](/impact/repeatable-manual-work-payroll-cost-automation/).
- **Incidents from inconsistency:** hand-built differences become production failures.
- **Cloud waste:** environments built by hand are rarely removed systematically.
- **No improvement capacity:** the team never has time to fix the underlying problem.

## Root cause

- **No standard definitions:** each environment is designed afresh rather than from a template.
- **Infrastructure not defined as code:** knowledge sits in people and checklists.
- **Control equated with manual approval:** the only governance is a person doing the work.
- **Tickets as the interface:** email and tickets are the only way to ask.
- **No lifecycle:** environments have no owner, expiry date or cost tag.

## Practical intervention

1. **Analyse the queue.** Group the last three months of environment requests by type. Most businesses find a handful of patterns cover most requests.
2. **Define standard environments as code.** Write each common pattern as a reusable template, including security settings, tags and network rules.
3. **Offer a self-service route.** Publish the templates through a catalogue, portal or pipeline so authorised users can launch them directly.
4. **Build governance into the template.** Enforce allowed sizes, regions, tags and budgets in the template instead of in manual review.
5. **Add expiry and ownership.** Every self-service environment has an owner and an end date, with automatic reminders or removal.
6. **Keep humans for exceptions.** Unusual requests still come to the team, who now have time to handle them well.
7. **Measure.** Track request-to-ready time and the share of requests fulfilled without a person.

### An illustrative example

*Illustrative:* a Stellenbosch software company with a three-person infrastructure team receives about twenty environment tickets a month, nearly all for one of three configurations. The team writes those three as code, publishes them through a simple self-service catalogue with size limits and a 30-day expiry, and routes only unusual requests to the queue. Waiting times fall from days to under an hour, and the team starts the backlog of improvement work it had postponed for a year.

## Diagnostic questions

- How many environment requests did your team handle last quarter, and how many were similar?
- How long does a developer wait for a standard environment?
- Are your environments defined as code?
- Do test and production environments differ in ways nobody intended?
- Does every environment have an owner and an end date?
- What share of your platform team's week is repetitive work?

## What good looks like

Standard environments are available on demand through a governed self-service route. Templates enforce security, tagging and cost controls. Environments are consistent, owned and removed when no longer needed. The platform team spends its time improving the platform, not repeating it. Our pattern piece on [why a task still needs a person every time](/patterns/why-does-this-task-still-need-a-person-every-time/) describes the same shift in other parts of the business.

## Where Mellorca fits

Mellorca's [business automation](/services/business-automation/) work analyses repetitive request queues, defines standard environments as code, and sets up governed self-service with ownership, expiry and cost controls built in.

## Method note

This article draws on Google's site reliability engineering book, the CNCF platforms white paper and AWS documentation. Equivalent tools exist on other platforms; product availability changes over time. The example is illustrative.
