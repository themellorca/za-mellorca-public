---
hub: insights
record_id: INS-184
slug: designing-human-approval-checkpoints-for-ai-workflows
title: How to Design Human Approval Into AI Workflows
description: Putting a person in the loop is not the same as putting a person in control. How to decide which AI actions need approval, what the approver must see, and how to stop the checkpoint turning into a rubber stamp.
lead: Putting a person in the loop is not the same as putting a person in control. How to decide which AI actions need approval, what the approver must see, and how to stop the checkpoint turning into a rubber stamp.
category: AI Governance
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: AI Governance
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Section 71 Automated decision making - POPIA | https://popia.co.za/section-71-automated-decision-making/
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
  - Why AI Agents and Automated Workflows Need Observability | /insights/why-ai-agents-and-automated-workflows-need-observability/
  - Why business systems need ongoing stewardship | /insights/why-business-systems-need-ongoing-stewardship/
summary: Putting a person in the loop is not the same as putting a person in control. How to decide which AI actions need approval, what the approver must see, and how to stop the checkpoint turning into a rubber stamp.
layout: plain
---
When a business first puts an AI tool into a workflow, the reassurance is almost always the same: a person will check it. That sentence feels like a control. In practice it often describes nothing more than a name on a list. The person may not know what they are checking, may not see the information the AI used, and may have thirty seconds per item at the end of a long day. Human approval only protects the business if it is designed as carefully as the automation it sits behind.

This article sets out how to decide where approval belongs, what the approver needs in front of them, and how to keep the checkpoint honest as volumes grow.

> A checkpoint is real when the approver can see the evidence, can say no, and the workflow behaves differently when they do. Anything less is decoration.
>

## Start with the consequence of a wrong output, not the cleverness of the tool

Not every AI action needs a person. A tool that drafts an internal meeting summary and a tool that proposes a supplier payment are in different risk classes, even if they use the same model. The useful question is what happens if the output is wrong and nobody notices for a week.

A simple three-band sorting works well for most smaller businesses:

- **Reversible and internal.** Drafts, summaries, suggested categories. A mistake costs a few minutes. Spot checks are usually enough.
- **Reversible but customer-facing.** Replies, quotes, statements. A mistake is embarrassing and may cost goodwill. A person should approve before sending, at least until the error pattern is understood.
- **Hard to reverse, financial or legal.** Payments, price changes, contract wording, anything touching a person's rights. Approval is mandatory, and the approver needs authority to match the Rand value or legal effect.

Our guide to [where AI agents add value and where they add unnecessary risk](/insights/where-ai-agents-add-value-and-where-they-add-unnecessary-risk/) explores the boundary in more depth, and [how to choose a business process for an AI agent](/insights/how-to-choose-a-business-process-for-an-ai-agent/) explains why the lowest-risk processes are the right place to begin.

## Know when the law requires a person

In South Africa, section 71 of the Protection of Personal Information Act restricts decisions that have legal consequences for a person, or affect them substantially, when they are based solely on automated processing of personal information. There are exceptions, and the section also speaks of giving the affected person an opportunity to make representations. A business using AI to score applicants, flag staff, approve credit or decline claims should read the section with its legal adviser and treat a genuine human decision as the safe design default. The point is not that every AI step is prohibited. The point is that a decision about a person should not be left to a tool that nobody can question.

## Decide what the approver actually sees

The most common design failure is an approval screen that shows only the AI's conclusion. An approver who sees "Approve payment to Supplier X, R48,200" has no way to judge it. A usable checkpoint shows:

1. The proposed action in plain words, with the amount, recipient or wording involved.
2. The source material the AI relied on, such as the invoice, the contract clause or the customer message, opened beside the proposal.
3. Anything the AI was unsure of, or any rule that was bypassed to reach the result.
4. What happens next if they approve, and what happens if they reject.

Approval tooling in common platforms already supports much of this. Microsoft's documentation for approvals in Power Automate describes sending a request to one or more people, collecting a response, and branching the flow on the outcome. The mechanism is easy. The design work is deciding what goes into the request and who receives it.

## Give the approver a real alternative to yes

If the only options are approve or reject, people approve, because rejecting stops the work and creates a problem. Add two further outcomes: send back with a reason, and edit then approve. The reasons selected become valuable data. If a third of returned items are rejected for the same reason, the fault is in the prompt, the data or the rule, not in the approvers.

Also decide what the workflow does when nobody responds. A request that sits for three days must either escalate to a named deputy or stop visibly. It should never proceed by default. The wider problem of slow sign-off is described in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/), and the cure is almost never to remove the approval. It is to route simpler cases through lighter rules.

## Guard against the rubber stamp

Automation bias is well documented: people tend to trust a confident system, especially when it is right most of the time. Three habits keep approvers alert:

- **Seed known errors.** Occasionally route a deliberately flawed item, such as an invoice with a wrong bank account, through the queue in a test environment and see whether it is caught.
- **Measure the override rate.** If approvers change or reject nothing over a month, either the AI is excellent or nobody is looking. Find out which.
- **Rotate and limit.** Reviewing hundreds of items in one sitting degrades attention. Cap the batch size and spread the load.

The NIST AI Risk Management Framework treats human oversight as a matter of defined roles, skills and responsibilities, not just presence. That is the right way to think about it: the approver needs training, time and the standing to disagree. The same logic underlies [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/).

## Set thresholds, and review them

Approval does not need to be uniform. A common pattern is to let low-value, low-risk, high-confidence items proceed automatically with sampling, and require review for anything above a Rand limit, below a confidence level, or outside normal patterns. This keeps people focused on the items that matter. The risk is a threshold that is chosen once and never revisited, which is a theme we return to in [AI outputs accepted without defined review thresholds](/discovery/ai-outputs-accepted-without-defined-review-thresholds/). Review the limits every quarter against actual error and override data.

## An illustrative example

The following is a hypothetical case. A Pretoria wholesaler uses an AI tool to read supplier invoices and propose the general ledger coding and payment run. At first, a bookkeeper approves a daily list of 80 lines showing only the supplier name and amount. After a month, she has rejected two lines.

The owner redesigns the checkpoint. Invoices under R5,000 from suppliers with a clean history are coded automatically and sampled weekly. Everything else appears with the scanned invoice beside the proposed coding, a flag where the bank account differs from the one on file, and three buttons: approve, return with reason, and edit. The daily queue drops to about 20 items, the bookkeeper starts catching changed bank details, and returned items reveal that one supplier's invoices are always read incorrectly. That is a fix to the data, not a training problem.

## A short design checklist

- Has each AI action been placed in a risk band, with the approval rule written down?
- Does the approver see the source evidence, not just the conclusion?
- Can they reject, return or edit, and is the reason captured?
- Is there a named deputy and an escalation path when approval is delayed?
- Is the override rate reported and reviewed?
- Where personal information is involved, has the legal position under POPIA been considered?

Human approval is the most trusted safeguard in AI adoption, which is exactly why it deserves the most scrutiny. Designed well, it lets a business move faster because the risky decisions are visibly under control. Designed badly, it only gives everyone permission to stop paying attention.
