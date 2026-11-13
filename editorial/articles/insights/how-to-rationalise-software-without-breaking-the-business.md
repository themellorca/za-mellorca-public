---
hub: insights
record_id: INS-047
slug: how-to-rationalise-software-without-breaking-the-business
title: How to rationalise software without breaking the business
description: Choosing which tools to cut is easy. Retiring them without losing data, breaking integrations or stranding a team is hard. A safe sequence for it.
lead: Deciding which tools to cut is the easy part. Retiring them without losing data, breaking integrations or stranding a team is where rationalisation goes wrong. A practical sequence for executing software retirements safely, from dependency checks and data retention to cut-over and clean-up.
category: Digital Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Digital Operations
sources:
  - Retiring your service | https://www.gov.uk/service-manual/agile-delivery/retiring-your-service
  - Section 14 Retention and restriction of records - POPIA | https://popia.co.za/section-14-retention-and-restriction-of-records/
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - What to do with a software stack nobody fully understands | /insights/what-to-do-with-a-software-stack-nobody-fully-understands/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - How to find the real bottleneck in a digital operation | /insights/how-to-find-the-real-bottleneck-in-a-digital-operation/
summary: Deciding which tools to cut is the easy part. Retiring them without losing data, breaking integrations or stranding a team is where rationalisation goes wrong. A practical sequence for executing software retirements safely, from dependency checks and data retention to cut-over and clean-up.
layout: plain
---
Most software rationalisation efforts begin with energy and a spreadsheet. The business lists its tools, spots duplicates and unused subscriptions, and agrees which ones should go. The savings look obvious. Then the cancellations start, and so do the surprises: a monthly report stops arriving, a supplier portal no longer receives orders, a team cannot find three years of customer correspondence, and someone discovers that the tool everyone agreed was unused was quietly running payroll exports.

The decision about what to cut is covered in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/). This article is about what comes next: carrying out the retirement in a way that removes cost and complexity without removing anything the business still needs.

## Why execution is where rationalisation breaks

A software tool is rarely just a tool. Over time it accumulates four kinds of attachment to the business:

- **Work**: the tasks people do in it, including occasional ones such as year-end or audits;
- **Data**: the records it holds, some of which the business must keep;
- **Connections**: integrations, automations, exports and reports that rely on it;
- **Access**: the accounts, permissions and credentials attached to it.

Cancelling a subscription cuts all four at once. A safe retirement deals with each one deliberately, in the right order.

## A seven-step retirement sequence

### 1. Confirm where the work will go

For each tool being retired, write down where each task it supports will happen afterwards: in another system, through a changed process, or nowhere because it is no longer needed. The GOV.UK Service Manual's guidance on [retiring a service](https://www.gov.uk/service-manual/agile-delivery/retiring-your-service) starts from the same point: consider how the need the service met will be met after it is retired. If you cannot answer this for a task, the tool is not ready to retire.

### 2. Trace every connection

List everything that sends data into or takes data out of the tool. Check integration platforms, scheduled exports, email forwarding rules, linked spreadsheets and reports. Ask the people who receive regular outputs where those outputs come from. The GOV.UK guidance notes that users who connect through an interface need time to update their own software and should be contacted as early as possible. Inside a business, the same applies to any team or supplier whose process depends on the tool. Unowned connections are a common source of breakage; [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/) explains why.

### 3. Decide what data to keep, move or delete

Data needs a decision of its own. Some records must move to the replacement system. Some must be kept, in a readable archive, for legal, tax or contractual reasons. Some should be deleted.

For personal information, South Africa's Protection of Personal Information Act sets the framework. [Section 14](https://popia.co.za/section-14-retention-and-restriction-of-records/) provides that records of personal information must not be retained longer than necessary for the purpose for which they were collected, unless retention is required or authorised by law, reasonably required for a lawful purpose, required by contract or consented to. Once that authority ends, the information must be destroyed, deleted or de-identified as soon as reasonably practicable. A retirement is a natural point to apply this: export what must be kept, and delete what no longer has a reason to exist.

Check the tool's export options early. Some tools limit exports by plan or format, and some delete data shortly after cancellation. [Data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/) describes how this catches businesses out.

### 4. Prepare people

Tell affected staff what is changing, when, where their work will move and whom to ask for help. Provide short guidance for the new way of working. Pay particular attention to occasional users, such as the person who uses a tool once a quarter for a regulatory return; they are the most likely to be missed.

### 5. Run a controlled cut-over

Set a date, move the work and the data, and switch connections to the new destination. Where the risk is significant, run both for a short period and compare outputs. Avoid cut-overs immediately before month-end or a seasonal peak.

### 6. Disable before you delete

Once the work has moved, restrict the old tool to read-only or disable access rather than cancelling immediately. Keep it in that state through at least one full business cycle, including a month-end. Anything that still depends on it will surface. Only then cancel and complete deletion.

### 7. Clean up access and records

The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) advises decommissioning systems and information that are no longer used, and making sure data is removed and associated accounts and credentials are disabled as part of the process. Remove single sign-on connections, revoke integration keys, delete service accounts and update the application list. A retired tool that still has active credentials is a security gap with no owner.

Keep a short retirement record for each tool: the date it was disabled and cancelled, where its work and data went, what was archived and for how long, and who approved each step. When a question comes up a year later, such as an auditor asking for an old signed document or a client asking where their information went, the record answers it in minutes rather than days.

## Sequence the programme, not just each tool

When several tools are being rationalised, order matters as much as method.

| Start with | Why |
| --- | --- |
| Tools with no users and no connections | Lowest risk; builds confidence and frees budget quickly |
| Duplicate tools doing the same job | Clear destination for the work; moderate data effort |
| Tools with active connections | Need integration work and testing; schedule with care |
| Tools holding regulated or long-term records | Need archive planning and retention decisions before anything else |
| Core systems | Treat as a full replacement project, not a rationalisation step |

Pace matters too. Retiring two or three tools a month, each with a proper sequence, is far safer than cancelling ten at once and dealing with the consequences together. The signs that a portfolio has become too large in the first place are covered in [how to know when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/).

## An illustrative example

Consider an illustrative Bloemfontein professional services firm with 40 staff that identified nine tools to retire, including a second file-sharing service, an old e-signature tool and a survey platform.

The first attempt went badly. The e-signature tool was cancelled on its renewal date, and two weeks later the firm discovered that signed engagement letters were stored only in that tool's account, which the supplier had closed. Some had to be recovered from client email.

The firm then adopted the sequence above. For each remaining tool it recorded where the work would go, traced connections, decided on data and set a read-only period. The file-sharing service turned out to feed a client portal through a link nobody had documented; the link was moved before the service was disabled. The survey platform held client personal information from projects years old; the firm kept what its contracts required and deleted the rest. The remaining eight retirements caused no disruption.

## The goal is a smaller, safer estate

Rationalisation is worth doing. Fewer tools mean lower cost, less duplication, simpler access control and clearer data. But the benefit comes only if the business ends up with a smaller set of systems that still does everything it needs. Treat each retirement as a short, careful change rather than a cancellation, and the savings arrive without the surprises.
