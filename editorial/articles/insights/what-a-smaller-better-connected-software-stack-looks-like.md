---
hub: insights
record_id: INS-050
slug: what-a-smaller-better-connected-software-stack-looks-like
title: What a smaller, better-connected software stack looks like
description: Consolidation stalls without a clear destination. The five layers of a smaller, better-connected software stack, and how to define yours.
lead: Consolidation stalls without a clear destination. The five layers of a smaller, better-connected software stack, what changes for staff, and how to describe your own target.
category: Systems Strategy
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Systems Strategy
sources:
  - The Technology Code of Practice | https://www.gov.uk/guidance/the-technology-code-of-practice
  - What is single sign-on in Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
related:
  - Your AI strategy has an integration problem | /insights/your-ai-strategy-has-an-integration-problem/
  - Why software consolidation is an operations project, not just an IT project | /insights/why-software-consolidation-is-an-operations-project-not-just-an-it-project/
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
summary: Consolidation stalls without a clear destination. The five layers of a smaller, better-connected software stack, what changes for staff, and how to describe your own target.
layout: plain
---
Many businesses know their software has become unwieldy. There are overlapping tools, too many logins, data copied between systems and subscriptions nobody can quite explain. The advice to "consolidate" is everywhere. What is less often described is the destination: what a smaller, better-connected software stack actually looks like once you get there.

This matters because consolidation without a clear target tends to stall. Teams argue about individual tools, each defending the one they use, and the conversation never reaches the structure that would make the choices obvious. This article describes that structure in practical terms, so that decisions about individual applications can be tested against it.

> A good stack is not defined by how few applications it has. It is defined by how clearly each one knows its job, and how cleanly they share what they know.
>

## The shape of a healthy stack

A smaller, better-connected stack in a small or mid-sized business usually has five layers. They are not products to buy. They are roles that something in the business must play.

### 1. A small number of core systems, each owning a domain

At the centre sit a handful of core systems, each clearly responsible for one area of the business. Typically that means one system for money (accounting or ERP), one for customer relationships (CRM), one for operations (job management, inventory or service delivery, depending on the business) and one for people (payroll and HR). Some businesses combine two of these in one platform. Few need more than four or five core systems.

The test of a core system is that it is the agreed home for a type of record. Customers live in one place. Invoices live in one place. Stock lives in one place. Other tools may display or use that information, but they do not keep their own competing versions of it.

### 2. One identity and access layer

In a fragmented stack, every application has its own usernames and passwords. In a healthier one, people sign in once through a central identity service. Microsoft's documentation on single sign-on describes the benefits in plain terms: users keep fewer credentials, administrators control access from one identity provider, and there are fewer password resets for the help desk to handle.

For a growing business, the operational benefit is just as important. When someone joins, moves role or leaves, access is changed in one place rather than in a dozen applications. That is a large part of what "better connected" means for staff, who otherwise live the experience described in [ten open tabs and five logins](/moments/ten-open-tabs-and-five-logins/).

### 3. A defined way for systems to share information

Core systems need to exchange information, and in a healthy stack they do so in a deliberate, visible way. That may be native connectors, an integration platform or a carefully governed automation tool. What matters is that connections are known, documented, owned and monitored, rather than built ad hoc whenever someone needs a report.

The UK Government's [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice) expresses the principle well: technology should work with existing technologies, processes and infrastructure in the organisation, and adapt to future demands. It also encourages sharing and reusing technology to avoid duplicating effort and unnecessary cost. Those two ideas, fit and reuse, sit at the heart of a smaller stack.

### 4. A short list of approved supporting tools

Not everything belongs in a core system. Teams need tools for documents, video calls, design, e-signatures and specialised work. In a healthy stack these are chosen from a short approved list, connected to the identity layer, and prevented from becoming hidden systems of record. A design tool is fine. A design tool that has quietly become the only place where client project budgets are tracked is not.

### 5. A living inventory

Finally, a healthy stack is known. Someone keeps a current list of every application, its owner, its cost, the data it holds and what it connects to. Many businesses find this harder than expected, as described in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/). Tools exist to help. Microsoft Defender for Cloud Apps, for example, analyses network traffic logs against a catalogue of more than 31,000 cloud apps to give visibility of cloud use and shadow IT. Smaller businesses can often start with card statements, expense claims and a short staff survey.

## What changes for the people using it

| Everyday experience | Fragmented stack | Smaller, connected stack |
| --- | --- | --- |
| Finding a customer's history | Checking several tools and asking colleagues | One record, with linked information from other systems |
| Signing in | Many passwords, frequent resets | One sign-in for most tools |
| Starting a new employee | Accounts created tool by tool | Access granted by role from one place |
| Month-end reporting | Exports combined in spreadsheets | Reports drawn from systems that already share data |
| Adding a new tool | Bought by a team, discovered later | Checked against the stack before purchase |

The cost of the fragmented column is described in more detail in [the cost of using too many applications for one task](/impact/too-many-applications-one-task-fragmented-work-cost/).

## What a smaller stack is not

A smaller stack is not the same as a single all-in-one platform. Some businesses benefit from a suite that covers most needs; others are better served by a few strong specialist systems that connect well. The point is not the number of vendors but the clarity of roles.

Nor is it a fixed state. Businesses change, and the stack should change with them. The difference is that changes are made against an agreed structure rather than accumulating by accident. The broader argument is made in [why piling on more software is not digital maturity](/insights/piling-on-more-software-is-not-digital-maturity/).

## An illustrative example

Consider an illustrative Johannesburg professional services firm with about forty-five staff. Over six years it had accumulated around thirty paid applications: two project management tools, two file-sharing services, a CRM used by half the partners, a separate proposal tool, three survey tools and a time-tracking app whose data was exported weekly to the accounting package.

Rather than reviewing each application in isolation, the firm first agreed the shape it wanted. Accounting would own clients, billing and time. The CRM would own prospects and relationships. One project tool would own engagements and tasks. One document platform would hold files. Everything else would be either an approved supporting tool connected to single sign-on, or retired.

With that structure agreed, most decisions became straightforward. Time tracking moved into the accounting system's own module. The second project tool and two survey tools were retired. The proposal tool was kept, because it did its job well, but connected to the CRM so that it no longer held its own client list. The firm ended with fewer than half its original applications, but the bigger change was that staff could now say where each type of information lived.

## How to describe your own target stack

1. List the main types of business record, such as clients, jobs, invoices, stock and staff.
2. For each, name the one system that should own it.
3. Decide how people will sign in, and aim to bring every core and supporting tool under one identity service.
4. Decide how core systems will share information, and who will own those connections.
5. Write a short list of approved supporting tools and the rule for adding new ones.
6. Start and maintain an inventory of every application, with an owner for each.

Once the target is clear, deciding what to keep and what to remove becomes a matter of fit rather than preference. The detailed decisions are covered in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) and [how to know when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/).
