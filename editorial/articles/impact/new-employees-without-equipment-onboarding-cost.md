---
hub: impact
record_id: CPS-206
slug: new-employees-without-equipment-onboarding-cost
title: New Employees Without Equipment Create Paid Onboarding Delay
description: When new employees start before their equipment is ready, payroll begins while productive capacity is still blocked by avoidable provisioning delay.
lead: A start date can be confirmed before the laptop, peripherals and standard setup are ready. The result is a payroll cost that begins before the employee has the tools required to perform the job.
category: Digital Infrastructure
published_date: 2026-09-07
updated_date: 2026-09-07
tags:
  - Digital Infrastructure
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Cost mechanisms
side_text: Blocked payroll capacity, urgent procurement and support rework
side_text_position: above_tags
content_id: CONTENT-000164
commercial_domain: Digital Infrastructure
primary_pain: employees starting without required equipment
primary_cost_mechanism: blocked payroll capacity, urgent procurement and support rework
evidence_basis: qualitative analysis and transparent input-based cost model; no universal onboarding benchmark asserted
sources:
  - Overview of Windows Autopilot | https://learn.microsoft.com/en-us/autopilot/overview
  - Automated Device Enrollment and device management | https://support.apple.com/guide/deployment/automated-device-enrollment-management-dep73069dd57/web
related:
  - Slow Computers Turn Small Delays into Paid Waiting | /impact/slow-computers-paid-waiting-cost/
  - Unmonitored Backups Create False Recovery Confidence | /impact/unmonitored-backups-false-recovery-confidence/
  - Paying for Server Capacity the Business Does Not Use | /impact/overprovisioned-server-capacity-cost/
---
## The tolerated pain

Hiring, procurement and IT often operate on separate timelines. A manager confirms the start date, a device request arrives late, stock is unavailable, or configuration begins only after the employee has already started. Each team may have completed its own task, yet the new employee still cannot perform the role on the day they begin being paid.

The pain is tolerated because it looks like a one-off. A late laptop is explained by a supplier delay, a missed email or a busy week. Nobody adds up how often it happens, and the employee is usually too new to complain. Yet start dates are typically known weeks in advance, which makes the delay one of the most preventable costs in the business.

## Why the timelines separate

The underlying issue is that onboarding is treated as a series of handoffs rather than one process with one deadline. HR records the hire. The manager is expected to tell IT. IT waits for a request before ordering. Procurement waits for an approval. The device arrives and then waits for imaging, accounts and software. Each step has its own queue, and none of the queues is driven by the start date.

Device deployment technology has moved on, but it only helps if the process feeds it in time. Microsoft describes Windows Autopilot as a set of technologies that pre-configure new devices so they are ready for productive use, with the end user needing only to connect to a network and verify their credentials. Apple's Automated Device Enrollment lets organisations configure and manage company-owned devices from the moment they are taken out of the box. Both remove much of the manual build effort. Neither can help if the device has not been ordered, registered or assigned before the person starts.

## Operational consequence

The delay does more than inconvenience the new starter. Managers improvise temporary work, colleagues lend devices, IT performs urgent setup and access or configuration steps may be repeated when the permanent device arrives. That turns one provisioning failure into several small pieces of rework:

- **Improvised work:** the manager spends time finding reading, shadowing or paper tasks that do not need a system.
- **Borrowed devices:** a colleague's laptop or a shared machine is used, often with someone else's access, which creates its own control problem.
- **Urgent setup:** IT drops planned work to configure a device by hand, sometimes twice, once temporarily and once properly.
- **Repeated access steps:** accounts, multi-factor enrolment and application permissions are set up on the temporary device and then repeated.
- **A weak first impression:** the new employee learns early that the organisation's processes are improvised.

The temporary access path deserves particular attention. Shared or borrowed credentials make it harder to know who did what, and temporary accounts are easily forgotten, which links this pain to the risks described in [uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).

## Financial consequence

Estimate blocked capacity using the actual hours in which the employee could not perform planned work × loaded employment cost. Add documented urgent procurement premiums and support rework separately. Exclude useful induction, shadowing or training that would have happened anyway; counting all onboarding time as waste would overstate the loss.

### An illustrative rand cost model

Every figure below is an **illustrative assumption** for a hypothetical business. None is a benchmark.

| Illustrative assumption | Value |
| --- | --- |
| Hires per year | 40 |
| Share of hires starting without a ready device | 25% (10 hires) |
| Working days of delay per affected hire | 3 |
| Of which, useful induction that would have happened anyway | 1 day |
| Blocked hours per affected hire (2 days × 8 hours) | 16 |
| Loaded employment cost of the new employee per hour | R280 |
| Urgent procurement or courier premium per affected hire | R1,500 |
| IT rework per affected hire: 3 hours at R400 | R1,200 |
| Manager and colleague time per affected hire: 4 hours at R450 | R1,800 |

> **Annual illustrative exposure**
> blocked capacity: 10 × 16 hours × R280 = R44,800
> urgent procurement: 10 × R1,500 = R15,000
> IT rework: 10 × R1,200 = R12,000
> manager and colleague time: 10 × R1,800 = R18,000
> total: **R89,800 per year**

That is roughly R8,980 for each late start. If the business doubles hiring to 80 people a year and the same 25% failure rate persists, the illustrative exposure doubles to R179,600. The model deliberately leaves out harder-to-measure effects such as slower time to full productivity, early attrition or the security exposure of borrowed devices. The point of the model is not the total; it is that every line can be checked against your own hiring records, invoices and service desk tickets.

## Commercial urgency

The strongest trigger is recurrence: start dates are known in advance, yet equipment readiness still depends on last-minute coordination. The problem becomes more expensive as hiring volume grows because the same manual dependency repeats for every employee. Other triggers include a hiring plan for a new team or site, a move to remote or hybrid starters who need devices shipped, long supplier lead times for particular models, and a service desk that regularly logs "new starter urgent" tickets.

## Resolution

Define a single onboarding trigger that creates procurement, build, access and acceptance tasks from the confirmed start date. In practice that means:

1. **One trigger:** the confirmed hire in the HR or recruitment system automatically opens every downstream task with a due date worked back from day one.
2. **Role-based equipment bundles:** standard device, peripherals, software and access per role, so nobody has to specify the order from scratch.
3. **Stock and lead-time visibility:** a small buffer of standard devices and known supplier lead times, so ordering happens early enough.
4. **Zero-touch deployment:** devices registered with the organisation's management service before shipping, so configuration happens when the employee signs in. Our analysis of [manual device setup](/impact/manual-device-setup-labour-rework-cost/) covers the separate labour cost of building devices by hand.
5. **A readiness checkpoint:** a check several working days before the start date that the device, accounts and access are ready.
6. **Visible exceptions:** when something will be late, the manager knows early enough to plan a deliberate workaround rather than an emergency.

The same trigger can drive the reverse process at departure, recovering devices and removing access, which closes the loop described in our analysis of [former employees retaining system access](/impact/former-employees-retaining-system-access/). Connecting HR events to IT tasks is a typical [Business Automation](/services/business-automation/) opportunity.

## The economic meaning

The cost is not the laptop. It is paying for capability that cannot yet be used, plus the extra coordination created by a preventable late start in the provisioning process. Because start dates are known in advance, this is one of the few operational costs that can be removed almost entirely by sequencing work that already has to happen.

## Method

This article uses an input-based capacity model rather than a generic onboarding-cost benchmark. Financial figures are illustrative and should be replaced with your own hiring volumes, employment costs and procurement records before making a decision.
