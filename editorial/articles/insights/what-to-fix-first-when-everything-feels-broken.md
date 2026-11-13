---
hub: insights
record_id: INS-009
slug: what-to-fix-first-when-everything-feels-broken
title: What to fix first when everything feels broken
description: When systems, processes and data all seem to fail at once, do not fix everything. Stabilise first: protect what matters, stop damage, find the constraint.
lead: When systems, processes and data all seem to be failing at once, the instinct is to fix everything. A stabilise-first approach for the first month: protect what matters, stop the damage, then find the one constraint worth fixing.
category: Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Operations
sources:
  - Google SRE - Incident Management: Key to Restore Operations | https://sre.google/sre-book/managing-incidents/
  - Google SRE - Troubleshooting Methodology: A Learning Path | https://sre.google/sre-book/effective-troubleshooting/
  - Five Focusing Steps, a Process of On-Going Improvement | https://www.tocinstitute.org/five-focusing-steps.html
related:
  - Poor data is an operations problem, not just a data problem | /insights/poor-data-is-an-operations-problem-not-just-a-data-problem/
  - Broken handoffs are systems problems | /insights/broken-handoffs-are-systems-problems/
  - What your recurring problems are telling you about your systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
summary: When systems, processes and data all seem to be failing at once, the instinct is to fix everything. A stabilise-first approach for the first month: protect what matters, stop the damage, then find the one constraint worth fixing.
layout: plain
---
There is a particular kind of week that many growing businesses recognise. The CRM data is unreliable, invoices are going out late, an integration has stopped, two key people are on leave, customers are chasing, the monthly report does not reconcile and someone has just discovered that the backups have not run since March. Everything feels broken at once, and every problem has a champion insisting it comes first.

The natural response is to start fixing everything. That is usually the wrong move. An operation under strain cannot absorb many simultaneous changes, and each fix carries its own risk of making something else worse. What is needed first is not a better priority list. It is stability.

> When everything feels broken, the first job is not to fix the most problems. It is to stop the damage spreading, so you can see which problems are real.
>

## "Everything is broken" is a feeling, not a diagnosis

In most cases, everything is not broken. A small number of failures are causing a large number of visible symptoms, and the stress of handling them all makes the whole operation feel fragile. One broken integration can produce late invoices, wrong stock figures, angry customers and a report that does not balance. Fixing those four symptoms separately is four projects. Fixing the integration may be one.

Google's Site Reliability Engineering [guidance on troubleshooting](https://sre.google/sre-book/effective-troubleshooting/) warns against exactly this kind of confusion: chasing symptoms that are not relevant, mistaking correlation for causation, and latching on to the cause of a past problem because it happened before. Those warnings apply as much to a business under pressure as to a failing software service.

## Step 1: Freeze non-essential change

Before fixing anything, stop adding change. Pause new software rollouts, configuration changes, new automations and process redesigns that are not directly needed to stop current damage. Every change made during instability makes it harder to understand what is happening and easier to cause a new failure. Our article on [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/) explains why this matters even in calm periods.

## Step 2: Protect the four things that cannot wait

Some damage compounds quickly and some does not. In the first days, protect:

- **Cash.** Can the business invoice, collect and pay? Late invoicing and missed collections become a liquidity problem fast.
- **Customers.** Are commitments being missed in ways that will lose accounts or breach contracts?
- **Data and security.** Is information being lost, corrupted or exposed? Are backups running, and can they be restored?
- **Legal and compliance obligations.** Are payroll, tax submissions and regulatory deadlines at risk?

Anything that threatens these is handled first. Everything else, however irritating, waits.

## Step 3: Stop the bleeding before finding the cause

Google's [incident guidance](https://sre.google/sre-book/managing-incidents/) summarises the order of work as stopping the bleeding, restoring service and preserving the evidence for finding the root cause. Its troubleshooting guidance makes the same point another way: the first aim is to make the system work as well as it can under the circumstances, because nobody is helped if the system collapses while people investigate.

In a business, stopping the bleeding means temporary measures that contain damage: issuing invoices manually while the integration is down, phoning the ten largest customers to reset expectations, running a manual backup today. These are not solutions. They are holding actions that buy time to diagnose properly. Record each one, because temporary workarounds have a habit of becoming permanent.

## Step 4: Put every problem on one list, with one owner

When everything feels broken, problems usually live in several places: emails, WhatsApp groups, meeting notes and people's heads. Consolidate them into a single list that everyone can see, with one person responsible for keeping it current. Google's incident guidance recommends a single living incident document maintained by the person co-ordinating the response, so that everyone works from the same picture. A shared spreadsheet does the job for a small business.

For each item, record the symptom, the suspected cause, what has been done to contain it, and who owns it. Very quickly, the list will show that several symptoms share a cause.

Agree, too, who speaks to whom. Staff need a short daily update on what is being fixed and what workarounds to use, so they stop inventing their own. Key customers need one honest message about what is affected and when they will next hear from you. Clear, regular communication reduces the volume of chasing, which frees the people doing the fixing.

## Step 5: Find the one constraint behind the most damage

Once things are stable, look for the failure that sits behind the most symptoms or the most serious damage. The Theory of Constraints Institute's [first focusing step](https://www.tocinstitute.org/five-focusing-steps.html) is simply to identify the constraint, on the basis that strengthening any link of a chain apart from the weakest is wasted effort. Fix that first, properly. Then review the list again: some problems will have disappeared, and the next most important one will be clearer.

## An illustrative example

The following is a hypothetical case. A Cape Town wholesale business with 50 staff reaches a point where the owner describes the whole operation as "falling apart". The list compiled in step 4 has 23 items. Grouping them by suspected cause shows that nine trace back to a product data import that failed after a supplier changed its file format, six trace back to one administrator's resignation and the undocumented tasks she used to perform, and the rest are long-standing irritations.

The business contains the damage with manual price checks for a week, fixes the import, and documents the administrator's tasks with her replacement. Within a month, the list is down to the long-standing irritations, which can now be prioritised calmly.

## A simple first-month plan

| Period | Focus | Typical actions |
| --- | --- | --- |
| Days 1 to 3 | Freeze and protect | Pause non-essential change; check invoicing, customer commitments, backups and statutory deadlines |
| Week 1 | Contain | Put temporary workarounds in place for anything damaging cash, customers or data, and record each one |
| Week 2 | Consolidate | Build the single list, assign owners, group symptoms by suspected cause |
| Weeks 3 and 4 | Fix the constraint | Resolve the cause behind the most damage, remove the related workarounds, review the list again |

The timings will vary, but the order should not. Containing before fixing, and fixing one cause properly before starting the next, is what turns a sense of chaos back into a manageable list of work.

## What not to fix first

- **The newest idea.** A crisis is not the time to introduce a new platform or AI tool, however promising.
- **The most visible irritation.** A clunky screen or an ugly report can wait if it is not causing damage.
- **Everything in parallel.** Several partial fixes produce several partial results and a confused team.

## After stability: move to normal prioritisation

Stabilisation usually takes two to four weeks. After that, the business can return to a deliberate method for deciding what to improve and in what order. Our article on [how to decide what technology problem to solve first](/insights/how-to-decide-what-technology-problem-to-solve-first/) sets out that method, and [how to separate urgent systems problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/) helps sort the remaining list.

It is also worth asking why the business reached this point. A crisis where many things fail together often reveals missing foundations: no owner for key systems, no monitoring, no documentation, too much depending on too few people. Those foundations are rarely the most urgent item in the moment, but they are what stops the next crisis.
