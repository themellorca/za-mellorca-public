---
hub: patterns
record_id: PAT-186
slug: why-employee-changes-trigger-work-across-too-many-departments
title: Why Employee Changes Trigger Work Across Too Many Departments
description: A promotion, a transfer or a change of hours looks like one decision. In practice it sets off separate tasks in HR, payroll, IT, finance and operations, each started by an email. Here is why and what to change.
lead: A promotion, a transfer or a change of hours looks like one decision. In practice it sets off separate tasks in HR, payroll, IT, finance and operations, each started by an email. Here is why and what to change.
category: People, HR & Workforce Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: People, HR & Workforce Operations
pattern_family: People Operations & Internal Service
observable_condition: When an employee is promoted, transferred, changes hours or gets a new manager, HR emails payroll, IT, finance and operations separately, and each department updates its own records and access by hand.
primary_identification: Unpropagated change: employee changes are recorded in HR but not used as an event that updates other systems, so each department must be told and must act manually.
commercial_value_dimensions: HR and IT staff time, payroll accuracy, access risk and employee experience
sources:
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
  - What is HR-driven provisioning with Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning
related:
  - When a Manager Becomes the Bottleneck for Routine Decisions | /patterns/when-routine-decisions-all-wait-for-one-manager/
  - Why Leave Requests Still Travel Through Messages and Spreadsheets | /patterns/why-leave-requests-are-still-handled-through-chat-messages-and-spreadsheets/
  - Why Managers Keep Asking HR for the Same Reports | /patterns/why-managers-keep-asking-hr-for-the-same-reports/
summary: A promotion, a transfer or a change of hours looks like one decision. In practice it sets off separate tasks in HR, payroll, IT, finance and operations, each started by an email. Here is why and what to change.
layout: plain
---
## Observable condition

At a logistics company with depots in Johannesburg, Durban and Cape Town, a warehouse supervisor in Durban is promoted to depot manager in Cape Town. The decision takes one meeting.

What follows takes three weeks. HR updates her record and emails payroll about the new salary and cost centre. Payroll asks finance which cost centre to use. IT receives a separate email to move her to the Cape Town groups and give her access to the depot reports. Operations has to update the duty roster and the approval limits in the purchasing system. Fleet management needs to know about her vehicle allowance. Nobody tells the Durban depot to remove her access to its stock system.

On her first day in Cape Town she cannot approve a purchase order. Her first payslip is wrong. Six months later she can still change stock records in Durban.

## Realisation

The realisation is that the business treats employee changes as messages rather than as events. The change is recorded once, in HR, but every other department only learns about it if someone emails them. Each department then does its own piece by hand, at its own pace.

Hiring and leaving get attention because they are obvious. Changes in the middle of employment happen far more often and are handled with far less structure.

**Realisation prompt:** pick the last three promotions or transfers. List every department that had to act and how each one found out.

## Identification

This is a pattern of unpropagated change. The visible symptom is a flurry of emails after every role change, followed by small errors that surface weeks later. The common assumption is that HR needs to communicate better. The structural cause is that the HR record is not used as the source that drives updates in payroll, access and operational systems.

It is the mid-employment counterpart to [why hiring someone creates so much internal admin](/patterns/why-does-hiring-someone-create-so-much-internal-admin/) and [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/).

## Diagnosis

- **The HR record is not the trigger.** Updating it changes nothing elsewhere.
- **Each department keeps its own employee data.** Payroll, IT and operations each hold a copy that must be changed separately.
- **Notification is by email.** Whether a department acts depends on whether it was copied.
- **Access is added but rarely removed.** New permissions are requested because people need them; old ones remain because nobody asks.
- **No checklist per change type.** A transfer, a promotion and a change of hours each need different actions, but nobody has written them down.

## Commercial impact

The commercial value at stake is staff time across departments, payroll accuracy, access risk and the employee's experience.

Time is spread across many people. Each change costs a little time in HR, payroll, IT, finance and operations, plus the emails between them. In a business with frequent internal moves, it adds up to a meaningful hidden workload. Keeping employee data in separate places, as described in [the cost of employee records held separately in payroll, HR and access systems](/impact/employee-records-held-separately-payroll-hr-access-inconsistent-record-cost/), multiplies it.

Payroll accuracy suffers when changes arrive late or partially. Back-pay, corrections and queries follow.

Access risk accumulates. People who change roles often keep their old permissions, so over time they hold far more access than their current job needs. That is a quiet control weakness in purchasing, stock and finance systems.

The employee notices. Starting a new role without the access or pay that goes with it is a poor signal from a business that has just shown confidence in them.

## Common misidentification

One misreading is to tell HR to copy everyone on every change. That creates more email and still relies on each recipient acting.

Another is to buy a new HR system. Unless the system is connected to payroll and access, it simply holds a more accurate record that nobody else uses.

A third is to treat access clean-up as an annual IT audit. By then, a year of excess access has already existed.

## Possibility

The possibility is that a change recorded once in HR drives every downstream update. A new department, location, manager or job title triggers the payroll update, moves the employee to the right access groups, removes the old ones and creates tasks for anything that still needs a person.

Identity platforms are designed around this. Microsoft's guidance on [lifecycle workflows](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows) describes joiner, mover and leaver processes, where workflows run automatically as users move between parts of an organisation. [HR-driven provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning) makes the HR system the source of authority, so that updates to name, title or manager flow to user accounts automatically.

This extends the principle in [the cost of updating employee details by hand in every system](/patterns/the-cost-of-updating-employee-details-by-hand-in-every-system/) from simple details to role changes.

## Intervention

Start by listing the common change types: promotion, transfer, change of hours, change of manager and change of personal details. For each, write down every department and system affected and the action needed.

Make the HR record the single starting point. Where systems can be connected, let the HR change update them directly. Where they cannot, have the HR change create a task for each department with a due date, rather than an email.

Include removal of old access in every mover checklist, and review access for movers thirty days after each change.

## Practical next actions

1. List the five most common employee change types in your business.
2. For each type, map every department, system and action affected.
3. Make the HR record the only place where a change is first recorded.
4. Connect payroll and access groups to HR changes where your systems allow it.
5. Replace change emails with assigned tasks that have owners and due dates.
6. Remove old access as part of every transfer and review movers' access after thirty days.

## Diagnostic questions

- How many departments must act when an employee changes role, and how do they find out?
- How long does it take for a transferred employee to have the right pay and access?
- Do employees who change roles lose the access they no longer need?
- Is there a written checklist for each type of employee change?

## Bottom line

Employee changes trigger work across too many departments because the HR record is not used to drive anything else. Make one recorded change the event that updates payroll, access and operational systems, and turn remaining manual steps into tracked tasks. Changes then take days instead of weeks, and old access stops piling up.
