---
hub: discovery
record_id: DISC-396
slug: remote-work-continuity-assumptions-that-nobody-has-tested
title: Everyone can work from home, until everyone has to at once
description: Continuity plans often say staff will work remotely if the office is unavailable. Few businesses have checked whether access, capacity, devices and support hold up when the whole company connects at once.
lead: Continuity plans often say staff will work remotely if the office is unavailable. Few businesses have checked whether access, capacity, devices and support hold up when the whole company connects at once.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: IT manager or business continuity lead responsible for remote access and the continuity plan
budget_owner: COO, CIO or managing director
sources:
  - About Azure VPN Gateway | https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways
  - SP 800-46 Rev. 2, Guide to Enterprise Telework, Remote Access, and Bring Your Own Device (BYOD) Security - CSRC | https://csrc.nist.gov/pubs/sp/800/46/r2/final
  - SP 800-84, Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities - CSRC | https://csrc.nist.gov/pubs/sp/800/84/final
related:
  - Recovery plans list systems but not the business services they support | /discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/
  - Who tells customers what during an outage? Fix it before the next one | /discovery/who-tells-customers-what-during-an-outage/
  - Recovery tests run in quiet weeks hide the capacity gaps of peak season | /discovery/recovery-tests-in-quiet-weeks-hide-peak-capacity-gaps/
summary: Continuity plans often say staff will work remotely if the office is unavailable. Few businesses have checked whether access, capacity, devices and support hold up when the whole company connects at once.
layout: plain
---
A fire in the building next door closes a professional services firm's office for a week. The continuity plan says: staff work from home. On Monday morning, 60 people try to connect. The remote access gateway was sized for the dozen who usually work remotely and starts refusing connections after 30. Several staff have desktops, not laptops, and those desktops are inside the closed building. The accounting package only runs on a server in the office, reached through a remote desktop session that one person set up years ago. The IT support line is one person's mobile number. By Wednesday the firm is working, but only after three days of improvisation.

## The problem in plain language

"Staff will work remotely" is one of the most common lines in a continuity plan, and one of the least tested. It assumes several things are true at once: that every critical role has a suitable device outside the office, that remote access can carry the whole workforce at the same time, that every critical application can be reached from outside, that people can sign in when their usual device or phone is unavailable, and that support can cope with a surge of requests. Normal hybrid working proves none of these, because on a normal day only some people are remote and the office is still there as a fallback.

## What the buyer is actually trying to solve

The IT manager or operations director asking this question usually has just been through an incident, or is preparing for an audit or insurance renewal that asks how remote working is tested. They want to know which assumptions to check, how to test them without disrupting the business, and what to fix first.

## Evidence and system mechanism

### Remote access is a system with limits

Remote access gateways have published capacity limits. Microsoft's [overview of Azure VPN Gateway](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways), for example, lists maximum point-to-site connections and aggregate throughput for each gateway size, ranging from 128 connections on the basic tier to thousands on larger ones. On-premises firewalls and VPN appliances have similar licence and hardware limits. A gateway sized for typical use can fail on the one day it matters most.

### Remote working has its own security and device requirements

NIST's [SP 800-46 on telework and remote access security](https://csrc.nist.gov/pubs/sp/800/46/r2/final) notes that organisations have employees, contractors and partners working from outside locations, and that every part of these systems, including organisation-owned and personal devices, needs protection. In a sudden move to remote work, staff without company laptops reach for personal devices. If policy and technical controls have not anticipated that, the business must choose between security and continuity in the middle of the incident.

### Plans only count once they are exercised

NIST's [SP 800-84 on test, training and exercise programmes](https://csrc.nist.gov/pubs/sp/800/84/final) describes how organisations design and run exercises that train staff, exercise plans and test systems so they can respond to and recover from disruption. A remote-work assumption that has never been exercised at full scale is an untested plan.

## Why this becomes urgent

The usual trigger is a major incident: a building closure, a regional power or network outage, a flood, civil unrest that makes travel unsafe, or a cyber incident that takes the office network offline. South African businesses also plan around power interruptions and connectivity failures at specific sites. Another trigger is an insurer or auditor asking for evidence that the remote-work part of the continuity plan has been tested, rather than simply written.

## Economic consequence

When remote continuity fails, the business loses days of productive work across the whole workforce, not just one system. Client deadlines slip and service levels are missed. Staff fall back on personal email and file sharing, creating security and records problems that last long after the incident, a risk described in our piece on [critical files stored only on employee computers](/impact/critical-files-stored-only-on-employee-computers-device-failure-loss-continuity-cost/). Emergency purchases of laptops and licences are made at short notice and full price.

## Root cause

- **Normal hybrid work is mistaken for a test.** Partial remote working never stresses capacity or removes the office fallback.
- **Applications still depend on the office.** Some systems run on local servers or single machines, as described in [when remote work depends on one office machine](/moments/when-remote-work-depends-on-one-office-machine/).
- **Device coverage is assumed.** Nobody has listed which critical roles use fixed desktops.
- **Sign-in depends on the office.** Multi-factor tokens, network-based sign-in or password resets may only work on site.
- **Single points of connectivity.** Remote access often routes back through one office internet line, a risk covered in [single internet connection risk](/impact/single-internet-connection-business-downtime-risk/).

## What good looks like

The business has a written list of the roles that must keep working during an office closure, with the device, applications and access each needs. Remote access capacity is sized for the full critical workforce at once, with headroom, and does not depend on a single office connection. Every critical application can be reached remotely, or there is a documented alternative. Staff can sign in and reset passwords without being on site. The support desk has a surge plan. Once a year the business runs an exercise in which the critical workforce works remotely on the same day, with the office treated as unavailable, and records what failed.

## Diagnostic questions

- How many people can your remote access connect at the same time, and how many would need to in a full closure?
- Which critical roles do not have a portable company device?
- Which applications can only be reached from inside the office network?
- Can staff complete multi-factor sign-in and password resets without being in the office?
- Does remote access depend on a single office internet line or server?
- When did the whole critical workforce last work remotely on the same day as a test?

## Practical next actions

1. List the roles that must keep working during an office closure, and for each one record the device, applications and access they need.
2. Check the published or licensed connection limit of your remote access service against that number, and plan an upgrade if it falls short.
3. Identify applications that only run on office servers or single machines, and plan to move them or provide a tested alternative route.
4. Confirm that sign-in, multi-factor authentication and password resets work for staff who are off site and possibly without their usual phone.
5. Agree a support surge plan, including who answers calls and how requests are logged during a closure.
6. Schedule a remote-work day for the critical workforce with the office treated as closed, and record every failure and fix.

## Where Mellorca fits

Mellorca reviews remote access, device coverage and application dependencies against continuity plans, and helps remove office-bound dependencies. This sits within our [digital infrastructure](/services/digital-infrastructure/) work, typically starting with a capacity and dependency check for critical roles.

## Method note

This article uses NIST SP 800-46 and SP 800-84 and Microsoft's VPN Gateway documentation as examples of published limits and guidance; your remote access product will have its own limits. The opening example is illustrative.
