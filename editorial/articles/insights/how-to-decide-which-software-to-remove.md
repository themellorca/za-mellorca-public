---
hub: insights
record_id: INS-035
slug: how-to-decide-which-software-to-remove
title: How to decide which software to remove.
description: A practical framework for deciding which business applications to retire without cutting blindly or disrupting critical work.
lead: Application rationalisation is not a licence-cutting exercise. The job is to remove cost and complexity without deleting capabilities, data or controls the business still depends on.
category: Systems & Strategy
published_date: 2026-09-01
updated_date: 2026-09-01
eyebrow: Article
page_title: How to Decide Which Software to Remove | Mellorca
tags:
  - Application Portfolio
  - SaaS
  - Technology Cost
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - Principle (e): Storage limitation | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/storage-limitation/
  - The Complete Guide to SaaS Operations (+ Strategies and Tools) | https://zylo.com/blog/saas-operations
  - Announcing Zylo's 2026 SaaS Management Index | https://zylo.com/news/2026-saas-management-index
related:
  - How to decide what technology problem to solve first | /insights/how-to-decide-what-technology-problem-to-solve-first/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
  - Piling on more software is not digital maturity | /insights/piling-on-more-software-is-not-digital-maturity/
---
Software portfolios rarely become complicated because somebody deliberately designed them that way. They accumulate. A team buys a specialist tool for one need, another department solves a similar problem elsewhere, a platform is replaced but not fully retired, and a few years later nobody can explain which applications are essential, duplicated or barely used.

Zylo's [2026 SaaS Management Index](https://zylo.com/news/2026-saas-management-index) puts numbers on how this happens in larger organisations. Across a dataset of more than 40 million SaaS licences, it reports that business units now control 81% of SaaS spend while IT directly manages 15%, and that organisations leave an average of 36% of licences unused against recommended utilisation levels. It also finds that large enterprises add an average of 21 applications a month while overall application counts stay broadly flat, which means tools are arriving and leaving all the time, often without anyone looking at the whole picture. Your own figures will differ, but the operating lesson is broader: decentralised buying and weak application ownership make waste difficult to see until renewal time.

> The safest software to remove is not the tool with the lowest login count. It is the tool whose business capability, data, integrations and control responsibilities can be retired or moved deliberately.

## Why removal decisions go wrong

Most poor removal decisions come from looking at one dimension of the application. Finance sees the invoice. IT sees the login data. A department head sees the workflow their team relies on. Each view alone produces a bad decision.

Removing on cost alone tends to cut tools that quietly hold a control, a report or an integration nobody listed. Removing on usage alone tends to cut tools that are used rarely but at critical moments, such as year-end, audit or a regulatory submission. The underlying problem is the same in all three cases: the organisation does not have a shared picture of what each application actually does for the business.

## Start with capability, not vendor

Begin by asking what business capability each application provides. Does it manage customer records, approvals, project delivery, documents, reporting, billing, service tickets or employee workflows? Two products can look different while doing substantially the same job. Conversely, a lightly used application may carry one small but critical control that no other system currently provides.

Create an inventory that links each application to an owner, users, annual cost, renewal date, core capability, integrations, important data, security or compliance obligations, and known workarounds. Zylo's [guide to SaaS operations](https://zylo.com/blog/saas-operations) describes the same foundation as a system of record in which every contract, owner and usage data point is captured centrally, so that redundant or unknown applications can be identified and the findings shared across IT, procurement and finance. Without that map, rationalisation becomes a procurement opinion rather than a systems decision.

## Warning signs that the portfolio needs attention

- Nobody can say, without research, how many applications the business pays for.
- Renewals arrive as surprises, and the decision is made in the week before the notice period ends.
- Two or more tools hold the same customer, project or supplier records, and people argue about which is right.
- Applications have no named owner, or the named owner has left.
- Staff export data from one tool to a spreadsheet so they can load it into another.

Several of these together usually mean removal decisions are being made on incomplete information.

## Use six removal tests

- **Business value:** the capability is no longer needed or is duplicated elsewhere.
- **Usage:** sustained usage is low relative to the licences or capacity being paid for.
- **Fit:** teams work around the system because it no longer matches the process.
- **Architecture:** another strategic platform can perform the function with fewer handoffs or integrations.
- **Risk:** the product is unsupported, poorly governed or creates unnecessary data exposure.
- **Economics:** the total cost of keeping it exceeds the cost and risk of migration or retirement.

No single test should decide the outcome. A low-cost app that creates duplicate customer data can be more expensive operationally than its invoice suggests. A high-cost platform may still be justified if several revenue-critical workflows depend on it.

Read the pattern across the tests rather than a total score. An application that fails on fit but passes on value is usually a reconfiguration problem, not a removal candidate.

## Do not confuse low adoption with low value

Low usage can mean the software is unnecessary. It can also mean the implementation was poor, training was weak, the workflow was never redesigned, or users were never given a reason to change. Removing the tool without diagnosing the cause can simply move the same problem into another application.

This is why rationalisation should distinguish between *remove*, *right-size*, *reconfigure*, *integrate* and *replace*. Those are different interventions with different costs.

| Decision | Typical evidence | Main risk |
| --- | --- | --- |
| Remove | Capability no longer needed, or fully duplicated by a strategic platform | Hidden dependencies discovered after cancellation |
| Right-size | Capability needed, but licences or tier exceed real use | Cutting seats that are needed seasonally |
| Reconfigure | Capability needed, but the setup no longer matches the process | Repeating the original implementation mistakes |
| Integrate | Tool is valuable, but data is re-keyed into other systems | Adding integrations nobody owns |
| Replace | Capability needed, but the product cannot meet it well | Migration cost and disruption underestimated |

### An illustrative example

*This is a hypothetical scenario, not a client case.* A professional services firm finds it pays for two project management tools. One is used heavily by delivery teams; the other has a handful of users and looks like an obvious cancellation. On inspection, the smaller tool generates the monthly utilisation report that finance uses for billing, through an integration set up by a contractor several years ago. Cancelling it at renewal would have broken invoicing. The right decision is still to retire it, but only after the report is rebuilt from the main platform and the integration is replaced.

## Design the exit before cancelling

Before termination, identify what must happen to records, reports, automations, integrations, user access, historical evidence and downstream processes. Decide which data must be migrated, which can be archived, and which can be deleted under the organisation's retention rules. Replace integrations before disconnecting the source. Give users a clear destination for the work they used to perform in the retiring system.

Retention deserves particular care where personal data is involved. The UK Information Commissioner's Office guidance on [the storage limitation principle](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/storage-limitation/) expects organisations to know what personal data they hold and why, to justify how long they keep it, and to review and erase or anonymise it when it is no longer needed. Retiring an application is a natural point to apply that discipline, rather than copying everything into the next system by default.

Then time the exit around contract terms and operational risk. Renewal dates are useful forcing functions, but they should not be the first time the business asks whether the application still belongs in the architecture.

## A practical diagnostic

For each application that is a candidate for removal, the team should be able to answer these questions before the cancellation notice is sent:

1. What business capability does it provide, and where will that capability live afterwards?
2. Who owns the decision, and who will notice if it disappears?
3. What data does it hold, and what will be migrated, archived or deleted?
4. Which integrations, automations and reports read from or write to it?
5. What workarounds have grown around it, and will they move or disappear?
6. What is the notice period, and is there enough time to complete the exit safely?

If any answer is "we are not sure", the application is not ready to be removed. It is ready to be investigated.

## The trade-offs

Consolidation reduces licence cost, integration count and the number of places data can drift apart. It can also force teams into a platform that fits their work less well, concentrate risk on one vendor, and absorb change capacity the business needed elsewhere. Fewer tools is not automatically simpler if the remaining platform has to be heavily customised to cover everything. The aim is a portfolio where each tool earns its place, not the smallest possible number of tools.

## What better looks like

A healthier application portfolio is smaller only when smaller is better. It has explicit owners, known capabilities, understood data flows, documented integration dependencies and regular review points. New tools enter through a clear decision process, and old tools leave through a controlled retirement process.

If the organisation cannot produce a reliable application inventory or explain why several overlapping tools exist, the first step is not cancelling licences. It is establishing the current state. The related problem of tools accumulating in the first place is covered in [why more software can make the business harder to run](/insights/why-more-software-can-make-the-business-harder-to-run/).

A [Digital Systems Audit](/services/digital-systems-audit/) can map the current application estate and identify keep, fix, integrate, automate, replace or remove decisions. [Digital Systems Architecture & Roadmap](/services/digital-systems-architecture-roadmap/) can then define the target-state stack and retirement sequence.
