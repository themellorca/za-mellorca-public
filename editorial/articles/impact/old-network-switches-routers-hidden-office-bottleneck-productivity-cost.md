---
hub: impact
record_id: CPS-184
slug: old-network-switches-routers-hidden-office-bottleneck-productivity-cost
title: Old Switches and Routers: The Hidden Slowdown in Your Office
description: Ageing switches and routers rarely fail outright. They slow everything quietly, and the productivity cost is paid in waiting, dropped calls and fixes aimed at the wrong thing.
lead: Ageing switches and routers rarely fail outright. They slow everything quietly, and the productivity cost is paid in waiting, dropped calls and fixes aimed at the wrong thing.
category: IT Infrastructure
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: IT Infrastructure
commercial_domain: IT infrastructure and workplace productivity
primary_pain: Old switches and routers limit network speed and reliability across the office, but because they still work they are rarely blamed, so staff lose time and money to a constraint nobody has identified.
primary_cost_mechanism: Paid staff time lost to slow file access, video calls and cloud applications; repeated support effort aimed at the wrong cause; and a higher chance of an outright failure that stops the whole office.
sources:
  - https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview | https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview
  - https://learn.microsoft.com/en-us/windows-server/networking/technologies/network-subsystem/net-sub-performance-tuning-nics | https://learn.microsoft.com/en-us/windows-server/networking/technologies/network-subsystem/net-sub-performance-tuning-nics
  - https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure | https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure
summary: Ageing switches and routers rarely fail outright. They slow everything quietly, and the productivity cost is paid in waiting, dropped calls and fixes aimed at the wrong thing.
layout: plain
---
## The box in the cupboard nobody thinks about

Most offices have a small grey cupboard with a router, a few switches and a tangle of cables. The equipment was installed when the office opened, perhaps six or eight years ago, by someone who is no longer around. It has never failed in a way that made anyone look at it. Meanwhile the business has changed. There are twice as many staff, every one of them uses video calls, the accounting package runs in the cloud, backups run overnight and files are stored online instead of on a local server.

In a Midrand design studio, large files take minutes to open from the shared drive, video calls freeze on Tuesday mornings and people have started working from the coffee shop downstairs because the connection there is faster. The studio replaced its Wi-Fi access points, then upgraded its internet line. Neither helped as much as expected. The limit was an eight-year-old switch that connected everything together at a tenth of the speed the new equipment could handle.

This article is about that condition: ageing switches and routers becoming the hidden bottleneck. It complements pages on [poor office Wi-Fi](/impact/pain-poor-office-wi-fi-slowing-employees-down/) and [consumer-grade networking](/impact/consumer-grade-networking-business-operations-instability-cost/), which look at wireless coverage and equipment class. Here the focus is on the age and capability of the wired core that everything else depends on.

## Why old network equipment slows things without failing

Switches and routers rarely die dramatically. They become slow relative to what the business now asks of them. Several things change over time:

- **Port speed falls behind.** Older switches may run at 100 megabits per second per port, or have only a few gigabit ports. Modern laptops, access points and file storage can move data far faster, so the switch becomes the narrow point.
- **The uplink is shared.** Many devices share one connection between switches or to the router. When everyone opens large files or joins video calls at once, that single link saturates.
- **Processing capacity is limited.** An older router may route traffic perfectly well at the speeds it was bought for and struggle once an internet line is upgraded, particularly if it performs firewalling, VPN or traffic inspection.
- **Power over Ethernet budgets run out.** Phones, cameras and wireless access points draw power from the switch. Adding devices may exceed the switch's total supply, causing random drops.
- **Firmware stops.** When the maker no longer provides updates, known weaknesses stay open. The UK National Cyber Security Centre's guidance on [infrastructure](https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure) for devices underlines the importance of keeping supporting infrastructure patched and supported.
- **Faults become intermittent.** Ageing ports, fans and power supplies start dropping packets or restarting at random. These faults are hard to reproduce, so they are blamed on software, users or the internet provider.

## The productivity cost

A slow network is a tax on every activity that uses it, and the tax is charged in staff time. Because the delay is small each time, it never appears in a report.

### The arithmetic of small delays

Suppose 30 employees each lose 15 minutes a day to slow file access, frozen calls, reconnecting to systems and waiting for uploads. That is 7.5 hours a day, or about 37 hours a week. At an illustrative blended cost of R250 per hour, the weekly loss is above R9,000, or roughly R450,000 over a working year. Replacing a small office's switches and router typically costs a fraction of that, although prices vary with the equipment and the installation. The point is not the exact figure. It is that a modest delay multiplied across a team becomes a larger number than the equipment cost.

### Support effort spent on the wrong cause

When the network is the true constraint, symptoms appear elsewhere. The accounting software is "slow", a printer "keeps dropping", a video platform "is unreliable". Support time goes into reinstalling applications, replacing laptops and contacting software vendors. The pattern is similar to what happens when slow computers are blamed for what is actually a network issue, an expense we describe in [slow computers and paid waiting time](/impact/slow-computers-paid-waiting-cost/).

### Customer-facing effects

Dropped calls, delayed email, slow payment terminals and cloud systems that time out all reach customers. A sales call that freezes at the wrong moment, or a point-of-sale system that hangs during a rush, costs revenue and goodwill.

### The cost of sudden failure

Equipment in the later years of its life is more likely to fail completely. A dead core switch stops everyone, not only one user. If there is no spare, no configuration backup and no supplier on call, the office can be offline for a day or more. Planned replacement is cheaper than emergency replacement, a theme also covered in [ageing servers with no replacement date](/impact/ageing-server-no-replacement-date-failure-and-end-of-support-cost/).

## How to find out whether it is the network

Before spending, test. You do not need specialist software to begin.

- **Check the labels.** Note the make, model and age of every switch and router, and the speed of its ports. Compare against the maker's end-of-sale and end-of-support dates.
- **Look at link speeds.** On a few laptops, see whether the wired connection negotiates at 1 gigabit or only 100 megabits.
- **Test between internal devices.** Time a large file copy between two machines on the office network. If it is slow while the internet line is fast, the problem is internal.
- **Watch utilisation and errors.** Many switches report port traffic and error counts. High error counts on one port often indicate a failing cable or port.
- **Monitor over time.** Slowdowns that happen at certain hours point to saturation. Monitoring tools can show where and when, a problem described in [network capacity use that is not visible](/impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/).

Microsoft's documentation for [Azure Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview) shows how monitoring and diagnostic tools can reveal connectivity and performance problems, which illustrates the kind of visibility worth having even though that product targets cloud networks. For machines connected to the office network, Microsoft also explains how [network adapter performance](https://learn.microsoft.com/en-us/windows-server/networking/technologies/network-subsystem/net-sub-performance-tuning-nics) depends on the hardware and settings on both ends of a link, which is a reminder that a fast laptop port is wasted if the switch behind it is slow.

## Practical next actions

1. **Make an equipment list.** Record the model, purchase year and port speeds of every router and switch, and mark the ones older than five years.
2. **Check support status.** Find out whether each device still receives firmware updates and note any that have reached end of support.
3. **Run a simple internal speed test.** Copy a large file between two wired machines at a busy time and an idle time, and compare the results with the speeds the hardware should achieve.
4. **Ask staff where time is lost.** Collect specific examples, such as slow file opens and frozen calls, and match them to times of day and locations.
5. **Get a costed replacement plan.** Ask a network supplier for a quote that includes gigabit ports, enough Power over Ethernet budget, a spare unit and a saved configuration.
6. **Schedule the swap.** Replace equipment in a quiet period with a written rollback plan, and set a review date for the next refresh.

## Fix the foundation before adding to it

Faster internet lines, new access points and cloud upgrades all assume the network behind them can keep up. If the switch and router are the limit, every other improvement delivers less than it should. Replacing the oldest equipment is rarely exciting, but it often produces the most noticeable change in how the office feels to work in, and it removes one of the quieter reasons that staff wait on technology they are paying for.
