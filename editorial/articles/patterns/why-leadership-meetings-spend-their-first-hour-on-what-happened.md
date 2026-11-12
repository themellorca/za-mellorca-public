---
hub: patterns
record_id: PAT-477
slug: why-leadership-meetings-spend-their-first-hour-on-what-happened
title: When Leadership Meetings Are Used to Reconstruct What Happened
description: If the first half of the executive meeting is spent establishing facts, decisions can only be made at meeting frequency.
lead: If the first half of the executive meeting is spent establishing facts, decisions can only be made at meeting frequency.
category: Executive Operating Model, Decisions & Resilience
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Executive Operating Model, Decisions & Resilience
pattern_family: Executive Operating Model, Decisions & Resilience
observable_condition: Leadership meetings spend their first stretch establishing what happened because no shared current view exists beforehand.
primary_identification: Operational-visibility and shared-reporting gap
commercial_value_dimensions: speed, productivity, risk, scalability
sources:
  - Get started with goals in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-goals-introduction
  - Email Subscriptions for Reports and Dashboards in the Power BI Service - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe
  - The Kanban Guide - May 2025 (latest) - Kanban Guides | https://kanbanguides.org/english/
related:
  - The Signs That Your Business Needs an Operating System, Not Another App | /patterns/signs-your-business-needs-an-operating-system-not-another-app/
  - When Every Department Optimizes Its Part but the Whole Process Gets Worse | /patterns/when-every-department-optimizes-its-part-but-the-whole-process-gets-worse/
  - When AI Agents Can Act but Governance Cannot See Them | /patterns/when-ai-agents-can-act-but-governance-cannot-see-them/
summary: If the first half of the executive meeting is spent establishing facts, decisions can only be made at meeting frequency.
layout: plain
---
The Monday leadership meeting is scheduled for ninety minutes. By the time the sales lead has explained why the figures on her slide differ from the finance pack, the operations manager has walked through last week's delays from memory, and someone has gone to find out whether a particular order actually shipped, forty minutes have gone. The decisions, when they come, are squeezed into the remainder.

Everyone in the room is capable and prepared. The meeting is still doing the wrong job.

## The condition: the meeting is where the facts are assembled

A leadership meeting should be a place to choose between options. In many businesses it has quietly become the place where the facts are first put together. Each leader arrives with their own version of the week, gathered from their own team and their own system. The first part of the meeting is spent reconciling those versions. The second part is spent agreeing what the reconciled version means. Decisions get whatever time is left.

Recognisable signs include:

- Agenda items that begin with "what happened with…" rather than "should we…".
- Updates delivered verbally, with different levels of detail for different departments.
- Action points that say "find out" or "confirm" rather than "decide" or "approve".
- A habit of leaving the meeting with the same questions that were on last week's list.
- Pre-meeting scrambles, where managers ask their teams for numbers the night before.

## The realisation: you are paying senior time for data entry

Leadership time is the most expensive attention in the business. When it is used to reconstruct what happened, the business is effectively paying its most senior people to act as a human integration layer, merging partial accounts into one. This is not a sign of poor leadership. It is a sign that no shared, current view of the business exists for the meeting to start from.

That has a second, quieter effect. If the facts are only established in the meeting, decisions can only be made at meeting frequency. A problem that appeared on Tuesday waits until the following Monday to be confirmed, and until the Monday after to be decided. The business becomes as responsive as its meeting calendar.

## Identification: a decision-support gap, not a meeting problem

It is tempting to treat this as a meeting-hygiene issue: tighter agendas, shorter updates, a better chair. Those help at the margin. The deeper class of issue is an operational-visibility and shared-reporting problem. The visible symptom is long, unproductive meetings. The common assumption is that people are poorly prepared. The structural cause is that preparation cannot be done in advance by looking at a single source, because there is no single source.

## Diagnosis: why each leader brings a different version

An illustrative example, not a client case. A mid-sized building-supplies business has a weekly executive meeting with five attendees. Sales keeps a pipeline in a CRM, operations tracks deliveries in a spreadsheet, finance reports from the accounting package, and the warehouse manager reports from a stock system. Each person is accurate about their own area. None of them can say, from a shared source, how many confirmed orders are waiting on stock, because that needs two systems to be read together.

The mechanisms underneath are usually these:

- **Information:** definitions differ. "Late" can mean past the promised date, past the requested date or past the standard lead time, depending on who is speaking.
- **Systems:** each department's data sits in its own tool, and no one has the job of keeping a combined view current.
- **Process:** status is communicated by being asked for, which means it flows to the meeting at the meeting's pace.
- **People:** managers are rewarded for knowing their area, which makes cross-area gaps nobody's responsibility.

## The commercial value at stake

The value that depends on solving this is execution speed, strategic capacity and the quality of decisions. Speed, because a decision that can be taken on Tuesday is worth more than the same decision on the following Monday. Capacity, because senior leaders who stop assembling data can spend their time on customers, suppliers and strategy. Quality, because decisions made on a shared, agreed view are less likely to be revisited when someone discovers a conflicting figure.

There is also a risk dimension. Problems that surface late are usually more expensive to fix, and a business that learns about them in a meeting is by definition learning about them after the fact. We deliberately do not put a figure on this; the value will differ widely, and an honest estimate comes from looking at your own recent decisions. Our related articles on [why the CEO is still chasing operational updates](/patterns/why-is-the-ceo-still-chasing-operational-updates/) and [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/) look at the same condition from other angles.

## Possibility: arrive with the facts already agreed

The alternative is a meeting where the status is already known and the time is used for exceptions and choices. That requires a small number of shared measures, defined once, maintained from the systems where the work happens, and visible before the meeting rather than during it.

Several parts of the modern reporting toolset are designed for this. Microsoft's documentation on Power BI scorecards describes tracking goals against key business objectives in a single view, promoting accountability, alignment and visibility. It also draws a useful distinction between goals connected to data, which update as often as the underlying data refreshes, and manual goals, which only change when someone performs a check-in. Its documentation on email subscriptions describes sending a snapshot and link to a report or dashboard to chosen recipients on a schedule, including after the data has refreshed. Taken together, these describe the practical mechanics of a pre-read: the same current view, delivered to everyone before they walk in.

Flow measures from the Kanban Guide offer a complementary idea. The guide describes work in progress, throughput, work item age and cycle time as measures of how a flow of work is performing. Work item age, how long an unfinished item has been underway, is exactly the kind of figure that lets a leadership meeting spend its time on the oldest stuck items instead of asking what happened to them.

## Intervention: change what the meeting is for

1. **Agree the few measures that matter.** Five to eight, each with one definition and one owner. Resist adding more until these are trusted.
2. **Connect them to the source.** A measure that depends on someone typing the number in each week is still reconstruction, only earlier. Where a manual entry is unavoidable, name the person and the time it is due.
3. **Circulate before, not during.** Send the shared view in advance and make a simple rule that the meeting starts from it.
4. **Restructure the agenda around exceptions.** Items that are on track are noted and skipped. Time goes to what is late, blocked or outside tolerance.
5. **Record decisions where the work is tracked.** If a decision is only in minutes, it will need to be reconstructed in the next meeting too.

The order matters. Starting with a dashboard before the definitions are agreed produces a prettier version of the same argument. Our article on [how to decide what should be on an operations dashboard](/insights/how-to-decide-what-should-be-on-an-operations-dashboard/) covers how to choose.

## Practical diagnostic questions

- In your last leadership meeting, how long passed before the first decision was made?
- How many agenda items were about establishing facts rather than choosing a course of action?
- Do two people in the room ever quote different figures for the same thing?
- Could the meeting have started from a document that was sent the day before?
- How many action points from last month are still "find out"?

## The bottom line

If leadership meetings are used to reconstruct what happened, the business is deciding at the speed of its slowest report. Moving the fact-finding out of the room and into a shared, current view makes the meeting shorter, the decisions faster and the senior team's time more valuable. The change is less about technology than about deciding that the facts should be ready before the conversation begins.
