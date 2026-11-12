---
hub: impact
record_id: CPS-007
slug: approval-queues-blocked-capacity-cost
title: The Cost of Work Waiting for Approval
description: An approval can take minutes to review and still hold up work for days. Its economic effect depends on what is blocked, what staff do while waiting and whether the delay changes a commercial outcome.
lead: An approval can take minutes to review and still hold up work for days. Its economic effect depends on what is blocked, what staff do while waiting and whether the delay changes a commercial outcome.
category: Digital Operations
published_date: 2026-09-06
updated_date: 2026-09-06
tags:
  - Digital Operations
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Cost mechanisms
side_text: Chasing labour and delayed operational capacity
side_text_position: above_tags
content_id: CONTENT-000142
commercial_domain: Digital Operations
primary_pain: work blocked in approval queues
primary_cost_mechanism: chasing labour and delayed operational capacity
evidence_basis: original qualitative analysis and transparent input-based cost model; related repository-contained editorial context
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Change approval settings for an access package in entitlement management - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-access-package-approval-policy
  - Separation of Duty (SOD) - Glossary - CSRC | https://csrc.nist.gov/glossary/term/separation_of_duty
related:
  - Recreating Documents Nobody Can Find: The Cost of Duplicated Work | /impact/staff-recreating-lost-documents-duplicated-work-cost/
  - Manual Payment Matching Turns Cash Visibility into Reconciliation Work | /impact/manual-payment-matching-reconciliation-cost/
  - Which Version Is Final? The Cost of Teams Working From Different Copies | /impact/conflicting-document-versions-rework-decision-cost/
---
## The tolerated pain

A complete request sits with an approver while delivery waits. The requester sends reminders, a manager checks progress, and colleagues adjust their plans. Businesses tolerate this because review serves a legitimate control purpose and waiting does not arrive as a separate invoice. But the time taken to make a decision and the time spent in its queue are different operating measures.

Most approvers are not slow by choice. They hold approval rights alongside a full role, requests arrive through several channels, and nothing tells them which pending item is blocking the most work. The queue is a by-product of how approval has been designed, not of individual reluctance.

## Why the cost stays hidden

Approval delay is spread across many people in small amounts. The requester loses minutes chasing, a project lead loses an hour replanning, a supplier is rebooked. None of it is recorded against the approval step. Finance sees the overtime or the courier charge, but not its cause. Because the control itself is valuable, questioning the queue can feel like questioning the control, so the conversation does not start.

## Operational consequence

Trace one request from submission through readiness for review, decision and release to the next activity. Separate missing-information delay from time when the approver had everything required. Identify whether the waiting task lies on the delivery path or whether people can move to equally useful work. A queue can create repeated rescheduling and chasing even when nobody is completely idle.

Look also at how the approval is structured. Microsoft's Power Automate documentation distinguishes approvals where everyone must respond, where the first response completes the request, and where approvers respond one at a time in a fixed sequence. A sequential chain of independent reviewers waits for the slowest link at every stage; a parallel design waits once. Neither is right in every case, but the choice should be deliberate.

## Warning signs

- Requesters routinely ask "has anyone looked at this?" before the decision is due.
- Work is booked, cancelled and rebooked around pending approvals.
- Requests stall whenever a particular approver is travelling or on leave.
- Requests are returned for missing information after waiting days in the queue.
- Expedited delivery or overtime appears regularly near approval-dependent milestones.

## Financial consequence

Measure chasing cost as reminder and status-check hours multiplied by the loaded hourly cost of the people involved. Add documented rescheduling and rework at their respective rates. Value genuinely blocked paid capacity separately, excluding time already counted and time productively redeployed. These quantities explain labour absorption without assuming that every hour of elapsed waiting is an hour of lost work.

## An illustrative cost model

Every number below is an **illustrative assumption** for one request class over one month. It is not a benchmark and should be replaced with your own records.

| Component (illustrative) | Calculation | Monthly cost |
| --- | --- | --- |
| Requester chasing | 200 requests × 3 follow-ups × 10 minutes = 100 hours × R300 | R30,000 |
| Manager status checks | 20 hours × R600 | R12,000 |
| Rescheduling and rework | 15 requests × 2 hours × R350 | R10,500 |
| Genuinely blocked capacity | 6 occasions × 2-person crew × 4 hours = 48 hours × R280 | R13,440 |
| Incremental costs caused by delay | 4 expedited deliveries × R1,500 | R6,000 |
| **Total** |  | **R71,940** |

If the pattern held for a year, the illustrative figure would be R71,940 × 12 = R863,280. The blocked-capacity line counts only occasions where the crew could not be redeployed; hours spent on other useful work are excluded.

Cash timing is shown separately. Suppose, illustratively, that a R400,000 customer invoice can be issued only after an approval, and the queue delays it by 10 days. The receipt is late, not lost. At an illustrative financing cost of 11% a year, the carrying cost of the delay is R400,000 × 11% × 10 ÷ 365 ≈ R1,205. Reporting the full R400,000 as a loss would overstate the problem.

## Keep delay separate from loss

A delayed delivery is not automatically a lost sale. Record incremental overtime, expedited purchases or other actual costs caused by the queue. Where timing affects cash receipt, show the amount and duration of the delay without calling the full receipt a loss. Only assign a lost commercial outcome when evidence connects it to the approval wait. The model needs the organisation's records, not a generic percentage.

## Secondary consequences

Long queues invite workarounds: work starting before approval, requests split to fall under a threshold, or approvals sought from whoever is available. Each weakens the control the queue was meant to protect. Staff also learn to submit early and pad estimates, which makes planning less accurate. Where the uncertainty is about who should approve, rather than how fast, the pattern described in [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/) is likely to be present too.

## Commercial urgency

Review the queue when recurring approval delay threatens committed work or requires repeated intervention by senior staff. Prioritise the decision point with the largest evidenced consequence, rather than whichever has the longest average wait. A long queue on noncritical work can matter less than a short queue that repeatedly blocks a customer handover.

## What better looks like

Each approval has a named owner and a stated purpose. Requests arrive complete, their status is visible to the requester, and absence does not stop them. Microsoft Entra entitlement management illustrates the mechanics: a policy can name alternate approvers who receive a request on a forwarding schedule if the primary approver has not acted, and can set a number of days after which an undecided request expires. Whatever the tooling, routing, cover and time limits are designed in rather than left to chasing.

## Resolution

Name the decision owner and the risk each review controls. Provide a complete request at intake, visible status and an authorised substitute for absence. Have the control owner assess whether routine cases can follow predefined thresholds and whether independent reviews can proceed together. Preserve necessary authority and audit evidence. Test changes on a bounded request class and compare chasing effort, elapsed time, errors and control exceptions before widening them.

## Trade-offs

Some review exists precisely to separate duties. NIST describes separation of duty as ensuring no single user has enough privilege to misuse a system alone, such as one person both preparing and authorising a payment. Speeding up a queue must not quietly collapse that separation. Raising thresholds reduces volume but shifts risk, and parallel review is faster only when reviewers genuinely assess different things.

## Practical diagnostic actions

1. Pick one approval-dependent request class and pull a month of records.
2. For a sample, separate time waiting for information from time waiting for decision.
3. Count follow-ups and status checks per request.
4. Identify occasions where paid capacity could not be redeployed.
5. List any overtime, expediting or penalties linked to approval timing.
6. State the risk each approval step controls and who owns it.

## The economic meaning

The aim is to preserve useful review while reducing its avoidable queue cost. A faster approval process has commercial value when it releases constrained work or removes measured handling effort without creating a larger control problem.

## Method note

This is a diagnostic cost model, not a client case study or an industry benchmark. All rand values, volumes, rates and the financing percentage are illustrative assumptions used to show the arithmetic; no numerical loss or saving is asserted for any real organisation. Microsoft and NIST references describe current capabilities and control principles, not costs. [Related explanation: how approval queues form](/insights/why-approval-processes-become-bottlenecks/).
