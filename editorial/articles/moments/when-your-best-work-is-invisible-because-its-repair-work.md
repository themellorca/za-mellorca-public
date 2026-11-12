---
hub: moments
record_id: STORY-ANGLE-000088
slug: when-your-best-work-is-invisible-because-its-repair-work
title: When Your Best Work Is Invisible Because It's Repair Work
description: The people who fix problems before customers notice are often the least credited. Why repair work disappears from view and how a business can make it visible and learnable.
lead: The people who fix problems before customers notice are often the least credited. Why repair work disappears from view and how a business can make it visible and learnable.
category: Work & Dignity
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Work & Dignity
thematic_domain: work_and_dignity
human_situation: A skilled person spends much of the week repairing problems and exceptions before customers notice, and because the result is a non-event their work is neither recorded nor credited.
human_dividend: Predictability: fewer avoidable surprises, and recognition and learning for the exceptions that remain.
trade_off: Logging is extra work; visibility can feel like surveillance; some exceptions cannot be designed out; praising rescuers without fixing causes can create dependency.
epistemic_state: HYPOTHESISED: the mechanism is reasoned from engineering practice on postmortems and toil and from general burnout research, not measured in South African workplaces; the worked example is illustrative.
sources:
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Incident Postmortem: Process & Best Practices - Atlassian | https://www.atlassian.com/incident-management/postmortem
  - Employee Burnout, Part 1: The 5 Main Causes | https://www.gallup.com/workplace/237059/employee-burnout-causes.aspx
related:
  - The Skilled Professional Reduced to Copy-and-Paste | /moments/the-skilled-professional-reduced-to-copy-and-paste/
  - Why Nobody Trains for the Job of Being Human Middleware | /moments/why-nobody-trains-for-the-job-of-being-human-middleware/
  - When Every Day Starts by Rebuilding Yesterday's Context | /moments/when-every-day-starts-by-rebuilding-yesterdays-context/
summary: The people who fix problems before customers notice are often the least credited. Why repair work disappears from view and how a business can make it visible and learnable.
layout: plain
---
Some of the most skilled work in any business is the work nobody sees. A bookkeeper untangles a month of misposted payments before the auditors arrive. A technician brings the till system back at half past five on a Friday. An operations manager rebuilds a delivery schedule after a driver falls ill and a bridge closes. The business carries on, customers notice nothing, and the person who made that happen goes home having produced, in the eyes of everyone else, nothing at all.

This piece is about that gap: why repair work is so easily invisible, what it costs the people who do it, and what a business can change so that fixing things is recognised without turning it into the main way anyone is valued. It is a hypothesis about a common pattern, not a claim about any particular workplace.

## Why repair work disappears

Most workplaces notice what is added: a new customer, a finished project, a launched product. Repair work has the opposite shape. Its success is that something does not happen. The outage that never reaches the customer, the invoice error corrected before it was sent, the stock count that is right on Monday because someone checked on Sunday.

Three things make this worse.

- **The reward is a non-event.** When a repair works, the record shows normal service. There is nothing to point at.
- **The work is done at odd hours and under pressure.** Exceptions rarely arrive on schedule, so repair happens in evenings, at weekends and in the gaps between planned tasks, which means colleagues see it least.
- **The skill is hard to describe.** Knowing which of six possible causes is the likely one is judgement built over years. In a status report it becomes "resolved issue".

The result is that the people who are best at handling exceptions often do it quietly, and are valued mainly when they are absent.

## What the engineering world learned about this

Software operations teams have been dealing with this for a long time, and their lessons travel well beyond software.

Google's engineering handbook on postmortem culture describes a postmortem as a written record of an incident, its impact, the actions taken to resolve it, its root causes and the follow-up actions that should stop it recurring. The reasoning is simple: when an incident is fixed and nothing is learned, it may recur. The handbook is also clear that this should happen without blame, so that people are willing to describe what actually happened.

Atlassian's guide to incident postmortems makes a point that applies to any business. A quick rollback restores service, but it does not explain what failed or why. Understanding comes from a deliberate review, and the findings should feed back into planning so that the remedial work is weighed alongside everything else.

The handbook on eliminating toil adds a distinction. Toil, in its definition, is manual, repetitive and automatable operational work that has no enduring value and grows as a system grows. It is separate from overhead, which is necessary administration, and from grungy work that leaves something better behind. A person who repeats the same repair every month is doing toil. A person who fixes the cause once is doing engineering. The first is invisible and tiring; the second is visible and finite.

None of this proves anything about a particular South African workshop or accounts office. It does describe a mechanism that is plausible anywhere: repair that is never recorded cannot be learned from, and repair that is never learned from keeps happening.

## An illustrative case

Consider an illustrative example, not a real case: a Gqeberha company that supplies and installs solar geysers and battery back-up for homes and small businesses. It has twenty staff. The quoting is done by two sales consultants, the installations by three crews, and the scheduling and customer aftercare by an office coordinator.

The coordinator's official job is booking installs. Her actual job, much of the time, is repair. A quote went out with the wrong panel count. A crew arrived to find the supplier had delivered the wrong inverter. A customer was charged twice. A municipal approval lapsed. Every week, she works through half a dozen of these, usually by phone, usually before the customer realises there was ever a problem.

When the owner reviews performance, the numbers show installs completed and customer complaints, both of which look fine. Nothing in them records that the coordinator quietly absorbed forty problems last month, or that three of them were the same supplier error. Her work is the reason the figures are good, and the figures give her no credit.

## The human tax: dignity and energy

The first cost is to dignity. Being the person who keeps things running, without that being seen, can feel like being treated as a background utility. Some people will not mind. Others will find that the more reliably they repair, the less anyone asks what it takes.

The second cost is energy. Repair is reactive: it interrupts, it is urgent, and it cannot be planned for. Gallup's research on burnout lists an unmanageable workload and unreasonable time pressure among its main drivers, and notes that employees who say they often have enough time to do their work are far less likely to report high burnout. A role that is mostly emergency response sits close to both conditions. That is an inference, not a measurement of any particular role.

There is also a quieter cost to the business. Where repair is invisible, the recurring causes stay invisible too. The wrong-inverter error is absorbed rather than fixed, so it repeats. Mellorca's discussion of [what a week without firefighting would feel like](/moments/what-a-week-without-firefighting-would-feel-like/) describes the other side of this, and [the cost of fixing preventable mistakes](/impact/fixing-preventable-mistakes-rework-customer-time-cost/) looks at what it adds up to.

## What could realistically change

The aim is not to make exceptions glamorous. It is to make repair visible enough to be recognised, learned from and, where possible, designed out.

1. **Keep a simple exception log.** One line per fix: what went wrong, what was done, roughly how long it took, and what caused it. A shared sheet is enough. The point is to make the invisible countable.
2. **Review the log monthly, without blame.** Look for repeats. Three occurrences of the same supplier error is a process problem and deserves a decision, not another heroic recovery.
3. **Fix causes before building tools.** Many repeats vanish with a checklist, a confirmation step or a clearer supplier instruction.
4. **Say the work out loud.** Name the repairs in team meetings and reviews. "Problems avoided" is a legitimate thing to report, particularly if you can say what it would otherwise have cost.
5. **Protect planned time.** If someone is the default responder for every exception, give them a defined window in which their planned work is not interrupted, and a named deputy for the rest.
6. **Reward the permanent fix.** Recognise the person who removes a recurring problem at least as much as the person who rescues it, so that the incentive is not to keep the fire alive.

A related theme is explored in [why the person closest to the problem cannot fix it](/moments/why-the-person-closest-to-the-problem-cant-fix-it/), and in [why recurring maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/).

## The business outcome

The business gains a record of where its operations actually fail, which is rarely what the dashboards show. It can stop paying for the same fix repeatedly, and it holds on to the people whose judgement keeps customers satisfied.

## The human dividend

The dividend is predictability, but of a specific kind: a working week in which more of the surprises have been designed out, and in which the surprises that remain are seen and credited. For the person doing the repairing, that means fewer evenings spent on avoidable problems and some assurance that skilled work will not vanish into a line that reads "no issues".

## The trade-offs

- **Logging is itself work.** A log that is too detailed will be abandoned, and one that is too thin will tell you nothing.
- **Visibility can feel like surveillance.** Staff may worry that a log of mistakes will be used against them, which is why a blameless review matters.
- **Not every exception can be designed out.** Some of the best repair work responds to genuinely unforeseeable events, and trying to remove all of it would be futile.
- **Recognition can become dependency.** Praising the rescuer without fixing the cause can make the business reliant on one person's availability.

## Why it matters

A business is the sum of what it produces and what it quietly prevents. If only the first is counted, the people who handle the second are doing skilled, tiring work for no credit. Making repair visible will not make it pleasant, but it can make it learnable, finite and respected, which is a reasonable thing to ask of a workplace.
