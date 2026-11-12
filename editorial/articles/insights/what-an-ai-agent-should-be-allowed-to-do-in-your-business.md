---
hub: insights
record_id: INS-185
slug: what-an-ai-agent-should-be-allowed-to-do-in-your-business
title: What Should an AI Agent Be Allowed to Do?
description: A practical way to set the boundaries of an AI agent: derive permissions from the job, sort actions into four tiers of risk, and keep people in front of anything that moves money.
lead: A practical way to set the boundaries of an AI agent: derive permissions from the job, sort actions into four tiers of risk, and keep people in front of anything that moves money.
category: AI Governance
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: AI Governance
sources:
  - LLM06:2025 Excessive Agency | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Section 71 Automated decision making - POPIA | https://popia.co.za/section-71-automated-decision-making/
  - AI Agent Orchestration Patterns - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns
related:
  - How to Track AI Agent Actions | /insights/how-to-keep-a-reliable-record-of-what-your-ai-agents-did/
  - How to Define Boundaries for AI Agents | /insights/how-to-define-boundaries-for-ai-agents/
  - Where AI Agents Add Value—and Where They Add Unnecessary Risk | /insights/where-ai-agents-add-value-and-where-they-add-unnecessary-risk/
summary: A practical way to set the boundaries of an AI agent: derive permissions from the job, sort actions into four tiers of risk, and keep people in front of anything that moves money.
layout: plain
---
Most conversations about AI agents start with capability: what can it do? The more useful question for an owner or operations manager is the reverse: what should it be allowed to do? An agent that can read a customer record, draft a reply, update a field and issue a credit note is useful. An agent that can do all of that without limits, on whatever the person who set it up happened to be able to access, is a risk that has simply not yet caused an incident.

This article offers a practical way to decide the boundaries. It does not require technical depth. It requires a clear view of the work, the systems involved and who is accountable when something goes wrong.

## Start with the task, not the tool

Permissions should be derived from a written description of the job. If the job is "answer supplier statement queries", the agent needs to read supplier statements and open invoices, and perhaps to draft an email. It does not need to approve payments, change bank details or read payroll. That sounds obvious, yet in practice agents are often connected using a single broad login because it is quicker, and the narrowing never happens. The pattern is common enough to have its own entry among the [agent permissions that are broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/).

Write the job as a short list of verbs and objects: reads these records, drafts these messages, updates these two fields, never touches these. If the list is hard to write, the process is not understood well enough to hand to an agent yet. That is a useful finding in itself, and it connects to the broader question of [how to choose a business process for an AI agent](/insights/how-to-choose-a-business-process-for-an-ai-agent/).

## Three ways an agent ends up with too much power

The OWASP project on risks for large language model applications names a category it calls excessive agency, and breaks it into three causes. They are a handy checklist for any business.

- **Excessive functionality.** The agent is given tools it does not need for its task, such as the ability to delete records when it only needs to read them.
- **Excessive permissions.** The tools it does need are connected with more access than the task requires, such as a whole finance system when it only needs one ledger report.
- **Excessive autonomy.** The agent can take consequential actions without anyone checking them first.

Each of the three can be fixed independently. Remove the tools that are not needed, narrow the access of the tools that remain, and put a person in front of the actions that matter. All three are decisions made by the business, not by the software vendor.

## A simple four-tier model

It helps to sort every action an agent might take into one of four tiers. The tiers describe how much damage a mistake can do and how easily it can be undone.

1. **Read and summarise.** The agent looks at information and reports back. Mistakes are embarrassing, but nothing in the business changes. Even here, access matters: reading is still a disclosure of personal information if the agent can see more than the task needs.
2. **Draft for a person.** The agent prepares an email, a quotation or a journal, and a person sends or posts it. Mistakes are caught if the reviewer is genuinely reviewing.
3. **Act within a narrow limit.** The agent makes small, reversible changes by itself, such as tagging a ticket, updating a delivery status or booking a slot, within a stated ceiling.
4. **Act with money or consequence.** Payments, price changes, contract terms, deletions, anything that reaches a customer's account or the tax record. These need explicit human approval, every time, until a long record justifies a different arrangement.

Most South African small and mid-sized businesses should begin with tiers one and two for any new agent, move specific, well-understood actions into tier three after weeks of evidence, and leave tier four with people. The design of those human checkpoints is covered in [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/).

## Whose authority is the agent using?

An agent acts with some identity. If that identity is a staff member's personal login, every action it takes appears in the logs as that person, and the agent inherits everything that person can do, including things they would never delegate. When that person leaves, the agent breaks or, worse, keeps running on an account nobody is watching. Give each agent its own account with its own narrow role, owned by a named person. The reasoning is set out in [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).

The same logic applies to data. Giving an agent access to every system sounds like helping it do a better job, but breadth increases the chance of both error and exposure. The case against that instinct is made in [why giving AI access to more systems is not automatically better](/insights/why-giving-ai-access-to-more-systems-is-not-automatically-better/).

## The legal edge: personal information and decisions

Under the Protection of Personal Information Act, the business remains the responsible party for the personal information its agent handles. Section 13 of the Act requires collection for a specific purpose, and an agent that reads customer records beyond the purpose of its task stretches that principle. Section 71 deals with decisions based solely on automated processing that have legal consequences for a person or significantly affect them. The Act sets out limited exceptions and requires that the person be given an opportunity to make representations. In practical terms, an agent should not be the sole decision maker on matters such as declining credit, terminating a service or flagging someone as fraudulent. That belongs in tier four, with a human accountable.

The NIST AI Risk Management Framework offers a useful parallel from outside South Africa: it asks organisations to map where an AI system is used, measure its behaviour, manage the risks and assign governance responsibility. You do not need to adopt a formal framework to take the lesson. Someone has to own the agent, and the boundaries have to be written down.

## Questions to ask before switching an agent on

- What is the job, in one paragraph, and what is explicitly out of scope?
- Which systems and which records can it reach, and can that be narrowed further?
- Which actions are reversible, and which are not?
- What is the largest amount of money or number of records it can affect in a single run?
- Who approves actions in tier four, and what happens when that person is on leave?
- How will we know what it did? The answer to this question is its own subject, covered in [why AI agents and automated workflows need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/).
- How do we switch it off quickly, and who is allowed to do so?

## An illustrative example

The following is a hypothetical case. A Durban distributor of building supplies wants an agent to chase overdue accounts. In the first design, the agent connects with the credit controller's login. It can read every customer, edit credit limits, post credit notes and send email from her address. Nobody intended that, but nobody narrowed it either.

In the revised design, the agent has its own account. It can read the aged debtors report and customer contact details, and it can create a draft email in a shared mailbox. It cannot edit limits or post anything. The credit controller reviews and sends the drafts each morning, and a note is saved against the customer record. After two months of clean drafts, the owner lets the agent send the first, polite reminder itself for accounts less than fifteen days overdue and under a set Rand amount. Everything else stays with a person. The agent is no less useful, and the worst day it can have is now a badly worded reminder rather than a wrongly cancelled account.

## The point

An AI agent should be allowed to do the least that lets it complete a clearly described job, with its own identity, a ceiling on what it can affect, and a person in front of anything that moves money or changes a customer's standing. Permissions can be widened as evidence accumulates. They are far harder to take back after an incident. Microsoft's guidance on agent design patterns makes a similar point from the engineering side: choose the simplest pattern that does the job, and add autonomy only when the need is clear. The same discipline works at the business level.
