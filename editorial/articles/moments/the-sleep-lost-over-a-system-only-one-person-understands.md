---
hub: moments
record_id: STORY-ANGLE-000215
slug: the-sleep-lost-over-a-system-only-one-person-understands
title: The sleep lost over a system nobody else understands
description: When one person is the only one who understands a critical system, the worry follows them to bed. Why that is rational, and how to share the load.
lead: When one person is the only one who understands a critical system, the worry follows them to bed. Why that is rational, and how to share the load.
category: Health, Safety and Wellbeing
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Health, Safety and Wellbeing
thematic_domain: health_safety_and_wellbeing
human_situation: A person who alone understands a critical business system lies awake worrying about failures that nobody else could handle, and carries the vigilance every day.
human_dividend: Presence and predictability: evenings and nights not shadowed by one-person systems, because recovery steps are written, tested and shared.
trade_off: Documentation takes scarce time; sharing knowledge loosens control; some failure risk remains; fair out-of-hours cover costs money and needs enough people.
epistemic_state: HYPOTHESISED: reasoned from general sleep and workload research and operational logic, not from a study of South African owners; the wholesaler example is illustrative and this is not medical advice.
sources:
  - What Are Sleep Deprivation and Deficiency? | https://www.nhlbi.nih.gov/health/sleep-deprivation
  - About Sleep | https://www.cdc.gov/sleep/about/index.html
  - Mental health at work | https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
related:
  - The stress of not knowing if the backup worked | /moments/the-stress-of-not-knowing-if-the-backup-worked/
  - When constant alerts become background anxiety | /moments/when-constant-alerts-become-background-anxiety/
  - The owner who can't decide without the spreadsheet wizard | /moments/the-owner-who-cant-decide-without-the-spreadsheet-wizard/
summary: When one person is the only one who understands a critical system, the worry follows them to bed. Why that is rational, and how to share the load.
layout: plain
---
It is eleven at night. The day is done, the lights are off, and a thought arrives uninvited: did the overnight backup run? Is the payroll file still waiting for an approval that only one person can give? Will the supplier portal, which nobody else has ever logged into, lock the account again tomorrow? The owner lies awake, running through a system that exists mostly in their head.

This piece looks at the sleep that gets lost to a system nobody else understands: why the worry is rational rather than neurotic, what it costs, and what a business can do so that the person who built something is not the only one who can sleep soundly beside it. It is a hypothesis grounded in general research on sleep and workload, not a diagnosis of anyone, and nothing here is medical advice.

## Why the worry is rational

People who lie awake over a system are often told to relax. But the worry usually has a real basis. If you are the only person who knows how an invoicing run, a stock reconciliation or a server restore works, then a failure at night genuinely has nobody else to turn to. The anxiety is an accurate reading of a fragile arrangement.

The same structure applies in many small businesses. A spreadsheet built over ten years, a bespoke integration set up by a contractor who has since moved on, a set of passwords known to one person: each is a single point of failure. Mellorca's work on [key-person dependency as a systems problem](/insights/key-person-dependency-is-a-systems-problem/) and the page on the [operational dependency on one person](/impact/key-person-operational-dependency/) describe the pattern and its costs in more detail.

## What sleep loss does

The US National Heart, Lung, and Blood Institute notes that sleep deficiency can interfere with work, learning and social functioning, and can make it harder to focus, react and judge other people's emotions. The US Centers for Disease Control and Prevention publishes general information on sleep and health that points the same way. It is a reasonable inference, not a proven result for any individual, that an owner who sleeps badly because of a fragile system is then slightly less able to fix it. The risk compounds.

The World Health Organization's guidance on [mental health at work](https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work) lists excessive workloads, long and inflexible hours, and unclear job roles among risks to mental health. Being the sole holder of a critical system tends to combine several of these: a workload that never fully ends, a role with no boundary, and hours that quietly extend into the night.

## An illustrative case

Consider an illustrative example, not a real case: a Port Elizabeth wholesaler with eighteen staff, whose operations manager built the ordering and stock system fifteen years ago, using a database and a set of scheduled scripts. It works well. It has never been fully documented. The server sits in a cupboard behind the warehouse office.

Whenever there is a storm or a load-shedding schedule changes, the manager worries about the server, the uninterruptible power supply and the overnight stock update that feeds the morning pick lists. Twice a year something fails, and every time the manager is the one who restores it, often before dawn. On holiday, the phone stays on the table. The owner does not know how any of it works either, and is aware of this in the way people are aware of a crack in a ceiling.

Nobody has been careless. The system grew around one person's competence, and the business came to depend on both.

## The human tax: safety, wellbeing and energy

The first cost is wellbeing. Poor sleep, a mind that will not switch off and a body permanently half on call are real, and they accumulate. The second is energy: the person who carries the system also carries the vigilance, and that cost is paid every day even when nothing fails.

The business pays too. A fragile system run by one exhausted person is more likely to fail, and more likely to fail badly. And the same person, because they are indispensable, finds it harder to take leave, delegate or move on. The Moments pieces on [the notification you check before you sleep](/moments/the-notification-you-check-before-you-sleep/) and [the founder who wants to step back but cannot](/moments/the-founder-who-wants-to-step-back-but-cant/) describe adjacent versions of the same problem.

## What could realistically change

The aim is not to eliminate every possible failure, but to make sure that a failure at night has a plan, and that more than one person can follow it.

1. **List what could wake you.** Write down the handful of things that, if they failed tonight, would genuinely hurt: payroll, backups, customer-facing systems, payments. Ignore the rest for now.
2. **Write a one-page recovery note for each.** What the system does, how to tell it has failed, who to call, and the steps to restore it. Plain language, stored somewhere other than the server. The guide to [designing a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) is a good template.
3. **Have a second person try it.** A note that only its author can follow is not yet a note. Ask a colleague, or an outside IT provider, to follow it and mark where it breaks.
4. **Test the backups.** A backup that has never been restored is a hope. The page on [unmonitored backups and false recovery confidence](/impact/unmonitored-backups-false-recovery-confidence/) explains why.
5. **Make alerts worth waking for.** Google's engineers recommend that only conditions needing human action should page a person; everything else should wait until morning. Alerts that cry wolf train people to stay vigilant at all hours.
6. **Agree an out-of-hours arrangement.** If someone must be reachable, rotate the duty, say what counts as urgent, and compensate it. A single person on permanent call is a risk to the business as well as to themselves.

## The business outcome

Failures are recovered faster because more than one person can respond. The business becomes less exposed to illness, resignation or leave, and easier to insure, finance or sell. Time spent firefighting falls as recurring faults are documented and fixed.

## The human dividend

The dividend is presence and predictability: the chance to be in the evening you are actually in, rather than half in the system. For some people that will mean a proper night's sleep, for others a holiday without a laptop. What it looks like is theirs to decide. It is not a cure for stress, which has many causes, and it will not suit someone who finds their identity in being the person who keeps everything running.

## The trade-offs

- **Documentation takes time that is already scarce.** It competes with the urgent work that the fragile system creates.
- **Sharing knowledge loosens control.** Others will do things differently, and the original builder may feel less needed.
- **Some risk remains.** Recovery notes reduce the chance of a bad night but do not remove it.
- **Rotas cost money.** Fair out-of-hours cover needs budget, and small teams may not have enough people to rotate.

## Why it matters

A system that only one person understands makes that person's night a part of the business's infrastructure. Writing it down, testing it and sharing it is unglamorous, but it turns a private worry into a shared, manageable risk, and lets the person who built the system finally switch it off at night.
