---
hub: patterns
record_id: PAT-105
slug: when-lead-routing-depends-on-someone-checking-an-inbox
title: When lead routing depends on someone checking an inbox
description: When every enquiry waits in a shared mailbox for someone to route it, lead speed and fairness depend on one person. Written routing rules remove that.
lead: When every new enquiry waits in a shared mailbox until someone reads it and decides who should handle it, the speed and fairness of lead distribution depend on one person's attention. Written routing rules remove that dependency.
category: Sales, Leads & Revenue Handoffs
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Sales, Leads & Revenue Handoffs
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: New enquiries from the website, email and other channels land in a shared mailbox, and they are only allocated to a salesperson when a specific person reads the inbox and forwards each one.
primary_identification: Implicit, person-dependent lead routing with no written assignment rules, cover or escalation.
commercial_value_dimensions: Revenue, conversion, response speed, sales capacity and fairness of allocation
sources:
  - Work assignment overview | https://learn.microsoft.com/en-us/dynamics365/sales/work-assignment-intro
  - About shared mailboxes in Microsoft 365 - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
related:
  - The cost of delayed handoffs after a deal is won | /patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/
  - Why salespeople spend time updating systems instead of selling | /patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/
  - When the next step waits for someone to check another system | /patterns/when-the-next-step-waits-for-someone-to-check-another-system/
  - Forms that email instead of update: The cost of slow replies and lost enquiries | /impact/website-forms-emailing-instead-of-updating-systems-response-cost/
summary: When every new enquiry waits in a shared mailbox until someone reads it and decides who should handle it, the speed and fairness of lead distribution depend on one person's attention. Written routing rules remove that dependency.
layout: plain
---
## Observable condition

Website enquiries go to info@. So do emails from the directory listing, replies to the newsletter and forwarded messages from the switchboard. One person, often the office manager or the sales administrator, reads the mailbox several times a day, decides who should handle each enquiry and forwards it with a short note. Sometimes they phone the salesperson to make sure it was seen.

When that person is in a meeting, on leave or busy with month-end, enquiries wait. When they are unsure who covers a region or product, they hold the message until they can ask. Some enquiries are answered twice because two people saw them; some are never answered because everyone assumed someone else had taken them.

An illustrative example: an Eastern Cape company that installs commercial solar and backup power receives enquiries through its website, a listings site and direct email. All of them arrive in one mailbox read by the receptionist, who forwards residential enquiries to one consultant and commercial ones to the sales manager. When she was away for a week, the mailbox was checked once a day by whoever remembered, and the sales manager later found several commercial enquiries that had received no reply.

## Realisation

The business has a lead routing system. It simply is not written down, and it runs on one person's attention. The rules, such as which region goes to whom, which products need a specialist and who is on leave, exist in that person's head. The timing depends on how often they open the mailbox. The audit trail is whatever they remember.

This matters because the first hours after an enquiry are usually when a prospect is most engaged and most likely to be comparing suppliers. An enquiry that waits in an unread mailbox overnight is not neutral; it is losing value while it waits. And because the wait happens before the lead is assigned to anyone, no salesperson is accountable for it, and no report shows it.

[Shared mailboxes](https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes) are designed for addresses that several people need to use, such as information or support addresses. They are good at receiving mail. They are not designed to decide who should own each message, enforce response times or show a manager which enquiries are still unclaimed.

**Realisation prompt:** if your sales inbox was not opened for a full working day, would anyone notice before a customer complained?

## Identification

This is a lead-routing design problem. The visible symptom is uneven response times and occasional lost or duplicated enquiries. The common assumption is that the person checking the inbox needs to be more diligent, or that the sales team should check it themselves. The structural cause is that allocation rules are implicit, held by a person rather than defined in a system, with no automatic assignment, cover or escalation.

It sits just before the problems in related Patterns. [When a lead enters the CRM but nobody acts](/patterns/when-a-lead-enters-the-crm-but-nobody-acts/) deals with assigned leads that stall. [Why good leads disappear between marketing and sales](/patterns/why-good-leads-disappear-between-marketing-and-sales/) deals with the handoff between functions. This Pattern is about the step before ownership exists at all: the inbox, and the person who acts as the routing engine.

## Diagnosis

- **Unwritten rules.** Allocation by region, product, customer size or existing relationship is known to the router but not documented anywhere.
- **Attention-dependent timing.** Enquiries are distributed only when someone opens the mailbox, so speed varies with that person's day.
- **No cover.** Leave, illness and busy periods have no defined backup, so routing simply slows down or stops.
- **No unique owner.** Forwarding an email does not create a record that one person owns the enquiry. Replies happen inside individual mailboxes, invisible to managers.
- **Mixed traffic.** Sales enquiries share the mailbox with supplier mail, invoices, job applications and spam, so new business competes for attention with everything else.
- **No measurement.** Nobody knows the time from enquiry to first reply, because the clock starts in a mailbox no system watches.

## Commercial impact

The commercial value at stake is revenue, conversion, response speed, sales capacity and fairness of allocation.

Revenue and conversion suffer when enquiries wait or go unanswered; the scale of that leakage is explored in [unassigned sales enquiries and leads going cold](/impact/unassigned-sales-enquiries-leads-going-cold/) and [the revenue cost of slow lead response](/impact/slow-sales-lead-response-revenue-cost/). Response speed becomes a function of one person's workload rather than a designed service level. Sales capacity is distorted when allocation is uneven: some salespeople are overloaded while others wait, and specialist enquiries reach generalists. Fairness matters too. When salespeople suspect allocation depends on who the router talks to most, trust in the process erodes. And the router's own capacity is consumed by a task that a clear rule could perform.

## Common misidentification

The first response is often to give every salesperson access to the shared mailbox and let them pick up enquiries. That removes the single point of delay but replaces it with a race, duplicate replies and leads that nobody takes because they look unattractive.

The second is to buy a CRM and assume routing comes with it. Most CRMs can assign leads automatically, but only once someone has defined the rules and connected the website forms and mailboxes to it. Without that, the CRM becomes another place the router must update by hand.

## Possibility

In a better state, every enquiry creates a record the moment it arrives, whether from a website form, an email address or a listing site. Written assignment rules allocate it immediately, by region, product or customer type, with rotation where several people cover the same segment. If the assigned person is on leave, the rule skips to their cover.

If the enquiry is not acknowledged within an agreed time, it escalates to the sales manager. Sales platforms describe this as combining segments that group incoming records, sequences that set out the next steps, and assignment rules that allocate records to sellers automatically. Simpler workflow tools can achieve the same basics in a smaller business. The receptionist or administrator handles only the enquiries the rules cannot classify.

For the solar installer, that might mean separate website forms for residential and commercial work, each creating a lead assigned automatically, with a reminder after two working hours and escalation after four.

## Intervention

1. **Write down the current rules.** Sit with the person who routes enquiries and record how they decide who gets what, including the exceptions.
2. **Measure the wait.** For a month, record when each enquiry arrived, when it was forwarded and when the customer received a first reply.
3. **Separate sales traffic.** Give new-business enquiries their own entry points, such as dedicated forms or addresses, rather than a general mailbox.
4. **Create a record on arrival.** Connect forms and the sales address so that every enquiry becomes a lead with a timestamp. The Insight [why shared inboxes become operational bottlenecks](/insights/why-shared-inboxes-become-operational-bottlenecks/) explains the broader principle.
5. **Automate assignment with cover.** Turn the written rules into automatic assignment, including leave cover and rotation.
6. **Set and watch a response standard.** Agree a first-response time, escalate breaches automatically, and review unassigned or unanswered enquiries weekly.

## Diagnostic questions

- Who decides which salesperson receives each new enquiry, and are those rules written down?
- What happens to enquiries when that person is on leave?
- Do you know the average time from enquiry to first reply?
- Can a manager see, right now, which enquiries have not been claimed?
- Does every enquiry become a record with a single named owner?

## Bottom line

When lead routing depends on someone checking an inbox, the business's first response to new demand runs on one person's attention and memory. The rules exist, but only in their head, and the delay sits before any salesperson is accountable. Writing down the rules, creating a record for every enquiry on arrival and assigning it automatically with cover and escalation turns new demand into owned work within minutes rather than whenever the mailbox is next opened.
