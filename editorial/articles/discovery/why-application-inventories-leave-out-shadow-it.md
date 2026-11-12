---
hub: discovery
record_id: DISC-334
slug: why-application-inventories-leave-out-shadow-it
title: Why application inventories leave out shadow IT and AI tools
description: An inventory built from purchase orders cannot see the tools people adopt themselves, including AI assistants. How to find them and keep the list true.
lead: An inventory built from purchase orders cannot see the tools people adopt themselves, including AI assistants. How to find them and keep the list true.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT manager or head of information systems, with the information officer accountable for personal information
budget_owner: COO or CFO
sources:
  - Discover and manage Shadow IT - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it
  - View discovered apps on the Cloud discovery dashboard - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/discovered-apps
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - Why Businesses Cannot Produce a Complete List of the Applications They Use | /discovery/why-businesses-cannot-list-all-applications-they-use/
  - Application owners leave without transferring responsibility | /discovery/application-owners-leave-without-transfer/
  - Why Application Risk Assessments Cannot Be One-Time Reviews | /discovery/why-application-risk-assessments-cannot-be-one-time/
summary: An inventory built from purchase orders cannot see the tools people adopt themselves, including AI assistants. How to find them and keep the list true.
layout: plain
---
The IT manager keeps a spreadsheet of business applications. It lists the accounting package, the CRM, the payroll system, the email platform and about forty others. It is reviewed every year and signed off. Then someone in marketing mentions that the team has been using an AI writing assistant for six months, a project manager has connected an AI note-taker to every client call, and finance is running a monthly reconciliation through a free online tool. None of these appear on the list, and none went through procurement.

This article is about that gap: an application inventory that records what was bought through the official route and misses what people adopted for themselves. The rapid arrival of AI tools has made it wider, because many can be started with a work email address and a credit card in a few minutes.

## The problem in plain language

Shadow IT is software or cloud services used for work without the knowledge or approval of the people responsible for technology, security or finance. It is rarely malicious. Employees are trying to finish a task and the approved tools are slow, missing or unknown to them. The result is a second portfolio, larger than most owners expect, that holds business data and customer information outside any record.

An inventory that excludes it gives a false sense of control. Decisions about risk, cost, offboarding and incident response are made against a list that is incomplete in exactly the places where problems arise.

## What the buyer is actually trying to solve

The IT manager, information officer or COO usually wants to be able to answer four questions: which applications hold our data, who uses them, who is accountable for each, and what happens to the data when someone leaves or a tool is withdrawn. For many, the immediate prompt is a board or customer asking what the business is doing about AI tools, and discovering that nobody knows which ones are already in use.

## Evidence and system mechanism

### Vendors report that actual app counts far exceed estimates

Microsoft's tutorial on [discovering and managing shadow IT](https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it) states that IT administrators asked how many cloud apps their employees use typically say 30 or 40, when the average is more than 1,000 separate apps, and that 80% of employees use non-sanctioned apps that no one has reviewed. These are figures from a vendor with a product to sell and from large-organisation telemetry, so a small South African business should not expect the same numbers, but the direction of the gap is the point: estimates made from memory undercount.

### Discovery works from traffic and usage data, not from lists

The same vendor's documentation on [reviewing discovered apps](https://learn.microsoft.com/en-us/defender-cloud-apps/discovered-apps) shows how discovery is done in practice: log data from firewalls, proxies and endpoints is analysed to show which cloud apps are used, by how many users and how often, and with what risk factors. It also notes that apps can only be matched if they are in the product's catalogue, and that some features depend on the data your network equipment supplies. In other words, discovery is only as good as the sources you feed it, and no single source finds everything.

### Asset management starts with knowing what you have

The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) says that systems tend to grow organically and become hard to understand, that incidents can result from not fully understanding an environment, and that knowing about all assets is a fundamental precursor to addressing the resulting risks. It also asks organisations to consider how asset information serves uses beyond security, such as software licensing, finance and service delivery. The limits of conventional registers are explored in [why IT asset registers miss cloud and SaaS services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/).

### Warning signs

- The application list is built from purchase orders and IT-managed installs only.
- Expense claims and company card statements show monthly subscriptions for tools IT has not heard of.
- Staff share files, recordings or customer details through free accounts on personal email addresses.
- When someone leaves, IT disables the main accounts but cannot say what else they used. See [former employees retaining system access](/impact/former-employees-retaining-system-access/).
- Teams answer "do we use AI?" with "a few of us, I think".

## Problem owner and why-now trigger

The IT manager or head of information systems owns the inventory, and the information officer under POPIA owns the accountability for personal information held in those tools. The COO and CFO share budget ownership because shadow tools turn up as expense claims, card payments and departmental budgets.

The trigger is increasingly the spread of AI tools. A team connects an assistant to email, a meeting recorder to the calendar, or uploads a customer spreadsheet to a chatbot, and the business discovers it has shared personal information with a supplier it never assessed. Customer security questionnaires, a POPIA review, a cyber insurance renewal or a staff exit are other common prompts.

## Economic consequence

Unlisted applications carry money, data and risk with no owner. Subscriptions overlap and renew unnoticed. Data is spread across suppliers that were never assessed, which complicates responding to a data subject's request or a security incident, and the business cannot show a regulator or customer that it knows where personal information goes. Departing employees keep access to accounts nobody remembers. The cost pattern is covered in [software bought without approval and the cost of shadow IT](/impact/software-bought-without-approval-shadow-it-cost/).

## Root cause

- **Inventory built from the buying process.** Anything bought outside it is invisible by design.
- **A slow or unclear approval route.** If approval takes weeks, people work around it.
- **Free tiers and personal cards.** No purchase order is ever raised.
- **No discovery source.** Nobody reviews network, identity or expense data for evidence of tools in use.
- **Policy that says no without offering an alternative.** A blanket ban pushes use out of sight.

## Practical intervention

1. **Triangulate from several sources.** Compare the existing list with expense claims and card statements, single sign-on and email sign-up notices, browser extensions, and firewall or proxy logs where available. Each source finds tools the others miss.
2. **Ask people openly.** Run a short, non-punitive survey: which tools do you use for work, what for, and what customer or staff data goes in? Amnesty works better than enforcement for the first pass.
3. **Record only what you need.** For each application note the owner, purpose, data types, number of users, cost and whether it is approved, tolerated or to be retired.
4. **Sort by risk, not by volume.** Review first the tools that hold personal information, customer data or financial records, and those with AI features that retain or train on inputs.
5. **Offer a fast lane.** Publish a simple request route with a stated turnaround, and a list of approved tools for common needs such as note-taking and writing.
6. **Make it recurring.** Repeat discovery each quarter and add an application check to onboarding and offboarding; see [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/).

### Trade-offs

Network-based discovery can feel like surveillance and does not see tools used on personal devices or home networks. Blocking aggressively may remove tools people genuinely need. Start with visibility and conversation, and block only where the risk is clear.

### An illustrative example

Illustrative: a Cape Town logistics company with 60 office staff had an inventory of 38 applications. Cross-checking card statements and a one-page staff survey added 21 more, including three AI assistants and a free file-transfer service holding customer delivery details. The information officer approved two, retired the rest, and added the approved tools to a shared list that new starters receive on day one.

## Diagnostic questions

- How was your current application list built, and what would it never find?
- When did you last compare it with expense claims and card payments?
- Which AI tools are staff using with customer or staff information?
- Who can approve a new tool, and how long does it take?
- If a key employee left tomorrow, which of their accounts would you not know about?

## What good looks like

The inventory is built from several sources and refreshed regularly. Every application has an owner, a purpose and a data classification, and shadow tools are either brought into the open or retired. Staff know how to ask for a new tool and get an answer quickly. The conversation about AI tools starts from facts about what is already in use.

## Where Mellorca fits

A [digital systems audit](/services/digital-systems-audit/) can build the real inventory from contracts, spending, sign-in records and interviews. [Digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work then decides which tools to standardise, and digital operations improvement can set up the request route and the recurring review.

## Method note

The Microsoft figures come from a vendor's own documentation and large-organisation data, and the NCSC guidance is a UK reference model; neither is a statement of what South African law requires. The example is illustrative rather than a client case.
