---
hub: patterns
record_id: PAT-037
slug: when-staff-get-blamed-for-errors-their-systems-created
title: When Staff Get Blamed for Errors Their Systems Created
description: A clerk keeps sending invoices with wrong amounts, a dispatcher keeps missing orders, a new hire seems slow. Often the errors trace back to data that arrives late, incomplete or wrong from another system, and the business is managing a person when it should be fixing a connection.
lead: A clerk keeps sending invoices with wrong amounts, a dispatcher keeps missing orders, a new hire seems slow. Often the errors trace back to data that arrives late, incomplete or wrong from another system, and the business is managing a person when it should be fixing a connection.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Particular roles repeatedly make the same kinds of errors or appear slow, the business responds with warnings, retraining or replacement, and the errors continue with the next person in the role.
primary_identification: Misattributed integration failure, in which errors created by late, incomplete or inconsistent data passed between systems surface at the employee who acts on it and are treated as individual performance issues.
commercial_value_dimensions: Staff retention, capacity, quality, risk and customer experience
sources:
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
  - Managing human failures: Overview - HSE | https://www.hse.gov.uk/humanfactors/topics/humanfail.htm
  - Poka Yoke - A Resource Guide - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/poka-yoke/
related:
  - Why the Same Problems Return After You Replace the System | /patterns/why-the-same-problems-return-after-you-replace-the-system/
  - Why Staff Keep a Spreadsheet Between Two Business Systems | /patterns/why-staff-keep-a-spreadsheet-between-two-business-systems/
  - When Your CRM Knows Something Your Finance System Does Not | /patterns/when-your-crm-knows-something-your-finance-system-does-not/
summary: A clerk keeps sending invoices with wrong amounts, a dispatcher keeps missing orders, a new hire seems slow. Often the errors trace back to data that arrives late, incomplete or wrong from another system, and the business is managing a person when it should be fixing a connection.
layout: plain
---
## Observable condition

The accounts clerk has been warned twice about invoicing errors. Wrong quantities, missing delivery charges, an occasional duplicate. She has been retrained on the accounting system and asked to double-check her work. The errors have reduced a little but not stopped, and her manager is starting to wonder whether she is right for the job.

In another part of the business, the dispatch supervisor's second hire in a year is struggling. Orders are missed, priorities are wrong, customers complain. The first person in the role had the same problems and left.

In both cases, the business sees a person who is not performing. It responds the way businesses usually respond to performance problems: conversations, training, closer supervision and, eventually, replacement. What it rarely does is trace each error back to the information that person was given.

An illustrative example: a Johannesburg wholesaler with around thirty-five staff found, after reviewing a month of invoicing errors line by line, that most came from delivery notes. Drivers recorded short deliveries and substitutions on paper; the warehouse system was updated later, sometimes after the invoice had been raised from the original order. The clerk was invoicing exactly what the system showed. The system was wrong at the moment she used it.

## Realisation

When information passes between systems, or between a system and a person, errors created upstream tend to appear downstream. The person at the end of the chain is the one whose name is on the invoice, the dispatch note or the customer email. They are visible. The connection that delivered late, partial or inconsistent data is not.

Fields that deal with high-consequence work have learned to look past the individual. The UK Health and Safety Executive treats human failure as normal and predictable, and its guidance on investigations warns against stopping at "operator error" instead of examining the factors that shaped performance, such as poor design and time pressure. Google's site reliability engineering practice uses blameless postmortems that focus on the systemic causes of an incident, on the basis that blame encourages people to hide problems and that processes, not people, are what can be fixed reliably.

These principles apply just as well to an invoicing desk or a dispatch office.

**Realisation prompt:** is there a role in your business where the same errors have continued through more than one person?

## Identification

This is a pattern of misattributed integration failure: errors caused by information that arrives late, incomplete or inconsistent from another system are treated as the individual performance problem of the person who acts on it. The visible symptom is recurring mistakes or slowness in a particular role. The common assumption is that the person lacks care, skill or attention. The structural cause is a gap in how data moves between systems and steps, which places the burden of catching errors on whoever is last in line.

The Insight on [how to tell whether you have a people problem or a systems problem](/insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/) offers a general test. This Pattern looks at the specific case where the problem enters through a connection between systems.

## Diagnosis

- **Data arrives after it is needed.** A system is updated in batches, overnight or by hand, so the person acting on it sees yesterday's position.
- **Data arrives incomplete.** A connection carries some fields but not others, so the person fills gaps from memory, email or guesswork.
- **Two systems disagree.** The order says one thing, the stock system another. The person must choose, and is blamed when they choose wrongly.
- **Checking is the job, but nobody says so.** The role has quietly become one of catching upstream errors, but it is measured and managed as if the inputs were reliable.
- **Errors are investigated by person, not by cause.** Mistakes are recorded against the employee, so patterns across people and time are never seen.

## Commercial impact

The commercial value at stake is staff retention, capacity, quality and customer experience.

Replacing an employee who was not the cause brings recruitment and onboarding costs, then the same errors with a less experienced person. Good staff leave roles where they are blamed for problems they cannot control. Managers spend time on performance conversations rather than on the fix. Customers continue to receive wrong invoices and missed deliveries, because nothing upstream has changed.

There is also a cultural cost. Where errors lead to blame, people stop reporting them and start building private workarounds, which hides the information the business needs to find the cause. The Pattern on [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/) describes where those workarounds lead.

## Common misidentification

The most common response is retraining on the system. If the person was using the system correctly and the data was wrong, training changes nothing. The second is more checking: a second person reviews the work. That catches some errors at double the labour cost and leaves the cause untouched.

Not every performance problem is a systems problem. The point is that the question should be asked, with evidence, before a person is judged.

## Possibility

In a better state, recurring errors are investigated by tracing them to their source. Each error is categorised by where it entered: wrong input, late update, missing field, conflicting systems or genuine slip. Patterns are reviewed without blame. Where the cause is upstream, the fix goes upstream: a connection updated in real time, a required field, a check that stops a conflicting record. Lean practice calls this poka-yoke, or error-proofing: simple measures that prevent a mistake at its source or warn before it happens. The Insight on [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/) explores this balance.

For the wholesaler, that meant capturing delivery exceptions on a device at the point of delivery and holding invoices until delivery was confirmed in the system.

## Intervention

1. **Pause the judgement.** Before a performance process, review a sample of the errors in detail.
2. **Trace each error to its source.** For each mistake, identify the information the person was working from and where it came from.
3. **Categorise the causes.** Separate errors that came from upstream data from those that came from the person's own actions.
4. **Look across people and time.** Check whether predecessors or colleagues in similar roles made the same errors.
5. **Fix at the source.** Change the timing, completeness or validation of the data feeding the role.
6. **Error-proof the step.** Add checks that stop the most common upstream errors reaching the person at all.
7. **Review without blame.** Make it normal to report errors and their causes, so the next pattern is found sooner.

## Practical diagnostic questions

- Which roles in your business have a history of the same errors across different people?
- When an error is found, do you record its cause or only who made it?
- Does the person making the error work from information supplied by another system or team?
- How current and complete is that information at the moment they use it?
- Have you replaced or retrained someone and seen the errors continue?

## Bottom line

When data moves badly between systems, the errors land on the person who uses it, and that person is easy to blame. Tracing recurring mistakes to their source before judging performance protects good staff, saves the cost of replacing them and fixes the problem where it starts. A role that keeps failing through different people is usually telling you about its inputs.
