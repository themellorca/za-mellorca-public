---
hub: discovery
record_id: DISC-297
slug: when-file-names-and-folders-quietly-run-integrations
title: When file names and folders quietly run your integrations
description: When a file's name or folder decides which process runs, a renamed file can stop an integration without any error. How to find, specify and monitor these hidden rules.
lead: When a file's name or folder decides which process runs, a renamed file can stop an integration without any error. How to find, specify and monitor these hidden rules.
category: Integration & API Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Process owner of the file-fed process (financial controller, supply chain or payroll manager) with the IT or integration lead
budget_owner: Finance director or head of operations
sources:
  - File Transfer - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/FileTransferIntegration.html
  - Create event-based triggers - Azure Data Factory & Azure Synapse Analytics | https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-event-trigger
  - SFTP - SSH - Connectors | https://learn.microsoft.com/en-us/connectors/sftpwithssh/
related:
  - Why manual file transfers survive inside otherwise automated processes | /discovery/manual-file-transfers-inside-automated-processes/
  - APIs change without downstream teams being warned | /discovery/apis-change-without-downstream-teams-being-warned/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
summary: When a file's name or folder decides which process runs, a renamed file can stop an integration without any error. How to find, specify and monitor these hidden rules.
layout: plain
---
A supplier drops a price file into a shared folder every Monday. A scheduled job picks up anything named *prices_\*.csv*, loads it into the ERP and moves it to an archive folder. It has worked for four years. Then the supplier changes its export tool, the file arrives as *Prices-2026-10.csv*, and nothing happens. No error, no alert. The old prices stay live until a customer queries an invoice three weeks later.

This article looks at that operating condition: file naming and folder conventions acting as integration logic. In many small and mid-sized businesses, the rules that decide which data moves where are not written in any integration platform or contract. They live in the name of a file, the folder it lands in, and the habits of whoever saves it there.

## The problem in plain language

File-based integration is still common, and for good reason. Banks, payroll bureaus, logistics partners, retail customers and older line-of-business systems often exchange data as CSV, text or spreadsheet files over SFTP, email or a shared drive. That is not the problem. The problem starts when the meaning of a file is carried by conventions nobody has written down:

- a prefix such as *INV_* or *PO_* decides which process handles the file;
- a date in the file name decides which period it belongs to;
- the subfolder decides which branch, entity or customer the data is for;
- moving a file to a folder called *done* is the only record that it was processed.

Each rule is reasonable on its own. Together they form integration logic that is invisible to most of the business, cannot be tested, and breaks silently when someone renames, resaves or relocates a file.

## What the buyer is actually trying to solve

People rarely search for this problem by name. They search for why an automated import stopped working, why a file was processed twice, why a flow did not trigger, or how to make an SFTP integration more reliable. Finance and operations managers describe the symptom as data that "sometimes doesn't come through". What they are really trying to establish is which files drive which business processes, what rules those files must follow, and how they would know when a rule is broken.

## Evidence and system mechanism

### File transfer pushes agreement onto the people at each end

The [File Transfer pattern in Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/patterns/messaging/FileTransferIntegration.html) describes applications producing files for other applications to consume, with integrators responsible for transforming formats and producing files at intervals suited to the business. The pattern works, but it leaves the sending and receiving parties to agree file names, locations, formats and timing between themselves. When that agreement is informal, it becomes tribal knowledge.

### Integration tools really do route on names and paths

Modern tools formalise the same idea. Microsoft's documentation for [storage event triggers in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-event-trigger) shows data-loading jobs firing only when a file path begins or ends with a specified pattern, such as a folder name or a *.csv* extension, and notes that these two patterns are the only matching allowed. The trigger passes the folder path and file name into the job as parameters. In other words, the name and location of a file are inputs to the business logic. Change either and a different job runs, or none does.

### Timestamps and folders affect whether files are seen at all

The [SFTP-SSH connector reference](https://learn.microsoft.com/en-us/connectors/sftpwithssh/) used by Power Automate and Logic Apps is explicit about the risks. Its trigger relies on a file's last modified time, so a file uploaded with an older preserved timestamp may not be detected. The trigger does not fire for files in subfolders. Microsoft also advises using separate folders for files waiting to be processed and files being uploaded, because otherwise the trigger can behave unpredictably and skip files. These are product details, but they show the general point: folder layout and file metadata are part of how the integration works.

### Warning signs

- Staff are told "save it with exactly this name" or "don't touch that folder".
- Imports fail silently and are noticed through downstream symptoms, the pattern described in [why failed integration messages sit unnoticed](/discovery/why-failed-integration-messages-sit-unnoticed/).
- Files are occasionally processed twice after someone copies them back out of an archive folder.
- Nobody can produce a list of the file drops the business depends on.

## Problem owner and why-now trigger

The operational owner is usually whoever runs the process the file feeds: the financial controller for bank and debtor files, the supply chain manager for price and stock files, the payroll manager for bureau exports. The technical owner is often a single IT person or an external developer who set the job up years ago. Budget usually sits with the finance director or head of operations.

The trigger is commonly growth in the number of integrations. As a business adds APIs, cloud applications and partner connections, the old file drops are either migrated or left alongside the new ones. Migration projects expose the hidden rules; leaving them in place multiplies them. Partner changes are the other trigger: a customer, bank or supplier upgrading its own system and changing an export format or naming convention without warning.

## Economic consequence

The costs arrive indirectly. A missed price file means invoicing at old prices and credit notes later. A missed bank file delays reconciliation and cash visibility. A duplicated payment or order file can create duplicate transactions, which is expensive to unwind. Staff time goes on investigating "missing" data that was in fact sitting in the wrong folder. There is also a change cost: every system replacement or cloud migration must first rediscover the rules before it can move them, which inflates project estimates and timelines.

## Root cause

- **Logic encoded in conventions.** Routing, period and entity decisions are made from names and paths rather than from file content or a defined interface.
- **No interface specification.** The expected name pattern, folder, format, schedule and owner are not documented for each file drop. The broader version of this gap is covered in [why undocumented interface mappings make change risky](/discovery/why-undocumented-interface-mappings-make-change-risky/).
- **No processing record.** The state of a file is held by where it sits, so a manual move changes the state without anyone knowing.
- **No completeness check.** Nothing asks, "the Monday price file should have arrived by 08:00; has it?"

## Practical intervention

1. **Inventory the file drops.** List every folder, mailbox or SFTP location that a scheduled job, flow or script watches. For each, record the expected file pattern, sender, schedule, target system and business owner.
2. **Write a short interface specification for each.** Include naming rules, folder rules, format, what happens to processed and rejected files, and who is told when something fails.
3. **Validate on arrival.** Check names, headers and record counts when a file lands. Reject non-conforming files to a quarantine folder and alert the owner, rather than ignoring them.
4. **Keep a processing log.** Record each file's arrival, checksum, outcome and target transactions, so that duplicates can be detected and processing does not depend on folder position alone.
5. **Monitor expected arrivals.** Alert when an expected file has not arrived within its window, not only when a received file fails.
6. **Move high-risk drops to defined interfaces.** Where a partner offers an API or a structured format, and the data is financially material, plan a migration. Not every file drop needs replacing; some are perfectly adequate once specified and monitored.

### Trade-offs

Files are often the only option a partner offers. The aim is to make their rules explicit and checked, not to over-engineer a low-value drop.

### An illustrative example

Illustrative: a Cape Town wholesale distributor with about 70 staff received daily stock files from three suppliers into a shared folder. A script loaded anything starting with the supplier code. When one supplier began prefixing files with a region code, its stock updates stopped for eleven days before a sales rep noticed phantom availability. The business documented each file drop, added an arrival check that alerts the buyer by 09:00, and moved rejected files to a quarantine folder with a notification.

## Diagnostic questions

- Can you list every folder or SFTP location that an automated process watches?
- For each, is the expected file name pattern written down anywhere other than in the code?
- Would anyone be told if an expected file did not arrive today?
- If a processed file were copied back into the inbound folder, would it be processed again?
- Who would a partner tell before changing their export format, and is that person still here?

## What good looks like

Every file-based integration has a written specification and a named owner. Files are validated when they arrive, non-conforming files are quarantined with an alert, and a processing log records what each file did. Expected arrivals are monitored. Naming and folder rules still exist, but they are documented, tested and visible, so a renamed file produces a clear alert rather than a silent gap. For a wider view of what a reliable integration should do, see [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can inventory file-based interfaces, write their specifications, add validation, logging and arrival monitoring, and migrate the riskiest drops to structured interfaces. A [Digital Systems Audit](/services/digital-systems-audit/) is a practical first step when nobody is sure how many file drops the business depends on.

## Method note

Product behaviours come from current vendor documentation and may differ in other tools. The example is illustrative rather than a client case. File-based integration is not inherently unreliable; the risk lies in undocumented, unmonitored naming and folder rules.
