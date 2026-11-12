---
hub: discovery
record_id: DISC-321
slug: managed-cloud-services-adopted-without-exit-planning
title: Why cloud managed services get adopted without an exit plan
description: Cloud migrations lean on managed databases, queues and serverless tools without recording what leaving would cost. How to make lock-in a deliberate, priced choice with a practical exit plan.
lead: Cloud migrations lean on managed databases, queues and serverless tools without recording what leaving would cost. How to make lock-in a deliberate, priced choice with a practical exit plan.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: CTO, head of IT or lead architect
budget_owner: CFO
sources:
  - Managing technical lock-in in the cloud | https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud
  - What is AWS Database Migration Service? - AWS Database Migration Service | https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html
  - What is OpenTelemetry? | https://opentelemetry.io/docs/what-is-opentelemetry/
related:
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - Why patch exceptions stay open long after anyone remembers the reason | /discovery/patch-exceptions-that-never-expire/
summary: Cloud migrations lean on managed databases, queues and serverless tools without recording what leaving would cost. How to make lock-in a deliberate, priced choice with a practical exit plan.
layout: plain
---
A cloud migration is usually sold on speed. Instead of running its own database servers, message queues and monitoring, the business adopts the provider's managed versions. Patching, backups and scaling become someone else's job. That is often the right decision. The problem is that it is rarely recorded as a decision at all. Nobody notes which managed services were chosen, how deeply the applications now depend on their particular features, or what it would take to move if prices, service quality or business needs change.

Years later, the question "could we move this?" has no answer, because the cost of leaving was never estimated when it was cheapest to manage.

## The problem in plain language

Managed services, sometimes called platform services, are cloud offerings where the provider runs the underlying software for you: databases, file storage, queues, serverless functions, identity, analytics and monitoring. Each one comes with its own interfaces, configuration and behaviour. As applications are built to use those specifics, they become harder to run anywhere else.

That is not wrong in itself. It becomes a problem when:

- nobody knows which managed services the business depends on, or how heavily;
- provider-specific features were adopted by default rather than by choice;
- contracts, pricing commitments and data locations were agreed without considering exit;
- a price increase or service change arrives and the business has no realistic alternative.

This differs from the software-as-a-service exit problem covered in our article on [data-export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/). There, the issue is getting data out of an application. Here, it is that the business's own applications have been built around one provider's platform.

## What the buyer is actually trying to solve

Searches include "cloud vendor lock-in", "cloud exit strategy", "how portable is our cloud architecture" and "should we use managed database or run our own". The buyer is often a CTO or IT lead mid-migration, or a CFO who has just seen a cloud bill rise. What they want is not to avoid managed services, but to know what they are committing to, where the lock-in is worth it, and what a move would cost.

## Evidence and system mechanism

### Lock-in is a trade-off to manage, not always avoid

The UK Government's guidance on [managing technical lock-in in the cloud](https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud) distinguishes commercial lock-in, from long and inflexible contracts, from technical lock-in, which arises from architecture, from services with no equivalent elsewhere, and from skills. It argues that the advantages of being locked in can outweigh the disadvantages, and that services such as serverless may justify lower portability. Its recommendations include planning exit before lock-in deepens, using open standards and formats, loosely coupled components and cross-platform infrastructure code, and periodically testing whether components could be rebuilt elsewhere.

### Changing engines is a conversion project, not a copy

Amazon Web Services' documentation for its [Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html) shows what moving data between platforms involves. It supports migrations between many database engines and between cloud and on-premises environments, but moving to a different engine requires schema conversion, including database code objects, before data can be migrated. The tooling exists in both directions, yet every provider-specific feature an application relies on adds conversion work.

### Open standards keep some layers portable

The [OpenTelemetry project](https://opentelemetry.io/docs/what-is-opentelemetry/) describes itself as vendor- and tool-agnostic, working with both open-source and commercial monitoring backends, and states that you own the data you generate. Instrumenting applications with an open standard like this means the monitoring vendor can change without rewriting how applications report their health. The same principle applies to standard database engines, container formats and infrastructure code.

## Problem owner and why now

The problem owner is the CTO, head of IT or lead architect who approves the target architecture. The budget owner is the CFO, who carries both the running cost and any future switching cost.

The trigger is cloud migration itself. Architectural choices made during migration are hard to reverse later, so it is the cheapest moment to record them. Other triggers include a renewal of a committed-spend agreement, a provider price change, an acquisition that brings a second cloud platform, or a regulator or customer asking for an exit plan.

## Economic consequence

- **Weak negotiating position:** if leaving is impractical, pricing is set by the provider.
- **High switching cost:** moving later means rewriting code, converting data and retraining staff.
- **Stranded decisions:** a better option for one workload cannot be used because everything is intertwined.
- **Unpriced risk:** service retirement or a change in terms becomes an unplanned project.

Rising cloud costs often make this visible; see [cloud costs rising without explanation](/impact/cloud-costs-rising-without-explanation/).

## Root cause

- **Migration speed prioritised over design records:** services were chosen in the moment and never documented.
- **Defaults treated as decisions:** provider-specific features were used because they were there.
- **Exit seen as pessimistic:** discussing leaving felt unnecessary while adopting.
- **No owner for architecture decisions:** nobody reviews dependency depth over time.

## Practical intervention

1. **List managed services in use.** For each critical application, record which provider services it depends on and what data they hold.
2. **Grade portability.** For each dependency, note whether an equivalent exists elsewhere, whether it uses an open standard, and roughly how much effort a move would take.
3. **Decide deliberately.** Accept deep lock-in where the benefit is clear, and record why. Prefer standard engines and open formats where the benefit is small.
4. **Keep layers loosely coupled.** Put provider-specific calls behind a thin internal interface so they can be replaced without rewriting the whole application.
5. **Write a short exit plan per critical system.** Include data export method, target alternatives, estimated effort and notice periods.
6. **Test occasionally.** Rebuild one component on an alternative platform or restore data into a different engine, and record what broke.

### An illustrative example

*Illustrative:* a Johannesburg insurance broker migrates its policy system to a public cloud and adopts a managed database, a provider-specific queue and serverless functions. Before go-live it records each choice. It keeps the database on a standard open-source engine, accepts the serverless functions as a deliberate trade-off, and wraps the queue behind a small internal interface. A two-page exit plan estimates the effort to move each part. When its committed-spend agreement comes up for renewal, the business can negotiate knowing what leaving would really involve.

## Diagnostic questions

- Can you list the managed cloud services your critical systems depend on?
- For each, is there an equivalent elsewhere, and does it use an open standard?
- Were provider-specific features chosen deliberately or by default?
- Do you have a written exit plan for any critical system?
- Have you ever restored your data into a different platform?

## What good looks like

Managed services are adopted on purpose, with a short record of why. Lock-in is accepted where it pays for itself and avoided where it does not. Critical systems have exit plans with realistic effort estimates. Commercial negotiations are informed by what leaving would cost. Our insight on [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/) covers the broader principle.

## Where Mellorca fits

Mellorca's [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work records managed-service choices during migration, grades portability, and produces proportionate exit plans for critical systems, so dependence on any provider is a known and priced decision.

## Method note

This article draws on UK Government cloud guidance, AWS documentation and the OpenTelemetry project. Portability varies by service and changes as providers evolve. The example is illustrative and not drawn from a named client.
