---
hub: impact
record_id: CPS-094
slug: changing-one-application-breaks-other-processes-undocumented-dependency-cost
title: Change One System, Break Three Others: The Cost of Undocumented Dependencies
description: A routine upgrade to one application stops invoicing, delays dispatch and corrupts a report. When nobody knows what depends on what, every change becomes a gamble paid for in downtime and rework.
lead: A routine upgrade to one application stops invoicing, delays dispatch and corrupts a report. When nobody knows what depends on what, every change becomes a gamble paid for in downtime and rework.
category: Technology Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Technology Operations
commercial_domain: Technology Operations
primary_pain: Changing one application unexpectedly breaks several other processes because nobody knows what depends on it
primary_cost_mechanism: Stopped invoicing and order flow after changes, diagnosis time by staff and developers, clean-up of failed exports and duplicate records, delayed cash collection, and postponed improvements and updates because changes feel unsafe
sources:
  - SP 800-128, Guide for Security-Focused Configuration Management of Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/128/upd1/final
  - Versioning - Stripe API Reference | https://docs.stripe.com/api/versioning
related:
  - When Only Your IT Supplier Knows How Things Work: The Cost of Lock-In | /impact/technology-knowledge-held-only-by-outside-provider-supplier-lock-in-cost/
  - Local Administrator Rights Nobody Reviewed: The Cost of Unmanaged Devices | /impact/local-administrator-rights-unneeded-unmanaged-device-changes-support-security-cost/
  - A Recovery Plan That Depends on One Person Is Not a Plan | /impact/recovery-plan-depends-on-one-employee-unavailable-person-financial-risk/
summary: A routine upgrade to one application stops invoicing, delays dispatch and corrupts a report. When nobody knows what depends on what, every change becomes a gamble paid for in downtime and rework.
layout: plain
---
## The upgrade that was supposed to be routine

A distribution business in Durban updated its stock management application on a Friday afternoon. The vendor had announced the release weeks earlier and the change notes looked harmless: a new field layout, a renamed product category and a faster search. By Monday morning, the online shop was showing items as out of stock, the nightly invoice export to the accounting package had failed without any warning, and the sales manager's weekly margin report was blank. None of these processes lived inside the stock application. All of them quietly relied on it.

Nobody had made a mistake in the usual sense. The upgrade did exactly what the vendor said it would. The problem was that the business did not know which other processes read from that application, in what format, and on what schedule. The cost of that missing knowledge arrived all at once.

## What an undocumented dependency looks like

A dependency exists whenever one process needs another system to behave in a particular way. In growing businesses these links build up gradually and are rarely written down. Common examples include:

- **Scheduled exports** that pick up a file from a fixed folder with a fixed name and a fixed column order.
- **Reports and spreadsheets** that pull data directly from an application's database or from a saved query.
- **Automations and integrations** that expect a field, status or product code to look a certain way.
- **Shared logins and service accounts** that several tools use to reach the same system.
- **Human workarounds**, such as a staff member who copies a figure from one screen to another every morning.

Each link may be sensible on its own. Together they form a web that nobody can see in full. When one strand is changed, the effect travels along routes that were never mapped.

## Why this is a recognised discipline, not bad luck

Larger organisations manage this risk through configuration management. The US National Institute of Standards and Technology describes the practice in its [guide to security-focused configuration management](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) (SP 800-128), which treats a known baseline, controlled change and monitoring as normal parts of running information systems. NIST also defines a [security impact analysis](https://csrc.nist.gov/glossary/term/security_impact_analysis) as an assessment of how a change to a system has affected, or may affect, its security state. The same idea applies to operations: before a change, someone should ask what else it touches.

A small business does not need the full apparatus that a government agency uses. It does need the core habit: know the current configuration, think through the effect of a change before making it, and check afterwards that the things that depend on it still work.

## Where the money goes

The figures below are illustrative. They are a way to estimate your own exposure, not a benchmark.

### Stopped processes

If invoicing stops for two days, cash collection is delayed. For a business that invoices R1.2 million a month, two days of delayed invoices pushes roughly R110,000 of receivables back by the same amount of time, and some customers will pay a full cycle later because their own month-end has passed.

### Diagnosis time

Without a dependency map, finding the cause means testing each symptom separately. If an internal administrator and an outside developer each spend ten hours tracing failures at a combined R900 an hour, a single incident costs R18,000 in investigation before anything is fixed.

### Rework and clean-up

Failed exports and partial imports leave damage behind: duplicated invoices, missing orders, stock levels that no longer match the shelf. Staff then spend days checking and correcting records by hand. The guide on [handling failed integrations without losing work in flight](/insights/how-to-handle-failed-integrations-without-losing-the-work-in-flight/) explains why this clean-up is often slower than the original repair.

### Frozen improvement

The most expensive effect is the slowest. After one or two incidents, managers become reluctant to change anything. Updates are postponed, security patches wait, and useful improvements are shelved because nobody can predict what they will break. The business pays for its systems but stops getting better value from them. The pattern is close to the one described in [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/).

## Why dependencies stay hidden

Most dependencies were created to solve a real problem quickly. A developer added an export to meet a deadline. A manager built a report that has since become the main view of the business. A supplier set up an integration and left. The knowledge sits with whoever built each piece, and when those people move on, the dependency remains but its explanation goes with them. This is closely related to the risk described in the article on [undocumented system connections and individual dependency](/impact/system-connections-undocumented-maintenance-outages-individual-dependency-cost/).

Vendors add to the problem without intending to. Cloud applications change on the vendor's schedule, not yours, and release notes describe the application itself, not the dozen things you have attached to it. Payment provider Stripe, for example, explains in its [API versioning documentation](https://docs.stripe.com/api/versioning) that it releases monthly versions without breaking changes and, twice a year, a major release that begins with breaking changes, and it advises testing a new version before committing to an upgrade. Well-run vendors publish this kind of schedule. The business still has to know which of its own processes would be affected.

## What good practice looks like in a smaller business

- **A simple dependency register.** For each important application, a list of what reads from it, what writes to it, how often, and who owns each connection.
- **A change checklist.** Before an upgrade or configuration change, the register is checked and the owners of affected processes are told.
- **A test after every change.** A short list of checks: did the export run, did the report populate, did the shop update stock.
- **A rollback plan.** Knowing in advance how to undo a change, or how to run the affected process by hand for a day.
- **Monitoring on the critical links.** An alert when an expected file, sync or report does not arrive, rather than discovering it from a customer.

The article on [mapping the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/) offers a practical starting point for the register.

## Practical next actions

1. **List your five most important applications.** Choose the ones that would stop sales, delivery, invoicing or payroll if they failed.
2. **For each, record every inbound and outbound link.** Include exports, integrations, reports, spreadsheets and manual copy steps, and name an owner for each.
3. **Review the last three incidents that followed a change.** Note which dependency broke, how long it took to find and what it cost in staff time and delayed work.
4. **Introduce a one-page change checklist.** Require it for upgrades, field changes, renamed categories and new automations.
5. **Write a post-change test list.** Keep it short enough that someone will actually run it within an hour of each change.
6. **Add alerts to the critical links.** Start with the processes that affect cash: invoicing, payments and order intake.

Undocumented dependencies are not a sign of carelessness. They are the normal result of a business that has grown faster than its records of how its systems fit together. The cost of leaving them hidden is paid at the worst moment, usually after a change that looked routine.
