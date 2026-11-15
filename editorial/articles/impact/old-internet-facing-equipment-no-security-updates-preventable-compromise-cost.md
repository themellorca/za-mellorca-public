---
hub: impact
record_id: CPS-138
slug: old-internet-facing-equipment-no-security-updates-preventable-compromise-cost
title: Old Routers and Firewalls Without Security Updates: The Price of a Preventable Breach
description: Routers, firewalls and VPN boxes that no longer receive updates sit on the edge of the network, facing the internet. Keeping them saves a replacement bill and exposes the business to a far larger one.
lead: Routers, firewalls and VPN boxes that no longer receive updates sit on the edge of the network, facing the internet. Keeping them saves a replacement bill and exposes the business to a far larger one.
category: Information Security
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Information Security
commercial_domain: Information Security
primary_pain: Old internet-facing routers, firewalls and VPN devices remain in use after they stop receiving security updates
primary_cost_mechanism: Incident response and recovery fees, downtime when edge equipment must be taken offline, fraud and personal information exposure with notification obligations, and emergency replacement at short notice
sources:
  - BOD 26-02: Mitigating Risk From End-of-Support Edge Devices - CISA | https://www.cisa.gov/news-events/directives/bod-26-02-mitigating-risk-end-support-edge-devices
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
  - Known Exploited Vulnerabilities Catalog - CISA | https://www.cisa.gov/known-exploited-vulnerabilities-catalog
related:
  - Guests on the Business Network: The Hidden Cost of Poor Separation | /impact/guest-devices-sharing-network-with-business-systems-poor-network-separation-financial-security-risk/
  - One Click, Real Rands: What Weak Phishing Awareness Costs a Business | /impact/employees-clicking-fraudulent-links-weak-security-awareness-phishing-fraud-interruption-cost/
  - Passwords in Spreadsheets and Chats: The Business Risk of Insecure Storage | /impact/business-passwords-stored-documents-spreadsheets-chat-credential-risk/
summary: Routers, firewalls and VPN boxes that no longer receive updates sit on the edge of the network, facing the internet. Keeping them saves a replacement bill and exposes the business to a far larger one.
layout: plain
---
## The box in the cupboard that still works

In many offices, the most exposed piece of technology is the one nobody thinks about. A router or firewall installed eight years ago still passes traffic. The VPN appliance that let staff work from home during lockdown still accepts connections. The lights are green, so it stays. What nobody has checked is whether the manufacturer still releases security fixes for it.

When a device reaches end of support, the vendor stops producing updates. Any weakness discovered after that date stays open permanently. For equipment that sits between the business and the internet, that is a serious position to be in.

## Why internet-facing equipment carries special risk

Laptops and internal servers are partly shielded by the network around them. Edge devices are not. Routers, firewalls, VPN gateways, load balancers and some wireless equipment are reachable from anywhere, and attackers scan the internet continuously for known vulnerable models.

In February 2026 the US Cybersecurity and Infrastructure Security Agency issued [Binding Operational Directive 26-02](https://www.cisa.gov/news-events/directives/bod-26-02-mitigating-risk-end-support-edge-devices) on end-of-support edge devices. It requires US federal civilian agencies to inventory such devices, replace those that are past end of support within set deadlines, and build ongoing lifecycle management. Its rationale is that advanced threat actors are running widespread campaigns against these devices because of how far into a network they reach. The directive does not bind South African businesses, but the reasoning applies to any organisation with the same equipment.

The UK National Cyber Security Centre makes a similar point in its guidance on [obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products). It notes that unsupported products will not receive fixes, often lack modern protections, and that over time new vulnerabilities will be found that can be exploited by relatively low-skilled attackers. Its conclusion is direct: the only fully effective mitigation is to stop using the obsolete product.

## How a preventable compromise becomes expensive

CISA maintains a [Known Exploited Vulnerabilities catalogue](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), which lists flaws that have been used in real attacks. For many entries, the required action is to apply the vendor's fix or stop using the product if no fix exists. For an end-of-support device, the second option is the only one available.

The costs below are illustrative, to help a business estimate its own exposure.

### Incident response and recovery

Investigating a compromise, rebuilding affected systems and restoring data typically needs outside specialists. Even a contained incident can take several days of specialist time and a week of internal disruption.

### Downtime

If the edge device must be taken offline, the business may lose internet access, remote access and cloud applications at once. For a 25-person business with a payroll cost of roughly R18,000 a day, three days of severely disrupted work represents more than R50,000 of paid but unproductive time, before lost sales are counted.

### Fraud and data exposure

Compromised edge devices are used to intercept traffic, steal credentials and move deeper into the network. That can lead to payment fraud, business email compromise or exposure of personal information, with obligations to notify the Information Regulator and affected people under the Protection of Personal Information Act.

### Emergency replacement

The device has to be replaced anyway, now at short notice, often at a premium, and with no time to plan the configuration properly.

## Why old equipment stays in place

The reasons are understandable. The device works. Replacement means a capital purchase and a configuration project. Nobody has a list of edge equipment and its support dates. The supplier who installed it may no longer be involved. The article on [consumer-grade networking](/impact/consumer-grade-networking-business-operations-instability-cost/) shows how the same thinking leads to unsuitable equipment being installed in the first place, and [delaying security updates until something breaks](/impact/delaying-security-updates-until-something-breaks-known-weakness-financial-risk/) covers the broader habit.

The financial comparison is usually lopsided. A capable small-business firewall or router costs a fraction of the likely cost of a single serious incident. The difficulty is that the replacement cost is certain and visible, while the incident cost is uncertain and invisible until it arrives.

## Questions to ask your IT supplier

Many smaller businesses rely on an outside provider for their network. That is sensible, but it does not transfer the risk. Useful questions include: which of our devices face the internet, and what are their end-of-support dates? When were they last updated? Is remote management open to the internet, and if so, why? Who receives the manufacturer's security notices for our equipment, and what happens when one arrives? If the supplier cannot answer quickly, that in itself is a finding. A provider who manages your edge equipment should be able to produce this list within a day, and should be raising replacements before support ends rather than after a vendor notice or an incident forces the issue.

It is also worth asking about equipment the provider does not manage. Branch routers bought locally, a VPN box installed by a previous supplier, or a remote-access device installed for a single piece of software often fall outside any contract. These forgotten devices are the ones most likely to be both unsupported and exposed.

## A lifecycle approach for smaller businesses

- **Know what faces the internet.** List every router, firewall, VPN device, wireless controller and remotely managed appliance, with model, firmware version and owner.
- **Record support dates.** Check each manufacturer's end-of-support or end-of-life notice and note the date.
- **Replace before the date, not after.** Budget for replacements a year ahead, alongside other infrastructure such as the items in [ageing servers with no replacement date](/impact/ageing-server-no-replacement-date-failure-and-end-of-support-cost/).
- **Keep supported devices updated.** Apply firmware updates on a schedule and check the vendor's security notices.
- **Reduce exposure while you replace.** Turn off remote administration from the internet, close unused services, require multi-factor authentication on remote access and restrict who can connect.

## Practical next actions

1. **Build an edge device list this week.** Include branch sites, home-office equipment supplied by the business and any device a supplier manages for you.
2. **Check support status for each device.** Mark anything already past end of support, and anything reaching it within twelve months.
3. **Compare models against the Known Exploited Vulnerabilities catalogue.** Prioritise any device whose vendor and product appear there.
4. **Price replacements now.** Get quotes that include configuration, testing and documentation, not just hardware.
5. **Apply interim protections.** Disable internet-facing management, enforce multi-factor authentication on VPN access and review firewall rules.
6. **Set a review date.** Add edge device support dates to the same calendar as software renewals so they are reviewed every year.

Old internet-facing equipment is one of the few security risks where the cause is known in advance, the date is published by the manufacturer and the fix is a straightforward purchase. Leaving it in place turns a planned expense into an unplanned one, usually at a much higher price.
