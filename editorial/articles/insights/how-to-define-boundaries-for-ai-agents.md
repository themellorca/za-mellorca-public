---
hub: insights
record_id: INS-186
slug: how-to-define-boundaries-for-ai-agents
title: How to Define Boundaries for AI Agents
description: An agent chooses its own steps, so its limits must be set in advance: purpose, information, actions, limits and escalation.
lead: An agent chooses its own steps, so its limits must be set in advance: purpose, information, actions, limits and escalation.
category: AI Agents
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: AI Agents
sources:
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - AI Agent Orchestration Patterns - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns
related:
  - How to Automate Customer Onboarding Without Making It Impersonal | /insights/how-to-automate-client-onboarding-and-keep-the-human-touch/
  - What Information Must Move With the Work? | /insights/what-information-must-move-with-the-work/
  - How to Build a Business Application Inventory That Is Actually Useful | /insights/how-to-build-a-business-application-inventory-that-is-actually-useful/
summary: An agent chooses its own steps, so its limits must be set in advance: purpose, information, actions, limits and escalation.
layout: plain
---
A South African retailer lets an AI assistant draft replies to customer emails. It works well for a fortnight. Then the assistant, trying to be helpful, offers a refund that policy does not allow, because nothing told it that refunds above a certain amount need a manager. Nobody designed the mistake. It happened because nobody had said where the agent's authority ended.

AI agents differ from ordinary software in one respect that matters for governance: they choose their own steps. A traditional automation does what it was told in the order it was told. An agent decides which tool to use, what to look at and what to do next. That flexibility is the point, and also the risk. This article explains how to define boundaries that let an agent be useful without letting it act beyond what the business intended.

## Why boundaries come first

It is tempting to start with what the agent can do and add limits later, after something goes wrong. The better order is the reverse: decide what the agent must never do, what it may do with approval, and what it may do alone, then build only the access that supports those decisions. The NIST [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is a voluntary framework from the United States standards body that organises the management of AI risk around governing, mapping, measuring and managing. Its first lesson for a small business is that accountability and roles must be defined before the system is trusted with real decisions.

Microsoft's guidance on [AI agent orchestration patterns](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns) adds a practical principle: use the lowest level of complexity that reliably meets your requirements. The same logic applies to boundaries. An agent with narrow access to a few tools is easier to reason about, test and trust than one with broad access to everything. Our article on [why giving AI access to more systems is not automatically better](/insights/why-giving-ai-access-to-more-systems-is-not-automatically-better/) makes the case at greater length.

## Five kinds of boundary

A useful way to define the limits is to work through five dimensions. Each answers a different question about what could go wrong.

- **Purpose.** What job is the agent for? Write it as one sentence and list what is out of scope. "Draft replies to delivery queries" is a purpose. "Help with customers" is not.
- **Information.** What can the agent read? Give it the minimum needed. If it can see the whole customer file, it can also repeat what it should not.
- **Actions.** What can it change? Reading, drafting, updating a record, sending a message, spending money and deleting data have very different consequences, and each should be permitted separately.
- **Limits.** How much can it do? Cap amounts, volumes and frequency. An agent that can issue a refund should have a ceiling on value and a limit on how many it can issue per hour.
- **Escalation.** When must it stop and ask a person? Define the triggers: uncertainty, unusual requests, anything involving a complaint, a legal threat or a vulnerable customer.

## Separate reading, drafting and acting

The most reliable way to limit risk is to treat the stages of a task differently. Let the agent read broadly within its purpose, draft freely, and act only through steps that a person can see and, where needed, approve. A drafted email waiting in a queue is cheap to correct. A sent email, a posted payment or a changed supplier bank detail is not. Our article on [what an AI agent should be allowed to do in your business](/insights/what-an-ai-agent-should-be-allowed-to-do-in-your-business/) sets out this ladder of permissions, and [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/) explains where to place the checks.

Choose the checkpoints by consequence and reversibility, not by habit. Actions that are hard to undo, that move money, that affect a customer's legal position or that disclose personal information deserve a person in the loop. Routine, reversible actions in a well-tested process can run alone.

## Personal information is a boundary of its own

If the agent touches personal information, the law has something to say. The Protection of Personal Information Act is published on the [South African government website](https://www.gov.za/documents/protection-personal-information-act). Among other things it sets conditions for processing personal information and restricts decisions that have legal or substantial consequences for a person if they are based solely on automated processing. Without turning this article into legal advice, the practical point is that any agent that handles customer or employee data, or that decides something about a person, needs its boundaries reviewed against these duties. Ask your legal adviser or information officer before an agent makes decisions about credit, employment, pricing for an individual or similar matters.

## Keep a record and a way to stop it

A boundary you cannot check is a hope. Make sure that what the agent does is recorded: the request it received, the information it used, the action it took and the outcome. Our guide to [keeping a reliable record of what your AI agents did](/insights/how-to-keep-a-reliable-record-of-what-your-ai-agents-did/) describes what such a record should contain. Review a sample of those records each week at the start. You are looking for the cases where the agent came close to a boundary, which show where the rules are unclear.

Also decide in advance how to stop the agent. Someone should be able to switch it off within minutes, without needing the person who built it. Know which credentials it uses, so that you can revoke them. An agent whose access runs through one dedicated account is much easier to contain than one that borrows several people's logins.

## Test the edges before you trust the middle

Most testing checks that the agent does the right thing when asked for the right thing. Boundary testing does the opposite. Give the agent requests that sit just outside its purpose, ambiguous requests, instructions embedded in a customer's message that try to redirect it, and requests for information it should not share. Record what it does. If it crosses a line, fix the permission rather than only adjusting its instructions, because written instructions to an agent are a request and not a lock. The strongest boundaries are enforced by the systems the agent connects to, such as a read-only credential or a spending limit, and not by the agent's willingness to comply.

## Review the boundaries as the agent changes

Boundaries are not permanent. As the agent proves reliable, you may widen its authority one step at a time. As the business, the tools or the underlying model change, you may need to narrow it. Put a review date on the boundary document, and treat any widening as a decision with a named owner. Our article on [whether your business is actually ready for AI agents](/insights/is-your-business-actually-ready-for-ai-agents/) can help you judge when the groundwork is in place.

## Practical next actions

1. Write a one-sentence purpose for each agent, followed by a short list of things it must never do.
2. List every tool and data source the agent can reach, and remove any that its purpose does not require.
3. Classify each action it can take as read, draft, reversible change or irreversible change, and require human approval for the irreversible ones.
4. Set hard limits in the connected systems, such as refund ceilings, daily volumes and read-only credentials, instead of relying on instructions alone.
5. Run a week of boundary tests with out-of-scope and tricky requests, record the results, and review a sample of the agent's activity every week after launch.
