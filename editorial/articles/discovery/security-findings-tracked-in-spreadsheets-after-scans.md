---
hub: discovery
record_id: DISC-351
slug: security-findings-tracked-in-spreadsheets-after-scans
title: Why security findings end up in spreadsheets after the scan finishes
description: Scan results exported to a spreadsheet stall remediation and fail audits. Why spreadsheet tracking lets risk linger and what works instead.
lead: Vulnerability scans run, the results are exported to a spreadsheet, and remediation stalls. Why spreadsheet tracking fails audits and lets risk linger, and what a workable alternative looks like.
category: Security & Compliance Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager or security lead
budget_owner: CIO or CFO, often prompted by the audit and risk committee
sources:
  - SP 800-40 Rev. 4, Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology - CSRC | https://csrc.nist.gov/pubs/sp/800/40/r4/final
  - Threat and vulnerability management - Microsoft Service Assurance | https://learn.microsoft.com/en-us/compliance/assurance/assurance-vulnerability-management
  - Continuous Vulnerability Management - Center for Internet Security | https://www.cisecurity.org/controls/continuous-vulnerability-management
related:
  - Why security architecture decisions need linked risk exception records | /discovery/why-security-architecture-decisions-need-linked-risk-exception-records/
  - Why supplier access survives after the supplier engagement ends | /discovery/why-supplier-access-survives-after-engagements-end/
  - Why policy acknowledgements need a reliable system record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
  - Remediation tickets close without verifying the underlying control | /discovery/why-security-fixes-get-closed-without-anyone-confirming-they-worked/
summary: Vulnerability scans run, the results are exported to a spreadsheet, and remediation stalls. Why spreadsheet tracking fails audits and lets risk linger, and what a workable alternative looks like.
layout: plain
---
The vulnerability scan runs on schedule. It produces a long report. Someone exports it to a spreadsheet, adds columns for "owner", "status" and "comments", and emails it to the IT team. A month later the next scan runs, the spreadsheet is out of date, and nobody is quite sure which findings were fixed, which were accepted and which were simply forgotten. When the auditor asks for evidence that critical findings were remediated, the team spends days reconstructing it.

This article looks at that condition: security findings tracked in spreadsheets after scans finish. Scanning itself is usually not the problem. The problem is the gap between finding and fixing.

## The problem in plain language

Scanners are good at producing findings. They are less helpful at making sure each finding reaches the right person, is fixed within an agreed time, and is verified as fixed. When that workflow lives in a spreadsheet, it depends on someone manually updating rows, chasing owners and merging the next scan's results. Spreadsheets have no reliable history, no automatic reminders and no link back to the scanner. They also fragment quickly: one copy per team, one version per month.

## What you are actually trying to solve

IT and risk leaders typically ask how to track vulnerability remediation, how to prove findings were fixed for an audit, or why the same vulnerabilities keep reappearing. The real need is a closed loop: every material finding has an owner and a due date, progress is visible without manual collation, and closure is confirmed by evidence rather than by someone typing "done".

## Evidence and system mechanism

### Remediation includes verification

[NIST SP 800-40 Rev. 4](https://csrc.nist.gov/pubs/sp/800/40/r4/final) describes enterprise patch management as the process of identifying, prioritising, acquiring, installing and verifying the installation of patches and updates across an organisation, and frames it as preventive maintenance that the business should plan for rather than treat as optional overhead. A spreadsheet can record intent, but it cannot verify that a patch was installed. Verification needs a link back to scan data.

### Mature practice tracks findings centrally until closed

[Microsoft's description of its own vulnerability management](https://learn.microsoft.com/en-us/compliance/assurance/assurance-vulnerability-management) shows the shape of a closed loop. Scan results are collected in a central store, service teams review them through dashboards, vulnerabilities are tracked in those reports until remediated, scan results are used to validate patch deployment, and overdue vulnerabilities are reported daily and reviewed by management monthly. Prioritisation uses CVSS scores together with other risk factors.

Few mid-sized businesses need this scale, but the elements are the same: central data, ownership, tracking to closure, verification and escalation of overdue items. The Center for Internet Security's [continuous vulnerability management control](https://www.cisecurity.org/controls/continuous-vulnerability-management) likewise asks organisations to continuously assess and track vulnerabilities on all enterprise assets so that they can remediate them and shrink the window of opportunity for attackers.

### Prioritisation inputs change constantly

CISA maintains the [Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) as an authoritative list of vulnerabilities exploited in the wild, and advises organisations to use it as an input to their prioritisation framework. A static spreadsheet cannot easily re-rank findings when a vulnerability moves onto that list. A tracked workflow can.

### Warning signs

- Scan results are exported to spreadsheets and emailed to owners.
- The same findings appear scan after scan with no recorded decision.
- There is no agreed timeframe for fixing critical, high and medium findings.
- Risk acceptances are agreed in conversation and not recorded with an expiry date.
- Audit evidence is assembled from screenshots and email threads, a problem covered in [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).

## Problem owner and why-now trigger

The day-to-day owner is usually the IT manager or a security lead. In smaller businesses this may be the outsourced IT provider, which makes clear ownership even more important. The audit and risk committee, the CFO or the CIO typically funds any change.

The usual trigger is an audit finding. External auditors, insurers or major customers ask for evidence that vulnerabilities are remediated within defined timeframes, and the spreadsheet cannot provide it. Other triggers include a cyber-insurance renewal questionnaire, a new client's security due diligence, or an incident traced to a vulnerability that had been reported months earlier.

## Economic consequence

The labour cost is real but secondary: hours spent merging scan exports, chasing owners and rebuilding evidence. The larger cost is exposure. Findings that fall through the gap stay exploitable, and the business may not know which ones. There is also a commercial cost when customers, insurers or auditors lose confidence in the security programme, which can mean qualified audit findings, harder insurance renewals or lost tenders. The broader risk of security tools that are not backed by basic controls is described in [security products without basic controls](/impact/security-products-without-basic-controls/).

## Root cause

- **Scanning was bought; remediation was not designed.** The tool was implemented, but the process after the report was left to improvisation.
- **No asset ownership.** Findings cannot be routed to owners if nobody knows who owns each server, application or device.
- **No agreed timeframes or exception process.** Without targets, there is nothing to measure against, and without a formal exception route, accepted risks look the same as forgotten ones.
- **No business context.** Findings are ranked only by technical severity, so effort is spread thinly; see [why vulnerability severity needs business criticality](/discovery/why-vulnerability-severity-needs-business-criticality/).

## Practical intervention

1. **Assign asset owners.** Link every scanned asset to an owner who receives its findings.
2. **Agree remediation timeframes.** Set target times by severity and by business criticality, with shorter targets for anything known to be actively exploited.
3. **Move tracking into a system with history.** Use the scanner's own remediation features, an IT service management tool or a ticketing system, so that each finding becomes a tracked item with an owner, due date and status.
4. **Close by verification.** Mark findings as fixed only when a re-scan confirms it.
5. **Record exceptions formally.** Each risk acceptance needs a reason, an approver and an expiry date.
6. **Report overdue items.** A simple weekly or monthly view of overdue findings by owner is often the single most effective control.

### Trade-offs

Integrating a scanner with a ticketing system takes setup effort and can flood owners with tickets if every low-severity finding is included. Start with critical and high findings on business-critical assets, then widen the scope. For very small environments, a well-structured tracker with mandatory fields and re-scan verification may be sufficient, as long as it is a single source and not a set of emailed copies.

### An illustrative example

*Illustrative:* a Cape Town financial advisory firm with around 60 staff used a managed IT provider to run monthly scans. Results were emailed as a spreadsheet, and the provider and internal staff each kept their own copy. When the firm's auditors asked for evidence that critical findings had been remediated within the firm's own policy timeframe, neither copy could show it. The firm moved findings into the provider's ticketing system with owners and due dates, closed tickets only after re-scan, and reported overdue items monthly to the risk committee.

## Diagnostic questions

- Does every scanned asset have a named owner who receives its findings?
- Are there agreed remediation timeframes by severity, and is performance measured against them?
- Can you show, for any critical finding in the last six months, when it was found, who owned it and when a re-scan confirmed the fix?
- Are risk acceptances recorded with an approver and an expiry date?
- How many separate copies of the findings list exist today?

## What good looks like

Scan results flow into a single tracked workflow. Each material finding has an owner, a due date based on severity and business criticality, and a status that changes only when evidence supports it. Overdue findings are visible to management. Exceptions are explicit and time-limited. Audit requests are answered from the system in minutes rather than reconstructed over days.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work covers asset ownership, scanning configuration and remediation workflow design. For businesses that want the loop run for them, [managed digital operations](/services/managed-digital-operations/) can take on tracking, verification and reporting.

## Method note

This article draws on NIST and CISA guidance and on Microsoft's published description of its own practice. It does not quote remediation-time benchmarks, because those depend on each organisation's policy and risk appetite. The example is illustrative and not based on a specific client.
