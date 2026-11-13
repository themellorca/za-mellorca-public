---
hub: patterns
record_id: PAT-193
slug: when-staff-need-to-ask-who-approves-what
title: When staff need to ask who approves what
description: Repeated questions about who can approve routine work often reveal unclear decision rights and an approval workflow that still depends on memory.
lead: If routine work repeatedly pauses while people search for the right approver, the problem may be unclear decision rights rather than employee knowledge.
category: People Operations & Internal Service
published_date: 2026-09-06
updated_date: 2026-09-06
eyebrow: Pattern
tags:
  - Cycle time
  - Capacity
  - Governance
cta_label: Digital Operations
cta_href: /services/digital-operations/
side_title: Commercial value
pattern_family: People Operations & Internal Service
observable_condition: Employees repeatedly ask who can approve routine requests, exceptions or changes before work can continue.
primary_identification: decision-rights and approval-workflow design problem
commercial_value_dimensions: Cycle time, Employee capacity, Governance, Scalability
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Change approval settings for an access package in entitlement management - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-access-package-approval-policy
  - Separation of Duty (SOD) - Glossary - CSRC | https://csrc.nist.gov/glossary/term/separation_of_duty
related:
  - When offboarding leaves digital access behind | /patterns/when-offboarding-leaves-digital-access-behind/
  - Why does hiring someone create so much internal admin? | /patterns/why-does-hiring-someone-create-so-much-internal-admin/
  - When copy-and-paste becomes part of the job description | /patterns/when-copy-and-paste-becomes-part-of-the-job-description/
summary: Repeated uncertainty about approvers can reveal missing decision rights, ownership and escalation rules. Making those rules explicit can reduce waiting and management interruption while improving governance as the business scales.
---
## Observable condition

A staff member needs a purchase approved, access granted, a customer exception accepted, a leave request signed off or a routine change authorised. The request itself is clear, but work stops while someone asks: *Who approves this?* The answer may depend on who is available, who handled the last case or who remembers an unwritten rule.

The question rarely arrives alone. It is followed by a message to a manager, a forwarded email, a check with finance, and sometimes a second request because the first approver turned out not to be the right one. By the time a decision is made, the person who raised the request has spent more effort finding the approver than describing the need.

## Realisation

Repeated approval questions are easy to treat as a communication problem. But when the same uncertainty appears across teams and request types, it can indicate that decision authority is not built into the operating process. People are being asked to discover governance at the moment they need it.

That matters because the uncertainty is not neutral. Requests drift towards whoever answers fastest, which is not necessarily the person with the right authority. Approvals given by the wrong person may later be questioned, reversed or quietly relied on. The organisation believes it has control because approvals happen, but cannot easily show that the right people made the right decisions.

## Identification

This is a **decision-rights and approval-workflow design problem**. The visible symptom is a question. The structural issue is that the rules connecting a type of decision to an accountable approver are implicit, incomplete or out of date.

## Diagnosis

The underlying mechanism is usually a combination of unclear process ownership, approval thresholds that live in memory, role changes that were never reflected in workflows and exceptions that have accumulated without an explicit rule. A process needs an accountable owner who defines responsibility and authority and manages how it interacts with other processes. When those controls are absent, staff compensate with messages, meetings and informal escalation.

Several specific mechanisms tend to appear together:

- **Authority by memory.** Thresholds such as "anything over a certain amount goes to the finance director" exist, but only in the heads of long-serving staff.
- **Stale routing.** A manager moves role or leaves, but forms, mailboxes and workflow rules still point to them.
- **No absence rule.** Nobody has defined who decides when the normal approver is on leave, so requests either wait or go to someone senior by default.
- **Exception creep.** One-off decisions become precedents without becoming rules, so similar requests receive different treatment.
- **Control intent is unstated.** Approval steps exist, but nobody can say which risk each one controls, so nobody feels able to simplify them.

Some approval design is deliberately about independence. NIST describes [separation of duty](https://csrc.nist.gov/glossary/term/separation_of_duty) as the principle that no user should hold enough privilege to misuse a system alone, giving the example that the person authorising a payment should not also prepare it. Clear decision rights make that kind of control easier to apply consistently, because the rule specifies who must *not* approve as well as who may.

## Commercial impact

The value wrapper is **cycle time, employee capacity, governance and scalability**. Work waits even when the substantive decision is simple. Managers become interruption points. Similar requests may receive different treatment. As the organisation grows, the number of people who need to know the unwritten approval map grows with it.

The cost is spread thinly, which is why it survives. Each search for an approver may take only minutes, but it recurs across every request type and every team. Senior people absorb approvals that could safely sit lower down, and the queue behind them becomes a constraint on delivery. The downstream effect of that queue is examined in [the cost of work waiting for approval](/impact/approval-queues-blocked-capacity-cost/), and the way one decision point can stall a whole sequence is explored in [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/).

## Common misidentification

The default response is often to publish an org chart or remind employees to ask their manager. An org chart shows reporting relationships; it does not necessarily define who may approve a specific decision, at which threshold, under which conditions or what should happen when the normal approver is unavailable.

A second misidentification is to buy a workflow tool first. Workflow platforms can route requests well, but they need rules. Configuring a tool on top of undefined authority simply encodes today's guesswork.

## Warning signs

- Staff keep personal lists of "who to ask" for different request types.
- Requests are copied to several managers in the hope that one will respond.
- The same type of request is approved at different levels in different teams.
- Approvals stall whenever one particular person is on leave.
- Auditors or finance ask for evidence of authority and it has to be reconstructed from email.

## An illustrative example

The following is an illustrative scenario, not a client case. A services business allows staff to request software subscriptions. Small requests are meant to be approved by a team lead, larger ones by the operations manager and anything involving customer data by the IT lead as well. None of this is written down. A new team lead approves a tool that handles customer records because the amount was small; the data question is never asked. Elsewhere, a routine renewal waits two weeks because the operations manager who used to approve it has changed role, and nobody has inherited the decision. Both failures have the same cause: the rule existed in memory, not in the process.

## Possibility

A stronger model makes decision rights part of the workflow. The request type, amount, risk level, business unit or exception class can determine the correct approver and escalation path. Staff should not need institutional memory to discover the next step.

Current workflow tooling already supports this kind of design. Microsoft's [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals), for example, distinguish between requiring every approver, accepting the first response and sequential approval in a fixed order. Microsoft Entra entitlement management lets an approval policy name alternate approvers, forward pending requests to them on a schedule and set how many days a decision may take before the request expires. The tools are not the point; the point is that routing, absence and time limits can be explicit design choices rather than improvisation.

## Intervention

Take a sample of recent approval-dependent requests and map what actually happened. For each one, record who initiated it, what decision was required, who was asked, how the approver was chosen, how long the request waited and what happened when the normal route failed. Use the evidence to define approval rules before automating them.

1. List the recurring request types that need a decision.
2. For each, state the risk the approval controls and the attributes that change the approver, such as value, data sensitivity or customer impact.
3. Name the approver by role, not by person, together with an alternate and an escalation point.
4. State who must not approve, where independence matters.
5. Set an expected decision time and what happens when it is missed.
6. Assign an owner to update the rules when roles or thresholds change.
7. Only then configure routing in the workflow tools already in use.

## Trade-offs

Explicit rules can become rigid. If every edge case needs a new rule, the matrix becomes unreadable and people return to asking. Keep a small number of clear thresholds and a defined route for genuine exceptions. Delegating approval lower down saves time but must be matched by appropriate visibility for the people who remain accountable. Removing an approval step entirely should be a decision by the control owner, not a side effect of streamlining.

## Practical diagnostic questions

- Which recurring requests generate "who approves this?" questions?
- Are approval rights explicit by request type, value, risk or exception?
- Does the workflow know the approver, or do employees have to find one?
- What happens when the normal approver is unavailable?
- Are managers approving decisions that could safely be delegated?
- Can you show, for a sample of approvals, that the approver had the authority to decide?

## Bottom line

If staff regularly need to ask who approves what, governance is probably living in people rather than in the operating design. Writing decision rights down by role, threshold and exception, and then routing requests by those rules, turns a recurring interruption into a predictable step that scales with the business.
