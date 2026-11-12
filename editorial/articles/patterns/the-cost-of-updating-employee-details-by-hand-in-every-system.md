---
hub: patterns
record_id: PAT-183
slug: the-cost-of-updating-employee-details-by-hand-in-every-system
title: The Cost of Manual Employee Data Updates Across Systems
description: When an employee changes their bank, address or job title, someone retypes it into payroll, HR, email and more. Here is what that costs and how to make one change flow through.
lead: When an employee changes their bank, address or job title, someone retypes it into payroll, HR, email and more. Here is what that costs and how to make one change flow through.
category: People & HR Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: People & HR Operations
pattern_family: People & HR Operations
observable_condition: When an employee changes name, bank account, address, department or job title, an administrator re-enters the change separately in payroll, the HR file, the email system, the access list and sometimes a leave or timesheet tool.
primary_identification: No single source of truth for employee data: each system holds its own copy, and changes are passed between them by hand, so delay and mismatch are built in.
commercial_value_dimensions: Administrator time, payroll accuracy, access security, staff experience and compliance with data accuracy duties
sources:
  - What is HR-driven provisioning with Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning
  - Understand how Application Provisioning in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works
  - What is automated app user provisioning in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning
related:
  - Why Important Information Is Trapped in PDFs and Attachments | /patterns/why-important-information-stays-trapped-in-pdfs-and-email-attachments/
  - The Cost of Waiting for Timesheets, Approvals or Delivery Data | /patterns/what-it-costs-when-invoicing-waits-for-timesheets-approvals-and-delivery-proof/
  - The Cost of Manual Consolidation Across Workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
summary: When an employee changes their bank, address or job title, someone retypes it into payroll, HR, email and more. Here is what that costs and how to make one change flow through.
layout: plain
---
## Observable condition

A Gqeberha engineering services firm has ninety staff and one HR administrator. On a typical Monday she receives four requests: a technician has married and changed her surname, a supervisor has a new bank account, a clerk has moved to the stores team, and a driver has a new cell number. Each request arrives by a different route: a WhatsApp message, a signed form, an email, a verbal comment at the gate.

For each, she opens the payroll package, the HR spreadsheet, the email admin page, the building access list and the timesheet tool. If she has time, she updates all five. On a busy day she updates payroll first, because that affects pay, and promises herself she will do the rest tomorrow.

This is an illustrative example. The pattern is easiest to spot in a business that has grown past the point where one person can hold everything in her head, but has not yet connected its systems.

## Realisation

The realisation is that each of these updates is small, but the total is not. A change that takes four minutes in one system takes twenty in five, plus the time spent finding where each is held. Multiply that by the number of changes in a year, and the administrator's time is mostly spent copying.

There is a second, quieter realisation. Every extra place the data lives is another place it can be wrong. The cost is not only the retyping but the discrepancies that appear later, as described in [HR entering the same employee details into multiple systems](/impact/hr-entering-same-employee-details-into-multiple-systems-duplicate-admin-error-cost/).

**Realisation prompt:** choose one employee change from last month, such as a new bank account. In how many systems did it have to be entered, and were they all updated on the same day?

## Identification

This is a pattern of missing a single source of truth. The symptom is the administrator's repeated retyping. The common assumption is that more careful administration or a second pair of hands would fix it. The structural cause is that each system was added separately and nobody decided which one owns employee data and how changes should reach the others.

It is related to the broader problem in [when one change has to be made in every system you own](/patterns/when-one-change-has-to-be-made-in-every-system-you-own/). This article looks at the people-data version of it, where mistakes affect pay and access.

## Diagnosis

- **Changes arrive in many forms.** Without a single request channel, the administrator spends time interpreting and checking before she can enter anything.
- **Each system has its own copy.** Payroll, HR, email, access control and time tracking each store names, numbers and departments separately, with no automatic link.
- **Order is improvised.** There is no agreed sequence, so some systems are updated immediately and others weeks later, if at all.
- **Nobody checks for mismatch.** A department name spelled two ways, or an old cell number in the access list, goes unnoticed until it causes trouble.
- **The knowledge sits with one person.** If she is away, changes queue up or are made by someone who does not know all five systems.

## Commercial impact

The plainest cost is administrator time. If she spends a large share of her week copying data between tools, that time is unavailable for recruitment, training, wellness or compliance, which are all work of greater value to the business. The related cost is described in [the hidden cost of re-entering the same information](/patterns/the-hidden-cost-of-reentering-the-same-information/).

The second cost is accuracy. A mistyped digit in a bank account number can send a salary to the wrong place. A department change that reaches payroll but not the approval system leaves the employee unable to approve, or able to approve the wrong things.

The third is security. When a role changes, access rights should change with it. If access is updated late, a person may keep permissions they no longer need. The same risk arises at the end of employment, which is covered in [former employees still active in systems](/impact/former-employees-still-active-systems-incomplete-offboarding-cost/).

The fourth is the employee's experience. Being asked to confirm the same detail to several people, or finding that a payslip still shows an old name, signals that the business is not on top of its basics. Data accuracy is also a duty: South Africa's privacy law expects organisations to keep personal information accurate, so persistent mismatch is more than an irritation.

## Common misidentification

The pattern is often read as a discipline problem: the administrator is told to be more thorough, or to update everything on the same day. That asks her to make up through effort for a missing design.

It is also read as a software problem, leading to the purchase of a larger package that is supposed to do everything. Replacing every system is expensive and slow, and many businesses find that an integrated suite still leaves gaps at its edges. A smaller step is available.

## Possibility

The alternative is to pick one system as the master for employee data, usually HR or payroll, and to have changes flow from it to the others. This is a well-established idea in larger organisations. [Microsoft's description of HR-driven provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning) explains that an HR system can act as the source of authority for creating, updating and disabling user accounts. [Its page on how provisioning works](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/how-provisioning-works) describes the system detecting changes in the source and applying them to connected applications, and [the overview of automatic user provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning) covers the underlying concept.

Small businesses may not need that exact toolset. The principle carries over: one place where the change is made, and a defined route for it to reach the rest, whether by a connector, a scheduled export or a short checklist.

## Intervention

Start by deciding, in writing, which system owns each data item. Bank details belong to payroll, job title and department to HR, mobile numbers to whichever tool people actually use. Then work out how each change should travel. Where a connector exists, switch it on and test it. Where it does not, create a single change form and a checklist so that each downstream update is done in a fixed order and signed off.

Keep it modest. Fix the most frequent change first, probably bank details or department moves, and prove it before adding more.

## Practical next actions

1. **List your systems that hold employee data.** Note which fields each holds, such as name, ID number, bank, department and contact numbers.
2. **Name a master for each field.** Decide which system is correct if two disagree, and write it down.
3. **Introduce one change form.** Use a short digital form for all employee changes, with a field for the effective date and an approver where needed.
4. **Fix the update order.** Create a checklist that says which system is updated first, who does it and by when.
5. **Run a mismatch check.** Export names and departments from two systems and compare them. Correct the differences and note which fields cause most of them.
6. **Test a connector for one field.** Investigate whether your payroll or HR system can send the most common change to another system automatically, and trial it on a small group.

## Diagnostic questions

- How many systems must be updated when one employee changes department?
- Which system do we treat as correct if two disagree?
- How long does it usually take for a change to reach every system?
- Could anyone other than the administrator make these updates safely?
- When did we last compare employee details across systems?

## Bottom line

Manual updates across systems cost time, accuracy and security, and they fall on the people who could be doing more valuable work. The fix starts with a decision rather than a purchase: choose where each fact is owned, define how changes travel and test the route on the most common change. Once one update reaches every system reliably, the administrator is working on people, not copying fields.
