---
hub: insights
record_id: INS-176
slug: your-ai-strategy-has-an-integration-problem
title: Your AI strategy has an integration problem.
description: Why AI agents depend on connected systems, governed data and clear workflows—and why AI readiness is partly integration readiness.
lead: AI agents can reason, retrieve information and trigger actions. But useful business work still depends on the systems, data, APIs, permissions and workflow rules underneath them. AI readiness is partly integration readiness.
category: Business Automation
published_date: 2026-08-31
updated_date: 2026-08-31
eyebrow: Article
page_title: Your AI Strategy Has an Integration Problem | Mellorca
tags:
  - Business Automation
  - Digital Infrastructure
  - AI
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
side_text: Related capability: [Business Automation](/services/business-automation/).
sources:
  - AI Agent Adoption Guidance for Organizations - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/
  - Guidelines for secure AI system development | https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development
related:
  - Is your business actually ready for AI agents? | /insights/is-your-business-actually-ready-for-ai-agents/
  - Why bad data becomes more dangerous when AI can take actions | /insights/why-bad-data-becomes-more-dangerous-when-ai-can-take-actions/
  - Who watches the automations? | /insights/who-watches-the-automations/
---
The most visible part of an AI project is usually the model or agent. The less visible part is everything the agent must connect to if it is going to do useful work.

A customer-service agent may need customer records, order history, policies and the ability to create a support action. An operations agent may need to read a queue, inspect a database, update a CRM and notify a team. A finance workflow may need to extract information from documents, compare it with system records and route exceptions for approval.

None of those jobs is solved by language generation alone.

> An agent can only operate as well as the environment it is allowed to see, understand and change.

## Why AI demos look easier than AI operations

A demonstration can work with a clean prompt, a small set of documents and a carefully prepared path. Production operations are different. Data exists across multiple systems. Records conflict. Permissions matter. APIs fail. Business rules contain exceptions. Actions need owners and audit trails.

Microsoft's guidance on adopting AI agents describes an agent as a combination of a model with instructions, retrieval of grounding data, actions through functions and APIs, and memory. Three of those components are about the surrounding environment rather than the model itself. The same guidance notes that because agents decide which knowledge and tools to use at each step, they introduce non-deterministic behaviour that needs robust testing and governance.

That makes integration a central part of AI strategy, not an implementation detail to solve later.

Consider a logistics company in Gqeberha that pilots an agent to answer customer delivery queries. In the demo, the agent reads a sample of shipment records and gives accurate answers. In production, it needs live tracking data from a courier partner's API, order details from the ERP, exception notes that dispatchers keep in a shared spreadsheet, and the ability to log a query in the helpdesk. The spreadsheet has no API, the courier feed lags by several hours, and the ERP and helpdesk use different customer numbers. The agent is not the problem; the environment is.

## AI needs access, but access needs architecture

When an AI agent needs business context, there are several ways to provide it: APIs, databases, retrieval layers, documents, application connectors, tool calls or other agents. The technology choice matters, but the more fundamental questions are architectural.

- Which system is authoritative for this information?
- How current does the data need to be?
- What should the agent be allowed to read?
- What should it be allowed to change?
- What happens when two systems disagree?
- Which actions require human approval?
- How are failures recorded and recovered?

If those questions have no clear answers, adding an agent does not remove the ambiguity. It gives the ambiguity a new execution layer.

Permissions deserve particular care. It is tempting to give an agent a broad service account so that it "just works". That shortcut means a misunderstood instruction can change records the task never needed to touch. Mellorca's note on [agent permissions broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/) covers this risk.

## Fragmented data becomes an AI constraint

Businesses have always been able to survive some degree of fragmented data because people compensate. A staff member knows which spreadsheet is current. A manager recognises which CRM field is unreliable. Someone remembers that a customer record has an exception.

AI systems cannot safely rely on undocumented institutional memory in the same way. They need explicit context, permissions, definitions and reliable access paths. Microsoft's guidance is direct on this point: access to relevant, high-quality data is critical for reducing inaccurate responses and ensuring relevance.

The lesson for ordinary businesses is not that they need a massive data transformation before using AI. It is that they should stop treating data quality, systems ownership and integration as separate from the AI initiative.

### Warning signs that integration is the real constraint

- Staff copy and paste context into the AI tool before it can help.
- The pilot works on a curated data extract but nobody can say how it will get live data.
- The same customer has different identifiers in the systems the agent must use.
- Key information sits in spreadsheets or inboxes with no reliable access path.
- Nobody can say which system should win when the agent finds conflicting values.

## The workflow still matters

Even perfect integration does not answer what the agent should do.

Take a simple request: "automate customer refunds." That instruction hides a process. Which refunds qualify? What limits apply? Which system holds the payment record? What if the order has already shipped? Who approves exceptions? What customer communication follows? What happens if the payment API fails after the CRM has been updated?

An agent can help execute that workflow, but the workflow still needs to exist as a coherent operating model. Mellorca's pattern [when your business wants agents but has no defined workflow](/patterns/when-your-business-wants-agents-but-has-no-defined-workflow/) describes what happens when this step is skipped.

This is why Mellorca treats Business Automation as dependent on Digital Infrastructure and Digital Operations. The three layers are connected.

## Five foundations to check before scaling an agent

### 1. Systems of record

Know which platforms own customer, transaction, product and operational data. If several systems claim authority over the same facts, resolve that first.

### 2. Stable interfaces

Agents need reliable ways to retrieve information and trigger actions. APIs, connectors and controlled data access should be designed as reusable capabilities rather than one-off shortcuts. The UK National Cyber Security Centre's guidelines for secure AI system development also highlight securing the supply chain when systems are built on external tools and APIs, which is another reason to know exactly what each interface does.

### 3. Data quality and meaning

The agent needs more than access to data. It needs consistent definitions and enough context to interpret it correctly.

### 4. Workflow boundaries

Define what the agent may do autonomously, what requires deterministic rules and what requires a person. Microsoft distinguishes agents that mainly retrieve information, agents that perform specific tasks within defined workflows, and agents that run multi-step processes with minimal oversight, noting that the last category requires rigorous governance. Most businesses should start with the first two.

### 5. Operational visibility

Once the agent is acting, the business needs to know what it did, which systems it touched, where it failed and what the outcome was. The NCSC guidelines treat logging and monitoring as core activities once an AI system is deployed. Mellorca's article on [why AI agents and automated workflows need observability](/insights/why-ai-agents-and-automated-workflows-need-observability/) covers what to record.

## Do not rebuild everything just to use AI

Integration readiness does not necessarily mean replacing the existing stack. An incremental path, in which agents extend existing systems through APIs and other integration patterns, is often more realistic than wholesale replacement.

That is often the sensible route for established businesses. Preserve systems that reliably hold important business logic and records. Improve the interfaces around them. Clean up the worst data and workflow issues. Then introduce AI where autonomy or language capability creates real value.

The trade-off is speed against durability. A quick point-to-point connection can get a pilot running in days but tends to break, and has to be rebuilt for every new agent. A reusable, documented interface takes longer once but serves the next use case too.

## What to do first

1. Choose one agent use case and write out the workflow, including exceptions and approvals.
2. List every system the agent must read from or write to, and confirm which is authoritative for each fact.
3. Check that each system has a usable, supported access path; flag spreadsheets and inboxes.
4. Define the minimum permissions the agent needs, separately for reading and changing data.
5. Decide what will be logged and who will review failures before the agent goes live.

## What better looks like

A business that is ready to scale AI can answer basic operating questions without a large investigation. It knows where important data lives. Systems have defined roles. Permissions are explicit. Workflows have owners. Integrations are observable. Exceptions have a path. Agent activity can be traced.

At that point AI is no longer an isolated experiment sitting beside the business. It becomes another capability operating through a controlled digital environment.

## When to act

If AI pilots repeatedly stall because data is scattered, the same information appears differently across tools, employees have to manually prepare context for the agent, or the proposed agent needs to jump between applications nobody has mapped, the problem may not be the model.

The business may need integration and systems architecture before it needs another AI product. For connected-system design, see [Digital Systems Architecture & Roadmap](/services/digital-systems-architecture-roadmap/) and [Systems Implementation & Integration](/services/systems-implementation-integration/); for agent and AI workflow implementation, see [Business Automation & AI Workflows](/services/business-automation-ai-workflows/).
