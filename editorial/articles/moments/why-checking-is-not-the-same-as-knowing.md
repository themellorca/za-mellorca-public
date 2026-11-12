---
hub: moments
record_id: STORY-ANGLE-000043
slug: why-checking-is-not-the-same-as-knowing
title: Why Checking Is Not the Same as Knowing
description: The bank app, the sales dashboard, the orders page, the shared inbox, again. Checking feels like staying on top of things, but a snapshot is not knowledge. What all-day checking takes from owners, and what lets silence mean something.
lead: The bank app, the sales dashboard, the orders page, the shared inbox, again. Checking feels like staying on top of things, but a snapshot is not knowledge. What all-day checking takes from owners, and what lets silence mean something.
category: Time & Attention
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: An owner or manager repeatedly checks the bank balance, sales dashboard, order list and shared inbox throughout the day because no system tells them when something needs attention.
human_dividend: Attention and predictability: relief from background checking, and confidence that the business will signal when something needs the person, so silence can be trusted.
trade_off: Badly set thresholds miss problems or raise false alarms; trust in silence takes time to build; not everything reduces to a number; setting up alerts takes effort; alerts can intrude into private time.
epistemic_state: HYPOTHESISED: the attention and predictability effects of habitual checking are inferred from the mechanism, engineering monitoring practice and indicative interruption data, not from a South African study.
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
  - https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday | https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday
related:
  - Why Rest Days Start With a Status Check | /moments/why-rest-days-start-with-a-status-check/
  - The Time Tax of Re-Explaining the Same Thing | /moments/the-time-tax-of-re-explaining-the-same-thing/
  - Why “I'll Do It Tonight” Became the Default Plan | /moments/why-ill-do-it-tonight-became-the-default-plan/
summary: The bank app, the sales dashboard, the orders page, the shared inbox, again. Checking feels like staying on top of things, but a snapshot is not knowledge. What all-day checking takes from owners, and what lets silence mean something.
layout: plain
---
The banking app opens again. Nothing much has changed since an hour ago. The sales dashboard is refreshed, then the online store's order list, then the shared inbox for anything from the big customer. Each check takes seconds. Each one ends with a small sense of reassurance, and then, after a while, the urge to check again.

For many owners and managers, checking has become a background activity of the working day. It feels like staying on top of things. But checking and knowing are different. A check tells you what was true at the moment you looked. Knowing means being confident that you would find out if something needed you. This piece looks at the gap between the two, and what closes it.

## A snapshot is not an understanding

Every check produces a snapshot: the balance now, today's orders so far, the inbox at ten past eleven. On its own, a snapshot answers very little. Is that balance normal for a Tuesday? Are today's orders low, or is it just early? Is the silence from the big customer good news or a problem? To interpret the snapshot, the person has to hold the context in their head, and compare it against what they remember from last week.

That is why checking rarely produces lasting confidence. The reassurance is real but short-lived, because the snapshot goes out of date almost immediately, and the question it answered comes back. So the check is repeated.

Mellorca has described the operational form of this in [why staff keep checking the same things over and over](/patterns/why-staff-keep-checking-the-same-things-over-and-over/). This piece is about the owner's or manager's version, and what it takes from them.

## What engineers learned about watching screens

The people who run large technical systems faced this problem long ago. Google's site reliability engineering book, in its chapter on monitoring distributed systems, argues against arrangements that require someone to stare at a screen watching for problems. Its guidance is that alerts should be reserved for conditions that are urgent and actionable, that monitoring should focus on symptoms people actually experience, and that humans should be interrupted only when their judgement is needed.

A business is not a data centre, and the analogy should not be pushed too far. But the principle travels well. If the only way to know something has gone wrong is for a person to look, the person will keep looking. The system has handed its job of watching to a human being.

## An illustrative week

Consider an illustrative case: the owner of a Johannesburg wholesale business supplying salons, with twelve staff and an online ordering portal. This is a hypothetical scenario. The owner checks the bank balance several times a day, because a large customer sometimes pays late and payroll is a week away. They refresh the orders page between meetings, because a quiet morning once turned out to mean the portal was down. They scan the shared inbox, because a complaint was once missed for three days.

Each habit was learned from a real problem. None of them is unreasonable. Together, though, they mean the owner is never quite finished checking, and never quite sure. When they step away, for an afternoon or a weekend, the checks follow them on the phone.

Mellorca has explored a related routine in [the morning check that overnight jobs ran](/moments/the-morning-check-that-overnight-jobs-ran/). The difference here is that the checking is not tied to one moment. It runs all day.

## The human tax: attention and predictability

The **attention** tax is the obvious one. Each check is short, but the need to check sits in the background between them. Microsoft's 2025 Work Trend Index found that the most-interrupted Microsoft 365 users were interrupted every two minutes during core hours by a meeting, email or notification. Self-initiated checks are a different kind of interruption, but they add to the same load.

The **predictability** tax is subtler. Checking does not make the day more predictable. It makes the owner a sensor. They know only what they happened to look at, and only when they looked. If something goes wrong between checks, they find out late. If nothing goes wrong, they cannot be sure of that either.

We should be careful about what is not being claimed. Some people find a quick look at the numbers satisfying, and for them it may be a source of interest rather than strain. The argument is narrower: when checking is the only way to find out, it stops being a choice.

## What turns checking into knowing

1. **Write down what normal looks like.** Expected daily order volume, the balance needed before payroll, the usual response time to the main customer. Without a definition of normal, no system and no person can recognise abnormal.
2. **Let the system watch for exceptions.** Many tools can send an alert when a number crosses a threshold. Microsoft's Power BI documentation, for example, describes data alerts on dashboard cards, gauges and KPIs that notify you when a value goes above or below a limit you set.
3. **Make sure the data is fresh.** The same Power BI documentation notes that alerts only work on refreshed data. An alert on stale numbers produces confident silence that means nothing. Mellorca's discovery piece on [dashboards that refresh at different times without anyone knowing](/discovery/why-dashboards-refresh-at-different-times-without-anyone-knowing/) covers this risk.
4. **Alert on what matters, not on everything.** Too many alerts recreate the original problem in a new form. Each one should lead to a clear action.
5. **Replace constant checking with a rhythm.** A short daily or weekly summary, delivered at a set time, gives a fuller picture than twenty snapshots.

Mellorca's insight on [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/) makes a related point: more places to look can increase checking rather than reduce it.

## What changes first, and the business outcome

The first change is that silence starts to mean something. If no alert has arrived, the balance is above the payroll threshold, orders are within the expected range and the main customer's messages have been answered. The owner can stop looking without losing track.

For the business, problems are found earlier, because the system watches continuously rather than when someone remembers to look. The owner's attention moves from monitoring to deciding, which is where it is most valuable.

## The human dividend

The dividends are **attention** and **predictability**. Attention, because the background need to check eases, and the time between checks becomes time for something else. Predictability, because the owner can trust that they will hear when something needs them, rather than hoping they looked at the right moment.

That trust is the real change. It is the difference between a day spent half-watching and a day in which one can be fully somewhere else, confident that the business will speak up if it needs to.

## The trade-offs

- **Alerts can be wrong.** A threshold set badly will either miss real problems or raise false alarms. Thresholds need reviewing as the business changes.
- **Trusting silence takes time.** Habits learned from real failures do not disappear because an alert has been configured. Confidence is earned over weeks.
- **Some things cannot be reduced to a number.** A customer's tone, a supplier's hesitation and a team's mood still need a person's judgement.
- **Setting up alerts is work.** Defining normal, connecting data and testing alerts takes time that a busy owner may not have without help.
- **Alerts can follow you everywhere.** An alert on a phone at night is still an interruption. Deciding when alerts should reach a person matters as much as what triggers them.

## Why it matters

Checking feels like control, but it often reflects the absence of it. When a system can be trusted to say when something is wrong, the person no longer has to stand guard. What comes back is not only time, but the ability to look away without worry.
