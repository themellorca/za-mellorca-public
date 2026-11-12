---
hub: discovery
record_id: DISC-367
slug: why-security-alerts-need-business-context-to-be-useful
title: Security monitoring creates alerts with no business-priority context
description: Security tools rank alerts by technical severity, not by what the business can least afford to lose. How to tell the tool and the team which few systems matter most.
lead: Security tools rank alerts by technical severity, not by what the business can least afford to lose. How to tell the tool and the team which few systems matter most.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT or information security lead, or the managed security provider running monitoring
budget_owner: Financial director or managing director
sources:
  - SP 800-137, Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/137/final
  - Investigate Incidents with Microsoft Sentinel (legacy) | https://learn.microsoft.com/en-us/azure/sentinel/investigate-cases
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - SP 800-61 Rev. 3, Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile - CSRC | https://csrc.nist.gov/pubs/sp/800/61/r3/final
related:
  - Why Vulnerability Severity Needs Business Criticality | /discovery/why-vulnerability-severity-needs-business-criticality/
  - Privileged accounts are reviewed without application context | /discovery/why-administrator-access-reviews-fail-when-reviewers-cannot-see-the-application/
  - Why Compliance Evidence Should Not Depend on Screenshots | /discovery/why-compliance-evidence-should-not-depend-on-screenshots/
summary: Security tools rank alerts by technical severity, not by what the business can least afford to lose. How to tell the tool and the team which few systems matter most.
layout: plain
---
At twenty past two on a Tuesday morning, the security tool sends forty-one alerts to a shared mailbox. One of them is a login to the finance system from an unfamiliar country. Another is a laptop in the warehouse that has missed an update. A third is a scan of a test server nobody has used since March. All three arrive with the same red icon and the same wording. Whoever opens the mailbox at eight has no way to tell which one touches the payroll run and which touches nothing at all.

This article looks at that operating condition: security monitoring that raises alerts without any sense of what matters to the business. It is common in companies that have bought good tools and switched them on, but never told them what is valuable.

## The problem in plain language

Monitoring tools judge an event by what happened, not by what it could damage. A failed login is a failed login whether it targets the staff canteen menu or the bank-payment approval screen. Unless someone tells the tool, or the people reading its output, which systems and data carry the real money and the real legal exposure, every alert is ranked by technical severity alone. The result is a long, flat queue. People work it from the top or from whatever caught their eye, and the important item is found by luck or not at all.

## What the buyer is actually trying to solve

The managing director or financial director does not want more alerts or a better dashboard. They want to know that the few events that could stop trading, expose customer records or trigger a notification duty are seen first, by someone who can act, and that this can be shown to a customer or an auditor on request. The IT lead wants the same, plus fewer interruptions for events that do not matter.

## Evidence and system mechanism

### Monitoring is meant to serve a risk tolerance

NIST's guidance on [information security continuous monitoring](https://csrc.nist.gov/pubs/sp/800/137/final) describes the purpose of a monitoring programme as ongoing assurance that controls remain aligned with the organisation's risk tolerance, and as the information needed to respond to risk in a timely way. A tool with no input about tolerance can only report volume.

### Severity is a field, and someone has to set the context behind it

Microsoft's documentation on [investigating incidents in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/investigate-cases) shows a typical pattern: incidents carry a severity and status, analysts look at severity to decide what to handle first, and investigation depends on entities, such as accounts and hosts, being mapped when the detection rule was written. Severity here is a property the rule author assigns. If the author did not know that one host holds the debtors ledger, the incident for that host looks like any other.

### Signals should be actionable

The chapter on [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) in Google's site reliability book makes a distinction between symptoms and causes and argues for monitoring with maximum signal and minimum noise. An alert that does not tell a person what is wrong and why it matters is a cost, not a safeguard.

### Detection exists to make response faster

NIST's [incident response recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) frame detection, response and recovery as parts of one risk management effort, intended to improve the efficiency and effectiveness of each.

### Warning signs

- The alert mailbox or channel is muted, filtered into a folder or read once a week.
- Two alerts about very different assets look identical in subject line and colour.
- The team cannot say which five systems the business could not trade without.
- Nobody can say who decides, at night, whether an alert is worth a phone call. This is the same gap described in [monitoring alerts without a clear response owner](/discovery/monitoring-alerts-without-a-clear-response-owner/).

## Problem owner and why-now trigger

The problem owner is the IT or information security lead, or the outsourced provider who runs monitoring on the company's behalf. The budget owner is usually the financial director or managing director, because the real decision is which assets and processes deserve the fastest attention.

The trigger is often external. A regulatory change, such as a stricter reading of security safeguards under POPIA or a new sector rule, makes leadership ask how the company would know quickly if personal information were exposed. A cyber-insurance questionnaire or a large customer's security review asks the same thing in a different form. The honest answer, "we get alerts, and someone looks at them", is not one that survives a follow-up question.

## Economic consequence

The direct cost is the time spent reading alerts that never needed reading. A person who spends an hour a day on triage costs a small business several hundred Rand a day in salary alone, and that figure grows if the work falls to a senior person. The larger cost is the missed event. A compromised mailbox or an unusual payment-approval login that sits unread for two days can turn into a fraud loss, a business email compromise or a reportable breach, with legal, notification and reputational costs far above the price of the monitoring tool.

## Root cause

- **No asset or process ranking.** The business has never written down which systems, data sets and processes are critical, and why.
- **Default tool configuration.** Detection rules and severities come from the vendor's idea of risk, not the company's.
- **Alerts without ownership.** There is no named person who decides what happens after hours.
- **Compliance language drives tooling.** Tools are bought to tick a box, then left on defaults.

## Practical intervention

1. **List the critical few.** With finance and operations, name the ten or so systems, data sets and processes whose loss would stop trading or trigger a notification duty. Include payment approvals, customer personal information, the accounting system and any system touched by load-shedding recovery.
2. **Tag assets in the monitoring tool.** Add business criticality, owner and data type to each host, account group and application the tool can see. Where the tool cannot hold tags, keep a one-page register the triage person actually uses.
3. **Re-rank alert types.** Raise the priority of events on critical assets, such as new admin accounts, impossible travel, changes to payment details or bulk exports, and lower noisy events on low-value assets.
4. **Define three response levels.** For example: call someone now, handle in working hours, and review weekly. Write down who is called and how fast.
5. **Test with a replay.** Take last quarter's alerts and ask whether the new ranking would have put the events that mattered at the top.
6. **Review monthly.** Check how many alerts reached each level, how many were genuine, and which assets are missing from the register.

### Trade-offs

Ranking by business value means accepting that some low-value assets will get slower attention. That is a deliberate decision and it should be recorded and approved, not drifted into. The register also goes stale, so it needs an owner and a review date.

### An illustrative example

Illustrative: a Durban distribution company with 120 staff used a managed security service that forwarded around 900 alerts a month to a shared inbox. After the financial director and IT lead listed eight critical systems and tagged them, alerts on those systems were routed to a phone call during the night and everything else to a weekly review. Alerts needing a same-day decision fell to a few dozen a month.

## Diagnostic questions

- Which ten systems or data sets matter most to the business, and where is that written down?
- Does the monitoring tool know that, or does it rank everything the same way?
- Who decides at 02:00 whether an alert justifies a call?
- Of last month's alerts, how many were closed with no action, and what was lost in the pile?

## What good looks like

The company has a short, owned list of what matters. Monitoring tools carry that list as tags or rules. Alerts arrive ranked by business consequence, with a named person for each response level. Genuine events on critical assets are seen within the agreed time, and a monthly review shows the volume, the outcomes and the gaps. When a regulator, customer or insurer asks, the evidence is a short report rather than a search through an inbox.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can map which systems, data and processes are critical and test whether current monitoring reflects that. [Digital operations improvement](/services/digital-operations-improvement/) can then set up the ranking, response levels and monthly review so that the arrangement outlasts the person who built it.

## Method note

The sources are standards guidance and vendor documentation used to describe how monitoring purpose, severity and detection are normally structured. They do not measure how many alerts any particular South African business receives, and the example is illustrative rather than a client case. Legal obligations under POPIA should be confirmed with the company's information officer or legal adviser.
