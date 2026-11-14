---
hub: discovery
record_id: DISC-176
slug: customers-repeat-the-same-problem-after-every-handoff
title: Customers have to repeat their problem after every handoff
description: Each transfer between chat, phone, email and specialist teams wipes the context, so customers explain the same fault again and again. Fix the handoff record, not the script.
lead: Each transfer between chat, phone, email and specialist teams wipes the context, so customers explain the same fault again and again. Fix the handoff record, not the script.
category: Customer Service & Support Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Customer Service & Support Operations
problem_domain: Customer Service & Support Operations
problem_owner: Head of customer service or support operations
budget_owner: COO or customer experience director
sources:
  - Hand off to a live agent - Microsoft Copilot Studio | https://learn.microsoft.com/microsoft-copilot-studio/advanced-hand-off
  - Enable Copilot case and conversation summaries | https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/copilot-enable-summary
related:
  - Customer security questionnaires consume specialist time | /discovery/why-customer-security-questionnaires-keep-pulling-specialists-off-their-work/
  - Why sales teams cannot check live stock while the customer waits | /discovery/why-sales-teams-cannot-check-live-stock-while-the-customer-waits/
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
summary: Each transfer between chat, phone, email and specialist teams wipes the context, so customers explain the same fault again and again. Fix the handoff record, not the script.
layout: plain
---
A customer of a Johannesburg internet provider starts with the chatbot on the website, which asks for an account number and a description of the fault. The bot cannot fix it and hands over to a live agent, who asks for the account number and a description of the fault. The agent logs a ticket and escalates to the technical team, who phone the customer the next day and ask what the problem is. By the time a technician is booked, the customer has explained the same fault four times and is now explaining it angrily.

Nobody in that chain did anything wrong by their own rules. Each team asked what it needed. But the business as a whole forgot what the customer had already said, and made the customer carry the context from one team to the next.

## The problem in plain language

A handoff happens whenever a customer's issue moves from one person, team or channel to another: from a bot to a person, from a first-line agent to a specialist, from phone to email, from service to billing or field operations. At each handoff, some information moves with the case and some does not.

When the history, the checks already done and the customer's own description do not move with the case, the receiving person has two choices. They can read through whatever notes exist and hope they are complete, or they can ask the customer again. Under time pressure, they ask again.

## What the buyer is actually trying to solve

Service leaders describe this in plain terms. Why do customers complain that they have to repeat themselves? Why does every escalation start from scratch? Why do resolution times grow even when we add people? They want a service where the customer explains the problem once, the business keeps that explanation, and every person who touches the case starts from what is already known.

## Evidence and system mechanism

### Handoff tools can pass context, if it is captured

Microsoft's documentation on how a Copilot Studio agent can [hand off to a live agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-hand-off) shows what a well-designed handoff can carry. When the bot hands over, it can share the full conversation history and the relevant variables, and a live agent in the connected engagement hub can review that history and continue. The documented context variables include the last topic the customer raised, the phrases they used, the topics triggered during the conversation, an optional private message to the agent and any variables defined in the bot's topics, such as a store location. The same page notes that, without an engagement hub, the escalate topic by default simply gives the customer a message, which may be no more than a link to a support site. In that case the context stays behind.

### Summaries can be generated at the moment of transfer

Microsoft's guidance on [case and conversation summaries](https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/copilot-enable-summary) describes options to generate a conversation summary when a representative joins a conversation, when the primary representative transfers it, when it ends, or on demand. Case summaries draw on case fields such as the title, customer, subject, product, priority and description, along with linked email activities and notes. The documentation also notes a limit: conversations held with AI agents are not automatically included in the conversation summary.

These documents describe one vendor's products, and other service platforms offer similar features. The general mechanism is the same everywhere: context survives a handoff only if it is captured in a structured place that the receiving person's tool reads. Free-text notes in one system, a phone call logged in another and an email thread in a personal mailbox do not add up to a handoff record.

## Why this becomes urgent

Support volume growth is the usual trigger. While volumes are small, the same few agents handle most cases and remember customers. As volume grows, the business adds channels, adds a bot, splits teams into first line and specialists and hands work to field teams or suppliers. Each new split adds a handoff, and each handoff that loses context adds another repeat explanation.

The cost becomes visible when complaints mention repetition, when repeat contacts rise or when a large customer escalates to a director about being passed around.

## Economic consequence

- **Longer handling time.** Every repeated explanation adds minutes to a call or chat, multiplied across thousands of contacts.
- **Repeat contacts.** Customers who lose patience call again, email and post on social media, creating several contacts for one problem.
- **Wrong fixes.** A specialist who did not see the earlier checks may repeat them or skip a clue the customer gave the first agent.
- **Churn risk.** Customers judge service by effort as much as outcome, and repeating a problem is a visible form of effort.

As an illustration only, if two minutes are lost at each of three handoffs on ten thousand escalated cases a year, the business spends about a thousand agent hours a year re-collecting information it already had.

## Root cause

The root cause is that the case is not the unit of work. Each channel and team keeps its own record: the chat platform keeps the chat, the telephony system keeps the call, the ticketing system keeps the ticket, and the field service tool keeps the job. Nothing joins them into one case that travels with the customer.

A second cause is that nobody has defined what a handoff must contain. Agents are told to escalate but not what to pass on, so notes vary from a full summary to a single line. The same gap appears between other teams, as covered in [sales cannot see a customer's credit or service problems](/discovery/sales-cannot-see-a-customer-s-credit-or-service-problems/), and between automated steps, as in [why AI agent handoffs need enough business context](/discovery/why-ai-agent-handoffs-need-enough-business-context/).

## Practical next actions

1. **Map the handoffs.** For your five most common case types, list every point where the case moves between a bot, a person, a team, a channel or a supplier.
2. **Define a minimum handoff record.** Agree the fields every handoff must carry: the customer's own description, what has been checked, what has been promised, the next step and the customer's preferred contact method.
3. **Keep one case across channels.** Make sure a chat, call and email about the same problem attach to one case number, and that escalations update that case rather than open a new one.
4. **Configure your tools to pass context.** Turn on conversation history and variable passing at bot handoff, and summaries at transfer if your platform supports them. Check what is excluded, such as bot conversations.
5. **Give receiving teams the same view.** Specialists, billing and field teams should open the case and see the full history, not a forwarded email.
6. **Coach the opening line.** Train receiving staff to start with what they already know and ask the customer to confirm it, rather than asking them to start again.
7. **Measure repeat explanations.** Sample cases monthly and count how often a customer was asked for information already in the record, and track repeat contacts per case.

## Diagnostic questions

- How many systems would you need to open to see everything a customer has told you about one problem?
- Is there a written standard for what an escalation must contain?
- When the bot hands over, does the agent see the conversation, or only an alert?
- Do field teams and suppliers work from the same case number as the contact centre?
- Do you measure how often customers repeat themselves, or only how long calls take?

## What good looks like

Each customer problem has one case, whatever channel it arrives through. Every handoff carries a standard record, and the receiving person opens a summary that tells them what the customer said, what was tried and what was promised. Customers are asked to confirm, not repeat. Repeat contacts per case fall, and complaints about being passed around become rare. Leaders can trace a case end to end, much as described in [teams cannot trace a business transaction across systems](/discovery/teams-cannot-trace-a-business-transaction-across-systems/).

## Where Mellorca fits

If your chat, telephony, ticketing and field tools each hold part of the story, [systems implementation and integration](/services/systems-implementation-integration/) can connect them so that one case travels with the customer. To define the handoff record, the escalation rules and the measures with your service leaders, [digital operations improvement](/services/digital-operations-improvement/) can design the process and help teams adopt it.

## Method note

This article uses Microsoft documentation for Copilot Studio and Dynamics 365 Contact Center to show how context can be passed at handoff and summarised at transfer. Other platforms have similar features with different limits, so check your own vendor's documentation. The scenario and time figures are illustrative, not measured. Where handoffs involve personal information, make sure sharing between teams and suppliers is consistent with your obligations under the Protection of Personal Information Act.
