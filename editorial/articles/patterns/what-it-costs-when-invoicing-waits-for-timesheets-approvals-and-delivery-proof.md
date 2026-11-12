---
hub: patterns
record_id: PAT-158
slug: what-it-costs-when-invoicing-waits-for-timesheets-approvals-and-delivery-proof
title: The Cost of Waiting for Timesheets, Approvals or Delivery Data
description: Invoices, payroll and month-end close often wait on a few people's timesheets, sign-offs or delivery confirmations. Here is where the waiting comes from and what it costs.
lead: Invoices, payroll and month-end close often wait on a few people's timesheets, sign-offs or delivery confirmations. Here is where the waiting comes from and what it costs.
category: Finance, Payroll & Compliance Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Finance, Payroll & Compliance Operations
pattern_family: Finance, Payroll & Compliance Operations
observable_condition: Invoices, payroll or month-end figures wait several days while finance chases a few late timesheets, approvals or delivery confirmations.
primary_identification: Dependence on upstream inputs with no visible deadline, no automatic reminder and no view of who is outstanding.
commercial_value_dimensions: Days to invoice, cash flow, payroll accuracy, finance team capacity and relationships with staff and customers
sources:
  - https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf | https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf
  - Manage sequential approvals with Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
related:
  - The Cost of Manual Consolidation Across Workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
  - When a New Employee's First Months Run on Emails and Memory | /patterns/when-a-new-employees-first-months-run-on-emails-and-memory/
  - Why Teams Keep Chasing Sign-Off | /patterns/why-teams-keep-chasing-sign-off/
summary: Invoices, payroll and month-end close often wait on a few people's timesheets, sign-offs or delivery confirmations. Here is where the waiting comes from and what it costs.
layout: plain
---
## Observable condition

Month-end approaches and the finance team is ready. The ledgers are up to date, the bank reconciliation is done, and the invoice templates are prepared. What they do not have is the information that makes the invoices possible. Three consultants have not submitted their timesheets. A project manager has not approved the hours already submitted. Two deliveries have no signed proof, because the driver's paperwork is still in the vehicle.

The finance lead sends a round of reminders. Some are answered within the hour, and others are not answered until the next week. Invoices that could have gone out on the last day of the month go out on the ninth. Payroll for hourly staff is held until the supervisor sends the corrected hours.

An illustrative example: a Johannesburg engineering-services firm that bills clients monthly for hours worked. Invoicing starts only when every consultant's time has been submitted and approved, so the slowest person sets the date for everyone.

## Realisation

The realisation is that the delay does not sit in finance. Finance is waiting, not working. The process depends on inputs that arrive from other people on their own schedules, and the business has not made those inputs visible, due by a stated time, or chased automatically.

Records of time worked are not optional for employers in South Africa. [The Basic Conditions of Employment Act](https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf) requires employers to keep records of time worked and remuneration paid, and to keep them for a period after the last entry. The record is therefore needed anyway; the real question is how quickly and how reliably it is captured.

The cost of waiting is easy to overlook because it is spread. No single day of delay looks serious. But every invoice that goes out a week late is a week of cash the business has lent to its customers without charging for it.

**Realisation prompt:** at your last month-end, which inputs arrived last, and how long did finance wait for them?

## Identification

This is a pattern of dependency on late upstream data. The visible symptom is the chasing: emails, messages and phone calls to people who have not yet done something. The common assumption is that the late submitters are undisciplined. The structural cause is that nothing reminds them in time, nothing shows them what is due, and nothing makes the cost of lateness visible to the person causing it.

The Impact note [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/) describes how queues accumulate. This pattern focuses on the cash and capacity cost of waiting for a specific set of inputs.

## Diagnosis

- **The deadline is informal.** "End of the month" is understood differently by each person, and nobody is told the exact time by which the input is needed.
- **Reminders depend on one person.** Finance chases by hand. The reminder arrives only when someone has time to send it, and it is easy to ignore.
- **There is no view of who is outstanding.** Finance can see who has submitted only by opening a folder or searching an inbox. The submitters cannot see anything.
- **Approvals sit with one person.** If the approver is away, nothing moves. [Microsoft's documentation on sequential approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals) describes how an approval can be routed through named approvers in order; without a stated alternate, the same chain simply stalls.
- **Delivery proof is on paper.** Signed delivery notes are in vehicles, bags and on desks. They reach finance only when someone collects them.
- **Everything is held for the slowest input.** A single missing timesheet holds an invoice run for thirty, because the process is built to wait for all of them.

## Commercial impact

The commercial value at stake is days to invoice, cash flow, payroll accuracy, finance capacity and the relationship with staff and customers.

The first cost is cash. If a business invoices on the ninth instead of the last day, and its customers pay thirty days from invoice, it has pushed its receipts back by nine days across every account. For a business with monthly billing, that is nearly a third of a month of revenue held back each cycle, a figure that can be calculated from your own invoice values.

The second cost is finance capacity. The team that should be reconciling, forecasting and improving the process is spending days sending reminders, waiting and starting again. The work is compressed into the last two days, and errors rise as pressure does.

The third cost is payroll accuracy. When hours arrive late, they are keyed in a hurry. Corrections follow, and staff, who are very sensitive to pay errors, lose confidence. The Moment [the lunch break eaten by approval requests](/moments/the-lunch-break-eaten-by-approval-requests/) shows how the same pressure feels to the people being asked to approve.

The fourth is customer friction. Late invoices reach customers in a batch, often just before their own cut-off, which can push payment into the following cycle.

## Common misidentification

The usual response is to scold late submitters, which brings a short improvement and then the old pattern. Another is to let finance proceed with estimates, which creates credit notes and corrections later. A third is to assume a new timesheet or billing system will solve the problem; a system without clear deadlines, reminders and visibility only moves the waiting into a different screen.

## Possibility

In a better state, every input has a stated due time, and the people responsible receive a reminder before it, not after. Finance can see at a glance who has submitted and who has not. Approvals have a named alternate and a time limit. Delivery confirmations are captured at the point of delivery rather than collected later.

Instead of holding the entire run for the last timesheet, the business bills what is ready and handles the exception separately. [Microsoft's documentation on data alerts in Power BI](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts) describes notifying people when a figure crosses a threshold, such as the number of outstanding submissions. That is one way of putting the outstanding count in front of someone who can act on it.

The Pattern [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/) examines when the check itself costs more than the risk it prevents.

## Intervention

Start by measuring the wait, then fix the largest source rather than all of them at once.

## Practical next actions

1. **List the inputs finance depends on.** For each, note who supplies it, when it is due and what usually happens if it is late.
2. **Set exact deadlines.** Replace "end of month" with a date and time, and tell everyone once, in writing.
3. **Send reminders before the deadline.** Schedule one reminder the day before and one on the morning of, so lateness is not a surprise.
4. **Make outstanding items visible.** Keep a simple shared list of who has and has not submitted, visible to finance and the managers.
5. **Name an alternate approver.** Give every approval a backup and a time limit after which the item moves on.
6. **Bill what is ready.** Do not hold the full run for one late input. Invoice complete items and treat the rest as exceptions.

## Diagnostic questions

- Which single input most often delays your invoicing or payroll?
- Does the person who owes the input know the exact deadline?
- Who sends the reminder, and when does it arrive relative to the deadline?
- If the usual approver is away, what happens to the items waiting for them?
- How many days earlier could you invoice if the slowest input arrived on time?

## Bottom line

Waiting for timesheets, approvals and delivery data costs cash, capacity and trust, and it is often accepted as normal. Giving each input a clear deadline, a timely reminder and a visible status shortens the wait without needing anyone to work harder.
