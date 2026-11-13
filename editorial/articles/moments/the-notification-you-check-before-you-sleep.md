---
hub: moments
record_id: STORY-ANGLE-000004
slug: the-notification-you-check-before-you-sleep
title: The notification you check before you sleep
description: The last glance at the phone before sleep is often called a habit. Sometimes it is a monitoring job nobody designed, done by the one person who'd notice.
lead: The last glance at the phone before sleep is often described as a habit. Sometimes it is a monitoring job that nobody designed, done by the one person who would notice if something went wrong.
category: Time & Attention
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: An owner or employee checks work notifications in bed before sleep because no system or colleague is designated to notice failures, stalled integrations or urgent customer messages overnight.
human_dividend: Attention and presence: designed alert routing, self-reporting systems and an explicit overnight owner let the person set down the background job of watching, so the evening ends when they choose.
trade_off: Badly designed monitoring can multiply noise; on-call rotas move the tax to whoever holds them; trusting a system takes time for owners who have caught real problems by checking; night-operating businesses need fair allocation rather than silence.
epistemic_state: HYPOTHESISED for the human-monitoring mechanism and its personal effects; OBSERVED for the cited Microsoft Work Trend Index figures, Sleep Foundation summary and WHO/ILO guidance.
sources:
  - https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday | https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday
  - How Does Blue Light From Electronic Devices Affect Sleep? | https://www.sleepfoundation.org/how-sleep-works/how-electronics-affect-sleep
  - Crucial changes needed to protect workers’ health while teleworking | https://www.who.int/news/item/02-02-2022-crucial-changes-needed-to-protect-workers-health-while-teleworking
related:
  - The lunch break eaten by approval requests | /moments/the-lunch-break-eaten-by-approval-requests/
  - The report someone rebuilds by hand every Friday | /moments/the-report-someone-rebuilds-by-hand-every-friday/
  - When month-end swallows the whole week | /moments/when-month-end-swallows-the-whole-week/
  - The sleep lost over a system nobody else understands | /moments/the-sleep-lost-over-a-system-only-one-person-understands/
summary: The last glance at the phone before sleep is often described as a habit. Sometimes it is a monitoring job that nobody designed, done by the one person who would notice if something went wrong.
layout: plain
---
The lights are off. The phone is on the bedside table. And before sleep there is one last look.

Not at anything in particular. Just a check that nothing has gone wrong: no client complaint, no failed order, no message from the night shift, no system alert. Usually there is nothing. Occasionally there is something, and that occasional something is enough to make the check feel necessary every night.

This is often discussed as a personal habit, something to fix with willpower or a rule about phones in the bedroom. This piece suggests a different reading. **For some people, the last glance before sleep is a monitoring job that their business never formally assigned.**

## How common is late-evening checking?

There is good public evidence that work extends well into the evening for many knowledge workers. Microsoft's June 2025 [Work Trend Index](https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday) report on the infinite workday, based on aggregated and anonymised Microsoft 365 signals and a survey of 31,000 workers in 31 markets, found that by 10pm nearly 29% of active workers were back in their inboxes. It also found that the average employee sends or receives more than 50 messages outside core business hours.

Those figures are global and describe Microsoft's user base, so they are context rather than a South African measurement. But they confirm that the evening check is not a rare quirk.

The health question deserves care. The Sleep Foundation summarises research suggesting that evening screen use can delay sleep, partly because blue light can suppress melatonin, and partly because engaging content keeps the mind alert at a time when it should be winding down. A late work notification combines both: a screen, and content that may demand a response. That does not mean one glance causes poor sleep. It means the habit is worth examining rather than dismissing.

## Why people check: a hypothesis

The record behind this story is classified as hypothesised. The mechanism proposed here is testable, but not proven.

In many small and mid-sized businesses, there is no designed way for problems to find the right person. Systems fail quietly. Automations stop without telling anyone. Customer messages arrive in channels that only one person watches. There is no rota, no escalation rule and no distinction between an alert that matters and a notification that does not.

In that environment, a conscientious person fills the gap themselves. They become the alerting system. And because the alerting system is a person, it has to be checked, including at night.

Mellorca has written about the operational side of this in [who watches the automations](/insights/who-watches-the-automations/) and [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/). The human side is the bedside table.

## An illustrative evening

Consider an illustrative example: the owner of a Bloemfontein online homeware retailer with twelve staff, selling through its own website and a marketplace.

- Orders are synchronised to the warehouse system by an integration that occasionally stops without warning.
- Payment failures, marketplace messages and stock warnings all arrive as email or app notifications to the owner's phone, mixed with newsletters and social media alerts.
- Nobody else has been given responsibility for spotting a stalled order feed; the owner noticed it once, late on a Sunday, and has checked ever since.

In this scenario, the nightly check is entirely rational. It has caught real problems. But it exists because the business has delegated monitoring to the owner's attention, without deciding to.

## The human tax

The record names **attention** and **energy** as the taxes.

Attention, because a person who is responsible for noticing problems never fully puts that responsibility down. Part of their mind stays on standby. Energy, because each check carries a small cost, and an occasional bad discovery late at night carries a larger one.

It would be wrong to claim every reader feels this way. Some people check before sleep and feel nothing in particular. Some find it reassuring. But for those who would rather not check, and do anyway, the question is what would make it safe to stop.

## What could realistically change

The interventions are about designing who notices what, and when.

1. **Separate alerts from noise.** Most notifications are information, not emergencies. Routing newsletters, routine confirmations and social alerts away from the phone, or batching them, leaves fewer things to scan.
2. **Define what genuinely cannot wait until morning.** In many businesses, very few things truly need attention at 23:00. Writing that list down is a useful exercise; Mellorca's guide to [separating urgent problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/) may help.
3. **Make systems report their own failures.** An integration that alerts when it stops is better than a person checking whether it has stopped.
4. **Assign responsibility explicitly.** If something does need overnight attention, a named person or rota should hold it, ideally with a defined way to reach them, so everyone else can stand down.
5. **Use device features deliberately.** Scheduled quiet hours that let only defined escalations through can work well once escalation has been designed.

The WHO and ILO guidance on healthy telework recommends a right to disconnect and common systems for signalling availability. The point for small businesses is practical: disconnection is only realistic if something else is watching.

## What changes first, and the business outcome

The first change is that the phone shows less, and what it does show is more likely to matter. The person who had been the default alarm can rely on a system or a colleague to raise the important things.

The business outcome is better incident handling. Failures are detected by design rather than by luck, often sooner, and the response does not depend on one person's evening habits. Interruptions during the working day may fall too, since the Microsoft research found employees interrupted roughly every two minutes during core hours, a problem explored in [the cost of notifications and context switching](/impact/pain-employees-interrupted-messages-notifications-context-switching/).

## The human dividend

The dividends are **attention** and **presence**.

Attention, because the background task of watching for problems is held by a system or a rota rather than by one person's mind. Presence, because the last part of the evening can belong to whatever the person chooses: reading, conversation, rest, or nothing at all.

If the person still chooses to glance at their phone, that is their decision. The dividend is that the glance is no longer the only thing standing between the business and an unnoticed failure.

## The trade-offs

- **Alerting can multiply noise.** Poorly designed monitoring produces more notifications, not fewer, and can make the problem worse.
- **Someone still holds the pager.** A rota spreads the load, but whoever is on call carries the same tax for that period, and should be recognised for it.
- **Letting go of checking requires trust.** For an owner who has caught real problems by checking, trusting a system takes time and evidence.
- **Some businesses genuinely operate at night.** In those, the goal is not silence but clear, fair allocation of overnight attention.

## Why it matters

The minutes before sleep are among the most private in any day. When work reaches into them, it is rarely because of a single message. It is because the business has quietly made one person responsible for noticing everything.

Mellorca's interpretation is that late-night checking is often a design gap, not a character flaw. Decide what needs watching, let systems report their own failures, and give overnight responsibility a name. What returns is attention that can finally be set down, and an evening that ends when the person, not the system, decides.
