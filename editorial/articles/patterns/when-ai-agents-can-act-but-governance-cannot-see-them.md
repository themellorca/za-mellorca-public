---
hub: patterns
record_id: PAT-368
slug: when-ai-agents-can-act-but-governance-cannot-see-them
title: When AI agents can act but governance cannot see them
description: AI systems that can take actions need governance. Without visible permissions, decisions and outcomes, accountable people cannot see what the AI is doing.
lead: The operational threshold changes when an AI system moves from producing information to taking actions inside business processes.
category: Security, Access & Operational Risk
published_date: 2026-09-07
updated_date: 2026-09-07
eyebrow: Pattern
tags:
  - Governance
  - Risk
  - Resilience
cta_label: Business Automation & AI Workflows
cta_href: /services/business-automation-ai-workflows/
side_title: Commercial value
content_id: CONTENT-000172
pattern_family: Security, Access & Operational Risk
observable_condition: AI-enabled agents can initiate business actions while accountable teams lack a clear view of permissions, actions, exceptions and outcomes.
primary_identification: agentic-AI operational-governance and observability problem
commercial_value_dimensions: Governance, Risk, Resilience, Automation readiness
sources:
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile | https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
  - LLM06:2025 Excessive Agency | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
related:
  - Why AI adoption creates a new access-control problem | /patterns/why-ai-adoption-creates-a-new-access-control-problem/
  - Why do former employees still have access? | /patterns/why-do-former-employees-still-have-access/
  - When offboarding leaves digital access behind | /patterns/when-offboarding-leaves-digital-access-behind/
summary: Action-capable AI needs an operating control layer that makes authority, behaviour, exceptions and outcomes visible. Bounded permissions and traceable business actions can help the organisation expand useful automation without allowing governance to fall behind capability.
---
## Observable condition

An AI-enabled agent can create a record, send a message, update a workflow, call an external service or trigger another system. The business can describe what the agent is meant to do, but it cannot easily answer which permissions it used, why a particular action happened, what exception path was taken or who would notice an unexpected outcome.

The condition often goes unnoticed while the agent behaves well. It becomes visible when something unusual happens: a customer receives a message nobody remembers approving, a record changes and the audit trail shows only a service account, or a manager asks whether the agent has ever done something similar before and nobody can say.

### An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A business deploys an agent to triage incoming supplier emails, update purchase orders and reply with delivery confirmations. To get it working quickly, the agent is connected through an integration account that already had broad rights in the purchasing system. Months later, an invoice dispute reveals that the agent amended a delivery date on an order after reading an ambiguous email. The technical log shows a successful update call. It does not show which email prompted the change, what the agent inferred, or whether any rule should have sent the case to a person. Nobody was negligent; the action capability simply arrived before the means to observe it.

### Warning signs

- Agents run under shared integration or administrator accounts rather than identities scoped to their task.
- Nobody can list every action each agent is able to take, as opposed to the actions it is expected to take.
- Logs record API calls and errors but not the business trigger, the reasoning context or the outcome.
- Escalation to a person depends on the agent deciding it is unsure.
- Each agent has a builder but no named operational owner.
- Reviews focus on the quality of outputs, not on what the agent changed in other systems.

## Realisation

Once a system can act, governance has to cover more than the quality of generated text. The operating question becomes whether the organisation can map, measure and manage the system's behaviour across its lifecycle. NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is intended for voluntary use to help organisations incorporate trustworthiness considerations into the design, development, use and evaluation of AI systems, and is organised around four functions: govern, map, measure and manage. NIST continues to maintain implementation resources, including its [Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), while AI RMF 1.0 is being revised.

Those functions are easy to apply to a model in isolation and much harder to apply to a model that is wired into a purchasing system, a CRM and an email account. The realisation is that an action-capable agent is not only a piece of software; it is a new actor in the business process, and the business has rules for actors that it has not yet applied to this one.

> Realisation prompt: if an agent took an unexpected action this morning, how long would it take to establish what it did, why it did it, what authority it used and who should have been told?

## Identification

This is an **agentic-AI operational-governance and observability problem**. The visible symptom is surprise. The structural issue is that authority has been granted to an actor whose behaviour the organisation cannot reconstruct.

## Diagnosis

The mechanism appears when action capability is added faster than operational control. Permissions may be inherited from a powerful service account, logs may describe technical calls without the business reason, approval boundaries may be implicit, and exception handling may depend on the model deciding when to stop. The organisation can then have automation authority without equivalent accountability visibility.

The OWASP GenAI Security Project describes a closely related risk, [Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), as arising from three root causes: excessive functionality, excessive permissions and excessive autonomy. Its recommended mitigations include limiting the tools an agent may call to the minimum necessary, requiring human approval for high-impact actions and enforcing authorisation in downstream systems rather than relying on the model. It also notes that monitoring and rate-limiting reduce harm but do not prevent the underlying weakness. That distinction maps directly onto this Pattern: visibility without bounded authority only tells you about the damage sooner.

Three operating gaps usually combine:

- **Identity gap.** The agent acts through credentials designed for a different purpose, so its authority is defined by convenience. This is examined in [agent permissions broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/).
- **Evidence gap.** Logs capture what the system did technically, not which business decision it represented.
- **Ownership gap.** The team that built the agent moves on, and no operational owner is responsible for its behaviour in production.

## Commercial impact

The value wrapper is **governance, risk, resilience and automation readiness**. Weak visibility makes it harder to distinguish intended automation from an abnormal action, investigate incidents, prove which controls operated or improve the workflow after exceptions. The issue can also slow useful AI adoption because teams cannot confidently expand the action surface. In practice, the business ends up with two poor options: restrict agents so heavily that they add little value, or allow them to act and accept that some consequences will be discovered by customers or auditors first.

## Common misidentification

The problem is sometimes reduced to whether the model is accurate. Accuracy matters, but an action-capable system can still require governance even when its individual outputs look reasonable. Permissions, traceability, stop conditions, human escalation and outcome monitoring are operating-design concerns.

A second misidentification treats the issue as a security tooling gap. Security monitoring will detect some abnormal behaviour, but it is unlikely to tell a finance manager whether an agent's change to a purchase order was commercially appropriate.

## Possibility

A stronger model treats each agent as an operational actor with a defined purpose, bounded permissions, observable actions, accountable owner and explicit escalation rules. Business events and outcomes can be logged alongside technical calls so governance can see not only that an API was used but what operating decision it represented. The broader case for this is set out in [why AI agents and automated workflows need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/).

There is a genuine trade-off. Every approval step adds delay, and an agent that must ask permission for everything is little more than a drafting tool. The aim is proportionate control: low-consequence, reversible actions can run freely with good logging, while high-consequence or irreversible actions carry tighter permissions and a human checkpoint.

## Intervention

Inventory each action an agent can take. For every action, record the system touched, permission used, business purpose, maximum consequence, required evidence, stop condition, exception path and accountable owner. Then test whether the organisation can reconstruct a representative transaction from trigger through action to outcome. Reduce permissions or add approval boundaries where the evidence is weaker than the authority granted.

A useful sequence is:

1. Give each agent its own identity, scoped to the actions it genuinely needs.
2. Classify actions by consequence and reversibility, and set approval rules accordingly.
3. Log the business trigger, context and outcome alongside each technical call.
4. Define explicit stop conditions that do not depend solely on the model's judgement.
5. Assign an operational owner who reviews exceptions and abnormal patterns regularly.

## Practical diagnostic questions

- Which business actions can each agent initiate without a person?
- Are its permissions narrower than the account or system it uses?
- Can an accountable owner reconstruct why an action occurred?
- What causes the agent to stop and escalate?
- Are abnormal actions and business outcomes monitored, not only technical errors?
- Which actions are irreversible, and do they carry a human checkpoint?

## Bottom line

If an AI agent can act faster than the organisation can observe and govern those actions, the control model is behind the automation model. Closing that gap is what allows useful automation to expand safely.
