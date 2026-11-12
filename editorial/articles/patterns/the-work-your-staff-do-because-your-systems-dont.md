---
hub: patterns
record_id: PAT-014
slug: the-work-your-staff-do-because-your-systems-dont
title: The Work Your Staff Do Because Your Systems Don't
description: Remembering deadlines, recalculating totals, checking rules and keeping private trackers: much of a team's day can be spent supplying capabilities the business's software lacks. Seeing that work for what it is changes what to fix.
lead: Remembering deadlines, recalculating totals, checking rules and keeping private trackers: much of a team's day can be spent supplying capabilities the business's software lacks. Seeing that work for what it is changes what to fix.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Experienced staff keep private spreadsheets, calendar reminders and notes to remember deadlines, apply rules, check entries, recalculate figures and track status that the business's systems do not handle.
primary_identification: Compensating work in which people supply missing or unconfigured system capabilities, creating dependence on individuals.
commercial_value_dimensions: Resilience, revenue, compliance risk and labour capacity
sources:
  - Google SRE - Operational Efficiency: Eliminating Toil | https://sre.google/workbook/eliminating-toil/
  - Poka Yoke - A Resource Guide - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/poka-yoke/
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
related:
  - Why Staff Keep Checking the Same Things Over and Over | /patterns/why-staff-keep-checking-the-same-things-over-and-over/
  - When Your Best People Spend Their Day on Low-Value Work | /patterns/when-your-best-people-spend-their-day-on-low-value-work/
  - The Business Process That Only Works Because Someone Remembers | /patterns/the-business-process-that-only-works-because-someone-remembers/
summary: Remembering deadlines, recalculating totals, checking rules and keeping private trackers: much of a team's day can be spent supplying capabilities the business's software lacks. Seeing that work for what it is changes what to fix.
layout: plain
---
## Observable condition

Ask an experienced administrator to talk you through a normal day and listen for certain phrases. "I keep a note of which clients need their certificate renewed." "I double-check the discount, because the system does not apply it properly on mixed orders." "I have my own spreadsheet of which jobs are waiting for parts." "I set a reminder in my calendar to chase the deposit." "I know not to quote that product to customers in that region."

Each phrase describes work the person does to supply something the business's systems cannot: a reminder, a rule, a calculation, a status, a piece of validation. The software holds the records, but the person holds the logic around them. Over the years, the business has quietly come to depend on that logic, and on the people who carry it.

An illustrative example: a Free State agricultural equipment dealer with about thirty-five staff relied on one service administrator to know which machines were due for their warranty services. The dealer management system recorded each sale and each service, but it did not prompt anyone when the next service fell due. The administrator kept a private spreadsheet, updated it weekly and phoned customers. When she was on extended leave, warranty service bookings fell noticeably, and several customers missed services that affected their warranty cover.

## Realisation

This work is easy to overlook because it looks like competence. The person who remembers every renewal date, catches every pricing error and knows every exception is rightly valued. But much of what they are doing is functioning as part of the system: they are the reminder engine, the validation rule and the status tracker that the software does not provide.

Compensating work has a particular shape. It is usually invisible in job descriptions, done by experienced people, kept in private tools such as personal spreadsheets, calendars and notebooks, and lost when those people leave or are absent. Unlike the visible effort of re-keying data, it does not look like waste. It looks like care.

Google's site reliability engineering guidance on toil distinguishes between automating a manual task and eliminating it at source by changing the system so the task is no longer needed. Compensating work is a strong candidate for the second approach. The fix is rarely to make the person faster. It is to give the system the capability the person has been supplying.

**Realisation prompt:** which of your staff keep a private list, spreadsheet or calendar that the business would struggle without?

## Identification

This is a pattern of compensating work: people performing functions that belong in systems, such as remembering, validating, calculating, routing and tracking, because the systems in use do not perform them or have not been configured to. The visible symptom is a reliance on particular individuals and their private tools. The common assumption is that this is simply what experience looks like. The structural cause is a gap between what the business needs its systems to do and what they actually do, filled by human effort.

It is close to [why high-value employees become human middleware](/patterns/why-high-value-employees-become-human-middleware/), which looks at people moving information between systems. Compensating work is broader: it includes the logic, rules and memory people add on top of systems, even where there is only one system involved. Telling the difference between a person problem and a system problem is the subject of [how to tell whether you have a people problem or a systems problem](/insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/).

## Diagnosis

Compensating work usually falls into five types:

- **Memory.** Remembering when something is due: renewals, follow-ups, service intervals, contract end dates. The system holds the date but does not act on it.
- **Rules.** Applying business rules the system does not enforce: which discount applies, which customers need a deposit, which products cannot be sold together.
- **Validation.** Checking that entries are correct and complete because the system accepts anything. The Lean Enterprise Institute's description of poka-yoke makes the point that preventing errors at source is more effective than inspecting for them afterwards.
- **Calculation.** Working out totals, allocations or commissions in a spreadsheet because the system's own figures are not trusted or not available in the right form.
- **Status.** Keeping a private view of where work stands because the system shows records but not progress.

Behind each type sits one of three causes: the system lacks the capability, the system has it but it has never been configured, or the business outgrew the original set-up and nobody revisited it. The second cause is more common than many owners expect.

## Commercial impact

The commercial value at stake is resilience, revenue, risk and capacity.

Resilience suffers because critical business logic lives in individuals, the condition described in [the cost of key-person operational dependency](/impact/key-person-operational-dependency/). Revenue is affected when reminders and follow-ups that depend on memory are missed: renewals lapse, services are not booked, deposits are not collected. Risk rises where rules are applied by hand and occasionally not applied at all. Capacity is consumed by experienced staff doing work a configured system could do, leaving less of their time for judgement, customers and improvement.

## Common misidentification

Compensating work is often addressed by documentation alone: writing down what the experienced person does so someone else can do it. That is a useful first step and reduces key-person risk, but it leaves the work with people. The documentation describes the gap; it does not close it.

It is also often taken as evidence that the business needs entirely new software. Sometimes it does. But before replacing a system, it is worth checking whether the missing capability is already there and simply unused.

## Possibility

In a better state, the system remembers dates and prompts the right person, enforces the business's rules at the point of entry, rejects incomplete records, calculates the figures people need and shows the status of work without anyone maintaining a private tracker. Experienced staff still apply judgement, but on the cases that genuinely need it.

IBM describes workflow automation as software executing all or part of a process in place of manual tasks. For the equipment dealer, that might mean using the dealer system's service scheduling feature, or a simple workflow connected to it, to generate service reminders automatically from the sale date and machine hours, with the administrator handling customer conversations rather than maintaining the list.

## Intervention

1. **Find the private tools.** Ask staff which personal spreadsheets, calendar reminders, notebooks and email folders they rely on to do their jobs. Treat each one as evidence of a capability gap.
2. **Classify the gap.** For each, decide whether it supplies memory, rules, validation, calculation or status.
3. **Check existing capability.** Before buying anything, ask whether the current system can already do this through configuration, workflow rules, required fields or alerts.
4. **Prioritise by consequence.** Start with gaps where a lapse loses revenue, breaks a rule with financial or legal effect, or depends on one person.
5. **Move the logic into the system.** Configure, extend or connect systems so that the capability is performed consistently, then retire the private tool.
6. **Keep the person for judgement.** Redesign the role around the decisions and relationships that need experience. The approach in [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) applies here.

## Diagnostic questions

- Which important dates, rules or exceptions in your business are known only to particular people?
- How many private spreadsheets or trackers support your core processes?
- What happens to reminders and follow-ups when a key administrator is on leave?
- Which features of your current systems were bought but never configured?
- Where do staff check the system's figures by hand because they do not trust them?

## Bottom line

Much of the work employees do exists because systems do not remember, enforce, validate, calculate or track what the business needs. That work looks like experience and care, but it leaves the business dependent on individuals and exposed whenever they are absent. Finding the private tools, naming the gaps they fill and moving that logic into the systems frees experienced people for the judgement only they can provide.
