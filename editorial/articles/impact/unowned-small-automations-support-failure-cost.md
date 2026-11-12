---
hub: impact
record_id: CPS-253
slug: unowned-small-automations-support-failure-cost
title: Dozens of Small Automations, No Owner: The Support and Failure Cost
description: Small low-code automations save time until their builders move on. Without an inventory and named owners, failures become investigations and the savings leak away.
lead: Small low-code automations save time until their builders move on. Without an inventory and named owners, failures become investigations and the savings leak away.
category: Business Automation
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Dozens of small automations with no inventory and no accountable owner
primary_cost_mechanism: Failure and investigation labour, duplicated effort, licence waste and data risk
sources:
  - Change the owner of a cloud flow in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/change-cloud-flow-owner
  - Manage orphaned flows when owner leaves organization - Power Automate | https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org
  - Use core components - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/coe/core-components
related:
  - Approving Every Small Transaction: The Management Cost of Unnecessary Sign-Offs | /impact/approving-low-risk-transactions-one-by-one-management-cost/
  - Expiry Dates in a Spreadsheet: The Cost of Acting Too Late on Renewals | /impact/manual-deadline-renewal-monitoring-late-action-cost/
  - Typing Certificates and Confirmation Letters One by One: The Labour Cost | /impact/certificates-confirmations-standard-letters-typed-by-hand-cost/
summary: Small low-code automations save time until their builders move on. Without an inventory and named owners, failures become investigations and the savings leak away.
layout: plain
---
## The tolerated pain

It starts well. Someone in finance builds a flow that saves supplier invoices from email into a folder. A sales coordinator sets up a rule that copies new web enquiries into a spreadsheet. Operations connects a form to a Teams channel. Each one takes an afternoon, saves real time and costs almost nothing. Two years later the business has forty or sixty of these small automations, and nobody has a list.

Most of them work. That is the problem. Because they work, nobody looks at them, and because nobody looks at them, nobody knows which ones matter, who built them, what accounts they run under or what would happen if they stopped. When one does stop, the business finds out from a customer, a supplier or a month-end reconciliation, and then spends hours working out what the automation was supposed to do.

A related article, [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/), deals with monitoring: knowing when an automation stops. This article is about the step before that. You cannot monitor, fix or retire what you do not know exists, and you cannot hold anyone accountable for an automation that has no owner.

## Why unmanaged automation accumulates

- **Low-code tools are easy to start.** Anyone with the right licence can build a flow, which is valuable, but nothing requires them to register it.
- **Small things never reach governance.** Formal projects get documentation and handover; an afternoon's automation does not.
- **Automations run as people.** Many flows use the builder's own account and connections, so they are tied to one employee's identity and licence.
- **People move on.** The builder changes role or leaves, and their automations become nobody's responsibility.
- **Retiring feels risky.** Without knowing what a flow does, nobody dares switch it off, so even obsolete automations keep running.

## Operational symptoms

- nobody can produce a list of the automations the business relies on;
- a process breaks after someone leaves and IT disables their account;
- the same task is automated twice by different teams, sometimes producing duplicates;
- failure emails go to the personal inbox of the person who built the flow;
- automations from finished projects or retired processes still run, as described in [retired processes that leave orphaned automations running](/discovery/retired-processes-leave-orphaned-automations-running/);
- fixing a broken flow starts with an investigation into what it was meant to do.

## What the platform documentation says about ownership

Microsoft's Power Automate documentation is direct about why ownership matters. Its guide to [changing the owner of a cloud flow](https://learn.microsoft.com/en-us/power-automate/change-cloud-flow-owner) says the creator automatically becomes the owner, and that the owner is responsible for managing the flow, controlling who can use it, monitoring run history and handling errors. The owner's licence can also affect the flow. Scheduled and automated flows run under the owner's licence, and if a new owner lacks a required premium licence, the flow is turned off after a 30-day grace period. Microsoft also describes using a service principal, a non-human identity, as owner so that ownership is not tied to someone who might leave.

Microsoft's troubleshooting article on [managing orphaned flows when the owner leaves](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org) defines an orphaned flow as one with no valid owner and notes that such flows can fail if they use connections tied to the departed user's account. It describes how administrators can find flows with no listed owner and assign new co-owners.

For larger estates, Microsoft's [Center of Excellence core components](https://learn.microsoft.com/en-us/power-platform/guidance/coe/core-components) guidance describes inventorying apps, flows and their makers, with a weekly check that marks resources as orphaned when their maker can no longer be found in the directory. Microsoft notes the starter kit itself is no longer actively maintained and that its core capabilities have moved into the Power Platform admin center. The principle is the same whatever the tool: keep an inventory, link each item to a living owner, and look for orphans regularly.

## How the pain becomes money

- **Failure cost:** missed invoices, lost enquiries or late reports when an unowned automation stops.
- **Investigation labour:** hours spent reverse-engineering what a broken flow did before it can be fixed.
- **Duplicate effort:** two teams building and maintaining the same automation.
- **Licence and platform waste:** obsolete automations consuming licences, capacity or request limits.
- **Risk exposure:** automations moving personal or financial data under accounts nobody reviews.

## An illustrative cost model

This model is **illustrative**; all figures are assumptions. Picture a Johannesburg distribution business with about 50 small automations built over three years by eight different people.

| Input | Illustrative assumption |
| --- | --- |
| Unplanned automation failures per year | 10 |
| Staff time to discover, investigate and repair each one | 8 hours at R450 per hour |
| Manual catch-up work per failure | 12 hours at R300 per hour |
| Failures that also delay an invoice or customer order | 3 a year, R20,000 gross profit at risk each |

On these assumptions, each failure costs about R3,600 of investigation and R3,600 of catch-up work, or R72,000 a year across ten failures, plus up to R60,000 of delayed or lost margin. The total of roughly R130,000 a year compares with the modest effort of building an inventory and assigning owners. Replace every figure with your own experience before drawing a conclusion.

## Trade-offs to respect

The answer is not to stop people building automations. Locking down low-code tools usually pushes the same work back into manual effort or into less visible workarounds. A lighter approach works better: let people keep building, but ask them to register anything that touches customers, money or personal information, and give those automations a second owner before they become critical.

## When it becomes commercially urgent

1. A key employee who built automations is leaving or changing role.
2. An automation failure has already affected a customer, a supplier payment or month-end.
3. Automations are handling personal information or payments.
4. Licensing changes are approaching and nobody knows which flows depend on which licences.

## What better looks like

There is one register of automations that matter, with a plain description of what each does, the business process it supports, the named owner, a backup owner and the account it runs under. Business-critical automations run under service accounts or non-human identities rather than personal accounts, a point developed in [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/). Failure alerts go to a shared, watched destination. Offboarding includes a check for automations owned by the departing person. Obsolete flows are retired deliberately. The question of who keeps watch is explored further in [who watches the automations](/insights/who-watches-the-automations/).

## Practical next actions

1. **Export the list** of flows and automations from each platform you use, including spreadsheets with macros and scheduled scripts.
2. **Identify orphans**: anything owned by former employees or with no owner.
3. **Classify by impact**: which automations touch customers, money or compliance.
4. **Assign a named owner and backup** for every automation in the top tier.
5. **Move critical automations** off personal accounts.
6. **Add an automation check to offboarding** and review the register quarterly.

Building a manageable automation estate, rather than a collection of experiments, is part of Mellorca's [business automation](/services/business-automation/) work.

## Bottom line

Small automations are one of the best returns on effort a business can get, until nobody owns them. Unowned automation turns saved minutes into unplanned hours when something breaks. A simple register, named owners and non-personal service accounts keep the savings and remove most of the surprise.
