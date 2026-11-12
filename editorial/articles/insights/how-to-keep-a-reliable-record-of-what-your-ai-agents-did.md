---
hub: insights
record_id: INS-208
slug: how-to-keep-a-reliable-record-of-what-your-ai-agents-did
title: How to Track AI Agent Actions
description: What to record for every action an AI agent takes, where to keep the record, and how to review it in thirty minutes a week without creating a data protection problem of its own.
lead: What to record for every action an AI agent takes, where to keep the record, and how to review it in thirty minutes a week without creating a data protection problem of its own.
category: AI Governance
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: AI Governance
sources:
  - Traces | https://opentelemetry.io/docs/concepts/signals/traces/
  - Architecture strategies for monitoring workload reliability - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/monitoring-alerting-strategy
  - Employ robust error handling - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - What Should an AI Agent Be Allowed to Do? | /insights/what-an-ai-agent-should-be-allowed-to-do-in-your-business/
  - How to Design Human Approval Into AI Workflows | /insights/designing-human-approval-checkpoints-for-ai-workflows/
  - How to Define Boundaries for AI Agents | /insights/how-to-define-boundaries-for-ai-agents/
summary: What to record for every action an AI agent takes, where to keep the record, and how to review it in thirty minutes a week without creating a data protection problem of its own.
layout: plain
---
When a staff member makes a mistake, there is usually a trail: an email, a signed form, a system entry with their name on it. When an AI agent makes one, the trail is often a vague chat transcript, or nothing at all. The agent updated a record, sent a message, moved a ticket, and the only evidence is the changed result. For a business, that is not a technical inconvenience. It is the difference between being able to explain what happened to a customer, an auditor or SARS, and being forced to guess.

This article describes what to record about an agent's actions, where to keep it, and how to review it without turning the exercise into a second full-time job.

## Why a chat history is not a record

Many agent tools show a conversation window and treat it as the log. That is a start, but it has real limits. It shows what the agent said, not necessarily what it did. It may be tied to one user's session, disappear after a retention period, or be impossible to search by customer or by invoice number. Most importantly, it usually sits outside the systems of record. The result is the situation described in [agent conversations not connected to durable business records](/discovery/agent-conversations-not-connected-to-durable-business-records/): someone asks what the agent did for a customer last Tuesday, and the answer lives in a place nobody can reach.

A usable record answers five questions for every action: who or what acted, on whose behalf, on what, when, and with what outcome. Put differently, you want a trail, not a transcript.

## What to record for each action

- **The agent's identity.** A named account for each agent, not a shared or personal login, so entries can be filtered and the agent can be switched off without affecting a person.
- **The trigger.** What started the run: an email, a scheduled time, a form submission, a person's request. Without this, you cannot tell whether a strange action was provoked or spontaneous.
- **The inputs it used.** The record or document it read, by reference, such as an order number, rather than a copy of the data. This also keeps personal information out of the log itself.
- **The action taken.** The exact change: which field, which old value, which new value; which message, to whom, with what subject.
- **The result.** Success, failure, or partial completion, and any error returned by the receiving system.
- **The approval, where there was one.** Who approved, and when. If an action was within the agent's own limit, record that the limit was applied.
- **The version of the instructions.** The prompt, rules or workflow version in force. When behaviour changes after an edit, you need to know which edit.

The OpenTelemetry documentation describes this same shape in engineering terms. A trace represents the path of a request through a system, built from spans, each recording an operation with a start time, duration and attributes. You do not need to adopt that tooling to borrow the thinking. A single agent run is a trace, and each step inside it is a span that should be identifiable and linked to the run it belongs to.

## Keep the log where the business already looks

A perfect log nobody reads is worth little. Decide where the record lives by asking who will need it.

1. **In the business record.** Where the agent changes a customer, supplier or order, add a note or activity entry on that record saying so. The person who opens the record sees it at once.
2. **In a central action log.** A table or log store holding one row per action, searchable by agent, date, customer reference and outcome. This is what you use for review and investigation.
3. **In an exceptions view.** A short list of failures, retries and overrides, sent to a named person. This one is the routine view, and it connects to the broader questions of [who watches the automations](/insights/who-watches-the-automations/).

Where possible, make the log hard to alter. If the agent can edit or delete its own entries, the log is only as trustworthy as the agent. Write entries to a place where the agent has add-only access, and limit deletion to an administrator.

## Separate the activity trail from the outcome check

A log tells you that a step was attempted. It does not by itself prove the business result. An agent can log "invoice sent" while the email bounced. Microsoft's guidance on monitoring and alerting strategy for reliability stresses that monitoring should reflect the health of the workload as the user experiences it, not only that components are running. For agents, that means pairing the action log with a periodic check of the outcome: did the customer record actually change, did the message arrive, does the total reconcile. The point is developed in [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/).

Failures need the same attention as successes. Microsoft's Power Automate guidance on error handling recommends designing flows to detect and respond to failures explicitly instead of letting them pass silently. An agent that fails quietly and logs nothing is worse than one that fails loudly.

## Retention, privacy and POPIA

A log can become a store of personal information in its own right. Under the Protection of Personal Information Act, the business is responsible for securing personal information and for not keeping it longer than needed. Log references and outcomes rather than full message contents wherever possible. Where full content is necessary for review, restrict who can open it and set a retention period. Decide that period deliberately: long enough to investigate a complaint or support an audit, short enough that the log does not become an unmanaged archive.

The NIST AI Risk Management Framework treats documentation and traceability as part of managing AI risk, because organisations cannot govern what they cannot reconstruct. The lesson for a small business is modest: if you cannot reconstruct a decision after the fact, you cannot defend it. The related problem of decisions that cannot be linked back to the data behind them is covered in [AI-generated decisions that cannot be traced to source data](/discovery/ai-generated-decisions-cannot-be-traced-to-source-data/).

## A weekly review that takes thirty minutes

Logging is only half the job. A light routine is enough for most agents.

- Scan the exceptions list: failures, retries, actions that needed a human override.
- Sample five to ten completed actions at random and check them against the underlying records.
- Look for volume changes. A sudden jump or drop in the number of actions often signals a problem before anyone complains.
- Confirm that approvals are being recorded and that nobody is clicking through them without looking.
- Note anything the agent did that surprised you, and decide whether its limits should change.

What to watch, and at what thresholds, is explored further in [what you should monitor in an automated business process](/insights/what-should-you-monitor-in-an-automated-business-process/).

## An illustrative example

The following is a hypothetical case. A Cape Town property management company uses an agent to log maintenance requests from tenant emails and assign them to contractors. After a tenant complains that a leak was reported twice and two plumbers arrived, nobody can say why. The agent's only record is a chat window that has since been cleared.

The company adds a simple action log. Each run records the agent's account, the email reference, the property and request created, the contractor assigned and the outcome. A note also appears on the property record. Within a month the log shows that duplicate requests arise when the tenant replies to the same email thread, which the agent treats as a new request. The fix is one rule: check for an open request at the same property before creating another. The log cost an afternoon to set up and paid for itself in the first investigation.

## The point

Tracking an agent is not about distrust. It is about being able to stand behind its work. Give each agent its own identity, record a short, consistent entry for every action, store it where people will actually look, check outcomes as well as attempts, and keep the log within your data protection duties. Then an agent's mistake becomes something you can find, explain and fix, instead of a mystery.
