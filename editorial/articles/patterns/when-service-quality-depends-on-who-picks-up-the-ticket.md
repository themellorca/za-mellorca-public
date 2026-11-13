---
hub: patterns
record_id: PAT-092
slug: when-service-quality-depends-on-who-picks-up-the-ticket
title: When service quality depends on who picks up the ticket
description: If customer outcomes depend heavily on which employee receives a ticket, service knowledge and workflow controls may be inconsistent.
lead: Variation between agents can reveal a process and knowledge problem, not simply a training problem.
category: Customer Service, Status & Self-Service
published_date: 2026-09-05
updated_date: 2026-09-05
eyebrow: Pattern
tags:
  - Customer experience
  - Capacity
  - Retention
cta_label: Digital Operations
cta_href: /services/digital-operations/
side_title: Commercial value
pattern_family: Customer Service, Status & Self-Service
observable_condition: Similar customer requests receive materially different handling depending on which employee receives them.
primary_identification: service workflow consistency and knowledge-governance problem
commercial_value_dimensions: Customer experience, Service capacity, Risk, Retention
sources:
  - Welcome to Dynamics 365 Customer Service | https://learn.microsoft.com/en-us/dynamics365/customer-service/overview
  - KCS v6 Practices Guide | https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide
  - Knowledge management - Atlassian | https://www.atlassian.com/itsm/knowledge-management
related:
  - Why do customers have to ask you what is happening? | /patterns/why-customers-have-to-ask-what-is-happening/
  - Why proactive communication can remove entire support workloads | /patterns/why-proactive-communication-can-remove-entire-support-workloads/
  - The hidden cost of repetitive customer questions | /patterns/the-hidden-cost-of-repetitive-customer-questions/
  - Answering the same customer questions daily: The labour cost of hidden knowledge | /impact/support-teams-answering-same-questions-daily-undocumented-knowledge-labour-cost/
summary: Large differences in handling between employees often point to inconsistent knowledge, routing and escalation design. Making service context and rules explicit can improve reliability without removing necessary human judgement.
---
## Observable condition

Two customers ask essentially the same question but receive different answers, escalation paths, turnaround times or documentation, depending on who receives the ticket.

One agent resolves a billing query on the first contact because they remember a workaround from last year. Another escalates the identical query to a specialist team, where it waits. A third gives an answer that was correct under an old policy. Each acted in good faith. Customers, however, experience a service that seems to change character from one contact to the next.

Team leaders often know this informally. They have favourite agents for difficult cases, and they quietly re-route certain tickets to the people who "know how to handle these". That informal routing is itself part of the condition.

## Realisation

Individual capability matters, but repeated variation often means the service process relies on personal memory and judgement where clearer workflow rules or accessible knowledge should exist.

The significance is broader than one inconsistent answer. When quality depends on the individual, the organisation cannot reliably predict its own service. Capacity planning becomes fragile because the experienced people form a hidden bottleneck. Onboarding new staff takes longer because the real operating knowledge is held in conversations, not in systems. When an experienced agent leaves, part of the service leaves with them.

The question shifts from "who is good at this?" to "why does the system not make the right handling path obvious to everyone?"

## Identification

This is a **service workflow consistency and knowledge-governance problem**.

- **The visible symptom:** similar requests produce different outcomes and turnaround times.
- **The common assumption:** some agents are better trained or more conscientious than others.
- **The structural cause:** the information, decision rules and context needed to handle a case consistently do not travel with the case.

## Diagnosis

Common causes include fragmented knowledge, inconsistent categorisation, unclear escalation rules, missing customer context and queue designs that distribute work without guiding resolution. Modern customer-service platforms typically combine case records, queues, knowledge and routing. Microsoft's [overview of Dynamics 365 Customer Service](https://learn.microsoft.com/en-us/dynamics365/customer-service/overview), for example, lists tracking issues as cases, recording all related interactions, sharing information through a knowledge base, routing work items and managing service-level agreements. The operating principle is that relevant context and rules should travel with the case. Atlassian's [guidance on knowledge management](https://www.atlassian.com/itsm/knowledge-management) makes the same point: shared, tested articles help agents give the same verified solutions, and knowledge is best documented during ticket resolution while the details are fresh.

Variation usually enters through one or more of these gaps:

- **Knowledge that is scattered or stale.** Answers sit in old documents, chat threads and personal notes, and nobody is sure which version is current.
- **Categories that do not drive handling.** Tickets are labelled inconsistently, so the same issue is routed differently depending on how it was described.
- **Escalation by instinct.** There is no clear rule for when to escalate, so cautious agents escalate early and confident agents escalate late.
- **Thin case context.** The ticket does not show the customer's products, history or open orders, so each agent reconstructs context differently.
- **Queues that allocate but do not guide.** Work is distributed fairly, but nothing suggests the expected resolution path.

The Knowledge-Centered Service approach set out in the Consortium for Service Innovation's [KCS v6 Practices Guide](https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide) addresses part of this directly. It treats knowledge as something captured in the moment of solving, structured with a simple template, reused by searching early and often, and improved whenever it is used. The useful lesson for most organisations is that knowledge maintenance should be part of handling tickets, not a separate documentation project that falls behind.

## Commercial impact

The value wrapper is **customer experience, service capacity, risk and retention**.

Variation creates rework when customers come back because the first answer was incomplete. It creates avoidable escalations that consume specialist time. It creates uncertainty for customers, who learn to ask for a particular person or to contact the business more than once in the hope of a better answer. Managers spend time correcting outcomes after the fact rather than improving the process.

There is also exposure. Where an answer touches contractual terms, refunds, data handling or regulated activity, inconsistent handling means some customers may receive commitments the business did not intend to make. And because the best handling lives with specific individuals, the service is less resilient to absence, turnover and growth.

## Common misidentification

The default response may be more coaching. Coaching helps when the issue is individual skill. It is weaker when the organisation has not standardised the information and decision paths employees need. Training people to remember more does not solve a problem caused by the need to remember too much.

## Possibility

A stronger service model gives employees consistent case context, decision guidance, approved knowledge and clear escalation rules, while preserving human judgement for genuinely complex cases.

In that state, an agent opening a ticket sees who the customer is, what they have bought, what has happened recently and which knowledge articles match the issue. Escalation criteria are written down and visible. When an agent finds a better answer, the knowledge base is updated as part of closing the ticket. Variation still exists, but it is deliberate: driven by the customer's circumstances rather than by who happened to be available.

## Intervention

Sample a set of similar tickets and compare handling paths. Identify where outcomes diverge, then determine whether the variation is justified by context or caused by missing process and knowledge controls.

1. **Choose a high-volume request type.** Pick something common enough that inconsistency is visible and improvement is worthwhile.
2. **Compare twenty or thirty cases.** Record the answer given, the time taken, whether it was escalated and whether the customer came back.
3. **Classify the variation.** Separate differences explained by the customer's situation from differences caused by missing knowledge, unclear rules or thin context.
4. **Fix the inputs.** Publish one approved answer, tighten categorisation, write explicit escalation criteria and bring the customer context into the case view.
5. **Build knowledge upkeep into the workflow.** Make flagging and correcting knowledge part of resolving a ticket.
6. **Repeat the sample.** Check whether handling has converged.

Where the knowledge itself is disorganised, the Pattern [When AI Search Fails Because Knowledge Is Chaotic](/patterns/when-ai-search-fails-because-knowledge-is-chaotic/) explains why tooling alone will not fix it. Mellorca's [digital operations](/services/digital-operations/) work focuses on these service workflows.

## Practical diagnostic

Warning signs that service quality depends on the individual rather than the system:

- Team leaders route certain tickets to specific people by habit.
- Customers ask for a named agent or say a colleague told them something different.
- Agents keep personal notes or saved replies that differ from the official knowledge base.
- Escalation rates vary widely between agents handling similar work.
- New starters take a long time to handle common requests confidently.
- The same issue appears under several different ticket categories.

### Questions to ask

- Do similar requests follow similar handling paths?
- Can agents find the current approved answer quickly?
- Are escalation rules explicit?
- Does the ticket carry enough customer and transaction context?
- Which variations are necessary and which are accidental?

## Bottom line

When service quality depends too heavily on who receives the ticket, the organisation may be outsourcing consistency to individual memory. Making context, knowledge and decision rules part of the workflow protects customers from that variation and protects the business from relying on a few people to hold its service together.
