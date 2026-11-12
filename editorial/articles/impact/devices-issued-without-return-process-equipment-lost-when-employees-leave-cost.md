---
hub: impact
record_id: CPS-209
slug: devices-issued-without-return-process-equipment-lost-when-employees-leave-cost
title: Laptops That Leave With Employees: The Cost of No Return Process
description: When devices are handed out without a signed record or a return step, laptops and accessories walk out with leavers, and the cost lands in replacement spend, chasing time and unmanaged data.
lead: When devices are handed out without a signed record or a return step, laptops and accessories walk out with leavers, and the cost lands in replacement spend, chasing time and unmanaged data.
category: IT Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: IT Operations
commercial_domain: IT Operations
primary_pain: Devices issued to employees with no signed record or return process, so equipment is lost when they leave
primary_cost_mechanism: Replacement purchases, staff time spent tracing equipment, unmanaged business data on missing devices, and weak evidence of safeguarding personal information
sources:
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://learn.microsoft.com/en-us/intune/device-management/actions/retire | https://learn.microsoft.com/en-us/intune/device-management/actions/retire
  - https://learn.microsoft.com/en-us/intune/device-management/actions/wipe | https://learn.microsoft.com/en-us/intune/device-management/actions/wipe
  - https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices
summary: When devices are handed out without a signed record or a return step, laptops and accessories walk out with leavers, and the cost lands in replacement spend, chasing time and unmanaged data.
layout: plain
---
## The laptop that left with the employee

A 35-person distribution business in Johannesburg hands a laptop, a charger and a mobile data SIM to a new account manager. Nobody records the serial number, because the purchase invoice sits with finance and the person doing the handover is the office manager, who is also covering reception. Fourteen months later the account manager resigns on a Friday and works her notice from home. On the last day she says she will drop the equipment off. She does not, and nobody follows up, because the manager who would have asked has moved on to a bigger problem.

Three weeks later someone notices that her name is still next to a device in a spreadsheet nobody trusts. Is the laptop at her house, in a cupboard at the office, or with the person who took over her accounts? The business cannot answer quickly, and the delay is the first part of the cost. The laptop probably held customer quotes and a synced mailbox. It may still be signed in to the company's cloud applications.

This article is about one specific gap: devices that are issued without a clear return process. It sits beside our pieces on [new employees waiting for equipment](/impact/new-employees-without-equipment-onboarding-cost/) and on [former employees who still have system access](/impact/former-employees-still-active-systems-incomplete-offboarding-cost/). Those look at the start and the system side of the employment cycle. This one looks at the physical asset on the way out.

## Why issue is easy and return is hard

Issuing a device has a natural owner and a natural moment: someone is starting and needs a laptop today. Returning a device has neither. The employee is leaving, the manager is thinking about the handover of work, and HR is thinking about the final payslip. Equipment falls between the three.

- **No signed record at issue.** If the employee never acknowledged receiving a specific serial number, asking for it back later is an awkward conversation rather than a routine one.
- **Return depends on goodwill and distance.** Remote and hybrid staff, field sales teams and people in other provinces have no natural moment to walk equipment into the office.
- **Accessories are invisible.** Chargers, docking stations, headsets, monitors and data devices are rarely listed anywhere, so a "returned laptop" can still leave R3,000 of accessories unaccounted for.
- **The last day is not the return day.** Employees often keep a device for a week or two to hand over files, and the return never gets a new date.
- **Nobody owns the register.** Finance has the invoice, IT has the image, HR has the contract. The record of who holds what exists only if someone deliberately joins the three.

## Where the money goes

The obvious cost is the replacement price, but it is usually the smallest of four.

### 1. The replacement itself

A business laptop for office work commonly costs somewhere between R12,000 and R25,000, depending on the specification, before the operating system licences, security software and accessories. These figures are illustrative; check them against your own purchasing records. If a business loses even two devices a year this way, the direct replacement spend is real money with no productive return.

### 2. Unrecovered data

A device that nobody can locate is a device that nobody can confirm is clean. If it held local copies of customer lists, supplier prices or employee records, the business is carrying a data exposure it cannot measure. The Protection of Personal Information Act places a duty on a responsible party to secure the personal information in its care, and a missing, unmanaged laptop makes that duty hard to evidence. The Act is published on the [South African government's documents site](https://www.gov.za/documents/protection-personal-information-act).

### 3. The remote-wipe window

Modern device management lets an administrator remove company data from a device or wipe it entirely, but only if the device is enrolled and the administrator knows it should be done. Microsoft's documentation on the Intune [retire action](https://learn.microsoft.com/en-us/intune/device-management/actions/retire) explains that it removes company data and managed apps from a device, while the [wipe action](https://learn.microsoft.com/en-us/intune/device-management/actions/wipe) restores a device to its factory settings. Both only help if someone triggers them on the right day. A business with no return process usually has no leaver trigger either.

### 4. Time spent chasing

Finding out who had which laptop is slow detective work: searching old emails, asking former colleagues, checking invoices. If an office manager and a finance clerk each spend three hours tracing one device, that is six hours of salary for a single item. Multiply that by the number of leavers in a year and the process gap becomes a payroll cost.

## An illustrative year

Consider a business with 40 staff and annual turnover in staffing of about 20 percent, which means roughly eight leavers a year. Suppose three of those leavers have a delay of more than a month returning equipment, and one device is never recovered at all. The replacement is perhaps R15,000. Chasing the other two takes a few hours each. The unrecovered device may also trigger an internal assessment of what it held. None of this makes headlines, but together it can easily run past R25,000 in a year, and it grows with headcount and with the number of devices per person.

These numbers are an example, not a benchmark. The pattern is more useful than the total: the loss is concentrated in leavers who never return something, and it is nearly all preventable with a written step at the beginning and a dated step at the end.

## What a clear return process looks like

A workable process does not need a software platform. It needs four pieces to exist in the same place.

- **An issue record.** Employee name, device, serial number, accessories, date and a signature or electronic acknowledgement. The same sheet lists what must come back.
- **A named owner for the register.** Usually IT or the office manager, not "everyone". They decide where the record lives and update it when equipment moves.
- **A leaver checklist with equipment on it.** The same list that cancels the payroll and the email account asks whether the laptop, charger and data device have been collected, with a date and a name.
- **A return method for remote staff.** A prepaid courier booking, sent on the day the resignation is accepted, removes the excuse that returning equipment is inconvenient.

Joining the record to access control matters as well. Our pattern note on [offboarding that leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) describes how accounts survive after people leave; devices behave the same way. The UK National Cyber Security Centre's guidance on [managing deployed devices](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices) is a useful public reference for how to keep track of what is in use and how to treat it across its life.

## How the problem hides from view

Missing equipment seldom appears as a line on any report. Finance writes off or ignores the asset, HR does not know it happened, and IT assumes the device is simply "somewhere". The cost is distributed across three departments, so none of them sees the total. A related blind spot is described in our discovery note on [why asset registers miss cloud and software services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/): registers tend to track what is easiest to count, not what carries the most risk.

Ask a simple question at the next leaver exit: could we list, within an hour, every item of company equipment currently in the hands of a person who no longer works here? If the answer is no, the business is paying for assets it cannot see.

## Practical next actions

1. **Count what you issued.** Walk through the last twelve months of leavers and list the equipment each one was given. Mark every item you cannot confirm as returned. That is your starting loss figure.
2. **Start an issue record this week.** A shared sheet with employee, serial number, accessories, issue date and acknowledgement is enough. Add every current employee's equipment to it before the end of the month.
3. **Add equipment to the leaver checklist.** Make collection a dated line on the same form that triggers final pay and account closure, with the name of the person who confirms it.
4. **Agree a return rule for remote staff.** Decide how equipment is collected, who books the courier, and how long after the last working day it is acceptable to wait. Put it in the equipment acknowledgement employees sign.
5. **Connect return to remote data removal.** If your devices are managed, agree who may trigger a retire or wipe action and under what conditions, so that an unrecovered laptop is no longer an open window.
6. **Review quarterly.** Compare the register with purchase records and the current staff list. Differences are either genuine losses or record errors, and both are worth fixing.

Devices are among the most expensive items a small business hands to individuals, and the controls around them are usually weaker than the controls around petty cash. A single page and a single owner usually close most of the gap.
