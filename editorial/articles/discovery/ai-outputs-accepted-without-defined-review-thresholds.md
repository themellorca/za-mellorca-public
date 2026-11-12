---
hub: discovery
record_id: DISC-455
slug: ai-outputs-accepted-without-defined-review-thresholds
title: AI outputs are accepted without defined review thresholds
description: When nobody decides which AI outputs need checking and how closely, review drifts to habit. How to set consequence-based review thresholds and enforce them in the workflow.
lead: When nobody decides which AI outputs need checking and how closely, review drifts to habit. How to set consequence-based review thresholds and enforce them in the workflow.
category: AI, Automation & Agent Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Process owner where AI output is used (finance, service or sales manager)
budget_owner: COO/CFO
sources:
  - LLM09:2025 Misinformation | https://genai.owasp.org/llmrisk/llm092025-misinformation/
  - Article 14: Human Oversight - EU Artificial Intelligence Act | https://artificialintelligenceact.eu/article/14/
  - Manage - AIRC | https://airc.nist.gov/airmf-resources/playbook/manage/
related:
  - Why Critical Low-Code Automations Need Support Ownership | /discovery/why-critical-low-code-automations-need-support-ownership/
  - Manual work persists because automation covers only the happy path | /discovery/manual-work-persists-because-automation-covers-the-happy-path/
  - Why AI Agent Handoffs Need Enough Business Context | /discovery/why-ai-agent-handoffs-need-enough-business-context/
summary: When nobody decides which AI outputs need checking and how closely, review drifts to habit. How to set consequence-based review thresholds and enforce them in the workflow.
layout: plain
---
Many businesses now use AI to draft customer replies, summarise contracts, classify invoices, suggest credit limits or write first versions of reports. In most of them, nobody has decided which of those outputs need a person to check them, how closely, or what counts as good enough. The output is accepted because it looks plausible and the queue is long. That is not a technology failure. It is a missing operating rule.

## The problem in plain language

An AI tool produces an answer and someone, or some downstream system, uses it. Sometimes a person reads it carefully. Sometimes they skim it. Sometimes it flows straight into an email, a ledger or a customer record without anyone looking. Which of these happens depends on who is on shift, how busy they are and how much they have come to trust the tool, not on any agreed standard.

The visible symptoms are familiar: a customer receives a confident but wrong answer, a supplier invoice is coded to the wrong cost centre, a proposal quotes a clause that is not in the contract. When the error surfaces, the obvious question is "who checked this?" and the honest answer is that checking was never defined.

What is missing is a **review threshold**: a stated rule for each type of AI output that says whether it may be used directly, must be sampled, must be fully reviewed, or must not be used for this purpose at all.

## What the buyer is actually trying to solve

The operations director, finance manager or head of customer service is rarely searching for "AI governance framework". They are asking narrower, more practical questions: "how much of the AI output should we check?", "when is human review of AI required?", "can we let AI send emails without approval?", "how do we stop staff blindly trusting AI?" and "how do we prove someone reviewed an AI decision?"

Underneath all of these is the same need: to use AI at the speed it offers without letting unreviewed errors leak into customers, money or compliance records, and to be able to show afterwards that the level of checking was a deliberate choice.

## Evidence and system mechanism

The failure mode is well described in current guidance. The OWASP Top 10 for large language model applications defines overreliance as users placing excessive trust in model-generated content and failing to verify its accuracy, and recommends human oversight and fact-checking especially for critical or sensitive information, alongside automatic validation of key outputs in high-stakes settings ([OWASP LLM09: Misinformation](https://genai.owasp.org/llmrisk/llm092025-misinformation/)).

The EU AI Act, which applies to high-risk systems rather than to most small-business tools, is still a useful reference for what deliberate oversight looks like. Article 14 requires that people overseeing such systems remain aware of the tendency to rely automatically or over-rely on outputs, and that they are able to decide not to use the system or to disregard, override or reverse its output ([EU AI Act, Article 14](https://artificialintelligenceact.eu/article/14/)). South African businesses are not bound by it unless they sell into the EU, but the logic transfers directly: oversight has to be designed, not assumed.

The NIST AI Risk Management Framework playbook connects oversight to tolerance. Its Manage function says that AI systems with lower risk tolerances should receive greater oversight, mitigation and management resources, and that systems exceeding risk tolerances should be decommissioned ([NIST AI RMF Playbook: Manage](https://airc.nist.gov/airmf-resources/playbook/manage/)). In other words, the amount of review should follow from an explicit decision about how much error the business can tolerate for each use, not from habit.

The mechanism is straightforward. AI output is fluent whether it is right or wrong, so the usual cue that something needs checking, rough or uncertain writing, disappears. As volume grows, reviewers drift from reading to skimming to approving. Without a written threshold there is nothing to drift away from, so nobody notices it happening.

## Problem owner and why now

The problem owner is the manager of the process where the AI output is used: the finance manager for invoice coding, the service lead for customer replies, the sales director for proposals. IT or a data lead may own the tool, but they cannot decide what level of error is acceptable in someone else's process. Budget usually sits with the COO or CFO, because review time is a labour cost and errors are a financial one.

The trigger is rapid tool adoption. AI features are switched on inside email, CRM, accounting and document platforms faster than anyone writes rules for them. Common moments that expose the gap include a first customer complaint about an AI-written response, an auditor asking how AI-assisted journal entries were checked, a plan to let an agent act without approval, or a staff member asking whether they are personally accountable for content they did not write.

## Economic consequence

The cost runs in two directions, which is why a threshold matters rather than a blanket rule.

- **Under-review cost:** errors reach customers, suppliers or the ledger, and are corrected later at a higher cost than catching them at source. Some, such as incorrect pricing or advice, create commitments the business must honour or negotiate its way out of.
- **Over-review cost:** when nobody trusts any output, staff re-do the work the AI was meant to save, and the business pays for the tool and the labour.
- **Accountability cost:** after an incident, time is spent reconstructing who saw what, because review was never recorded.
- **Compliance exposure:** under POPIA, decisions that substantially affect people and rest solely on automated processing carry specific obligations, which are hard to meet if nobody can say whether a person was involved.

Measure these with your own data: rework hours, error-driven credit notes, complaint volumes and the time spent reviewing outputs that turned out to be correct.

## Root cause

The symptom is unchecked output. The causes are usually:

- **Tool-led adoption:** AI arrives as a feature, not as a process change, so no process owner sets acceptance rules.
- **No risk classification of uses:** drafting an internal summary and approving a refund are treated the same way.
- **No quality evidence:** nobody samples outputs, so nobody knows the actual error rate and cannot set a sensible threshold.
- **No review record:** the system does not capture who reviewed what, so review cannot be enforced or audited.

## Practical intervention

1. **List the AI uses that touch customers, money, people or records.** Name the process, the output and where it goes next.
2. **Classify each use by consequence.** A simple three-level scale works: low (internal drafts), medium (external but correctable), high (financial, legal or affecting a person's rights).
3. **Set a threshold per class.** For example: low may be used directly with periodic sampling; medium requires review before release or a sampled check of a stated percentage; high requires full review by a named role, or AI is limited to drafting.
4. **Make the threshold enforceable in the workflow.** Route medium and high outputs through an approval step rather than relying on instructions. Record reviewer, time and decision.
5. **Measure and adjust.** Track how often reviewers change outputs. A falling correction rate is evidence for loosening a threshold; a rising one is a warning, which links directly to [continuing AI evaluation after launch](/discovery/ai-evaluations-are-performed-only-before-launch/).
6. **Train reviewers on what to check,** such as figures, names, commitments and sources, so review is more than a glance.

### An illustrative example

*Illustrative:* a Gauteng logistics company with around 60 staff uses AI to draft replies to delivery queries and to suggest general-ledger codes for supplier invoices. It classifies query replies as medium, with a supervisor sampling a fixed share each day, and invoice coding above a set rand value as high, requiring the creditors clerk to confirm every suggestion. Within a few weeks the sampling shows which query types the AI gets wrong, and those are routed back to full review.

## Diagnostic questions

- Can you list every place AI output is used without a person reading it first?
- For each AI use, is there a written rule for how much review it needs?
- Do you know the correction rate for any AI output in your business?
- Could you show an auditor or customer who reviewed a specific AI-assisted decision?
- Would staff know when they are allowed to reject or override an AI suggestion?

## What good looks like

Every AI use that matters has an owner, a consequence class and a review threshold. The workflow enforces the threshold, records the review, and reports correction rates monthly. Thresholds are loosened or tightened on evidence. Staff treat AI output as a draft from a capable but unaccountable colleague, and the business can explain its level of checking to anyone who asks. Where AI can take actions directly, the data it acts on is also controlled; see [why bad data becomes more dangerous when AI can take actions](/insights/why-bad-data-becomes-more-dangerous-when-ai-can-take-actions/).

## Where Mellorca fits

Mellorca helps businesses map where AI output enters their processes, classify uses by consequence, and build review and approval steps into the workflow itself rather than into a policy document. That work sits within [business automation and AI workflows](/services/business-automation-ai-workflows/), with the process mapping drawn from a [digital systems audit](/services/digital-systems-audit/) where the AI footprint is not yet known.

## Method note

This article draws on OWASP, NIST and EU AI Act material as reference points for designing oversight; it does not claim that these frameworks legally apply to every South African business. No error rates or costs are quoted because they vary widely by use and tool; the example is illustrative and does not describe a specific client.
