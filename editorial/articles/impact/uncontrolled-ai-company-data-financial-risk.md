---
hub: impact
record_id: CPS-276
slug: uncontrolled-ai-company-data-financial-risk
title: Staff Using AI with Company Data Nobody Governs
description: Uncontrolled AI use can move company information into tools and workflows the business has not assessed. Governance should enable useful AI while controlling data, access and accountability.
lead: AI can remove real work. It can also create an uncontrolled information path when employees paste customer, employee, commercial or internal data into tools the business has never assessed.
category: AI Governance
published_date: 2026-09-01
updated_date: 2026-09-01
byline_category: Artificial Intelligence, AI Agents & Governance
tags:
  - Risk exposure
  - Rework
  - AI spend
cta_label: Automation & AI Workflows
cta_href: /services/business-automation-ai-workflows/
side_title: Cost mechanisms
side_text: Useful AI needs clear operating rules, data boundaries and accountable workflows.
commercial_domain: Artificial Intelligence, AI Agents & Governance
primary_pain: Employees use AI tools with company information without organisational visibility or rules
primary_cost_mechanism: Privacy, security, compliance, rework and governance risk
sources:
  - AI and cyber security: what you need to know | https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know
  - AI Principles Overview - OECD.AI | https://oecd.ai/en/ai-principles
  - Guidance on AI and data protection | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/
  - Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile | https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
closing_title: Related Insight
closing_text: [Your AI strategy has an integration problem](/insights/your-ai-strategy-has-an-integration-problem/) examines the systems foundation beneath AI adoption.
related:
  - AI on Poor-Quality Data: Faster Decisions, Unreliable Results | /impact/ai-on-poor-quality-data-financial-cost/
  - When Nobody Owns the Business Software You Pay For | /impact/pain-unclear-ownership-technology-spending/
  - Not Knowing Who Still Has Access to Your Systems | /impact/uncontrolled-system-access-financial-risk/
---
## The problem is not that employees are curious about AI

Employees use tools that help them work faster. That behaviour is predictable. The governance problem begins when the organisation cannot answer which AI services are being used, what information is entered, what outputs influence business decisions, or who is accountable when the output is wrong.

A blanket ban may push useful experimentation underground. Uncontrolled adoption does the opposite: it treats every tool and data type as if the risk were the same. Both approaches are weak operating models.

## Why uncontrolled AI use becomes normal

Generative AI is easy to access, useful for drafting and analysis, and often adopted faster than procurement, security and policy processes can respond. Employees therefore solve immediate problems before the business has designed an approved path.

Public guidance has converged on the same practical message. NIST's AI Risk Management Framework, together with its companion profile for generative AI, sets out governance, measurement and risk-management actions, and NIST's wider AI work emphasises testing, evaluation, verification and validation. The UK National Cyber Security Centre urges organisations to treat security as a core business priority for AI rather than an afterthought, to understand worst-case scenarios if AI tools fail, and to plan incident response for AI-related security problems. The OECD's AI Principles, updated in 2024, put accountability at the centre: the actors involved in AI systems must be accountable for them. The implication for ordinary businesses is practical: useful AI still requires ownership, data rules and controls proportionate to the use case.

### A worked example

Consider a Durban logistics broker with about 80 staff. Nobody decided to "adopt AI". Instead, a sales manager started pasting customer emails into a free chatbot to draft replies; the finance team began summarising supplier statements with a different tool; and an operations analyst connected an AI add-in to the shared mailbox to sort incoming requests. Six months later, management discovers three paid subscriptions on personal cards, customer rate cards that have been pasted into a public service, and an add-in with read access to every message in the operations inbox. None of these people acted in bad faith. The business simply had no approved lane, so each person built their own.

## How the pain becomes money

- **Data exposure:** confidential information may enter services whose handling terms have not been assessed.
- **Rework:** inaccurate or unsuitable outputs can create corrections when employees trust them without sufficient review.
- **Compliance effort:** the business may need to investigate where regulated or personal information was processed. For South African firms, that includes obligations under the Protection of Personal Information Act.
- **Tool sprawl:** departments can accumulate overlapping AI subscriptions without measuring value.
- **Decision risk:** AI-assisted recommendations can affect customers, employees or money without clear accountability.
- **Integration risk:** AI agents with action permissions can expand the consequence of weak access design.

> **The commercial signal.** If management cannot state which AI tools are approved, what company information may enter them and which outputs require human review, adoption is ahead of governance.
>

The integration risk deserves particular attention. The NCSC describes prompt injection, where an attacker crafts input designed to make a model behave in an unintended way, including revealing confidential information or triggering unintended consequences in a connected system. A drafting tool that only produces text has a limited blast radius. An assistant that can read a mailbox, update a CRM or send messages does not. We cover this shift in [why AI adoption creates a new access control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/) and, more specifically, in [agent permissions that are broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/).

## Quantify what you can actually observe

Do not invent a hypothetical "AI breach cost". Measure the operating footprint first.

| Measure | Calculation |
| --- | --- |
| AI subscription exposure | monthly AI spend by tool × 12, separated into approved and unapproved or duplicate services |
| AI rework exposure | verified AI-related correction incidents × average correction hours × loaded hourly cost |

For privacy or security exposure, use scenario analysis tied to the type of information and the organisation's actual legal, contractual and incident-response obligations. Risk is not the same as realised loss.

Subscription spend is often the easiest number to find and the most persuasive to start with, because it is already in expense claims and card statements. Allocating it to the outcomes it supports is harder, and is the subject of [AI usage costs not allocated to business outcomes](/discovery/ai-usage-costs-not-allocated-to-business-outcomes/).

## How to diagnose where you stand

A short internal review can establish the position within a couple of weeks:

1. **Ask, without blame.** A simple anonymous survey asking which AI tools people use and for what will surface far more than an audit framed as a crackdown.
2. **Check the money trail.** Review card statements and expense claims for AI subscriptions.
3. **Check connected apps.** Look at third-party applications granted access to email, file storage and CRM. Add-ins often carry broad permissions.
4. **Classify the data.** For each use case, note whether it involves public, internal, confidential or personal information.
5. **Identify actions, not just outputs.** Mark any use where AI can change records, send messages or trigger payments.

## Governance should not kill useful adoption

The unpopular but important point is that excessive control can create its own cost. If approved tools are unusable or access takes months, employees will either avoid valuable AI or seek workarounds. Good governance creates a safe lane: approved services, clear data classifications, usable guidance and escalation for higher-risk cases.

The NCSC makes a related point: the burden of security should not fall mainly on individual users, and developers of AI systems should take responsibility for the security outcomes of their customers. Inside a business, the equivalent is that the organisation, not each employee, should carry the work of assessing tools and setting rules.

### A simple tiering approach

| Tier | Typical use | Control |
| --- | --- | --- |
| Low | Brainstorming, drafting with public or non-sensitive information | Approved tool, short guidance |
| Medium | Internal documents, summaries of business information | Business-grade tool with assessed data terms, named owner |
| High | Personal or customer data, customer-facing outputs, financial or legal content | Assessment before use, mandatory human review, logging |
| Action-taking | Agents that update systems or send messages | Least-privilege access, testing, monitoring, clear rollback |

## When this becomes commercially urgent

Act when employees enter customer or employee data into public AI services, departments buy tools independently, AI outputs are sent to customers without review, agents can change records or send messages, or the business has no inventory of AI use. The risk increases sharply when AI moves from generating text to taking actions in connected systems.

## What good looks like

The organisation maintains an AI use inventory, defines approved tools, maps permitted data classes, assigns owners, controls access, tests important use cases and defines where human review is mandatory. Higher-risk uses receive stronger governance than low-risk drafting or brainstorming. The UK Information Commissioner's Office takes the same lifecycle view for personal data, expecting accountability from problem formulation through to decommissioning and recommending data protection impact assessments where AI processes personal information.

## Practical next actions

1. Survey teams for AI tools and use cases already in operation.
2. Classify the data being entered and the actions AI is allowed to take.
3. Publish a short approved-use policy employees can actually understand.
4. Provide approved tools so governance does not depend on prohibition alone.
5. Require review for customer-facing, financial, legal or high-impact outputs.
6. Measure subscriptions, incidents, rework and realised productivity gains.
7. Review agent permissions before connecting AI to operational systems.

## What to do first

In the first fortnight, run the survey, pull the subscription spend and list every AI add-in connected to email or files. Then publish a one-page rule: which tools are approved, which information must never be entered, and which outputs need a second pair of eyes. That single page closes most of the gap while the fuller inventory is built.

## Bottom line

AI governance is not a choice between innovation and control. The commercial objective is to capture useful productivity without creating invisible information flows, duplicate spend or unowned automated decisions. When adoption is visible, the business can govern risk and value at the same time. The systems foundation beneath that adoption is examined in [your AI strategy has an integration problem](/insights/your-ai-strategy-has-an-integration-problem/).
