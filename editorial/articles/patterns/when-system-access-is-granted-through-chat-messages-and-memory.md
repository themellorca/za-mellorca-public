---
hub: patterns
record_id: PAT-355
slug: when-system-access-is-granted-through-chat-messages-and-memory
title: When Access Requests Depend on Messages and Memory
description: If access to systems is requested by chat and granted from memory, nobody can show who approved what. Here is the cost and how to give requests a defined route.
lead: If access to systems is requested by chat and granted from memory, nobody can show who approved what. Here is the cost and how to give requests a defined route.
category: Security, Access & Risk
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Security, Access & Risk
pattern_family: Security, Access & Risk
observable_condition: Requests for system access arrive by chat, phone or in passing, are granted from memory, and leave no record of who asked or who approved.
primary_identification: Informal access administration: no defined request route, role definitions, named approvers or HR triggers govern who is given access.
commercial_value_dimensions: Onboarding speed, security and audit readiness, staff productivity and reduced exposure to fraud and data-protection incidents
sources:
  - What is entitlement management? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview
  - What is Identity and Access Management (IAM)? - IBM | https://www.ibm.com/think/topics/identity-access-management
  - What Is Shadow IT? - IBM | https://www.ibm.com/think/topics/shadow-it
related:
  - When Infrastructure Problems First Appear as Customer Complaints | /patterns/when-infrastructure-faults-are-first-reported-by-customers-not-by-monitoring/
  - Why Security Problems Often Begin With Operational Convenience | /patterns/why-security-problems-often-begin-with-operational-convenience/
  - The Cost of Processes That Move Through Email | /patterns/the-cost-of-running-business-processes-through-email-threads/
summary: If access to systems is requested by chat and granted from memory, nobody can show who approved what. Here is the cost and how to give requests a defined route.
layout: plain
---
## Observable condition

A new accountant starts on Monday. By Tuesday she still cannot open the shared finance folder, and the payroll package says she has no permissions. Her manager sends a WhatsApp message to the IT contact, who replies "will sort it". On Thursday someone remembers that the bank portal also needs a token. The access she needs gets assembled over a week, request by request, from whatever each person remembers.

The same thing happens in the other direction. A marketing coordinator moves to sales and keeps every login she ever had. A contractor finishes a project, but nobody tells the people who granted his access. Requests for access come by message, by phone and in the corridor, and the answer depends on who was asked and what they recalled.

An illustrative example: a Pretoria property-management company has about forty staff, eight cloud applications and a part-time IT supplier. Access requests arrive on a group chat. The supplier handles them in the order he sees them, with no record of who asked, who approved or what was granted.

## Realisation

The realisation is that access is being managed as a conversation instead of a controlled process. Each request is a small decision with consequences: it determines who can see payroll, move money or change customer records. Yet it is made informally, without a defined approver and without a record.

Microsoft's documentation on entitlement management describes the problem in structured terms. Organisations need to manage identity and access lifecycle at scale, including who can request access, who approves it, how long it lasts and when it is reviewed. The point of that structure is that access decisions stop depending on who happens to remember what.

**Realisation prompt:** choose one employee. Can you produce, without asking anyone, a list of every system they can use, who approved each, and when it was last checked?

## Identification

This is a pattern of informal access administration. The visible symptoms are slow starts for new staff, requests that get lost and former staff whose accounts still work. The common assumption is that IT is slow or that staff should plan ahead. The structural cause is that there is no defined route for requesting, approving, granting and removing access, so everything depends on messages and memory.

Several published Patterns deal with the consequences. [Why access, equipment and accounts are still set up by hand](/patterns/why-access-equipment-and-accounts-are-still-set-up-by-hand/) covers the effort side, [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) covers what remains afterwards, and [when everyone has more system access than their job needs](/patterns/when-everyone-has-more-system-access-than-their-job-needs/) covers the build-up of excess permissions. This Pattern focuses on the request step itself.

## Diagnosis

- **Requests arrive through many channels.** Email, chat, phone and conversation all count, so there is no single place to see what is outstanding.
- **No standard request.** Without a form or template, requesters leave out details such as which system, what level of access and for how long.
- **Approval is implied.** The person doing the setup assumes the manager agreed, and the manager assumes IT checked. Nobody is on record as having decided.
- **Role access is not defined.** Nobody has written down what an accounts clerk, a branch manager or a dispatcher normally needs, so every request is built from scratch.
- **The record is the chat history.** What was granted is reconstructed by scrolling back, and details are lost when phones are replaced or groups are cleaned up.
- **Removal has no trigger.** Requests start the process, but nothing in HR or line management reliably triggers the reverse.

## Commercial impact

The commercial value at stake is onboarding speed, security and audit readiness, staff productivity and the avoidance of fraud and data-protection incidents.

The first cost is lost productive time. A new employee waiting several days for working access is paid but not producing, and the manager is distracted chasing. For a role earning a typical monthly salary in Rand, each unproductive day has a plain cost, and the delay repeats with every hire and every internal move.

The second cost is risk. If access is granted from memory, it will be granted too broadly, because over-granting is the easy way to stop complaints. IBM's overview of identity and access management describes the aim of giving the right people the right level of access to the right resources, and warns against the opposite, where permissions drift beyond what roles require. Excess access is the main way a single stolen password becomes a large incident.

The third cost is accountability. Under POPIA, a responsible party must secure personal information against unauthorised access. When nobody can show who approved access to a payroll or customer database, the business has a weak position in an investigation, an audit or a dispute with an employee.

The fourth cost is fragility. When access knowledge sits with one person, the business depends on them. The Pattern [the business process that only works because someone remembers](/patterns/the-business-process-that-only-works-because-someone-remembers/) describes how that dependency is hidden until the person is away.

## Common misidentification

The most common response is to blame speed and hire more IT support. More hands handle more messages, but the messages still have no structure. The second is to give new staff broad default access "to avoid delays", which trades a visible problem for an invisible one. The third is to buy an identity tool before deciding who approves what. Software can enforce a process, but it cannot decide one, and an expensive tool configured around informal habits just records them.

Another misreading is that this is only an IT matter. The questions of who should have access to what, and who may approve it, are business decisions. IT carries them out but cannot own them.

## Possibility

In a better state, an access request is a structured item with a requester, a system, a level, a reason and an approver. Standard roles define what most people need on day one, so a new starter's access is ready before they arrive. Approvals are recorded, time-limited access expires on its own, and a leaver or role change triggers a review automatically.

Smaller businesses can achieve most of this without enterprise tooling: a shared request form, a role matrix kept in a spreadsheet and a short monthly review. The principle in Microsoft's access-package model, that a bundle of permissions is defined once and requested as a unit, applies at any size.

## Intervention

1. **Inventory the systems.** List every application that holds money, personal data or operational control, and who administers each.
2. **Define roles.** For each common job, write down the standard access and the access that needs extra approval.
3. **Create one request route.** Use a single form or mailbox that captures who, what, why and for how long, and refuse access requests that bypass it.
4. **Name approvers.** Decide who may approve access to each system, and make sure they are told what they are approving.
5. **Link to HR events.** Make hiring, transfers and exits create a request or a review without anyone having to remember.
6. **Review quarterly.** Compare actual access with the role matrix and remove the difference.

## Diagnostic questions

- Where would a new employee's access request be recorded, and who would see it?
- Who is allowed to approve access to payroll, banking and customer data?
- How many working days pass before a new starter has everything they need?
- What triggers an access review when someone changes roles?
- If asked tomorrow, could you list everything one named person can access?

## Bottom line

Access is one of the most consequential routine decisions a business makes, and it is often handled by whoever is asked and whatever they remember. Giving it a defined route, a named approver and a record speeds up the good cases, such as new starters, and stops the bad ones, such as forgotten permissions. The aim is not bureaucracy but decisions that can be explained afterwards.
