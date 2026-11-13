---
hub: insights
record_id: INS-001
slug: why-your-business-feels-harder-to-run-than-it-should
title: Why your business feels harder to run than it should
description: The everyday friction that slows a business down, and why treating work as one connected system, not a collection of separate tasks, makes it easier to run.
lead: The everyday friction that slows a business down, and why treating work as one connected system, not a collection of separate tasks, makes it easier to run.
category: Operations
published_date: 2026-09-08
updated_date: 2026-09-08
eyebrow: Operations
sources:
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Conway's Law | https://www.melconway.com/Home/Conways_Law.html
  - Collaborative Overload - Harvard Business Review | https://hbr.org/2016/01/collaborative-overload
related:
  - How much manual work is hiding inside your business? | /insights/how-much-manual-work-is-hiding-inside-your-business/
  - Why work gets lost between teams | /insights/why-work-gets-lost-between-teams/
  - How to map a business workflow without making it complicated | /insights/how-to-map-a-business-workflow-without-making-it-complicated/
summary: The everyday friction that slows a business down, and why treating work as one connected system, not a collection of separate tasks, makes it easier to run.
layout: plain
---
The feeling that a modern business is harder to run than it should be is not a mystery. Across teams, data and processes, friction accumulates as handoffs slip, context shifts and decisions depend on incomplete signals. The result is not just slower work; it is a drift of outcomes away from what leadership intends.

The core insight is that operational performance emerges from how work flows across boundaries, not from isolated fixes at the edge. When teams are left to guess what matters, they optimise for local concerns rather than the company's shared objectives.

This article unpacks the layers of friction that compound over time and offers a practical frame for resolving them. The aim is not to blur responsibility but to align incentives, data and governance so that the right information is available at the right moment and the next action is clear to the person who must act.

## What the feeling usually describes

Leaders rarely describe this problem in systems language. They describe symptoms: simple requests take several emails, nobody is quite sure who has the latest version, the same question gets answered differently by different teams, and good people spend their days chasing rather than doing. Each symptom is small. Together they create a sense that effort no longer converts into progress at the rate it once did. Harvard Business Review reports [research on collaborative overload](https://hbr.org/2016/01/collaborative-overload) finding that at many companies people spend roughly four-fifths of their time in meetings or responding to colleagues' requests.

That sense is often strongest in businesses that have grown. Work that once happened inside one team, with everyone in the same conversation, now crosses several teams, systems and approval steps. The work itself may not have become harder. The path it travels has become longer and less visible.

## Root forces behind operational drag

Operational drag often originates where information is siloed, where processes depend on outdated handoffs and where incentives reward local optimisation rather than system-wide outcomes. When teams operate with incompatible data models, dashboards that tell different stories or approvals that require multiple sign-offs, work stalls.

The absence of a single source of truth creates cognitive load: people must reconcile conflicting signals and re-create context for every decision. In this pattern, speed is sacrificed to perception, and reliability declines as teams reinvent the same solutions in parallel.

Several mechanisms tend to reinforce one another:

- **Handoffs without context.** Work passes from one team to the next, but the reasons, constraints and promises made to the customer stay behind. The receiving team either asks again or guesses. The Insight on [why broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/) explores this in detail.
- **Systems that mirror the organisation chart.** Melvin Conway observed in 1968 that organisations which design systems tend to produce designs that copy their own communication structures. When each department selects and configures its own tools, the result is often a set of systems that work well inside each team and poorly between them.
- **Manual work that scales with volume.** Google's Site Reliability Engineering book describes "toil" as work that is manual, repetitive, automatable and scales linearly as a service grows, and notes that toil tends to expand if left unchecked. Business operations show a similar dynamic: re-keying, chasing and reconciling grow in step with transactions until they crowd out improvement work.
- **Measures that disagree.** When teams calculate the same metric differently, meetings are spent reconciling rather than deciding, and each team can show progress against its own version of the goal. See [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).
- **Approvals added and never removed.** Each sign-off was introduced in response to a real problem. Few are reviewed once that problem has passed, so the approval path only lengthens.

The practical consequence is a quiet erosion of trust in processes. Leaders observe missed commitments, duplicated effort and inconsistent quality. What appears as a software problem often hides a governance and workflow problem. Recognising that friction is a system property—arising from design choices, not just faulty execution—changes the playbook from patching symptoms to redesigning flows.

## An illustrative example

*Illustrative only, not a client case.* A customer asks for a change to an existing order. Sales records the request in an email thread. Operations needs it in the order system, finance needs to know whether pricing changes, and the warehouse needs a revised pick list. Each team acts correctly within its own process, but nobody owns the change from request to completion. The customer chases twice, two people re-enter the same details, and the revised invoice goes out after the delivery. No individual made a serious error. The friction lives in the gaps between steps.

## Why adding software rarely fixes it

A common response is to buy a tool for the most visible pain: a new project platform, another dashboard, an extra workflow app. Sometimes that helps. Often it adds another boundary that work must cross and another place where information can be out of date. The Insight on [why more software can make the business harder to run](/insights/why-more-software-can-make-the-business-harder-to-run/) sets out that mechanism. The underlying question is not "which tool?" but "how should this work flow, and who owns each step?"

## Warning signs

- Status updates require asking a person rather than looking at a system.
- The same customer or order information is entered in more than one place.
- Management meetings spend time agreeing the numbers before discussing them.
- Processes work only when particular individuals are available.
- Headcount in coordinating roles grows faster than the work being coordinated.

## Practical steps to reclaim control

- Map end-to-end workflows with a focus on handoffs, not just tasks. Identify where context is lost and create lightweight handles so the next actor can act without re-creating it.
- Invest in a shared data model and a common set of metrics that tell a single truth about performance, quality and lead times.
- Align incentives so teams are rewarded for system-level outcomes rather than silo-based wins. This often requires governance changes and cross-functional decision rights.
- Adopt a minimal viable orchestration layer that coordinates the most critical flows and provides visibility into bottlenecks without becoming a heavy, brittle control plane.

## A practical diagnostic

Choose one process that matters commercially, such as order to cash or enquiry to onboarding. Follow a handful of real cases from start to finish and record:

1. How many teams and systems each case passes through.
2. Where information is re-entered or re-requested.
3. Where work waits, and what it is waiting for.
4. Who, if anyone, owns the case from end to end.
5. Which steps exist because of an earlier problem that may no longer apply.

The answers usually show that a small number of handoffs account for most of the delay and rework. Those are the places to start.

## Trade-offs

Redesigning flows takes management attention that is already scarce, and a full transformation programme can create more disruption than it removes. A narrower approach, one process and its worst handoffs at a time, is slower to show company-wide change but easier to sustain. Some friction is also deliberate: controls that protect cash, data or safety should be made efficient, not removed.

## Conclusion: a system view of friction

Reducing friction is not about more processes; it is about more coherent design. By viewing operations as a live system with clear signals, shared data and aligned incentives, leadership can restore velocity while preserving quality. The outcome is not only faster cycles but a more predictable and sustainable trajectory for the business.

The time to act is usually when growth plans assume more coordinating staff in proportion to volume, or when leaders find they can no longer see the state of important work without asking. At that point the business is paying for friction in capacity, and an independent [digital systems audit](/services/digital-systems-audit/) can show where the constraint actually sits.
