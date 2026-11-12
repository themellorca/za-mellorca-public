---
hub: insights
record_id: INS-179
slug: what-ai-agents-need-before-they-can-do-useful-work
title: What AI Agents Need Before They Can Do Useful Work
description: Explores prerequisites for AI agents to operate usefully, focusing on planning, tool use, safety, and reliability in operational workflows.
lead: Explores prerequisites for AI agents to operate usefully, focusing on planning, tool use, safety, and reliability in operational workflows.
category: Automation & AI
published_date: 2026-10-02
updated_date: 2026-10-02
eyebrow: Automation & AI
sources:
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Building Effective AI Agents | https://www.anthropic.com/engineering/building-effective-agents
  - Least privilege for AI agents with Microsoft Entra Agent ID | https://learn.microsoft.com/en-us/security/zero-trust/sfi/least-privilege-for-ai-agents
related:
  - How to Choose a Business Process for an AI Agent | /insights/how-to-choose-a-business-process-for-an-ai-agent/
  - Who watches the automations? | /insights/who-watches-the-automations/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
summary: Explores prerequisites for AI agents to operate usefully, focusing on planning, tool use, safety, and reliability in operational workflows.
layout: plain
---
AI agents do not magically infer every intent. They need a foundation of capabilities before they are useful in real work, and most of that foundation sits outside the model itself. This article sets out the prerequisites that separate an aspiring agent from a dependable participant in operations, and how a small or mid-sized business can tell which of them it already has.

The distinction matters because agent projects tend to start with a demonstration. A model reads a request, calls a tool and produces a plausible result. The demonstration proves that the model can reason about the task. It does not prove that the business can give the agent a clear goal, trustworthy information, safe access to systems and a way to notice when something goes wrong.

## Opening framework

First, an agent must have a well-posed objective, access to reliable information and the capacity to plan steps towards a goal. Without a clear objective and a means to measure progress, planning becomes guesswork. "Help with customer queries" is not an objective. "Classify incoming delivery queries, look up the order status and draft a reply for a person to approve" is.

The second pillar is tool use. Agents succeed when they can call external tools or services and interpret the results, with guardrails and fallbacks. Anthropic's engineering guidance on [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) stresses that agents need to gain "ground truth" from their environment at each step, and that tools deserve the same design care as a human interface: clear documentation, examples, input formats and boundaries.

The third pillar is memory and state management. Agents must keep track of past actions, outcomes and context so that they do not repeat mistakes or lose sight of the original intent. In business terms, this usually means the agent's work must be connected to durable records, such as a ticket, an order or a case, rather than living only inside a chat history.

### Core prerequisites

- **Goal alignment and evaluation**: explicit success criteria and safe fallback behaviour.
- **Tooling interfaces**: stable, auditable tool calls with structured results.
- **Observability**: telemetry to monitor decisions, confidence and outcomes.
- **Memory discipline**: bounded, retrievable context across sessions.
- **Human-in-the-loop or governance**: escalation when risk thresholds are breached.

Two further prerequisites are often assumed rather than checked. The first is **authoritative data**. An agent that looks up a customer in a CRM that disagrees with the finance system will confidently act on whichever answer it finds first, which is why [AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/). The second is **scoped access**. If the agent runs under a broad human account, it can do far more than its task requires, a problem described in [agent permissions that are broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/).

## A worked example

Consider a 60-person building-supplies distributor in Gauteng that wants an agent to handle "where is my order?" emails. The demonstration goes well: the agent reads the email, finds the order number and writes a polite reply.

The prerequisites tell a different story once they are checked one by one:

- The objective is unclear about when the agent should reply on its own and when it should hand over to a person. Disputed deliveries and credit-note requests arrive through the same inbox.
- Order status lives in the ERP, but delivery status lives in a courier portal and a driver's WhatsApp group. The agent can see only one of the three.
- The agent was given the sales manager's login, so it can also edit prices and cancel orders.
- Nobody has decided where its actions are logged, or who reviews them.

None of these is a model problem. Each one is a workflow, data or governance problem that existed before the agent arrived. The agent simply makes them consequential, which is the pattern described in [when your business wants agents but has no defined workflow](/patterns/when-your-business-wants-agents-but-has-no-defined-workflow/).

## Operational model

In practice, useful AI agents operate in four cycles: plan, act, observe, revise. A planning module selects a sequence of actions and calls to tools. A supervisor component evaluates results against success criteria. A safety layer screens for sensitive requests and potential harms. A logging system preserves provenance for audits. This architecture reduces surprises and lets teams answer three questions: what did the agent do, why did it do it, and was the outcome acceptable?

Two controls deserve particular attention. Anthropic's guidance recommends stopping conditions, such as a maximum number of iterations, so that an agent cannot loop indefinitely, and extensive testing in sandboxed environments before production. It also recommends starting with the simplest solution that works. Many business tasks are better served by a fixed workflow with one model call inside it than by a fully autonomous agent.

The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), released in January 2023 and intended for voluntary use, offers a useful way to organise this thinking around four functions: govern, map, measure and manage. For a small business, that translates into four plain questions: who is accountable, what is the context and risk, how will we know it is working, and what do we do when it is not?

## Warning signs that the prerequisites are missing

- Nobody can state, in one sentence, what a successful agent outcome looks like.
- The agent's answers depend on which system it happens to query first.
- The agent uses a person's login or a shared service account.
- The only record of what the agent did is a chat transcript.
- Staff discover agent mistakes from customers rather than from monitoring.
- There is no defined point at which the agent stops and hands over to a person.

## How to diagnose readiness

A practical readiness check takes a single candidate task and walks it end to end. Write down the trigger, the information needed, the systems touched, the decisions made, the exceptions that occur and what "done" means. Then ask whether each step could be explained to a new employee without saying "it depends who you ask". If not, the agent will inherit the same ambiguity.

Next, check the data. For each piece of information the agent needs, identify the system of record and whether it is current. Then check access: what identity will the agent use, and what could that identity do beyond the task? Finally, check observability: where will each action be recorded, and who will look at it? [Agents and automated workflows need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/) for the same reason any production system does.

## Practical implications for teams

1. Map workflows that lend themselves to automation rather than replacing essential human judgement.
2. Design tool access as dependable services with clear inputs and outputs and retry logic.
3. Embed monitoring dashboards and runbooks that describe when escalation is required.
4. Prototype with bounded scopes and expand capabilities step by step as confidence grows.

### Trade-offs to accept

Building these foundations slows the first deployment. Scoped identities, logging and approval steps take design time, and a human review step reduces the headline saving. The trade is worth making for tasks that touch customers, money or records. For low-risk internal tasks, such as summarising meeting notes, a lighter approach is reasonable. The point is to decide deliberately, not to apply the same controls to everything.

## What to do first

1. Pick one high-volume, low-risk task with a clear definition of done.
2. Write the success criteria and the hand-over rule before choosing any tool.
3. Confirm the system of record for every piece of data the agent will read.
4. Give the agent its own identity with read-only access to start.
5. Log every tool call against a business record and review a sample weekly.
6. Expand to write actions only after the read-only phase has been reliable.

A useful companion question is whether the business itself is ready, which is explored in [is your business actually ready for AI agents?](/insights/is-your-business-actually-ready-for-ai-agents/)

## Conclusion

Deploying autonomous agents before the prerequisites are in place invites failure and erodes trust. By grounding design in goals, tooling, observability and governance, teams can build AI agents that make tangible improvements and remain maintainable. The model is rarely the constraint. The workflow, the data and the controls around it usually are.
