---
hub: impact
record_id: CPS-211
slug: operating-system-application-updates-not-automatic-outdated-devices-cost
title: Updates Left to Chance: The Support and Security Cost of Outdated Devices
description: When laptops and desktops only update when their users get round to it, the business carries a fleet in many different states, with more support tickets and known security holes left open.
lead: When laptops and desktops only update when their users get round to it, the business carries a fleet in many different states, with more support tickets and known security holes left open.
category: IT Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: IT Operations
commercial_domain: IT Operations
primary_pain: Operating-system and application updates are not installed automatically, so devices drift into many different and outdated states
primary_cost_mechanism: Slower support diagnosis, repeated incidents that vendor fixes already solve, technician time for manual emergency patching, unplanned device replacement, and exposure to actively exploited vulnerabilities
sources:
  - Windows Update client policies | https://learn.microsoft.com/en-us/windows/deployment/update/windows-update-client-policies
  - Known Exploited Vulnerabilities Catalog - CISA | https://www.cisa.gov/known-exploited-vulnerabilities-catalog
related:
  - Laptops That Leave With Employees: The Cost of No Return Process | /impact/devices-issued-without-return-process-equipment-lost-when-employees-leave-cost/
  - Staff Using Personal Laptops for Work: The Security and Support Cost of Inadequate Devices | /impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/
  - Which Devices Can Reach Your Data? The Risk of Unmanaged Endpoints | /impact/not-knowing-which-devices-access-company-information-unmanaged-endpoint-risk-cost/
summary: When laptops and desktops only update when their users get round to it, the business carries a fleet in many different states, with more support tickets and known security holes left open.
layout: plain
---
## Twenty laptops, twenty different states

A professional services firm in Stellenbosch has 22 laptops. Ask its IT provider which version of Windows, which browser and which version of the office suite each one runs, and the honest answer is "it depends". Some users click "update now" when prompted. Others postpone for weeks because a restart would interrupt their work. Two machines have not installed a major update in over a year because an old accounting add-in once failed after an upgrade. The PDF software, the browser plug-ins and the remote-access tool are updated whenever someone remembers.

Nothing is broken today. But the business has quietly accepted a fleet of devices in twenty different conditions, and it pays for that in support time and in risk.

This article is about the absence of automatic, managed updating. It differs from [deliberately delaying security updates](/impact/delaying-security-updates-until-something-breaks-known-weakness-financial-risk/), which is a choice. Here, there is no choice being made at all: updating is left to each user and each application.

## Why updating is left to users

- **Devices were set up one at a time.** Each laptop was configured when it was bought, by whoever was available, and nobody applied a common policy.
- **Restarts are unpopular.** Users postpone updates because they interrupt work, and nothing forces the update eventually.
- **Bad experiences linger.** One update that broke a printer driver or a plug-in years ago becomes a reason never to update automatically again.
- **Third-party applications are forgotten.** Even where the operating system updates itself, browsers, PDF readers, compression tools and remote-access software may not.
- **Nobody can see the fleet.** Without a management tool, there is no screen that shows which devices are behind.

## The support cost of an inconsistent fleet

### Harder diagnosis

When every device is different, every support ticket starts with working out what is on the machine. A problem that affects one version of an application but not another is hard to reproduce. Technicians spend time on discovery rather than on the fix.

### Repeated, avoidable incidents

Many faults that users report have already been fixed by the vendor. Crashes, sync problems and compatibility issues often disappear once the device is current. When updates are left to chance, the business keeps paying for problems that a patch has already solved.

### Emergency updating

When a serious vulnerability is announced, a business with no update management has to visit or remote into each device individually. For 22 laptops at 30 minutes each, that is 11 hours of technician time for one urgent update. Illustratively, at R450 an hour, that is around R5,000 each time, and it tends to happen several times a year.

### Unplanned replacement

Devices that fall far behind are more likely to hit the end of support for their operating system unexpectedly, forcing replacement or upgrades at a time the business did not choose. The cost of [holding on to ageing computers](/impact/ageing-computers-false-hardware-savings-cost/) often starts here.

## The security cost

Attackers rely on known weaknesses that have patches available but have not been installed. The US Cybersecurity and Infrastructure Security Agency maintains a [Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), which it describes as the authoritative source of vulnerabilities that have been exploited in the wild, and it recommends that organisations use it as an input to prioritise patching. Every entry is a weakness someone is actively using. A device that missed its updates is likely to carry several of them.

The consequence for a small business is not abstract. A compromised laptop can expose email, saved browser sessions to banking and accounting systems, and files synced from shared drives. Recovery means investigation, rebuilding the device, resetting credentials and checking for fraud, all of which costs far more than keeping the device current.

## What managed updating looks like

Managed updating means the business, not each user, decides when updates are installed, and has a way to confirm they were. For Windows devices, Microsoft's documentation on [Windows Update client policies](https://learn.microsoft.com/en-us/windows/deployment/update/windows-update-client-policies) describes a free capability for business editions of Windows that lets administrators control which updates are offered and when, deploy them in waves, and set deadlines by which an update must be installed. The recommended experience is to let devices download, install and restart automatically, with deadlines so updates cannot be postponed indefinitely. Testing updates on a small group of devices first reduces the risk of a bad update affecting everyone.

Applications need the same treatment. Many device management tools can update common third-party software automatically, and many applications have their own automatic update settings that can be enforced centrally. A report showing each device's update state turns an unknown into something that can be checked weekly.

Managed updating is closely linked to [manual device setup](/impact/manual-device-setup-labour-rework-cost/). Businesses that configure every device by hand usually also update them by hand. Fixing both together is often the most efficient path.

## The commercial trigger

Three moments make the case easy to approve: a support contract renewal, when the business can ask for update management and reporting as part of the service; a planned laptop refresh, when new devices can be enrolled into management from day one; and the aftermath of any security scare, when the cost of manual emergency patching has just been felt.

## A simple cost comparison

The following figures are illustrative assumptions. A business with 30 devices experiences three urgent update rounds a year at 30 minutes per device, plus four extra support tickets a month that a current device would have avoided, each taking an hour. At R450 an hour, that is around R20,000 a year for urgent rounds and R21,600 for avoidable tickets, before any security incident or lost user time. A device management licence, or the extra time for a provider to manage updates centrally, can be compared directly against those figures.

## Practical next actions

1. **Take an inventory of update state.** List every laptop and desktop with its operating system version, last update date and main applications.
2. **Find the stragglers.** Identify devices that have not updated for more than 30 days and the reasons why, such as a legacy add-in or an unsupported operating system.
3. **Set a central update policy.** Use the update controls in your device management tool or operating system to install updates automatically, with deadlines and a short grace period for restarts.
4. **Use a small test group.** Let three or four devices receive updates first, so a faulty update is caught before it reaches everyone.
5. **Include third-party applications.** Browsers, PDF readers and remote-access tools should be updated as reliably as the operating system.
6. **Ask for a monthly compliance report.** Your IT provider should be able to show which devices are current and which need attention.

Leaving updates to each user feels free, because nobody receives an invoice for it. The cost appears instead as slower support, repeated incidents and security risk that grows quietly between updates.
