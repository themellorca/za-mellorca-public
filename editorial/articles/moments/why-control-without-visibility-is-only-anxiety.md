---
hub: moments
record_id: STORY-ANGLE-000085
slug: why-control-without-visibility-is-only-anxiety
title: Why Control Without Visibility Is Only Anxiety
description: Authority to approve everything is not the same as knowing what happened next. Why holding control without a trustworthy view tends to feel like worry, and what a calmer arrangement looks like.
lead: Authority to approve everything is not the same as knowing what happened next. Why holding control without a trustworthy view tends to feel like worry, and what a calmer arrangement looks like.
category: Predictability and Visibility
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Predictability and Visibility
thematic_domain: human_agency
human_situation: An owner who signs off every order and payment run has no view of what happens after approval and fills the gap by checking and worrying.
human_dividend: Predictability and autonomy: uncertainty is reduced because a trustworthy status view holds the open questions, so the owner can choose how often to look.
trade_off: Visibility can become surveillance of staff; noisy alerts get ignored; a status view can create false confidence if data is late; some anxiety is not operational and no system treats it.
epistemic_state: HYPOTHESISED: the link between unseen responsibility and anxiety is inferred from work-design and monitoring guidance, not from a study of owners; the example is illustrative.
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
  - The AQuA Book | https://www.gov.uk/government/publications/the-aqua-book-guidance-on-producing-quality-analysis-for-government
  - Management Standards - Demands - HSE | https://www.hse.gov.uk/stress/standards/demands.htm
related:
  - What a Week Without Firefighting Would Feel Like | /moments/what-a-week-without-firefighting-would-feel-like/
  - Why Standardisation Can Free or Confine | /moments/when-standardisation-frees-people-and-when-it-confines-them/
  - Why Being Asked Beats Being Assigned a New Tool | /moments/why-being-asked-beats-being-assigned-a-new-tool/
summary: Authority to approve everything is not the same as knowing what happened next. Why holding control without a trustworthy view tends to feel like worry, and what a calmer arrangement looks like.
layout: plain
---
Some owners are, by any formal measure, in complete control. Every purchase order needs their signature. Every payment run waits for their approval. Every quote above a certain size is reviewed before it goes out. Nothing of consequence happens without them. And yet, when asked how they feel, they describe something closer to unease than command. They check their phone on Saturday evening. They ask the same question twice. They find themselves opening the accounting package at night, just to look.

It is tempting to read this as a personality trait, or as the price of responsibility. There is another reading, which is operational. Control is the power to decide. Visibility is the ability to know what has happened to what was decided. A business can give a person the first without the second, and the result is a person who must answer for outcomes they cannot see.

## Two things that are easy to confuse

Approving something is an act of control. Knowing whether it was done, how it went and what it cost is a matter of visibility. In a small business the two are often blurred, because for years the owner could see everything simply by standing on the floor. As the business grows, the floor becomes too large, and control remains while visibility thins.

The result is a particular kind of load. The owner must keep a mental list of everything that was approved and not yet confirmed: the order that should have arrived on Tuesday, the invoice that should have gone out, the payment that should have cleared. Each item is a small open question, held in memory until someone happens to mention it. Mellorca has described the managerial version of this in [the difference between being informed and being in control](/moments/the-difference-between-being-informed-and-being-in-control/). This piece looks at the reverse: someone who holds the authority but has lost the view.

## Why unseen control becomes anxiety

This is a plausible inference rather than an established finding, but the logic is simple. Responsibility without information leaves one of two things to do. One can trust blindly, which is uncomfortable when stakes are real. Or one can check, repeatedly and by hand. The first is risky and the second is tiring.

The UK Health and Safety Executive's Management Standards for work-related stress include a standard on demands, whose aim is that people can cope with the demands of their jobs, and another on role, under which people should understand their responsibilities and have a way to raise uncertainty. A position in which a person is accountable for results they cannot see sits uneasily with both. The standards do not discuss owners of small businesses, and Mellorca does not claim they do. They are a reasonable lens on any job in which responsibility and information are out of balance.

## What good visibility actually looks like

It is not more data. Many anxious owners already receive plenty of reports. The Google Site Reliability Engineering book, written about running software services, offers a useful distinction. It says that alerts are notifications meant for humans, and that they should have strong signal and very low noise. It cautions that noisy alerts lead people to skim or ignore them, which can hide real problems, and it prefers dashboards for ongoing sub-critical problems. It also advises that pages should target symptoms, meaning user-visible problems that are urgent and actionable, and that nobody should be required to watch a screen all day to find problems.

These are lessons from engineering, not from small business, and they should be applied with care. But the underlying idea transfers well. An owner needs to be told when something that matters has gone wrong, and to be able to check calmly when they choose, without being forced to watch constantly. The aim is to replace vigilance with trust in a signal.

## An illustrative example

Consider an illustrative case, not a real one: a small food-distribution business in Durban with about fifty staff. The owner approves all supplier orders above a modest amount and signs off the weekly payment run. He has never been caught out badly, but he describes the job as "waiting for the next problem".

The anxiety has a clear shape. Once an order is approved, he cannot see what happens. Did the supplier confirm? Has the delivery been scheduled? Has the goods-received note been captured, so that the invoice can be matched? He finds out when a warehouse manager mentions a shortage, or when a supplier phones about payment. Between the approval and the news there is a gap, and he fills it with worry.

Imagine a simple status view: every approved order with a stage beside it (placed, confirmed, delivered, invoiced, paid) and a flag on anything that is late against what was agreed. The owner does not need to look at it all day. He needs to know that if something is late, the flag will appear, and that if it does not, he can switch off.

## What could realistically change

1. **Follow each decision to its outcome.** For each type of approval the owner gives, name what "done" looks like and where that is recorded. Mellorca's article on [what operational visibility actually means](/insights/what-operational-visibility-actually-means/) explains the difference between having data and being able to see.
2. **Show status, not just totals.** A list of open items with a stage and an expected date is more calming than a monthly summary.
3. **Decide what deserves an alert.** Microsoft's documentation for Power BI describes data alerts that notify a user when a figure on a dashboard tile goes beyond a limit they set. It notes that alerts only work on refreshed data and that notifications can be limited to once an hour or once a day. The practical lesson is that thresholds and refresh frequency should be chosen on purpose, so that the owner is told about what matters and not about everything.
4. **Say what the view does and does not include.** The UK Government's AQuA Book, its guidance on quality analysis, emphasises that analysis should be fit for purpose and that uncertainty should be managed. A status view that states its cut-off and known gaps earns more trust than one that looks complete.
5. **Let others see it too.** If the owner is the only person who can see the status, the business has simply moved the single point from the head to the screen. Mellorca explores the cost of chasing as a substitute in [managers chasing status updates](/impact/managers-chasing-status-updates-visibility-cost/).

## What changes first, and the business outcome

The first change is that checking becomes lighter. A glance replaces a chain of calls. Problems are noticed earlier, because they surface as flags and not as someone's remark at the end of the week.

The business outcome is probably quicker responses to late deliveries, unmatched invoices and stalled orders, and less time spent by managers answering "where are we on this?" That is a plausible expectation. Mellorca does not claim a size for it.

## The human dividend

The dividend is predictability, with autonomy alongside it. Predictability, in this sense, means that uncertainty is reduced because a system reliably holds the knowledge. The owner can stop holding a private list of open questions, because the list is held somewhere trustworthy. That makes it more possible to switch off, which is a choice many owners say they want and rarely feel entitled to.

It does not follow that everyone will relax. Some people feel calmer with more information, and some feel calmer with less. The aim is to give the owner an informed choice about how often to look, instead of a compulsion to check.

## The trade-offs

More visibility can turn into surveillance of staff. A status view that shows how long each person takes can be used to monitor and to blame. Mellorca has looked at that risk in [when monitoring replaces trust in the reporting line](/moments/when-monitoring-replaces-trust-in-the-reporting-line/). The view should show the state of the work, not the movements of the people.

Visibility can create its own anxiety. A dashboard that is always red, or alerts that arrive constantly, teaches people to look away. The engineering guidance quoted above is blunt about this: noisy signals get ignored.

A status view can also lull people into false confidence. If data is entered late or inconsistently, the view will look calmer than reality. Someone needs to own its accuracy.

And some anxiety is not operational at all. A business can have excellent visibility and an owner who still worries, because the worry belongs to circumstances that no system can reach. Mellorca does not suggest that technology treats anxiety. It suggests only that some of it comes from a gap that can be closed.

## Why it matters

Many businesses respond to a feeling of being out of control by adding more approvals. That can make the problem worse, because each approval adds one more open question without adding any visibility. Mellorca's interpretation, offered as a hypothesis, is that for some owners and managers the missing ingredient is not more authority but a trustworthy view of what happens after they use it. When that view exists, authority stops feeling like a weight and starts to feel like a decision that has somewhere to land.
