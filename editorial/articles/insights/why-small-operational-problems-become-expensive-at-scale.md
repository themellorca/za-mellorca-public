---
hub: insights
record_id: INS-005
slug: why-small-operational-problems-become-expensive-at-scale
title: Why Small Operational Problems Become Expensive at Scale
description: A two-minute workaround or a one-in-fifty error looks harmless on any single day. Volume, propagation and late detection are what turn it into a structural cost, and they can be measured before they are fixed.
lead: A two-minute workaround or a one-in-fifty error looks harmless on any single day. Volume, propagation and late detection are what turn it into a structural cost, and they can be measured before they are fixed.
category: Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Operations
sources:
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda/
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Jidoka - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/jidoka/
related:
  - How Manual Data Transfer Becomes an Operational Bottleneck | /insights/how-manual-data-transfer-becomes-an-operational-bottleneck/
  - Why Fixing Symptoms Without Mapping the System Rarely Works | /insights/why-fixing-symptoms-without-mapping-the-system-rarely-works/
  - Why Repeated Workarounds Are a Warning Sign | /insights/why-repeated-workarounds-are-a-warning-sign/
summary: A two-minute workaround or a one-in-fifty error looks harmless on any single day. Volume, propagation and late detection are what turn it into a structural cost, and they can be measured before they are fixed.
layout: plain
---
Most expensive operational problems do not start out looking expensive. A salesperson leaves the delivery address off one quote in fifty. A spreadsheet needs a manual correction before the weekly report goes out. A supplier invoice arrives in a format that has to be retyped. Each of these costs a few minutes, and on any given day it is cheaper to absorb the problem than to fix it.

That judgement is often correct when the business is small. It stops being correct as volume grows, because the cost of a small problem is not fixed. It is multiplied, and the multipliers are rarely visible to the people who decided to tolerate it.

## The four multipliers

When Mellorca examines a problem that has quietly become expensive, the cost can almost always be traced to four forces acting together.

### 1. Volume

The simplest multiplier is frequency. A workaround that costs three minutes per transaction costs three minutes a day at one transaction and several hours a day at a hundred. Nothing about the workaround changed. Only the number of times it runs.

Google's site reliability engineering guidance describes a category of work it calls toil: work that is manual, repetitive, automatable, tactical, without enduring value, and that [scales linearly as a service grows](https://sre.google/sre-book/eliminating-toil/). The definition was written for running software services, but it describes operational workarounds in any business precisely. The defining feature is the last one. Toil does not get cheaper with volume. It grows in step with it.

### 2. Propagation

A small error rarely stays where it was made. The missing delivery address does not cost the salesperson anything. It costs the dispatcher who has to phone the customer, the driver who waits, the customer who receives the goods late and the accounts clerk who handles the query when the invoice is disputed. Each step downstream adds people, time and context switching to a problem that would have taken seconds to prevent at the point of entry.

This is why the person who could fix a small problem is often the person who feels its cost least. The cost lands somewhere else, usually in another team, and it is recorded, if at all, as that team's inefficiency.

### 3. Detection delay

The later a problem is found, the more work has been built on top of it. The Lean Enterprise Institute's description of [jidoka](https://www.lean.org/lexicon-terms/jidoka/) makes the point from manufacturing: when work stops as soon as a problem first occurs, the cause is visible and defects are prevented from compounding. Office processes rarely have that property. An incorrect price on a customer record can be used on dozens of invoices before anyone notices, and correcting it then means credit notes, reissued documents and a difficult conversation rather than a single edit.

### 4. Adaptation

The least visible multiplier is how people adapt. When a problem is tolerated for long enough, the business builds around it. Someone adds a checking step. A spreadsheet appears to track the exceptions. A senior person is copied into every order "just in case". Each adaptation is sensible, and each adds permanent overhead that remains even on the transactions where nothing goes wrong. Eventually the workaround becomes part of the job description, and the original problem is no longer seen as a problem at all. That drift is described in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).

## Why these problems survive

If small problems become so costly, why do capable teams tolerate them? Usually for reasons that make sense locally.

- **The cost is spread thinly.** No single person loses more than a few minutes, so nobody feels it as a priority.
- **The cost is recorded in the wrong place.** Rework appears as busy staff, overtime or "just how this department is", not as the consequence of a specific defect upstream.
- **The fix looks disproportionate.** Changing a form, an integration or a validation rule feels like a project. Absorbing the problem feels free.
- **The team has stopped seeing it.** A workaround that has existed for two years is no longer experienced as a workaround.

Lean practice distinguishes between waste that can be [removed quickly through kaizen](https://www.lean.org/lexicon-terms/muda/) and waste that needs longer-term change to the process itself. Many small operational problems belong to the first group. They survive not because they are hard to fix, but because nobody has added up what they cost.

## An illustrative example

Consider a hypothetical Johannesburg distributor of catering supplies that processes around eighty orders a day. Orders arrive by email and are captured into the accounting system by two administrators. Roughly one order in twenty arrives without a purchase order number, which several of the distributor's larger customers require before they will pay an invoice.

At the point of capture, the missing number costs nothing. The administrator captures what is there. The cost appears three weeks later, when the invoice is rejected by the customer's accounts payable team. A credit controller then has to find the original email, contact the buyer, wait for the number, reissue the invoice and reset the payment clock. Several days of cash collection are lost on each affected invoice, and the credit controller spends a meaningful part of each week on queries that originate from a single missing field.

The fix is small: make the purchase order number a required field for the customers who need it, and return the order to the buyer immediately if it is missing. But nobody in the order capture team owned the problem, because nobody in that team experienced it.

This example is illustrative, not a client case study, and the numbers are chosen to show the mechanics rather than to describe a typical business.

## How to size a small problem

The point of sizing is not precision. It is to make a dispersed cost visible enough to compete for attention. For any recurring problem, estimate five things:

1. **Frequency.** How many times a week does it occur? Count from records where possible rather than relying on memory.
2. **Direct handling time.** How long does it take to deal with each occurrence at the point where it is noticed?
3. **Downstream touches.** How many other people or teams handle the consequence, and for how long each?
4. **Delay cost.** Does it hold up payment, delivery, onboarding or another outcome that has a cash or customer consequence?
5. **Standing overhead.** What checks, trackers or approvals exist only because of this problem, and what do they cost even when nothing goes wrong?

Multiply the first three together for a weekly labour figure, then add the delay and overhead effects in plain language if they cannot be priced reliably. A more detailed method for the labour component is set out in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

| Question | What a high answer suggests |
| --- | --- |
| Does frequency rise with sales volume? | The cost will grow with the business unless the cause is removed. |
| Is it found far from where it is caused? | Prevention at the point of entry is likely to be cheap relative to correction. |
| Do other teams carry the cost? | Ownership is the real gap, not effort or competence. |
| Have checks been added around it? | The business is paying overhead on every transaction, not only on the faulty ones. |

## What usually fixes it

Small problems rarely need large solutions. The most effective interventions tend to be modest and close to the source.

- **Prevent at entry.** Required fields, validated formats, picklists instead of free text and rejecting incomplete requests at the door.
- **Detect early.** Simple checks that flag the problem when it occurs, not when a customer complains.
- **Assign ownership upstream.** Make the team that creates the defect aware of what it costs downstream, and give them responsibility for the rate.
- **Remove the adaptations.** Once the cause is fixed, retire the extra checks and trackers, or the overhead remains.

Hiring is the response to avoid by default. Adding staff to absorb a defect that grows with volume simply scales the defect, a trap examined in [scaling by adding headcount](/impact/scaling-by-adding-headcount/).

## When to act

A small problem deserves attention when its frequency is tied to growth, when it is detected far from where it starts, or when it has already acquired its own checking step or tracking spreadsheet. Those are the signs that the business is no longer absorbing a cost but structuring itself around one.

The useful habit is not to fix everything. It is to keep a short list of recurring problems, size each one roughly every quarter and fix the few whose cost is rising fastest. Where several of these problems share causes across systems and teams, a structured review such as Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work can trace them back to the handful of design decisions that create them.
