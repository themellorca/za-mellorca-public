---
hub: insights
record_id: INS-113
slug: why-approval-processes-become-bottlenecks
title: Why approval processes become bottlenecks.
description: How unclear decision rights, excessive approvers and poorly designed exceptions turn approvals into operational queues.
lead: Approvals are supposed to control risk. They become operational drag when every exception, decision and handoff waits in the same queue.
category: Digital Operations
published_date: 2026-09-01
updated_date: 2026-09-01
eyebrow: Article
page_title: Why Approval Processes Become Bottlenecks | Mellorca
tags:
  - Approvals
  - Decision Rights
  - Workflow
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - Known issues - Power Automate | https://learn.microsoft.com/en-au/power-automate/approvals-known-issues
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Create parallel approval workflows - Power Automate | https://learn.microsoft.com/en-us/power-automate/parallel-modern-approvals
related:
  - What management cannot see usually becomes expensive | /insights/what-management-cannot-see-usually-becomes-expensive/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
  - Why shared inboxes become operational bottlenecks | /insights/why-shared-inboxes-become-operational-bottlenecks/
---
Many approval processes start with a sensible control: somebody should review a payment, discount, contract, purchase or exception before the business commits. Over time, more reviewers are added, thresholds are rarely revisited, and the approval path becomes the default answer to uncertainty. Each addition is reasonable on its own. Together they produce a workflow in which nobody is quite sure why a request needs five signatures, only that it does.

The result is a queue disguised as governance. Work waits because the organisation has not made clear which decisions are routine, which need expert input, which require formal authority and which should be blocked automatically.

> A good control stops the wrong work. A bad approval process stops all work until somebody has time to look at it.

## How a control turns into a queue

Approval chains rarely become bottlenecks because somebody designed them badly on day one. They degrade through a small number of repeatable mechanisms.

- **Accretion after incidents.** Something goes wrong, and the response is to add a reviewer. The reviewer stays long after the original risk has been addressed elsewhere.
- **Inflation of thresholds.** A limit set years ago in absolute terms now captures far more routine requests than it was meant to, because prices, volumes and team sizes have moved while the number has not.
- **Confusing input with authority.** Decision frameworks tend to fail when too many stakeholders effectively receive a vote or veto, and when the organisation does not distinguish the people who contribute input from the person who actually decides. Every person who can block a request adds another place for it to wait.
- **Visibility used as a substitute for information.** People are added to an approval because they want to know what is happening. Approval is an expensive way to send a notification.
- **Serial routing by default.** Tools make it easy to send a request from one person to the next. Microsoft's Power Automate documentation, for example, describes sequential approvals in which a pre-approver must act before a final approver sees the request, and parallel approvals in which each person's approval is independent of the others. Both patterns are legitimate; the problem is choosing sequential routing out of habit rather than dependency.

## Why it becomes expensive

The cost of an approval bottleneck is mostly waiting, not reviewing. A request that takes ten minutes of genuine attention can sit for days between those ten minutes. During that time a supplier is not paid, a customer is not quoted, a hire is not confirmed or a project cannot start. Requestors spend time chasing, managers spend time being chased, and some people learn to route around the process altogether—which quietly removes the control the approval was meant to provide.

There is no honest universal figure for this cost. Measure it from your own records: elapsed time from submission to decision, time spent waiting at each step, the proportion of requests that are approved without change, and the number of chasers sent. Those four numbers usually explain the problem better than any benchmark. For a fuller method, see [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

## Find the decision inside the approval

For each approval step, ask what decision the approver is making. If the answer is vague—“checking”, “signing off” or “making sure everything is okay”—the control may not be defined well enough.

Specify the risk, threshold or policy the approver is responsible for. If a system can verify a fixed rule, the workflow may not need human judgement at that point. If judgement is required, the approver needs the information and authority to make the decision rather than simply forwarding it to somebody else.

> **Illustrative example.** A hypothetical purchase request for a software subscription passes through a line manager, a department head, IT, procurement and finance. Asked what each step checks, the answers are: budget ownership, budget ownership again, whether the tool duplicates an existing one, whether the supplier is approved, and whether the cost code is valid. Two of those are rules a system could check, one is duplicated, and only one—IT's duplication review—genuinely needs judgement on most requests.

## Reduce serial approvals

Serial approval chains multiply waiting time. A request can spend far more time idle than being reviewed. Separate approvals that truly depend on one another from reviews that can happen in parallel, and remove people who are only being kept informed. A notification or a shared status view serves them better.

Use value, risk or exception thresholds. A routine low-risk request may be auto-approved or handled by one role, while unusual or high-value cases escalate. This keeps human attention focused where judgement adds value.

Be deliberate about how multiple approvers combine. Power Automate distinguishes approval types where everyone must approve from those where the first to respond completes the request. The operating question behind that setting is important: does the business need every reviewer's agreement, or does it need any one qualified person to decide?

## Design for expiry, escalation and absence

Automation does not remove queue design. Microsoft's current documentation on [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) notes that an approval flow can wait for 28 days; if the wait exceeds that, the flow fails, while the approval itself continues to exist in the approvals centre with nothing waiting on it. The specific platform limit is a technical detail. The operating lesson is universal: every approval needs a path for no response, expired requests, unavailable approvers and ownership changes.

Define escalation times, delegate rules, cancellation behaviour and what happens when an approver leaves the organisation. Monitoring should show aged approvals and failure states rather than forcing requestors to chase individuals manually. If chasing is the main way work moves, that is itself a design signal—see [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

## Separate control from ceremony

Some approvals exist because “we have always required a manager”. Test whether the step still reduces a real risk. If the same approver accepts almost every request, the process may be better served by a clear policy, automated threshold and retrospective exception review.

Removing unnecessary approvals is not removing governance. It can strengthen governance by making the remaining decision points explicit, measurable and accountable.

## The trade-offs

Simplifying approvals is not free of risk. Auto-approval below a threshold invites requests to be split to stay under it, so threshold rules need aggregation checks or periodic review. Retrospective review only works if somebody actually performs it. Parallel approvals can produce conflicting answers that need a tie-break rule. And some approvals are required by regulation, contract or audit commitments regardless of how often they are granted; those should be made faster and better evidenced, not removed.

## Warning signs and a practical diagnostic

Look for these signals:

- Requestors routinely ask “who is it with now?”
- Approvers say they rely on the previous approver having checked the detail.
- Almost every request is approved without change at one or more steps.
- Urgent work bypasses the process, and the bypass has become normal.
- Requests stall when one named person is on leave.

Then take a sample of recent requests and, for each step, record: the decision being made, the elapsed waiting time, whether the outcome ever differs from the default, and whether the check could be expressed as a rule. Steps that never change the outcome, or that duplicate another step, are the first candidates for removal, consolidation or automation.

## What better looks like

A mature approval workflow has a clear decision owner, a defined risk or policy purpose, the minimum necessary participants, thresholds that route routine and exceptional work differently, time-bound escalation, and evidence that can be audited later. Requestors can see status without chasing. Managers can see where queues accumulate. Thresholds are reviewed on a schedule rather than only after an incident.

## When to act

If approvals routinely delay customer work, purchasing, billing or delivery—and nobody can explain what each approver uniquely contributes—the workflow should be redesigned before it is automated further. Automating a confused approval chain simply makes the confusion faster and harder to see. It is worth understanding [how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/) first.

[Digital Operations Improvement](/services/digital-operations-improvement/) can remove unnecessary decision friction and clarify ownership. [Business Automation & AI Workflows](/services/business-automation-ai-workflows/) can then automate routing, thresholds, escalation and monitoring around the redesigned control.
