---
hub: patterns
record_id: PAT-184
slug: why-managers-keep-asking-hr-for-the-same-reports
title: Why Managers Keep Asking HR for the Same Reports
description: When line managers have to request headcount, leave and overtime figures from HR every month, HR becomes a report factory. Here is why it happens and how to give managers their own view.
lead: When line managers have to request headcount, leave and overtime figures from HR every month, HR becomes a report factory. Here is why it happens and how to give managers their own view.
category: People, HR & Workforce Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: People, HR & Workforce Operations
pattern_family: People, HR & Workforce Operations
observable_condition: HR receives the same requests every month from line managers for headcount, leave balances, overtime and contract end dates, and prepares filtered spreadsheets for each by hand.
primary_identification: Gatekept information: managers are entitled to see their team's data, but access has not been designed to give them a secure, current view without HR preparing it.
commercial_value_dimensions: HR capacity, managerial decision speed, personal information protection and workforce planning quality
sources:
  - Row-level security (RLS) with Power BI - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Why Leave Requests Still Travel Through Messages and Spreadsheets | /patterns/why-leave-requests-are-still-handled-through-chat-messages-and-spreadsheets/
  - When every department reports the same metric differently | /patterns/when-every-department-reports-the-same-metric-differently/
  - Why Staff Have to Chase Stock Availability | /patterns/why-staff-end-up-phoning-around-to-find-out-whats-in-stock/
summary: When line managers have to request headcount, leave and overtime figures from HR every month, HR becomes a report factory. Here is why it happens and how to give managers their own view.
layout: plain
---
## Observable condition

On the first working day of every month, the HR administrator at a Polokwane security services company receives the same set of emails. The operations manager wants overtime by site. The two regional supervisors want leave balances for their teams. The finance manager wants headcount by cost centre. The owner wants a list of contracts ending in the next sixty days.

She exports data from the payroll system, filters it in a spreadsheet, removes the people each manager should not see and emails each version separately. It takes most of two days. Halfway through the month, a supervisor asks again because a guard has resigned and the numbers have changed.

None of the requests are unreasonable. Each manager needs the information to run their area. The problem is that the only way to get it is to ask HR.

## Realisation

The realisation is that HR has become a manual reporting service. The data exists in the payroll and HR systems, and managers have a legitimate need to see their part of it. What is missing is a way for each manager to see their own figures without someone preparing them by hand.

Every month, the same reports are rebuilt from scratch, and they start going out of date the moment they are sent.

**Realisation prompt:** count the report requests HR received last month. How many were repeats of requests from the month before?

## Identification

This is a pattern of gatekept information. The visible symptom is a steady stream of recurring report requests to HR. The common assumption is that HR data is sensitive and must therefore be released by HR. The structural cause is that access has never been designed so that each manager can see the data they are entitled to, and nothing more, directly.

It is related to [when HR answers the same questions employees could look up](/patterns/when-hr-answers-the-same-questions-employees-could-look-up/), which covers employee queries. This pattern covers managers, whose requests are larger, more frequent and more time-consuming.

## Diagnosis

- **Sensitivity is handled by hand.** Because personal information must be protected, HR filters each report manually to remove what a manager should not see.
- **Reports are snapshots.** Each emailed spreadsheet is out of date as soon as anything changes, which prompts another request.
- **The same report is rebuilt monthly.** No template or saved query exists, so the work is repeated.
- **Managers cannot answer simple questions themselves.** Even a leave balance for one team member requires an email.
- **Copies multiply.** Emailed spreadsheets containing employee details are stored in many inboxes, which is harder to control than a single protected view.

## Commercial impact

The commercial value at stake is HR capacity, managerial decision speed, data protection and the quality of workforce planning.

HR capacity is the visible cost. Two days a month on recurring reports is roughly a tenth of an administrator's time. In a small HR team, that time could go to recruitment, employee relations or compliance. The Impact note on [rebuilding recurring reports by hand](/impact/rebuilding-recurring-reports-by-hand-labour-cost/) describes the wider labour cost.

Decision speed suffers. A supervisor who must wait a day for a leave balance cannot approve leave or plan shifts on the spot.

Data protection risk increases. South Africa's [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) requires appropriate safeguards for personal information. Spreadsheets of employee data sent by email and saved in many places are harder to secure than a controlled view.

Planning quality drops. Managers working from last month's snapshot make overtime and staffing decisions on outdated numbers.

## Common misidentification

One misreading is that managers ask too often and should plan better. Their requests are usually a sign that they need the information regularly.

Another is to give managers full access to the payroll system. That solves the speed problem but creates a serious privacy problem, because most systems would show them far more than their own team.

A third is to build a single dashboard for everyone. Without restricting what each viewer sees, one dashboard either shows too much or must be split into many versions by hand.

## Possibility

The possibility is that each manager opens a report that shows only their team's headcount, leave, overtime and upcoming contract dates, refreshed automatically from the source systems. HR maintains the report once. The system decides who sees which rows.

[Microsoft's documentation on row-level security in Power BI](https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security) describes filtering data at row level by role or by the signed-in user, so one report can show each viewer only the data they are entitled to. Combined with [scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data), the report stays current without anyone rebuilding it.

In that business, HR's time moves from producing reports to improving the data behind them. The Moment [what changes when people can see their own numbers](/moments/what-changes-when-people-can-see-their-own-numbers/) describes the effect on managers. See also [why the latest numbers are always a request and never a view](/patterns/why-the-latest-numbers-are-always-a-request-and-never-a-view/).

## Intervention

Start with an inventory. For one month, log every report request HR receives: who asked, what they needed and how long it took.

Group the requests. Most fall into four or five types, such as headcount, leave, overtime, contract dates and absenteeism.

Decide, with each manager, exactly what they should see and what they should not. Write it down. This is the basis for access rules and a useful privacy record in its own right.

Build one report per request type, refreshed from the source, with access restricted by manager or site. Pilot it with one manager for a month, then extend.

## Practical next actions

1. Log every report request HR receives for a month, including time spent on each.
2. Group the requests into no more than five recurring report types.
3. Agree and document with each manager which employees and fields they are entitled to see.
4. Build one refreshable report for the most common request type with access limited to each manager's team.
5. Pilot it with one manager, confirm they see only their own team, and then extend to others.
6. Stop emailing spreadsheets of employee data once a controlled view is in place.

## Diagnostic questions

- How much HR time each month goes into recurring reports for managers?
- How many spreadsheets of employee details are sitting in managers' inboxes right now?
- Can a supervisor see a team member's leave balance without asking anyone?
- Do we have a written record of which managers may see which employee information?

## Bottom line

When managers keep asking HR for the same reports, HR has become a manual reporting service and employee data is spreading through inboxes. Agree what each manager may see, build refreshable reports that show only that, and let HR maintain one source instead of rebuilding many copies. Managers decide faster, HR gets time back and personal information is better protected.
