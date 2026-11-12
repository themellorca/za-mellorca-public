---
hub: discovery
record_id: DISC-267
slug: sensitive-fields-copied-into-uncontrolled-analyst-files
title: Why sensitive customer and staff data ends up in analysts' spreadsheets
description: ID numbers, salaries and bank details often leave governed systems inside analyst exports. Why it happens, what it risks under POPIA, and how to give analysts what they need without the copies.
lead: ID numbers, salaries and bank details often leave governed systems inside analyst exports. Why it happens, what it risks under POPIA, and how to give analysts what they need without the copies.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Head of data or BI lead, with the information officer
budget_owner: CFO or COO
sources:
  - Export Data From a Power BI Visualization - Power BI | https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-export-data
  - Row-level security (RLS) with Power BI - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security
  - Sensitivity Labels in Power BI - Microsoft Purview Information Protection | https://learn.microsoft.com/en-us/power-bi/enterprise/service-security-sensitivity-label-overview
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
  - Why the data pipelines behind your dashboards need an operational owner | /discovery/data-pipelines-have-no-clear-operational-owner/
  - When a drop in the numbers is late data, not a business problem | /discovery/reports-cannot-tell-data-delay-from-business-decline/
summary: ID numbers, salaries and bank details often leave governed systems inside analyst exports. Why it happens, what it risks under POPIA, and how to give analysts what they need without the copies.
layout: plain
---
A finance analyst needs to explain why debtor days have crept up. The quickest route is to export the customer ledger to Excel, join it to a sales extract and work through it at her desk. The file contains customer names, ID numbers, contact details and credit limits. It is saved to her laptop, copied to a shared folder for a colleague, attached to an email to the financial director and, three months later, still sitting in all three places. Nobody decided that this data should live there. It simply followed the analysis.

This article looks at that operating condition: sensitive fields copied out of controlled systems into analyst files that nobody governs. It is one of the most common ways personal information escapes the controls a business has paid for, and it usually becomes visible only when something else changes, such as a new data platform, a privacy review or a lost laptop.

## The problem in plain language

Most businesses protect their core systems reasonably well. The ERP, payroll and CRM have logins, roles and audit trails. Reporting tools often have row-level security, so a regional manager sees only her region. But analysis rarely stays inside those tools. When a question needs data the dashboard does not show, or a join the report cannot do, the analyst exports. Once the data is in a spreadsheet or CSV file, it carries none of the original system's access rules, and it often carries more columns than the analysis needs.

The symptom is easy to recognise: personal or commercially sensitive fields, such as South African ID numbers, salaries, bank account details, medical aid information or customer pricing, turning up in files on laptops, shared drives and email threads, with no owner and no expiry.

## What the buyer is actually trying to solve

Data and finance leads search for ways to stop sensitive data leaving reporting systems, control Excel exports, or apply POPIA to analytics. Information officers want to know where personal information actually lives. Analysts, for their part, are not trying to break rules. They need answers quickly and the controlled tools do not give them a way to get those answers. The practical goal is to let analysts do real analysis on the data they need, with the identifying fields they do not need left behind, and with any copies that must exist carrying protection with them.

## Evidence and system mechanism

### Export is a designed feature, with designed limits

Reporting platforms deliberately let users take data out. Microsoft's documentation on [exporting data from Power BI visuals](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-export-data) describes two options: summarised data, which contains only what the visual shows, and underlying data, which can include other rows and columns from the model. It notes that report designers can allow summarised export, allow both, or allow none, and that administrators can disable export. It also states that exports to .xlsx can inherit a sensitivity label, while exports to .csv do not support sensitivity labels. The control exists, but someone has to set it, and many reports are published with the defaults.

### Security rules do not always apply to the people who export most

Row-level security is often assumed to protect everything. Microsoft's [row-level security documentation](https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security) states that it restricts data only for users with Viewer permissions, and does not apply to workspace Admin, Member or Contributor roles. The analysts and report builders who are most likely to export are frequently in exactly those roles. The same page notes that row-level security does not limit columns: a user who can see a row can see all its columns unless object-level security is used.

### Labels can travel with the data

Classification can follow data out of the reporting tool. The documentation on [sensitivity labels in Power BI](https://learn.microsoft.com/en-us/power-bi/enterprise/service-security-sensitivity-label-overview) explains that when labelled data is exported to Excel, PowerPoint or PDF, the label is applied to the file and protected according to the label's encryption settings, so only authorised users can open it. It also states plainly that labels and protection are not applied when data is exported to .csv or through other unsupported paths. Labelling is therefore useful but incomplete; it must be combined with limits on what can be exported.

### The legal duty covers the copies too

Section 19 of the Protection of Personal Information Act requires a responsible party to secure the integrity and confidentiality of personal information in its possession or under its control through appropriate, reasonable technical and organisational measures, including identifying foreseeable risks and verifying that safeguards work (see the [text of section 19](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/)). An analyst's spreadsheet is still in the business's possession. A control that protects the system but not its exports leaves a foreseeable risk unaddressed.

## Problem owner and why-now trigger

The head of data or BI usually owns the fix, because it sits in how reports and models are built and shared. The information officer, often the CEO or a delegated deputy information officer under POPIA, owns the accountability. The CFO or COO typically funds the work.

The usual trigger is a data-platform change. Moving to a new reporting tool, data warehouse or cloud file store forces someone to ask what data is where, and the answer exposes years of exports. Other triggers include a POPIA readiness review, a security incident involving a laptop or mailbox, a client or funder due-diligence questionnaire, and offboarding an analyst whose files nobody can account for; the wider access issue is covered in [the financial risk of uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).

## Economic consequence

The direct cost appears when something goes wrong: a security compromise involving personal information must be assessed and, where required, notified, and the investigation is much harder when nobody knows how many copies exist. The indirect costs are steadier. Every uncontrolled extract becomes a parallel version of the truth, so figures drift. Analysts rebuild the same extracts repeatedly, which is the pattern described in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/). And due-diligence or client security questionnaires take longer to answer honestly.

## Root cause

- **Models carry more than reports need.** Identifying fields are loaded into reporting models because they were in the source table, not because any report uses them.
- **Export defaults are left on.** Underlying-data export is allowed on reports where nobody needs it.
- **Builders are the exporters.** Analysts hold edit roles that bypass row-level security.
- **No safe place to analyse.** There is no governed workspace where an analyst can join and explore data, so the laptop becomes the workspace.
- **No retention rule for extracts.** Copies are made for a question and never deleted when the question is answered.

## Practical intervention

1. **Find the sensitive fields.** List which systems hold ID numbers, bank details, salaries, health information and customer-specific pricing, and which reporting models load them.
2. **Remove what analysis does not need.** Drop or mask identifying columns at the model layer. Most analysis needs a customer key, not an ID number.
3. **Set export deliberately.** Allow summarised export only, or none, on reports built over sensitive models. Restrict CSV export where labels cannot follow.
4. **Label models and reports.** Apply sensitivity labels so that permitted exports carry protection, and require labels on new content.
5. **Give analysts a governed workspace.** Provide a controlled environment where they can join and explore data without taking it out, with access separated by role.
6. **Set a rule for extracts.** Where an extract is genuinely needed, record why, where it lives and when it will be deleted, and review the list quarterly.

### Trade-offs

Tighter export controls will slow some analysts down at first, and they will push back if no alternative exists. Introduce the governed workspace before closing the exits. Masking fields can break existing reports that relied on them; check dependencies before removing columns.

### An illustrative example

*Illustrative:* a Gauteng financial services broker with about 120 staff discovered during a reporting-platform migration that its client model included ID numbers and bank details, and that underlying-data export was enabled on every report. The BI lead removed both fields from the model, replaced them with a client key, set export to summarised only on client reports, applied a confidential label, and moved two analysts into a shared, access-controlled workspace. A later shared-drive sweep found far fewer new client extracts.

## Diagnostic questions

- Which reporting models contain ID numbers, bank details or salaries, and which reports actually use those fields?
- On how many reports is underlying-data export enabled?
- Do your analysts hold roles that bypass row-level security?
- Could you list where client or employee extracts currently sit?
- Is there a rule for how long an analysis extract may be kept?

## What good looks like

Sensitive fields stay in the systems that need them. Reporting models carry keys rather than identifiers. Export settings are set deliberately per report, labels follow permitted exports, and analysts have a governed place to work, so personal files are the exception, recorded and time-limited, rather than the default.

## Where Mellorca fits

Mellorca maps where sensitive data flows from source systems into reports and files through a [digital systems audit](/services/digital-systems-audit/), redesigns reporting models and access as part of [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work, and keeps export settings, labels and extract reviews running through [managed digital operations](/services/managed-digital-operations/).

## Method note

Product references illustrate common mechanisms and are not recommendations; behaviour and limits were current when checked and may change. This article is not legal advice on POPIA obligations. The example is illustrative and does not describe a specific client.
