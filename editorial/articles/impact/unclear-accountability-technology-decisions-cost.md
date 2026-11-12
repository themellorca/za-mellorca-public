---
hub: impact
record_id: CPS-451
slug: unclear-accountability-technology-decisions-cost
title: Who Decides on Technology? The Cost of Unclear Accountability for IT Choices
description: When nobody is clearly accountable for technology decisions, choices are made by default, by vendors or not at all, and the business pays for reversals and stalled projects. Clear decision rights and a decision log fix it.
lead: When nobody is clearly accountable for technology decisions, choices are made by default, by vendors or not at all, and the business pays for reversals and stalled projects. Clear decision rights and a decision log fix it.
category: Digital Infrastructure
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Nobody knowing who is accountable for important technology decisions
primary_cost_mechanism: Rework and reversal cost, delayed projects, vendor-led spending and risk exposure from unowned decisions
sources:
  - Build a cloud governance team - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/govern/build-cloud-governance-team
  - Maintain an architecture decision record (ADR) - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record
  - Architectural decision record process - AWS Prescriptive Guidance | https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html
related:
  - Software Bought Without Approval: The Financial and Security Cost of Shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
  - Shared Passwords at Work: The Cost of Losing Accountability and Control | /impact/shared-passwords-lost-accountability-breach-exposure/
  - Subscriptions That Outlive the Employee: The Cost of Orphaned Software | /impact/orphaned-software-subscriptions-after-employee-leaves-cost/
summary: When nobody is clearly accountable for technology decisions, choices are made by default, by vendors or not at all, and the business pays for reversals and stalled projects. Clear decision rights and a decision log fix it.
layout: plain
---
## The tolerated pain

Should the business move its accounting system to the cloud? Who agreed that the warehouse would use a different scanning app from the branches? Was the decision to keep the old server for another year made, or did it just happen? Ask these questions in many growing businesses and you get a pause, a few names and then: "I think it was discussed at some point."

Technology decisions are being made all the time. A manager signs up for a tool. The IT service provider recommends a firewall. A developer picks a platform for an integration. Finance renews a contract because nobody objected. Each choice is reasonable on its own, but nobody is clearly accountable for whether the choices fit together, who must be consulted, or when a decision should be revisited.

The spending side of this problem is covered in [when nobody owns the business software you pay for](/impact/pain-unclear-ownership-technology-spending/). This article is about decisions: who makes them, who is accountable for them, and what it costs when that is unclear.

## Why businesses tolerate it

- **Technology grew informally.** In the early years the owner or one capable employee made every call. As the business grew, decisions spread out but the authority was never written down.
- **IT is seen as support, not direction.** An outsourced provider keeps things running but is not mandated to decide what the business should use.
- **Leadership is unsure where to start.** Executives who do not feel technical step back, which leaves the decisions to whoever is closest.
- **Nothing breaks immediately.** The cost of an unowned decision appears months later, when it is hard to link to the original choice.

## Operational symptoms

- the same question debated in several meetings without a conclusion;
- decisions reversed when a new manager or provider arrives, because nobody knows why the original choice was made;
- departments choosing overlapping tools for the same job;
- vendors effectively setting the direction because they bring the only proposal on the table;
- projects stalled while people wait for someone, anyone, to approve;
- security or compliance questions about a system that nobody feels entitled to answer.

## What clear accountability looks like elsewhere

Larger organisations have frameworks for this, and the core ideas scale down well. Microsoft's Cloud Adoption Framework, in its guidance on [building a governance team](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/govern/build-cloud-governance-team), describes the outcome of its first step as clear ownership and accountability. It recommends keeping the group small for quicker decisions, securing a named executive sponsor as the point of escalation, and using a RACI chart so it is clear who is responsible, accountable, consulted and informed for each task.

The second idea is recording decisions. Microsoft's guidance on keeping an [architecture decision record](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record) says a decision that is made but never recorded will likely be forgotten, leading to repeated debates or later changes that unknowingly contradict the original intent. It recommends recording the context, the options considered, the trade-offs and the decision, and writing a new record when a decision changes rather than editing the old one.

AWS's [decision record process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html) adds ownership: each record has an owner who maintains it, records move through states such as proposed, accepted, rejected or superseded, and a rejected proposal carries its reason so the same discussion is not repeated.

A small business does not need a governance board or a formal method. It needs the same three things in plain form: a named person accountable for each type of decision, a short list of who must be consulted, and a written record of what was decided and why.

## How the pain becomes money

- **Rework and reversal cost:** systems implemented, then replaced when a new manager disagrees, with migration and retraining paid twice.
- **Delay cost:** projects that wait weeks for a decision keep the business on slower, more manual processes for longer.
- **Vendor-led spending:** when nobody owns the direction, the business buys what is proposed rather than what it needs.
- **Duplication:** overlapping tools and integrations because departments decided independently.
- **Risk exposure:** security and continuity choices left unmade, such as nobody deciding on a backup standard or access policy.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Bloemfontein wholesale distributor with 90 staff and three branches.

| Item (assumed) | Annual cost |
| --- | --- |
| One reversed system decision: migration, consultant and retraining time | R180,000 |
| Two overlapping tools bought by different departments | R60,000 |
| A process improvement delayed four months awaiting a decision: 20 hours a week of manual work at R300 an hour | R104,000 |
| Leadership time in repeated, inconclusive discussions: 4 people, 2 hours a month, at R700 | R67,200 |
| **Illustrative total** | **R411,200** |

The figures are assumptions, but each line is testable. Look back over two years: which technology decisions were reversed, which projects waited for approval, and which tools overlap? Cost what you find.

## When it becomes commercially urgent

- a major system choice is coming, such as an ERP, CRM or cloud move;
- the person who made most technology decisions is leaving or stepping back;
- a client, auditor or insurer asks who is responsible for information security;
- a costly decision has been reversed and nobody can explain why it was made;
- a new IT provider is being appointed and the business cannot brief them on past choices.

## What better looks like

1. **Decision types are named.** For example: new business systems, security standards, integrations, infrastructure and contracts above a threshold.
2. **Each type has one accountable person.** Not a committee; a person, with a deputy.
3. **Consultation is defined.** Finance on cost, operations on process, IT on support and security.
4. **Decisions are recorded briefly.** Context, options, decision, reason, owner and date, in a shared log.
5. **Decisions are revisited on purpose.** A new record supersedes an old one, so the history stays clear.
6. **Vendors advise; the business decides.** Proposals are inputs to a decision owned internally.

The Insights article [how to avoid vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/) explores the last point in more depth, and [how to decide what technology problem to solve first](/insights/how-to-decide-what-technology-problem-to-solve-first/) helps once decision rights exist.

## Practical next actions

1. List the ten most significant technology decisions of the past two years and note who made each one. Gaps and guesses are the finding.
2. Draft a one-page table of decision types with the accountable person, who must be consulted and who must be informed.
3. Start a simple decision log, even a shared document, and record every new significant choice.
4. Record the reasons behind your most important existing systems while the people who chose them are still available.
5. Brief your IT provider and key vendors on who decides what.
6. Review the table once a year or whenever leadership changes.

If the business needs a fuller view of how its systems should fit together, a [systems architecture roadmap](/services/digital-systems-architecture-roadmap/) gives decisions a shared reference point.

## Bottom line

Unclear accountability does not stop technology decisions from being made. It means they are made by default, by vendors or by whoever is nearest, and then made again. The cost shows up as reversals, duplicated tools, stalled projects and unanswered risk questions. Naming who decides, who is consulted and where decisions are recorded is a small administrative change with a large financial effect.
