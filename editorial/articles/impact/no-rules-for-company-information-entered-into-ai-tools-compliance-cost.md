---
hub: impact
record_id: CPS-283
slug: no-rules-for-company-information-entered-into-ai-tools-compliance-cost
title: No Rules for AI Tools: The Cost of Uncontrolled Data Entry
description: Without a written rule on what may be entered into AI tools, each employee decides alone, and the business carries the exposure of the least cautious one.
lead: Without a written rule on what may be entered into AI tools, each employee decides alone, and the business carries the exposure of the least cautious one.
category: AI Governance
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: AI Governance
commercial_domain: Data protection and AI governance
primary_pain: Staff decide individually what information to enter into AI tools
primary_cost_mechanism: Incident investigation, legal advice, client loss and remediation after personal or confidential data is exposed
sources:
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Data, Privacy, and Security for Microsoft Copilot | https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy
related:
  - Fluent, Confident and Wrong: The Cost of Sending AI Output to Customers Unchecked | /impact/ai-drafted-customer-messages-sent-without-review-correction-and-trust-cost/
  - Buying AI Because Competitors Are: The Cost of Spending Without a Business Case | /impact/buying-ai-without-defined-business-problem-cost/
  - AI on Poor-Quality Data: Faster Decisions, Unreliable Results | /impact/ai-on-poor-quality-data-financial-cost/
summary: Without a written rule on what may be entered into AI tools, each employee decides alone, and the business carries the exposure of the least cautious one.
layout: plain
---
## The paste that nobody decided about

A bookkeeper pastes a client's bank statement into a chatbot to get a summary. An HR assistant uploads a disciplinary letter to improve its wording. A sales manager drops a customer's contract into an assistant to extract the renewal dates. None of them thinks they are doing anything unusual, and none of them was told they could not. That is the point: the business has no written line between what is acceptable to enter into an AI tool and what is not.

This article is about that missing line. It is not about whether to use AI, which can be very useful. It is about the rules for what information goes in. A broader look at staff using AI tools without oversight is in [staff using AI with company data nobody governs](/impact/uncontrolled-ai-company-data-financial-risk/); here the focus is the practical content of a data-entry rule and the cost of not having one.

## Why the lack of a rule is expensive

When no rule exists, every employee makes a private judgement, and the judgements differ. A careful person avoids anything sensitive. A busy person pastes whatever helps. A new starter copies what colleagues do. The business gets the exposure of the least cautious person across the whole workforce.

### Personal information leaves your control

South Africa's Protection of Personal Information Act sets conditions for lawful processing, and the Information Regulator, which enforces it, notes that an information officer may develop [a policy on how employees should implement the eight conditions for the lawful processing of personal information](https://inforegulator.org.za/popia/). Entering customer or employee details into an external tool is processing. If you cannot say which tools receive personal information, you cannot show that the conditions, such as purpose specification and security safeguards, are being met.

### Confidential commercial information is shared by habit

Pricing, tender submissions, supplier terms, source code and strategy documents are not personal information, yet they carry value. Contracts often include confidentiality clauses; pasting a client's material into a tool the client has not approved may breach them even if nothing is ever leaked.

### The terms differ from tool to tool

Free consumer tools, paid business plans and tools embedded in office software treat data differently. Microsoft's documentation for its Copilot service, for instance, states that [prompts, responses and data accessed through Microsoft Graph are not used to train foundation models](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy) and that the service works with content the user already has permission to access. That is a statement about one product under one set of terms. It tells you nothing about a free chatbot a staff member opened in a browser. A rule that does not distinguish between tools cannot protect you.

### Wrong answers become business decisions

Uncontrolled use also affects quality. Outputs enter proposals, advice and customer messages without checking, a risk set out in [employees trusting AI answers without checking critical facts](/impact/employees-trust-ai-answers-without-checking-critical-facts-confident-mistakes-cost/).

## What the financial exposure looks like

- **Incident response.** If personal information is exposed, the business must establish what was shared, with whom and when. Without records, that investigation is slow and expensive.
- **Notification and remediation.** Affected people and the regulator may need to be told, and customers may demand explanations or credits.
- **Contract and client loss.** A client who finds that its data was pasted into an unapproved tool may end the relationship, regardless of whether harm followed.
- **Retroactive clean-up.** Finding out afterwards who used what is far more costly than a short rule written beforehand.
- **Duplicate spending.** Teams that sign up for their own paid AI tools produce overlapping subscriptions, as in [AI subscription sprawl with unmeasured value](/impact/ai-subscription-sprawl-unmeasured-value-cost/).

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Johannesburg accounting practice with 35 staff. They are not benchmarks, and they do not predict that an incident will occur.

| Assumption | Value |
| --- | --- |
| Staff using AI tools at least weekly | 20 |
| Tools in use, approved or not | 6, of which 2 have been reviewed |
| Staff time to reconstruct who entered what after a suspected exposure | 60 hours at R450 |
| External legal and forensic advice for a single incident | R85,000 |
| Client communication and management time | 25 hours at R600 |
| Annual fees from one client who leaves | R120,000 |

If one incident occurred in a year, the reconstruction would cost R27,000, the advice R85,000 and the communication R15,000, a total of R127,000 before the lost client's R120,000 of annual fees. Against that, writing a policy, training staff and approving two or three tools might take a few days of management time and a modest licence fee. The model is a way of comparing a known small cost with a possible large one; it is not a forecast.

## What a usable rule contains

A rule that people follow is short and specific. It sorts information into a few classes and says what may go into which tools.

1. **Never enter:** identity numbers, bank details, health information, passwords, unredacted client contracts and anything covered by a confidentiality agreement.
2. **Enter only into approved business tools:** customer names and contact details, internal financial data, staff information and draft proposals.
3. **Free to enter anywhere:** public information, generic questions and material you would be happy to publish.

The rule also needs a list of approved tools with their account type, a named owner who can approve more, and a simple route for staff to ask "may I use this?" without waiting weeks. NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is a useful reference for the broader structure of governing and mapping AI use, though a small business can start with a single page.

## Common objections

**"A ban is simpler."** It is, but people tend to keep using tools they find useful and stop telling you. A clear permission with limits gives you visibility.

**"We are too small for a policy."** Size reduces the number of people involved, not the effect of a single paste of the wrong document.

**"Our AI tool is secure."** Possibly, for the data and plan that you checked. The rule should say which plan, because the same vendor may offer different terms for free and paid use.

## Practical next actions

1. Ask staff, without blame, which AI tools they use and what they enter into them; treat the answers as information, not misconduct.
2. Draft a one-page rule sorting information into never, approved-tools-only and anywhere, with three examples in each class.
3. Choose and approve one or two business-grade tools, and read the data terms for the exact plan you will buy.
4. Name an owner for AI tool approvals and publish how to request a new tool.
5. Confirm with your information officer that the rule fits your POPIA obligations and that client contracts allow the approved uses.
6. Review the rule every six months, because tools and their terms change.
