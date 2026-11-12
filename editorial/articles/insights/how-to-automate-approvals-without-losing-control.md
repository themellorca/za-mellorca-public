---
hub: insights
record_id: INS-161
slug: how-to-automate-approvals-without-losing-control
title: How to Automate Approvals Without Losing Control
description: Automating an approval should make the decision faster and better recorded, not weaker. Here is how to design approval workflows that keep real control.
lead: Automating an approval should make the decision faster and better recorded, not weaker. Here is how to design approval workflows that keep real control.
category: Workflow Automation
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Workflow Automation
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - How to Reduce Manual Status Checking | /insights/how-to-reduce-manual-status-checking-across-your-team/
  - How to Avoid Creating a Fragile Automation Stack | /insights/how-to-avoid-creating-a-fragile-automation-stack/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
summary: Automating an approval should make the decision faster and better recorded, not weaker. Here is how to design approval workflows that keep real control.
layout: plain
---
The owner of a Pretoria engineering firm approves purchase requests from his phone, usually between meetings. Requests arrive by email, WhatsApp and sometimes a hand-written note. Last quarter he approved a supplier payment that had already been approved by his financial manager, and rejected a request that was never answered because it had landed in a spam folder. He wants approvals automated. He is right to want it. He is also right to worry about what he might lose.

Automation can make approvals faster and better recorded. It can also make them weaker if the speed comes from removing the thinking. This article describes how to get the first without the second.

## Know what an approval is for

An approval is a control. It exists so that a person with the right authority and the right information decides whether something happens. Three things have to be true for that to work: the person has the authority, the person has enough information to decide, and there is a record that they decided.

Most failing approvals fail on one of these. The approver lacks the information, so they approve by habit. Authority is unclear, so requests go to whoever answers fastest. No record is kept, so a month later nobody can say who agreed. Automation helps most when it addresses these directly, and helps least when it merely moves the same email into a different tool. For why slow approvals cost so much, see [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).

## Write the rules before building the workflow

Software enforces whatever rules it is given, including bad ones. Before configuring anything, write the approval rules in plain language, one page at most. For each type of request, state:

- who may raise it;
- what information must be attached, such as quote, budget code and reason;
- who approves it, by amount or category;
- how long they have to respond;
- what happens if they do not;
- who may not approve it, such as the requester or a person who reports to the requester.

The last item is segregation of duties, and it is the control most often lost during automation. A manual process often had it by accident, because the requester could not walk into the finance office and approve their own claim. A workflow that routes to "the manager" without checking who the manager is can let people approve their own requests.

## Use limits, not blanket permission

Tiered limits are the simplest way to keep control while speeding up routine items. A common structure is that requests under a small threshold go to a line manager, requests up to a larger one go to a department head, and anything above that goes to the owner or a committee. Some low-risk, low-value categories, such as renewing a standard subscription within budget, might be approved automatically on conditions that are checked by the system, with a sampled review afterwards.

Automatic approval is acceptable only when the conditions can be checked by the workflow itself: the amount is under the limit, the supplier is on the approved list, the budget line has funds. If a judgement is needed, a person should make it. Keep the number of automatically approved categories small at the start and extend it as the evidence shows it is safe.

## Give the approver what they need on one screen

Approvals are often slow because the approver has to hunt for context. Good approval tools let a request carry its details and attachments with it. Microsoft's guide to [approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes how a request can be sent with details, links and a defined response, and how a decision can be recorded and passed to later steps. The same ideas exist in other platforms.

The test is whether a busy approver can decide from what they see without opening anything else. Show the amount, the budget remaining, what it replaces, and anything unusual such as a new supplier. If the quote lives in a different folder, the approver will approve without seeing it. Our article on [why discount approvals live in chat threads instead of the quote](/discovery/why-discount-approvals-live-in-chat-threads-instead-of-the-quote/) shows what happens when the decision and its context are separated.

## Plan for absence, delegation and silence

Approvals stall when the approver is on leave, and the usual workaround, sharing a password or asking a colleague to "just click it", destroys the control. Build delegation into the workflow instead. Allow an approver to nominate a named delegate for a defined period, and record that the delegation was in force.

Decide what silence means. A request that is not answered should escalate to a second person after a set time, not be approved automatically and not sit forever. Reminders help, but escalation is what keeps the process moving. Write the timeouts into the rules and review them after a month.

## Keep a record that survives an audit

Every decision should leave a record: who requested, who decided, when, what they saw, and what they said. The record should be held in the system, not in a mailbox, and should be hard to alter after the fact. When disputes arise, or when an auditor asks how a payment was authorised, this record is the evidence. Microsoft's description of [cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) notes that flows can be run on triggers and keep run histories, which is one source of such a trail, though you should confirm in your own setup what is retained and for how long.

For a wider view of what to record, see [how to keep a reliable record of what your AI agents did](/insights/how-to-keep-a-reliable-record-of-what-your-ai-agents-did/). The principle is the same whether the actor is a person, a workflow or an AI assistant.

## Design the failure path

Workflows fail. A connector breaks, a user is removed from the system, a form changes. If a failed workflow simply stops, requests vanish. Design what happens: an alert to a shared mailbox, a visible list of requests stuck in progress, and a manual fallback that is documented and tested. Our piece on [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) explains why this matters more for approvals than for most processes, since a lost approval can mean a lost sale or an unpaid supplier.

Where AI is used to prepare or recommend approvals, keep a person as the decider for anything material. NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) emphasises human oversight and accountability for automated systems, and the same logic applies here.

## Practical next actions

1. List your five most common approval types and write the rule for each on one page: who raises, who approves, by what limit, within what time, and who may not approve.
2. Check how each is handled today and note where the requester can currently approve their own request, or where the record lives only in someone's mailbox.
3. Choose one low-risk, high-volume approval, such as standard purchases under a small threshold, and build it first with named delegates and an escalation after a set number of days.
4. Test the failure path on purpose: disable the approver, break a field and see what the requester and the owner see.
5. Review a sample of approved requests every month for the first quarter, and extend automatic approval only where the sample shows no problems.

Control does not come from slowness. It comes from clear rules, the right information, and a record. Automate those, and the approvals can move as quickly as the business needs.
