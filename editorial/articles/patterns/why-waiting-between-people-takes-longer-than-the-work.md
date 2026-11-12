---
hub: patterns
record_id: PAT-307
slug: why-waiting-between-people-takes-longer-than-the-work
title: Why Handoffs Create More Delay Than the Work Itself
description: Most of a job's elapsed time is spent waiting between people, not being worked on. This pattern shows how to measure the waiting and give each handoff a signal, an owner and a time limit.
lead: Most of a job's elapsed time is spent waiting between people, not being worked on. This pattern shows how to measure the waiting and give each handoff a signal, an owner and a time limit.
category: Workflow & Process Efficiency
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Workflow & Process Efficiency
pattern_family: handoff-delay
observable_condition: Work that is always with someone else, repeated chasing messages and elapsed time many times longer than working time
primary_identification: Readers can compare working time with elapsed time on a recent job and locate the longest waits
commercial_value_dimensions: Speed to quote, cash collection, win rate, hidden chasing effort and staff morale
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Business process flows overview - Power Automate | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
related:
  - Why Do Good Leads Disappear Between Marketing and Sales? | /patterns/why-good-leads-disappear-between-marketing-and-sales/
  - When Work Sits Waiting More Than It Moves | /patterns/when-work-sits-waiting-more-than-it-moves/
  - Why Does Hiring Someone Create So Much Internal Admin? | /patterns/why-does-hiring-someone-create-so-much-internal-admin/
summary: Most of a job's elapsed time is spent waiting between people, not being worked on. This pattern shows how to measure the waiting and give each handoff a signal, an owner and a time limit.
layout: plain
---
## Observable condition

A Midrand electrical contractor wins a commercial fit-out. The estimator finishes the costing in a day and a half. The quote then travels: to the operations director for sign-off, to finance for a credit check on the customer, back to the estimator for a clarification, to the director again, and finally to the customer. The actual preparation took thirty-six hours of effort. The quote reaches the customer nine days after the enquiry.

When the owner asks why it took so long, no one can point to a single slow step. The estimator was quick. The director approved within hours of seeing it. Finance did its check in an afternoon. The delay sits in the gaps: the email waiting in an inbox, the file that was saved to the wrong folder, the person who was on site and did not read the message until the next morning.

This is an illustrative example, but the arithmetic is familiar in many businesses. The work is measured in hours. The elapsed time is measured in days. The difference is waiting.

## Realisation

The realisation is that most of the time a piece of work takes is not spent being worked on. It is spent between people, waiting for someone to notice that it is now their turn. Each handoff adds a queue, and a queue has no urgency: the item is not being processed, only sitting there. An organisation that measures how long each person takes will see short, healthy numbers and wonder why the customer is waiting.

The effect is easy to underestimate because every individual wait looks small. Half a day here and an overnight there appear reasonable. Added together over five or six handoffs, they exceed the working time many times over. Microsoft's documentation on approvals in Power Automate is a helpful illustration of the principle in software: the stated aim is to [automate sign-off requests and combine human decision-making for workflows](https://learn.microsoft.com/en-us/power-automate/get-started-approvals), notifying approvers so that they can act on the request. The point is that a handoff needs a defined signal to the next person. Without one, it relies on someone happening to look.

**Realisation prompt:** take one recent job and mark the time it was actively worked on against the time it took from start to finish. What is the ratio?

## Identification

This is a pattern of waiting hidden inside handoffs. The visible symptoms are work that is always "with someone else", repeated chasing messages, and a gap between how busy everyone is and how slowly things move. The common assumption is that individuals are slow, or that the team needs to work harder. The structural cause is that the points where work passes from one person to another have no clear signal, no owner and no time limit.

The related Pattern [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/) examines one specific handoff, between sales and delivery. This Pattern looks across the whole chain, and why the sum of the delays often exceeds the work.

## Diagnosis

- **The signal is informal.** The sender assumes the receiver has seen the email or message. The receiver has no way to tell the difference between an urgent request and background noise.
- **Nobody owns the gap.** Each person is responsible for their own step. Between steps, the item belongs to no one, and nobody is asked why it has been sitting there.
- **Information arrives incomplete.** The receiver opens the item and finds that something is missing, so the work goes back for clarification and the wait starts again. The Insight on [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) describes what a complete handoff carries with it.
- **Batching is the default.** Approvers look at items at the end of the day or in a weekly meeting. An item that arrives just after the batch waits for the next one.
- **Handoffs are unnecessary.** A step exists because of an old structure or a past error. Removing it would save more time than speeding it up, but nobody has looked at why it is there.
- **Status is invisible.** No one can see where an item is without asking. Asking is itself a small interruption, and people ask less often than they should.

## Commercial impact

The commercial value at stake is speed to customer, win rate on quotes, cash collection, staff capacity and the customer's impression of how organised the business is.

The first cost is lost work. A customer who receives a quote nine days after asking for one has often spoken to other suppliers in the meantime. The business then loses on timeliness a job it would have won on price. That loss is rarely recorded as such, since the customer simply goes quiet.

The second cost is cash. Invoices held up in approval, delivery notes waiting for a signature and expense claims waiting for a manager all postpone the day the business is paid or reimburses its staff. In a business with tight working capital, delay in handoffs is, in effect, an interest-free loan to the customer.

The third cost is hidden effort. Chasing is work. Each "just checking whether you saw this" message takes time from the sender and the receiver, and it produces nothing. The Insight on [how to find which handoffs are slowing your work down](/insights/how-to-find-which-handoffs-are-slowing-your-work-down/) offers a way to count these interruptions and to see where they cluster.

The fourth cost is the strain on people. Staff who are genuinely busy are repeatedly asked why things are slow, and they begin to feel that the problem is their pace. The Insight on [why broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/) makes the case that this is the wrong diagnosis.

## Common misidentification

The typical response is to ask people to move faster. But the people are already moving quickly during their part, and the delay sits outside it. A second response is to add a tracking spreadsheet, which becomes another thing to update and is usually out of date by the second week. A third is to add a manager who chases, which treats the waiting as a discipline problem and adds one more link to the chain.

Microsoft describes [business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) as a guide that leads people through the stages their organisation defines, so that everyone handles a request the same way. The principle holds with or without software: a defined route removes the guesswork about whose turn it is.

## Possibility

In a better state, every handoff has a visible signal and a visible owner. The receiver is told when an item is theirs, sees exactly what is needed, and knows the time within which a response is expected. The sender sees when it has been picked up. Items that wait longer than agreed are surfaced automatically to a named person. Steps that exist only out of habit have been removed, and approvals are decided against clear limits so that routine items do not need a senior person's attention.

Microsoft describes [cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) as automated workflows that can be triggered by events such as the arrival of an email, which is the kind of signal a handoff needs. None of this requires a complicated system to begin with. A shared board with clear statuses and an agreed response time can already shift the pattern.

## Intervention

Map one typical job from enquiry to cash. For each step, record the working time and the waiting time separately. The longest waits are the first candidates. For each, ask three questions: can this handoff be removed, can the information be made complete so it does not bounce back, and can the next person be signalled and given a time limit? Start with the largest wait and measure again after a month.

## Practical next actions

1. Pick one recent job and write down, for each step, the hours of actual work and the hours spent waiting, then add each column.
2. Identify the three longest waits and find out why each exists: a missing signal, an incomplete handoff, a batch, or an unnecessary step.
3. Agree a response time for each handoff, such as one working day for routine approvals, and make it visible to both sender and receiver.
4. Create a checklist of what must accompany the item at each handoff so it does not come back for clarification.
5. Set approval limits so that routine, low-risk items no longer need a senior person to open them.
6. Show the status of every open job on one shared board, and review items that have sat longer than the agreed time at a short weekly meeting.

## Article summary

When work passes between people, most of the elapsed time is waiting rather than working. The commercial implication is slower quotes, later cash, lost customers and a team that is blamed for delays it did not create. The remedy begins with measuring the waiting, then giving each handoff a signal, an owner and a time limit.
