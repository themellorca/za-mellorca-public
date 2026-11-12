---
hub: impact
record_id: CPS-182
slug: network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost
title: Slow Network, Unknown Cause: What It Costs When Nobody Can See Who Uses the Bandwidth
description: When a business cannot see which applications and devices consume its network capacity, slowdowns go undiagnosed, support calls repeat and upgrades get bought for the wrong problem.
lead: When a business cannot see which applications and devices consume its network capacity, slowdowns go undiagnosed, support calls repeat and upgrades get bought for the wrong problem.
category: Digital Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Unknown applications and devices consuming network capacity
primary_cost_mechanism: Staff waiting time, repeat support call-outs and upgrades bought for the wrong cause
sources:
  - Azure Network Watcher Overview | https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview
  - Traffic Analytics Overview - Azure Network Watcher | https://learn.microsoft.com/en-us/azure/network-watcher/traffic-analytics
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - Every Team Picks Its Own Software: The Cost of Having No Integration Standards | /impact/every-team-chooses-own-software-no-integration-standards-fragmented-data-cost/
  - Staff Using Personal Laptops for Work: The Security and Support Cost of Inadequate Devices | /impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/
  - Old Applications Kept Alive Because Moving the Data Feels Hard | /impact/old-applications-kept-because-data-migration-feels-difficult-delay-maintenance-risk-cost/
summary: When a business cannot see which applications and devices consume its network capacity, slowdowns go undiagnosed, support calls repeat and upgrades get bought for the wrong problem.
layout: plain
---
## The slow office nobody can explain

At two in the afternoon the accounts clerk in a Pretoria wholesaler cannot load the bank's business portal. The warehouse supervisor says the handheld scanners keep timing out. A director on a video call has frozen twice. Someone calls the IT support company, who test the line, see that it is up and report that the internet is fine. Everyone goes back to work, and the same thing happens again on Thursday.

The business is not short of bandwidth in any way it can prove. It simply cannot see what is using the capacity it pays for. A fibre line is a shared road. When something heavy enters it, such as a cloud backup, a large update, a staff member streaming a match or a misbehaving device, everything else slows down. Without a record of who and what is on the road, the only available diagnosis is a guess.

This article is about the cost of that blindness: the repeated, inconclusive troubleshooting, the upgrades bought on suspicion and the trading hours lost to problems that were never actually identified.

## Why capacity problems are hard to see

A speed test measures the connection at one moment, from one device. It says nothing about which application was consuming the capacity, which device it came from or whether the fault sits in the line, the router, the wireless network or the cloud service itself. Modern traffic is also mostly encrypted and cloud-based, so a business that once knew its servers by name now has dozens of software services that all look like generic internet traffic.

Network visibility tools exist to answer exactly this. Microsoft's documentation on [Azure Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview) describes monitoring, diagnostics and metrics for cloud network resources, and its description of [traffic analytics](https://learn.microsoft.com/en-us/azure/network-watcher/traffic-analytics) explains how flow data can be summarised to show which sources and destinations generate the most traffic. A small office does not need that exact product, but the principle carries over: you cannot manage a shared resource you cannot measure.

- **Averages hide spikes.** A line that is 30 percent used over a day can still be saturated for ten minutes at a time, which is long enough to drop a card payment or a call.
- **Several causes look identical.** A congested line, a failing switch, a crowded Wi-Fi channel and a slow cloud service all show up as "the system is slow".
- **Cloud traffic is invisible by default.** Backups, file sync, video meetings and software updates all run in the background without anyone choosing to start them.

## What the lack of visibility looks like in daily operations

- complaints that are intermittent, so the support call ends with "could not reproduce";
- a pattern of problems at the same times of day that nobody has linked to a scheduled task;
- a line upgrade that costs more each month and changes nothing;
- staff who stop reporting slowness because nothing ever comes of it;
- point-of-sale, scanners or cloud accounting that fail while general browsing still works;
- the suspicion, never confirmed, that one person or one machine is responsible.

## How the problem becomes money

The expensive part is rarely the slow minute itself. It is what the business does about it without evidence.

- **Lost working time:** every stalled screen is paid time spent waiting. The effect is multiplied by the number of people on the network at the time.
- **Repeat troubleshooting:** each call-out or remote session is billed, and without a record the next one starts from zero.
- **Upgrades bought on suspicion:** a bigger line or new router is the usual reaction. If the cause was one backup job or a faulty access point, the extra monthly fee is permanent and the problem remains.
- **Disrupted customer-facing work:** failed card machines, delayed orders and dropped calls cost sales and goodwill that never appear on an invoice.
- **Hidden security exposure:** a device sending unusual volumes of data is also something a security review would want to know about, as discussed in [software bought without approval](/impact/software-bought-without-approval-shadow-it-cost/).

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical 25-person services firm in Johannesburg. They are not measurements of any real business.

| Assumption | Value |
| --- | --- |
| Staff affected by each slowdown | 18 |
| Slowdowns per month that cause visible waiting | 8 |
| Average time lost per person per slowdown | 20 minutes |
| Loaded hourly cost of staff | R220 |
| Support call-outs per year chasing the same symptom | 10 at R1,800 each |
| Line upgrade bought on suspicion, extra monthly cost | R1,400 |

- Waiting time: 18 × 8 × 12 months × (20 ÷ 60) hours × R220 = R126,720
- Repeat call-outs: 10 × R1,800 = R18,000
- Upgrade that did not fix the cause: R1,400 × 12 = R16,800
- **Illustrative total: about R161,500 a year**

Most of the cost is the waiting. It is spread so thinly across the day that nobody records it, which is why the matter keeps being tolerated.

## Why the pain is tolerated

Because the connection works most of the time, the problem feels like bad luck rather than a defect. The supplier's line test shows a healthy line. The IT provider is paid to respond, not to build a long-term record. Nobody owns the question "what is on our network?", so each incident is treated as new. Cost conversations also drift towards the monthly line price, which is easy to see, instead of the staff time lost, which is not.

## When it becomes commercially urgent

- a card or payment failure during a busy trading period is traced to network congestion;
- the business moves its accounting, telephony or stock system into the cloud and becomes dependent on the line;
- load-shedding changes which devices come back on and in what order, creating new traffic after power returns;
- a customer, auditor or insurer asks what devices are connected and what they are doing.

## What better looks like

Better does not mean an enterprise monitoring suite. It means enough evidence to tell one cause from another.

1. **Know what is connected.** List every device on the network: laptops, phones, printers, scanners, cameras and anything with an IP address. The method in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) works for software and devices alike.
2. **Measure over time, not once.** Use the router or firewall reporting, or a low-cost monitoring tool, to record usage by device and application across a full week.
3. **Match symptoms to times.** Keep a simple log of when people complain, then compare it with scheduled backups, updates and meetings.
4. **Separate the layers.** Test the wired network, the Wi-Fi and the internet line independently so that you know where the fault sits. The [cost of consumer-grade networking equipment](/impact/consumer-grade-networking-business-operations-instability-cost/) is a common finding at this stage.
5. **Schedule heavy jobs deliberately.** Move large backups and updates outside trading hours and cap what they may use.
6. **Decide with evidence.** Buy more capacity or a failover line only when the data shows the line is really the constraint. The [single-line dependency](/impact/one-internet-line-cloud-dependent-trading-stops-failover-cost/) is a separate and equally measurable risk.

## Practical next actions

1. Ask your IT provider whether the router or firewall can report usage by device and application, and request a seven-day report.
2. Write down the three slowest incidents of the past month, with the time and who was affected.
3. Check what backups, file syncing and update tasks run during working hours.
4. Count the devices on the network and compare the number with the number of people employed.
5. Agree who is responsible for reviewing that report each month.

## Bottom line

A network that nobody can see into is a network nobody can fix with confidence. The cost is not only the slow minutes but the repeated call-outs and the upgrades that treat the wrong cause. Knowing which applications and devices use the capacity turns an argument about the internet into a short list of facts, and it lets the business spend only on the problem it actually has.
