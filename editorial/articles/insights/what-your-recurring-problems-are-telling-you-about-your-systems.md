---
hub: insights
record_id: INS-023
slug: what-your-recurring-problems-are-telling-you-about-your-systems
title: What your recurring problems are telling you about your systems
description: A recurring problem is evidence about how the business is set up. How to record recurring problems, read the patterns and trace the root cause.
lead: A problem that keeps coming back is not bad luck. It is evidence about how the business is set up. How to record recurring problems, read the patterns they form and trace them back to the data, ownership, handoff or design weakness that keeps producing them.
category: Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Operations
sources:
  - What Is a Root Cause Analysis? - IBM | https://www.ibm.com/think/topics/root-cause-analysis
  - 5 Whys - What is it? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/5-whys/
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
related:
  - Broken handoffs are systems problems | /insights/broken-handoffs-are-systems-problems/
  - Poor data is an operations problem, not just a data problem | /insights/poor-data-is-an-operations-problem-not-just-a-data-problem/
  - Why your CRM is not the problem you think it is | /insights/why-your-crm-is-not-the-problem-you-think-it-is/
summary: A problem that keeps coming back is not bad luck. It is evidence about how the business is set up. How to record recurring problems, read the patterns they form and trace them back to the data, ownership, handoff or design weakness that keeps producing them.
layout: plain
---
Most businesses have a handful of problems that never quite go away. The same customer complaint every month. The same stock discrepancy at every count. The same report that has to be corrected before every board meeting. Each time, someone fixes it, and each time it comes back.

It is tempting to treat these as the normal friction of running a business. They are better treated as evidence. A problem that recurs is telling you that something in the way the business is set up keeps producing it. Fixing the occurrence deals with today. Reading the pattern deals with the cause.

## Incidents and problems are not the same thing

IT service teams draw a useful line between an incident and a problem. An incident is a single event: this invoice was wrong, this order was late. A problem is the underlying cause that produces incidents, often many of them. Most businesses manage incidents well, because there is always someone to fix the invoice. Few manage problems at all, because nobody is asked to look across the incidents.

IBM's explanation of [root cause analysis](https://www.ibm.com/think/topics/root-cause-analysis) puts it bluntly: addressing only symptoms is an inherently reactive process that all but guarantees a recurring, and often worsening, series of problems. The fix is not more effort on each incident. It is a habit of asking what keeps causing them.

## Start by writing them down

Recurring problems are easy to underestimate because they are remembered as a vague sense of "this again". A simple problem log changes that. It does not need special software. A shared sheet with these columns is enough to start:

- date and workflow affected;
- what went wrong, in plain words;
- how it was found, and by whom;
- how long it took to fix;
- what the immediate fix was;
- whether it has happened before.

After a month or two, sort the log by workflow and by type of failure. IBM describes the Pareto chart as a way to display causes in descending order of frequency. In most businesses a few recurring problems account for most of the time lost. Those are where to look first.

## Reading the pattern: what recurring problems usually point to

Recurring problems tend to cluster around a small number of systemic causes. Learning to recognise them makes diagnosis much faster.

| If the problem keeps recurring as... | It often points to... |
| --- | --- |
| Figures that disagree between reports or departments | No agreed system of record for that data, or several copies being maintained by hand |
| Work that stalls or is forgotten between teams | A handoff with no owner, no queue and no notification |
| The same data entry mistakes | Information being retyped rather than captured once and passed on |
| Problems that appear at month-end, peaks or holidays | A process with no spare capacity, or one that depends on a particular person |
| Failures after a software update or settings change | Uncontrolled configuration and no testing before changes go live |
| Things that "should have happened automatically" but did not | Automations or integrations that nobody monitors |
| Customers asking where their order or request is | Status information that exists internally but is not visible or shared |

The value of this mapping is that it moves the conversation from "who made the mistake" to "what made the mistake likely". That distinction is the subject of [how to tell whether you have a people problem or a systems problem](/insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/).

## Ask why until you reach something you can change

Once a recurring problem is chosen, trace it back. The Lean Enterprise Institute describes the [5 Whys](https://www.lean.org/lexicon-terms/5-whys/) as asking why repeatedly whenever a problem is encountered, to get beyond the obvious symptoms to the root cause. It also notes that the number five is not the point: the aim is to keep asking until the root cause is reached and eliminated.

In a business systems context, a typical chain might run like this. Invoices go out with the wrong prices. Why? The prices on the order were out of date. Why? Sales quotes from a price list in a spreadsheet, while finance invoices from the accounting system. Why? The two were never connected, and price updates are made in the accounting system only. Why does that matter? Because there are two sources of price data and nobody owns keeping them aligned. The last answer is the one you can act on: decide which system holds prices and make the other read from it.

Stop when you reach a cause that is within the business's control and that, if changed, would stop the problem recurring. Stopping too early produces another workaround. Going too far ends in abstractions such as "we grew too fast" that nobody can act on.

## Keep the review blameless

Recurring problems often involve the same people, because the same people do the work. If reviewing them feels like an accusation, people will hide problems or fix them quietly, and the log will dry up. Google's guidance on [postmortem culture](https://sre.google/sre-book/postmortem-culture/) asks reviewers to assume that everyone involved had good intentions and did the right thing with the information they had. The same guidance recommends agreeing in advance what kind of event triggers a review, so reviews are routine rather than a sign that someone is in trouble.

A practical version for a smaller business: any problem that recurs three times in a quarter, or that reaches a customer, gets a short written review of what happened, why, and what will change.

## Why recurring problems get more expensive

A recurring problem rarely stays the same size. As volume grows, it happens more often. As staff change, the knowledge of how to fix it quickly is lost. As more checks are added to catch it, the process slows for every case, not just the faulty ones. The way small issues compound is set out in [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/).

There is also a cost in attention. Teams that spend their days firefighting have little capacity left for improvement, which is exactly why the problems persist. Planned attention to the underlying causes almost always costs less than repeated emergency fixes, the argument made in [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/).

## An illustrative example

The following is a hypothetical example. A South African wholesale business keeps a problem log for two months. Of the entries, the largest group concerns deliveries sent to old addresses. Each one was fixed by re-sending the goods and updating the address. Tracing the cause shows that customer addresses are held in the CRM, the accounting package and the courier booking tool, and that updates are only made in whichever system the person happens to be using.

The business chooses the accounting package as the single place where delivery addresses are maintained and has the other two read from it. The re-delivery entries in the log fall away. Nobody had to work harder; one cause was removed.

## Turning the pattern into a plan

Recurring problems are one of the cheapest sources of improvement evidence a business has, because they are already happening and already costing money. Record them, sort them, trace the most frequent back to a cause you can change, and check the log afterwards to see whether the change worked. Over time, the log becomes a record of how the business's systems are improving, rather than a list of the same complaints.
