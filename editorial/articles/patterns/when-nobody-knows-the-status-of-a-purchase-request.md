---
hub: patterns
record_id: PAT-430
slug: when-nobody-knows-the-status-of-a-purchase-request
title: When Nobody Knows the Status of a Purchase Request
description: A purchase request that exists only as a message has no visible status, so people chase, duplicate and wait. Here is why it happens and how to make the journey visible.
lead: A purchase request that exists only as a message has no visible status, so people chase, duplicate and wait. Here is why it happens and how to make the journey visible.
category: Procurement & Purchasing
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Procurement & Purchasing
pattern_family: Procurement & Purchasing
observable_condition: Requesters, buyers and finance cannot say whether a purchase request is awaiting approval, quotation or ordering, so people chase, raise duplicates and wait while work is delayed.
primary_identification: Invisible workflow state: the request is a message with no stage, holder or recorded approval, and nobody owns the time it spends between hands.
commercial_value_dimensions: Operational downtime, purchase cost, staff time spent chasing, spend control and supplier relationships
sources:
  - https://learn.microsoft.com/en-us/power-automate/modern-approvals | https://learn.microsoft.com/en-us/power-automate/modern-approvals
  - https://learn.microsoft.com/en-us/power-automate/get-started-approvals | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
summary: A purchase request that exists only as a message has no visible status, so people chase, duplicate and wait. Here is why it happens and how to make the journey visible.
layout: plain
---
## Observable condition

A workshop supervisor at a Gqeberha engineering firm needs a replacement bearing for a machine that is running at half speed. He sends a purchase request on Monday. By Thursday, the machine is still limping, the supplier's quote may or may not have been approved, and the supervisor does not know whether the request is waiting for a manager, waiting for finance or waiting on the supplier.

He asks the buyer, who says it went to the finance manager. The finance manager says she approved it and sent it back. The buyer says she did not receive it. Meanwhile, a second supervisor, unaware, raises a request for the same part.

The business has people who work hard and want to do the right thing. What it does not have is any place where the status of a purchase request can be read.

## Realisation

When a request has no visible status, every person who needs to know has to ask somebody else. The question "where is my request?" becomes a regular interruption for the buyer, the finance team and managers. The answers take time to find and are often out of date by the time they are given.

The realisation is that the delay is rarely at the approval step itself. It is in the not-knowing that surrounds it. People cannot chase what they cannot see, they cannot plan around a date no one has given, and they cannot stop duplicates when no one can tell what is already in motion.

**Realisation prompt:** pick three purchase requests from last month. Can you say, for each, who held it at every point, and how long it waited?

## Identification

This is a pattern of invisible workflow state. The visible signs are emails headed "any update?", duplicate orders, urgent purchases made on personal cards and a buyer who keeps a private list of open requests. The common assumption is that people are slow to approve. The structural cause is that status exists only in the memory of the person currently holding the request.

It builds on the situation in [how purchase requests get lost in an inbox](/patterns/how-purchase-requests-get-lost-in-an-inbox/). That page looks at where the request disappears. This article looks at the reader's problem: nobody can tell where it is, even when it has not been lost.

## Diagnosis

- **The request is a message, not a record.** An email or a chat message has no status field. It can be read, forwarded or ignored, but it cannot say "approved" or "waiting for quotation".
- **Approvals are given in a different place from the request.** A manager says yes in a corridor or by reply, and the buyer never sees the decision. Microsoft's guidance on [approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/modern-approvals) describes approval requests that keep the outcome tied to the item being approved and notify the requester, which is the opposite of an approval given outside the record.
- **Nobody owns the end-to-end journey.** The requester owns the need, the manager owns the budget and the buyer owns the order, but nobody is responsible for the time the request spends between those hands.
- **There is no standard set of stages.** Without terms such as submitted, approved, ordered and received, each person describes progress in their own words.
- **Duplicates are invisible.** A request for the same item from a different department looks new, because nobody can search what is already open.
- **Delays are not measured.** The business knows when goods arrived but not how long the request waited at each step, so it cannot see where the time goes.

## Commercial impact

The commercial value at stake is operational downtime, buying cost, staff time, control over spend and supplier relationships.

The most expensive consequence is delay to the thing the purchase was for. A machine running slowly, a project waiting for materials or a team without equipment all have a daily cost that is larger than the price of the item. That cost does not appear on a purchase order, so it is rarely counted.

The second is duplication and panic buying. When people cannot see that an order is already in motion, they raise another, or they buy locally at a higher price to avoid waiting. Both raise spend without improving the outcome.

The third is the time spent chasing. Every "any update?" costs the sender a few minutes and the receiver more, because they must go and find out. Across a month, the combined cost can be the equivalent of days of staff time.

The fourth is weaker control. If approvals are verbal or scattered, finance cannot show that spend followed the delegation of authority. That matters at audit time and when a disputed invoice arrives and no one can find who authorised the order.

## Common misidentification

The usual misreading is that approvers are slow, and the response is to nag them. Sometimes they are slow, but often the request reached them late, in the wrong format or without the quote attached, so they had to ask for more.

Another is to assume the buyer is the bottleneck. The buyer may be waiting for a decision that was given but never communicated.

A third is to buy a procurement system and expect clarity to follow. Software helps only if the business has first agreed the stages, the owners and the rules about who can approve what.

## Possibility

The possibility is a business where any person can open a single list and see every open purchase request, its current stage, who holds it and how long it has been there. Approvers receive requests with what they need to decide. Requesters are told automatically when the status changes. Buyers can see what is coming before it arrives. Duplicates are caught early, and delays become a visible figure that can be discussed.

That shifts the conversation from "who lost it?" to "why does this stage take four days?", which is a question that can be answered and improved.

## Intervention

A workable approach starts small. Agree four or five stages that everyone uses. Decide where requests will be raised, in one form that captures what, how much, why, by when and which cost centre. Store each in a list or table that shows the stage. If the business already uses Microsoft 365 or Google Workspace, an approval flow or shared form can supply the first version without a separate system, as described in Microsoft's documentation on [getting started with approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals).

Then record time at each stage, even manually, for a month. The data usually shows that one or two steps are responsible for most of the wait. Fixing those, perhaps by delegating authority below a rand threshold or by giving approvers a mobile route, tends to do more than adding people. Related thinking is in [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/).

For the wider cost of managers chasing, see [managers chasing status updates and the visibility cost](/impact/managers-chasing-status-updates-visibility-cost/).

## Practical next actions

1. Take the last ten purchase requests and trace each one, noting who held it, for how long and where its status was recorded, if anywhere.
2. Agree a short list of stages, such as submitted, approved, ordered and received, and define who moves a request from one to the next.
3. Replace email requests with one form or list that captures item, amount, reason, needed-by date and cost centre, and shows the current stage to everyone.
4. Set a threshold below which a named person can approve without escalation, so low-value requests are not held up by the same queue as large ones.
5. Review the list weekly for requests that have not moved in three working days, and ask the holder what they need to move it.

## Diagnostic questions

- If a requester asks where their request is, how long does it take us to answer?
- Where is the approval recorded, and can the buyer and finance both see it?
- How many duplicate or emergency purchases were made in the last quarter because a request seemed to have vanished?
- Which single stage holds requests the longest, and do we know why?

## Bottom line

When nobody knows the status of a purchase request, the business pays in chasing, duplication, downtime and weak control. The fix is not to speed up everyone. It is to make the request a visible record with agreed stages, a named holder and a measured wait, so people stop asking where it is and start improving how long it takes.
