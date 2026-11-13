---
hub: impact
record_id: CPS-377
slug: former-employees-still-active-systems-incomplete-offboarding-cost
title: Gone but still logged in: The cost of incomplete employee offboarding
description: When people leave but their accounts, licences and shared passwords stay active, you pay for unused seats and carry security and privacy exposure.
lead: When people leave but their accounts, licences and shared passwords stay active, the business pays for seats nobody uses and carries security and privacy exposure it cannot see.
category: Security and Access
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Security and Access
commercial_domain: Security and Access
primary_pain: Former employees remaining active in business systems after they leave
primary_cost_mechanism: Wasted licences, data and fraud exposure, incident response cost and privacy compliance risk from incomplete offboarding
sources:
  - Remove a former employee - Overview - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
  - Who makes an application to process Special Personal Information? | https://inforegulator.org.za/popia/
related:
  - Not knowing who still has access to your systems | /impact/uncontrolled-system-access-financial-risk/
  - Important accounts without MFA: The cost of preventable takeover | /impact/accounts-without-mfa-financial-risk/
  - Leads nobody has touched: The revenue cost of invisible follow-up failure | /impact/untouched-leads-invisible-follow-up-failure-revenue-cost/
summary: When people leave but their accounts, licences and shared passwords stay active, the business pays for seats nobody uses and carries security and privacy exposure it cannot see.
layout: plain
---
## The resignation that never reached IT

A sales coordinator at a Pretoria logistics firm resigned in January and worked her notice period. On her last day, HR collected her laptop and access card, and the payroll clerk processed her final pay. In August, finance noticed that the firm was still paying for her licence on a project-management tool. In October, a customer mentioned that she was still replying from her old company email address, which had been forwarded to her personal account. Her login to the supplier portal had never been closed, and nobody could say which shared folders she could still open.

None of this was malicious. It was the ordinary result of an offboarding process that existed in people's heads rather than in a record. HR knew she had left; IT was told about the laptop; finance never knew about the licence; the operations manager never knew about the supplier portal. Each department did its own part and assumed the others did theirs.

This is the pain of former employees remaining active in business systems after they leave. It is related to, but broader than, [former employees retaining system access](/impact/former-employees-retaining-system-access/). This article focuses on how incomplete offboarding creates continuing financial cost and security exposure across many systems at once.

## Why offboarding is so often incomplete

Employees today have accounts across far more systems than they did a decade ago: email and file storage, accounting, CRM, project tools, banking portals, supplier and customer portals, social media accounts, and mobile apps on personal phones. IT controls some of these. Many are set up by departments, using company cards or personal sign-ups, and never appear on any central list.

Microsoft's guide to [removing a former employee and securing data](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee) illustrates how many separate steps are involved even within one platform: blocking sign-in, wiping a mobile device, forwarding email, granting access to the person's files, removing the licence and deleting the account. It also notes that content is retained for only a limited period after a licence is removed or an account deleted, so sequence and timing matter. Multiply that by every other system the business uses and the scale of the problem becomes clear.

## Why businesses tolerate it

- **Nothing breaks immediately.** An unused account looks harmless until it is abused or someone notices the bill.
- **Nobody owns the whole process.** HR, IT, finance and line managers each handle a slice.
- **There is no complete list of systems.** You cannot close what you do not know exists.
- **Leavers are a busy-time distraction.** The manager is focused on finding a replacement, not on logins.
- **Goodwill.** Owners prefer to leave things open "in case they need to hand over something", and then forget.

## Operational symptoms

- software invoices that include names of people who left months ago;
- shared mailboxes and calendars with unknown members;
- passwords shared among team members never changed after someone leaves;
- customer or supplier portals still showing a former employee as the contact;
- no single record of when each system access was removed;
- offboarding that depends on a manager remembering to send an email.

Shared credentials make the problem worse. The article on [shared passwords and lost accountability](/impact/shared-passwords-lost-accountability-breach-exposure/) explains why a leaver who knew a shared password has effectively retained access, even if their personal account has been closed.

## How the pain becomes money

- **Wasted licences:** paid seats for people who no longer work for the business. The related article on [orphaned software subscriptions](/impact/orphaned-software-subscriptions-after-employee-leaves-cost/) covers this in detail.
- **Breach and fraud exposure:** a former employee's account can be misused by them, by someone who obtained their credentials, or by an attacker who gains access to an unmonitored account.
- **Data loss:** files, contacts and customer lists leaving with an employee who still has access.
- **Incident response cost:** investigating, restoring, notifying and repairing after an incident costs far more than closing an account.
- **Compliance cost:** under the Protection of Personal Information Act, organisations carry responsibility for the personal information they hold; the [Information Regulator's POPIA page](https://inforegulator.org.za/popia/) describes the Information Officer role that encourages and oversees compliance, and uncontrolled access by former staff makes that oversight harder.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a professional-services firm with 60 employees and an annual staff turnover of 15 percent, meaning nine leavers a year.

| Assumption | Value |
| --- | --- |
| Leavers per year | 9 |
| Paid software seats per leaver left active | 3 on average |
| Average monthly cost per seat | R350 |
| Average months a seat stays active after the leaver goes | 7 |
| Time to audit and clean up access annually | 20 hours at R400 |
| Chance of a security incident traced to leaver access in a year | 2% |
| Assumed cost of such an incident | R750,000 |

- Wasted licences: 9 × 3 × R350 × 7 = R66,150 a year
- Cleanup time: 20 × R400 = R8,000 a year
- Risk-weighted incident cost: 2% × R750,000 = R15,000 a year
- **Illustrative total: about R89,000 a year**

The numbers will differ in every business, but two points hold generally. The direct licence waste often pays for the process on its own, and the security exposure is an extra benefit rather than the only justification.

## Secondary consequences

An account left active is a door left unlocked. The principle of least privilege, defined by the US National Institute of Standards and Technology in its [glossary entry on least privilege](https://csrc.nist.gov/glossary/term/least_privilege), is that each user receives the minimum access needed to do their job. A former employee needs none. Beyond security, there are people effects: customers may continue to email a former employee whose messages nobody reads; suppliers may send invoices to an unmonitored address; and colleagues may be confused about who now owns a task. The US Cybersecurity and Infrastructure Security Agency's [Insider Threat Mitigation Guide](https://www.cisa.gov/resources-tools/resources/insider-threat-mitigation-guide) addresses intentional and unintentional insider threats, including those that arise when people leave an organisation.

## When it becomes commercially urgent

- staff turnover rises, or a retrenchment or restructuring is planned;
- a senior employee with wide access leaves on poor terms;
- the business is preparing for a security audit, a customer questionnaire or a funder's due diligence;
- a data incident occurs, however small;
- software spend grows faster than headcount.

## What better looks like

A good offboarding process is boring and repeatable. It is triggered once, covers every system, and leaves a record.

1. **Keep a list of systems.** Every business application, with an owner who can add and remove users.
2. **Trigger offboarding from HR.** The date the resignation is accepted starts a checklist, not a manager's memory.
3. **Remove access on the last working day.** Disable first, delete later, once content has been handed over.
4. **Handle mail and files.** Forward or share mailboxes and folders with a named successor before deletion.
5. **Change shared credentials.** Any password the leaver knew should be changed the same day.
6. **Confirm and record.** Each system owner confirms removal, and the confirmation is stored.
7. **Review quarterly.** Compare the active user list in each system with current payroll.

The Insights article [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) shows how to build such handovers into normal work.

## Practical next actions

1. Export the user lists from your five most important systems and compare them with your current staff list.
2. Disable any account that belongs to someone who no longer works for you.
3. Check your software invoices for seats that match former employees.
4. Write a one-page offboarding checklist and name who completes each line.
5. Change any shared password that a leaver knew.
6. Schedule a quarterly access review in the finance or IT calendar.

## Bottom line

Incomplete offboarding costs money quietly through licences nobody uses and creates risk quietly through access nobody is watching. The fix is not sophisticated technology but a single owned process, a complete list of systems and the discipline to compare who has access with who works for you. Doing so typically saves more than it costs, and it removes a risk that grows with every person who leaves.
