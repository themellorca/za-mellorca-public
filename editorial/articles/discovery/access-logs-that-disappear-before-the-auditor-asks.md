---
hub: discovery
record_id: DISC-366
slug: access-logs-that-disappear-before-the-auditor-asks
title: Access logs that disappear before the auditor asks for them
description: Sign-in and audit logs are switched on but kept only for default periods. How to set retention by control need, close gaps and prove it works.
lead: Sign-in and audit logs are often switched on but kept only for platform-default periods. How to set retention by control need, close the gaps and prove it works.
category: Security & Compliance Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager or security lead, with the compliance officer or internal auditor owning the requirement
budget_owner: CFO
sources:
  - Microsoft Entra data retention - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/monitoring-health/reference-reports-data-retention
  - Manage audit log retention policies | https://learn.microsoft.com/en-us/purview/audit-log-retention-policies
  - CIS Control 8: Audit Log Management | https://www.cisecurity.org/controls/audit-log-management
  - SP 800-92, Guide to Computer Security Log Management - CSRC | https://csrc.nist.gov/pubs/sp/800/92/final
related:
  - Why IT asset registers miss cloud and SaaS services | /discovery/why-it-asset-registers-miss-cloud-and-saas-services/
  - When every system owner reads the same compliance rule differently | /discovery/when-every-system-owner-reads-compliance-rules-differently/
  - Why policy acknowledgements need a reliable system record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
summary: Sign-in and audit logs are often switched on but kept only for platform-default periods. How to set retention by control need, close the gaps and prove it works.
layout: plain
---
In March, the business discovers that a former contractor's account was used to export a customer list. The obvious question is when that account was last used, and by whom. The IT team opens the sign-in logs and finds that they only go back thirty days. The export happened in January. The logs existed at the time; they simply were not kept long enough to answer the question anyone actually needed answered.

This article looks at that operating condition: access logs that exist but are not retained according to control needs. Most cloud and on-premises systems produce sign-in and audit logs by default. Far fewer businesses have decided how long those logs must be kept, and the platform default quietly makes the decision for them.

## The problem in plain language

Logging and retention are two different things. A system can record every sign-in, permission change and file download, and still delete those records after a week or a month. The business believes it "has logs" because the feature is switched on. It discovers the retention gap only when an auditor asks for a quarter's worth of access reviews, an insurer asks for evidence after an incident, or an investigation needs to look further back than the default window.

## What you are actually trying to solve

The questions usually sound like how long to keep audit logs, how to retain sign-in logs for longer, or why the logs do not go back far enough. Auditors and compliance teams frame it as a control requirement: show that access to key systems was monitored over the whole period under review. The practical need is a defined retention period for each important log source, based on what the business must be able to prove or investigate, and a mechanism that actually keeps the logs that long.

## Evidence and system mechanism

### Defaults are short and vary by licence

Microsoft's [Entra data retention reference](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/reference-reports-data-retention) shows audit and sign-in logs kept for seven days on the free edition and thirty days on the P1 and P2 editions. Longer retention requires routing the logs to storage or an analytics workspace. The same page notes that upgrading a licence is not retroactive: data that has already expired cannot be recovered unless it was archived beforehand.

The [Microsoft Purview audit log retention documentation](https://learn.microsoft.com/en-us/purview/audit-log-retention-policies) describes a separate set of rules for Microsoft 365 activity. Audit (Standard) records are retained for 180 days by default, while longer periods depend on specific licences assigned to the user who generated the activity. Retention policies can be set by service, activity and user, and a custom policy can shorten as well as lengthen retention. Other platforms have their own defaults. The point is that retention is a configurable, licence-dependent setting, and two logs from the same vendor may follow different rules.

### Controls expect retention to be deliberate

The [CIS Control 8 on audit log management](https://www.cisecurity.org/controls/audit-log-management) asks organisations to collect, alert on, review and retain audit logs of events that could help detect, understand or recover from an attack. NIST's long-standing [Guide to Computer Security Log Management (SP 800-92)](https://csrc.nist.gov/pubs/sp/800/92/final) treats log management as an organisational process with defined policies, rather than a product feature. Neither sets one retention period for every business; both assume the period is chosen to meet the organisation's needs.

### Warning signs

- Nobody can state the retention period for sign-in logs on the main systems.
- Access reviews rely on current permissions, with no history of who used them.
- Audit evidence is assembled from screenshots of recent activity, a weakness discussed in [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).
- Line-of-business applications such as payroll or accounting have their own logs that nobody has examined.

## Problem owner and why-now trigger

The IT manager or security lead owns the configuration. The compliance officer, internal auditor or risk owner owns the requirement: how far back the business must be able to look. The CFO usually holds the budget, because longer retention often means additional licences or storage costs.

The most common trigger is an audit finding that access monitoring cannot be evidenced for the full review period. Incidents are the second trigger, especially those involving former staff or suppliers whose access should have ended, as described in [why supplier access survives after engagements end](/discovery/why-supplier-access-survives-after-engagements-end/). Cyber-insurance claims and questionnaires increasingly ask about log retention as well.

## Economic consequence

When logs are missing, an investigation cannot establish what happened, which can mean assuming the worst: notifying more people, resetting more credentials and accepting a weaker position with insurers or regulators. Audit findings that recur year after year consume management time and can affect the auditor's overall view of the control environment. The cost of retention itself is usually modest compared with the cost of not being able to answer a question about a breach, but it is not zero, which is why it should be a decision rather than an accident. The financial exposure of weak access control is explored further in [the financial risk of uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).

## Root cause

- **Logging treated as on or off.** The question asked was "is auditing enabled?", not "how long are records kept?".
- **No retention requirement.** The business has not written down what it needs to be able to prove, for which systems, over what period.
- **Licence-driven defaults.** Retention follows whatever the current licence provides, and changes silently when licences change.
- **Fragmented sources.** Identity, email, file storage, finance and payroll systems each keep their own logs under their own rules.
- **No check.** Nobody periodically confirms that the oldest available record is as old as policy requires.

## Practical intervention

1. **Define the requirement.** For each critical system, decide which events matter (sign-ins, privilege changes, data exports, configuration changes) and how long they must be kept. Base this on audit periods, investigation needs, contractual obligations and legal advice where relevant.
2. **Map current retention.** Record the actual retention for each log source, including licence dependencies.
3. **Close the gaps.** Export or route logs to a central store with retention set to policy, or adjust platform retention policies and licences where that is more economical.
4. **Protect the logs.** Restrict who can delete or alter archived logs, so that retention cannot be undone by the accounts being monitored.
5. **Test regularly.** Quarterly, retrieve the oldest required record from each source. If it is not there, the control is not working.

### Trade-offs

Keeping everything forever is expensive and creates its own privacy obligations, because logs contain personal information. Retention should be long enough to meet the requirement and no longer. Central storage also needs someone to look after it; a log archive nobody can query is little better than none.

### An illustrative example

Illustrative: a Pretoria professional services firm with about 120 staff was asked by its auditor for evidence of privileged sign-in monitoring across the financial year. Its identity platform held thirty days of sign-ins and its accounting system had never had audit logging reviewed. The firm defined a twelve-month requirement for sign-in and privilege-change events, routed identity logs to a low-cost archive, enabled and exported the accounting system's audit trail monthly, and added a quarterly retrieval test to its compliance calendar.

## Diagnostic questions

- For your identity platform and main business systems, how many days of sign-in history are available today?
- Is there a written retention period for access logs, and who approved it?
- If a former employee's account was misused four months ago, could you prove it?
- Would a licence downgrade or change shorten your log retention without anyone noticing?
- Can the administrators being monitored delete the logs that record their activity?

## What good looks like

Each critical log source has a documented retention requirement linked to a control or investigation need. Actual retention meets or exceeds it, logs are protected from tampering, and a regular test proves the oldest required record can be retrieved. When an auditor or investigator asks what happened months ago, the business can answer from evidence.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can map log sources, configure retention and central archiving, and protect logs from alteration. [Managed digital operations](/services/managed-digital-operations/) can run the periodic retrieval tests and keep retention aligned as licences and systems change.

## Method note

Retention figures quoted are vendor defaults at the time of writing and change with licences and product updates. This article does not prescribe a retention period, which depends on the business's obligations and advisers. The example is illustrative rather than a client case.
