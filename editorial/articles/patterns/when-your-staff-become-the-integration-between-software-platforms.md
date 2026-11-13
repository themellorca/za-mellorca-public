---
hub: patterns
record_id: PAT-027
slug: when-your-staff-become-the-integration-between-software-platforms
title: When your staff become the integration between software platforms
description: When staff copy information between tools all day, they become the integration. It keeps work moving, but it exposes the business to errors and data risks.
lead: When staff copy information between tools all day, they become the integration. It keeps work moving, but it exposes the business to errors and data risks.
category: Operational Patterns
published_date: 2026-10-02
updated_date: 2026-10-02
eyebrow: Patterns
pattern_family: Operational Patterns
observable_condition: Staff stitch together tools to bypass IT delays
primary_identification: Human-integrated data flows and system fragmentation
commercial_value_dimensions: productivity; risk; speed
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - Data policies - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention
  - Introduction to other types of desktop flows - Power Automate - Microsoft Learn | https://learn.microsoft.com/en-us/power-automate/desktop-flows/overview
related:
  - When a status update requires a staff member to investigate | /patterns/when-a-status-update-requires-a-staff-member-to-investigate/
  - Why does this task still need a person every time? | /patterns/why-does-this-task-still-need-a-person-every-time/
  - Why one number requires three people and four systems | /patterns/why-one-number-requires-three-people-and-four-systems/
summary: When staff copy information between tools all day, they become the integration. It keeps work moving, but it exposes the business to errors and data risks.
layout: plain
---
## Observable Condition

Across many organisations, staff on the front lines routinely connect software tools without formal IT involvement. A spreadsheet here, a shared document there, a cloud app connector or a quick automation script—these ad hoc links create a living fabric of software integrations that evolve faster than formal governance can track. The outcome is a flexible, responsive workflow that often outpaces traditional IT delivery, but the data created and moved through these links can drift out of alignment with master data definitions, security policies and audit requirements.

In short, your staff become the integration between software platforms by necessity, not design.

A typical example: a regional property-management company runs a tenant portal, an accounting package and a maintenance-ticketing tool. None of them talk to each other. An administrator downloads new maintenance requests every morning, pastes them into a spreadsheet, looks up the tenant's account balance in the accounting system, and emails contractors. Later she built a small automation in a personal cloud account that copies form submissions into the spreadsheet. It works well. It also means tenant contact details now sit in a personal account, and the process stops whenever she is on leave.

## Realisation

This pattern emerges when business teams demand speed, the IT backlog is long, and the tools in use are widely available with low barriers to automation. The result is a pragmatic approach to problem-solving that avoids bottlenecks, at least in the short term. However, the same strength—speed—becomes a liability as duplicate data, opaque data lineage and inconsistent terminology creep into critical processes.

The UK National Cyber Security Centre's [guidance on shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it) makes the same observation from a security angle: unapproved tools and services are rarely adopted with malicious intent. Staff turn to them when approved tools lack the storage, collaboration or functionality they need, or when procurement is too slow. That diagnosis matters, because it points the remedy at the unmet need rather than at the person.

## Identification

The issue sits at the intersection of people, processes and information: skilled workers implement point-to-point connections; data lives in multiple repositories; and there is often no agreed master source of truth or formal data stewardship. When this happens, you have a pattern rather than a one-off incident: a recurrent condition that reshapes how work flows and how decisions are made.

### Warning signs

- Particular people are described as "the only one who knows how that works".
- Copy-and-paste between two systems is a daily task that appears in job descriptions or handover notes.
- Key reports are built in spreadsheets fed by several exports.
- Automations or connectors run under an individual's personal login.
- Processes visibly slow down or stop when one person is away.
- Different teams use the same term—"active customer", "completed job"—to mean different things.

Two closely related Mellorca patterns describe parts of this condition in more detail: [why high-value employees become human middleware](/patterns/why-high-value-employees-become-human-middleware/) and [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/).

## Diagnosis

The diagnosis is systemic: structural gaps in data governance, fragmented toolsets and a lack of standardised integration patterns. The organisation benefits from the agility of informal integrations, yet bears the cost in data quality, control and risk exposure. The root mechanism is not malice but absence—absence of a governed framework that can absorb the legitimate need for rapid integration while preserving control over data and access. Microsoft's documentation on [Power Automate desktop flows](https://learn.microsoft.com/en-us/power-automate/desktop-flows/overview) shows how low the barrier is: a flow can automate legacy and modern applications through their user interface, using UI elements, images or coordinates, with no formal integration behind them.

A practical way to diagnose the extent of the pattern is a short "integration census":

1. Ask each team to list the systems they move information between, and how—manual copying, exports, scripts, connectors.
2. Record who built or performs each link and under whose account it runs.
3. Note what data passes through it, particularly personal, financial or customer data.
4. Estimate how often it runs and how long it takes when done by hand.
5. Mark what happens if it stops: who notices, and how quickly.

Most organisations that do this are surprised by the number of links and by how many depend on a single person.

## Commercial Impact

Commercial value is elusive yet real: speed and throughput rise when staff stitch tools together, but the organisation may pay in data quality degradation, compliance risk and hidden maintenance costs. Decisions based on inconsistent data slow down, while duplicated efforts and rework cap future productivity gains. The pattern therefore sits at a crossroads of productivity, risk and speed.

There is also a people cost. Capable staff spend their time acting as connectors instead of doing the work they were hired for, and the organisation becomes dependent on them in ways that are hard to see until they resign. When personal information sits in untracked spreadsheets and personal accounts, privacy obligations also become harder to meet, because the business cannot readily answer basic questions about where data is held and who can access it.

## Common Misidentification

One common misbelief is that these adaptations are merely temporary hacks that IT will fix later. In practice, they become embedded in behaviour and processes, resistant to traditional remediation methods, unless governance and enablement are thoughtfully intertwined.

The opposite mistake is equally common: treating every informal link as a security breach and banning it. The NCSC guidance explicitly recommends a positive, no-blame approach, because punishing people discourages them from reporting what they use. A crackdown without an alternative simply pushes the integrations further out of sight.

## Possibility

The right path is not to suppress staff-led integration but to harness it through a governed programme: lightweight, standards-based integration tooling; clear ownership of data definitions; and a catalogue of approved connectors. This turns ad hoc work into intentional capability while preserving control and traceability.

Low-code platforms increasingly support this model directly. Microsoft's Power Platform, for example, lets administrators set [data policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention) that act as guardrails on which connectors makers can use, so that staff can still build while reducing the risk of unintentionally exposing organisational data. The same documentation notes that policy changes can suspend existing apps and flows that violate them, which is a reminder to introduce guardrails with notice rather than overnight.

## Intervention

Interventions include:

1. Establish guardrails for data access and privacy.
2. Deploy a low-code integration layer with approved connectors.
3. Create data stewardship roles and a data dictionary.
4. Implement data lineage and auditing.
5. Train staff on governance basics and provide a clear, fast path to escalation when risk is identified.
6. Conduct regular health checks on critical data flows.

Two further practical points. First, move any automation that supports a shared process off personal credentials and onto a service or shared account with a named owner—see [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/). Second, decide which system is authoritative for each key data item before rebuilding links; [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) sets out the questions to ask.

### Trade-offs

A governed integration layer costs money and needs someone to look after it. A catalogue of approved connectors will occasionally say no to something a team wants. The aim is to keep the approved route fast enough that people prefer it; if getting an integration approved takes months, staff will continue to build their own.

## Diagnostic Questions

- Which systems are most frequently connected by frontline staff?
- Where does data duplication most commonly occur?
- Is there a single source of truth for critical data, and is it being used consistently?
- What governance steps exist for approved integrations, and where are the gaps?
- How quickly can a path to an approved integration be created when a business need emerges?

## What to do first

Run the integration census with the two or three teams that handle the most customer or financial data. Pick the single link that would cause the most disruption if its builder left tomorrow. Document it, move it onto a shared account with a named owner, and agree how failures will be noticed. Then use the census to decide which links deserve a proper integration and which can be retired.

## Bottom Line

Staff-led integration can be a competitive advantage if redirected into a governed capability. The objective is to preserve agility while reducing risk, not to eliminate initiative. Begin with governance that enables, not inhibits, the patterns your people are already creating.
