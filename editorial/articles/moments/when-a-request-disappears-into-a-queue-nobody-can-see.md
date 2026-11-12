---
hub: moments
record_id: STORY-ANGLE-000073
slug: when-a-request-disappears-into-a-queue-nobody-can-see
title: When a Request Disappears Into a Queue Nobody Can See
description: A request with no visible status leaves people chasing, guessing and hedging. Why seeing the queue matters, and what to be careful about when you open it.
lead: A request with no visible status leaves people chasing, guessing and hedging. Why seeing the queue matters, and what to be careful about when you open it.
category: Human Agency
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: A person submits a request and cannot tell who holds it, whether it has been seen or when to expect an answer, so they chase, hedge or work around the process.
human_dividend: Predictability and autonomy: knowing where a request stands and being able to plan around it without asking an intermediary.
trade_off: Approvers may feel watched; visibility does not remove delay; formal tracking can multiply needless approvals; routes and cover need upkeep.
epistemic_state: HYPOTHESISED: reasoned from usability and working-conditions guidance and from how approval tools are documented, not from a survey of South African workplaces; the example is illustrative.
sources:
  - Visibility of System Status | https://www.nngroup.com/articles/visibility-system-status/
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Mental health at work | https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work
  - Management Standards - Demands - HSE | https://www.hse.gov.uk/stress/standards/demands.htm
related:
  - What Changes When People Can See Their Own Numbers | /moments/what-changes-when-people-can-see-their-own-numbers/
  - When the System Decides What You Can Do Today | /moments/when-the-system-decides-what-you-can-do-today/
  - Why Clear Ownership Gives People Room to Decide | /moments/why-clear-ownership-gives-people-room-to-decide/
summary: A request with no visible status leaves people chasing, guessing and hedging. Why seeing the queue matters, and what to be careful about when you open it.
layout: plain
---
Somebody submits a request on a Monday. It might be a leave application, a purchase order, a change to a supplier's bank details or a request to use the company vehicle. They get a polite acknowledgement, or nothing at all. By Thursday they do not know whether it has been read, whether it is waiting on one person or three, or whether it fell off the bottom of someone's inbox. They cannot plan around it, and they cannot politely ask without sounding impatient.

This piece looks at what that waiting does to a person, and at what changes when the queue becomes visible. It is a hypothesis drawn from general research on working conditions and from how approval systems are designed, and the example is illustrative rather than a report on a real business.

## The cost of not knowing where a request is

Waiting is not the only cost. A request that is simply slow can be planned around. The harder case is a request whose position is unknown. The employee cannot tell whether to book the flights, order the stock or tell the customer that the answer is coming. So they hedge: they make provisional plans, send a reminder, or find another route to get the work done without the approval at all.

Nielsen Norman Group's first usability heuristic, visibility of system status, puts this in design terms. Keeping users informed about what is happening lets them decide what to do next, and missing status information leaves them feeling powerless. The same article warns that silently changing things erodes trust. A request that vanishes into an unseen queue is a clear example of a system that has not told the person what it is doing.

There is a link to working-conditions research as well. The World Health Organization's fact sheet on mental health at work lists lack of control over job design or workload and an unclear role among the psychosocial risks. The UK Health and Safety Executive's standard on control describes the aim that people feel able to influence how they carry out their work. A person who cannot see what is happening to their own request has little influence over it, even when nobody intends that.

## An illustrative example

Picture a hypothetical South African professional services firm with around sixty people. Staff submit expense claims, software requests and leave forms by email to a shared mailbox. The finance administrator reads the mailbox when she can, forwards items to managers and chases them when she remembers. She is conscientious, but the mailbox is the only queue, and she is the only person who can see all of it.

A consultant submits a claim for a client trip on the first of the month. On the twelfth he asks where it stands, which feels awkward because he does not want to seem to be hounding a colleague. She replies that it is with his manager. His manager says he never received it. It turns out to have been sent to an old address. Nobody did anything wrong in a way that would show up in a disciplinary hearing. The process simply held no record of where the request was.

Now picture the same firm where each request has a visible status: submitted, with the approver, returned with a question, approved, paid. The consultant can look for himself. The administrator is no longer a human switchboard. The manager can see a list of what is waiting for him. Nothing has been automated into a stranger, and no decision has moved from a person to a machine. The queue has just been made something everyone can see.

## What visibility changes, and what it does not

Modern workflow tools can do this fairly simply. Microsoft's documentation on Power Automate approvals explains that when a request is submitted, approvers are notified and can review and act on it, and that approvals can be sequential, so each approver responds before the request moves on. It also describes approvers responding by email, in a chat message or in a central action centre, and responses being kept in an approvals history. Those details matter less as product features than as a pattern: a request has a defined route, a defined next person and a record of what happened.

The first consequence is predictability. The requester knows who holds the request and can plan accordingly. The second is a quiet gain in autonomy, because the person is no longer dependent on the goodwill of an intermediary to learn the status of their own affairs. The business gains too, since the time spent on "any news on my request?" messages falls, and slow approvers become visible without anyone having to accuse them.

The wider pattern of approvals that become bottlenecks is explored in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/), and the organisational side of it appears in [why approval chains make capable people wait](/moments/why-approval-chains-make-capable-people-wait/). This piece concentrates on a narrower point: the experience of not being able to see the queue at all.

## The trade-offs of an open queue

Visibility is not free, and it can feel different to the person on the other side of it.

- **Approvers can feel watched.** A visible backlog can read as an accusation. If the business uses it to shame slow approvers rather than to fix workload, people will find ways around the system. The HSE standard on demands asks for workloads that are manageable within agreed hours, which includes the workload of the people doing the approving.
- **Status is not a decision.** A request that is clearly visible and clearly stuck is still stuck. Visibility removes the uncertainty, not the delay.
- **Tracking can become a ritual.** If every trivial request goes through a formal route simply because it can, the business may build more queues than it needs. Some requests should not need approval at all.
- **Setting it up takes effort.** Someone has to define the routes, decide who covers when an approver is on leave and keep the rules current.

It is reasonable to conclude, in some businesses, that the right answer is fewer approvals rather than better-tracked ones. A visible queue of unnecessary requests is still a queue of unnecessary requests.

## What a more honest queue looks like

A few practical features recur in processes where people feel less lost.

- **A named holder.** At any time, the request is with a specific person or role, not "with finance".
- **An expected response time.** Even an approximate one lets the requester plan. Saying "usually within two working days" is more useful than silence.
- **A route for return.** If the approver needs more information, the request goes back to the requester with the question attached, rather than stalling.
- **Cover for absence.** A request should not freeze because one person is on leave. The handoff design in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/) is relevant here.
- **A history.** When something is questioned later, there is a record rather than a recollection.

Underlying all of this is the idea of operational visibility, which is discussed more broadly in [what operational visibility actually means](/insights/what-operational-visibility-actually-means/).

## Interpreting the pattern

The Mellorca reading is that part of the strain people feel in approval-heavy workplaces is not the approval itself but the blindness around it. For some employees this appears as a small, repeated loss of control over their own affairs. For others it is barely noticeable, particularly where requests are rare or decided in person within minutes. The pattern should not be generalised to every workplace or every role.

What is defensible is the mechanism: when the status of a request is held only in someone's head or inbox, the requester has to rely on chasing, and chasing costs time, goodwill and confidence. Making the queue visible does not make decisions faster by itself. It does give people back the ability to plan around what is actually happening, which is a modest but real form of agency.
