---
hub: discovery
record_id: DISC-316
slug: patch-exceptions-that-never-expire
title: Why patch exceptions stay open long after anyone remembers the reason
description: Systems excluded from patching for good reason often stay excluded for years. How to give every patch exception an owner, an expiry date and an exit plan.
lead: Servers and applications excluded from patching for a good reason often stay excluded for years. Why patch exceptions drift into permanent risk, and how to give each one an owner, an expiry date and an exit plan.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or infrastructure lead, with the security lead and the business owner of each excepted system
budget_owner: Chief information officer or chief operating officer
sources:
  - SP 800-40 Rev. 4, Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology - CSRC | https://csrc.nist.gov/pubs/sp/800/40/r4/final
  - Vulnerability management guidance | https://www.ncsc.gov.uk/collection/vulnerability-management/guidance
  - Exceptions in Microsoft Defender Vulnerability Management - Microsoft Learn | https://learn.microsoft.com/en-us/defender-vulnerability-management/tvm-exception-overview
related:
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - Why development environments keep running after projects stop | /discovery/development-environments-keep-running-after-projects-stop/
  - Why certificates expire when nobody clearly owns their renewal | /discovery/certificates-expire-because-nobody-owns-renewal/
  - Security exceptions have no clear compensating controls | /discovery/why-every-security-exception-needs-a-named-compensating-control-before-renewal/
summary: Servers and applications excluded from patching for a good reason often stay excluded for years. Why patch exceptions drift into permanent risk, and how to give each one an owner, an expiry date and an exit plan.
layout: plain
---
In 2021 a server running the payroll interface was excluded from monthly patching. The software vendor had warned that an operating system update might break the interface, and an upgrade was planned for the following year. The upgrade was postponed, the IT manager who approved the exclusion left, and the server was moved unchanged to the cloud during a migration. Four years later it still sits outside the patching schedule, now reachable from more places than before, and nobody can find who agreed to that.

Patch exceptions are often reasonable when they are granted. The problem is that they rarely end. Without an owner, an expiry date and an exit plan, a temporary exception becomes permanent risk.

## The problem in plain language

A patch exception is a decision not to apply updates to a system, usually because patching could break something, the vendor has not certified the update, or the system is due to be replaced. Signs that exceptions are not being managed include:

- a list of excluded systems that only grows;
- exceptions with no end date or review date;
- approvers who have left the business;
- no record of what protects the system in the meantime;
- unsupported operating systems or applications still running in production;
- exceptions carried unchanged into new platforms during migrations.

## What you are actually trying to solve

The questions usually asked are how to manage patching exceptions, what to do with servers that cannot be patched, how to document risk acceptance for unpatched systems, or how long a patch exception should last. IT managers want a smaller list of unpatched systems. Security leads want each one justified and protected. Auditors want evidence that someone with authority accepted the risk. The underlying need is a lifecycle: every exception is time-limited, owned, protected and either closed or deliberately renewed.

## Evidence and system mechanism

### Patching is preventive maintenance

NIST's [Guide to Enterprise Patch Management Planning](https://csrc.nist.gov/pubs/sp/800/40/r4/final) (SP 800-40 Rev. 4) frames patching as preventive maintenance that helps prevent compromises, data breaches, operational disruptions and other adverse events, and encourages organisations to treat it as a business-wide strategy rather than an IT chore. An exception is therefore a decision to skip maintenance, and it carries risk for as long as it lasts.

### Exploited vulnerabilities come with deadlines

The US Cybersecurity and Infrastructure Security Agency's [Binding Operational Directive 22-01](https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities), which applies to US federal agencies, requires known exploited vulnerabilities to be fixed within set timeframes, two weeks for most recent ones, and requires assets that cannot be fixed in time to be removed from the network. It also requires procedures that assign responsibility and track progress. The directive does not apply to South African businesses, but it is a clear benchmark: an open-ended exception for an actively exploited flaw is not an accepted practice.

### Not patching is a senior risk decision

The UK National Cyber Security Centre's [vulnerability management guidance](https://www.ncsc.gov.uk/collection/vulnerability-management/guidance) sets updating as soon as possible, ideally automatically, as the default. It accepts that there can be legitimate reasons not to update, but states that the decision not to is a senior-level risk decision that should fit the organisation's wider risk management. Microsoft's [exceptions feature in Defender Vulnerability Management](https://learn.microsoft.com/en-us/defender-vulnerability-management/tvm-exception-overview) follows the same logic: each exception is recorded with a stated justification, such as an alternate mitigation, accepted risk or planned remediation.

## Problem owner and why-now trigger

The IT manager or infrastructure lead owns the patching process and the exception register. The business owner of each excepted system, such as the payroll or production manager, should be the named risk owner, because the risk sits with their service. A senior executive, usually the chief information officer or chief operating officer, should approve exceptions above an agreed risk level and holds the budget for replacements.

Cloud migration is a common trigger. Lifting old servers into the cloud can carry their exceptions along and expose them more widely, while also offering a natural point to replace or retire them. Other triggers include a vulnerability being actively exploited, an audit or insurer questionnaire, a security incident involving an unpatched system, or a vendor ending support.

## Economic consequence

- **Breach exposure.** Unpatched systems are a common entry point, and one compromised server can reach others.
- **Insurance and audit friction.** Open-ended exceptions are hard to defend to auditors and cyber insurers.
- **Growing replacement cost.** The longer a system stays unpatched, the larger and riskier the eventual upgrade.
- **Compensating control cost.** Extra isolation and monitoring for excepted systems costs money every month they remain.
- **Management time.** The same exceptions are rediscovered and re-explained at every review.

## Root cause

- **No expiry.** Exceptions are granted without an end date or review trigger.
- **Owner is IT, not the business.** The service owner who could fund a fix is not accountable for the risk.
- **Exit depends on another project.** The planned upgrade is delayed and the exception silently extends.
- **Exceptions live in emails or spreadsheets.** They are not linked to the systems or to scan findings, a problem covered in [security findings tracked in spreadsheets after scans](/discovery/security-findings-tracked-in-spreadsheets-after-scans/).
- **Risk not graded.** All exceptions are treated alike, whatever the system's importance; see [why vulnerability severity needs business criticality](/discovery/why-vulnerability-severity-needs-business-criticality/).

## Practical intervention

1. **Build an exception register.** For each excepted system: reason, risk owner, approver, compensating controls, expiry date and exit plan.
2. **Set maximum durations.** For example, 90 days by default, shorter for internet-facing systems or actively exploited vulnerabilities, with renewal requiring fresh approval.
3. **Grade by risk.** Higher-risk exceptions need senior approval and stronger compensating controls.
4. **Require compensating controls.** Network isolation, restricted access, extra monitoring and, where available, virtual patching.
5. **Link exit plans to funded work.** An exception that depends on an upgrade should reference that project and its date.
6. **Review monthly.** Expired exceptions are closed, renewed with approval, or escalated.
7. **Use migrations to clear the list.** Do not move excepted systems unchanged; replace, upgrade, isolate or retire them as part of the move.

Linking exceptions to the decisions behind them is discussed in [why security architecture decisions need linked risk exception records](/discovery/why-security-architecture-decisions-need-linked-risk-exception-records/).

### Trade-offs

Some systems genuinely cannot be patched quickly, such as equipment controllers certified by a vendor. For these, longer exceptions are acceptable if isolation is strong, monitoring is in place and the risk owner renews the decision at each review.

### An illustrative example

Illustrative: a Polokwane food processor with about 250 staff found 23 servers excluded from patching, nine on unsupported operating systems, with exceptions dating back up to six years. It created a register, named the production and finance managers as risk owners for their systems, set a 90-day default, and used its cloud migration to replace six servers and isolate the rest behind restricted network rules. Within a year the list fell to five, each with a dated exit plan.

## Diagnostic questions

- How many systems are excluded from patching today, and since when?
- Does each exception have an expiry date and a business risk owner?
- What protects each excepted system in the meantime?
- Which exceptions depend on a project that has been delayed?
- Will your cloud migration carry any excepted systems across unchanged?

## What good looks like

Patching is the default. Every exception is recorded with a reason, a business risk owner, compensating controls, an expiry date and an exit plan. Exceptions are reviewed monthly and either closed or renewed with fresh approval. Senior leaders see the highest-risk exceptions. Migrations and upgrades are used to shrink the list, not carry it forward.

## Where Mellorca fits

Mellorca's [managed digital operations](/services/managed-digital-operations/) service can run patching, maintain the exception register and the monthly review. Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can isolate, upgrade or retire excepted systems, including as part of a cloud migration.

## Method note

This article draws on NIST, CISA and NCSC guidance; the CISA directive applies to US federal agencies and is cited as a benchmark only. Suitable exception periods depend on each system's exposure and business importance. The example is illustrative rather than a client case.
