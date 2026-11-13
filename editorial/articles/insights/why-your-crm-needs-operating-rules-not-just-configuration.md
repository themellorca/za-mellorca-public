---
hub: insights
record_id: INS-096
slug: why-your-crm-needs-operating-rules-not-just-configuration
title: Why Your CRM Needs Operating Rules, Not Just Configuration
description: Configuration controls what the software allows. Operating rules decide what people actually do with it: when to log, who closes, what counts as qualified. Here is how to write a short rulebook the team will follow.
lead: Configuration controls what the software allows. Operating rules decide what people actually do with it: when to log, who closes, what counts as qualified. Here is how to write a short rulebook the team will follow.
category: CRM and Customer Systems
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: CRM and Customer Systems
sources:
  - https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales | https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales
  - https://learn.microsoft.com/en-us/dynamics365/sales/security-roles-for-sales | https://learn.microsoft.com/en-us/dynamics365/sales/security-roles-for-sales
  - https://www.inforegulator.org.za/popia/ | https://www.inforegulator.org.za/popia/
summary: Configuration controls what the software allows. Operating rules decide what people actually do with it: when to log, who closes, what counts as qualified. Here is how to write a short rulebook the team will follow.
layout: plain
---
A recruitment agency in Sandton pays a consultant to configure its new CRM. The stages are set up, the fields are defined, the permissions are in place and the dashboards look good. Six months later, the owner asks why two consultants have wildly different conversion rates. The answer turns out to be that one logs every speculative call as a lead and the other only logs candidates she has met. Both are using the system exactly as configured. They are not using it the same way.

Configuration tells the software what is possible. It cannot decide, on its own, what the team should do in the many situations where the software allows several choices. Those decisions are operating rules, and most businesses never write them down. The result is a CRM that is technically correct and operationally inconsistent.

## The difference between configuration and operating rules

Configuration covers things like which fields exist, which stages a deal moves through, which fields are required, who can see which records and which automations run. Operating rules cover the human decisions around them:

- When does an enquiry become a lead, and when does a lead become an opportunity?
- Within what time must a meeting or call be logged?
- Who may close an opportunity as lost, and what reason must they give?
- When is a customer record handed to another owner?
- What must be true before a deal is marked as won?
- What should go in notes, and what should never go there?

Vendors are open about this boundary. Microsoft's walkthrough of [the sales process in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales) notes that actual processes and terminology vary by organisation and that your organisation may provide further training for your customised system. The software provides the stages; the business has to define what they mean in practice.

## Why missing rules cause so much damage

Without operating rules, every user invents their own. That produces inconsistent data, which produces reports nobody trusts, which leads people to keep their own spreadsheets, which leaves the CRM even less complete. We describe this loop in [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/).

Missing rules also cause disputes. Who owns a customer who contacted two salespeople? Whose target does a renewal count against? When a deal is lost, whose job is it to record why? If the rules are not written, these questions get settled by whoever argues hardest, and the CRM records the outcome of the argument rather than the facts.

## What a CRM operating rulebook contains

Keep it short; two to four pages is plenty for most small and mid-sized businesses. A useful rulebook usually has these sections.

### Definitions

What counts as a lead, a qualified opportunity, an active customer and a lost deal, written as observable facts. "Qualified" might mean the customer has confirmed a need, a budget range and a timeframe, and you have spoken to someone who can decide.

### Timeliness

How soon activity must be recorded. "Same working day" is a common and achievable standard. A CRM updated weekly is a history book, not a working tool.

### Ownership and transfer

Who owns a new enquiry, how conflicts are resolved and what happens when someone leaves or territories change. Our article on [how CRM ownership should work](/insights/how-crm-ownership-should-work-roles-decisions-and-permissions/) covers the structure behind this.

### Stage movement

What must be true for a deal to enter each stage and who may move it backwards. Include the rule for stale deals: how long without activity before a deal must be updated or closed.

### Notes and personal information

What belongs in notes and what does not. Notes are often where sensitive personal information ends up casually: health remarks, family details, opinions about individuals. South Africa's data protection law places limits on processing personal information, and the Information Regulator's [POPIA resource page](https://www.inforegulator.org.za/popia/) is a starting point for understanding those obligations. A simple rule such as "record facts relevant to the business relationship only" prevents a lot of risk.

### Access

Which roles may see, edit, export and delete which records. Configuration enforces this, but the rulebook explains the reasoning so that requests for exceptions can be judged consistently. Microsoft's documentation on [predefined security roles for Sales](https://learn.microsoft.com/en-us/dynamics365/sales/security-roles-for-sales) shows how a typical CRM separates administrators, sales managers, salespeople and functional roles such as forecast or sequence managers. Map your rules to the roles your system offers.

### Changes

Who may request and approve new fields, stages, automations and reports, so the configuration stays aligned with the rules.

## Write rules first, then configure to support them

The best order is rules first, configuration second. Once the team agrees what "qualified" means, the system can enforce it with required fields at the right stage. Once the team agrees the stale-deal rule, the system can flag deals that break it. Configuration built without agreed rules tends to encode one person's assumptions, a pattern we discuss in [why software configuration should follow workflow design](/insights/why-software-configuration-should-follow-workflow-design/).

Not every rule needs to be enforced by the software. Some are better handled by managers in regular reviews. Enforce rules in the system when breaking them causes real harm and the rule is clear enough to automate; leave the rest to management and coaching.

## Make the rules stick

Write the rulebook with the people who use the CRM, not for them. They know where ambiguity causes trouble. Keep it in the place people already look, linked from the CRM itself, and use plain language. Our guide to [writing down a workflow so that it gets used](/insights/writing-down-a-workflow-so-that-it-gets-used/) applies directly.

Then use the rules in management. When a pipeline review finds a deal in the wrong stage, refer to the rule rather than to personal preference. Review the rulebook every six months, and update it when the business changes how it sells or serves customers.

## Practical next actions

1. List the decisions your team makes in the CRM that the configuration does not settle, such as qualification, logging timeliness, ownership conflicts and lost reasons.
2. Write definitions for lead, qualified opportunity, active customer and lost deal as observable facts.
3. Agree a same-day logging standard and a stale-deal rule, and decide which are enforced by the system and which in reviews.
4. Add a rule on what belongs in notes, focused on facts relevant to the business relationship.
5. Map access rules to the security roles your CRM provides and record who approves exceptions.
6. Publish the rulebook inside or alongside the CRM and review it every six months with the people who use it.
