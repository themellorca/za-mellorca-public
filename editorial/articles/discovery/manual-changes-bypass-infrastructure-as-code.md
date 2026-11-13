---
hub: discovery
record_id: DISC-312
slug: manual-changes-bypass-infrastructure-as-code
title: Why manual changes keep bypassing your infrastructure-as-code
description: Quick console fixes make your environment drift away from its infrastructure-as-code. Why it happens, what it costs and how to bring changes back.
lead: Infrastructure-as-code promises a reliable record of your environment, but quick console fixes make reality drift away from the code. Why it happens, what it costs and how to bring changes back through the code.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: Infrastructure or DevOps lead, with the IT manager
budget_owner: Chief information officer or chief technology officer
sources:
  - Manage resource drift - Terraform - HashiCorp Developer | https://developer.hashicorp.com/terraform/tutorials/state/resource-drift
  - Detect unmanaged configuration changes to stacks and resources with drift detection - AWS CloudFormation | https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html
  - Architecture strategies for using infrastructure as code - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/infrastructure-as-code-design
related:
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
  - Infrastructure resources that exist without a clear business owner | /discovery/infrastructure-resources-without-a-clear-business-owner/
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
summary: Infrastructure-as-code promises a reliable record of your environment, but quick console fixes make reality drift away from the code. Why it happens, what it costs and how to bring changes back through the code.
layout: plain
---
At 16:30 on a Friday a customer integration starts timing out. An engineer opens the cloud console, widens a firewall rule and doubles the size of a database, and the problem goes away. The business has used infrastructure-as-code for two years, so all of this is supposed to live in version-controlled templates. Nobody updates them. On Tuesday a routine deployment from the code quietly reverses both changes, the integration fails again, and the cloud bill still shows the larger database for the days in between.

Infrastructure-as-code, often shortened to IaC, describes servers, networks and cloud services in files that are reviewed and deployed like software. Its value depends on one rule: the code is the truth. Every manual change made outside it weakens that rule, until the code describes an environment that no longer exists.

## The problem in plain language

The business has templates or scripts for its infrastructure, but people still make changes directly in consoles, on servers or through support tickets with the cloud provider. The live environment slowly drifts away from what the code says. Typical signs include:

- deployments that fail or unexpectedly change things nobody asked to change;
- engineers reluctant to run the code because they are unsure what it will undo;
- resources in the cloud account that are not in any template;
- “temporary” console fixes that are still in place months later;
- a supplier and an internal team both changing the same environment by different routes.

## What you are actually trying to solve

The questions usually sound like what configuration drift is, how to detect drift in Terraform or CloudFormation, how to stop console changes, or why a deployment reverted a fix. Infrastructure leads want deployments they can trust. IT managers want to know that the environment can be rebuilt after a disaster. Finance wants to know why costs moved when no deployment was approved. The real need is a working arrangement where changes go through code by default, emergencies are allowed but reconciled quickly, and drift is detected rather than discovered.

## Evidence and system mechanism

### Manual changes cause drift by definition

HashiCorp's tutorial on [managing resource drift](https://developer.hashicorp.com/terraform/tutorials/state/resource-drift) states plainly that manual changes should not be made to resources Terraform controls, because the recorded state falls out of step with the real infrastructure. It shows how a refresh-only plan reveals the differences without changing anything, and how to reconcile by updating the configuration to match reality or importing unmanaged resources. Ignoring drift risks resources being unintentionally replaced or destroyed on the next run.

### Out-of-band changes are often deliberate

AWS's documentation on [CloudFormation drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html) notes that users can change resources outside CloudFormation, sometimes by accident and sometimes deliberately to respond to time-sensitive operational events. Either way, such changes complicate later updates. Drift detection compares the template with actual settings and reports which resources have been modified or deleted, though it only checks properties that the template sets explicitly and does not cover every resource type.

### Code should be the only route, with documented exceptions

Microsoft's Azure Well-Architected guidance on [infrastructure as code](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/infrastructure-as-code-design) recommends a strict policy of deploying infrastructure and configuration changes only through code, via deployment pipelines, to minimise drift. It accepts that some manual steps are unavoidable and asks for them to be minimised, standardised and documented, along with a standard way to find and remove orphaned resources.

## Problem owner and why-now trigger

The infrastructure or DevOps lead owns the IaC practice, with the IT manager accountable for change discipline across internal staff and suppliers. Budget typically sits with the chief information officer or chief technology officer.

A cost spike is a frequent trigger: resources resized or created by hand appear on the bill with no matching change in the code. Other triggers include a deployment that undoes a manual fix and causes an outage, a disaster-recovery test that cannot rebuild the environment from code, or onboarding a new supplier who finds the templates out of date.

## Economic consequence

- **Repeat outages.** Deployments reverse undocumented fixes, so the same incident happens twice.
- **Unexplained costs.** Resources created or resized by hand escape review and are often left running. Waste of this kind is discussed in [unused cloud resources](/impact/unused-cloud-resources-financial-waste/).
- **Slower delivery.** Engineers spend time comparing code with reality before every change.
- **Weak recovery.** An environment that cannot be rebuilt from code takes much longer to restore.
- **Lost investment.** The effort spent building IaC delivers less value the more the environment drifts.

## Root cause

- **The code path is slower than the console.** When a pipeline takes an hour and the console takes a minute, urgent changes go to the console.
- **No emergency route.** There is no accepted way to make an urgent change and then bring it back into code.
- **Broad console permissions.** Many people can change production directly.
- **Partial coverage.** Some resources were never brought under code, so people are used to managing them by hand.
- **No drift detection.** Differences are found during deployments rather than before.

The same principle applies to other configuration, as described in [prompt and configuration changes made without version control](/discovery/prompt-and-configuration-changes-made-without-version-control/) and [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/).

## Practical intervention

1. **Measure the drift.** Run drift detection across environments and list every difference and every unmanaged resource.
2. **Reconcile.** For each difference, either update the code to match a change worth keeping or reverse the change. Import resources that should be managed.
3. **Make the code path fast.** Shorten pipelines for small changes and pre-approve common, low-risk ones.
4. **Define a break-glass route.** Allow urgent manual changes through a named role, with a requirement to bring them into code within a set period, such as two working days.
5. **Narrow write access.** Give most people read-only access to production consoles; changes go through the pipeline.
6. **Detect drift on a schedule.** Run drift checks daily or weekly and alert the owner when differences appear.
7. **Include suppliers.** Make code-only change a contract requirement for anyone managing the environment.

### Trade-offs

Locking down consoles too early can slow incident response. Introduce the break-glass route and faster pipelines first, then tighten access once people trust them.

### An illustrative example

Illustrative: a Stellenbosch software company with about 50 staff found that its production environment differed from its templates in more than 30 places, mostly firewall rules and database sizes changed during support calls. After a deployment reverted a fix and caused a customer outage, the team reconciled each difference, introduced a break-glass role with a two-day rule, ran weekly drift checks and cut its pipeline time for small changes. Drift findings fell to a handful a month, each traced to a recorded emergency.

## Diagnostic questions

- If you ran drift detection today, how many differences would it find?
- Who can change production directly in the console?
- How long does it take to make a small change through the code?
- What happens to an emergency manual change after the incident?
- Could you rebuild production from code alone?

## What good looks like

Infrastructure changes go through code by default, through a pipeline fast enough that people prefer it. Emergencies use a defined route and are back in code within days. Drift checks run on a schedule and differences are rare and explained. Direct write access is limited. Suppliers follow the same rules. The code describes the real environment, so deployments are predictable and recovery is credible.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can measure and reconcile drift, set up drift detection and design the break-glass route. Mellorca's [managed digital operations](/services/managed-digital-operations/) service can run scheduled drift checks and keep code and environment aligned.

## Method note

This article draws on current documentation from infrastructure-as-code tool and cloud providers; drift detection coverage differs by tool and resource type. The example is illustrative rather than a client case.
