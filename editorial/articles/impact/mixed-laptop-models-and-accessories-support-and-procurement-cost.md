---
hub: impact
record_id: CPS-205
slug: mixed-laptop-models-and-accessories-support-and-procurement-cost
title: Five Laptop Models, Three Chargers: What Inconsistent Hardware Costs a Business
description: When every employee has a different machine and accessories do not fit, support takes longer, setup is slower and buying loses its leverage, adding up to a steady yearly cost.
lead: When every employee has a different machine and accessories do not fit, support takes longer, setup is slower and buying loses its leverage, adding up to a steady yearly cost.
category: Digital Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Not standardising employee computers and accessories
primary_cost_mechanism: Slower support and device setup, lost purchasing terms, stranded accessories and weaker device management
sources:
  - Overview of Windows Autopilot | https://learn.microsoft.com/en-us/autopilot/windows-autopilot
  - What is Microsoft Intune? - Microsoft Intune | https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - New Starters Waiting for Logins: The Payroll Cost of Slow Access Setup | /impact/new-starters-waiting-for-logins-access-setup-cost/
  - One Spreadsheet, Three Jobs: The Cost of Using Excel as Form, Database and Workflow | /impact/spreadsheet-as-form-database-workflow-errors-maintenance-cost/
  - Thirty People, Five-Person Processes: The Cost of Systems That Did Not Grow | /impact/five-person-processes-growing-business-scaling-cost/
summary: When every employee has a different machine and accessories do not fit, support takes longer, setup is slower and buying loses its leverage, adding up to a steady yearly cost.
layout: plain
---
## The tolerated pain

The finance team has three laptop models from three different years. Sales prefers the one a manager bought on a promotion. A new starter gets whatever was left in the cupboard, plus a charger from a previous employee that turns out to be the wrong wattage. The docking station in the boardroom fits two of the five laptop types. When something breaks, the person helping has to work out first which machine it is, which driver set applies and whether a spare exists.

None of this feels like a crisis. Each choice made sense on the day: a good price, a quick replacement, a staff member who needed something urgently. Together they create a support and buying burden that nobody sees as a line item. This article looks at what inconsistency costs and how to bring order without forcing everyone onto identical machines. It is a different problem from [buying devices only when they break](/impact/buying-devices-only-when-they-break-emergency-replacement-cost/), which is about timing. Here the issue is variety.

## Why hardware drifts

- **Purchases are made one at a time.** A request arrives, someone searches for the cheapest option that day, and a new model enters the fleet.
- **No one has defined "standard".** Without a short list of approved models, every purchase is a fresh decision.
- **Different people buy.** Managers, office administrators and finance all buy equipment, each with a different view of what is needed.
- **Accessories are an afterthought.** Monitors, headsets, chargers and adaptors accumulate with every purchase and rarely match.
- **Staff are given personal preference without a trade-off.** Choice is pleasant, but each exception adds a model that someone must support for years.

## Operational symptoms

- the support person asking "which laptop is this?" before every fix;
- spare chargers, docks and batteries that fit some machines and not others;
- software that works on one machine and misbehaves on another with the same job;
- new-starter setup that takes a different amount of time every time;
- a drawer of unlabelled cables and adaptors nobody trusts;
- no clear list of what equipment each person actually has, and when it was bought.

## How the pain becomes money

- **Slower support:** every extra model brings its own drivers, firmware quirks and failure patterns. A technician who sees the same machine thirty times learns it. One who sees thirty different machines does not.
- **Slower setup:** tools such as Windows Autopilot are designed to prepare new devices consistently, but they work best when the business has a defined configuration to apply. Microsoft's [Windows Autopilot documentation](https://learn.microsoft.com/en-us/autopilot/windows-autopilot) describes simplifying how devices are set up and configured for users. See also [manual device setup: labour and rework cost](/impact/manual-device-setup-labour-rework-cost/).
- **Weaker buying power:** buying a few units of many models rarely earns the terms that a regular order of one or two models could.
- **Stranded accessories:** docks, power supplies and screens bought for one model cannot be reused when staff move to another.
- **Spares problem:** to cover failures, the business must hold more spare variety or accept longer waits for a replacement. Staff are paid while a laptop is repaired.
- **Management gaps:** mixed fleets are harder to patch, encrypt and monitor uniformly. Microsoft's [Intune overview](https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune) describes managing devices and applying policy from one place, which is far easier when devices are of a small number of types.

## An illustrative cost model

This example is **illustrative**. All figures are assumptions for a hypothetical Cape Town professional-services firm with 60 staff and a mix of five laptop models.

| Assumption | Value |
| --- | --- |
| Support tickets a year linked to model-specific issues | 120 |
| Extra time per ticket compared with a standard fleet | 45 minutes |
| Loaded cost of support time | R350 an hour |
| New or replacement devices set up each year | 15 |
| Extra setup time per device | 45 minutes |
| Annual device spend | R300,000 |
| Discount lost by not consolidating orders | 8% |
| Docks and adaptors replaced because they do not fit new models | 12 at R1,800 |

- Extra support time: 120 × 0.75 × R350 = R31,500
- Extra setup time: 15 × 0.75 × R350 = about R3,900
- Lost purchasing terms: 8% × R300,000 = R24,000
- Stranded accessories: 12 × R1,800 = R21,600
- **Illustrative total: about R81,000 a year**

The figure leaves out the time staff spend waiting for a fix, which is often bigger than the technician's time. The related picture of support delays is described in [routine IT support delays and productivity cost](/impact/routine-it-support-delays-productivity-cost/).

## Why the pain is tolerated

The cost is distributed across many small moments: ten extra minutes on a ticket, a spare charger that does not fit, a purchase that cost slightly more. No single event is worth a meeting. The person who benefits from variety, such as the employee with a preferred machine, is visible, while the person who pays, such as the support function or finance, is not.

## When it becomes commercially urgent

- the business is growing and adds a dozen staff within a year;
- a security review or insurer asks for an inventory and patch evidence for every device;
- a key technician leaves and nobody else knows the quirks of each model;
- a supplier discontinues a model the business has relied on for spares;
- staff begin to work from home and each person's setup must function without a technician on site.

## What better looks like

Standardising does not mean everyone gets the same thing. It means a short, deliberate menu.

1. **Take inventory.** List every device, its model, age and user. The approach in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) works equally well for hardware: record the owner, the purpose and the next decision date.
2. **Define two or three standard profiles.** For example a general office laptop, a higher-specification laptop for design or analysis, and a lightweight shared device. Name the approved models for each.
3. **Standardise accessories as well.** Choose one dock type, one charger standard, one headset and one monitor size. Accessories outlive laptops, so a consistent choice saves money across several refresh cycles.
4. **Create an exception route.** People with a real need, such as accessibility requirements, can ask for something different. The exception is recorded and owned.
5. **Buy on a schedule.** Plan replacements in batches, for instance a third of the fleet each year, with a regular supplier and agreed terms.
6. **Set up devices from a template.** Prepare one build with the required software and security settings, and apply it automatically where tools allow.
7. **Retire the oldest variety first.** When something is replaced, move to the standard model rather than the same one-off.

Asset discipline also supports security. The UK National Cyber Security Centre's guidance on [asset management](https://www.ncsc.gov.uk/collection/10-steps/asset-management) explains that an organisation needs to know what assets it has and how they are used, since unknown or unmanaged equipment cannot be reliably protected. For a South African business holding customer information, that connects directly to the duty to secure personal information under POPIA.

## Practical next actions

1. Count how many different laptop models and dock types are in use today.
2. Ask your support provider which three models cause the most extra work.
3. Pick one standard office laptop and one standard dock for the next purchase.
4. Write a half-page rule: who may buy equipment and from which list.
5. Ask your supplier for a quote on a planned annual batch order.
6. Label spares so that each charger and adaptor is matched to its device.

## Bottom line

A mixed fleet looks like flexibility but works like friction. Each extra model adds support time, setup time, accessories and spares. The cost is small per event and large across a year. A short list of approved devices and accessories, an exception route for real needs and a regular buying cycle will usually cut support effort and purchase cost without making anyone's day worse.
