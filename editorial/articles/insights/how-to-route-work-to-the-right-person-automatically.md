---
hub: insights
record_id: INS-309
slug: how-to-route-work-to-the-right-person-automatically
title: How to Route Work to the Right Person Automatically
description: Automatic routing works when the rules are short, ordered and honest about exceptions. Learn how to decide who gets what, handle capacity and absence, and keep the rules owned.
lead: Automatic routing works when the rules are short, ordered and honest about exceptions. Learn how to decide who gets what, handle capacity and absence, and keep the rules owned.
category: Workflow Design
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Workflow Design
sources:
  - Set up unified routing for records | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-record-routing
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Triggers - Power Automate | https://learn.microsoft.com/en-us/power-automate/triggers-introduction
related:
  - What Should Trigger After a Customer Says Yes? | /insights/what-should-trigger-after-a-customer-says-yes/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - How to Design a Customer Onboarding Workflow That Scales | /insights/how-to-design-a-customer-onboarding-workflow-that-scales/
summary: Automatic routing works when the rules are short, ordered and honest about exceptions. Learn how to decide who gets what, handle capacity and absence, and keep the rules owned.
layout: plain
---
At a Johannesburg logistics firm, every customer query lands in one shared inbox. Whoever notices a message first replies, or forwards it, or leaves it for someone else. A customs question sits for two days because the two people who understand customs assume the other is on it. Meanwhile a junior spends the morning on a pricing query that the account manager could have settled in a minute. Nothing is broken in the technical sense. The work simply has no route.

Routing work automatically means a system decides who receives each item, using rules the business has written down. Done well, it cuts waiting and stops items being dropped. Done badly, it sends the wrong work to the wrong person faster than before. This article covers how to design routing that sends work to the right person, how to cope with absences and overload, and how to keep the rules honest.

## Start with what decides the right person

Before configuring any tool, ask a simple question: when a human routes this work, what do they look at? The answers are almost always a short list of attributes.

- **Type of work.** Billing question, delivery problem, new enquiry, complaint, compliance request.
- **The customer or account.** Named accounts often belong to a specific manager, or to a tier of service.
- **Urgency or value.** A contract renewal worth a year of revenue should not wait behind a request for a brochure.
- **Skill or authority.** Some items need a qualified person or someone who can approve spend.
- **Location or language.** A branch, a province, or a customer who writes in Afrikaans or isiZulu.

Write these on one page. If the experienced person in your team cannot explain how they would route a typical item, the rules do not yet exist in a form that software can follow. This is the same discovery that comes from mapping a process before automating it: the real routing often lives in someone's head.

## Keep the rules simple and ordered

A routing design should be a short, ordered list of tests, with the first match deciding the outcome. Business software works this way for good reason. Microsoft's documentation on [setting up unified routing for records](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-record-routing) describes intake rules that determine which workstream an incoming item uses, and notes that the order in which those rules are evaluated can be changed. It also describes work classification rules and rules that route to queues, each as separate layers. Whether or not you use that product, the structure is worth copying: first decide which kind of work it is, then decide which queue it belongs to, then decide which person in that queue gets it.

A typical order might be:

1. Is this a named key account? Send to that account's manager.
2. Is it flagged urgent or above a value threshold? Send to the senior queue.
3. What type of work is it? Send to the queue for that type.
4. Anything else goes to a general queue that someone checks every day.

The last rule matters most. Every routing design needs a catch-all, so an item that matches nothing lands somewhere visible instead of nowhere. Most routing failures happen to items that the designer never imagined.

## Decide between pushing and pulling

There are two basic ways to hand work out. In a push model, the system assigns each item to a named person. In a pull model, items wait in a shared queue and people take the next one. The same Microsoft documentation lets an administrator choose between push and pick when creating a workstream, which reflects how common both are.

Push suits work that needs an owner from the first minute, such as a named client's problem. Pull suits high-volume, similar work where any capable person can proceed, and it adapts naturally to absences because whoever is present takes the work. A common hybrid is to push key accounts and pull everything else. Pushing everything creates the risk that an item is assigned to someone who is out of the office, and it sits there politely until they return.

## Account for capacity, skills and availability

Routing that ignores workload sends the most items to your best people until they burn out. The Microsoft routing documentation covers options that are worth borrowing as ideas: setting capacity, either as a number of units per person or by a profile; choosing which presence states allow someone to receive work; and matching on skills, with a choice between exact match and closest match. For a smaller business, those translate into three practical rules.

- Cap how many open items one person can hold before new ones go elsewhere.
- Do not route to someone marked as away, on leave or off shift. Use a simple calendar or status field to check.
- Where a specific skill is required, name a backup person with the same skill, so one absence does not freeze a whole category of work.

The documentation also notes a safeguard that is easy to overlook: if a representative lacks permission to access an assigned item, the system stops the assignment. Routing to a person who cannot actually open the item is a classic source of silent stalls. Test it with real accounts, not just the administrator's.

## Plan for the item that fits no rule

Exceptions are not a rare event. They are the normal result of real customers and real work. Build a visible exception route from the start: a queue with a named owner who reviews it at a set time every day, and a rule that anything sitting in it for more than a working day is escalated. This is covered in more depth in [how to build automation that expects exceptions from the start](/insights/how-to-build-automation-that-expects-exceptions-from-the-start/). Watch the size of that queue over time. If it keeps growing, your rules are not keeping pace with the work, a pattern described in [why human exception queues grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/).

## Where approvals fit

Some items should be routed to a person for a decision and not for processing. Workflow tools commonly include approval steps for this. Microsoft's guide to [approvals in Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) explains that approvers are notified, review and act on the request, and that you can require everyone to approve or accept the first response. Choose carefully. Requiring everyone is slower, and a first-to-respond rule is faster but lets one person decide. Long approval chains are a frequent cause of delay, as described in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).

## Keep ownership visible

Routing answers who gets the item. It does not answer who is responsible for the routing rules themselves. Name one person who owns the rules, reviews them each quarter and changes them when the team or the work changes. When staff leave or reorganise, rules that mention a specific person quietly break. Route to roles and queues where you can, and to individuals only where the account demands it, as covered in [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/).

## Practical next actions

1. Ask your most experienced person to route twenty recent items aloud, and write down the attributes they look at each time.
2. Turn those attributes into an ordered list of no more than six rules, ending with a catch-all queue that is checked daily.
3. Decide for each type of work whether it is pushed to a named person or pulled from a shared queue.
4. Set a cap on open items per person, and name a backup for every skill that only one person holds.
5. Test the rules with ten real past items, using ordinary user accounts, and confirm each lands with someone who can open it.
6. Name an owner for the rules and put a quarterly review in the calendar, including a count of items that reached the catch-all queue.
