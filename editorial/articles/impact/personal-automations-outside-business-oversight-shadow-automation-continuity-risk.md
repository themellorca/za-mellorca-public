---
hub: impact
record_id: CPS-261
slug: personal-automations-outside-business-oversight-shadow-automation-continuity-risk
title: Shadow Automations: The Hidden Risk of Workflows Built Outside Oversight
description: Employees' personal automations solve real problems, but when they run unseen on personal accounts, the business inherits continuity gaps, data exposure and silent errors.
lead: Employees' personal automations solve real problems, but when they run unseen on personal accounts, the business inherits continuity gaps, data exposure and silent errors.
category: Automation and Integration
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Automation and Integration
commercial_domain: Automation and Integration
primary_pain: Employees create personal automations outside business oversight and the business depends on them without knowing
primary_cost_mechanism: Lost continuity when the builder leaves, business data passing to unmanaged services, silent errors feeding decisions, and duplicated effort and licence sprawl
sources:
  - Data policies - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention
  - Microsoft Power Platform Center of Excellence (CoE) Starter Kit transition to Power Platform admin center - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/coe/starter-kit
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - The Integration That Is Always Being Fixed: Paying for Poorly Designed Connections | /impact/custom-integrations-constantly-need-repair-poorly-designed-connections-cost/
  - When Customers Find the Broken Integration Before You Do | /impact/integrations-breaking-silently-customers-report-failure-first-cost/
  - Export, Fix, Import: The Hidden Cost of Spreadsheets Connecting Core Systems | /impact/spreadsheet-exports-imports-connecting-core-systems-manual-integration-cost/
summary: Employees' personal automations solve real problems, but when they run unseen on personal accounts, the business inherits continuity gaps, data exposure and silent errors.
layout: plain
---
## The helpful workflow nobody approved

A branch manager at a Bloemfontein agricultural supplies firm gets tired of copying order confirmations into a spreadsheet. On a quiet afternoon, she builds a small automation on a free tier of an online tool. Whenever an email with the word "order" arrives in her inbox, the automation copies the sender, amount and attachment into a cloud spreadsheet she created. It works so well that two colleagues ask for the same thing. Within a year, nine people rely on it for their weekly stock planning.

Then she resigns. Her account is closed on her last day, as it should be, and the automation stops. The spreadsheet quietly goes stale. Three weeks later, the stock planner notices that orders are missing and nobody can say where the data used to come from. Nobody knew it existed, so nobody documented it, and nobody knows what it connected.

This article is about that pattern: employees building personal automations outside business oversight, and the financial and continuity risk that creates. It is not an argument against employees automating their work. Initiative like this solves real problems. The risk lies in what the business cannot see.

## Why shadow automation spreads

It spreads because it solves a real problem quickly. The official route for improving a process may take months, require a business case and compete with other IT priorities. A person with a free tool can fix their own bottleneck in an hour. Modern low-code platforms, mailbox rules, scripts, spreadsheet macros and connectors make this easy, and many are available without any approval.

The result is a layer of working processes that sits outside the formal systems. It is similar in character to [unowned small automations](/impact/unowned-small-automations-support-failure-cost/), but with an extra feature: leadership may not know it exists at all.

## Four ways it costs the business

### 1. Continuity: the process leaves with the person

Personal automations run on personal accounts and personal credentials. When the person resigns, changes role or is simply on leave and their password expires, the automation fails. The business has built a dependency on a process it cannot see, as described in [automation understood by one employee](/impact/automation-understood-by-one-employee-continuity-maintenance-cost/).

### 2. Data leaving controlled systems

An automation that copies customer details to a personal cloud account moves business data to a place the business does not manage. Microsoft's documentation on [data loss prevention policies for Power Platform](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention) explains that connectors can be classified so that business data cannot be passed to non-business services. The existence of that control tells you the risk is common enough for vendors to build for it. Where no policy exists, nothing stops personal connectors from receiving business information.

For a South African business, this matters under the Protection of Personal Information Act. A responsible party must keep personal information secure and must know where it is held. Customer names, ID numbers or contact details flowing through an unapproved tool are difficult to account for. This article does not provide legal advice; take specific questions to a qualified adviser.

### 3. Silent errors in decisions

A badly built automation can copy the wrong field, skip a category, double-count a row or stop when an email format changes. Because it is invisible, nobody monitors it, and downstream reports are trusted anyway. The pattern is the same as in [silent automation failures](/impact/silent-automation-failures-financial-impact/): the loss is not the failure but the decisions made on the faulty output before anyone noticed.

### 4. Duplicated effort and licence sprawl

Three departments building three versions of the same workflow is wasted effort. Free tiers become paid subscriptions when volumes grow, often on personal cards that are then expensed. Finance sees small scattered claims rather than a single decision.

## Why a ban does not work

The instinctive reaction is to prohibit personal automation. It rarely holds. People continue, but they hide it, and the business loses visibility entirely. Microsoft's [Centre of Excellence Starter Kit](https://learn.microsoft.com/en-us/power-platform/guidance/coe/starter-kit) takes the opposite approach: it is designed to give administrators an inventory of the apps and flows that employees have created, so that they can see what exists, who owns it and what it connects to. The principle behind it is that oversight begins with visibility, not prohibition.

You do not need that specific product. The idea can be applied with any set of tools:

- Allow employees to build, within a defined set of approved platforms.
- Require that anything others depend on is registered with an owner and a backup owner.
- Keep business automations on business accounts or service accounts, never on a personal login. This is explored in [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).
- Review what is registered once a quarter and retire what is no longer used.

## Sorting the useful from the risky

Not every personal automation needs governance. A flow that sends you a reminder is your business. A flow that other people rely on, handles customer or financial data, or triggers actions in a shared system is the business's business. A simple three-question test works: does anyone else depend on the output, does it touch personal or financial information, and could a failure cause a customer or financial error? If the answer to any is yes, it is registered and given an owner.

Many of the best ideas come from these small automations. Treat them as free requirements research. The employee has already found the bottleneck, shown a design that works and proven there is demand. The business's job is to adopt the good ones properly, as suggested in [a maintenance plan for the automations you already run](/insights/a-maintenance-plan-for-the-automations-you-already-run/).

## A short conversation that finds most of it

You can learn a great deal without a scan. Ask each team lead one question: "What have you or your team set up that would stop working if you left tomorrow?" The answers usually include mailbox rules, shared-drive scripts, spreadsheet macros and flows. Record each one with what it does, who built it, where it runs and what depends on it. After a single round of conversations, most businesses discover several dependencies they had no idea about.

## Practical next actions

1. **Ask every team lead what would stop working if they left tomorrow.** Capture the answers in one shared list with the builder, the platform and the people who depend on the result.
2. **Move any business-critical automation off a personal account.** Use a shared mailbox, a service account or a company-owned licence, and name a backup owner.
3. **Set up a short registration form.** It should capture purpose, data touched, owner and what to do if the automation fails.
4. **Decide which tools employees may build on.** Publish the list, and block or classify connectors that send business data to personal services where your platform supports it.
5. **Add automations to the leaver checklist.** Before an employee's account closes, check what runs under it.
6. **Review the register quarterly.** Promote useful automations to supported processes and switch off those nobody uses.

Employees who automate their own work are an asset. The aim is to keep what they build visible, owned and recoverable, so the business benefits from their initiative without depending on one person's login.
