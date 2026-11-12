---
hub: patterns
record_id: PAT-301
slug: why-does-one-approval-hold-up-an-entire-process
title: Why Does One Approval Hold Up an Entire Process?
description: A Pattern exploring approval bottlenecks that stall end-to-end processes, with practical governance and automation fixes.
lead: A Pattern exploring approval bottlenecks that stall end-to-end processes, with practical governance and automation fixes.
category: Process governance
published_date: 2026-10-01
updated_date: 2026-10-01
eyebrow: Process Governance
pattern_family: Process governance
observable_condition: Bottleneck at single approval step
primary_identification: Gatekeeping and manual routing
commercial_value_dimensions: speed, customer experience, risk, cost
sources:
  - Manage sequential approvals with Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals
  - Create parallel approval workflows - Power Automate | https://learn.microsoft.com/en-us/power-automate/parallel-modern-approvals
  - Insights | https://www.bain.com/insights
related:
  - Why Routine Admin Expands as the Business Grows | /patterns/why-routine-admin-expands-as-the-business-grows/
  - When One Missing Item Stops a Larger Process | /patterns/when-one-missing-item-stops-a-larger-process/
  - Why One Number Requires Three People and Four Systems | /patterns/why-one-number-requires-three-people-and-four-systems/
summary: A Pattern exploring approval bottlenecks that stall end-to-end processes, with practical governance and automation fixes.
layout: plain
---
## Observable condition

A purchase request, a contract change, a discount, a new supplier or a project variation is ready to move. Everything else is in place. Then it waits. Across projects, orders and changes, a single approval step can stall an entire workflow, and the people around it spend their time searching for the right approver, working out which policy applies, or chasing a second opinion that nobody formally asked for.

The delay rarely looks dramatic from the inside. Each individual wait seems reasonable: the approver is travelling, the threshold is unclear, the request lacked one attachment. But the work behind the approval does not wait politely. Delivery dates are held, suppliers are told to pause, customers are told "soon", and the requester starts a parallel thread of emails to find out where things stand.

## Realisation

Approvals are often the choke point where governance, risk and operational speed collide. They exist for good reasons: to protect money, to enforce compliance and to make sure someone accountable has looked at a decision before it is made. The problem is not that approvals exist. The problem is that a single gate can hold an entire process hostage while adding very little control.

When one gate blocks progress, cycles extend, rework increases and promise dates slip. This is especially visible in financial approvals, compliance checks and larger procurement, where the request may sit with a person who is the only one permitted to say yes. The realisation for many businesses is that the approval step is consuming far more elapsed time than the decision itself, and that much of that time is spent locating, chasing and re-explaining rather than judging.

## Identification

This is a **governance friction point**. It usually combines three things: rigid rule-based paths that send every request the same way regardless of risk, insufficient visibility into which approvals are queued and for how long, and unclear ownership across functions, so that nobody is accountable for the end-to-end flow rather than their own step.

The visible symptom is a stalled request. The common assumption is that the approver is slow. The structural cause is usually the design of the approval itself: who is asked, in what order, with what information, and what happens when they do not respond.

## Diagnosis

Diagnosis uncovers that an approval process is not atomic. What looks like a single "yes or no" moment is really a chain of smaller activities: assembling the request, routing it, finding the right person, interpreting the policy, answering questions, recording the outcome and notifying whoever does the next step. Each link can require manual intervention.

Several mechanisms commonly sit behind the stall:

- **Sequential routing where independence would do.** Workflow tooling distinguishes between sequential approvals, where a request must be pre-approved before it reaches a final approver, and parallel approvals, where each approver's decision is independent of the others. Microsoft's [guidance on sequential approvals](https://learn.microsoft.com/en-us/power-automate/sequential-modern-approvals) describes the pre-approval case, such as invoices above a threshold needing sign-off before Finance reviews them, while its [guidance on parallel approvals](https://learn.microsoft.com/en-us/power-automate/parallel-modern-approvals) describes requests that go to several approvers at once. Many businesses use sequence by habit, even when the approvers are checking unrelated things.
- **No fallback path.** The process depends on actors who may be unavailable, with no delegate, no deputy and no rule for what happens after a set period.
- **Thresholds that do not reflect risk.** Low-value, routine or pre-agreed requests follow the same path as unusual ones, so the senior approver's queue fills with items that do not need their judgement.
- **Incomplete requests.** The approver receives a request without the information needed to decide, so it is returned, amended and re-submitted.
- **Invisible queues.** Nobody can see what is waiting, for how long, or with whom, so delay is discovered only when someone downstream complains.

The result is a cascade: one hold triggers several downstream delays, and each of those creates its own follow-up work.

## Commercial impact

The commercial value at stake is **speed, capacity, cash flow, revenue and customer experience**. Operational cost rises as teams push timelines back and spend time communicating delay to customers and stakeholders. Revenue impact arises when delays prevent revenue recognition, project delivery or service activation. Capacity is lost because skilled people are chasing status instead of doing the work the approval was meant to release.

There is also a governance cost that is easy to miss. When the formal path is slow, people find informal ones: verbal approvals, work started "at risk", or requests split to stay under a threshold. The approval step then delays the business without delivering the control it was designed to provide.

## Common misidentification

The usual response is to remind approvers to respond faster or to add a reminder email. That may clear one queue, but it treats the symptom. If the path, thresholds and ownership stay the same, the bottleneck returns as soon as volume rises or the approver is away.

## Possibility

Possibility lies in streamlining approvals so that control is proportionate to risk. That can include pre-approved exceptions for routine cases, digital signatures, and parallel routing for gates that check independent things. Clear ownership of the end-to-end process, defined service levels for each approval step, and automation of the routing and notification work reduce handoffs without weakening governance.

In a stronger state, approvers see complete requests, low-risk items do not reach senior queues, delegation is defined in advance, and anyone can see where a request is waiting.

## Intervention

Interventions include tiered approval paths, delegation rules and transparent views of queue status. A practical sequence is:

1. Pick one approval that regularly delays work and map every step from request to recorded decision.
2. For each approver, write down what they are actually checking. Where two approvers check independent things, consider parallel routing.
3. Define tiers by value, risk or novelty, and decide which tiers can be pre-approved or delegated.
4. Set a service level for each step and an automated escalation for overdue approvals, including a named delegate.
5. Require the information an approver needs at submission, so requests are not returned for basics.
6. Make queue status visible to requesters and process owners, and simulate the redesigned flow against recent real requests before switching over.

Related reading: [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) and [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/).

## Practical diagnostic: warning signs

The following signs suggest that an approval step is constraining the whole process rather than simply controlling it:

- Requesters regularly message approvers directly to ask whether they have seen a request.
- Work starts before approval "to save time", and the approval is recorded afterwards.
- Requests are returned because information was missing, rather than because the decision was no.
- Nobody can say how long the oldest pending approval has been waiting.
- Delays spike when one particular person is on leave.
- Large requests are split into smaller ones to stay under a threshold.
- Approvers say most of what reaches them is routine.

### Practical diagnostic questions

- Which approvals are time-bound, and who bears the risk if they are delayed?
- Can some steps run in parallel without compromising governance?
- Is there a single owner for the end-to-end process?
- What happens automatically when an approver does not respond?
- Which share of requests could be handled by a pre-approved rule or a delegate?

## Bottom line

An approval should be a control point, not a waiting room. Addressing single-approval bottlenecks unlocks end-to-end flow, improves reliability and strengthens customer trust by delivering promised outcomes on time, while keeping accountable judgement where it genuinely matters.
