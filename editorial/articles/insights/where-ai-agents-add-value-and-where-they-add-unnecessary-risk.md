---
hub: insights
record_id: INS-182
slug: where-ai-agents-add-value-and-where-they-add-unnecessary-risk
title: Where AI agents add value—and where they add unnecessary risk
description: AI agents suit varied, messy work where a wrong step is cheap to undo. They add risk where work follows fixed rules, moves money or is hard to reverse.
lead: AI agents are useful where work is varied, information is messy and a wrong step is cheap to undo. They add risk without much benefit where the work follows fixed rules, moves money or changes records that are hard to reverse. A practical way to tell the two apart, task by task.
category: Automation & AI
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Automation & AI
sources:
  - Building Effective AI Agents | https://www.anthropic.com/engineering/building-effective-agents
  - LLM06:2025 Excessive Agency | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - What AI agents need before they can do useful work | /insights/what-ai-agents-need-before-they-can-do-useful-work/
  - How piling on AI tools creates a new layer of software mess | /insights/how-piling-on-ai-tools-creates-a-new-layer-of-software-mess/
  - The difference between necessary human work and avoidable manual work | /insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/
  - What should an AI agent be allowed to do? | /insights/what-an-ai-agent-should-be-allowed-to-do-in-your-business/
summary: AI agents are useful where work is varied, information is messy and a wrong step is cheap to undo. They add risk without much benefit where the work follows fixed rules, moves money or changes records that are hard to reverse. A practical way to tell the two apart, task by task.
layout: plain
---
AI agents, software that can read information, decide on steps and take actions in other systems with limited human direction, are now offered for almost every business task. Answering customers, processing invoices, updating the CRM, chasing debtors, scheduling jobs, preparing reports. Some of these are good uses. Some are expensive ways of doing something a simple rule could do. And some give software the ability to cause real damage, for little gain.

The useful question is not whether a business should use agents, but where. This article sets out the characteristics that make a task a good fit for an agent, the ones that make it a poor fit, and the specific risks that agents add when they are given more freedom than the task needs.

## Agents, workflows and simple rules

It helps to separate three approaches. A rule or conventional automation follows fixed steps: when an order is approved, create an invoice. A workflow that uses AI follows fixed steps but uses a model for one part, such as reading an emailed document. An agent decides for itself which steps to take and in what order.

Anthropic's engineering guidance on [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) recommends starting with the simplest solution that works and adding complexity only when it clearly improves results. It describes workflows as offering predictability and consistency for well-defined tasks, and agents as suited to situations where flexibility and model-driven decisions are needed. It also notes that agents trade higher cost and latency for that flexibility, and carry the potential for compounding errors.

That framing gives a practical starting point. If a task can be written down as fixed steps, an agent is usually the wrong tool.

## Where agents add value

Agents earn their place when the work has some or all of these characteristics:

- **Varied inputs.** Requests arrive as free-text emails, documents in different formats or messages that need interpreting before anything can be done.
- **Steps that depend on what is found.** The right next action depends on information gathered along the way, so the path cannot be fixed in advance.
- **Information spread across sources.** Answering a question means looking in several systems, documents or knowledge bases and pulling the relevant parts together.
- **Outputs a person reviews.** The agent prepares a draft, a summary, a recommendation or a classified queue, and a person decides what happens next.
- **Low cost of a wrong step.** A mistake is visible and easy to correct before it affects customers or money.

Typical examples include triaging an inbound service mailbox, preparing a first draft of a customer response from account history, researching a supplier before a meeting, summarising a long case file for a manager, or classifying documents so that people can process them faster.

## Where agents add unnecessary risk

Agents add risk without much value where the task has these characteristics:

- **Fixed rules.** If the logic is "when X, do Y", a conventional automation is cheaper, faster and easier to test.
- **Irreversible actions.** Paying a supplier, deleting records, sending a contract, changing a price list or granting system access cannot easily be undone.
- **Direct effect on money or legal position.** Approving credit, issuing refunds, accepting terms or filing returns.
- **Poor or contested data.** If people do not trust the underlying records, an agent will act confidently on wrong information. The consequences are explored in [why bad data becomes more dangerous when AI can take actions](/insights/why-bad-data-becomes-more-dangerous-when-ai-can-take-actions/).
- **No clear owner or process.** An agent dropped into an undefined process inherits all its ambiguity, without the people who were quietly resolving it.

## The three ways agents get too much freedom

The OWASP project's guidance on [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) in AI applications identifies three root causes of harm. They map closely to the decisions a business makes when setting up an agent.

| Cause | What it looks like in a business | Proportionate control |
| --- | --- | --- |
| Excessive functionality | An agent meant to read invoices is connected through a tool that can also create suppliers and approve payments | Connect only the specific actions the task needs |
| Excessive permissions | The agent uses an administrator account, or a staff member's personal login, rather than a restricted one | Give the agent its own identity with the least access required |
| Excessive autonomy | The agent can take high-impact actions without anyone confirming them | Require human approval before consequential actions |

OWASP also recommends enforcing authorisation in the downstream systems themselves rather than relying on the AI to decide what it may do, and monitoring and limiting the rate of actions. In practice the common failure is the second row: agents granted broad access because it was quicker to set up. The pattern is described in [agent permissions broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/).

## A task-by-task test

For any task proposed for an agent, ask five questions:

1. **Could fixed rules do this?** If yes, use conventional automation, perhaps with AI for one step such as reading a document.
2. **What is the worst action the agent could take?** If it is irreversible or touches money, require a human approval at that point, or remove the action entirely.
3. **What can it reach?** List every system and action it is connected to, and remove anything not needed.
4. **How will anyone know what it did?** Every action should be logged in a way a manager can review. Agents that act without visibility are a governance gap, as described in [when AI agents can act but governance cannot see them](/patterns/when-ai-agents-can-act-but-governance-cannot-see-them/).
5. **Who owns the result?** A named person should be accountable for the agent's outcomes, not just its configuration.

NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) offers a fuller, voluntary structure for managing AI risks to people and organisations. For most small and mid-sized businesses, the five questions above cover the practical ground for a first deployment.

## An illustrative example

Consider a hypothetical Cape Town property management company handling maintenance requests for several hundred units. Requests arrive by email, WhatsApp and a web form, in every possible format.

An agent is a good fit for reading each request, identifying the unit and the type of problem, checking the maintenance history and drafting a job card for the coordinator to approve. Inputs are varied, the steps depend on what is found, and a wrong classification is caught at approval.

The same company was also offered an agent to approve contractor invoices and release payments. That task follows rules (does the invoice match an approved job and quote?) and moves money. A conventional matching rule with human approval for exceptions does the job with less risk and less cost. This scenario is illustrative, not a client case study.

## Getting the balance right

The commercial value at stake is real: agents can remove much of the reading, sorting and drafting that consumes skilled people's time. The risk is also real, and much of it is avoidable by giving agents only the tasks, access and autonomy they need. Before the first deployment, it is worth checking readiness, as discussed in [is your business actually ready for AI agents](/insights/is-your-business-actually-ready-for-ai-agents/), and choosing the process carefully, as set out in [how to choose a business process for an AI agent](/insights/how-to-choose-a-business-process-for-an-ai-agent/). Mellorca's [business automation and AI workflows](/services/business-automation-ai-workflows/) work applies the same test, so that agents are used where they help and rules are used where rules are enough.
