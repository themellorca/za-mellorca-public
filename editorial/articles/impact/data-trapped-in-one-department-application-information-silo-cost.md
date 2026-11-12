---
hub: impact
record_id: CPS-086
slug: data-trapped-in-one-department-application-information-silo-cost
title: When Important Data Is Trapped in One Department's App
description: When one team's application holds information everyone else needs, the cost appears as re-keying, slow answers, conflicting figures and decisions made on partial facts.
lead: When one team's application holds information everyone else needs, the cost appears as re-keying, slow answers, conflicting figures and decisions made on partial facts.
category: Data and Information
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Important business data trapped inside one department's application and unavailable to the rest of the business
primary_cost_mechanism: Staff time spent requesting, exporting and re-keying data, delayed and conflicting answers, decisions taken on partial information, duplicated data capture, and dependence on one team or one person to reach the data
sources:
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
  - Learn about data governance with Microsoft Purview | https://learn.microsoft.com/en-us/purview/data-governance-overview
related:
  - Collecting Data Nobody Uses: What Useless Information Costs | /impact/collecting-large-amounts-of-data-nobody-uses-storage-labour-cost/
  - Guests on the Business Network: The Hidden Cost of Poor Separation | /impact/guest-devices-sharing-network-with-business-systems-poor-network-separation-financial-security-risk/
  - Sales, Finance and Operations Each With Their Own Customer: The Cost | /impact/departments-separate-customer-records-financial-impact/
summary: When one team's application holds information everyone else needs, the cost appears as re-keying, slow answers, conflicting figures and decisions made on partial facts.
layout: plain
---
## The answer exists, but not where you need it

A distribution business in Gauteng runs its customer credit terms in the finance package. The sales team quotes from a separate quoting tool. The warehouse works from a stock system that nobody in finance can open. Every one of these applications holds something valuable, and every one of them is looked after by a department that has little reason to share.

On a Tuesday afternoon a salesperson wants to know whether a customer is on stop-credit before confirming a large order. The answer sits in the finance package. She emails the credit controller, who is in a meeting, and the order waits until the next morning. The customer, meanwhile, phones a competitor. Nobody did anything wrong. The data was simply trapped inside one department's application, and the only way out was a person.

This is what an information silo looks like in a small or mid-sized business. It is rarely a dramatic failure. It is a steady tax on every question that crosses a department boundary.

## How data ends up locked in

Silos are almost never designed. They accumulate through reasonable local decisions.

- **Departments buy for their own needs.** Finance picks accounting software, sales picks a quoting tool, operations picks a scheduling tool. Each choice is sensible on its own.
- **Access is granted by role, not by need.** A licence costs money, so only the team that "owns" the application gets one. Anyone else has to ask.
- **Exports are the only bridge.** The application can produce a report or a spreadsheet, so that becomes the sharing mechanism, and the copy goes stale the moment it leaves.
- **Knowledge sits with one user.** Only one person knows how to pull the right report, so everyone else routes requests through them.
- **Nobody owns the whole picture.** Each application has an owner, but the data that spans applications has none.

The related article on [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/) explains the technical side. Here the focus is the financial side: where the money actually leaks.

## Where the cost shows up

### 1. Request-and-wait time

Each cross-department question becomes an email or a message, followed by a wait and sometimes a reminder. Suppose a business of 40 people generates ten such requests a day, and each one costs six minutes of asking and waiting-around time on the requester's side and five minutes of fetching on the owner's side. That is about 110 minutes a day, close to 40 hours a month, for answers that already exist. These figures are illustrative; the point is to count your own.

### 2. Re-keying and its errors

When people cannot read the data, they copy it. A price list typed from a PDF, a customer address retyped from a screen, a stock figure transcribed from a printout. Each copy is a chance for a typing error and a starting point for drift. The article on [duplicated customer data entry](/impact/pain-duplication-of-customer-data-entry/) covers this in more detail.

### 3. Conflicting numbers

Once data has been exported and copied, two departments can quote different figures for the same thing. The meeting then spends its first twenty minutes agreeing which number is right, a pattern described in [departments reporting different numbers for the same metric](/impact/departments-reporting-different-numbers-same-metric-meeting-decision-cost/).

### 4. Decisions made on partial facts

The most expensive cost is the one you cannot see on a payslip. A purchasing manager reorders stock without seeing the sales forecast. A sales manager approves a discount without seeing that the customer is already slow to pay. Nobody decided to ignore the information; it was simply out of reach.

### 5. Dependence on one team or one person

If the only route to the data is a particular person, their leave, resignation or illness becomes a business problem. This overlaps with the concerns in [key-person dependency as a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## A quick way to size your own silo cost

You do not need a consultant to get a first estimate. Pick the three applications that hold your most-requested data, then answer these questions for each.

| Question | What to record |
| --- | --- |
| Who outside the owning team asks for this data? | Names or roles, and how often |
| How do they get it today? | Email request, shared export, screen share, phone call |
| How long does a typical request take end to end? | Minutes of work and hours of waiting |
| How old is the copy by the time it is used? | Hours, days or weeks |
| What happens when the owner is away? | Work stops, work slows, or someone guesses |

Multiply the minutes by the hourly cost of the people involved, then add a rough value for the delayed or lost decisions. Even a conservative estimate is usually larger than the licence fee that would have given the second team read access.

## Opening the data without replacing everything

The instinct is often to buy one big system to replace the lot. That is slow, expensive and disruptive, and it frequently creates a new silo. A more reliable route is to open the data in stages.

1. **Start with read access.** Many applications offer a low-cost read-only or viewer role. Giving the second team that role removes a whole class of requests.
2. **Use the application's own sharing options.** Scheduled reports sent to a shared folder or a live link are better than ad hoc exports, because everyone sees the same version.
3. **Combine data where it is used.** Tools such as [Power Query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) can pull data from several sources into one refreshable view, so a manager sees credit status beside open orders without anyone retyping it.
4. **Decide which system owns which fact.** Customer credit terms belong to finance, delivery dates to operations. The article on [deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) sets out a simple way to do this.
5. **Record where data lives.** Even a one-page list of "what we hold, where, who owns it" is a start. Larger platforms offer cataloguing; [Microsoft Purview data governance](https://learn.microsoft.com/en-us/purview/data-governance-overview) is one example of how organisations discover and describe their data estate.

## Privacy is a reason to share carefully, not to lock down

Some silos exist because someone fears opening personal information too widely. That concern is legitimate. The Protection of Personal Information Act requires responsible parties to keep personal information accurate and to secure it, and it expects people to be told what is held about them. You can read the [Act on the government website](https://www.gov.za/documents/protection-personal-information-act). But a blanket lock on one department's application is a blunt instrument. Role-based access, where each person sees only what their job needs, lets you share the data that is safe to share and protect the data that is not. It also makes it easier, not harder, to answer a request from a person asking what you hold about them, because you know where to look.

## Practical next actions

1. List the five questions other departments ask most often, and write down which application holds each answer.
2. For each, record how long a typical request takes from ask to answer, and how many times a month it happens. Put a Rand value on the hours.
3. Ask each application owner what read-only or viewer access costs, and give it to the second-most frequent requester first.
4. Replace one recurring email-and-export routine with a scheduled report or a live shared view, and measure the time saved after a month.
5. Name one owner for each shared fact, such as credit terms or stock levels, and write the list on a single page that anyone in the business can read.

## What good looks like

A business that has dealt with its silos does not necessarily have fewer applications. It has fewer closed doors. The salesperson can see a credit flag before she confirms the order. The finance team can see what has been shipped without asking. Reports agree because they read the same source. And when the person who knew how to extract the data goes on leave, the work carries on. None of this needs a large budget at the start; it needs someone to count the cost of the current arrangement and then open the first door.
