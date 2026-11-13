---
hub: impact
record_id: CPS-180
slug: consumer-grade-networking-business-operations-instability-cost
title: Home-grade routers in a working business: What network instability costs
description: Retail routers and switches are cheap, but a business that depends on them pays in dropped connections, slow diagnosis, thin support and security risk.
lead: Retail routers and switches are cheap to buy, but a business that depends on them pays for it in dropped connections, slow diagnosis, thin support and unmanaged security risk.
category: Digital Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Business-critical operations running on consumer-grade networking equipment with no management or support
primary_cost_mechanism: Lost staff time and sales from instability, diagnosis and emergency replacement cost, and unpatched security exposure
sources:
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
  - Reliability design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles
  - Secure by Design Alert: Security Design Improvements for SOHO Device Manufacturers - CISA | https://www.cisa.gov/resources-tools/resources/secure-design-alert-security-design-improvements-soho-device-manufacturers
related:
  - "I thought you were doing it": The labour cost of unclear responsibilities | /impact/unclear-responsibilities-duplicated-dropped-work-cost/
  - Cloud prices for old infrastructure: The cost of moving without redesign | /impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/
  - New starters waiting for logins: The payroll cost of slow access setup | /impact/new-starters-waiting-for-logins-access-setup-cost/
  - Patching only after something breaks: The price of leaving known weaknesses open | /impact/delaying-security-updates-until-something-breaks-known-weakness-financial-risk/
summary: Retail routers and switches are cheap to buy, but a business that depends on them pays for it in dropped connections, slow diagnosis, thin support and unmanaged security risk.
layout: plain
---
## The tolerated pain

The Wi-Fi router in the office was bought from a consumer electronics shop because it was on special and the reviews were good. It does the job most days. Every few weeks it needs to be switched off and on again. Once a month the card machine loses its connection for twenty minutes. The cloud accounting package times out during month-end. Someone's video call freezes, and a technician who is "good with computers" is asked to take a look.

Nobody has decided that home-grade networking is acceptable for the business. It simply arrived one purchase at a time, and because each failure is short, each one is forgiven. Yet the network is now carrying card payments, cloud software, remote support, cameras, phones and the files that staff cannot work without. It has become critical infrastructure while still being treated as a household appliance.

This differs from the risk described in [relying on a single internet connection](/impact/single-internet-connection-business-downtime-risk/). That article is about the line coming into the building. This one is about the equipment inside it: the router, switches, access points and cabling that decide whether a working connection reaches the people who need it.

## What "consumer-grade" actually means

Consumer equipment is designed for a home with a handful of devices, light use and an owner who will tolerate an occasional restart. Business equipment is designed for many simultaneous users, constant load, central management and predictable support. The difference is rarely visible on the box. It shows up under pressure.

- **Limited capacity under load.** A device that copes with a family streaming television can struggle with thirty staff, several cloud applications, a phone system and cameras at the same time.
- **No central management.** Each unit is configured separately, often by whoever installed it, with settings that nobody wrote down.
- **Weak visibility.** There is usually no alert when a device is overheating, dropping packets or running out of capacity. The first sign is a user complaint.
- **Little redundancy.** One device sits in the middle of everything. When it fails, everything behind it fails with it.

## The security side of the same problem

The cost is not only downtime. The United States Cybersecurity and Infrastructure Security Agency explains in its guidance on [securing network infrastructure devices](https://www.cisa.gov/news-events/news/securing-network-infrastructure-devices) that routers, firewalls and switches are attractive targets because most or all organisational traffic passes through them.

It notes that small office and home office routers typically run few of the security tools found on desktops and servers, that vendors often ship them with exploitable services enabled for convenience, and that owners frequently leave default settings unchanged and skip regular patching. CISA and the FBI have also issued a [Secure by Design alert on small office and home office routers](https://www.cisa.gov/resources-tools/resources/secure-design-alert-security-design-improvements-soho-device-manufacturers), warning that attackers compromise them as launching pads and urging manufacturers to enable automatic updates by default.

For a South African business, the Protection of Personal Information Act expects reasonable security measures around the personal information you hold. A router running years-old firmware and default passwords is difficult to defend as reasonable.

The United Kingdom's National Cyber Security Centre makes a related point in its guidance on [obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products): once a product stops receiving security updates, known weaknesses accumulate, and the only fully effective remedy is to stop using it. Consumer routers tend to reach that point earlier than business-class equipment, and they rarely come with a reminder.

## Why businesses tolerate it

- **The upfront price is lower.** A retail router costs a fraction of a managed business unit, and that saving is easy to see on a purchase order.
- **Failures are intermittent.** A fault that lasts fifteen minutes does not feel like an outage, so it is never costed.
- **Nobody owns the network.** It falls between the internet provider, the person who installed it and whoever happens to be in the office.
- **Load-shedding hides the evidence.** When power cuts regularly interrupt connectivity, instability from the equipment itself gets blamed on the grid.

## Operational symptoms

- staff asking whether "the internet is down again" when the line is actually fine;
- card terminals, printers or phones dropping off the network at random;
- slow or failing video calls and cloud applications at peak times;
- no network diagram, no stored configuration and no spare unit;
- a supplier who cannot say when the firmware was last updated.

## How the pain becomes money

- **Lost working time:** every drop-out stops paid people. The loss is multiplied by the number of staff who depend on the connection.
- **Lost transactions:** a card machine or online ordering tool that cannot connect means a customer who pays elsewhere or an order that is retyped later.
- **Diagnosis cost:** hours of guesswork from a technician who has no monitoring data, often billed at emergency rates.
- **Replacement cost:** buying a unit in a hurry at whatever price the nearest shop charges, then reconfiguring from memory.
- **Security exposure:** an unpatched, unmanaged device in front of the whole business raises the likelihood and impact of an incident.

Microsoft's [reliability design principles](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles) for cloud workloads describe a reliable system as one that can withstand faults, be recovered within agreed targets and remain available at the promised level. The idea applies equally to a small office: if a business-critical service depends on a single unmanaged box, none of those three properties has been designed in.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Durban distribution office with 22 staff who rely on a cloud ordering system, a cloud telephone service and card payments at the counter.

| Assumption | Value |
| --- | --- |
| Staff affected by each drop-out | 22 |
| Average loaded hourly cost per person | R200 |
| Drop-outs of 20 minutes per month attributable to equipment | 6 |
| Productivity actually lost during a drop-out | 60% |
| Counter sales missed or delayed per month | R9,000 |
| Technician call-outs for diagnosis per year | 5 at R1,800 |

- Lost working time: 22 × R200 × (20 ÷ 60) × 60% × 6 × 12 = about R63,400 a year
- Missed or delayed sales: R9,000 × 12 = R108,000, of which perhaps a third is truly lost, around R36,000
- Diagnosis call-outs: 5 × R1,800 = R9,000
- **Illustrative total: about R108,000 a year, before any security incident**

A properly specified, managed set of business-class equipment for an office of this size is a one-off cost that is typically measured against that annual figure, plus the value of knowing the network is monitored and patched. Use your own numbers: for two weeks, have someone log every network complaint with the time and the number of people affected. Then read [why many businesses do not know the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) to turn that log into a rand figure.

## When it becomes commercially urgent

- card payments, online orders or cloud telephony are now central to daily trading;
- an insurer, bank or large customer asks about security controls;
- a device failure leaves the business without service for most of a day;
- a security incident or suspicious activity is traced to an outdated device.

## What better looks like

1. **Treat the network as infrastructure.** Give it a named owner and a line in the budget, as you would for vehicles or machinery.
2. **Match equipment to the load.** Count devices, users and applications, and choose equipment rated for that demand with headroom for growth.
3. **Use managed equipment.** Centralised configuration, alerts and a stored configuration backup turn a failure into a quick swap.
4. **Keep firmware current and defaults changed.** Schedule updates and record the date of each one.
5. **Hold a spare or a support agreement.** A configured spare unit or a next-business-day replacement keeps an outage short.
6. **Protect the equipment from power problems.** Add uninterruptible power for the router and switch so that load-shedding does not cause hard crashes.
7. **Document it.** One page showing what connects to what, where the passwords are held and who to call.

The decision of whether to repair, reconfigure or replace is covered in [how to decide whether to replace or reconfigure a system](/insights/how-to-decide-whether-to-replace-or-reconfigure-a-system/). For many offices the answer is a small, staged replacement rather than a rebuild. If the same pressure applies to staff laptops, see [the false savings of ageing computers](/impact/ageing-computers-false-hardware-savings-cost/).

## Practical next actions

1. Walk the office and list every router, switch and access point with its make, model and age.
2. Log network problems for two weeks, noting time, duration and number of people affected.
3. Check each device's firmware date and whether default passwords were ever changed.
4. Identify the single device whose failure would stop the most work, and decide how it would be replaced within an hour.
5. Get a quote for managed business-class equipment sized for current staff plus growth.

## Bottom line

Consumer-grade networking is cheap to buy and expensive to depend on. The cost arrives in small interruptions, in missed sales, in diagnosis by guesswork and in a security exposure that nobody is watching. The fix is not extravagant. It is choosing equipment for the work the network now does, giving it an owner, and making sure that when something fails the business is back within the hour rather than the afternoon.
