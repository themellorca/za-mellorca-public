---
hub: patterns
record_id: PAT-381
slug: why-ai-results-depend-on-process-design-before-prompt-wording
title: Why AI Needs Better Process Design Before Better Prompts
description: When AI output varies by user, the cause is usually an undefined process rather than weak wording. Here is how to define inputs, rules and checks before refining prompts.
lead: When AI output varies by user, the cause is usually an undefined process rather than weak wording. Here is how to define inputs, rules and checks before refining prompts.
category: AI Adoption & Operating Model
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: AI Adoption & Operating Model
pattern_family: AI Adoption & Operating Model
observable_condition: AI output varies by user, prompts keep growing, and a few people are relied on to phrase requests correctly.
primary_identification: Unspecified work handed to a flexible tool: inputs, rules, success standards, exception routes and instruction ownership were never defined, so prompt wording compensates.
commercial_value_dimensions: Rework time, consistency toward customers, dependence on individuals, adoption momentum and AI risk exposure
sources:
  - Prompt engineering overview | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile | https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
related:
  - When Your Business Wants Agents but Has No Defined Workflow | /patterns/when-your-business-wants-agents-but-has-no-defined-workflow/
  - When Employees Use AI but the Operating Model Stays the Same | /patterns/when-employees-use-ai-but-the-operating-model-stays-the-same/
  - Why Fulfilment Problems Begin Before the Warehouse | /patterns/why-fulfilment-problems-begin-before-the-warehouse/
summary: When AI output varies by user, the cause is usually an undefined process rather than weak wording. Here is how to define inputs, rules and checks before refining prompts.
layout: plain
---
## Observable condition

A business introduces an AI assistant to draft customer replies, summarise supplier emails or prepare quotes. The first week looks promising. By the third week, someone is rewriting the prompt every morning. Another person has a longer version that "works better for complaints". A third keeps a document of phrases to add when the answer comes out wrong. The tool has not changed. The instructions around it keep growing, and the results still depend on who typed them.

An illustrative example: a Bloemfontein agricultural-supplies company asks an AI tool to draft replies to dealer queries about orders. The answers vary because the facts the assistant needs sit in three places: the order system, a pricing spreadsheet and the sales manager's head. Staff compensate by pasting more and more background into each prompt. The prompts become the process, and no one has ever written down what the process is.

## Realisation

The realisation is that prompt wording is being asked to do the work of process design. A prompt can describe what a good answer looks like. It cannot decide where the inputs come from, who approves exceptions, what counts as done, or what happens when the tool is wrong. Those are properties of the process, and if the process leaves them open, every user fills the gap differently.

Anthropic's documentation on [prompt engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) is revealing on this point. It begins by assuming that you already have a clear definition of the success criteria for your use case, some ways to test against those criteria, and a first draft prompt, and it advises establishing those first if you do not. Prompt refinement is the last step of a sequence that starts with knowing what good looks like and how to check it.

**Realisation prompt:** take one task you have given to an AI tool. Could a new employee, without the tool, write down what a correct result is and how it would be checked?

## Identification

This is a pattern of unspecified work being handed to a flexible tool. The visible symptoms are inconsistent output, growing prompt libraries and people who are said to be "good at prompting". The common assumption is that the answer is better prompts or a better model. The structural cause is that the surrounding process, meaning inputs, rules, checks and ownership, was never made explicit, so the quality of every result depends on the individual user.

It is related to the Pattern [the hidden cost of automating a bad process with ai](/patterns/the-hidden-cost-of-automating-a-bad-process-with-ai/), which looks at what happens when a faulty process is sped up. This Pattern concerns the earlier moment, when the process has never been defined well enough to be handed to anything, human or machine.

## Diagnosis

- **Inputs are not fixed.** The assistant is given whatever the user remembers to paste. Different users supply different facts, so identical requests produce different answers.
- **Rules live in people.** Discount limits, refund conditions and escalation thresholds are known informally. The prompt tries to describe them, and each rewrite changes them slightly.
- **Success is not defined.** Without a stated standard, reviewers judge each output on instinct, and the same draft is accepted by one person and rejected by another.
- **Exceptions have no route.** When the tool is unsure or the case is unusual, nobody knows who decides. The employee improvises, and the improvisation is invisible.
- **Nobody owns the instructions.** Prompts are copied between colleagues and edited in personal documents. When results degrade, there is no version to compare with. The Discovery page on [business rules hidden inside AI prompts](/discovery/business-rules-hidden-inside-ai-prompts/) describes this problem in detail.
- **Review is informal.** Checks happen if the user feels cautious. High-risk outputs and trivial ones receive the same, uneven attention.

## Commercial impact

The first cost is rework. If every draft needs close checking and frequent correction, the time saved at generation is spent at review. Because the corrections are made quietly, the business sees the tool's speed but not its real cost.

The second cost is inconsistency towards customers. Two dealers asking the same question receive different terms or different tone depending on who handled it. In a business that depends on trust, that variation is a commercial risk, not a cosmetic one.

The third cost is dependence on individuals. The few people who have worked out which prompts behave become informal gatekeepers. When they are away or leave, performance falls, and the knowledge cannot be recovered because it was never written as process.

The fourth cost is stalled adoption. Leaders who see uneven results conclude that the technology is unreliable and limit its use, when the cause was a process that never gave the tool a fair task. The Pattern [why AI pilots stall before they become everyday operations](/patterns/why-ai-pilots-stall-before-they-become-everyday-operations/) describes that stall from the pilot side.

The fifth cost is risk that nobody has assessed. The NIST [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is intended for voluntary use and aims to improve the ability to incorporate trustworthiness considerations into the design, development, use and evaluation of AI products, services and systems. Its emphasis on design and evaluation is a reminder that responsibility is set by how a tool is used inside a process, not only by the tool itself.

## Why the usual response falls short

The usual response is a prompt workshop or a shared library of approved prompts. These help at the margin, but they treat the symptom. A library of good prompts still depends on users supplying the right facts and applying the right rules by hand, and it does nothing about unclear ownership or missing checks.

The other common response is to wait for a more capable model. A stronger model may produce better prose, but if it is given the same incomplete inputs and unstated rules, it will produce fluent answers that are wrong in the same ways. Fluency can even make errors harder to spot.

## How to approach it

Choose one task and describe it as if it were being handed to a new colleague. Write down where the inputs come from, which rules apply, what a finished result looks like, who approves exceptions, and how errors are caught. This exercise often exposes disagreements the business did not know it had, and settling them is valuable even before any tool is involved.

Then connect the inputs. If the assistant needs the order status, the price list and the customer's history, arrange for those to be supplied from the systems that hold them rather than pasted by the user. Move the business rules out of the prompt and into a short, owned document or a system setting where they can be reviewed and changed deliberately.

Finally, define the checks. Decide which outputs can go out with a quick look, which need a named approver, and which should not be drafted by the tool at all. Measure the result against the success criteria, then adjust the prompt. Prompt work is most effective at the end, once the process around it is stable. For ideas on where to begin, see [how to choose a business process for an AI agent](/insights/how-to-choose-a-business-process-for-an-ai-agent/).

## Practical next actions

1. Pick one task currently given to an AI tool and write a half-page description of its inputs, rules, finished result and exception route, without mentioning the tool.
2. Collect the prompts people actually use for that task, compare them, and list every rule or fact that appears in one prompt but not another.
3. Agree a written success standard with two or three examples of acceptable and unacceptable output, and ask reviewers to apply it to a sample of recent drafts.
4. Name one owner for the task's instructions and move the business rules into a single reviewed document that carries a date and version.
5. Set up the assistant so that order, price and customer facts are supplied from the source systems instead of being pasted in.
6. Decide which outputs need a named approver before release, and record corrections for a month to see where the process, rather than the prompt, is failing.

## What changes when the process comes first

With the process defined, prompts become short and stable, because the inputs and rules no longer have to be re-explained each time. Results stop depending on who is using the tool. Reviews are quicker because the standard is known. And when a better tool arrives, the business can test it against the same criteria instead of starting again.
