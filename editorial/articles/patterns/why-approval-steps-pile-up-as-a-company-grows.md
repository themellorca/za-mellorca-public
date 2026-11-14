---
hub: patterns
record_id: PAT-309
slug: why-approval-steps-pile-up-as-a-company-grows
title: Why Approvals Accumulate as Companies Grow
description: Approval steps are added one incident at a time and rarely removed. Here is why they accumulate, what they cost in time and ownership, and how to prune them without losing control.
lead: Approval steps are added one incident at a time and rarely removed. Here is why they accumulate, what they cost in time and ownership, and how to prune them without losing control.
category: Governance & Decision Flow
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Governance & Decision Flow
pattern_family: Governance & Decision Flow
observable_condition: Purchases, leave, payments, price changes and customer terms each need one or more sign-offs, the number of steps has grown over the years, and nobody can say why some of them exist or what they are meant to catch.
primary_identification: Approval steps are added as a reaction to individual incidents and never reviewed against the risk they address, so the total grows with the company while the value of each step is never tested.
commercial_value_dimensions: Speed of decisions, management time, staff autonomy, control effectiveness, customer response time and risk exposure
sources:
  - https://learn.microsoft.com/en-us/power-automate/get-started-approvals | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles | https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles
summary: Approval steps are added one incident at a time and rarely removed. Here is why they accumulate, what they cost in time and ownership, and how to prune them without losing control.
layout: plain
---
## Observable condition

In a company of ten people, the owner approves most things. Nobody needs a policy, because the owner is in the room. At thirty people, a few rules appear: purchases over a certain amount need a signature, new suppliers need a second pair of eyes. At one hundred, there is a manager sign-off, a finance sign-off and, for anything unusual, a director's.

Few of these steps were designed. Most arrived after something went wrong: a wrong payment, an unauthorised order, an audit comment. Each time, a sign-off was added as the reasonable response. Nobody removed an old one, because nobody could be sure what it was protecting.

An illustrative example: a Cape Town marketing agency where a freelancer's invoice needs a project manager's approval, then the finance manager's, then the director's, even for amounts of a few thousand rand. Freelancers wait three weeks to be paid, and the best ones start to prefer other clients.

## Realisation

The realisation is that approvals behave like a ratchet. They are easy to add and almost impossible to take away, because each one has a plausible reason and removing one feels like accepting a risk. Over years, the sum of all those individually reasonable decisions is a process that nobody would design from scratch.

It also shows that an approval is a cost that sits in the time of at least two people: the one waiting and the one approving. The approver pays in interruptions, often giving only a glance because they have little context. The step meant to add care can quietly turn into rubber-stamping, in which case the business pays for delay and gets no control in return. Microsoft's [introduction to approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes how requests can be routed to approvers and tracked, which makes visible something many businesses never measure: how many approvals are pending and for how long.

**Realisation prompt:** choose one approval in your business and ask its owner what specific mistake it exists to prevent. Can they tell you, and how often does it actually stop one?

## Identification

This is a pattern of unreviewed controls. The visible symptom is the pile of requests waiting for a signature. The common assumption is that more approvals mean more control. The structural cause is that approvals are added after incidents and never tested against the risk they were meant to address, so the number grows even when the risk does not.

It relates to [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/), which looks at a single delayed step. This article looks at why the steps multiply.

## Diagnosis

- **Approvals are reactions.** Each follows an event, such as a fraud attempt, a surprise bill or an audit finding. The reaction is proportionate to the event, not to the underlying frequency of the risk.
- **Nothing has an expiry.** A control added during a particular crisis stays after the crisis ends, because nobody owns the list of controls.
- **Thresholds are never revisited.** A limit of R5,000 set years ago is far lower in real terms today, so the step now catches routine items it was never meant to.
- **Approvers lack context.** A signature requested by message, with no supporting detail, can only be approved on trust. The approval then guards little and still costs time.
- **Authority is unclear.** When it is not obvious who can approve what, people send requests upward to be safe, and senior managers become the bottleneck.
- **Delegation is informal.** When an approver is away, requests wait or are forwarded by message, and nobody records who authorised what.

## Commercial impact

The commercial value at stake is the speed of decisions, management capacity and the effectiveness of the controls themselves.

The first cost is delay. A purchase that waits four days for signatures may cost the company a discount, a delivery slot or a customer. The Pattern [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/) puts numbers on that comparison.

The second is management time. Senior people spend hours on low-value approvals, and they have less time for decisions that need them. The more they approve, the less attention each approval receives.

The third is weaker control. Where people sign without reading, the control exists on paper and not in practice. Real risks may pass through because the volume of trivial requests hides them.

The fourth is a cultural effect. Staff who must ask for permission for small things learn to wait, or to find ways around the process, such as splitting a purchase into two smaller ones. Both undermine the intent of the rule.

## Common misidentification

The usual response is to add faster reminders or an escalation to the approver's manager. That speeds up the wait without questioning whether the step is needed. Another is to remove approvals wholesale after a particularly frustrating week, which trades one problem for another. A third is to blame the approvers for being slow, when the volume and lack of context they face are built into the process.

## Possibility

In a better state, each approval has a stated purpose, an owner and a threshold, and the whole list can be read on one page. Low-risk, low-value items proceed on a standing rule or a pre-approved budget. Medium-risk items need one approver, who sees the necessary context on the request. Only the genuinely unusual or large go to senior people.

Tools can support this, once the rules are clear. Approval requests in a system carry the supporting detail with them, can be delegated with a record, and show how long each one has been waiting, as described in the Power Automate [cloud flows overview](https://learn.microsoft.com/en-us/power-automate/overview-cloud). The same logic applies to system permissions: Microsoft's explanation of [administrator roles](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles) reflects the principle of giving people the access their job needs, which is the digital counterpart of defining who may approve what.

See also [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/).

## Intervention

Treat approvals like any other asset: list them, test what each protects, and keep only those that earn their place.

## Practical next actions

1. **List every approval step.** Cover purchases, payments, leave, expenses, price changes, new suppliers and customer terms. Record the approver, the threshold and the year it was introduced.
2. **State what each one prevents.** If nobody can name the risk, mark it for review. If it can be named, note how often it has caught one in the last year.
3. **Measure the wait.** For the five busiest approvals, record how long requests wait on average and how many are approved without change.
4. **Reset thresholds.** Set limits according to current values and risks. Let items under the limit proceed on a standing rule, and sample them afterwards instead of approving each one first.
5. **Attach context to every request.** Include the amount, the budget line, the reason and the alternative considered, so the approver can decide in a minute.
6. **Write a delegation rule.** Name the substitute for each approver, so that absence delays nothing and every authorisation is recorded.

## Diagnostic questions

- How many approval steps does a routine purchase pass through, and when was each added?
- What proportion of requests are approved without any change?
- Can every manager state the limit they are allowed to approve?
- Who is responsible for reviewing the list of controls?
- Have people ever split a transaction to stay under a limit?

## Bottom line

Approvals pile up because each one makes sense on the day it is added and none is ever tested again. Listing them, linking each to the risk it addresses and setting thresholds that fit the business today keeps real controls where they matter and returns time and speed to everything else.
