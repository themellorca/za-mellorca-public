---
hub: discovery
record_id: DISC-465
slug: business-rules-hidden-inside-ai-prompts
title: Business rules are hidden inside AI prompts
description: Discount limits, approval rules and eligibility written into AI prompts are invisible, untested and not reliably enforced. How to extract them and put them where they can be owned.
lead: Discount limits, approval rules and eligibility written into AI prompts are invisible, untested and not reliably enforced. How to extract them and put them where they can be owned.
category: AI, Automation & Agent Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Business rule owner (sales, finance or credit) with the AI tool owner
budget_owner: COO/IT budget holder
sources:
  - LLM07:2025 System Prompt Leakage | https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/
  - Decision Model and Notation™ (DMN™) - Object Management Group | https://www.omg.org/dmn/
related:
  - AI-generated decisions cannot be traced to source data | /discovery/ai-generated-decisions-cannot-be-traced-to-source-data/
  - Prompt and configuration changes made without version control | /discovery/prompt-and-configuration-changes-made-without-version-control/
  - Agent conversations are not connected to durable business records | /discovery/agent-conversations-not-connected-to-durable-business-records/
summary: Discount limits, approval rules and eligibility written into AI prompts are invisible, untested and not reliably enforced. How to extract them and put them where they can be owned.
layout: plain
---
When a business builds an AI assistant or agent, the quickest way to make it behave is to write instructions into its prompt: "never offer more than a 10% discount", "refunds over R5,000 need a manager", "only quote delivery to Gauteng and the Western Cape". It works on the day it is written. Over time those sentences become the only place some business rules exist. Nobody outside the AI project can see them, test them or change them safely, and the AI may not follow them every time.

## The problem in plain language

Business rules are the decisions a company has agreed to apply consistently: who qualifies for credit, what discount a salesperson may give, which orders need approval, what a customer can be told about delivery. Traditionally they live in policy documents, system configuration, approval workflows or code that someone owns.

In AI-enabled processes, these rules increasingly end up as natural-language text inside a system prompt or an agent's instructions. The symptoms appear slowly: the AI gives a discount the finance policy does not allow; two assistants apply different rules because their prompts were edited separately; a price change is made in the ERP but not in the prompt; and when someone asks "where is this rule written?", the answer is a text box in an AI tool that only one person knows how to find.

## What the buyer is actually trying to solve

The buyer is often a head of operations, a finance manager or an IT lead who has inherited AI assistants built quickly by enthusiastic teams. They search for things like "where should business logic live with LLMs", "AI assistant ignoring instructions", "how to enforce rules on an AI agent", "prompt management and version control" or "guardrails for AI agents".

The real need is to know which rules the AI is applying, to make sure the important ones are enforced reliably, and to change a rule in one place without hunting through prompts.

## Evidence and system mechanism

Two features of large language models make prompts a weak home for business rules.

First, instructions in a prompt shape behaviour but do not guarantee it. The OWASP Top 10 for LLM applications states that the system prompt should not be treated as a secret or used as a security control, and that critical controls such as privilege separation and authorisation bounds checks must not be delegated to the model, whether through the system prompt or otherwise ([OWASP LLM07: System Prompt Leakage](https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/)). The same reasoning applies to commercial rules. If a discount limit matters, it needs enforcing somewhere deterministic, not merely asking for.

Second, prompts mix many kinds of content together: tone of voice, product information, formatting preferences and genuine rules. Changing one risks changing the others, and there is rarely a test that shows what the change did.

Business-rules practice already offers a better home. The Object Management Group's Decision Model and Notation standard is described as a modelling language for the precise specification of business decisions and business rules, allowing rules to be defined in unambiguous decision tables that support discussion and agreement on business decision-making ([OMG: Decision Model and Notation](https://www.omg.org/dmn/)). Most small businesses will not adopt DMN formally, but the principle stands: rules belong in a form the business can read, own, test and change.

## Problem owner and why now

The problem owner is the person accountable for the rule itself, such as the sales director for discounts or the credit controller for payment terms, together with whoever owns the AI tool. Today these are often different people who never discuss the prompt. Budget usually sits with the COO or the IT budget holder.

The trigger is rapid tool adoption. Assistants and agents are being built inside CRM, helpdesk and messaging platforms by staff who are not developers, and the prompt is the only configuration surface they have. The problem usually becomes visible when a policy changes, when an AI makes a commitment the business did not intend, or when an auditor or customer asks how a decision was reached.

## Economic consequence

- **Revenue and margin leakage:** discounts, refunds or free services granted outside policy because the AI interpreted an instruction loosely.
- **Inconsistent customer treatment:** different channels give different answers because each prompt carries its own version of the rule.
- **Slow, risky change:** a simple policy update requires finding and editing every prompt, with no way to test the effect.
- **Key-person dependency:** only the person who wrote the prompt knows what rules it contains.
- **Weak audit trail:** it is hard to show which version of a rule applied to a given decision.

Quantify these with your own records: credit notes and write-offs linked to AI conversations, complaint themes, and the time taken to roll out a policy change across channels.

## Root cause

- **Convenience:** the prompt is the only place a non-developer can change behaviour, so everything goes there.
- **No rule inventory:** the business never listed its rules separately from the systems that apply them.
- **No separation of concerns:** guidance on how to speak is mixed with rules on what may be done.
- **No change control:** prompts are edited live without versioning, review or testing, the same weakness described in [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/).

## Practical intervention

1. **Extract the rules.** Read every production prompt and list each instruction that is really a business rule: limits, eligibility, approvals, prohibitions.
2. **Give each rule an owner and a home.** Rules with financial, legal or customer consequences should live in a system that enforces them: a pricing table in the ERP, an approval step in the workflow, a permission on the API the agent calls, or a simple decision table.
3. **Let the AI call the rule, not hold it.** The agent asks a tool "what discount is allowed for this customer?" and receives an answer from the system of record, instead of carrying the number in its prompt. This also depends on the AI having access to authoritative data; see [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/).
4. **Enforce at the point of action.** If the AI proposes a refund above the limit, the system that issues refunds should reject or route it, whatever the prompt said.
5. **Keep prompts for guidance.** Tone, structure and helpful context can stay in the prompt. Version prompts, review changes and test them against a small set of known cases before release.
6. **Document what remains,** following the approach in [why automation documentation matters](/insights/why-automation-documentation-matters/).

### An illustrative example

*Illustrative:* a Durban equipment-hire business uses an AI assistant on its website to answer hire enquiries. Its prompt contains deposit amounts, weekend rates and a rule that certain equipment is not hired to first-time customers. When rates change, the website price list is updated but the prompt is not, and customers are quoted old rates. The fix is to have the assistant look up rates and eligibility from the booking system, leaving the prompt to describe tone and the enquiry process.

## Diagnostic questions

- Could you produce a list of every business rule your AI tools are currently applying?
- For each rule, is there a system that enforces it if the AI gets it wrong?
- When a policy changes, how many prompts need editing, and who knows that?
- Are prompt changes versioned, reviewed and tested before going live?
- Do rule owners, such as finance or sales leadership, know their rules are in prompts?

## What good looks like

Business rules are listed, owned and stored where they can be enforced. AI tools consult those rules through controlled tools or data access and cannot complete an action that breaks them. Prompts are short, versioned and focused on how to communicate. A policy change is made once and takes effect everywhere, and the business can show which rule applied to any AI-assisted decision.

## Where Mellorca fits

Mellorca helps businesses extract business rules from AI prompts and automations, place them in systems that enforce them, and connect AI tools to those rules safely. That work sits within [business automation and AI workflows](/services/business-automation-ai-workflows/) and, where rules need a new home in core systems, [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

OWASP's guidance is written from a security perspective; it is applied here by analogy to commercial rules. DMN is cited as a reference model for expressing rules, not as a recommendation that every business adopt the standard. Rand values in the opening are hypothetical examples of rule wording, and the worked example is illustrative.
