---
hub: patterns
record_id: PAT-047
slug: when-two-tools-do-the-same-job-and-nobody-knows-which-to-use
title: When Two Tools Do the Same Job and Nobody Knows Which to Use
description: Three task apps, two file stores and two chat platforms, each used by somebody. When software overlaps without a rule about what goes where, people spend their attention deciding where to work and where to look, and managers act on whichever tool they happen to check.
lead: Three task apps, two file stores and two chat platforms, each used by somebody. When software overlaps without a rule about what goes where, people spend their attention deciding where to work and where to look, and managers act on whichever tool they happen to check.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Two or more tools are used for the same purpose, such as tasks, files, chat or forms, and staff regularly have to decide or ask which one to use and where to look for information.
primary_identification: Functional duplication: overlapping software adopted without a business standard per function, splitting work and information across tools and multiplying everyday decisions.
commercial_value_dimensions: Decision speed, productivity, risk and software cost
sources:
  - When to use Microsoft Project, Planner, To Do, or the Tasks app in Teams - Microsoft Support | https://support.microsoft.com/en-us/project/when-to-use-microsoft-project-planner-to-do-or-the-tasks-app-in-teams
  - Discover and manage Shadow IT - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it
  - CIS Control 2: Inventory and Control of Software Assets | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
related:
  - When Work Goes Missing in the Gap Between Two Systems | /patterns/when-work-goes-missing-in-the-gap-between-two-systems/
  - How Disconnected Tools Quietly Limit Scale | /patterns/how-disconnected-tools-quietly-limit-scale/
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
summary: Three task apps, two file stores and two chat platforms, each used by somebody. When software overlaps without a rule about what goes where, people spend their attention deciding where to work and where to look, and managers act on whichever tool they happen to check.
layout: plain
---
## Observable condition

A new staff member asks a simple question: where do I log this task? One colleague says the project board. Another says the shared to-do list in the email system. A third says the operations team uses its own task app, and the directors track priorities in a spreadsheet. All four answers are correct for somebody.

The same thing happens with files, customer notes and messages. Some documents live in one cloud drive, others in a second that came with a different subscription. Client conversations happen in email, in a chat tool and in a messaging app. Two departments each bought a form builder. When a manager wants to know the status of something, they first have to work out which tool it might be in.

An illustrative example: a Johannesburg logistics broker with around fifty staff found it was paying for three task-management tools, two file-storage services and two chat platforms. None of the duplication was planned. Each tool had arrived with a team, a project or a bundled subscription. The visible cost was the licences. The larger cost was the daily uncertainty about where to put things and where to look for them.

## Realisation

Duplicated software is usually discussed as a licensing cost. The more important effect is on decisions, both small and large. Every time a person has to decide which tool to use, which list to check or which version to trust, they spend attention that should go to the work itself. When different people decide differently, information splits across tools, and every later decision is made on part of it.

Even within one vendor's suite, overlapping tools need explaining. Microsoft publishes guidance on when to use To Do, Planner, Project or the Tasks app in Teams, because the products overlap and the right choice depends on the type of work. Without a similar decision made inside the business, each person chooses by habit.

Overlap also grows without anyone deciding it. Microsoft's guidance on discovering unsanctioned cloud apps notes that such apps are often used for legitimate work-related purposes that a sanctioned app did not address. In other words, people adopt a second tool because the first did not meet a need, and the business ends up with both.

**Realisation prompt:** for tasks, files, customer notes and internal messages, could everyone in your business name the one place each belongs?

## Identification

This is a pattern of **functional duplication**: two or more tools serve the same purpose, with no agreed rule about which is used for what, so work and information are spread across them and people must decide, repeatedly, where to put things and where to look. The visible symptoms are uncertainty, duplicated records and missed items. The common assumption is that more tools give people more choice. The structural cause is that tools were adopted without anyone deciding the business's standard for each function.

This is related to [not knowing which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/), which concerns conflicting copies of the same record across core systems. Duplication creates that problem, but it starts earlier, with the everyday question of which tool to use at all.

## Diagnosis

- **Tools arrive with teams and bundles.** A department buys what it needs, a subscription includes a tool that overlaps with another, or a client requires a particular platform.
- **No standard per function.** The business has never stated which tool is used for tasks, files, customer communication or forms.
- **Retirement never happens.** New tools are added, but old ones are not switched off, so both stay in use.
- **Integration is duplicated too.** Each overlapping tool may be connected separately to other systems, or not at all. The Discovery page on [the same workflow automated independently by multiple teams](/discovery/the-same-workflow-is-automated-independently-by-multiple-teams/) shows how this compounds.
- **No complete inventory.** The business does not have a single list of the software it uses. The Center for Internet Security treats an actively managed inventory of software as a foundational control, because what is not listed cannot be governed.

## Commercial impact

The commercial value at stake is decision speed, productivity, risk and software cost.

The licence cost is real and is covered in the Impact page on [paying for multiple applications that do the same job](/impact/pain-paying-for-multiple-applications-duplicate-software-fragmented-work/). The less visible cost is in decisions. Staff spend time choosing where to work and searching where things might be. Managers make decisions from whichever tool they happen to check, which may not hold the latest status. Items logged in the less-used tool are missed.

Risk increases too. Each duplicated tool holds business and often personal information, needs its own access control and must be secured and offboarded separately. Information in a forgotten tool is easily overlooked when someone leaves or when data must be found for a client or an audit.

Duplication also slows improvement. Any attempt to automate or report on a function has to deal with several tools instead of one, which makes the work larger and less likely to happen.

## Common misidentification

A common response is to cancel the cheapest or least-used tool. That saves money but can break a workflow that a team depended on, pushing them back to a spreadsheet or a new unsanctioned tool.

Another is to ask staff to be consistent without saying what consistent means. Without a written decision about which tool serves which purpose, people stay with what they know.

A third is to assume that one large platform will remove all overlap. Consolidation can help, but large suites often contain overlapping tools of their own, so a decision about use is still needed.

## Possibility

In a better state, the business has one agreed tool for each common function, a short written rule about what goes where, and a plan for retiring overlaps. New staff are told on their first day where tasks, files, customer communication and forms live. Requests for new tools are checked against what already exists. Where a second tool is genuinely needed, its purpose is defined and its data connected.

For the logistics broker, this meant choosing one task tool, one file store and one internal chat platform, migrating active work, and setting a date after which the others became read-only before being closed.

## Intervention

1. **Build a software inventory.** List every tool in use, including team-bought and bundled ones, with its purpose, owner, users and cost.
2. **Group tools by function.** Identify where two or more tools serve the same purpose: tasks, files, chat, forms, customer notes, scheduling.
3. **Understand why each exists.** Before retiring a tool, find out what need it meets. Sometimes the second tool exists because the first was missing something important.
4. **Decide the standard for each function.** Choose one tool per function, write down what goes where and make the rule visible. The Insight on [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) provides a structured approach.
5. **Migrate and retire deliberately.** Move active work, make old tools read-only for a period, then close them and remove access.
6. **Check new requests against the inventory.** Before adding a tool, confirm it does not duplicate one already in use.

## Practical diagnostic questions

- How many tools do you pay for that serve the same function?
- Could a new employee find out, in one place, where each kind of work belongs?
- When a manager checks status, how often is the latest information in another tool?
- Which overlapping tools were never formally retired?
- Does anyone own the decision about which tools the business uses?

## Bottom line

When two tools do the same job, the business pays twice in licences and many more times in decisions. People must choose where to work and where to look, information splits across tools and managers act on partial pictures. Deciding one standard per function, writing it down and retiring the overlaps deliberately restores clarity and makes later improvement far easier.
