---
hub: impact
record_id: CPS-088
slug: spreadsheet-exports-imports-connecting-core-systems-manual-integration-cost
title: Export, Fix, Import: The Hidden Cost of Spreadsheets Connecting Core Systems
description: When the link between two business systems is a person exporting a file, adjusting it in Excel and importing it elsewhere, every transfer costs time and creates a fresh chance of error.
lead: When the link between two business systems is a person exporting a file, adjusting it in Excel and importing it elsewhere, every transfer costs time and creates a fresh chance of error.
category: Automation and Integration
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Automation and Integration
commercial_domain: Automation and Integration
primary_pain: Spreadsheet exports and imports are used as the connection between core business systems
primary_cost_mechanism: Recurring weekly labour at busy periods, import and transformation errors that reach payroll, invoices and stock, reconciliation rework, dependency on one person, and uncontrolled copies of personal information
sources:
  - Keeping leading zeros and large numbers - Microsoft Support | https://support.microsoft.com/topic/1bf7b935-36e1-4985-842f-5dfa51f85fe7
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - When Customers Find the Broken Integration Before You Do | /impact/integrations-breaking-silently-customers-report-failure-first-cost/
  - The Integration That Is Always Being Fixed: Paying for Poorly Designed Connections | /impact/custom-integrations-constantly-need-repair-poorly-designed-connections-cost/
  - Shadow Automations: The Hidden Risk of Workflows Built Outside Oversight | /impact/personal-automations-outside-business-oversight-shadow-automation-continuity-risk/
summary: When the link between two business systems is a person exporting a file, adjusting it in Excel and importing it elsewhere, every transfer costs time and creates a fresh chance of error.
layout: plain
---
## The Thursday afternoon routine

Every Thursday, the payroll officer at a Bloemfontein retail group exports the week's clocking data from the time-and-attendance system to a CSV file. She opens it in Excel, deletes the columns payroll does not need, renames the headings, fixes the employee numbers that lost their leading zeros, merges two branch files, saves it in the format the payroll package expects and imports it. If the import fails, she finds the bad row, corrects it and tries again. It takes about three hours. When she is on leave, a colleague follows a printed checklist and it takes five.

Nobody would describe this as an integration. But it is one. It is the only way information moves between two core systems, and it runs on a person, a spreadsheet and a checklist.

## Why spreadsheets become the connection

File-based transfers are the default because almost every business system can export and import data, and almost everybody can use Excel. They appear for good reasons:

- **The systems were bought separately.** Each solved a problem in one department, and nobody planned how they would talk to each other.
- **A direct connection seemed expensive.** An export and import was free, and someone was willing to do it.
- **The format never quite matches.** One system's export does not fit the other's import, so a spreadsheet becomes the place where the data is reshaped by hand.
- **It started small.** A monthly file with 50 rows became a weekly file with 2,000.

This is a concrete form of the pattern described in [staff becoming the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/).

## The labour cost

File-based integration is paid for in hours that rarely appear on any report. The following figures are illustrative. If a business has four regular transfers, such as time data to payroll, orders to invoicing, stock counts to the online shop and bank transactions to accounting, and each takes two hours a week, that is eight hours a week or about 35 hours a month. At a loaded cost of R250 an hour, that is close to R9,000 a month, or over R100,000 a year. Add the hours spent investigating mistakes and rerunning failed imports, and the figure rises further.

The labour is also badly timed. Transfers usually happen at month end, payroll cut-off or before a report is due, which are the moments when the same people are busiest.

## The error cost

Every manual transfer is a fresh opportunity for something to go wrong. Typical errors include:

- **Silent number changes.** Excel can alter data as it opens a file. Microsoft's support article on [long numbers being changed to zeros](https://support.microsoft.com/topic/1bf7b935-36e1-4985-842f-5dfa51f85fe7) explains that Excel keeps only 15 significant digits, so any digits after the fifteenth in a longer number become zeros unless the cell is formatted as text. South African ID numbers are 13 digits, but account numbers, reference numbers and card numbers can be longer, and leading zeros on employee or product codes are often dropped.
- **Wrong file or wrong period.** Last week's export is imported again, or one branch's file is missed.
- **Column mismatches.** A heading is renamed or a column moves in a software update, and data lands in the wrong field.
- **Partial imports.** Some rows fail and the rest succeed, and nobody notices the gap.
- **Manual edits that are never recorded.** Corrections made in the spreadsheet are not made in the source system, so the same problem returns next week.

In payroll, these errors become wrong salaries and corrections. In invoicing, they become wrong invoices and credit notes. In stock, they become overselling. The cost of [manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/) is often the downstream result.

## The data protection angle

Every export file is another copy of business data, often including personal information about employees or customers. Files saved to desktops, downloads folders and email attachments are hard to track and harder to delete. That makes it more difficult to meet the security obligations in the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act), which requires reasonable measures to protect personal information against loss and unauthorised access. This is general information, not legal advice.

## Why it persists

The routine works most weeks, so it looks cheap. The person who runs it is competent and reliable, so it looks safe. And replacing it feels like an IT project with an uncertain price. The risk is only visible when the person is absent, the volume grows or an error reaches a customer or an employee's payslip.

## What better looks like

There are steps between a fully manual transfer and a custom-built integration. The first is to make the reshaping repeatable. Microsoft's documentation on [Power Query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query), which is built into Excel, explains that it lets users connect to data, apply transformation steps and save them as a repeatable query that can be refreshed, instead of reshaping data by hand each time. That alone removes many manual edits and makes the process the same no matter who runs it.

The second step is to check whether the two systems already offer a connector or an import from each other. Many payroll, accounting and commerce packages have standard integrations that are included in the subscription or available at modest cost. The third step, where volumes and risk justify it, is a direct integration through the systems' interfaces, with monitoring and an owner. The guide to [when copy and paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/) helps decide which step is appropriate.

## Practical next actions

1. **List every regular export and import.** Record the source system, destination, frequency, volume, who runs it and how long it takes.
2. **Calculate the annual hours.** Multiply time per transfer by frequency, and add a realistic allowance for fixing failed or wrong imports.
3. **Protect identifiers.** Make sure codes and long numbers are imported as text, so leading zeros and digits are not lost.
4. **Replace manual reshaping with a saved query.** Use Power Query or a similar tool to record the transformation once and refresh it each time.
5. **Ask both vendors about standard connectors.** Check what integrations already exist before paying for custom work.
6. **Add a count check after every import.** Compare rows exported with rows imported, so partial failures are found immediately.

A spreadsheet in the middle of two systems is not free just because nobody invoiced for it. It costs hours every week and errors every month, and the risk grows with every new row.
