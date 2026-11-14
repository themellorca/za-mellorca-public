---
hub: insights
record_id: INS-284
slug: how-to-route-new-customers-to-the-right-team-automatically
title: How to Route New Customers to the Right Team Automatically
description: Manual triage of new enquiries is slow and fragile. Here is how to design routing rules that assign every customer an owner quickly.
lead: Manual triage of new enquiries is slow and fragile. Here is how to design routing rules that assign every customer an owner quickly.
category: Process Design
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Process Design
sources:
  - Create workflows | https://knowledge.hubspot.com/workflows/create-workflows
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - Section 10 Minimality - POPIA | https://popia.co.za/section-10-minimality/
related:
  - How to Handle Work That Does Not Fit the Standard Process | /insights/how-to-handle-work-that-does-not-fit-the-standard-process-without-breaking-it/
  - Why Processes Break Between Departments | /insights/why-processes-break-between-departments-and-how-to-close-the-gaps/
  - How to Route Work to the Right Person Automatically | /insights/how-to-route-work-to-the-right-person-automatically/
summary: Manual triage of new enquiries is slow and fragile. Here is how to design routing rules that assign every customer an owner quickly.
layout: plain
---
A new enquiry arrives through the website at 16:40 on a Friday. It is a mid-sized company in Durban asking about a multi-site contract. The form goes to a shared inbox, where it sits until Monday. Someone in the small accounts team picks it up first, realises it belongs to the corporate sales team, forwards it, and by Tuesday the prospect has already spoken to a competitor.

Routing new customers to the right team by hand is slow, uneven and dependent on whoever happens to be watching the inbox. Automatic routing removes that dependence. This article explains how to design routing rules that work, what to decide before you build them, and where a person should still stay involved.

## Why manual routing fails as you grow

At five people, everyone knows who handles what, and a quick message sorts out any confusion. At fifty, the knowledge lives in a few heads and a few old emails. New staff do not know the rules. People on leave leave gaps. The person who triages becomes a bottleneck and, worse, becomes a single point of failure.

The cost is rarely visible as a line item. It shows up as slower first responses, customers who are asked the same questions twice, and work that lands with a team that cannot handle it. Our article on [where customer information gets lost during onboarding](/insights/where-customer-information-gets-lost-during-onboarding/) shows how much damage is done in the first few days of a relationship.

## Decide the routing questions first

Automation can only apply rules that someone has written down. Before touching any software, answer these questions with the people who currently do the sorting.

- **What are the destinations?** List the teams or individuals who can receive a new customer, such as corporate sales, small business sales, support, partnerships and finance.
- **What facts decide the destination?** Typical facts are company size, product of interest, province, existing customer status, deal value and language.
- **What happens when facts conflict or are missing?** Define a default owner so nothing is left unassigned.
- **Who covers when the owner is away?** Set a backup for each destination.
- **How fast must the first response be?** Agree a target, such as the same business day, and decide who is alerted when it is missed.

Most of the effort sits in these conversations, not in the configuration. If the sales team cannot agree what separates a corporate lead from a small-business one, no tool can settle it for them.

## Collect the information routing depends on

Rules are only as good as the data they read. If you route by company size but the form does not ask for it, the system will default every lead to the same queue. Review the enquiry form and add only the fields your rules actually use. Use drop-downs for anything the rules compare, because free text such as "Gauteng", "GP" and "Joburg" will not match a rule reliably.

Keep the form short. Each extra question reduces completion, and our article on [CRM tasks worth automating first](/insights/crm-tasks-worth-automating-first/) points out that routing and assignment are among the easiest steps to automate precisely because the inputs are few and the outcomes are clear. Where a fact can be looked up instead of asked, such as whether the email domain already belongs to an existing customer, let the system check it.

## Write rules that are simple and ordered

A routing rule set works best as an ordered list, read from the top, where the first matching rule wins. A short example:

1. If the email domain matches an existing customer, send to that customer's account manager.
2. If the enquiry concerns support or a fault, send to the support queue.
3. If the expected value is above an agreed threshold or the company has more than a set number of sites, send to corporate sales.
4. If the province is one served by a regional team, send to that team.
5. Otherwise, send to the general sales queue.

The final rule matters most. It guarantees that every enquiry has an owner. Keep the list short, because every extra rule is another one to maintain and another one that can contradict the rest. Where two teams share a queue, rotate assignments in turn so that work spreads evenly, but only where the people are interchangeable.

## Use the tools you may already have

Most modern CRMs and automation platforms support this kind of logic. HubSpot's documentation on [creating workflows](https://knowledge.hubspot.com/workflows/create-workflows) describes how a trigger, such as a form submission, can be followed by conditions and actions, including setting a property or assigning an owner. Microsoft's overview of [cloud flows in Power Automate](https://learn.microsoft.com/en-us/power-automate/overview-cloud) explains how an event in one application can start a chain of steps in others, which suits businesses that capture enquiries in one tool and manage customers in another. The exact feature names differ between products, so check what your own subscription includes before designing around a capability.

Whatever you use, notify the new owner immediately, in a place they actually look, and include the details of the enquiry so they do not need to open three screens. Add a task with a due date. A routed lead without a deadline is only a lead in a different queue.

## Keep a person in the loop where it counts

Automatic routing is well suited to clear-cut cases. It is poor at nuance. A large strategic prospect, a customer with an unresolved complaint, or an enquiry that mentions a regulatory deadline may deserve a human look before assignment. Create a review queue for cases that the rules cannot classify with confidence, or that exceed a set value, and give someone responsibility for clearing it daily. Our piece on [CRM actions that should stay with a person](/insights/crm-actions-that-should-stay-with-a-person/) offers guidance on drawing that line.

Personal information is also in play. Routing sends a prospect's details to specific people, so only the teams that need them should receive them. Under POPIA, the [minimality principle](https://popia.co.za/section-10-minimality/) expects personal information to be adequate, relevant and not excessive for the purpose it is processed for, which is another reason to ask only for the fields the rules use.

## Test, measure and adjust

Before switching on a rule set, replay thirty recent enquiries through it on paper and check where each would have gone. Count how many a person would have routed differently. Disagreements show where the rules are unclear. After launch, review weekly at first.

- How many enquiries were routed to the default queue, and why?
- How many were reassigned by hand after routing?
- What is the time from enquiry to first response, by team?
- Were any left unassigned or unopened past the target?

A high rate of manual reassignment tells you which rule is wrong. A pile in the default queue tells you which rule is missing. Treat both as improvements to the rules, not failures of the people.

## Practical next actions

1. List your routing destinations and, for each, the two or three facts that decide whether a customer belongs there.
2. Write the rules as an ordered list ending with a default owner, and name a backup for each destination.
3. Change the enquiry form so the fields the rules compare are drop-downs rather than free text, and remove fields no rule uses.
4. Configure an automatic assignment with an immediate notification and a first-response deadline in your CRM or automation tool.
5. Replay thirty past enquiries through the rules, fix the mismatches, and then review reassignments and response times every week for the first month.

Done well, routing makes a customer's first experience of your business fast and consistent. It also frees the people who used to sort the inbox to do the work they were hired for. For a wider view of the stages that follow, see our guide to [designing a customer onboarding workflow that scales](/insights/how-to-design-a-customer-onboarding-workflow-that-scales/).
