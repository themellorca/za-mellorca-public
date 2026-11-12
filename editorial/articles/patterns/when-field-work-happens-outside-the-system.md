---
hub: patterns
record_id: PAT-452
slug: when-field-work-happens-outside-the-system
title: When Field Work Happens Outside the System
description: Field teams often coordinate in chat groups and keep photos on personal phones while the job system holds a tidied-up version typed in later. Here is what that costs and how to bring work back into view.
lead: Field teams often coordinate in chat groups and keep photos on personal phones while the job system holds a tidied-up version typed in later. Here is what that costs and how to bring work back into view.
category: Field Operations & Distributed Work
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Field Operations & Distributed Work
pattern_family: Field Operations & Distributed Work
observable_condition: Field teams allocate jobs, share photos, record customer approvals and report parts through chat groups, personal phones and paper, and office staff later type a summary into the job system.
primary_identification: Operational work escaping the system of record because the official system does not fit how and where field work is done.
commercial_value_dimensions: Billing speed, service margin, operational visibility and data protection risk
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - Discover and manage Shadow IT - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why Decision-Makers Keep Asking for Status Updates | /patterns/why-decision-makers-keep-asking-for-status-updates/
  - Why Teams Keep Building Manual Workarounds | /patterns/why-teams-keep-building-manual-workarounds/
  - Why Buying AI Does Not Automatically Create Business Value | /patterns/why-buying-ai-does-not-automatically-create-business-value/
summary: Field teams often coordinate in chat groups and keep photos on personal phones while the job system holds a tidied-up version typed in later. Here is what that costs and how to bring work back into view.
layout: plain
---
## Observable condition

The business has a job management system. On paper, every job is created, assigned, completed and invoiced there. In practice, the real work happens somewhere else. Jobs are allocated in a WhatsApp group. Technicians send photos of the finished installation to their supervisor's phone. Changes agreed with the customer on site are written on the back of a job card. Parts used are remembered and reported on Friday. Someone in the office then types a tidied-up version of events into the system, sometimes days later.

Ask the system what happened on a job and you get the office's reconstruction. Ask the people who did the work and you get a different, more detailed and more accurate answer, spread across chats, phones and paper.

An illustrative example: a Free State business that installs and maintains solar and backup power systems employs about twenty-five field technicians. Its job system was chosen carefully and is used well in the office. In the field, the team coordinates through group chats, and the supervisor holds most of the site photos and customer approvals on a personal phone.

## Realisation

When work happens outside the system, the system stops being a record of the operation and becomes a record of what someone later had time to type. Everything that depends on it, from invoicing and warranty claims to scheduling and management reporting, is working from a partial, delayed copy.

This rarely starts as a decision. Field teams adopt chat groups and phone cameras because they are fast, familiar and always in their pocket, while the official system is slow to use on site, needs signal, or does not have a field for what they need to capture. The workaround is rational for each person. Collectively, it moves the operation out of view.

The UK's National Cyber Security Centre describes the broader version of this, often called shadow IT, as unknown assets used for business purposes outside corporate policy, and is clear that it usually signals unmet needs rather than misconduct: sanctioned tools lack functionality, or official processes are too slow. Its advice is to treat it as a symptom of process gaps.

**Realisation prompt:** if the job system were the only source available, could you prove what was done on site last Tuesday, by whom, with which parts and with what customer approval?

## Identification

This is a pattern of operational work escaping the system of record in distributed teams. The visible symptom is information scattered across chats, phones and paper, with the office retyping it. The common assumption is that field staff are not disciplined about using the system. The structural cause is that the official system does not fit how and where field work is done, so the real process has moved to the tools that do.

Related published Patterns look at other directions of the same gap. [Why field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/) deals with information that should flow out to the field. [When business knowledge lives in inbox history](/patterns/when-business-knowledge-lives-in-inbox-history/) covers knowledge trapped in email. This Pattern is about the work itself being performed and recorded outside the system that is meant to hold it.

## Diagnosis

- **The system was designed for the office.** Screens assume a desk, a keyboard and a stable connection. On a roof or in a plant room, a chat message and a photo are quicker.
- **Key evidence has no home.** Photos, signatures, readings and customer approvals are not captured against the job, so they live wherever they were taken.
- **Coordination happens in conversation.** Allocation, rescheduling and handover between technicians happen in group chats, where decisions are visible to those present and invisible to the record.
- **Office staff act as translators.** Someone gathers what happened and keys it in, which introduces delay, omissions and interpretation. The published Pattern [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/) describes this role.
- **Business data sits on personal devices.** Customer addresses, site photos and contact details accumulate on phones the business does not manage.

That last point carries a compliance dimension in South Africa. Section 19 of the Protection of Personal Information Act requires a responsible party to take appropriate, reasonable technical and organisational measures to secure personal information against loss and unlawful access, including identifying foreseeable risks. Customer information spread across unmanaged personal phones and chat groups makes that difficult to show.

## Commercial impact

The commercial value at stake is billing speed, service margin, visibility and risk.

Invoicing waits for the office to reconstruct the job, and anything forgotten, such as an extra hour or a part fitted, is never billed. Warranty and dispute claims are weaker when the evidence is on someone's phone, or gone when that person leaves. Scheduling decisions are made on stale information because the system does not know which jobs ran over or which technician is free. Management reports show a cleaner operation than the real one, so problems such as repeat visits are hidden.

The dependency on a few individuals grows too. The supervisor whose phone holds the photos and the chat history becomes, in effect, the system.

## Common misidentification

The common response is an instruction: "everything must go into the system". Without changing the system, that adds work for field staff and usually produces late, minimal entries, while the real coordination continues in the chat group.

The opposite response is to accept chat groups as the system. They are excellent for conversation but poor at structure: they cannot tell you which jobs are open, what was billed or where a photo belongs.

## Possibility

In a better state, the official system is the easiest place to do field work. Technicians open their jobs on a phone, capture photos, readings, parts and customer sign-off directly against the job, even when offline, and the record syncs when signal returns. Allocation and changes happen in the system, with notifications that reach people where they are. The office reviews and invoices rather than retypes. Chat remains for conversation, not for records.

Discovering where work currently happens is a useful first step. Microsoft's guidance on discovering shadow IT, for example, recommends looking at unsanctioned tools by category, because they are often being used for legitimate work that the sanctioned tools do not cover. The same thinking applies to a field team's chat groups: they show exactly what the official system is missing.

## Intervention

1. **Find the shadow process.** With the team's cooperation, list where work actually happens: which chat groups, which paper forms, which personal apps, and what each is used for.
2. **Identify what the system lacks.** For each workaround, note the need it meets: speed, offline use, photos, signatures, quick allocation.
3. **Design field-first capture.** Configure or choose a mobile tool that captures that information against the job at the point of work. The Insight [how to implement a new business system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/) offers guidance on rollout.
4. **Move evidence onto managed storage.** Make sure photos, signatures and customer details are stored against the job in business systems, not on personal devices.
5. **Connect completion to invoicing.** Let a completed job record trigger billing preparation so nothing waits for reconstruction.
6. **Retire the workaround deliberately.** Once the system meets the need, agree with the team which chat group or form stops being used for records.

## Diagnostic questions

- Which chat groups, paper forms or personal apps does your field team rely on to do their work?
- How long after a job is completed does the full record appear in your system?
- Where are site photos and customer approvals stored today?
- How much work was done but not billed last quarter because it was not recorded?
- If your field supervisor left tomorrow, what job history would leave with their phone?

## Bottom line

When work happens outside the system, the business is managing a reconstruction rather than the operation. The cause is usually a system that does not fit field conditions, not a lack of discipline. Making the official system the fastest place to work brings billing, evidence, scheduling and reporting back into line with reality, and reduces the risk of customer data and job history living on personal devices.
