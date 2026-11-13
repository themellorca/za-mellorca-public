---
hub: impact
record_id: CPS-284
slug: ai-tools-bought-separately-by-each-department-duplication-fragmented-governance-data-handling-cost
title: Every Department Buying Its Own AI: Duplication, Gaps and Data Risk
description: When each team buys its own AI tools, the business pays for overlap and ends up with no single view of cost, rules or the data being entered.
lead: When each team buys its own AI tools, the business pays for overlap and ends up with no single view of cost, rules or the data being entered.
category: AI Governance
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: AI Governance
commercial_domain: AI Governance
primary_pain: AI tools purchased separately by every department with no shared register, rules or data standards
primary_cost_mechanism: Overlapping subscriptions and duplicated learning effort, unremoved access after staff leave, inconsistent handling of personal and confidential data, and inability to answer client or regulator questions
sources:
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Govern AI - Guidance to set up your organization's AI governance process - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/govern
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - No Rules for AI Tools: The Cost of Uncontrolled Data Entry | /impact/no-rules-for-company-information-entered-into-ai-tools-compliance-cost/
  - Buying AI because competitors are: The cost of spending without a business case | /impact/buying-ai-without-defined-business-problem-cost/
  - Fluent, confident and wrong: The cost of sending AI output to customers unchecked | /impact/ai-drafted-customer-messages-sent-without-review-correction-and-trust-cost/
summary: When each team buys its own AI tools, the business pays for overlap and ends up with no single view of cost, rules or the data being entered.
layout: plain
---
## Four departments, four AI subscriptions, no shared view

A Midrand professional-services firm with about 120 staff has no AI strategy, yet it has AI everywhere. Marketing pays for a writing assistant and an image generator. Finance trialled a tool that summarises contracts and kept it. Human resources uses a screening assistant that came as an add-on to the recruitment system. Sales has a meeting-notes recorder on a team's credit card, and two engineers have their own coding assistant. Each purchase made sense to the person who made it, and each was small enough to avoid a formal approval.

Nobody has ever listed them together. If the managing director asked, "which AI tools do we use, what data goes into them, and what do they cost?", the honest answer would take a week to assemble and would still miss some.

This article looks at AI tools bought separately by every department, and at what that costs in duplication, fragmented governance and inconsistent data handling. It builds on our work on [departments buying separate tools for the same need](/impact/departments-buying-separate-tools-same-need-duplicate-subscription-cost/) and on [AI subscription sprawl](/impact/ai-subscription-sprawl-unmeasured-value-cost/). Those cover the money. This one concentrates on what happens to rules, data and accountability when there is no common approach.

## Why this happens so quickly

AI tools differ from earlier software in how easily they enter a business. Many start at a few hundred rand a month, are bought online with a card, and work the same day. There is no installation, no IT project and often no contract that passes through procurement.

- **Low price hides high exposure.** A cheap subscription can still receive customer contracts, employee records or financial statements.
- **Existing software adds AI quietly.** Features appear inside tools already in use, sometimes on by default, and sometimes at a higher plan tier.
- **Each department solves its own problem.** That is sensible locally, but it means three teams may be paying for tools that do nearly the same thing under different names.
- **Nobody owns the topic.** IT sees the infrastructure, legal sees the contracts, and the department sees a productivity gain. No one is asked to look across the whole.

## The cost of duplication

The first layer is straightforward. Two or three departments buy overlapping capabilities, such as transcription, summarisation or drafting, from different vendors, at different plan levels and with no volume leverage. Our discovery note on [AI add-ons pushing software spend beyond the approved budget](/discovery/ai-add-ons-push-software-spend-beyond-the-approved-budget/) describes how those charges also arrive inside existing contracts, which makes them harder to see.

There is a second, less visible duplication: effort. Marketing writes a prompt library, and finance writes a different one. One team spends a month learning a tool that another team has already rejected. The business pays several times for the same lesson.

## The cost of fragmented governance

Governance is the set of decisions about what is allowed, who is responsible and how problems are noticed. When each department buys its own AI, each makes these decisions alone, or does not make them at all.

The NIST [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) frames this as the need for organisations to govern, map, measure and manage AI risks, starting with accountability for the systems in use. Microsoft's cloud adoption guidance on [governing AI](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/govern) likewise treats policy, ownership and oversight as a foundation rather than an afterthought. Those documents are written for large organisations, but the underlying questions apply at any size: what AI do we run, who is accountable for it, and what is it allowed to do?

Without that, several things go wrong.

- **No single list.** Leaving staff cannot be removed from tools you do not know exist, and renewals pass unnoticed.
- **Different rules for the same data.** One team masks client names before using a tool, another pastes contracts in whole.
- **No review of outputs.** Whether an AI-drafted summary is checked before it reaches a client depends on the habits of the individual.
- **Nobody can answer a client.** When a corporate client asks whether their information is processed by AI tools, and where, there is no reliable answer.

Our pattern note on [AI agents that can act while governance cannot see them](/patterns/when-ai-agents-can-act-but-governance-cannot-see-them/) describes where this ends up as tools gain more autonomy.

## The cost of inconsistent data handling

The Protection of Personal Information Act applies to personal information however it is processed, and it places duties on the responsible party for security safeguards and for the use of operators who process information on its behalf. The text is available from the [South African government](https://www.gov.za/documents/protection-personal-information-act). A business that uses six AI tools has potentially six operators, with six sets of terms on retention, training use and data location. It may not have read any of them.

The practical risk is straightforward: personal information about employees or customers is entered into a tool the business has not assessed, under terms nobody has checked, and cannot later be traced. We cover this in more detail in [uncontrolled AI use of company data](/impact/uncontrolled-ai-company-data-financial-risk/).

## An illustrative example

For the Midrand firm, assume nine paid AI subscriptions across five teams, averaging R600 a month each, or about R65,000 a year. Perhaps three overlap in function. That is only a modest saving of perhaps R20,000 from consolidating them. The larger cost is the unknown: a staff member left in March with access to the contract-summary tool, which still holds client documents, and no one cancelled the account because no one had a list. Those figures are illustrative. The pattern is that the subscription total is the part you can count, and the governance gap is the part that can hurt.

## What a joined-up approach looks like

It does not require banning departmental initiative. It requires a light layer of coordination.

- **One register.** Tool, owner, purpose, data types entered, cost, renewal date, number of users.
- **A short approved-use policy.** What may and may not be entered, which data classes need approval, and which outputs need human review.
- **A simple intake route.** A form and a named reviewer who can say yes within days, so departments have no reason to bypass it.
- **A preferred set of tools.** Where several teams need the same capability, one agreed option with negotiated pricing.
- **A review of vendors.** Read the terms on data retention, model training and sub-processors for each tool that touches personal or confidential information.

## Practical next actions

1. **Build the list this month.** Ask each department head, and check card statements, expense claims and software invoices for AI-related charges. Record owner, cost, users and renewal date.
2. **Classify what goes in.** For each tool, note whether it receives personal information, client confidential material or only public content. Prioritise the first two.
3. **Appoint one accountable owner.** A named person, not a committee, who maintains the register and approves new tools.
4. **Issue a one-page rule set.** Cover what must never be entered, when a human must review output, and who to ask when unsure.
5. **Consolidate overlaps.** Identify two or three functions that several teams buy separately and choose one tool for each, with a transition date.
6. **Add AI tools to the leaver checklist.** Include removal of access to every item on the register, and review renewals each quarter.

The aim is not to slow people down. It is to ensure that when a client, auditor or regulator asks what AI the business uses, the answer takes minutes rather than weeks.
