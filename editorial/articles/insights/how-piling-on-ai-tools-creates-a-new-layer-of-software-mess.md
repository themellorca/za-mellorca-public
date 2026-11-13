---
hub: insights
record_id: INS-039
slug: how-piling-on-ai-tools-creates-a-new-layer-of-software-mess
title: How piling on AI tools creates a new layer of software mess
description: AI assistants, note-takers and agents arrive faster and less visibly than other software. Why they leak data and blur costs, and how to control them.
lead: AI assistants, note-takers, add-ons and agents are arriving faster and less visibly than ordinary software. Why that new layer leaks data, hides business rules and blurs costs, and a light framework for bringing it under control without banning AI.
category: Automation & AI
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Automation & AI
sources:
  - The hidden risks of shadow AI | https://www.ncsc.gov.uk/blogs/the-hidden-risks-of-shadow-ai
  - Announcing Zylo's 2026 SaaS Management Index | https://zylo.com/news/2026-saas-management-index
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - Thinking carefully before adopting agentic AI | https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai
related:
  - What AI agents need before they can do useful work | /insights/what-ai-agents-need-before-they-can-do-useful-work/
  - How to choose a business process for an AI agent | /insights/how-to-choose-a-business-process-for-an-ai-agent/
  - How duplicate software creates duplicate work | /insights/how-duplicate-software-creates-duplicate-work/
summary: AI assistants, note-takers, add-ons and agents are arriving faster and less visibly than ordinary software. Why that new layer leaks data, hides business rules and blurs costs, and a light framework for bringing it under control without banning AI.
layout: plain
---
Many businesses spent the last decade accumulating software they now struggle to manage: overlapping apps, scattered data and subscriptions nobody can account for. AI tools are now arriving the same way, only faster. A writing assistant here, a meeting note-taker there, an AI feature switched on inside the CRM, a chatbot on the website, an automation tool with an AI step, and several personal subscriptions expensed by individual staff.

Each one may be useful. Together, they form a new layer on top of the existing systems, with its own data flows, costs and risks, and usually with no owner. This article looks at how that layer forms, why it is harder to see than ordinary software sprawl, and how to bring it under control without stopping people from using AI well.

## How the AI layer builds up

The pattern will be familiar to anyone who has watched ordinary software multiply. The difference is speed and invisibility. AI tools are often free or cheap to start, need no installation, and can be used from a browser in minutes. Many arrive inside products the business already pays for, as a new feature or add-on, so they never go through any buying decision at all.

Zylo's [2026 SaaS Management Index](https://zylo.com/news/2026-saas-management-index), which draws on licence data from mostly larger organisations, reports that spending on AI-native applications rose sharply year on year, that software bought through expense claims grew quickly, and that ChatGPT has become the most expensed application in its dataset. The same report found that most IT leaders had experienced unexpected charges from consumption-based or AI pricing. Smaller South African businesses will see different figures, but the direction is the same: AI spend is growing outside normal purchasing.

The UK National Cyber Security Centre has given this a name. In its post on [the hidden risks of shadow AI](https://www.ncsc.gov.uk/blogs/the-hidden-risks-of-shadow-ai), it describes shadow AI as AI technology that is not captured in an organisation's approved systems and processes, and cites a Microsoft study in which 71% of employees reported using AI tools their employer had not approved.

## Why this layer is messier than ordinary software sprawl

### Business data flows out in prompts

With most software, you know roughly what data it holds because someone set it up. With AI tools, staff paste in whatever they need help with: client emails, contracts, spreadsheets of customer details, financial figures. The NCSC warns that giving unapproved AI tools access to company or customer data increases the risk of data breaches, loss of intellectual property and failure to meet regulatory requirements. For a South African business, that includes obligations under the Protection of Personal Information Act. The business consequences are explored in [the financial risk of uncontrolled AI use of company data](/impact/uncontrolled-ai-company-data-financial-risk/).

### Business rules hide in prompts and settings

When a team builds a useful prompt for drafting quotes or summarising tenders, that prompt quietly becomes part of how the business works. It may contain pricing rules, approval thresholds or tone guidance that exists nowhere else. When the person who wrote it leaves, the rule leaves with them. See [business rules hidden inside AI prompts](/discovery/business-rules-hidden-inside-ai-prompts/).

### AI tools ask for access to everything

Note-takers want calendars and meetings. Email assistants want inboxes. Agents that act on your behalf want permission to read and change records across systems. Each connection is a new path into business data, often granted by an individual clicking "allow". [Why AI adoption creates a new access control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/) covers this in more depth.

### Costs are harder to predict

Traditional software usually charges per user per month. AI tools increasingly charge per use, per credit or per task, layered on top of existing subscriptions. A busy month, an automation that loops, or a team discovering a new use can change the bill without anyone deciding to spend more.

### Value is hard to see

Because AI tools are spread across individuals, few businesses can say what they are getting for the spend. Licences are bought because a tool looked promising, and nobody checks a few months later whether it saved time or improved anything. The cost of that drift is described in [AI subscription sprawl and its unmeasured value](/impact/ai-subscription-sprawl-unmeasured-value-cost/).

## Banning it rarely works

A natural reaction is to block AI tools until there is a policy. The NCSC does not recommend that individuals stop using AI, and it notes that shadow AI, like shadow IT, is unlikely to disappear completely; the aim should be to reduce risk rather than assume it can be removed. Its advice is to build a positive security culture, understand what staff need, and provide secure alternatives. Blanket bans tend to push use onto personal phones and accounts, where the business has even less visibility.

## A lighter framework for getting control

The US National Institute of Standards and Technology's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is voluntary and written for organisations of all kinds. Its four functions, Govern, Map, Measure and Manage, translate into a practical routine for a small or mid-sized business:

| Function | What it means in practice |
| --- | --- |
| Govern | Name someone responsible for AI use, agree a short policy on what data may and may not go into AI tools, and decide who can approve new ones |
| Map | List the AI tools and features in use, including add-ons inside existing products and personal subscriptions, with what data each touches |
| Measure | Track cost, usage and the outcome each tool is meant to improve, such as time saved on a defined task |
| Manage | Consolidate onto a small number of approved tools, remove unused ones, and review access granted to AI integrations |

## Be especially careful with tools that act

AI that drafts text for a person to check is one thing. AI that takes actions, updating records, sending messages or moving money, is another. The NCSC's guidance on [thinking carefully before adopting agentic AI](https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai) advises giving agents only the minimum access they need for the shortest time, starting with tightly bounded pilots, and defining ownership, approval authority, monitoring and the ability to override before deployment. It also suggests asking whether simpler, lower-risk automation would solve the problem. Its test is a good one: if you cannot understand, monitor or contain what an agent is doing, it is not ready to deploy.

## A worked example

*Illustrative example:* a Gqeberha logistics broker with about 35 staff asked each team which AI tools they used. The list came to fourteen, including four separate chatbot subscriptions on personal cards, two meeting note-takers with access to every calendar, an AI add-on to the CRM that nobody had switched off after the trial, and a browser extension that read every web page staff visited.

The business chose one general-purpose assistant on a company plan with data protection terms, one approved note-taker with access limited to opted-in meetings, and kept the CRM add-on for the sales team only. It wrote a one-page policy on which information could go into AI tools, moved the most useful team prompts into a shared, owned library, and revoked the extension's access. Monthly AI spend fell slightly, but the main gain was knowing where business data was going.

## Treat AI tools as part of the system, not beside it

The underlying lesson is the same as with any software: tools added without reference to how the business's systems fit together create mess, however clever they are. AI is most useful when it works with good data and clear processes, which is why [your AI strategy has an integration problem](/insights/your-ai-strategy-has-an-integration-problem/) and [AI readiness is really systems readiness](/insights/why-ai-readiness-is-really-systems-readiness/). Fewer, better-governed AI tools, connected to the systems the business already trusts, will deliver more than a growing pile of individual experiments.
