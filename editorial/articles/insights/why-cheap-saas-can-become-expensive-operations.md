---
hub: insights
record_id: INS-040
slug: why-cheap-saas-can-become-expensive-operations
title: Why Cheap SaaS Can Become Expensive Operations
description: A low subscription price says little about what a tool costs to run. Where the operational costs of cheap software hide, from manual data movement and security features on higher plans to price changes and exit costs, and how to judge a tool by its operating cost.
lead: A low subscription price says little about what a tool costs to run. Where the operational costs of cheap software hide, from manual data movement and security features on higher plans to price changes and exit costs, and how to judge a tool by its operating cost.
category: Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Operations
sources:
  - Lightweight approach to cloud security | https://www.ncsc.gov.uk/collection/saas-security
  - Section 21 Security measures regarding information processed by operator - POPIA | https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/
  - Announcing Zylo's 2026 SaaS Management Index | https://zylo.com/news/2026-saas-management-index
  - Modern Lifecycle Policy - Microsoft Lifecycle | https://learn.microsoft.com/en-us/lifecycle/policies/modern
related:
  - The Real Cost of Paying for Software Nobody Uses Properly | /insights/the-real-cost-of-paying-for-software-nobody-uses-properly/
  - Why Small Operational Problems Become Expensive at Scale | /insights/why-small-operational-problems-become-expensive-at-scale/
  - How Manual Data Transfer Becomes an Operational Bottleneck | /insights/how-manual-data-transfer-becomes-an-operational-bottleneck/
summary: A low subscription price says little about what a tool costs to run. Where the operational costs of cheap software hide, from manual data movement and security features on higher plans to price changes and exit costs, and how to judge a tool by its operating cost.
layout: plain
---
The price on a software subscription page is one of the least reliable numbers in business. A tool that costs R150 per user per month looks like an easy decision, especially when the alternative is a larger platform, a consultant or a proper integration. It solves the immediate problem, it can be set up this afternoon, and nobody needs to approve a large budget.

Then the real costs arrive, slowly and in other places. Someone has to copy data into it and out of it. Someone has to manage users, chase renewals and answer questions. Someone has to work around the features that sit on a higher plan. None of these costs appear on the subscription invoice, so the tool still looks cheap long after it has become expensive to run.

This article sets out where those costs come from and how to judge a low-priced tool by what it costs to operate, not just what it costs to buy.

## The subscription is the smallest line

For most business software, the licence fee is only part of the total cost. The rest is operational: the people, time and risk involved in using the tool as part of the business. With inexpensive tools, the gap between the visible price and the operational cost tends to be larger, for three reasons. Cheap tools are often bought without much thought about how they fit with other systems. They often have fewer integration options on their entry-level plans. And because the price is low, nobody feels the need to measure whether they are working.

## Where the operational costs hide

### Manual work at the edges

A low-cost tool that does not connect to your other systems turns staff into the connection. Someone exports a list, cleans it up and imports it somewhere else, every week or every day. A small task repeated by several people adds up quickly; [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) shows how to put a figure on it. The wider problem is described in [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/).

### Integration costs that arrive later

When the manual work becomes painful, the business pays for an integration: a connector subscription, a developer's time, or an automation platform. That cost was always coming, but it was never part of the original decision. See [integration costs hidden inside application projects](/discovery/integration-costs-hidden-inside-application-projects/).

### Administration and support

Every tool needs someone to add and remove users, reset access, configure settings, handle supplier communication and answer colleagues' questions. For a tool with no named owner, that work falls on whoever is nearest, usually someone with another job to do.

### Security features on the next plan up

Entry-level plans do not always include the controls a business needs. The UK National Cyber Security Centre's [SaaS security guidance](https://www.ncsc.gov.uk/collection/saas-security) lists questions a customer should be able to answer "yes" to, including whether two-factor authentication can be enforced for all users, whether single sign-on is supported, whether administrator accounts are separated from standard ones, and whether security logs are available to the customer. If those controls only come with a more expensive tier, the true price of using the tool safely is the higher one.

### Contract and data obligations

If the tool holds personal information about customers or staff, the Protection of Personal Information Act still applies. Section 21 requires a business to have a [written contract with any operator processing personal information on its behalf](https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/), requiring that operator to maintain appropriate security measures. A tool signed up for with a click-through agreement may never have been checked against that requirement, and fixing it later takes time from someone senior.

### Price changes and currency exposure

Many cloud tools used by South African businesses are priced in US dollars, so the rand cost moves with the exchange rate. Suppliers also change plans, bundle features into higher tiers and introduce usage-based charges. Zylo's [2026 SaaS Management Index](https://zylo.com/news/2026-saas-management-index), drawn from mostly larger organisations, reports that 78% of IT leaders had faced unexpected charges from consumption-based or AI pricing, and 61% had been forced to cut projects because of unplanned software cost increases. A cheap tool can become a less cheap tool without anyone deciding to spend more.

### Change you have to keep up with

Cloud software changes continuously. Even large suppliers set short notice periods: Microsoft's [Modern Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/modern) commits to a minimum of 30 days' notice when customers must take action to avoid significant disruption. Every tool in your portfolio brings its own stream of changes, and someone has to notice and respond to each. Ten cheap tools mean ten sets of release notes, ten sets of plan changes and ten potential surprises.

### The cost of leaving

Low-cost tools are easy to start and sometimes hard to leave. Export options can be limited, history may not come out cleanly, and attachments may need to be downloaded one by one. That cost only appears when you try to move, by which point the tool may hold years of records. See [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/).

## A worked example

*Illustrative example:* a Bloemfontein property management company with about 30 staff adopted a low-cost maintenance request app at roughly R2,000 a month for the whole team. It worked well for tenants and technicians.

Two years later, the company looked at what the app actually cost to run. An administrator spent about six hours a week re-entering completed jobs into the accounting system for billing. A supervisor spent another two hours a week reconciling job statuses with the property management system. Single sign-on and audit logs were only available on a plan three times the price, so the company had been running without them. Every staff change meant someone had to remember to remove access manually. Once the staff time was counted, the operating cost of the "cheap" app was several times its subscription.

The company did not necessarily need a more expensive product. It needed an integration between the app and the accounting system, the higher plan for the security controls, and an owner responsible for access. Those changes raised the subscription but cut the total cost.

## How to judge a low-cost tool properly

Before buying, or at the next renewal, estimate the cost of running the tool, not just paying for it:

| Cost area | Question to ask |
| --- | --- |
| Subscription | What will the plan we actually need cost in rand, including the security features we require? |
| Data movement | What information has to move in and out, and will it move automatically or by hand? |
| Administration | Who will own it, and how many hours a month will that take? |
| Compliance | Will it hold personal information, and do the supplier's terms meet our obligations? |
| Change | How does the supplier announce changes, and how have prices moved in the past? |
| Exit | Can we export everything we need in a usable format if we leave? |

Add the answers together over two or three years and compare that figure with the alternatives, including doing the job in a system you already own. Often the cheap tool still wins. Sometimes the comparison shows that a slightly more expensive option, or configuring a platform you already pay for, is much cheaper to operate.

## Cheap is a property of the whole system

A tool is only cheap if the business around it stays simple. Buying a new tool for every process problem feels economical one subscription at a time, but the operational costs compound, as described in [the cost of buying software for every process problem](/impact/buying-software-for-every-process-problem/). Judging tools by their operating cost rather than their price is one of the simplest ways to keep a growing business from becoming expensive to run.
