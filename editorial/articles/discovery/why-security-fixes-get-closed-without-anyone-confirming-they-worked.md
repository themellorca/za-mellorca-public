---
hub: discovery
record_id: DISC-362
slug: why-security-fixes-get-closed-without-anyone-confirming-they-worked
title: Remediation tickets close without verifying the underlying control
description: Closing a ticket proves a task was claimed, not that the weakness is gone. How to require evidence, retest automatically and track findings that come back.
lead: Closing a ticket proves a task was claimed, not that the weakness is gone. How to require evidence, retest automatically and track findings that come back.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT or security manager, with the compliance manager
budget_owner: IT director, chief operating officer or chief risk officer
sources:
  - SP 800-40 Rev. 4, Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology - CSRC | https://csrc.nist.gov/pubs/sp/800/40/r4/final
  - CIS Control 7: Continuous Vulnerability Management | https://www.cisecurity.org/controls/continuous-vulnerability-management
  - Microsoft Purview Compliance Manager | https://learn.microsoft.com/en-us/purview/compliance-manager
related:
  - Why compliance evidence should not depend on screenshots | /discovery/why-compliance-evidence-should-not-depend-on-screenshots/
  - Audit evidence cannot be reproduced from the original source | /discovery/why-audit-evidence-must-be-reproducible-from-the-source-system/
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
summary: Closing a ticket proves a task was claimed, not that the weakness is gone. How to require evidence, retest automatically and track findings that come back.
layout: plain
---
A vulnerability scan flags an internet-facing server with an outdated component. A ticket is raised, assigned to the infrastructure team and, three weeks later, marked "resolved" because an engineer applied an update. Nobody rescans. In the next audit, the same server shows the same weakness: the update had been applied to the wrong node, or rolled back by a later deployment, or the configuration change was made in a test copy. The ticket was closed, the report shows a falling count of open items, and the underlying control was never confirmed to work.

This article looks at that condition: remediation tickets that close without verifying the underlying control. It becomes urgent when regulation or a customer demands evidence that fixes actually took effect.

## The problem in plain language

A ticket is a record of a task. A control is the thing that protects the business: a patched system, a restricted permission, a working backup, an enforced setting. Closing a ticket proves that someone says they did the task. It does not prove that the control now works. When closure depends on a claim, not a check, the ticket system measures activity and the business believes it is measuring protection. The gap between the two grows quietly until a breach, an audit or a customer test exposes it.

## What you are actually trying to solve

The IT manager, security lead or compliance manager facing this wants to know that when the dashboard says an issue is fixed, it is. They want closure to mean "tested and confirmed", an evidence trail that stands up to an auditor, and a way to catch fixes that quietly failed. They also want to avoid doubling their workload with checks that nobody can resource.

## Evidence and system mechanism

### Verification is part of the definition of patching

NIST's [guide to enterprise patch management planning](https://csrc.nist.gov/pubs/sp/800/40/r4/final) defines the process as identifying, prioritising, acquiring, installing and verifying the installation of patches, updates and upgrades. Verification is part of the process, not an optional extra. The guide also notes a common divide between business owners and security or technology management about the value of patching, which helps explain why closing the ticket is treated as the finish line: it is the point at which the paperwork is complete.

### Vulnerability management is continuous assessment, not a one-time fix

The Center for Internet Security's control on [continuous vulnerability management](https://www.cisecurity.org/controls/continuous-vulnerability-management) describes a plan to continuously assess and track vulnerabilities on all enterprise assets in order to remediate them and minimise the window of opportunity for attackers. The word "continuously" matters. If assessment happens only when a quarterly scan is run, then a failed fix can remain open for months, and the ticket history will say otherwise.

### A control is something that is tested and monitored

Microsoft's documentation on [Purview Compliance Manager](https://learn.microsoft.com/en-us/purview/compliance-manager) describes controls as requirements that define how system configuration, processes and responsible people meet a regulation or standard, and describes using assessments to assign, test and monitor compliance activities. The structure illustrates the right model: an action is completed, and then a separate test confirms the control is in place. The same logic applies whether or not a business uses that product.

### Warning signs

- Tickets are closed by the person who did the work, with no second person or automated check.
- The same finding reappears in consecutive scans or audits after being "resolved".
- Closure comments say "done" or "updated" with no reference to evidence.
- The count of open tickets is reported as a measure of security, and nobody reports the count of findings that came back.

## Problem owner and why-now trigger

The IT or security manager owns the remediation process. The engineers and application owners who perform fixes own the work. The compliance manager or risk officer owns the assurance that fixes held. The budget owner is typically the IT director, chief operating officer or chief risk officer.

The trigger is often regulatory change. A new obligation, such as stronger expectations for information security under POPIA or a sector regulator's cyber requirements, shifts the question from "did you act?" to "can you show it worked?". Customer security questionnaires, cyber insurance renewals and external audits press on the same point. Closely related situations appear in [security findings tracked in spreadsheets after scans](/discovery/security-findings-tracked-in-spreadsheets-after-scans/) and [patch exceptions that never expire](/discovery/patch-exceptions-that-never-expire/).

## Economic consequence

The direct cost is rework: the same finding fixed twice, audited twice and explained twice. The larger cost is false assurance. Management believes exposures are closed when they are open, so decisions about insurance, customer commitments and investment are made on wrong information. If an incident does occur, the business discovers that its record of remediation does not match reality, which damages its position with insurers, regulators and customers. There is also a staffing cost: a team that is measured on tickets closed learns to close tickets.

## Root cause

- **Ticket workflows have no verification step.** The last status is "resolved", and the system accepts the assignee's word.
- **The fixer verifies their own work.** No independent check exists, and the same assumptions that caused the error persist.
- **Evidence is not defined.** Nobody has said what proof is needed to close a given type of finding.
- **Scans and tickets are separate.** The scanner that found the issue does not feed back into the ticket that tracks it.
- **Success is measured by volume.** Dashboards count tickets closed within target time, which rewards speed over effect.

## Practical intervention

1. **Define evidence by finding type.** For a missing patch, the evidence is a rescan or version check. For a permission fix, it is a screenshot-free export of the current setting. Write these down in one table.
2. **Add a "verified" status.** A ticket moves from "fix applied" to "closed" only when evidence is attached and a second person or automated check has confirmed it.
3. **Rescan automatically.** Where possible, let the scanner retest affected assets and reopen the ticket on its own if the finding returns.
4. **Verify a sample where full checks are costly.** Check every critical item and a random ten percent of the rest, adjusting upward if failures are found.
5. **Track the reopen rate.** Report findings that came back after closure next to the number closed. This is the real quality measure.
6. **Link accepted exceptions to expiry.** If a fix cannot be applied, record the exception with a reason and a review date, as described in [why accepted risks need expiry dates and reassessment](/discovery/why-accepted-risks-need-expiry-dates-and-reassessment/).
7. **Order by exposure.** Verify first the findings on systems that are internet-facing or hold customer data, consistent with [why vulnerability severity needs business criticality](/discovery/why-vulnerability-severity-needs-business-criticality/).

### Trade-offs

Verification adds time before a ticket can close, and some teams will argue that it slows them down. Make it cheap: use automated retests, keep evidence requirements proportionate and avoid asking for documentation that adds nothing. For small teams where one person does both fixing and checking, schedule the check for a different day and use a tool-generated result instead of memory.

### An illustrative example

Illustrative: a Johannesburg financial services firm with a three-person IT team closed around forty security tickets a month. When it began rescanning affected assets before closure, about one in six closed items turned out to be still vulnerable, most because a patch had been applied to one server in a pair or reversed by a later release. After adding a verified status and a monthly reopen-rate figure, the number of tickets closed fell slightly, but the number of findings appearing in the next audit fell sharply and the audit took less time.

## Diagnostic questions

- What evidence is required before a security remediation ticket can be closed?
- Who confirms the fix, and is it someone other than the person who applied it?
- How many findings returned in the last two scans after being closed?
- Can you show an auditor the proof for any closed ticket within a few minutes?

## What good looks like

A ticket closes only when the control has been tested and the evidence is attached. Scanning feeds back into tickets and reopens failures automatically. The reopen rate is reported alongside closures, accepted exceptions have owners and expiry dates, and the business can show that fixes held. The measure of the team is findings that stay fixed, not tickets that are closed.

## Where Mellorca fits

Mellorca can review how remediation tickets move from finding to closure, define the evidence each type of fix requires, and connect scanning and ticketing so that failed fixes reappear automatically. The aim, as in [control owners who cannot produce evidence without manual searching](/discovery/control-owners-cannot-produce-evidence-without-manual-searching/), is evidence that comes from the working process, not from effort at audit time.

## Method note

The sources are public standards and product documentation used to describe verification as part of patching, continuous assessment, and tested controls. They do not measure how often tickets close without verification. The example is illustrative rather than a client case.
