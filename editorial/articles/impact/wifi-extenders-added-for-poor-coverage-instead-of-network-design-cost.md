---
hub: impact
record_id: CPS-185
slug: wifi-extenders-added-for-poor-coverage-instead-of-network-design-cost
title: Adding Wi-Fi Extenders Instead of Designing the Network
description: Each extender fixes one dead spot and can degrade the rest, so patching coverage complaints one at a time often costs more than a proper design would have.
lead: Each extender fixes one dead spot and can degrade the rest, so patching coverage complaints one at a time often costs more than a proper design would have.
category: Technology Infrastructure
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Technology Infrastructure
commercial_domain: Technology Infrastructure
primary_pain: Adding Wi-Fi extenders every time coverage is poor instead of designing the network properly
primary_cost_mechanism: Repeated purchase and installation of extenders, shared-airtime slowdowns that reduce speed for everyone, staff time lost to dropped connections and troubleshooting, support callouts for intermittent faults, and later replacement of the whole setup
sources:
  - https://csrc.nist.gov/pubs/sp/800/153/final | https://csrc.nist.gov/pubs/sp/800/153/final
  - https://www.wi-fi.org/discover-wi-fi/wi-fi-easymesh | https://www.wi-fi.org/discover-wi-fi/wi-fi-easymesh
  - https://learn.microsoft.com/en-us/windows/client-management/mdm/wifi-csp | https://learn.microsoft.com/en-us/windows/client-management/mdm/wifi-csp
summary: Each extender fixes one dead spot and can degrade the rest, so patching coverage complaints one at a time often costs more than a proper design would have.
layout: plain
---
## Four extenders and still no signal in the boardroom

A small accounting practice in Pretoria moves into a double-storey office. The internet line comes in at the front, where a router sits on the reception desk. By the second week, the partners complain that video calls drop in the back offices. Someone buys a Wi-Fi extender and plugs it in halfway down the passage. The back offices get a signal, but it is slow. In March a new meeting room is built and a second extender goes up. In June, upstairs staff complain, and a third is added. By the end of the year there are four. The Wi-Fi names have multiplied: Office, Office_EXT, Office_EXT2. Laptops cling to the strongest-looking signal and not the best one, so people walk into the boardroom still connected to the reception router and wonder why the call stutters.

Each fix was cheap. The sum of them has produced a network that is slow, confusing and impossible to diagnose, and nobody can say what the practice actually spent.

## Why extenders so often disappoint

An extender is a repeater: it receives a signal from the router and re-sends it. Basic single-radio models must do both jobs on the same channel, which means the same airtime is used twice for the same data. The speed of a device connected through such an extender can fall sharply compared with a device connected directly. The exact loss varies by model and conditions, so treat any specific figure sceptically, but the direction is consistent.

The problems stack up as more units are added.

- **Shared airtime.** Wi-Fi is a shared medium. Every repeater and every device on the same channel competes for the same time slots, so adding units can slow things down overall.
- **Sticky devices.** Phones and laptops often stay attached to the first access point they joined, even after they have moved to a spot where another is stronger.
- **Interference with itself.** Several units on the same or overlapping channels interfere with each other, and with neighbouring offices in the same building.
- **No central view.** Each unit has its own setup page, its own firmware and its own password. Nobody can see which device is attached where, or why a call dropped.
- **Placement guesswork.** Extenders are positioned where there is a free socket, not where coverage is needed.

These problems are part of why the earlier articles on [Wi-Fi dead zones and staff searching for signal](/impact/wi-fi-dead-zones-staff-searching-for-signal-cost/) and [consumer-grade networking in business operations](/impact/consumer-grade-networking-business-operations-instability-cost/) keep recurring. The extender is the usual first reaction, and it is what keeps the pattern going.

## What patching actually costs

### Purchases and call-outs

The direct cost is easy to count and is usually underestimated. Four extenders at R900 each plus a technician visit to configure two of them is a few thousand rand. That sounds trivial until you notice that a modest set of professional access points, properly placed, would have cost only somewhat more and replaced all of them.

### Staff time

The larger cost is people. Suppose 20 staff each lose five minutes a day to dropped connections, reconnecting or waiting for a page to load. That is over 100 minutes a day. At an average loaded cost of R300 an hour, this comes to roughly R500 a day, or more than R10,000 a month. The inputs are illustrative; the lesson is that tiny daily delays become a larger figure than the hardware ever was. The article on [poor office Wi-Fi slowing employees down](/impact/pain-poor-office-wi-fi-slowing-employees-down/) walks through this kind of calculation in more detail.

### Diagnostic time

When a fault is intermittent and the network has no central view, support time balloons. A technician cannot tell if the issue is the router, an extender, a channel clash or a single faulty device. The related article on [network usage that is not visible](/impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/) explains why that visibility matters.

### The eventual rip-and-replace

Most patched networks end in a full redesign anyway, after months of complaints. The patches are written off, and the business has paid twice.

## What "designed properly" means

Design does not have to mean expensive. It means deciding in advance where people work, how many devices connect, and what the network needs to carry, then placing equipment to match.

### Start with a floor plan and a walk-through

Mark where people sit, where video calls happen and where thick walls, lifts and kitchens interfere. A walk with a phone-based signal tester or a simple site survey will show weak areas objectively, not by complaint.

### Wire the access points where you can

Access points connected back to the router or switch by cable do not need to relay traffic over the air, which removes the biggest weakness of extenders. Running a cable during a refurbishment is far cheaper than doing it afterwards.

### Use access points that are managed together

Instead of independent units, choose equipment that is configured from one place with one network name, one password and coordinated channels. Industry standards exist for multi-access-point networks, and the Wi-Fi Alliance describes how its [EasyMesh](https://www.wi-fi.org/discover-wi-fi/wi-fi-easymesh) programme brings a common approach to controlling several access points. Even if you choose a single vendor's system, the principle is the same: one network, managed as one.

### Plan for security and management

The National Institute of Standards and Technology's guide to securing wireless networks, [Special Publication 800-153](https://csrc.nist.gov/pubs/sp/800/153/final), treats planning, placement, configuration and ongoing monitoring as parts of one task. A set of unmanaged extenders makes most of those things hard. A designed network lets you apply the same encryption settings, separate guest traffic from business traffic, and update firmware centrally.

### Standardise how devices join

Where you manage staff laptops, you can push the same Wi-Fi profile to every device, so people connect to the right network automatically. Microsoft documents this in its [Wi-Fi configuration service provider reference](https://learn.microsoft.com/en-us/windows/client-management/mdm/wifi-csp), among other approaches. The result is fewer "which network do I join?" questions.

## A quick decision guide

| Situation | Reasonable response |
| --- | --- |
| One small dead spot in a home-like office | One carefully placed extender or a cabled access point may be enough |
| Two or more extenders already in use | Stop adding. Survey and plan before spending more |
| Video calls and cloud apps are central to the work | Wired, managed access points are worth the investment |
| Shared building with many neighbouring networks | Professional survey and channel planning |

## Practical next actions

1. List every extender, router and access point in the office, with its location and who installed it. Include the network names staff see.
2. Walk the floor with a phone and note signal strength and a speed test in each work area, including the places where complaints come from.
3. Estimate the monthly cost of dropped connections by asking a few staff how many minutes a day they lose, and multiply by an hourly rate.
4. Freeze new extender purchases until you have a floor plan, a survey and a quote for a managed set of cabled access points.
5. Get at least two quotes for a designed network, and ask each supplier how they would place access points, how the cabling would run and how you will see problems.

## Fix the cause, not the complaint

Each extender answers the question "where is the signal poor?" A designed network answers the better question: "how should the whole building be covered?" The first is quick and cheap at the start. The second costs more up front but removes the recurring complaints, the confusion and the repeated spending. If you are already on your second or third extender, that is your cue to stop patching and start planning.
