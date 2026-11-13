---
hub: impact
record_id: CPS-404
slug: project-deadlines-slipping-hidden-dependencies-avoidable-delay-cost
title: Deadlines slip when dependencies are hidden: What avoidable delay costs
description: Projects rarely run late for one big reason. When dependencies between teams, suppliers and approvals are hidden, small waits compound into weeks of delay.
lead: Projects rarely run late for one big reason. When dependencies between teams, suppliers and approvals are not visible, small waits compound into weeks of extended team time, delayed benefit and standing charges.
category: Project Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Project Operations
commercial_domain: Project Operations
primary_pain: Project deadlines slipping because task and supplier dependencies are not visible
primary_cost_mechanism: Extended team time, delayed benefit, contractor and equipment standing charges, rescheduling and management time
sources:
  - Task dependencies in project management: Types, examples, and best practices | https://monday.com/blog/project-management/task-dependencies/
  - Critical path method (CPM): steps, float, examples [2026] • Asana | https://asana.com/resources/critical-path-method
  - Configure work item linking - Atlassian Support | https://support.atlassian.com/jira-cloud-administration/docs/configure-issue-linking/
related:
  - Waiting weeks for management reports: What late visibility costs the business | /impact/waiting-weeks-for-management-reports-late-visibility-cost/
  - When every decision waits for one person: The cost of a decision bottleneck | /impact/work-stalls-when-decision-maker-unavailable-cost/
  - Which version is final? The cost of teams working from different copies | /impact/conflicting-document-versions-rework-decision-cost/
summary: Projects rarely run late for one big reason. When dependencies between teams, suppliers and approvals are not visible, small waits compound into weeks of extended team time, delayed benefit and standing charges.
layout: plain
---
## The date that was always going to slip

A project plan shows a go-live in the last week of the quarter. Every task has a start date, an owner and a duration. Everyone has agreed. Then, three weeks out, the test environment turns out to need a licence that procurement has not ordered, the training cannot start until the data migration is signed off, and the supplier's installer is booked on another site until the following Thursday. Nobody was hiding anything. These facts simply lived in different heads and different documents, and the plan did not show how one piece of work was waiting on another.

Hidden dependencies are one of the most common reasons projects run late. The cost is rarely a single dramatic failure. It is a few weeks of drift that add up to extended team time, delayed revenue, standing charges and the quiet damage of broken promises to customers.

## What a dependency is, and why it hides

A dependency is a relationship between pieces of work in which one cannot start or finish until another has. Monday.com's guide to [task dependencies](https://monday.com/blog/project-management/task-dependencies/) describes a dependent task as one that needs other tasks to be completed or started before work can begin, and notes that mapping dependencies early helps teams spot fragile handoffs, see which delays will cascade and set expectations before dates become commitments.

Dependencies stay hidden in ordinary businesses for predictable reasons.

- **The plan is a list, not a map.** A spreadsheet of tasks with dates can look complete while hiding the order in which things must happen.
- **Dependencies cross teams.** Finance, IT, procurement, a supplier and the customer each hold part of the chain, and no one sees all of it.
- **External dependencies get less attention.** Waiting for a client sign-off, a municipal approval or a courier is outside the team's control, so it tends to be assumed rather than tracked.
- **People only discover dependencies when they hit them.** The task owner finds out on the day work should start.
- **Status is reported by exception.** Everything is "on track" until it suddenly is not. The pattern is covered in [work status unknown, delays discovered late](/impact/work-status-unknown-delays-discovered-late-cost/).

## Warning signs

- a task that has been "ready to start" for two weeks because it is waiting on something nobody has named;
- status meetings that are mostly people explaining what they are waiting for;
- repeated requests like "who has the latest version?" or "has that been approved?";
- dates moved without anyone knowing what else moves with them;
- a project manager who personally chases the same five people every week;
- deadlines that slip in the final fortnight rather than gradually.

Plans kept in inboxes and spreadsheets are especially prone to this, as discussed in [projects managed through email and spreadsheets](/impact/pain-projects-managed-through-email-spreadsheets/).

## How the pain turns into money

- **Extended team time.** If a project runs three weeks late, the people on it are paid for three more weeks, either on the project or idle while they wait.
- **Delayed benefit.** A new system, product or branch that goes live late delays the revenue or savings it was meant to deliver.
- **Standing charges.** Hired equipment, contractors on retainer, site costs and short-term leases continue to accrue.
- **Rework and rescheduling.** Bookings must be moved, training repeated and customers re-informed. Suppliers may charge to reschedule.
- **Penalties and strained relationships.** Contractual penalties, goodwill discounts or a lost follow-on project.
- **Management time on reporting.** The more uncertain the schedule, the more time senior people spend asking for updates, as set out in [weekly manual progress reporting](/impact/weekly-manual-progress-reporting-status-administration-payroll-cost/).

Asana's guide to the [critical path method](https://asana.com/resources/critical-path-method) defines the critical path as the longest sequence of dependent tasks needed to complete a project, and says it shows which tasks must finish on time to avoid delaying the entire project. A schedule that does not show the critical path cannot show which delays are expensive and which are harmless.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical R3.2 million systems rollout at a Johannesburg logistics firm that overruns its deadline by three weeks because of dependencies discovered late.

| Assumption | Value |
| --- | --- |
| Core project team | 8 people at R450 an hour, 40 hours a week |
| Delay | 3 weeks |
| Benefit delayed per week (efficiency savings and billing) | R60,000 |
| Contractor and equipment standing charges | R12,000 a week |
| Rescheduling, retraining and management time | 40 hours at R550 |

- Extended team time: 8 × R450 × 40 × 3 = R432,000
- Delayed benefit: 3 × R60,000 = R180,000
- Standing charges: 3 × R12,000 = R36,000
- Rescheduling and retraining: 40 × R550 = R22,000
- **Illustrative total: about R670,000**

The sum is a fifth of the project budget, caused by facts that were knowable at the start. The figure assumes the team is retained at full cost, which will not always be the case, but the delayed benefit and standing charges apply regardless.

## Why it is tolerated

Most delays are small when they first appear, and small delays are absorbed. Project managers are optimistic by temperament and do not want to escalate prematurely. Mapping dependencies feels like planning overhead for a project that already has a plan. The cost of a delay is spread across budgets and appears under other names: overtime, extended contracts, late billing. Few businesses add them up per project.

## When it becomes urgent

- the project has a contractual or regulatory deadline;
- several projects share the same people or suppliers;
- a past project ran over for reasons that sound familiar;
- load-shedding, supplier lead times or seasonal peaks reduce the room for slack;
- a new project manager inherits a plan they did not build.

## What better looks like

You do not need heavy tooling to make dependencies visible. You need the habit of asking what each task is waiting for, and a place to record the answer.

1. **Run a dependency session at the start.** Put the whole team and key outside parties in a room. For each deliverable ask: what must exist before this can start, and who provides it?
2. **Record dependencies explicitly.** Use the linking feature of your project tool. Jira, for example, lets administrators [configure work item linking](https://support.atlassian.com/jira-cloud-administration/docs/configure-issue-linking/) so that related items can be connected. A line in a spreadsheet column titled "waiting on" is better than nothing.
3. **Identify the critical path.** Know which chain of tasks controls the end date and protect it.
4. **Treat external dependencies as risks.** Give each one an owner, a date to confirm, and a fallback.
5. **Review weekly by dependency, not just by task.** Ask "what is blocked and by whom?" rather than "are you on track?". The design of good handoffs is covered in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/).
6. **Make ownership explicit.** Every dependency needs a named person who is responsible for delivering it, as explained in [unclear responsibilities and dropped work](/impact/unclear-responsibilities-duplicated-dropped-work-cost/).
7. **Escalate early.** A dependency at risk should reach the sponsor while there is still time to act.

## Practical next actions

1. Take your most important live project and ask each owner: "what are you waiting for?"
2. List the answers in one view, with the person who is expected to deliver each one.
3. Mark the chain of tasks that determines the end date.
4. Confirm every external dependency this week, including dates and contact people.
5. Change the weekly meeting to start with blocked items.
6. After the project, compare planned and actual delays and note which dependencies were missed.

## Bottom line

Slipping deadlines usually have a cause that was visible to somebody. Making dependencies explicit turns private knowledge into shared information, so that delay is spotted weeks earlier and decisions can be made while they are still cheap. The cost of an hour spent mapping dependencies is small beside the cost of a three-week surprise.
