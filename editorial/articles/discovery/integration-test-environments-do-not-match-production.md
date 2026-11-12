---
hub: discovery
record_id: DISC-289
slug: integration-test-environments-do-not-match-production
title: Why integrations pass testing and then fail in production
description: When test environments use different versions, stubs or sandboxes from production, integrations pass testing and fail on go-live. How to close the gap without cloning everything.
lead: When test environments use different versions, stubs or sandboxes from production, integrations pass testing and fail on go-live. How to close the gap without cloning everything.
category: Integration & API Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: IT manager or integration lead responsible for releases, with the business owner of the affected process
budget_owner: Chief operating officer or the sponsor of the system change programme
sources:
  - The Twelve-Factor App | https://12factor.net/dev-prod-parity
  - Contract Test | https://martinfowler.com/bliki/ContractTest.html
  - Sandboxes | https://docs.stripe.com/sandboxes
related:
  - Why manual file transfers survive inside otherwise automated processes | /discovery/manual-file-transfers-inside-automated-processes/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
  - Why Critical Integrations Need a Named Operational Owner | /discovery/why-critical-integrations-need-a-named-operational-owner/
summary: When test environments use different versions, stubs or sandboxes from production, integrations pass testing and fail on go-live. How to close the gap without cloning everything.
layout: plain
---
The new e-commerce platform was tested for six weeks. Orders flowed to the ERP, stock levels flowed back, payments reconciled. On go-live morning the ERP rejected a third of the orders. The test ERP was a copy taken eight months earlier, before a tax-code change and two new warehouses. Nothing in the integration was wrong. The environment it was tested against was.

This is a common reason why integration projects slip at the last moment. The integration is tested carefully, but against systems that do not behave like the ones it will meet in production.

## The problem in plain language

Every integration depends on other things: the systems at each end, their versions and configuration, reference data such as product codes and tax rates, network rules, credentials and the volume of traffic. A test environment is supposed to stand in for all of that. In practice, the stand-ins drift. Typical gaps include:

- a test copy of the ERP or CRM that is months out of date in configuration and master data;
- a supplier's sandbox that accepts requests production would reject, or skips steps production performs;
- a mocked service that returns the responses developers expected, not the ones the real service sends;
- different versions of databases, connectors or middleware in test and production;
- firewall rules, certificates and authentication set up differently.

Tests pass. The integration is approved. The first real transaction finds the difference.

## What the buyer is actually trying to solve

People search for why an integration works in test but not in production, how to set up a realistic test environment, or why go-lives keep needing emergency fixes. Project sponsors describe it as "testing didn't catch it". What they want is confidence that a passed test means something, at a cost proportionate to the risk, and an honest view of which differences between test and production they are accepting.

## Evidence and system mechanism

### Small differences in dependencies cause real failures

The [twelve-factor guidance on dev/prod parity](https://12factor.net/dev-prod-parity) identifies three gaps between development and production: time, personnel and tools. It warns specifically against using different backing services, such as databases or queues, in development and production, because small incompatibilities cause code that passed testing to fail in production. The same reasoning applies to the business systems an integration talks to.

### Test doubles go stale unless something checks them

Teams often replace real services with stubs or mocks so tests run quickly and reliably. Martin Fowler's description of [contract tests](https://martinfowler.com/bliki/ContractTest.html) explains the risk: if the external service changes, the test double may no longer represent it, and nobody notices. A contract test runs periodically against the real service to confirm that the double still returns what the real service would. Without that, a mock records what the service did when it was written, not what it does now.

### Vendor sandboxes are deliberately different

Supplier sandboxes are valuable, but they are not production. Stripe's documentation on [sandboxes](https://docs.stripe.com/sandboxes) notes, for example, that payments created in a sandbox are not processed by card networks or payment providers, and lists features that cannot be tested there. That is sensible design for a payment provider. It also means that some failure modes, such as a real bank declining or delaying a payment, will only be met in production unless the test plan simulates them on purpose.

## Problem owner and why-now trigger

The IT manager or integration lead usually owns the test environments and releases. The business owner of the process, such as the head of sales operations or the financial controller, carries the consequence when a go-live fails. Budget typically sits with the chief operating officer or the sponsor of the change programme.

Mergers and system consolidations are a strong trigger. Two businesses combining their ERPs, CRMs or payroll systems need to test integrations against a target environment that may not fully exist yet, built from data that is still being cleaned. Other triggers include replacing a core system, moving to cloud versions of on-premises applications, and onboarding a large customer or supplier whose systems must be connected by a fixed date.

## Economic consequence

- **Failed or rolled-back go-lives.** Staff, partners and customers are lined up for a change that then has to be reversed or patched under pressure.
- **Manual workarounds after launch.** Rejected transactions are re-keyed or fixed by hand while the integration is corrected.
- **Lost trust in testing.** When tests do not predict production, teams add long manual checks before each release, which slows every later change.
- **Hidden project overruns.** Time spent diagnosing environment differences is rarely budgeted, and often lands on the integration line, a pattern explained in [integration costs hidden inside application projects](/discovery/integration-costs-hidden-inside-application-projects/).

## Root cause

- **Environments refreshed rarely or never.** Configuration and reference data in test drift away from production.
- **No inventory of dependencies.** Nobody has listed what the integration relies on, so nobody can compare test and production.
- **Over-reliance on mocks and sandboxes.** They are treated as equivalent to the real service rather than as approximations with known gaps.
- **Cost pressure.** Full production copies of licensed systems are expensive, so test environments are cut back without deciding which differences matter.
- **Configuration managed by hand.** Settings are changed directly in production and not repeated in test.

## Practical intervention

1. **List the dependencies.** For each critical integration, record the systems, versions, reference data, credentials, network paths and volumes it depends on.
2. **Compare test with production, line by line.** Mark each dependency as matching, approximated or missing. This list is the honest statement of what testing can and cannot prove.
3. **Refresh what matters.** Bring configuration and reference data, such as tax codes, product codes, price lists and warehouse codes, into line with production on a schedule and before major releases, masking personal information where it is copied.
4. **Keep test doubles honest.** Add contract tests that run against real or provider-maintained services, so stubs are corrected when the real interface changes.
5. **Test the failure cases deliberately.** Simulate declines, timeouts, duplicates and rate limits that sandboxes do not produce on their own. The production side of rate limits is covered in [why API rate limits create intermittent business failures](/discovery/why-api-rate-limits-create-intermittent-business-failures/).
6. **Manage configuration as a record.** Changes to integration settings are logged and applied to every environment, not only production.
7. **Plan a controlled first day.** Where gaps remain, go live with limited volume, close monitoring and a tested rollback.

### Trade-offs

Perfect parity is rarely affordable for a mid-sized business. The goal is to know which differences exist and to close the ones that have caused, or could cause, material failures.

### An illustrative example

Illustrative: a Durban manufacturer with about 200 staff was connecting a newly acquired distributor's order system to its own ERP. Integration tests used a stubbed ERP response written at the start of the project. By go-live, the ERP team had added a mandatory customer-region field. Every order failed validation. After the fix, the business added a weekly contract test against the ERP test instance, refreshed ERP configuration in test before each release, and kept a short written list of known differences between test and production for sign-off.

## Diagnostic questions

- When was your integration test environment last refreshed from production configuration?
- Can you list every system and dataset your most important integration depends on?
- Which of your tests use stubs or sandboxes, and how would you know if they no longer match the real service?
- Have your last three go-lives needed urgent fixes for issues testing did not catch?
- Does release sign-off include a statement of known test and production differences?

## What good looks like

Each critical integration has a dependency list and a written comparison of test and production. Configuration and reference data are refreshed on a schedule. Stubs are checked by contract tests. Failure scenarios are tested on purpose. Go-live plans account for the remaining gaps. When the real systems change after launch, monitoring and change notices catch it, as discussed in [APIs that change without downstream teams being warned](/discovery/apis-change-without-downstream-teams-being-warned/).

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work includes mapping integration dependencies, setting up representative test data and configuration, adding contract checks and planning controlled go-lives. For businesses combining systems after a merger, a [digital systems architecture roadmap](/services/digital-systems-architecture-roadmap/) helps sequence which integrations to test and move first.

## Method note

Product behaviours are described from current vendor and practitioner documentation and differ between tools. The example is illustrative, not a client case. Test environments always differ from production in some way; the aim is to make those differences known and deliberate.
