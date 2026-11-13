---
hub: impact
record_id: CPS-093
slug: custom-integrations-constantly-need-repair-poorly-designed-connections-cost
title: The Integration That Is Always Being Fixed: Paying for Poorly Designed Connections
description: Some custom integrations need a developer every few weeks. The repair invoices are only part of the cost; the rest is stalled work, data fixes and a supplier relationship built on breakdowns.
lead: Some custom integrations need a developer every few weeks. The repair invoices are only part of the cost; the rest is stalled work, data fixes and a supplier relationship built on breakdowns.
category: Automation and Integration
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Automation and Integration
commercial_domain: Automation and Integration
primary_pain: Custom integrations between business systems constantly break and need paid repair
primary_cost_mechanism: Recurring developer repair and call-out fees, stalled orders and invoices during failures, duplicate and missing record clean-up, staff double-checking output, and delayed improvements built on an unreliable connection
sources:
  - https://shopify.dev/docs/api/usage/versioning | https://shopify.dev/docs/api/usage/versioning
  - https://docs.stripe.com/api/versioning | https://docs.stripe.com/api/versioning
summary: Some custom integrations need a developer every few weeks. The repair invoices are only part of the cost; the rest is stalled work, data fixes and a supplier relationship built on breakdowns.
layout: plain
---
## The monthly call to the developer

A specialist retailer in Johannesburg paid a developer to connect its online shop to its stock and accounting system. The project took three months and cost more than planned, but it worked. Since then, it has broken roughly every six weeks. Sometimes orders stop flowing. Sometimes stock levels on the website go wrong. Sometimes invoices are created twice. Each time, the developer is called, finds the cause and fixes it. Each fix is billed. After two years, the business has spent more on repairs than on the original build, and nobody is confident it will not break again next month.

This is a common situation. The business is not paying for an integration; it is paying for an ongoing repair service attached to one.

## Why some integrations keep breaking

Integrations rarely fail at random. Repeated failures usually trace back to a small number of design choices:

- **No allowance for change.** Software platforms change their interfaces regularly. Shopify's documentation on [API versioning](https://shopify.dev/docs/api/usage/versioning) explains that it releases a new API version every three months and supports each stable version for a minimum of 12 months. An integration built against one version and never maintained will eventually be served by a newer one, and anything that relied on retired behaviour can break.
- **Major changes not tracked.** Stripe's [versioning documentation](https://docs.stripe.com/api/versioning) describes monthly releases without breaking changes and twice-yearly major releases that start with a version containing breaking changes, and advises testing a new version before upgrading. An integration whose owner does not follow these release cycles is exposed to each major change.
- **Brittle assumptions.** Code that expects a field to always be present, a list to have a fixed length or a product code to follow a set format breaks the first time the data is different.
- **No handling of failure.** If a transfer fails halfway, a poorly designed integration either stops silently or retries in a way that creates duplicates.
- **Business rules buried in code.** Pricing, tax or stock rules written directly into the integration have to be changed by a developer every time the business changes them.
- **No monitoring.** Problems are found by staff or customers, so every failure becomes an urgent call.

## The full cost of constant repair

### Repair invoices

The visible cost is the developer's time. The following figures are illustrative. If an integration breaks eight times a year and each repair takes five hours at R750 an hour, that is R30,000 a year in repair fees. Urgent call-outs are often charged at higher rates.

### Stalled operations

While the integration is broken, orders, invoices or stock updates do not move. Staff either wait or work around the problem by hand. If each failure stalls a process for a day and costs eight hours of staff time to work around and catch up, that is another 64 hours a year.

### Data clean-up

Failures often leave damage: duplicate invoices, missing orders, wrong stock levels. Finding and fixing those records can take longer than repairing the code. The guide on [designing retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/) explains how this damage arises.

### Lost confidence and opportunity

Once an integration is known to be unreliable, staff double-check its output, and the business hesitates to build on it. Improvements that depend on the connection are delayed. The cost of [paying consultants to maintain unnecessary complexity](/impact/paying-consultants-to-maintain-unnecessary-software-complexity-recurring-cost/) often grows from exactly this kind of fragile foundation.

## Repair or rebuild?

Not every troublesome integration needs to be replaced. The decision depends on why it fails. If failures come from a small number of fixable causes, such as missing error handling, no monitoring or an outdated API version, a focused remediation is usually cheaper than a rebuild. If failures come from the basic design, such as business rules tangled into code, no clear data ownership or a point-to-point web of connections, repairs will keep coming. The guide [six checks before you rebuild a broken integration](/insights/six-checks-before-you-rebuild-a-broken-integration/) sets out a sensible decision process.

Often there is a third option. Many platforms now offer standard connectors, maintained by the vendor, for common combinations such as shop to accounting or CRM to invoicing. A standard connector that covers most of the requirement, with a small amount of custom logic, can be cheaper to own than a fully custom build, because the vendor carries the work of keeping up with interface changes.

## What a well-designed integration includes

- A named owner and a maintenance arrangement that includes tracking platform version changes.
- Error handling that records failures, retries safely and alerts a person.
- Configuration for business rules, so changing a price rule does not need a developer.
- Documentation of data flows, mappings and dependencies.
- A test routine that can be run before platform upgrades.

None of these features is exotic. They are standard practice in well-run software teams. They are often left out of small integration projects because the quote was competitive and the customer asked only for data to move from one place to another. When commissioning or re-commissioning an integration, asking for each item explicitly, and asking how it will be maintained over the next two years, changes the conversation from build price to cost of ownership.

## Practical next actions

1. **Log every failure for six months.** Record the date, symptom, root cause, repair time, repair cost and operational impact.
2. **Group the root causes.** Separate interface changes, data assumptions, missing error handling and business rule changes.
3. **Calculate the annual cost of ownership.** Add repair fees, staff workaround time and data clean-up, and compare it with the original build cost.
4. **Check which platform versions the integration uses.** Confirm they are still supported and when they will be retired.
5. **Price three options.** Targeted remediation, a standard vendor connector, and a redesigned integration with monitoring and configuration.
6. **Move to a maintenance agreement, not call-outs.** Agree a fixed scope that includes version tracking, monitoring and a monthly health check.

An integration that needs constant repair is not cheap just because each fix is small. Added up over a year, repairs, workarounds and clean-up can exceed the cost of building the connection properly, and they bring no improvement with them.
