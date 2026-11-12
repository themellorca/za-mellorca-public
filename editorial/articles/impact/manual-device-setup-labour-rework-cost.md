---
hub: impact
record_id: CPS-219
slug: manual-device-setup-labour-rework-cost
title: Manual Device Setup Adds Labour and Repeat Work to Every Rollout
description: A device’s purchase price excludes the work needed to make it usable. Repeating the same configuration by hand can turn each rollout into another demand on technical capacity.
lead: A device’s purchase price excludes the work needed to make it usable. Repeating the same configuration by hand can turn each rollout into another demand on technical capacity.
category: Digital Infrastructure
published_date: 2026-09-06
updated_date: 2026-09-06
tags:
  - Digital Infrastructure
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Cost mechanisms
side_text: Setup labour and configuration rework
side_text_position: above_tags
content_id: CONTENT-000144
commercial_domain: Digital Infrastructure
primary_pain: devices configured manually one at a time
primary_cost_mechanism: setup labour and configuration rework
evidence_basis: original qualitative analysis and transparent input-based cost model; related repository-contained editorial context
sources:
  - Overview of Windows Autopilot | https://learn.microsoft.com/en-us/autopilot/overview
  - SP 800-128, Guide for Security-Focused Configuration Management of Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/128/upd1/final
related:
  - Paying for Server Capacity the Business Does Not Use | /impact/overprovisioned-server-capacity-cost/
  - Slow Computers Turn Small Delays into Paid Waiting | /impact/slow-computers-paid-waiting-cost/
  - Unmonitored Backups Create False Recovery Confidence | /impact/unmonitored-backups-false-recovery-confidence/
---
## The tolerated pain

A technician repeats installation steps, preferences and checks on one computer after another. The method feels flexible, particularly when departments have different needs and new devices arrive individually. The hidden assumption is that remembering and repeating the procedure costs less than maintaining a reusable setup. That assumption should be measured, not taken for granted.

## Why businesses tolerate it

Manual setup rarely looks like a problem because each device gets done. The labour sits inside an existing IT salary or support contract, so it never appears as a separate line. The technician who knows the steps is trusted, and the steps work most of the time. When something is missed, the result arrives later as an ordinary support ticket, disconnected from the setup that caused it. Nobody adds the two together.

## Operational consequence

Manual repetition makes completion depend on both the procedure and the person applying it. Missing steps may appear later as support requests, while undocumented exceptions make comparison difficult. Separate active technician handling from unattended installation time. A device can spend a long time preparing without consuming the same amount of labour, and a quick handover can still leave unfinished work for the user.

The less visible consequence is drift. Two laptops prepared a month apart by different people rarely end up identical. NIST's guidance on security-focused configuration management treats managing and monitoring configurations as a way to achieve adequate security and minimise organisational risk while still supporting the business functions a system serves. A setup that varies by technician is hard to manage in that sense, because there is no agreed baseline to compare against.

## Warning signs

- New starters routinely log tickets in their first week for missing applications, printers or shared folders.
- Setup knowledge sits with one or two people, and rollouts slow when they are away.
- Nobody can say which settings a standard device should have without opening one.
- Device refreshes are planned around technician availability rather than business need.
- Fixes discovered on one machine are not reliably applied to the next.

## Financial consequence

Over a defined rollout, multiply active setup hours by the loaded technical labour rate. Add separately recorded correction and user-interruption hours at their respective rates. Keep purchasing and delivery costs outside this setup estimate unless the intervention changes them. Record different device or role classes separately, since a specialist workstation may legitimately need more preparation than a standard office device.

## An illustrative cost model

Every figure below is an **illustrative assumption**, not a benchmark or a measured result. Replace each one with your own records.

| Input (illustrative) | Manual setup | Reusable setup |
| --- | --- | --- |
| Standard devices in the rollout | 120 | 120 |
| Active technician time per device | 2.5 hours | 0.75 hours |
| Devices needing follow-up correction | 30 | 10 |
| Technician correction time per affected device | 1 hour | 1 hour |
| User time lost per affected device | 1.5 hours | 1.5 hours |
| Design and testing of the reusable baseline | none | 60 hours |
| Baseline maintenance during the period | none | 20 hours |
| Tooling cost attributed to this rollout | none | R30,000 |

Assume an illustrative loaded technician rate of R450 per hour and an illustrative loaded user rate of R350 per hour.

**Manual setup:**

- Setup labour: 120 × 2.5 hours = 300 hours × R450 = R135,000
- Correction labour: 30 × 1 hour = 30 hours × R450 = R13,500
- User interruption: 30 × 1.5 hours = 45 hours × R350 = R15,750
- **Total: R164,250**

**Reusable setup:**

- Design and testing: 60 hours × R450 = R27,000
- Setup labour: 120 × 0.75 hours = 90 hours × R450 = R40,500
- Correction labour: 10 hours × R450 = R4,500
- User interruption: 10 × 1.5 hours = 15 hours × R350 = R5,250
- Maintenance: 20 hours × R450 = R9,000
- Tooling: R30,000
- **Total: R116,250**

In this illustration the reusable approach costs R48,000 less over the rollout, and technician time falls from 330 hours to 180 hours. Those 150 hours are released capacity, not cash, unless the business actually spends less as a result.

The same arithmetic shows where the answer flips. Per device, the illustrative manual cost is R1,368.75 and the reusable variable cost is R418.75, a difference of R950. The reusable approach carries R66,000 of fixed cost (design, maintenance and tooling). Dividing R66,000 by R950 gives roughly 70 devices. Below that volume, under these assumptions, a well-maintained checklist is cheaper. That is a useful result in its own right.

## Compare recurring and reusable work

A reusable configuration also costs money: design, testing, maintenance, exception handling and any required tooling. Compare these costs over the same device volume and planning period with the observed manual workload. Avoid assuming that automation removes acceptance testing or every exception. Released technical hours become cash savings only if they change spending; otherwise they create capacity that must be assigned useful work.

Platform capabilities make the reusable option more practical than it once was. Microsoft describes Windows Autopilot as a set of technologies for setting up and pre-configuring new devices, transforming the manufacturer's preinstalled Windows into a business-ready state by applying settings and policies and installing apps, rather than maintaining custom images for every model. That is one example; the economic test above applies whichever method is used.

## Secondary consequences

Inconsistent setup makes later support slower, because technicians cannot assume a known starting point. It weakens security assurance when required controls depend on someone remembering them. It also delays productive work for new employees, which links device preparation to the wider access problem described in [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/).

## Commercial urgency

A planned refresh or repeated onboarding demand is a good point to inspect the economics because the same steps are about to recur. Prioritise high-volume, stable configurations with measurable correction effort. If device requirements change constantly or volumes are low, a maintained checklist may be more economical than a large deployment project.

## What better looks like

Each common role has a defined baseline. Devices reach that baseline the same way every time, with exceptions recorded rather than improvised. First-week tickets fall, and the setup can be repeated by someone other than its original author.

## Resolution

Document the minimum accepted setup for each common role, separating stable baseline requirements from legitimate exceptions. Trial a repeatable preparation method on a small representative group. Check application access, required controls and the user's real task before handover. Record exceptions explicitly and maintain a fallback when preparation fails. Assign an owner to update the baseline when business requirements change.

## Verify the improvement

Compare active technician minutes, first-use failures and follow-up tickets across comparable devices. Include the time spent maintaining the reusable method so that savings are not displaced into an invisible support task. This article concerns device configuration work; employment-driven account provisioning is a related but separate process. The commercial result is lower repeat handling with an accepted, usable setup.

## The economic meaning

Manual setup is not wrong; it is a cost that should be chosen deliberately. Where volume is high and requirements are stable, repeating the same work by hand pays for the same labour again and again, plus the correction it generates.

## Method note

This is a diagnostic cost model, not a client case study or an industry benchmark. All rand values, times and volumes above are illustrative assumptions chosen to show the arithmetic, and no numerical loss or saving is asserted for any real organisation. References to NIST configuration-management guidance and Microsoft documentation describe principles and current capabilities; they do not establish costs. [Related discovery: employee access provisioning](/discovery/why-new-employees-wait-for-system-access/).

Device preparation is one part of a wider onboarding cost, set out in [the cost of new employees waiting for equipment](/impact/new-employees-without-equipment-onboarding-cost/). Drift between machines is a form of [uncontrolled configuration change](/insights/why-uncontrolled-configuration-changes-create-operational-risk/), so a maintained baseline matters beyond the rollout itself. Before committing to a reusable method, [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/) helps test the break-even point with your own figures.
