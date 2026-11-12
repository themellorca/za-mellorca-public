---
hub: moments
record_id: STORY-ANGLE-000213
slug: when-constant-alerts-become-background-anxiety
title: When Constant Alerts Become Background Anxiety
description: Low stock, failed sync, backup warning, payment declined. When every system can send an alert and most of them do not matter, the person receiving them can no longer tell which ones do. What a quieter, clearer set of signals gives back.
lead: Low stock, failed sync, backup warning, payment declined. When every system can send an alert and most of them do not matter, the person receiving them can no longer tell which ones do. What a quieter, clearer set of signals gives back.
category: Health, Safety & Wellbeing
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Health, Safety & Wellbeing
thematic_domain: health_safety_and_wellbeing
human_situation: An office manager or owner receives a steady stream of automated alerts from accounting, stock, backup, website and payment systems, most of which need no action, and cannot easily tell which ones matter.
human_dividend: Attention and predictability: fewer, clearer alerts that reach the right person, so that quiet means things are working and an alert means something needs doing.
trade_off: Reducing alerts risks missing a real problem; tuning alerts takes time and knowledge; someone must own each alert that remains; some people find reassurance in seeing everything, even when it is noise.
epistemic_state: HYPOTHESISED: the link between unfiltered alerts and a background sense of unease is inferred from engineering guidance on alert fatigue and interruption telemetry, not measured among South African small-business staff.
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Alert Fatigue: What It Is and How to Prevent It - Datadog | https://www.datadoghq.com/blog/best-practices-to-prevent-alert-fatigue/
  - https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday | https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday
related:
  - The Stress of Not Knowing if the Backup Worked | /moments/the-stress-of-not-knowing-if-the-backup-worked/
  - The Weekend That Exists Only on Paper | /moments/the-weekend-that-exists-only-on-paper/
  - The Employee Who Needs Permission for Every Small Fix | /moments/the-employee-who-needs-permission-for-every-small-fix/
summary: Low stock, failed sync, backup warning, payment declined. When every system can send an alert and most of them do not matter, the person receiving them can no longer tell which ones do. What a quieter, clearer set of signals gives back.
layout: plain
---
The office manager's phone buzzes. Stock of an item has fallen below its reorder level. It buzzes again: the website contact form received a message. Then the accounting system reports that a bank feed did not refresh. Then the backup service sends its nightly summary, which says there were warnings. Then a payment gateway reports a declined card.

By mid-morning there are twenty such messages. Perhaps one of them matters. She cannot tell which without opening each one, and she cannot ignore them in case the one that matters is among them.

This piece is about that experience: not one urgent alarm, but a steady stream of small automated signals, most of them harmless, arriving all day. Over time the stream can turn into something that is hard to name. Not a crisis, but a low hum of unease.

## What engineers learned about alerts

The people who run large online services have thought carefully about this problem, because their systems can generate enormous numbers of alerts. Google's site reliability engineering guidance on monitoring makes a blunt point: interrupting a person is an expensive use of their time. It argues that every alert that interrupts someone should be urgent, should require action, and should require human judgement. When alerts are noisy, it warns, people begin to second-guess, skim or ignore them, and real problems can be missed.

Datadog, a monitoring vendor, describes the same effect as alert fatigue: when too many alerts are generated, or alerts are irrelevant or unhelpful, people lose the ability to see the critical ones. It identifies predictable alerts that fire on a regular pattern, and alerts that flip repeatedly between normal and alarm, as common sources of noise.

These sources were written for engineering teams running software at scale, not for a small business's office manager. But the human mechanism is the same. A signal that is usually meaningless teaches the person who receives it to stop trusting signals. Microsoft's Work Trend Index analysis of anonymised Microsoft 365 data estimates that workers in its data are interrupted about every two minutes during core hours by meetings, emails or chats, before any automated alerts are added.

## How the stream builds up

Consider an illustrative case: an East London retail business with three shops and an online store, run with a small office team. Over five years it added a cloud accounting system, an inventory app, an online shop, a payment gateway, a backup service and a website monitoring tool. Each one, during set-up, asked where to send notifications. Each time, the answer was the office manager's email address, because she was the one setting it up.

The causes are ordinary:

- **Defaults left on.** Many systems notify about everything unless told otherwise, and nobody revisits the settings after set-up.
- **One person receives everything.** Alerts that belong to stock, finance or IT all go to the same inbox, a problem described in [why integration failures should not route to personal inboxes](/discovery/why-integration-failures-should-not-route-to-personal-inboxes/).
- **No distinction between information and action.** A routine summary and a genuine failure arrive in the same form, with the same urgency.
- **No clear meaning of silence.** Because quiet does not reliably mean all is well, the person keeps checking.

None of these choices was wrong at the time. Each system's notifications were useful during the first weeks, when someone needed to know it was working. The problem is cumulative. Six sensible defaults, never revisited, add up to a stream that no single system designer intended and no single person in the business ever chose. The office manager did not ask to become the receiving point for every system's worries. She simply happened to be the person filling in the set-up screens.

## The human tax: attention and wellbeing

The attention cost is the clearest. Each alert pulls focus away from the work in hand, and the cost of interruption is not only the seconds spent reading it but the time taken to return to what was being done. The broader cost of interruptions is covered in [the cost of interruptions, notifications and context switching](/impact/pain-employees-interrupted-messages-notifications-context-switching/).

The wellbeing cost is harder to establish and should be stated carefully. Mellorca has no study of how South African office managers experience alert streams. It is reasonable to suggest, though, that being the person responsible for a stream of signals you cannot fully interpret creates a particular kind of strain. Every buzz might be the important one. For some people this becomes a background sense that something, somewhere, might be going wrong. Others may barely notice it. The experience will differ, and it would be wrong to claim more than that.

What is clearer is the loss of predictability. When alerts are mostly noise, the person cannot predict whether a given day will be calm. Neither silence nor sound can be trusted.

## What could change

The principles from engineering guidance translate well to small businesses.

1. **List every alert source.** Write down which systems send notifications, to whom, and how often. Most businesses have never seen this list.
2. **Keep only alerts that need action.** If nobody would do anything differently after reading it, it is not an alert. It can become a daily or weekly summary, or be switched off.
3. **Route alerts to the person who can act.** Stock alerts to whoever orders stock; payment alerts to finance; backup failures to whoever looks after IT.
4. **Separate failure from information.** A failed backup deserves an alert. A successful one does not. Mellorca's guide on [how to separate urgent systems problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/) sets out how to tell them apart.
5. **Group and delay where sensible.** As the monitoring guidance suggests, grouping related alerts and waiting to confirm that a problem persists reduces noise from brief blips.

In the illustrative retailer, this might reduce twenty messages a day to two or three, each of which means something and each of which reaches the person who can deal with it.

## Trade-offs

- **Missing something real.** Every alert that is switched off is a small bet that it was not needed. The aim is fewer, better alerts, not silence.
- **Tuning takes effort.** Deciding what matters requires knowledge of each system and some trial and error.
- **Ownership must be real.** Routing an alert to someone only helps if they know it is theirs and act on it. Otherwise the problem has simply moved.
- **Some people prefer to see everything.** For some, a full stream is reassuring. Changes should be agreed with the people who receive the alerts, not imposed.

The overnight version of this problem, where one person monitors systems before sleep because nobody else will, is discussed in [the notification you check before you sleep](/moments/the-notification-you-check-before-you-sleep/).

## Why it matters

For the business, fewer and clearer alerts mean that real problems are noticed sooner and handled by the right person. For the person who receives them, the change is about being able to trust the quiet. When an alert arrives, it means something. When none arrives, things are working.

That is the dividend: attention returned to the work in hand, and a day that is more predictable because the signals around it are honest. It is a modest change in configuration. For the person whose phone has been buzzing all day, it may feel like much more.
