---
hub: impact
record_id: CPS-042
slug: collecting-employee-information-every-pay-period-admin-cost
title: Chasing Timesheets and Claims Every Pay Run: The Cost of Manual Data Collection
description: Gathering hours, overtime, leave and expense claims from every employee by email and spreadsheet each pay period costs paid hours, delays payroll and puts accurate records at risk.
lead: Gathering hours, overtime, leave and expense claims from every employee by email and spreadsheet each pay period costs paid hours, delays payroll and puts accurate records at risk.
category: HR and Payroll
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: HR and Payroll
commercial_domain: Business Automation
primary_pain: Staff manually collect hours, leave, claims and other inputs from employees every pay or reporting period
primary_cost_mechanism: Recurring payroll and administrator labour, with payroll correction cost and record-keeping risk
sources:
  - https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf | https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf
  - Pay As You Earn - South African Revenue Service | https://www.sars.gov.za/types-of-tax/pay-as-you-earn/
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - Typing Invoices From Data You Already Hold: The Labour and Billing Delay Cost | /impact/invoices-retyped-from-existing-records-billing-labour-cost/
  - The Cost of Retyping Customer Details into Every System | /impact/pain-duplication-of-customer-data-entry/
  - The Labour Cost of Manually Reconciling Two Systems | /impact/manual-reconciliation-between-systems-labour-cost/
summary: Gathering hours, overtime, leave and expense claims from every employee by email and spreadsheet each pay period costs paid hours, delays payroll and puts accurate records at risk.
layout: plain
---
## The tolerated pain: the pay-run scramble

Every pay period, someone has to find out what happened. How many hours did each person work? Who worked overtime or on a public holiday? Who took leave, and was it approved? Which travel or expense claims are due? Which salespeople earned commission? Did anyone change their bank details?

In many South African small and mid-sized businesses the answer is collected the same way each time. The payroll administrator sends a reminder, waits, and then chases. Timesheets arrive as photographs of paper forms, spreadsheets in three different layouts, and WhatsApp messages. Leave forms sit in a manager's inbox awaiting signature. Expense slips arrive in an envelope on the last day. The administrator then retypes all of it into the payroll system or a consolidation spreadsheet, usually under deadline pressure.

This is distinct from the month-end close in finance, covered in [the payroll cost of a manual month-end close](/impact/manual-month-end-close-payroll-cost/). The problem here starts earlier: the business has to ask its own people for the same categories of information every period, and receives it in forms that need to be reworked before they can be used.

## Why businesses tolerate it

- **It has always been done this way.** The process grew from a time when there were ten employees and one manager.
- **The cost is spread out.** Each employee spends a few minutes, each manager a few more, and the administrator absorbs the rest.
- **It looks like a people problem.** Late timesheets are blamed on individuals, so the answer is more reminders rather than a different process.
- **Payroll software handles calculation, not collection.** The business invested in calculating pay correctly but not in capturing the inputs cleanly.

## Operational consequence

The symptoms build up around each pay date:

- The payroll administrator spends the days before cut-off chasing rather than checking.
- Late inputs are carried into the next period, so employees are paid overtime a month late and query their payslips.
- Approvals are given in bulk at the last minute, so managers sign what they have not read.
- Hours are estimated when the real record cannot be found.
- One person knows how to reconcile the different formats, and payroll is at risk when they are away.

The legal stakes are not trivial. The Basic Conditions of Employment Act requires every employer to keep a record of, among other things, the time worked by each employee and the remuneration paid, to keep it for three years from the last entry, and prohibits false entries. It also requires written pay information on each pay day, including, where relevant, the rate of pay, overtime rate and the number of ordinary and overtime hours worked. A process built on estimated hours and retyped photographs makes those records harder to stand behind.

Timing matters too. SARS states that employees' tax deducted must be paid within seven days after the end of the month in which it was deducted, and employers must reconcile PAYE, UIF and SDL in interim and annual reconciliations. Late or corrected inputs ripple into those submissions.

## How the pain becomes money

- **Administrator labour:** sending reminders, chasing, reformatting and capturing inputs.
- **Employee and manager labour:** filling in, finding, signing and resubmitting forms.
- **Correction cost:** payslip queries, off-cycle payments and adjustments carried into the next run.
- **Overpayment and underpayment:** estimated hours or missed leave can pay people the wrong amount. Count only errors you can document.
- **Compliance exposure:** weak time and remuneration records make disputes and inspections harder to answer. Treat this as a risk rather than a fixed rand figure.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African business with 80 employees paid monthly. They are not benchmarks. Replace them with your own figures from two or three pay runs.

| Activity (illustrative) | Assumption | Minutes per pay run |
| --- | --- | --- |
| Employees completing and sending inputs | 80 employees × 10 minutes | 800 |
| Manager review and sign-off | 8 managers × 45 minutes | 360 |
| Administrator reminders and chasing | 30 late submissions × 6 minutes | 180 |
| Administrator reformatting and capture | 80 employees × 5 minutes | 400 |
| Payslip queries and corrections | 8 queries × 30 minutes | 240 |
| **Total** |  | **1,980** |

1,980 minutes is 33 hours per pay run. At an illustrative blended loaded cost of R250 an hour, that is R8,250 a month, or R99,000 a year. A business paying weekly or fortnightly would run the collection cycle several times a month, so the same per-run figure should be multiplied by the number of runs. The employee minutes are the hardest to recover, because some recording of time will always be needed; the chasing, reformatting and correction minutes are where most of the avoidable cost sits.

## Secondary consequences

Employees notice when their overtime is late or their leave balance is wrong, and trust in payroll erodes quickly. Managers who sign in bulk lose the chance to spot unusual claims. Banking detail changes received by email are an obvious fraud risk if there is no verified channel for them. And the knowledge of how to turn the monthly pile into a payroll often sits with one person, a pattern discussed in [why routine admin expands as the business grows](/patterns/why-routine-admin-expands-as-the-business-grows/).

## When this becomes commercially urgent

- Payroll cut-off regularly slips, or inputs are routinely carried into the next period.
- Payslip queries rise after every run.
- The business adds sites, shifts or contract staff, multiplying the number of input formats.
- The payroll administrator is the only person who can complete a run.
- A labour dispute exposes gaps in time or remuneration records.

## What better looks like

In a better state, each recurring input has one standard form, one channel and one approver. Employees submit hours, leave and claims when they happen, rather than reconstructing them at month-end. Managers approve individual items as they arrive. Approved data flows to payroll without being retyped, and the administrator's job shifts from collecting to reviewing exceptions.

Many businesses already licence tools that can do this. Microsoft's Power Automate documentation, for example, lists approving vacation time requests and expense reports as common uses of its approvals feature, and notes that approvers can respond from an Outlook email, a Teams card or the Power Automate action centre. Dedicated time-and-attendance and HR systems go further, with clocking, leave balances and direct payroll integration. The choice of tool matters less than standardising the inputs and approval rules first. Approval design itself deserves care, because [one slow approval can hold up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/).

### Trade-offs to weigh

- **Employees need access.** Staff without company email or devices need a workable channel, such as a shared terminal or a mobile form.
- **Rules must be written down.** Overtime eligibility, shift allowances and claim limits must be explicit before a system can apply them.
- **Bank detail changes need verification.** Self-service makes changes easy, so add an independent check.
- **Running costs continue.** Licences, integration upkeep and support are recurring.

## Practical diagnostic

1. List every type of information you collect from employees each pay period, and the format each arrives in.
2. For the next pay run, log the date each employee's inputs arrived and how many reminders it took.
3. Time the administrator's chasing, reformatting and capture separately from checking.
4. Count payslip queries and corrections over three runs and record their causes.
5. Pick the single largest input, usually hours or overtime, and standardise its form and approval first.

A simple method for turning these timings into a rand figure is set out in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

## The bottom line

Asking every employee for the same information in a different format every pay period turns payroll into a recurring collection exercise. The cost shows up as paid hours, late or wrong pay, and records that are harder to defend. Standard inputs, approval as items arise and a direct path into payroll turn a monthly scramble into routine review.
