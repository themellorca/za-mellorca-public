---
hub: discovery
record_id: DISC-427
slug: operational-knowledge-kept-in-personal-folders
title: Operational knowledge kept in personal folders
description: Current procedures, client requirements and templates often sit in one person's own storage, invisible to colleagues and to AI search. How to give each knowledge area a shared home, an owner and the right permissions.
lead: Current procedures, client requirements and templates often sit in one person's own storage, invisible to colleagues and to AI search. How to give each knowledge area a shared home, an owner and the right permissions.
category: Knowledge & Document Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Knowledge & Document Operations
problem_domain: Knowledge & Document Operations
problem_owner: Operations manager or knowledge management lead
budget_owner: COO or CIO
sources:
  - Data, Privacy, and Security for Microsoft Copilot | https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy
  - OneDrive retention and deletion - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/retention-and-deletion
related:
  - Why integration failures should not route to personal inboxes | /discovery/why-integration-failures-should-not-route-to-personal-inboxes/
  - When monitoring alerts fire and nobody knows who should respond | /discovery/monitoring-alerts-without-a-clear-response-owner/
  - Why platform logs pile up without anyone knowing what they are for | /discovery/platform-logs-kept-without-a-clear-purpose/
summary: Current procedures, client requirements and templates often sit in one person's own storage, invisible to colleagues and to AI search. How to give each knowledge area a shared home, an owner and the right permissions.
layout: plain
---
Illustrative example: a Bloemfontein engineering services firm decides to pilot an AI assistant so that site coordinators can ask questions such as "what is our lock-out procedure for pump stations?" or "which client requires a method statement before mobilising?". In testing, the assistant gives thin or contradictory answers. The investigation is revealing. The current lock-out procedure is a Word document in the operations manager's personal OneDrive. Client mobilisation requirements live in the project coordinator's own folder, organised by her own naming system. The shared drive holds older versions of both. The AI tool is not wrong; it can only see what it is allowed to see, and most of the working knowledge is in places only one person can open.

## The problem in plain language

Operational knowledge is the practical information people need to do the work: procedures, checklists, client requirements, supplier contacts, pricing rules, workarounds, templates and the reasoning behind past decisions. In many businesses, the most current and useful version of that knowledge sits in individual staff members' personal folders, mailboxes or desktops. Shared repositories exist, but they hold older copies or nothing at all.

It happens gradually. People save drafts where it is convenient, improve them over time and share links when asked. The shared drive is never updated because there is no owner, no structure and no reason to. The business only notices when someone is on leave, leaves the company or when a new tool depends on the information being findable.

A related problem, [employees not being able to tell which version of a procedure is current](/discovery/employees-cannot-tell-which-version-of-a-procedure-is-current/), is about version control in shared documents. This one is earlier in the chain: the knowledge never reaches a shared, governed place at all.

## What the buyer is actually trying to solve

The operations or knowledge management lead wants the information the business depends on to be held where the right people can find it, with a clear owner and a current version, and to survive the departure of the person who wrote it. Increasingly, they also want that knowledge to be usable by AI search and assistant tools without exposing material that should stay restricted.

## Evidence and system mechanism

### AI tools see only what users can already access

Microsoft's documentation on [data, privacy and security for Microsoft Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy) states that Copilot only surfaces organisational data to which individual users have at least view permissions, and that its semantic index honours the user's access boundary. Microsoft advises organisations to use the permission models in services such as SharePoint so that the right users and groups have access to the right content. The implication for knowledge held in personal folders is direct: if a procedure sits in one person's OneDrive and is not shared, an AI assistant will not use it for anyone else, and if it is shared with everyone by a broad link, it may surface where it should not.

### Personal storage has a lifecycle tied to the person

Microsoft's page on [OneDrive retention and deletion](https://learn.microsoft.com/en-us/sharepoint/retention-and-deletion) explains that when a user account is deleted, the user's manager is by default given access to the OneDrive, receives an email, and by default has 30 days before the OneDrive is deleted, with a reminder seven days before expiry. If access delegation is disabled, or neither a manager nor a secondary owner is set, nobody gets automatic access. The page also notes that unlicensed OneDrive accounts are archived after 93 days. Retention policies can override these defaults, but without them, knowledge stored in a leaver's personal folder has a short and fixed life.

## Why this becomes urgent

An AI knowledge initiative is the most common trigger today. Assistants and enterprise search make the gap visible within days, because answers are only as good as the shared content behind them. Staff turnover, retirements and restructures are the older triggers: a long-serving coordinator leaves and the business discovers how much of the operation was in her folders.

## Economic consequence

Staff spend time asking colleagues for files and recreating documents that already exist, a cost described in [the same internal questions asked again and again](/impact/same-internal-questions-undocumented-knowledge-cost/). Work stops when the person who holds the knowledge is away. When someone leaves, information can be lost outright, as in [critical files stored only on employee computers](/impact/critical-files-stored-only-on-employee-computers-device-failure-loss-continuity-cost/). AI investments underperform because the tools are pointed at stale or incomplete content, which echoes [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/). There is also compliance exposure when procedures used in practice differ from those an auditor or client is shown.

## Root cause

- **No defined home for each kind of knowledge.** Staff do not know where procedures, client requirements or templates should live.
- **No owner per knowledge area.** Nobody is responsible for keeping the shared version current.
- **Personal storage is the easiest option.** Saving to a personal folder takes no decision; saving to a shared library requires knowing which one.
- **Offboarding ignores knowledge.** Leaver processes recover laptops and remove access but do not transfer working files.
- **Sharing by link replaces structure.** Files are shared ad hoc, so access reflects history, not need.

## What good looks like

The business has a short list of knowledge areas, each with a shared home, an owner and basic metadata such as type, status and review date. Personal folders are for drafts and personal work, and staff know when a document must move to the shared home. Permissions are set by team or role, not by individual links. Offboarding includes a knowledge hand-over step with a named recipient, and retention settings ensure leavers' content is reviewed before it is deleted. AI and search tools are pointed at the governed areas, with results checked periodically against what staff actually use.

## Diagnostic questions

- For your ten most-used procedures, can you say where the current version is stored and who owns it?
- When the last three people left, what happened to the working files in their personal storage?
- Is automatic access delegation to the manager enabled, and is a secondary owner configured?
- If an AI assistant were switched on tomorrow, which knowledge areas would it be unable to see?
- How many shared libraries are accessible to everyone through broad links rather than group permissions?

## Practical next actions

1. Ask each team to list the documents they rely on weekly and where each one is actually kept.
2. Define shared homes and owners for the main knowledge areas, starting with procedures and client requirements.
3. Move the current versions into those homes, archive older copies and set permissions by group.
4. Add a knowledge hand-over step to offboarding and confirm access delegation and retention settings for leavers' storage.
5. Pilot AI search on one governed knowledge area and compare its answers with what experienced staff would say.
6. Review each knowledge area quarterly for currency, ownership and access.

## Where Mellorca fits

Mellorca helps businesses define knowledge areas and ownership, restructure shared repositories and permissions, and prepare content so that AI search and assistants can use it safely. This work sits within [business automation and AI workflows](/services/business-automation-ai-workflows/).

## Method note

The opening example is illustrative. Microsoft 365 documentation is used as an example of how AI assistants respect permissions and how personal storage is handled when users leave; defaults can be changed by administrators and other platforms behave differently.
