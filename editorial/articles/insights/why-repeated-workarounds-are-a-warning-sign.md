---
hub: insights
record_id: INS-010
slug: why-repeated-workarounds-are-a-warning-sign
title: Why repeated workarounds are a warning sign
description: One workaround is often sensible. The same one used every week for months is an unmanaged part of the business and a sign something no longer fits.
lead: One workaround is often a sensible fix. The same workaround used every week for months is an unmanaged part of the business, and a signal that a system, rule or handoff no longer fits the work. How to read that signal and decide what to do about it.
category: Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Operations
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - ITIL problem management: Definition, process flow & benefits | https://www.manageengine.com/products/service-desk/itsm/what-is-problem-management.html
  - Systems Approach - PSNet | https://psnet.ahrq.gov/primer/systems-approach
related:
  - What your recurring problems are telling you about your systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
  - Why work gets lost between teams | /insights/why-work-gets-lost-between-teams/
  - Why your business feels harder to run than it should | /insights/why-your-business-feels-harder-to-run-than-it-should/
summary: One workaround is often a sensible fix. The same workaround used every week for months is an unmanaged part of the business, and a signal that a system, rule or handoff no longer fits the work. How to read that signal and decide what to do about it.
layout: plain
---
Every business has workarounds. A field in the accounting system is used for something it was never meant to hold. Quotes are built in a spreadsheet because the CRM template cannot handle bundled pricing. A supervisor keeps a private list of customers who must never be invoiced automatically. Someone exports a report every Monday, deletes three columns and pastes it into an email because the system cannot send the version people need.

A single workaround is often a sensible response to a real constraint. People are paid to get the work done, and when the official route blocks them they find another one. The problem starts when the same workaround is used again and again, by more people, for months. At that point it is no longer a clever fix. It is an undocumented part of how the business runs, and it is telling you something.

## A workaround is a temporary fix that nobody retired

IT service management has a useful vocabulary for this. In problem management, a workaround is a temporary measure that restores service while the underlying cause is investigated. ManageEngine's [guide to problem management](https://www.manageengine.com/products/service-desk/itsm/what-is-problem-management.html) describes workarounds as temporary solutions that keep the business running, and distinguishes them from the problem itself: the cause, or potential cause, of multiple incidents. A workaround is meant to buy time for root cause analysis and a permanent fix.

Most small and mid-sized businesses skip the second half. The workaround is found, it works well enough, and the pressure that would have driven a proper fix disappears. Nobody records that a problem exists. The cost of the workaround is absorbed quietly into people's working day, and because it never appears as an incident, it never appears in any decision about where to invest.

## What a repeated workaround usually means

Workarounds are symptoms. The same visible behaviour can come from quite different causes, and the right response depends on which one you are looking at. In practice, most repeated workarounds point to one of five gaps:

- **A missing capability.** The system genuinely cannot do something the business needs, such as handling a pricing structure, a document type or a customer arrangement.
- **A rule that no longer fits.** The system enforces a policy or approval step that made sense once but now blocks legitimate work, so people route around it.
- **Poor data.** The information in the system is incomplete or wrong, so staff keep their own corrected copy and work from that instead.
- **A broken handoff.** Work moves between teams or systems without the information it needs, so someone re-creates it by hand at the next step.
- **A slow change process.** The fix is known and small, but getting it made takes so long that a workaround is faster.

Each of these needs a different response. Training will not fix a missing capability. A new tool will not fix a rule nobody has the authority to change. Treating every workaround as a discipline problem, or every workaround as a reason to buy software, misses the signal entirely.

## Why workarounds become risky over time

The early cost of a workaround is mostly time. The later costs are less visible and more serious.

First, the workaround is usually known to a few people only. When one of them is on leave or resigns, the step simply stops happening, and nobody notices until a customer or an auditor does. Second, workarounds tend to live outside the controls that apply to the main system. A private spreadsheet has no audit trail, no access control worth the name and often no backup. Third, workarounds stack. A second workaround is built to cope with the output of the first, and before long the real process is a chain of manual patches that nobody fully understands.

There is also a security dimension. The UK National Cyber Security Centre's guidance on [shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it) notes that staff usually turn to unapproved tools and methods because the approved ones do not meet their needs, for example because storage is insufficient, data cannot be shared with partners or request processes are slow. Its recommended response is not punishment but finding where shadow IT exists and, where possible, bringing it above board by addressing the underlying need. Repeated workarounds deserve exactly the same treatment.

## Why blame makes the problem worse

The instinctive management reaction to a discovered workaround is to tell people to stop. That rarely works, because the constraint that created the workaround is still there. What it does achieve is to drive the workaround out of sight. People stop mentioning it, and the business loses its best source of information about where the system does not fit the work.

Patient safety researchers made the same observation decades ago. The [systems approach](https://psnet.ahrq.gov/primer/systems-approach) described by the US Agency for Healthcare Research and Quality argues that most errors reflect predictable human behaviour in poorly designed systems, and that the response should be to redesign the system rather than to blame individuals. It specifically mentions designing processes to minimise the need for workarounds. The principle transfers directly to business operations: if competent people repeatedly bypass a step, the step is the first thing to examine.

For more on separating the two, see [how to tell whether you have a people problem or a systems problem](/insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/).

## An illustrative example

Consider a hypothetical Johannesburg distributor of building supplies with about 40 staff. Its stock system records quantities by warehouse, but large contractors often collect part of an order from one branch and the rest from another. The system cannot split a single sales order across branches, so the sales team raises the order at the main branch and keeps a shared spreadsheet showing which items were actually collected where.

For two years this works. Then the business opens a third branch, the spreadsheet grows to several tabs, and month-end stock counts start disagreeing with the system by amounts nobody can explain. Finance spends days reconciling. The workaround had been quietly carrying a real requirement, split fulfilment, that the system never supported. Had it been recorded as a problem when it first appeared, the business could have chosen deliberately between configuring the system, changing the sales process or accepting the cost, instead of discovering it during a reconciliation crisis.

## How to turn workarounds into useful evidence

The aim is not to eliminate every workaround. Some are cheaper to keep than to fix. The aim is to make them visible so the business can decide which ones to keep, fix or remove.

1. **Ask without judgement.** In each team, ask what people do outside the system to get their work done. Make it clear the purpose is to fix the system, not to catch anyone out.
2. **Record each workaround in one list.** Note what it is, who does it, how often, roughly how long it takes and what would happen if it stopped.
3. **Name the underlying gap.** Classify each one against the five causes above: missing capability, outdated rule, poor data, broken handoff or slow change.
4. **Look for clusters.** Several workarounds often trace back to one gap. Those are usually the most valuable fixes.
5. **Decide deliberately.** For each cluster, choose whether to fix the cause, formalise the workaround with an owner and documentation, or accept it for now with a review date.
6. **Revisit the list.** New workarounds appearing in an area is an early warning that a recent change did not fit the work.

This list often becomes the most honest description of how the business actually operates. It is also a strong starting point for finding where manual effort is hiding, a subject covered in more depth in [how to find the manual work nobody is measuring](/insights/how-to-find-the-manual-work-nobody-is-measuring/).

## Warning signs that a workaround has become permanent

- New staff are taught the workaround as part of their induction.
- The workaround has its own spreadsheet, shared folder or chat group.
- People refer to it by a nickname, such as "the Monday file" or "the override list".
- Reports or decisions depend on the workaround's output.
- Only one or two people can explain why it exists.
- A second workaround exists to correct problems caused by the first.

When several of these are true, the workaround has crossed from a temporary fix into an unmanaged part of your operation. The pattern is closely related to [manual exceptions becoming the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).

## The trade-offs

Formalising every workaround creates bureaucracy, and fixing every one is rarely affordable. Some workarounds are rational responses to rare cases and should stay manual. The judgement that matters is frequency, consequence and concentration: how often it happens, what breaks if it fails and how many people understand it. A rare, low-impact workaround known to the whole team can be left alone. A daily workaround that feeds financial figures and lives in one person's head cannot.

Workarounds are among the cheapest diagnostic evidence a business has. They show exactly where the systems and the work have drifted apart, and the people doing them usually know why. Listening to them is often the fastest route to a useful improvement plan, and it is the kind of evidence a [digital systems audit](/services/digital-systems-audit/) should collect before recommending any change.
