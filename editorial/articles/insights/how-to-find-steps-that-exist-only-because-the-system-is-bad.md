---
hub: insights
record_id: INS-108
slug: how-to-find-steps-that-exist-only-because-the-system-is-bad
title: How to Find Steps That Exist Only Because the System Is Bad
description: Many process steps are workarounds for software that does not fit the work. Here is how to spot them, test them and decide what to do about each.
lead: Many process steps are workarounds for software that does not fit the work. Here is how to spot them, test them and decide what to do about each.
category: Process Improvement
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Process Improvement
sources:
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
summary: Many process steps are workarounds for software that does not fit the work. Here is how to spot them, test them and decide what to do about each.
layout: plain
---
Ask anyone in an accounts-payable team to walk you through how a supplier invoice gets paid, and somewhere in the story you will hear a sentence like "then I export it to Excel and check it against the order." Nobody designed that step. It exists because the purchasing system and the accounting system cannot compare an invoice with an order on their own. The step has been done weekly for four years, and it now appears in the training notes as if it were part of the job.

These are the steps that exist only because a system is bad. They are easy to miss because the people who do them are conscientious and the work gets done. This article describes a practical way to find them, sort them and decide what to do with each.

## What a system-caused step looks like

A system-caused step is work that would not be needed if the software did one more thing, held one more piece of information, or talked to another system. The step produces no value for the customer or the business of its own. It exists to repair a gap.

The usual signs are consistent:

- The step moves data from one place to another by hand, such as copying figures from a report into a spreadsheet and then into a second system.
- The step checks something the system should have prevented, such as a duplicate customer or an invoice with no order number.
- The step involves a personal spreadsheet, a saved email template or a note on the monitor that only one person understands.
- The step is described with words like "just", "always remember to" or "the system doesn't do that".
- The step is done by a single person, and there is a quiet worry about what happens when they are on leave.

Our article on [why the official process is often not the real process](/insights/why-the-official-process-is-often-not-the-real-process/) explains why these steps rarely appear in the documented version, which is the reason they have to be hunted for.

## Find them by following one item, not by asking about the process

If you ask a team to describe their process, they describe the intended one. You get better results by choosing one real item, such as a particular order, claim or onboarding, and tracing it from start to finish with the person who handled it, while they show you each screen and file they touched.

Ask three questions at every step:

1. What would happen if we skipped this step?
2. Who or what receives the output of this step, and what do they do with it?
3. Why is this done here and not by the system?

The third question is the most revealing. Real value-adding steps have answers such as "because the customer must confirm" or "because a manager must decide". System-caused steps have answers such as "because it doesn't export that way" or "because the two systems don't sync." Write down the exact words people use.

Do this with two or three items, ideally with different people. One item shows you a path; three show you which steps are habit and which are structural. For ideas on spotting repeated effort, see our guide to [finding rework inside a business process](/insights/how-to-find-rework-inside-a-business-process/).

## Sort each step into one of four groups

Once you have a list, classify each step by the reason it exists. This is where most of the value of the exercise comes from.

- **Genuine value:** a customer, regulator or manager needs this step. A credit check before a large order is an example.
- **Control that is needed but badly placed:** the check matters, but it happens late or by hand when the system could enforce it earlier.
- **Data transfer:** the step carries information between systems. Our piece on [how manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/) shows why these accumulate.
- **Pure workaround:** the step compensates for a missing feature, a poor setup or a past mistake that nobody reversed.

Be careful with the first group. Some steps look like workarounds but exist for legal reasons. The Protection of Personal Information Act, for instance, places duties on how personal information is collected, stored and secured, and some manual checks in a process may exist to meet them. The text is available on the [government site](https://www.gov.za/documents/protection-personal-information-act). Confirm the reason before removing anything.

## Put a price on each workaround

A workaround that takes ten minutes a day sounds trivial. Multiplied across a year, a team and the errors it creates, it is often the most expensive thing in the process. For each candidate step, estimate four numbers: how often it happens, how long it takes, how often it goes wrong, and what a mistake costs. A rough estimate is enough. You are looking for the order of magnitude, not an accounting figure.

Add the hidden costs that do not appear on a timesheet: the delay while an item waits for the one person who knows the step, the risk when that person is absent, and the time new staff spend learning something no system will ever teach them.

## Choose the right response for each one

Not every workaround should be automated. Our article on [what keep, fix, integrate, automate, replace or remove means in practice](/insights/what-keep-fix-integrate-automate-replace-or-remove-means-in-practice/) describes the options in detail. In summary, for system-caused steps:

- **Fix the configuration** when the system can already do what is needed but was set up differently. This is the cheapest outcome and more common than people expect.
- **Connect the systems** when the step only exists to move data. Microsoft describes [automated cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) that run when an event occurs in one system, which is one example of how a copy-and-paste step can be replaced by a trigger.
- **Remove the step** when nobody uses its output. This happens more often than anyone admits.
- **Replace the system** only when a large share of the workarounds trace back to one product that cannot be configured to fit.

Resist the urge to automate a workaround as it stands. If the step exists because of a flawed process, a script will simply make the flaw run faster, a risk we describe in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/).

## Look for patterns across the list

After tracing a few items you will often see that many workarounds come from the same cause. Three steps may all exist because customer details live in two systems. Four more may exist because a report lacks one column. Grouping by cause turns a long list of irritations into a short list of real projects, and it shows where one small change removes many steps at once.

The same cause also tells you where to look next. A department that has built a large set of personal spreadsheets is telling you something about the system it was given.

## Practical next actions

1. Pick one process that staff complain about and trace three real items through it with the people who handled them, asking why each step is done by hand.
2. List every step and mark each as genuine value, badly placed control, data transfer or pure workaround. Confirm any compliance reason before marking a step as removable.
3. Estimate frequency, duration, error rate and error cost for the five workarounds that look most expensive, and rank them.
4. For the top two, ask the system supplier or administrator whether an existing setting or integration already covers the need before commissioning anything new.
5. Record the decision and the reason for each step, so the next person does not rebuild the same workaround.

Steps that exist because the system is bad rarely announce themselves. They hide behind diligent people. Finding them is mostly a matter of watching real work, asking why, and being honest about the answers.
