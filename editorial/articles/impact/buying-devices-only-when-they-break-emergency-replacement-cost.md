---
hub: impact
record_id: CPS-204
slug: buying-devices-only-when-they-break-emergency-replacement-cost
title: Replacing Devices Only When They Break: The Real Price of Emergency Buying
description: Waiting for a laptop, router or phone to fail before replacing it moves the cost from a budget line to a crisis, with premium prices, downtime, rebuild labour and unsupported equipment left in service.
lead: Waiting for a laptop, router or phone to fail before replacing it moves the cost from a budget line to a crisis, with premium prices, downtime, rebuild labour and unsupported equipment left in service.
category: Digital Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Devices replaced only when they fail, always at the worst moment and without a plan
primary_cost_mechanism: Emergency purchase premium, downtime and rebuild labour, plus unsupported equipment left in service
sources:
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
  - Cost Optimization design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles
  - Reliability design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles
related:
  - The Human Dispatcher: The Cost of Manually Routing Every Incoming Request | /impact/manually-assigning-incoming-requests-routing-delay-cost/
  - Recreating Documents Nobody Can Find: The Cost of Duplicated Work | /impact/staff-recreating-lost-documents-duplicated-work-cost/
  - Four Tools, One Job: The Real Cost of Departments Buying Their Own Software | /impact/departments-buying-separate-tools-same-need-duplicate-subscription-cost/
summary: Waiting for a laptop, router or phone to fail before replacing it moves the cost from a budget line to a crisis, with premium prices, downtime, rebuild labour and unsupported equipment left in service.
layout: plain
---
## The tolerated pain

The finance manager's laptop has been slow for a year. On the last Thursday of the month it will not start at all. The month-end close, the payroll run and a supplier payment batch are all due by Monday. Someone drives to a retailer, buys whatever is in stock at the shelf price, and spends the weekend reinstalling software, finding licence keys and rebuilding email. The business pays for a laptop, for an emergency, and for a weekend of lost focus.

That is what happens when devices are bought reactively, only when something breaks. No single purchase looks like a mistake. The failed machine had to be replaced. But the pattern means the business always buys at the worst moment: with no time to compare, no ability to negotiate, no spare to swap in and a deadline already running.

The related article on [the false savings of ageing computers](/impact/ageing-computers-false-hardware-savings-cost/) explains why keeping old machines is costly. This article looks at the other half: the way those machines are eventually replaced, and what that habit costs compared with a plan.

## Why failure-driven buying is expensive

Reactive replacement turns a predictable expense into an unpredictable emergency. The extra costs are rarely on the invoice for the device.

- **Premium pricing.** Urgent purchases happen at retail prices, from whichever supplier has stock today, without the quote comparison or bulk terms a planned order would get.
- **Mismatched specification.** The replacement is chosen for availability, not for the work. It may be underpowered for the next three years or more expensive than needed.
- **Downtime while waiting.** The person cannot work until a replacement is sourced, delivered and set up. If it is a key role, other people wait too.
- **Rebuild labour.** Installing software, restoring files, signing in to accounts and reconfiguring printers takes hours, usually on a technician's emergency rate or from a skilled employee's own time.
- **Data risk.** A device that dies suddenly may take recent files with it if backups were not current. See [what untested backups cost when a restore is needed](/impact/backups-never-tested-restore-financial-cost/).
- **Inconsistent fleet.** A mixture of makes, ages and operating system versions raises support effort for every device that follows.

## The security and support dimension

Devices do not only fail by breaking. They also fail by becoming unsupported. The United Kingdom's National Cyber Security Centre explains in its guidance on [obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products) that once a product no longer receives security updates, known weaknesses accumulate and the latest protections are missing. It says that when a product becomes obsolete you must weigh the risk of continuing against the cost of replacing it, and that a decision to continue at risk should be revisited regularly.

A business that replaces only on breakage has, in effect, made that decision by default and never revisited it. The device is not broken, so it stays, even if it can no longer be updated. In a country where businesses must also take reasonable steps to protect personal information under POPIA, that default is a poor one.

## Why businesses tolerate it

- **It defers cash.** Not buying today leaves money in the bank this month, even if it costs more later.
- **There is no register.** Without a list of devices, ages and warranty dates, nobody can see which ones are about to fail.
- **Each failure looks like bad luck.** Without a record, the pattern of repeated emergencies is invisible.
- **Nobody owns the budget.** Technology spend is scattered across departments, so no one plans for replacement. The problem of [unclear ownership of technology spending](/impact/pain-unclear-ownership-technology-spending/) sits behind this habit.
- **Cash-flow pressure is real.** For many South African small businesses, a planned purchase competes with salaries, VAT and rent, and the replacement waits until it can no longer be avoided.

## Operational symptoms

- devices described as "still working" even though they are slow, unsupported or past warranty;
- staff keeping their own work backed up on USB drives because they do not trust the machine;
- urgent trips to a retailer, or requests to expense a personal purchase;
- a drawer of unlabelled old laptops, chargers and routers;
- a replacement taking a day or more to become useful because setup is manual;
- no one able to say how many devices the business owns or how old they are.

## How the pain becomes money

- **Emergency premium:** the difference between a planned, quoted purchase and a rushed retail one.
- **Lost productive time:** the hours a person cannot work, plus the hours others wait on them.
- **Rebuild labour:** setup and data recovery, charged at emergency rates or absorbed by skilled staff.
- **Missed deadlines:** late payroll, late invoices or late deliveries when the failure lands on a critical day.
- **Waste from poor fit:** equipment that is oversized and costly or undersized and soon replaced again.
- **Risk cost:** unsupported devices left in service until they fail, widening the security exposure.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Pretoria professional-services firm with 30 laptops, of which four fail unexpectedly in a year.

| Assumption | Value |
| --- | --- |
| Unplanned laptop failures per year | 4 |
| Emergency retail price versus planned quoted price | R19,500 versus R16,500 |
| Working hours lost per failure before the user is productive again | 14 |
| Loaded hourly cost of the affected user | R350 |
| Technician or skilled-staff rebuild time per device | 5 hours at R650 |
| Planned rebuild time per device using a standard setup | 1.5 hours at R650 |

- Emergency price premium: 4 × (R19,500 − R16,500) = R12,000
- Lost productive time: 4 × 14 × R350 = R19,600, against roughly R4,900 if swapped from a spare in about 3.5 hours
- Rebuild labour: 4 × (5 − 1.5) × R650 = R9,100 extra
- **Illustrative avoidable cost: about R36,000 in a year with four failures** (R12,000 + R14,700 + R9,100 = R35,800)

The figure grows quickly if a failure lands on payroll day or if one of the four is a server or a key person's machine. The calculation also leaves out data lost between the last backup and the failure. To put your own numbers on lost time, start with [why many businesses do not know the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).

## When it becomes commercially urgent

- the same type of emergency has happened more than twice in a year;
- an operating system or software version the fleet depends on is about to lose support;
- the business is hiring and each new starter needs a device quickly;
- a failure has already delayed payroll, a tender or a client deliverable;
- a lender, insurer or large customer asks how devices are managed.

## What better looks like

Planned replacement does not mean replacing everything early. It means knowing what you have, deciding on a sensible life, and spreading the cost.

1. **Build a device register.** Make, model, serial number, purchase date, warranty end, user and support status. Even a simple spreadsheet is a start; the Discovery piece on [asset registers that miss cloud and software services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/) shows what such a list often omits.
2. **Set a replacement cycle.** Choose a typical life for each device type and adjust it by role, since a design machine ages differently from a reception PC.
3. **Budget a fixed share each year.** Replace a slice of the fleet every year instead of everything at once or nothing until failure.
4. **Keep a small buffer.** One or two ready spares turn a failure into a swap rather than a shutdown.
5. **Standardise the setup.** A documented build, with software and settings ready, shortens the time from unboxing to working. See [the labour cost of manual device setup](/impact/manual-device-setup-labour-rework-cost/).
6. **Buy on quotes.** A planned order allows comparison, volume terms and the right specification for the role.

Microsoft's [cost optimization design principles](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles) make a general point that fits here: tactical approaches are reactive and reduce costs only in the short term, while long-term financial discipline comes from a strategy with prioritisation, continuous monitoring and repeatable processes. Hardware spend is no different, and the same vendor's [reliability principles](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles) remind us that failures are not realistic to rule out, so recovery has to be planned.

## Practical next actions

1. List every laptop, desktop, phone, router and printer with its purchase date and warranty status.
2. Mark which devices are unsupported or older than your intended replacement age.
3. Count the unplanned failures of the past twelve months and what each one cost in time and money.
4. Agree a yearly replacement budget and a trigger for each device type.
5. Buy one or two spares and write down a one-page build checklist.
6. Review the register every quarter and before each budget cycle.

## Bottom line

Waiting for a device to break feels frugal, but it moves the cost from a budget line to a crisis. The business pays more per device, loses more time per failure, and carries unsupported equipment for longer than it should. Knowing what you own, deciding when it should be replaced, and keeping a spare ready turns hardware from a recurring emergency into an ordinary, predictable expense.
