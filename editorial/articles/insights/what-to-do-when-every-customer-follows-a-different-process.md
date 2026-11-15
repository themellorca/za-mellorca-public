---
hub: insights
record_id: INS-111
slug: what-to-do-when-every-customer-follows-a-different-process
title: What to Do When Every Customer Follows a Different Process
description: Customer-specific ways of working build up one favour at a time. Separate real requirements from habits, find the common spine and turn the rest into fields and rules.
lead: Customer-specific ways of working build up one favour at a time. Separate real requirements from habits, find the common spine and turn the rest into fields and rules.
category: Workflow Design
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Workflow Design
sources:
  - 2. Solve a whole problem for users | https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem
  - Business process flows overview - Power Automate | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - Set up and manage object pipelines | https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines
related:
  - How Exceptions Should Be Designed Into a Workflow | /insights/how-exceptions-should-be-designed-into-a-workflow/
  - Why Every Workflow Needs a Clear Start and End | /insights/why-every-workflow-needs-a-clear-start-and-end/
  - How to Design a Workflow Around Outcomes Instead of Departments | /insights/how-to-design-a-workflow-around-outcomes-instead-of-departments/
summary: Customer-specific ways of working build up one favour at a time. Separate real requirements from habits, find the common spine and turn the rest into fields and rules.
layout: plain
---
An engineering services firm in Pretoria has forty active clients and, if you ask the account managers, forty ways of working. One mining client wants purchase orders before any site visit. A municipal client needs three quotes and a tax clearance pin on every submission. A private client pays on a credit card and expects a same-day call-out. Each variation started as a reasonable favour. Today, nobody can describe the firm's process without saying "it depends on the client", new staff take months to become useful, and the systems cannot automate anything because every rule has an exception.

This situation is common in businesses that grew by saying yes. The answer is not to force every customer into one rigid flow, and it is not to accept chaos as the cost of good service. It is to separate what genuinely differs from what merely looks different.

## Why per-customer processes multiply

Customer-specific ways of working rarely come from a decision. They accumulate. A salesperson agrees to a special invoicing format to win a deal. An operations lead adds an extra approval for a client who once complained. A key account gets a dedicated contact who handles everything personally. Each change lives in someone's memory or a note in an email thread, not in the system.

Three costs follow. Work slows down because people must look up or remember the rules for each customer. Errors increase because the special rule is missed when the usual person is away. And the business loses the ability to improve anything, because there is no common process to measure or automate.

## Step one: list the variations, not the customers

Start by writing down every way in which work differs between customers. Do not organise the list by customer name. Organise it by the point in the process where the difference shows up: enquiry, quote, approval, scheduling, delivery, invoicing, payment and support.

A firm with forty clients often finds that it has fewer than fifteen real variations, and that most customers use the same three or four. "Client X is different" usually turns out to mean "Client X needs a purchase order number on the invoice", which is a single data field, not a separate process.

For each variation, note why it exists. Some reasons are hard requirements, such as a public-sector buyer's procurement rules or a regulated client's documentation standards. Others are preferences, habits or historical accidents. The distinction matters, because only the first group deserves permanent design effort.

## Step two: find the common spine

Underneath the variations, almost every service business has a shared sequence: receive a request, qualify it, agree scope and price, schedule the work, deliver, bill and follow up. That sequence is the spine. Write it down in plain language and test it against your five most awkward customers. If it holds, you have a standard process with optional steps rather than forty separate ones. Our guide to [mapping a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) shows a light way to do this.

The UK Government's Service Standard makes a related point in its guidance to [solve a whole problem for users](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem): scope a service around what users actually need to do, neither too narrow nor too broad. Applied here, it means designing around the outcome the customer wants, not around each customer's historical quirks.

## Step three: turn variations into rules, fields and variants

Once the spine is clear, each genuine variation can be handled in one of three ways.

- **A field on the customer record.** Purchase order required, invoice format, payment terms and preferred contact method belong on the account, where anyone can see them and automation can read them.
- **A conditional step.** "If the customer is public sector, collect three quotes and compliance documents before submission." The step is part of the standard process but only applies when a condition is true.
- **A separate process variant.** Reserved for customers whose work genuinely follows a different sequence, such as a framework agreement with call-off orders compared with once-off projects.

Most business software supports this pattern. Microsoft's documentation on [business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) notes that not every user follows the same process, and allows up to ten active process flows per table, each with its own stages and required steps. HubSpot's guidance on [setting up pipelines](https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines) advises creating a separate pipeline only when a process has stages that differ, and otherwise sharing one pipeline. Both point to the same discipline: variants should be few and deliberate.

## Step four: decide which variations to stop offering

Some variations cost more than they earn. A bespoke monthly report for a small client, a manual invoice format that nobody else uses, or a personal phone call before every delivery can quietly consume hours. For each preference-based variation, estimate the time it takes per month and compare it with what the customer is worth. Where the numbers do not work, offer the standard option, explain the benefit to the customer, such as faster turnaround or fewer errors, and give a transition date.

Customers often accept standardisation more readily than staff expect, especially when the standard process is visibly more reliable. Where a variation is a genuine source of value, consider pricing it as a premium service rather than absorbing the cost.

## Step five: put the rules where the work happens

A customer rule that lives only in an account manager's head will be missed. Once you have defined the fields and conditional steps, put them in the system the team uses every day. Make the key fields required at the right moment, show the customer's special requirements on the screen where work is created, and let automation apply the conditional steps. Our article on [moving operational knowledge out of people's heads](/insights/how-to-move-operational-knowledge-out-of-peoples-heads/) explains how to capture this kind of knowledge without heavy documentation.

## What good looks like

After this work, the Pretoria firm could describe its process in one page: a common spine, four conditional steps and two process variants. New staff learn the spine first and look up the customer's fields when needed. Automation can now send the right documents, route approvals and format invoices without someone remembering. And when a new customer asks for something unusual, the team has a clear question to ask: is this a field, a conditional step, a new variant, or something we politely decline?

If your business feels like it runs on exceptions, our guide on [diagnosing a business that runs on exceptions](/insights/how-to-diagnose-a-business-that-runs-on-exceptions/) covers the wider pattern behind this problem.

## Practical next actions

1. List every way work differs between customers, grouped by the process stage where the difference appears, and note whether each one is a requirement or a preference.
2. Write your common process spine in seven or eight plain steps and test it against your five most difficult customers.
3. Classify each variation as a customer field, a conditional step or a separate process variant, and keep variants to the smallest number you can.
4. Estimate the monthly time cost of each preference-based variation and decide which to standardise, price or keep.
5. Add the agreed fields and conditional steps to your CRM or operations system so that the rules are visible where work is created.
