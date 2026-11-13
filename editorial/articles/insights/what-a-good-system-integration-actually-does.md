---
hub: insights
record_id: INS-052
slug: what-a-good-system-integration-actually-does
title: What a good system integration actually does
description: A clear view of integration as a systemic capability, not a one-off project, and how it enables reliable, observable, and scalable operations.
lead: A clear view of integration as a systemic capability, not a one-off project, and how it enables reliable, observable, and scalable operations.
category: Technology & IT
published_date: 2026-09-08
updated_date: 2026-09-08
eyebrow: Technology & IT
sources:
  - Event-Driven Architecture Style - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - Idempotent Consumer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer
  - IBM Cloud products | https://www.ibm.com/cloud
related:
  - Why more software can make the business harder to run | /insights/why-more-software-can-make-the-business-harder-to-run/
  - Key-person dependency is a systems problem | /insights/key-person-dependency-is-a-systems-problem/
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
summary: A clear view of integration as a systemic capability, not a one-off project, and how it enables reliable, observable, and scalable operations.
layout: plain
---
System integration is often treated as a technical afterthought: something to sort out once the new platform is chosen, usually described in terms of which connectors are available. But its value lies in turning disparate components into a coherent capability. A good integration creates visibility across domains, reduces manual handoffs and makes data-driven decisions possible. It is not merely about connecting endpoints; it is about aligning data meaning, governance and operational rhythms so that the flow of work becomes predictable and trustworthy.

When integration is designed with the end-to-end workflow in mind, teams stop fighting data silos and start working around shared signals. The aim is for teams to work with the same truth at the same time, so that processes stay in step rather than collide as they scale.

## Connection is the easy part

Most modern business applications can exchange data. That capability is necessary, but it is not what makes an integration good. Two systems can be technically connected while the business still re-keys data, checks one screen against another, and discovers failures only when a customer complains.

The difference between a connection and a good integration is the set of decisions surrounding it. Which system owns each piece of data? What business event should cause data to move? What must be true before it moves? What happens when it fails? Who notices, and who fixes it? An integration that answers these questions explicitly behaves like part of the operating model. One that leaves them unanswered behaves like a pipe that occasionally leaks.

## What a good integration actually does

In practice, a well-designed integration does several distinct jobs.

### It moves work on a business event, not a person's memory

A good integration is triggered by something meaningful: an order accepted, a customer approved, an invoice paid. Microsoft's [event-driven architecture guidance](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven) describes producers publishing events that consumers respond to, without each system needing to know about every other. Whether or not a business adopts that architecture, the principle is useful: define the event first, then decide how it is carried.

### It respects ownership of data

Each important field should have one authoritative source. A good integration copies from the owner to the consumers, not in both directions by default, so that systems do not overwrite each other's corrections.

### It handles failure as a normal condition

Networks drop, services become busy and interfaces change. Microsoft's [retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) distinguishes transient faults, which are worth retrying after a delay, from failures that should be stopped and reported, and recommends logging failures so underlying problems can be found. A good integration has a defined path for both, rather than relying on someone to notice.

### It does not create duplicate work when it retries

Retries introduce a quieter risk: the same message processed twice. The [idempotent consumer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer) explains that most messaging systems deliver at least once, so the same message can arrive more than once, and that consumers should use a stable identifier to recognise and skip work already done. In business terms, that is the difference between a resilient integration and one that occasionally creates a second order or a second invoice.

### It can be traced end to end

When a business transaction passes through several systems, someone needs to be able to follow it. The event-driven guidance recommends carrying a correlation identifier through every step so related operations can be connected. Observability and traceability are what let a team answer "where is this order?" without opening five applications.

## What effective integration looks like in practice

Effective integration begins with a clear objective: what outcome does the integration enable, and for whom? Then comes governance: who owns data meaning, who validates changes, and how do teams monitor health? A practical integration programme favours incremental, testable pieces that can prove value quickly while staying compatible with the wider system. Finally, observability and traceability are essential. If a data item changes meaning upstream, downstream users must be alerted and able to adapt without manual rework.

This is why integration is better understood as a capability than as a project. Projects end; data definitions, interfaces and business rules keep changing. An integration with no owner after go-live tends to decay, and the decay usually shows up as manual work rather than as a visible outage. For more on that point, see [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

## A practical diagnostic

A simple way to judge whether an integration is doing its real job is to look for the work people do around it. The following warning signs suggest an integration that connects systems without integrating the operation:

- Staff check the receiving system to confirm that data arrived.
- Failures are discovered by customers, suppliers or month-end reconciliation.
- Nobody can say which system is authoritative for a shared field.
- Duplicate records appear after outages or slow periods.
- Changes to one application are delayed because nobody is sure what the integration depends on.
- Support for the integration depends on one person or one supplier contact.
- Teams keep side spreadsheets to bridge gaps the integration does not cover.

Useful questions to ask of any important integration:

- What business outcome does it exist to deliver, and how would we know it had stopped?
- Which business event triggers it, and which system owns each field it carries?
- What happens to a transaction that fails, and where does it appear?
- Can it safely process the same message twice?
- Can we trace a single transaction from start to finish?
- Who is accountable for it now that the original project has finished?

If several answers are unclear, the integration is probably carrying less of the operation than it appears to. Related reading: [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) and [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

## Next steps for leaders

- Define a minimal integration blueprint aligned to critical workflows and the data that powers them.
- Establish a shared data model and a common contract for data quality and meaning.
- Implement lightweight monitoring that captures end-to-end latency, error rates and data drift in key flows.
- Govern changes with clear ownership and a reversible path for rollback when needed.
- Name an operational owner for each critical integration, separate from the owners of the applications it connects.

## Conclusion

Good integration is a strategic capability that underpins reliable operations. Done as a system-wide practice, it reduces friction, speeds up decisions and creates a durable platform for growth. The test is not whether systems are connected, but whether the work moves correctly between them without people carrying it.
