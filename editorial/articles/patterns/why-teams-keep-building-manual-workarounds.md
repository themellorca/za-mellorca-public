---
hub: patterns
record_id: PAT-009
slug: why-teams-keep-building-manual-workarounds
title: Why Teams Keep Building Manual Workarounds
description: Spreadsheets, lists and macros built around official systems are unfiled change requests. Here is why teams keep building them, what they cost, and how to turn them into real improvement.
lead: Spreadsheets, lists and macros built around official systems are unfiled change requests. Here is why teams keep building them, what they cost, and how to turn them into real improvement.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Teams maintain a growing set of spreadsheets, lists, macros and habits around the official systems, each built by a staff member to solve a problem the system did not handle.
primary_identification: Local problem-solving with no improvement channel: frontline problems are absorbed by workarounds instead of being fixed at source.
commercial_value_dimensions: Productivity, resilience, data quality, risk and return on existing systems
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - 5 Whys - What is it? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/5-whys/
  - Kaizen — A Resource Guide - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/kaizen/
related:
  - When Repetitive Work Is Mistaken for Necessary Work | /patterns/when-repetitive-work-is-mistaken-for-necessary-work/
  - When One Simple Request Turns Into Five Separate Jobs | /patterns/when-one-simple-request-turns-into-five-separate-jobs/
  - Why Staff Keep Checking the Same Things Over and Over | /patterns/why-staff-keep-checking-the-same-things-over-and-over/
summary: Spreadsheets, lists and macros built around official systems are unfiled change requests. Here is why teams keep building them, what they cost, and how to turn them into real improvement.
layout: plain
---
## Observable condition

Look closely at how any team gets through its week and you find small inventions. A spreadsheet that tracks what the system cannot. A shared notes file of customer quirks. A colour code in the subject line of emails. A paper list on the wall of orders that need special handling. A macro someone wrote years ago that nobody else understands. A habit of exporting data every Friday to fix it before it is imported somewhere else.

None of these were planned. Each was built by a capable person who hit a problem and solved it with whatever was at hand. When the next problem arrives, they build another. Over a few years the team's real way of working is a layer of workarounds wrapped around the official systems.

An illustrative example: a Durban freight forwarding business with about sixty staff uses an industry system for shipments and an accounting package for billing. The operations team maintains four spreadsheets alongside them: one for containers awaiting documents, one for client-specific rules, one for disbursements to recover and one for exceptions. Each was built to solve a real problem. None was ever raised as a request to change the systems.

## Realisation

Every workaround is an unfiled change request. It records, precisely, something the official process or system does not do that the team needs. The workaround solves the problem locally, for one person or one team, and so the problem never travels to anyone who could fix it properly.

Teams keep building workarounds because, in most businesses, it is the only route open to them. Asking for a system change means a ticket to an overstretched IT person, a request to a vendor, a cost approval and a wait of weeks or months, with no guarantee of an answer. Building a spreadsheet takes an afternoon. Faced with that choice, a conscientious employee will build the spreadsheet every time.

The UK's National Cyber Security Centre makes the same observation about unofficial technology in general. It notes that staff adopt unsanctioned tools when official systems lack the functionality they need or official processes are slow, and recommends addressing those root causes and making it easier to request new services, rather than treating the behaviour as a disciplinary matter.

**Realisation prompt:** if each workaround in your business were a written request to improve a system, how long would the list be, and how many would already have been approved?

## Identification

This is a pattern of local problem-solving with no improvement channel. The visible symptom is a growing set of spreadsheets, lists, macros and habits around the official systems. The common assumption is that staff are resisting the system or creating unnecessary complexity. The structural cause is that the business has no fast, credible route for frontline problems to reach someone who can change the process or system, so problems are absorbed locally instead of being fixed at source.

Several published Patterns describe what workarounds become over time. [When manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/) covers the unofficial process that grows beside the official one, and [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/) covers the risk once a workaround becomes essential. This Pattern is about why workarounds keep being built in the first place, and what that says about how improvement happens in the business.

## Diagnosis

- **There is no front door for improvement.** Staff do not know where to raise a process or system problem, or have learned that raising one leads nowhere.
- **The cost of asking exceeds the cost of building.** Small changes need large approvals, so a quick local fix always wins.
- **Nobody owns the systems from a business point of view.** IT keeps systems running; no one is responsible for making them fit how work is done. The Insight [why business systems need ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/) discusses this gap.
- **Workarounds are invisible to management.** They live on desktops and in personal folders, so leaders do not see how much of the operation depends on them.
- **Problems are solved at the symptom.** The workaround deals with the immediate pain, so the underlying cause, such as a missing field or a broken integration, is never investigated.

Lean practice offers a simple discipline for that last point. The 5 whys, as the Lean Enterprise Institute describes it, means asking why repeatedly when a problem occurs, to get past the obvious symptom to the root cause. A workaround is usually the answer to the first why. The fix lies three or four whys further down.

## Commercial impact

The commercial value at stake is productivity, resilience, data quality, risk and the return on existing systems.

Each workaround carries an ongoing cost in time to maintain, reconcile and explain. Together they make the operation fragile: when the person who built a spreadsheet leaves, the knowledge of what it does leaves too. Data held outside the systems is often duplicated, inconsistent or out of date, and decisions based on it inherit those flaws. Licensed systems deliver less than they could, because the improvements that would have been made to them were spent on spreadsheets instead.

There is a cultural cost as well. When people learn that the only way to solve a problem is to build around it, they stop expecting the business's systems to improve, and the gap between official and actual process widens every year.

## Common misidentification

The usual response is to ban workarounds or insist that everything goes into the official system. Without fixing the underlying gaps, that leaves teams unable to do their jobs, or drives the workarounds further out of sight.

The other response is a large replacement project, on the assumption that a new system will remove the need for workarounds. Without a channel for continuous improvement, the new system soon gathers its own layer of spreadsheets.

## Possibility

In a better state, workarounds are treated as evidence. The business keeps a simple, visible list of process and system problems raised by staff, reviewed regularly by someone with the authority and budget to act. Small changes, such as adding a field, adjusting a report or automating a reminder, are made quickly. Larger ones are prioritised against their business value. When a problem is fixed at source, the workaround is retired.

This is the essence of kaizen, which the Lean Enterprise Institute describes as continuous improvement through small, incremental changes to processes and systems, with everyone in the organisation involved. The people who build workarounds are already doing the first half of kaizen: spotting a problem and caring enough to solve it. The business only needs to give them the second half: a way to solve it properly.

For the freight forwarder, that might mean reviewing the four spreadsheets with the operations team, configuring the shipment system to hold client-specific rules and disbursements, building an exceptions view, and keeping a standing monthly session for new requests.

## Intervention

1. **Find the workarounds.** Ask each team, without blame, to show the spreadsheets, lists, macros and habits they use alongside the official systems.
2. **Translate each into a requirement.** For every workaround, write down the need it meets and what the system or process would have to do to meet it directly.
3. **Ask why until the cause appears.** Use the 5 whys to find whether the root cause is a missing field, a broken integration, an unclear rule or a training gap.
4. **Create an improvement channel.** Set up a single place to raise process and system problems, an owner who reviews them, and a promise of a response within a defined time.
5. **Fix quickly, then retire.** Make small changes fast, and retire each workaround once its need is met. The Insight [how to decide what technology problem to solve first](/insights/how-to-decide-what-technology-problem-to-solve-first/) helps prioritise the larger ones.
6. **Report the trend.** Track how many workarounds exist and how many were retired each quarter.

## Diagnostic questions

- How many spreadsheets, lists or macros does each team use alongside the official systems?
- Where would a staff member go today to ask for a small system change, and how long would it take?
- Which workarounds would stop working if the person who built them left?
- Has any workaround been retired in the past year because the underlying system was fixed?
- Who in the business is responsible for making systems fit the way work is actually done?

## Bottom line

Teams keep building manual workarounds because it is faster to solve a problem locally than to get it fixed at source. Each workaround is a signal of a gap in a system or process. A business that treats those signals as requirements, gives staff a credible channel for improvement and retires workarounds as gaps are closed turns local ingenuity into lasting improvement, and gets more value from the systems it already pays for.
