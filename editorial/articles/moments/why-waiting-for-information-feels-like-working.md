---
hub: moments
record_id: STORY-ANGLE-000019
slug: why-waiting-for-information-feels-like-working
title: Why waiting for information feels like working
description: Checking whether the figures have arrived or anyone has replied can fill a day and still feel like work. What that hidden waiting costs, and how to see it.
lead: Checking whether the figures have arrived, whether the quote was signed off, whether anyone has replied. Waiting for information can fill a day and still feel like work. What that hidden waiting costs, and what makes it visible.
category: Time and Attention
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Time and Attention
thematic_domain: time_and_attention
human_situation: A person who needs figures, documents or sign-offs from colleagues before finishing a report or quote spends the day checking, chasing and starting work they cannot complete.
human_dividend: Time and predictability: less time spent hovering and chasing, and a clear view of when inputs will arrive so the day can be planned.
trade_off: Visible status can feel like pressure or be used to assign blame; formal workflows for every request add overhead; automated data feeds need building and maintenance; some waiting reflects legitimate careful review.
epistemic_state: HYPOTHESISED: the claim that waiting is converted into effortful checking and chasing is inferred from lean flow concepts and approval-tool design, not from a measured study of South African workplaces.
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - Ten open tabs and five logins: What the morning sign-in takes | /moments/ten-open-tabs-and-five-logins/
  - The morning routine of checking whether overnight jobs ran | /moments/the-morning-check-that-overnight-jobs-ran/
  - When every day starts by rebuilding yesterday's context | /moments/when-every-day-starts-by-rebuilding-yesterdays-context/
summary: Checking whether the figures have arrived, whether the quote was signed off, whether anyone has replied. Waiting for information can fill a day and still feel like work. What that hidden waiting costs, and what makes it visible.
layout: plain
---
It is eleven in the morning and the report still cannot be finished. The sales figures were promised by nine. The supplier's revised price is somewhere between the buyer's inbox and the financial manager's. The quote for the large customer is waiting for a signature from someone who is in meetings until lunch.

So the person responsible does what most people do in that position. They refresh the inbox. They send a polite follow-up. They open the half-finished spreadsheet, look at it, and close it again. They start something else, then stop because the figures might arrive at any moment. By the end of the day they are tired, and they have been busy throughout. But a surprising amount of that busyness was waiting.

This piece explores why waiting for information so often feels like working, and what that confusion costs the person doing it. The mechanism described here is a hypothesis, drawn from established ideas about how work flows and from how approval tools are designed, rather than from a study of any particular workplace.

## The difference between doing and waiting

Lean thinking, which grew out of manufacturing, has long distinguished between two measures of time. The Lean Enterprise Institute's description of [value stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) separates cycle time, the time it takes to actually perform a piece of work, from lead time, the time it takes one item to move all the way through a process from start to finish. The gap between the two is largely time spent waiting: in queues, between steps, for the next person.

The same institute describes continuous flow as passing each piece immediately to the next step without stagnation in between. In office work, stagnation rarely looks like a pile of parts on a factory floor. It looks like an email awaiting a reply, a document awaiting approval, or a figure awaiting someone's attention.

The important point for people is this: in a factory, waiting is visible because the material sits still. In office work, the person often does not sit still. They fill the gap with checking, chasing and partial starts. The waiting is converted into activity, and the activity feels like work.

## Why waiting turns into effort

Several features of ordinary office systems make waiting effortful rather than restful.

- **No visible status.** If there is nowhere to see whether a request has been read, approved or forgotten, the only way to find out is to ask. Each enquiry costs a little time for both sides.
- **No expected time.** If nobody knows whether the figures will arrive in ten minutes or tomorrow, the person cannot sensibly commit to something else. They hover.
- **No owner of the delay.** When the waiting is nobody's explicit responsibility, the person who needs the information becomes the one who chases it.
- **Partial starts.** Beginning work that cannot be finished, then setting it aside, means rebuilding the context every time it is picked up again.

Mellorca has looked at the operational side of this in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/) and [when work sits waiting more than it moves](/patterns/when-work-sits-waiting-more-than-it-moves/). The human side is that chasing and hovering are rarely recorded anywhere. They do not appear on a timesheet, and they are seldom mentioned in a performance review, yet they can consume a meaningful part of a day.

## An illustrative reporting week

Consider an illustrative case: the operations coordinator at a South African logistics firm with around forty staff. Each Monday they compile a short report for the owner covering deliveries, fuel costs and customer complaints. Each input lives with a different person.

- Delivery numbers come from the dispatch supervisor, who exports them when there is a quiet moment.
- Fuel costs come from the bookkeeper, who must first receive card statements.
- Complaints are collected from the customer service mailbox by whoever has time.

The report itself takes about forty minutes to write. Getting the inputs can take most of Monday and part of Tuesday. The coordinator sends reminders, checks the shared folder, and answers the owner's question of when the report will be ready with an honest but unsatisfying answer: as soon as the figures arrive. Mellorca's piece on [the hidden cost of waiting for management information](/patterns/the-hidden-cost-of-waiting-for-management-information/) describes what the business loses. This scenario is about what the coordinator carries.

## The human tax: time and predictability

The first tax is time. Not the forty minutes of writing, but the hours of fragmented attention around it.

The second is predictability. A person who cannot know when their inputs will arrive cannot plan their own day. Commitments made to others become provisional. Some people manage this calmly. For others, the uncertainty can make the day feel longer and more tiring than the actual work would explain. Mellorca cannot say how any individual feels about it; the narrower claim is that unpredictable waiting removes the ability to plan, and that this is a cost even when nobody complains about it.

Waiting for approval is a related but different situation, explored in [when the system decides what you can do today](/moments/when-the-system-decides-what-you-can-do-today/). That piece is about permission. This one is about information: the figures, replies and documents that someone needs before their own work can be finished.

## What could realistically change

The aim is not to remove waiting entirely. Some waiting is unavoidable. The aim is to make it visible, bounded and owned, so it stops masquerading as work.

1. **Give requests a status.** Approval and workflow tools typically show where something stands. Microsoft's documentation for approvals in its Business Central system, for example, shows a record moving from open to pending approval to released, with a page listing every request awaiting a response. A simple shared tracker can do the same for information requests.
2. **Agree when inputs are due.** A standing agreement that delivery figures are ready by nine on Monday turns hovering into a clear expectation.
3. **Route requests rather than chase them.** Microsoft's [Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) documentation describes approval requests that notify approvers, let them respond from email or Teams, and keep a history. The point is that the system carries the reminder, not the person.
4. **Plan for absence.** The Business Central documentation also describes delegating requests to a substitute and sending overdue notifications so that requests do not pile up when someone is unavailable.
5. **Remove the wait altogether.** Where the same figures are needed every week, they can often be drawn directly from the systems that hold them, so nobody has to send them at all.

## What changes first, and the business outcome

The first change is that the person waiting can see where things stand without asking. Fewer follow-up messages are sent and received. When an input is late, it is late visibly, and the person responsible can see it too.

For the business, the shorter gap between doing and finishing means reports arrive sooner and decisions are made on fresher information. Effort that was spent on chasing is available for work that adds value.

## The human dividend

The dividends are time and predictability. Time, because hours spent hovering and chasing can be given to other work, or to finishing on time. Predictability, because a person who knows when their inputs will arrive can plan the rest of their day with some confidence.

There is also a quieter benefit. When waiting is visible, it stops being confused with effort. The person can see that they were not slow; the information was late. That distinction matters for how people understand their own work.

## The trade-offs

- **Visibility can feel like pressure.** A tracker that shows overdue items also shows who is late. Used to support people, it helps; used to blame them, it creates a new burden.
- **Process can multiply.** Formal workflows for every small request would create their own overhead. The approach suits recurring, important inputs, not every passing question.
- **Automation moves work.** Drawing figures directly from systems requires someone to build and maintain the connection.
- **Some waiting is legitimate.** A careful review takes time, and pressure to answer instantly can lower its quality.

## Why it matters

A day spent waiting can look busy from the outside and feel busy from the inside, and still produce little. The person in the middle is often the last to see why, because the waiting has been converted into activity they performed themselves.

Mellorca's interpretation is that much of this is a design gap: information without a status, deadlines without agreement and reminders carried by memory rather than by systems. Making waiting visible does not make it disappear, but it returns something important to the person who has been absorbing it: a clear view of when their own work can actually begin.
