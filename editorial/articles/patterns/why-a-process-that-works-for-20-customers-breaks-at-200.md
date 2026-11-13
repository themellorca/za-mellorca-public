---
hub: patterns
record_id: PAT-279
slug: why-a-process-that-works-for-20-customers-breaks-at-200
title: Why a process that works for 20 customers breaks at 200
description: A routine that felt effortless with twenty customers means missed follow-ups and late nights at two hundred. Redesign before it breaks.
lead: A routine that felt effortless with twenty customers turns into missed follow-ups and late nights at two hundred. Here is what changes with volume and how to redesign before it breaks.
category: Scalability, Growth & Capacity
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Scalability, Growth & Capacity
pattern_family: Scalability, Growth & Capacity
observable_condition: A routine that worked with twenty customers now produces missed follow-ups, late invoices and inconsistent promises at two hundred, while the same people work longer hours.
primary_identification: Processes designed implicitly for a smaller scale: they depend on personal memory, scattered intake, manual copying and informal handoffs that do not scale with volume.
commercial_value_dimensions: Scalability, service quality, cash flow, margin per customer and owner capacity
sources:
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Overview of building a model-driven app with Power Apps - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview
  - What is Microsoft Dataverse? - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
related:
  - When customers know their order is late before your team does | /patterns/when-customers-know-their-order-is-late-before-your-team-does/
  - When client onboarding becomes a growth constraint | /patterns/when-client-onboarding-becomes-a-growth-constraint/
  - When manual exceptions become the normal process | /patterns/when-manual-exceptions-become-the-normal-process/
  - Which processes usually break first during growth | /insights/which-business-processes-break-first-when-a-company-grows/
summary: A routine that felt effortless with twenty customers turns into missed follow-ups and late nights at two hundred. Here is what changes with volume and how to redesign before it breaks.
layout: plain
---
## Observable condition

For the first year, everything worked. The owner knew every customer by name. Orders came in by phone or email, were written on a pad or typed into a spreadsheet, and were fulfilled by two people who sat next to each other. If something went wrong, someone shouted across the room. Customers praised the personal service, and the business grew.

Now there are two hundred customers, and the same routine is creaking. Orders are missed because they arrived in a personal inbox. Invoices go out a week late. Two staff promise different delivery dates to the same client. The spreadsheet has become so large that it takes a minute to open and has been corrupted twice. The owner works until nine at night catching up, and the best people are quietly exhausted. Nobody can point to a single failure; the whole thing is simply heavier and less reliable than it was.

An illustrative example: a Port Elizabeth company that supplies and services commercial refrigeration took on its first fifteen contracts through personal relationships. Now with just under two hundred customers, each service call is booked by phone, noted on paper, copied into a spreadsheet by the receptionist and invoiced at month end by the owner's spouse. Technicians complain about double bookings, and customers complain that nobody calls back.

## Realisation

A process that works at one size does not simply work ten times harder at ten times the size. It is a different problem. At twenty customers, memory, goodwill and proximity do much of the coordination, and the process on paper is a thin layer over a lot of human adjustment. At two hundred, the adjustment no longer fits in anyone's head, and what is left is the thin layer, which was never designed to carry the load.

Volume changes three things at once. The number of routine items grows, which turns small inefficiencies into hours. The number of exceptions grows, because rare cases at twenty customers occur weekly at two hundred. And the number of people who touch the process grows, so handoffs, which were invisible when two people shared a desk, become the main source of delay. The work did not become harder; the hidden coordination the owner was providing for free is now beyond one person.

**Realisation prompt:** which parts of your process only work because a particular person remembers, notices or fixes things by hand?

## Identification

This is a pattern of processes designed implicitly for a smaller scale. The visible symptom is rising error and delay with every new batch of customers, together with more effort from the same people. The common assumption is that the business needs to hire more people or work harder. The structural cause is that the process relies on personal knowledge, manual copying and informal handoffs that do not scale, and no one has redesigned it since the early days.

The published Pattern [the process that gets slower every time volume increases](/patterns/the-process-that-gets-slower-every-time-volume-increases/) and the Pattern [why a manual process gets harder to run every time volume grows](/patterns/why-a-manual-process-gets-harder-to-run-every-time-volume-grows/) describe the effect of volume on manual work. The Impact page on [five-person processes in a growing business](/impact/five-person-processes-growing-business-scaling-cost/) covers the cost of keeping a small-team routine going too long. This article focuses on the specific shift from a manageable customer base to one that has outgrown informal coordination, and what to look for before it breaks.

## Diagnosis

- **Entry points are scattered.** Requests arrive by phone, WhatsApp, personal email and walk-ins, and nobody sees the full queue in one place.
- **State lives in people.** What has been promised, what is waiting and who is doing what is known by individuals, not recorded where others can see it.
- **Every case is handled as a special case.** There is no standard path for the routine ninety percent, so each customer's request is worked out afresh.
- **Manual copying between steps.** Details are rewritten from the pad to the spreadsheet to the invoice, and every copy adds delay and error.
- **No capacity signal.** Nobody can tell that the process is about to overload until customers complain.
- **Follow-up is by memory.** Reminders for renewals, payments and callbacks depend on someone looking at the right list on the right day.

## Commercial impact

The commercial value at stake is scalability, service quality, cash flow and the owner's capacity. The most visible cost is service. Late callbacks, missed appointments and inconsistent answers make customers feel the business is no longer reliable, and they leave quietly, usually just when acquisition cost has been paid. The Insight [why customer onboarding breaks as the business grows](/insights/why-customer-onboarding-breaks-as-the-business-grows/) shows the same failure at the start of the relationship.

The second cost is cash. When invoicing waits for a manual month-end run, income arrives later, and late-paying customers are chased from memory. With a rising customer base, the delay is no longer a few invoices but a significant share of working capital.

The third is the default response: adding headcount. Hiring a second receptionist and a part-time bookkeeper solves the immediate backlog but multiplies the number of people working around the same fragile routine, as the Impact page on [scaling by adding headcount](/impact/scaling-by-adding-headcount/) explains. Costs rise in line with customers instead of more slowly, so margin does not improve with scale. The Insight [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/) shows why small leaks matter more as volume grows.

## Common misidentification

The standard diagnosis is that people are not working hard enough or are not organised. In reality the strongest staff are often carrying the load by working longer, which hides the problem until one of them leaves or burns out.

The second misdiagnosis is software: buy a customer management system and the problem goes away. A system dropped onto an undefined process automates the confusion. If requests still arrive in five channels, if nobody has decided what the standard path is and who owns each step, the new system becomes a sixth place to record the same thing. The process needs to be designed first, in plain language, and the tool chosen to fit it.

## Possibility

In a better state, every request enters through one defined route and appears in a single queue. The routine cases follow a standard path with clear steps and owners, and only genuine exceptions need judgement. Status is recorded as the work moves, so anyone can see what is booked, what is late and what is waiting on whom. Invoices are raised from the completed job record, not retyped. Reminders and follow-ups are triggered automatically by dates and status changes.

This is standard capability in modern business platforms. Microsoft describes [cloud flows as automated workflows that connect apps and services](https://learn.microsoft.com/en-us/power-automate/overview-cloud), triggered by events such as the arrival of an email, and its [approvals feature](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) routes sign-off requests to the right person. [Model-driven apps](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview) are described as especially well suited to process-driven work in which users move between related records, with relationships that avoid repeating data. None of this requires a large project, but it does require deciding how the work should flow before configuring anything.

For the refrigeration company, that would mean one booking form feeding one schedule, technicians updating job status on a phone, invoices created from completed jobs, and an automatic reminder to customers before their next service is due.

## Intervention

1. **Map the process as it actually runs.** Follow five recent customers from first contact to payment. Note every handoff, every copy and every place where someone had to remember.
2. **Separate routine from exception.** Estimate what share of cases follow the same path. Design that path properly and treat the rest as a defined exception route.
3. **Create one front door.** Choose a single place where requests are recorded, whatever the original channel, and make that the only source of the queue.
4. **Record state, not memory.** Add a simple status field and make it a rule that the status is updated as work moves.
5. **Remove the copying.** Where the same details are retyped, make the next step read from the previous one. Take POPIA into account by limiting who can see customer information.
6. **Test at ten times.** Ask what would happen if volume doubled next quarter. Fix the first step that would fail, then the next, before the load arrives.

## Diagnostic questions

- How many separate places can a customer request first appear?
- If the owner took a week off, what would stop working?
- What share of cases follow the same path, and is it written down?
- How would you know the process was becoming overloaded before customers told you?

## Bottom line

A process that works for twenty customers rests on memory, proximity and goodwill. At two hundred those run out, and what remains is a routine that was never designed. The answer is not more effort or a quick software purchase, but a deliberate redesign: one front door, a standard path, recorded status and no needless copying. Done early, growth lowers the cost of each customer instead of raising it.
