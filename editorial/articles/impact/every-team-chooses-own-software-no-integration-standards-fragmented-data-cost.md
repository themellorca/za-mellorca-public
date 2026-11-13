---
hub: impact
record_id: CPS-074
slug: every-team-chooses-own-software-no-integration-standards-fragmented-data-cost
title: Every team picks its own software: The cost of having no integration standards
description: Teams choosing tools independently is not the problem; tools that cannot share data are. Minimum standards keep records consistent and cut re-keying.
lead: Teams that choose tools independently are not the problem; tools that cannot share data are. See which minimum standards keep records consistent and cut re-keying.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Teams choose their own software with no integration standards, so records are duplicated and inconsistent
primary_cost_mechanism: Labour and error cost from duplicate entry, reconciliation and rework
sources:
  - FAQ – OpenAPI Initiative | https://www.openapis.org/faq
  - Microsoft Graph overview - Microsoft Graph | https://learn.microsoft.com/en-us/graph/overview
  - Connector classification - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification
related:
  - One spreadsheet, three jobs: The cost of using Excel as form, database and workflow | /impact/spreadsheet-as-form-database-workflow-errors-maintenance-cost/
  - Re-keying orders after the sale: The labour and fulfilment cost of disconnected systems | /impact/orders-rekeyed-after-sale-fulfilment-risk-cost/
  - Paying consultants to keep unnecessary software complexity running | /impact/paying-consultants-to-maintain-unnecessary-software-complexity-recurring-cost/
summary: Teams that choose tools independently are not the problem; tools that cannot share data are. See which minimum standards keep records consistent and cut re-keying.
layout: plain
---
Sales picked a customer-tracking app because it was easy to use. Operations chose a scheduling tool because a friend recommended it. Finance already had its accounting package, and the warehouse runs on a spreadsheet that works perfectly well for the person who built it. Every one of these decisions was reasonable on its own. Put together, they leave a business in which the same customer is spelled four different ways, nobody can follow an order from quote to payment, and the only integration between the systems is a person with a keyboard.

## The pain: freedom to choose without any standard to meet

Letting teams choose their own tools has real advantages. People closest to the work know what they need, and a flexible team moves faster than one waiting for a central approval. The problem is not the freedom. It is the absence of any minimum standard that the choice must meet, so that tools can later work together.

Mellorca has already described [software bought without approval](/impact/software-bought-without-approval-shadow-it-cost/) and [departments buying separate tools for the same need](/impact/departments-buying-separate-tools-same-need-duplicate-subscription-cost/). Those articles focus on who approves and on duplicate fees. This one focuses on the specific standards that determine whether separately chosen tools can share information, and on what it costs when none exist.

## Why businesses tolerate it

- **Speed is valued.** A team that fixes its own problem this week is praised. The integration cost arrives months later, to a different person.
- **Central control sounds bureaucratic.** Owners fear slowing down good people, so they set no rules at all.
- **Nobody owns the whole picture.** Each manager sees their own tool. Nobody sees the cumulative effect.
- **Integration is assumed to be easy.** Modern tools advertise connections, and teams assume they will just work.
- **The workaround is cheap at first.** Copying a few records by hand each week hardly seems worth solving.

## What fragmentation looks like day to day

- The same customer exists under different names, numbers or email addresses in different systems.
- Reports disagree because each department counts differently.
- A change in one place must be repeated in others, and sometimes it is not.
- Staff keep a private spreadsheet that reconciles the official ones.
- Connecting a new tool means weeks of mapping fields because nothing was named consistently.
- Offboarding a person means visiting many tools, and one is forgotten.

Our insight on [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/) explains the mechanics. The cost comes from duplicated effort and conflicting records, not from the number of tools.

## What an integration standard actually is

An integration standard is not a technology project. It is a short list of requirements that any new business tool must meet before it is bought. Good candidates are:

1. **A documented way to exchange data.** Many modern services publish an application programming interface. [The OpenAPI Initiative](https://www.openapis.org/faq) describes the OpenAPI Specification as a standard, programming-language-agnostic interface description for REST APIs that lets people and machines understand what a service can do without reading its code. A vendor that publishes an interface description is far easier to connect than one that does not.
2. **A usable export.** Data can be extracted in a structured format without raising a support ticket.
3. **A shared identifier.** Customers, products, suppliers and staff carry one agreed reference that appears in every system.
4. **A named master.** For each kind of record, one system is the source of truth. See [deciding what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).
5. **Single sign-on or central user management,** so that access can be added and removed in one place.
6. **A named owner** who answers for the tool and records it in the inventory.

## Platforms already govern this, if you look

Larger platforms show what controlled connection looks like. [Microsoft Graph](https://learn.microsoft.com/en-us/graph/overview), for example, is described by Microsoft as the gateway to data in services such as Microsoft Entra and Microsoft 365, exposing a single endpoint for many core services. In the Power Platform, Microsoft [documents data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification) that sort connectors into Business, Non-Business and Blocked groups, and states that connectors in the same group can share data while those in different groups cannot. You do not need those products to take the lesson: deciding in advance which tools may exchange data, and which may not, is a design choice that can be made once instead of argued about every time.

## The financial chain

1. **Duplicate data entry.** Every record entered twice costs time, and every mismatch costs more to find and fix. See [employees entering the same data twice](/impact/pain-employees-duplicated-data-entry/).
2. **Error and rework.** Orders to the wrong address, invoices to the wrong entity, and stock counts that disagree.
3. **Slow decisions.** Management waits while someone consolidates figures from separate sources.
4. **Integration premium.** Connecting inconsistent systems later is more expensive than designing for connection at the start.
5. **Security and access cost.** More tools mean more accounts to manage, review and remove.
6. **Customer impact.** Customers repeat themselves because no team can see what another knows.

## An illustrative cost model

This is a hypothetical example with assumed figures for a South African distributor with 35 staff and five separately chosen tools: customer relationship management, quoting, stock, accounting and a support inbox. The assumptions are for illustration only.

| Item | Assumption | Annual cost |
| --- | --- | --- |
| Re-keying orders between quoting and accounting | 20 orders a day, 4 minutes each, 250 days, at R220 an hour | R73 333 |
| Reconciling customer lists across systems | 3 hours a week at R250 an hour | R39 000 |
| Fixing errors caused by mismatched records | 8 incidents a month, 1 hour each at R250 an hour | R24 000 |
| Total |  | R136 333 |

Even if half of that is eliminated by standards and a single shared customer reference, the saving of roughly R68 000 a year is greater than the cost of a few days spent writing a checklist and cleaning up identifiers. The estimate depends on the assumed volumes. Replace them with counts from your own business before drawing any conclusion.

## The commercial trigger point

- Staff describe a weekly or daily copy-and-paste routine between two tools.
- A manager asks for a report and the answer is "it will take a day to pull together".
- A request arrives to add another tool in a category you already use.
- You are about to automate something, and the data it relies on is inconsistent. Our insight on [understanding how the work actually moves before you automate](/insights/before-you-automate-understand-how-the-work-actually-moves/) makes the point.
- Growth is adding staff and volume, so every manual bridge gets heavier.

## What better looks like

Teams still choose their own tools, but within agreed boundaries. A new tool is checked against the standard before it is bought. The check takes minutes. Customers and products have one identifier. One system is the master for each record type. Changes flow in one direction where possible. A single inventory shows what is in use and who owns it. The result is not uniformity but compatibility.

## Practical steps

1. **Draw the map.** List the tools, what each holds, and where information is copied between them. Our guide to [mapping the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/) shows how to do it on one page.
2. **Pick the shared references.** Agree one customer reference and one product or service reference, and start applying them in the biggest systems first.
3. **Nominate masters.** Decide which system wins when two disagree.
4. **Write the minimum standard.** Six or seven lines such as those above. Add it to your purchase approval step.
5. **Review existing tools against it.** Mark each as meeting, nearly meeting, or failing the standard. Failing tools with heavy manual bridges are the first candidates for replacement.
6. **Connect deliberately.** When connecting, prefer a few well-understood links over many ad hoc ones. Our article on [point-to-point integrations versus a more maintainable architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/) explains the trade-off.
7. **Measure.** Track the hours spent on re-keying and reconciliation before and after.

## The bottom line

Letting every team choose its own software does not cost money at the moment of purchase. It costs money later, in re-keyed orders, reconciled lists and decisions made on conflicting figures. A handful of simple standards, applied before purchase, keeps the freedom and removes the friction. The business that sets them early pays a small amount of discipline now to avoid paying a recurring labour bill for years.
