---
hub: discovery
record_id: DISC-226
slug: employee-onboarding-leaves-hr-chasing-multiple-departments
title: Employee onboarding leaves HR chasing every other department
description: IT, payroll, facilities and the line manager each own part of a new starter's first day, and HR spends the week before it sending reminders. Turn the hire into one triggered workflow with owners and dates.
lead: IT, payroll, facilities and the line manager each own part of a new starter's first day, and HR spends the week before it sending reminders. Turn the hire into one triggered workflow with owners and dates.
category: HR & Workforce Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: HR & Workforce Operations
problem_domain: HR & Workforce Operations
problem_owner: HR operations or people operations manager
budget_owner: HR director or COO
sources:
  - Plan cloud HR application to Microsoft Entra user provisioning - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/plan-cloud-hr-provision
  - https://www.gov.za/sites/default/files/gcis_document/201409/a75-97.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/a75-97.pdf
related:
  - New SKUs go on sale before every system has the product data | /discovery/launching-a-new-sku-before-every-system-knows-it-exists/
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
  - Why your integrations multiply faster than your applications | /discovery/point-to-point-integrations-multiply-faster-than-applications/
summary: IT, payroll, facilities and the line manager each own part of a new starter's first day, and HR spends the week before it sending reminders. Turn the hire into one triggered workflow with owners and dates.
layout: plain
---
A Gauteng engineering firm hires twelve people in a quarter. For each one, the HR officer sends an email to IT asking for a laptop and accounts, another to payroll with the salary and bank details, another to facilities for an access card and a desk, and another to the line manager reminding them to plan the first week. Then she waits. Some departments reply, some do not, and the week before each start date is spent following up by phone.

On the first day, one new engineer has a laptop but no email account. Another has an account but no access card and waits at reception. A third has everything except a signed contract, because the offer letter was emailed and nobody chased the signature. Each department did its part eventually. HR carried the coordination, and the new starter felt the gaps.

## The problem in plain language

Onboarding a new employee involves work from several departments that do not report to HR: IT for devices and accounts, payroll for salary and tax setup, facilities for access and space, the line manager for induction and first tasks, and sometimes health and safety, training or a client team. Each department has its own queue and its own way of receiving requests.

When there is no shared workflow, HR becomes the workflow. It sends requests, tracks replies in its own inbox or spreadsheet and chases whoever is late. The process works only as well as one person's memory and persistence, and it gets worse with every extra hire.

## What the buyer is actually trying to solve

HR managers ask how to stop chasing departments for onboarding tasks, how to make sure everything is ready on day one and how to see the status of every new starter at a glance. HR directors ask why onboarding takes so much HR time and why new employees have a poor first week. The outcome they want is a process in which accepting an offer starts every department's tasks automatically, each task has an owner and a due date, and everyone can see what is outstanding.

## Evidence and system mechanism

### The HR record can be the trigger

Microsoft's guidance on [planning cloud HR to Microsoft Entra user provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/plan-cloud-hr-provision) describes the HR system as the system of record for the joiner, mover and leaver process. It notes that IT staff have historically relied on manual methods such as uploading CSV files or custom scripts, and describes those processes as error prone, insecure and hard to manage. In the documented design, an HR event such as a new hire flows from the HR application to the directory, which creates the account.

The same guidance describes lifecycle workflows that extend beyond accounts: a set number of days before a new hire joins, send an email to the manager, add the user to groups and generate a temporary access pass for first sign-in. It also describes planning for rescinded offers when future-dated hires have already been created. The point is not one vendor's product. It is that the hire date and role in the HR record can drive tasks automatically, so nobody has to send the first email.

### Some onboarding outputs are legal obligations

The [Basic Conditions of Employment Act 75 of 1997](https://www.gov.za/sites/default/files/gcis_document/201409/a75-97.pdf), in section 29 of the Act as published, requires an employer to supply an employee, when employment commences, with written particulars including the employer's name and address, the employee's occupation, the place of work, the start date, ordinary hours, wages and how they are calculated, overtime rates, deductions, leave, notice periods and a list of other documents forming part of the contract. Written particulars must be revised when they change and kept for three years after employment ends. The Act has been amended since publication and some provisions do not apply to very small employers, so confirm current requirements, but the principle is clear: some onboarding outputs are not optional, and a process that relies on chasing can miss them.

## Why this becomes urgent

Headcount growth is the usual trigger. A handful of hires a year can be coordinated by hand. A hiring plan of dozens, a new branch or an acquisition multiplies the emails and the chances of a missed step. HR becomes a bottleneck, and new starters notice.

The cost also shows up when an audit or dispute asks for the written particulars and signed policies for a group of employees and they cannot all be found, a problem linked to [why policy acknowledgements need a reliable system record](/discovery/why-policy-acknowledgements-need-a-reliable-system-record/).

## Economic consequence

- **Lost productive time.** New employees on salary who cannot work for their first days because equipment, access or accounts are missing.
- **HR administration.** Hours each week spent sending and chasing requests instead of on recruitment, employee relations or development.
- **Payroll errors.** Late or incomplete payroll setup leading to wrong first payments and corrections.
- **Compliance gaps.** Missing written particulars, unsigned contracts or unacknowledged policies.
- **Early attrition.** A disorganised first week sets the tone for the employment relationship.

As an illustration only, if HR spends three hours chasing for each new starter and the business hires sixty people a year, that is one hundred and eighty hours of HR time spent on reminders.

## Root cause

The root cause is that onboarding is a cross-department process with no shared system and no single trigger. Each department receives requests in its own way, often by email, and nothing tells HR that a task is done except a reply. HR is accountable for the outcome but has no authority over the people doing the work.

A second cause is that the hire information is incomplete or arrives late. If role, start date, location and manager are not captured once in the HR system when an offer is accepted, each department asks for them separately. The same delay in one department is described in [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/), and a similar reliance on email requests in [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/).

## Practical next actions

1. **Map the onboarding tasks.** List every task across HR, IT, payroll, facilities, the line manager and any others, with who does it and how many days before or after the start date it must be done.
2. **Agree owners and service levels.** Have each department head sign off their tasks and the lead time they need, so the timetable is theirs, not HR's.
3. **Make the HR record complete and early.** Capture role, start date, location, manager and equipment profile once, when the offer is accepted, and make it the only source each department uses.
4. **Trigger tasks from the hire.** Use your HR system, service desk or workflow tool to create each department's tasks automatically from the hire record, with due dates calculated from the start date.
5. **Automate the routine parts.** Where possible, create accounts and group memberships from the HR record, and send the manager's pre-start checklist automatically.
6. **Track contract and particulars.** Include issuing and receiving signed written particulars and key policies as tasks with an owner, and store the signed copies on the employee record.
7. **Give everyone a status view.** Provide a dashboard of new starters showing open and overdue tasks by department, and review it weekly in hiring periods.
8. **Handle changes and withdrawals.** Define what happens when a start date moves or an offer is withdrawn, so accounts and equipment are adjusted or cancelled.

## Diagnostic questions

- How many separate emails does HR send to set up one new starter?
- Can you see, for every person starting next month, which tasks are complete in each department?
- Did every new starter in the last quarter have equipment, access and accounts on day one?
- Can you produce signed written particulars for every current employee?
- What happens to accounts and equipment requests when an offer is withdrawn?

## What good looks like

An accepted offer creates a complete hire record, and that record starts every department's tasks with owners and due dates. Accounts and group memberships are created automatically ahead of the start date. HR watches a status view instead of an inbox and steps in only on overdue tasks. Signed particulars and policy acknowledgements are stored on the employee record. New starters arrive to a working laptop, an access card and a manager with a plan.

## Where Mellorca fits

To build the triggered onboarding workflow and the account automation from your HR system, [business automation and AI workflows](/services/business-automation-ai-workflows/) can design and implement it with your HR and IT teams. To agree tasks, owners and lead times across departments and make the new routine stick, [digital operations improvement](/services/digital-operations-improvement/) can lead the process work.

## Method note

This article uses Microsoft Entra documentation to illustrate HR-driven provisioning and lifecycle workflows, and the Basic Conditions of Employment Act as published on the government website. Other HR and identity products offer comparable features. The Act has been amended since it was first published, and some provisions do not apply to all employers, so confirm current obligations with your labour law adviser. The time figures are illustrative. This is general information and not legal advice.
