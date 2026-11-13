---
hub: impact
record_id: CPS-178
slug: video-calls-freezing-dropping-communication-cost
title: Video calls that freeze and drop: The cost to customers and remote teams
description: Frozen screens and dropped calls cost time, clarity and credibility with customers and remote staff. Common causes, how to cost it and how to fix it.
lead: Frozen screens and dropped calls cost time, clarity and credibility with customers and remote staff. Common causes, how to cost it and how to fix it.
category: Connectivity
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Connectivity
commercial_domain: Digital Infrastructure
primary_pain: Video calls constantly freeze or drop
primary_cost_mechanism: Lost meeting labour, revenue risk on client calls and wasted spend on the wrong fixes
sources:
  - Prepare your organization's network for Teams - Microsoft Teams | https://learn.microsoft.com/en-us/microsoftteams/prepare-network
  - Zoom system requirements: Windows, macOS, Linux | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748
  - Microsoft 365 network connectivity principles - Microsoft Learn | https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles
related:
  - Fixing avoidable mistakes instead of serving customers: The cost of rework | /impact/fixing-preventable-mistakes-rework-customer-time-cost/
  - Predictable appointments still carry a cost when staff arrange every slot | /impact/manual-appointment-scheduling-administration-cost/
  - When cloud spend has no business owner | /impact/cloud-costs-without-business-owner-allocation/
  - Slow network, unknown cause: What it costs when nobody can see who uses the bandwidth | /impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/
summary: Frozen screens and dropped calls cost time, clarity and credibility with customers and remote staff. Common causes, how to cost it and how to fix it.
layout: plain
---
## The tolerated pain: "Sorry, you froze. Can you say that again?"

Video calls have become the default way many businesses sell, deliver projects, interview candidates and run their teams. Yet in plenty of organisations, poor call quality is simply accepted. Faces freeze mid-sentence. Voices turn robotic. Screen shares stutter. Someone drops off and rejoins three times. Meetings start with five minutes of "Can you hear me?" and end with a follow-up email to repeat what was missed.

Each incident is small and slightly embarrassing. Together they become a tax on every conversation the business has, internally and with customers. The most damaging part is that the problem is often treated as bad luck, or as the customer's fault, when the causes are usually identifiable and fixable.

## Why businesses tolerate it

- **Everyone has had a bad call.** Because poor quality is common, it feels normal rather than a fault to fix.
- **Blame is unclear.** Was it the office line, the Wi-Fi, the laptop, the VPN, the platform or the other party? Without evidence, nobody acts.
- **Bandwidth is assumed to be the only factor.** The business upgrades its line, problems continue, and people conclude nothing can be done.
- **The cost is spread thinly.** A few lost minutes per meeting never appear as a line item.
- **Remote staff are left to sort it out themselves.** Home connections and equipment are treated as the employee's problem.

## What actually causes freezing and dropped calls

Microsoft's network guidance for Teams is useful here because it links symptoms to likely causes. It suggests that slow performance may point to insufficient bandwidth, that calls which keep dropping may be caused by firewall or proxy blockers, and that calls with static, cutting out or robotic voices may be caused by jitter or packet loss. In other words, three different symptoms usually have three different fixes.

Bandwidth matters, but the requirement per person is more modest than many assume. Microsoft lists recommended rates for one-to-one Teams video of around 1.5 Mbps up and down per endpoint, and higher figures for meetings and best performance. Zoom's published guidance for one-to-one 720p HD video is 1.2 Mbps up and down, with higher rates for 1080p and group calls. The important word is *up*: upload capacity is often the constraint on asymmetric business and home connections, and every person in the office on a call at the same time draws from the same shared line.

Microsoft's guidance also highlights causes that have nothing to do with the size of the line:

- **VPNs.** It recommends a split-tunnel arrangement so Teams traffic bypasses the VPN, noting that VPNs are typically not designed for real-time media, may not support the UDP traffic Teams needs, and can route traffic further away, adding latency and jitter. Its [wider network guidance](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles) likewise advises split tunnelling for VPN users and warns against forcing UDP traffic down to TCP.
- **Wi-Fi design.** It notes that Wi-Fi networks are not necessarily designed for real-time media and recommends prioritising media traffic, planning access point placement and channels, and steering devices to the 5 GHz band. Mellorca covers the wider productivity side of this in [the hidden cost of poor office Wi-Fi](/impact/pain-poor-office-wi-fi-slowing-employees-down/).
- **No traffic prioritisation.** It recommends Quality of Service so voice and video are prioritised over bulk traffic such as cloud backups and large downloads.
- **Firewall settings.** Firewalls that change address mappings or block required ports and protocols can drop calls.

To that list most businesses can add their own: ageing laptops struggling with video encoding, poor headsets and microphones, and connections that go down when the power does.

## Operational consequence

- **Longer meetings.** Time is lost reconnecting, repeating and switching to phone calls.
- **Misunderstandings.** Words missed during a freeze become wrong assumptions in a project, a quote or an instruction.
- **Weaker sales conversations.** A demonstration that stutters or a proposal walkthrough that drops undermines the impression the business is trying to create.
- **Remote team friction.** Staff on poor connections contribute less, are interrupted more and feel excluded from discussions.
- **Slower hiring and onboarding.** Interviews and training sessions that keep dropping make a poor first impression on candidates and new staff.

## How the pain becomes money

- **Labour cost:** paid minutes lost in every affected meeting, multiplied by every attendee.
- **Revenue loss:** sales calls and pitches that go badly for avoidable technical reasons.
- **Rework cost:** errors and repeated work caused by misheard or missed information.
- **Customer retention risk:** clients who experience repeated poor calls may question the business's competence more broadly.
- **Wasted spend:** line upgrades bought to solve problems that were really VPN, Wi-Fi or device issues.

## A transparent cost model

The labour component is easy to estimate from the business's own meeting patterns:

> **Monthly meeting disruption cost**
> affected meetings per month × average minutes lost per meeting × average attendees × loaded cost per minute
> + sales or client calls materially disrupted × estimated value at risk per call

The second line should be treated cautiously. Not every disrupted sales call is a lost sale, and the business should only use a value it can defend from its own pipeline data.

*Illustrative example.* A 40-person IT consultancy in Centurion, with half its staff working from home on some days, asks everyone to log for two weeks any call where quality caused a noticeable interruption. The log shows a clear pattern: most problems occur when staff are connected through the company VPN, and in one meeting room where the access point is shared with a busy open-plan area. Several client presentations were affected. Using its own salary data, the consultancy prices the lost meeting time; the client-facing incidents it records separately, without guessing a revenue figure. The fix is not a bigger line but split-tunnelling for meeting traffic, an additional access point and headsets for consultants who present to clients.

## When it becomes commercially urgent

- customers or prospects comment on call quality;
- a sales presentation or important client meeting fails because of the connection;
- remote or hybrid staff consistently report that they cannot participate properly;
- the business has paid for a faster line and the problem persists;
- the business depends on video for service delivery, such as consulting, training or support.

If a call failure would actually stop the business from serving customers, it belongs in the urgent category described in [how to separate urgent systems problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/), not the merely irritating one.

## What better looks like

Calls are reliable enough that nobody thinks about them. Problems, when they happen, can be diagnosed from evidence rather than guesswork. Platforms help: Microsoft notes that the Teams Call Quality Dashboard and admin centre provide data on call quality and reliability that can show where problems cluster.

## Practical remediation steps

1. **Log problems for two weeks**: who, where, which connection, which symptom.
2. **Use platform call-quality data** where available to confirm patterns by location, network and device.
3. **Match symptom to cause**: freezing to bandwidth, dropping to firewall or VPN, robotic audio to jitter and packet loss.
4. **Bypass the VPN for meeting traffic** using split tunnelling, with your security adviser's agreement.
5. **Fix the Wi-Fi** in meeting areas: access point placement, channels, 5 GHz and media prioritisation.
6. **Prioritise real-time traffic** on the office network and schedule large uploads and backups outside working hours.
7. **Check upload capacity** against how many people call at once, and add a second connection where calls are business-critical; see [the risk of a single internet connection](/impact/single-internet-connection-business-downtime-risk/).
8. **Equip client-facing staff** with decent headsets and adequate laptops, and set a minimum standard for home connections.

Network, Wi-Fi and device standards like these are part of Mellorca's [digital infrastructure](/services/digital-infrastructure/) work.

## Bottom line

Freezing and dropped calls are not bad luck. They are symptoms with identifiable causes, and they cost the business time, clarity and credibility in every conversation they touch. Measuring where problems occur and fixing the specific cause usually costs far less than the disruption it removes, and often less than the line upgrade that was never the answer.
