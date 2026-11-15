---
hub: impact
record_id: CPS-098
slug: unofficial-spreadsheets-bridging-disconnected-systems-shadow-process-cost
title: The Spreadsheet That Holds It All Together: The Cost of Shadow Processes
description: When official systems do not connect, staff build unofficial spreadsheets to bridge the gap. These quietly become critical processes with no controls, no backup and a high error rate.
lead: When official systems do not connect, staff build unofficial spreadsheets to bridge the gap. These quietly become critical processes with no controls, no backup and a high error rate.
category: Business Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Operations
commercial_domain: Business Operations
primary_pain: Employees maintain unofficial spreadsheets to bridge disconnected official systems, creating shadow processes and unreliable data
primary_cost_mechanism: Daily copying labour, decision errors from broken formulas and stale data, single-person dependency, conflicting versions of the truth, personal information compliance exposure, and hidden demand for system fixes
sources:
  - Spreadsheet Errors: What We Know. What We Think We Can Do | https://arxiv.org/abs/0802.3457
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - Local Administrator Rights Nobody Reviewed: The Cost of Unmanaged Devices | /impact/local-administrator-rights-unneeded-unmanaged-device-changes-support-security-cost/
  - When Reports Do Not Answer the Question: The Cost of Private Analysis Spreadsheets | /impact/employees-private-spreadsheets-official-reports-unanswered-questions-duplicated-reporting-cost/
  - When Home Internet Becomes the Office Network: The Cost of Unreliable Remote Work | /impact/remote-employees-unreliable-home-connectivity-inconsistent-productivity-cost/
summary: When official systems do not connect, staff build unofficial spreadsheets to bridge the gap. These quietly become critical processes with no controls, no backup and a high error rate.
layout: plain
---
## The tracker everyone depends on and nobody owns

At a medical equipment distributor in Bloemfontein, the official process for customer orders runs through the ERP system. The real process runs through a spreadsheet called "Order Tracker FINAL v3". Because the ERP does not receive delivery confirmations from the courier portal, and the service team cannot see order status in its ticketing system, a senior administrator built a spreadsheet that combines all three. She updates it every morning by copying data from each system. Sales checks it before calling customers. Finance uses it to decide which invoices to release. Management reviews it weekly.

None of the official systems knows the spreadsheet exists. It has no backup beyond her laptop and an occasional email to herself. When she took two weeks of leave, three people tried to keep it updated, and the version that came back had broken formulas and duplicated rows.

## How shadow processes form

Unofficial spreadsheets are a reasonable response to a real problem. When official systems are disconnected, someone still has to see the whole picture. Staff do what they can with the tools they have. The guide [when a spreadsheet becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/) describes the moment a personal tool turns into something the business relies on. Common signs include:

- The spreadsheet is consulted before, or instead of, the official system.
- Decisions about money, customers or stock are taken from it.
- Several people update it, or depend on one person to update it.
- It contains data copied from two or more systems, often by hand.
- Nobody outside the team knows how it works.

## Why spreadsheets are a risky place for critical processes

Spreadsheet errors are well researched. Raymond Panko's paper [Spreadsheet Errors: What We Know. What We Think We Can Do](https://arxiv.org/abs/0802.3457) summarises fifteen years of studies finding that errors are common and significant, and notes that the only technique shown to be effective at that point was careful cell-by-cell inspection. Most unofficial trackers never receive that kind of review.

Shadow spreadsheets also bring legal exposure when they hold customer or employee information. South Africa's Information Regulator explains on its [POPIA page](https://inforegulator.org.za/popia/) that any organisation processing personal information must comply with the conditions for lawful processing, including appropriate security safeguards, and must report security compromises. A spreadsheet of customer names, contact details and order histories on an unencrypted laptop or in a personal email account is personal information processing in exactly the way the Act covers.

## The cost of shadow processes

The figures below are illustrative.

### Daily maintenance labour

If maintaining the tracker takes 90 minutes each morning, that is around 350 hours a year. At a loaded cost of R350 an hour, roughly R120,000 a year is spent copying data that the official systems could share directly.

### Errors in decisions

A broken formula or a pasted row in the wrong place can release an invoice for an order that has not been delivered, or hold one that has. Each error costs time and sometimes damages a customer relationship. The broader pattern is described in [a business run on a spreadsheet one person understands](/impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/).

### Single-person dependency

When the person who maintains the spreadsheet is ill, on leave or resigns, the process degrades immediately. Others have to learn an undocumented system under pressure.

### Conflicting versions of the truth

The spreadsheet and the official systems drift apart. Different teams use different sources and arrive at different answers, which creates meetings and disputes.

### Hidden demand for system improvements

Perhaps the largest cost is that the business never sees the real requirement. The spreadsheet absorbs the problem, so nobody fixes the missing integration that caused it.

## Shadow spreadsheets as a map of what is missing

The most useful way to view unofficial spreadsheets is as evidence. Each one records exactly what information people need and cannot get from the official systems, and how they combine it. That makes them an excellent starting point for improvement. The guide on [turning side spreadsheets into CRM improvements](/insights/turning-side-spreadsheets-into-crm-improvements/) shows how to treat them as requirements rather than as bad behaviour.

Not every spreadsheet needs to be replaced. Some analysis is genuinely one-off, and spreadsheets are the right tool for it. The target is the spreadsheet that has become a recurring process, holds data copied from several systems and drives decisions.

## Replacing the spreadsheet without losing what it does well

Staff built the spreadsheet because it gave them something the systems did not: one view, organised the way they work. A replacement that removes the spreadsheet but does not provide that view will be resisted, and a new unofficial file will appear. Effective replacements usually involve:

- Connecting the source systems so the data flows without copying, as discussed in [spreadsheet exports and imports connecting core systems](/impact/spreadsheet-exports-imports-connecting-core-systems-manual-integration-cost/).
- Building a shared view or report in an official tool that matches the layout people actually use.
- Moving calculations and business rules into a controlled place where they can be checked.
- Keeping the spreadsheet running in parallel for a short period and retiring it formally once the new view is trusted.

## Practical next actions

1. **Ask each team which spreadsheets they rely on daily or weekly.** Make it clear the aim is to understand needs, not to criticise.
2. **For each, record its sources, users and decisions.** Note which systems the data is copied from and who maintains it.
3. **Estimate the maintenance time and error history.** Include time spent fixing mistakes and reconciling with official systems.
4. **Check for personal information.** Confirm where each file is stored, who can access it, and whether it is backed up and protected.
5. **Prioritise the spreadsheets that drive money or customer decisions.** Treat their structure as the requirement for the replacement.
6. **Fix the missing connection, then retire the file.** Provide an official view that does the same job before removing the spreadsheet.

A shadow spreadsheet shows where the official systems are not giving people what they need. The cost lies less in the file itself than in the daily copying, the errors and the dependency on one person that keep the gap hidden.
