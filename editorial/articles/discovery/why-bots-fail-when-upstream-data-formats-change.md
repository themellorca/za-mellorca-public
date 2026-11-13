---
hub: discovery
record_id: DISC-453
slug: why-bots-fail-when-upstream-data-formats-change
title: Why bots fail when upstream data formats change
description: Automation can fail or behave incorrectly when upstream fields, schemas or formats change without a governed contract and monitoring path.
lead: A workflow can look stable for months and then fail because a source application renamed a field, changed a value type or altered the structure the automation expected.
category: AI, Automation & Agent Operations
published_date: 2026-09-04
updated_date: 2026-09-04
tags:
  - Automation
  - Data contracts
  - Reliability
cta_label: Automation & AI Workflows
cta_href: /services/business-automation-ai-workflows/
side_notes:
  - Problem owner: Automation Lead / AI Platform Lead / COO
  - Budget owner: CIO / COO / CFO
problem_domain: AI, Automation & Agent Operations
problem_owner: Automation Lead / AI Platform Lead / COO
budget_owner: CIO / COO / CFO
sources:
  - Troubleshoot cloud flow errors - Power Automate | https://learn.microsoft.com/en-us/power-automate/troubleshoot-flow-errors
  - Troubleshoot a cloud flow - Power Automate | https://learn.microsoft.com/en-us/power-automate/fix-flow-failures
  - Web API Design Best Practices - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design
  - What Is Stale Data? - IBM | https://www.ibm.com/think/topics/stale-data
closing_title: Method note
closing_text: Platform documentation establishes the failure and troubleshooting mechanism. Prevalence and financial impact require organisation-specific evidence.
related:
  - Why AI tools fail without authoritative data | /discovery/why-ai-tools-fail-without-authoritative-data/
  - Automation incident response is improvised | /discovery/automation-incident-response-improvised/
  - AI evaluations are performed only before launch | /discovery/ai-evaluations-are-performed-only-before-launch/
---
## The problem in plain language

An automation depends on data arriving in a particular shape. A source system changes a field, endpoint, file or value and the bot starts failing—or worse, continues running with the wrong input.

The change is usually ordinary. A supplier adds a column to a nightly export. A finance team renames a status from “Approved” to “Authorised”. A SaaS vendor restructures an address into separate street, city and postcode fields. A SharePoint list is moved during a tidy-up. Nobody involved thinks of these as automation changes, because nobody on the producing side knows that a bot is reading the data. The automation owner finds out later, from a failed run, a missing invoice or a complaint from the team that relied on the output.

## What you are actually trying to solve

The business is not simply trying to “fix a bot.” They need dependable automation when upstream applications evolve, including a way to detect incompatible changes before users discover the business consequence.

The complaint tends to be symptom-first: “automation keeps breaking after updates”, “the flow fails when the spreadsheet changes”, “the RPA bot broke after the vendor upgrade”, or “how do we stop integrations failing when fields change?” Behind those phrases sits a single question: how do we keep automated work reliable when we do not control the systems that feed it?

## Evidence and system mechanism

Microsoft Power Automate troubleshooting guidance directs operators to inspect failed run inputs, outputs, connection state and changed resources. Its current troubleshooting guide explains a 404 error as a resource that was renamed, moved or deleted, and names wrong data types and null values among the most common expression mistakes. It also describes a separate class of problem: flows that complete with every step green but produce the wrong result because dynamic content references the wrong field or a comparison is affected by case or type. That is the visible operational layer. The architectural issue is deeper: automations consume an implicit data contract, whether or not the organisation has documented one.

Microsoft's Azure Architecture Center guidance on [web API design](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design) makes the same point from the producer's side. Adding fields to a resource may not break a client that ignores unrecognised content, but removing or renaming fields, or changing the relationships between resources, can constitute breaking changes that stop existing clients working. The guidance describes versioning approaches—through the URI, a query string, a header or the media type—so that existing consumers can keep receiving the shape they were built for.

If the producer changes and the consumer has no validation, versioning or alert path, a workflow can become brittle. Reliable automation therefore needs explicit assumptions about required fields, formats, values and failure behaviour.

### Two failure modes, not one

- **Loud failure:** the run errors because a field, file or endpoint is missing. This is disruptive but visible, and platform tooling such as run history and failure notification emails exists to surface it.
- **Quiet failure:** the run succeeds but processes the wrong thing. A renamed status value means a condition never matches; a new column shifts positional parsing; an empty field defaults to zero. Nothing alerts, and the error travels into downstream records. IBM describes this wider class of problem as stale or misaligned data, and lists schema and source drift—upstream changes not propagated downstream—among its causes.

The quiet mode is usually the more expensive, because it is discovered through business consequence rather than technical alerting.

### An illustrative example

*Illustrative only, not a client case.* An accounts payable flow reads supplier invoices from a shared export and posts those marked “Approved” to the finance system. The procurement platform is upgraded and the status label becomes “Authorised”. The flow keeps running every hour and reports success, because it finds nothing matching its condition. Two weeks later suppliers start chasing payment. The fix to the flow takes minutes; the reconciliation, supplier communication and late-payment handling take far longer.

## Problem owner and why now

Automation and AI platform leads usually own the workflow layer; CIO, COO and CFO budgets are affected when automations become business-critical. Urgency increases during agent rollout, system migration or rapid SaaS change.

Other common triggers are a vendor's scheduled release cycle, a finance or ERP upgrade, the acquisition of a business with different data formats, and the moment an automation that began as one person's convenience starts carrying regulated or customer-facing work.

## Economic consequence

Failures create rework, delayed transactions, support effort and loss of trust in automation. The impact should be quantified from the organisation’s own failed-run, exception and transaction data rather than generic automation ROI claims.

The less obvious cost is behavioural. Once a team has been caught out by a quiet failure, it often reintroduces manual checking alongside the automation. The business then pays for both, and the original case for automating weakens without anyone formally deciding to abandon it.

## Root cause

Common causes are undocumented input contracts, no schema validation, direct coupling to volatile source fields, weak test coverage and alerts that only report technical failure after the business event has already been missed.

Underneath those sits an ownership gap. The producer of the data and the consumer of the data sit in different teams, sometimes different organisations, and there is no agreed mechanism for telling one about changes that affect the other. See also [why automations break when application interfaces change](/discovery/automations-break-when-application-interfaces-change/) and [why undocumented interface mappings make change risky](/discovery/why-undocumented-interface-mappings-make-change-risky/).

### Warning signs

- Automation failures cluster around vendor release dates or internal system changes.
- Fixes are made by editing the flow directly, with no record of what assumption changed.
- Staff run “just in case” checks on automated output.
- Nobody can say which automations read a given system, file or list.
- Run status is the only monitoring signal.

## Practical intervention

1. Document the input contract for each critical automation.
2. Validate required fields and data types at the boundary.
3. Version interfaces where breaking change is possible.
4. Test critical workflows against representative input changes.
5. Route invalid input to a visible exception path.
6. Monitor business completion as well as run status.

Two further steps make the contract durable. First, register the dependency on the producer's side, so that whoever owns the source system knows a downstream consumer exists before they change it. Second, prefer stable identifiers to display labels: match on a status code or key rather than on the wording a user sees, because labels are the part of a system most likely to be edited for cosmetic reasons.

### Trade-offs

Strict validation rejects more input. That is the point, but it means the exception path must be staffed and visible, or rejected records simply become a new backlog. Versioned interfaces cost the producer effort to maintain older shapes for a period. Defensive parsing that tolerates extra fields reduces breakage but can also hide meaningful changes. The right balance depends on how costly a quiet failure is for each workflow, which is why the contract work should start with the most consequential automations rather than all of them. For more on designing the failure side, see [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

## Diagnostic questions

- Which upstream fields does this automation assume will always exist?
- Who can change the source without notifying the automation owner?
- What happens when the input structure changes?
- Can invalid data be quarantined safely?
- How quickly would the business know that work stopped?
- Does any automation match on a display label rather than a stable code?
- Would a run that processed zero records raise an alert?

## What good looks like

Critical automations treat upstream data as a governed contract. Incompatible changes fail visibly, exceptions are recoverable and application changes do not silently become operational incidents.

In practice, the owner of each critical automation can name its sources and the fields it depends on. Source owners know which consumers they affect. Inputs are checked before they are acted on. Unusual volumes—including zero—are treated as signals. And monitoring answers the business question, “did the work get done?”, not only the technical one, “did the run finish?”. The related discovery article on [why integration monitoring misses business completion](/discovery/why-integration-monitoring-misses-business-completion/) covers that last point in more depth.

## Where Mellorca fits

Mellorca can inventory automation dependencies, define data and process contracts, implement validation and exception paths, and establish managed monitoring around business-critical workflows.

## Commercial next step

Discovery article → automation dependency diagnostic → contract and failure-path design → remediation → managed automation operations.
