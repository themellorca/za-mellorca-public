---
hub: impact
record_id: CPS-286
slug: ai-agents-acting-without-permission-controls-excessive-machine-access-cost
title: AI Agents With Too Much Access: The Cost of Machines Acting Without Limits
description: An AI agent that can send, change, approve or delete on your behalf needs tighter limits than a person. Broad access turns one bad instruction into a financial and security loss.
lead: An AI agent that can send, change, approve or delete on your behalf needs tighter limits than a person. Broad access turns one bad instruction into a financial and security loss.
category: AI Governance
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: AI Governance
commercial_domain: AI Governance
primary_pain: AI agents connected to business systems can send, change, approve or delete without permission limits matched to their task
primary_cost_mechanism: Risk exposure from misdirected payments and data leakage, POPIA compliance exposure, rework to find and reverse unauthorised changes, and opportunity cost when incidents stall useful automation
sources:
  - https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  - https://csrc.nist.gov/glossary/term/least_privilege | https://csrc.nist.gov/glossary/term/least_privilege
  - https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/ | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
summary: An AI agent that can send, change, approve or delete on your behalf needs tighter limits than a person. Broad access turns one bad instruction into a financial and security loss.
layout: plain
---
## The assistant that could do far more than anyone intended

A distribution company in Germiston connects an AI assistant to its shared mailbox, its accounting package and its customer database. The goal is modest: draft replies to routine supplier and customer queries, and prepare credit notes for a finance clerk to approve. To get it working quickly, the integration is set up with an administrator account, because that account can see everything and no one wants to spend a week on permissions. Three months later, a supplier email containing hidden instructions persuades the assistant to update a supplier's bank details and forward a batch of customer statements to an outside address. Nobody approved either action. The assistant was simply able to do them.

The example is illustrative, but the pattern is real and well described. When software that interprets language is allowed to take actions, the limits on those actions become the main control. If the limits are loose, the business has handed decision rights to a system that can be confused, manipulated or simply wrong.

## Why AI agents need tighter limits than people

An employee with broad access still applies judgement, notices when something feels odd, and is accountable for what they do. An AI agent does not reliably do any of those things. It acts on what it reads, and what it reads may include text written by an attacker or by a confused customer. It works quickly and at volume, so a mistake can repeat hundreds of times before anyone looks.

The OWASP project, which publishes widely used security guidance for software builders, names this risk directly. Its entry on [excessive agency in large language model applications](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) describes damaging actions taken in response to unexpected, ambiguous or manipulated model output, and traces the cause to three conditions: excessive functionality, excessive permissions and excessive autonomy. In plain terms, the agent has more tools than it needs, those tools can reach more than they should, and nothing checks the action before it happens.

## How excessive access turns into cost

### Direct financial loss

The most serious losses come from actions that move money or change the details money depends on: supplier bank accounts, refund approvals, credit limits, discounts and payment runs. An agent that can change these fields can be used, deliberately or accidentally, to redirect payments. Recovering misdirected funds is slow and often incomplete.

### Data exposure and regulatory risk

An agent that can read every customer record and send email can leak personal information in a single step. South Africa's Protection of Personal Information Act requires a responsible party to secure personal information through appropriate technical and organisational measures. [Section 19](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) requires businesses to identify foreseeable internal and external risks, put safeguards in place, check that they work and update them as new risks appear. An AI agent with unrestricted access is a new and foreseeable risk, and a business that cannot show how it limited that risk will struggle to explain an incident to customers or the Information Regulator.

### Rework and clean-up

When an agent makes changes it should not have made, someone has to find every affected record, reverse the changes and confirm the data is correct again. Without a clear log of what the agent did, this becomes a manual investigation across several systems, consuming finance, IT and management time.

### Lost confidence and stalled adoption

One visible incident often leads to every AI initiative being paused. The business loses the time savings it was getting, and future proposals face more resistance. The cost of poor controls therefore includes the value of useful automation that never gets approved.

## Why it happens

Excessive access is rarely a deliberate choice. It usually comes from a few practical shortcuts:

- **Using an administrator or personal account for the connection**, because it already has access to everything and saves setup time.
- **Granting whole-system access** when the agent only needs one mailbox folder, one table or one report.
- **Combining read and write rights**, when most tasks only need the agent to read and suggest.
- **Treating a pilot as temporary**, so permissions set for a quick test stay in place once the pilot becomes part of daily work.
- **Letting the agent decide whether an action is allowed**, instead of enforcing the rule in the underlying system.

The underlying principle is not new. NIST defines [least privilege](https://csrc.nist.gov/glossary/term/least_privilege) as restricting users and the processes acting on their behalf to the minimum necessary to accomplish assigned tasks. An AI agent is a process acting on someone's behalf, and the principle applies to it at least as strongly as it applies to staff. The existing piece on [employees having more system access than their jobs require](/impact/employees-more-system-access-than-job-requires-excess-permissions-cost/) covers the human side of the same problem.

## A simple way to size the exposure

The following is a hypothetical exercise rather than a benchmark. List every AI agent or automated assistant connected to a business system. For each, write down the most damaging action it could take with its current permissions, and the largest amount of money or number of records that action could affect. If an assistant connected to accounting could change supplier bank details, the exposure is roughly the value of the next supplier payment run. If an assistant connected to the customer database can send email, the exposure includes every customer record it can read.

Most businesses that do this find at least one agent whose worst-case action is far larger than its intended job. That gap, not the likelihood of an attack, is what should drive the priority of the fix.

## What good control looks like

A well-controlled agent has a dedicated identity rather than a borrowed one, so its actions are traceable and its access can be removed without affecting a person. It can reach only the data and functions its task needs. It reads and drafts by default, and actions that move money, change bank details, delete records or contact customers in bulk go to a person for approval. Every action is logged in a form someone can review. The OWASP guidance recommends the same combination: limit functions, restrict permissions downstream, require human approval for high-impact actions and log and monitor activity.

The guides on [how to define boundaries for AI agents](/insights/how-to-define-boundaries-for-ai-agents/), [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/) and [keeping a reliable record of what your AI agents did](/insights/how-to-keep-a-reliable-record-of-what-your-ai-agents-did/) go into each of these controls in more depth.

## Practical next actions

1. **List every connected agent.** Include chat assistants linked to mailboxes, automation tools with AI steps, and add-ons inside accounting, CRM and helpdesk systems.
2. **Record the account each one uses.** Replace administrator and personal accounts with dedicated service identities that can be monitored and switched off separately.
3. **Write down the worst action each agent could take.** Rank agents by the value of money or records that action could affect, and fix the largest exposures first.
4. **Remove write access that is not essential.** Let agents draft, suggest and prepare, and keep final changes with a person until the process has a proven record.
5. **Add approval steps for high-impact actions.** Payments, bank detail changes, refunds, deletions and bulk messages should always need a human decision.
6. **Turn on logging and review it.** Make sure each agent's actions are recorded, and schedule a monthly check of what the agents actually did against what they were meant to do.

AI agents can remove a great deal of routine work. The condition is that their reach matches their job. A business that sets those limits deliberately keeps the savings without carrying an open-ended financial and security exposure.
