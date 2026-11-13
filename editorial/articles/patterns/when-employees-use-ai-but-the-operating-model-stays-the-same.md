---
hub: patterns
record_id: PAT-377
slug: when-employees-use-ai-but-the-operating-model-stays-the-same
title: When employees use AI but the operating model stays the same
description: Staff already use AI tools on their own, but processes and roles are unchanged. That leaves the benefits with individuals and the risks with the business.
lead: Staff are already using AI tools on their own, yet processes, checks and roles are unchanged. Here is why that leaves the benefits with individuals and the risks with the business.
category: AI Adoption, Governance & Operating Model
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: AI Adoption, Governance & Operating Model
pattern_family: AI Adoption, Governance & Operating Model
observable_condition: Staff use AI assistants on their own for drafting, summarising and analysis, while approvals, checking routines, roles, targets and pricing are unchanged and nobody has a list of what is in use.
primary_identification: Bottom-up AI use without operating-model change: benefits stay with individuals and risk stays with the business because use, data rules, review and workflow have not been decided.
commercial_value_dimensions: Productivity capture, data protection, quality consistency, competitiveness and risk exposure
sources:
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Who makes an application to process Special Personal Information? | https://inforegulator.org.za/popia/
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - When your staff become the integration between software platforms | /patterns/when-your-staff-become-the-integration-between-software-platforms/
  - Why staff keep checking the same things over and over | /patterns/why-staff-keep-checking-the-same-things-over-and-over/
  - When nobody owns the definition of a business metric | /patterns/when-nobody-owns-the-definition-of-a-business-metric/
summary: Staff are already using AI tools on their own, yet processes, checks and roles are unchanged. Here is why that leaves the benefits with individuals and the risks with the business.
layout: plain
---
## Observable condition

Staff are already using AI. A salesperson drafts proposals with a chatbot on their personal account. An accounts clerk pastes supplier emails into a summarising tool. A marketing coordinator generates product descriptions and images. A manager asks an assistant to tidy the minutes of the weekly meeting. Nobody was asked to do this and nobody refused. It simply began, because the tools are free or cheap, they work, and they save an hour here and there.

Meanwhile, the business itself has not changed. Approvals still go through the same chain. Quotes are still built the same way, checked by the same person and sent through the same inbox. Job descriptions, targets and review routines are unchanged. The AI sits on top of the old way of working, like a faster pen used to fill in the same form.

An illustrative example: a Johannesburg accounting and advisory firm with about fifty staff finds out in a staff meeting that more than half the team already use an AI assistant for drafting client letters and summarising tax correspondence. Each person has their own method. Partners still review everything line by line, the way they did before. Some of the time saved is spent on review of AI errors, some goes unnoticed, and the firm's fees, timelines and quality checks have not moved at all.

## Realisation

When individuals use AI inside an unchanged operating model, the gains stay with individuals and the risks stay with the business. A person who saves an hour may bank it as a longer lunch, more email or a lighter day. The business sees no change in output, cost or quality. At the same time it carries the exposure: client information pasted into tools nobody has approved, inconsistent quality, and decisions made on outputs nobody checked.

The NIST [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is built around the idea that AI risk is an organisational matter, not a technology matter. It describes governance as a cross-cutting function: policies, accountability, roles and processes that sit around the technology. It asks organisations to map where AI is used, measure its effects and manage the risks, none of which can happen if use is invisible. In South Africa, there is a legal dimension too: the Information Regulator's POPIA guidance expects [personal information](https://www.gov.za/documents/protection-personal-information-act) to be protected wherever it goes, including into a third-party tool.

**Realisation prompt:** could you list, today, which AI tools your staff use, for which tasks, and what company or client information goes into them?

## Identification

This is a pattern of bottom-up AI use without operating-model change. The visible symptom is widespread personal use alongside unchanged workflows. The common assumption is that adoption is going well because people are using the tools. The structural cause is that nobody has decided where AI should be used, how its output is checked, who is accountable, and how the time saved becomes a business benefit.

The published Pattern [why buying AI does not automatically create business value](/patterns/why-buying-ai-does-not-automatically-create-business-value/) covers the top-down version of this problem, where tools are bought and little changes. This Pattern covers its mirror image, where staff adopt tools on their own, and [why AI adoption creates a new access control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/) explores the risk to data.

## Diagnosis

- **No inventory of use.** The business does not know which tools, accounts or plans are in use, or for which tasks.
- **No rules on data.** Staff have not been told what may and may not be pasted into an AI tool, so each person decides.
- **Review habits unchanged.** Output is checked the same way for AI-drafted and human-drafted work, or not checked at all, with no guidance on what to look for.
- **Benefits not captured.** Nobody has asked what the saved time should be used for, so it disappears into the day.
- **Roles and measures unchanged.** Job descriptions, targets and pricing still assume the old way of working.
- **Uneven skill.** A few staff are expert and many are guessing, and what the experts learn is not shared.

## Commercial impact

The commercial value at stake is productivity capture, data protection, quality consistency, competitiveness and risk exposure.

The first loss is the benefit itself. If twenty people each save forty minutes a day and nothing else changes, the business has paid for the tools, in subscriptions or in risk, without receiving a measurable return. The second is exposure. Client files, pricing and staff information may be leaving the business through personal accounts, and an error in an AI-drafted letter or quote reaches the customer under the company's name. The Impact page on [uncontrolled AI and company data](/impact/uncontrolled-ai-company-data-financial-risk/) sets out how that risk becomes a financial one.

The third is strategic. A competitor that redesigns its workflow around AI, with defined steps, checks and pricing, will quote faster, deliver cheaper and learn more quickly. A business where AI is just a private productivity habit does not compound its learning.

## Common misidentification

The first instinct is to ban the tools. A ban rarely works. People keep using them on personal devices, only less visibly, and the business loses both the benefit and the oversight.

The second is to treat it as a training issue: run a workshop on prompts. Prompt skill matters, but it does not decide which tasks should use AI, what the checking standard is, or where the data may go. The Insight [why AI readiness is really systems readiness](/insights/why-ai-readiness-is-really-systems-readiness/) explains that the limiting factors are usually data, processes and accountability rather than the tool. Where AI tools can also take actions, the exposure grows, as [when AI agents can act but governance cannot see them](/patterns/when-ai-agents-can-act-but-governance-cannot-see-them/) describes.

## Possibility

In a better state, the business knows how AI is being used and has chosen where to encourage it. A short, plain policy says which tools are approved, what information may be entered and what must never be. Selected workflows are redesigned around AI: for example, a first draft of a client letter is produced by the tool, reviewed against a checklist by the responsible person, and logged. Time saved is measured, and decisions are made about whether to take on more work, shorten turnaround or improve quality. The people who have found good methods teach the others.

The NIST framework's structure of govern, map, measure and manage is a useful template even for a small firm, scaled to fit. The firm does not need a committee. It needs a named owner, a list of uses and a regular conversation about what is working.

For the accounting firm, that could mean an approved assistant under a business agreement, a rule that client identifiers are removed before pasting, a review checklist for AI-drafted letters, and a target for turnaround on routine correspondence.

## Intervention

1. **Ask, without blame.** Survey staff on which AI tools they use, for what and with what information. Make it safe to answer honestly.
2. **Sort the uses.** Group them into low-risk, useful and worth supporting; sensitive and needing controls; and not acceptable.
3. **Write a one-page policy.** Name approved tools, say what data may not be entered, require human review for anything sent externally, and name an owner.
4. **Pick two workflows.** Redesign them end to end around AI, including the checking step, the hand-off and the measure of success.
5. **Measure the change.** Track time, errors and turnaround before and after, and decide how to use the time released.
6. **Update roles and pricing.** Where the work has changed, change the expectations, targets and fees to match.
7. **Share what works.** Hold a short monthly session where staff show methods that saved time without lowering quality.

## Diagnostic questions

- Which AI tools are your people using today, and on whose accounts?
- What information are they entering, and has anyone told them what is off limits?
- Has any workflow been changed because AI is available, or only individual tasks?
- How would you know if AI use improved output or only made it faster to produce unchecked work?
- Who is accountable for AI use in the business?

## Bottom line

Employees using AI inside an unchanged operating model is a sign of healthy curiosity and an unmanaged business. The tools are not the problem. The missing pieces are a view of what is happening, rules about data, a redesigned workflow and a decision about how to use the time saved. Supply those, and personal shortcuts become a company capability that improves speed, quality and margin together.
