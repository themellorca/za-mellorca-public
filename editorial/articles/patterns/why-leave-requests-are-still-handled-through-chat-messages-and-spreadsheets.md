---
hub: patterns
record_id: PAT-181
slug: why-leave-requests-are-still-handled-through-chat-messages-and-spreadsheets
title: Why Leave Requests Still Travel Through Messages and Spreadsheets
description: Leave requests arrive by WhatsApp, email and verbal asks, then end up in a spreadsheet. Here is why that persists, what it costs, and how to build a simple, reliable request-and-approve routine.
lead: Leave requests arrive by WhatsApp, email and verbal asks, then end up in a spreadsheet. Here is why that persists, what it costs, and how to build a simple, reliable request-and-approve routine.
category: People, HR & Workforce Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: People, HR & Workforce Operations
pattern_family: People, HR & Workforce Operations
observable_condition: Employees ask for leave by WhatsApp, email or in passing, managers reply informally, and one person updates a spreadsheet that does not always match what was agreed.
primary_identification: No single request path: the request, the approval, the balance and the cover plan live in four places, and a person has to copy between them.
commercial_value_dimensions: Payroll accuracy, dispute risk, administrative time, team coverage and employee trust
sources:
  - https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf | https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Manage sequential approvals with Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals
related:
  - The Cost of Processes That Move Through Email | /patterns/the-cost-of-running-business-processes-through-email-threads/
  - Why One Customer Question Has to Travel Through Three Departments | /patterns/why-a-single-customer-question-gets-passed-between-three-departments/
  - The Cost of Waiting for Timesheets, Approvals or Delivery Data | /patterns/what-it-costs-when-invoicing-waits-for-timesheets-approvals-and-delivery-proof/
summary: Leave requests arrive by WhatsApp, email and verbal asks, then end up in a spreadsheet. Here is why that persists, what it costs, and how to build a simple, reliable request-and-approve routine.
layout: plain
---
## Observable condition

A technician sends a WhatsApp message to his supervisor on Sunday evening: "Can I take Friday off? Kid's school thing." The supervisor replies with a thumbs-up on Monday morning. Another employee emails the office manager for the following week and copies her team lead, who does not reply. A third asks in the corridor and is told "should be fine."

The office manager keeps a leave spreadsheet. On Tuesday she tries to reconstruct who is off when. She scrolls through chats, searches her inbox, and asks around. She updates the sheet from what she finds, then saves a new copy because the previous one already has a different name on it.

An illustrative example: a Bloemfontein property-maintenance business with twenty-two staff across two teams. Leave is requested whichever way is easiest for the employee, approved however the manager happens to answer, and recorded by one administrator when she has time.

## Realisation

The realisation is that the informality is not about leave itself. Leave is simple. The difficulty is that a leave decision involves four separate things: the request, the approval, the balance and the cover for the absence. In this business, each lives in a different place, and a person is the only connection between them.

[The Basic Conditions of Employment Act](https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf) sets out minimum annual leave entitlements for employees and requires employers to keep records. That makes leave a matter the business must be able to evidence, not only an administrative convenience. If an employee disputes their balance, or a former employee queries their final pay, the answer depends on whether the business can show what was requested, what was approved and what was taken.

Realising this changes the question from "why is the sheet always wrong?" to "why does the sheet depend on a person copying from messages?"

**Realisation prompt:** pick any employee and ask: can you show, in under two minutes, every leave day they have taken this year, who approved it and what balance remains?

## Identification

This is a pattern of a missing single path. The visible symptom is leave arriving through every channel. The common assumption is that employees are careless about the proper procedure, or that managers are sloppy. The structural cause is that the proper procedure either does not exist, or is harder to follow than a quick message, so people take the easier route.

The Moment [the employee who can't see their own leave balance](/moments/the-employee-who-cant-see-their-own-leave-balance/) shows what the lack of a single record feels like from the employee's side. This pattern looks at the cause that sits behind it.

## Diagnosis

- **The easiest channel wins.** A message takes ten seconds. A form that has to be printed, signed and handed over takes ten minutes, so people use the message.
- **Approval is a reply, not a record.** A thumbs-up in a chat cannot easily be found a month later. It also does not tell the administrator that the leave is approved.
- **The balance is calculated by hand.** The spreadsheet holds days taken, and someone adds and subtracts. A single missed entry makes every later balance wrong.
- **Cover is decided separately.** The manager who approves may not know who else is already off. That is the conflict described in the Moment [why leave requests turn into coverage puzzles](/moments/why-leave-requests-turn-into-coverage-puzzles/).
- **Requests wait for one person.** If the approving manager is away or busy, the request waits. [Microsoft's documentation on approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes routing a request to a named approver and recording the response, which is the step informal chats lack.
- **No one owns the whole path.** The administrator owns the sheet, the manager owns the decision and the employee owns the ask. The route between them is owned by nobody.

## Commercial impact

The commercial value at stake is payroll accuracy, administrative time, dispute risk, team coverage and employee trust.

The first cost is administrative time. Reconstructing leave from chats, emails and memory takes hours each month, and the hours are spent by someone whose time is worth more on other work. The cost is rarely recorded because it is spread across many small searches.

The second cost is payroll error. Unrecorded leave leads to overpayment, unauthorised leave leads to unpaid-leave deductions applied in a rush, and corrections follow. Employees notice errors in their pay more quickly than almost anything else, and one mistake can damage trust for a long time.

The third cost is dispute risk. If an employee says a day was approved and the manager says it was not, nothing in the chats settles it. Records that show the request, approval and date reduce arguments before they begin.

The fourth is cover. Without a shared view, two people in the same team take the same week, and the manager discovers it when the work is already late. The Impact note [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/) describes the wider cost of decisions waiting on single people.

## Common misidentification

The usual response is to remind staff to use the proper form. This works for a week. Another is to hand the problem to a new HR product and expect habits to follow; if the new route is not easier than WhatsApp, people will keep using WhatsApp and the software will hold half the picture. A third is to rely on a more careful administrator, which makes the process dependent on one person's attention and holidays.

## Possibility

In a better state, an employee makes a request in one place, in under a minute, and sees their balance as they do so. The request goes to the right manager, who sees who else is off on those dates and approves or declines with a reason. The decision is recorded automatically and updates the balance and the team calendar. The administrator reviews exceptions instead of rebuilding the sheet.

This does not require a large system. Microsoft's Power Automate documentation shows approval flows that send a request, collect a response and record the outcome, and [its documentation on sequential approvals](https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals) describes passing a request through more than one approver where needed. A shared form, a list and a simple approval can achieve a great deal, and a purpose-built leave tool is an option when the volume justifies it.

The Insight [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) helps in deciding how many approvers a leave request really needs.

## Intervention

Choose the simplest route that employees will actually use, and make the record a by-product of the request.

## Practical next actions

1. **Pick one request channel.** Choose a single form, mailbox or app, and tell every employee that requests made elsewhere will be redirected to it, politely and consistently.
2. **Capture the same details every time.** Record employee, leave type, first and last day, and approving manager, so the record can be searched later.
3. **Show the balance at the point of request.** Let the employee see days available before they ask, which removes many queries to the administrator.
4. **Give managers the team calendar.** Before approving, a manager should see who else is away on those dates.
5. **Name a backup approver.** If the manager does not respond within an agreed number of working days, the request moves to the backup.
6. **Check records against the legal minimum.** Confirm that the business can show requests, approvals and leave taken for each employee, in line with the Basic Conditions of Employment Act, and keep them for the required period.

## Diagnostic questions

- How many different channels did leave requests arrive through last month?
- Where is the approval recorded, and could you find a specific one in two minutes?
- Does the employee see their balance before they ask?
- Does the approving manager see who else is off before saying yes?
- What happens to a request when the approver is on leave themselves?

## Bottom line

Leave stays in messages and spreadsheets because that is the easiest path, not because anyone prefers it. A single request path that shows the balance, routes the approval and records the decision cuts administrative work, payroll errors and disputes, and it does so by making the right way the easiest way.
