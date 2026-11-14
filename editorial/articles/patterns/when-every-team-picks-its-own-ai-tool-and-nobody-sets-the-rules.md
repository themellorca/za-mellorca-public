---
hub: patterns
record_id: PAT-382
slug: when-every-team-picks-its-own-ai-tool-and-nobody-sets-the-rules
title: When Staff Use Different AI Tools With No Shared Governance
description: Marketing uses one assistant, finance another, and a few staff use personal accounts. Without shared rules, the business cannot say what data went where or whose answers to trust.
lead: Marketing uses one assistant, finance another, and a few staff use personal accounts. Without shared rules, the business cannot say what data went where or whose answers to trust.
category: AI, Automation & Digital Transformation
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: AI, Automation & Digital Transformation
pattern_family: AI, Automation & Digital Transformation
observable_condition: Different people and teams use different AI tools, some on personal accounts, and nobody can say which tools are in use, what information has been entered into them or which outputs have been checked.
primary_identification: Ungoverned, individually chosen AI tools: there is no inventory, no data-handling rule, no review standard and no named owner for AI use across the business.
commercial_value_dimensions: Data protection and POPIA exposure, quality and consistency of work, software spend, staff confidence and the ability to scale AI use safely
sources:
  - https://www.nist.gov/itl/ai-risk-management-framework | https://www.nist.gov/itl/ai-risk-management-framework
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://learn.microsoft.com/en-us/purview/ai-microsoft-purview | https://learn.microsoft.com/en-us/purview/ai-microsoft-purview
summary: Marketing uses one assistant, finance another, and a few staff use personal accounts. Without shared rules, the business cannot say what data went where or whose answers to trust.
layout: plain
---
## Observable condition

The marketing coordinator drafts posts with one AI assistant. The bookkeeper uses a different one to summarise supplier contracts. A sales rep pays for a third from his own pocket and claims it back as "software". The operations manager has pasted a customer list into a free tool to tidy the formatting. None of this was approved, and none of it was forbidden, because nobody ever said anything either way.

An illustrative example: a Pretoria property management firm finds out at a client meeting that a junior employee has been summarising tenant complaints, including names and unit numbers, with a free online assistant. The employee is embarrassed and puzzled. Nobody told them not to, and the tool made their work noticeably faster.

The business is not failing at AI. It is succeeding at it in fifteen different directions at once, with no common standard.

## Realisation

The realisation is that the absence of a policy is itself a policy: every individual decides for themselves. Each decision may be sensible in isolation, yet together they mean the business cannot answer simple questions. Which tools handle our information? What have we told them? Whose output do we check, and how?

Frameworks for managing AI risk start from the idea that this is an organisational responsibility. The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is voluntary guidance built around functions that include governing, mapping, measuring and managing AI risk, and it places the governing function, which covers policies, accountability and culture, across the whole effort. A small business does not need the full framework, but the order of its thinking is useful: decide who is accountable and what the rules are before measuring anything else.

**Realisation prompt:** ask every team lead to write down the AI tools their team used last week. Compare the lists. The gaps between them show how much the business does not know.

## Identification

This is a pattern of ungoverned tool diversity. The visible symptoms are different tools in different teams, personal accounts used for work, inconsistent quality of AI-assisted output and subscriptions scattered across expense claims. The common assumption is that staff are being reckless or that AI is unmanageable. The structural cause is that the business gave people a powerful capability without a shared rule about data, an approved list of tools or a person responsible for the whole.

The Pattern [why AI adoption creates a new access control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/) covers what the tools can reach. The Pattern [when employees use AI but the operating model stays the same](/patterns/when-employees-use-ai-but-the-operating-model-stays-the-same/) covers the missing change in how work is organised. This pattern is about the missing shared rules.

## Diagnosis

- **No inventory.** The business cannot list the AI tools in use, so it cannot assess any of them.
- **Personal accounts.** Work is done in accounts the business does not own, which means it cannot see usage, recover the content or switch the account off when someone leaves.
- **No data rule.** Staff do not know whether customer names, contract terms or employee details may be entered into a given tool. In the absence of a rule, they decide by convenience.
- **Different standards of checking.** One team reads every output; another pastes it directly into customer emails. The Discovery note [AI outputs accepted without defined review thresholds](/discovery/ai-outputs-accepted-without-defined-review-thresholds/) explains why a stated threshold matters.
- **Duplicate spending.** Several teams pay for overlapping tools, often small amounts that go unnoticed. The Impact note [AI subscription sprawl and unmeasured value](/impact/ai-subscription-sprawl-unmeasured-value-cost/) looks at the cost.
- **No owner.** When something goes wrong, there is no person whose job it is to respond.

The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) sets out conditions for the lawful processing of personal information, including security safeguards and limits on how information is used and passed on. Entering a customer's details into a tool the business has not assessed raises exactly those questions, and the business, not the employee, is generally the responsible party.

## Commercial impact

The largest exposure is information. Once staff enter confidential or personal data into an outside tool, the business may have lost control over where it goes and how it is kept, and it may not even know the event happened. A breach of customer trust, a complaint to the Information Regulator or a contract dispute with a client who restricts data sharing can follow.

The second cost is quality. If each team works differently, customers receive uneven work: one proposal is carefully checked, another contains an invented statistic. The reputation of the business rests on the weakest output, not the average one.

The third cost is money. Parallel subscriptions, expensed on personal cards, add up and bring no volume benefit. The business is also unable to say whether any of them pays for itself.

The fourth cost is lost advantage. Where tools are used privately, the good ideas stay private. A prompt that halves the time to prepare a quote helps one person instead of the whole sales team. Shared governance is not only a brake; it is how useful practice spreads.

## Common misidentification

The first reflex is to ban AI tools outright. In practice the use goes underground, and the business loses sight of it entirely. The second is to write a long policy that nobody reads and that does not name an approved tool, so staff still have to guess. The third is to standardise on one tool for everybody before understanding what each team needs, which can produce workarounds when it does not fit. Good governance is short, practical and aimed at helping people use the tools well.

## Possibility

In a better state, the business keeps a short list of approved tools and what each is approved for. Staff know which categories of information may never be entered, which may be entered only into approved tools and which are unrestricted. Outputs that go to customers have a stated check. One person owns the list, answers questions and hears about problems early.

Vendor tooling can help once the rules exist. Microsoft's [documentation on Microsoft Purview for AI](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview) describes capabilities for discovering AI activity and applying data protection controls to it, which is useful where a business already uses that ecosystem. The tool enforces rules; it cannot decide them.

## Intervention

Treat the first version as a working draft. A one-page agreement that people actually follow is worth more than a thorough document that nobody opens.

## Practical next actions

1. **Take a census.** Ask each team to list the AI tools they use, whether the account is personal or company-owned, and what they use them for. Make it clear this is to learn, not to punish.
2. **Classify your information.** Define three groups: never to be entered into AI tools, allowed only in approved tools, and unrestricted. Give examples from your own business.
3. **Approve a short list.** Choose the tools that meet your needs, move users onto company-owned accounts and state what each tool is approved for.
4. **Set a checking standard.** Decide which outputs must be reviewed by a person before they reach a customer, a regulator or a payment, and who does the review.
5. **Name an owner.** Give one person responsibility for the list, the rules and the questions, and tell staff how to report a mistake without fear.
6. **Review every quarter.** Revisit the list, the spending and any incidents, and add what the best-performing teams have learned.

## Diagnostic questions

- Can you name every AI tool your staff used this month?
- Do staff know what information they must never enter into one?
- Whose account is the work being done in, and who can recover it?
- Which AI-assisted outputs reach customers without anyone checking them?
- Who would you ask today if you suspected that confidential data had been entered into a free tool?

## Bottom line

When every team picks its own AI tool, the business ends up with no inventory, no data rule and no accountable person. A short list of approved tools, clear limits on what may be entered and a named owner give staff the confidence to keep using AI and the business the visibility to stand behind it.
