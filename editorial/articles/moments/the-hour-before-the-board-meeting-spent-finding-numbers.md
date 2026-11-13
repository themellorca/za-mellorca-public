---
hub: moments
record_id: STORY-ANGLE-000032
slug: the-hour-before-the-board-meeting-spent-finding-numbers
title: The hour before the board meeting spent finding numbers
description: The meeting starts at ten and someone is still pasting figures from three systems into slides. What that scramble costs, and what readies numbers early.
lead: The meeting starts at ten. At nine, someone is still pulling figures from three systems and pasting them into slides. What that last-minute scramble takes from the person doing it, and what lets the numbers be ready before anyone asks.
category: Time & Attention
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: A financial manager spends the hour before a board or management meeting exporting figures from several systems, reconciling them and pasting them into the pack, which goes out minutes before the meeting starts.
human_dividend: Time and predictability: a standard pack refreshed and delivered on schedule, so preparation becomes checking and commentary and the hour before the meeting can be spent thinking about the figures.
trade_off: A fixed pack can go stale; scheduled refreshes and subscriptions fail and need watching; business intelligence licences cost money; directors lose some flexibility in what they ask for and when.
epistemic_state: HYPOTHESISED: the link between hand-built packs from scattered systems and a last-minute scramble is reasoned from data quality guidance on timeliness and from how scheduled reporting tools work; it has not been measured in South African businesses.
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Configure scheduled refresh - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
  - Email Subscriptions for Reports and Dashboards in the Power BI Service - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe
related:
  - What a reliable handover gives back on a Friday afternoon | /moments/what-a-reliable-handover-gives-back-on-a-friday-afternoon/
  - The quiet cost of always being reachable | /moments/the-quiet-cost-of-always-being-reachable/
  - Why the commute has become unpaid triage time | /moments/why-the-commute-has-become-unpaid-triage-time/
  - How to stop building management reports by hand | /insights/how-to-replace-the-monthly-spreadsheet-assembly-behind-management-reports/
summary: The meeting starts at ten. At nine, someone is still pulling figures from three systems and pasting them into slides. What that last-minute scramble takes from the person doing it, and what lets the numbers be ready before anyone asks.
layout: plain
---
The board meeting, or the monthly management meeting, or the quarterly session with the investors, starts at ten. At nine, someone is still assembling the numbers.

They are exporting sales figures from one system, debtors from another, stock from a third. They are pasting them into a spreadsheet, checking that the totals look right, and copying the results into a slide or a document. Somewhere in the middle, they notice a figure that does not match last month's, and spend twenty minutes finding out why. The pack goes out, or gets printed, at 09:55.

The meeting itself may go perfectly well. The hour before it is the subject of this piece.

## A different problem from disagreeing numbers

A published Mellorca Moment, [when nobody can say which number is true](/moments/when-nobody-can-say-which-number-is-true/), looked at what happens when two figures for the same thing collide in a meeting, and at the confidence it costs the people presenting them. That is a problem of definitions and authority.

This piece is about something earlier and more mundane: the work of finding and assembling numbers that may be perfectly consistent, but that are not ready when they are needed. Even a business with clean, agreed definitions can have a scramble before every meeting, if the figures live in several places and have to be gathered by hand each time.

## Why the numbers are never quite ready

The pattern usually has a few causes working together.

- **The pack is rebuilt rather than refreshed.** Each meeting's figures are assembled from scratch, rather than produced by a report that already exists and updates itself.
- **The sources are scattered.** Sales, finance, stock and operations data live in different systems, each with its own export.
- **The content of the pack is not fixed.** Board members or managers ask for slightly different figures each time, so the work cannot settle into a routine.
- **The timetable is backwards.** Month-end processing finishes close to the meeting date, leaving little time between final figures and presentation.

The UK [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) is useful here because it treats timeliness as a quality in its own right. It describes data quality as fitness for purpose, and includes among its dimensions whether data is available at a time that suits its intended use. It also encourages organisations to document metadata, so that people understand what a figure is and where it came from. By that standard, a correct number that only becomes available at 09:55 is not fully fit for a meeting at 10:00.

## An illustrative case

Take an illustrative example, not a real business: a Johannesburg logistics company with about seventy staff and a board of four, including two outside investors. The board meets monthly.

In this scenario, the financial manager prepares the board pack. Revenue comes from the billing system, fleet utilisation from a tracking platform, debtors from the accounting package, and headcount from the payroll system. Each month the board asks a couple of new questions, so the pack changes shape.

The financial manager starts the pack once month-end is closed, which is usually two days before the meeting. Most months, the last hour before the meeting is spent finishing it. Some months, a director asks a follow-up question by email the night before, and the evening goes on that.

The figures are almost always right. Getting them there is the problem.

## The human tax

The first tax is **time**: the hours, often outside normal working time, that go into rebuilding a pack that could largely build itself.

The second is **cognitive load**. Assembling numbers under time pressure means holding several sources, several definitions and several deadlines in mind at once. The person then walks into a meeting where they may need to explain those numbers clearly, having just spent an hour in the weeds.

It would be speculative to describe how any individual feels in that hour. It is reasonable to say that walking into a meeting straight from a scramble leaves less room for the thinking the meeting is supposed to support.

## What could realistically change

The changes are about deciding what the pack contains, and then producing it the same way every time.

- **Agree a standard pack.** A fixed set of figures and charts that appears every meeting, with a separate section for one-off questions. This alone turns a creative exercise into a routine one.
- **Build the standard pack once, as a report.** Business intelligence tools can connect to the underlying systems and refresh on a schedule. Microsoft's documentation for [Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe), for example, describes [scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh) of up to eight times a day on a Pro licence, and notes that refresh schedules are switched off after repeated failures, so someone must watch them.
- **Deliver it automatically.** Power BI's documentation also describes email subscriptions that send a snapshot or attachment of a report on a set schedule, including on the last day of the month. Subscribing other people requires a paid licence, which is a real cost to weigh.
- **Move the timetable.** Agree a cut-off for figures that leaves a working day between final numbers and the meeting, and send the pack in advance so questions arrive before the meeting rather than the night before.
- **Label the figures.** Each figure in the pack should say where it comes from and when it was extracted. That makes questions quicker to answer, and it follows the framework's advice on documenting metadata.

None of this requires a particular product. A well-built spreadsheet fed by consistent exports can do much of the same job. The key change is that the pack becomes something maintained, not something rebuilt. The wider cost of slow management information is covered in [the hidden cost of waiting for management information](/patterns/the-hidden-cost-of-waiting-for-management-information/), and the multi-system effort behind single figures in [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/).

## What changes first, and for the business

The first change is that most of the pack exists before anyone starts preparing for the meeting. The work in the days before becomes checking and commentary rather than assembly.

For the business, board members get information earlier and more consistently, meetings spend more time on decisions and less on clarification, and the pack no longer depends on one person's availability in the hour before. A caution from Mellorca's guidance on [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/) applies: an automated pack is only useful if it contains the right figures.

## The human dividend

The dividend is **time and predictability**. The person who prepares the pack knows when the work happens and how long it takes. The hour before the meeting can be spent reading the figures, thinking about what they mean, and preparing to discuss them, or simply having a cup of coffee.

That shift matters because the value this person brings to a board meeting is rarely the act of finding numbers. It is their understanding of what the numbers say. A predictable pack gives that understanding room to show.

## The trade-offs

- **A standard pack can become stale.** If the fixed figures are never reviewed, the board may receive the same charts long after they stopped being the right ones.
- **Automation needs care.** Scheduled refreshes fail, data sources change and subscriptions lapse. A maintained pack is less work than a rebuilt one, but it is not no work.
- **Licences cost money.** Business intelligence tools and the licences needed to share reports are a real expense for a small business.
- **Less flexibility for directors.** Asking board members to send questions in advance, or to accept a standard format, constrains how they engage. Some will resist.

## Why it matters

Board and management meetings are where a business makes some of its most important decisions. The quality of those decisions depends partly on the information, and partly on the state of mind of the people presenting it.

Mellorca's reading is that the scramble before a meeting is a symptom of a reporting process that has never been designed, only repeated. Designing it gives back an hour that was never really about finding numbers. It was about being ready to talk about them.
