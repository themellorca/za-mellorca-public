---
hub: patterns
record_id: PAT-429
slug: why-purchase-approvals-turn-into-a-queue-that-slows-the-business
title: Why Purchase Approvals Become a Bottleneck
description: Approval is meant to protect spending, yet in many businesses it just stalls it. Requests wait for one person, travel by email and arrive without the information needed to say yes.
lead: Approval is meant to protect spending, yet in many businesses it just stalls it. Requests wait for one person, travel by email and arrive without the information needed to say yes.
category: Finance, Procurement & Controls
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Finance, Procurement & Controls
pattern_family: Finance, Procurement & Controls
observable_condition: Purchase requests wait days for a single approver, arrive incomplete, travel by email or message, and are chased by the people who need the goods.
primary_identification: Approval designed around one person and one channel: every purchase, whatever its size, passes the same desk, with no limits, no delegate and no standard information.
commercial_value_dimensions: Purchasing lead time, work stoppages, approver time, supplier pricing and relationships, and the strength of the spending control itself
sources:
  - https://learn.microsoft.com/en-us/power-automate/get-started-approvals | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - https://learn.microsoft.com/en-us/power-automate/modern-approvals | https://learn.microsoft.com/en-us/power-automate/modern-approvals
  - https://learn.microsoft.com/en-us/dynamics365/business-central/across-workflow | https://learn.microsoft.com/en-us/dynamics365/business-central/across-workflow
summary: Approval is meant to protect spending, yet in many businesses it just stalls it. Requests wait for one person, travel by email and arrive without the information needed to say yes.
layout: plain
---
## Observable condition

A site foreman needs a R1,800 replacement part to get a machine running. He messages the operations manager, who forwards it to the owner, who is in a meeting and sees it that evening. The next morning the owner asks which supplier and whether there is a quote. The foreman replies at noon. The part is approved on the third day. The machine stood idle for two of them.

An illustrative example: a Polokwane construction supplier requires the owner to sign off every purchase over R500. He signs about forty a week, mostly small. A few are large and deserve his attention, but they sit in the same pile as stationery. During his two-week holiday, the business buys only what staff pay for personally and claim back.

The approval step exists to protect money. In practice it protects very little and costs a great deal of time.

## Realisation

The realisation is that an approval is a process with a design, and the design usually grows by accident. Someone once overspent, so a rule appeared that everything goes to the owner. The rule never had a limit, a deputy or a standard form, so it worked as a single-lane road for every kind of vehicle.

Workflow tools make the design visible. Microsoft's [guide to approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes a request being sent to one or more approvers, with the outcome recorded and further steps triggered by the response. The notable feature is not the software but the structure it assumes: a defined request, a defined approver, a recorded decision and a next step.

Most manual approvals have none of these. The request is a chat message, the approver is whoever was messaged, the decision is a thumbs-up and the next step is someone remembering to place the order.

**Realisation prompt:** list the last ten approved purchases, and next to each write how long it waited for approval and whether the decision changed anything. If most were approved unchanged, the wait added cost without adding control.

## Identification

This is a pattern of single-lane approval. The visible symptoms are idle work, staff paying out of pocket, urgent requests that jump the queue and an owner who feels permanently behind. The common assumption is that managers do not respect the process or that the owner is too busy. The structural cause is that the approval step treats every purchase alike, depends on a single person and runs through a channel that cannot show what is waiting.

The Pattern [how purchase requests get lost in an inbox](/patterns/how-purchase-requests-get-lost-in-an-inbox/) covers the channel problem. The Pattern [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/) covers the value trade-off. This pattern explains the design faults that produce the queue.

## Diagnosis

- **No tiers.** A R300 consumable and a R300,000 asset follow the same route, so the approver's attention is spread evenly over unequal risk.
- **One approver, no delegate.** When that person is travelling, in a meeting or on leave, everything stops.
- **Incomplete requests.** The approver has to ask what, from whom, at what price and against which budget before deciding. Each question restarts the clock.
- **Wrong channel.** Requests travel by email, chat and conversation, so there is no queue to look at and no record of what was decided. The Discovery note [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/) describes this.
- **Approval after commitment.** Urgent items are ordered first and approved afterwards, which empties the control of meaning while still taking the time.
- **No visibility for the requester.** The person waiting cannot see whether the request was received, so they chase, which creates more messages for the approver.

Microsoft's page on [modern approvals](https://learn.microsoft.com/en-us/power-automate/modern-approvals) shows approvals being managed in one place with requests, responses and history gathered together. That is the opposite of a decision scattered across several chats.

## Commercial impact

The first cost is stoppage. Waiting for approval idles machines, vehicles and staff, and the cost of the idle time often exceeds the cost of the item. The Impact note [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/) sets out how the delay turns into lost output.

The second cost is price. Urgent purchases are made from the nearest supplier at the quoted price because there is no time to compare. Regular, planned buying through an approved route usually allows better pricing and terms.

The third cost is the approver's own attention. An owner who signs forty small requests has little left for the three that matter. The control is applied thinly and the decisions that need judgement receive the same ten seconds as the rest.

The fourth cost is weaker control. Where approval is slow, people find ways around it: personal payment, splitting a purchase into smaller ones, or ordering first. The business then has a process that looks strict but produces less reliable records than a quicker one would.

The fifth cost is morale. Capable people who must wait for permission to buy a R1,800 part learn that initiative is not wanted, and they stop offering it.

## Common misidentification

The usual response is to remind staff to submit requests earlier. That ignores the fact that urgent needs are by nature not planned. Another reflex is to remove approval altogether after a frustrating week, which swings to the opposite risk. A third is to add a second approver, which lengthens the queue. The aim is to put control where the risk is, and to remove it where it is not.

## Possibility

In a better state, approval is tiered. Purchases below a set value, within a budget and from an approved supplier need only the requester's manager, or are pre-approved. Mid-range purchases go to a named finance approver, with a delegate. Large or unusual purchases go to the owner, with a quote and a budget reference attached. Every request has the same fields, a visible status and a recorded decision.

The workflow capabilities in business software support this directly. Microsoft's [overview of workflows in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/across-workflow) describes workflows that can route documents such as purchase orders for approval according to rules. A business need not use that product to borrow the idea: rules decide the route, so people do not have to.

## Intervention

The work starts on paper. Decide the tiers and the information first, then pick a tool that matches them.

## Practical next actions

1. **Measure the current wait.** For the last month's purchases, record how long each took from request to decision and how many were changed or declined.
2. **Set value tiers.** Define what each manager may approve alone, what needs finance and what needs the owner, based on the real spread of your purchases.
3. **Name delegates.** Give every approver a deputy who acts when they are away, and write the arrangement down.
4. **Standardise the request.** Require the item, supplier, price, quote, budget line and reason on every request, so approvers can decide without asking.
5. **Use one channel with a visible queue.** Move requests into a shared form or workflow where requesters can see status and approvers can see what is waiting.
6. **Pre-approve the routine.** Agree standing orders or supplier agreements for regular items, and review spend against them monthly.

## Diagnostic questions

- How long does a typical purchase request wait, and how long does the most urgent one?
- What share of requests does the approver change or refuse?
- Who approves when the usual approver is away?
- How often are items ordered before approval, or paid for personally?
- Could a stranger see, right now, which requests are waiting and for whom?

## Bottom line

Purchase approvals become a bottleneck when every request takes the same route to the same person through an untracked channel. Tiered limits, named delegates, complete requests and a visible queue keep the control where the risk is and give the rest of the business its time back.
