---
hub: insights
record_id: INS-181
slug: how-to-choose-a-business-process-for-an-ai-agent
title: How to Choose a Business Process for an AI Agent
description: The first AI agent a business deploys should be chosen for fit, not novelty. Seven criteria for comparing candidate processes, starting with whether the process needs an agent at all, and a simple way to score them side by side.
lead: The first AI agent a business deploys should be chosen for fit, not novelty. Seven criteria for comparing candidate processes, starting with whether the process needs an agent at all, and a simple way to score them side by side.
category: Automation & AI
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Automation & AI
sources:
  - Building Effective AI Agents | https://www.anthropic.com/engineering/building-effective-agents
  - https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf | https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
related:
  - What AI Agents Need Before They Can Do Useful Work | /insights/what-ai-agents-need-before-they-can-do-useful-work/
  - Why Automating a Broken Process Makes the Problem Worse | /insights/why-automating-a-broken-process-makes-the-problem-worse/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
summary: The first AI agent a business deploys should be chosen for fit, not novelty. Seven criteria for comparing candidate processes, starting with whether the process needs an agent at all, and a simple way to score them side by side.
layout: plain
---
Many businesses now accept that AI agents could be useful. The harder question is where to start. Pick the wrong process and the first deployment becomes an expensive lesson that sours the organisation on the whole idea. Pick the right one and it becomes a working example that shows what agents can and cannot do in your specific operation.

Too often the first process is chosen because it is visible, because a vendor demonstrated it, or because a senior person finds it annoying. Those are not good selection criteria. The problem of choosing automation by novelty rather than value is examined in [why automation candidates are chosen by novelty instead of business value](/discovery/automation-candidates-are-chosen-by-novelty-instead-of-business-value/). This article sets out a more deliberate method.

## First, does the process need an agent at all?

An AI agent, in the sense used by the major model providers, is a system in which a language model decides for itself which steps to take and which tools to use to complete a task. Anthropic's guidance on [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) distinguishes these from workflows, in which models and tools follow predefined paths. It recommends starting with the simplest solution and adding agentic complexity only when simpler approaches fall short, noting that agents trade higher cost and latency, and a risk of compounding errors, for flexibility on open-ended problems.

OpenAI's [practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) offers three signals that a use case may justify an agent: decisions involving nuanced judgement and exceptions, rule sets that have become too complex to maintain, and heavy reliance on unstructured information such as documents and natural language. Where none of these apply, the guide suggests a deterministic solution may be enough.

This is the first filter. Many processes proposed for agents are better served by ordinary rule-based automation, which is cheaper, faster and easier to test. An agent is the right tool when the work genuinely varies from case to case in ways that rules cannot capture well.

## Seven criteria for choosing a first process

### 1. The process is already defined

An agent cannot follow a process that the business itself cannot describe. If the steps, owners and outcomes are unclear, the first job is defining the workflow, not deploying an agent. The pattern is described in [when your business wants agents but has no defined workflow](/patterns/when-your-business-wants-agents-but-has-no-defined-workflow/).

### 2. Success can be checked

Anthropic's guidance points to coding as a domain where agents perform well partly because results can be verified with automated tests, and to customer support as one with clear success measures. The same principle applies to any business process. If you cannot tell quickly and reliably whether the agent got it right, you cannot improve it, and you cannot trust it.

### 3. Mistakes are recoverable

Start where an error can be caught and corrected before it causes lasting harm. OpenAI's guide recommends that sensitive, irreversible or high-stakes actions, such as cancelling orders, authorising large refunds or making payments, trigger human oversight until confidence in the agent's reliability grows. A first process should either avoid such actions or keep a person in the approval step.

### 4. The information is reachable and reliable

The agent needs access to the records required to do the work, and those records need to be accurate. If the information is spread across inboxes, personal spreadsheets and systems without an interface, the agent will either fail or act on partial information.

### 5. The tool set is small

A first agent should need a limited number of systems and actions. Each additional tool adds permissions to manage and ways for things to go wrong. Permissions should match the task, a point covered in [why agent permissions are often broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/).

### 6. Volume justifies the effort

Designing, testing and monitoring an agent takes time. The process should occur often enough, or consume enough skilled time, that a working agent makes a visible difference.

### 7. There is a clear human fallback

When the agent cannot complete a case, someone must receive it with enough context to continue. OpenAI's guide suggests setting limits on retries and escalating to a person when they are exceeded. If no one owns the fallback, failed cases will disappear.

## Comparing candidates

With several candidate processes, score each against the criteria. A simple high, medium or low rating is enough. The illustrative comparison below shows how three candidates might look in a typical services business.

| Criterion | Triage of inbound customer emails | Supplier invoice payment | Drafting first responses to tender documents |
| --- | --- | --- | --- |
| Needs an agent? | High: varied language, classification | Low: mostly rules | High: long unstructured documents |
| Process defined | Medium | High | Low |
| Success checkable | High | High | Medium |
| Mistakes recoverable | High if routing only | Low: payments | High if human reviews |
| Information reachable | High | Medium | Medium |
| Small tool set | High | Medium | Medium |
| Volume | High | High | Low |

In this illustration, email triage is the strongest first candidate: it needs language understanding, its results are easy to check, and a wrong routing decision is easy to correct. Supplier payment scores well on definition and volume, but it is mostly rule-based and involves irreversible actions, so conventional automation with human approval is a better fit. Tender drafting may become valuable later, once the process is better defined.

## An illustrative example

Consider a hypothetical Johannesburg property maintenance company that receives a steady stream of tenant and landlord emails. Staff read each message, decide whether it is a new fault, a follow-up, a complaint or an invoice query, and forward it to the right person.

The company's directors initially wanted an agent to schedule contractors directly. Scoring the options showed that scheduling involved commitments to contractors and costs to landlords, and the scheduling rules were held mostly in one coordinator's head. Email triage, by contrast, was high-volume, easy to check against how staff had routed past messages, and harmless if an occasional message was misrouted, because a person would still handle it.

Starting with triage, with the agent proposing a category and a person confirming it for the first weeks, gave the company a measured view of accuracy before any decision about extending the agent's role. This is an illustrative scenario, not a client case study.

## What to do once a process is chosen

- **Write down the definition of a correct outcome** and collect examples from past cases to test against.
- **Start in a recommending role**, where the agent proposes and a person decides, before allowing it to act.
- **Measure accuracy and exceptions** from the first day, and review them weekly.
- **Name an owner** responsible for the agent's performance, permissions and changes.

A broader readiness view, covering data, permissions, integrations and monitoring across the business, is set out in [is your business actually ready for AI agents](/insights/is-your-business-actually-ready-for-ai-agents/).

## When to act

The right moment to apply these criteria is before any vendor demonstration or pilot is agreed. Choosing the first process carefully costs very little and determines much of what the business will learn. Where the candidate processes span several systems or the scoring is unclear, Mellorca's [business automation and AI workflows](/services/business-automation-ai-workflows/) work can help compare the options against how the operation actually runs.
