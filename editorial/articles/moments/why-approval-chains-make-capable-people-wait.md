---
hub: moments
record_id: STORY-ANGLE-000065
slug: why-approval-chains-make-capable-people-wait
title: Why Approval Chains Make Capable People Wait
description: Approval steps exist to protect the business, but long chains leave competent people idle while a small decision waits for a signature. How to keep control without the queue.
lead: Approval steps exist to protect the business, but long chains leave competent people idle while a small decision waits for a signature. How to keep control without the queue.
category: Human Agency
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: A capable employee needs a small purchase, payment or change approved, and it passes through several people in sequence, each adding a day or more, while the work they could be doing waits.
human_dividend: Autonomy and time: clear limits within which people may decide for themselves, and approvals that take hours rather than days for the decisions that really need them.
trade_off: Raising limits accepts that some decisions will be wrong; fraud controls must be kept for higher-risk items; approvers lose some visibility; and the rules need to be reviewed regularly or they drift.
epistemic_state: HYPOTHESISED: the pattern is reasoned from general descriptions of queueing and control design, not from a survey of South African businesses; the worked example is illustrative.
sources:
  - Red tape - Wikipedia | https://en.wikipedia.org/wiki/Red_tape
  - Separation of duties - Wikipedia | https://en.wikipedia.org/wiki/Segregation_of_duties
  - Little's law - Wikipedia | https://en.wikipedia.org/wiki/Little%27s_law
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
related:
  - When the System Decides What You Can Do Today | /moments/when-the-system-decides-what-you-can-do-today/
  - Why Clear Ownership Gives People Room to Decide | /moments/why-clear-ownership-gives-people-room-to-decide/
  - Why the Person Closest to the Problem Can't Fix It | /moments/why-the-person-closest-to-the-problem-cant-fix-it/
summary: Approval steps exist to protect the business, but long chains leave competent people idle while a small decision waits for a signature. How to keep control without the queue.
layout: plain
---
Few people argue against approvals. A business that lets anyone spend anything has a different problem. The difficulty is not that approvals exist but that they multiply: a request goes to a line manager, then a department head, then finance, then the owner, and each step is a person with a full diary and a pile of other requests. The person who made the request is capable, informed and ready to act. They wait.

This piece looks at why chains grow, what waiting costs both the person and the business, and how to keep control without the queue. It is a hypothesis about a common pattern, not a criticism of the people who approve.

## How chains grow

Approval chains rarely start long. They lengthen in response to events.

- **One mistake adds one step.** A wrong order or duplicate payment prompts a new check. The check stays long after the cause is forgotten.
- **Every level wants visibility.** Each senior person asks to be copied in. Copying in becomes approving.
- **Low and high risk travel the same road.** A R400 box of cable ties follows the same route as a R400 000 machine, because nobody sorted the requests by size.
- **Approvers are busy.** The people with the authority are also the people with the most meetings, and approvals are done between other things.

The ordinary term for a rule that has outlived its purpose and slows things for little benefit is red tape. The related concept of bureaucracy describes organisations built around formal rules and hierarchy, which can bring consistency and fairness but also delay. Neither idea says that rules are wrong, only that rules have a cost, and that the cost is easy to forget when it is paid by someone else.

Mellorca's article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) covers the mechanics from the process side. This piece looks at the effect on the people waiting.

## Why waiting grows faster than you expect

Queueing theory offers a plain observation known as Little's law: in a stable system, the average number of items in the system equals the average arrival rate multiplied by the average time each spends there. In approval terms, if requests arrive at a steady pace and each one spends three days in the process, there will be a standing stock of requests waiting at any moment. Lengthen the average wait and the stock grows in proportion. Nobody has to be slow for this to happen; adding a step adds to everyone's wait.

Importantly, most of that time is not work. A request may need five minutes of attention and sit for two days. The article on [the cost of approval queues blocking capacity](/impact/approval-queues-blocked-capacity-cost/) sets out how that idle time can be counted. The figures are for an organisation to gather for itself; this article does not suggest a general number.

## An illustrative case

Consider an illustrative example, not a real case: a company in Midrand that installs solar and battery systems for homes and small businesses. It has a project lead, two installers and a small head office. An installer on a site in Fourways finds that the supplier's cable is the wrong gauge and needs a replacement. The part costs R1 800.

The request goes to the project lead, who is on another site, then to the operations manager, then to finance for a purchase order number, then to the owner for anything over R1 500. It takes two and a half days. Meanwhile the installers have moved to other tasks and returned, the client has asked twice when the job will finish, and the project lead has spent a morning chasing signatures instead of planning the next install.

Everyone involved acted reasonably. The installer reported at once. The managers each checked what they were responsible for. The owner wanted to know about spending above a set figure. The result was a capable team waiting for a R1 800 decision.

## The human tax: autonomy and time

The cost in time is visible: days lost on jobs, hours spent chasing. The cost in autonomy is quieter. People who must ask permission for routine decisions learn that their judgement is not trusted, whatever the policy says. The [employee who needs permission for every small fix](/moments/the-employee-who-needs-permission-for-every-small-fix/) often stops proposing fixes. Over time they stop looking for problems they cannot solve themselves.

Approvers pay too. The [lunch break eaten by approval requests](/moments/the-lunch-break-eaten-by-approval-requests/) is a common scene: a senior person approving tiny items on a phone because a queue has built up. Their attention goes to the lowest-value decisions.

Research on workplace stress by the UK Health and Safety Executive treats having control over how work is done as a central factor in wellbeing, and recommends giving people a say. A chain that removes control from capable people for routine decisions pulls in the opposite direction, though the source says nothing about approvals specifically and the link is an inference.

## What could realistically change

Control and speed are not opposites. The aim is to keep the first where it matters and give people back the second.

1. **Sort requests by risk and value.** Pull a month of approvals and group them by amount and type. In most businesses a large majority are small and routine, and a small number carry most of the money.
2. **Set limits by role.** Allow named roles to commit up to a defined amount without further sign-off, for example installers' leads up to R3 000 for site parts. Limits like this are a standard feature of workflow tools; Microsoft's Business Central documentation on approval workflows describes approval limits and substitute approvers as ways to route requests without bottlenecks.
3. **Keep the control, not the queue.** A principle called segregation of duties says that no single person should be able to both initiate and complete a sensitive transaction, such as raising and paying a supplier invoice. That can be satisfied by two roles, not four.
4. **Add a substitute and a time limit.** Every approver gets a named backup, and a request not actioned within a set time goes to the backup. Illness and leave then stop being delays.
5. **Review after the fact for small items.** Rather than approving each item beforehand, review a weekly list of low-value spend. It preserves oversight without holding up the work. The approach is the subject of [approving low-risk transactions one by one](/impact/approving-low-risk-transactions-one-by-one-management-cost/).

## The business outcome

Work flows faster, customers wait less, and senior people spend their time on decisions that really need them. Because the rules are written down and visible, fewer disputes arise about who was supposed to approve what. Control is arguably stronger, since attention is concentrated on high-value and high-risk items instead of spread thinly across everything.

## The human dividend

The dividend is autonomy and time. Autonomy because people are trusted within clear boundaries and can act on what they know. Time because a decision that takes an hour instead of three days gives back both the waiting and the chasing. For the employee, it also means ending each day with the task finished rather than pending.

## The trade-offs

- **Some decisions will be wrong.** Higher limits mean occasionally accepting a poor purchase. The cost should be weighed against the cost of the queue.
- **Fraud and error controls must stay.** Payment-related approvals, new supplier set-up and changes to bank details should keep tight checks.
- **Approvers lose some visibility.** Owners who like to see every rand must accept summaries instead.
- **Limits need maintenance.** Prices change; a limit that was right two years ago may now be too high or too low.

## Why it matters

An approval chain is a cost passed on to the person waiting. When the chain is as long for a small decision as for a large one, capable people spend their working lives waiting. Shortening it for the routine and strengthening it for the serious keeps the protection and returns the time.
