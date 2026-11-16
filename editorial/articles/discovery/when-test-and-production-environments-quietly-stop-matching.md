---
hub: discovery
record_id: DISC-310
slug: when-test-and-production-environments-quietly-stop-matching
title: When test and production environments quietly stop matching
description: Changes tested in staging behave differently in production because the two environments no longer share the same configuration. Why environments drift apart and how to prove they match when a compliance review asks.
lead: Changes tested in staging behave differently in production because the two environments no longer share the same configuration. Why environments drift apart and how to prove they match when a compliance review asks.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: Infrastructure or cloud platform lead
budget_owner: CIO, CTO or CFO
sources:
  - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html | https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html
  - https://developer.hashicorp.com/terraform/tutorials/state/resource-drift | https://developer.hashicorp.com/terraform/tutorials/state/resource-drift
  - https://csrc.nist.gov/glossary/term/baseline_configuration | https://csrc.nist.gov/glossary/term/baseline_configuration
summary: Changes tested in staging behave differently in production because the two environments no longer share the same configuration. Why environments drift apart and how to prove they match when a compliance review asks.
layout: plain
---
A Cape Town insurance administrator releases a change to its policy portal every second Thursday. The change passes every test in staging. In production, the first customer who uploads a claim document gets an error, because the production storage service has a stricter file size limit that someone set during an incident a year ago. Staging never received that setting. Rolling back takes two hours. A month later, an auditor asks the business to show that its tested environment represents production, and nobody can produce a list of the differences.

## The problem in plain language

Most businesses that build or run their own software keep more than one environment: a development area, a test or staging environment and production. The value of the non-production environments depends on one assumption: that they behave like production. Over time that assumption weakens. Production is patched during an incident, a firewall rule is added for a new supplier, a database setting is tuned for performance, and the same change is never made in staging. Meanwhile, test environments collect their own changes for experiments. Each difference is small. Together they mean that a passed test no longer predicts what will happen in production.

## What the buyer is actually trying to solve

The infrastructure or cloud platform lead asking about this wants to know three things. Where do our environments differ today? Which of those differences are intentional, such as smaller server sizes or masked data, and which are accidents? And how do we keep them aligned without a monthly manual comparison? When a compliance requirement arrives, a fourth question is added: how do we prove it?

## Evidence and system mechanism

### Configuration changes outside the template are expected, not rare

Cloud vendors document drift as a normal operating condition. Amazon's documentation on [drift detection in CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html) says that even when resources are managed through templates, users can change them directly through the underlying service, sometimes by accident and sometimes deliberately to respond to time-sensitive operational events. Drift detection compares the expected property values in the template with the actual values and flags resources as modified or deleted. The same page notes limits: only explicitly set properties are checked, some resource types are not checked at all, and some results can be false positives.

### Infrastructure-as-code tools can report drift without changing anything

HashiCorp's tutorial on [managing resource drift](https://developer.hashicorp.com/terraform/tutorials/state/resource-drift) explains that drift occurs when real infrastructure no longer matches the state Terraform tracks, often because of manual changes. A refresh-only plan reports those changes without proposing to alter infrastructure, which lets a team see drift before deciding whether to accept it into the code or reverse it. Running the same comparison for each environment gives a factual picture of how far each has moved from its definition.

### A baseline is the reference point

NIST defines a [baseline configuration](https://csrc.nist.gov/glossary/term/baseline_configuration) as a documented set of specifications that has been formally reviewed and agreed at a point in time, can only be changed through change control, and serves as the basis for future builds, releases or changes. Applied to environments, the point is simple: production and its test copies should be derived from the same agreed baseline, with any intended differences written down.

## Why this becomes urgent

A new compliance requirement is a common trigger. Customer contracts, regulator expectations or a certification project may require the business to show that changes are tested in a representative environment before release. Teams then discover they cannot list the differences between environments, let alone justify them. Other triggers include a failed release traced to an environment difference, a cloud migration that rebuilt production but not test, and a new team taking over a platform it did not build.

## Economic consequence

Drift turns testing into a partial guarantee. Defects escape to production, where they affect customers and take longer to fix. Release confidence falls, so teams add manual checks and slow their delivery. Engineers spend hours comparing settings by hand during incidents. When an auditor or customer asks for evidence, preparing it becomes a project of its own, and findings may require remediation work under time pressure. There is also a quieter cost: the money spent running non-production environments buys less assurance than the business assumes.

## Root cause

- **Environments built separately.** Production and test were set up at different times, by different people, from different scripts or by hand.
- **Emergency fixes not carried back.** Changes made in production during incidents are not applied to the definitions or to other environments.
- **Intended differences undocumented.** Smaller sizes and masked data are mixed up with accidental differences, so nobody can tell which matter.
- **No routine comparison.** Drift is found only when something fails.
- **Ownership split by environment.** One team owns production and another owns test, with nobody responsible for parity.

## What good looks like

All environments are built from one set of definitions, with differences such as size, scale and data handled as parameters rather than separate builds. A short register lists every intended difference and why it exists. Drift detection runs on a schedule in each environment, and findings go to a named owner who decides whether to codify or reverse the change. Emergency changes in production carry a follow-up task to update the definitions within an agreed period. Release records show which baseline version was tested and which was deployed, which gives auditors the evidence they ask for without a special exercise.

This sits next to related problems: [manual changes bypassing infrastructure as code](/discovery/manual-changes-bypass-infrastructure-as-code/), [integration test environments that do not match production](/discovery/integration-test-environments-do-not-match-production/) and [recovery environments drifting away from production](/discovery/why-recovery-environments-quietly-drift-away-from-production/). Here the focus is the everyday delivery path from test to live.

## Diagnostic questions

- Can you produce a list of configuration differences between staging and production today?
- Which of those differences are documented as intentional?
- When were production emergency changes last carried back to the environment definitions?
- How many releases in the past year failed because of an environment difference?
- Who is responsible for keeping environments aligned?

## Practical next actions

1. Run a drift report against each environment's definitions and compare the results side by side.
2. Classify every difference as intended or accidental, and record the intended ones in a short register with a reason.
3. Move environment differences into parameters of one shared definition rather than separate scripts.
4. Schedule drift detection and route findings to a named owner with a decision deadline.
5. Add a rule that every emergency production change creates a task to update the definitions and other environments.
6. Record the baseline version tested and deployed for each release, so parity can be evidenced on request.

## Where Mellorca fits

Mellorca helps platform teams consolidate environment definitions, set up drift detection and build the evidence trail that compliance reviews ask for. This work sits within [digital infrastructure](/services/digital-infrastructure/), often starting with a side-by-side drift review of current environments.

## Method note

This article uses AWS CloudFormation and Terraform documentation to explain how drift is detected, and NIST's definition of a baseline configuration. Drift tools have documented limits, so their output needs human review. The opening example is illustrative.
