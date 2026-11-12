---
hub: insights
record_id: INS-021
slug: how-to-diagnose-a-business-that-runs-on-exceptions
title: How to Diagnose a Business That Runs on Exceptions
description: When special cases, manual fixes and one-off approvals make up a large share of the daily work, the business is running on exceptions. A practical method for counting them, sorting them by cause and deciding which to remove, which to standardise and which to keep.
lead: When special cases, manual fixes and one-off approvals make up a large share of the daily work, the business is running on exceptions. A practical method for counting them, sorting them by cause and deciding which to remove, which to standardise and which to keep.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - What Is Process Improvement? - IBM | https://www.ibm.com/think/topics/process-improvement
related:
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - How to Find the Real Bottleneck in a Digital Operation | /insights/how-to-find-the-real-bottleneck-in-a-digital-operation/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
summary: When special cases, manual fixes and one-off approvals make up a large share of the daily work, the business is running on exceptions. A practical method for counting them, sorting them by cause and deciding which to remove, which to standardise and which to keep.
layout: plain
---
Every business has exceptions. A customer who needs a different payment term, an order that arrives without a purchase number, a supplier invoice that does not match the delivery. Handling them well is part of good service. The trouble starts when exceptions stop being occasional and become the main way work gets done.

In a business that runs on exceptions, the standard process exists on paper, but most cases need someone to step outside it. Staff spend their day fixing, checking, approving and explaining. Experienced people become indispensable because only they know how to handle the odd cases. Growth adds more odd cases, and the business needs more people just to stand still. The symptoms of this condition are described in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/). This article sets out how to diagnose it.

## Why exceptions are hard to see

Exceptions rarely show up in management reports. The report counts orders shipped or invoices sent, not how many of them needed three emails and a phone call first. The work is spread across people in small pieces, so no single person sees the total. And because the people handling exceptions are usually capable and committed, the problem looks like a busy team rather than a systems failure.

Google's site reliability engineers have a useful word for this kind of work: [toil](https://sre.google/sre-book/eliminating-toil/). They define it as work that is manual, repetitive, automatable, tactical, without enduring value, and that scales linearly as the service grows. Not every exception is toil, but a business that runs on exceptions usually carries a lot of it, and the last characteristic is the expensive one: if exception handling grows with volume, so does headcount.

## Step 1: Collect a sample of real cases

Start with evidence, not opinions. Choose one workflow, such as order to invoice or application to approval, and pull a sample of recent cases from the systems that hold them. Thirty to fifty cases from the last month is usually enough to see the pattern in a small or mid-sized business.

For each case, record whether it followed the standard path from start to finish without anyone stepping in. If it did not, record where it left the path, who intervened, what they did and how long it took. Emails, notes fields, audit logs and the memories of the people involved all help.

Where the systems keep good event records, process mining tools can do much of this at scale. Microsoft describes [process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) as extracting event data from systems of record to show how processes are actually executed, compare them and find the root cause of inefficiencies. Most smaller businesses will not need the tooling to start, but the principle is the same: look at what happened, not at what the procedure says.

## Step 2: Calculate your exception rate

Divide the number of cases that needed intervention by the total sampled. That is your exception rate for the workflow. There is no universal threshold, but the number changes the conversation. A team that believes exceptions are "a few awkward customers" may find that more than half of cases need some manual handling.

Add an estimate of the time each intervention took. Multiplied across monthly volume, this gives a rough cost of running on exceptions. The method in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) applies directly.

## Step 3: Sort the exceptions by cause

This is the step that turns a complaint into a plan. Group each exception by why it happened. Most fall into a small number of types:

| Type | What it looks like | Usual response |
| --- | --- | --- |
| Bad or missing input | Orders without reference numbers, forms with wrong details, incomplete customer records | Fix at the point of capture with required fields, validation and better forms |
| Rule gap | The standard process has no answer, so someone decides case by case | Write the rule down and build it into the process |
| System gap | The software cannot handle a common situation, so staff work around it | Configure, integrate or, if necessary, change the tool |
| Handoff failure | Work stalls between teams or waits for someone to notice it | Clear ownership, queues and notifications |
| Genuine judgement | The case truly needs a person to weigh it up | Keep it human, but make it visible and properly routed |

Count how many exceptions fall into each type. In most diagnoses a few causes account for most of the volume. Those are the first targets.

## Step 4: Separate exceptions you should remove from those you should keep

The aim is not zero exceptions. Some variation is the business serving customers properly, and removing human judgement where it matters creates new risk. The question for each type is whether the exception reflects real variety in the work or a defect in the way the work is set up.

- **Remove** exceptions caused by poor inputs, missing rules and avoidable system gaps. These are defects.
- **Standardise** exceptions that recur in a predictable form. If the same special case happens every week, it is not special; it is an unrecorded variant of the process.
- **Keep and support** exceptions that genuinely need judgement, but give them a defined route, an owner and a record, so they do not depend on who happens to be at their desk.

The distinction between necessary judgement and avoidable manual work is explored further in [the difference between necessary human work and avoidable manual work](/insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/).

## Step 5: Look for exceptions created by earlier fixes

A business that runs on exceptions often has layers of old workarounds. A manual check added after one bad month. An approval step introduced for a single large customer and never removed. A spreadsheet built because an integration once failed. Each made sense at the time; together they add friction to every case. As part of the diagnosis, ask of each intervention: what problem was this meant to solve, and does that problem still exist?

Approval steps are a frequent culprit, because they are easy to add and politically hard to remove. See [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).

## Step 6: Be careful with automation

Once exceptions are visible, there is a strong temptation to automate the standard path and leave the rest to people. That can make things worse. If the automation covers only the clean cases, the exceptions concentrate in a manual queue that grows faster than the automated flow, the situation described in [human exception queues that grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/). Fix the main causes first, then automate the path that remains.

IBM's summary of [process improvement](https://www.ibm.com/think/topics/process-improvement) puts mapping and analysing the current process before developing improvements, then monitoring and standardising afterwards. Exception diagnosis fits into that sequence: it is the analysis that tells you what to improve.

## An illustrative example

The following is a hypothetical example. A South African professional services firm samples forty recent client onboardings and finds that twenty-six needed manual intervention. Sorting by cause shows that fourteen were missing documents at the start, seven were waiting for a partner's sign-off that the firm's own rules did not require for small engagements, and five were genuinely complex cases.

The firm changes its intake form so that required documents must be supplied before an onboarding is opened, and writes down the threshold below which partner sign-off is not needed. The five complex cases stay with experienced staff, now with a named owner and a tracker. The next sample, a month later, shows the exception rate has dropped sharply, and the remaining exceptions are mostly ones the firm wants a person to handle.

## What to do with the diagnosis

A good diagnosis ends with a short list: the exception rate for the workflow, the three or four causes that drive most of it, the action for each, and a date to sample again. Repeat the sample after each change. If the rate falls and the remaining exceptions are the ones that genuinely need judgement, the business has moved from running on exceptions to running on a process that handles them.
