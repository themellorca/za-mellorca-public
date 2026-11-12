---
hub: discovery
record_id: DISC-314
slug: cloud-accounts-structured-by-history-not-ownership
title: When your cloud accounts reflect history instead of who owns what
description: Cloud accounts and subscriptions often grow one project at a time, so their structure mirrors old decisions rather than today's owners and workloads. Why that blurs cost, access and risk, and how to restructure.
lead: Cloud accounts and subscriptions often grow one project at a time, so their structure mirrors old decisions rather than today's owners and workloads. Why that blurs cost, access and risk, and how to restructure.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or cloud platform lead, with business owners of major workloads
budget_owner: Chief information officer or chief financial officer
sources:
  - Benefits of using multiple AWS accounts - Organizing Your AWS Environment Using Multiple Accounts | https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/benefits-of-using-multiple-aws-accounts.html
  - Subscription considerations and recommendations - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions
  - About resource hierarchy - Resource Manager - Google Cloud Documentation | https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy
related:
  - Why patch exceptions stay open long after anyone remembers the reason | /discovery/patch-exceptions-that-never-expire/
  - When monitoring produces more alerts than your team can triage | /discovery/monitoring-produces-more-alerts-than-teams-can-triage/
  - Why old DNS records pile up after services are retired, and why it matters | /discovery/dns-records-left-behind-after-services-are-retired/
summary: Cloud accounts and subscriptions often grow one project at a time, so their structure mirrors old decisions rather than today's owners and workloads. Why that blurs cost, access and risk, and how to restructure.
layout: plain
---
The company's main cloud subscription is called “Website-Trial-2019”. It was opened by a developer to test a new website, and over six years it has gathered the ERP integration, the data warehouse, three test environments, a supplier's file transfer service and the backups. A second subscription, set up by a former IT manager, holds half of production for reasons nobody remembers. Finance receives one combined bill and cannot say what each department costs. A developer with access to test can also delete production.

Cloud accounts and subscriptions are rarely designed up front. They accumulate, project by project, and their structure records the order in which things happened rather than who is responsible for what today.

## The problem in plain language

In the major cloud platforms, accounts, subscriptions or projects are the containers that hold resources. They set boundaries for billing, access, policies and limits. When those containers follow history instead of ownership, the boundaries fall in the wrong places. Typical signs include:

- account or subscription names that refer to old projects, trials or people;
- production and test workloads mixed in the same container;
- several unrelated business services sharing one account;
- accounts opened on personal email addresses or by suppliers;
- a bill that cannot be split by department, product or customer without manual work.

## What the buyer is actually trying to solve

People search for how to structure cloud accounts, how many subscriptions they should have, how to separate production from development in the cloud, or how to allocate cloud costs to departments. IT managers want safer access boundaries. Finance wants costs by owner. Security wants to limit the damage one mistake or compromise can do. The real need is a structure that reflects today's workloads, environments and owners, and that can change as the business does.

## Evidence and system mechanism

### Accounts should follow business purpose and ownership

AWS's whitepaper on [using multiple AWS accounts](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/benefits-of-using-multiple-aws-accounts.html) recommends grouping workloads with a common business purpose in distinct accounts so that ownership and decision-making align with them. It describes separating production and non-production environments, isolating sensitive data, and limiting the scope of impact from problems such as misconfiguration or malicious activity. It also notes that the account is the default unit for allocating costs, and that service quotas and request limits apply per account.

### Subscriptions are units of management, billing and scale

Microsoft's Cloud Adoption Framework guidance on [subscription design](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions) describes subscriptions as boundaries for scale, quota, cost, governance, security and identity. It recommends treating them as units of management aligned with business needs, informing subscription owners of their responsibilities, including budget and policy compliance, and avoiding a rigid model so the structure can change as the organisation does.

### Resources should belong to the organisation

Google Cloud's documentation on its [resource hierarchy](https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy) explains that an organisation sits above folders and projects, that access and organisation policies flow down the hierarchy, and that the hierarchy ensures resources belong to the organisation rather than to the employees who created them. Projects created outside the organisation can be moved into it.

## Problem owner and why-now trigger

The IT manager or cloud platform lead owns the structure. Business owners of major workloads, such as the finance system owner or the head of e-commerce, should own their accounts or subscriptions, including budget. Budget accountability for the platform sits with the chief information officer or chief financial officer.

Platform growth is the usual trigger: more workloads, more teams and more suppliers make the old structure visibly unworkable. Other triggers include a request from finance to allocate cloud costs, a security incident in which a test credential reached production, an acquisition, or hitting a quota that the whole business shares.

## Economic consequence

- **Unallocated cost.** Spend cannot be traced to owners, so nobody manages it. See [cloud costs without business owner allocation](/impact/cloud-costs-without-business-owner-allocation/).
- **Larger blast radius.** A mistake or compromise in one workload can reach others in the same container.
- **Over-broad access.** People need access to one workload and receive access to all.
- **Shared limits.** Unrelated workloads compete for the same quotas.
- **Exit and acquisition friction.** Separating a business unit or changing a supplier becomes a migration project.
- **Loss of control.** Accounts held on personal or supplier credentials can be lost when people or contracts leave.

## Root cause

- **Organic growth.** Each new project used whatever account already existed.
- **No design owner.** Nobody was responsible for the structure as a whole.
- **Restructuring looks risky.** Moving workloads seems harder than living with the mess.
- **Supplier-led set-up.** Partners created accounts to suit their own delivery.
- **Reliance on tags alone.** Tagging is used to compensate for structure, but tags do not set access or policy boundaries.

Resource-level ownership is covered in [infrastructure resources without a clear business owner](/discovery/infrastructure-resources-without-a-clear-business-owner/), and cost allocation in [why application costs cannot be allocated to business units](/discovery/why-application-costs-cannot-be-allocated-to-business-units/).

## Practical intervention

1. **Map what exists.** List every account, subscription and project, who controls it, what it holds and what it costs.
2. **Bring everything under the organisation.** Move accounts off personal and supplier credentials into a business-owned organisation or tenant.
3. **Design a target structure.** Typically: shared platform accounts for identity, networking, security and logging; then accounts per major workload or owner, split into production and non-production.
4. **Name owners.** Each account or subscription gets a business owner and a technical owner, with budget alerts.
5. **Move in stages.** Start new workloads in the target structure; move existing ones when they are next changed, highest-risk first.
6. **Apply policy at the top.** Use the hierarchy to apply guardrails, so every new account inherits them.
7. **Automate account creation.** A simple request process that creates accounts in the right place stops history repeating.

### Trade-offs

More accounts mean more to manage, and some moves carry migration risk. A small business may need only a handful: shared platform, production and non-production per main workload. Leave stable, low-risk workloads where they are until they next change.

### An illustrative example

Illustrative: a Bloemfontein agricultural supplier with about 150 staff ran everything in two subscriptions created by former staff, one still linked to a personal email address. The team brought both under a company tenant, created separate production and non-production subscriptions for its ERP and online store, and a shared subscription for networking and backups. New projects now start in the right place, and finance receives costs by workload each month.

## Diagnostic questions

- How many cloud accounts or subscriptions do you have, and who controls each?
- Are any held on personal or supplier credentials?
- Do production and test share the same container?
- Can finance see cloud costs by owner without manual work?
- Could someone with test access change production?

## What good looks like

All accounts sit under a business-owned organisation. The structure reflects current workloads, environments and owners, with shared platform services separated out. Each container has named owners and budget alerts. Policies are applied from the top and inherited. New accounts are created through a simple process in the right place, so the structure stays current as the business grows.

## Where Mellorca fits

Mellorca's [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work can design the target structure and staged moves. Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can bring accounts under the organisation, set up guardrails and carry out migrations.

## Method note

Terminology differs across platforms: accounts in AWS, subscriptions in Azure and projects in Google Cloud. Guidance is drawn from each provider's current documentation. The example is illustrative rather than a client case.
