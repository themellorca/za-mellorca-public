---
hub: insights
record_id: INS-090
slug: how-crm-ownership-should-work-roles-decisions-and-permissions
title: How CRM Ownership Should Work
description: A CRM that belongs to everyone belongs to no one. Here is how to split ownership into four clear roles, with decision rights and a simple routine to keep them alive.
lead: A CRM that belongs to everyone belongs to no one. Here is how to split ownership into four clear roles, with decision rights and a simple routine to keep them alive.
category: CRM and Customer Systems
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: CRM and Customer Systems
sources:
  - Predefined security roles for Sales | https://learn.microsoft.com/en-us/dynamics365/sales/security-roles-for-sales
  - Who makes an application to process Special Personal Information? | https://www.inforegulator.org.za/popia/
  - Welcome to Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/overview
related:
  - When to Reconfigure a CRM and When to Replace It | /insights/when-to-reconfigure-a-crm-and-when-to-replace-it-a-decision-guide/
  - How to Decide Which Software to Keep | /insights/how-to-decide-which-software-to-keep/
  - How to Eliminate Repeated Data Entry | /insights/how-to-eliminate-repeated-data-entry-one-source-of-truth-per-fact/
summary: A CRM that belongs to everyone belongs to no one. Here is how to split ownership into four clear roles, with decision rights and a simple routine to keep them alive.
layout: plain
---
A customer calls to complain that nobody followed up on a quote. The sales rep says the lead was assigned to someone who left in March. The office manager says she only updates the CRM when she remembers. The owner says the system "belongs to everyone". When a system belongs to everyone, the practical result is that nobody fixes the duplicate records, nobody retires the dead pipeline stage, and nobody can say who is allowed to change what.

CRM ownership is not a single job title. It is a set of separate responsibilities that need separate answers. This article breaks them apart and suggests a sensible split for a South African business of ten to two hundred people.

## Why "everyone owns it" fails

Shared ownership works for a kitchen and fails for a customer database. Three things go wrong. First, changes accumulate without review: one person adds a field for a campaign, another adds a near-identical one for a tender, and within a year the record layout reflects the history of individual preferences rather than the way the business sells. Second, nobody is accountable for quality, so duplicates, missing contacts and stale deals pile up. Third, nobody can answer a basic question such as who may export the full customer list.

That last question matters legally as well as operationally. A CRM holds personal information about customers and prospects, and the [Protection of Personal Information Act](https://www.inforegulator.org.za/popia/) places duties on the responsible party for the quality of that information and for the security of its processing. A business that cannot say who is responsible for the system cannot easily show that it meets those duties.

## Split ownership into four roles

Instead of searching for one owner, assign four roles. In a small firm one person may hold several of them, but the roles should still be written down separately.

- **Business owner:** a senior person, usually the head of sales or the managing director, who decides what the CRM is for and what it is not for. This person approves changes to stages, definitions and reporting, and settles disputes about how the sales process should be recorded.
- **System administrator:** the person who makes the configuration changes the business owner has approved: fields, layouts, automations, user set-up. This can be an internal power user or an outside provider, but it must be a named person, with a named backup.
- **Data steward:** the person responsible for the quality of the records themselves. They watch for duplicates, incomplete accounts and records with no owner, and they run the periodic clean-up. This is often the most neglected role, and it is the one that most affects whether the team trusts what they see.
- **Record owners:** each salesperson, account manager or service agent owns the accuracy of the records assigned to them. This is the everyday layer, and it only works if every record has exactly one named owner at all times.

## What each role decides

Ownership becomes real when it comes with decision rights. A short table in a shared document is enough. For each common change, write who proposes it, who approves it and who carries it out.

| Decision | Proposes | Approves | Carries out |
| --- | --- | --- | --- |
| New pipeline stage or stage definition | Any sales user | Business owner | Administrator |
| New custom field | Any user | Business owner, after a check for an existing field | Administrator |
| Merge or delete duplicate accounts | Data steward | Data steward, with the record owner informed | Data steward |
| Reassign records when someone leaves | Line manager | Business owner | Administrator |
| Export of customer data | Requesting manager | Business owner | Administrator |

The point of the table is not bureaucracy. It is that when someone says "can we add a field for this?", the answer is a known route rather than a debate.

## Permissions follow the roles

Once the roles exist, the system's permissions should reflect them. Most CRM platforms let you control who can read, create, edit, delete and export records, and what each person can see. Microsoft's documentation on [security roles in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/security-roles-for-sales) shows how access is grouped into roles that can be assigned to users, which is the general pattern across the better-known products. Whatever platform you use, apply the same principle: give each person the access their role needs, and keep administrator rights and bulk export rights to the few people named above.

A common mistake is to give everyone administrator rights during the first month to "make it easier" and never take them away. The result is a system where anyone can change a stage definition at two on a Friday afternoon, and nobody finds out until the monthly report looks wrong.

## Handle departures and absences

The most predictable ownership failure is a person leaving. Records owned by that person become orphans, and open deals sit untouched. Build the response into the exit process: the line manager lists the person's open records, the business owner decides who inherits them, and the administrator reassigns them and disables the account on the last day. Do the same for leave. If a salesperson is away for two weeks, a named colleague should cover their open deals, rather than leaving customers to wait. The same logic appears in our article on [designing workflows that survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/).

## Keep ownership alive with a short routine

Ownership written once and never revisited decays. A light routine keeps it working.

- Monthly, the data steward reports how many records have no owner, how many accounts were created without a contact, and how many open deals have had no activity for a set number of days.
- Quarterly, the business owner reviews stages, required fields and reports, and retires what no longer matches the way the team sells.
- Twice a year, the administrator reviews user accounts and permissions against the current staff list.

None of these takes more than an hour or two for a small business, and each addresses a specific form of decay. They also connect to the broader point made in [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/): a system without a named owner drifts, and the cost shows up as lost trust rather than as an invoice.

## Signs your ownership model is working

You can test it without any tooling. Ask five people who decides whether a new field is added; the answer should be the same each time. Open ten random records and check that each has a named owner who is still employed. Ask what happens to a customer's open quote when the salesperson resigns. If the answers are clear and consistent, ownership exists. If they differ, you have found the first thing to fix. For a wider view of how the system fits the business, see [the five jobs a CRM should do for a growing business](/insights/the-five-jobs-a-crm-should-do-for-a-growing-business/).

## Practical next actions

1. Name the business owner, administrator and data steward for your CRM this week, and write the three names in a shared document that everyone can see.
2. Run a report of records with no owner or with an owner who has left, and assign each one to a named person.
3. Draft the decision table above for your five most common changes and agree it with the sales lead.
4. List everyone with administrator or bulk export rights and remove those rights from anyone whose role does not require them.
5. Add two lines to your leaver checklist: list open records, and reassign them before the last working day.
