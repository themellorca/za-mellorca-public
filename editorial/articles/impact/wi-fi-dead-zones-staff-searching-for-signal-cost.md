---
hub: impact
record_id: CPS-179
slug: wi-fi-dead-zones-staff-searching-for-signal-cost
title: Wi-Fi dead zones: The cost of staff moving around to find a signal
description: When parts of the office, warehouse or meeting rooms have no reliable Wi-Fi, people walk, wait and work around it. Coverage gaps are measurable.
lead: When parts of the office, warehouse or meeting rooms have no reliable Wi-Fi, people walk, wait and work around it. Coverage gaps are measurable and usually fixable.
category: Digital Infrastructure
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Employees move around the building to find a reliable Wi-Fi signal
primary_cost_mechanism: Labour cost of time lost to moving and reconnecting, with rework from failed device syncs and underused space
sources:
  - Understand Site Survey Guidelines for WLAN Deployment | https://www.cisco.com/c/en/us/support/docs/wireless/5500-series-wireless-controllers/116057-site-survey-guidelines-wlan-00.html
  - High Density Wi-Fi Deployments | https://documentation.meraki.com/Architectures_and_Best_Practices/Cisco_Meraki_Best_Practice_Design/Best_Practice_Design_-_MR_Wireless/High_Density_Wi-Fi_Deployments
  - Fix Wi-Fi connection issues in Windows - Microsoft Support | https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows
related:
  - Premium plans for basic work: The cost of overbuying software | /impact/premium-software-plans-basic-needs-overbuying-cost/
  - Software bought without approval: The financial and security cost of shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
  - Shared passwords at work: The cost of losing accountability and control | /impact/shared-passwords-lost-accountability-breach-exposure/
summary: When parts of the office, warehouse or meeting rooms have no reliable Wi-Fi, people walk, wait and work around it. Coverage gaps are measurable and usually fixable.
layout: plain
---
## The tolerated pain: the office has good spots and bad spots

Every member of staff knows where the Wi-Fi works. The boardroom is fine, but the small meeting room at the back drops calls. The reception desk is reliable; the finance office behind the concrete wall is not. In the warehouse, scanners lose connection in the far aisles, so pickers walk back towards the office to sync. Before an important video call, people pick up their laptops and look for a desk near the access point. Some give up and switch to their phone's data.

These are coverage gaps, often called dead zones: parts of a building where the wireless signal is too weak or too noisy to support the work being done there. They are different from a network that is simply overloaded. Mellorca's article on [the hidden productivity cost of poor office Wi-Fi](/impact/pain-poor-office-wi-fi-slowing-employees-down/) deals mainly with capacity: too many people and too much video for the network. This article deals with places where the signal does not reach properly at all, and with the habit of moving people around to compensate.

## Why businesses tolerate it

- **People adapt.** Staff learn the good spots and move, so the problem stops being reported.
- **It feels like a building issue.** Thick walls, steel shelving and long corridors seem like facts of life rather than design problems.
- **The network was never designed.** Access points were put where cabling was easy, or a single consumer router was installed when the business was smaller.
- **The layout changed.** New partitions, racking, a converted storeroom or extra staff changed how signal travels, but the network stayed the same.
- **Extenders seemed to help.** Cheap range extenders added coverage in one place while adding delay and complexity elsewhere.

## Why dead zones happen

Wireless signal weakens with distance and is absorbed or reflected by building materials, metal racking, lift shafts, filing cabinets and even people. Neighbouring networks and other devices add interference. Cisco's [site survey](https://www.cisco.com/c/en/us/support/docs/wireless/5500-series-wireless-controllers/116057-site-survey-guidelines-wlan-00.html) guidance for wireless networks notes that many problems arise from poor planning and coverage, and sets out how surveys measure signal strength, signal-to-noise ratio and overlap between access points across every area that needs service. For voice and video, Cisco's guidance recommends designing so that the signal at the edge of each access point's coverage is at least -67 dBm, with a signal-to-noise ratio of 25 dB and enough overlap for devices to move between access points without dropping.

Those are engineering numbers, but the business meaning is simple. A spot can show bars on a laptop and still be too weak or noisy for a stable call, a reliable scanner connection or a fast file save.

## Operational consequence

- **Walking and waiting.** Staff move to find signal, then wait for apps and files to reconnect.
- **Unusable rooms.** Meeting rooms and offices are avoided for calls, reducing usable space the business pays rent for.
- **Broken mobile workflows.** Warehouse scanners, tablets and handheld point-of-sale devices fail in parts of the floor, so data is captured later or on paper.
- **Unprofessional client calls.** Calls freeze or drop when a staff member moves between rooms. See Mellorca's article on [video calls freezing and dropping](/impact/video-calls-freezing-dropping-communication-cost/).
- **Workarounds that create risk.** Staff tether to personal phones or join a neighbouring guest network, moving company data over connections the business does not control.

## How the pain becomes money

- **Labour cost:** paid minutes spent moving, reconnecting and retrying.
- **Error and rework cost:** stock scans that fail to sync, orders captured twice and records updated late.
- **Wasted space:** rooms and desks that cannot be used for their intended purpose.
- **Personal data costs and reimbursement:** staff using their own mobile data for work.
- **Risk exposure:** company information travelling over unmanaged connections.

## A transparent cost model

These inputs are illustrative assumptions for a mixed office and warehouse site. Use your own observations.

| Group | People affected | Lost minutes per person per day |
| --- | --- | --- |
| Office staff in weak-signal areas | 12 | 8 |
| Warehouse pickers with handheld scanners | 10 | 15 |

**Daily minutes lost:** (12 × 8) + (10 × 15) = 246 minutes, or about 4.1 hours.

**Annual hours:** 4.1 × 220 working days = about 900 hours.

**Labour cost:** at an illustrative blended loaded cost of R200 an hour, about R180,000 a year.

The model leaves out scan errors, delayed dispatches and lost meeting space. Count those separately if your records show them. A properly designed set of business-grade access points for a site of this size is often a one-off cost that can be compared directly with a single year of lost time.

*Illustrative example.* A Bloemfontein agricultural supplies business had one router in its front office and two consumer extenders in the warehouse. Scanners dropped out in the back third of the building, so pickers walked forward every few orders to sync. A site survey showed the steel racking blocked most of the signal. Three ceiling-mounted access points placed along the aisles, on a single managed system, removed the dead zone and the walking.

## When it becomes commercially urgent

- staff routinely move to a different spot to take calls or send files;
- mobile devices such as scanners, tablets or card machines lose connection in parts of the site;
- you are adding racking, partitions, staff or a new area to the building;
- a meeting room is avoided for calls with clients;
- staff are claiming or quietly absorbing mobile data costs for work.

## What better looks like

- **A site survey before buying equipment.** Cisco describes predictive surveys, which model coverage from floor plans, and on-site passive and active surveys, which measure the real signal. The output is a coverage map showing where signal meets the needs of the work done in each area.
- **Coverage designed for the work.** Voice and video areas need stronger, cleaner signal than areas used only for occasional browsing. Cisco Meraki's design guidance recommends checking both 2.4 GHz and 5 GHz coverage and maintaining a minimum 25 dB signal-to-noise ratio throughout the intended coverage area.
- **More, better-placed access points rather than extenders.** Ceiling-mounted access points connected by cable, managed as one system, usually outperform a single powerful router with extenders.
- **Sensible channel planning** to reduce interference between your own access points and neighbouring networks.
- **Validation after installation.** Cisco's guidance includes checking coverage, signal quality and roaming overlap once the network is installed, not just before.

Simple steps help in the meantime. Microsoft's Windows support guidance suggests keeping devices close to the router and free of obstructions and trying a different band or channel to reduce interference. These are workarounds, not a design.

## Practical steps

1. Ask staff to mark weak-signal areas on a floor plan, with the task they were doing at the time.
2. List the devices that need wireless in each area, including scanners and card machines.
3. Commission a site survey and ask for a coverage map against the needs of each area.
4. Replace extenders and consumer routers with managed access points where the survey shows gaps.
5. Re-survey after installation and after any major layout change.

If the building's internet connection itself is the weak point, see [the downtime risk of a single internet connection](/impact/single-internet-connection-business-downtime-risk/). Mellorca's [digital infrastructure](/services/digital-infrastructure/) work covers wireless design as part of a reliable foundation.

## Bottom line

When people walk around the building to find a signal, the business is paying for that walk. The commercial value at stake is the daily time lost across every affected person, the errors from devices that cannot connect and the space that cannot be fully used. Dead zones can be measured, mapped and designed out, usually for less than a year of the time they cost.
