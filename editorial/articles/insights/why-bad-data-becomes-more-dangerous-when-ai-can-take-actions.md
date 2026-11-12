---
hub: insights
record_id: INS-180
slug: why-bad-data-becomes-more-dangerous-when-ai-can-take-actions
title: Why bad data becomes more dangerous when AI can take actions
description: Why operational AI raises the consequence of weak data ownership, stale records, ambiguous meaning and excessive access.
lead: Poor data is inconvenient when a person spots it. It becomes operationally dangerous when an automated agent can act on it at speed.
category: Business Automation
published_date: 2026-09-06
updated_date: 2026-09-06
eyebrow: Article
page_title: Why Bad Data Becomes More Dangerous When AI Can Take Actions | Mellorca
tags:
  - AI Readiness
  - Data Quality
  - Controls
side_title: Topics
sources:
  - LLM06:2025 Excessive Agency | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  - Principle (d): Accuracy | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/accuracy/
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
closing_title: Explore Mellorca
closing_text: [Explore our solutions](/solutions/) or [start a conversation](/contact/).
related:
  - Your AI strategy has an integration problem | /insights/your-ai-strategy-has-an-integration-problem/
  - Who watches the automations? | /insights/who-watches-the-automations/
  - Why automation documentation matters | /insights/why-automation-documentation-matters/
---
AI systems that only draft or summarise information have limited operational authority. Once an agent can update records, send communications, create transactions or trigger downstream workflows, data quality becomes part of the control environment.

That shift is easy to miss. Many businesses have lived with imperfect data for years because people quietly compensate for it. A salesperson knows the second account record is the old one. A finance clerk knows the "status" field in the CRM is not updated after renewal. An operations lead knows which spreadsheet is current. The data is poor, but the operation works because human judgment sits between the record and the action. An AI agent with write access removes that layer unless someone deliberately puts it back.

## From reading to acting: what actually changes

When AI only reads, a bad record produces a bad answer. Someone reads the answer, may notice it looks wrong and can ignore it. The damage is usually wasted time.

When AI can act, a bad record produces a bad action. The action may be an email to a customer, a credit note, a cancelled order, a changed contract date or a ticket routed to the wrong team. Those actions create new records, which other systems and people then treat as true. The error is no longer contained in a report; it has entered the operation.

The question therefore changes from "is the data good enough to look at?" to "is the data good enough to act on without someone checking it first?" Those are very different standards, and most businesses have only ever tested the first.

## Action amplifies ambiguity

A duplicate customer, stale status or unclear field definition can move from being a reporting nuisance to creating the wrong action. The issue is not that AI is uniquely unreliable; it is that automation increases the speed and scale of whatever operating context it receives.

The mechanisms are usually ordinary:

- **Duplicates.** Two records for one customer, each partly complete. An agent asked to "update the customer" picks one, and the other keeps driving invoices or renewals.
- **Stale state.** A status that is reliable at creation but rarely maintained afterwards. An agent treats "active" as a current fact rather than a historical one.
- **Ambiguous meaning.** A field called "owner" that means account manager in one team and billing contact in another. The agent cannot know which interpretation the business intended.
- **Conflicting sources.** The CRM, finance system and support desk each hold a different address or contract end date, with no rule about which one wins.
- **Missing context.** A note in someone's inbox, or a verbal agreement, that changes what the right action is but never reached the system.

As an illustration only: imagine an agent asked to chase overdue invoices. The finance system shows an invoice as unpaid because a payment was received against a duplicate account. A person might recognise the customer and check. The agent sends a firm reminder, perhaps to dozens of customers affected by the same matching problem, within minutes. Nothing about the model failed. The data told it something untrue, and it acted correctly on that untruth.

This is why we treat [data quality as more important in the AI era, not less](/insights/why-ai-makes-data-quality-more-important-not-less/).

## This is a control problem, not only a model problem

Security guidance for AI systems increasingly frames the risk this way. The OWASP Top 10 for LLM applications describes ["excessive agency"](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) as the vulnerability that allows damaging actions in response to unexpected or ambiguous outputs, and traces it to three causes: excessive functionality, excessive permissions and excessive autonomy. Its mitigations are familiar operational controls: least privilege, human approval for high-impact actions, and enforcing authorisation in the downstream system rather than relying on the model's judgment.

Data protection law makes a related point. The UK GDPR accuracy principle, as [explained by the ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/accuracy/), expects organisations to take reasonable steps to keep personal data accurate, to make the source and status of information clear, and to apply more care where data drives significant decisions about people. An agent acting on customer records is exactly the kind of use where that standard rises.

And the [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) places "Govern" alongside "Map", "Measure" and "Manage": risk is managed through accountability and context, not only through better models.

## Warning signs that your data is not ready for agents with authority

- People routinely say "ignore that field, it's never right".
- Two systems hold the same fact and nobody can say which is authoritative.
- Important statuses are updated in batches, or only when someone remembers.
- Reports from different teams disagree on basic counts.
- Integrations were built without an owner and fail without anyone noticing.
- The proposed agent's permissions were set to "admin" because it was quicker.

Any one of these is manageable for a human reader. Together they describe an environment where automated action will reproduce existing confusion faster.

## Authority needs trustworthy context: a practical sequence

Before an AI workflow receives broader permissions, identify authoritative sources, define important fields, control access, and specify what information must be verified before action. In practice that means working through a short sequence for each action the agent will take:

1. **List the actions, not the use case.** "Customer service agent" is too vague. "Issue a refund up to a set amount", "change a delivery address" and "close a ticket" are actions you can reason about.
2. **Trace the data each action depends on.** For each action, which fields does the agent read to decide, and where do they come from?
3. **Name the authoritative source for each field.** If nobody can, that is the first piece of work. Our guide on [deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) covers this in more depth.
4. **Define what "current" means.** How old can a status be before the agent must re-check or escalate?
5. **Set preconditions.** What must be verified before the action proceeds, such as a single matching record, a confirmed payment state or an unchanged contract date?
6. **Grant the narrowest permission that works.** Read-only where possible, write access only to the specific objects and fields the action needs.
7. **Log every action with its inputs.** If something goes wrong, you need to know what the agent saw, not only what it did.

## Keep human judgment where consequence is high

Not every decision should be automated. High-impact, irreversible or ambiguous actions should have tighter controls, explicit approval or bounded authority. A simple way to decide is to classify each action:

| Action type | Example | Reasonable control |
| --- | --- | --- |
| Reversible, low impact | Tagging or routing a ticket | Automate, monitor, sample-check |
| Reversible, customer-visible | Sending a status update | Automate within templates and verified data; escalate on mismatch |
| Financial or contractual | Refunds, credit notes, cancellations | Bounded limits plus human approval above threshold |
| Irreversible or ambiguous | Deleting records, legal notices | Human decision; agent prepares, person approves |

## The trade-offs

Tighter controls slow things down, and some of the value of an agent is speed. Approval steps can become rubber stamps if they are too frequent. Cleaning data before deployment costs time that sponsors may not have budgeted. The answer is rarely "fix all the data first". It is usually to start with actions whose inputs are already trustworthy, constrain the rest, and treat the data problems the agent exposes as part of the work rather than a reason to stop. Our article on [whether a business is ready for AI agents](/insights/is-your-business-actually-ready-for-ai-agents/) looks at that sequencing.

## What better looks like

AI operates inside a governed workflow with known data sources, clear permissions, visible actions, failure handling and a human escalation path. Each action has a named authoritative source for the data it depends on. Permissions match the action, not the convenience of setup. Every action is logged with its inputs, and somebody is responsible for reviewing exceptions, as described in [why AI agents need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/). Data problems discovered by the agent are routed to an owner and fixed at source.

If you are planning to give AI systems the ability to act, the most useful early investment is often an honest look at the data they will act on. That is a core part of how we approach [business automation and AI workflows](/services/business-automation-ai-workflows/).
