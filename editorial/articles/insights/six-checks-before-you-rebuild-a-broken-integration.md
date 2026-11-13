---
hub: insights
record_id: INS-072
slug: six-checks-before-you-rebuild-a-broken-integration
title: What to check before rebuilding a broken integration
description: A rebuild often repeats the fault in newer code. Six checks tell a supplier change, bad data or missing owner from a failed design.
lead: A rebuild often repeats the fault in newer code. Six checks that separate a changed supplier, bad source data or a missing owner from a genuinely failed design, and a staged route when replacement is justified.
category: Systems Integration
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Systems Integration
sources:
  - Strangler Fig Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Tolerant Reader | https://martinfowler.com/bliki/TolerantReader.html
related:
  - How integration errors turn into customer problems | /insights/from-rejected-message-to-unhappy-customer-how-integration-errors-reach-customers/
  - How to design integrations for change, not just for launch | /insights/how-to-design-integrations-that-survive-supplier-and-business-change/
  - Batch sync vs real-time sync: Which does the business actually need? | /insights/batch-or-real-time-sync-how-fast-does-each-data-flow-need-to-be/
summary: A rebuild often repeats the fault in newer code. Six checks that separate a changed supplier, bad source data or a missing owner from a genuinely failed design, and a staged route when replacement is justified.
layout: plain
---
When an integration keeps failing, the temptation is to start again. The old connection is a patchwork, nobody remembers who built it, and a clean rebuild promises relief. Sometimes that is exactly right. More often, a rebuild reproduces the same failures in newer code, because the cause was never in the connection itself. It was in an unclear business rule, a supplier change nobody tracked, a data problem upstream, or a missing owner. The new version then breaks in the same places, at higher cost.

A short, disciplined investigation before any rebuild is one of the cheapest pieces of work in a systems budget. This article sets out what to check, in what order, and how to decide between repairing, replacing in stages and rebuilding outright.

## Start by describing the failure precisely

"The integration is broken" is not a diagnosis. Before anyone touches code, write down what is actually going wrong, in terms of business outcomes and evidence:

- What should happen, and what happens instead?
- Is the failure constant, intermittent or tied to certain records, times or volumes?
- When did it start, and what changed around then on either side?
- How many records or transactions are affected, and who notices?

The "when did it start" question is the most revealing. A failure that began on a particular date usually has a particular cause: a supplier update, a new product line, a changed password, a certificate or licence that expired. A failure that has crept in gradually points to growth in volume or to data quality problems. The reasons that connections fail after seeming to work are catalogued in [why integrations break after they seem to be working](/insights/why-integrations-break-after-they-seem-to-be-working/).

## Check six things before deciding to rebuild

### 1. Has anything changed on either side?

Ask both suppliers, and your own team, what changed in the weeks before the failure began. Look for software updates, renamed or removed fields, new required values, changed access credentials, new security settings and changes to business rules such as tax treatment or pricing. Many "broken" integrations are working exactly as designed against a world that has since moved. A repair of one mapping may be all that is needed. Where this happens repeatedly, the underlying design is probably not tolerant of change; Martin Fowler's Tolerant Reader pattern describes the remedy of reading only what you need and ignoring what you do not recognise, so that providers can add fields without breaking consumers.

### 2. Is the data going in correct?

A connection can only move what it is given. Missing customer numbers, free-text addresses where a code is expected, duplicate records and inconsistent product names all cause rejections that look like integration faults. Take a sample of failed records and trace each back to its origin. If most of the failures originate in poor capture at the source, rebuilding the connection will fix nothing, and the better investment is in validation at the point of entry. See [poor data is an operations problem, not just a data problem](/insights/poor-data-is-an-operations-problem-not-just-a-data-problem/).

### 3. Do we know what the integration is meant to do?

Many old integrations are undocumented. The person who built them has left, and the only specification is the behaviour that people have got used to. If you rebuild without recovering that specification, you will lose behaviours that staff depend on without realising it: a rule that skips certain accounts, a status that is set by hand afterwards, a report that relies on a particular format. Recover the intended behaviour first, by reading the configuration, interviewing the people who use the output and testing with real examples. The method for mapping flows is set out in [how to map the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/).

### 4. Where exactly is the fault?

A chain of systems has many places to fail: the sending system, the transport, the transformation, the receiving system, the credentials in between. Isolate the failing link before judging the whole chain. Send a test record through, check logs on each side, and see how far it travels. Where several suppliers are involved, this can be slow, as described in [why integration incidents require several vendors to diagnose](/discovery/why-integration-incidents-require-several-vendors-to-diagnose/). A written trace of where a record stops is the best evidence to hand to any supplier and prevents each of them pointing at the other.

### 5. Who owns it, and what does it cost to keep?

A connection with no named owner will break again regardless of how it is rebuilt, because nobody is watching it or maintaining it. Check who is accountable, whether there is any maintenance budget, and what the connection currently costs in support time, manual workarounds and errors. These figures are the basis for deciding whether a rebuild pays for itself. The ownership question is covered in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

### 6. Can we limit the blast radius while we decide?

While the investigation proceeds, put in place a stopgap: a manual check of the failed records each morning, an alert on the failure condition, or a temporary manual route for the affected transactions. This reduces customer impact and, importantly, removes the pressure to commit to a rebuild just to make the pain stop.

## Repair, replace in stages or rebuild

Once these checks are done, the choice usually becomes clearer. Three outcomes are common.

| Finding | Usual response |
| --- | --- |
| A specific change caused the failure and the design is otherwise sound | Repair the mapping or credentials, add a test, and document it |
| The data at source is poor | Fix validation and clean-up first; leave the connection alone |
| The design is fragile, undocumented or unsupported, and the business depends on it | Replace it, preferably in stages |

A full rebuild is the right answer less often than it feels. It is warranted when the technology is unsupported, when the connection cannot be changed safely, or when the business has changed so much that the original design no longer fits. Even then, there is a safer way to proceed than switching everything at once.

## Replace in stages

Microsoft's description of the [Strangler Fig pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig) offers a model. Instead of replacing a legacy system in one move, you introduce a layer in front of it that routes requests either to the old component or to the new, and you move functionality across piece by piece. Customers continue to use the same interface and are unaware that a migration is in progress, and the old system is retired only when nothing depends on it. The guidance also warns of the costs: the routing layer must not become a single point of failure, shared data stores must be accessible to both systems at once, and the approach may not suit a small system that can simply be replaced outright.

For an integration, this might mean rebuilding the order flow first, leaving invoice and stock flows on the old connection until the new one has proved itself. The anti-corruption layer pattern, described in the same body of guidance, helps here. It places a translating layer between the old and new systems so that each can keep its own data model during the transition. Both patterns carry added effort, but both give the business a way back if the new connection misbehaves.

## An illustrative example

Imagine a hypothetical Stellenbosch wine merchant whose connection between its online shop and its stock system had begun rejecting around one in ten orders. The owner was ready to commission a rebuild. The investigation found the failures started on the same day the stock system was updated, that every rejected order contained a product with a hyphen in its code, and that those codes had been entered inconsistently for years.

The connection itself was fine. A one-line change to how codes were read, plus clean-up of about two hundred product codes and a validation rule in the shop, resolved the problem in a week. The merchant also gave the connection an owner and a monthly test order. The rebuild, which would have inherited the same dirty product codes, was never needed.

## Before you sign off a rebuild

Ask for a short written statement covering the cause of the current failures, how the rebuild addresses each one, what the connection is meant to do, who will own it, and how it will be tested and monitored. If those answers cannot be given, the rebuild is not yet ready to start. If you do need specialist help scoping the work, the [systems implementation and integration service](/services/systems-implementation-integration/) covers this kind of assessment. Whichever route you take, a few days of investigation are almost always cheaper than the first month of a rebuild that fixes the wrong thing.
