---
hub: impact
record_id: CPS-110
slug: collecting-large-amounts-of-data-nobody-uses-storage-labour-cost
title: Collecting Data Nobody Uses: What Useless Information Costs
description: Data that is captured, stored and maintained but never used to decide anything still costs money in storage, licences, staff time and legal exposure.
lead: Data that is captured, stored and maintained but never used to decide anything still costs money in storage, licences, staff time and legal exposure.
category: Data and Information
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Collecting large amounts of data that nobody uses to make decisions
primary_cost_mechanism: Staff time capturing and maintaining unused fields and reports, storage and licence cost, backup and security overhead for data with no value, slower systems, and legal exposure from holding personal information longer than needed
sources:
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
  - Learn about data governance with Microsoft Purview | https://learn.microsoft.com/en-us/purview/data-governance-overview
related:
  - When Important Data Is Trapped in One Department's App | /impact/data-trapped-in-one-department-application-information-silo-cost/
  - Staff Using AI with Company Data Nobody Governs | /impact/uncontrolled-ai-company-data-financial-risk/
  - Gone but Still Logged In: The Cost of Incomplete Employee Offboarding | /impact/former-employees-still-active-systems-incomplete-offboarding-cost/
summary: Data that is captured, stored and maintained but never used to decide anything still costs money in storage, licences, staff time and legal exposure.
layout: plain
---
## The form with forty fields

A building-services company in the Western Cape asks its technicians to complete a job card with forty-two fields after every call-out. There are fields for weather, vehicle mileage at start and finish, three separate customer contact numbers, an equipment colour, a satisfaction score and a free-text "other observations" box. The cards are scanned, captured into the job system by an administrator and stored. Once a year somebody asks whether anyone reads them. Nobody does. Invoices are produced from five of the fields.

That is a quiet and common pain: a business that collects far more than it uses. Each piece of data feels free at the point of capture, because adding a field costs nothing. The cost arrives later, spread across people, storage and risk, and it rarely lands in one budget line where somebody can see it.

## Why data piles up unused

- **"We might need it one day."** The fear of not having a figure when someone asks leads to capturing everything, just in case.
- **Fields are added but never removed.** Each manager adds a field after an incident. No one is responsible for taking old ones out.
- **Reports outlive their purpose.** A report built for one project continues to be produced monthly long after the project ended. The discovery article on [dashboards that outlive the process they measure](/discovery/dashboards-outlive-the-process-they-measure/) describes the same pattern.
- **Systems collect by default.** Logging, tracking and survey tools gather data automatically, and nobody switches the settings off.
- **Collection is mistaken for control.** A large pile of records feels like good management, even when no decision depends on it.

## What unused data actually costs

### Labour at the point of capture

Every extra field takes time to fill in. Suppose each job card takes four minutes longer than it needs to because of fields no one uses. With 60 call-outs a day, that is four hours of technician time every day. Add the administrator who captures the card, and the cost multiplies. These numbers are illustrative; check your own forms with a stopwatch.

### Labour in maintenance and reporting

Unused data still has to be kept clean, backed up, migrated when a system is replaced, and included in exports. Reports that nobody reads still take someone an hour or two each month to produce. The article on [rebuilding recurring reports by hand](/impact/rebuilding-recurring-reports-by-hand-labour-cost/) shows how that hidden labour builds up.

### Technology cost

Storage, licences priced by volume, backup capacity and slower searches all grow with the amount of data held. For a small business these may be modest in a given month, but they never stop, and they scale with every year of accumulation. Large attachments and old exports are common offenders.

### Noise that hides what matters

When a system holds hundreds of fields, the few that matter are harder to find. Staff learn to ignore the screen, and quality drops. The article on [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/) covers what happens when people stop believing what the system shows them.

### Legal and security exposure

Personal information is the sharpest edge. The Protection of Personal Information Act, which you can read on the [government website](https://www.gov.za/documents/protection-personal-information-act), expects personal information to be collected for a specific, lawful purpose, limited to what is adequate and relevant for that purpose, and not kept longer than needed. A pile of customer or employee details held "just in case" is therefore not neutral. It increases what you must protect, what you may have to disclose if there is a breach, and what you must be able to explain if someone asks why you hold it.

## Sorting data into four groups

You do not need to audit every record. Start with the places where data is captured: forms, job cards, application screens, surveys and recurring reports. For each field or report, ask who uses it and for what decision, then sort it.

| Group | Test | What to do |
| --- | --- | --- |
| Decision data | Someone can name a decision it changes | Keep, protect and make easy to reach |
| Obligation data | Required by law, contract or audit | Keep for the required period, then dispose of it |
| Potential data | Might support a decision if you started looking at it | Choose a decision and try it for one quarter |
| Dead data | No decision, no obligation, no plan | Stop collecting, then archive or delete |

Most businesses find that a surprising share of fields falls into the last group. Removing them is usually an immediate saving, with no technology purchase involved.

## Retention rules turn "keep everything" into a policy

Deciding to delete is easier when there is a written rule. Platforms such as Microsoft 365 let administrators set retention policies that keep content for a defined period and then remove it, as described in the [Microsoft Purview retention documentation](https://learn.microsoft.com/en-us/purview/retention). Even if you do not use those tools, the thinking is the same: for each type of record, write down how long you need it and why, and who is responsible for disposal. A one-page retention schedule is enough to start.

## Turning potential data into used data

Stopping collection is not the only answer. Sometimes the right response is to start using what you already have. If your job cards record time on site, your quotes could be based on actual averages instead of guesses. If your helpdesk logs the category of each call, the top three categories tell you where to fix the underlying cause. The pattern in [poor data as an operations problem](/insights/poor-data-is-an-operations-problem-not-just-a-data-problem/) applies here too: data earns its keep only when it is tied to a process and a person who acts on it.

A useful rule is that every recurring report should have a named reader and a named decision. If you cannot name both, the report is a candidate for retirement. Before you switch it off, tell the supposed readers and wait a month. If no one asks for it, you have your answer.

## Know what you hold first

None of this works if you do not know what data you have. Larger organisations use cataloguing tools, such as those described in the [Microsoft Purview data governance overview](https://learn.microsoft.com/en-us/purview/data-governance-overview), to discover and classify data across systems. A small business can achieve a long way with a shared spreadsheet listing each system, the main kinds of data it holds, who owns it and when it was last reviewed.

## Practical next actions

1. Pick your three most-used capture points, such as a job card, an onboarding form and a customer record, and highlight every field that no one has used in the past year.
2. List every recurring report and ask each recipient what decision it informs. Stop any report that nobody can justify, and note the hours saved.
3. Time how long the main form takes to complete, remove the dead fields, and time it again to put a Rand value on the saving.
4. Write a one-page retention schedule listing each record type, how long you keep it and who deletes it. Pay particular attention to personal information.
5. Choose one potential-data item, such as time on site or fault category, and commit to using it in a monthly decision for one quarter.

## The test to keep applying

Data is an asset only when it changes what someone does. Before adding a field, a report or a tracking setting, ask what decision it will support and who will make it. If the answer is a shrug, leave it out. A business that collects less but uses all of it will almost always know more than one that collects everything and reads none of it.
