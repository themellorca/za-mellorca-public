---
hub: discovery
record_id: DISC-426
slug: employees-cannot-tell-which-version-of-a-procedure-is-current
title: Staff cannot tell which version of a procedure is current
description: Copies of the same procedure sit in shared drives, email attachments, printed files and team chats, and nobody can say which one is in force. Publish one controlled copy and retire the rest.
lead: Copies of the same procedure sit in shared drives, email attachments, printed files and team chats, and nobody can say which one is in force. Publish one controlled copy and retire the rest.
category: Knowledge & Document Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Knowledge & Document Operations
problem_domain: Knowledge & Document Operations
problem_owner: Operations or quality manager responsible for controlled documents
budget_owner: COO or CIO
sources:
  - https://learn.microsoft.com/en-us/sharepoint/governance/versioning-content-approval-and-check-out-planning | https://learn.microsoft.com/en-us/sharepoint/governance/versioning-content-approval-and-check-out-planning
  - https://support.microsoft.com/en-us/office/enable-and-configure-versioning-for-a-list-or-library-1555d642-23ee-446a-990a-bcab618c7a37 | https://support.microsoft.com/en-us/office/enable-and-configure-versioning-for-a-list-or-library-1555d642-23ee-446a-990a-bcab618c7a37
summary: Copies of the same procedure sit in shared drives, email attachments, printed files and team chats, and nobody can say which one is in force. Publish one controlled copy and retire the rest.
layout: plain
---
A supervisor at a food processing plant in the Western Cape is training a new operator on the cleaning procedure for a filling line. She opens the copy she saved to her desktop last year. The operator was sent a different copy by email during induction. The laminated sheet on the wall by the line is older than both. The quality manager updated the procedure three months ago after an audit finding, and the new version is on the shared drive, in a folder called Procedures New, next to a file called Cleaning SOP FINAL v3 (2).

Nobody is ignoring the procedure. Everyone is following a version of it. The problem is that nobody can tell, at the moment they need it, which version is the one in force.

## The problem in plain language

A procedure is written to make work consistent and safe. To do that, everyone has to follow the same one. As soon as a procedure is copied, by download, attachment, print or screenshot, the copies start to age independently. When the original is updated, the copies do not change.

Over time a business accumulates many copies of each procedure in many places: shared drives, team sites, email, chat, personal folders, binders and walls. File names try to carry the version, with words like final and new, but they are not reliable. Staff choose the copy that is closest to hand, which is often not the current one.

## What the buyer is actually trying to solve

Operations and quality managers ask how to make sure staff use the current procedure, how to control document versions and how to stop old copies circulating. Compliance and audit leads ask how to show which version was in force on a given date. The outcome they want is one place where each procedure is published, with a clear current version, a named owner and a history, so that anyone can tell in seconds whether they are looking at the right one.

## Evidence and system mechanism

### Document libraries can separate drafts from published versions

Microsoft's guidance on [planning versioning, content approval and check-out in SharePoint Server](https://learn.microsoft.com/en-us/sharepoint/governance/versioning-content-approval-and-check-out-planning) describes the controls a document library offers. Versioning numbers and saves successive iterations. With major and minor versioning, versions ending in .0 are published major versions and others are drafts, and permissions can be set so that readers see only major versions while editors work on drafts. Content approval lets people with approver permissions control publication: a changed document becomes pending, readers continue to see the previous approved version, and the new version becomes visible only after approval. Check-out lets an author work privately and add comments describing changes when checking in, which builds a history of what changed.

Microsoft's support article on [enabling and configuring versioning for a list or library](https://support.microsoft.com/en-us/office/enable-and-configure-versioning-for-a-list-or-library-1555d642-23ee-446a-990a-bcab618c7a37) covers the equivalent settings in SharePoint in Microsoft 365, including how many versions to keep, who can see drafts, requiring content approval for submitted items and requiring check-out.

These controls only help if the procedure is read where it is published. A controlled library cannot update a copy that was downloaded to a desktop or attached to an email, and many businesses have the features switched off or use a library with no approval step.

## Why this becomes urgent

Document sprawl is the usual trigger. As teams, sites and collaboration tools multiply, the number of places a procedure can live grows, and with it the number of stale copies. A migration to a new platform often makes it worse when old folders are copied across without retiring duplicates.

The cost becomes visible after an incident, a quality failure or an audit in which staff were found following an outdated procedure, and the business cannot show which version was current at the time, a gap related to [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).

## Economic consequence

- **Errors and rework.** Work done to an old procedure must be checked and sometimes redone.
- **Safety and quality incidents.** Where procedures control hazards or product quality, an old version can cause harm.
- **Audit findings.** Auditors under quality, safety or industry schemes typically expect controlled documents, and uncontrolled copies are a common finding.
- **Search time.** Staff spend time looking for the right copy or asking colleagues which one to use.
- **Training inconsistency.** New staff learn whichever version their trainer had.

## Root cause

The root cause is that procedures are managed as files rather than as controlled records. There is no single published location, no named owner per procedure, no approval step and no rule against keeping local copies. Version is carried in file names, which anyone can change.

A second cause is that the controlled copy is hard to use. If the official library is slow, confusing or not available on the shop floor, people save their own copies. A third is that nobody retires old versions. When a procedure changes, the new one is added, but the old one stays where it was, much as reports and dashboards outlive the processes they describe in [dashboards outlive the process they measure](/discovery/dashboards-outlive-the-process-they-measure/).

## Practical next actions

1. **Inventory your procedures.** List each procedure that controls safety, quality, compliance or customer outcomes, with where copies currently live.
2. **Name an owner for each.** Make one person accountable for each procedure's content, review date and retirement.
3. **Create one published library.** Choose a single location for current procedures, switch on versioning with drafts hidden from readers and require approval before publication.
4. **Show version and status on the document.** Put the version number, effective date, owner and next review date on the first page, populated from the library rather than typed by hand.
5. **Link, do not attach.** Make it a rule that procedures are shared by link to the published library, not as attachments or downloads, and update induction material to use links.
6. **Retire old copies.** Archive superseded procedures out of working folders, remove them from team sites and chats, and replace printed copies on walls with versions that show the effective date or a code that opens the current copy.
7. **Make access easy where work happens.** Ensure the library works on the devices staff use on the floor or in the field, so the official copy is the easiest one to reach.
8. **Review on schedule.** Set review dates and send reminders to owners, and record each review even when nothing changes.

## Diagnostic questions

- For your five most important procedures, how many copies exist and where?
- Does each procedure have a named owner and a review date?
- Can readers see draft versions, or only approved ones?
- Could you show an auditor which version of a procedure was in force on a given date?
- When a procedure changes, what happens to the old copies?

## What good looks like

Each controlled procedure has one published copy in one library, with a named owner, an approval step and a full version history. Readers see only approved versions, and each document shows its version and effective date. Staff open procedures by link, on the devices they use at work. Old versions are archived out of working areas. When an auditor asks what was in force last March, the answer takes minutes. Acknowledgements of key procedures are recorded in a system, as described in [why policy acknowledgements need a reliable system record](/discovery/why-policy-acknowledgements-need-a-reliable-system-record/).

## Where Mellorca fits

To set up a controlled procedure library with versioning, approval and access for front-line staff, [systems implementation and integration](/services/systems-implementation-integration/) can configure and migrate your content. To define owners, review cycles and the rules for retiring old copies, [digital operations improvement](/services/digital-operations-improvement/) can design the governance with your operations and quality leads.

## Method note

This article uses Microsoft documentation for SharePoint Server and SharePoint in Microsoft 365 to illustrate versioning, content approval and check-out. Other document management platforms offer comparable controls. The scenario is illustrative. Specific document control requirements depend on the standards, schemes and regulations that apply to your business, so confirm them with your quality or compliance function.
