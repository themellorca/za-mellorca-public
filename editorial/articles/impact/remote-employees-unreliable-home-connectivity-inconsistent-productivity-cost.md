---
hub: impact
record_id: CPS-187
slug: remote-employees-unreliable-home-connectivity-inconsistent-productivity-cost
title: When Home Internet Becomes the Office Network: The Cost of Unreliable Remote Work
description: Remote staff doing critical work over patchy home Wi-Fi, shared bandwidth and uncertain backup power produce frozen calls, failed uploads and missed deadlines. The business pays for the gap.
lead: Remote staff doing critical work over patchy home Wi-Fi, shared bandwidth and uncertain backup power produce frozen calls, failed uploads and missed deadlines. The business pays for the gap.
category: IT Infrastructure
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: IT Infrastructure
commercial_domain: IT Infrastructure
primary_pain: Remote employees rely on unreliable, unmanaged home connectivity for calls, uploads and access to critical systems
primary_cost_mechanism: Fragmented lost time from reconnecting and retrying, weaker client conversations, uneven performance misread as people problems, support time on equipment the business does not control, and unnecessary trips to the office
sources:
  - https://learn.microsoft.com/en-us/microsoftteams/prepare-network | https://learn.microsoft.com/en-us/microsoftteams/prepare-network
  - https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles | https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles
summary: Remote staff doing critical work over patchy home Wi-Fi, shared bandwidth and uncertain backup power produce frozen calls, failed uploads and missed deadlines. The business pays for the gap.
layout: plain
---
## The call that kept dropping

A financial adviser working from home in Johannesburg is halfway through a client review when her video freezes. She rejoins on her phone, loses the shared screen, and finishes the meeting with the client looking at a still image. Later that afternoon, a large document upload to the firm's client portal fails twice. She drives to the office to finish it. None of this shows up in a report. The business simply gets less from her day, and the client gets a weaker experience.

Multiply that by a team of fifteen people who work from home two or three days a week, and the cost becomes material.

## Why home connectivity is now a business system

When staff work remotely, their home connection becomes part of the business network. It carries client calls, access to accounting and CRM systems, file transfers and sometimes telephony. Yet in most smaller businesses it is selected, paid for, configured and supported by the employee, with no standard and no visibility.

Real-time work is particularly sensitive. Microsoft's guidance on [preparing a network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) gives recommended bandwidth for video meetings of 2,500 kbps up and 4,000 kbps down per endpoint, with a minimum of 150 kbps up and 200 kbps down. It also notes that Wi-Fi networks are not necessarily designed for real-time media and that VPNs often add latency and jitter, recommending that Teams traffic bypass the VPN. Its broader [network connectivity principles](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles) describe homes, hotels and coffee shops as uncontrolled locations and stress reducing latency between the user and the nearest service entry point.

A home connection may meet the headline speed and still fail these needs because of a congested router, a weak Wi-Fi signal two rooms away, other people streaming video, or a power cut that takes the fibre router offline.

## Where the productivity goes

The following figures are illustrative and show how to estimate the cost for your own team.

### Lost time in fragments

Reconnecting to calls, retrying uploads, waiting for slow systems and switching to a phone hotspot each take a few minutes. If a remote employee loses 30 minutes on an average remote day, and fifteen staff work remotely 2.5 days a week, that is close to 19 hours a week. At a loaded cost of R350 an hour, roughly R340,000 a year.

### Lower-quality client contact

Frozen video and broken audio in client meetings reduce confidence. In advisory, sales and support roles, the quality of the conversation is the product.

### Uneven performance that is hard to manage

Two people doing the same job from different homes may have very different working conditions. Managers see the difference in output but not the cause, and may misread a connectivity problem as a performance problem.

### Support time and workarounds

Internal IT or an outside provider spends time diagnosing home routers it does not control. Staff come into the office for tasks they could do remotely, losing commuting time. The broader cost of slow support is covered in [routine IT support delays](/impact/routine-it-support-delays-productivity-cost/).

## Why the problem persists

Remote work arrangements were often set up quickly and never revisited. Responsibility for connectivity sits in a grey area: the business expects staff to be productive at home but has not defined what that requires. The result resembles the office problems described in [video calls freezing and dropping](/impact/video-calls-freezing-dropping-communication-cost/), except that the business has even less visibility into the cause.

In South Africa, power interruptions add a further factor. A fibre or wireless router without backup power stops when the electricity does, even if the employee's laptop battery lasts.

## What a remote work standard can include

- **A minimum connection specification** for roles that depend on calls and large uploads, based on the applications the business actually uses.
- **A backup connection**, such as a business-paid mobile data allowance or a second line for critical roles.
- **Backup power for network equipment**, typically a small router UPS.
- **Home network guidance**: router placement, wired connection for the work device where possible, and using the 5 GHz band.
- **Business-managed devices**, so that the work laptop is not shared with the household. The risks of personal equipment are covered in [staff using personal computers for company work](/impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/).
- **Call quality monitoring** using tools such as the Teams call quality dashboard, so problems can be seen per user.
- **An allowance or contribution** where the business expects a higher standard than an ordinary household connection.

## Separating connectivity from other causes

Not every slow day is the internet's fault. Old laptops, too many browser tabs, background updates and poorly configured VPN software produce similar symptoms. A simple test helps: if the same person has the same problem in the office, the cause is probably the device or the application; if the problem only appears at home, it is likely to be the connection or the home network. Recording which applies prevents the business from spending money on a fix that does not address the real cause.

## Deciding what is worth paying for

Not every role needs the same standard. A finance clerk who mainly works in a cloud accounting package needs reliability more than speed. A salesperson running video demonstrations needs both. Start with the roles where lost connectivity directly affects revenue or client experience, and compare the cost of a backup connection and router UPS with the estimated cost of lost time. The office equivalent of this decision is discussed in [relying on a single internet connection](/impact/single-internet-connection-business-downtime-risk/).

## Practical next actions

1. **Survey remote staff for two weeks.** Ask them to log dropped calls, failed uploads and time lost to connectivity, with a rough duration.
2. **Check call quality data.** If you use Teams or a similar platform, review per-user call quality reports for patterns.
3. **Define a minimum standard by role.** Base it on the applications each role uses, not on headline speeds alone.
4. **Provide backup power for routers.** Start with staff in client-facing and time-critical roles.
5. **Fund a backup connection for critical roles.** A mobile data allowance is often enough for calls and email during an outage.
6. **Review VPN and network settings.** Make sure real-time traffic is not forced through a central VPN unnecessarily.

Remote work does not have to mean unreliable work. Most of the losses come from home connections that nobody specified, monitored or backed up, and many of the fixes cost less per person each month than the time currently being lost.
