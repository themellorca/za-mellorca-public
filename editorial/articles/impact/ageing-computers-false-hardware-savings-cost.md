---
hub: impact
record_id: CPS-202
slug: ageing-computers-false-hardware-savings-cost
title: Old Computers Kept Too Long: The False Saving on Hardware
description: Keeping computers in service past the point where they support productive, secure work looks frugal. The deferred cost reappears as support time, security exposure and rushed replacement.
lead: Keeping computers in service past the point where they support productive, secure work looks frugal. The deferred cost reappears as support time, security exposure and rushed replacement.
category: Digital Infrastructure
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Computers kept in service after they stop supporting productive, secure work
primary_cost_mechanism: Support labour, lost capacity, escalating extended-support fees and security risk exposure
sources:
  - Extended Security Updates (ESU) program for Windows 10 | https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
related:
  - Unmonitored Backups Create False Recovery Confidence | /impact/unmonitored-backups-false-recovery-confidence/
  - New Employees Without Equipment Create Paid Onboarding Delay | /impact/new-employees-without-equipment-onboarding-cost/
  - Paying for Server Capacity the Business Does Not Use | /impact/overprovisioned-server-capacity-cost/
summary: Keeping computers in service past the point where they support productive, secure work looks frugal. The deferred cost reappears as support time, security exposure and rushed replacement.
layout: plain
---
## The tolerated pain

Most businesses have a few machines that everybody knows about. The laptop in the dispatch office that needs ten minutes to wake up. The desktop at reception that cannot run the current version of the accounting package. The workstation that still runs an operating system the vendor no longer patches, kept because "it still works" and because nobody wants to sign a purchase order for something that has not actually died.

The reasoning feels sound. A computer that switches on is an asset that has already been paid for. Replacing it costs cash now; keeping it appears to cost nothing. The problem is that a device can keep working long after it stops supporting *productive* work, and the costs it creates are spread across support tickets, security exposure, workarounds and a replacement that eventually happens in a hurry.

This article is about that lifecycle decision: when an old device moves from a sensible saving to a false one. The day-to-day cost of slow machines is covered separately in [how slow computers turn small delays into paid waiting](/impact/slow-computers-paid-waiting-cost/); here the focus is on support status, risk and the economics of deferring replacement.

## Why businesses tolerate it

- **Purchase price is visible, running cost is not.** A new laptop appears as a single line on a quote. The hours lost to an old one are scattered across the team and never invoiced.
- **No owner for device lifecycle.** Devices are bought when someone joins or something breaks, not on a planned cycle, so nobody is responsible for asking whether a machine is still fit for purpose.
- **Cash-flow caution.** In a tight month, deferring capital spending is an understandable instinct. The difficulty is that deferral is rarely revisited.
- **Support status is invisible to non-specialists.** An unsupported operating system looks identical to a supported one until something goes wrong.

## Operational consequence

Ageing devices tend to produce the same pattern of symptoms:

- repeated support calls for the same machines, often resolved by a restart that does not last;
- software that cannot be upgraded because the device does not meet the newer version's requirements, so the business runs mixed versions;
- staff avoiding particular tasks on particular machines, or sharing a better device informally;
- security updates that fail, are postponed or are no longer offered at all;
- a growing reliance on one technician or staff member who "knows how to keep it going".

The last point matters. When an old machine needs special handling, the business has quietly created a dependency on a person's memory, which is its own risk. See [the cost of key-person operational dependency](/impact/key-person-operational-dependency/).

## The support cliff

The clearest signal that a device has crossed from saving to liability is the end of vendor support. Microsoft ended support for Windows 10 on 14 October 2025. According to its [Extended Security Updates documentation](https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates), PCs keep working after that date, but Microsoft no longer provides technical support, feature updates or quality updates, including security fixes, for those versions.

Organisations can buy a paid Extended Security Updates (ESU) subscription to keep receiving critical and important security updates. Microsoft states the organisational price as US$61 per device for year one, doubling every consecutive year, for a maximum of three years. ESU must be bought by whole year and is cumulative, so a business joining in year two also pays for year one. It includes no new features and no general technical support, and devices must be on Windows 10 version 22H2 to be eligible.

In other words, the "free" option of keeping an old Windows 10 machine either carries an escalating per-device fee or carries unpatched security exposure. Neither is free.

The UK National Cyber Security Centre's [guidance on obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products) is blunt about the risk: once a product stops receiving security updates, vulnerabilities are more likely to be exploited, and older products also lack newer protective measures. Its advice is that the only fully effective mitigation is to stop using the obsolete product. Interim measures exist, such as restricting what the device can reach, treating it as untrusted and monitoring it more closely, but each of those is extra work that someone must do and maintain.

## How the pain becomes money

- **Support labour:** internal or outsourced time spent on the same ageing devices, month after month.
- **Lost productive capacity:** time staff spend waiting, restarting or working around limitations.
- **Extended-support fees:** where a business buys ESU, an annual per-device cost that rises each year.
- **Risk exposure:** an unpatched device that is compromised can expose email, banking sessions and customer data. The cost of an incident is uncertain, but the likelihood rises when patches stop.
- **Emergency replacement cost:** devices that finally fail are replaced at short notice, often at worse prices, with rushed setup and data recovery.

## An illustrative cost model

The following example is **illustrative**. All figures are assumptions chosen to show the arithmetic, not benchmarks. Picture a Durban logistics business with 15 staff, six of whom use computers that are seven or more years old and can no longer run a supported operating system.

| Cost line | Illustrative assumption | Annual cost |
| --- | --- | --- |
| Support time on the six old devices | 3 hours per device per month × R450 per hour × 12 | R97,200 |
| Blocked staff time | 15 minutes per user per day × 6 users × 230 days = 345 hours × R250 per hour | R86,250 |
| Workarounds and data recovery after failures | 4 incidents × 6 hours × R450 | R10,800 |
| **Total recurring cost of keeping** |  | **R194,250** |

Against that, assume replacing the six devices costs R14,000 each including setup and data migration: R84,000 in total. If replacement removed only half of the recurring cost, the recovered value would be roughly R97,000 a year, and the replacement would pay back within the first year, before any security exposure is counted. With different inputs the answer may be different; the method is what matters. Use your own ticket history, payroll costs and quotes.

## When it becomes commercially urgent

The trigger points are usually clear once someone looks:

1. the operating system or a critical application has reached end of support;
2. the same devices account for a disproportionate share of support tickets;
3. a core business application's next version will not run on the existing hardware;
4. the business handles personal information or payments on devices that no longer receive security updates;
5. cyber insurance or a client's security questionnaire asks whether all devices are supported.

## What better looks like

A business that manages device life well keeps a simple register: each device, its user, purchase date, operating system version and support end date. Replacement is planned on a cycle and budgeted across years rather than triggered by failure. Devices are standardised so that setup is repeatable, which also reduces the labour described in [the labour cost of manual device setup](/impact/manual-device-setup-labour-rework-cost/). Old machines are retired deliberately, with data removed securely, rather than left in a cupboard or passed down to a junior employee.

The NCSC also recommends considering the support lifetime of a product when choosing new hardware or software, so the next refresh is not a surprise.

## Practical diagnostic and remediation steps

1. **List every device** with its age, operating system version and vendor support end date.
2. **Pull six months of support tickets** and count them by device. A small number of machines usually accounts for a large share.
3. **Check application compatibility** for the next version of your core systems.
4. **Decide per device**: upgrade in place where the hardware supports it, replace, or isolate and retire on a date.
5. **If you buy extended support**, treat it as a bridge with an end date, not a strategy. The price escalates by design.
6. **Budget a rolling refresh** so that a portion of the fleet is replaced each year.

For a structured view of where infrastructure is costing more than it should, see Mellorca's [digital infrastructure services](/services/digital-infrastructure/). The reasoning that planned upkeep costs less than emergency repair is developed further in [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/).

## Bottom line

A computer that still switches on is not automatically a saving. Once support ends and support time climbs, keeping it means paying in labour, escalating fees or unmanaged risk. The economic question is not "does it still work?" but "what does it cost us each year to keep it working, and what does it expose us to?" Answer that with your own records, and the replacement decision usually becomes straightforward.
