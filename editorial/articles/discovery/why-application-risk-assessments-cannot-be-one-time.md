---
hub: discovery
record_id: DISC-338
slug: why-application-risk-assessments-cannot-be-one-time
title: Why application risk assessments cannot be one-time reviews
description: Applications change after purchase as integrations, data, users, vendors and threats evolve. Why risk review must continue through the whole lifecycle.
lead: A software risk assessment performed at purchase can become stale as the application adds data, integrations, users, privileges and business-critical workflows.
category: SaaS & Application Portfolio Management
published_date: 2026-09-03
updated_date: 2026-09-03
tags:
  - SaaS
  - Risk lifecycle
  - Governance
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_notes:
  - Problem owner: CIO Office / Enterprise Architecture / IT Operations
  - Budget owner: CIO / CFO
problem_domain: SaaS & Application Portfolio Management
problem_owner: CIO Office / Enterprise Architecture / IT Operations
budget_owner: CIO / CFO
sources:
  - Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations | https://www.nist.gov/publications/information-security-continuous-monitoring-iscm-federal-information-systems-and
  - Cybersecurity Framework - CSRC | https://csrc.nist.gov/Projects/cybersecurity-framework/Filters
  - https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf | https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
closing_title: Method note
closing_text: Review frequency should reflect the organisation's risk tolerance, material changes and regulatory context. This article does not prescribe a universal review interval.
related:
  - Why businesses cannot produce a complete list of the applications they use | /discovery/why-businesses-cannot-list-all-applications-they-use/
  - Why legacy applications remain live without an owner | /discovery/why-legacy-applications-remain-live-without-an-owner/
  - Why free trials become production dependencies | /discovery/why-free-trials-become-production-dependencies/
---
## The problem in plain language

A SaaS product passes security and architecture review when first purchased. Two years later it holds more sensitive data, connects to more systems, supports a more critical process and may have a different vendor feature set—yet the original approval still acts as the only risk decision.

Nobody has done anything obviously wrong. The purchase was reviewed, the questionnaire was answered and the contract was signed. The difficulty is that the review described the application as it was on the day it was bought, while the business has gone on using it in new ways ever since.

## What you are actually trying to solve

Questions such as “how do we assess application risk continuously?”, “how often should SaaS risk be reviewed?”, “how do we monitor third-party risk?” and “how do we reassess software security risk?” reflect a lifecycle-governance problem rather than a procurement checklist problem.

Behind those questions is usually a practical question from the CIO office, an auditor or a risk committee: *is the risk decision we are relying on still true?* If the honest answer is “we would have to go and find out”, the organisation does not have a current view of application risk. It has an archive of past approvals.

## Evidence and system mechanism

NIST SP 800-137 describes [continuous monitoring](https://www.nist.gov/publications/information-security-continuous-monitoring-iscm-federal-information-systems-and) as ongoing awareness of assets, threats, vulnerabilities and control effectiveness so risk decisions can respond to change. Its stated purpose is to provide ongoing assurance that implemented controls stay aligned with the organisation's risk tolerance, and to supply the information needed to respond in time when they do not.

NIST [Cybersecurity Framework](https://csrc.nist.gov/Projects/cybersecurity-framework/Filters) 2.0 makes the same point in lifecycle language. It includes maintaining inventories of software, services and supplier-provided services as part of risk management, and managing systems, software, services and data throughout their life cycles. Its supply-chain outcomes go further: the risks posed by a supplier and its products are to be understood, recorded, prioritised, assessed, responded to and monitored *over the course of the relationship*, and changes and exceptions are to be assessed for risk impact, recorded and tracked.

The practical mechanism is change: application risk changes when data, integrations, access, ownership, business criticality, vendor conditions or threat information changes. A one-time review captures none of those movements.

## How a sound approval drifts out of date

An illustrative example shows the pattern. A marketing team buys a survey tool and it is approved as low risk because it holds anonymous feedback. A year later, customer success uses it for named client surveys. Then someone connects it to the CRM so responses update account records, and grants the integration broad write access. Finally, the original sponsor leaves. Each step was reasonable on its own. Together, they turn a low-risk tool into a system holding personal data with write access to a core platform—while the risk register still says “low”.

Common drift triggers include:

- new categories of data, especially personal, financial or regulated data;
- new integrations, API tokens or service accounts with broad privileges;
- wider user populations, external users or guest access;
- a process becoming dependent on the application to operate;
- vendor changes such as new AI features, subprocessors, hosting regions or ownership;
- departure or reassignment of the business or technical owner.

## Problem owner and why now

The CIO office, enterprise architecture and IT operations typically own the portfolio process, with security and risk teams contributing controls. The issue becomes urgent at renewal, after major feature or integration changes, during audits or when a once-minor application becomes business-critical.

Other warning signs are quieter: risk ratings that never change, assessments with no review date, accepted risks with no expiry, and applications whose listed owner no longer works in the business. Each suggests the register is recording history rather than current exposure.

## Economic consequence

A stale assessment can leave the organisation paying for a control posture that no longer matches actual use. It can also create audit rework, security exposure, poor renewal decisions and unexpected remediation work late in the lifecycle.

The cost tends to arrive in concentrated bursts. An audit finding forces a rushed review of dozens of applications at once. A renewal is signed because there is no time to evaluate alternatives. An integration that should have been scoped down is discovered only after an incident. Measure the exposure from your own records: the number of applications without a current review, the number of open accepted risks past their intended expiry, and the hours spent on reactive reassessment in the last year.

## Root cause

Risk assessment is treated as a purchase gate rather than a lifecycle control. Application inventories lack review dates and triggers, ownership changes are not captured, and major integration or data changes do not automatically reopen the risk decision.

A second cause is that the information needed to notice change sits in different places: integrations in the identity platform, spend in finance, usage in the vendor console and ownership in somebody's memory. Without a joined-up record, nobody sees the application change shape.

## Practical intervention

1. Assign business and technical owners to each application.
2. Record data sensitivity, integrations, privileges and business criticality.
3. Define reassessment triggers such as major change, renewal, incident or ownership transfer.
4. Use periodic review for applications whose risk can change materially without a discrete project.
5. Track control gaps and accepted risks to closure or expiry.
6. Connect renewal decisions to current usage, value and risk evidence.

Tier the effort. A high-criticality application holding sensitive data deserves a deeper and more frequent review than a low-impact utility. The aim is proportionate, change-driven review—not reassessing everything on the same calendar.

## Trade-offs to manage

Too many triggers create review fatigue, and owners start rubber-stamping. Too few leave material change unexamined. Automated signals, such as a new integration being consented or a data classification changing, are more reliable than relying on people to report their own changes, but they need to be wired into the review workflow to be useful. Periodic reviews also need a lightweight form for low-risk applications, otherwise the programme stalls on volume.

## Diagnostic questions

- When was the application last reviewed?
- Has its data, integration or privilege footprint changed?
- Is the original business owner still accountable?
- What event triggers a fresh assessment?
- Can the renewal decision see current risk and usage together?
- Do accepted risks carry an owner and an expiry date?

## What good looks like

Application risk is maintained as current portfolio information. Material changes trigger review, control gaps have owners and expiry dates, and renewal decisions use present-day architecture, usage and risk context. Owners can explain what changed since the last review, and the register shows a review date that means something.

Ownership is part of the same control. When an owner leaves, the risk decision loses its accountable sponsor; see [what happens when application owners leave without a transfer](/discovery/application-owners-leave-without-transfer/) and [why renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).

## Where Mellorca fits

Mellorca can build application portfolio controls, map risk and ownership data, define lifecycle review triggers and integrate assessment workflows with architecture, procurement and managed operations.

## Commercial next step

Discovery article → application-risk lifecycle diagnostic → portfolio control model → workflow design → implementation → periodic managed review.
