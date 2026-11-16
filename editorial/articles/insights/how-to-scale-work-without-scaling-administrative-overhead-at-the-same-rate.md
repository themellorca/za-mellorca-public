---
hub: insights
record_id: INS-455
slug: how-to-scale-work-without-scaling-administrative-overhead-at-the-same-rate
title: How to Scale Work Without Scaling Administrative Overhead at the Same Rate
description: If every new client or order brings the same slice of admin with it, growth simply buys more paperwork. Here is how to find the work that grows in step with volume and break that link.
lead: If every new client or order brings the same slice of admin with it, growth simply buys more paperwork. Here is how to find the work that grows in step with volume and break that link.
category: Process Improvement
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Process Improvement
sources:
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - OPS07-BP03 Use runbooks to perform procedures - Operational Excellence Pillar | https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html
related:
  - How to Find Steps That Exist Only Because the System Is Bad | /insights/how-to-find-steps-that-exist-only-because-the-system-is-bad/
  - How to Measure Whether a Workflow Is Improving | /insights/how-to-measure-whether-a-workflow-is-improving/
  - How to Reduce Unnecessary Approvals | /insights/how-to-reduce-unnecessary-approvals/
summary: If every new client or order brings the same slice of admin with it, growth simply buys more paperwork. Here is how to find the work that grows in step with volume and break that link.
layout: plain
---
When a Johannesburg facilities services company had 60 corporate clients, two administrators handled contracts, job cards, supplier invoices and monthly client reports. At 120 clients it had four administrators. At 180 it had six, plus a supervisor to coordinate them. Revenue had tripled, but so had the administrative payroll, and margins had barely moved. The founder's question was simple: why does every new client come with the same amount of paperwork attached?

The answer is that most of the business's administrative work was designed, without anyone intending it, to grow in step with volume. Each client meant another report built by hand, another set of job cards typed up, another round of invoice matching. Scaling without scaling overhead at the same rate means finding that work and changing its shape, so that the hundredth client costs much less to administer than the first.

## Work that grows in step with volume

Google's site reliability engineering book has a useful name for this kind of work. In its chapter on [eliminating toil](https://sre.google/sre-book/eliminating-toil/), it defines toil as work that tends to be manual, repetitive, automatable, tactical, without enduring value, and that scales linearly as a service grows. The last property is the one that matters most for a growing business. If doubling your clients doubles the hours spent on a task, that task will eventually consume the margin growth was supposed to create.

The same chapter explains why Google caps toil at half of each engineer's time: left unchecked, it tends to expand until it fills everyone's day. Smaller businesses rarely set any cap at all, which is how administration quietly becomes the largest department.

## Find the linear work

Start by listing recurring administrative tasks and asking one question of each: if volume doubled tomorrow, would this take twice as long? Typical answers in a service business look like this:

- **Scales linearly:** typing job cards from paper, building client reports by copying data, matching supplier invoices to orders by hand, sending individual reminder emails, creating each new client in three systems.
- **Scales more slowly:** preparing a standard contract from a template, monthly management reporting from a live system, reviewing exceptions flagged by a rule.
- **Roughly fixed:** designing a process, setting up an automation, writing a procedure, configuring a report once.

Estimate the hours per unit, per client, per order or per job, for the linear tasks. That figure, multiplied by planned growth, shows where the administrative headcount is heading. Our article on [calculating the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) gives a method.

## Four ways to break the link

**Remove it.** Some linear work exists only because of a historical requirement nobody revisited. A monthly report that clients do not read, a second approval that never rejects anything, a copy kept "just in case". Removing it is the cheapest way to scale.

**Capture once, at the source.** Much administration is re-keying: information arrives in one form and is typed into another. If technicians capture job details on a mobile form, nobody types up job cards. If clients complete a structured intake, nobody re-enters their details in three systems. Our article on [stopping the same information being typed into several systems](/insights/how-to-stop-the-same-information-being-typed-into-several-systems/) covers how to do this.

**Standardise.** Work that is different every time cannot be automated or delegated easily. A standard client report, a standard contract with a short list of approved variations, and a standard onboarding sequence turn bespoke effort into a repeatable routine. Standardisation is often the step that makes automation possible.

**Automate the routine and route the exceptions.** Once work is standard and data is captured at source, rules can do the routine: match invoices that agree, send reminders on schedule, generate reports from live data. People then handle only the cases the rules cannot, such as mismatched invoices or unusual requests. The AWS Well-Architected guidance on [runbooks](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html) describes a sensible progression: first document a procedure as clear steps, then automate the short, frequently used ones, and over time automate more, explicitly to reduce toil.

## Watch the exceptions rate

After automation, administrative effort depends mostly on how many cases need human attention. If 5 percent of supplier invoices fail automatic matching, effort grows with 5 percent of volume rather than 100 percent. If that rate creeps up to 25 percent, much of the benefit disappears. Track the exceptions rate for each automated process, and treat a rising rate as a problem to investigate rather than a reason to hire. Our article on [building automation that expects exceptions](/insights/how-to-build-automation-that-expects-exceptions-from-the-start/) explains how to design for this.

## Budget time for the work that removes work

The trap in a growing business is that administrators are too busy with linear work to do the fixed work that would reduce it. The SRE approach answers this by reserving time for engineering work that reduces future toil. A small business can do something similar: protect a few hours a week of a capable administrator's time, or bring in outside help, specifically for removing, standardising and automating. Without that protected time, the next hire will simply absorb the next tranche of linear work.

## Do not confuse headcount with capacity

Hiring is sometimes the right answer, especially for work that genuinely needs judgement and client contact. But it should be a choice made after the linear work has been examined, not a reflex. Our article on [why hiring more people does not fix broken operations](/insights/why-hiring-more-people-does-not-fix-broken-operations-diagnose-before-you-add-headcount/) sets out the diagnostic questions to ask first, and [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/) shows how minor inefficiencies multiply with growth.

## Measure overhead per unit

The measure that shows whether this is working is administrative cost or hours per unit of output: per client, per order, per job or per rand of revenue. If it falls as volume rises, the business is scaling well. If it stays flat, growth is buying paperwork. Review it quarterly alongside revenue, not just total admin cost, which will naturally rise in a growing business.

## Practical next actions

1. List recurring administrative tasks and mark which would double in effort if volume doubled.
2. Estimate hours per client, order or job for each linear task, and project them against your growth plan.
3. For the largest linear task, decide whether to remove it, capture its data at source, standardise it, or automate the routine cases.
4. Track the exceptions rate of every automated process and investigate increases before adding staff.
5. Protect regular time for work that removes work, and report administrative hours or cost per unit of output each quarter.
