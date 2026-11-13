---
hub: insights
record_id: INS-084
slug: turning-side-spreadsheets-into-crm-improvements
title: How to stop people keeping shadow spreadsheets beside the CRM
description: Side spreadsheets are a symptom, not a discipline problem. Learn how to read them as requirements, close the gaps they fill and retire them safely.
lead: Side spreadsheets are a symptom, not a discipline problem. Learn how to read them as requirements, close the gaps they fill and retire them safely.
category: Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Operations
sources:
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Security roles and privileges for Dataverse - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges
related:
  - How to tell whether you have a people problem or a systems problem | /insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/
  - Why your CRM is not the problem you think it is | /insights/why-your-crm-is-not-the-problem-you-think-it-is/
  - What your recurring problems are telling you about your systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
summary: Side spreadsheets are a symptom, not a discipline problem. Learn how to read them as requirements, close the gaps they fill and retire them safely.
layout: plain
---
Almost every business that has a CRM also has a folder somewhere containing a spreadsheet called something like "Leads - latest - FINAL v3". It belongs to a salesperson, an account manager or the person who runs renewals. It holds names and numbers that are not in the CRM, or are in the CRM in a worse form. Everybody knows it exists. Nobody mentions it in meetings.

The usual management response is an instruction: everything must be captured in the CRM, and spreadsheets will no longer be accepted. It rarely works. The spreadsheets go underground, the CRM gets a half-hearted entry once a week and trust in both falls. A more productive approach starts from a different premise. The side spreadsheet is the best requirements document you will ever receive, written by the people who do the work, at no cost.

## Why people keep them

Nobody keeps a second system for fun. Maintaining a parallel list is extra work, so there is always a reason. The reasons usually fall into a small number of groups.

- **The CRM cannot hold something they need.** A field is missing: a site contact, a fleet size, a preferred call time, a tender closing date.
- **The CRM is slower than the spreadsheet.** Opening a record, scrolling through tabs and saving takes longer than typing into a cell.
- **The CRM cannot show the view they need.** They want everyone due for follow-up this week, sorted by value, and the CRM report takes ten clicks and still gets it wrong.
- **They do not trust the CRM data.** Duplicates, stale contacts and missing history make private lists feel safer. See [why teams stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/).
- **They want private control.** Some people treat their contacts as personal capital and are reluctant to share them. This one is a management matter rather than a system fault, and it needs a direct conversation.
- **The data does not belong in the CRM yet.** It may be a one-off project, a campaign list or a temporary workaround. Not everything deserves a permanent home.

The cost of ignoring the problem is described in [the cost of salespeople keeping personal spreadsheets of customer records](/impact/salespeople-personal-spreadsheets-customer-records-cost/). The first step towards avoiding it is to understand which reason applies where.

## Step 1: Find the spreadsheets without a witch-hunt

Announce a short amnesty. Tell the team that the aim is to learn from the lists they keep, not to punish anyone. Ask each person to share the sheets they use at least weekly, and ask for no more. Treat what they hand over as a courtesy.

If you start with a threat, the sheets will be renamed and moved to personal drives. If you start with curiosity and visible follow-through, people will volunteer them.

## Step 2: Read each sheet as a specification

For each spreadsheet, sit with its owner for twenty minutes and record the following.

1. What decision or task does this sheet help with?
2. Which columns do you look at every day, and which did you add once and ignore?
3. Where does the data come from, and is any of it copied from the CRM?
4. Who else uses it, and by what route do they receive it?
5. What would you lose if it vanished tomorrow?

This quickly shows which columns are real requirements. A column called "Gate code" on a spreadsheet kept by a field sales rep points to a missing CRM field. A tab named "Chase list" points to a missing report. The pattern described in [why staff keep a spreadsheet between two business systems](/patterns/why-staff-keep-a-spreadsheet-between-two-business-systems/) often turns up here too: the sheet is quietly doing the job of a connection nobody built.

## Step 3: Sort the findings into five buckets

| Finding | Typical fix |
| --- | --- |
| A missing field or record type | Add it to the CRM and migrate the column |
| A missing view or report | Build a saved view or dashboard that replaces the sheet |
| A slow or clumsy process | Simplify the form, reduce required fields, add shortcuts or bulk editing |
| A data trust problem | Clean the underlying records and set matching rules; see [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) |
| A temporary or one-off need | Leave it, with an end date and a named owner |

Fix the first three before asking anybody to give up their sheet. Taking away a working tool without supplying a better one is the surest way to make people hide it.

## Step 4: Replace in order of benefit, not in order of annoyance

Start with the spreadsheet that is used by the most people or carries the most important decisions, and replace it properly. A single visible success changes attitudes more than ten half-finished migrations. Our article on [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/) explains why a change that fits the work spreads faster than any instruction to comply.

Whenever you retire a sheet, do it with some ceremony:

- Migrate the data and have the owner check a sample of rows against the CRM.
- Run both for a short, fixed period, say two weeks, then freeze the spreadsheet as read-only.
- Archive it in a clearly named location rather than deleting it, in case something was missed.
- Tell the team what changed and why, and credit the person whose sheet led to the improvement.

## The data protection angle

There is also a compliance reason to care. Customer lists contain [personal information](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/), and South Africa's Protection of Personal Information Act applies wherever that information is held, including in a spreadsheet on a laptop or a personal cloud folder. Section 19 requires a responsible party to take appropriate, reasonable technical and organisational measures to prevent loss of, damage to or unauthorised access to personal information, to identify foreseeable risks, to verify that safeguards are working and to keep them updated. Section 16 requires reasonably practicable steps to keep personal information complete, accurate and updated where necessary.

A side spreadsheet is hard to defend on either count. It is not backed up by the business, it travels by email and it goes stale unnoticed. When a staff member leaves, the list may leave with them. These are reasons to bring the data back inside a controlled system, not reasons to frighten the team. As ever, specific obligations should be confirmed with a qualified adviser.

## Make the CRM the easier route, then control the exits

Once the CRM genuinely serves the work, you can reasonably tighten the edges. Many CRMs allow administrators to limit who can export data. Microsoft's Dataverse documentation, for example, describes privacy-related privileges that control tasks involving data downloaded or exported outside the platform, such as exporting to Excel, so that bulk export can be granted to those who need it rather than to everyone. Whatever platform you use, check what it offers. Restricting exports before fixing the underlying gaps tends to fuel the shadow-sheet habit. Restricting them afterwards protects the improvement you have made.

## Keep it from coming back

- **Create a simple route for requests.** A shared list where anyone can propose a field or a report, reviewed monthly, stops frustration from turning into workarounds.
- **Measure the CRM's response time.** If saving a call note takes more than a few seconds of effort, people will find another place for the note.
- **Review spreadsheets when they appear.** New starters bring their own habits. Ask about them in the first month.
- **Recognise legitimate spreadsheets.** The article on [when a spreadsheet is a useful tool and when it becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/) helps you tell a handy scratchpad from a hidden system.

A spreadsheet beside the CRM is rarely a sign that people are being difficult. More often it is a message about what the system does not yet do. Listen to it, answer it and the sheet tends to retire itself.
