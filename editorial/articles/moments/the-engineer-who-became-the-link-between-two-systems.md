---
hub: moments
record_id: STORY-ANGLE-000098
slug: the-engineer-who-became-the-link-between-two-systems
title: The Engineer Who Became the Integration
description: When a skilled person is the only connection between two systems, the business gains a working bridge and loses a fragile one. What it costs them, and how to move the link into the business.
lead: When a skilled person is the only connection between two systems, the business gains a working bridge and loses a fragile one. What it costs them, and how to move the link into the business.
category: Work and Dignity
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Work and Dignity
thematic_domain: work_and_dignity
human_situation: A skilled engineer quietly becomes the manual link between two systems, doing the data movement and the out-of-hours fixes that the systems should handle themselves.
human_dividend: Time and presence: early mornings, evenings and weekends no longer reserved for a manual link, and working hours returned to the skilled work the role was meant for.
trade_off: Automation costs money and upkeep; a documented manual step may be cheaper for rare transfers; some people value being indispensable; hand-made corrections may hold knowledge that must be captured first.
epistemic_state: HYPOTHESISED: reasoned from general reliability and workplace wellbeing guidance, not from a survey of South African employers; the worked example is illustrative.
sources:
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/retry | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work | https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles | https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles
summary: When a skilled person is the only connection between two systems, the business gains a working bridge and loses a fragile one. What it costs them, and how to move the link into the business.
layout: plain
---
Somewhere in many mid-sized businesses there is an engineer, analyst or technician whose real job has quietly changed. Officially they maintain a machine, a database or a system. In practice they are the connection between that system and the next one. Every morning they export a file from one place, tidy it, and load it into another. When a figure looks wrong, they are the one who knows why. When the link fails at night, they are the one who is phoned.

This piece looks at what happens to a skilled person when they become the integration, and what a business can do about it. It is a hypothesis built from general research on reliability and on workplace wellbeing, not a finding about any named South African employer.

## How a person becomes the connection

Nobody sets out to make a colleague into middleware. It starts with a gap. Two systems were bought at different times, by different departments, and they do not talk to each other. Someone offers to bridge the gap for a week while a proper link is arranged. The proper link is never arranged, because the bridge works, and a working bridge is easy to forget.

Over months the bridge acquires rules. The export must be run before nine. The product codes in column F need to be corrected by hand. The file must not be opened by anyone else while it loads. None of this is written down, because it grew one small fix at a time, and each fix felt too minor to record. The person carrying it now holds a process that exists nowhere else.

Three conditions usually produce this pattern:

- **The gap is cheap to bridge by hand.** A ten-minute export looks far less costly than a project, so the manual step survives every budget round.
- **The person is capable.** Someone who understands both systems is exactly who gets asked, and exactly who finds it hard to refuse.
- **The failure is invisible until it happens.** While the bridge holds, no manager sees the dependence. It appears on the day the person is ill, on leave or simply tired.

## What machines do that people are asked to do

When two systems are linked properly, the link is built to cope with the small faults that any connection meets. Microsoft's architecture guidance on the [retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) describes how an application should expect transient faults, such as a momentary loss of connectivity or a busy service, and try the operation again after a suitable delay, treating it as an exception only after a set number of failed attempts. That is a sensible design for software. It is also a fair description of what the engineer does by hand: try again, wait, check, and escalate if it still fails.

The difference is that a program does this without tiring. A person does it at the end of a shift, over a weekend or on leave, and does it knowing that a missed attempt may mean a wrong stock figure or a late invoice. Microsoft's [reliability principles](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles) for cloud workloads make the wider point that a dependable system is designed to withstand and recover from faults. A system whose recovery plan is one person's availability has a reliability design, but it is a fragile one.

## An illustrative case

Consider an illustrative example, not a real case: a Gauteng packaging manufacturer with a production planning system on the factory floor and a separate accounting package in the head office. A maintenance engineer, trained in electrical systems, volunteered years ago to copy completed production runs into the accounting system so that stock could be costed. The task takes forty minutes a day. It grew a second step when a new customer needed batch numbers, and a third when the planning system was upgraded and the export format changed.

The engineer is good at it, and that is the trouble. He is thanked for being reliable, but his own work, the preventive maintenance that he was hired to plan, slips to the evenings. When a line stops at night, he is called both for the machine and for the data, because he is the only one who can reconcile the two afterwards. His manager sees a dependable employee. He sees a career narrowing into a spreadsheet.

## The human tax: dignity and energy

The first cost is dignity. A person trained to diagnose, design or repair is spending their working hours moving values between boxes. The skill that makes them valuable is used for the least skilled part of the job, and the skilled part waits. The note on [why nobody trains for the job of being human middleware](/moments/why-nobody-trains-for-the-job-of-being-human-middleware/) describes how this role is rarely named, valued or rewarded, even though the business leans on it daily.

The second cost is energy. The World Health Organization's [fact sheet on mental health at work](https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work) lists risks to wellbeing that include excessive workloads, long or inflexible hours, low control over one's work and unclear roles. Being the integration touches several of them at once: the task cannot be skipped, the timing is set by other systems, and the role was never defined. The strain is not dramatic. It is the steady tiredness of being the person nobody can replace, which the piece on [sleep lost over a system only one person understands](/moments/the-sleep-lost-over-a-system-only-one-person-understands/) explores further.

## What could realistically change

The aim is not necessarily to buy new software. Sometimes the right move is a documented procedure that a second person can follow. Sometimes it is a scheduled export and import that removes the manual step. Sometimes it is a proper integration between the two systems, and a business leader does not need deep technical knowledge to ask for one sensibly. The guide to [APIs, webhooks and integrations for business leaders](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/) sets out the questions worth asking a supplier or an internal team.

Whatever the route, the principle is that the connection should belong to the business, not to a person. It should have an owner, a written description, a way of showing that it ran, and a defined response when it does not. The same thinking underlies [the argument that broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/), and the habit described in [the morning check that overnight jobs ran](/moments/the-morning-check-that-overnight-jobs-ran/) shows how a visible confirmation replaces someone's quiet vigilance.

## Practical next actions

1. **List the manual bridges.** Ask each team where someone copies, exports, re-keys or corrects data between two systems. Record who does it, how often, and how long it takes.
2. **Write down one bridge in full.** Choose the most fragile, and have its owner describe every step, including the corrections that are only in their head. Ask a second person to follow the notes once.
3. **Name a business owner for each link.** The owner is accountable for the link working, for a backup person, and for deciding when it should be replaced. It should not default to whoever built it.
4. **Price the manual step honestly.** Multiply the minutes by working days and by the hourly cost of the person, then add the out-of-hours calls. Compare that figure with the cost of automating the link.
5. **Protect the person's real job.** Agree how much of the engineer's week belongs to their core work, and treat any bridging time above that as a cost to be removed, not as a favour to be absorbed.

## The business outcome

A link that belongs to the business survives illness, leave and resignation. Errors from re-keying fall away, and the engineer's skills return to the work that needs them.

## The human dividend

The dividend is time and presence. When the connection no longer needs a person, the engineer's early mornings, evenings and weekends are no longer reserved for it, and the hours spent on repair or design are spent as the role intended. What a person does with the recovered time is their own decision, whether it is deeper technical work, learning, rest or simply being home when dinner is served.

## The trade-offs

- **Automation has a price.** A proper integration costs money and effort up front, and it needs maintenance when either system changes.
- **The manual step may be the cheaper option.** For a rare, small transfer, a documented procedure and a trained backup may beat a project.
- **People may value the role.** Some engineers like being indispensable, so the change needs conversation, not a surprise.
- **Hidden judgement can be lost.** The corrections a person makes by hand sometimes encode real knowledge, which must be captured before the step is automated away.

## Why it matters

A business that relies on one person to join its systems has made a quiet bet that the person will always be there, always be well and never want to do anything else. It is a poor bet for the business and a poor deal for the person. Making the connection a shared, written and owned part of the operation protects both.
