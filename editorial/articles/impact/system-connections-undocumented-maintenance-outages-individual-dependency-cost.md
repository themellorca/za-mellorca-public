---
hub: impact
record_id: CPS-092
slug: system-connections-undocumented-maintenance-outages-individual-dependency-cost
title: Connected but Undocumented: The Cost of Integrations Only One Person Understands
description: When nobody has written down how your systems are connected, every change is a gamble, every outage takes longer to fix, and one person's knowledge becomes a business risk.
lead: When nobody has written down how your systems are connected, every change is a gamble, every outage takes longer to fix, and one person's knowledge becomes a business risk.
category: Technology Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Technology Operations
commercial_domain: Technology Operations
primary_pain: Systems are connected without anyone documenting how the connections work
primary_cost_mechanism: Longer outages while connections are reverse-engineered, breakages from changes made without knowing dependencies, contractor discovery fees, dependency on one individual, and unreviewed service accounts and keys
sources:
  - https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf | https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
  - https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/view-applications-portal | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/view-applications-portal
summary: When nobody has written down how your systems are connected, every change is a gamble, every outage takes longer to fix, and one person's knowledge becomes a business risk.
layout: plain
---
## "Ask Thabo, he set it up"

A distribution business in Durban has its web shop, warehouse system, accounting package, CRM and courier platform all connected. Orders flow to the warehouse, invoices flow to accounting, and tracking numbers flow back to customers. It works well. Nobody, however, can say exactly how. Some connections run through an integration platform, one is a script on an old server, and one is a feature of the courier platform that someone switched on years ago. The person who built most of it, a contractor called Thabo, still helps when asked, but he works for other clients now.

When the accounting package needed a major update, nobody could say which connections would be affected. The update went ahead, invoices stopped flowing for three days, and it took Thabo an evening to find the cause.

## What "undocumented" usually means

Undocumented connections are rarely completely unknown. People know roughly what moves where. What is missing is the detail needed to maintain, change or repair them:

- Which systems are connected, and in which direction data flows.
- What triggers each transfer: an event, a schedule or a person.
- Which accounts, keys or passwords the connection uses, and who owns them.
- What transformations happen on the way, such as field mappings, filters and rules.
- What happens when a transfer fails, and who is told.
- Where the connection runs: a cloud platform, a server or someone's laptop.

This is different from [undocumented automations](/impact/undocumented-automations-slow-troubleshooting-risky-changes-cost/) inside a single tool. Here, the gap is in the connections between systems, which are often the least visible part of the technology estate and the most important for operations.

## Where the cost comes from

### Slower repair

When a connection fails, the first hours are spent working out how it works. Logs must be found, credentials located and mappings reverse-engineered. That time is paid for twice: in the cost of whoever investigates, and in the cost of the business process that is stalled while they do.

### Risky changes

Any change to a connected system, such as an upgrade, a new field, a renamed product category or a password rotation, can break a connection nobody knew depended on it. Businesses either avoid changes they should make, or make them and discover the impact afterwards. The pattern on [not knowing which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/) describes this trap.

### Dependency on individuals

If one employee or contractor holds the knowledge, the business depends on their availability and goodwill. Their hourly rate becomes harder to negotiate, and their departure becomes a risk event.

### Higher maintenance spend

New suppliers and consultants charge for discovery before they can help. Every new project that touches the systems begins with someone mapping what already exists, often more than once.

### Security blind spots

Connections often use powerful service accounts or long-lived keys. If nobody records them, they are not reviewed, rotated or removed when no longer needed. Microsoft's quickstart on [viewing enterprise applications in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/view-applications-portal) shows how administrators can list the applications registered in their tenant and filter them by owner, status and creation date. A business that has never looked at that list is often surprised by what is connected to its email and files.

## What good documentation looks like

Recognised frameworks treat knowing how data flows as a basic control, not a luxury. The NIST [Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) lists, among its asset management outcomes, maintaining representations of the organisation's authorised network communication and internal and external data flows, alongside inventories of software, services and systems.

For a small or mid-sized business, that does not mean a thick manual. A useful integration record is one page per connection, plus a simple diagram:

- Source and destination systems, and what data moves.
- Trigger and frequency.
- Where it runs and which account or key it uses.
- Main field mappings and business rules.
- Failure behaviour, alerting and the named owner.
- Last change date and who made it.

The guide on [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/) gives a fuller checklist.

## A way to cost the gap

The following figures are illustrative. If a business has eight connections and each fails or needs a change twice a year, and each event takes six extra hours of investigation because nothing is written down, that is 96 hours a year. At a contractor rate of R650 an hour, that is over R62,000 in discovery time alone, before the cost of stalled orders or invoices. Documenting eight connections might take two or three days once, and an hour or two a quarter to keep current.

## Why it persists

Documentation is always the last task in a project, and projects end before it is done. The connection works, so there is no pressure. The person who built it has the knowledge in their head and does not see the need. And documentation has no visible output until the day it is needed.

There is also a quiet incentive problem. A contractor who is the only person who understands a connection has little reason to write it down, because the knowledge keeps the work coming. That is not dishonesty; it is how the arrangement is structured. The business has to ask for documentation explicitly, include it in the scope of every project and pay for it, or it will not be produced.

## Practical next actions

1. **List every connection between your systems.** Include integration platforms, scripts, built-in connectors and scheduled file transfers.
2. **Draw one diagram.** Show each system as a box and each connection as an arrow labelled with what moves and how often.
3. **Write a one-page record per connection.** Capture trigger, location, credentials owner, mappings, failure behaviour and owner.
4. **Review connected applications and keys.** Check which applications have access to your email, files and core systems, and remove those no longer needed.
5. **Make documentation part of every change.** No integration change is complete until the record and diagram are updated.
6. **Ask the original builder for a handover session.** Record it, and turn the notes into the written records while the knowledge is still available.

Connections between systems are part of the business's infrastructure. When nobody has written down how they work, the business pays for that knowledge again every time something changes or breaks.
