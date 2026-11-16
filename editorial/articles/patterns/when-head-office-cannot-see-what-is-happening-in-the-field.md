---
hub: patterns
record_id: PAT-455
slug: when-head-office-cannot-see-what-is-happening-in-the-field
title: When Head Office Cannot See What Is Happening in the Field
description: Teams on sites and on the road know what is happening, but head office learns hours or days later. Why field visibility breaks down and how to restore it.
lead: Teams on sites and on the road know what is happening, but head office learns hours or days later. Why field visibility breaks down and how to restore it.
category: Field Operations & Distributed Work
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Field Operations & Distributed Work
pattern_family: Field Operations & Distributed Work
observable_condition: Managers at head office cannot tell which jobs are in progress, finished, delayed or blocked in the field without phoning someone, and learn about problems hours or days after they happen.
primary_identification: Delayed field capture: information about field work is recorded after the fact, on paper, in calls or in chat groups, so head office manages from a picture that is always behind reality.
commercial_value_dimensions: Scheduling efficiency, billing speed and cash flow, customer experience, safety and management control
sources:
  - https://learn.microsoft.com/en-us/dynamics365/field-service/overview | https://learn.microsoft.com/en-us/dynamics365/field-service/overview
  - https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/ | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
summary: Teams on sites and on the road know what is happening, but head office learns hours or days later. Why field visibility breaks down and how to restore it.
layout: plain
---
## Observable condition

At nine in the morning, head office knows which jobs were planned for the day. By eleven, it is guessing. A technician is still at the first site because a part was missing. Another finished early and is waiting for direction. A driver has a failed delivery. A site supervisor has a safety concern. All of this is known to someone in the field. Head office learns about it when someone phones, when a message appears in a busy chat group, or when the paperwork arrives at the end of the day or the end of the week.

Managers plan tomorrow from yesterday's picture. Customers who phone for an update are told that someone will find out. Invoices wait for job cards that are still in a vehicle.

An illustrative example: a KwaZulu-Natal security installation company with twenty-five technicians. Dispatch uses a whiteboard and a chat group. Completed jobs are confirmed by photo in the chat, and job cards are handed in on Fridays. The accounts team invoices from those cards, so most work is billed a week or more after it is done.

## Realisation

The realisation is that field visibility is not a reporting problem. Reports cannot show what was never captured. The issue is when and how information is captured. If field staff record their work after the fact, on paper or in conversation, head office will always be behind, no matter how good its reports are.

Field service platforms are built on the opposite assumption: capture at the point of work. [Microsoft's overview of Dynamics 365 Field Service](https://learn.microsoft.com/en-us/dynamics365/field-service/overview) describes technicians using a mobile app to view assigned work orders, record photos, videos and customer signatures, and mark work complete, with the dispatcher seeing the change on the schedule board. The tool is less important than the principle that status updates as the work happens.

**Realisation prompt:** right now, without phoning anyone, how many of today's field jobs can you confirm as finished, in progress or blocked?

## Identification

This is a pattern of delayed field capture. The visible symptom is a head office that manages by phone and learns about field problems late. The common assumption is that field staff need to communicate better or that managers need more reports. The structural cause is that the work design places information capture after the work, through channels that do not update any shared record.

The detail of how this shows up is covered in related Patterns: [when field work happens outside the system](/patterns/when-field-work-happens-outside-the-system/), [the job card that is typed up three days later](/patterns/the-job-card-that-is-typed-up-three-days-later/) and [why field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/). This article looks at the management consequence: head office cannot steer what it cannot see.

## Diagnosis

- **Status is reported by call or chat.** Updates depend on someone choosing to send them, and they do not update any record.
- **Evidence lives on personal phones.** Photos, signatures and notes are taken but stay on devices or in chat groups, not attached to the job.
- **Paperwork is batched.** Job cards and timesheets are completed and handed in later, sometimes by someone other than the person who did the work.
- **The office has no live job list.** The schedule exists at the start of the day and is not updated as things change.
- **Connectivity is assumed to be a blocker.** Poor signal on some sites is used as a reason not to capture anything in the field, rather than designing for offline capture.

## Commercial impact

The commercial value at stake is scheduling efficiency, billing speed, customer experience and management control.

When head office cannot see the field, idle capacity goes unused and delays are found too late to rearrange the day. Billing waits for paperwork, so cash arrives later than it should, and missing job details lead to disputes. Customers who ask for updates get vague answers, which damages confidence even when the work itself is good.

There is also a data protection angle. Photos of clients' premises, signatures and names held on personal phones and in chat groups are personal information held outside the business's control. [Section 19 of POPIA](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) requires a responsible party to secure personal information with appropriate technical and organisational measures and to identify foreseeable risks. Evidence scattered across personal devices is difficult to secure and difficult to retrieve when a client or an auditor asks for it.

Finally, safety and quality issues reported informally can be lost. A concern raised in a chat group at the end of a long day may never reach the person who needs to act on it.

## Common misidentification

The common responses are to ask field staff to phone in more often, to add a daily report, or to install vehicle tracking. More calls add interruption on both sides. A daily report is still after the fact. Tracking shows where a vehicle is, not what work has been done or what problem has been found.

## Possibility

In a better state, each field job exists as a record that the field team updates as they work: arrived, started, blocked, complete, with photos and signatures attached. Head office sees a live view of the day and can reassign work as conditions change. Completed jobs flow to invoicing on the day they are finished. Evidence is stored with the job, not on a personal phone. Where connectivity is poor, the app captures offline and synchronises later, so the record is complete.

## Intervention

Start by deciding the handful of events head office must know about the moment they happen, and make capturing those events quicker for field staff than phoning.

## Practical next actions

1. **List the critical field events.** Typically: arrived, started, blocked with a reason, completed, and customer sign-off.
2. **Measure the current delay.** For a sample of jobs, compare when each event happened with when head office learned of it.
3. **Give field staff one place to record events.** A simple mobile form or app that updates a shared job list, not a chat group.
4. **Attach evidence to the job.** Require photos and signatures to be stored with the job record, and stop using personal galleries and chat groups for client evidence.
5. **Design for poor signal.** Choose a tool that captures offline and synchronises when connected.
6. **Link completion to invoicing.** Let a completed, signed-off job trigger billing the same day.

## Diagnostic questions

- How long after a field job finishes does head office know it is complete?
- Where are photos and customer signatures from field work stored today?
- How does a technician report a blocked job, and who is told?
- How many days pass between job completion and invoice?
- Could you answer a customer's status question without phoning the field?

## Article summary

When head office cannot see the field, it plans, bills and answers customers from information that is already out of date. The fix is not more reporting but earlier capture: field teams recording key events and evidence as they work, into one shared record. That shortens billing, uses capacity better and keeps client information under control. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where field information gets delayed and how Mellorca may be able to help.
