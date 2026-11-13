---
hub: impact
record_id: CPS-031
slug: manual-routine-reminders-repetitive-follow-up-payroll-cost
title: Sending routine reminders by hand: The payroll cost of repetitive follow-up
description: Reminders for renewals, timesheets and deadlines sent one by one from someone's inbox cost paid hours and fail when they are away. Automate them.
lead: Reminders for renewals, timesheets, documents and deadlines sent one by one from someone's inbox cost paid hours, fail when that person is away and are easy to automate safely.
category: Business Automation
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Staff manually sending routine reminders to customers or employees
primary_cost_mechanism: Labour cost of repetitive follow-up, with revenue loss and compliance risk from reminders that are never sent
sources:
  - Set a reminder flow - Microsoft Support | https://support.microsoft.com/en-us/sharepoint/lists/documents-and-library/set-a-reminder-flow
  - Run a cloud flow on a schedule in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks
  - Turn notifications on for list and list item changes - Microsoft Support | https://support.microsoft.com/en-us/office/turn-notifications-on-for-list-and-list-item-changes-85ca9280-f4b1-485a-a49e-a593ffa62e39
related:
  - Creating the same documents by hand: The labour cost of repeat paperwork | /impact/same-documents-created-by-hand-repeat-paperwork-cost/
  - From inbox to system by hand: The labour cost of retyping emails | /impact/copying-email-details-into-business-systems-admin-cost/
  - Rebuilding the same report every month: The labour cost of manual reporting | /impact/rebuilding-recurring-reports-by-hand-labour-cost/
summary: Reminders for renewals, timesheets, documents and deadlines sent one by one from someone's inbox cost paid hours, fail when that person is away and are easy to automate safely.
layout: plain
---
## The tolerated pain: someone has to remember to remind

Every business runs on small, predictable nudges. Customers need to be told that a service is due, a certificate is about to expire, a document is still outstanding or a subscription renews next month. Employees need to be reminded to submit timesheets, complete expense claims, renew a driver's licence, finish compliance training or send their leave forms before payroll closes.

In many South African small and mid-sized businesses, each of these nudges depends on a person. An administrator keeps a spreadsheet of dates, checks it on Monday mornings, and writes or copies an email or WhatsApp message to each person who needs reminding. A week later, the same administrator checks who has not responded and sends a second message. Then a third.

None of this is difficult work. That is exactly why it is tolerated. It looks like a few minutes here and there, so nobody adds it up, and nobody asks whether a person should be doing it at all.

This article is about routine, rule-based reminders: the ones where the date, the recipient and the message are known in advance. It is different from chasing overdue invoices, which Mellorca covered in [late payments nobody follows up](/impact/inconsistent-payment-follow-up-cash-flow-cost/), and from booking and confirming appointments, covered in [the cost of manual appointment scheduling](/impact/manual-appointment-scheduling-administration-cost/). Those are specialised cases. The broader pain is the general habit of using paid people as a calendar.

## Why businesses tolerate it

- **Each reminder is small.** Writing one message takes a minute or two, so the cost never feels worth fixing.
- **The work is spread out.** HR sends some reminders, the office manager others, sales and operations their own. Nobody sees the total.
- **A personal touch feels safer.** Owners worry that automated reminders will feel cold or will annoy customers.
- **The dates live in a spreadsheet or a head.** Without a structured list of due dates, there is nothing for an automation to work from.
- **It has always worked, mostly.** Missed reminders are blamed on a busy week rather than on the method.

## Operational symptoms

- Reminder work stops when one person is on leave, ill or resigns, and the business discovers which dates were only in their head.
- Timesheets, claims and forms arrive late every month, so payroll and billing are always squeezed at the end of the cycle.
- Customers receive reminders inconsistently: some get three messages, others none, depending on who was handling their account.
- Staff keep personal lists, sticky notes and calendar entries to track who still needs a nudge.
- Second and third follow-ups are skipped because the administrator ran out of time, so overdue items quietly stay overdue.
- Expired documents, certificates or licences are discovered only when they are needed for a tender, an audit or a site visit.

## How the pain becomes money

- **Labour cost.** Paid hours spent checking dates, composing messages, sending them and tracking replies.
- **Downstream delay cost.** When employee submissions are late, payroll, invoicing and month-end close slip, and the people waiting on them lose time too.
- **Revenue loss.** Service renewals, maintenance visits and repeat orders that depend on a timely prompt are lost when the prompt does not go out.
- **Risk exposure.** An expired licence, certificate or document that nobody was reminded about can stop a job, breach a contract term or fail an audit.
- **Interruption cost.** Reminder work is fragmented. It interrupts more valuable tasks several times a day, which costs more than the minutes it appears to take.

## A transparent cost model

The figures below are illustrative assumptions for a business of roughly 40 staff and a few hundred active customers. Replace them with your own counts and timings.

| Reminder type | Messages a month | Minutes each, including follow-up | Hours a month |
| --- | --- | --- | --- |
| Timesheet and claim reminders to staff | 120 | 3 | 6 |
| Document and certificate expiry reminders | 40 | 6 | 4 |
| Customer service and renewal reminders | 200 | 4 | 13.3 |
| Checking lists and tracking who replied | – | – | 8 |

**Total:** about 31 hours a month, or roughly 375 hours a year. At an illustrative loaded cost of R250 an hour, that is around R94,000 a year in direct labour.

That figure is usually the smaller part of the cost. If even a handful of renewals or service visits a year are missed because a reminder was not sent, the lost margin can exceed the labour cost. Those losses are harder to see because nothing records the reminder that never happened. Mellorca's guide on [calculating the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) sets out how to time and cost work like this with your own figures.

*Illustrative example.* A Pretoria-based security services company kept guard registration and firearm competency expiry dates in a spreadsheet maintained by one HR officer. When she took extended leave, nobody checked the sheet for six weeks. Two guards were found to be working with lapsed documents during a client site inspection. The fix that followed was not more diligence but a list with a date column and an automated reminder that went to both the employee and their supervisor.

## When it becomes commercially urgent

- a missed reminder has already caused a lost renewal, a compliance finding or a stopped job;
- payroll or billing is regularly delayed because staff submit information late;
- one person is the only reliable source of who needs reminding about what;
- the number of staff, customers or contracts is growing faster than administrative capacity;
- you are about to hire someone whose job would partly be sending reminders.

## What better looks like

Routine reminders should be generated from dates the business already records, not from someone remembering to look. That requires two things: the dates must live in a structured list or system, and a rule must decide who is reminded, when and how often.

### Put the dates in one structured place

Expiry dates, renewal dates, submission deadlines and service intervals belong in a list or system with a proper date field, an owner and a contact for each item. A spreadsheet scattered across personal drives is not enough. Microsoft documents that Lists in Microsoft 365 include a *Set a reminder* option, which builds a ready-made [Power Automate](https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks) flow that emails a reminder a chosen number of days before a date. The option only appears when the list has a column in the Date and Time format, which illustrates the point: the reminder is only as good as the date data behind it.

### Let a schedule do the remembering

Microsoft's Power Automate documentation describes scheduled cloud flows that run once a day, an hour or a minute, on a specified date, or after a set interval. A daily flow can read the list, find every item due within the reminder window and send the right message to the right person. Accounting, HR and booking systems often include their own reminder features; use those first where they exist.

Older notification methods also need watching. Microsoft states that SharePoint Alerts in SharePoint Online are being retired from July 2026 and recommends rules or Power Automate instead. A business that relies on old alerts for reminders should check that they still work.

### Keep the human where judgement matters

Automation should send the routine first and second reminders. People should handle the exceptions: the customer who has not responded to three messages, the employee whose certificate has already lapsed, the renewal that needs a conversation. Build escalation into the rule, so a supervisor or account owner is told when an item remains open after the last automated reminder. Mellorca's article on [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) explains why this matters.

## Practical steps

1. List every recurring reminder the business sends, who sends it, how often and to whom.
2. Estimate monthly volumes and the time each takes, including second and third follow-ups.
3. Move the underlying dates into a single structured list or system with an owner for each record.
4. Automate the highest-volume reminder first, with clear wording and a reply route to a real person.
5. Add escalation for items still open after the final reminder.
6. Check customer reminders against your POPIA obligations: use contact details for the purpose they were collected for, and keep reminders separate from marketing.
7. Review the rules quarterly so reminder timing still matches how the business works.

For help choosing and building the right reminder rules, see Mellorca's [business automation](/services/business-automation/) service.

## Bottom line

Manual reminders are a small, steady payroll cost that hides a larger risk: the reminder that never goes out. The labour can be measured in hours. The missed renewal, the lapsed licence and the late payroll run are harder to measure but often cost more. Putting the dates in one structured place and letting a schedule send routine reminders removes most of the labour and makes the business far less dependent on any one person's memory.
