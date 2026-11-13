---
hub: moments
record_id: STORY-ANGLE-000010
slug: the-lunch-break-eaten-by-approval-requests
title: The lunch break eaten by approval requests
description: For many managers, lunch is the only quiet gap, so it becomes the time to clear approvals. What that says about approval design, and how to give it back.
lead: For many managers, lunch is the only quiet gap in the day, so it becomes the time to clear approvals. What that habit says about how approvals are designed, and how to give the hour back.
category: Time & Attention
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: A manager whose mornings and afternoons are filled with meetings and site work uses the lunch hour to clear purchase, payment and leave approvals that arrived as scattered notifications.
human_dividend: Time and presence: a lunch break that is actually a break, because routine approvals are batched, delegated or removed and the remaining ones have a visible, scheduled slot in the working day.
trade_off: Batching approvals can slow urgent requests; delegation moves accountability onto others; raising thresholds increases fraud and error exposure; some managers prefer clearing approvals in a quiet gap and may not experience lunch as lost time.
epistemic_state: HYPOTHESISED: the pattern of approvals drifting into breaks is reasoned from approval workflow design and global meeting-timing data; it has not been measured in South African businesses.
sources:
  - https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf | https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
  - Specify when and how to receive workflow notifications - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-specify-when-and-how-to-receive-notifications
  - https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday | https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday
related:
  - Why the commute has become unpaid triage time | /moments/why-the-commute-has-become-unpaid-triage-time/
  - The evening spent chasing signatures | /moments/the-evening-spent-chasing-signatures/
  - The half-hour lost to finding the right file | /moments/the-half-hour-lost-to-finding-the-right-file/
  - When waiting rooms are where real work gets done | /moments/when-waiting-rooms-are-where-real-work-gets-done/
summary: For many managers, lunch is the only quiet gap in the day, so it becomes the time to clear approvals. What that habit says about how approvals are designed, and how to give the hour back.
layout: plain
---
It is twenty past one. The sandwich is on the desk, half unwrapped. On the screen are eleven requests: a supplier payment, two purchase orders, a credit note, three leave applications, a quote that needs a discount signed off and a few expense claims. Each one takes a minute or two. Together they take the whole break.

Nobody asked the manager to give up lunch. It simply turned out to be the only part of the day with no meeting in it, and the requests had been piling up since eight. Clearing them at lunch felt like the responsible thing to do, because somebody downstairs was waiting on each one.

This piece is about that particular habit: approvals that drift into the one gap the day still has. It is a small moment, but it says something about how approval work is designed.

## The break the law describes, and the break people take

South Africa's [Basic Conditions of Employment Act](https://www.labour.gov.za/DocumentCenter/Acts/Basic%20Conditions%20of%20Employment/Act%20-%20Basic%20Conditions%20of%20Employment.pdf) sets out a meal interval for employees who work continuously for more than five hours: at least one continuous hour, which a written agreement may reduce to not less than 30 minutes. During that interval an employee may be required or permitted to perform only duties that cannot be left unattended and cannot be performed by another employee. If they are required to work or be available for work during the interval, it must be paid.

Many managers and owners are senior enough that the detail of these provisions is not what governs their day, and an owner is not an employee at all. The point here is not legal compliance. It is that the Act describes the meal interval as time away from duties that someone else could do, and approvals are very often exactly that kind of duty: work that could be done by another person, at another time, if the system allowed it.

## Why approvals end up at lunch

Microsoft's [Work Trend Index](https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday) analysis of anonymised Microsoft 365 activity found that half of all meetings in its data take place between 9 and 11 in the morning and between 1 and 3 in the afternoon, and that workers are interrupted roughly every two minutes during core hours. These are global figures from one vendor's product data, not a measurement of South African firms. They do describe a day that leaves little room for anything that needs a few quiet minutes, and the midday gap is one of the few places such minutes still exist.

Consider an illustrative case: a Johannesburg distribution business with about 35 staff. The operations manager approves purchase orders above a set value, supplier payments, credit notes and leave. Each request arrives as its own email the moment someone submits it. Mornings go to the warehouse and customer calls; afternoons to supplier meetings. By lunch there are a dozen unread approval emails, and the people who sent them have started following up on chat.

The mechanism usually has a few parts:

- **Every request interrupts on arrival.** When each approval sends its own instant notification, the approver either breaks off from other work or lets them pile up into a block that has to be cleared somewhere.
- **One person holds every gate.** If no substitute is set up, nothing can move while that person is busy, so the approver feels obliged to clear the queue at the first free moment.
- **Routine and unusual requests look the same.** A repeat order from a regular supplier waits in the same queue as a genuinely unusual payment, and gets the same attention.
- **There is no agreed time for approvals.** Because approving is not scheduled work, it lands in whatever time is left over.

Mellorca has looked at the operational side of this in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) and at the capacity cost in [approval queues that block capacity](/impact/approval-queues-blocked-capacity-cost/). The Moment about [the person waiting for sign-off](/moments/when-the-system-decides-what-you-can-do-today/) describes the other end of the same queue. This piece is about the person holding the pen.

## The human tax: time, and the break that is not a break

The obvious cost is time: twenty or thirty minutes of a lunch hour, most days. The less obvious cost is what the break was for. A meal interval is one of the few points in a working day where attention can be put down. When it is filled with decisions, however small, attention stays switched on from the first email to the last meeting.

It would be wrong to say that everyone experiences this as a loss. Some managers like the quiet of a lunchtime queue; it is the only time they can concentrate on anything. Others would rather eat with colleagues, walk outside or simply sit. Mellorca cannot know which applies to any given person and should not pretend to. What can be said is that the choice is often being made by the shape of the approval system rather than by the person.

## What could change

The aim is not to remove approvals, which protect the business and its staff. It is to give approval work a proper place in the day, so that it stops borrowing time from breaks.

1. **Schedule notifications instead of receiving them instantly.** Some business systems let the approver, not the requester, decide when approval notifications arrive. Microsoft's Business Central documentation, for example, describes notification schedules that can deliver approval notifications instantly or on a daily, weekly or monthly pattern at a chosen time, and notes that delivery follows the receiver's settings. Two set approval slots a day, say at ten and at three, can replace a stream of interruptions.
2. **Approve in batches from one list.** Working through a single list of pending requests, rather than opening each email in turn, is faster and makes it easier to see which items are genuinely unusual. The same documentation describes approving multiple requests at a time from one page.
3. **Name a substitute.** Delegation to a designated substitute, so that requests do not stall when the approver is unavailable, is a standard feature of approval workflows. A substitute removes the pressure to clear everything before the queue blocks other people.
4. **Take routine items out of the queue.** Review thresholds that were set when the business was smaller, allow pre-approved suppliers and standard discounts within a band, and consider review after the fact for small, reversible items.
5. **Agree response times.** If people know that approvals are dealt with twice a day, they stop chasing on chat at lunchtime, because they know when the answer will come.

None of this needs a particular product. A spreadsheet-based approval list with two fixed review times does part of the job. What matters is that approving becomes planned work with a time and a stand-in, rather than an interruption that has to be absorbed somewhere.

In the illustrative distribution business, a daily approval slot after the morning stand-up, a second slot at three, a named deputy for leave and purchase orders, and a higher limit for repeat stock orders might remove most of the lunchtime queue. The remaining items would be the ones that genuinely need the manager's judgement.

## Trade-offs

- **Urgent requests may wait longer.** Batching suits routine items, but a genuinely urgent payment needs a clear route that bypasses the schedule, or batching simply moves the stress.
- **Delegation shifts accountability.** A substitute who approves also owns the decision. For some deputies that is welcome; for others it is new pressure that needs support and clear limits.
- **Looser thresholds raise risk.** Fewer gates mean less friction, but also less protection against error and fraud, which is why separation of duties exists. Any change should be paired with after-the-fact review that actually happens.
- **The habit may be valued.** If lunch is the one quiet moment, removing the approvals from it does not automatically make it restful. The dividend is the choice, not a prescribed way to spend the hour.

## Why it matters

The business case for better approvals is usually stated in speed and control: faster purchasing, fewer blocked staff, cleaner audit trails. Those are real. The human case is quieter. When approvals have a scheduled place, a stand-in and sensible limits, the manager's break stops being the system's overflow buffer.

That is the dividend here: an hour in the middle of the day that belongs to the person again. Whether they spend it eating with colleagues, reading, walking or answering one genuinely urgent request by choice is up to them. The point is that the approval system no longer decides for them.
