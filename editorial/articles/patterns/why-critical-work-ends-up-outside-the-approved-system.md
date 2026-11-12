---
hub: patterns
record_id: PAT-259
slug: why-critical-work-ends-up-outside-the-approved-system
title: Why Critical Workflows Live Outside Approved Systems
description: Spreadsheets and chat groups often carry the work the approved system cannot. Here is why that happens, the risk it creates, and how to bring it back under control.
lead: Spreadsheets and chat groups often carry the work the approved system cannot. Here is why that happens, the risk it creates, and how to bring it back under control.
category: Security, Access & Governance
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Security, Access & Governance
pattern_family: Security, Access & Governance
observable_condition: A critical task such as quoting, approvals or status tracking is run in a personal workbook or chat group while the approved system holds only the formal record.
primary_identification: Unmet process needs: the approved system was configured without a clear view of how the work is done, so people use whatever tool lets them finish the task.
commercial_value_dimensions: Control of critical information, continuity, reporting accuracy, data protection exposure and return on system spend
sources:
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
  - Create cloud discovery policies - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/cloud-discovery-policies
  - Data policies - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention
related:
  - The Cost of Not Knowing Who Can See What | /patterns/the-cost-of-not-being-able-to-say-who-can-open-which-files/
  - When Field Work Happens Outside the System | /patterns/when-field-work-happens-outside-the-system/
  - When Access Requests Depend on Messages and Memory | /patterns/when-system-access-is-granted-through-chat-messages-and-memory/
summary: Spreadsheets and chat groups often carry the work the approved system cannot. Here is why that happens, the risk it creates, and how to bring it back under control.
layout: plain
---
## Observable condition

The business has an approved system for quotes, another for purchase orders and a third for leave. Yet the quote for the biggest client is built in a personal workbook, the purchase approvals travel as a chain of WhatsApp messages, and the leave calendar that managers actually trust is a shared sheet on a team lead's desktop. The approved systems are used for the record. The real work happens elsewhere.

If you ask why, nobody says the approved system is forbidden. They say it is slow, or that it does not do what they need, or that it was easier this way. The workaround started as a convenience for one task. Two years later, a critical process cannot run without it.

An illustrative example: a Port Elizabeth freight forwarder whose official operations system cannot show a shipment's customs status. The clearing team keeps a shared sheet with a row per container. Customers phone and ask for updates, and staff answer from the sheet, not the system.

## Realisation

The realisation is that people do not move work outside approved systems to avoid control. They do it to get the job done. When a tool fails a real task, a person finds another way, and the other way is nearly always a tool they already know. Seen like this, the off-system workflow is not a discipline problem. It is an accurate map of where the approved systems fall short.

That map has a use. Security and compliance teams in larger organisations treat unsanctioned tools as something to discover and assess. [Microsoft's description of cloud app discovery](https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery) explains how organisations analyse traffic to find which cloud apps are actually in use. A small business can do the same thing at a much simpler level by asking staff what they really use, and treating the answers as information, not confessions.

**Realisation prompt:** name one critical task your team completes outside the approved system. What would have to be true of the approved system for them to do it there instead?

## Identification

This is a pattern of unmet process needs. The visible symptom is a spreadsheet, chat group or personal tool carrying work that ought to sit in a controlled system. The common assumption is that staff are resisting change or ignoring policy. The structural cause is that the approved system was chosen or configured without a clear picture of how the work is done, so it covers the formal steps and misses the practical ones.

This differs from the situation in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/), which describes how such a tool grows in importance. Here the question is why the work moved there at all.

## Diagnosis

- **The approved system lacks a step staff need.** A missing status, a field that cannot hold a note, a report that cannot be filtered: each is small, and each pushes people to a tool that can.
- **It is slower for the task at hand.** If three screens and two approvals are needed to record something that takes ten seconds in a sheet, the sheet wins every time.
- **Access is awkward.** Staff in the field, in the warehouse or on the road cannot always reach the official system, but they always have a phone with a messaging app.
- **Nobody asked the people doing the work.** The system was configured to match a procedure document, not the day-to-day reality, so it fits the paperwork and not the job.
- **Changes take too long.** When a request to adjust the approved system waits months, people stop asking and build their own.
- **Rules about data are unclear.** Staff do not know which information may be shared in which tool. Vendors of business platforms describe controls such as [data policies that govern which connectors can be used together](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention), which only help when someone has first decided what the policy should be.

## Commercial impact

The value at stake is control of critical information, continuity when people leave, the accuracy of reporting, and compliance obligations that apply to the data wherever it sits.

The first cost is fragility. A critical workflow that lives in one person's workbook stops when that person is away or leaves. The Impact note on [a business run on a spreadsheet one person understands](/impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/) describes how that continuity risk reaches the finances.

The second is double entry. If the official system must still hold a record, someone rekeys what the sheet already shows. Each re-entry is a chance for the two to disagree, and when they do, management has to decide which to believe.

The third is exposure. Customer details in a personal chat group or an unmanaged sheet are outside any access controls the business thinks it has. If personal information is involved, the business remains responsible for it, whether or not it knows where the copies are.

The fourth is wasted investment. The approved system was paid for, licensed and often configured at cost. If the real work does not pass through it, the business keeps paying for a record-keeping system while the operation runs elsewhere. The Impact note on [software bought without approval](/impact/software-bought-without-approval-shadow-it-cost/) looks at the related cost of tools that arrive outside any plan.

## Common misidentification

The usual response is a policy: all work must be done in the approved system. It is announced, ignored in practice, and the off-system version simply goes quieter. Another response is to ban the tool, which removes the workaround without repairing the gap and leaves people with nothing that works. A third is to treat it as a training problem, as if staff do not know the system, when in many cases they know it well enough to say precisely what is wrong with it.

## Possibility

In a better state, the business knows which critical tasks happen where, and has made a deliberate choice about each: bring it into the approved system, adjust the system so it fits, or formally accept the tool and manage it. The sheet that carries container status becomes either a view of the system's data or an acknowledged tool with a named owner, a backup and clear access.

The change is that the gap becomes visible and owned. The Discovery note on [why application inventories leave out shadow IT](/discovery/why-application-inventories-leave-out-shadow-it/) explains why such tools stay hidden, and the Pattern [why teams keep building manual workarounds](/patterns/why-teams-keep-building-manual-workarounds/) covers the habits that produce them.

## Intervention

Begin by listening. A short, non-judgmental survey of how critical tasks are really done is more useful than an audit that people fear.

## Practical next actions

1. **Ask each team how the work really runs.** For their five most important tasks, ask which tools they use and where the official system falls short. Promise that no one will be penalised for answering.
2. **List the off-system workflows.** Record the tool, the owner, what data it holds and how many people depend on it.
3. **Rank by risk.** Put workflows that hold customer or financial data, or whose loss would stop an operation, at the top of the list.
4. **Decide one of three outcomes for each.** Move it into the approved system, change the system to fit, or accept the tool formally with an owner, a backup and access rules.
5. **Fix the cheapest gaps first.** A missing field or status in the approved system is often a quick change that brings a whole workflow back.
6. **Create a route for requests.** Give staff one place to ask for a system change, and publish how quickly each request will be answered.

## Diagnostic questions

- Which critical tasks in your business depend on a spreadsheet, chat group or personal tool?
- If the person who maintains it left tomorrow, what would stop?
- What does the approved system fail to do that sent people elsewhere?
- Has anyone been asked, without blame, why they work this way?
- How long does it take to get a small change made to an approved system?

## Bottom line

Critical workflows end up outside approved systems because those systems do not fit the work. Listening to why, then choosing for each workflow whether to absorb it, adapt the system or formally accept the tool, brings control back without punishing the people who kept the business running.
