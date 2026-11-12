---
hub: insights
record_id: INS-152
slug: why-automating-a-broken-process-makes-the-problem-worse
title: Why Automating a Broken Process Makes the Problem Worse
description: Automation does not repair a process. It runs it faster, at higher volume and without the people who were quietly correcting it. Six ways a broken process gets worse once automated, how to tell whether a process is ready, and what to fix first.
lead: Automation does not repair a process. It runs it faster, at higher volume and without the people who were quietly correcting it. Six ways a broken process gets worse once automated, how to tell whether a process is ready, and what to fix first.
category: Automation
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Automation
sources:
  - Jidoka - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/jidoka/
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - How to Know Whether an Automation Actually Ran | /insights/how-to-know-whether-an-automation-actually-ran/
  - What Business Automation Should Actually Solve | /insights/what-business-automation-should-actually-solve/
  - The Difference Between Necessary Human Work and Avoidable Manual Work | /insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/
summary: Automation does not repair a process. It runs it faster, at higher volume and without the people who were quietly correcting it. Six ways a broken process gets worse once automated, how to tell whether a process is ready, and what to fix first.
layout: plain
---
Automation is often proposed as a cure for a process that is slow, error-prone or frustrating. The reasoning is understandable: if people are making mistakes and work is taking too long, let a system do it. But automation does not repair the logic of a process. It executes that logic. If the logic is broken, automation executes the broken version faster, more often and with less chance that anyone will notice.

That is why many automation projects deliver a short period of apparent improvement followed by a longer period of cleaning up. The problems were not created by the automation. They were present all along, and the automation amplified them.

## What counts as a broken process

A process does not need to be in crisis to be broken in this sense. It is broken for automation purposes if any of these are true:

- Different people do it differently, and nobody has agreed which way is right.
- Work regularly loops back because information was missing or wrong.
- Exceptions are frequent and handled by improvisation.
- Nobody owns the end-to-end outcome.
- Inputs arrive incomplete, inconsistent or in many formats.
- There is no agreed definition of when the work is finished.

A process like this can still function with people running it, because people adapt. That adaptation is exactly what automation removes.

## Six ways automation makes it worse

### 1. Errors happen faster

A person processing invoices with an incorrect supplier mapping might make a handful of mistakes before someone notices. An automation with the same flawed mapping can process every invoice in the queue before lunch. The error rate may be identical. The damage per hour is not.

### 2. The natural brake disappears

Manual processes have a built-in limit: the speed at which people work. That limit is frustrating, but it also caps how much can go wrong before someone pauses. Automated processes run at whatever volume arrives. A problem that once affected a few records a day can now affect hundreds.

### 3. The quiet correctors are removed

In most broken processes, experienced staff are silently fixing things as they go. They notice that a customer's account number is wrong and correct it. They know that one supplier always sends invoices in a different format. They catch the duplicate order before it ships. None of this is written down, because none of it was designed. When the process is automated, those corrections stop, and their absence is usually discovered through customer complaints.

Lean manufacturing addresses this with a principle called [jidoka](https://www.lean.org/lexicon-terms/jidoka/): equipment is designed to stop as soon as a problem first occurs, so that the cause is visible and defects do not compound. Many business automations are built the other way round. They are designed to continue, and they pass bad data downstream rather than halting on it.

### 4. Workarounds become permanent

Broken processes accumulate steps that exist only to compensate for other problems: an extra approval because a previous control failed, a reconciliation because two systems disagree, a reformatting step because a report was never fixed. Lean practice calls activity that consumes resources without creating customer value [muda](https://www.lean.org/lexicon-terms/muda/). Automating these steps turns temporary waste into permanent infrastructure, and makes it harder to remove later, because now it has to be unpicked from a workflow rather than simply stopped.

### 5. Exceptions pile up out of sight

Automation is usually built for the normal case. When exceptions are frequent, they are sent to a queue for manual handling. If the process was broken, that queue grows quickly, and the team that was meant to be freed up spends its time on the leftovers instead. This dynamic is described in [why human exception queues grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/) and [why manual work persists when automation only covers the happy path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/).

### 6. Visibility gets worse, not better

When people run a process, problems are often visible in conversation: someone complains, asks a question or escalates. When an automation runs it, the same problems can sit silently in logs nobody reads. Management may believe the process has improved because the complaints stopped, when in fact the errors have simply moved out of sight. Bad inputs are a common cause, as covered in [when poor data quality becomes an automation failure](/patterns/when-poor-data-quality-becomes-an-automation-failure/).

## An illustrative example

Consider a hypothetical Bloemfontein agricultural supplier that automates the creation of sales orders from emailed customer orders. Before automation, two administrators captured orders and regularly fixed problems: customers who ordered by old product codes, orders sent twice from different addresses, and delivery instructions buried in email signatures.

The new automation reads each email and creates an order. Within a month, the warehouse is picking duplicate orders, old product codes are being rejected into an exception folder nobody checks daily, and delivery instructions are missing. The administrators are now spending their time investigating and reversing orders rather than capturing them.

The underlying problems, outdated product codes in customers' hands, no duplicate check and no structured place for delivery instructions, existed before. The automation removed the people who had been compensating for them. This is an illustrative scenario, not a client case study.

## A readiness test

Before automating a process, check whether it can pass these tests:

| Test | Ready if |
| --- | --- |
| Consistency | Different people perform it the same way and get the same result |
| Inputs | Required information arrives complete and in a predictable format most of the time |
| Exceptions | The common exceptions are known, and there is a defined way to handle each |
| Ownership | One role owns the end-to-end outcome |
| Completion | There is an agreed, checkable definition of done |
| Hidden corrections | The informal fixes people make have been identified and either designed in or removed |

If a process fails two or more of these, it needs work before automation.

Where the business has system records of how work has moved, those are good evidence for this test. Microsoft's [process mining overview](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes using event data from systems of record to see how processes are actually executed, compare them and find the root causes of inefficiency. Even without specialist tools, status histories and timestamps can show how many variants a process really has.

## Fix, then automate

The sequence that tends to work is straightforward:

1. **Understand the real process.** Follow actual cases, including the informal corrections. See [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).
2. **Remove what should not exist.** Delete compensating steps and redundant approvals before considering automation.
3. **Standardise the remainder.** Agree one way of doing it, with defined inputs and a clear owner.
4. **Fix the inputs.** Validate information at the point of entry so the automation receives clean data.
5. **Automate with stop conditions.** Design the automation to halt and alert when it encounters something unexpected, rather than pushing it downstream.
6. **Watch the exceptions.** Track the exception rate after launch. A rising rate is a sign the process still has unresolved problems.

Sometimes the second and third steps deliver most of the benefit, and the case for automation becomes smaller than expected. That is a good outcome, not a failure.

## When to act

The best time to apply this thinking is before an automation project is approved. The second-best time is when an existing automation has created more clean-up work than it saved. Either way, the question is the same: is the process sound enough to run without people quietly fixing it? Mellorca's [business automation and AI workflows](/services/business-automation-ai-workflows/) work begins with that question, so that what gets automated is a process worth repeating.
