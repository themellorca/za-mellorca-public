---
hub: impact
record_id: CPS-149
slug: security-products-without-basic-controls
title: When security spend runs ahead of basic controls
description: Buying more security products without basic identity, patching, backup and ownership controls can raise cost without reducing your most obvious exposure.
lead: Security tools can be necessary. They cannot compensate indefinitely for weak identity control, overdue patching, unmanaged access, untested recovery and unclear operational ownership.
category: Security Economics
published_date: 2026-09-05
updated_date: 2026-09-05
byline_category: Digital Infrastructure
tags:
  - Security Spend
  - Controls
  - Risk
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_title: Cost mechanisms
sources:
  - Four Cybersecurity Essentials for SLTTs - CISA | https://www.cisa.gov/resources-tools/resources/four-cybersecurity-essentials-sltts
  - Cyber Essentials | https://www.ncsc.gov.uk/cyberessentials/overview
  - Cross-Sector Cybersecurity Performance Goals - CISA | https://www.cisa.gov/cross-sector-cybersecurity-performance-goals
related:
  - Not knowing who still has access to your systems | /impact/uncontrolled-system-access-financial-risk/
  - When every process problem becomes another software purchase | /impact/buying-software-for-every-process-problem/
  - Paying the same supplier invoice twice: The direct cost of weak controls | /impact/duplicate-supplier-invoice-payments-weak-controls-cost/
---
## The tolerated pain

Organisations sometimes respond to each security concern with another product while basic controls remain inconsistent. A phishing incident leads to an email filtering add-on. An audit question leads to a monitoring platform. A news story about ransomware leads to an endpoint upgrade. The technology stack grows, but administrators still share accounts, critical systems remain unpatched or recovery is assumed rather than tested.

This pattern is easy to understand. Buying a product is a visible, bounded decision with a supplier, a price and a go-live date. Fixing the basics is slower and less glamorous: it means chasing exceptions, changing habits, retiring shared logins and testing restores that may fail. A purchase can be approved in a meeting. Control maturity has to be built week by week, and someone has to own it.

The result is a business that can describe its security tools in detail but cannot say with confidence whether every administrator uses multifactor authentication, which servers are behind on updates or whether last month's backup would actually restore.

## Why the basics matter more than the product count

Public guidance is consistent on this point. CISA's [Four Cybersecurity Essentials](https://www.cisa.gov/resources-tools/resources/four-cybersecurity-essentials-sltts) focuses on phishing awareness, strong passwords, multifactor authentication and keeping software updated, and recommends starting MFA with administrator accounts and staff who handle sensitive data. The UK NCSC's [Cyber Essentials](https://www.ncsc.gov.uk/cyberessentials/overview) scheme is built around five technical controls: firewalls, secure configuration, security update management, user access control and malware protection. The NCSC describes most cyber attacks as basic in nature, comparable to someone trying the front door to see whether it is locked.

CISA's [Cross-Sector Cybersecurity Performance Goals](https://www.cisa.gov/cross-sector-cybersecurity-performance-goals) go a step further by rating each goal for cost, impact and ease of implementation, specifically so that smaller organisations can prioritise limited, high-value actions before expanding their security programme. None of these sources argues that products are unnecessary. They argue that the foundation comes first.

## Operational consequence

More products create alerts, licences, integrations and configuration that also need owners. If foundational controls are weak, security teams can spend more time operating tools without proportionately reducing exposure.

The symptoms are usually recognisable:

- **Alert fatigue:** several platforms raise overlapping alerts about the same events, and the team learns to skim rather than investigate.
- **Partial deployment:** agents are installed on most devices but not all, and nobody tracks the gap.
- **Configuration drift:** products are deployed with default settings and never tuned, so they generate noise without enforcing policy.
- **Ownerless platforms:** a tool bought by a previous IT manager or supplier keeps renewing, but nobody reviews its output.
- **Untested recovery:** backups are reported as successful, but restores are rarely rehearsed. See [the cost of backups that have never been tested](/impact/backups-never-tested-restore-financial-cost/).

Each of these consumes time and money while leaving the most common routes into the business, such as a reused password on an administrator account, open. The related pain of [accounts without MFA](/impact/accounts-without-mfa-financial-risk/) is often the clearest example.

## Financial consequence

> security control cost = product spend + implementation + administration + unresolved residual exposure

The last term cannot be converted into a credible currency value without business-specific scenarios. Instead, track whether the controls associated with material risks are actually implemented and tested. The first three terms, however, can be calculated from your own invoices and timesheets, and they are often larger than leaders expect.

### An illustrative cost model

The figures below are **illustrative assumptions** for a mid-sized business. They are not benchmarks. Replace them with your own contracts and time records.

| Item | Illustrative assumption | Annual cost |
| --- | --- | --- |
| Security product licences | 7 products × R180,000 average per year | R1,260,000 |
| Platform administration | 0.6 of a full-time role × R900,000 fully loaded | R540,000 |
| Alert triage | 400 alerts a week × 3 minutes = 20 hours a week × 48 weeks = 960 hours × R450 an hour | R432,000 |
| **Visible annual cost** |  | **R2,232,000** |

Now compare that with the illustrative cost of closing the foundational gaps:

| Basic control | Illustrative assumption | First-year cost |
| --- | --- | --- |
| MFA rollout for all administrator and remote accounts | Fixed project cost | R120,000 |
| Disciplined patch management | 0.2 of a full-time role × R900,000 | R180,000 |
| Quarterly restore tests | 4 tests × 16 hours × R450 an hour | R28,800 |
| **Total** |  | **R328,800** |

In this example, closing the basics costs about 14.7% of the existing visible security spend (R328,800 ÷ R2,232,000). If a review found that two of the seven products substantially duplicated each other's capability, retiring them would remove 2 × R180,000 = R360,000 a year in licences alone, which would more than fund the foundational work. The arithmetic is only an example, but the shape is common: the money is often already there, spent in the wrong order.

## Urgency

> **Commercial trigger**
> If the business can list security products more easily than it can prove MFA coverage, patch discipline, access ownership and recoverability, spend may be stronger than control maturity.

The trigger becomes urgent when one or more of the following is true:

- a cyber insurance renewal or customer due-diligence questionnaire asks for evidence of MFA, patching and backup testing that the business cannot produce quickly;
- security spend has risen year on year, yet the same audit findings keep reappearing;
- administrator accounts are shared, or former staff and suppliers still hold privileged access;
- a new product is being proposed to solve a problem that a basic control would address.

## Resolution

1. Map material business risks to required controls.
2. Close foundational identity, patching and recovery gaps first.
3. Measure control coverage and exceptions.
4. Remove or consolidate tools that duplicate capability.
5. Assign operational owners for every retained control platform.
6. Test whether controls work, not merely whether licences exist.

In practice, this starts with a short inventory: every security product, what it costs, who owns it, what it is meant to prevent and whether it is fully deployed. Alongside it, a coverage report for the basics: the percentage of accounts with MFA, the number of systems outside patch policy, the date of the last successful restore test. Those two lists, side by side, usually show where the next rand should go. A [Digital Systems Audit](/services/digital-systems-audit/) is one structured way to produce them.

## Bottom line

Security maturity is not measured by product count. It is measured by the organisation's ability to prevent, detect, contain and recover from relevant failures. When the basics are weak, additional products add cost and operating burden faster than they reduce exposure. Fixing identity, patching, access and recovery first makes every later security investment more effective, and frequently pays for itself by revealing tools the business no longer needs.
