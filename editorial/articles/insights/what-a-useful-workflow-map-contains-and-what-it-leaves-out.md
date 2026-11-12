---
hub: insights
record_id: INS-105
slug: what-a-useful-workflow-map-contains-and-what-it-leaves-out
title: What a Good Workflow Map Should Show
description: A workflow map is a working tool, not a diagram for the wall. What it should show, from owners and systems to waiting time and exceptions, and what it should leave out.
lead: A workflow map is a working tool, not a diagram for the wall. What it should show, from owners and systems to waiting time and exceptions, and what it should leave out.
category: Process Mapping
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Process Mapping
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - - Atlassian | https://www.atlassian.com/agile/project-management/raci-chart
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
  - Five Focusing Steps, a Process of On-Going Improvement | https://www.tocinstitute.org/five-focusing-steps.html
related:
  - Why Software Configuration Should Follow Workflow Design | /insights/why-software-configuration-should-follow-workflow-design/
  - What Should Be Measured at Each Stage of a Workflow? | /insights/what-to-measure-at-each-stage-of-a-business-workflow/
  - The hidden cost of operational friction in digital systems | /insights/hidden-cost-of-operational-friction/
summary: A workflow map is a working tool, not a diagram for the wall. What it should show, from owners and systems to waiting time and exceptions, and what it should leave out.
layout: plain
---
Most businesses that try to map a workflow end up with one of two things: a one-line sketch that shows nothing, or a wall-sized diagram that nobody reads after the workshop. Both fail for the same reason. The map was drawn to look like a map, rather than to answer a question someone needs answered. A good workflow map is a working tool. It should let a manager see where time is lost, where responsibility is unclear, and what would break if a step changed.

This article describes what a good workflow map should show, what it should leave out, and how to check that yours is honest. For a method of drawing one, see [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/). The focus here is on the content.

## Start with a clear start and finish

Every workflow has a trigger and an outcome, and the map should say what they are in plain words. "A customer emails to ask for a quote" is a trigger. "A signed quote is filed and the order is released to the warehouse" is an outcome. Without both, a map has no edges, and people argue about where the process really begins. Many disputes about performance are in fact disputes about where the clock starts.

It also helps to say what is out of scope. If credit approval is a separate workflow, mark the point where this one hands over to it and where it returns.

## Show who does each step

The most useful feature of a workflow map is the assignment of each step to a role or person. The familiar swim-lane layout does this by giving each role a horizontal band, so that a handoff appears as a line crossing from one band to another. Handoffs are where delays, errors and dropped work cluster, so a map that hides them has hidden the problem.

Name roles, not individuals. "Credit controller" is more durable than a person's name, and it avoids the map reading as an accusation. If a step has no clear owner, mark it as such. Responsibility frameworks such as the RACI chart, described in Atlassian's guidance, distinguish who is responsible, accountable, consulted and informed, and are a handy way to test a map: if two people are both accountable for the same step, or nobody is, the map has found something real. See also [how to make ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/).

## Show the systems and documents involved

At each step, note where the work happens: which application, which spreadsheet, which paper form, which inbox. This is the part most often omitted, and it is the part that reveals integration problems. If a step ends with someone copying a figure from one screen to another, the map should show that, because it is a candidate for improvement, a theme developed in [when copy and paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/).

The companion exercise is mapping how information moves between systems rather than how people move between tasks, described in [how to map the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/). A good workflow map and a good information map should agree with each other.

## Show the waiting, not only the doing

Lean practitioners use value stream mapping to separate the time work is being actively processed from the time it waits. The distinction matters because in most administrative processes the work is touched for minutes and waits for days. A quote that takes ten minutes to prepare may sit for three days in someone's inbox before it is approved.

A good map therefore carries at least two kinds of information on each step: roughly how long the work takes, and roughly how long it waits before the step starts. Estimates are fine to begin with. What matters is that the waiting is visible, because that is where the largest gains usually lie. Waiting is also the most common casualty of approvals, a pattern covered in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).

## Show the decisions and the exceptions

Real workflows branch. A map that shows only the straight path describes the process as it is imagined on a good day. Include the main decision points, such as whether the customer is on credit terms, whether the order exceeds an approval limit, or whether the item is in stock, and show what happens on each branch.

Then add the exceptions that occur often enough to matter: the rejected invoice, the incomplete form, the customer who changes the order after confirmation. Exceptions frequently consume more effort than the standard path, and they are the cases where staff rely on personal judgement or undocumented habit. Microsoft's guidance on process-focused solution design stresses understanding the business process as it actually runs before configuring software around it, and exceptions are where the actual process hides.

## Show where the rework loops are

Whenever work goes back to an earlier step, such as an order returned to sales for missing information, draw the arrow backwards. Loops are a visible measure of avoidable effort. If a map has several of them, count how often they occur. The method for tracing them is in how to find rework inside a business process.

## What to leave out

Restraint is part of quality. A good map does not try to show:

- **Every click.** Keep to steps a person would recognise as a task, not keystroke detail. Detail belongs in a separate procedure.
- **Several processes at once.** A map that mixes onboarding, billing and support is unreadable. Link between maps instead.
- **The official policy alone.** The map should reflect what happens, not only what the manual says. The gap between the two is explored in why the official process is often not the real process.
- **Software features.** Describe the work, not the buttons. The map must still make sense if the software changes.

## Checks that the map is honest

A map is only useful if it is true. Use these checks before you rely on it.

1. **Walk it with the people who do the work.** Not managers alone. Ask them to follow one real, recent case through the map and say where it differs.
2. **Trace one case end to end.** Pick a job completed last week and follow the paper trail and the system records. Do they match the map?
3. **Ask what happens on a bad day.** If a key person is absent, or electricity is out during load-shedding at a branch, what changes? A map that cannot answer shows a process that depends on luck.
4. **Date it and name an owner.** A map without a date and a responsible person becomes fiction within a year.

## An illustrative example

The following is a hypothetical case. A Cape Town property management company maps its tenant maintenance requests. The first version has five boxes: request received, contractor assigned, work done, invoice paid, tenant informed. It looks tidy and shows nothing.

The second version uses lanes for tenant, property administrator, contractor and finance. It shows that requests arrive by email, WhatsApp and phone, that the administrator re-captures each one into a spreadsheet, that approvals above a set amount wait for the owner, and that the tenant is told only when the invoice is paid. Waiting time between request and contractor assignment averages several days, mostly because of the approvals. Three loops appear: incomplete requests returned to tenants, contractors who decline, and invoices queried by finance. None of these was visible in the five-box diagram. The fixes, a single intake form, a pre-approved spend limit and an automatic update to the tenant, follow almost directly from what the map shows.

## The test of a good map

A workflow map earns its place when a new manager can read it in five minutes and say where the process is slow, who owns each part, and what they would check first if something went wrong. If the map cannot support those conclusions, it is decoration. A map that can is also the right starting point for any decision to automate, as set out in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).
