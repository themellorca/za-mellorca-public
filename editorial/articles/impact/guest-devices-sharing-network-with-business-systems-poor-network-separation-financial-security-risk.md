---
hub: impact
record_id: CPS-183
slug: guest-devices-sharing-network-with-business-systems-poor-network-separation-financial-security-risk
title: Guests on the Business Network: The Hidden Cost of Poor Separation
description: When visitors and unmanaged devices share a network with payment, office and equipment systems, one infected phone can slow sales, spread malware and expose business data.
lead: When visitors and unmanaged devices share a network with payment, office and equipment systems, one infected phone can slow sales, spread malware and expose business data.
category: Information Security
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Information Security
commercial_domain: Information Security
primary_pain: Guest devices sharing the same network as business systems
primary_cost_mechanism: Malware spreading from unmanaged devices to business systems, downtime of payment and office systems, bandwidth contention that slows paying customers, support effort, and exposure of personal information
sources:
  - Securing Wireless Networks - CISA | https://www.cisa.gov/news-events/news/securing-wireless-networks
  - SP 800-153, Guidelines for Securing Wireless Local Area Networks (WLANs) - CSRC | https://csrc.nist.gov/pubs/sp/800/153/final
  - Cyber Essentials | https://www.ncsc.gov.uk/cyberessentials/overview
related:
  - One Click, Real Rands: What Weak Phishing Awareness Costs a Business | /impact/employees-clicking-fraudulent-links-weak-security-awareness-phishing-fraud-interruption-cost/
  - The Hidden Productivity Cost of Poor Office Wi-Fi | /impact/pain-poor-office-wi-fi-slowing-employees-down/
  - Backups in the Same Place as the Data: The Risk of Losing Both | /impact/backups-same-environment-losing-both-copies-risk/
summary: When visitors and unmanaged devices share a network with payment, office and equipment systems, one infected phone can slow sales, spread malware and expose business data.
layout: plain
---
## The visitor, the Wi-Fi password and the till system

A small restaurant group in Stellenbosch gives out its Wi-Fi password at the front desk and prints it on the menu. It is the same network that carries the card machines, the stock system, the office computers and the security cameras. A guest connects a phone that has an infected app on it. A contractor plugs a laptop into a spare wall port. A cleaner's tablet joins because someone told her the password last year. None of these people means any harm. All of them are now on the same network as the systems that run the business.

That is the pain this article covers: guest devices sharing a network with business systems, so that a device the business does not manage or control sits beside the ones it depends on. The risk is not that something will happen every week. It is that when something does happen, there is nothing in the way.

## What goes wrong on a flat network

A network with no separation is called a flat network. Every connected device can, in principle, try to communicate with every other. That is convenient in a home. In a business, it creates several kinds of exposure.

- **Unmanaged devices.** Guest phones, contractor laptops and visitors' tablets have no business-controlled updates, antivirus or policies. If one is compromised, it carries the problem straight onto the network.
- **Scanning and discovery.** Software on one device can look for others, such as file shares, printers, cameras and servers, and try default or weak passwords.
- **Spread of malware.** Ransomware and other malicious software often move sideways from one device to the next. A flat network lets them do so with little resistance.
- **Shared passwords.** A single Wi-Fi password given to many people is impossible to withdraw from one person without changing it for everyone.
- **Capacity.** Guests streaming video compete with point-of-sale and cloud systems for bandwidth, so slowdowns hit paying customers first.

## The financial effect

The cost splits into the expected small costs of a poorly separated network and the less likely but larger cost of an incident.

### Everyday cost: slow systems and support calls

If card machines time out because the connection is saturated, queues lengthen and sales are lost. If an office printer is used by outside devices, or a guest changes something on a shared device, staff spend time on support. Where network use cannot be seen, as described in [network capacity use that is not visible](/impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/), these slowdowns can be hard to diagnose and are often blamed on the wrong thing.

### Incident cost: malware and downtime

An infection that spreads across an unseparated network can take down many devices at once. The cost includes downtime, recovery, replacement of equipment, loss of data that was not backed up and, for some businesses, reputational harm. An illustrative three-day outage in a business that earns R60,000 a day in sales is R180,000 in revenue before any recovery work, and a card-payment business may have no manual alternative.

### Compliance and personal information

If guests or attackers can reach systems that hold customer or employee records, the business may face questions about whether it took appropriate steps to secure that information. Network design is one of those steps.

### Liability for what guests do

Guests using a business connection leave activity traced back to the business's address. A separate guest network, with its own limits, helps keep that activity apart from the systems that matter.

## What separation means, in plain terms

Separation does not require an enterprise budget. At its simplest, it means two or more networks that share an internet connection but not each other's devices. Guest devices can reach the internet but cannot see or talk to the office computers, the payment terminals or the cameras.

The US Cybersecurity and Infrastructure Security Agency, in its guidance on [securing wireless networks](https://www.cisa.gov/news-events/news/securing-wireless-networks), points out that many wireless routers offer a guest feature that allows guests to use a separate wireless channel with a separate password, keeping the main credentials private. That is the minimum starting point and often already exists in the equipment a business owns but has not configured.

Businesses with more devices or higher risk usually go further. The US National Institute of Standards and Technology publishes [guidelines for securing wireless local area networks](https://csrc.nist.gov/pubs/sp/800/153/final), which cover the design and operation of wireless networks in organisations. For a small business, the practical translation is to place guests, staff devices, payment systems and equipment such as cameras and printers on separate segments, and to allow only the traffic each group actually needs.

The UK's National Cyber Security Centre runs the [Cyber Essentials](https://www.ncsc.gov.uk/cyberessentials/overview) scheme, which sets out a baseline of technical controls for organisations, including controls over how a network is connected and configured. Even if you never certify, the baseline is a useful checklist to compare your set-up against.

## Why the problem persists

Most businesses with a flat network did not choose it. They inherited it.

- The network was set up by a supplier who delivered the quickest working result, often using [consumer-grade networking equipment](/impact/consumer-grade-networking-business-operations-instability-cost/) with limited control options.
- Nobody has been responsible for the network since, so changes have been made in a hurry and never documented.
- The cost of separating it is thought to be high, while the cost of not doing so is invisible until an incident.
- Updates to routers and access points are neglected, which is a risk of its own, as shown in [delaying security updates until something breaks](/impact/delaying-security-updates-until-something-breaks-known-weakness-financial-risk/).

Personal and unmanaged devices are part of the same story. When staff connect their own computers to the main network, they too become devices the business cannot control, which is the problem described in [staff personal computers for company work](/impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/).

## Practical next actions

1. **Draw the network on one page.** List the router, access points, switches and every type of device connected, and mark which ones are guests, staff, payment or equipment.
2. **Switch on the guest network now.** Use the guest feature of your router or access points, give it its own name and password, and make sure it is isolated from the main network.
3. **Move guests, contractors and personal phones onto it.** Take the main password off menus, walls and old emails, and change it once the move is done.
4. **Separate payment terminals and cameras.** Place them on their own segment, and allow only the connections they need to work.
5. **Replace shared passwords with named access where possible.** Use a rotating guest code or a login for staff devices, so that one departure does not mean changing everything.
6. **Update and review the equipment.** Install current firmware, change default administrator passwords and book a review each quarter, ideally by someone who can check that guest traffic really cannot reach the office devices.

Test the result by connecting a spare phone to the guest network and trying to reach a shared printer or office computer. If it succeeds, the separation is not working yet. The aim is not to make guests unwelcome, but to give them an internet connection that cannot take the business down with it.
