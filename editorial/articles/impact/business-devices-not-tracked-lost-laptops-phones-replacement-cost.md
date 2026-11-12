---
hub: impact
record_id: CPS-208
slug: business-devices-not-tracked-lost-laptops-phones-replacement-cost
title: Lost Laptops and Unknown Devices: What Untracked Equipment Costs
description: Most businesses cannot say which laptops and phones they own or who holds them, and that gap turns into replacement spend, lost data and wasted time.
lead: Most businesses cannot say which laptops and phones they own or who holds them, and that gap turns into replacement spend, lost data and wasted time.
category: Asset Management
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Asset Management
commercial_domain: Asset and equipment management
primary_pain: Business does not know which devices it owns, who holds them or what they hold
primary_cost_mechanism: Replacement of lost or unrecovered devices, duplicate purchases, emergency buying premiums, wasted search time and data exposure
sources:
  - What is Microsoft Intune? - Microsoft Intune | https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune
  - SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
related:
  - How Long Until We Are Back? The Cost of Not Knowing Your Recovery Time | /impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/
  - Why Deals Are Lost: The Cost of Not Knowing | /impact/not-knowing-why-deals-are-lost-unmanaged-sales-process-cost/
  - Slow Network, Unknown Cause: What It Costs When Nobody Can See Who Uses the Bandwidth | /impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/
summary: Most businesses cannot say which laptops and phones they own or who holds them, and that gap turns into replacement spend, lost data and wasted time.
layout: plain
---
## The question nobody can answer in under a day

Ask a business owner how many laptops, phones and tablets the company owns, who holds each one, and what it cost, and the honest answer is usually an estimate. Finance has invoices. The IT contractor has a list from two years ago. The sales manager remembers handing a phone to someone who has since resigned. None of these sources agree, and none is wrong exactly; they simply describe different moments.

That gap is cheap to ignore on a quiet day and expensive on a bad one. A laptop goes missing after a site visit, a director asks what is covered by insurance, an auditor asks for the fixed-asset list, or a new starter needs a machine and nobody knows whether a spare is sitting in a cupboard. Each of those moments turns the absence of a simple record into Rand.

This article is about equipment the business owns but cannot account for. It is related to, but different from, [buying devices only when they break](/impact/buying-devices-only-when-they-break-emergency-replacement-cost/), where the problem is timing. Here the problem is visibility: you cannot plan, protect or replace what you cannot list.

## How devices slip out of sight

Equipment rarely vanishes in one dramatic event. It drifts out of the record through ordinary habits.

- **Purchases made on a personal or departmental card.** The invoice reaches finance, but the serial number never reaches anyone.
- **Hand-me-downs.** A laptop moves from one employee to another, or to a family member of a contractor, with no note made.
- **Leavers.** A person resigns, returns a bag, and nobody checks the contents against what was issued. The situation is closely tied to [former employees who remain active in systems](/impact/former-employees-still-active-systems-incomplete-offboarding-cost/).
- **Spares and returns.** Old devices go into a drawer, which becomes a second, unofficial stockroom.
- **Phones and tablets treated as small items.** Because each is cheap relative to a server, nobody tracks them, though together they hold email, customer contacts and banking apps.
- **Personal devices used for work.** The business depends on equipment it does not own and cannot control, a risk covered in [staff personal computers used for company work](/impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/).

## The four places the money goes

### 1. Replacing what was never lost

When nobody can see the spares, the business buys a new laptop for a new starter while two usable ones sit unused. The reverse also happens: a machine is declared lost, replaced, and then turns up months later in a cupboard.

### 2. Replacing what was lost, without recovery

A device that is properly recorded and managed can often be locked or wiped remotely. Microsoft's documentation describes [Intune as an endpoint management service](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) used to enrol, configure and secure devices, which only works for devices the business knows about. An unrecorded phone with a company mailbox on it is a loss of hardware plus an open door.

### 3. Unplanned, undiscounted replacement

Without an age profile, every failure is an emergency. Emergency buying means whatever is in stock at the retail price, a pattern that also produces the mixed models described in [mixed laptop models and the support cost they create](/impact/mixed-laptop-models-and-accessories-support-and-procurement-cost/). A planned, staggered refresh lets you compare quotes and buy in batches.

### 4. Time and disruption

New employees who wait days for equipment are paid while unproductive, as examined in [new employees without equipment](/impact/new-employees-without-equipment-onboarding-cost/). Every hunt for a missing device is time taken from someone else's job.

## The compliance side

A lost laptop is not only a hardware loss when it holds personal information. South Africa's Protection of Personal Information Act requires a responsible party to secure the integrity and confidentiality of the personal information in its possession, by taking appropriate, reasonable technical and organisational measures. The text of the Act is published on the [South African government website](https://www.gov.za/documents/protection-personal-information-act). Knowing which devices hold company data is the starting point for showing that reasonable measures exist.

The same logic appears in international security practice. NIST's catalogue of security and privacy controls, [Special Publication 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), includes a control family on configuration management that covers keeping an inventory of system components. You do not need to adopt a US framework to borrow the idea: a list of what you own, who has it and what it holds is the foundation for every other control.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Cape Town marketing agency with 30 staff. They are not benchmarks.

| Assumption | Value |
| --- | --- |
| Laptops, phones and tablets in use or in drawers | about 75 |
| Devices that cannot be matched to a named holder | 9 |
| Devices lost or unrecovered in a year | 3 laptops at R18,000 and 2 phones at R9,000 |
| Replacements bought while a usable spare existed | 2 laptops at R18,000 |
| Extra cost of emergency versus planned buying | assume 12% on R180,000 of unplanned purchases |
| Staff hours spent searching and reconciling | 40 hours at R300 |

On those assumptions: lost devices come to R72,000, avoidable replacements to R36,000, the emergency premium to R21,600 and search time to R12,000. The total is R141,600 in a year, before counting any data incident. The assumptions will differ for your business, but the structure of the calculation will not.

## What a workable record looks like

An asset record does not need special software to begin. A spreadsheet with a disciplined owner is better than a sophisticated system nobody updates. At minimum, each device needs:

- a unique tag or serial number, matched to the invoice;
- the model, purchase date and purchase cost;
- the named holder and the date it was issued;
- its status: in use, spare, in repair or retired;
- whether it holds company data and whether it is encrypted or managed;
- the planned replacement year.

The record only stays accurate if it is tied to events the business already runs: purchasing, onboarding and offboarding. If a device cannot be issued without an entry, the list maintains itself. The same point applies to software and cloud services, which is why [registers that miss cloud and SaaS services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/) deserve a look once the hardware list is sound.

## Practical next actions

1. Do a one-off physical count this month: collect every laptop, phone and tablet, record serial numbers and compare them to the purchase invoices from the last three years.
2. Name one person as the owner of the device list, and make issuing and returning equipment impossible without an entry in it.
3. Add a device check to your resignation process: a signed list of what was returned, and a same-day review of email and file access.
4. Record the age of each device and set a replacement year, so you can budget a staggered refresh instead of absorbing emergency purchases.
5. Check which devices carry company email or customer data, and confirm that each can be locked or wiped remotely if it goes missing.
6. Review the list with your insurer or broker once a year so that cover matches what you actually own.

A business that knows what it owns buys less, loses less and recovers faster. The first count is the slow part; after that, the record is a matter of habit.
