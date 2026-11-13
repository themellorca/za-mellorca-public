---
hub: patterns
record_id: PAT-023
slug: the-operational-tax-hidden-inside-everyday-admin
title: The operational tax hidden inside everyday admin
description: Forms, sign-offs and retyping on every routine request act like an internal tax. Measure it to see which controls to keep and which to redesign.
lead: Forms, sign-offs, forwarding and retyping attached to every routine request act like an internal tax. Measuring it as time, cost and frequency shows which controls to keep and which steps to redesign.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Routine requests such as purchases, claims, leave and equipment pass through several forms, sign-offs, inboxes and systems before the real work starts.
primary_identification: Internal administrative-burden problem: accumulated procedural overhead is levied on every routine activity and is invisible because it is spread thinly.
commercial_value_dimensions: productivity, speed, margin, control quality, staff experience
sources:
  - https://regulatoryreform.com/wp-content/uploads/2015/02/UK-Standard-Cost-Model-handbook.pdf | https://regulatoryreform.com/wp-content/uploads/2015/02/UK-Standard-Cost-Model-handbook.pdf
  - Cutting red tape to enhance growth | https://www.sanews.gov.za/south-africa/cutting-red-tape-enhance-growth
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda-mura-muri/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - Why teams keep building manual workarounds | /patterns/why-teams-keep-building-manual-workarounds/
  - Why small tasks become expensive at scale | /patterns/why-small-tasks-become-expensive-at-scale/
  - The cost of work that adds no new information | /patterns/the-cost-of-work-that-adds-no-new-information/
summary: Forms, sign-offs, forwarding and retyping attached to every routine request act like an internal tax. Measuring it as time, cost and frequency shows which controls to keep and which steps to redesign.
layout: plain
---
## Observable condition

A technician needs a R400 part. He fills in a requisition form, emails it to his supervisor, waits for a reply, forwards the approval to the buyer, who raises a purchase order in a second system, emails it to the supplier and saves a copy in a shared folder. When the part arrives, someone signs a delivery note, scans it and sends it to finance to match against the invoice. A salesperson submits a travel claim with seven fields, three attachments and two signatures. A new starter's laptop request travels through four inboxes. A leave request needs a form, an email and an update to a spreadsheet.

None of these steps is unreasonable on its own. Each was introduced for a reason: control, audit, a past mistake. But taken together, almost every ordinary activity in the business carries a layer of administration that has to be paid before the real work can proceed.

## Realisation

Businesses in South Africa are used to complaining about external red tape. The Presidency has a dedicated team working to reduce it; a [2022 government news report on cutting red tape](https://www.sanews.gov.za/south-africa/cutting-red-tape-enhance-growth) quotes the President saying that many regulations are unduly complicated, costly and difficult to comply with. Much less attention is paid to the red tape a business creates for itself.

The realisation is that internal admin works like a tax. It is levied on every transaction, it is collected in staff time, and because it is spread thinly across everyone's day it rarely appears in any budget. A five-minute form does not look expensive. A five-minute form attached to every purchase, every claim and every request, completed by dozens of people, is a meaningful share of the payroll, paid every month for as long as the step exists.

Realisation prompt: pick the five most common internal requests in your business and write down every step each one requires before the actual work begins. Then count how many times a month each request happens.

## Identification

This is an internal administrative-burden problem: routine activities carry accumulated procedural overhead whose combined cost is invisible because it is distributed across many people and many small steps.

Governments measure their own version of this problem with a well-documented method. The UK Better Regulation Executive's [Standard Cost Model manual](https://regulatoryreform.com/wp-content/uploads/2015/02/UK-Standard-Cost-Model-handbook.pdf) breaks regulation down into the administrative activities businesses must perform and estimates their cost as price times quantity, where price is a tariff multiplied by the time taken and quantity is the number of businesses affected multiplied by how often the activity occurs. The same logic works inside a company: the cost of an internal step is the time it takes, times the cost of the person's time, times how often it happens.

The pattern differs from [why routine admin expands as the business grows](/patterns/why-routine-admin-expands-as-the-business-grows/), which is about the growth of admin volume. Here the focus is the overhead embedded in each individual activity, which exists even when volume is flat.

## Diagnosis

The visible symptom is that small things take longer than they should. The common assumption is that this is simply the cost of being properly run. The structural causes are usually these:

- **Controls added, never removed.** Each incident prompts a new form, signature or check. Nobody reviews whether the old ones are still needed.
- **Uniform controls for unequal risk.** A R400 part and a R400,000 contract go through the same steps because the process has one route. Why sign-offs in particular tend to accumulate is discussed in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).
- **Paper logic in digital form.** Forms were digitised as files to be emailed, so the steps of filling, sending, filing and retyping remained.
- **Disconnected systems.** Each step happens in a different tool, so information is re-entered and approvals are forwarded by hand.
- **No owner of the whole.** Finance owns one step, HR another, operations a third. Nobody sees the total burden on the person making the request.

Much of this is what lean practice calls [muda](https://www.lean.org/lexicon-terms/muda-mura-muri/), activity that consumes resources without creating value for the customer. Some of it is genuinely necessary control. The difficulty is that the two are bundled together.

## Commercial impact

The commercial value at stake is productivity, speed, margin and staff experience.

- **Productivity.** Skilled people spend part of every day on procedure rather than their own work.
- **Speed.** Every activity is delayed by the steps that precede it, so jobs wait for parts and customers wait for answers.
- **Margin.** The overhead is a permanent cost per transaction that does not show up as a line item.
- **Control quality.** When every request carries heavy procedure, people find ways round it, and the controls that matter are weakened along with the ones that do not.
- **Staff experience.** Friction in ordinary tasks is one of the most visible signs to employees that the business is hard to work in.

The size of the tax should be estimated, not guessed, using the business's own frequencies and times.

## Common misidentification

One mistake is to treat the burden as an inevitable price of governance and leave it alone. The opposite mistake is a blunt purge of controls, which removes protections against fraud, overspending or error. A third is to buy a new system for each process, which often adds a login and a set of fields without removing the old steps. The goal is proportionate control applied with as little effort as possible.

## Possibility

In a stronger state, each routine request has one entry point, captures information once and routes itself to the right approver according to value and risk. Low-risk requests pass with light control; high-risk ones get proper scrutiny. Records and audit trails are produced as a by-product of the workflow rather than by people saving copies. The business knows what its internal admin costs, reviews controls periodically and removes steps that no longer earn their place.

## Intervention

1. **Inventory the common requests.** Purchases, claims, leave, access, equipment, customer changes. Count how often each happens.
2. **Map each step and its time.** Include waiting for replies and retyping, not just form filling.
3. **Price the burden.** Time per step, times cost of time, times frequency, in the manner of the Standard Cost Model.
4. **Ask what each step protects.** Keep steps that protect against real risk; remove or simplify the rest.
5. **Tier by risk.** Set thresholds so low-value or low-risk requests take a shorter route. The consequences of a single approver sitting on every route are explored in [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/).
6. **Digitise as workflow, not as files.** One form, automatic routing, automatic records. Where systems hold timestamps, process mining, as described in Microsoft's [overview of process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview), can show how requests actually flow.
7. **Review annually.** Treat internal admin like any other cost line.

## An illustrative example

The following is illustrative, not a client case. A Gqeberha engineering firm counts its internal requests for a month and finds that small purchases are by far the most frequent, each passing through five people. It sets a value threshold below which supervisors approve directly in a simple online form that creates the purchase order automatically. Larger purchases keep the full route. Technicians wait less for parts, and the buyer's time shifts to negotiating with suppliers.

## Practical diagnostic questions

- What are the five most frequent internal requests in your business, and how many steps does each take?
- Does a small, low-risk request follow the same route as a large one?
- How many systems and inboxes does a typical request pass through?
- When was a control last removed rather than added?
- Who owns the total effort a request demands of the person making it?

## Bottom line

Everyday admin carries a hidden tax on almost every activity a business performs. Measuring it as time, cost and frequency, keeping the controls that protect against real risk and redesigning the rest as simple, tiered workflows returns that time to productive work without giving up control.
