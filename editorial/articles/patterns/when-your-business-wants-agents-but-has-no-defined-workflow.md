---
hub: patterns
record_id: PAT-380
slug: when-your-business-wants-agents-but-has-no-defined-workflow
title: When Your Business Wants Agents but Has No Defined Workflow
description: When a business wants AI agents before it can clearly describe how work should move, agent adoption may expose an operating-model problem rather than a prompting problem.
lead: When a business wants AI agents before it can clearly describe how work should move, agent adoption may expose an operating-model problem rather than a prompting problem.
category: AI Readiness, Agents & Intelligent Operations
published_date: 2026-09-02
updated_date: 2026-10-02
eyebrow: Pattern
tags:
  - Productivity
  - Scalability
  - Innovation
  - Margin
cta_label: Automation & AI Workflows
cta_href: /services/business-automation-ai-workflows/
side_title: Commercial value
side_text: Agent value depends on whether the organization has created a workflow that autonomy can execute safely and economically.
pattern_family: AI Readiness, Agents & Intelligent Operations
observable_condition: The organization wants AI agents to execute work, but the process still depends on informal handoffs, unclear ownership, undocumented exceptions and human knowledge that has not been translated into a repeatable workflow.
primary_identification: workflow-definition and agent-readiness problem
commercial_value_dimensions: Productivity, Margin, Scalability, Innovation, Competitive advantage
sources:
  - Microsoft 2026 Work Trend Index — Agents, human agency, and the opportunity for every organization | https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization
  - Building Effective AI Agents | https://www.anthropic.com/engineering/building-effective-agents
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - Is Your Business Actually Ready for AI Agents? | /insights/is-your-business-actually-ready-for-ai-agents/
  - Your AI Strategy Has an Integration Problem | /insights/your-ai-strategy-has-an-integration-problem/
  - The Financial Cost of Running AI on Poor-Quality Data | /impact/ai-on-poor-quality-data-financial-cost/
summary: If an agent initiative cannot be described as a clear workflow with defined data, ownership, exceptions and human handoffs, the business may not have an AI problem yet—it may have a workflow-definition problem. Fixing that foundation can determine whether agent adoption creates leverage or merely new supervision work. If this condition is familiar in your business, explore Mellorca's solutions or start a conversation with us. We can examine where agentic automation is viable and what needs to be designed first.
---
## Observable condition

The organisation wants an agent to "handle onboarding", "manage customer requests" or "run the reporting process". But when the team tries to explain the work, every case seems different. Ownership changes depending on the customer. Exceptions live in people's heads. Approvals happen in chat. The next step is often "ask Sarah" or "check with finance".

The desired automation is clear at a high level. The operating logic underneath it is not.

### A familiar example

A Durban logistics firm with about eighty staff decides an AI agent should handle new-customer onboarding. In a workshop, the sales manager describes it as "send the credit application, set up the account, book the first collection". The credit controller adds that applications above a certain value go to the financial director, unless the customer is a subsidiary of an existing client. Operations mentions that hazardous goods customers need a separate compliance check, which is held in a shared mailbox. Nobody has written down when an onboarding is complete. Three people describe three different processes, all correct from where they sit.

An agent dropped into that situation would have to guess. Some guesses would be right, and the ones that were wrong would be hard to spot until a customer complained.

## Realisation

An agent cannot reliably execute a workflow the organisation itself has not defined. The more autonomy an agent receives, the more important it becomes to specify outcomes, boundaries, decision rules, escalation paths and human review.

Microsoft's 2026 Work Trend Index describes leading AI users as more likely to document agent workflows, human handoffs and quality standards. In its survey the gap held at team, function and organisation level; at organisation level, for example, 25% of the most advanced group reported this documentation against 14% of others. Its broader conclusion is that capturing AI value requires rearchitecting work, not simply adding an agent to the existing mess.

> **Realisation prompt:** could two experienced employees independently describe the same workflow, including exceptions and escalation rules, without disagreeing about how it actually works?

## Identification

This is a **workflow-definition and agent-readiness problem**. The visible ambition is AI adoption. The structural issue is that the business has not yet translated its operating knowledge into a sufficiently explicit system for an autonomous actor to follow safely.

It helps to be precise about terms. Anthropic's engineering guidance on building agents distinguishes *workflows*, where models and tools follow predefined paths, from *agents*, where the model directs its own process and tool use. It recommends starting with the simplest solution that works and adding autonomy only when simpler approaches fall short. Many business requests for "an agent" are really requests for a well-defined workflow with AI at a few steps.

## Diagnosis

Agent initiatives struggle when:
- the process has no clear owner or outcome;
- handoffs depend on messages and individual judgement that is not codified;
- exceptions are frequent but not classified;
- required data is fragmented or unreliable;
- approval and escalation boundaries are undefined;
- nobody has specified what the agent may do versus what a human must decide.


In that environment, the agent does not remove ambiguity. It inherits it.

### Warning signs in the project itself
- The project brief is a job title ("an AI accounts clerk") rather than a process with a start and end.
- Pilot results are judged by impressions rather than against a defined standard of correct output.
- Every test run surfaces a new exception that someone "forgot to mention".
- Reviewers spend longer checking the agent's work than they used to spend doing it.


The last sign is the clearest. It is the same dynamic described in [human exception queues that grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/).

## Commercial impact

The commercial value at stake is **productivity, margin, scalability, innovation and competitive advantage**. A well-designed agent can absorb repetitive execution and expand capacity. A poorly defined one can create review overhead, inconsistent outcomes and new exceptions that consume more human attention than the original process.

The commercial opportunity is therefore not "use agents everywhere". It is to identify workflows where explicit operating logic, reliable data and sensible human control make autonomy economically useful. Anthropic's guidance also notes that autonomy brings higher cost and the potential for compounding errors, which is a further reason to reserve it for work that genuinely needs it.

## Common misidentification

The common response is to improve prompts or switch models. Better models and prompts matter, but they cannot define the business's approval policy, ownership model or exception rules on its behalf.

If the workflow is ambiguous, technical sophistication can automate ambiguity faster.

## Possibility

A better state defines the outcome, common path, exceptions, required data, permissions, quality checks, escalation rules and human accountability before significant autonomy is granted. The agent operates inside that design and produces traceable work that people can review and improve.

For the logistics firm, that might mean an onboarding record with explicit states (application received, credit decision, compliance check, account created, first collection booked), a written credit-approval threshold, a classification for hazardous-goods customers, and a rule that the agent prepares the credit pack but a person makes the decision above the threshold.

## Intervention

Choose one bounded workflow rather than a broad job description. Map how work actually moves, identify decision points, separate deterministic steps from judgement, define exception classes and specify human handoffs. Then determine what data and tools an agent needs and what authority it should not have.

The intervention may combine process redesign, integration, data cleanup, agent orchestration, evaluation, permissions and human-review controls. The agent is one component of the operating model.

### A practical sequence
1. **Observe.** Follow ten to twenty real cases end to end, from trigger to outcome. Record every system touched and every person consulted. [Understanding how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/) is the foundation.
2. **Classify.** Group the cases into the common path and named exception types. Count how often each occurs.
3. **Write the rules.** For each decision point, write the rule if one exists. Where judgement is genuinely required, say so and assign it to a role.
4. **Check the data.** Confirm which system is authoritative for each fact the agent needs. [AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/).
5. **Set authority.** Define what the agent may read, draft, change and send, and what always goes to a person.
6. **Define "good".** Write the quality standard and use it to evaluate pilot output, not general impressions.


### Trade-offs

Defining a workflow takes time from the people who know it best, and some will see it as bureaucracy. The alternative cost is usually higher: a stalled pilot, or an agent in production that nobody fully trusts. A reasonable compromise is to document only the workflow being automated, at the depth the agent needs, rather than attempting a business-wide process programme first.

## Practical diagnostic questions
- Is the workflow documented from trigger to outcome?
- Which steps require judgement and which follow stable rules?
- What exceptions occur most often and who owns them?
- What data must be trusted before the agent can act?
- Where must a human approve, review or take over?
- How will the organisation know whether the agent is performing well?


## What to do first

Pick the candidate workflow with the highest volume and the fewest exception types. Spend two weeks observing and classifying real cases before any build work. If the classification produces more than a handful of exception types, start with a workflow automation for the common path and leave exceptions with people. Add agentic behaviour only where the remaining work is genuinely open-ended.

## Bottom line

Wanting AI agents before defining the workflow is a readiness signal. The opportunity is real, but durable agent value comes from combining capable models with explicit operating design, trustworthy data and clear human accountability. For a broader checklist, see [is your business actually ready for AI agents?](/insights/is-your-business-actually-ready-for-ai-agents/)
