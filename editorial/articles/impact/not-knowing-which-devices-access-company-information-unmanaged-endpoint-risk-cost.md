---
hub: impact
record_id: CPS-135
slug: not-knowing-which-devices-access-company-information-unmanaged-endpoint-risk-cost
title: Which Devices Can Reach Your Data? The Risk of Unmanaged Endpoints
description: If you cannot list the laptops, phones and tablets that open your business data, you cannot secure, recover or retire them, and the cost arrives as a breach or a lost device.
lead: If you cannot list the laptops, phones and tablets that open your business data, you cannot secure, recover or retire them, and the cost arrives as a breach or a lost device.
category: IT and Security
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: IT and Security
commercial_domain: IT management and information security
primary_pain: The business has no reliable list of the devices that can open company email, files and applications, so unmanaged endpoints sit outside any security or recovery process.
primary_cost_mechanism: Breach response, data loss from lost or stolen devices, regulatory exposure under POPIA, wasted licences and support time spent identifying devices after something has gone wrong.
sources:
  - https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune | https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune
  - https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
summary: If you cannot list the laptops, phones and tablets that open your business data, you cannot secure, recover or retire them, and the cost arrives as a breach or a lost device.
layout: plain
---
## A simple question that is hard to answer

Ask a business owner how many devices can open the company's email and files, and the first answer is usually the number of laptops the company bought. The real answer is bigger. It includes the owner's tablet, the sales team's phones with email set up, the accountant's home computer, the old laptop a former employee still has, and the personal phone that a manager connected to the shared drive last year because it was convenient.

Take a 25-person logistics company in Gqeberha. The office manager believes there are 22 company laptops. When a new security tool is switched on, it discovers 41 devices signing in. Nine belong to staff who use personal phones, six are old machines nobody remembers issuing, and four are home PCs used by two contractors. Nobody did anything unusual. The business simply never had a list.

This article covers that exposure: not knowing which devices can access company information, and what the lack of an inventory costs. It overlaps with, but differs from, [staff using personal computers for company work](/impact/staff-personal-computers-for-company-work-inadequate-business-devices-security-support-cost/), which looks at the quality of those machines. Here the question is more basic: do you even know they are there?

## Why the list does not exist

Few businesses decide to run without an inventory. The gap forms because devices arrive and leave faster than anyone records them.

- **Cloud services open the door.** Anyone with a username and password can sign in from any device unless the business has said otherwise.
- **Phones connect themselves.** Setting up company email on a phone takes minutes and no approval.
- **Purchasing is informal.** Devices are bought on staff credit cards, at retail shops or through different suppliers, so there is no single order history. This links to the support burden described in [mixed laptop models and accessories](/impact/mixed-laptop-models-and-accessories-support-and-procurement-cost/).
- **Leavers keep what they hold.** When someone resigns, the laptop may be returned and the phone profile left active.
- **Nobody owns the register.** The IT supplier fixes problems, the finance team tracks assets for depreciation, and neither one tracks sign-ins.

## What the missing list costs

### Security incidents that start on an unknown device

A device that is not updated, not password-protected or infected with malware is a way into everything the signed-in user can reach. If the business does not know the device exists, it cannot patch it, scan it or block it. The UK National Cyber Security Centre's guidance on [managing deployed devices](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices) sets out that organisations should know what devices they have and manage them over their whole life. That principle applies to a ten-person firm as much as to a large enterprise.

### Lost or stolen devices with no way to respond

A lost laptop is a hardware cost. A lost laptop with unencrypted client files and a saved login is a data breach. If the business cannot tell which laptop a person had, whether it was encrypted or whether it can be wiped remotely, the response is guesswork. Lost-device incidents are common, and the difference between a low-cost and a high-cost outcome is often whether the device was managed.

### Legal and regulatory exposure

Under the Protection of Personal Information Act, a responsible party must secure the integrity and confidentiality of personal information in its possession by taking appropriate, reasonable technical and organisational measures. The full wording is in the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) published on the government website. If personal information about customers or employees sits on devices the business cannot account for, it will struggle to show that it took reasonable measures. A notification to the Information Regulator and affected people is also harder to prepare when you cannot say which devices held what.

### Paying twice for the same thing

Without an inventory, a business buys licences, antivirus subscriptions and cloud seats for devices that are no longer in use, and misses devices that should have been covered. A similar blind spot on the software side is described in [unknown software subscriptions](/impact/unknown-software-subscriptions-invisible-recurring-cost/).

### Support time lost to detective work

When a user says "my laptop is slow", the support person first has to find out which machine, which version, and who set it up. Each ticket starts with questions that an inventory would answer in seconds.

## What a useful inventory contains

A usable device register does not need to be elaborate. For each device that opens company data, record:

- the device type, make and model, and serial number;
- the person responsible for it and the date it was issued;
- whether it is company-owned or personal;
- its operating system version and whether disk encryption and a screen lock are switched on;
- which company accounts and applications are signed in on it;
- when it should be replaced, and what must happen when the owner leaves.

The first version can be a spreadsheet. The harder task is keeping it current, which is why many businesses move to a management service. Microsoft's documentation for [Microsoft Intune](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) describes how a business can enrol laptops and phones, apply security settings, require a minimum configuration before a device can access company resources and remove company data from a lost device. Other platforms offer similar functions. Whatever tool is used, the gain is that the register is built from what the devices report, not from what somebody remembers.

## Deciding what to allow

An inventory is only the start. Once you can see the devices, you must decide which ones may reach company information. Many small businesses settle on a simple rule: company-owned devices have full access once they are enrolled, while personal devices are limited to specific applications and must meet a minimum standard, such as a screen lock and current updates. Devices that cannot meet the standard, or that nobody can account for, are blocked. Replacing ageing hardware on a schedule is cheaper than responding to failure, a point developed in [buying devices only when they break](/impact/buying-devices-only-when-they-break-emergency-replacement-cost/).

## Practical next actions

1. **List the sign-ins.** Ask your email and file-storage administrator for a report of devices that have signed in during the last 90 days, and compare it with the devices you think you have.
2. **Build the register.** Record the type, owner, ownership status, operating system and encryption status of every device found, starting with those that open email.
3. **Name an owner.** Assign one person to keep the register current, with a monthly check against new starters, leavers and purchases.
4. **Set a minimum standard.** Require a screen lock, automatic updates and disk encryption on every device that opens company data, and decide how personal phones will be treated.
5. **Prepare for loss.** Test how you would remove company data from a lost phone or laptop, and write the steps, including who to call and which accounts to lock.
6. **Add devices to your leaver checklist.** When someone leaves, collect company equipment, remove their accounts from personal devices and update the register on the same day.

## The benefit of knowing

A business that can list its devices can answer the questions that matter in a bad week. Which devices held this client's data? Which one was lost? What was on it? Can we remove it remotely? Those answers shorten incident response, limit what has to be disclosed and reduce the support burden, while the register itself costs a few hours to create. The cost of not having one is what the business pays when an unknown device becomes a known problem.
