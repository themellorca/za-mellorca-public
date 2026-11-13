---
hub: impact
record_id: CPS-041
slug: manual-customer-progress-updates-status-message-labour-cost
title: "Just checking on my order": The labour cost of manual progress updates
description: Staff who look up and send routine order or service progress updates by hand spend paid hours repeating the same messages, and customers still end up asking.
lead: Staff who look up and send routine order or service progress updates by hand spend paid hours repeating the same messages, and customers still end up asking.
category: Customer Service
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Customer Service
commercial_domain: Business Automation
primary_pain: Staff manually update customers about routine order or service progress
primary_cost_mechanism: Labour cost of repetitive status messages and reactive status enquiries, with interruption and failed-collection costs
sources:
  - Trigger flows when a row is added, modified, or deleted - Power Automate | https://learn.microsoft.com/en-us/power-automate/dataverse/create-update-delete-trigger
  - Utility templates - Meta for Developers | https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/utility-templates/
  - Send documents and emails - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/ui-how-send-documents-email
related:
  - Creating the same documents by hand: The labour cost of repeat paperwork | /impact/same-documents-created-by-hand-repeat-paperwork-cost/
  - Predictable appointments still carry a cost when staff arrange every slot | /impact/manual-appointment-scheduling-administration-cost/
  - Rebuilding the same report every month: The labour cost of manual reporting | /impact/rebuilding-recurring-reports-by-hand-labour-cost/
  - Customers who cannot see where their request stands keep phoning to ask | /impact/customers-do-not-know-request-status-inbound-follow-up-and-lost-trust-cost/
summary: Staff who look up and send routine order or service progress updates by hand spend paid hours repeating the same messages, and customers still end up asking.
layout: plain
---
## The tolerated pain: people as the notification system

A customer places an order, books a repair or hands over a vehicle for a service. Over the next few days the work moves through predictable stages: received, scheduled, in progress, ready, dispatched, delivered. Each stage is usually recorded somewhere, whether in a job system, an accounting package, a courier portal or a whiteboard.

The customer, however, hears about it only when a person decides to tell them. Someone in the office checks the job, opens WhatsApp or email, types a message and sends it. When the office is busy, nobody sends anything, and the customer phones to ask. Then someone stops what they are doing, finds the job, reads the status back, and promises to call when it changes.

This article is about routine progress messages for normal orders and jobs. It is different from managers chasing their own staff for updates, which is covered in [the management cost of chasing status updates](/impact/managers-chasing-status-updates-visibility-cost/), and from the wider pattern of [customers having to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/). Here the information exists; the cost lies in relaying it by hand.

## Why businesses tolerate it

- **It feels like good service.** A personal message from a named person seems warmer than an automated one.
- **Each message is short.** A two-line update takes a minute or two, so the total is never added up.
- **Status is not reliably recorded.** If the job system is not updated at each stage, there is nothing trustworthy to automate from, so a person has to go and look.
- **Nobody owns the customer's view.** Operations owns the work and sales owns the relationship; the update falls between them.

## Operational consequence

Manual progress communication produces two kinds of work. The first is proactive: someone sends updates at each stage. The second is reactive: when updates are late or missing, customers ask, and each enquiry interrupts someone who must investigate before they can answer. In most businesses the reactive work is larger, because it involves searching rather than simply sending.

The symptoms are easy to spot:

- A high share of inbound calls and messages are some version of "where is it?" or "is it ready?".
- Updates are inconsistent: some customers hear at every stage, others hear nothing until collection.
- Technicians, drivers or workshop staff are interrupted to confirm progress.
- Customers turn up for collection before the job is finished, or not at all when it is.
- Messages go from personal phones, so there is no shared record of what each customer was told.

The last point is easy to miss. When updates go from someone's own WhatsApp, the business cannot see what was promised, and the next person to deal with the customer starts blind. That is closely linked to the pattern described in [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/).

## How the pain becomes money

- **Labour on proactive updates:** minutes per message multiplied by messages per job and jobs per month.
- **Labour on reactive enquiries:** minutes per status enquiry, including the time to find the answer, multiplied by enquiry volume.
- **Interruption cost:** productive staff pulled away from billable or production work to answer status questions.
- **Failed collection or delivery cost:** wasted trips, idle bays or storage when customers were not told the job was ready.
- **Retention risk:** customers who felt ignored may not return. Treat this qualitatively unless you have evidence from complaints or lost accounts.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African repair and servicing business. They are not benchmarks. Replace them with your own counts from a two-week sample.

| Activity (illustrative) | Assumption | Minutes per month |
| --- | --- | --- |
| Proactive manual updates | 500 jobs × 2 updates × 3 minutes | 3,000 |
| Reactive status enquiries | 175 enquiries (35% of jobs) × 7 minutes | 1,225 |
| Interruptions to workshop staff | 60 interruptions × 5 minutes | 300 |
| **Total** |  | **4,525** |

4,525 minutes is about 75.4 hours a month. At an illustrative loaded cost of R230 an hour, that is roughly R17,350 a month, or about R208,200 a year, spent relaying information the business already holds. Workshop interruptions may cost more than this if those staff generate billable hours, so price them at the value of the work displaced where you can show it.

As with any labour model, released time is only a saving if it is used for something valuable or avoids hiring.

## Secondary consequences

Inconsistent updates make service quality depend on who is on duty. Customers compare experiences, and a business that sometimes updates and sometimes does not can seem less reliable than one that never does. There is also a data question: progress messages often include names, addresses, vehicle registrations or account details, and sending them from personal devices spreads personal information beyond the business's control.

## When this becomes commercially urgent

- "Where is my order?" is among the most common reasons customers contact you.
- Front-office staff cannot keep up with calls during peak periods.
- Production or field staff are routinely interrupted for status checks.
- Complaints mention not being kept informed, even when the work itself was good.
- Volumes are growing and the answer being discussed is another administrator.

## What better looks like

The better state has two parts. First, the status of each job is recorded in one place at the moment it changes, by the person doing the work, using a short fixed list of stages. Second, a change of stage triggers a standard message to the customer automatically, with a person stepping in only for delays and exceptions.

The tools for the second part are widely available. Microsoft's [Power Automate documentation](https://learn.microsoft.com/en-us/power-automate/dataverse/create-update-delete-trigger), for example, describes a trigger that runs a flow when a row in a table is added or changed, and allows the flow to be limited to changes in specific columns, such as a status field. The same documentation warns that several updates to one row can trigger several runs, even when the values are unchanged, which is exactly the kind of detail that produces duplicate customer messages if nobody tests it.

On the message side, Meta describes [WhatsApp utility templates](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/utility-templates/) as messages a business sends in response to a customer's action, such as an order status update, and [Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-how-send-documents-email) can email documents such as orders and invoices directly from the app. Meta's WhatsApp Business documentation describes utility message templates as messages typically sent in response to a user action or request, such as an order confirmation or update, and says that a utility template containing marketing material will be re-categorised as marketing.

Status messages should therefore stay strictly about the customer's job. Business systems can carry documents too: Microsoft's Business Central documentation describes emailing documents such as orders as PDF attachments with reusable email text, and retrying messages queued in the background when a send fails.

Proactive updates also reduce the reactive load, a point developed in [why proactive communication can remove entire support workloads](/patterns/why-proactive-communication-can-remove-entire-support-workloads/).

### Trade-offs to weigh

- **Automation exposes bad status data.** If stages are not updated promptly, automatic messages will tell customers the wrong thing.
- **Too many messages annoy.** Send only at the stages customers care about.
- **Delays still need a person.** Automated "on track" messages for a job that is stuck damage trust faster than silence.
- **Channel costs are real.** Messaging platforms, SMS and integration work carry recurring charges that belong in the comparison.

## Practical diagnostic

1. For two weeks, tally every inbound contact that is mainly a status question, and time how long each takes to answer.
2. Count proactive updates sent, by whom and through which channel.
3. List the stages your jobs actually pass through, and check whether each one is recorded in a system when it happens.
4. Pick the two stages customers ask about most, usually "ready" and "dispatched", and test automating only those.
5. Measure status enquiries again after a month and compare.

## The bottom line

When people relay routine progress by hand, the business pays twice: once for the messages that are sent, and again for the enquiries caused by the ones that are not. Recording status at source and letting a stage change send the standard message turns a recurring labour cost into a configuration, and leaves staff free for the delays and problems where a personal message really matters.
