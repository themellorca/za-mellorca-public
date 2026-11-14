---
hub: patterns
record_id: PAT-336
slug: why-technical-debt-eventually-becomes-commercial-debt
title: Why Technical Debt Eventually Becomes Commercial Debt
description: Shortcuts in the systems a business relies on do not stay technical. They turn into slower quotes, rechecked invoices and lost orders. Here is how to spot and price that debt.
lead: Shortcuts in the systems a business relies on do not stay technical. They turn into slower quotes, rechecked invoices and lost orders. Here is how to spot and price that debt.
category: Systems & Technology
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Systems & Technology
pattern_family: Systems & Technology
observable_condition: Quotes, invoices and onboarding depend on a few people who understand patched systems, updates are postponed, and customers wait while staff work around software that cannot be trusted.
primary_identification: Deferred maintenance with no accountable owner for the condition of core systems, so shortcuts accumulate and are paid for later in delay, rework and risk.
commercial_value_dimensions: Revenue speed, customer retention, staff capacity, key-person risk and cost of eventual system change
sources:
  - SP 800-218, Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities | https://csrc.nist.gov/pubs/sp/800/218/final
  - Operational excellence quick links - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/
  - Operational Excellence cloud design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles
related:
  - Why Important Information Is Trapped in PDFs and Attachments | /patterns/why-important-information-stays-trapped-in-pdfs-and-email-attachments/
  - The Cost of Not Knowing Who Can See What | /patterns/the-cost-of-not-being-able-to-say-who-can-open-which-files/
  - When Order Status Lives in Several Systems | /patterns/when-the-true-status-of-an-order-is-spread-across-several-systems/
summary: Shortcuts in the systems a business relies on do not stay technical. They turn into slower quotes, rechecked invoices and lost orders. Here is how to spot and price that debt.
layout: plain
---
## Observable condition

A quote request arrives from a long-standing customer, a regional building-supplies chain. The sales team knows the price. What they do not know is whether the quoting spreadsheet will produce it correctly, because the discount column was patched two years ago by someone who has since left. So the request goes to the one person who understands the sheet. She is in a meeting, then on leave, and the customer buys from a competitor who replied the same afternoon.

Nothing in the business failed in a way anyone would call a breakdown. The software still runs. The sheet still calculates. But the shortcuts taken to get it working have been collecting interest, and this week the interest was a lost order.

An illustrative example: a Gauteng distributor with forty staff, a custom-built order portal that a contractor wrote in a hurry, and a monthly invoicing run that finance double-checks by hand because nobody trusts the totals.

## Realisation

Technical debt is usually discussed as an engineering concern, something developers complain about and managers defer. The realisation is that it does not stay technical. Every shortcut in a system is a decision to spend less now and more later, and the "later" cost is rarely paid in code. It is paid in slower quotes, slower onboarding, slower month-ends and slower answers to customers.

The debt becomes commercial at the moment a customer, a supplier or a regulator feels it. Until then it is hidden inside people's heads and workarounds, which is exactly why it is easy to postpone.

**Realisation prompt:** think of the last time a customer was kept waiting. Was the delay caused by a decision, or by someone having to work around a system that does not behave as expected?

## Identification

This is a pattern of deferred maintenance on systems the business depends on for revenue. The visible symptoms are repeated phrases: "only Thandi knows how that works", "we do not touch that module", "we will fix it properly after year-end". The common assumption is that the system is working because it has not stopped. The structural cause is that nobody is accountable for the condition of the system itself, only for the things it produces.

It overlaps with, but is not the same as, [why teams keep building manual workarounds](/patterns/why-teams-keep-building-manual-workarounds/). A workaround is one symptom. Technical debt is the accumulated condition that makes those workarounds necessary.

## Diagnosis

- **Fixes are made to get through the day, not to last.** A rushed patch solves the immediate problem and is never revisited, so the next change has to be made around it.
- **Knowledge sits with one or two people.** The system is understood through habit, not documentation. When those people are away, everything slows down or stops.
- **Updates are postponed because they might break something.** The longer the gap, the bigger and riskier the eventual update becomes, which gives the business another reason to postpone it.
- **There is no line in the budget for upkeep.** New features are funded as projects. Maintenance has no sponsor, so it competes with everything else and loses.
- **Workarounds become procedure.** Staff stop seeing the extra steps as a problem because they have always been done that way.
- **Security and support gaps widen quietly.** Software that is not kept current drifts out of vendor support. The [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) sets out practices for identifying and responding to vulnerabilities in software over its life, which assumes someone is responsible for doing so.

## Commercial impact

The commercial value at stake is revenue speed, customer retention, staff capacity, risk exposure and the cost of eventual change.

The first cost is time. Staff spend part of every week on reconciling, rechecking and retyping. That time is real salary cost, but it never appears under "technical debt" in the management accounts. It appears as overtime, as hiring one more administrator, or as managers who are always busy.

The second cost is speed. A quote that needs a specialist, an invoice run that needs a second pair of eyes and an onboarding that takes a week all slow the point at which revenue is recognised or a customer feels looked after. Slow answers lose the contest against a competitor who simply replies.

The third cost is concentration risk. When one person holds the knowledge, the business carries a hidden dependency. A resignation, a long illness or a dispute becomes an operational event.

The fourth is the size of the eventual bill. Deferred work does not disappear. A system that has not been touched for years may need replacing, not repairing, and a replacement done under pressure is more expensive than a series of small repairs done on a schedule.

## Common misidentification

The usual misreading is that the problem is the software itself, so the answer must be a new platform. Sometimes that is true. More often the new platform arrives, inherits the same unowned habits, and starts accumulating debt of its own within a year or two.

The second misreading is to blame the individual who built the patch. That person usually solved a real problem under real pressure. The failure is that nobody later gave them time or a mandate to tidy it up.

The third is to treat upkeep as optional because the system "works". A system that works only when a particular person is present does not really work.

## Possibility

The possibility is that the business treats the condition of its systems as a managed asset with a regular, visible, modest spend, instead of an invisible liability that eventually demands a large one. In that business, a quote request does not depend on who is in the office. A system change is documented before it is considered finished. A software update is a scheduled event, not a crisis.

That shift does not require a large programme. It requires deciding who owns the health of each important system and giving them a small, protected slice of time.

## Intervention

A practical intervention starts with a short list of the systems that touch revenue: quoting, ordering, invoicing, stock and customer records. For each one, the business records who understands it, when it was last updated, what workarounds surround it and what would happen if it failed for a day.

That list often exposes a few uncomfortable facts, such as a single point of knowledge or a system that is years behind on updates. Microsoft's [operational excellence principles](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles) for cloud workloads make the same general point: reliable operation is designed and improved on purpose, not left to chance. The business can then rank them by commercial consequence, not by technical interest, and fix the worst first. Related thinking appears in [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/).

Where a Mellorca review is useful, it is in making this picture visible and attaching rand values to the delays, so the discussion moves from "the system is annoying" to "this system is costing us orders".

## Practical next actions

1. List the five systems that, if they failed for a day, would stop quoting, invoicing or delivery, and write down who is the named owner of each.
2. For each system, record the date of its last update and whether the vendor or contractor still supports the version you run.
3. Ask the person who knows each system best to write one page on how it works and which workarounds surround it, and store it somewhere shared.
4. Count the hours per week spent rechecking, retyping or reconciling output from these systems, and multiply by an hourly cost to get a monthly figure.
5. Set aside a fixed monthly block, even half a day, for maintenance on the most critical system, and report what was done in the management meeting.

## Diagnostic questions

- If one named person left tomorrow, which task would nobody else be able to do?
- Which system is updated only when something breaks?
- How many extra steps does a staff member take because the software cannot be trusted to do the job alone?
- When did a customer last wait because of an internal system, and was that recorded anywhere?

## Bottom line

Technical debt becomes commercial debt when customers and staff start paying it. The cost shows up as slow quotes, rechecked invoices and a business that relies on a few people to keep fragile systems alive. The way out is not dramatic: make ownership explicit, make upkeep a normal line of work, and measure the delay in rand. Related reading on the hidden cost of workarounds is in [software needing constant manual workarounds](/impact/software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee/).
