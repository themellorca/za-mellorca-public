---
hub: insights
record_id: INS-477
slug: what-should-a-ceo-understand-about-digital-operations
title: What should a CEO understand about digital operations?
description: A CEO need not grasp the technology in detail but must understand how work moves through the systems. Seven things to grasp, and questions that test them.
lead: A chief executive does not need to understand the technology in detail, but does need to understand how work moves through the business's systems. Seven things a CEO should grasp, and the questions that test them.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
sources:
  - Cyber Governance Code of Practice | https://www.gov.uk/government/publications/cyber-governance-code-of-practice
  - Cyber Security Toolkit for Boards | https://www.ncsc.gov.uk/collection/board-toolkit
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
related:
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - Why business systems need ongoing stewardship | /insights/why-business-systems-need-ongoing-stewardship/
  - Seven signs your digital systems are slowing the business down | /insights/seven-signs-your-digital-systems-are-slowing-the-business-down/
summary: A chief executive does not need to understand the technology in detail, but does need to understand how work moves through the business's systems. Seven things a CEO should grasp, and the questions that test them.
layout: plain
---
Most chief executives of small and mid-sized businesses did not come up through technology, and they do not need to. They do not need to know how an API works or which cloud region the accounting system runs in. But they do need to understand digital operations: how work actually moves through the business's systems, where it gets stuck, who is responsible for each part, and what happens when something breaks.

That understanding has become part of running the business rather than a specialist topic. Sales, delivery, finance and customer service now all run through software. A CEO who sees technology only as a line of cost, or as something "IT handles", is effectively leaving the design of the operation to whoever happens to configure the tools.

> A CEO does not need to understand the technology. A CEO does need to understand the operation the technology runs, and who owns each part of it.
>

## 1. Digital operations is the operation

The first thing to grasp is that there is no longer a clear line between "the business" and "the systems". A quote is a record in a CRM. An order is a transaction passed between platforms. A customer complaint is a ticket, an email thread or a WhatsApp message. When the systems are poorly connected, the operation is poorly connected, and staff become the glue.

Microsoft's implementation guidance for its business applications puts this well: it warns against thinking the system defines your processes, and says technology is an enabler that should serve and fit the business's operations. The implication for a CEO is that decisions about systems are decisions about how the business works, and should be made at that level.

## 2. The business has a dependency map, whether or not it is written down

Every important outcome depends on a chain of systems, integrations, data and people. Invoicing might depend on the job management system, an integration to the accounting package, a correct customer record and one person who checks the batch every Friday. A CEO should know the chains behind the handful of outcomes that matter most: winning work, delivering it, billing it and collecting cash.

Without that map, problems are discovered in the wrong order. The business notices that cash is late before it notices the integration that stopped running a fortnight ago.

## 3. Every important system needs an owner in the business

Technology suppliers can run systems, but they cannot own the business outcomes those systems support. Each core system, and each important integration, needs a named owner inside the business who is accountable for whether it serves the operation. Where ownership sits with one person who holds all the knowledge, that is a risk in its own right, which we discuss in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## 4. Data definitions are a management decision

When two reports show different revenue figures, the cause is rarely a software bug. It is usually that nobody decided which system is the authority for a figure, or what the figure means. Deciding what counts as a customer, an active job or a sale is a management decision, not a technical one. The practical approach is covered in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## 5. Digital risk is a leadership responsibility

Cyber incidents, data loss and prolonged outages are business risks with financial, legal and reputational consequences. The UK government's [Cyber Governance Code of Practice](https://www.gov.uk/government/publications/cyber-governance-code-of-practice) was written for boards and directors precisely because digital risk is a governance matter. The National Cyber Security Centre's [toolkit for boards](https://www.ncsc.gov.uk/collection/board-toolkit) states that cyber resilience and risk management must be embedded throughout an organisation, including its people, systems, processes and technologies. Directors in South Africa also owe their companies duties of care and skill, and the principle transfers directly: the CEO need not configure the controls, but should know whether they exist and whether they have been tested.

## 6. Technology value has to be measured, not assumed

Software spend does not create value automatically. A CEO should expect each significant system to have a clear statement of how it creates value and a small number of measures that show whether it does. Microsoft's guidance on measuring business value describes this as moving decisions away from intuition towards data about performance, satisfaction and cost-effectiveness. In practice, that means before-and-after comparisons of time, errors and output, reviewed regularly rather than only at purchase.

## 7. Change capacity is limited

Every system change, new tool or process redesign draws on the same small group of people who also run the business. A CEO who approves five digital initiatives at once usually gets five half-finished ones. Understanding that the organisation can absorb only so much change at a time, and sequencing accordingly, is one of the most valuable contributions a CEO can make.

## An illustrative example

The following is a hypothetical case. The managing director of a Johannesburg facilities company with 120 staff is told by finance that debtor days have risen sharply. The instinct is to push the credit controller. A short review instead finds that jobs closed by technicians on a mobile app are no longer reaching the billing system, because a field was renamed in the app during an update three months earlier. Nobody owned the integration, so nobody noticed. The fix took an afternoon; the delay cost several weeks of cash. The MD did not need to understand the integration. They needed to know it existed, that it fed billing, and who was responsible for it.

## Questions a CEO should be able to answer

A simple test of whether this understanding is in place is whether the CEO, or someone reporting directly to them, can answer the following without a week of investigation:

- Which systems and integrations do our most important outcomes depend on?
- Who in the business owns each of them?
- Which system is the authority for customers, jobs, stock and revenue?
- Where does work wait longest between teams, and why?
- When were our backups last restored, and how long would recovery take?
- Which systems are we paying for, and what do they deliver?
- What digital changes are under way, and do we have the capacity to finish them?

If the honest answer to several of these is "nobody knows", the gap is not technical. It is a gap in management information, which we explore further in [why management has poor visibility into the business](/insights/why-management-has-poor-visibility-into-the-business/).

## How a CEO can build this understanding

The understanding does not come from reports alone. Three habits help:

1. **Follow one transaction end to end.** Once a quarter, pick a recent order or job and trace it from first contact to cash received, noting every system, handoff and wait. It is the quickest way to see how the operation really works, as opposed to how it is described.
2. **Ask for a one-page dependency map.** For the four outcomes that matter most, ask for a single page showing the systems, integrations and owners behind each. Gaps on the page are gaps in the business.
3. **Hold a short monthly operations review.** Thirty minutes on what broke, what is waiting, which changes are in progress and what the main systems are delivering. Over time this turns digital operations from an occasional crisis topic into a routine part of management.

## What this does not mean

None of this requires the CEO to become the business's IT manager. It requires the CEO to treat digital operations the way they would treat finance or sales: something they understand at the level of flows, ownership, risks and results, with specialists responsible for the detail. Leaders who make that shift tend to find that technology conversations become shorter and more useful, because they are about the business rather than the tools.
