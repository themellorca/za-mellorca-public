---
hub: moments
record_id: STORY-ANGLE-000037
slug: what-a-week-without-firefighting-would-feel-like
title: What a Week Without Firefighting Would Feel Like
description: In some businesses every week is shaped by whatever breaks. Plans slip, the same people rescue the same problems, and Friday arrives with nothing planned done. Why firefighting repeats, and what a calmer week would give back.
lead: In some businesses every week is shaped by whatever breaks. Plans slip, the same people rescue the same problems, and Friday arrives with nothing planned done. Why firefighting repeats, and what a calmer week would give back.
category: Time & Attention
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: An operations manager or owner starts each week with a plan that is overtaken by recurring breakdowns, errors and missing paperwork that they personally resolve with workarounds.
human_dividend: Time that goes to planned work, energy not spent on repeated rescues, and the predictability to make and keep commitments at work and at home.
trade_off: Protected prevention time delays some urgent work; incident logging adds effort; some fixes cost money; firefighters may feel their value is less visible; external shocks will still occur.
epistemic_state: HYPOTHESISED: the effect of recurring firefighting on planning and energy is reasoned from engineering and safety guidance rather than measured in South African businesses; incident, problem and toil concepts are OBSERVED in IBM, Google and AHRQ sources; the wholesaler example is illustrative.
sources:
  - What Is Problem Management? - IBM | https://www.ibm.com/think/topics/problem-management
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
  - Root Cause Analysis - PSNet | https://psnet.ahrq.gov/primer/root-cause-analysis
related:
  - The Report Someone Rebuilds by Hand Every Friday | /moments/the-report-someone-rebuilds-by-hand-every-friday/
  - The Saturday Morning Spent on Invoices | /moments/the-saturday-morning-spent-on-invoices/
  - When Month-End Swallows the Whole Week | /moments/when-month-end-swallows-the-whole-week/
summary: In some businesses every week is shaped by whatever breaks. Plans slip, the same people rescue the same problems, and Friday arrives with nothing planned done. Why firefighting repeats, and what a calmer week would give back.
layout: plain
---
Monday begins with a plan. By ten o'clock, the plan has been set aside. A customer's order was invoiced at the wrong price. The label printer in the warehouse has stopped talking to the dispatch system again. A supplier delivered without paperwork and nobody can receive the stock. By Wednesday, the person who made the plan has spent most of their time on things that were not in it. By Friday, they are tired, and the plan rolls into next week.

Many people in operational roles will know some version of this week. The word most often used for it is firefighting, and it is apt: the work is urgent, reactive and, while it is happening, genuinely necessary. Someone has to put the fire out. The question this piece asks is a different one. What would a week without it feel like, and why do so many weeks look the same?

## Fires that come back

Not every disruption can be prevented. A burst pipe, a loadshedding schedule that changes at short notice, a key customer with a genuine emergency: these happen, and a business that handles them well is doing its job. The pattern worth looking at is different. It is the fire that comes back. The same integration failure, the same pricing error, the same missing document, recurring every few weeks and handled by the same person each time.

IT service management has a useful distinction for this. An incident is a single event that disrupts a service; a problem is the underlying cause, which may produce many incidents. IBM's overview of problem management describes reactive work that resolves issues after they occur, and proactive work that investigates why a problem keeps happening and puts a lasting fix in place. Firefighting is incident handling without problem management. Each fire is put out; the reason it started is left in place.

## Why businesses stay in firefighting mode

Consider an illustrative case: a Cape Town wholesaler of packaging supplies with around thirty-five staff. The operations manager is capable and respected. He is also the person everyone goes to when something breaks, because he knows how the systems connect and he usually knows the workaround.

Several things keep the wholesaler in a cycle of firefighting:

- **The fix is a workaround, not a repair.** When the label printer stops, the operations manager restarts the connector and dispatch resumes. The cause is never found, so it happens again.
- **Nobody has time to investigate.** The time that might be spent finding a root cause is spent on the next fire. Firefighting consumes the capacity needed to end it.
- **Incidents are not recorded.** Because each fire is handled in a phone call or a quick fix, nobody can see that the same thing has happened eleven times this year.
- **Heroics are rewarded.** The person who rescues the situation is thanked. The person who quietly prevents it gets no visible credit.

Google's site reliability engineering book has a word for much of this work: toil. It describes toil as manual, repetitive, automatable, interrupt-driven work that leaves the service no better than before, and which grows as the operation grows. Google states a goal of keeping such operational work below half of each engineer's time, so that the remainder can go to work that makes the system better. A small business is not Google, but the principle travels: if all of a person's time goes to fires, none goes to fireproofing.

Mellorca has looked at the cost of this pattern in [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/) and at how exceptions become routine in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).

## The human tax: time, energy and predictability

The time tax is visible: hours that were meant for planned work go to urgent work instead. The energy tax is less visible. Google's SRE book notes, about pagers, that a person can only respond with urgency a few times a day before fatigue sets in. Firefighting asks for that urgency repeatedly, and some people find it draining in a way that ordinary hard work is not.

The predictability tax may be the largest. When any day can be taken over by a fire, it becomes hard to promise anything: a project deadline, an afternoon off, being home on time. Plans become provisional by default. It is reasonable to infer, though no source here measures it directly, that people in this position learn not to plan at all, which carries its own cost.

The effect is not the same for everyone. Some people genuinely enjoy the adrenaline of solving urgent problems and would find a quiet week dull. The aim is not to remove all urgency from work. It is to stop recurring, preventable fires from crowding out everything else.

## What could change

Ending firefighting is less about technology than about creating a small amount of protected time to look at causes. For the illustrative wholesaler:

1. **Write every fire down.** A simple log: date, what broke, what was done, how long it took. After a month, the repeat offenders become obvious.
2. **Pick the top recurring fire and investigate it properly.** One problem at a time. Ask why it happened, and why that happened, until a cause is found that can be changed.
3. **Hold a short, blameless review.** Google's chapter on postmortem culture describes reviews whose purpose is to document what happened, understand the contributing causes and put preventive actions in place, without assigning fault to individuals. Healthcare's guidance on root cause analysis makes the same point, and adds a warning: reviews often end in weak actions, such as more training or restating existing policies, which rarely produce lasting change.
4. **Protect time for prevention.** Even half a day a week, kept free of urgent work, gives someone the chance to fix causes rather than symptoms.
5. **Spread the knowledge.** If only one person knows the workaround, write it down so others can apply it, and so the expert can be away without the business stalling.

Deciding which fires matter most is itself a skill; [how to separate urgent systems problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/) offers a starting point.

## Trade-offs

- **Prevention competes with today's fires.** Protecting time to investigate means some urgent work waits. In the short term, things may feel slower.
- **Logging adds work.** Recording every incident takes a little time from people who are already stretched.
- **Some fixes cost money.** Repairing a cause may mean replacing equipment, paying a developer or changing a supplier.
- **Identity can be at stake.** The person who is good at firefighting may find a calmer week unsettling, or feel their value is less visible. Recognising prevention as real work matters.
- **Some fires cannot be prevented.** External shocks will still happen. The aim is fewer avoidable fires, not none.

## Why it matters

The business gains reliability, fewer errors reaching customers and less dependence on one rescuer. The person gains something harder to measure. A week without avoidable fires is a week in which plans hold, in which the operations manager finishes what he set out to do on Monday, and in which Friday feels like the end of something rather than a pause between emergencies.

That is the dividend: time that goes where it was planned, energy that is not spent on the same rescue twice, and the predictability to make a promise, at work or at home, and keep it.
