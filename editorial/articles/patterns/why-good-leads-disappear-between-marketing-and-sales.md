---
hub: patterns
record_id: PAT-101
slug: why-good-leads-disappear-between-marketing-and-sales
title: Why Do Good Leads Disappear Between Marketing and Sales?
description: When qualified demand reaches the business but ownership and next actions remain unclear, lead loss may be a workflow and handoff problem rather than a demand problem.
lead: When demand reaches the business but no reliable operating mechanism converts that event into ownership and action, the leak may sit inside the handoff rather than the market.
category: Sales, Leads & Revenue Handoffs
published_date: 2026-09-03
updated_date: 2026-09-03
eyebrow: Pattern
tags:
  - Revenue
  - Conversion
  - Sales capacity
cta_label: Digital Operations Improvement
cta_href: /services/digital-operations-improvement/
side_title: Commercial value
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: Qualified leads enter the business but ownership, routing and follow-up are inconsistent between marketing and sales.
primary_identification: lead-routing and revenue-handoff problem
commercial_value_dimensions: Revenue, Conversion, Sales capacity, Pipeline velocity
sources:
  - Work assignment overview | https://learn.microsoft.com/en-us/dynamics365/sales/work-assignment-intro
  - Understand record distribution in assignment rules | https://learn.microsoft.com/en-us/dynamics365/sales/understand-lead-distributions-assignment-rules
related:
  - Why Salespeople Spend Time Updating Systems Instead of Selling | /patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/
  - The Cost of Delayed Handoffs After a Deal Is Won | /patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/
  - Why Does Sending an Invoice Require So Much Work? | /patterns/why-sending-an-invoice-requires-so-much-work/
summary: When qualified demand can enter the business without immediate, visible ownership, revenue leakage may begin in the handoff between marketing and sales. A controlled lead workflow makes routing, accountability and exceptions explicit. If this condition is familiar, explore Mellorca's solutions or start a conversation so we can examine where the handoff breaks.
---
## Observable condition

Marketing reports a healthy flow of enquiries or qualified leads. Sales says some leads arrive late, arrive without context, sit unassigned, or are discovered only after somebody checks an inbox, spreadsheet or CRM queue. The business can see demand entering the system but cannot reliably show who owns each next action.

The two teams often describe the same pipeline in incompatible terms. Marketing counts leads delivered; sales counts leads worth calling. Each side has evidence for its view, and meetings about lead quality become debates about whose numbers to believe rather than about where the leads went.

### An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A business generates enquiries from a website form, a comparison site, trade show scans and inbound calls. Website enquiries create CRM leads automatically. Comparison-site leads arrive by email to a shared inbox. Trade show scans are uploaded in a batch a week after the event. Inbound calls are logged only if the person answering remembers. A sales manager allocates leads each morning. When the manager is on holiday, allocation slows; when a seller leaves, their open leads stay in their name. Marketing's report shows every source performing, while sales sees a fraction of that volume arrive in a usable state.

### Warning signs

- Leads from some channels never appear in the CRM, or appear days after capture.
- Assignment depends on one person checking a queue or inbox.
- Leads remain owned by sellers who are absent or have left.
- Nobody can say how long a qualified lead typically waits before first contact.
- Marketing and sales disagree about how many leads were handed over in a given month.
- Sellers receive leads without the enquiry history or the reason they were qualified.

## Realisation

This condition can exist even when the CRM works and the campaign performs. The missing piece is often the operating rule that turns a new lead into an accountable event: qualification state, assignment logic, owner, response expectation and escalation.

The realisation is that the handoff is itself a process with failure modes, and it is usually the least designed part of the revenue chain. Marketing optimises capture; sales optimises conversion. The space between them belongs to nobody, and demand leaks through it without appearing in either team's numbers as a loss.

> Realisation prompt: can the business trace every qualified lead from capture to named owner and first action without relying on someone remembering to check a queue?

## Identification

This is a **lead-routing and revenue-handoff problem**. The visible symptom is lost or slow follow-up. The structural issue is that demand is not moving through a controlled workflow.

## Diagnosis

Typical causes include unclear definitions of a qualified lead, multiple capture channels, manual assignment, inconsistent territory rules, missing availability logic, weak ownership when a seller is absent, and no alert when a lead remains untouched.

Microsoft's documentation for Dynamics 365 Sales shows what explicit routing looks like. Its [work assignment overview](https://learn.microsoft.com/en-us/dynamics365/sales/work-assignment-intro) describes segments that categorise records by criteria such as source and location, sequences of follow-up steps, and assignment rules that distribute matching records to sellers or teams. Its guidance on [record distribution in assignment rules](https://learn.microsoft.com/en-us/dynamics365/sales/understand-lead-distributions-assignment-rules) explains round-robin and load-balancing distribution, and options that consider seller capacity and work schedules.

The same documentation contains a detail that illustrates this Pattern precisely. If capacity or availability options are switched on and no matching seller qualifies, the record is left unassigned. Its worked example describes a Friday-evening website enquiry that remains unassigned because no matching seller is available within the rule's 48-hour limit. Automation does not remove the need for a fallback owner; it makes the gap explicit. The important lesson is not the product choice; it is that routing can be made explicit and machine-executable rather than informal, and that every routing design needs an answer for the case where the rules find nobody.

The mechanisms that combine most often are:

- **Fragmented capture.** Each channel enters the business differently, so some leads begin outside the system that is meant to route them.
- **Ambiguous qualification.** Without an agreed sales-ready state, leads are either handed over too early and ignored, or held too long and go cold.
- **Ownership without fallback.** Assignment works on a normal day but has no rule for absence, departure or overflow.
- **No response clock.** Nothing measures elapsed time from qualification to first action, so delay is invisible until a prospect complains or buys elsewhere.

The neighbouring condition, where the lead does reach the CRM but still receives no action, is examined in [when a lead enters the CRM but nobody acts](/patterns/when-a-lead-enters-the-crm-but-nobody-acts/).

## Commercial impact

The commercial value at stake is **revenue, conversion, sales capacity and pipeline velocity**. A lead that waits unnecessarily consumes paid demand without creating selling activity. Manual allocation also uses sales-management capacity on coordination rather than coaching and deal progression. Because lost leads rarely appear in any report, the cost is easy to misattribute to campaign quality or seller performance, and budget may be moved away from channels that were working.

## Common misidentification

The instinct is often to ask marketing for more leads or salespeople to "follow up faster". Those actions may help, but they do not fix a handoff where ownership is ambiguous or assignment depends on manual checking. Adding volume to a leaking handoff increases the leak.

A second misidentification blames CRM adoption. Sometimes sellers do avoid the system, but often the system was never configured to deliver leads to them reliably. [Why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/) explores that distinction.

## Possibility

A better operating model treats lead creation as an event. The business defines qualification, routes the record automatically where appropriate, records ownership, starts a response clock and exposes exceptions when no suitable owner is available.

The trade-offs are real. Fully automated routing can send a strategic enquiry to the wrong seller, so some segments may justify a person reviewing assignment. Strict qualification rules can exclude unusual but valuable leads. Response targets that are too tight encourage token first contacts. The design should keep judgement where it adds value and remove it where it only adds delay.

## Intervention

Map every lead source, define the qualification state that triggers sales ownership, specify assignment rules, create fallback ownership and measure time from qualification to first meaningful action. Then integrate the capture and CRM layers so staff do not re-key or manually forward demand.

A practical diagnostic is to sample recent qualified leads from each channel and trace each one: when it was captured, when it reached the CRM, when it was assigned, who owned it and when the first meaningful action happened. Where any step has no timestamp, the handoff is unobserved. Where the gaps are long, the leak has been located.

## Practical diagnostic questions

- Where can a lead enter the business?
- What exactly makes it sales-ready?
- Who owns assignment when normal rules cannot resolve an owner?
- How long can a qualified lead remain untouched before an exception is visible?
- Can marketing and sales see the same lead history and status?
- What happens to open leads when a seller is absent or leaves?

## Bottom line

If good leads regularly disappear between teams, the business may not have a demand problem. It may have an event-routing and accountability problem sitting directly inside the revenue process.
