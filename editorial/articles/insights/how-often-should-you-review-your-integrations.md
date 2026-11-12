---
hub: insights
record_id: INS-381
slug: how-often-should-you-review-your-integrations
title: How Often Should You Review Your Integrations?
description: Review frequency should follow the cost of failure. A tiered rhythm, a short checklist and event triggers keep integrations accurate before customers notice a problem.
lead: Review frequency should follow the cost of failure. A tiered rhythm, a short checklist and event triggers keep integrations accurate before customers notice a problem.
category: Systems Integration
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Systems Integration
sources:
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Make better use of data | https://www.gov.uk/guidance/make-better-use-of-data
related:
  - How Integration Errors Turn Into Customer Problems | /insights/from-rejected-message-to-unhappy-customer-how-integration-errors-reach-customers/
  - When an Integration Platform Makes Sense—and When It Does Not | /insights/when-an-integration-platform-is-worth-buying-and-when-it-is-not/
  - How to Design Integrations for Change, Not Just for Launch | /insights/how-to-design-integrations-that-survive-supplier-and-business-change/
summary: Review frequency should follow the cost of failure. A tiered rhythm, a short checklist and event triggers keep integrations accurate before customers notice a problem.
layout: plain
---
Most businesses review their integrations at only two moments: when they are built, and when they break. In between, connections that move customer orders, payments and stock levels run on trust. The person who built them may have moved on, the credentials may belong to a former employee, and the systems on either side may have changed in ways nobody traced back to the connection.

The honest answer to how often you should review is that it depends on what the integration does. A single schedule for everything is either too frequent to keep up or too rare to be useful. This article proposes a tiered rhythm, explains what each review should actually look at, and describes the events that should trigger a review outside the calendar.

## Why integrations need review even when they work

An integration is a standing agreement between two systems about what data means and when it moves. Either side can change its half of the agreement without telling the other. A supplier renames a field, a new tax rule changes a calculation, someone adds a mandatory customer attribute, or a licence tier changes the number of calls allowed. The connection keeps running until the first message that no longer fits. Our article on [why integrations break after they seem to be working](/insights/why-integrations-break-after-they-seem-to-be-working/) describes this pattern in more detail.

Review is also how you notice integrations nobody remembers. Software gets retired, but the connection to it is left running, still holding credentials and still sending data to a place nobody checks. Microsoft's description of access reviews makes a parallel point about people: user access should be [reviewed regularly to make sure only the right people have continued access](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview), because excessive access rights can lead to compromises and audit findings. The same reasoning applies to the accounts and keys that integrations use.

## A tiered rhythm

Sort your integrations into three groups by the cost of failure, not by technical complexity.

- **Critical:** connections that move money, customer orders, regulated personal information or stock that customers are waiting for. Review these every quarter.
- **Important:** connections that feed management reporting, marketing lists or internal workflows where failure is awkward but recoverable within a few days. Review these twice a year.
- **Convenience:** small automations that save time but whose failure costs little. Review these once a year, and ask each time whether they are still used.

These intervals are a starting point drawn from practice, not a published standard. A business with a small number of simple connections might review everything twice a year. A business with dozens of connections between a point-of-sale system, an online shop, accounting and a payroll provider should expect the critical tier alone to fill a few hours each quarter.

## What a review should actually check

A review that consists of looking at a green status light proves very little. Keep a short, repeatable checklist and record the answers.

1. **Is it still needed?** Does a person or process still rely on this connection? If not, plan to switch it off.
2. **Who owns it?** Is there a named person who would be told first if it failed, and are they still in the business and in the role? The discussion in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/) explains why this matters.
3. **Does the data still match?** Compare a small sample of records in both systems. Count orders sent against orders received for a recent week.
4. **What are the failure records?** Look at rejected or held messages since the last review. A growing pile of unprocessed items is a sign that something changed.
5. **Whose credentials does it use?** Confirm the account belongs to the business, not an individual, has only the permissions it needs, and that keys have been rotated according to your own policy.
6. **What does it depend on?** Note the software versions, the supplier's interface version and any licence limit. Check whether the supplier has announced changes or end-of-life dates.
7. **Is the documentation true?** Does the written description of the mapping and the flow match what actually runs?

Where one system translates for another, the concept of an isolating layer is useful. Microsoft's description of the anti-corruption layer pattern is to place a [facade or adapter layer between subsystems that do not share the same semantics](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer), so that changes on one side do not distort the other. In review terms, ask whether the translation lives in one place you can inspect or is scattered across scripts and spreadsheet formulas.

## Events that should trigger a review immediately

A calendar is not enough. Some events change the risk faster than any schedule, and each should prompt a targeted review of the affected connections.

- One of the connected systems is upgraded, migrated or moved to a new plan.
- A supplier announces a change to its interface or retires an older version.
- A person who built or owned the integration leaves or changes role.
- A new rule applies, such as a tax rate change, a new data protection duty or a change to how a bank or payment provider accepts files.
- The volume of transactions changes sharply, for example after a promotion, a new branch or a seasonal peak.
- An incident occurs, even a minor one that was fixed quickly.

The first item on the list is the most often missed. When a system owner upgrades the accounting package, the change request rarely says "check the integrations". Add that line to your change checklist and the problem largely goes away. Our [six checks before you rebuild a broken integration](/insights/six-checks-before-you-rebuild-a-broken-integration/) is a useful companion if a review reveals something that is beyond repair.

## Keep a register so the review has something to review

You cannot review what you have not listed. A simple register, held in a shared spreadsheet if nothing better exists, should have one row per integration with these columns: the systems on each side, what moves and in which direction, the tier, the named owner and a backup, the account it runs under, the date of the last review and the date of the next. UK government data guidance lists [recording the data you have and how you share it](https://www.gov.uk/guidance/make-better-use-of-data) among the processes a business should have in place, which is what the register does for connections. The register is also the first place to look when someone asks "what depends on this system?" before a change. If the register is incomplete, treat building it as the first review. The signs that your current design has grown beyond what you can track are covered in [warning signs your integration architecture has outgrown its design](/insights/warning-signs-your-integration-architecture-has-outgrown-its-design/).

## Make reviews short and make them stick

A review that takes a day will be postponed forever. Aim for thirty to sixty minutes per critical integration, done by the owner with someone from the business side present. Record three things: what was checked, what was found and who will act on it by when. Report the results to the person accountable for operations, even if the answer is that nothing needed attention. A review that never finds anything may be asking the wrong questions, so occasionally test it by deliberately sending a faulty record and seeing who notices.

## Practical next actions

1. List every integration in a single register with its systems, the data it moves, its owner, the account it runs under and the date it was last checked.
2. Assign each integration to the critical, important or convenience tier according to what failure would cost, and write the review interval beside it.
3. Run the seven-point checklist on your three most critical connections this month and record what you find, including any unresolved failures.
4. Add a line to your software upgrade and supplier change checklist asking which integrations are affected, and who must be told before the change goes live.
5. Replace any integration account that belongs to an individual with a business-owned account that has only the permissions it needs.
6. Book the next review dates in the owners' calendars and ask for a short written result each time, even when nothing was found.

The right frequency is the one that is short enough to be done and frequent enough to catch change before customers do.
