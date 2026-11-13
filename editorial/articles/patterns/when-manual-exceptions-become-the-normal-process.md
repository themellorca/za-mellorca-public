---
hub: patterns
record_id: PAT-021
slug: when-manual-exceptions-become-the-normal-process
title: When manual exceptions become the normal process
description: An exception is supposed to be unusual. When the workaround becomes routine, the business may be operating a second process beside the official one.
lead: An exception is supposed to be unusual. When staff use the workaround every day, the workaround may have become the real operating model.
category: Manual Work & Administrative Load
published_date: 2026-09-07
updated_date: 2026-09-07
eyebrow: Pattern
tags:
  - Capacity
  - Productivity
  - Scalability
cta_label: Digital Operations
cta_href: /services/digital-operations/
side_title: Commercial value
content_id: CONTENT-000168
pattern_family: Manual Work & Administrative Load
observable_condition: Staff repeatedly bypass or supplement the standard process because ordinary cases no longer fit it.
primary_identification: exception-normalisation and process-design problem
commercial_value_dimensions: Capacity, Productivity, Margin, Scalability
sources:
  - Lean Business-IT Integration, Part Two: Obstacles to Value-Stream Transformation - Lean Enterprise Institute | https://www.lean.org/the-lean-post/articles/lean-business-it-integration-part-two-obstacles-to-value-stream-transformation/
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
  - Process mining overview - Microsoft Learn | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - When copy-and-paste becomes part of the job description | /patterns/when-copy-and-paste-becomes-part-of-the-job-description/
  - Why high-value employees become human middleware | /patterns/why-high-value-employees-become-human-middleware/
  - When people are used to move data instead of make decisions | /patterns/when-people-are-used-to-move-data-instead-of-make-decisions/
summary: Routine workarounds are a signal that the official process and the real process have drifted apart. Making common exception paths explicit can recover capacity and create a workflow that scales without pretending variability does not exist.
---
## Observable condition

The documented process looks simple, but the real work includes side emails, manual overrides, special spreadsheets, extra approvals and experienced staff who know which cases cannot follow the normal route. Each workaround is described as an exception even though the same kinds of exceptions appear every week.

Ask the team how the process works and you hear the official version. Watch the work for a week and a second process appears: the order that needs a credit check the system cannot run, the customer whose contract terms are not in the price list, the supplier who always invoices in a different format, the request that “has to go to Sam”. None of these is rare. Together they may account for a large share of the effort, even if they are a smaller share of the cases.

## Realisation

Repeated exceptions are operational evidence. They can show that the standard process no longer represents the work the business is actually doing. Treating each occurrence as a one-off hides demand that has become predictable.

An exception that happens every week is not an exception in any useful sense. It is a regular type of work that the process design has not caught up with. The longer it is treated as unusual, the longer the business plans capacity, sets targets and evaluates systems against a picture of its own work that is incomplete.

> **Realisation prompt:** if you listed every case last month that left the standard route, how many would you describe as genuinely unexpected?
>

## Identification

This is an **exception-normalisation and process-design problem**.

It sits close to two related patterns: automation that covers only the straightforward path, described in [why manual work persists because automation covers the happy path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/), and exception queues that grow faster than automated throughput. The common thread is a gap between the designed process and the range of work it receives.

## Diagnosis

The mechanism usually appears when business rules have changed faster than the workflow, customer or product variation has increased, required data is missing at the normal decision point, or the process was designed around an ideal case rather than the range of cases the business now handles. People then become the adaptation layer. Their judgement may be necessary, but the surrounding routing, information gathering and control work does not all need to remain improvised.

Lean thinking offers a useful lens here. In a Lean Enterprise Institute article on value-stream transformation, Steve Bell describes unnecessary variation in work as arising from changes in volume, mix and quality, and observes that without standardisation every new task can become a one-off. Manual exceptions are what that variation looks like when the process has no designed response to it.

### How a workaround becomes permanent

1. A case arrives that the process cannot handle, and someone resolves it by hand.
2. The same type of case recurs, and the same person resolves it the same way.
3. The workaround acquires its own tools: a spreadsheet, a shared mailbox, a standing message to another team.
4. New staff are taught the workaround informally, but it never appears in the process map or system configuration.
5. The workaround now has dependencies, and changing it feels risky.

### An illustrative example

*Illustrative only, not a client case.* An order-to-cash process routes orders automatically when the customer has a standard price. Customers with negotiated pricing are flagged for manual review, where a sales administrator checks an email trail for the agreed terms and keys the price by hand. As the business wins larger accounts, the share of negotiated-price orders rises. The administrator's workload grows, order confirmation slows, and pricing errors increase—while the process documentation still describes manual review as an occasional step.

### Warning signs

- Specific people are described as the only ones who can handle certain cases.
- Side spreadsheets or mailboxes exist to track work the main system cannot.
- Cycle-time reports exclude “special cases”.
- Process training is followed by weeks of learning the unofficial routes.
- Staff absence causes particular types of work to stop.

## Commercial impact

The value wrapper is **capacity, productivity, margin and scalability**. Exceptions create extra touches, longer cycle times and uneven service. They also make workload difficult to predict because the official process understates how much coordination is required. As volume grows, headcount can rise simply to absorb exception handling.

There is a risk dimension too. Manual overrides often bypass the checks built into the standard route, and the knowledge needed to handle common exceptions is concentrated in a few people. Both reduce resilience.

## Common misidentification

The visible symptom is often described as staff not following process. That can be true, but enforcement is a weak answer when the process itself repeatedly fails to accommodate ordinary reality. Before tightening compliance, measure why people leave the intended path.

A second misidentification is to automate the standard route harder. Faster processing of straightforward cases does nothing for the work that falls out of them, and can make the exception queue relatively larger.

## Possibility

A stronger operating model separates genuine judgement from repetitive exception administration. Common exception classes can be recognised explicitly, required information can be collected earlier, routing rules can be made visible, and unusual cases can still reach a person without forcing every case into manual handling.

## Intervention

Sample recent work and list every point where the standard route was bypassed. Group those deviations by cause, frequency and commercial consequence. Redesign the highest-volume exception class first. Keep human judgement where it adds value, but remove repeated searching, copying, chasing and routing around it. Then monitor whether the exception rate and total handling time actually fall.

Where the core systems keep event logs, [process mining](https://www.ibm.com/think/topics/process-mining) can make this sampling more objective. IBM describes process mining as applying algorithms to event-log data to build a model of the real process, and identifies conformance checking—comparing the intended process with what the logs show—as one of its main types. That makes deviations measurable rather than anecdotal. It will not see work done entirely in email or spreadsheets, so interviews and observation still matter. See also [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/). Microsoft's [process mining documentation](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) similarly describes the approach as a way to understand real processes and identify bottlenecks and inefficiencies.

### Trade-offs

Not every exception should be designed in. Building rules for rare cases adds complexity and maintenance. The test is frequency and consequence: recurring exceptions with real commercial effect deserve a designed path; genuinely rare ones can stay with a person, provided they are routed visibly. Some exceptions also signal a commercial decision rather than a process gap—for example, whether bespoke terms should be offered at all.

## Practical diagnostic questions

- Which “special cases” happen every week?
- What information is missing when the normal process breaks?
- Which exceptions need judgement and which need only routing or data?
- How much work is invisible in the official process map?
- Would higher volume create proportionally more exception administration?
- Which exceptions depend on a single person's knowledge?

## Bottom line

When the exception happens often enough to be predictable, it deserves to be designed as part of the operating model. Doing so recovers capacity, reduces dependence on individuals and gives the business an accurate picture of the work it actually does.
