---
hub: insights
record_id: INS-034
slug: how-to-decide-which-software-to-keep
title: How to Decide Which Software to Keep
description: Most software stays because nobody proposed anything else. Five tests a tool should pass to stay, the conditions that should come with a keep decision, and a simple renewal routine that turns keeping into a deliberate choice.
lead: Most software stays because nobody proposed anything else. Five tests a tool should pass to stay, the conditions that should come with a keep decision, and a simple renewal routine that turns keeping into a deliberate choice.
category: Systems & Strategy
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Systems & Strategy
sources:
  - Select your cloud migration strategies - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy
  - The Complete Guide to SaaS Operations (+ Strategies and Tools) | https://zylo.com/blog/saas-operations
  - Lightweight approach to cloud security | https://www.ncsc.gov.uk/collection/saas-security
  - Modern Lifecycle Policy - Microsoft Lifecycle | https://learn.microsoft.com/en-us/lifecycle/policies/modern
related:
  - How Software Renewal Dates Can Force Better Technology Decisions | /insights/how-software-renewal-dates-can-force-better-technology-decisions/
  - Piling on more software is not digital maturity | /insights/piling-on-more-software-is-not-digital-maturity/
  - What Keep, Fix, Integrate, Automate, Replace or Remove Means in Practice | /insights/what-keep-fix-integrate-automate-replace-or-remove-means-in-practice/
summary: Most software stays because nobody proposed anything else. Five tests a tool should pass to stay, the conditions that should come with a keep decision, and a simple renewal routine that turns keeping into a deliberate choice.
layout: plain
---
Most software reviews are framed around what to cut. That makes sense when budgets are tight, but it hides a more important question. For every tool you remove, you will keep several. Those kept tools carry the business's data, processes and risk for years. If keeping them is simply the default, rather than a decision, the business ends up with a portfolio that nobody chose and nobody is quite responsible for.

Deciding which software to keep is not the mirror image of deciding what to remove. Removal asks whether a tool can safely go. Keeping asks whether a tool deserves to stay, on what terms, and who will make sure it keeps earning its place. This article sets out a practical way to answer those questions. For the removal side of the same review, see [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/).

## Keeping should be an active decision

Microsoft's [Cloud Adoption Framework guidance on choosing a strategy for each workload](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) treats "retain" as one option among several, alongside retiring, replacing and rebuilding. It describes retaining as appropriate when a workload is stable, compliant and meets business needs, and there is no near-term reason to move. That framework was written for cloud migration, but the principle travels well: keeping something is a choice with conditions, and those conditions should be written down so they can be checked later.

In practice, most businesses keep software because nobody proposed anything else. The renewal arrives, the invoice is paid, and the tool rolls on for another year. Over time, the portfolio fills with applications that are tolerated rather than chosen.

## Five tests a tool should pass to stay

### 1. It supports a capability the business still needs

Start with the job, not the product. What does this tool do for the business: manage customers, schedule work, produce invoices, store contracts? Is that capability still needed, and is this the main place it happens? A tool that does one important job well is a strong candidate to keep. A tool that does a job also done elsewhere is a candidate for a harder conversation.

### 2. It has an owner who can answer for it

Zylo's [guide to SaaS operations](https://zylo.com/blog/saas-operations) puts application ownership at the centre of managing software: every tool needs someone accountable for it, with the most important applications given attention first. A tool with no owner cannot be kept in any meaningful sense. Nobody will review its use, approve changes, or notice when it stops fitting. If you decide to keep a tool, name the person who will look after it. See also [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).

### 3. It meets a reasonable security baseline

The UK National Cyber Security Centre's [SaaS security guidance](https://www.ncsc.gov.uk/collection/saas-security) offers a lightweight set of questions for cloud services handling non-sensitive information: whether data is encrypted in transit and at rest, whether two-factor authentication can be enforced for all users, whether single sign-on is supported, whether administrator and standard accounts are separated, whether security logs are available, and where data is stored. A tool you intend to keep for several more years should be able to answer these. If it cannot, keeping it may still be right, but you should know the risk you are accepting.

### 4. Its supplier is likely to stay the course

Software changes under you. Suppliers retire features, change plans and occasionally retire whole products. Microsoft's [Modern Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/modern) is a useful example of what good looks like: it commits to at least 30 days' notice when customers must act to avoid significant disruption, and at least 12 months' notice before ending support for a product with no successor. Not every supplier offers that much clarity. Before you commit to keeping a tool, check what the supplier says about change notice, product roadmaps and support.

### 5. You can leave if you need to

A tool worth keeping is one you could still leave. Check that you can export your data in a usable format, including attachments and history, and that you understand what happens to your data when a subscription ends. Businesses often discover export limits only at the point of leaving, as described in [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/). Testing an export while you are a happy customer is much cheaper.

## Keep, but on what terms?

Passing the tests does not mean the tool stays exactly as it is. Many keep decisions come with conditions:

| Keep decision | When it fits | Typical condition |
| --- | --- | --- |
| Keep as is | Tool fits the process, is well used and passes the security baseline | Review at next renewal |
| Keep and right-size | Tool is valuable but licences or plan tier exceed real use | Reduce seats or tier before renewal |
| Keep and strengthen | Tool is valuable but missing a control, such as two-factor sign-in | Fix the gap within a set period |
| Keep and connect | Tool is valuable but its data is retyped into other systems | Agree data ownership and integrate |
| Keep for now | Tool is needed today but a better option is likely within a year or two | Set a date to revisit, avoid long contracts |

Recording the condition matters as much as the decision. "Keep for now" without a date quietly becomes "keep forever".

## Be careful with the platform at the centre

The most important keep decisions concern core platforms: the accounting system, the CRM, the operational system that runs jobs or orders. These tools hold records that other systems depend on. Keeping them is usually right, because replacing them is expensive and disruptive, but it should still be a deliberate choice. If a core platform is the master copy for customers or orders, confirm that role explicitly; [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) explains how.

## A worked example

*Illustrative example:* a Cape Town professional services firm with about 45 staff reviewed its 23 paid applications ahead of its financial year-end. It removed four and right-sized three. More useful, though, was what it did with the remaining sixteen.

Each was given a named owner and a one-line statement of the job it did. Two tools turned out not to support two-factor sign-in for all users; one supplier enabled it on a higher plan, which the firm accepted, and the other was marked "keep for now" with a review date in nine months. A test export from the practice management system revealed that file attachments could not be exported in bulk, which changed the firm's view of how long it wanted to commit to that supplier. Every renewal date went into one shared calendar with a reminder 90 days ahead.

## Make the decision repeatable

Zylo's guidance recommends working towards renewals well in advance, with reminders at intervals such as 120, 90, 60 and 30 days, so there is time to review usage and negotiate. A simple version works for smaller businesses too:

1. Keep one list of every application, with owner, purpose, cost, renewal date and keep condition.
2. Ninety days before each renewal, ask the owner to confirm the five tests still hold.
3. Check any "keep and" condition: has the seat count been reduced, the control fixed, the integration built?
4. Record the decision and the date for the next review.

Keeping software well is part of the wider work of looking after business systems over time, which is covered in [why business systems need ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/). The aim is a portfolio where every tool is there for a reason someone can explain, rather than one that simply accumulated.
