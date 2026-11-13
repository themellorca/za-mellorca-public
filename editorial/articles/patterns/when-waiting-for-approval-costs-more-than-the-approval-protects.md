---
hub: patterns
record_id: PAT-303
slug: when-waiting-for-approval-costs-more-than-the-approval-protects
title: When waiting for approval costs more than the approval protects
description: When routine requests wait days for sign-off yet are nearly always approved, every request pays a waiting cost. Tier approvals by risk to keep control.
lead: When routine requests wait days for sign-off and are almost always approved, the business pays a waiting cost on every request. Tiering approvals by risk, defining substitutes and measuring waiting time keeps control where it matters.
category: Approvals, Handoffs & Bottlenecks
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Approvals, Handoffs & Bottlenecks
pattern_family: Approvals, Handoffs & Bottlenecks
observable_condition: Routine requests wait hours or days for sign-off and are almost always approved unchanged.
primary_identification: Approval-design problem: controls on routine decisions are set without regard to their cost in elapsed time.
commercial_value_dimensions: cycle time, capacity, customer response, execution speed, control quality
sources:
  - Cycle Time - How to Calculate It - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/cycle-time/
  - Set up approval users - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-approval-users
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - The operational tax hidden inside everyday admin | /patterns/the-operational-tax-hidden-inside-everyday-admin/
  - The hidden cost of waiting for management information | /patterns/the-hidden-cost-of-waiting-for-management-information/
  - When everyone has more system access than their job needs | /patterns/when-everyone-has-more-system-access-than-their-job-needs/
summary: When routine requests wait days for sign-off and are almost always approved, the business pays a waiting cost on every request. Tiering approvals by risk, defining substitutes and measuring waiting time keeps control where it matters.
layout: plain
---
## Observable condition

A project manager needs to order R4,000 of materials to keep a job on schedule. The request goes to the operations manager, who is on site, and then to the financial director, who approves purchases on Thursdays. By the time it is approved, the job has slipped three days. A sales rep wants to give a regular customer a small discount to close an order this week. The approval sits in the sales manager's inbox overnight, and the customer places the order elsewhere. A technician needs sign-off to replace a part costing less than an hour of his own time. He waits, and so does the customer.

In each case the eventual answer was yes. In most businesses that use approvals heavily, the eventual answer is nearly always yes. The waiting, however, is real, and it happens every time.

## Realisation

Approvals exist to control risk: to stop money being spent unwisely, discounts being given away or commitments made that the business cannot keep. That purpose is legitimate. The realisation is that every approval also has a cost, and that cost is paid on every request, including the large majority that would have been approved anyway. The cost is not the few seconds the approver spends clicking yes. It is the hours or days the work spends waiting, the time the requester spends chasing, the work that stalls behind it, and sometimes the customer or opportunity lost in the meantime.

When an approval almost never changes the outcome, the business is paying that waiting cost to protect against a risk that rarely materialises. The control may still be worthwhile, but only if someone has weighed the two.

Realisation prompt: pick one type of approval and look at the last fifty requests. How many were rejected or materially changed? How long did the approved ones wait? If almost all were approved unchanged after a delay, the approval is mainly producing waiting.

## Identification

This is an approval-design problem: the controls on routine decisions are set without regard to their cost in elapsed time, so low-risk work waits as long as high-risk work. It sits alongside three related patterns. [Why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/) looks at a single approver as a bottleneck. [When staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/) looks at unclear decision rights. [When work sits waiting more than it moves](/patterns/when-work-sits-waiting-more-than-it-moves/) looks at queues across a whole process. This pattern asks a different question: whether each approval is worth the wait it creates.

## Diagnosis

The visible symptom is work waiting for sign-off. The common assumption is that approvers are too busy or too slow. The structural causes are usually in how approvals are designed:

- **One threshold for everything.** All purchases, discounts or changes need the same approval regardless of value or risk, so a small routine request waits as long as a large unusual one.
- **Thresholds that never moved.** Approval limits set years ago remain unchanged while prices, volumes and the experience of staff have grown, so more and more routine requests cross them.
- **Approvals added after incidents.** A single mistake leads to a new sign-off for every similar request, permanently, without anyone reviewing whether it still earns its place.
- **Sequential chains.** Requests pass through approvers one after another when they could be reviewed in parallel, or when one approver would be enough.
- **Approval tied to people rather than roles.** When the named approver is away, nothing moves because there is no defined substitute.
- **No visibility of waiting time.** Nobody measures how long requests wait, so the cost of the control is invisible while its benefit feels obvious.

Lean thinking draws a useful distinction here. The Lean Enterprise Institute's glossary entry on [cycle time](https://www.lean.org/lexicon-terms/cycle-time/) separates processing time, when work is actually being done, from lead time, the full time from start to finish. It notes that value-creating time is usually less than cycle time, which is less than lead time. An approval adds very little processing time and can add a great deal of lead time.

## Commercial impact

The commercial value at stake is cycle time, capacity, customer response and execution speed.

- **Cycle time.** Every approval adds waiting to the process it sits in, and that waiting is felt by customers.
- **Revenue.** Discounts, quotes and commitments that wait for sign-off can lose the sale to a faster competitor.
- **Capacity.** Requesters spend time chasing, and approvers spend time on low-value decisions that crowd out the important ones. The cost of blocked capacity is examined in [the cost of approval queues](/impact/approval-queues-blocked-capacity-cost/).
- **Execution speed.** Projects and jobs slip while materials or changes wait for authorisation.
- **Control quality.** When approvers see dozens of routine requests, they tend to approve them quickly without real scrutiny, so the control weakens precisely where it is most used.

The scale should be measured from the business's own records: approval volumes, rejection rates and waiting times by type of request.

## Common misidentification

The usual response is to digitise the approval: move it from email to a workflow tool so that requests are tracked and approvers are reminded. That is a sensible step, and it often helps. But a slow approval that is digitised is still an approval that may not need to exist in its current form. The deeper question, examined in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/), is which decisions need a second person at all.

The opposite error is to remove approvals wholesale in the name of speed. Some decisions do need a second view, and the aim is to put scrutiny where the risk is, not to eliminate it.

## Possibility

In a stronger state, approvals are tiered by risk. Routine, low-value requests within clear rules proceed without waiting, and are reviewed after the fact if at all. Medium-risk requests go to one approver with a defined substitute. Only genuinely significant decisions go to senior people. Thresholds are reviewed periodically, and every approval type has a measured waiting time. Approvers spend their attention on the decisions that actually need it.

## Intervention

1. **List every approval type** in your core processes, with who approves and why the approval exists.
2. **Measure volume, rejection rate and waiting time** for each type over a recent period.
3. **Set tiered limits.** Define value or risk thresholds below which no approval is needed, or a lower-level approval is enough. Business systems support this directly; Microsoft's guide to [setting up approval users in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-approval-users), for example, shows approval amount limits per user and substitute approvers when the main approver is unavailable.
4. **Define substitutes** for every approver so that absence does not stop work.
5. **Run approvals in parallel** where several people genuinely need to review.
6. **Route and track approvals in a workflow.** Tools such as [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) let approvers respond from email, Teams or a mobile device, and keep a history of decisions.
7. **Review approvals annually.** Retire those that no longer change outcomes, and adjust thresholds as the business grows.

## An illustrative example

The following is illustrative, not a client case. A Polokwane electrical contractor requires the financial director to approve every purchase order. When the operations manager reviews three months of requests, nearly all were approved unchanged, but the typical request waited two working days. The business introduces limits: site managers approve up to an agreed amount, the operations manager up to a higher amount, and only larger purchases go to the director. Each approver has a named substitute. Material delays on site fall noticeably, and the director now reviews a short list of purchases that genuinely warrant attention.

## Practical diagnostic questions

- Which approvals are rejected or changed often enough to justify the wait they create?
- How long does a typical request wait for approval?
- When were your approval thresholds last reviewed?
- What happens to requests when the approver is away?
- Do approvers have time to scrutinise the decisions that really matter?

## Bottom line

An approval is a control with a price, and the price is paid in waiting on every request. When most requests are approved unchanged after a delay, the business is paying for protection it rarely uses. Tiering approvals by risk, defining substitutes and measuring waiting time keeps the control where it matters and lets routine work move.
