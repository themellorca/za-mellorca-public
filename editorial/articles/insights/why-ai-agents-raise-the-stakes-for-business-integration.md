---
hub: insights
record_id: INS-074
slug: why-ai-agents-raise-the-stakes-for-business-integration
title: Why Integration Is Becoming More Important in the Age of AI Agents
description: AI agents act through the systems they can reach, so weak connections between your applications now limit what automation can safely do.
lead: AI agents act through the systems they can reach, so weak connections between your applications now limit what automation can safely do.
category: Integration
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Integration
sources:
  - What is the Model Context Protocol (MCP)? - Model Context Protocol | https://modelcontextprotocol.io/docs/getting-started/intro
  - REL04-BP04 Make mutating operations idempotent - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_prevent_interaction_failure_idempotent.html
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - How to Connect Systems Without Creating a Fragile Web of Dependencies | /insights/how-to-connect-systems-without-creating-a-fragile-web-of-dependencies/
  - Why Integration Projects Fail at the Handoffs | /insights/why-integration-projects-fail-at-the-handoffs/
  - How to Know When Your Integration Architecture Needs Redesigning | /insights/warning-signs-your-integration-architecture-has-outgrown-its-design/
summary: AI agents act through the systems they can reach, so weak connections between your applications now limit what automation can safely do.
layout: plain
---
For most of the last two decades, a poorly integrated business could limp along. Someone retyped the order into the accounting package, someone else checked the stock figure by phone, and the gaps between systems were filled by people who knew where to look. The inefficiency was real, but it was hidden inside human effort, and the business carried on.

AI agents change that arrangement. An agent is software that is given a goal, decides which steps to take and then takes them, usually by reading from and writing to your business systems. It has no colleague down the corridor to ask. It can act only through the connections you have given it, and it can know only what those connections let it see. That is why integration, long treated as plumbing, is turning into the thing that decides how much an agent can safely be trusted to do.

## Agents work through connections, not through understanding

It is tempting to think of an AI agent as a clever new employee who will work out how your business runs. In practice an agent is closer to a very fast temporary worker who has been handed a set of keys. Every system it can open, every record it can read and every button it can press exists because someone built a connection to it.

The Model Context Protocol, an open standard for connecting AI applications to external systems, describes the idea plainly. It likens the protocol to a USB-C port: a standard way for an AI application to reach data sources, tools and workflows. The useful point for a business owner is not the technology itself but the principle behind it. An agent is only as capable as the set of well-defined connections it is offered. If your customer information sits in three places with no agreed way to reach any of them, there is nothing sensible to plug the agent into.

Our article on [what AI agents need before they can do useful work](/insights/what-ai-agents-need-before-they-can-do-useful-work/) covers the broader prerequisites. Here we concentrate on one of them, the connections, because it is the one most often assumed to be in place when it is not.

## Four ways weak integration shows up once an agent is involved

### 1. The agent acts on a partial picture

Suppose a Johannesburg distributor lets an agent draft replies to customers who ask where their order is. (This is an illustrative example, not a real client.) The order system knows the order was packed. The courier's system knows it was collected on Tuesday. The two are not connected, so the agent sees only "packed" and tells the customer it has not yet shipped. A human clerk would have phoned the dispatch desk. The agent did exactly what its information allowed.

The lesson is that incomplete integration does not make an agent hesitate. It makes the agent confidently wrong. We explore the same pattern from the data side in [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/).

### 2. The agent repeats actions

Agents, like all software that talks to other software, sometimes retry. A connection times out, the agent is unsure whether the first attempt worked and tries again. If the receiving system is not built to cope, the customer is invoiced twice or two delivery notes are created.

AWS's reliability guidance describes the standard remedy. A service that is idempotent treats repeated identical requests as having the same effect as a single request, typically by having the caller send a unique token with each request so the service can recognise a repeat and return the original result instead of acting again. The same guidance warns about the failure modes: tokens built from timestamps, inconsistent keys across services, and storing more than is needed. You do not have to be an engineer to ask the useful question, which is simply: if this agent sends the same instruction twice, what happens? If the answer is "we are not sure", the connection is not ready for an agent.

### 3. The agent has more access than its task needs

When connections are built quickly, the easiest route is often one shared login with broad rights. A person using that login is limited by judgement and by how slowly they can click. An agent is limited only by its instructions. Our discovery note on [agent permissions broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/) describes how this arises. Good integration gives each automated task its own narrow, auditable route into each system, so that a mistake is contained.

### 4. Nobody can tell what the agent did

If actions flow through a tangle of point-to-point links, reconstructing what happened after a complaint means opening several systems and guessing at the order of events. Well-designed integration leaves a trail: which request was made, by what, against which record, with what result. That trail is what makes the work reviewable, which we discuss in [why AI agents and automated workflows need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/).

## Why this is a risk-management question, not only a technical one

The US National Institute of Standards and Technology publishes a voluntary AI Risk Management Framework to help organisations build trustworthiness into how AI systems are designed, used and evaluated. NIST's page presents it around four elements: govern, map, measure and manage. You do not need to adopt the framework wholesale to borrow its logic, and the logic maps neatly onto integration.

- **Govern:** someone is accountable for each connection an agent uses. Our piece on [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/) explains what that means in practice.
- **Map:** you know which systems the agent can read, which it can change and which it cannot touch at all.
- **Measure:** you can count what the agent did, how often it failed and how often a person had to correct it.
- **Manage:** there is a way to pause the agent, reverse an action or route a case to a person.

Every item on that list depends on how your systems are connected. An agent placed on top of loosely documented, point-to-point links inherits all of their ambiguity.

## What to do before you give an agent real work

You do not need a large programme. A short, honest review usually reveals where the weaknesses are.

1. **Pick one task and trace its data.** Write down every system the task touches, what it reads and what it changes. Be specific about which record and which field.
2. **Mark each hand-off as automatic or manual.** Anywhere a person currently copies, checks or phones to confirm is a place where the agent will have no equivalent.
3. **Decide which system is the source of truth for each piece of information.** Agents cannot resolve disagreements between systems the way staff do. The questions in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) are a good starting point.
4. **Test repeats and failures deliberately.** Send the same request twice. Switch off one system and see what the agent does. Record what happens.
5. **Limit the first version to reading and drafting.** Let the agent prepare actions that a person approves before moving to actions it takes alone. [Designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/) sets out how to place those checkpoints.
6. **Give each connection a narrow credential and a named owner.** Avoid sharing one login across several agents or integrations.

## Integration investment now has a clearer payoff

Many owners have deferred integration work because the benefit seemed soft: a little less retyping, slightly tidier reports. The arrival of agents makes the benefit easier to see. Every well-built connection widens the set of tasks that can be handed to automation with acceptable risk. Every unreliable one narrows it, however capable the agent itself may be.

That also suggests an order of work. Before choosing which agent to buy, look at the connections the work would depend on. A business that tidies the five or six links between its customer, order, stock and accounting systems will be ready for a wide range of tools, from today's agents to whatever follows. A business that skips the groundwork may find that the most advanced agent in the world can do little more than draft emails, because it cannot be trusted to touch anything else.

Not every task needs an agent, and not every integration needs rebuilding. Our assessment of [where AI agents add value and where they add unnecessary risk](/insights/where-ai-agents-add-value-and-where-they-add-unnecessary-risk/) helps with the first judgement, and [point-to-point integrations compared with a more maintainable architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/) helps with the second.

## A realistic expectation

Agents will keep improving, and the standards for connecting them to business systems will keep maturing. What will not change is that an agent is a user of your systems rather than a substitute for them. When it works well, it is usually because the surrounding systems were already clear about what each record means, who owns it and what may be done to it. When it works badly, the fault is rarely the agent's reasoning alone. More often it is a gap in the information it was given or a connection that behaved in a way nobody had thought through.

Treat integration as the foundation on which agents stand, and the question of how much to trust them becomes far easier to answer, one connection at a time.
