---
hub: moments
record_id: STORY-ANGLE-000007
slug: when-every-day-starts-by-rebuilding-yesterdays-context
title: When Every Day Starts by Rebuilding Yesterday's Context
description: Before the day's work can begin, many people first have to find out where yesterday's work stands. What that daily reconstruction costs in attention, and what keeps context waiting instead.
lead: Before the day's work can begin, many people first have to find out where yesterday's work stands. What that daily reconstruction costs in attention, and what keeps context waiting instead.
category: Time & Attention
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: An office worker begins each day, and resumes after each interruption, by reconstructing where open work stands from email, chat groups, spreadsheets and memory.
human_dividend: Attention and time: the freshest part of the day goes on work that moves things forward, and open items are carried by a shared record rather than by memory.
trade_off: Records need discipline to stay current; an added tool can become another place to check; visible status can feel like surveillance; some context such as tone and judgement resists capture.
epistemic_state: HYPOTHESISED: the link between status held in messages and daily reconstruction strain is inferred from interruption research and global telemetry, not measured in South African firms; the worked example is illustrative.
sources:
  - https://ics.uci.edu/~gmark/chi08-mark.pdf | https://ics.uci.edu/~gmark/chi08-mark.pdf
  - https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday | https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday
  - https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work | https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work
related:
  - What Changes When Status Updates Stop Being a Chore | /moments/what-changes-when-status-updates-stop-being-a-chore/
  - Why the Commute Has Become Unpaid Triage Time | /moments/why-the-commute-has-become-unpaid-triage-time/
  - The Lunch Break Eaten by Approval Requests | /moments/the-lunch-break-eaten-by-approval-requests/
summary: Before the day's work can begin, many people first have to find out where yesterday's work stands. What that daily reconstruction costs in attention, and what keeps context waiting instead.
layout: plain
---
There is a particular first half-hour that many office workers will recognise. The laptop opens, the coffee is still hot, and before any new work can start, the old work has to be found again. Which customer was waiting for a reply? Did the supplier confirm the delivery? Where did the discussion about the quote end up, in the email thread or in the chat group? What changed in the numbers since yesterday?

None of this is the day's work. It is the work of finding out where the day's work stands. In some roles it takes ten minutes. In others it can take most of the morning, and it happens again after lunch, after a meeting, after any interruption long enough for the thread to drop.

This piece looks at that daily reconstruction: why it happens, what it costs the person doing it, and what a business can change so that yesterday's context is waiting rather than having to be rebuilt.

## What the research says about interruption and recovery

The cost of picking work back up has been studied for some time. In a 2008 experiment, Gloria Mark of the University of California, Irvine, and colleagues at Humboldt University in Berlin found that people who were interrupted completed their tasks in less time, with no difference in quality, but at a price. Participants reported more stress, higher frustration, greater time pressure and more effort. People compensated for interruptions by working faster, and paid for it in strain.

The scale of interruption in modern office work makes that finding relevant. Microsoft's Work Trend Index analysis of what it calls the infinite workday reports that, in its Microsoft 365 data, workers were interrupted about every two minutes during core hours by a meeting, email or chat, around 275 times a day. It also found that 40% of people online at 6am were reviewing email to work out the day's priorities. An earlier Work Trend Index report found that 62% of surveyed people struggled with too much time spent searching for information.

These are global figures from one vendor's tools, not measurements of South African small businesses. They do not show how long any individual spends rebuilding context. What they suggest is that the conditions for constant reconstruction, frequent interruptions and information that has to be searched for, are widespread.

## Why context has to be rebuilt

Context has to be rebuilt when the state of the work is not held anywhere except in people's heads and in the trail of messages they left behind. Several familiar arrangements produce that condition.

- **Status lives in conversations.** Whether a job is waiting, in progress or done is recorded only in the last message about it, which may be in email, chat or a phone call nobody wrote down.
- **Handovers are informal.** A colleague who dealt with a customer yesterday afternoon leaves no note, so the person picking it up this morning has to read back through the thread.
- **Reports arrive late or in pieces.** If the figures that show where things stand come out weekly, or have to be assembled by hand, every morning starts with a smaller, private version of that assembly.
- **Several tools, no single view.** The job system, the accounting system and the shared drive each hold part of the picture, and nothing joins them.

Mellorca has explored the business side of these patterns in [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/) and [when the weekly report is already out of date](/patterns/when-the-weekly-report-is-already-out-of-date/). Here the focus is what the same arrangements ask of the person at the start of every day.

## An illustrative morning

Consider an illustrative example, not a real case: a Johannesburg events-equipment hire business with twenty-two staff. The bookings coordinator handles around forty active hires at any time. Bookings are captured in a spreadsheet; changes arrive by email and WhatsApp; the warehouse confirms dispatches by phone.

Each morning, the coordinator opens the spreadsheet, then the inbox, then two WhatsApp groups, and works out which bookings changed overnight and which were promised a callback. The spreadsheet is accurate as of whenever someone last updated it. The real state of the business sits in the gaps between the three.

In this scenario, the reconstruction is not a failing of the coordinator. It is a role the business has silently given them: to be the place where the day's picture is assembled, by hand, from scratch, before any real work can begin.

## The human tax: attention and cognitive load

The obvious tax is time. The less obvious one is attention. Rebuilding context means holding many partial facts in mind at once, checking them against each other and worrying about what has been missed. That is cognitively demanding work, and it uses up the fresh attention many people have at the start of the day on something that produces nothing new.

It is reasonable to infer that people who rebuild context several times a day experience some of the strain the Irvine study describes, though no study cited here measures that directly in small South African businesses. It is also worth saying that people differ. Some find a morning review settling and would keep it even if it were unnecessary. The concern is reconstruction that is forced, not review that is chosen.

## What could realistically change

The aim is to make the state of work something that is kept, rather than something that is rediscovered.

- **Give each piece of work a record with a status.** A job, booking or case with a current status and a next step, in a shared tracker or job system, so that the state of the work is visible without reading every message about it.
- **End the day with a short note.** Two lines on each open item: where it stands and what happens next. Mellorca's guide on [designing a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) covers the principle.
- **Route changes to the record, not to people.** Customer changes captured against the booking, rather than in a personal chat, mean the morning view is already updated.
- **Produce the daily view automatically.** A simple report or dashboard that shows what changed since yesterday, generated from the systems rather than assembled by hand.
- **Protect the start of the day.** Fewer early meetings and messages can leave room for real work once the picture is clear.

## The first consequence, and the business outcome

The immediate change is a shorter, calmer start. The person arrives to a picture that already exists and can begin with the most important item rather than with a search.

The business outcome is fewer dropped callbacks and missed changes, quicker responses to customers, and less dependence on one person's memory of yesterday.

## The human dividend

The dividend is attention and time. The first, freshest part of the day can go on work that moves something forward. For some people the gain will be most noticeable in the morning; for others it will appear as less mental carrying through the day, because the open items are held by a system rather than by them.

## The trade-offs

- **Keeping records takes discipline.** A status that is not updated is worse than none, because people trust it.
- **Another tool can become another place to check.** If the tracker is added alongside the old channels rather than replacing them, reconstruction simply gains a fourth source.
- **Structure can feel like surveillance.** Visible statuses show who has done what, and that needs to be introduced as support rather than monitoring.
- **Some context resists capture.** Tone, relationships and judgement do not fit neatly in a status field.

## Why it matters

Every working day has a beginning, and in many businesses that beginning is spent rebuilding what was already known the day before. It is an invisible cost, rarely measured, because it looks like ordinary diligence.

Mellorca's reading is that it is better understood as a design gap. When the state of work is held by the system, people can start their day on the work itself. The same theme, seen from the evening end, runs through [the inbox that follows you home](/moments/the-inbox-that-follows-you-home/).
